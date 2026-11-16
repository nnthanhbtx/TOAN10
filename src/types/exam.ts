export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer' | 'step_ordering';

export type ExamPart = 'part1' | 'part2' | 'part3' | 'part4';

// Phần I: Trắc nghiệm 4 lựa chọn (12 câu)
export interface MultipleChoiceQuestion {
  id: string;
  part: 'part1';
  number: number;
  topic: string;
  prompt: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    content: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  pedagogicalTip: string; // Lời khuyên/Bẫy sai lầm của chuyên gia
  points: number; // Thường là 0.25 điểm
  tikzType?: string;
  tikzCode?: string;
}

// Phần II: Trắc nghiệm Đúng/Sai (4 câu, mỗi câu 4 ý a, b, c, d)
export interface TrueFalseStatement {
  id: string; // 'a' | 'b' | 'c' | 'd'
  label: 'a' | 'b' | 'c' | 'd';
  statement: string;
  isCorrect: boolean; // true = Đúng, false = Sai
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  part: 'part2';
  number: number;
  topic: string;
  prompt: string;
  statements: TrueFalseStatement[];
  pedagogicalTip: string;
  tikzType?: string;
  tikzCode?: string;
  // Điểm tính theo chuẩn Bộ GD&ĐT 2025: đúng 1 ý = 0.1đ, 2 ý = 0.25đ, 3 ý = 0.5đ, 4 ý = 1.0đ (tổng 1.0đ/câu)
}

// Phần III: Trả lời ngắn (6 câu)
export interface ShortAnswerQuestion {
  id: string;
  part: 'part3';
  number: number;
  topic: string;
  prompt: string;
  acceptableAnswers: string[]; // Các đáp án được chấp nhận (ví dụ: ["5", "5.0"], ["-3/2", "-1.5"])
  explanation: string;
  pedagogicalTip: string;
  unit?: string;
  points: number; // 0.25đ/câu
  tikzType?: string;
  tikzCode?: string;
}

// Phần IV: Tự luận ghép/sắp xếp thứ tự các dòng lời giải (4 câu)
export interface SolutionStep {
  id: string;
  originalIndex: number; // Thứ tự đúng (1, 2, 3, 4, 5, ...)
  content: string;
  roleDescription: string; // Ví dụ: "Tìm điều kiện xác định", "Áp dụng định lý cô-sin", v.v.
}

export interface StepOrderingQuestion {
  id: string;
  part: 'part4';
  number: number;
  topic: string;
  problemStatement: string; // Đề bài toán tự luận
  conclusionTarget: string; // Yêu cầu chứng minh/kết luận cần đạt được
  steps: SolutionStep[]; // Danh sách các bước theo thứ tự CHUẨN
  pedagogicalTip: string;
  teacherAnalysis: string; // Phân tích phương pháp tư duy suy luận ngược/xuôi
  points: number; // 0.375 hoặc 0.5đ/câu
  tikzType?: string;
  tikzCode?: string;
}

export interface ExamSet {
  id: string;
  title: string;
  subtitle: string;
  grade: number;
  durationMinutes: number;
  totalPoints: number;
  description: string;
  lessonId?: string; // 'bai-1' .. 'bai-14' nếu thuộc danh mục Đề ôn của từng Bài học
  part1: MultipleChoiceQuestion[];
  part2: TrueFalseQuestion[];
  part3: ShortAnswerQuestion[];
  part4: StepOrderingQuestion[];
}

export interface FormulaHighlightBox {
  label: string; // Tiêu đề khung kiến thức / công thức cần nhớ
  formula: string; // Nội dung công thức / định lí chính xác 100% theo SGK (hỗ trợ LaTeX)
  note?: string; // Chú ý / Nhận xét đi kèm trong SGK
}

export interface TheorySection {
  id: string;
  title: string; // Đúng tên mục trong bài học SGK (ví dụ: "1. Mệnh đề, mệnh đề chứa biến")
  theoryPoints: string[]; // Các ý lý thuyết trọng tâm chính xác 100% theo bài học SGK
  formulas: FormulaHighlightBox[]; // Các khung kiến thức / công thức cần nhớ trong mục
  tikzCode?: string; // Hình minh họa chuẩn TikZ (nếu có)
  tikzCaption?: string;
}

export interface QuickFormulaCard {
  name: string;
  expression: string;
  description: string;
}

export interface LessonTheoryData {
  lessonId: string; // 'bai-1' .. 'bai-27'
  lessonNumber: number; // 1 .. 27
  name: string; // 'Bài 1' .. 'Bài 27'
  topicTitle: string; // Tên bài học chuẩn 100% SGK (không lấy bài ôn tập cuối chương)
  chapter: string; // Chương I .. Chương IX
  volume: 'Tập 1' | 'Tập 2';
  pageRange: string; // Trang trong SGK
  terms: string[]; // Mục "THUẬT NGỮ" đầu bài học trong SGK
  objectives: string[]; // Mục "KIẾN THỨC, KĨ NĂNG" đầu bài học trong SGK
  sections: TheorySection[]; // Nội dung Lý thuyết & Khung kiến thức từng mục trong bài học
  quickFormulas: QuickFormulaCard[]; // Bảng tóm tắt nhanh công thức cần nhớ 100% của bài học
}

export interface LessonCatalogItem {
  id: string; // 'bai-1' .. 'bai-27'
  lessonNumber: number; // 1 .. 27
  name: string; // 'Bài 1', 'Bài 2', ..., 'Bài 27'
  topicTitle: string; // Tên chuyên đề bài học Toán 10
  chapter: string;
  keySummary: string;
  practiceExams: ExamSet[]; // Danh mục: Đề ôn bên trong mỗi bài
}

export interface StudentAnswers {
  part1: Record<string, 'A' | 'B' | 'C' | 'D'>; // questionId -> selected key
  part2: Record<string, Record<'a' | 'b' | 'c' | 'd', boolean | null>>; // questionId -> statementId -> true/false
  part3: Record<string, string>; // questionId -> typed text
  part4: Record<string, string[]>; // questionId -> array of step ids in current arranged order
}

export interface ExamViolation {
  id: string;
  timestamp: string;
  type: 'tab_switch' | 'screen_covered' | 'split_screen' | 'copy_attempt';
  label: string;
  detail: string;
}

export interface PartScoreDetail {
  part1Score: number;
  part1Max: number;
  part1CorrectCount: number;

  part2Score: number;
  part2Max: number;
  part2Details: {
    questionId: number;
    correctStatementsCount: number;
    scoreAwarded: number;
  }[];

  part3Score: number;
  part3Max: number;
  part3CorrectCount: number;

  part4Score: number;
  part4Max: number;
  part4Details: {
    questionId: number;
    isFullyCorrect: boolean;
    correctPositionsCount: number;
    scoreAwarded: number;
  }[];

  totalScore: number;
  totalMax: number;
  rank: 'Xuất sắc' | 'Giỏi' | 'Khá' | 'Trung bình' | 'Cần cố gắng';
  competencyAnalysis: {
    knowledgeRecall: number; // Tái hiện kiến thức (%)
    understanding: number; // Thông hiểu (%)
    application: number; // Vận dụng (%)
    logicalReasoning: number; // Suy luận logic & tự luận (%)
  };
  violationCount?: number;
  violations?: ExamViolation[];
}

export interface LeaderboardEntry {
  id: string;
  studentName: string;
  className: string;
  examId: string;
  examTitle: string;
  totalScore: number;
  part1Score: number;
  part2Score: number;
  part3Score: number;
  part4Score: number;
  durationSeconds: number;
  rank: 'Xuất sắc' | 'Giỏi' | 'Khá' | 'Trung bình' | 'Cần cố gắng';
  submittedAt: string;
  isCurrentUser?: boolean;
  violationCount?: number;
  violationDetails?: string;
}


