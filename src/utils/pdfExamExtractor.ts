import * as pdfjsLib from 'pdfjs-dist';
import { normalizeMathExpressionsToLatex } from './mathLatexNormalizer';

// Cấu hình worker cho pdfjs-dist trong Vite
try {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
} catch {
  // Fallback CDN nếu môi trường trình duyệt chặn URL worker cục bộ
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

/**
 * Chuyển ArrayBuffer sang chuỗi Base64
 */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }
  return btoa(binary);
}

/**
 * Trích xuất văn bản trực tiếp từ file PDF ngay trên trình duyệt bằng pdfjs-dist
 * Tự động nhận diện số mũ (superscript) / chỉ số dưới (subscript) qua độ lệch trục Y và cỡ chữ,
 * đồng thời chuẩn hóa các ký hiệu Toán học sang chuẩn LaTeX $...$
 */
export async function extractTextFromPdfLocal(arrayBuffer: ArrayBuffer): Promise<string> {
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const pageTexts: string[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    interface PositionedItem {
      str: string;
      x: number;
      y: number;
      width: number;
      fontSize: number;
    }

    const items: PositionedItem[] = [];
    for (const item of textContent.items as any[]) {
      if (typeof item.str === 'string' && item.str.trim().length > 0 && Array.isArray(item.transform)) {
        const fontSize = Math.abs(item.transform[3] || item.transform[0] || item.height || 11);
        items.push({
          str: item.str,
          x: item.transform[4] || 0,
          y: item.transform[5] || 0,
          width: item.width || item.str.length * (fontSize * 0.5),
          fontSize,
        });
      }
    }

    // Gom các item thuộc cùng 1 dòng vật lý (cho phép sai số +-5.5pt để bắt cả số mũ/chỉ số dưới vào dòng cơ sở)
    const lines: { baseY: number; baseFontSize: number; items: PositionedItem[] }[] = [];
    for (const it of items) {
      const existingLine = lines.find((l) => Math.abs(l.baseY - it.y) <= 5.2);
      if (existingLine) {
        existingLine.items.push(it);
        if (it.fontSize > existingLine.baseFontSize) {
          existingLine.baseFontSize = it.fontSize;
          existingLine.baseY = it.y;
        }
      } else {
        lines.push({ baseY: it.y, baseFontSize: it.fontSize, items: [it] });
      }
    }

    // Sắp xếp các dòng từ trên xuống dưới (Y giảm dần trong hệ tọa độ PDF)
    lines.sort((a, b) => b.baseY - a.baseY);

    const renderedLines = lines.map((line) => {
      line.items.sort((a, b) => a.x - b.x);
      let lineStr = '';
      let prevEnd = -1;

      for (let idx = 0; idx < line.items.length; idx++) {
        const cur = line.items[idx];
        const dy = cur.y - line.baseY;
        const isSmallFont = cur.fontSize < line.baseFontSize * 0.88;
        const gap = prevEnd >= 0 ? cur.x - prevEnd : 0;

        let token = cur.str;
        const cleanToken = token.trim();

        // Nhận diện số mũ (Superscript) trong PDF (ví dụ: x^2, 60^\circ)
        if (idx > 0 && dy >= 1.6 && dy <= 6.5 && (isSmallFont || /^[0-9+\-nko°]+$/.test(cleanToken)) && gap < 8) {
          if (cleanToken === 'o' || cleanToken === '0' || cleanToken === '°') {
            token = '$^\\circ$';
          } else {
            token = `$^{${cleanToken}}$`;
          }
          lineStr += token;
        } else if (idx > 0 && dy <= -1.5 && dy >= -6.0 && isSmallFont && /^[0-9a-zA-Z+\-]+$/.test(cleanToken) && gap < 8) {
          // Nhận diện chỉ số dưới (Subscript) trong PDF (ví dụ: x_1, x_2, u_n)
          lineStr += `$_{${cleanToken}}$`;
        } else {
          if (idx > 0 && gap > 2.2 && !lineStr.endsWith(' ')) {
            lineStr += ' ';
          }
          lineStr += token;
        }

        prevEnd = cur.x + cur.width;
      }

      // Hợp nhất cơ số và số mũ vừa nhận diện
      return lineStr
        .replace(/([a-zA-Z0-9\)\}])\$\^\{([^}]+)\}\$/g, '$$$1^{$2}$$')
        .replace(/([a-zA-Z0-9\)\}])\$_\{([^}]+)\}\$/g, '$$$1_{$2}$$')
        .replace(/(\d+)\$\^\\circ\$/g, '$$$1^\\circ$$');
    });

    pageTexts.push(renderedLines.join('\n'));
  }

  const rawJoined = pageTexts.join('\n\n').trim();
  return normalizeMathExpressionsToLatex(rawJoined);
}

/**
 * Nhận diện đề Toán từ file PDF:
 * - Ưu tiên sử dụng API nhận diện tài liệu PDF thông minh (/api/parse-pdf) để giữ nguyên công thức Toán LaTeX $...$, hình vẽ TikZ và nét gạch chân đáp án đúng <u>...</u>.
 * - Nếu chế độ trích xuất nhanh được chọn hoặc khi server bận, tự động trích xuất bằng pdfjs-dist cục bộ kèm khôi phục số mũ & công thức Toán.
 */
export async function extractMathExamFromPdf(
  file: File,
  mode: 'smart' | 'fast' = 'smart'
): Promise<{ text: string; usedSmartMode: boolean }> {
  const arrayBuffer = await file.arrayBuffer();

  if (mode === 'fast') {
    const localText = await extractTextFromPdfLocal(arrayBuffer.slice(0));
    return { text: localText, usedSmartMode: false };
  }

  try {
    const base64Pdf = arrayBufferToBase64(arrayBuffer.slice(0));
    const response = await fetch('/api/parse-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ base64Pdf }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.text === 'string' && data.text.trim().length > 0) {
        return {
          text: normalizeMathExpressionsToLatex(data.text.trim()),
          usedSmartMode: true,
        };
      }
    }
  } catch (err) {
    console.warn('Chuyển sang trích xuất PDF cục bộ do lỗi kết nối API:', err);
  }

  // Fallback tự động sang bộ đọc PDF cục bộ pdfjs-dist
  const fallbackText = await extractTextFromPdfLocal(arrayBuffer.slice(0));
  return { text: fallbackText, usedSmartMode: false };
}
