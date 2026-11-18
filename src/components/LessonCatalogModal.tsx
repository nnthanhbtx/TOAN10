import React, { useState, useMemo } from 'react';
import { LessonCatalogItem, ExamSet } from '../types/exam';
import { LESSON_THEORY_CATALOG } from '../data/lessonTheoryCatalog';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';
import {
  BookOpen,
  X,
  FileText,
  Play,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  BookMarked,
  Bookmark,
  GraduationCap,
  Calculator,
  Search,
  ArrowLeft,
  PlusCircle,
} from 'lucide-react';

interface LessonCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessons: LessonCatalogItem[];
  currentExamId: string;
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  onSelectPracticeExam: (exam: ExamSet, lessonId: string) => void;
  onOpenImportForLesson?: (lesson: LessonCatalogItem) => void;
}

export const LessonCatalogModal: React.FC<LessonCatalogModalProps> = ({
  isOpen,
  onClose,
  lessons,
  currentExamId,
  selectedLessonId,
  onSelectLesson,
  onSelectPracticeExam,
  onOpenImportForLesson,
}) => {
  const [expandedLessonIds, setExpandedLessonIds] = useState<Set<string>>(
    () => new Set([selectedLessonId || 'bai-1'])
  );
  const [activeSubSection, setActiveSubSection] = useState<'theory' | 'exams'>('exams');
  const [mobilePane, setMobilePane] = useState<'list' | 'detail'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [volumeFilter, setVolumeFilter] = useState<'all' | 'Tập 1' | 'Tập 2'>('all');

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const lessonNum = parseInt(lesson.id.replace('bai-', ''), 10);
      const vol = lessonNum <= 14 ? 'Tập 1' : 'Tập 2';
      if (volumeFilter !== 'all' && vol !== volumeFilter) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        lesson.name.toLowerCase().includes(q) ||
        lesson.topicTitle.toLowerCase().includes(q) ||
        lesson.chapter.toLowerCase().includes(q)
      );
    });
  }, [lessons, volumeFilter, searchQuery]);

  if (!isOpen) return null;

  const activeLesson =
    lessons.find((l) => l.id === selectedLessonId) ||
    filteredLessons[0] ||
    lessons[0];

  const activeTheory =
    LESSON_THEORY_CATALOG.find((t) => t.lessonId === activeLesson.id) ||
    LESSON_THEORY_CATALOG[0];

  const practiceExamsList = activeLesson.practiceExams;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-1.5 sm:p-5 overflow-hidden animate-fadeIn">
      <div className="bg-[#071126] border border-sky-800/80 rounded-2xl max-w-6xl w-full max-h-[92vh] max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2.5 px-3.5 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#091534] via-[#0c1d47] to-[#091534] border-b border-sky-800/70 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[#040817] shadow-lg shrink-0">
              <BookOpen className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-xl font-extrabold text-white tracking-tight truncate">
                Bài Học Toán 10 (Bài 1 – Bài {lessons.length})
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] p-2 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-800 transition-colors flex items-center justify-center shrink-0"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Thanh chuyển nhanh 2 khung trên màn hình Điện thoại (< lg) để không bị kẹt cuộn lồng nhau trên iOS */}
        <div className="grid grid-cols-2 gap-1.5 p-2 bg-[#050c1d] border-b border-sky-900/70 lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobilePane('list')}
            className={`min-h-[38px] px-2.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
              mobilePane === 'list'
                ? 'bg-cyan-500 text-[#040817] border-cyan-300'
                : 'bg-[#0b1739] text-sky-200 border-sky-800'
            }`}
          >
            1. Danh Sách Bài 1–{lessons.length}
          </button>
          <button
            type="button"
            onClick={() => setMobilePane('detail')}
            className={`min-h-[38px] px-2.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all truncate ${
              mobilePane === 'detail'
                ? 'bg-cyan-500 text-[#040817] border-cyan-300'
                : 'bg-[#0b1739] text-sky-200 border-sky-800'
            }`}
          >
            2. {activeLesson.name} (LT & Đề)
          </button>
        </div>

        {/* Main Body: Left Tree (Bài 1 -> Bài 27) & Right Content (Lý thuyết | Đề ôn) */}
        <div className="flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-12 lg:divide-x divide-sky-900/70 overflow-hidden">
          {/* Cột Trái: Danh sách Bài 1 -> Bài 27 */}
          <div
            className={`${
              mobilePane === 'list' ? 'flex-1' : 'hidden'
            } lg:block lg:col-span-4 xl:col-span-4 p-3 sm:p-4 bg-[#060e21] overflow-y-auto ios-scroll min-h-0 space-y-2.5`}
          >
            {/* Tìm kiếm & Lọc Tập 1 / Tập 2 */}
            <div className="space-y-2 sticky top-0 bg-[#060e21] pb-2 z-10 border-b border-sky-900/60">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-sky-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm nhanh Bài 1 -> Bài 27..."
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#0b1739] border border-sky-800/80 text-xs text-white placeholder-sky-400/60 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {(['all', 'Tập 1', 'Tập 2'] as const).map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setVolumeFilter(vol)}
                    className={`min-h-[34px] py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all ${
                      volumeFilter === vol
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                        : 'bg-[#0b1739] border-sky-900 text-sky-300 hover:text-white'
                    }`}
                  >
                    {vol === 'all' ? 'Tất cả (27)' : vol === 'Tập 1' ? 'Tập 1 (1–14)' : 'Tập 2 (15–27)'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pb-4">
              {filteredLessons.map((lesson) => {
                const isSelected = activeLesson.id === lesson.id;
                const isExpanded = expandedLessonIds.has(lesson.id);
                const lessonExams = lesson.practiceExams;

                return (
                  <div
                    key={lesson.id}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isSelected
                        ? 'bg-[#0b1739] border-cyan-500/60 shadow-md'
                        : 'bg-[#081229]/90 border-sky-900/60 hover:border-sky-800'
                    }`}
                  >
                    {/* Dòng tiêu đề Bài 1, Bài 2, ..., Bài 27 */}
                    <button
                      type="button"
                      onClick={() => toggleExpandLesson(lesson.id)}
                      className="w-full min-h-[48px] flex items-center justify-between gap-2.5 p-2.5 text-left"
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
                          <div className="text-[11px] text-sky-300 truncate mt-0.5">
                            Lý thuyết & {lessonExams.length} Đề ôn
                          </div>
                        </div>
                      </div>

                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-sky-400 shrink-0" />
                      )}
                    </button>

                    {/* Bên trong mỗi Bài học: 1. Lý thuyết & 2. Đề ôn */}
                    {isExpanded && (
                      <div className="px-3 pb-3 pt-2 bg-[#050b1a]/95 border-t border-sky-900/60 space-y-1.5">
                        {/* 1. Lý thuyết */}
                        <button
                          type="button"
                          onClick={() => {
                            onSelectLesson(lesson.id);
                            setActiveSubSection('theory');
                            setMobilePane('detail');
                          }}
                          className={`w-full min-h-[40px] flex items-center justify-between gap-2 p-2 rounded-lg border text-xs transition-all text-left ${
                            isSelected && activeSubSection === 'theory'
                              ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-bold'
                              : 'bg-[#0b1739] border-sky-900/80 text-amber-300 hover:border-amber-400/50'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <BookMarked className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">Lý thuyết ({lesson.name})</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 text-[10px] font-bold shrink-0">
                            Xem
                          </span>
                        </button>

                        {/* 2. Các Đề ôn */}
                        {lessonExams.map((exam, idx) => {
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
                                  onSelectLesson(lesson.id);
                                  setActiveSubSection('exams');
                                  setMobilePane('detail');
                                }}
                                className="flex items-center gap-2 min-w-0 flex-1 text-left min-h-[34px]"
                              >
                                <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                <span className="font-bold text-white truncate">
                                  Đề ôn số {idx + 1} ({lesson.name})
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  onSelectPracticeExam(exam, lesson.id);
                                  onClose();
                                }}
                                className={`min-h-[34px] px-2.5 py-1 rounded-lg text-[10px] font-black shrink-0 flex items-center gap-1 ${
                                  isCurrent
                                    ? 'bg-emerald-400 text-[#040817]'
                                    : 'bg-cyan-500 hover:bg-cyan-400 text-[#040817]'
                                }`}
                              >
                                <Play className="w-2.5 h-2.5 fill-current" />
                                <span>{isCurrent ? 'Đang mở' : 'Làm đề'}</span>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cột Phải: Nội dung chi tiết của Bài học đang chọn (Lý thuyết | Đề ôn) */}
          <div
            className={`${
              mobilePane === 'detail' ? 'flex-1' : 'hidden'
            } lg:block lg:col-span-8 xl:col-span-8 p-3.5 sm:p-6 space-y-4 overflow-y-auto ios-scroll min-h-0`}
          >
            {/* Nút quay lại danh sách bài trên điện thoại */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobilePane('list')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1739] border border-sky-800 text-cyan-300 text-xs font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chọn Bài 1–{lessons.length} khác</span>
              </button>
            </div>
            {/* Header Bài học + Thanh chọn Lý thuyết / 2 Đề ôn */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0b1739] via-[#091430] to-[#071126] border border-cyan-500/40 space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-xl bg-cyan-500 text-[#040817] font-mono text-xs sm:text-sm font-black">
                    {activeLesson.name}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-[#071126] border border-sky-800 text-sky-300 text-xs font-semibold">
                    {activeLesson.chapter}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {activeLesson.name}: {activeLesson.topicTitle}
              </h3>

              {/* 2 phần bên trong Bài học: 1. Lý thuyết | 2. 2 Đề ôn */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveSubSection('theory')}
                  className={`min-h-[42px] py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all flex items-center justify-center gap-2 ${
                    activeSubSection === 'theory'
                      ? 'bg-amber-400 text-[#040817] border-amber-300 shadow-md'
                      : 'bg-[#071126] text-amber-300 border-sky-800 hover:border-amber-400/50'
                  }`}
                >
                  <BookMarked className="w-4 h-4 shrink-0" />
                  <span>Lý Thuyết ({activeLesson.name})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveSubSection('exams')}
                  className={`min-h-[42px] py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-extrabold border transition-all flex items-center justify-center gap-2 ${
                    activeSubSection === 'exams'
                      ? 'bg-cyan-400 text-[#040817] border-cyan-300 shadow-md'
                      : 'bg-[#071126] text-cyan-300 border-sky-800 hover:border-cyan-400/50'
                  }`}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>{practiceExamsList.length} Đề Ôn ({activeLesson.name})</span>
                </button>
              </div>
            </div>

            {/* NỘI DUNG 1: LÝ THUYẾT CỦA BÀI HỌC */}
            {activeSubSection === 'theory' && activeTheory && (
              <div className="space-y-5 animate-fadeIn">
                {/* Thuật ngữ & Yêu cầu cần đạt */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 p-4 rounded-2xl bg-[#091635] border border-cyan-500/40 shadow-md">
                  <div className="md:col-span-5 space-y-2 md:border-r md:border-sky-800/80 md:pr-3">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-300">
                      <Bookmark className="w-3.5 h-3.5 text-rose-400" />
                      <span>THUẬT NGỮ TRONG BÀI HỌC</span>
                    </div>
                    <ul className="space-y-1.5">
                      {activeTheory.terms.map((term, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-sky-100 font-medium"
                        >
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-7 space-y-2 md:pl-1">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span>YÊU CẦU CẦN ĐẠT (SGK)</span>
                    </div>
                    <ul className="space-y-1.5">
                      {activeTheory.objectives.map((obj, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-sky-100 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                          <div className="flex-1">
                            <MathRenderer content={obj} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Công thức cốt lõi cần nhớ */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-amber-300 uppercase tracking-wide">
                        Công Thức Trọng Tâm — {activeTheory.name}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {activeTheory.quickFormulas.map((qf, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#131d3b] via-[#0d1836] to-[#0b1530] border border-amber-400/40 space-y-2 shadow-md"
                      >
                        <div className="text-xs sm:text-sm font-extrabold text-amber-300">
                          {idx + 1}. {qf.name}
                        </div>
                        <div className="p-3 rounded-lg bg-[#050b1a] border border-sky-800/80 text-white text-xs sm:text-sm overflow-x-auto">
                          <MathRenderer content={`$$${qf.expression}$$`} />
                        </div>
                        <div className="text-xs text-sky-200 leading-relaxed">
                          <MathRenderer content={qf.description} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chi tiết lý thuyết theo SGK */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                      <BookMarked className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-cyan-300 uppercase tracking-wide">
                      Nội Dung Lý Thuyết Chi Tiết Theo SGK
                    </h4>
                  </div>

                  {activeTheory.sections.map((sec) => (
                    <div
                      key={sec.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#0b1739]/90 border border-sky-800/80 space-y-3.5 shadow-md"
                    >
                      <h5 className="text-sm sm:text-base font-extrabold text-white border-l-4 border-cyan-400 pl-3 py-0.5">
                        {sec.title}
                      </h5>

                      {sec.theoryPoints.length > 0 && (
                        <div className="space-y-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                          {sec.theoryPoints.map((pt, i) => (
                            <div key={i} className="pl-1">
                              <MathRenderer content={pt} />
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.formulas.length > 0 && (
                        <div className="space-y-3 pt-1">
                          {sec.formulas.map((fBox, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-amber-950/45 via-[#0e1938] to-[#081229] border-2 border-amber-400/60 space-y-2 shadow-inner"
                            >
                              <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-300 uppercase tracking-wide">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span>{fBox.label}</span>
                              </div>
                              <div className="text-xs sm:text-sm text-white leading-relaxed whitespace-pre-line">
                                <MathRenderer content={fBox.formula} />
                              </div>
                              {fBox.note && (
                                <div className="pt-2 border-t border-amber-500/30 text-xs text-sky-200/95 leading-relaxed">
                                  <MathRenderer content={fBox.note} />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.tikzCode && (
                        <div className="pt-2">
                          <div className="p-3 rounded-xl bg-[#060d20] border border-sky-900/80 flex flex-col items-center">
                            <TikzFigure tikzCode={sec.tikzCode} caption={sec.tikzCaption} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NỘI DUNG 2: ĐỀ ÔN CỦA BÀI HỌC */}
            {activeSubSection === 'exams' && (
              <div className="space-y-3.5 animate-fadeIn">
                <div className="grid grid-cols-1 gap-3.5">
                  {practiceExamsList.map((exam, idx) => {
                    const totalQ =
                      exam.part1.length +
                      exam.part2.length +
                      exam.part3.length +
                      (exam.part4?.length || 0);
                    const isCurrent = exam.id === currentExamId;

                    return (
                      <div
                        key={exam.id}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                          isCurrent
                            ? 'bg-gradient-to-r from-emerald-950/50 via-[#0b1739] to-[#0b1739] border-emerald-400/60 shadow-lg'
                            : 'bg-[#0b1739] border-sky-800/70 hover:border-cyan-400/50 shadow-md'
                        }`}
                      >
                        <div className="space-y-2 min-w-0 flex-1">
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

                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-sky-300 font-semibold">
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

                        <button
                          type="button"
                          onClick={() => {
                            onSelectPracticeExam(exam, activeLesson.id);
                            onClose();
                          }}
                          className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-[#040817] font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 shrink-0"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>Làm Đề Ôn Số {idx + 1}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {onOpenImportForLesson && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        onOpenImportForLesson(activeLesson);
                        onClose();
                      }}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-2xl bg-[#0b1739] hover:bg-sky-950/90 border border-dashed border-cyan-500/60 text-cyan-300 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <PlusCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Thêm Đề Từ File Word / PDF Riêng Cho {activeLesson.name}</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
