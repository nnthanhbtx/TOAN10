import {
  ExamSet,
  LessonCatalogItem,
  MultipleChoiceQuestion,
  StepOrderingQuestion,
} from '../types/exam';
import { chapter1Lessons } from './lessons/chapter1Lessons';
import { chapter2Lessons } from './lessons/chapter2Lessons';
import { CHAPTER_3_LESSONS } from './lessons/chapter3Lessons';
import { CHAPTER_4_LESSONS_A } from './lessons/chapter4LessonsA';
import { CHAPTER_4_LESSONS_B } from './lessons/chapter4LessonsB';
import { CHAPTER_5_LESSONS } from './lessons/chapter5Lessons';
import { CHAPTER_6_LESSONS_A } from './lessons/chapter6LessonsA';
import { CHAPTER_6_LESSONS_B } from './lessons/chapter6LessonsB';
import { CHAPTER_7_LESSONS_A } from './lessons/chapter7LessonsA';
import { CHAPTER_7_LESSONS_B } from './lessons/chapter7LessonsB';
import { CHAPTER_8_LESSONS } from './lessons/chapter8Lessons';
import { CHAPTER_9_LESSONS } from './lessons/chapter9Lessons';
import {
  ExamSupplement,
  RawStepOrderingSupplement,
  SUPPLEMENTS_CH1_TO_3,
} from './lessons/supplementsCh1To3';
import { SUPPLEMENTS_CH4_TO_5 } from './lessons/supplementsCh4To5';
import { LESSON_THEORY_CATALOG } from './lessonTheoryCatalog';

const ALL_SUPPLEMENTS: Record<string, ExamSupplement> = {
  ...SUPPLEMENTS_CH1_TO_3,
  ...SUPPLEMENTS_CH4_TO_5,
};

const TARGET_KEYS: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

function distributeMcqKey(q: MultipleChoiceQuestion, index: number): MultipleChoiceQuestion {
  const desiredKey = TARGET_KEYS[(index * 3 + 1) % 4];
  if (
    q.correctAnswer === desiredKey ||
    /phương án|đáp án/i.test(q.explanation)
  ) {
    return q;
  }
  const currentCorrectOpt = q.options.find((o) => o.key === q.correctAnswer);
  const targetOpt = q.options.find((o) => o.key === desiredKey);
  if (!currentCorrectOpt || !targetOpt) {
    return q;
  }
  const swappedOptions = q.options.map((opt) => {
    if (opt.key === q.correctAnswer) {
      return { ...opt, content: targetOpt.content };
    }
    if (opt.key === desiredKey) {
      return { ...opt, content: currentCorrectOpt.content };
    }
    return opt;
  });
  return {
    ...q,
    options: swappedOptions,
    correctAnswer: desiredKey,
  };
}

function convertRawStepQuestion(
  raw: StepOrderingQuestion | RawStepOrderingSupplement,
  number: number
): StepOrderingQuestion {
  if ('problemStatement' in raw) {
    return {
      ...raw,
      part: 'part4',
      number,
      points: 0.75,
    };
  }
  const sentences = raw.prompt
    .replace(/\.(\s+)/g, '.\n')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
  const hasMultipleSentences = sentences.length > 1;
  const problemStatement = hasMultipleSentences
    ? sentences.slice(0, -1).join(' ')
    : raw.prompt;
  const conclusionTarget = hasMultipleSentences
    ? sentences[sentences.length - 1]
    : 'Sắp xếp các bước giải sau theo thứ tự logic đúng.';

  const orderedSteps = raw.correctOrder
    .map((stepId) => raw.steps.find((s) => s.id === stepId))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const finalSteps = (orderedSteps.length === raw.steps.length ? orderedSteps : raw.steps).map(
    (s, idx) => ({
      id: s.id,
      originalIndex: idx + 1,
      content: s.content,
      roleDescription: s.roleDescription ?? `Bước ${idx + 1} trong chuỗi lập luận`,
    })
  );

  return {
    id: raw.id,
    part: 'part4',
    number,
    topic: raw.topic,
    problemStatement,
    conclusionTarget,
    steps: finalSteps,
    pedagogicalTip:
      raw.pedagogicalTip ??
      'Xác định giả thiết xuất phát, thực hiện biến đổi trung gian rồi mới đi đến kết luận cuối cùng.',
    teacherAnalysis: raw.explanation,
    points: 0.75,
  };
}

function normalizeLessonExam(exam: ExamSet): ExamSet {
  const supplement = ALL_SUPPLEMENTS[exam.id];
  const mergedPart1 = [
    ...exam.part1,
    ...(supplement ? supplement.extraPart1.map((q, idx) => distributeMcqKey(q, idx)) : []),
  ]
    .slice(0, 12)
    .map((q, idx) => ({
      ...q,
      part: 'part1' as const,
      number: idx + 1,
      points: 0.25,
    }));

  const mergedPart2 = exam.part2.slice(0, 2).map((q, idx) => ({
    ...q,
    part: 'part2' as const,
    number: idx + 1,
  }));

  const mergedPart3 = exam.part3.slice(0, 4).map((q, idx) => ({
    ...q,
    part: 'part3' as const,
    number: idx + 1,
    points: 0.5,
  }));

  const extraPart4Converted = supplement
    ? supplement.extraPart4.map((raw, idx) =>
        convertRawStepQuestion(raw, exam.part4.length + idx + 1)
      )
    : [];

  const mergedPart4 = [...exam.part4, ...extraPart4Converted]
    .slice(0, 4)
    .map((q, idx) => ({
      ...q,
      part: 'part4' as const,
      number: idx + 1,
      points: 0.75,
      steps: q.steps.map((s, sIdx) => ({
        ...s,
        originalIndex: sIdx + 1,
      })),
    }));

  return {
    ...exam,
    durationMinutes: 90,
    totalPoints: 10,
    description:
      exam.description ||
      'Đề ôn tập chuẩn cấu trúc 22 câu (10,0 điểm): Phần I (12 câu trắc nghiệm nhiều phương án - 3,0 điểm), Phần II (2 câu Đúng/Sai - 2,0 điểm), Phần III (4 câu trả lời ngắn - 2,0 điểm), Phần IV (4 câu tự luận sắp xếp bước giải - 3,0 điểm). Bám sát yêu cầu cần đạt, ví dụ, luyện tập và vận dụng trong SGK Toán 10 (Kết nối tri thức với cuộc sống).',
    part1: mergedPart1,
    part2: mergedPart2,
    part3: mergedPart3,
    part4: mergedPart4,
  };
}

const RAW_LESSON_CATALOG: LessonCatalogItem[] = [
  ...chapter1Lessons,
  ...chapter2Lessons,
  ...CHAPTER_3_LESSONS,
  ...CHAPTER_4_LESSONS_A,
  ...CHAPTER_4_LESSONS_B,
  ...CHAPTER_5_LESSONS,
  ...CHAPTER_6_LESSONS_A,
  ...CHAPTER_6_LESSONS_B,
  ...CHAPTER_7_LESSONS_A,
  ...CHAPTER_7_LESSONS_B,
  ...CHAPTER_8_LESSONS,
  ...CHAPTER_9_LESSONS,
];

/**
 * Danh mục 27 Bài học Toán 10 - Tập 1 & Tập 2 (Kết nối tri thức với cuộc sống)
 * Mỗi bài học (Bài 1 -> Bài 27) có 2 Đề ôn tập chuyên biệt (tổng 54 đề),
 * mỗi đề chuẩn 22 câu: Phần I (12 câu), Phần II (2 câu), Phần III (4 câu), Phần IV (4 câu).
 */
export const INITIAL_LESSON_CATALOG: LessonCatalogItem[] = RAW_LESSON_CATALOG.map((lesson) => {
  const theoryMeta = LESSON_THEORY_CATALOG.find((t) => t.lessonId === lesson.id);
  return {
    ...lesson,
    topicTitle: theoryMeta ? theoryMeta.topicTitle : lesson.topicTitle,
    chapter: theoryMeta ? theoryMeta.chapter : lesson.chapter,
    practiceExams: lesson.practiceExams.map(normalizeLessonExam),
  };
});


