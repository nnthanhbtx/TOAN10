import React, { useState } from 'react';
import {
  RotateCcw,
  Send,
  Sparkles,
  FileText,
  Play,
  Volume2,
  VolumeX,
  Trophy,
  WifiOff,
  Smartphone,
  BookOpen,
  BookMarked,
} from 'lucide-react';
import { ExamSet } from '../types/exam';
import { isAudioEnabled, setAudioEnabled, playClickSound } from '../utils/audio';

interface HeaderProps {
  currentExam: ExamSet;
  allExams: ExamSet[];
  onSelectExam: (examId: string) => void;
  onDeleteExam?: (examId: string) => void;
  examMode: 'exam' | 'practice';
  onToggleExamMode: () => void;
  isStarted: boolean;
  onStartExam: () => void;
  isSubmitted: boolean;
  onSubmitExam: () => void;
  onResetExam: () => void;
  onOpenImportWord: () => void;
  onOpenLeaderboard: () => void;
  leaderboardCount: number;
  onOpenLessonCatalog?: () => void;
  onOpenTheoryFormula?: () => void;
  activeLessonLabel?: string;
  fontSize?: 'normal' | 'large' | 'xlarge';
  onChangeFontSize?: (size: 'normal' | 'large' | 'xlarge') => void;
  isOnline?: boolean;
  onOpenPWAInfo?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentExam,
  allExams,
  onSelectExam,
  examMode,
  onToggleExamMode,
  isStarted,
  onStartExam,
  isSubmitted,
  onSubmitExam,
  onResetExam,
  onOpenImportWord,
  onOpenLeaderboard,
  leaderboardCount,
  onOpenLessonCatalog,
  onOpenTheoryFormula,
  activeLessonLabel,
  isOnline = true,
  onOpenPWAInfo,
}) => {
  const [soundOn, setSoundOn] = useState<boolean>(() => isAudioEnabled());

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setAudioEnabled(next);
    if (next) playClickSound();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070f24]/95 backdrop-blur-md border-b border-sky-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 md:gap-4">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-950/60 border border-cyan-400/30">
            <span className="font-mono text-sm sm:text-base font-black">∑10</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
              Toán 10
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation & Quick Tools (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-xs font-medium text-slate-300 flex-wrap">
          {/* Mục Bài Học (Bài 1 -> Bài 27 -> Đề ôn) */}
          {onOpenLessonCatalog && (
            <button
              type="button"
              onClick={onOpenLessonCatalog}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border border-cyan-400/50 hover:from-cyan-500/30 hover:to-blue-500/30 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
              title="Mở mục Bài Học (Bài 1, Bài 2, ..., Bài 27 -> Đề ôn)"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bài Học</span>
              <span className="px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-200 text-[10px] font-mono">
                {activeLessonLabel || '1–27'}
              </span>
            </button>
          )}

          {/* Mục Lý Thuyết Công Thức (Bài 1 -> Bài 27 chuẩn 100% SGK) */}
          {onOpenTheoryFormula && (
            <button
              type="button"
              onClick={onOpenTheoryFormula}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-200 border border-amber-400/50 hover:from-amber-500/30 hover:to-orange-500/30 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
              title="Mở mục Lý Thuyết Công Thức (Bài 1 -> Bài 27 chuẩn 100% SGK Toán 10)"
            >
              <BookMarked className="w-3.5 h-3.5 text-amber-400" />
              <span>Lý Thuyết Công Thức</span>
            </button>
          )}

          {/* Chọn Đề Thi (Đề ôn GK1 00 -> Đề ôn GK1 06) */}
          <div className="flex items-center gap-1.5 bg-[#0b1739] px-3 py-1.5 rounded-xl border border-sky-800/60 shadow-xs">
            {allExams.length > 0 ? (
              <select
                value={currentExam.id}
                onChange={(e) => onSelectExam(e.target.value)}
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer pr-1 max-w-[155px] truncate"
                title="Chọn đề ôn tập"
              >
                {allExams.map((ex) => (
                  <option key={ex.id} value={ex.id} className="bg-[#071126] text-white">
                    {ex.title}
                  </option>
                ))}
              </select>
            ) : (
              <span className="text-slate-400 italic">Trống</span>
            )}
          </div>

          {/* Tạo Đề Từ File Word / PDF */}
          <button
            onClick={onOpenImportWord}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/20 hover:text-white transition-all whitespace-nowrap font-bold"
            title="Tạo đề bằng file Word (.docx) hoặc PDF (.pdf)"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tạo Đề Word / PDF</span>
          </button>

          {/* Bảng Xếp Hạng (tích hợp sẵn Liên kết Google Sheet bên trong) */}
          <button
            onClick={onOpenLeaderboard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/50 hover:bg-amber-500/25 hover:text-white transition-all whitespace-nowrap font-bold shadow-xs"
            title="Xem Bảng Xếp Hạng & Đồng bộ Google Sheet"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Bảng Xếp Hạng</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400/25 text-amber-200 text-[10px] font-mono">
              {leaderboardCount}
            </span>
          </button>

          {/* Chế độ thi / Luyện tập */}
          <button
            onClick={onToggleExamMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap font-bold ${
              examMode === 'exam'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
            title="Nhấp để đổi giữa chế độ thi tính giờ hoặc ôn tập có giải thích tức thì"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{examMode === 'exam' ? 'Chế độ Thi Tính Giờ' : 'Chế độ Luyện Tập'}</span>
          </button>

          {/* Âm thanh khi làm bài */}
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap font-bold border ${
              soundOn
                ? 'bg-sky-500/15 text-sky-200 border-sky-400/50 hover:bg-sky-500/25'
                : 'bg-rose-500/15 text-rose-300 border-rose-500/40 hover:bg-rose-500/25'
            }`}
            title={soundOn ? 'Âm thanh: Đang bật (Bấm để tắt)' : 'Âm thanh: Đang tắt (Bấm để bật)'}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-cyan-300" /> : <VolumeX className="w-3.5 h-3.5 text-rose-300" />}
            <span>{soundOn ? 'Âm thanh: Bật' : 'Âm thanh: Tắt'}</span>
          </button>

          {/* Nút Offline / Điện thoại */}
          {onOpenPWAInfo && (
            <button
              type="button"
              onClick={onOpenPWAInfo}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap font-bold border ${
                isOnline
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/25'
                  : 'bg-amber-500/20 text-amber-300 border-amber-400/60 animate-pulse'
              }`}
              title="Chế độ Điện thoại & Hoạt động không cần Wi-Fi"
            >
              {isOnline ? (
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <WifiOff className="w-3.5 h-3.5 text-amber-300" />
              )}
              <span>{isOnline ? 'App ĐT / Offline' : 'Đang Offline'}</span>
            </button>
          )}
        </nav>

        {/* Zone 3: Primary Action & Mobile Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Quick tools on small screens */}
          <div className="flex lg:hidden items-center gap-1">
            {onOpenLessonCatalog && (
              <button
                type="button"
                onClick={onOpenLessonCatalog}
                className="min-h-[38px] px-2.5 py-1.5 flex items-center gap-1 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 hover:bg-cyan-500/30 text-xs font-bold whitespace-nowrap"
                title="Mục Bài Học (Bài 1 -> Bài 27 -> Đề ôn)"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Bài Học</span>
              </button>
            )}

            {onOpenTheoryFormula && (
              <button
                type="button"
                onClick={onOpenTheoryFormula}
                className="min-h-[38px] px-2.5 py-1.5 flex items-center gap-1 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-200 hover:bg-amber-500/30 text-xs font-bold whitespace-nowrap"
                title="Mục Lý Thuyết Công Thức (Bài 1 -> Bài 27 chuẩn SGK)"
              >
                <BookMarked className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="hidden xs:inline">Lý Thuyết</span>
                <span className="xs:hidden">LT</span>
              </button>
            )}

            {allExams.length > 0 && (
              <div className="flex items-center gap-0.5 bg-[#0b1739] px-2 py-1.5 rounded-xl border border-sky-800/60 text-xs">
                <select
                  value={currentExam.id}
                  onChange={(e) => onSelectExam(e.target.value)}
                  className="bg-transparent text-white font-bold focus:outline-none cursor-pointer max-w-[115px] sm:max-w-[140px] truncate"
                >
                  {allExams.map((ex) => (
                    <option key={ex.id} value={ex.id} className="bg-[#071126] text-white">
                      {ex.title.toLowerCase().startsWith('đề') ? ex.title : `Đề ${ex.title}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={onOpenLeaderboard}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl bg-amber-500/15 border border-amber-400/50 text-amber-300 hover:bg-amber-500/25"
              title="Bảng Xếp Hạng"
            >
              <Trophy className="w-4 h-4" />
            </button>

            <button
              onClick={handleToggleSound}
              className={`min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl border ${
                soundOn
                  ? 'bg-sky-950/80 border-sky-800 text-sky-300'
                  : 'bg-rose-950/80 border-rose-800 text-rose-300'
              }`}
              title={soundOn ? 'Tắt âm thanh' : 'Bật âm thanh'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenImportWord}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl bg-[#0b1739] border border-sky-800/60 text-cyan-300 hover:bg-sky-900/60"
              title="Tạo đề từ Word / PDF"
            >
              <FileText className="w-4 h-4" />
            </button>

            {onOpenPWAInfo && (
              <button
                type="button"
                onClick={onOpenPWAInfo}
                className={`min-w-[38px] min-h-[38px] flex items-center justify-center rounded-xl border ${
                  isOnline
                    ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                    : 'bg-amber-500/25 border-amber-400 text-amber-300 animate-pulse'
                }`}
                title="Chế độ Điện thoại & Không cần Wi-Fi"
              >
                {isOnline ? <Smartphone className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              </button>
            )}
          </div>

          {isSubmitted ? (
            <button
              onClick={onResetExam}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#0b1739] hover:bg-sky-900 border border-sky-800/80 rounded-xl transition-all whitespace-nowrap shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Làm Lại Đề</span>
              <span className="sm:hidden">Làm lại</span>
            </button>
          ) : !isStarted ? (
            <button
              onClick={onStartExam}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/60 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Bắt Đầu Làm Bài</span>
            </button>
          ) : (
            <button
              onClick={onSubmitExam}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-950/60 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp Bài Thi</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

