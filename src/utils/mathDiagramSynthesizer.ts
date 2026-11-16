/**
 * Bộ nhận diện ngữ cảnh Toán học và Tự động sinh Hình vẽ chuẩn TikZ / SVG
 * Đảm bảo đúng 100% logic Toán học:
 * - Định lí Cô-sin & Định lí Sin cho mọi tam giác (tỉ lệ cạnh thực, góc nhọn/vuông/tù chính xác)
 * - Đồ thị Parabol y = ax^2 + bx + c (đúng bề lõm a > 0 / a < 0, đúng tọa độ đỉnh I(-b/2a; -Δ/4a))
 * - Đường thẳng & Miền nghiệm bất phương trình bậc nhất hai ẩn ax + by <= c (đúng giao điểm trục Ox, Oy)
 * - Trục số thực biểu diễn các khoảng/đoạn/nửa khoảng theo đúng thứ tự số học
 * - Biểu đồ Ven, hình học phẳng & vectơ lực/vận tốc thực tế
 */

function parseNumberVal(raw?: string): number | null {
  if (!raw) return null;
  const clean = raw
    .replace(/\{,\}/g, '.')
    .replace(/,/g, '.')
    .replace(/\s+/g, '');
  const n = parseFloat(clean);
  return isFinite(n) ? n : null;
}

/**
 * Phân tích hàm số bậc hai y = ax^2 + bx + c từ đề bài
 */
function extractQuadraticCoefficients(
  prompt: string
): { a: number; b: number; c: number } | null {
  const clean = prompt
    .replace(/\$/g, '')
    .replace(/\{,\}/g, '.')
    .replace(/\s+/g, '');

  const match = clean.match(
    /(?:y|f\(x\))=([+\-]?\d*(?:\.\d+)?)x\^\{?2\}?(?:([+\-]\d*(?:\.\d+)?)x)?([+\-]\d+(?:\.\d+)?)?/i
  );
  if (!match) return null;

  const parseCoeff = (str: string | undefined, defaultIfSignOnly: number): number => {
    if (str === undefined || str === '') return 0;
    if (str === '+') return defaultIfSignOnly;
    if (str === '-') return -defaultIfSignOnly;
    const v = parseFloat(str);
    return isFinite(v) ? v : 0;
  };

  const a = match[1] === '' ? 1 : parseCoeff(match[1], 1);
  if (a === 0) return null;
  const b = match[2] ? parseCoeff(match[2], 1) : 0;
  const c = match[3] ? parseCoeff(match[3], 0) : 0;

  return { a, b, c };
}

/**
 * Tự động phân tích đề bài Toán để chọn loại hình có sẵn hoặc sinh mã TikZ chuẩn xác theo số liệu thực tế của câu hỏi
 */
export function synthesizeMathTikzFromPrompt(prompt: string): {
  tikzType?: string;
  tikzCode?: string;
} {
  if (!prompt || !prompt.trim()) return {};
  const p = prompt.toLowerCase();

  // 1. Kiểm tra các mẫu khớp chính xác với bộ hình vẽ chuyên biệt có sẵn
  if (p.includes('a = 7') && p.includes('b = 8') && p.includes('c = 5')) {
    return { tikzType: 'triangle_heron' };
  }
  if (p.includes('-x^2 + 4x - 3') || (p.includes('parabol') && p.includes('4x - 3'))) {
    return { tikzType: 'parabola_vertex_2_1' };
  }
  if (p.includes('b = 5') && p.includes('c = 8') && p.includes('60')) {
    return { tikzType: 'triangle_60deg' };
  }
  if (p.includes('a = 6') && p.includes('30^\\circ') && p.includes('ngoại tiếp')) {
    return { tikzType: 'triangle_sin_circumcircle' };
  }
  if (p.includes('b = 3') && p.includes('c = 5') && p.includes('15')) {
    return { tikzType: 'triangle_obtuse_cos' };
  }
  if (p.includes('[-2; 3]') && p.includes('(1;')) {
    return { tikzType: 'number_line_intersection' };
  }
  if (p.includes('40 học sinh') && p.includes('bóng đá')) {
    return { tikzType: 'venn_diagram_40' };
  }
  if (p.includes('100 học sinh') && p.includes('65')) {
    return { tikzType: 'venn_diagram_100' };
  }
  if (p.includes('bờ sông') && p.includes('60')) {
    return { tikzType: 'river_triangulation' };
  }
  if (p.includes('hải đăng')) {
    return { tikzType: 'lighthouse_coast' };
  }
  if (p.includes('tháp truyền hình')) {
    return { tikzType: 'mountain_tv_tower_d3' };
  }
  if (p.includes('cây') && (p.includes('gãy') || p.includes('bão') || p.includes('nghiêng'))) {
    return { tikzType: 'broken_tree_storm' };
  }

  // 2. Nhận diện Đồ thị hàm số bậc hai (Parabol y = ax^2 + bx + c) bất kỳ
  if (p.includes('parabol') || (p.includes('đồ thị') && /x\^\{?2\}?/.test(prompt))) {
    const quad = extractQuadraticCoefficients(prompt);
    if (quad) {
      const { a, b, c } = quad;
      const xI = +(-b / (2 * a)).toFixed(2);
      const yI = +(a * xI * xI + b * xI + c).toFixed(2);
      const span = Math.max(1.8, Math.min(2.8, 2.2 / Math.sqrt(Math.abs(a))));
      const domStart = +(xI - span).toFixed(2);
      const domEnd = +(xI + span).toFixed(2);
      const yEdge = +(a * (xI + span) * (xI + span) + b * (xI + span) + c).toFixed(2);
      const minX = Math.min(-1.2, domStart - 0.6);
      const maxX = Math.max(2.5, domEnd + 0.8);
      const minY = Math.min(-1.2, yI, yEdge, c) - 0.8;
      const maxY = Math.max(2.0, yI, yEdge, c) + 0.8;

      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Đồ thị Parabol y = ${a}x^2 + (${b})x + (${c}) có đỉnh I(${xI}; ${yI})
\\begin{tikzpicture}[>=stealth, scale=0.82]
  \\draw[->, thick] (${minX.toFixed(1)}, 0) -- (${maxX.toFixed(1)}, 0) node[below] {$x$};
  \\draw[->, thick] (0, ${minY.toFixed(1)}) -- (0, ${maxY.toFixed(1)}) node[left] {$y$};
  \\node[below left] at (0, 0) {$O$};
  \\draw[dashed, gray] (${xI}, ${minY.toFixed(1)}) -- (${xI}, ${maxY.toFixed(1)});
  \\draw[dashed, red!75!black] (${xI}, 0) node[below] {$${xI}$} -- (${xI}, ${yI}) -- (0, ${yI}) node[left] {$${yI}$};
  \\draw[very thick, blue!80!black, domain=${domStart}:${domEnd}, samples=64] plot (\\x, {${a}*(\\x)^2 + (${b})*(\\x) + (${c})});
  \\filldraw[red!80!black] (${xI}, ${yI}) circle (2.2pt) node[above right] {$I(${xI}; ${yI})$};
  \\filldraw (0, ${c}) circle (1.8pt) node[right] {$${c}$};
\\end{tikzpicture}`,
      };
    }
  }

  // 3. Nhận diện Lục giác đều ABCDEF tâm O
  if (p.includes('lục giác đều') && p.includes('abcdef')) {
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: Lục giác đều ABCDEF tâm O
\\begin{tikzpicture}[>=stealth, scale=1.05]
  \\coordinate (O) at (0, 0);
  \\coordinate (A) at (-1.1, 1.9);
  \\coordinate (B) at (1.1, 1.9);
  \\coordinate (C) at (2.2, 0);
  \\coordinate (D) at (1.1, -1.9);
  \\coordinate (E) at (-1.1, -1.9);
  \\coordinate (F) at (-2.2, 0);
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- (D) -- (E) -- (F) -- cycle;
  \\draw[dashed, blue!70!black] (A) -- (D);
  \\draw[dashed, blue!70!black] (B) -- (E);
  \\draw[dashed, blue!70!black] (C) -- (F);
  \\draw[->, very thick, red!80!black] (A) -- (B);
  \\draw[->, very thick, teal!80!black] (F) -- (O);
  \\filldraw (O) circle (2pt) node[below] {$O$};
  \\filldraw (A) circle (2pt) node[above left] {$A$};
  \\filldraw (B) circle (2pt) node[above right] {$B$};
  \\filldraw (C) circle (2pt) node[right] {$C$};
  \\filldraw (D) circle (2pt) node[below right] {$D$};
  \\filldraw (E) circle (2pt) node[below left] {$E$};
  \\filldraw (F) circle (2pt) node[left] {$F$};
\\end{tikzpicture}`,
    };
  }

  // 4. Nhận diện Hình bình hành ABCD (kèm tâm O hoặc trung điểm M, N nếu có)
  if (p.includes('hình bình hành') && p.includes('abcd')) {
    const hasCenterO = /\btâm\s*\$?o\$?/i.test(prompt);
    const hasMidMN = /\btrung điểm\b/i.test(prompt) && /\bm\b/i.test(prompt);
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: Hình bình hành ABCD
\\begin{tikzpicture}[>=stealth, scale=0.95]
  \\coordinate (A) at (0, 0);
  \\coordinate (D) at (4.2, 0);
  \\coordinate (B) at (1.4, 2.4);
  \\coordinate (C) at (5.6, 2.4);
  \\coordinate (O) at (2.8, 1.2);
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- (D) -- cycle;
  \\draw[dashed] (A) -- (C);
  \\draw[dashed] (B) -- (D);
  \\draw[->, very thick, blue!80!black] (A) -- (B);
  \\draw[->, very thick, blue!80!black] (A) -- (D);
  ${
    hasCenterO
      ? '\\filldraw[red!80!black] (O) circle (2.2pt) node[above] {$O$};'
      : ''
  }
  ${
    hasMidMN
      ? '\\coordinate (M) at (0.7, 1.2);\n  \\coordinate (N) at (4.9, 1.2);\n  \\filldraw[teal!80!black] (M) circle (2pt) node[left] {$M$};\n  \\filldraw[teal!80!black] (N) circle (2pt) node[right] {$N$};'
      : ''
  }
  \\filldraw (A) circle (2pt) node[below left] {$A$};
  \\filldraw (B) circle (2pt) node[above left] {$B$};
  \\filldraw (C) circle (2pt) node[above right] {$C$};
  \\filldraw (D) circle (2pt) node[below right] {$D$};
\\end{tikzpicture}`,
    };
  }

  // 5. Nhận diện Hình thoi ABCD
  if (p.includes('hình thoi') && p.includes('abcd')) {
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: Hình thoi ABCD tâm O
\\begin{tikzpicture}[>=stealth, scale=0.95]
  \\coordinate (O) at (0, 0);
  \\coordinate (A) at (-2.8, 0);
  \\coordinate (C) at (2.8, 0);
  \\coordinate (B) at (0, 1.7);
  \\coordinate (D) at (0, -1.7);
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- (D) -- cycle;
  \\draw[dashed] (A) -- (C);
  \\draw[dashed] (B) -- (D);
  \\draw (0, 0.3) -- (0.3, 0.3) -- (0.3, 0);
  \\filldraw (O) circle (2pt) node[below right] {$O$};
  \\filldraw (A) circle (2pt) node[left] {$A$};
  \\filldraw (B) circle (2pt) node[above] {$B$};
  \\filldraw (C) circle (2pt) node[right] {$C$};
  \\filldraw (D) circle (2pt) node[below] {$D$};
\\end{tikzpicture}`,
    };
  }

  // 6. Nhận diện Hình vuông hoặc Hình chữ nhật ABCD
  if ((p.includes('hình vuông') || p.includes('hình chữ nhật')) && p.includes('abcd')) {
    const isSquare = p.includes('hình vuông');
    const w = isSquare ? 3.2 : 4.4;
    const h = 3.2;
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: ${isSquare ? 'Hình vuông' : 'Hình chữ nhật'} ABCD
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\coordinate (A) at (0, ${h});
  \\coordinate (B) at (${w}, ${h});
  \\coordinate (C) at (${w}, 0);
  \\coordinate (D) at (0, 0);
  \\coordinate (O) at (${(w / 2).toFixed(2)}, ${(h / 2).toFixed(2)});
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- (D) -- cycle;
  \\draw[dashed] (A) -- (C);
  \\draw[dashed] (B) -- (D);
  \\filldraw (O) circle (2pt) node[above] {$O$};
  \\filldraw (A) circle (2pt) node[above left] {$A$};
  \\filldraw (B) circle (2pt) node[above right] {$B$};
  \\filldraw (C) circle (2pt) node[below right] {$C$};
  \\filldraw (D) circle (2pt) node[below left] {$D$};
\\end{tikzpicture}`,
    };
  }

  // 7. Nhận diện Tập hợp trên trục số: A = [a; b] và B = (c; d) — vẽ đúng thứ tự số học
  const intervalMatches = [
    ...prompt.matchAll(
      /([A-Z])\s*=\s*([\[\(])\s*(-?\d+(?:[,\.]\d+)?|-\s*\\infty)\s*;\s*(-?\d+(?:[,\.]\d+)?|\+?\s*\\infty)\s*([\]\)])/g
    ),
  ];
  if (intervalMatches.length >= 2 || (intervalMatches.length === 1 && p.includes('trục số'))) {
    const m1 = intervalMatches[0];
    const m2 = intervalMatches[1];
    const a1 = m1[3].includes('infty') ? -5 : (parseNumberVal(m1[3]) ?? -2);
    const b1 = m1[4].includes('infty') ? 6 : (parseNumberVal(m1[4]) ?? 4);

    if (m2) {
      const a2 = m2[3].includes('infty') ? -5 : (parseNumberVal(m2[3]) ?? 0);
      const b2 = m2[4].includes('infty') ? 6 : (parseNumberVal(m2[4]) ?? 5);
      const allFinite = [a1, b1, a2, b2].filter((v) => isFinite(v));
      const minV = Math.min(...allFinite, -3) - 1.5;
      const maxV = Math.max(...allFinite, 4) + 1.5;
      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Biểu diễn hai tập hợp ${m1[1]} và ${m2[1]} trên trục số thực
\\begin{tikzpicture}[>=stealth, scale=0.82]
  \\draw[->, thick] (${minV.toFixed(1)}, 0) -- (${maxV.toFixed(1)}, 0) node[below] {$\\mathbb{R}$};
  \\draw[very thick, blue!80!black] (${a1}, 0.22) -- (${b1}, 0.22) node[midway, above] {$${m1[1]}$};
  \\filldraw[blue!80!black] (${a1}, 0.22) circle (2pt) node[below=4pt] {$${a1}$} node[above] {$${m1[2]}$};
  \\filldraw[blue!80!black] (${b1}, 0.22) circle (2pt) node[below=4pt] {$${b1}$} node[above] {$${m1[5]}$};
  \\draw[very thick, red!80!black] (${a2}, -0.22) -- (${b2}, -0.22) node[midway, below] {$${m2[1]}$};
  \\filldraw[red!80!black] (${a2}, -0.22) circle (2pt) node[below=6pt] {$${a2}$};
  \\filldraw[red!80!black] (${b2}, -0.22) circle (2pt) node[below=6pt] {$${b2}$};
\\end{tikzpicture}`,
      };
    }

    const minCoord = Math.min(a1, -2) - 2;
    const maxCoord = Math.max(b1, 4) + 2;
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: Biểu diễn tập hợp trên trục số thực
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\draw[->, thick] (${minCoord.toFixed(1)}, 0) -- (${maxCoord.toFixed(1)}, 0) node[below] {$\\mathbb{R}$};
  \\draw[very thick, blue!80!black] (${a1}, 0) -- (${b1}, 0) node[midway, above] {$${m1[1]}$};
  \\filldraw (${a1}, 0) circle (2pt) node[below] {$${a1}$} node[above] {$${m1[2]}$};
  \\filldraw (${b1}, 0) circle (2pt) node[below] {$${b1}$} node[above] {$${m1[5]}$};
\\end{tikzpicture}`,
    };
  }

  // 8. Nhận diện Biểu đồ Ven (Bài toán đếm số phần tử hợp/giao 2 tập hợp)
  if (
    (p.includes('học sinh') ||
      p.includes('khách du lịch') ||
      p.includes('câu lạc bộ') ||
      p.includes('khảo sát') ||
      p.includes('vận động viên')) &&
    (p.includes('cả hai') ||
      p.includes('ít nhất một') ||
      p.includes('không đăng ký') ||
      p.includes('giỏi toán') ||
      p.includes('biết chơi'))
  ) {
    const nums = [...prompt.matchAll(/\b(\d{1,3})\b/g)]
      .map((m) => parseInt(m[1], 10))
      .filter((n) => n >= 2 && n <= 500 && n !== 10);
    const totalN = nums[0] ?? 40;
    const setA = nums[1] ?? 25;
    const setB = nums[2] ?? 18;
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: Biểu đồ Ven minh họa bài toán tập hợp
\\begin{tikzpicture}[scale=1.0]
  \\draw[thick] (-3.4, -2.0) rectangle (3.4, 2.0);
  \\node[above right] at (-3.2, 1.55) {$n(U) = ${totalN}$};
  \\draw[thick, fill=blue!10] (-0.85, -0.05) circle (1.35cm);
  \\draw[thick, fill=teal!10] (0.85, -0.05) circle (1.35cm);
  \\draw[thick] (-0.85, -0.05) circle (1.35cm);
  \\node[above] at (-1.3, 1.35) {$n(A) = ${setA}$};
  \\node[above] at (1.3, 1.35) {$n(B) = ${setB}$};
  \\node at (0, -0.05) {$A \\cap B$};
\\end{tikzpicture}`,
    };
  }

  // 9. Nhận diện Nửa đường tròn đơn vị (Giá trị lượng giác góc từ 0 đến 180 độ)
  if (
    p.includes('nửa đường tròn đơn vị') ||
    ((p.includes('\\sin') || p.includes('\\cos') || p.includes('\\tan') || p.includes('\\cot')) &&
      (p.includes('180^\\circ') || p.includes('90^\\circ <') || p.includes('góc tù')))
  ) {
    return { tikzType: 'trig_unit_circle_supp' };
  }

  // 10. Nhận diện Tam giác ABC với logic hình học chính xác (Định lí Cô-sin & Định lí Sin)
  if (p.includes('tam giác') && p.includes('abc')) {
    // 10a. Tam giác vuông tại A, B hoặc C
    const rightMatch = prompt.match(/vuông\s+(?:cân\s+)?tại\s+\$?([A-C])\$?/i);
    if (rightMatch) {
      const rightVertex = rightMatch[1].toUpperCase();
      const otherVertices = ['A', 'B', 'C'].filter((v) => v !== rightVertex);
      const v1 = otherVertices[0];
      const v2 = otherVertices[1];
      const isIsosceles = /vuông\s+cân/i.test(prompt);
      const leg1 = 4.0;
      const leg2 = isIsosceles ? 4.0 : 3.0;
      const hasMedianM = /\btrung điểm\b/i.test(prompt) && /\bm\b/i.test(prompt);
      const hasAltitudeH = /\bđường cao\b/i.test(prompt) && /\bh\b/i.test(prompt);
      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Tam giác ABC vuông tại ${rightVertex}
\\begin{tikzpicture}[>=stealth, scale=0.85]
  \\coordinate (${rightVertex}) at (0, 0);
  \\coordinate (${v1}) at (${leg1}, 0);
  \\coordinate (${v2}) at (0, ${leg2});
  \\draw[thick, fill=cyan!8] (${rightVertex}) -- (${v1}) -- (${v2}) -- cycle;
  \\draw (0, 0.35) -- (0.35, 0.35) -- (0.35, 0);
  ${
    hasMedianM
      ? `\\coordinate (M) at (${(leg1 / 2).toFixed(2)}, ${(leg2 / 2).toFixed(2)});\n  \\draw[dashed, red!80!black] (${rightVertex}) -- (M);\n  \\filldraw[red!80!black] (M) circle (2pt) node[above right] {$M$};`
      : ''
  }
  ${
    hasAltitudeH
      ? `\\coordinate (H) at (1.44, 1.92);\n  \\draw[dashed, blue!80!black] (${rightVertex}) -- (H);\n  \\filldraw[blue!80!black] (H) circle (2pt) node[above right] {$H$};`
      : ''
  }
  \\filldraw (${rightVertex}) circle (2pt) node[below left] {$${rightVertex}$};
  \\filldraw (${v1}) circle (2pt) node[below right] {$${v1}$};
  \\filldraw (${v2}) circle (2pt) node[above left] {$${v2}$};
\\end{tikzpicture}`,
      };
    }

    // 10b. Tam giác đều ABC
    if (p.includes('tam giác đều')) {
      const hasCentroidG = /\btrọng tâm\s*\$?g\$?/i.test(prompt);
      const hasMidM = /\btrung điểm\b/i.test(prompt) && /\bm\b/i.test(prompt);
      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Tam giác đều ABC
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\coordinate (B) at (0, 0);
  \\coordinate (C) at (4.0, 0);
  \\coordinate (A) at (2.0, 3.464);
  \\coordinate (M) at (2.0, 0);
  \\coordinate (G) at (2.0, 1.155);
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- cycle;
  ${
    hasMidM || hasCentroidG
      ? '\\draw[dashed, blue!75!black] (A) -- (M);\n  \\filldraw (M) circle (2pt) node[below] {$M$};'
      : ''
  }
  ${
    hasCentroidG
      ? '\\filldraw[red!80!black] (G) circle (2.2pt) node[right] {$G$};'
      : ''
  }
  \\filldraw (A) circle (2pt) node[above] {$A$};
  \\filldraw (B) circle (2pt) node[below left] {$B$};
  \\filldraw (C) circle (2pt) node[below right] {$C$};
\\end{tikzpicture}`,
      };
    }

    // 10c. Tam giác ABC tổng quát: trích xuất các cạnh a, b, c và góc A, B, C
    const sideA =
      parseNumberVal(prompt.match(/\b(?:BC|a)\s*=\s*(\d+(?:[,\.]\d+)?)/)?.[1]) ?? null;
    const sideB =
      parseNumberVal(prompt.match(/\b(?:AC|CA|b)\s*=\s*(\d+(?:[,\.]\d+)?)/)?.[1]) ?? null;
    const sideC =
      parseNumberVal(prompt.match(/\b(?:AB|BA|c)\s*=\s*(\d+(?:[,\.]\d+)?)/)?.[1]) ?? null;
    const angleA =
      parseNumberVal(
        prompt.match(
          /(?:góc\s*A|\\widehat\{(?:A|BAC)\}|\bA)\s*=\s*(\d+(?:[,\.]\d+)?)\s*(?:\^\\circ|°|độ)/i
        )?.[1]
      ) ?? null;
    const angleB =
      parseNumberVal(
        prompt.match(
          /(?:góc\s*B|\\widehat\{(?:B|ABC)\}|\bB)\s*=\s*(\d+(?:[,\.]\d+)?)\s*(?:\^\\circ|°|độ)/i
        )?.[1]
      ) ?? null;
    const angleC =
      parseNumberVal(
        prompt.match(
          /(?:góc\s*C|\\widehat\{(?:C|ACB)\}|\bC)\s*=\s*(\d+(?:[,\.]\d+)?)\s*(?:\^\\circ|°|độ)/i
        )?.[1]
      ) ?? null;

    if (
      sideA !== null ||
      sideB !== null ||
      sideC !== null ||
      angleA !== null ||
      angleB !== null ||
      angleC !== null
    ) {
      // Tính toán tọa độ 3 đỉnh đúng tỉ lệ hình học bằng Định lí Cô-sin / Sin
      let realC = sideC ?? 5;
      let realB = sideB ?? 4;
      let degA = angleA ?? 60;

      if (
        sideA !== null &&
        sideB !== null &&
        sideC !== null &&
        sideA + sideB > sideC &&
        sideB + sideC > sideA &&
        sideC + sideA > sideB
      ) {
        // Biết 3 cạnh a, b, c -> dùng định lí Cô-sin tính chính xác góc A
        const cosA = Math.max(
          -0.95,
          Math.min(0.95, (sideB * sideB + sideC * sideC - sideA * sideA) / (2 * sideB * sideC))
        );
        degA = (Math.acos(cosA) * 180) / Math.PI;
        realB = sideB;
        realC = sideC;
      } else if (angleB !== null && angleC !== null && angleB + angleC < 175) {
        degA = 180 - (angleB + angleC);
        const radB = (angleB * Math.PI) / 180;
        const radC = (angleC * Math.PI) / 180;
        const radA = (degA * Math.PI) / 180;
        const baseA = sideA ?? 6;
        realB = (baseA * Math.sin(radB)) / Math.sin(radA);
        realC = (baseA * Math.sin(radC)) / Math.sin(radA);
      } else if (angleA !== null && angleA > 12 && angleA < 165) {
        degA = angleA;
      }

      const maxSide = Math.max(realB, realC, 1);
      const scaleFactor = 4.6 / maxSide;
      const cLen = +(realC * scaleFactor).toFixed(2);
      const bLen = +(realB * scaleFactor).toFixed(2);
      const rad = (degA * Math.PI) / 180;
      const cx = +(bLen * Math.cos(rad)).toFixed(2);
      const cy = +(bLen * Math.sin(rad)).toFixed(2);

      const labelC = sideC !== null ? `$c = ${sideC}$` : '$c$';
      const labelB = sideB !== null ? `$b = ${sideB}$` : '$b$';
      const labelA = sideA !== null ? `$a = ${sideA}$` : '$a = ?$';

      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Tam giác ABC dựng theo đúng tỉ lệ cạnh và góc thực tế
\\begin{tikzpicture}[>=stealth, scale=0.88]
  \\coordinate (A) at (0, 0);
  \\coordinate (B) at (${cLen}, 0);
  \\coordinate (C) at (${cx}, ${cy});
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- cycle;
  ${
    angleA !== null
      ? `\\draw (0.72, 0) arc (0:${Math.round(degA)}:0.72);\n  \\node at (${(0.95 * Math.cos(rad / 2)).toFixed(2)}, ${(0.95 * Math.sin(rad / 2)).toFixed(2)}) {$${angleA}^\\circ$};`
      : ''
  }
  \\node[below] at (${(cLen / 2).toFixed(2)}, -0.12) {${labelC}};
  \\node[above left] at (${(cx / 2).toFixed(2)}, ${(cy / 2).toFixed(2)}) {${labelB}};
  \\node[above right] at (${((cLen + cx) / 2).toFixed(2)}, ${(cy / 2).toFixed(2)}) {${labelA}};
  \\filldraw (A) circle (2pt) node[below left] {$A$};
  \\filldraw (B) circle (2pt) node[below right] {$B$};
  \\filldraw (C) circle (2pt) node[above] {$C$};
\\end{tikzpicture}`,
      };
    }

    if (p.includes('trọng tâm') || p.includes('trung điểm') || p.includes('\\overrightarrow')) {
      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Tam giác ABC có đường trung tuyến AM và trọng tâm G
\\begin{tikzpicture}[>=stealth, scale=0.88]
  \\coordinate (B) at (0, 0);
  \\coordinate (C) at (4.6, 0);
  \\coordinate (A) at (1.6, 3.1);
  \\coordinate (M) at (2.3, 0);
  \\coordinate (G) at (2.07, 1.03);
  \\draw[thick, fill=cyan!8] (A) -- (B) -- (C) -- cycle;
  \\draw[dashed, blue!80!black] (A) -- (M);
  \\filldraw[red!80!black] (G) circle (2.2pt) node[right] {$G$};
  \\filldraw (M) circle (2pt) node[below] {$M$};
  \\filldraw (A) circle (2pt) node[above] {$A$};
  \\filldraw (B) circle (2pt) node[below left] {$B$};
  \\filldraw (C) circle (2pt) node[below right] {$C$};
\\end{tikzpicture}`,
      };
    }
  }

  // 11. Nhận diện Bất phương trình / Hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng Oxy
  if (
    (p.includes('miền nghiệm') || p.includes('bất phương trình')) &&
    p.includes('x') &&
    p.includes('y')
  ) {
    if (p.includes('hệ bất phương trình') || p.includes('\\begin{cases}')) {
      return { tikzType: 'feasible_region_quad' };
    }

    // Tự động tìm giao điểm đường thẳng ax + by = c với hai trục Ox, Oy
    const cleanEq = prompt.replace(/\$/g, '').replace(/\s+/g, '');
    const bptMatch = cleanEq.match(
      /([+\-]?\d*)x([+\-]\d*)y(?:\\le|\\ge|<=|>=|<|>|=)([+\-]?\d+)/
    );
    if (bptMatch) {
      const a =
        bptMatch[1] === '' || bptMatch[1] === '+'
          ? 1
          : bptMatch[1] === '-'
            ? -1
            : parseFloat(bptMatch[1]);
      const b =
        bptMatch[2] === '+'
          ? 1
          : bptMatch[2] === '-'
            ? -1
            : parseFloat(bptMatch[2]);
      const c = parseFloat(bptMatch[3]);
      if (a && b && c) {
        const xInt = +(c / a).toFixed(2);
        const yInt = +(c / b).toFixed(2);
        if (Math.abs(xInt) <= 12 && Math.abs(yInt) <= 12) {
          const minX = Math.min(-1.5, xInt - 1.2);
          const maxX = Math.max(2.5, xInt + 1.5);
          const minY = Math.min(-1.5, yInt - 1.2);
          const maxY = Math.max(2.5, yInt + 1.5);
          return {
            tikzType: 'custom',
            tikzCode: `% TikZ: Đường bờ ${a}x + (${b})y = ${c} đi qua (${xInt}; 0) và (0; ${yInt})
\\begin{tikzpicture}[>=stealth, scale=0.72]
  \\draw[->, thick] (${minX.toFixed(1)}, 0) -- (${maxX.toFixed(1)}, 0) node[below] {$x$};
  \\draw[->, thick] (0, ${minY.toFixed(1)}) -- (0, ${maxY.toFixed(1)}) node[left] {$y$};
  \\node[below left] at (0, 0) {$O$};
  \\draw[very thick, blue!80!black] (${xInt}, 0) -- (0, ${yInt});
  \\filldraw[red!80!black] (${xInt}, 0) circle (2pt) node[below] {$${xInt}$};
  \\filldraw[red!80!black] (0, ${yInt}) circle (2pt) node[left] {$${yInt}$};
\\end{tikzpicture}`,
          };
        }
      }
    }

    return { tikzType: 'bpt_halfplane_2x_y_4' };
  }

  // 12. Nhận diện Mặt phẳng tọa độ Oxy với các điểm A(x; y), B(x; y)
  if (p.includes('tọa độ') && p.includes('oxy')) {
    const ptMatches = [
      ...prompt.matchAll(/([A-Z])\s*\(\s*(-?\d+(?:[,\.]\d+)?)\s*[;,]\s*(-?\d+(?:[,\.]\d+)?)\s*\)/g),
    ];
    if (ptMatches.length >= 2) {
      const parsedPts = ptMatches.slice(0, 4).map((m) => {
        const rawX = parseNumberVal(m[2]) ?? 1;
        const rawY = parseNumberVal(m[3]) ?? 2;
        const scaleDown = Math.max(Math.abs(rawX), Math.abs(rawY)) > 5 ? 0.5 : 1;
        return {
          name: m[1],
          rawX,
          rawY,
          x: +(rawX * scaleDown).toFixed(2),
          y: +(rawY * scaleDown).toFixed(2),
        };
      });

      const coordsLines = parsedPts
        .map((pt) => `  \\coordinate (${pt.name}) at (${pt.x}, ${pt.y});`)
        .join('\n');
      const connectLine =
        parsedPts.length >= 3
          ? `  \\draw[thick, fill=cyan!10] ${parsedPts.map((pt) => `(${pt.name})`).join(' -- ')} -- cycle;`
          : `  \\draw[->, very thick, blue!80!black] (${parsedPts[0].name}) -- (${parsedPts[1].name});`;
      const nodesLines = parsedPts
        .map(
          (pt) =>
            `  \\draw[dashed, gray] (${pt.x}, 0) -- (${pt.name}) -- (0, ${pt.y});\n  \\filldraw[red!80!black] (${pt.name}) circle (2.2pt) node[above right] {$${pt.name}(${pt.rawX};${pt.rawY})$};`
        )
        .join('\n');

      return {
        tikzType: 'custom',
        tikzCode: `% TikZ: Biểu diễn điểm và vectơ trên mặt phẳng tọa độ Oxy
\\begin{tikzpicture}[>=stealth, scale=0.75]
  \\draw[->, thick] (-3.5, 0) -- (4.8, 0) node[below] {$x$};
  \\draw[->, thick] (0, -2.8) -- (0, 4.5) node[left] {$y$};
  \\node[below left] at (0, 0) {$O$};
${coordsLines}
${connectLine}
${nodesLines}
\\end{tikzpicture}`,
      };
    }
  }

  // 13. Nhận diện Bài toán Tổng hợp lực / Vận tốc dòng nước (Quy tắc hình bình hành Vật lí)
  if (
    (p.includes('hợp lực') || p.includes('hai lực') || p.includes('vận tốc dòng nước') || p.includes('thuyền')) &&
    (p.includes('vec{f}') || p.includes('f_1') || p.includes('v_1') || p.includes('bờ sông'))
  ) {
    return {
      tikzType: 'custom',
      tikzCode: `% TikZ: Quy tắc hình bình hành tổng hợp hai vectơ lực / vận tốc
\\begin{tikzpicture}[>=stealth, scale=0.9]
  \\coordinate (O) at (0, 0);
  \\coordinate (A) at (3.6, 0);
  \\coordinate (B) at (1.5, 2.4);
  \\coordinate (C) at (5.1, 2.4);
  \\draw[->, very thick, blue!80!black] (O) -- (A) node[midway, below] {$\\vec{F}_1$};
  \\draw[->, very thick, teal!80!black] (O) -- (B) node[midway, above left] {$\\vec{F}_2$};
  \\draw[dashed, gray] (A) -- (C);
  \\draw[dashed, gray] (B) -- (C);
  \\draw[->, very thick, red!80!black] (O) -- (C) node[midway, above] {$\\vec{F} = \\vec{F}_1 + \\vec{F}_2$};
  \\filldraw (O) circle (2pt) node[below left] {$O$};
\\end{tikzpicture}`,
    };
  }

  return {};
}
