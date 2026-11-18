import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { transform as esbuildTransform } from 'esbuild';
import { transform as lightningTransform } from 'lightningcss';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKER_POLYFILL_BANNER =
  'if(typeof Promise.withResolvers!=="function"){Promise.withResolvers=function(){var a,b,c=new Promise(function(r,j){a=r;b=j});return{promise:c,resolve:a,reject:b}};}' +
  'if(typeof Object.hasOwn!=="function"){Object.hasOwn=function(o,p){return Object.prototype.hasOwnProperty.call(Object(o),p);};}';

/**
 * Gỡ bỏ khối @layer {...} mà vẫn giữ đúng thứ tự ưu tiên (properties -> theme -> base -> components -> utilities)
 * để Safari trên iPhone 8 / iPhone X / XS Max chạy iOS 13 – 15.3 (chưa hỗ trợ @layer) hiển thị đầy đủ giao diện.
 */
function unwrapCssLayers(css: string): string {
  let out = '';
  let i = 0;
  const n = css.length;

  const skipStringOrComment = (pos: number): number => {
    const ch = css[pos];
    if (ch === '"' || ch === "'") {
      let j = pos + 1;
      while (j < n) {
        if (css[j] === '\\') {
          j += 2;
          continue;
        }
        if (css[j] === ch) return j + 1;
        j++;
      }
      return n;
    }
    if (ch === '/' && css[pos + 1] === '*') {
      const end = css.indexOf('*/', pos + 2);
      return end === -1 ? n : end + 2;
    }
    return pos;
  };

  while (i < n) {
    if (css[i] === '"' || css[i] === "'" || (css[i] === '/' && css[i + 1] === '*')) {
      const next = skipStringOrComment(i);
      out += css.slice(i, next);
      i = next;
      continue;
    }

    if (css.startsWith('@layer', i) && (i + 6 >= n || /[\s,{]/.test(css[i + 6]))) {
      let j = i + 6;
      while (j < n && css[j] !== '{' && css[j] !== ';') {
        if (css[j] === '"' || css[j] === "'" || (css[j] === '/' && css[j + 1] === '*')) {
          j = skipStringOrComment(j);
        } else {
          j++;
        }
      }

      if (j < n && css[j] === ';') {
        // Bỏ qua khai báo danh sách thứ tự @layer a, b, c;
        i = j + 1;
        continue;
      }

      if (j < n && css[j] === '{') {
        // Tìm dấu } đóng của khối @layer hiện tại
        let depth = 1;
        let k = j + 1;
        while (k < n && depth > 0) {
          if (css[k] === '"' || css[k] === "'" || (css[k] === '/' && css[k + 1] === '*')) {
            k = skipStringOrComment(k);
            continue;
          }
          if (css[k] === '{') depth++;
          else if (css[k] === '}') depth--;
          k++;
        }
        const inner = css.slice(j + 1, k - 1);
        out += unwrapCssLayers(inner);
        i = k;
        continue;
      }
    }

    out += css[i];
    i++;
  }

  return out;
}

/**
 * Plugin hậu xử lý CSS & PDF Worker cho iPhone 8, iPhone X, iPhone XS Max -> iPhone 18:
 * - Gỡ @layer (iOS < 15.4)
 * - Biên dịch màu oklch / cú pháp hiện đại sang sRGB & prefix WebKit (-webkit-backdrop-filter) via lightningcss (target iOS 12+)
 * - Bổ sung fallback vh trước dvh cho Safari cũ
 * - Downlevel pdf.worker.min.mjs sang safari13 & chèn polyfill Promise.withResolvers để đọc file PDF mượt trên iPhone 8 / X
 */
function legacyIosCssCompatPlugin(): Plugin {
  return {
    name: 'legacy-ios-css-compat',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_options, bundle) {
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type === 'asset' && fileName.endsWith('.css')) {
          const rawCss =
            typeof asset.source === 'string'
              ? asset.source
              : Buffer.from(asset.source).toString('utf8');
          const unlayered = unwrapCssLayers(rawCss);

          try {
            const transformed = lightningTransform({
              filename: fileName,
              code: Buffer.from(unlayered, 'utf8'),
              minify: true,
              targets: {
                safari: 12 << 16,
                ios_saf: 12 << 16,
              },
            });

            let cssOut = Buffer.from(transformed.code).toString('utf8');
            // Bổ sung fallback vh ngay trước các thuộc tính dùng dvh (trừ trường hợp đã có vh)
            cssOut = cssOut.replace(
              /(min-height|max-height|height):(\d+(?:\.\d+)?)dvh(?=[;}])/g,
              '$1:$2vh;$1:$2dvh'
            );
            asset.source = cssOut;
          } catch (err) {
            console.warn('legacyIosCssCompatPlugin CSS warning:', err);
            asset.source = unlayered;
          }
        } else if (asset.type === 'asset' && fileName.endsWith('.mjs')) {
          const rawJs =
            typeof asset.source === 'string'
              ? asset.source
              : Buffer.from(asset.source).toString('utf8');
          try {
            const transformedJs = await esbuildTransform(rawJs, {
              loader: 'js',
              target: ['es2019', 'safari13'],
              minify: true,
              format: 'esm',
            });
            asset.source = WORKER_POLYFILL_BANNER + transformedJs.code;
          } catch (err) {
            console.warn('legacyIosCssCompatPlugin Worker warning:', err);
            asset.source = WORKER_POLYFILL_BANNER + rawJs;
          }
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    build: {
      target: ['es2019', 'safari13'],
      cssTarget: 'safari13',
      chunkSizeWarningLimit: 2500,
    },
    plugins: [
      react(),
      tailwindcss(),
      legacyIosCssCompatPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: false,
        },
        includeAssets: [
          'icon.svg',
          'apple-touch-icon.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'pwa-maskable-512x512.png',
        ],
        manifest: {
          id: '/',
          name: 'Khảo Thí Toán 10 - Hệ Thống Đánh Giá Năng Lực',
          short_name: 'Toán 10',
          description:
            'Ứng dụng kiểm tra và đánh giá năng lực môn Toán lớp 10 chuẩn cấu trúc 4 phần, hoạt động mượt mà kể cả khi không có Wi-Fi trên iPhone 8, X, XS Max đến iPhone 18 và Android.',
          theme_color: '#040817',
          background_color: '#040817',
          display: 'standalone',
          orientation: 'portrait-primary',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: '/icon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,mjs,css,html,ico,png,svg,woff,woff2,ttf}'],
          maximumFileSizeToCacheInBytes: 12 * 1024 * 1024,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          navigateFallback: '/index.html',
          navigateFallbackDenylist: [/^\/api\//],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 15,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true as const,
      // HMR is disabled in AI Studio to prevent WebSocket connection errors.
      hmr: false,
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
