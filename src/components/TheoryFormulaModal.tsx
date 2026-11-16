import React, { useMemo, useState } from 'react';
import { LessonTheoryData } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';
import {
  BookMarked,
  X,
  Search,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Layers,
  Play,
  ChevronRight,
  GraduationCap,
  Calculator,
  FileText,
} from 'lucide-react';

interface TheoryFormulaModalProps {
  isOpen: boolean;
  onClose: () => void;
  theoryList: LessonTheoryData[];
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  onOpenPracticeForLesson?: (lessonId: string) => void;
}

export const TheoryFormulaModal: React.FC<TheoryFormulaModalProps> = ({
  isOpen,
  onClose,
  theoryList,
  selectedLessonId,
  onSelectLesson,
  onOpenPracticeForLesson,
}) => {
  const [volumeFilter, setVolumeFilter] = useState<'all' | 'Tập 1' | 'Tập 2'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'theory' | 'formulas'>('all');

  const filteredLessons = useMemo(() => {
    return theoryList.filter((item) => {
      if (volumeFilter !== 'all' && item.volume !== volumeFilter) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.topicTitle.toLowerCase().includes(q) ||
        item.chapter.toLowerCase().includes(q) ||
        item.terms.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [theoryList, volumeFilter, searchQuery]);

  if (!isOpen) return null;

  const activeTheory =
    theoryList.find((item) => item.lessonId === selectedLessonId) ||
    filteredLessons[0] ||
    theoryList[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-5 overflow-y-auto animate-fadeIn">
      <div className="bg-[#071126] border border-amber-500/50 rounded-2xl max-w-6xl w-full max-h-[93vh] flex flex-col shadow-2xl overflow-hidden text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#091534] via-[#131d42] to-[#091534] border-b border-sky-800/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[#040817] shadow-lg shadow-amber-500/20 shrink-0">
              <BookMarked className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-xl font-extrabold text-white tracking-tight">
                  Lý Thuyết & Công Thức Toán 10 (Bài 1 – Bài {theoryList.length})
                </h2>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40">
                  <Sparkles className="w-3 h-3" />
                  Chuẩn 100% SGK Kết nối tri thức
                </span>
              </div>
              <p className="text-xs text-sky-300 mt-0.5 truncate sm:whitespace-normal">
                Tổng hợp đầy đủ Lý thuyết trọng tâm, Thuật ngữ, Khung kiến thức và Công thức cần nhớ từ Bài 1 đến Bài {theoryList.length} (không bao gồm bài ôn tập cuối chương)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#0b1739] hover:bg-sky-900 text-sky-300 hover:text-white border border-sky-800 transition-colors shrink-0"
            title="Đóng mục Lý thuyết công thức"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-sky-900/70">
          {/* Left Sidebar: Danh sách Bài 1 -> Bài 27 */}
          <div className="lg:col-span-4 xl:col-span-4 p-3 sm:p-4 bg-[#060e21] flex flex-col gap-3 max-h-[42vh] lg:max-h-[77vh] overflow-y-auto">
            {/* Bộ lọc Tập 1 / Tập 2 & Tìm kiếm */}
            <div className="space-y-2 sticky top-0 bg-[#060e21] pb-2 z-10 border-b border-sky-900/70">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-sky-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm bài học, công thức, thuật ngữ..."
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-[#0b1739] border border-sky-800/80 text-xs text-white placeholder-sky-400/70 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {(['all', 'Tập 1', 'Tập 2'] as const).map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setVolumeFilter(vol)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all ${
                      volumeFilter === vol
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                        : 'bg-[#0b1739] border-sky-900 text-sky-300 hover:text-white'
                    }`}
                  >
                    {vol === 'all'
                      ? `Tất cả (${theoryList.length})`
                      : vol === 'Tập 1'
                      ? 'Tập 1 (Bài 1–14)'
                      : 'Tập 2 (Bài 15–27)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Danh sách bài học theo tên SGK */}
            <div className="space-y-1.5">
              {filteredLessons.map((item) => {
                const isSelected = item.lessonId === activeTheory.lessonId;
                return (
                  <button
                    key={item.lessonId}
                    type="button"
                    onClick={() => onSelectLesson(item.lessonId)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all flex items-start justify-between gap-2.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 via-[#0d1c42] to-[#0b1739] border-amber-400/70 shadow-md'
                        : 'bg-[#081229]/90 border-sky-900/60 hover:border-sky-700'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span
                        className={`px-2 py-1 rounded-lg font-mono text-xs font-black shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-amber-400 text-[#040817]'
                            : 'bg-[#0d1d42] text-amber-300 border border-sky-800'
                        }`}
                      >
                        {item.name}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {item.topicTitle}
                        </div>
                        <div className="text-[10px] text-sky-300 mt-0.5 truncate">
                          {item.chapter}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[10px] text-amber-300/90 font-semibold">
                          <span>{item.sections.length} mục lý thuyết</span>
                          <span>•</span>
                          <span>{item.quickFormulas.length} công thức</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 mt-1 ${
                        isSelected ? 'text-amber-300' : 'text-sky-500'
                      }`}
                    />
                  </button>
                );
              })}

              {filteredLessons.length === 0 && (
                <div className="p-6 text-center text-xs text-sky-300 bg-[#0b1739]/50 rounded-xl border border-sky-900">
                  Không tìm thấy bài học phù hợp với từ khoá "{searchQuery}".
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Nội dung Lý thuyết & Công thức cần nhớ chính xác 100% theo SGK */}
          <div className="lg:col-span-8 xl:col-span-8 p-4 sm:p-6 space-y-5 overflow-y-auto max-h-[77vh]">
            {/* Header của Bài đang chọn */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0d1d45] via-[#091534] to-[#071126] border border-amber-400/50 space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-xl bg-amber-400 text-[#040817] font-mono text-xs sm:text-sm font-black">
                    {activeTheory.name}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-bold">
                    {activeTheory.volume}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-[#071126] border border-sky-800 text-sky-300 text-xs font-semibold">
                    {activeTheory.chapter}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-[#071126] border border-sky-800 text-amber-300 text-xs font-mono">
                    {activeTheory.pageRange}
                  </span>
                </div>

                {onOpenPracticeForLesson && (
                  <button
                    type="button"
                    onClick={() => {
                      onOpenPracticeForLesson(activeTheory.lessonId);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-[#040817] text-xs font-black shadow-md transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Mở Đề Ôn {activeTheory.name}</span>
                  </button>
                )}
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                {activeTheory.name}. {activeTheory.topicTitle}
              </h3>

              {/* Chuyển đổi nhanh chế độ xem */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                    activeTab === 'all'
                      ? 'bg-amber-400 text-[#040817] border-amber-300'
                      : 'bg-[#071126] text-sky-200 border-sky-800 hover:border-amber-400/50'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Đầy đủ Lý thuyết & Công thức</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('formulas')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                    activeTab === 'formulas'
                      ? 'bg-amber-400 text-[#040817] border-amber-300'
                      : 'bg-[#071126] text-sky-200 border-sky-800 hover:border-amber-400/50'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Tóm tắt Công thức cần nhớ ({activeTheory.quickFormulas.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('theory')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                    activeTab === 'theory'
                      ? 'bg-amber-400 text-[#040817] border-amber-300'
                      : 'bg-[#071126] text-sky-200 border-sky-800 hover:border-amber-400/50'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Chi tiết từng mục SGK ({activeTheory.sections.length})</span>
                </button>
              </div>
            </div>

            {/* Khung THUẬT NGỮ & KIẾN THỨC, KĨ NĂNG chuẩn đầu bài học SGK */}
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
                  <span>KIẾN THỨC, KĨ NĂNG CẦN ĐẠT (SGK)</span>
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

            {/* BẢNG TÓM TẮT NHANH CÔNG THỨC CẦN NHỚ 100% */}
            {(activeTab === 'all' || activeTab === 'formulas') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-amber-300 uppercase tracking-wide">
                      Công Thức Cốt Lõi Cần Nhớ — {activeTheory.name}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-amber-200 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    {activeTheory.quickFormulas.length} công thức trọng tâm
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {activeTheory.quickFormulas.map((qf, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#131d3b] via-[#0d1836] to-[#0b1530] border border-amber-400/40 space-y-2 shadow-md"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-extrabold text-amber-300">
                          {idx + 1}. {qf.name}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-200 border border-amber-400/30">
                          Công thức chuẩn SGK
                        </span>
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
            )}

            {/* CHI TIẾT LÝ THUYẾT & KHUNG KIẾN THỨC THEO TỪNG MỤC TRONG BÀI HỌC SGK */}
            {(activeTab === 'all' || activeTab === 'theory') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                      <BookMarked className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-cyan-300 uppercase tracking-wide">
                      Nội Dung Lý Thuyết & Khung Kiến Thức Trong Bài Học (SGK)
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-cyan-200 bg-cyan-500/15 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                    {activeTheory.sections.length} mục kiến thức
                  </span>
                </div>

                {activeTheory.sections.map((sec) => (
                  <div
                    key={sec.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0b1739]/90 border border-sky-800/80 space-y-3.5 shadow-md"
                  >
                    <h5 className="text-sm sm:text-base font-extrabold text-white border-l-4 border-cyan-400 pl-3 py-0.5">
                      {sec.title}
                    </h5>

                    {/* Các điểm lý thuyết */}
                    {sec.theoryPoints.length > 0 && (
                      <div className="space-y-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                        {sec.theoryPoints.map((pt, i) => (
                          <div key={i} className="pl-1">
                            <MathRenderer content={pt} />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Các Khung kiến thức / Định lí / Công thức đóng khung màu cam chuẩn SGK */}
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

                    {/* Hình minh hoạ TikZ (nếu có) */}
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
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 bg-[#09132e] border-t border-sky-800/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-sky-300">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Toàn bộ Lý thuyết và Công thức cần nhớ được trích xuất chính xác 100% từ 27 bài học trong SGK Toán 10 Tập 1 & Tập 2 (Kết nối tri thức với cuộc sống).
            </span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {onOpenPracticeForLesson && (
              <button
                type="button"
                onClick={() => onOpenPracticeForLesson(activeTheory.lessonId)}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 font-bold text-xs transition-colors"
              >
                Luyện Đề Ôn {activeTheory.name}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#040817] font-black text-xs transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
