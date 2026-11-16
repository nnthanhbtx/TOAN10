import { LessonTheoryData } from '../types/exam';
import { THEORY_TAP_1_A } from './theory/theoryTap1A';
import { THEORY_TAP_1_B } from './theory/theoryTap1B';
import { THEORY_TAP_2_A } from './theory/theoryTap2A';
import { THEORY_TAP_2_B } from './theory/theoryTap2B';

/**
 * Danh mục Lý thuyết & Công thức cần nhớ chính xác 100% theo SGK Toán 10 (Tập 1 & Tập 2)
 * Bộ sách "Kết nối tri thức với cuộc sống" — gồm 27 bài học chính thức (Bài 1 -> Bài 27,
 * không lấy các bài ôn tập cuối chương).
 */
export const LESSON_THEORY_CATALOG: LessonTheoryData[] = [
  ...THEORY_TAP_1_A,
  ...THEORY_TAP_1_B,
  ...THEORY_TAP_2_A,
  ...THEORY_TAP_2_B,
];

export function getLessonTheoryById(lessonId: string): LessonTheoryData | undefined {
  return LESSON_THEORY_CATALOG.find((item) => item.lessonId === lessonId);
}
