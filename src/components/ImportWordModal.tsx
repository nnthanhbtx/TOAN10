import React, { useState, useRef } from 'react';
import {
  parseWordExamContent,
  normalizeWordHtmlToText,
  SAMPLE_WORD_CONTENT,
} from '../utils/wordExamParser';
import { normalizeMathExpressionsToLatex } from '../utils/mathLatexNormalizer';
import { copyTextSafe } from '../utils/safeBrowser';
import { ExamSet } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TikzFigure } from './TikzFigure';
import {
  FileText,
  Upload,
  Download,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  X,
  FileCheck,
  Loader2,
  Eye,
  Edit3,
  Shapes,
} from 'lucide-react';

interface ImportWordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyExam: (exam: ExamSet) => void;
  defaultTitle?: string;
}

export const ImportWordModal: React.FC<ImportWordModalProps> = ({
  isOpen,
  onClose,
  onApplyExam,
  defaultTitle = 'Đề tự luyện',
}) => {
  const [content, setContent] = useState<string>('');
  const [examTitle, setExamTitle] = useState<string>(defaultTitle);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const [processingStatus, setProcessingStatus] = useState<string>('');
  const [pdfMode, setPdfMode] = useState<'smart' | 'fast'>('smart');
  const [activeViewTab, setActiveViewTab] = useState<'editor' | 'preview'>('preview');
  const [copiedSample, setCopiedSample] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setExamTitle(defaultTitle);
      setErrorMsg(null);
    }
  }, [isOpen, defaultTitle]);

  if (!isOpen) return null;

  // Xử lý đọc file .docx, .pdf hoặc .txt
  const handleFileUpload = async (file: File) => {
    if (!file) return;

    setIsProcessingFile(true);
    setErrorMsg(null);
    try {
      const lowerName = file.name.toLowerCase();
      const nameWithoutExt = file.name.replace(/\.[^/.]+$/, '');

      if (lowerName.endsWith('.docx')) {
        setProcessingStatus(
          'Đang giải nén file Word (.docx), trích xuất công thức OMML sang LaTeX $...$, hình vẽ và đáp án gạch chân...'
        );
        const [{ extractWordDocxWithMath }, arrayBuffer] = await Promise.all([
          import('../utils/docxMathExtractor'),
          file.arrayBuffer(),
        ]);
        const extractedText = await extractWordDocxWithMath(arrayBuffer);

        setContent(extractedText);
        if (nameWithoutExt) setExamTitle(nameWithoutExt);
        setActiveViewTab('preview');
      } else if (lowerName.endsWith('.pdf')) {
        if (nameWithoutExt) setExamTitle(nameWithoutExt);
        // Bước 1: Trích xuất cục bộ tức thì (< 0.3s) để giáo viên/học sinh thấy ngay nội dung & hình vẽ
        setProcessingStatus('Đang quét nhanh cấu trúc câu hỏi, số mũ và công thức từ file PDF...');
        const [{ extractMathExamFromPdf, extractTextFromPdfLocal }, bufferCopy] = await Promise.all([
          import('../utils/pdfExamExtractor'),
          file.arrayBuffer(),
        ]);
        const instantLocalText = await extractTextFromPdfLocal(bufferCopy.slice(0));
        if (instantLocalText && instantLocalText.trim()) {
          setContent(instantLocalText);
          setActiveViewTab('preview');
        }

        // Bước 2: Nếu ở chế độ thông minh, chuẩn hóa sâu hơn bằng AI OCR nếu khả dụng
        if (pdfMode === 'smart') {
          setProcessingStatus(
            'Đang chuẩn hóa sâu công thức LaTeX $...$, hình vẽ TikZ và đáp án đúng từ PDF...'
          );
          const { text } = await extractMathExamFromPdf(file, 'smart');
          if (text && text.trim()) {
            setContent(text);
            setActiveViewTab('preview');
          } else if (!instantLocalText || !instantLocalText.trim()) {
            setErrorMsg(
              'Không trích xuất được nội dung văn bản từ file PDF này. Vui lòng kiểm tra lại file PDF.'
            );
          }
        } else if (!instantLocalText || !instantLocalText.trim()) {
          setErrorMsg(
            'Không trích xuất được văn bản từ file PDF này. Hãy chuyển sang chế độ "Nhận diện PDF thông minh".'
          );
        }
      } else if (lowerName.endsWith('.doc')) {
        setErrorMsg(
          'Định dạng .doc cũ (Word 97-2003) không hỗ trợ đọc trực tiếp. Vui lòng lưu thành .docx, xuất sang .pdf hoặc Copy (Ctrl+C) rồi Dán (Ctrl+V) vào ô văn bản bên dưới.'
        );
      } else {
        setProcessingStatus('Đang đọc file văn bản...');
        const text = await file.text();
        setContent(normalizeMathExpressionsToLatex(text));
        if (nameWithoutExt) setExamTitle(nameWithoutExt);
        setActiveViewTab('preview');
      }
    } catch {
      setErrorMsg(
        'Không thể đọc file. Vui lòng chọn file định dạng .docx hoặc .pdf hợp lệ, hoặc sao chép nội dung dán vào ô văn bản bên dưới.'
      );
    } finally {
      setIsProcessingFile(false);
      setProcessingStatus('');
    }
  };

  // Hỗ trợ dán trực tiếp (Ctrl+V) từ Microsoft Word mà vẫn giữ nguyên gạch chân <u>...</u> và số mũ / công thức
  const handlePasteFromWord = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const htmlData = e.clipboardData?.getData('text/html');
    if (
      htmlData &&
      (/<u\b/i.test(htmlData) ||
        /text-decoration\s*:\s*underline/i.test(htmlData) ||
        /<sup\b|<sub\b/i.test(htmlData))
    ) {
      e.preventDefault();
      const converted = normalizeMathExpressionsToLatex(
        normalizeWordHtmlToText(htmlData)
          .replace(/\[U\]/g, '<u>')
          .replace(/\[\/U\]/g, '</u>')
          .replace(/\n{3,}/g, '\n\n')
          .trim()
      );

      const target = e.currentTarget;
      const start = target.selectionStart ?? content.length;
      const end = target.selectionEnd ?? content.length;
      const nextValue = content.slice(0, start) + converted + content.slice(end);
      setContent(nextValue);
      setErrorMsg(null);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Tải file mẫu .txt
  const handleDownloadSample = () => {
    const blob = new Blob([SAMPLE_WORD_CONTENT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'de_mau_toan_10_chuan_word.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Sao chép nội dung mẫu
  const handleCopySample = () => {
    void copyTextSafe(SAMPLE_WORD_CONTENT);
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 2000);
  };

  // Nạp mẫu vào trình soạn thảo
  const handleLoadSample = () => {
    setContent(SAMPLE_WORD_CONTENT);
    setExamTitle(defaultTitle || 'Đề tự luyện');
    setErrorMsg(null);
    setActiveViewTab('preview');
  };

  // Thống kê kết quả nhận diện thời gian thực
  const parseResult = content ? parseWordExamContent(content, examTitle) : null;

  const handleApply = () => {
    if (!parseResult || parseResult.counts.total === 0) {
      setErrorMsg(
        'Chưa nhận diện được câu hỏi nào. Vui lòng kiểm tra lại định dạng câu hỏi (bắt đầu bằng "Câu 1.", "Câu 2.",...) hoặc bấm "Nạp đề mẫu" để xem chuẩn.'
      );
      return;
    }
    onApplyExam(parseResult.exam);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Modal */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Tạo Đề Thi Bằng File Word (.docx) hoặc PDF (.pdf)
              </h3>
              <p className="text-xs text-slate-500">
                Nhận diện tức thì nội dung câu hỏi, công thức chuẩn LaTeX, đáp án và tự động dựng hình vẽ đúng logic Toán
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Quy tắc soạn thảo văn bản trong file Word / PDF */}
          <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/90 space-y-2.5 text-xs text-amber-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-bold text-amber-900 flex items-center gap-1.5 text-sm">
                <span>💡 Quy tắc cấu trúc đề Word (.docx) & PDF (.pdf):</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadSample}
                  className="px-2.5 py-1 rounded-lg bg-amber-200/70 hover:bg-amber-200 text-amber-900 font-semibold flex items-center gap-1 transition-colors"
                  title="Tải file văn bản mẫu về máy"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải mẫu</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopySample}
                  className="px-2.5 py-1 rounded-lg bg-amber-200/70 hover:bg-amber-200 text-amber-900 font-semibold flex items-center gap-1 transition-colors"
                  title="Sao chép nội dung văn bản mẫu"
                >
                  {copiedSample ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSample ? 'Đã sao chép' : 'Chép mẫu'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold flex items-center gap-1 transition-colors"
                  title="Tải văn bản mẫu vào khung nhập"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nạp đề mẫu</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800 leading-relaxed bg-white/80 p-3 rounded-lg border border-amber-200/80 font-mono text-[11px]">
              <div className="space-y-1">
                <div className="font-bold text-indigo-800">Phần I. ( gạch chân đáp án đúng )</div>
                <div className="pl-2">Câu 1. [Nội dung câu hỏi]</div>
                <div className="pl-4"><u>A. Đáp án đúng</u> &nbsp; B. ... &nbsp; C. ... &nbsp; D. ...</div>
                <div className="font-bold text-sky-800 pt-1">Phần II. ( gạch chân đáp án đúng )</div>
                <div className="pl-2">Câu 1. [Nội dung câu hỏi]</div>
                <div className="pl-4"><u>a) Mệnh đề đúng</u> &nbsp; b) Mệnh đề sai</div>
                <div className="pl-4"><u>c) Mệnh đề đúng</u> &nbsp; d) Mệnh đề sai</div>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-emerald-800">Phần III. ( Trả lời ngắn )</div>
                <div className="pl-2">Câu 1. [Nội dung câu hỏi trả lời ngắn]</div>
                <div className="pl-4">Đáp số: 8 (hoặc gạch chân <u>8</u> ở dòng dưới)</div>
                <div className="font-bold text-purple-800 pt-1">Phần IV. ( Tự luận ghép bước )</div>
                <div className="pl-2">Câu 1. [Nội dung bài toán tự luận]</div>
                <div className="pl-4">[Dòng lời giải 1] / [Dòng lời giải 2]...</div>
                <div className="text-slate-600 pt-1 font-sans">
                  * Tự động trích xuất ảnh từ Word và tự dựng hình vẽ TikZ (parabol, tam giác, miền nghiệm, trục số, biểu đồ Ven) đúng số liệu bài toán.
                </div>
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Tên đề thi & Chế độ đọc PDF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tên Đề Thi:</label>
              <input
                type="text"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                placeholder="Nhập tên đề thi (ví dụ: Đề 01)..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Chế Độ Đọc Khi Tải File PDF (.pdf):</label>
              <select
                value={pdfMode}
                onChange={(e) => setPdfMode(e.target.value as 'smart' | 'fast')}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="smart">
                  Nhận diện PDF thông minh (Quét nhanh tức thì + Chuẩn hóa sâu LaTeX & gạch chân)
                </option>
                <option value="fast">
                  Trích xuất văn bản PDF siêu tốc (Dành cho PDF chuẩn / có sẵn công thức)
                </option>
              </select>
            </div>
          </div>

          {/* Drag & Drop File Upload Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer ${
              dragActive
                ? 'border-indigo-600 bg-indigo-50/70'
                : 'border-slate-300 bg-slate-50/50 hover:bg-slate-50 hover:border-indigo-400'
            }`}
            onClick={() => !isProcessingFile && fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".docx,.pdf,.txt"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                  e.target.value = '';
                }
              }}
            />
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                {isProcessingFile ? (
                  <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
                ) : (
                  <Upload className="w-5 h-5" />
                )}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {isProcessingFile
                  ? processingStatus || 'Đang đọc và phân tích file...'
                  : 'Kéo thả file Word (.docx) hoặc PDF (.pdf) vào đây hoặc bấm để chọn file'}
              </div>
              <p className="text-xs text-slate-500">
                Hỗ trợ đầy đủ <strong>.docx</strong> (Equation OMML, hình vẽ, gạch chân/tô màu đáp án) và <strong>.pdf</strong>
              </p>
            </div>
          </div>

          {/* Real-time Recognition Counter Badge Strip */}
          {parseResult && (
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Kết Quả Nhận Diện Thời Gian Thực:</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-mono font-bold">
                    Tổng {parseResult.counts.total} câu hỏi
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-mono font-bold flex items-center gap-1">
                    <Shapes className="w-3.5 h-3.5 text-amber-700" />
                    <span>{parseResult.counts.figures} hình vẽ Toán</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Phần I (Trắc nghiệm):</span>
                    <span className="font-bold text-indigo-700 font-mono text-sm">
                      {parseResult.counts.part1} câu
                    </span>
                  </div>
                  {parseResult.unrecognizedByPart.part1.length > 0 && (
                    <div className="mt-1 pt-1 border-t border-rose-100 text-[10px] text-rose-600 font-semibold">
                      Chưa nhận dạng:{' '}
                      {parseResult.unrecognizedByPart.part1.map((u) => u.questionLabel).join(', ')}
                    </div>
                  )}
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Phần II (Đúng / Sai):</span>
                    <span className="font-bold text-sky-700 font-mono text-sm">
                      {parseResult.counts.part2} câu
                    </span>
                  </div>
                  {parseResult.unrecognizedByPart.part2.length > 0 && (
                    <div className="mt-1 pt-1 border-t border-rose-100 text-[10px] text-rose-600 font-semibold">
                      Chưa nhận dạng:{' '}
                      {parseResult.unrecognizedByPart.part2.map((u) => u.questionLabel).join(', ')}
                    </div>
                  )}
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Phần III (Trả lời ngắn):</span>
                    <span className="font-bold text-emerald-700 font-mono text-sm">
                      {parseResult.counts.part3} câu
                    </span>
                  </div>
                  {parseResult.unrecognizedByPart.part3.length > 0 && (
                    <div className="mt-1 pt-1 border-t border-rose-100 text-[10px] text-rose-600 font-semibold">
                      Chưa nhận dạng:{' '}
                      {parseResult.unrecognizedByPart.part3.map((u) => u.questionLabel).join(', ')}
                    </div>
                  )}
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Phần IV (Tự luận ghép):</span>
                    <span className="font-bold text-purple-700 font-mono text-sm">
                      {parseResult.counts.part4} câu
                    </span>
                  </div>
                  {parseResult.unrecognizedByPart.part4.length > 0 && (
                    <div className="mt-1 pt-1 border-t border-rose-100 text-[10px] text-rose-600 font-semibold">
                      Chưa nhận dạng:{' '}
                      {parseResult.unrecognizedByPart.part4.map((u) => u.questionLabel).join(', ')}
                    </div>
                  )}
                </div>
              </div>

              {/* Mục Câu chưa nhận dạng (cụ thể Câu 1, Câu 2, ...) */}
              <div
                className={`p-3 rounded-lg border text-xs ${
                  parseResult.unrecognizedQuestions.length > 0
                    ? 'bg-rose-50/90 border-rose-200 text-rose-900'
                    : 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 font-bold">
                  <span className="flex items-center gap-1.5">
                    <AlertCircle
                      className={`w-4 h-4 shrink-0 ${
                        parseResult.unrecognizedQuestions.length > 0
                          ? 'text-rose-600'
                          : 'text-emerald-600'
                      }`}
                    />
                    <span>Trạng thái kiểm tra cấu trúc & đáp án:</span>
                  </span>
                  <span className="font-mono">
                    {parseResult.unrecognizedQuestions.length > 0
                      ? `${parseResult.unrecognizedQuestions.length} câu cần lưu ý`
                      : 'Chuẩn 100% (Đầy đủ câu hỏi & đáp án)'}
                  </span>
                </div>

                {parseResult.unrecognizedQuestions.length > 0 ? (
                  <div className="mt-2 pt-2 border-t border-rose-200/80 space-y-1 text-[11px] text-rose-800 max-h-24 overflow-y-auto">
                    {parseResult.unrecognizedQuestions.map((item, idx) => (
                      <div key={`${item.part}_${item.questionNumber}_${idx}`}>
                        • <strong>{item.partLabel} - {item.questionLabel}:</strong> {item.reason}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-1 text-[11px] text-emerald-700">
                    Tất cả các câu hỏi trong đề đã được nhận diện đầy đủ nội dung, công thức LaTeX, hình vẽ và đáp án đúng.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Chuyển đổi giữa Xem Trước Trực Quan (Công thức & Hình vẽ) và Chỉnh sửa văn bản nguồn */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveViewTab('preview')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    activeViewTab === 'preview'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem Trước Trực Quan (Công Thức & Hình Vẽ)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveViewTab('editor')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    activeViewTab === 'editor'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Chỉnh Sửa Mã Nguồn Văn Bản</span>
                </button>
              </div>

              {content && (
                <button
                  type="button"
                  onClick={() => {
                    setContent('');
                    setErrorMsg(null);
                  }}
                  className="text-xs text-rose-600 hover:underline font-semibold"
                >
                  Xóa trắng nội dung
                </button>
              )}
            </div>

            {activeViewTab === 'editor' || !parseResult || parseResult.counts.total === 0 ? (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 block">
                  Nội dung văn bản đề thi (Có thể chỉnh sửa trực tiếp hoặc nhấn Ctrl+V dán từ Word):
                </label>
                <textarea
                  rows={10}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onPaste={handlePasteFromWord}
                  placeholder="Tải file .docx / .pdf ở trên, bấm 'Nạp đề mẫu' hoặc dán (Ctrl+V) nội dung từ Word vào đây..."
                  className="w-full p-3.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            ) : (
              <div className="rounded-xl border border-slate-300 bg-slate-900 text-slate-100 p-4 max-h-96 overflow-y-auto space-y-5">
                {/* PHẦN I PREVIEW */}
                {parseResult.exam.part1.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-700 pb-1.5">
                      Phần I. Trắc nghiệm nhiều phương án lựa chọn ({parseResult.exam.part1.length} câu)
                    </div>
                    {parseResult.exam.part1.map((q) => (
                      <div
                        key={q.id}
                        className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                            Câu {q.number}
                          </span>
                          <span className="text-[11px] font-semibold text-emerald-400">
                            Đáp án đúng: {q.correctAnswer}
                          </span>
                        </div>
                        <div className="text-sm text-white leading-relaxed">
                          <MathRenderer content={q.prompt} />
                        </div>
                        {(q.tikzType || q.tikzCode) && (
                          <TikzFigure
                            type={q.tikzType || 'custom'}
                            tikzCode={q.tikzCode}
                            caption={`Hình minh họa Toán học — Câu ${q.number} (Phần I)`}
                          />
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt) => {
                            const isCorrect = opt.key === q.correctAnswer;
                            return (
                              <div
                                key={opt.key}
                                className={`p-2 rounded-lg border text-xs flex items-start gap-2 ${
                                  isCorrect
                                    ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200 font-semibold'
                                    : 'bg-slate-900/60 border-slate-700 text-slate-200'
                                }`}
                              >
                                <span
                                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                                    isCorrect
                                      ? 'bg-emerald-500 text-slate-950'
                                      : 'bg-slate-700 text-slate-300'
                                  }`}
                                >
                                  {opt.key}
                                </span>
                                <div className="flex-1">
                                  <MathRenderer content={opt.content} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PHẦN II PREVIEW */}
                {parseResult.exam.part2.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-700 pb-1.5">
                      Phần II. Trắc nghiệm Đúng / Sai ({parseResult.exam.part2.length} câu)
                    </div>
                    {parseResult.exam.part2.map((q) => (
                      <div
                        key={q.id}
                        className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold">
                            Câu {q.number}
                          </span>
                          <span className="text-[11px] text-slate-400">4 mệnh đề a, b, c, d</span>
                        </div>
                        <div className="text-sm text-white leading-relaxed">
                          <MathRenderer content={q.prompt} />
                        </div>
                        {(q.tikzType || q.tikzCode) && (
                          <TikzFigure
                            type={q.tikzType || 'custom'}
                            tikzCode={q.tikzCode}
                            caption={`Hình minh họa Toán học — Câu ${q.number} (Phần II)`}
                          />
                        )}
                        <div className="space-y-1.5 pt-1">
                          {q.statements.map((st) => (
                            <div
                              key={st.id}
                              className="p-2 rounded-lg bg-slate-900/70 border border-slate-700/80 flex items-center justify-between gap-3 text-xs"
                            >
                              <div className="flex-1 text-slate-100">
                                <strong className="text-amber-300 mr-1.5">{st.label})</strong>
                                <MathRenderer content={st.statement} />
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                                  st.isCorrect
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                }`}
                              >
                                {st.isCorrect ? 'ĐÚNG' : 'SAI'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PHẦN III PREVIEW */}
                {parseResult.exam.part3.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-700 pb-1.5">
                      Phần III. Trả lời ngắn ({parseResult.exam.part3.length} câu)
                    </div>
                    {parseResult.exam.part3.map((q) => (
                      <div
                        key={q.id}
                        className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                            Câu {q.number}
                          </span>
                          <span className="px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold">
                            Đáp số: {q.acceptableAnswers[0]}
                          </span>
                        </div>
                        <div className="text-sm text-white leading-relaxed">
                          <MathRenderer content={q.prompt} />
                        </div>
                        {(q.tikzType || q.tikzCode) && (
                          <TikzFigure
                            type={q.tikzType || 'custom'}
                            tikzCode={q.tikzCode}
                            caption={`Hình minh họa Toán học — Câu ${q.number} (Phần III)`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* PHẦN IV PREVIEW */}
                {parseResult.exam.part4.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-700 pb-1.5">
                      Phần IV. Tự luận ghép bước giải ({parseResult.exam.part4.length} câu)
                    </div>
                    {parseResult.exam.part4.map((q) => (
                      <div
                        key={q.id}
                        className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-bold">
                            Câu {q.number}
                          </span>
                          <span className="text-[11px] text-purple-300 font-semibold">
                            {q.steps.length} bước suy luận
                          </span>
                        </div>
                        <div className="text-sm text-white leading-relaxed">
                          <MathRenderer content={q.problemStatement} />
                        </div>
                        {(q.tikzType || q.tikzCode) && (
                          <TikzFigure
                            type={q.tikzType || 'custom'}
                            tikzCode={q.tikzCode}
                            caption={`Hình minh họa Toán học — Câu ${q.number} (Phần IV)`}
                          />
                        )}
                        <div className="space-y-1 pt-1">
                          {q.steps.map((st, idx) => (
                            <div
                              key={st.id}
                              className="p-2 rounded-lg bg-slate-900/70 border border-slate-700/80 text-xs text-slate-200 flex items-start gap-2"
                            >
                              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px] font-bold shrink-0">
                                Bước {idx + 1}
                              </span>
                              <div className="flex-1">
                                <MathRenderer content={st.content} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Hủy Bỏ
          </button>

          <button
            type="button"
            onClick={handleApply}
            disabled={isProcessingFile || !content || !parseResult || parseResult.counts.total === 0}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-sm transition-all flex items-center gap-2 ${
              !isProcessingFile && content && parseResult && parseResult.counts.total > 0
                ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer active:scale-95'
                : 'bg-slate-400 cursor-not-allowed opacity-60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Áp Dụng & Tạo Đề Thi ({parseResult?.counts.total || 0} câu)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
