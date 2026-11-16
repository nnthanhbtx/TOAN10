import React, { useState } from 'react';
import { LessonCatalogItem, ExamSet } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import {
  BookOpen,
  X,
  FolderOpen,
  FileText,
  Play,
  Plus,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Layers,
  Sparkles,
  Trash2,
  BookMarked,
} from 'lucide-react';

interface LessonCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessons: LessonCatalogItem[];
  currentExamId: string;
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  onSelectPracticeExam: (exam: ExamSet, lessonId: string) => void;
  onCreatePracticeExamForLesson: (lesson: LessonCatalogItem) => void;
  onDeleteCustomPracticeExam?: (examId: string) => void;
  onOpenTheoryForLesson?: (lessonId: string) => void;
}

export const LessonCatalogModal: React.FC<LessonCatalogModalProps> = ({
  isOpen,
  onClose,
  lessons,
  currentExamId,
  selectedLessonId,
  onSelectLesson,
  onSelectPracticeExam,
  onCreatePracticeExamForLesson,
  onDeleteCustomPracticeExam,
  onOpenTheoryForLesson,
}) => {
  const [expandedLessonIds, setExpandedLessonIds] = useState<Set<string>>(
    () => new Set([selectedLessonId || 'bai-1'])
  );

  if (!isOpen) return null;

  const activeLesson =
    lessons.find((l) => l.id === selectedLessonId) || lessons[0];

  const toggleExpandLesson = (lessonId: string) => {
    onSelectLesson(lessonId);
    setExpandedLessonIds((prev) => {
      const next = new Set(prev);
      if (next.has(lessonId)) {
        next.delete(lessonId);
      } else {
        next.add(lessonId);
      }
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2.5 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#071126] border border-sky-800/80 rounded-2xl max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 bg-gradient-to-r from-[#091534] via-[#0c1d47] to-[#091534] border-b border-sky-800/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[#040817] shadow-lg shadow-cyan-500/20 shrink-0">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-xl font-extrabold text-white tracking-tight">
                  Danh Mục Bài Học Toán 10 (Bài 1 – Bài {lessons.length})
                </h2>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  <Layers className="w-3 h-3" />
                  {lessons.length} Bài học · Danh mục Đề ôn
                </span>
              </div>
              <p className="text-xs text-sky-300 mt-0.5">
                Chọn từ Bài 1 đến Bài {lessons.length} (SGK Toán 10 Tập 1 & Tập 2 - Kết nối tri thức) để mở danh mục <strong className="text-amber-300">Đề ôn</strong> tương ứng của từng bài học
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-800 transition-colors shrink-0"
            title="Đóng danh mục bài học"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Body: Left Tree (Bài 1 -> Bài 27) & Right Detail (Danh mục: Đề ôn) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-sky-900/70">
          {/* Cột Trái: Danh mục Bài 1, Bài 2, ..., Bài 27 kèm cây thư mục Đề ôn */}
          <div className="lg:col-span-5 xl:col-span-4 p-3 sm:p-4 bg-[#060e21] overflow-y-auto max-h-[46vh] lg:max-h-[75vh] space-y-2">
            <div className="flex items-center justify-between px-2 pb-1.5 border-b border-sky-900/60">
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                Danh Mục: Bài 1 → Bài {lessons.length}
              </span>
              <span className="text-[11px] text-sky-400 font-semibold">
                {lessons.length} bài học
              </span>
            </div>

            <div className="space-y-1.5">
              {lessons.map((lesson) => {
                const isSelected = activeLesson.id === lesson.id;
                const isExpanded = expandedLessonIds.has(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isSelected
                        ? 'bg-[#0b1739] border-cyan-500/60 shadow-md'
                        : 'bg-[#081229]/90 border-sky-900/60 hover:border-sky-800'
                    }`}
                  >
                    {/* Dòng tiêu đề Bài 1, Bài 2, ... Bài 14 */}
                    <button
                      type="button"
                      onClick={() => toggleExpandLesson(lesson.id)}
                      className="w-full flex items-center justify-between gap-2.5 p-2.5 sm:p-3 text-left"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`px-2.5 py-1 rounded-lg font-mono text-xs font-black shrink-0 ${
                            isSelected
                              ? 'bg-cyan-500 text-[#040817]'
                              : 'bg-[#0d1d42] text-cyan-300 border border-sky-800'
                          }`}
                        >
                          {lesson.name}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-white truncate">
                            {lesson.topicTitle}
                          </div>
                          <div className="text-[11px] text-sky-300 flex items-center gap-1.5 mt-0.5">
                            <FolderOpen className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>
                              Danh mục: <strong className="text-amber-300">Đề ôn</strong> ({lesson.practiceExams.length} đề)
                            </span>
                          </div>
                        </div>
                      </div>

                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-sky-400 shrink-0" />
                      )}
                    </button>

                    {/* Bên trong mỗi Bài: Danh mục Đề ôn */}
                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1.5 bg-[#050b1a]/90 border-t border-sky-900/60 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-amber-300 px-1">
                          <div className="flex items-center gap-1.5">
                            <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                            <span>Danh mục: Đề ôn ({lesson.name})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onCreatePracticeExamForLesson(lesson)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Thêm Đề ôn</span>
                          </button>
                        </div>

                        <div className="space-y-1.5 pl-2 border-l-2 border-amber-500/40">
                          {lesson.practiceExams.map((exam, idx) => {
                            const isCurrent = exam.id === currentExamId;
                            return (
                              <div
                                key={exam.id}
                                className={`flex items-center justify-between gap-2 p-2 rounded-lg border text-xs transition-colors ${
                                  isCurrent
                                    ? 'bg-emerald-500/15 border-emerald-400/50 text-emerald-200'
                                    : 'bg-[#0b1739] border-sky-900/80 text-slate-200 hover:border-cyan-500/40'
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => {
                                    onSelectPracticeExam(exam, lesson.id);
                                    onClose();
                                  }}
                                  className="flex items-center gap-2 min-w-0 flex-1 text-left"
                                >
                                  <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                  <div className="min-w-0">
                                    <div className="font-bold text-white truncate">
                                      Đề ôn #{idx + 1}: {exam.title}
                                    </div>
                                    <div className="text-[10px] text-sky-300">
                                      {exam.part1.length +
                                        exam.part2.length +
                                        exam.part3.length +
                                        (exam.part4?.length || 0)}{' '}
                                      câu hỏi · {exam.durationMinutes} phút
                                    </div>
                                  </div>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    onSelectPracticeExam(exam, lesson.id);
                                    onClose();
                                  }}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black shrink-0 flex items-center gap-1 ${
                                    isCurrent
                                      ? 'bg-emerald-400 text-[#040817]'
                                      : 'bg-cyan-500 hover:bg-cyan-400 text-[#040817]'
                                  }`}
                                >
                                  <Play className="w-3 h-3 fill-current" />
                                  <span>{isCurrent ? 'Đang mở' : 'Làm đề'}</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cột Phải: Chi tiết Bài học đang chọn & Danh mục Đề ôn bên trong Bài đó */}
          <div className="lg:col-span-7 xl:col-span-8 p-4 sm:p-6 space-y-5 overflow-y-auto max-h-[75vh]">
            {/* Thông tin Bài học đang chọn */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0b1739] via-[#091430] to-[#071126] border border-cyan-500/40 space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-cyan-500 text-[#040817] font-mono text-xs sm:text-sm font-black">
                    {activeLesson.name}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-[#071126] border border-sky-800 text-sky-300 text-xs font-semibold">
                    {activeLesson.chapter}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {onOpenTheoryForLesson && (
                    <button
                      type="button"
                      onClick={() => {
                        onOpenTheoryForLesson(activeLesson.id);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/50 text-xs font-bold transition-colors"
                    >
                      <BookMarked className="w-4 h-4 text-amber-400" />
                      <span>Lý Thuyết & Công Thức {activeLesson.name}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onCreatePracticeExamForLesson(activeLesson)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 text-xs font-bold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tạo / Thêm Đề Ôn Cho {activeLesson.name}</span>
                  </button>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {activeLesson.name}: {activeLesson.topicTitle}
              </h3>

              <div className="p-3.5 rounded-xl bg-[#060e21]/90 border border-sky-900/80 text-xs sm:text-sm text-sky-100 leading-relaxed">
                <span className="font-bold text-amber-300 mr-1.5">
                  Trọng tâm kiến thức {activeLesson.name}:
                </span>
                <MathRenderer content={activeLesson.keySummary} />
              </div>
            </div>

            {/* Danh mục: Đề ôn của Bài đang chọn */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-sky-900/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <FolderOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-amber-300 uppercase tracking-wide">
                      Danh Mục: Đề Ôn — {activeLesson.name}
                    </h4>
                    <p className="text-xs text-sky-300">
                      Chọn một đề ôn bên dưới để bắt đầu ôn luyện hoặc làm bài kiểm tra tính giờ
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                  {activeLesson.practiceExams.length} đề ôn
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {activeLesson.practiceExams.map((exam, idx) => {
                  const totalQ =
                    exam.part1.length +
                    exam.part2.length +
                    exam.part3.length +
                    (exam.part4?.length || 0);
                  const isCurrent = exam.id === currentExamId;
                  const isCustomExam = !exam.id.startsWith('de-on-bai-');

                  return (
                    <div
                      key={exam.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                        isCurrent
                          ? 'bg-gradient-to-r from-emerald-950/50 via-[#0b1739] to-[#0b1739] border-emerald-400/60 shadow-lg'
                          : 'bg-[#0b1739] border-sky-800/70 hover:border-cyan-400/50 shadow-md'
                      }`}
                    >
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-extrabold">
                            <FileText className="w-3.5 h-3.5" />
                            Đề ôn số {idx + 1}
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-white">
                            {exam.title}
                          </span>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-bold">
                              <CheckCircle2 className="w-3 h-3" />
                              Đang chọn
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-sky-200/90 leading-relaxed">
                          {exam.subtitle || exam.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-sky-300 font-semibold">
                          <span className="px-2 py-0.5 rounded-md bg-[#071126] border border-sky-900">
                            Tổng: {totalQ} câu hỏi
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#071126] border border-sky-900">
                            Phần I: {exam.part1.length} câu
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#071126] border border-sky-900">
                            Phần II: {exam.part2.length} câu
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#071126] border border-sky-900">
                            Phần III: {exam.part3.length} câu
                          </span>
                          {exam.part4 && exam.part4.length > 0 && (
                            <span className="px-2 py-0.5 rounded-md bg-[#071126] border border-sky-900">
                              Phần IV: {exam.part4.length} câu
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-md bg-[#071126] border border-sky-900 text-amber-300">
                            Thời gian: {exam.durationMinutes} phút
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                        {isCustomExam && onDeleteCustomPracticeExam && (
                          <button
                            type="button"
                            onClick={() => onDeleteCustomPracticeExam(exam.id)}
                            className="p-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/40 transition-colors"
                            title="Xoá đề ôn tự tạo này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            onSelectPracticeExam(exam, activeLesson.id);
                            onClose();
                          }}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-[#040817] font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>Mở Đề Ôn Này</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 bg-[#09132e] border-t border-sky-800/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-sky-300">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Mẹo: Bạn có thể bấm <strong>"Tạo / Thêm Đề Ôn"</strong> để tải file Word/PDF đề ôn mới vào bất kỳ bài học nào từ Bài 1 đến Bài {lessons.length}.
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#040817] font-bold text-xs transition-colors ml-auto"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
