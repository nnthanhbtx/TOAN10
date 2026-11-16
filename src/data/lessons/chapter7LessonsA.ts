import { LessonCatalogItem } from '../../types/exam';
import {
  buildFullLessonExam,
  tikzLineAndNormal,
  tikzPointToLineDistance,
} from './lessonExamBuilder';

export const CHAPTER_7_LESSONS_A: LessonCatalogItem[] = [
  {
    id: 'bai-19',
    lessonNumber: 19,
    name: 'Bài 19',
    topicTitle: 'Phương trình đường thẳng',
    chapter: 'Chương VII: Phương pháp toạ độ trong mặt phẳng',
    keySummary:
      'Mô tả vectơ pháp tuyến $\\vec{n}$ và vectơ chỉ phương $\\vec{u}$ của đường thẳng; lập phương trình tổng quát $ax + by + c = 0$, phương trình tham số $\\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases}$, phương trình đoạn chắn $\\frac{x}{a} + \\frac{y}{b} = 1$; chuyển đổi giữa các dạng phương trình đường thẳng và vận dụng vào bài toán thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-19-1',
        lessonId: 'bai-19',
        title: 'Đề ôn Bài 19 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–5, Luyện tập 1–5, Vận dụng và Bài tập 7.1–7.6 (SGK Toán 10 Tập 2, trang 30–35)',
        description:
          'Đề ôn tập số 01 của Bài 19 (Phương trình đường thẳng): Vectơ pháp tuyến, vectơ chỉ phương, phương trình tổng quát, phương trình tham số và ứng dụng.',
        mcqs: [
          {
            topic: 'Bài 19: Đọc vectơ pháp tuyến từ phương trình tổng quát (Tương tự Ví dụ 1)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho đường thẳng $\\Delta: 3x - 4y + 7 = 0$. Một vectơ pháp tuyến của đường thẳng $\\Delta$ là:',
            correct: '$\\vec{n} = (3; -4)$.',
            wrongs: ['$\\vec{n} = (3; 4)$.', '$\\vec{n} = (4; 3)$.', '$\\vec{n} = (-4; 3)$.'],
            explanation:
              'Đường thẳng $\\Delta: ax + by + c = 0$ có một vectơ pháp tuyến là $\\vec{n} = (a; b)$. Với $3x - 4y + 7 = 0$, ta có $\\vec{n} = (3; -4)$.',
          },
          {
            topic: 'Bài 19: Đọc vectơ chỉ phương từ phương trình tham số (Tương tự Ví dụ 3)',
            prompt:
              'Trong mặt phẳng $Oxy$, cho đường thẳng $d: \\begin{cases} x = 2 - 5t \\\\ y = -1 + 3t \\end{cases}\\ (t \\in \\mathbb{R})$. Một vectơ chỉ phương của đường thẳng $d$ là:',
            correct: '$\\vec{u} = (-5; 3)$.',
            wrongs: ['$\\vec{u} = (2; -1)$.', '$\\vec{u} = (5; 3)$.', '$\\vec{u} = (3; 5)$.'],
            explanation:
              'Từ phương trình tham số $\\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases}$, một vectơ chỉ phương của $d$ là $\\vec{u} = (u_1; u_2) = (-5; 3)$.',
          },
          {
            topic: 'Bài 19: Chuyển đổi giữa vectơ pháp tuyến và vectơ chỉ phương (Tương tự Luyện tập 3)',
            prompt:
              'Đường thẳng $\\Delta$ có một vectơ pháp tuyến là $\\vec{n} = (2; -5)$. Vectơ nào sau đây là một vectơ chỉ phương của $\\Delta$?',
            correct: '$\\vec{u} = (5; 2)$.',
            wrongs: ['$\\vec{u} = (2; 5)$.', '$\\vec{u} = (-5; 2)$.', '$\\vec{u} = (5; -2)$.'],
            explanation:
              'Nếu $\\vec{n} = (a; b) = (2; -5)$ là vectơ pháp tuyến thì $\\vec{u} = (-b; a) = (5; 2)$ là một vectơ chỉ phương vì $\\vec{n} \\cdot \\vec{u} = 2 \\cdot 5 + (-5) \\cdot 2 = 0$.',
            tikzCode: tikzLineAndNormal(1, 2, '\\Delta'),
          },
          {
            topic: 'Bài 19: Lập phương trình tổng quát khi biết điểm và vectơ pháp tuyến (Tương tự Ví dụ 1)',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình tổng quát của đường thẳng đi qua điểm $A(1; -2)$ và nhận $\\vec{n} = (2; 3)$ làm vectơ pháp tuyến là:',
            correct: '$2x + 3y + 4 = 0$.',
            wrongs: ['$2x + 3y - 4 = 0$.', '$2x - 3y + 4 = 0$.', '$3x - 2y - 7 = 0$.'],
            explanation:
              'Phương trình đường thẳng là $2(x - 1) + 3(y + 2) = 0 \\Leftrightarrow 2x + 3y + 4 = 0$.',
          },
          {
            topic: 'Bài 19: Lập phương trình tham số của đường thẳng (Tương tự Ví dụ 4)',
            prompt:
              'Phương trình tham số của đường thẳng $\\Delta$ đi qua điểm $M(3; -4)$ và có vectơ chỉ phương $\\vec{u} = (1; -2)$ là:',
            correct: '$\\begin{cases} x = 3 + t \\\\ y = -4 - 2t \\end{cases}$.',
            wrongs: [
              '$\\begin{cases} x = 1 + 3t \\\\ y = -2 - 4t \\end{cases}$.',
              '$\\begin{cases} x = 3 - 2t \\\\ y = -4 + t \\end{cases}$.',
              '$\\begin{cases} x = -3 + t \\\\ y = 4 - 2t \\end{cases}$.',
            ],
            explanation:
              'Đường thẳng đi qua $M(3; -4)$ và có VTCP $\\vec{u} = (1; -2)$ có phương trình tham số $\\begin{cases} x = 3 + t \\\\ y = -4 - 2t \\end{cases}$.',
          },
          {
            topic: 'Bài 19: Phương trình đường thẳng theo đoạn chắn (Tương tự Nhận xét trang 32)',
            prompt:
              'Trong mặt phẳng $Oxy$, đường thẳng cắt trục $Ox$ tại $A(4; 0)$ và cắt trục $Oy$ tại $B(0; -2)$ có phương trình đoạn chắn là:',
            correct: '$\\frac{x}{4} + \\frac{y}{-2} = 1$.',
            wrongs: [
              '$\\frac{x}{-2} + \\frac{y}{4} = 1$.',
              '$\\frac{x}{4} + \\frac{y}{2} = 1$.',
              '$\\frac{x}{4} - \\frac{y}{2} = 0$.',
            ],
            explanation:
              'Đường thẳng đi qua $A(a; 0)$ và $B(0; b)$ với $a = 4, b = -2$ có phương trình đoạn chắn là $\\frac{x}{4} + \\frac{y}{-2} = 1$.',
          },
          {
            topic: 'Bài 19: Lập phương trình tổng quát đi qua hai điểm (Tương tự Ví dụ 5 & Luyện tập 5)',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình tổng quát của đường thẳng đi qua hai điểm $A(1; 2)$ và $B(3; 6)$ là:',
            correct: '$2x - y = 0$.',
            wrongs: ['$2x + y - 4 = 0$.', '$x - 2y + 3 = 0$.', '$2x - y + 4 = 0$.'],
            explanation:
              'Ta có $\\overrightarrow{AB} = (2; 4) = 2(1; 2)$ nên đường thẳng nhận $\\vec{u} = (1; 2)$ làm VTCP, suy ra VTPT $\\vec{n} = (2; -1)$. Phương trình là $2(x - 1) - 1(y - 2) = 0 \\Leftrightarrow 2x - y = 0$.',
          },
          {
            topic: 'Bài 19: Kiểm tra điểm thuộc đường thẳng cho bởi phương trình tham số',
            prompt:
              'Cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -3 + t \\end{cases}$. Điểm nào sau đây thuộc đường thẳng $d$?',
            correct: '$P(5; -1)$.',
            wrongs: ['$Q(3; -1)$.', '$M(1; 3)$.', '$N(-1; -2)$.'],
            explanation:
              'Thay $x = 5$ vào $1 + 2t = 5 \\Rightarrow t = 2$. Khi đó $y = -3 + 2 = -1$ đúng bằng tung độ của $P(5; -1)$, nên $P \\in d$.',
          },
          {
            topic: 'Bài 19: Chuyển từ phương trình tham số sang phương trình tổng quát (Tương tự Bài 7.2)',
            prompt:
              'Cho đường thẳng $d: \\begin{cases} x = -1 + 3t \\\\ y = 2 + 4t \\end{cases}$. Phương trình tổng quát của đường thẳng $d$ là:',
            correct: '$4x - 3y + 10 = 0$.',
            wrongs: ['$4x + 3y - 2 = 0$.', '$3x + 4y - 5 = 0$.', '$4x - 3y - 10 = 0$.'],
            explanation:
              'Đường thẳng $d$ đi qua $M(-1; 2)$ và có VTCP $\\vec{u} = (3; 4) \\Rightarrow$ VTPT $\\vec{n} = (4; -3)$. Phương trình tổng quát là $4(x + 1) - 3(y - 2) = 0 \\Leftrightarrow 4x - 3y + 10 = 0$.',
          },
          {
            topic: 'Bài 19: Hệ số góc của đường thẳng (Tương tự Bài 7.4)',
            prompt:
              'Trong mặt phẳng $Oxy$, hệ số góc $k$ của đường thẳng $\\Delta: 6x - 2y + 5 = 0$ bằng:',
            correct: '$k = 3$.',
            wrongs: ['$k = -3$.', '$k = 6$.', '$k = \\frac{5}{2}$.'],
            explanation:
              'Từ $6x - 2y + 5 = 0 \\Leftrightarrow 2y = 6x + 5 \\Leftrightarrow y = 3x + \\frac{5}{2}$. Vậy hệ số góc của đường thẳng là $k = 3$.',
          },
          {
            topic: 'Bài 19: Phương trình đường trung trực của đoạn thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, cho hai điểm $A(1; 3)$ và $B(5; 1)$. Phương trình đường trung trực của đoạn thẳng $AB$ là:',
            correct: '$2x - y - 4 = 0$.',
            wrongs: ['$2x - y + 4 = 0$.', '$x + 2y - 7 = 0$.', '$2x + y - 8 = 0$.'],
            explanation:
              'Trung điểm của $AB$ là $I(3; 2)$. Đường trung trực đi qua $I(3; 2)$ và nhận $\\overrightarrow{AB} = (4; -2) = 2(2; -1)$ làm VTPT, nên có phương trình $2(x - 3) - 1(y - 2) = 0 \\Leftrightarrow 2x - y - 4 = 0$.',
          },
          {
            topic: 'Bài 19: Ứng dụng phương trình đường thẳng trong bài toán nhiệt độ sôi (Tương tự Vận dụng trang 35)',
            prompt:
              'Nhiệt độ sôi $y\\ (^{\\circ}\\text{C})$ của nước phụ thuộc tuyến tính vào độ cao $x\\text{ (m)}$ so với mực nước biển. Biết tại mực nước biển ($x = 0\\text{ m}$) nước sôi ở $100^{\\circ}\\text{C}$, và ở độ cao $x = 3000\\text{ m}$ nước sôi ở $90^{\\circ}\\text{C}$. Hệ thức liên hệ giữa $y$ và $x$ là:',
            correct: '$y = 100 - \\frac{1}{300}x$.',
            wrongs: [
              '$y = 100 - \\frac{1}{30}x$.',
              '$y = 100 + \\frac{1}{300}x$.',
              '$y = 90 - \\frac{1}{300}x$.',
            ],
            explanation:
              'Đường thẳng đi qua $(0; 100)$ và $(3000; 90)$ có hệ số góc $a = \\frac{90 - 100}{3000 - 0} = -\\frac{1}{300}$ và tung độ gốc $b = 100$. Vậy $y = 100 - \\frac{1}{300}x$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 19: Các dạng phương trình của đường thẳng đi qua hai điểm (Tương tự Ví dụ 5 & Bài 7.3)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(2; 1)$ và $B(-1; 5)$. Gọi $\\Delta$ là đường thẳng đi qua hai điểm $A$ và $B$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzLineAndNormal(2, 1, '\\Delta'),
            statements: [
              {
                statement: 'Vectơ $\\overrightarrow{AB} = (-3; 4)$ là một vectơ chỉ phương của đường thẳng $\\Delta$.',
                isCorrect: true,
                explanation: 'Ta có $\\overrightarrow{AB} = (-1 - 2; 5 - 1) = (-3; 4)$ là một vectơ chỉ phương của $\\Delta$.',
              },
              {
                statement: 'Vectơ $\\vec{n} = (4; 3)$ là một vectơ pháp tuyến của đường thẳng $\\Delta$.',
                isCorrect: true,
                explanation: 'Vì $\\vec{n} \\cdot \\overrightarrow{AB} = 4(-3) + 3(4) = 0$ nên $\\vec{n} = (4; 3)$ vuông góc với $\\overrightarrow{AB}$ và là VTPT của $\\Delta$.',
              },
              {
                statement: 'Phương trình tổng quát của đường thẳng $\\Delta$ là $4x + 3y - 11 = 0$.',
                isCorrect: true,
                explanation: 'Đường thẳng đi qua $A(2; 1)$ có VTPT $\\vec{n} = (4; 3)$: $4(x - 2) + 3(y - 1) = 0 \\Leftrightarrow 4x + 3y - 11 = 0$.',
              },
              {
                statement: 'Điểm $M(5; -2)$ thuộc đường thẳng $\\Delta$.',
                isCorrect: false,
                explanation: 'Thay toạ độ $M(5; -2)$ vào vế trái: $4(5) + 3(-2) - 11 = 20 - 6 - 11 = 3 \\neq 0$, nên $M \\notin \\Delta$.',
              },
            ],
          },
          {
            topic: 'Bài 19: Phương trình đường cao và đường trung tuyến trong tam giác (Tương tự Bài 7.3)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có ba đỉnh $A(1; 4),\\ B(3; -2)$ và $C(5; 2)$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Trung điểm $M$ của cạnh $BC$ có toạ độ là $M(4; 0)$.',
                isCorrect: true,
                explanation: 'Ta có $x_M = \\frac{3 + 5}{2} = 4,\\ y_M = \\frac{-2 + 2}{2} = 0$, nên $M(4; 0)$.',
              },
              {
                statement: 'Đường trung tuyến $AM$ của tam giác $ABC$ có phương trình tổng quát là $4x + 3y - 16 = 0$.',
                isCorrect: true,
                explanation:
                  'Ta có $\\overrightarrow{AM} = (3; -4) \\Rightarrow$ VTPT của $AM$ là $\\vec{n} = (4; 3)$. Phương trình $AM$: $4(x - 4) + 3(y - 0) = 0 \\Leftrightarrow 4x + 3y - 16 = 0$.',
              },
              {
                statement: 'Đường cao $AH$ kẻ từ $A$ của tam giác $ABC$ nhận $\\overrightarrow{BC} = (2; 4)$ làm một vectơ chỉ phương.',
                isCorrect: false,
                explanation:
                  'Vì $AH \\perp BC$ nên $\\overrightarrow{BC} = (2; 4)$ là một vectơ pháp tuyến của đường cao $AH$ (không phải vectơ chỉ phương).',
              },
              {
                statement: 'Phương trình tổng quát của đường cao $AH$ là $x + 2y - 9 = 0$.',
                isCorrect: true,
                explanation:
                  'Đường cao $AH$ đi qua $A(1; 4)$ và nhận $\\vec{n} = \\frac{1}{2}\\overrightarrow{BC} = (1; 2)$ làm VTPT: $1(x - 1) + 2(y - 4) = 0 \\Leftrightarrow x + 2y - 9 = 0$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 19: Tìm tham số để điểm thuộc đường thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, tìm giá trị của tham số $m$ để điểm $A(m; 2m - 1)$ thuộc đường thẳng $\\Delta: 3x - y - 7 = 0$.',
            answers: ['6'],
            explanation:
              'Thay toạ độ điểm $A(m; 2m - 1)$ vào phương trình $\\Delta$: $3m - (2m - 1) - 7 = 0 \\Leftrightarrow m - 6 = 0 \\Leftrightarrow m = 6$.',
          },
          {
            topic: 'Bài 19: Tính diện tích tam giác tạo bởi đường thẳng với hai trục toạ độ',
            prompt:
              'Trong mặt phẳng $Oxy$, đường thẳng $d: 3x + 4y - 12 = 0$ cắt hai trục toạ độ $Ox, Oy$ lần lượt tại $A$ và $B$. Tính diện tích tam giác $OAB$.',
            answers: ['6'],
            explanation:
              'Cho $y = 0 \\Rightarrow x = 4 \\Rightarrow A(4; 0) \\Rightarrow OA = 4$. Cho $x = 0 \\Rightarrow y = 3 \\Rightarrow B(0; 3) \\Rightarrow OB = 3$. Diện tích tam giác vuông $OAB$ là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 3 = 6$.',
          },
          {
            topic: 'Bài 19: Bài toán chuyển động thẳng theo tham số thời gian (Tương tự Bài 7.6)',
            prompt:
              'Một thiết bị tự hành chuyển động trên mặt phẳng toạ độ $Oxy$ (đơn vị: km) theo phương trình tham số $\\begin{cases} x = 2 + 6t \\\\ y = 1 + 8t \\end{cases}$ với $t \\ge 0$ là thời gian tính bằng giờ. Tính quãng đường (đơn vị: km) thiết bị đi được sau $2$ giờ kể từ lúc xuất phát ($t = 0$).',
            answers: ['20'],
            explanation:
              'Tại $t = 0$, thiết bị ở $A(2; 1)$. Tại $t = 2$, thiết bị ở $B(14; 17)$. Quãng đường đi được là $AB = \\sqrt{(14 - 2)^2 + (17 - 1)^2} = \\sqrt{12^2 + 16^2} = 20\\text{ (km)}$.',
          },
          {
            topic: 'Bài 19: Tìm tung độ giao điểm của đường thẳng với trục tung',
            prompt:
              'Đường thẳng đi qua hai điểm $M(2; 5)$ và $N(4; 9)$ cắt trục tung $Oy$ tại điểm có tung độ bằng bao nhiêu?',
            answers: ['1'],
            explanation:
              'Vectơ $\\overrightarrow{MN} = (2; 4) = 2(1; 2) \\Rightarrow$ phương trình đường thẳng là $2(x - 2) - (y - 5) = 0 \\Leftrightarrow 2x - y + 1 = 0$. Cho $x = 0 \\Rightarrow y = 1$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 19: Lập phương trình tham số và phương trình tổng quát đi qua hai điểm (Tương tự Ví dụ 5)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, lập phương trình tham số và phương trình tổng quát của đường thẳng $\\Delta$ đi qua hai điểm $A(1; -3)$ và $B(4; 2)$.',
            conclusionTarget: 'Tìm vectơ chỉ phương, vectơ pháp tuyến và viết hai dạng phương trình của $\\Delta$.',
            steps: [
              'Đường thẳng $\\Delta$ đi qua $A(1; -3), B(4; 2)$ nên nhận $\\overrightarrow{AB} = (3; 5)$ làm một vectơ chỉ phương.',
              'Phương trình tham số của $\\Delta$ đi qua $A(1; -3)$ là $\\begin{cases} x = 1 + 3t \\\\ y = -3 + 5t \\end{cases}\\ (t \\in \\mathbb{R})$.',
              'Từ vectơ chỉ phương $\\vec{u} = (3; 5)$, suy ra một vectơ pháp tuyến của $\\Delta$ là $\\vec{n} = (5; -3)$.',
              'Phương trình tổng quát của $\\Delta$ là $5(x - 1) - 3(y + 3) = 0 \\Leftrightarrow 5x - 3y - 14 = 0$.',
            ],
            analysis:
              'Khi biết hai điểm $A, B$, ta luôn tính được ngay vectơ chỉ phương $\\overrightarrow{AB}$, từ đó suy ra cả phương trình tham số và phương trình tổng quát.',
          },
          {
            topic: 'Bài 19: Viết phương trình ba đường trung trực hoặc đường cao của tam giác (Tương tự Bài 7.3)',
            problemStatement:
              'Cho tam giác $ABC$ có $A(2; 3),\\ B(-1; 1)$ và $C(3; -1)$. Lập phương trình tổng quát của đường cao $AH$ kẻ từ đỉnh $A$.',
            conclusionTarget: 'Xác định vectơ pháp tuyến của $AH$ và lập phương trình tổng quát.',
            steps: [
              'Ta có $\\overrightarrow{BC} = (3 - (-1); -1 - 1) = (4; -2)$.',
              'Vì đường cao $AH$ vuông góc với cạnh $BC$ nên $AH$ nhận $\\vec{n} = \\frac{1}{2}\\overrightarrow{BC} = (2; -1)$ làm một vectơ pháp tuyến.',
              'Đường cao $AH$ đi qua đỉnh $A(2; 3)$ và có vectơ pháp tuyến $\\vec{n} = (2; -1)$ nên có phương trình $2(x - 2) - 1(y - 3) = 0$.',
              'Thu gọn phương trình, ta được phương trình tổng quát của đường cao $AH$ là $2x - y - 1 = 0$.',
            ],
            analysis:
              'Đường cao $AH \\perp BC$ nên vectơ chỉ phương $\\overrightarrow{BC}$ của cạnh $BC$ chính là vectơ pháp tuyến của $AH$.',
          },
          {
            topic: 'Bài 19: Chuyển đổi từ phương trình tổng quát sang phương trình tham số (Tương tự Bài 7.1)',
            problemStatement:
              'Lập phương trình tham số của đường thẳng $d$ có phương trình tổng quát là $2x - 5y + 8 = 0$.',
            conclusionTarget: 'Tìm một điểm thuộc $d$, một vectơ chỉ phương và viết phương trình tham số.',
            steps: [
              'Từ phương trình tổng quát $2x - 5y + 8 = 0$, đường thẳng $d$ có một vectơ pháp tuyến là $\\vec{n} = (2; -5)$.',
              'Suy ra một vectơ chỉ phương của đường thẳng $d$ là $\\vec{u} = (5; 2)$.',
              'Chọn $y = 0$ thay vào phương trình $2x - 5y + 8 = 0$, ta được $x = -4$, vậy điểm $M(-4; 0)$ thuộc $d$.',
              'Phương trình tham số của đường thẳng $d$ là $\\begin{cases} x = -4 + 5t \\\\ y = 2t \\end{cases}\\ (t \\in \\mathbb{R})$.',
            ],
            analysis:
              'Để viết phương trình tham số từ phương trình tổng quát, ta chỉ cần lấy 1 điểm bất kỳ thuộc đường thẳng và đổi $\\vec{n} = (a; b)$ thành $\\vec{u} = (-b; a)$.',
          },
          {
            topic: 'Bài 19: Ứng dụng phương trình đường thẳng trong bài toán thực tiễn (Tương tự Bài 7.5)',
            problemStatement:
              'Một công ty cước taxi tính giá mở cửa là $15$ nghìn đồng và mỗi kilômét tiếp theo tính giá không đổi. Biết một hành khách đi $4\\text{ km}$ hết $63$ nghìn đồng. Lập phương trình biểu thị tổng số tiền cước $y$ (nghìn đồng) theo quãng đường $x\\text{ (km)}$ và tính số tiền khi đi $10\\text{ km}$.',
            conclusionTarget: 'Xác định hàm bậc nhất $y = ax + b$ và tính $y(10)$.',
            steps: [
              'Gọi phương trình đường thẳng biểu thị tiền cước $y$ theo quãng đường $x$ là $y = ax + b$.',
              'Khi $x = 0$ thì giá mở cửa là $y = 15 \\Rightarrow b = 15$.',
              'Khi $x = 4$ thì $y = 63$, thay vào ta có $4a + 15 = 63 \\Leftrightarrow 4a = 48 \\Leftrightarrow a = 12$. Vậy $y = 12x + 15$.',
              'Khi hành khách đi $x = 10\\text{ km}$, tổng tiền cước phải trả là $y = 12 \\cdot 10 + 15 = 135$ (nghìn đồng).',
            ],
            analysis:
              'Mối quan hệ bậc nhất $y = ax + b$ có đồ thị là đường thẳng đi qua hai điểm $(0; 15)$ và $(4; 63)$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-19-2',
        lessonId: 'bai-19',
        title: 'Đề ôn Bài 19 - Đề số 02',
        subtitle: 'Nâng cao lập phương trình đường thẳng trong tam giác và bài toán toạ độ (SGK Toán 10 Tập 2, trang 30–35)',
        description:
          'Đề ôn tập số 02 của Bài 19 (Phương trình đường thẳng): Phương trình đường thẳng song song, vuông góc với trục, đường trung tuyến, trung trực và ứng dụng.',
        mcqs: [
          {
            topic: 'Bài 19: Vectơ pháp tuyến cùng phương (Tương tự Nhận xét trang 30)',
            prompt:
              'Đường thẳng $\\Delta: 4x - 6y + 9 = 0$ nhận vectơ nào sau đây làm một vectơ pháp tuyến?',
            correct: '$\\vec{n} = (2; -3)$.',
            wrongs: ['$\\vec{n} = (2; 3)$.', '$\\vec{n} = (3; 2)$.', '$\\vec{n} = (-3; 2)$.'],
            explanation:
              'Vectơ $\\vec{n}_0 = (4; -6) = 2(2; -3)$ là VTPT của $\\Delta$, nên mọi vectơ cùng phương khác $\\vec{0}$ như $\\vec{n} = (2; -3)$ cũng là VTPT của $\\Delta$.',
          },
          {
            topic: 'Bài 19: Phương trình đường thẳng đi qua điểm và song song với trục Ox',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình đường thẳng đi qua điểm $M(4; -3)$ và song song với trục hoành $Ox$ là:',
            correct: '$y + 3 = 0$.',
            wrongs: ['$x - 4 = 0$.', '$y - 3 = 0$.', '$x + 4 = 0$.'],
            explanation:
              'Đường thẳng song song với trục $Ox$ nhận $\\vec{j} = (0; 1)$ làm VTPT, đi qua $M(4; -3)$ nên có phương trình $y = -3 \\Leftrightarrow y + 3 = 0$.',
          },
          {
            topic: 'Bài 19: Phương trình đường thẳng đi qua điểm và vuông góc với trục Ox',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình đường thẳng đi qua điểm $A(-2; 5)$ và vuông góc với trục hoành $Ox$ là:',
            correct: '$x + 2 = 0$.',
            wrongs: ['$y - 5 = 0$.', '$x - 2 = 0$.', '$2x - 5y = 0$.'],
            explanation:
              'Đường thẳng vuông góc với trục $Ox$ nhận $\\vec{i} = (1; 0)$ làm VTPT nên có phương trình $x - (-2) = 0 \\Leftrightarrow x + 2 = 0$.',
          },
          {
            topic: 'Bài 19: Lập phương trình tổng quát từ điểm và hệ số góc (Tương tự Bài 7.4)',
            prompt:
              'Đường thẳng $d$ đi qua điểm $A(2; -1)$ và có hệ số góc $k = -3$ có phương trình tổng quát là:',
            correct: '$3x + y - 5 = 0$.',
            wrongs: ['$3x - y - 7 = 0$.', '$x - 3y - 5 = 0$.', '$3x + y + 5 = 0$.'],
            explanation:
              'Phương trình theo hệ số góc: $y - (-1) = -3(x - 2) \\Leftrightarrow y + 1 = -3x + 6 \\Leftrightarrow 3x + y - 5 = 0$.',
          },
          {
            topic: 'Bài 19: Lập phương trình tổng quát đi qua điểm và biết VTCP',
            prompt:
              'Đường thẳng $\\Delta$ đi qua điểm $M(-1; 4)$ và nhận $\\vec{u} = (3; -2)$ làm vectơ chỉ phương có phương trình tổng quát là:',
            correct: '$2x + 3y - 10 = 0$.',
            wrongs: ['$3x - 2y + 11 = 0$.', '$2x - 3y + 14 = 0$.', '$2x + 3y + 10 = 0$.'],
            explanation:
              'Từ $\\vec{u} = (3; -2)$ suy ra VTPT $\\vec{n} = (2; 3)$. Phương trình tổng quát là $2(x + 1) + 3(y - 4) = 0 \\Leftrightarrow 2x + 3y - 10 = 0$.',
          },
          {
            topic: 'Bài 19: Lập phương trình tham số của đường thẳng đi qua hai điểm',
            prompt:
              'Cho hai điểm $A(0; 3)$ và $B(2; -1)$. Phương trình nào sau đây là một phương trình tham số của đường thẳng $AB$?',
            correct: '$\\begin{cases} x = t \\\\ y = 3 - 2t \\end{cases}$.',
            wrongs: [
              '$\\begin{cases} x = 3 + t \\\\ y = -2t \\end{cases}$.',
              '$\\begin{cases} x = 2t \\\\ y = 3 + t \\end{cases}$.',
              '$\\begin{cases} x = t \\\\ y = 3 + 2t \\end{cases}$.',
            ],
            explanation:
              'Ta có $\\overrightarrow{AB} = (2; -4) = 2(1; -2)$ nên $\\vec{u} = (1; -2)$ là VTCP. Đường thẳng qua $A(0; 3)$ có PTTS $\\begin{cases} x = t \\\\ y = 3 - 2t \\end{cases}$.',
          },
          {
            topic: 'Bài 19: Chuyển phương trình đoạn chắn về phương trình tổng quát',
            prompt:
              'Phương trình đoạn chắn $\\frac{x}{3} + \\frac{y}{5} = 1$ tương đương với phương trình tổng quát nào sau đây?',
            correct: '$5x + 3y - 15 = 0$.',
            wrongs: ['$3x + 5y - 15 = 0$.', '$5x + 3y - 1 = 0$.', '$5x - 3y - 15 = 0$.'],
            explanation:
              'Quy đồng mẫu số chung $15$: $5x + 3y = 15 \\Leftrightarrow 5x + 3y - 15 = 0$.',
          },
          {
            topic: 'Bài 19: Phương trình đường thẳng song song với đường thẳng cho trước',
            prompt:
              'Đường thẳng $d$ đi qua điểm $A(1; 2)$ và song song với đường thẳng $\\Delta: x - 3y + 4 = 0$ có phương trình là:',
            correct: '$x - 3y + 5 = 0$.',
            wrongs: ['$3x + y - 5 = 0$.', '$x - 3y - 5 = 0$.', '$x + 3y - 7 = 0$.'],
            explanation:
              'Vì $d \\parallel \\Delta$ nên $d$ nhận $\\vec{n} = (1; -3)$ làm VTPT. Phương trình $d$: $1(x - 1) - 3(y - 2) = 0 \\Leftrightarrow x - 3y + 5 = 0$.',
          },
          {
            topic: 'Bài 19: Phương trình đường thẳng vuông góc với đường thẳng cho trước',
            prompt:
              'Đường thẳng $d$ đi qua điểm $B(-2; 1)$ và vuông góc với đường thẳng $\\Delta: 2x + y - 3 = 0$ có phương trình tổng quát là:',
            correct: '$x - 2y + 4 = 0$.',
            wrongs: ['$2x + y + 3 = 0$.', '$x + 2y = 0$.', '$x - 2y - 4 = 0$.'],
            explanation:
              'Vì $d \\perp \\Delta$ nên VTPT của $\\Delta$ là $\\vec{n}_\\Delta = (2; 1)$ trở thành VTCP của $d$, suy ra VTPT của $d$ là $\\vec{n}_d = (1; -2)$. Phương trình $d$: $1(x + 2) - 2(y - 1) = 0 \\Leftrightarrow x - 2y + 4 = 0$.',
          },
          {
            topic: 'Bài 19: Tìm điểm thuộc đường thẳng cách đều hai điểm',
            prompt:
              'Trên đường thẳng $d: \\begin{cases} x = t \\\\ y = 2t - 1 \\end{cases}$, điểm $M$ có hoành độ dương và thuộc trục hoành $Ox$ có toạ độ là:',
            correct: '$M\\left(\\frac{1}{2}; 0\\right)$.',
            wrongs: ['$M(1; 0)$.', '$M(0; -1)$.', '$M(2; 0)$.'],
            explanation:
              'Điểm $M \\in Ox$ nên tung độ $y = 2t - 1 = 0 \\Leftrightarrow t = \\frac{1}{2}$. Khi đó $x = \\frac{1}{2}$, suy ra $M\\left(\\frac{1}{2}; 0\\right)$.',
          },
          {
            topic: 'Bài 19: Phương trình đường trung bình của tam giác',
            prompt:
              'Cho tam giác $ABC$ có $A(1; 1),\\ B(5; 3),\\ C(3; 7)$. Đường trung bình ứng với cạnh $AB$ (đi qua trung điểm của $AC$ và $BC$) có vectơ pháp tuyến là:',
            correct: '$\\vec{n} = (1; -2)$.',
            wrongs: ['$\\vec{n} = (2; 1)$.', '$\\vec{n} = (1; 2)$.', '$\\vec{n} = (-2; -1)$.'],
            explanation:
              'Đường trung bình ứng với cạnh $AB$ song song với $AB$ nên nhận $\\overrightarrow{AB} = (4; 2) = 2(2; 1)$ làm VTCP, suy ra VTPT là $\\vec{n} = (1; -2)$.',
          },
          {
            topic: 'Bài 19: Ứng dụng ước tính dân số tuyến tính (Tương tự Bài 7.5)',
            prompt:
              'Dân số của một thị trấn được ước tính theo công thức tuyến tính $y = ax + b$ (nghìn người), trong đó $x$ là số năm tính từ năm 2020. Biết năm 2020 ($x = 0$) dân số là $45$ nghìn người và năm 2024 ($x = 4$) dân số là $53$ nghìn người. Theo mô hình trên, năm 2030 ($x = 10$) dân số thị trấn là:',
            correct: '$65$ nghìn người.',
            wrongs: ['$61$ nghìn người.', '$63$ nghìn người.', '$68$ nghìn người.'],
            explanation:
              'Từ $(0; 45)$ và $(4; 53)$, ta có $b = 45$ và $a = \\frac{53 - 45}{4} = 2 \\Rightarrow y = 2x + 45$. Với $x = 10$: $y = 2 \\cdot 10 + 45 = 65$ (nghìn người).',
          },
        ],
        tfs: [
          {
            topic: 'Bài 19: Phân tích đường thẳng cho bởi phương trình tham số (Tương tự Bài 7.2)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho đường thẳng $\\Delta: \\begin{cases} x = 3 - 2t \\\\ y = 1 + 5t \\end{cases}\\ (t \\in \\mathbb{R})$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Điểm $A(3; 1)$ thuộc đường thẳng $\\Delta$ (ứng với $t = 0$).',
                isCorrect: true,
                explanation: 'Thay $t = 0$ vào phương trình tham số ta được $x = 3, y = 1$, nên $A(3; 1) \\in \\Delta$.',
              },
              {
                statement: 'Vectơ $\\vec{u} = (-2; 5)$ là một vectơ chỉ phương và $\\vec{n} = (5; 2)$ là một vectơ pháp tuyến của $\\Delta$.',
                isCorrect: true,
                explanation: 'Hệ số của $t$ cho $\\vec{u} = (-2; 5)$, suy ra $\\vec{n} = (5; 2)$ vì $5(-2) + 2(5) = 0$.',
              },
              {
                statement: 'Phương trình tổng quát của đường thẳng $\\Delta$ là $5x + 2y - 17 = 0$.',
                isCorrect: true,
                explanation:
                  'Đường thẳng đi qua $A(3; 1)$ và có VTPT $\\vec{n} = (5; 2)$ có phương trình $5(x - 3) + 2(y - 1) = 0 \\Leftrightarrow 5x + 2y - 17 = 0$.',
              },
              {
                statement: 'Hệ số góc của đường thẳng $\\Delta$ bằng $k = \\frac{5}{2}$.',
                isCorrect: false,
                explanation:
                  'Từ $5x + 2y - 17 = 0 \\Leftrightarrow y = -\\frac{5}{2}x + \\frac{17}{2}$, suy ra hệ số góc là $k = -\\frac{5}{2}$ (không phải $\\frac{5}{2}$).',
              },
            ],
          },
          {
            topic: 'Bài 19: Bài toán chuyển động của tàu biển theo phương trình tham số (Tương tự Bài 7.6)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$ (đơn vị trên mỗi trục là kilômét), một con tàu xuất phát từ vị trí $A(1; 2)$ lúc $t = 0$ (giờ) và chuyển động thẳng đều theo phương trình tham số $\\begin{cases} x = 1 + 12t \\\\ y = 2 + 16t \\end{cases}$ với $t \\ge 0$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Sau $1$ giờ chuyển động ($t = 1$), con tàu ở vị trí điểm $B(13; 18)$.',
                isCorrect: true,
                explanation: 'Thay $t = 1$ vào phương trình tham số: $x = 1 + 12 = 13,\\ y = 2 + 16 = 18$.',
              },
              {
                statement: 'Vận tốc chuyển động của con tàu là $20\\text{ km/h}$.',
                isCorrect: true,
                explanation:
                  'Trong mỗi giờ, vectơ độ dịch chuyển của tàu là $\\vec{u} = (12; 16)$, quãng đường đi trong $1$ giờ là $|\\vec{u}| = \\sqrt{12^2 + 16^2} = 20\\text{ km}$, nên vận tốc là $20\\text{ km/h}$.',
              },
              {
                statement: 'Quỹ đạo chuyển động của con tàu nằm trên đường thẳng có phương trình tổng quát $4x - 3y + 2 = 0$.',
                isCorrect: true,
                explanation:
                  'VTCP $\\vec{u} = (12; 16) = 4(3; 4) \\Rightarrow$ VTPT $\\vec{n} = (4; -3)$. Phương trình qua $A(1; 2)$: $4(x - 1) - 3(y - 2) = 0 \\Leftrightarrow 4x - 3y + 2 = 0$.',
              },
              {
                statement: 'Hòn đảo đặt tại vị trí $D(25; 32)$ nằm ngay trên quỹ đạo chuyển động của con tàu.',
                isCorrect: false,
                explanation:
                  'Thay $D(25; 32)$ vào $4x - 3y + 2$: $4(25) - 3(32) + 2 = 100 - 96 + 2 = 6 \\neq 0$, nên tàu không đi qua điểm $D(25; 32)$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 19: Tìm tham số để điểm thuộc đường thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, tìm giá trị của tham số $m$ để điểm $A(m; 2m - 1)$ thuộc đường thẳng $\\Delta: 3x - y - 7 = 0$.',
            answers: ['6'],
            explanation:
              'Thay toạ độ $A(m; 2m - 1)$ vào phương trình $\\Delta$: $3m - (2m - 1) - 7 = 0 \\Leftrightarrow m - 6 = 0 \\Leftrightarrow m = 6$.',
          },
          {
            topic: 'Bài 19: Tính hệ số trong phương trình tổng quát của đường thẳng',
            prompt:
              'Đường thẳng $\\Delta$ đi qua hai điểm $A(2; 3)$ và $B(4; 7)$ có phương trình tổng quát dạng $ax - y + b = 0$. Tính giá trị của $a + b$.',
            answers: ['1'],
            explanation:
              'Ta có $\\overrightarrow{AB} = (2; 4) = 2(1; 2) \\Rightarrow$ VTPT $\\vec{n} = (2; -1)$. Phương trình là $2(x - 2) - (y - 3) = 0 \\Leftrightarrow 2x - y - 1 = 0$. Suy ra $a = 2, b = -1 \\Rightarrow a + b = 1$.',
          },
          {
            topic: 'Bài 19: Tìm hoành độ giao điểm với trục hoành',
            prompt:
              'Trong mặt phẳng $Oxy$, đường thẳng $d: \\begin{cases} x = 10 - 2t \\\\ y = 6 - 3t \\end{cases}$ cắt trục hoành $Ox$ tại điểm có hoành độ bằng bao nhiêu?',
            answers: ['6'],
            explanation:
              'Giao điểm với trục $Ox$ có $y = 0 \\Rightarrow 6 - 3t = 0 \\Leftrightarrow t = 2$. Thay $t = 2$ vào $x = 10 - 2t$ được $x = 6$.',
          },
          {
            topic: 'Bài 19: Bài toán thực tế tính nhiệt độ sôi theo độ cao (Tương tự Vận dụng trang 35)',
            prompt:
              'Biết nhiệt độ sôi $y\\ (^{\\circ}\\text{C})$ của nước ở độ cao $x\\text{ (m)}$ so với mực nước biển được cho bởi công thức $y = 100 - \\frac{1}{300}x$. Tính nhiệt độ sôi của nước (đơn vị: $^{\\circ}\\text{C}$) tại đỉnh núi cao $x = 2400\\text{ m}$.',
            answers: ['92'],
            explanation:
              'Thay $x = 2400$ vào công thức: $y = 100 - \\frac{2400}{300} = 100 - 8 = 92\\ (^{\\circ}\\text{C})$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 19: Lập phương trình đường trung trực của đoạn thẳng',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-2; 4)$ và $B(4; -2)$. Lập phương trình tổng quát của đường trung trực $\\Delta$ của đoạn thẳng $AB$.',
            conclusionTarget: 'Tìm trung điểm $I$ của $AB$, vectơ pháp tuyến và viết phương trình $\\Delta$.',
            steps: [
              'Gọi $I$ là trung điểm của đoạn thẳng $AB$, ta có $x_I = \\frac{-2 + 4}{2} = 1$ và $y_I = \\frac{4 + (-2)}{2} = 1$, suy ra $I(1; 1)$.',
              'Đường trung trực $\\Delta$ vuông góc với $AB$ nên nhận $\\overrightarrow{AB} = (6; -6) = 6(1; -1)$ làm vectơ pháp tuyến.',
              'Chọn vectơ pháp tuyến tối giản của $\\Delta$ là $\\vec{n} = (1; -1)$.',
              'Phương trình tổng quát của $\\Delta$ đi qua $I(1; 1)$ là $1(x - 1) - 1(y - 1) = 0 \\Leftrightarrow x - y = 0$.',
            ],
            analysis:
              'Đường trung trực của đoạn thẳng $AB$ là đường thẳng đi qua trung điểm của $AB$ và nhận $\\overrightarrow{AB}$ làm vectơ pháp tuyến.',
          },
          {
            topic: 'Bài 19: Lập phương trình đường trung tuyến của tam giác (Tương tự Bài 7.3b)',
            problemStatement:
              'Cho tam giác $ABC$ có các đỉnh $A(1; 5),\\ B(-2; 1)$ và $C(4; 3)$. Lập phương trình tổng quát của đường trung tuyến $AM$.',
            conclusionTarget: 'Tìm toạ độ trung điểm $M$ của $BC$ và viết phương trình đường thẳng $AM$.',
            steps: [
              'Gọi $M$ là trung điểm của cạnh $BC$, ta có $M\\left(\\frac{-2 + 4}{2}; \\frac{1 + 3}{2}\\right) = M(1; 2)$.',
              'Đường trung tuyến $AM$ đi qua $A(1; 5)$ và $M(1; 2)$ nên có vectơ chỉ phương $\\overrightarrow{AM} = (0; -3)$.',
              'Suy ra đường thẳng $AM$ nhận $\\vec{n} = (1; 0)$ làm một vectơ pháp tuyến.',
              'Phương trình tổng quát của đường trung tuyến $AM$ là $1(x - 1) + 0(y - 5) = 0 \\Leftrightarrow x - 1 = 0$.',
            ],
            analysis:
              'Khi hai điểm $A(1; 5)$ và $M(1; 2)$ có cùng hoành độ $x = 1$, đường thẳng đi qua chúng là đường thẳng đứng $x - 1 = 0$.',
          },
          {
            topic: 'Bài 19: Tìm giao điểm của đường thẳng với hai trục toạ độ và viết phương trình đoạn chắn',
            problemStatement:
              'Cho đường thẳng $d$ đi qua điểm $M(2; 3)$ và có vectơ pháp tuyến $\\vec{n} = (3; 2)$. Viết phương trình tổng quát và phương trình đoạn chắn của $d$.',
            conclusionTarget: 'Lập phương trình tổng quát và đưa về dạng đoạn chắn $\\frac{x}{a} + \\frac{y}{b} = 1$.',
            steps: [
              'Phương trình tổng quát của đường thẳng $d$ đi qua $M(2; 3)$ với VTPT $\\vec{n} = (3; 2)$ là $3(x - 2) + 2(y - 3) = 0$.',
              'Thu gọn phương trình tổng quát: $3x + 2y - 12 = 0 \\Leftrightarrow 3x + 2y = 12$.',
              'Chia cả hai vế của phương trình $3x + 2y = 12$ cho $12$, ta được $\\frac{3x}{12} + \\frac{2y}{12} = 1$.',
              'Rút gọn phân thức, ta thu được phương trình đoạn chắn của $d$ là $\\frac{x}{4} + \\frac{y}{6} = 1$.',
            ],
            analysis:
              'Từ phương trình đoạn chắn $\\frac{x}{4} + \\frac{y}{6} = 1$, ta đọc ngay được giao điểm với hai trục là $(4; 0)$ và $(0; 6)$.',
          },
          {
            topic: 'Bài 19: Bài toán thực tế chuyển động thẳng đều trong mặt phẳng toạ độ (Tương tự Bài 7.6)',
            problemStatement:
              'Một máy bay không người lái khảo sát địa hình bay thẳng đều từ điểm $A(2; 3)$ lúc $t = 0$ và sau $2$ giờ thì đến điểm $B(10; 9)$ (đơn vị trên trục toạ độ là km). Lập phương trình tham số mô tả vị trí $(x; y)$ của thiết bị sau $t$ giờ và tìm vị trí của nó sau $3,5$ giờ.',
            conclusionTarget: 'Tìm vectơ vận tốc mỗi giờ, lập phương trình tham số và tính toạ độ tại $t = 3,5$.',
            steps: [
              'Sau $2$ giờ bay từ $A(2; 3)$ đến $B(10; 9)$, độ dịch chuyển tổng cộng là $\\overrightarrow{AB} = (8; 6)$.',
              'Do chuyển động thẳng đều nên trong mỗi giờ ($1$ đơn vị thời gian), vectơ độ dịch chuyển là $\\vec{v} = \\frac{1}{2}\\overrightarrow{AB} = (4; 3)$.',
              'Phương trình tham số xác định vị trí của thiết bị tại thời điểm $t$ giờ là $\\begin{cases} x = 2 + 4t \\\\ y = 3 + 3t \\end{cases}\\ (t \\ge 0)$.',
              'Thay $t = 3,5$ giờ vào phương trình tham số, ta tìm được vị trí của thiết bị là $M(16; 13,5)$.',
            ],
            analysis:
              'Trong chuyển động thẳng đều, vectơ vận tốc $\\vec{v} = \\frac{\\overrightarrow{AB}}{\\Delta t}$ đóng vai trò là vectơ chỉ phương gắn với tham số thời gian $t$.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-20',
    lessonNumber: 20,
    name: 'Bài 20',
    topicTitle: 'Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách',
    chapter: 'Chương VII: Phương pháp toạ độ trong mặt phẳng',
    keySummary:
      'Xác định vị trí tương đối giữa hai đường thẳng (cắt nhau, song song, trùng nhau, vuông góc); tính góc giữa hai đường thẳng bằng công thức côsin $\\cos(\\Delta_1, \\Delta_2) = \\frac{|a_1a_2 + b_1b_2|}{\\sqrt{a_1^2 + b_1^2}\\sqrt{a_2^2 + b_2^2}}$; tính khoảng cách từ một điểm đến một đường thẳng $d(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$ và vận dụng giải toán thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-20-1',
        lessonId: 'bai-20',
        title: 'Đề ôn Bài 20 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–5, Luyện tập 1–4, Vận dụng và Bài tập 7.7–7.12 (SGK Toán 10 Tập 2, trang 36–42)',
        description:
          'Đề ôn tập số 01 của Bài 20 (Vị trí tương đối, góc và khoảng cách): Xét vị trí tương đối của hai đường thẳng, tính góc giữa hai đường thẳng và tính khoảng cách từ điểm đến đường thẳng.',
        mcqs: [
          {
            topic: 'Bài 20: Xét vị trí tương đối giữa hai đường thẳng (Tương tự Ví dụ 1)',
            prompt:
              'Trong mặt phẳng $Oxy$, hai đường thẳng $\\Delta_1: 2x - 3y + 1 = 0$ và $\\Delta_2: 4x - 6y - 5 = 0$ có vị trí tương đối nào sau đây?',
            correct: 'Song song với nhau.',
            wrongs: [
              'Trùng nhau.',
              'Cắt nhau nhưng không vuông góc.',
              'Vuông góc với nhau.',
            ],
            explanation:
              'Ta có $\\frac{2}{4} = \\frac{-3}{-6} \\neq \\frac{1}{-5}$ nên hai đường thẳng $\\Delta_1$ và $\\Delta_2$ song song với nhau.',
          },
          {
            topic: 'Bài 20: Tìm toạ độ giao điểm của hai đường thẳng cắt nhau (Tương tự Ví dụ 1a)',
            prompt:
              'Trong mặt phẳng $Oxy$, toạ độ giao điểm $M$ của hai đường thẳng $d_1: x + y - 5 = 0$ và $d_2: x - y - 1 = 0$ là:',
            correct: '$M(3; 2)$.',
            wrongs: ['$M(2; 3)$.', '$M(4; 1)$.', '$M(3; -2)$.'],
            explanation:
              'Giải hệ phương trình $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases} \\Leftrightarrow \\begin{cases} x = 3 \\\\ y = 2 \\end{cases}$. Vậy giao điểm là $M(3; 2)$.',
          },
          {
            topic: 'Bài 20: Nhận biết hai đường thẳng vuông góc (Tương tự Ví dụ 2)',
            prompt:
              'Đường thẳng $\\Delta: 3x + 2y - 7 = 0$ vuông góc với đường thẳng nào sau đây?',
            correct: '$d: 2x - 3y + 4 = 0$.',
            wrongs: [
              '$d: 3x - 2y + 4 = 0$.',
              '$d: 6x + 4y - 1 = 0$.',
              '$d: 2x + 3y - 5 = 0$.',
            ],
            explanation:
              'VTPT của $\\Delta$ là $\\vec{n}_1 = (3; 2)$ và VTPT của $d: 2x - 3y + 4 = 0$ là $\\vec{n}_2 = (2; -3)$. Vì $\\vec{n}_1 \\cdot \\vec{n}_2 = 3 \\cdot 2 + 2(-3) = 0$ nên $\\Delta \\perp d$.',
          },
          {
            topic: 'Bài 20: Công thức tính côsin góc giữa hai đường thẳng (Tương tự Khung kiến thức trang 38)',
            prompt:
              'Cho hai đường thẳng $\\Delta_1$ và $\\Delta_2$ có các vectơ pháp tuyến lần lượt là $\\vec{n}_1 = (1; 2)$ và $\\vec{n}_2 = (3; 1)$. Giá trị của $\\cos(\\Delta_1, \\Delta_2)$ bằng:',
            correct: '$\\frac{\\sqrt{2}}{2}$.',
            wrongs: ['$\\frac{1}{2}$.', '$\\frac{\\sqrt{3}}{2}$.', '$\\frac{1}{\\sqrt{5}}$.'],
            explanation:
              'Ta có $\\cos(\\Delta_1, \\Delta_2) = \\frac{|1 \\cdot 3 + 2 \\cdot 1|}{\\sqrt{1^2 + 2^2} \\cdot \\sqrt{3^2 + 1^2}} = \\frac{5}{\\sqrt{5} \\cdot \\sqrt{10}} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.',
          },
          {
            topic: 'Bài 20: Tính số đo góc giữa hai đường thẳng (Tương tự Ví dụ 3 & Bài 7.8)',
            prompt:
              'Trong mặt phẳng $Oxy$, góc giữa hai đường thẳng $d_1: x - 2y + 3 = 0$ và $d_2: 3x - y - 5 = 0$ bằng:',
            correct: '$45^{\\circ}$.',
            wrongs: ['$30^{\\circ}$.', '$60^{\\circ}$.', '$90^{\\circ}$.'],
            explanation:
              'Ta có $\\vec{n}_1 = (1; -2),\\ \\vec{n}_2 = (3; -1) \\Rightarrow \\cos(d_1, d_2) = \\frac{|1 \\cdot 3 + (-2)(-1)|}{\\sqrt{5}\\sqrt{10}} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (d_1, d_2) = 45^{\\circ}$.',
          },
          {
            topic: 'Bài 20: Góc giữa hai đường thẳng cho ở dạng tham số (Tương tự Luyện tập 3)',
            prompt:
              'Số đo góc giữa hai đường thẳng $\\Delta_1: \\begin{cases} x = 1 + \\sqrt{3}t \\\\ y = 2 + t \\end{cases}$ và $\\Delta_2: y - 4 = 0$ bằng:',
            correct: '$30^{\\circ}$.',
            wrongs: ['$60^{\\circ}$.', '$45^{\\circ}$.', '$90^{\\circ}$.'],
            explanation:
              'Đường thẳng $\\Delta_1$ có VTCP $\\vec{u}_1 = (\\sqrt{3}; 1)$, đường thẳng $\\Delta_2: y - 4 = 0$ song song trục $Ox$ nên có VTCP $\\vec{u}_2 = (1; 0)$. Ta có $\\cos(\\Delta_1, \\Delta_2) = \\frac{|\\sqrt{3} \\cdot 1 + 1 \\cdot 0|}{\\sqrt{3 + 1} \\cdot 1} = \\frac{\\sqrt{3}}{2} \\Rightarrow (\\Delta_1, \\Delta_2) = 30^{\\circ}$.',
          },
          {
            topic: 'Bài 20: Tính khoảng cách từ một điểm đến một đường thẳng (Tương tự Ví dụ 5)',
            prompt:
              'Trong mặt phẳng $Oxy$, khoảng cách từ điểm $M(2; -1)$ đến đường thẳng $\\Delta: 3x + 4y + 8 = 0$ bằng:',
            correct: '$2$.',
            wrongs: ['$4$.', '$\\frac{10}{7}$.', '$3$.'],
            explanation:
              'Áp dụng công thức khoảng cách: $d(M, \\Delta) = \\frac{|3 \\cdot 2 + 4(-1) + 8|}{\\sqrt{3^2 + 4^2}} = \\frac{|6 - 4 + 8|}{5} = \\frac{10}{5} = 2$.',
            tikzCode: tikzPointToLineDistance('M(2;-1)', '\\Delta', '2'),
          },
          {
            topic: 'Bài 20: Khoảng cách từ gốc toạ độ đến đường thẳng',
            prompt:
              'Khoảng cách từ gốc toạ độ $O(0; 0)$ đến đường thẳng $d: 5x - 12y - 26 = 0$ bằng:',
            correct: '$2$.',
            wrongs: ['$\\frac{26}{17}$.', '$13$.', '$3$.'],
            explanation:
              'Ta có $d(O, d) = \\frac{|5 \\cdot 0 - 12 \\cdot 0 - 26|}{\\sqrt{5^2 + (-12)^2}} = \\frac{26}{13} = 2$.',
          },
          {
            topic: 'Bài 20: Khoảng cách từ điểm đến đường thẳng cho ở dạng tham số (Tương tự Bài 7.9)',
            prompt:
              'Trong mặt phẳng $Oxy$, khoảng cách từ điểm $A(1; 2)$ đến đường thẳng $\\Delta: \\begin{cases} x = 2 + 4t \\\\ y = -1 + 3t \\end{cases}$ bằng:',
            correct: '$3$.',
            wrongs: ['$5$.', '$\\frac{9}{5}$.', '$4$.'],
            explanation:
              'Đường thẳng $\\Delta$ đi qua $M_0(2; -1)$ và có VTCP $\\vec{u} = (4; 3) \\Rightarrow$ VTPT $\\vec{n} = (3; -4)$. Phương trình tổng quát của $\\Delta$ là $3(x - 2) - 4(y + 1) = 0 \\Leftrightarrow 3x - 4y - 10 = 0$. Vậy $d(A, \\Delta) = \\frac{|3(1) - 4(2) - 10|}{\\sqrt{3^2 + (-4)^2}} = \\frac{15}{5} = 3$.',
          },
          {
            topic: 'Bài 20: Khoảng cách giữa hai đường thẳng song song',
            prompt:
              'Trong mặt phẳng $Oxy$, khoảng cách giữa hai đường thẳng song song $d_1: 3x - 4y + 2 = 0$ và $d_2: 3x - 4y - 8 = 0$ bằng:',
            correct: '$2$.',
            wrongs: ['$\\frac{6}{5}$.', '$10$.', '$1$.'],
            explanation:
              'Lấy điểm $M(2; 2) \\in d_1$ (do $3 \\cdot 2 - 4 \\cdot 2 + 2 = 0$). Khi đó $d(d_1, d_2) = d(M, d_2) = \\frac{|3 \\cdot 2 - 4 \\cdot 2 - 8|}{\\sqrt{3^2 + (-4)^2}} = \\frac{10}{5} = 2$.',
          },
          {
            topic: 'Bài 20: Tìm tham số m để hai đường thẳng vuông góc (Tương tự Bài 7.10)',
            prompt:
              'Hai đường thẳng $\\Delta_1: (m - 1)x + 2y - 3 = 0$ và $\\Delta_2: 3x - 6y + 1 = 0$ vuông góc với nhau khi và chỉ khi:',
            correct: '$m = 5$.',
            wrongs: ['$m = -3$.', '$m = 3$.', '$m = 0$.'],
            explanation:
              'Hai đường thẳng vuông góc khi $\\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\Leftrightarrow 3(m - 1) + 2(-6) = 0 \\Leftrightarrow 3m - 15 = 0 \\Leftrightarrow m = 5$.',
          },
          {
            topic: 'Bài 20: Ứng dụng khoảng cách tính đường đi ngắn nhất ra đường thẳng (Tương tự Vận dụng trang 41)',
            prompt:
              'Trên bản đồ quy hoạch trong mặt phẳng toạ độ $Oxy$ (đơn vị: trăm mét), một trạm y tế ở vị trí $A(4; 5)$ cần mở một lối đi thẳng ngắn nhất nối ra tuyến đường chính $\\Delta: 3x + 4y - 12 = 0$. Chiều dài lối đi ngắn nhất đó bằng:',
            correct: '$400\\text{ m}$.',
            wrongs: ['$300\\text{ m}$.', '$500\\text{ m}$.', '$200\\text{ m}$.'],
            explanation:
              'Chiều dài ngắn nhất là khoảng cách từ $A(4; 5)$ đến $\\Delta$: $d(A, \\Delta) = \\frac{|3 \\cdot 4 + 4 \\cdot 5 - 12|}{\\sqrt{3^2 + 4^2}} = \\frac{20}{5} = 4$ (trăm mét) $= 400\\text{ m}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 20: Xét vị trí tương đối và góc giữa các đường thẳng (Tương tự Bài 7.7 & 7.8)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho ba đường thẳng $d_1: 2x - y + 3 = 0$, $d_2: x + 2y - 4 = 0$ và $d_3: 3x + y - 2 = 0$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Hai đường thẳng $d_1$ và $d_2$ vuông góc với nhau.',
                isCorrect: true,
                explanation:
                  'VTPT của $d_1$ là $\\vec{n}_1 = (2; -1)$, của $d_2$ là $\\vec{n}_2 = (1; 2)$. Vì $\\vec{n}_1 \\cdot \\vec{n}_2 = 2 \\cdot 1 + (-1) \\cdot 2 = 0$ nên $d_1 \\perp d_2$.',
              },
              {
                statement: 'Giao điểm của hai đường thẳng $d_1$ và $d_2$ là điểm $I(-\\frac{2}{5}; \\frac{11}{5})$.',
                isCorrect: true,
                explanation:
                  'Giải hệ $\\begin{cases} 2x - y = -3 \\\\ x + 2y = 4 \\end{cases} \\Leftrightarrow \\begin{cases} x = -\\frac{2}{5} \\\\ y = \\frac{11}{5} \\end{cases}$.',
              },
              {
                statement: 'Góc giữa hai đường thẳng $d_1$ và $d_3$ bằng $45^{\\circ}$.',
                isCorrect: true,
                explanation:
                  'Ta có $\\vec{n}_1 = (2; -1),\\ \\vec{n}_3 = (3; 1) \\Rightarrow \\cos(d_1, d_3) = \\frac{|2 \\cdot 3 + (-1) \\cdot 1|}{\\sqrt{5}\\sqrt{10}} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (d_1, d_3) = 45^{\\circ}$.',
              },
              {
                statement: 'Khoảng cách từ điểm $M(1; 0)$ đến đường thẳng $d_1$ bằng $5$.',
                isCorrect: false,
                explanation:
                  'Ta có $d(M, d_1) = \\frac{|2 \\cdot 1 - 0 + 3|}{\\sqrt{2^2 + (-1)^2}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$ (không phải $5$).',
              },
            ],
          },
          {
            topic: 'Bài 20: Tính đường cao và diện tích tam giác bằng công thức khoảng cách (Tương tự Bài 7.11)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có ba đỉnh $A(1; 4),\\ B(-2; -2)$ và $C(2; -5)$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Độ dài cạnh $BC$ của tam giác $ABC$ bằng $5$.',
                isCorrect: true,
                explanation:
                  'Ta có $\\overrightarrow{BC} = (4; -3) \\Rightarrow BC = \\sqrt{4^2 + (-3)^2} = 5$.',
              },
              {
                statement: 'Phương trình tổng quát của đường thẳng $BC$ là $3x + 4y + 14 = 0$.',
                isCorrect: true,
                explanation:
                  'Đường thẳng $BC$ đi qua $B(-2; -2)$ và nhận $\\vec{n} = (3; 4)$ làm VTPT (do $\\overrightarrow{BC} = (4; -3)$): $3(x + 2) + 4(y + 2) = 0 \\Leftrightarrow 3x + 4y + 14 = 0$.',
              },
              {
                statement: 'Độ dài đường cao $AH$ kẻ từ $A$ đến cạnh $BC$ bằng $\\frac{33}{5}$.',
                isCorrect: true,
                explanation:
                  'Ta có $AH = d(A, BC) = \\frac{|3 \\cdot 1 + 4 \\cdot 4 + 14|}{\\sqrt{3^2 + 4^2}} = \\frac{33}{5}$.',
              },
              {
                statement: 'Diện tích của tam giác $ABC$ bằng $33$.',
                isCorrect: false,
                explanation:
                  'Diện tích tam giác $ABC$ là $S = \\frac{1}{2} BC \\cdot AH = \\frac{1}{2} \\cdot 5 \\cdot \\frac{33}{5} = \\frac{33}{2} = 16,5$ (không phải $33$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 20: Tính khoảng cách từ điểm đến đường thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, tính khoảng cách từ điểm $M(4; -3)$ đến đường thẳng $\\Delta: 4x - 3y + 5 = 0$.',
            answers: ['6'],
            explanation:
              'Ta có $d(M, \\Delta) = \\frac{|4 \\cdot 4 - 3(-3) + 5|}{\\sqrt{4^2 + (-3)^2}} = \\frac{|16 + 9 + 5|}{5} = \\frac{30}{5} = 6$.',
          },
          {
            topic: 'Bài 20: Tính số đo góc giữa hai đường thẳng (đơn vị: độ)',
            prompt:
              'Tính góc (đơn vị: độ) giữa hai đường thẳng $\\Delta_1: x + 2y - 2 = 0$ và $\\Delta_2: 3x + y + 5 = 0$.',
            answers: ['45'],
            explanation:
              'Ta có $\\vec{n}_1 = (1; 2)$ và $\\vec{n}_2 = (3; 1) \\Rightarrow \\cos(\\Delta_1, \\Delta_2) = \\frac{|1 \\cdot 3 + 2 \\cdot 1|}{\\sqrt{5}\\sqrt{10}} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (\\Delta_1, \\Delta_2) = 45^{\\circ}$.',
          },
          {
            topic: 'Bài 20: Tìm tham số m để hai đường thẳng song song',
            prompt:
              'Tìm giá trị của tham số $m$ để hai đường thẳng $d_1: 2x + my - 3 = 0$ và $d_2: 4x + 6y + 1 = 0$ song song với nhau.',
            answers: ['3'],
            explanation:
              'Để $d_1 \\parallel d_2$ thì $\\frac{2}{4} = \\frac{m}{6} \\neq \\frac{-3}{1} \\Leftrightarrow m = 3$.',
          },
          {
            topic: 'Bài 20: Tính diện tích tam giác bằng khoảng cách (Tương tự Bài 7.11)',
            prompt:
              'Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có $A(3; 5)$ và hai đỉnh $B(0; 0),\\ C(4; 3)$. Tính diện tích của tam giác $ABC$.',
            answers: ['5,5', '5.5'],
            explanation:
              'Đường thẳng $BC$ có phương trình $3x - 4y = 0$ và $BC = \\sqrt{4^2 + 3^2} = 5$. Đường cao $AH = d(A, BC) = \\frac{|3 \\cdot 3 - 4 \\cdot 5|}{5} = \\frac{11}{5}$. Diện tích $S = \\frac{1}{2} \\cdot 5 \\cdot \\frac{11}{5} = 5,5$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 20: Xét vị trí tương đối và tìm giao điểm của hai đường thẳng (Tương tự Ví dụ 1)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, xét vị trí tương đối và tìm giao điểm (nếu có) của hai đường thẳng $d_1: 2x + y - 7 = 0$ và $d_2: x - 2y + 4 = 0$.',
            conclusionTarget: 'Xác định vị trí tương đối và giải hệ phương trình tìm giao điểm.',
            steps: [
              'Đường thẳng $d_1$ có vectơ pháp tuyến $\\vec{n}_1 = (2; 1)$ và đường thẳng $d_2$ có vectơ pháp tuyến $\\vec{n}_2 = (1; -2)$.',
              'Vì $\\vec{n}_1 \\cdot \\vec{n}_2 = 2 \\cdot 1 + 1 \\cdot (-2) = 0$ nên hai đường thẳng $d_1$ và $d_2$ cắt nhau và vuông góc với nhau.',
              'Toạ độ giao điểm $M$ là nghiệm của hệ phương trình $\\begin{cases} 2x + y = 7 \\\\ x - 2y = -4 \\end{cases}$.',
              'Giải hệ phương trình trên, ta được $x = 2,\\ y = 3$. Vậy hai đường thẳng vuông góc tại giao điểm $M(2; 3)$.',
            ],
            analysis:
              'Kiểm tra tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2$ trước giúp nhận biết ngay trường hợp hai đường thẳng vuông góc.',
          },
          {
            topic: 'Bài 20: Tính góc giữa hai đường thẳng (Tương tự Ví dụ 3 & Bài 7.8)',
            problemStatement:
              'Tính số đo góc giữa hai đường thẳng $\\Delta_1: 2x + y - 4 = 0$ và $\\Delta_2: 3x - y + 6 = 0$.',
            conclusionTarget: 'Tính $\\cos(\\Delta_1, \\Delta_2)$ và suy ra góc $(\\Delta_1, \\Delta_2)$.',
            steps: [
              'Xác định vectơ pháp tuyến của hai đường thẳng: $\\vec{n}_1 = (2; 1)$ và $\\vec{n}_2 = (3; -1)$.',
              'Áp dụng công thức côsin góc giữa hai đường thẳng: $\\cos(\\Delta_1, \\Delta_2) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$.',
              'Thay số vào công thức: $\\cos(\\Delta_1, \\Delta_2) = \\frac{|2 \\cdot 3 + 1 \\cdot (-1)|}{\\sqrt{2^2 + 1^2} \\cdot \\sqrt{3^2 + (-1)^2}} = \\frac{5}{\\sqrt{5} \\cdot \\sqrt{10}} = \\frac{\\sqrt{2}}{2}$.',
              'Từ $\\cos(\\Delta_1, \\Delta_2) = \\frac{\\sqrt{2}}{2}$ và $0^{\\circ} \\le (\\Delta_1, \\Delta_2) \\le 90^{\\circ}$, suy ra $(\\Delta_1, \\Delta_2) = 45^{\\circ}$.',
            ],
            analysis:
              'Lưu ý góc giữa hai đường thẳng luôn nằm trong đoạn $[0^{\\circ}; 90^{\\circ}]$ nên tử số trong công thức $\\cos(\\Delta_1, \\Delta_2)$ luôn có dấu giá trị tuyệt đối.',
          },
          {
            topic: 'Bài 20: Tính khoảng cách từ điểm đến đường thẳng và diện tích tam giác (Tương tự Bài 7.11)',
            problemStatement:
              'Trong mặt phẳng $Oxy$, cho tam giác $ABC$ với $A(2; 5),\\ B(-1; 1)$ và $C(3; -2)$. Tính độ dài đường cao $AH$ và diện tích tam giác $ABC$.',
            conclusionTarget: 'Lập phương trình cạnh $BC$, tính $AH = d(A, BC)$ và diện tích $S_{\\triangle ABC}$.',
            steps: [
              'Ta có $\\overrightarrow{BC} = (4; -3)$, suy ra độ dài cạnh $BC = \\sqrt{4^2 + (-3)^2} = 5$ và VTPT của $BC$ là $\\vec{n} = (3; 4)$.',
              'Phương trình tổng quát của đường thẳng $BC$ đi qua $B(-1; 1)$ là $3(x + 1) + 4(y - 1) = 0 \\Leftrightarrow 3x + 4y - 1 = 0$.',
              'Độ dài đường cao $AH$ là $d(A, BC) = \\frac{|3 \\cdot 2 + 4 \\cdot 5 - 1|}{\\sqrt{3^2 + 4^2}} = \\frac{25}{5} = 5$.',
              'Diện tích tam giác $ABC$ là $S = \\frac{1}{2} \\cdot BC \\cdot AH = \\frac{1}{2} \\cdot 5 \\cdot 5 = \\frac{25}{2} = 12,5$.',
            ],
            analysis:
              'Sử dụng khoảng cách từ đỉnh $A$ đến đường thẳng $BC$ là phương pháp nhanh và tổng quát nhất để tính diện tích tam giác trong mặt phẳng toạ độ.',
          },
          {
            topic: 'Bài 20: Giải bài toán thực tiễn tìm khoảng cách ngắn nhất từ tàu đến đảo (Tương tự Bài 7.12)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$ (đơn vị: hải lý), một hòn đảo nhỏ nằm tại vị trí $I(7; 1)$. Một tàu tuần tra xuất phát từ $A(-1; 5)$ đi thẳng theo hướng vectơ $\\vec{u} = (4; 3)$. Tính khoảng cách ngắn nhất từ con tàu đến hòn đảo trên hành trình.',
            conclusionTarget: 'Lập phương trình đường đi của tàu và tính khoảng cách từ $I$ đến đường thẳng đó.',
            steps: [
              'Quỹ đạo của tàu là đường thẳng $\\Delta$ đi qua $A(-1; 5)$ có VTCP $\\vec{u} = (4; 3)$, suy ra VTPT $\\vec{n} = (3; -4)$.',
              'Phương trình tổng quát của đường thẳng $\\Delta$ là $3(x + 1) - 4(y - 5) = 0 \\Leftrightarrow 3x - 4y + 23 = 0$.',
              'Khoảng cách ngắn nhất từ tàu đến đảo $I(7; 1)$ là độ dài đường vuông góc $d(I, \\Delta)$.',
              'Ta có $d(I, \\Delta) = \\frac{|3 \\cdot 7 - 4 \\cdot 1 + 23|}{\\sqrt{3^2 + (-4)^2}} = \\frac{40}{5} = 8$ (hải lý).',
            ],
            analysis:
              'Khoảng cách ngắn nhất từ một điểm cố định đến một vật chuyển động trên đường thẳng chính là khoảng cách vuông góc từ điểm đó đến đường thẳng quỹ đạo.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-20-2',
        lessonId: 'bai-20',
        title: 'Đề ôn Bài 20 - Đề số 02',
        subtitle: 'Nâng cao bài toán khoảng cách, góc và tham số đường thẳng (SGK Toán 10 Tập 2, trang 36–42)',
        description:
          'Đề ôn tập số 02 của Bài 20 (Vị trí tương đối, góc và khoảng cách): Biện luận vị trí tương đối theo tham số, lập phương trình đường thẳng cách điểm một khoảng cho trước và ứng dụng.',
        mcqs: [
          {
            topic: 'Bài 20: Nhận biết hai đường thẳng trùng nhau (Tương tự Ví dụ 1c)',
            prompt:
              'Trong mặt phẳng $Oxy$, đường thẳng $\\Delta: 2x - y + 3 = 0$ trùng với đường thẳng nào sau đây?',
            correct: '$d: -4x + 2y - 6 = 0$.',
            wrongs: [
              '$d: 4x - 2y + 3 = 0$.',
              '$d: 2x + y + 3 = 0$.',
              '$d: -4x + 2y + 6 = 0$.',
            ],
            explanation:
              'Nhân cả hai vế của phương trình $2x - y + 3 = 0$ với $-2$, ta được $-4x + 2y - 6 = 0$, nên hai phương trình biểu diễn cùng một đường thẳng.',
          },
          {
            topic: 'Bài 20: Xét vị trí tương đối của đường thẳng tham số và tổng quát (Tương tự Luyện tập 1)',
            prompt:
              'Cho hai đường thẳng $d_1: \\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\end{cases}$ và $d_2: x + 2y - 7 = 0$. Khẳng định nào sau đây là ĐÚNG?',
            correct: '$d_1$ và $d_2$ trùng nhau.',
            wrongs: [
              '$d_1$ và $d_2$ song song với nhau.',
              '$d_1$ và $d_2$ vuông góc với nhau.',
              '$d_1$ và $d_2$ cắt nhau tại duy nhất một điểm.',
            ],
            explanation:
              'Thay $x = 1 + 2t,\\ y = 3 - t$ vào phương trình $d_2$: $(1 + 2t) + 2(3 - t) - 7 = 0 \\Leftrightarrow 0t = 0$ (luôn đúng với mọi $t \\in \\mathbb{R}$). Vậy $d_1 \\equiv d_2$.',
          },
          {
            topic: 'Bài 20: Tìm góc giữa đường thẳng và trục hoành Ox',
            prompt:
              'Trong mặt phẳng $Oxy$, góc giữa đường thẳng $\\Delta: \\sqrt{3}x - y + 2 = 0$ và trục hoành $Ox$ (có phương trình $y = 0$) bằng:',
            correct: '$60^{\\circ}$.',
            wrongs: ['$30^{\\circ}$.', '$45^{\\circ}$.', '$90^{\\circ}$.'],
            explanation:
              'VTPT của $\\Delta$ là $\\vec{n}_1 = (\\sqrt{3}; -1)$ và VTPT của $Ox: y = 0$ là $\\vec{n}_2 = (0; 1)$. Suy ra $\\cos(\\Delta, Ox) = \\frac{|\\sqrt{3} \\cdot 0 + (-1) \\cdot 1|}{\\sqrt{3 + 1} \\cdot 1} = \\frac{1}{2} \\Rightarrow (\\Delta, Ox) = 60^{\\circ}$.',
          },
          {
            topic: 'Bài 20: Tính khoảng cách từ điểm đến đường thẳng song song với trục toạ độ',
            prompt:
              'Khoảng cách từ điểm $M(-3; 5)$ đến đường thẳng $d: x - 4 = 0$ bằng:',
            correct: '$7$.',
            wrongs: ['$1$.', '$9$.', '$5$.'],
            explanation:
              'Ta có $d(M, d) = \\frac{|-3 - 4|}{\\sqrt{1^2 + 0^2}} = |-7| = 7$.',
          },
          {
            topic: 'Bài 20: Tìm điểm trên trục Ox cách đường thẳng một khoảng cho trước',
            prompt:
              'Điểm $M(x_0; 0)$ thuộc trục $Ox$ có hoành độ dương và cách đường thẳng $\\Delta: 3x + 4y - 2 = 0$ một khoảng bằng $2$. Giá trị của $x_0$ là:',
            correct: '$x_0 = 4$.',
            wrongs: ['$x_0 = 2$.', '$x_0 = 3$.', '$x_0 = 6$.'],
            explanation:
              'Ta có $d(M, \\Delta) = \\frac{|3x_0 - 2|}{5} = 2 \\Leftrightarrow |3x_0 - 2| = 10 \\Leftrightarrow 3x_0 = 12$ (vì $x_0 > 0$) $\\Leftrightarrow x_0 = 4$.',
          },
          {
            topic: 'Bài 20: Tìm hình chiếu vuông góc của một điểm lên đường thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, hình chiếu vuông góc $H$ của gốc toạ độ $O(0; 0)$ trên đường thẳng $d: x + y - 4 = 0$ có toạ độ là:',
            correct: '$H(2; 2)$.',
            wrongs: ['$H(1; 3)$.', '$H(4; 0)$.', '$H(-2; -2)$.'],
            explanation:
              'Đường thẳng qua $O$ vuông góc với $d$ có phương trình $x - y = 0$. Giao điểm của $x - y = 0$ và $x + y - 4 = 0$ là $H(2; 2)$.',
          },
          {
            topic: 'Bài 20: Góc giữa hai đường thẳng có hệ số góc k1, k2',
            prompt:
              'Hai đường thẳng $d_1: y = 2x + 1$ và $d_2: y = -\\frac{1}{2}x + 5$ tạo với nhau một góc bằng:',
            correct: '$90^{\\circ}$.',
            wrongs: ['$45^{\\circ}$.', '$60^{\\circ}$.', '$30^{\\circ}$.'],
            explanation:
              'Tích hai hệ số góc $k_1 \\cdot k_2 = 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$ nên hai đường thẳng vuông góc với nhau, góc giữa chúng bằng $90^{\\circ}$.',
          },
          {
            topic: 'Bài 20: Tìm tham số m để hai đường thẳng cắt nhau (Tương tự Bài 7.10)',
            prompt:
              'Hai đường thẳng $\\Delta_1: mx + 2y - 1 = 0$ và $\\Delta_2: 2x + my + 3 = 0$ cắt nhau khi và chỉ khi:',
            correct: '$m \\neq \\pm 2$.',
            wrongs: ['$m = \\pm 2$.', '$m \\neq 2$.', '$m \\in \\mathbb{R}$.'],
            explanation:
              'Hai đường thẳng cắt nhau khi hai vectơ pháp tuyến không cùng phương: $m \\cdot m - 2 \\cdot 2 \\neq 0 \\Leftrightarrow m^2 \\neq 4 \\Leftrightarrow m \\neq \\pm 2$.',
          },
          {
            topic: 'Bài 20: Bán kính đường tròn tiếp xúc với đường thẳng',
            prompt:
              'Một đường tròn có tâm $I(1; -2)$ và tiếp xúc với đường thẳng $\\Delta: 4x - 3y + 5 = 0$. Bán kính $R$ của đường tròn đó bằng:',
            correct: '$R = 3$.',
            wrongs: ['$R = 2$.', '$R = 5$.', '$R = 1$.'],
            explanation:
              'Vì đường tròn tiếp xúc với $\\Delta$ nên $R = d(I, \\Delta) = \\frac{|4 \\cdot 1 - 3(-2) + 5|}{\\sqrt{4^2 + (-3)^2}} = \\frac{15}{5} = 3$.',
          },
          {
            topic: 'Bài 20: Tính diện tích hình vuông biết hai cạnh nằm trên hai đường thẳng song song',
            prompt:
              'Hai cạnh đối diện của một hình vuông nằm trên hai đường thẳng song song $d_1: 3x + 4y - 1 = 0$ và $d_2: 3x + 4y + 14 = 0$. Diện tích của hình vuông đó bằng:',
            correct: '$9$.',
            wrongs: ['$3$.', '$15$.', '$25$.'],
            explanation:
              'Độ dài cạnh hình vuông bằng khoảng cách giữa $d_1$ và $d_2$: $a = \\frac{|-1 - 14|}{\\sqrt{3^2 + 4^2}} = \\frac{15}{5} = 3$. Diện tích hình vuông là $S = a^2 = 9$.',
          },
          {
            topic: 'Bài 20: Tìm đường thẳng cách đều hai điểm cho trước',
            prompt:
              'Đường thẳng $\\Delta: 2x - y + c = 0$ đi qua trung điểm của đoạn thẳng nối $A(1; 4)$ và $B(3; 2)$ khi:',
            correct: '$c = -1$.',
            wrongs: ['$c = 1$.', '$c = -5$.', '$c = 3$.'],
            explanation:
              'Trung điểm của $AB$ là $I(2; 3)$. Thay $I(2; 3)$ vào $\\Delta$: $2 \\cdot 2 - 3 + c = 0 \\Leftrightarrow c = -1$.',
          },
          {
            topic: 'Bài 20: Góc giữa hai đường phân giác của các góc tạo bởi hai đường thẳng cắt nhau',
            prompt:
              'Cho hai đường thẳng cắt nhau $\\Delta_1$ và $\\Delta_2$. Góc giữa hai đường thẳng chứa các tia phân giác của các góc tạo bởi $\\Delta_1$ và $\\Delta_2$ luôn bằng:',
            correct: '$90^{\\circ}$.',
            wrongs: ['$45^{\\circ}$.', '$60^{\\circ}$.', 'Phụ thuộc vào góc giữa $\\Delta_1$ và $\\Delta_2$.'],
            explanation:
              'Hai đường phân giác của hai góc kề bù luôn vuông góc với nhau nên góc giữa chúng luôn bằng $90^{\\circ}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 20: Biện luận vị trí tương đối và góc theo tham số m (Tương tự Bài 7.10)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho đường thẳng $\\Delta_1: x - 2y + 4 = 0$ và họ đường thẳng $\\Delta_2: mx + (m - 1)y - 2 = 0$ (với $m$ là tham số thực). Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Khi $m = 2$, phương trình của $\\Delta_2$ là $2x + y - 2 = 0$ và $\\Delta_2$ vuông góc với $\\Delta_1$.',
                isCorrect: true,
                explanation:
                  'Với $m = 2$, $\\vec{n}_2 = (2; 1)$ và $\\vec{n}_1 = (1; -2)$. Tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2 = 1 \\cdot 2 + (-2) \\cdot 1 = 0$ nên $\\Delta_1 \\perp \\Delta_2$.',
              },
              {
                statement: 'Hai đường thẳng $\\Delta_1$ và $\\Delta_2$ song song với nhau khi và chỉ khi $m = \\frac{1}{3}$.',
                isCorrect: true,
                explanation:
                  'Hai đường thẳng cùng phương khi $1(m - 1) - (-2)m = 0 \\Leftrightarrow 3m - 1 = 0 \\Leftrightarrow m = \\frac{1}{3}$. Khi đó $\\Delta_2: x - 2y - 6 = 0 \\parallel \\Delta_1$.',
              },
              {
                statement: 'Với $m = 1$, góc giữa hai đường thẳng $\\Delta_1$ và $\\Delta_2$ có $\\cos(\\Delta_1, \\Delta_2) = \\frac{1}{\\sqrt{5}}$.',
                isCorrect: true,
                explanation:
                  'Khi $m = 1$, $\\Delta_2: x - 2 = 0$ có $\\vec{n}_2 = (1; 0)$. Suy ra $\\cos(\\Delta_1, \\Delta_2) = \\frac{|1 \\cdot 1 + (-2) \\cdot 0|}{\\sqrt{5} \\cdot 1} = \\frac{1}{\\sqrt{5}}$.',
              },
              {
                statement: 'Tồn tại giá trị của $m$ để hai đường thẳng $\\Delta_1$ và $\\Delta_2$ trùng nhau.',
                isCorrect: false,
                explanation:
                  'Khi hai VTPT cùng phương ($m = \\frac{1}{3}$) thì hai đường thẳng song song chứ không trùng nhau (do $\\frac{1}{1/3} \\neq \\frac{4}{-2}$).',
              },
            ],
          },
          {
            topic: 'Bài 20: Bài toán thực tế trạm phát sóng và con đường thẳng (Tương tự Bài 7.12)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$ (đơn vị trên mỗi trục là kilômét), một trạm phát sóng Wi-Fi công suất lớn đặt tại vị trí $I(3; 4)$ có bán kính phủ sóng tối đa là $R = 5\\text{ km}$. Một ô tô chạy trên con đường thẳng $d$ có phương trình $3x + 4y - 10 = 0$ với vận tốc không đổi $60\\text{ km/h}$.',
            tikzCode: tikzPointToLineDistance('I(3;4)', 'd:3x+4y-10=0', '3'),
            statements: [
              {
                statement: 'Khoảng cách ngắn nhất từ trạm phát sóng $I(3; 4)$ đến con đường $d$ bằng $3\\text{ km}$.',
                isCorrect: true,
                explanation:
                  'Ta có $d(I, d) = \\frac{|3 \\cdot 3 + 4 \\cdot 4 - 10|}{\\sqrt{3^2 + 4^2}} = \\frac{15}{5} = 3\\text{ (km)}$.',
              },
              {
                statement: 'Vì khoảng cách từ $I$ đến $d$ nhỏ hơn bán kính phủ sóng $R = 5\\text{ km}$ nên ô tô sẽ đi qua vùng có sóng Wi-Fi trên một đoạn đường thẳng.',
                isCorrect: true,
                explanation: 'Do $d(I, d) = 3 < R = 5$, đường thẳng $d$ cắt hình tròn phủ sóng theo một dây cung $AB$.',
              },
              {
                statement: 'Độ dài đoạn đường thẳng mà ô tô bắt được sóng Wi-Fi là $2\\sqrt{R^2 - d^2} = 8\\text{ km}$.',
                isCorrect: true,
                explanation:
                  'Theo định lí Pythagore, nửa dây cung bằng $\\sqrt{5^2 - 3^2} = 4\\text{ km}$, nên cả đoạn đường bắt được sóng dài $2 \\cdot 4 = 8\\text{ km}$.',
              },
              {
                statement: 'Thời gian ô tô đi trong vùng phủ sóng Wi-Fi là $12$ phút.',
                isCorrect: false,
                explanation:
                  'Thời gian đi hết quãng đường $8\\text{ km}$ với vận tốc $60\\text{ km/h}$ là $t = \\frac{8}{60}\\text{ giờ} = 8$ phút (không phải $12$ phút).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 20: Tính khoảng cách từ điểm đến đường thẳng tham số (Tương tự Bài 7.9)',
            prompt:
              'Trong mặt phẳng $Oxy$, tính khoảng cách từ điểm $A(1; 2)$ đến đường thẳng $\\Delta: \\begin{cases} x = 2 + 4t \\\\ y = -1 + 3t \\end{cases}$.',
            answers: ['3'],
            explanation:
              'Đường thẳng $\\Delta$ có phương trình tổng quát $3x - 4y - 10 = 0$. Khoảng cách từ $A(1; 2)$ đến $\\Delta$ là $d(A, \\Delta) = \\frac{|3(1) - 4(2) - 10|}{\\sqrt{3^2 + (-4)^2}} = \\frac{15}{5} = 3$.',
          },
          {
            topic: 'Bài 20: Tính góc giữa hai đường thẳng (đơn vị: độ)',
            prompt:
              'Trong mặt phẳng $Oxy$, tính số đo góc (đơn vị: độ) giữa hai đường thẳng $\\Delta_1: x + 3y - 2 = 0$ và $\\Delta_2: 2x + y + 5 = 0$.',
            answers: ['45'],
            explanation:
              'Ta có $\\vec{n}_1 = (1; 3),\\ \\vec{n}_2 = (2; 1) \\Rightarrow \\cos(\\Delta_1, \\Delta_2) = \\frac{|1 \\cdot 2 + 3 \\cdot 1|}{\\sqrt{10}\\sqrt{5}} = \\frac{5}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (\\Delta_1, \\Delta_2) = 45^{\\circ}$.',
          },
          {
            topic: 'Bài 20: Tìm tham số m để hai đường thẳng vuông góc',
            prompt:
              'Tìm giá trị của tham số $m$ để hai đường thẳng $d_1: (2m - 1)x + 3y - 5 = 0$ và $d_2: 4x - 2y + 1 = 0$ vuông góc với nhau.',
            answers: ['1,25', '1.25'],
            explanation:
              'Điều kiện vuông góc: $4(2m - 1) + 3(-2) = 0 \\Leftrightarrow 8m - 10 = 0 \\Leftrightarrow m = 1,25$.',
          },
          {
            topic: 'Bài 20: Khoảng cách ngắn nhất từ đảo đến lộ trình tàu (Tương tự Bài 7.12)',
            prompt:
              'Trong mặt phẳng $Oxy$ (đơn vị: km), một trạm hải đăng đặt tại $I(5; 2)$ và một con tàu chạy dọc theo đường thẳng $\\Delta: 6x - 8y + 18 = 0$. Tính khoảng cách ngắn nhất từ tàu đến trạm hải đăng (đơn vị: km).',
            answers: ['3,2', '3.2'],
            explanation:
              'Khoảng cách ngắn nhất là $d(I, \\Delta) = \\frac{|6 \\cdot 5 - 8 \\cdot 2 + 18|}{\\sqrt{6^2 + (-8)^2}} = \\frac{32}{10} = 3,2\\text{ (km)}$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 20: Tính khoảng cách từ điểm đến đường thẳng cho ở dạng tham số (Tương tự Bài 7.9c)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, tính khoảng cách từ điểm $M(3; -2)$ đến đường thẳng $\\Delta: \\begin{cases} x = 1 + 3t \\\\ y = 2 + 4t \\end{cases}$.',
            conclusionTarget: 'Chuyển $\\Delta$ về phương trình tổng quát rồi áp dụng công thức khoảng cách.',
            steps: [
              'Đường thẳng $\\Delta$ đi qua điểm $A(1; 2)$ và có vectơ chỉ phương $\\vec{u} = (3; 4)$, suy ra vectơ pháp tuyến $\\vec{n} = (4; -3)$.',
              'Phương trình tổng quát của đường thẳng $\\Delta$ là $4(x - 1) - 3(y - 2) = 0 \\Leftrightarrow 4x - 3y + 2 = 0$.',
              'Áp dụng công thức khoảng cách từ $M(3; -2)$ đến $\\Delta$: $d(M, \\Delta) = \\frac{|4 \\cdot 3 - 3(-2) + 2|}{\\sqrt{4^2 + (-3)^2}}$.',
              'Thu gọn biểu thức, ta được $d(M, \\Delta) = \\frac{20}{5} = 4$.',
            ],
            analysis:
              'Công thức khoảng cách trực tiếp áp dụng cho phương trình tổng quát $ax + by + c = 0$, nên bước đầu tiên là khử tham số $t$.',
          },
          {
            topic: 'Bài 20: Lập phương trình đường thẳng song song và cách một điểm khoảng cho trước',
            problemStatement:
              'Lập phương trình tổng quát của đường thẳng $d$ song song với đường thẳng $\\Delta: 3x - 4y + 1 = 0$ và cách điểm $A(1; 2)$ một khoảng bằng $2$.',
            conclusionTarget: 'Gọi dạng phương trình của $d$ và giải phương trình khoảng cách tìm hằng số $c$.',
            steps: [
              'Vì $d \\parallel \\Delta: 3x - 4y + 1 = 0$ nên phương trình của $d$ có dạng $3x - 4y + c = 0$ (với $c \\neq 1$).',
              'Theo giả thiết $d(A, d) = 2$, ta có $\\frac{|3 \\cdot 1 - 4 \\cdot 2 + c|}{\\sqrt{3^2 + (-4)^2}} = 2 \\Leftrightarrow \\frac{|c - 5|}{5} = 2$.',
              'Giải phương trình giá trị tuyệt đối: $|c - 5| = 10 \\Leftrightarrow c = 15$ hoặc $c = -5$ (cả hai đều khác $1$).',
              'Vậy có hai đường thẳng thoả mãn là $3x - 4y + 15 = 0$ và $3x - 4y - 5 = 0$.',
            ],
            analysis:
              'Khai thác tính chất hai đường thẳng song song có cùng cặp hệ số $(a; b)$ giúp giảm số ẩn cần tìm xuống chỉ còn $1$ ẩn $c$.',
          },
          {
            topic: 'Bài 20: Tìm toạ độ hình chiếu vuông góc của một điểm lên đường thẳng',
            problemStatement:
              'Trong mặt phẳng $Oxy$, tìm toạ độ hình chiếu vuông góc $H$ của điểm $A(4; 3)$ trên đường thẳng $\\Delta: 2x - y + 1 = 0$.',
            conclusionTarget: 'Lập phương trình đường thẳng qua $A$ vuông góc với $\\Delta$ và tìm giao điểm $H$.',
            steps: [
              'Gọi $d$ là đường thẳng đi qua $A(4; 3)$ và vuông góc với $\\Delta: 2x - y + 1 = 0$.',
              'Vì $d \\perp \\Delta$ nên $d$ nhận $\\vec{n}_d = (1; 2)$ làm vectơ pháp tuyến, phương trình của $d$ là $1(x - 4) + 2(y - 3) = 0 \\Leftrightarrow x + 2y - 10 = 0$.',
              'Hình chiếu vuông góc $H$ là giao điểm của $d$ và $\\Delta$, nên toạ độ $H$ thoả mãn hệ $\\begin{cases} 2x - y = -1 \\\\ x + 2y = 10 \\end{cases}$.',
              'Giải hệ phương trình trên, ta tìm được $x = \\frac{8}{5},\\ y = \\frac{21}{5}$. Vậy $H\\left(\\frac{8}{5}; \\frac{21}{5}\\right)$.',
            ],
            analysis:
              'Hình chiếu vuông góc $H$ của $A$ lên $\\Delta$ chính là giao điểm của $\\Delta$ với đường thẳng qua $A$ và vuông góc với $\\Delta$.',
          },
          {
            topic: 'Bài 20: Lập phương trình đường thẳng đi qua một điểm và tạo với đường thẳng cho trước góc 45 độ',
            problemStatement:
              'Viết phương trình đường thẳng $d$ đi qua gốc toạ độ $O(0; 0)$ và tạo với đường thẳng $\\Delta: x + 2y - 3 = 0$ một góc $45^{\\circ}$.',
            conclusionTarget: 'Gọi VTPT $\\vec{n} = (a; b)$ của $d$ và giải phương trình $\\cos(d, \\Delta) = \\frac{\\sqrt{2}}{2}$.',
            steps: [
              'Gọi vectơ pháp tuyến của đường thẳng $d$ là $\\vec{n} = (a; b)$ với $a^2 + b^2 > 0$. Vì $d$ đi qua $O(0; 0)$ nên $d: ax + by = 0$.',
              'Đường thẳng $\\Delta$ có VTPT $\\vec{n}_\\Delta = (1; 2)$. Vì $(d, \\Delta) = 45^{\\circ}$ nên $\\frac{|a + 2b|}{\\sqrt{a^2 + b^2} \\cdot \\sqrt{5}} = \\frac{\\sqrt{2}}{2}$.',
              'Bình phương và thu gọn: $2(a + 2b)^2 = 5(a^2 + b^2) \\Leftrightarrow 3a^2 - 8ab - 3b^2 = 0 \\Leftrightarrow (a - 3b)(3a + b) = 0$.',
              'Chọn $(a; b) = (3; 1)$ hoặc $(a; b) = (1; -3)$, ta được hai đường thẳng là $3x + y = 0$ và $x - 3y = 0$.',
            ],
            analysis:
              'Phương trình đẳng cấp bậc hai $3a^2 - 8ab - 3b^2 = 0$ cho phép chọn tỉ lệ $(a; b)$ để tìm được cả hai đường thẳng thoả mãn.',
          },
        ],
      }),
    ],
  },
];
