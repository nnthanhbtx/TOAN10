/**
 * Chuẩn hóa văn bản Toán học có chứa ký hiệu Unicode hoặc biểu thức rời rạc sang LaTeX chuẩn $...$
 * Tách riêng khỏi docxMathExtractor để không kéo mammoth/pdfjs vào bundle khởi động.
 */
export function normalizeMathExpressionsToLatex(rawText: string): string {
  if (!rawText) return '';
  let text = rawText.normalize('NFC');

  // 0. Chuyển đổi các ký tự Symbol / MathType PUA (U+F020 - U+F0FF) sang ký tự Toán chuẩn
  text = text
    .replace(/\uF022/g, '∀')
    .replace(/\uF024/g, '∃')
    .replace(/\uF0CE/g, '∈')
    .replace(/\uF0CF/g, '∉')
    .replace(/\uF0CC/g, '⊂')
    .replace(/\uF0CD/g, '⊆')
    .replace(/\uF0C8/g, '∪')
    .replace(/\uF0C7/g, '∩')
    .replace(/\uF0C6/g, '∅')
    .replace(/\uF0A3/g, '≤')
    .replace(/\uF0B3/g, '≥')
    .replace(/\uF0B9/g, '≠')
    .replace(/\uF0BB/g, '≈')
    .replace(/\uF0B1/g, '±')
    .replace(/\uF0A5/g, '∞')
    .replace(/\uF0DE/g, '⇒')
    .replace(/\uF0DB/g, '⇔')
    .replace(/\uF0AE/g, '→')
    .replace(/\uF0D6/g, '√')
    .replace(/\uF044/g, 'Δ')
    .replace(/\uF061/g, 'α')
    .replace(/\uF062/g, 'β')
    .replace(/\uF067/g, 'γ')
    .replace(/\uF070/g, 'π')
    .replace(/\uF05E/g, '⊥')
    .replace(/\uF0B0/g, '°');

  // 1. Chuyển đổi \[ ... \] -> $$ ... $$ và \( ... \) -> $ ... $
  text = text
    .replace(/\\\[([\s\S]*?)\\\]/g, '$$$$$1$$$$')
    .replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');

  // 2. Bảo vệ các vùng đã nằm trong $...$, $$...$$, \begin{tikzpicture}...\end{tikzpicture} hoặc thẻ <img ...>
  const protectedBlocks: string[] = [];
  const placeholderPrefix = '__MATH_HOLD_';

  text = text.replace(
    /\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}|<img\b[^>]*>|\$\$[\s\S]*?\$\$|\$[^\$]+?\$/g,
    (match) => {
      const idx = protectedBlocks.length;
      protectedBlocks.push(match);
      return `${placeholderPrefix}${idx}__`;
    }
  );

  // 3. Chuyển các ký hiệu toán học Unicode & kí hiệu viết tắt đứng ngoài $...$ sang LaTeX chuẩn
  text = text
    // Ký hiệu vectơ có dấu mũi tên trên đầu (AB⃗, u⃗) hoặc viết tắt vtAB
    .replace(/([A-Z]{2})\u20D7/g, '$$\\overrightarrow{$1}$$')
    .replace(/([a-z])\u20D7/g, '$$\\vec{$1}$$')
    .replace(/\bvt\s*([A-Z]{2})\b/g, '$$\\overrightarrow{$1}$$')
    // Ký hiệu góc ∠ABC, tam giác ∆ABC / △ABC
    .replace(/(?:∠|góc\s+)([A-Z]{3})\b/g, '$$\\widehat{$1}$$')
    .replace(/(?:△|∆)([A-Z]{3})\b/g, '$$\\triangle $1$$')
    // Số đo độ, bình phương, lập phương, căn bậc hai
    .replace(/(\d+(?:[,\.]\d+)?)\s*°/g, '$$$1^\\circ$$')
    .replace(/([a-zA-Z0-9\)\}])\s*²/g, '$$$1^2$$')
    .replace(/([a-zA-Z0-9\)\}])\s*³/g, '$$$1^3$$')
    .replace(/([a-zA-Z0-9\)\}])\s*⁴/g, '$$$1^4$$')
    .replace(/([a-zA-Z])\s*\^\s*(\d+)/g, '$$$1^{$2}$$')
    .replace(/√\s*\(([^)]+)\)/g, '$$\\sqrt{$1}$$')
    .replace(/√\s*(\d+[a-zA-Z0-9]*)/g, '$$\\sqrt{$1}$$')
    .replace(/\bsqrt\s*\(([^)]+)\)/gi, '$$\\sqrt{$1}$$')
    .replace(/∀/g, '$$\\forall$$')
    .replace(/∃/g, '$$\\exists$$')
    .replace(/∉/g, '$$\\notin$$')
    .replace(/∈/g, '$$\\in$$')
    .replace(/⊆/g, '$$\\subseteq$$')
    .replace(/⊂/g, '$$\\subset$$')
    .replace(/∪/g, '$$\\cup$$')
    .replace(/∩/g, '$$\\cap$$')
    .replace(/∅/g, '$$\\emptyset$$')
    .replace(/≤|⩽/g, '$$\\le$$')
    .replace(/≥|⩾/g, '$$\\ge$$')
    .replace(/≠/g, '$$\\neq$$')
    .replace(/≈/g, '$$\\approx$$')
    .replace(/±/g, '$$\\pm$$')
    .replace(/∞/g, '$$\\infty$$')
    .replace(/⇔|⟺/g, '$$\\Leftrightarrow$$')
    .replace(/⇒|⟹/g, '$$\\Rightarrow$$')
    .replace(/ℝ/g, '$$\\mathbb{R}$$')
    .replace(/ℤ/g, '$$\\mathbb{Z}$$')
    .replace(/ℕ/g, '$$\\mathbb{N}$$')
    .replace(/ℚ/g, '$$\\mathbb{Q}$$')
    .replace(/⊥/g, '$$\\perp$$');

  // 4. Khôi phục các khối đã bảo vệ
  text = text.replace(/__MATH_HOLD_(\d+)__/g, (_, idxStr) => {
    return protectedBlocks[parseInt(idxStr, 10)] || '';
  });

  // 5. Gộp hai công thức $...$ liền kề chỉ cách nhau bởi khoảng trắng/toán tử đơn giản
  text = text.replace(/\$\s*\$/g, ' ');

  return text;
}
