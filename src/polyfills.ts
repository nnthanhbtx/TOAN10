/**
 * Polyfills cho các trình duyệt Safari/WebKit trên iPhone đời cũ đến mới (iOS 13 – iOS 18+, iPhone 8 / X / XS Max -> iPhone 18)
 * Phải được import đầu tiên trước mọi module khác (đặc biệt là pdfjs-dist và React).
 */

// 1. Promise.withResolvers (ES2024 - chỉ có từ iOS 17.4+, iPhone 8 & X dừng ở iOS 16.7 nên bắt buộc polyfill)
if (typeof Promise !== 'undefined' && typeof (Promise as unknown as { withResolvers?: unknown }).withResolvers !== 'function') {
  (Promise as unknown as {
    withResolvers: <T>() => {
      promise: Promise<T>;
      resolve: (value: T | PromiseLike<T>) => void;
      reject: (reason?: unknown) => void;
    };
  }).withResolvers = function <T>() {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: unknown) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

// 2. Object.hasOwn (ES2022 - thiếu trên iOS < 15.4)
if (typeof Object.hasOwn !== 'function') {
  Object.hasOwn = function (obj: object, prop: PropertyKey): boolean {
    if (obj === null || obj === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    return Object.prototype.hasOwnProperty.call(Object(obj), prop);
  };
}

// 3. Array.prototype.at & String.prototype.at (ES2022 - thiếu trên iOS < 15.4)
if (typeof Array.prototype.at !== 'function') {
  Object.defineProperty(Array.prototype, 'at', {
    value: function <T>(this: T[], n: number): T | undefined {
      const len = this.length;
      const idx = Math.trunc(n) || 0;
      const relative = idx >= 0 ? idx : len + idx;
      if (relative < 0 || relative >= len) return undefined;
      return this[relative];
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

if (typeof String.prototype.at !== 'function') {
  Object.defineProperty(String.prototype, 'at', {
    value: function (this: string, n: number): string | undefined {
      const len = this.length;
      const idx = Math.trunc(n) || 0;
      const relative = idx >= 0 ? idx : len + idx;
      if (relative < 0 || relative >= len) return undefined;
      return this.charAt(relative);
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

// 4. String.prototype.replaceAll (ES2021 - thiếu trên iOS < 13.4)
if (typeof String.prototype.replaceAll !== 'function') {
  Object.defineProperty(String.prototype, 'replaceAll', {
    value: function (
      this: string,
      search: string | RegExp,
      replacement: string | ((substring: string, ...args: unknown[]) => string)
    ): string {
      if (search instanceof RegExp) {
        if (!search.global) {
          throw new TypeError('String.prototype.replaceAll called with a non-global RegExp argument');
        }
        return this.replace(search, replacement as string);
      }
      return this.split(String(search)).join(
        typeof replacement === 'function' ? replacement(String(search)) : String(replacement)
      );
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

// 5. crypto.randomUUID fallback (thiếu trên iOS < 15.4 hoặc context không HTTPS)
if (typeof crypto !== 'undefined' && typeof crypto.randomUUID !== 'function') {
  try {
    Object.defineProperty(crypto, 'randomUUID', {
      value: function (): `${string}-${string}-${string}-${string}-${string}` {
        const bytes = new Uint8Array(16);
        if (typeof crypto.getRandomValues === 'function') {
          crypto.getRandomValues(bytes);
        } else {
          for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
        }
        bytes[6] = (bytes[6] & 0x0f) | 0x40;
        bytes[8] = (bytes[8] & 0x3f) | 0x80;
        const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}` as `${string}-${string}-${string}-${string}-${string}`;
      },
      configurable: true,
    });
  } catch {
    // ignore if frozen
  }
}

export {};
