import {
  ExamSet,
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  StepOrderingQuestion,
} from '../../types/exam';

const KEYS: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

export interface McqSeed {
  topic: string;
  prompt: string;
  correct: string;
  wrongs: [string, string, string];
  explanation: string;
  tip?: string;
  tikzCode?: string;
}

export interface TfStatementSeed {
  statement: string;
  isCorrect: boolean;
  explanation: string;
}

export interface TfSeed {
  topic: string;
  prompt: string;
  statements: [TfStatementSeed, TfStatementSeed, TfStatementSeed, TfStatementSeed];
  tip?: string;
  tikzCode?: string;
}

export interface SaSeed {
  topic: string;
  prompt: string;
  answers: string[];
  explanation: string;
  tip?: string;
  tikzCode?: string;
}

export interface StepSeed {
  topic: string;
  problemStatement: string;
  conclusionTarget: string;
  steps: [string, string, string, string];
  analysis: string;
  tip?: string;
  tikzCode?: string;
}

export function buildMcqList(examPrefix: string, seeds: McqSeed[]): MultipleChoiceQuestion[] {
  return seeds.map((s, idx) => {
    const targetKeyIndex = (idx * 3 + 1) % 4;
    const correctKey = KEYS[targetKeyIndex];
    let wrongCursor = 0;
    const options = KEYS.map((k) => {
      if (k === correctKey) {
        return { key: k, content: s.correct };
      }
      const content = s.wrongs[wrongCursor++] ?? '';
      return { key: k, content };
    });

    return {
      id: `${examPrefix}_p1_q${idx + 1}`,
      part: 'part1',
      number: idx + 1,
      topic: s.topic,
      prompt: s.prompt,
      options,
      correctAnswer: correctKey,
      explanation: s.explanation,
      pedagogicalTip:
        s.tip ?? 'Đọc kỹ giả thiết, đối chiếu điều kiện xác định và kiểm tra lại phép biến đổi.',
      points: 0.25,
      tikzType: s.tikzCode ? 'custom' : undefined,
      tikzCode: s.tikzCode,
    };
  });
}

export function buildTfList(examPrefix: string, seeds: TfSeed[]): TrueFalseQuestion[] {
  const labels: Array<'a' | 'b' | 'c' | 'd'> = ['a', 'b', 'c', 'd'];
  return seeds.map((s, idx) => ({
    id: `${examPrefix}_p2_q${idx + 1}`,
    part: 'part2',
    number: idx + 1,
    topic: s.topic,
    prompt: s.prompt,
    statements: s.statements.map((st, sIdx) => ({
      id: labels[sIdx],
      label: labels[sIdx],
      statement: st.statement,
      isCorrect: st.isCorrect,
      explanation: st.explanation,
    })),
    pedagogicalTip:
      s.tip ?? 'Xét từng mệnh đề a), b), c), d) độc lập dựa trên công thức và tính chất đã học.',
    tikzType: s.tikzCode ? 'custom' : undefined,
    tikzCode: s.tikzCode,
  }));
}

export function buildSaList(examPrefix: string, seeds: SaSeed[]): ShortAnswerQuestion[] {
  return seeds.map((s, idx) => ({
    id: `${examPrefix}_p3_q${idx + 1}`,
    part: 'part3',
    number: idx + 1,
    topic: s.topic,
    prompt: s.prompt,
    acceptableAnswers: s.answers,
    explanation: s.explanation,
    pedagogicalTip:
      s.tip ?? 'Tính toán cẩn thận và ghi kết quả dưới dạng số nguyên hoặc số thập phân chuẩn.',
    points: 0.5,
    tikzType: s.tikzCode ? 'custom' : undefined,
    tikzCode: s.tikzCode,
  }));
}

export function buildStepList(examPrefix: string, seeds: StepSeed[]): StepOrderingQuestion[] {
  return seeds.map((s, idx) => ({
    id: `${examPrefix}_p4_q${idx + 1}`,
    part: 'part4',
    number: idx + 1,
    topic: s.topic,
    problemStatement: s.problemStatement,
    conclusionTarget: s.conclusionTarget,
    steps: s.steps.map((content, stepIdx) => ({
      id: `${examPrefix}_p4_q${idx + 1}_s${stepIdx + 1}`,
      originalIndex: stepIdx + 1,
      content,
      roleDescription: `Bước ${stepIdx + 1} trong tiến trình giải toán`,
    })),
    pedagogicalTip:
      s.tip ?? 'Xác định điều kiện/công thức xuất phát trước, biến đổi trung gian rồi mới kết luận.',
    teacherAnalysis: s.analysis,
    points: 0.75,
    tikzType: s.tikzCode ? 'custom' : undefined,
    tikzCode: s.tikzCode,
  }));
}

export function buildFullLessonExam(params: {
  id: string;
  lessonId: string;
  title: string;
  subtitle: string;
  description: string;
  mcqs: McqSeed[];
  tfs: TfSeed[];
  sas: SaSeed[];
  steps: StepSeed[];
}): ExamSet {
  const prefix = params.id.replace(/-/g, '_');
  return {
    id: params.id,
    lessonId: params.lessonId,
    title: params.title,
    subtitle: params.subtitle,
    grade: 10,
    durationMinutes: 90,
    totalPoints: 10,
    description: params.description,
    part1: buildMcqList(prefix, params.mcqs),
    part2: buildTfList(prefix, params.tfs),
    part3: buildSaList(prefix, params.sas),
    part4: buildStepList(prefix, params.steps),
  };
}

/**
 * Các hàm tạo mã TikZ chuẩn toán học cho các chủ đề Toán 10 Tập 2
 */
export function tikzParabola(a: number, b: number, c: number, titleLabel?: string): string {
  const xv = Number((-b / (2 * a)).toFixed(2));
  const yv = Number((a * xv * xv + b * xv + c).toFixed(2));
  const delta = b * b - 4 * a * c;
  let rootDist = 0;
  let r1: number | null = null;
  let r2: number | null = null;
  if (delta > 0.0001) {
    const sqrtD = Math.sqrt(delta);
    const xA = (-b - sqrtD) / (2 * a);
    const xB = (-b + sqrtD) / (2 * a);
    r1 = Number(Math.min(xA, xB).toFixed(2));
    r2 = Number(Math.max(xA, xB).toFixed(2));
    rootDist = Math.abs(r2 - xv);
  }
  const distToYAxis = Math.abs(xv);
  const span = Number(
    Math.min(
      3.8,
      Math.max(1.8, rootDist + 0.65, distToYAxis + 0.6, Math.sqrt(3.2 / Math.abs(a)))
    ).toFixed(2)
  );
  const xMin = Number((xv - span).toFixed(2));
  const xMax = Number((xv + span).toFixed(2));
  const axisXMin = Math.min(-1.8, Math.floor(xMin - 0.6));
  const axisXMax = Math.max(2.6, Math.ceil(xMax + 0.8));
  const yEdge = a * (xv + span) * (xv + span) + b * (xv + span) + c;
  const axisYMin = Math.min(-1.8, Math.floor(Math.min(yv, c, yEdge, 0) - 0.8));
  const axisYMax = Math.max(2.6, Math.ceil(Math.max(yv, c, yEdge, 0) + 0.9));
  const expr = `${a}*(\\x)*(\\x) + (${b})*(\\x) + (${c})`;

  const rootNodes =
    r1 !== null && r2 !== null
      ? `\\filldraw[amber] (${r1},0) circle (2pt) node[below left] {$${r1}$};
  \\filldraw[amber] (${r2},0) circle (2pt) node[below right] {$${r2}$};`
      : '';

  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (${axisXMin},0) -- (${axisXMax},0) node[right] {$x$};
  \\draw[->, thick, gray] (0,${axisYMin}) -- (0,${axisYMax}) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, amber] (${xv},${axisYMin}) -- (${xv},${axisYMax});
  \\draw[dashed, gray] (${xv},0) -- (${xv},${yv}) -- (0,${yv});
  \\draw[very thick, cyan, domain=${xMin}:${xMax}] plot (\\x, {${expr}});
  ${rootNodes}
  \\filldraw[rose] (${xv},${yv}) circle (2.2pt) node[${a > 0 ? 'below' : 'above'}] {$I(${xv};${yv})$};
  \\filldraw[teal] (0,${c}) circle (1.8pt) node[right] {$(0;${c})$};
  ${titleLabel ? `\\node[above right] at (${xv + 0.3},${yv + (a > 0 ? 1.2 : -1.2)}) {$${titleLabel}$};` : ''}
\\end{tikzpicture}`;
}

export function tikzQuadraticSignRoots(a: number, x1: number, x2: number): string {
  const xm = Number(((x1 + x2) / 2).toFixed(2));
  const ym = a > 0 ? -1.6 : 1.6;
  const aScaled = Number(( -ym / ((x1 - xm) * (x1 - xm) || 1) ).toFixed(3));
  const xMin = Number((x1 - 1.2).toFixed(2));
  const xMax = Number((x2 + 1.2).toFixed(2));
  const expr = `${aScaled}*(\\x - (${xm}))*(\\x - (${xm})) + (${ym})`;

  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (${x1 - 2},0) -- (${x2 + 2.2},0) node[right] {$x$};
  \\draw[->, thick, gray] (0,-2.4) -- (0,2.6) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[very thick, cyan, domain=${xMin}:${xMax}] plot (\\x, {${expr}});
  \\filldraw[rose] (${x1},0) circle (2.2pt) node[below left] {$${x1}$};
  \\filldraw[rose] (${x2},0) circle (2.2pt) node[below right] {$${x2}$};
  \\node[above] at (${xm},${a > 0 ? -0.5 : 0.5}) {$${a > 0 ? '-' : '+'}$};
  \\node[above] at (${x1 - 0.9},${a > 0 ? 0.6 : -0.8}) {$${a > 0 ? '+' : '-'}$};
  \\node[above] at (${x2 + 0.9},${a > 0 ? 0.6 : -0.8}) {$${a > 0 ? '+' : '-'}$};
\\end{tikzpicture}`;
}

export function tikzCoastTriangleModel(hKm: number, totalKm: number): string {
  return `\\begin{tikzpicture}[scale=0.9]
  \\coordinate (B) at (0,0);
  \\coordinate (A) at (0,2.6);
  \\coordinate (M) at (2.1,0);
  \\coordinate (C) at (5.4,0);
  \\draw[very thick, sky] (B) -- (C);
  \\draw[very thick, teal] (A) -- (B) node[midway, left] {$${hKm}\\text{ km}$};
  \\draw[very thick, rose] (A) -- (M) node[midway, above right] {$\\sqrt{x^2+${hKm * hKm}}$};
  \\draw[thick, gray] (0,0.3) -- (0.3,0.3) -- (0.3,0);
  \\draw[dashed, amber] (B) -- (M) node[midway, below] {$x\\text{ (km)}$};
  \\draw[dashed, sky] (M) -- (C) node[midway, below] {$${totalKm}-x$};
  \\filldraw[rose] (A) circle (2.2pt) node[above] {$A$};
  \\filldraw[cyan] (B) circle (2pt) node[below left] {$B$};
  \\filldraw[amber] (M) circle (2.2pt) node[above] {$M$};
  \\filldraw[cyan] (C) circle (2pt) node[below right] {$C$};
\\end{tikzpicture}`;
}

export function tikzLineAndNormal(x0: number, y0: number, lineLabel: string): string {
  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (-1.5,0) -- (4.8,0) node[right] {$x$};
  \\draw[->, thick, gray] (0,-1.2) -- (0,3.8) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[very thick, cyan] (-0.6,3.1) -- (4.2,0.5) node[right] {$${lineLabel}$};
  \\coordinate (A) at (1.8,1.8);
  \\coordinate (N) at (2.6,3.28);
  \\coordinate (U) at (3.2,1.04);
  \\draw[->, very thick, rose] (A) -- (N) node[above right] {$\\vec{n}$};
  \\draw[->, very thick, amber] (A) -- (U) node[above right] {$\\vec{u}$};
  \\filldraw[teal] (A) circle (2.2pt) node[below left] {$A(${x0};${y0})$};
\\end{tikzpicture}`;
}

export function tikzPointToLineDistance(mLabel: string, lineLabel: string, dVal: string): string {
  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (-1.2,0) -- (4.8,0) node[right] {$x$};
  \\draw[->, thick, gray] (0,-1.0) -- (0,3.8) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[very thick, cyan] (-0.5,2.8) -- (4.2,0.4) node[right] {$${lineLabel}$};
  \\coordinate (M) at (3.1,3.1);
  \\coordinate (H) at (2.1,1.47);
  \\draw[dashed, very thick, rose] (M) -- (H) node[midway, right] {$d=${dVal}$};
  \\filldraw[rose] (M) circle (2.2pt) node[above right] {$${mLabel}$};
  \\filldraw[amber] (H) circle (2pt) node[below left] {$H$};
\\end{tikzpicture}`;
}

export function tikzCircleWithTangent(a: number, b: number, r: number, mLabel: string): string {
  const rPlot = 1.65;
  const cx = 1.8;
  const cy = 1.6;
  const mx = Number((cx + rPlot * 0.6).toFixed(2));
  const my = Number((cy + rPlot * 0.8).toFixed(2));
  const t1x = Number((mx - 1.2 * 0.8).toFixed(2));
  const t1y = Number((my + 1.2 * 0.6).toFixed(2));
  const t2x = Number((mx + 1.2 * 0.8).toFixed(2));
  const t2y = Number((my - 1.2 * 0.6).toFixed(2));

  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (-0.8,0) -- (4.8,0) node[right] {$x$};
  \\draw[->, thick, gray] (0,-0.8) -- (0,4.0) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[very thick, cyan] (${cx},${cy}) circle (${rPlot});
  \\draw[dashed, teal] (${cx},${cy}) -- (${mx},${my}) node[midway, above left] {$R=${r}$};
  \\draw[very thick, rose] (${t1x},${t1y}) -- (${t2x},${t2y}) node[right] {$\\Delta$};
  \\filldraw[amber] (${cx},${cy}) circle (2.2pt) node[below left] {$I(${a};${b})$};
  \\filldraw[rose] (${mx},${my}) circle (2.2pt) node[above right] {$${mLabel}$};
\\end{tikzpicture}`;
}

export function tikzEllipseDiagram(a: number, b: number, cVal: string): string {
  const rx = 2.6;
  const ry = Number(Math.max(1.25, (b / a) * rx).toFixed(2));
  const fc = Number(Math.sqrt(Math.max(0.4, rx * rx - ry * ry)).toFixed(2));
  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (-3.6,0) -- (3.8,0) node[right] {$x$};
  \\draw[->, thick, gray] (0,-2.3) -- (0,2.5) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[very thick, cyan] (0,0) ellipse (${rx} and ${ry});
  \\coordinate (F1) at (-${fc},0);
  \\coordinate (F2) at (${fc},0);
  \\coordinate (M) at (1.3,${ Number((ry * Math.sqrt(1 - (1.3 / rx) ** 2)).toFixed(2)) });
  \\draw[dashed, amber] (F1) -- (M) -- (F2);
  \\filldraw[rose] (F1) circle (2.2pt) node[below] {$F_1(-${cVal};0)$};
  \\filldraw[rose] (F2) circle (2.2pt) node[below] {$F_2(${cVal};0)$};
  \\filldraw[teal] (M) circle (2pt) node[above right] {$M(x;y)$};
  \\node[below left] at (-${rx},0) {$-${a}$};
  \\node[below right] at (${rx},0) {$${a}$};
  \\node[above right] at (0,${ry}) {$${b}$};
\\end{tikzpicture}`;
}

export function tikzParabolaConic(p: number): string {
  const fHalf = Number((p / 2).toFixed(2));
  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[->, thick, gray] (-2.2,0) -- (3.8,0) node[right] {$x$};
  \\draw[->, thick, gray] (0,-2.4) -- (0,2.6) node[above] {$y$};
  \\node[below left] at (0,0) {$O$};
  \\draw[dashed, very thick, amber] (-1.1,-2.2) -- (-1.1,2.2) node[above] {$\\Delta: x=-${fHalf}$};
  \\draw[very thick, cyan, domain=-2.0:2.0] plot ({0.45*(\\x)*(\\x)}, \\x);
  \\coordinate (F) at (1.1,0);
  \\coordinate (M) at (1.44,1.79);
  \\coordinate (H) at (-1.1,1.79);
  \\draw[dashed, rose] (H) -- (M) -- (F);
  \\filldraw[rose] (F) circle (2.2pt) node[below right] {$F(${fHalf};0)$};
  \\filldraw[teal] (M) circle (2pt) node[above right] {$M$};
  \\filldraw[amber] (H) circle (1.8pt) node[left] {$H$};
\\end{tikzpicture}`;
}

export function tikzCountingTree(
  rootText: string,
  b1Text: string,
  b2Text: string,
  leafCountText: string
): string {
  return `\\begin{tikzpicture}[scale=0.85]
  \\coordinate (R) at (0,1.6);
  \\coordinate (A1) at (2.2,2.6);
  \\coordinate (A2) at (2.2,0.6);
  \\coordinate (B1) at (4.6,3.1);
  \\coordinate (B2) at (4.6,2.1);
  \\coordinate (B3) at (4.6,1.1);
  \\coordinate (B4) at (4.6,0.1);
  \\draw[->, very thick, cyan] (R) -- (A1);
  \\draw[->, very thick, cyan] (R) -- (A2);
  \\draw[->, thick, teal] (A1) -- (B1);
  \\draw[->, thick, teal] (A1) -- (B2);
  \\draw[->, thick, amber] (A2) -- (B3);
  \\draw[->, thick, amber] (A2) -- (B4);
  \\filldraw[rose] (R) circle (2.2pt) node[left] {$${rootText}$};
  \\filldraw[cyan] (A1) circle (2pt) node[above left] {$${b1Text}$};
  \\filldraw[cyan] (A2) circle (2pt) node[below left] {$${b2Text}$};
  \\filldraw[teal] (B1) circle (1.8pt) node[right] {$${leafCountText}$};
  \\filldraw[teal] (B2) circle (1.8pt);
  \\filldraw[amber] (B3) circle (1.8pt);
  \\filldraw[amber] (B4) circle (1.8pt);
\\end{tikzpicture}`;
}

export function tikzSampleSpaceVenn(omegaSize: string, eName: string, eSize: string): string {
  return `\\begin{tikzpicture}[scale=0.85]
  \\draw[very thick, sky] (0,0) rectangle (5.4,3.0);
  \\node[above right] at (0.15,2.45) {$\\Omega\\ (n(\\Omega)=${omegaSize})$};
  \\filldraw[cyan] (2.9,1.45) circle (1.05);
  \\node at (2.9,1.45) {$${eName}\\ (${eSize})$};
  \\node[amber] at (1.05,0.75) {$\\overline{${eName}}$};
\\end{tikzpicture}`;
}
