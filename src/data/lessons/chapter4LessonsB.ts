import { LessonCatalogItem } from '../../types/exam';

export const CHAPTER_4_LESSONS_B: LessonCatalogItem[] = [
  {
    id: 'bai-10',
    lessonNumber: 10,
    name: 'Bài 10',
    topicTitle: 'Vectơ trong mặt phẳng tọa độ',
    chapter: 'Chương IV – Vectơ',
    keySummary:
      'Tọa độ của vectơ và điểm trên mặt phẳng Oxy, biểu thức tọa độ của các phép toán vectơ, tọa độ trung điểm - trọng tâm và bài toán trồng cột điện thẳng hàng (bám sát SBT Toán 10 KNTT trang 55–60).',
    practiceExams: [
      {
        id: 'de-on-bai-10-1',
        lessonId: 'bai-10',
        title: 'Đề ôn Bài 10 - Đề số 01',
        subtitle: 'Tọa độ của vectơ, trung điểm, trọng tâm & đỉnh hình bình hành (SBT KNTT trang 55–58)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 4.21, 4.22, 4.23, 4.24 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b10_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 10: Định nghĩa tọa độ của vectơ qua hai vectơ đơn vị',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$ với hai vectơ đơn vị $\\overrightarrow{i}, \\overrightarrow{j}$ trên hai trục $Ox, Oy$, cho vectơ $\\overrightarrow{u} = 3\\overrightarrow{i} - 4\\overrightarrow{j}$. Tọa độ của vectơ $\\overrightarrow{u}$ là:',
            options: [
              { key: 'A', content: '$\\overrightarrow{u} = (3; -4)$' },
              { key: 'B', content: '$\\overrightarrow{u} = (-4; 3)$' },
              { key: 'C', content: '$\\overrightarrow{u} = (3; 4)$' },
              { key: 'D', content: '$\\overrightarrow{u} = (-3; 4)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định nghĩa Bài 10 (SBT trang 55): $\\overrightarrow{u} = x\\overrightarrow{i} + y\\overrightarrow{j} \\Leftrightarrow \\overrightarrow{u} = (x; y)$, nên $\\overrightarrow{u} = 3\\overrightarrow{i} - 4\\overrightarrow{j} = (3; -4)$.',
            pedagogicalTip: 'Hệ số của $\\overrightarrow{i}$ là hoành độ $x$, hệ số của $\\overrightarrow{j}$ là tung độ $y$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 10: Tọa độ của vectơ AB khi biết tọa độ hai điểm A, B',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(2; -3)$ và $B(-1; 4)$. Tọa độ của vectơ $\\overrightarrow{AB}$ là:',
            options: [
              { key: 'A', content: '$\\overrightarrow{AB} = (-3; 7)$' },
              { key: 'B', content: '$\\overrightarrow{AB} = (3; -7)$' },
              { key: 'C', content: '$\\overrightarrow{AB} = (1; 1)$' },
              { key: 'D', content: '$\\overrightarrow{AB} = (-2; -12)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta lấy tọa độ điểm cuối $B$ trừ tọa độ điểm đầu $A$: $\\overrightarrow{AB} = (-1 - 2; 4 - (-3)) = (-3; 7)$.',
            pedagogicalTip: 'Ghi nhớ: Tọa độ $\\overrightarrow{AB}$ bằng "Cuối trừ Đầu" $(x_B - x_A; y_B - y_A)$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 10: Biểu thức tọa độ của phép toán vectơ (Ví dụ 1 SBT trang 56)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\overrightarrow{a} = (2; -1)$ và $\\overrightarrow{b} = (-3; 4)$. Tọa độ của vectơ $\\overrightarrow{u} = 2\\overrightarrow{a} - \\overrightarrow{b}$ là:',
            options: [
              { key: 'A', content: '$(7; -6)$' },
              { key: 'B', content: '$(1; 2)$' },
              { key: 'C', content: '$(-7; 6)$' },
              { key: 'D', content: '$(7; 2)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $2\\overrightarrow{a} = (4; -2)$, suy ra $2\\overrightarrow{a} - \\overrightarrow{b} = (4 - (-3); -2 - 4) = (7; -6)$.',
            pedagogicalTip: 'Tính từng thành phần hoành độ và tung độ riêng biệt.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 10: Tọa độ trung điểm của đoạn thẳng và trọng tâm tam giác',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 4), B(3; -2), C(5; 7)$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:',
            options: [
              { key: 'A', content: '$G(3; 3)$' },
              { key: 'B', content: '$G(4{,}5; 4{,}5)$' },
              { key: 'C', content: '$G(9; 9)$' },
              { key: 'D', content: '$G(3; 2)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng công thức trọng tâm: $x_G = \\frac{1 + 3 + 5}{3} = 3$ và $y_G = \\frac{4 + (-2) + 7}{3} = 3 \\Rightarrow G(3; 3)$.',
            pedagogicalTip: 'Tọa độ trọng tâm bằng trung bình cộng tọa độ ba đỉnh (chia cho $3$).',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 10: Điều kiện hai vectơ cùng phương theo tọa độ',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, hai vectơ $\\overrightarrow{u} = (3; -2)$ và $\\overrightarrow{v} = (-6; m)$ cùng phương khi và chỉ khi:',
            options: [
              { key: 'A', content: '$m = 4$' },
              { key: 'B', content: '$m = -4$' },
              { key: 'C', content: '$m = 9$' },
              { key: 'D', content: '$m = -9$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hai vectơ $\\overrightarrow{u}, \\overrightarrow{v}$ cùng phương $\\Leftrightarrow \\frac{-6}{3} = \\frac{m}{-2} \\Leftrightarrow m = 4$ (hoặc $3m - (-2)(-6) = 0 \\Leftrightarrow 3m - 12 = 0 \\Leftrightarrow m = 4$).',
            pedagogicalTip: 'Điều kiện cùng phương tổng quát của $(x; y)$ và $(x\'; y\')$ là $xy\' - x\'y = 0$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 10: Tìm đỉnh thứ tư của hình bình hành (Ví dụ 2 SBT trang 56)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(-1; 2), B(3; 4), C(2; -1)$. Tọa độ đỉnh $D$ để tứ giác $ABCD$ là hình bình hành là:',
            options: [
              { key: 'A', content: '$D(-2; -3)$' },
              { key: 'B', content: '$D(6; 1)$' },
              { key: 'C', content: '$D(0; 5)$' },
              { key: 'D', content: '$D(2; 3)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tứ giác $ABCD$ là hình bình hành $\\Leftrightarrow \\overrightarrow{AB} = \\overrightarrow{DC}$. Ta có $\\overrightarrow{AB} = (4; 2)$ và $\\overrightarrow{DC} = (2 - x_D; -1 - y_D) \\Rightarrow x_D = -2, y_D = -3$, tức là $D(-2; -3)$.',
            pedagogicalTip: 'Công thức nhanh cho hình bình hành $ABCD$: $x_A + x_C = x_B + x_D \\Rightarrow x_D = x_A + x_C - x_B$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 10: Tìm tọa độ ba đỉnh tam giác khi biết trung điểm các cạnh (Bài 4.23 SBT trang 58)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $M(4; 0), N(5; 2), P(2; 3)$ lần lượt là trung điểm của các cạnh $BC, CA, AB$ (Bài 4.23 SBT trang 58). Tọa độ đỉnh $A$ của tam giác là:',
            options: [
              { key: 'A', content: '$A(3; 5)$' },
              { key: 'B', content: '$A(1; 1)$' },
              { key: 'C', content: '$A(7; -1)$' },
              { key: 'D', content: '$A(5; 3)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.23 SBT trang 111: Vì $MN$ là đường trung bình nên $\\overrightarrow{PA} = \\overrightarrow{MN} = (1; 2) \\Rightarrow x_A = x_P + 1 = 3, y_A = y_P + 2 = 5$. Vậy $A(3; 5)$ (cùng với $B(1; 1), C(7; -1)$).',
            pedagogicalTip: 'Trong tam giác có trung điểm ba cạnh $M, N, P$, tứ giác $APMN$ là hình bình hành nên $A = P + N - M$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 10: Độ dài của vectơ theo tọa độ',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho vectơ $\\overrightarrow{a} = (-5; 12)$. Độ dài của vectơ $\\overrightarrow{a}$ bằng:',
            options: [
              { key: 'A', content: '$13$' },
              { key: 'B', content: '$7$' },
              { key: 'C', content: '$17$' },
              { key: 'D', content: '$\\sqrt{119}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng công thức độ dài vectơ: $|\\overrightarrow{a}| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{169} = 13$.',
            pedagogicalTip: 'Công thức $|\\overrightarrow{a}| = \\sqrt{x^2 + y^2}$ với $\\overrightarrow{a} = (x; y)$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b10_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 10: Xét ba điểm thẳng hàng và tìm giao điểm với trục tọa độ (Ví dụ 3 SBT trang 57)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(1; 3), B(2; 5), C(4; 9)$ và điểm $D(5; 2)$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Hai vectơ $\\overrightarrow{AB} = (1; 2)$ và $\\overrightarrow{AC} = (3; 6)$ cùng phương, nên ba điểm $A, B, C$ thẳng hàng.',
                isCorrect: true,
                explanation: 'Ta có $\\overrightarrow{AC} = 3\\overrightarrow{AB}$ nên $A, B, C$ thẳng hàng.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Ba điểm $A, B, D$ không thẳng hàng nên tạo thành một tam giác.',
                isCorrect: true,
                explanation: '$\\overrightarrow{AB} = (1; 2)$ và $\\overrightarrow{AD} = (4; -1)$ không cùng phương ($1\\cdot(-1) - 2\\cdot 4 = -9 \\ne 0$) nên $A, B, D$ là ba đỉnh của một tam giác.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giao điểm $E$ của đường thẳng $AB$ với trục tung $Oy$ có tọa độ là $E(0; 1)$.',
                isCorrect: true,
                explanation: 'Điểm $E(0; y) \\in Oy$: $\\overrightarrow{AE} = (-1; y - 3)$ cùng phương với $\\overrightarrow{AB} = (1; 2) \\Leftrightarrow \\frac{y - 3}{2} = \\frac{-1}{1} \\Leftrightarrow y = 1 \\Rightarrow E(0; 1)$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Giao điểm $F$ của đường thẳng $AB$ với trục hoành $Ox$ có tọa độ là $F(1; 0)$.',
                isCorrect: false,
                explanation: 'Điểm $F(x; 0) \\in Ox$: $\\overrightarrow{AF} = (x - 1; -3)$ cùng phương với $\\overrightarrow{AB} = (1; 2) \\Leftrightarrow \\frac{x - 1}{1} = \\frac{-3}{2} \\Leftrightarrow x = -\\frac{1}{2} \\Rightarrow F\\left(-\\frac{1}{2}; 0\\right)$.',
              },
            ],
            pedagogicalTip: 'Điểm trên trục $Oy$ có dạng $(0; y)$, điểm trên trục $Ox$ có dạng $(x; 0)$.',
          },
          {
            id: 'b10_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 10: Phân tích một vectơ theo hai vectơ không cùng phương bằng tọa độ (Bài 4.21 SBT trang 58)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho ba vectơ $\\overrightarrow{a} = (2; 1), \\overrightarrow{b} = (1; 3)$ và $\\overrightarrow{c} = (7; 6)$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ không cùng phương.',
                isCorrect: true,
                explanation: 'Vì $2 \\cdot 3 - 1 \\cdot 1 = 5 \\ne 0$ nên $\\overrightarrow{a}$ và $\\overrightarrow{b}$ không cùng phương.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Độ dài của vectơ $\\overrightarrow{a} + \\overrightarrow{b}$ bằng $5$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{a} + \\overrightarrow{b} = (3; 4) \\Rightarrow |\\overrightarrow{a} + \\overrightarrow{b}| = \\sqrt{3^2 + 4^2} = 5$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Khi phân tích $\\overrightarrow{c} = m\\overrightarrow{a} + n\\overrightarrow{b}$, ta có hệ phương trình $\\begin{cases} 2m + n = 7 \\\\ m + 3n = 6 \\end{cases}$.',
                isCorrect: true,
                explanation: 'Ta có $m\\overrightarrow{a} + n\\overrightarrow{b} = (2m + n; m + 3n) = (7; 6)$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Biểu diễn của $\\overrightarrow{c}$ theo $\\overrightarrow{a}, \\overrightarrow{b}$ là $\\overrightarrow{c} = 2\\overrightarrow{a} + 3\\overrightarrow{b}$.',
                isCorrect: false,
                explanation: 'Giải hệ $\\begin{cases} 2m + n = 7 \\\\ m + 3n = 6 \\end{cases}$ được $m = 3, n = 1$, tức là $\\overrightarrow{c} = 3\\overrightarrow{a} + \\overrightarrow{b}$.',
              },
            ],
            pedagogicalTip: 'Đưa đẳng thức vectơ $\\overrightarrow{c} = m\\overrightarrow{a} + n\\overrightarrow{b}$ về hệ phương trình bậc nhất hai ẩn $m, n$.',
          },
        ],
        part3: [
          {
            id: 'b10_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 10: Tính tổng tọa độ đỉnh thứ tư hình bình hành',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hình bình hành $ABCD$ có $A(1; 2), B(4; 5), C(6; 1)$. Gọi $D(x_D; y_D)$ là đỉnh thứ tư của hình bình hành. Tính tổng $x_D + y_D$.',
            acceptableAnswers: ['1'],
            explanation:
              'Ta có $x_D = x_A + x_C - x_B = 1 + 6 - 4 = 3$ và $y_D = y_A + y_C - y_B = 2 + 1 - 5 = -2$. Vậy $x_D + y_D = 3 + (-2) = 1$.',
            pedagogicalTip: 'Trong hình bình hành $ABCD$: $A + C = B + D \\Rightarrow D = A + C - B$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 10: Tìm tọa độ điểm thuộc trục hoành để ba điểm thẳng hàng',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(2; 3)$ và $B(4; 9)$. Đường thẳng $AB$ cắt trục hoành $Ox$ tại điểm $M(x_0; 0)$. Tìm giá trị của $x_0$.',
            acceptableAnswers: ['1'],
            explanation:
              'Ta có $\\overrightarrow{AB} = (2; 6)$ và $\\overrightarrow{AM} = (x_0 - 2; -3)$. Ba điểm $A, B, M$ thẳng hàng $\\Leftrightarrow \\frac{x_0 - 2}{2} = \\frac{-3}{6} = -\\frac{1}{2} \\Leftrightarrow x_0 - 2 = -1 \\Leftrightarrow x_0 = 1$.',
            pedagogicalTip: 'Lập tỉ số hoành độ và tung độ của $\\overrightarrow{AM}$ với $\\overrightarrow{AB}$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 10: Tìm đỉnh tam giác từ trung điểm các cạnh (Bài 4.23 SBT trang 58)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $M(4; 0), N(5; 2), P(2; 3)$ lần lượt là trung điểm của các cạnh $BC, CA, AB$ (Bài 4.23 SBT trang 58). Tính hoành độ của đỉnh $C$.',
            acceptableAnswers: ['7'],
            explanation:
              'Tứ giác $PMCN$ là hình bình hành nên $x_C = x_M + x_N - x_P = 4 + 5 - 2 = 7$ (với $C(7; -1)$).',
            pedagogicalTip: 'Đỉnh $C$ kề với hai trung điểm $M, N$ và đối diện với $P$, nên $C = M + N - P$.',
            points: 0.5,
          },
          {
            id: 'b10_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 10: Tìm tọa độ điểm chia đoạn thẳng',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(1; 5)$ và $B(7; -1)$. Điểm $I(x_I; y_I)$ thỏa mãn $\\overrightarrow{IA} + 2\\overrightarrow{IB} = \\overrightarrow{0}$. Tính tích $x_I \\cdot y_I$.',
            acceptableAnswers: ['5'],
            explanation:
              'Từ $(1 - x_I) + 2(7 - x_I) = 0 \\Rightarrow 3x_I = 15 \\Rightarrow x_I = 5$. Tương tự $(5 - y_I) + 2(-1 - y_I) = 0 \\Rightarrow 3y_I = 3 \\Rightarrow y_I = 1$. Vậy $x_I \\cdot y_I = 5 \\cdot 1 = 5$.',
            pedagogicalTip: 'Công thức nhanh: $x_I = \\frac{x_A + 2x_B}{1 + 2}$ và $y_I = \\frac{y_A + 2y_B}{1 + 2}$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b10_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 10: Tìm tọa độ ba đỉnh tam giác từ trung điểm ba cạnh (Bài 4.23 SBT trang 58)',
            problemStatement:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $M(4; 0), N(5; 2), P(2; 3)$ lần lượt là trung điểm của các cạnh $BC, CA, AB$. Hãy tìm tọa độ ba đỉnh $A, B, C$ của tam giác.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b10_d1_s1',
                originalIndex: 1,
                content:
                  'Vì $M, N$ lần lượt là trung điểm của $BC, CA$ nên $MN$ là đường trung bình của tam giác $ABC$, suy ra $\\overrightarrow{PA} = \\overrightarrow{BM} = \\overrightarrow{MN} = (5 - 4; 2 - 0) = (1; 2)$.',
                roleDescription: 'Dùng tính chất đường trung bình suy ra PA = BM = MN',
              },
              {
                id: 'b10_d1_s2',
                originalIndex: 2,
                content:
                  'Từ $\\overrightarrow{PA} = (1; 2) \\Leftrightarrow (x_A - 2; y_A - 3) = (1; 2)$, ta tìm được tọa độ đỉnh $A(3; 5)$.',
                roleDescription: 'Tìm tọa độ đỉnh A(3; 5)',
              },
              {
                id: 'b10_d1_s3',
                originalIndex: 3,
                content:
                  'Vì $P(2; 3)$ là trung điểm của $AB$ nên $x_B = 2x_P - x_A = 4 - 3 = 1$ và $y_B = 2y_P - y_A = 6 - 5 = 1$, suy ra tọa độ đỉnh $B(1; 1)$.',
                roleDescription: 'Tìm tọa độ đỉnh B(1; 1) từ trung điểm P của AB',
              },
              {
                id: 'b10_d1_s4',
                originalIndex: 4,
                content:
                  'Vì $N(5; 2)$ là trung điểm của $AC$ nên $x_C = 2x_N - x_A = 10 - 3 = 7$ và $y_C = 2y_N - y_A = 4 - 5 = -1$, suy ra $C(7; -1)$.',
                roleDescription: 'Dùng công thức trung điểm N của AC để suy ra C(7; -1)',
              },
            ],
            pedagogicalTip:
              'Sau khi tìm được một đỉnh $A(3; 5)$, dùng ngay công thức trung điểm $x_B = 2x_P - x_A$ và $x_C = 2x_N - x_A$ để tìm hai đỉnh còn lại nhanh nhất.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 4.23 trang 111 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-10-2',
        lessonId: 'bai-10',
        title: 'Đề ôn Bài 10 - Đề số 02',
        subtitle: 'Cực trị độ dài vectơ trên trục tọa độ & bài toán trồng cột điện (SBT KNTT trang 58–60)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát các bài tập vận dụng 4.24, 4.25 (trồng cột điện qua hồ nước) và các bài toán tìm điểm trên trục tọa độ trong SBT Toán 10 KNTT.',
        part1: [
          {
            id: 'b10_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 10: Hình chiếu của điểm lên trục tọa độ',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho điểm $M(3; -5)$. Tọa độ điểm $M\'$ đối xứng với $M$ qua trục hoành $Ox$ là:',
            options: [
              { key: 'A', content: '$M\'(3; 5)$' },
              { key: 'B', content: '$M\'(-3; -5)$' },
              { key: 'C', content: '$M\'(-3; 5)$' },
              { key: 'D', content: '$M\'(3; 0)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Điểm đối xứng với $(x; y)$ qua trục hoành $Ox$ giữ nguyên hoành độ và đổi dấu tung độ: $(x; -y) = (3; 5)$.',
            pedagogicalTip: 'Đối xứng qua $Ox$ thì đổi dấu $y$; đối xứng qua $Oy$ thì đổi dấu $x$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 10: Tìm điểm trên trục Ox sao cho độ dài tổng hai vectơ nhỏ nhất (Bài 4.24a SBT trang 58)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(1; 3)$ và $B(5; 5)$. Điểm $C$ thuộc trục hoành $Ox$ sao cho độ dài của vectơ $\\overrightarrow{CA} + \\overrightarrow{CB}$ đạt giá trị **nhỏ nhất** có tọa độ là (tương tự Bài 4.24a SBT trang 58):',
            options: [
              { key: 'A', content: '$C(3; 0)$' },
              { key: 'B', content: '$C(0; 4)$' },
              { key: 'C', content: '$C(2; 0)$' },
              { key: 'D', content: '$C(6; 0)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Gọi $I(3; 4)$ là trung điểm của $AB$, ta có $|\\overrightarrow{CA} + \\overrightarrow{CB}| = 2CI$. Với $C(x; 0) \\in Ox$, $CI = \\sqrt{(x - 3)^2 + 4^2} \\ge 4$, đạt giá trị nhỏ nhất khi $x = 3$, tức là $C(3; 0)$ (hình chiếu của trung điểm $I$ lên $Ox$).',
            pedagogicalTip: 'Độ dài $|\\overrightarrow{CA} + \\overrightarrow{CB}| = 2CI$ nhỏ nhất khi $C$ là hình chiếu vuông góc của trung điểm $I$ lên trục $Ox$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 10: Tìm điểm trên trục Oy sao cho |2FC + 3FD| nhỏ nhất (Bài 4.24b SBT trang 58)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $C(2; 1)$ và $D(3; 6)$. Điểm $F$ thuộc trục tung $Oy$ sao cho $|2\\overrightarrow{FC} + 3\\overrightarrow{FD}|$ đạt giá trị **nhỏ nhất** có tọa độ là:',
            options: [
              { key: 'A', content: '$F(0; 4)$' },
              { key: 'B', content: '$F(0; 3{,}5)$' },
              { key: 'C', content: '$F(0; 5)$' },
              { key: 'D', content: '$F(0; 2)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Với $F(0; y) \\in Oy$, ta có $2\\overrightarrow{FC} + 3\\overrightarrow{FD} = (2\\cdot 2 + 3\\cdot 3; 2(1 - y) + 3(6 - y)) = (13; 20 - 5y)$. Độ dài $\\sqrt{13^2 + (20 - 5y)^2} \\ge 13$, nhỏ nhất khi $20 - 5y = 0 \\Leftrightarrow y = 4$, tức là $F(0; 4)$ (Bài 4.24b SBT trang 58).',
            pedagogicalTip: 'Viết tọa độ của vectơ $2\\overrightarrow{FC} + 3\\overrightarrow{FD}$ theo ẩn $y$ rồi cho thành phần chứa $y$ bằng $0$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 10: Bài toán thực tế trồng 4 cột điện thẳng hàng qua hồ nước (Bài 4.25 SBT trang 58)',
            prompt:
              'Để kéo đường dây điện băng qua một hồ nước hình chữ nhật $ABCD$ với $AB = 200\\text{ m}, AD = 180\\text{ m}$, người ta trồng $4$ cột điện $C_1, C_2, C_3, C_4$ thẳng hàng và cách đều nhau ($C_1$ trên bờ $AB$ cách $A$ $20\\text{ m}$, $C_4$ trên bờ $CD$ cách $C$ $30\\text{ m}$). Chọn hệ trục tọa độ $Oxy$ sao cho $A(0; 0), B(200; 0), D(0; 180)$ thì $C_1(20; 0)$ và $C_4(170; 180)$ (Bài 4.25 SBT trang 58). Tọa độ của cột điện $C_2$ là:',
            options: [
              { key: 'A', content: '$C_2(70; 60)$' },
              { key: 'B', content: '$C_2(120; 120)$' },
              { key: 'C', content: '$C_2(95; 90)$' },
              { key: 'D', content: '$C_2(60; 70)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.25 SBT trang 112: Vì $4$ cột cách đều nhau nên $\\overrightarrow{C_1C_2} = \\frac{1}{3}\\overrightarrow{C_1C_4}$. Ta có $\\overrightarrow{C_1C_4} = (150; 180) \\Rightarrow \\overrightarrow{C_1C_2} = (50; 60) \\Rightarrow C_2(20 + 50; 0 + 60) = C_2(70; 60)$ (và $C_3(120; 120)$).',
            pedagogicalTip: 'Có $4$ cột cách đều nhau tạo thành $3$ khoảng bằng nhau, nên $\\overrightarrow{C_1C_2} = \\frac{1}{3}\\overrightarrow{C_1C_4}$ và $\\overrightarrow{C_1C_3} = \\frac{2}{3}\\overrightarrow{C_1C_4}$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 10: Chu vi tam giác trong mặt phẳng tọa độ',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 1), B(4; 1), C(1; 5)$. Chu vi của tam giác $ABC$ bằng:',
            options: [
              { key: 'A', content: '$12$' },
              { key: 'B', content: '$6$' },
              { key: 'C', content: '$10$' },
              { key: 'D', content: '$15$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $AB = 3, AC = 4, BC = \\sqrt{3^2 + 4^2} = 5$. Chu vi tam giác là $3 + 4 + 5 = 12$.',
            pedagogicalTip: 'Tính độ dài từng cạnh bằng công thức $AB = |\\overrightarrow{AB}|$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 10: Tìm điểm thỏa mãn đẳng thức vectơ',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(2; -1)$ và $B(4; 3)$. Tọa độ điểm $M$ sao cho $\\overrightarrow{AM} = 3\\overrightarrow{AB}$ là:',
            options: [
              { key: 'A', content: '$M(8; 11)$' },
              { key: 'B', content: '$M(6; 12)$' },
              { key: 'C', content: '$M(4; 13)$' },
              { key: 'D', content: '$M(-4; -13)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\overrightarrow{AB} = (2; 4) \\Rightarrow 3\\overrightarrow{AB} = (6; 12)$. Từ $\\overrightarrow{AM} = (x_M - 2; y_M + 1) = (6; 12) \\Rightarrow M(8; 11)$.',
            pedagogicalTip: '$M = A + 3\\overrightarrow{AB}$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 10: Tọa độ tâm đường tròn ngoại tiếp tam giác vuông',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ vuông tại $A$ biết $B(2; 6)$ và $C(8; -2)$. Tọa độ tâm $I$ của đường tròn ngoại tiếp tam giác $ABC$ là:',
            options: [
              { key: 'A', content: '$I(5; 2)$' },
              { key: 'B', content: '$I(3; 4)$' },
              { key: 'C', content: '$I(10; 4)$' },
              { key: 'D', content: '$I(6; -8)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tâm đường tròn ngoại tiếp tam giác vuông tại $A$ là trung điểm $I$ của cạnh huyền $BC$: $I\\left(\\frac{2+8}{2}; \\frac{6-2}{2}\\right) = I(5; 2)$.',
            pedagogicalTip: 'Tâm ngoại tiếp tam giác vuông luôn là trung điểm cạnh huyền.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 10: Tìm tọa độ đỉnh tam giác khi biết trọng tâm',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(2; 1), B(-3; 4)$ và trọng tâm $G(1; 2)$. Tọa độ đỉnh $C$ là:',
            options: [
              { key: 'A', content: '$C(4; 1)$' },
              { key: 'B', content: '$C(0; 7)$' },
              { key: 'C', content: '$C(2; 3)$' },
              { key: 'D', content: '$C(-2; -3)$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Từ công thức trọng tâm: $x_C = 3x_G - x_A - x_B = 3 - 2 - (-3) = 4$ và $y_C = 3y_G - y_A - y_B = 6 - 1 - 4 = 1 \\Rightarrow C(4; 1)$.',
            pedagogicalTip: 'Dùng công thức ngược: $C = 3G - A - B$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b10_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 10: Bài toán thực tế trồng cột điện qua hồ nước (Bài 4.25 SBT trang 58)',
            prompt:
              'Xét bài toán trồng $4$ cột điện $C_1, C_2, C_3, C_4$ thẳng hàng và cách đều nhau qua hồ nước hình chữ nhật $ABCD$ trong hệ trục tọa độ $Oxy$ với $A(0; 0), B(200; 0), C(200; 180), D(0; 180)$, biết $C_1(20; 0)$ và $C_4(170; 180)$ (Bài 4.25 SBT trang 58). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Vectơ $\\overrightarrow{C_1C_4}$ có tọa độ là $(150; 180)$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{C_1C_4} = (170 - 20; 180 - 0) = (150; 180)$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tọa độ của cột điện $C_2$ là $(70; 60)$ và của cột điện $C_3$ là $(120; 120)$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{C_1C_2} = \\frac{1}{3}\\overrightarrow{C_1C_4} = (50; 60) \\Rightarrow C_2(70; 60)$ và $C_3(120; 120)$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Khoảng cách từ cột điện $C_2$ đến bờ $AB$ (trục $Ox$) là $60\\text{ m}$ và đến bờ $AD$ (trục $Oy$) là $70\\text{ m}$.',
                isCorrect: true,
                explanation: 'Điểm $C_2(70; 60)$ có tung độ $y = 60$ là khoảng cách đến trục $Ox$ ($AB$) và hoành độ $x = 70$ là khoảng cách đến trục $Oy$ ($AD$).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Khoảng cách từ cột điện $C_3$ đến bờ $AB$ là $100\\text{ m}$.',
                isCorrect: false,
                explanation: 'Điểm $C_3(120; 120)$ có tung độ $y = 120$ nên cách bờ $AB$ một khoảng $120\\text{ m}$ (Bài 4.25 SBT trang 112).',
              },
            ],
            pedagogicalTip: 'Trong hệ trục $Oxy$ với $Ox \\equiv AB$ và $Oy \\equiv AD$, khoảng cách từ $M(x; y)$ đến $AB$ là $|y|$ và đến $AD$ là $|x|$.',
          },
          {
            id: 'b10_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 10: Tìm điểm trên trục tọa độ thỏa mãn điều kiện hình học (Bài 4.22, 4.24 SBT trang 58)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(1; 2)$ và $B(3; 4)$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Trung điểm $I$ của đoạn thẳng $AB$ có tọa độ là $I(2; 3)$.',
                isCorrect: true,
                explanation: '$I\\left(\\frac{1+3}{2}; \\frac{2+4}{2}\\right) = I(2; 3)$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Điểm $M$ trên trục hoành $Ox$ để $|\\overrightarrow{MA} + \\overrightarrow{MB}|$ nhỏ nhất là $M(2; 0)$.',
                isCorrect: true,
                explanation: '$|\\overrightarrow{MA} + \\overrightarrow{MB}| = 2MI$ nhỏ nhất khi $M$ là hình chiếu của $I(2; 3)$ lên $Ox$, tức là $M(2; 0)$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giá trị nhỏ nhất của $|\\overrightarrow{MA} + \\overrightarrow{MB}|$ khi $M$ thay đổi trên trục $Ox$ bằng $3$.',
                isCorrect: false,
                explanation: 'Khi $M(2; 0)$ thì $MI = 3$, nên giá trị nhỏ nhất của $|\\overrightarrow{MA} + \\overrightarrow{MB}| = 2MI = 2 \\cdot 3 = 6$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Điểm $N$ trên trục hoành $Ox$ để $NA + NB$ nhỏ nhất có tọa độ là $N\\left(\\frac{5}{3}; 0\\right)$.',
                isCorrect: true,
                explanation: 'Lấy $A\'(1; -2)$ đối xứng với $A(1; 2)$ qua $Ox$. Khi đó $NA + NB = NA\' + NB \\ge A\'B$, dấu bằng xảy ra khi $A\', N, B$ thẳng hàng. Ta có $\\overrightarrow{A\'B} = (2; 6)$ và $\\overrightarrow{A\'N} = (x - 1; 2) \\Rightarrow \\frac{x - 1}{2} = \\frac{2}{6} \\Rightarrow x = \\frac{5}{3}$.',
              },
            ],
            pedagogicalTip: 'Phân biệt hai bài toán: tìm $M \\in Ox$ để $|\\overrightarrow{MA} + \\overrightarrow{MB}|$ nhỏ nhất (dùng trung điểm $I$) và tìm $N \\in Ox$ để $NA + NB$ nhỏ nhất (dùng điểm đối xứng $A\'$).',
          },
        ],
        part3: [
          {
            id: 'b10_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 10: Giá trị nhỏ nhất của độ dài tổng hai vectơ trên Ox',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(1; 4)$ và $B(5; 6)$. Tìm giá trị nhỏ nhất của biểu thức $P = |\\overrightarrow{MA} + \\overrightarrow{MB}|$ khi điểm $M$ di động trên trục hoành $Ox$.',
            acceptableAnswers: ['10'],
            explanation:
              'Gọi $I(3; 5)$ là trung điểm của $AB$. Với $M(x; 0) \\in Ox$, ta có $P = |2\\overrightarrow{MI}| = 2MI = 2\\sqrt{(x - 3)^2 + 5^2} \\ge 2 \\cdot 5 = 10$ (đạt được khi $M(3; 0)$).',
            pedagogicalTip: 'Đừng quên nhân $2$ vì $|\\overrightarrow{MA} + \\overrightarrow{MB}| = 2MI$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 10: Khoảng cách giữa hai cột điện liên tiếp (Bài 4.25 SBT trang 58)',
            prompt:
              'Trong bài toán trồng cột điện Bài 4.25 SBT trang 58 với $C_1(20; 0)$ và $C_2(70; 60)$, tính khoảng cách giữa hai cột điện liên tiếp $C_1C_2$ (làm tròn đến hàng phần mười, đơn vị: mét).',
            acceptableAnswers: ['78,1', '78.1'],
            explanation:
              'Ta có $\\overrightarrow{C_1C_2} = (50; 60) \\Rightarrow C_1C_2 = \\sqrt{50^2 + 60^2} = \\sqrt{6100} \\approx 78{,}1\\text{ m}$.',
            pedagogicalTip: 'Tính $|\\overrightarrow{C_1C_2}| = \\sqrt{50^2 + 60^2}$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 10: Tính tổng hệ số biểu diễn vectơ',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho $\\overrightarrow{a} = (1; 2), \\overrightarrow{b} = (3; 1)$ và $\\overrightarrow{c} = (7; 4)$. Biết $\\overrightarrow{c} = m\\overrightarrow{a} + n\\overrightarrow{b}$, tính tổng $m + n$.',
            acceptableAnswers: ['3'],
            explanation:
              'Giải hệ $\\begin{cases} m + 3n = 7 \\\\ 2m + n = 4 \\end{cases}$ ta được $m = 1, n = 2$. Vậy $m + n = 3$.',
            pedagogicalTip: 'Cộng hai phương trình: $3(m + n) = 11$ hoặc giải trực tiếp tìm $m = 1, n = 2$.',
            points: 0.5,
          },
          {
            id: 'b10_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 10: Tìm điểm trên Oy cách đều hai điểm',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(2; 1)$ và $B(4; 3)$. Điểm $M(0; y_0)$ thuộc trục tung $Oy$ và cách đều hai điểm $A, B$ ($MA = MB$). Tìm giá trị của $y_0$.',
            acceptableAnswers: ['5'],
            explanation:
              'Ta có $MA^2 = MB^2 \\Leftrightarrow 2^2 + (1 - y_0)^2 = 4^2 + (3 - y_0)^2 \\Leftrightarrow 5 - 2y_0 + y_0^2 = 25 - 6y_0 + y_0^2 \\Leftrightarrow 4y_0 = 20 \\Leftrightarrow y_0 = 5$.',
            pedagogicalTip: 'Bình phương hai vế $MA^2 = MB^2$ để khử $y_0^2$ và đưa về phương trình bậc nhất.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b10_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 10: Giải bài toán thực tế trồng cột điện qua hồ nước (Bài 4.25 SBT trang 58)',
            problemStatement:
              'Để kéo đường dây điện băng qua một cái hồ hình chữ nhật $ABCD$ với độ dài $AB = 200\\text{ m}, AD = 180\\text{ m}$, người ta dự định làm $4$ cột điện liên tiếp cách đều nhau và thẳng hàng: $C_1$ nằm trên bờ $AB$ cách $A$ $20\\text{ m}$, $C_4$ nằm trên bờ $CD$ cách $C$ $30\\text{ m}$. Hãy tính khoảng cách từ các cột điện $C_2, C_3$ đến các bờ $AB, AD$.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b10_d2_s1',
                originalIndex: 1,
                content:
                  'Chọn hệ trục tọa độ $Oxy$ sao cho gốc $O \\equiv A(0; 0)$, tia $Ox$ trùng tia $AB$, tia $Oy$ trùng tia $AD$ (đơn vị trên trục là mét). Khi đó $B(200; 0), C(200; 180), D(0; 180)$ và $C_1(20; 0), C_4(170; 180)$.',
                roleDescription: 'Thiết lập hệ trục tọa độ Oxy gắn với hồ nước ABCD',
              },
              {
                id: 'b10_d2_s2',
                originalIndex: 2,
                content:
                  'Tính tọa độ vectơ $\\overrightarrow{C_1C_4} = (170 - 20; 180 - 0) = (150; 180)$.',
                roleDescription: 'Tính tọa độ vectơ C₁C₄',
              },
              {
                id: 'b10_d2_s3',
                originalIndex: 3,
                content:
                  'Vì $4$ cột điện thẳng hàng và cách đều nhau nên $\\overrightarrow{C_1C_2} = \\frac{1}{3}\\overrightarrow{C_1C_4} = (50; 60)$ và $\\overrightarrow{C_1C_3} = \\frac{2}{3}\\overrightarrow{C_1C_4} = (100; 120)$, suy ra $C_2(70; 60)$ và $C_3(120; 120)$.',
                roleDescription: 'Tìm tọa độ của hai cột điện C₂ và C₃',
              },
              {
                id: 'b10_d2_s4',
                originalIndex: 4,
                content:
                  'Kết luận: Cột $C_2$ cách bờ $AB$ $60\\text{ m}$, cách bờ $AD$ $70\\text{ m}$; cột $C_3$ cách bờ $AB$ $120\\text{ m}$ và cách bờ $AD$ $120\\text{ m}$.',
                roleDescription: 'Đọc khoảng cách từ tọa độ của C₂ và C₃',
              },
            ],
            pedagogicalTip:
              'Gắn hệ trục tọa độ $Oxy$ vào hai cạnh vuông góc $AB, AD$ của hình chữ nhật giúp biến bài toán thực tế thành bài toán chia đoạn thẳng rất đơn giản.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 4.25 trang 112 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-11',
    lessonNumber: 11,
    name: 'Bài 11',
    topicTitle: 'Tích vô hướng của hai vectơ',
    chapter: 'Chương IV – Vectơ',
    keySummary:
      'Góc giữa hai vectơ, định nghĩa và tính chất tích vô hướng, biểu thức tọa độ của tích vô hướng, điều kiện hai vectơ vuông góc và ứng dụng tính công cơ học (bám sát SBT Toán 10 KNTT trang 60–66).',
    practiceExams: [
      {
        id: 'de-on-bai-11-1',
        lessonId: 'bai-11',
        title: 'Đề ôn Bài 11 - Đề số 01',
        subtitle: 'Góc giữa hai vectơ, định nghĩa & tính chất tích vô hướng (SBT KNTT trang 60–63)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 4.26, 4.27, 4.28, 4.29 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b11_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 11: Định nghĩa tích vô hướng của hai vectơ',
            prompt:
              'Cho hai vectơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$ đều khác $\\overrightarrow{0}$. Tích vô hướng $\\overrightarrow{u} \\cdot \\overrightarrow{v}$ được xác định bởi công thức nào sau đây?',
            options: [
              { key: 'A', content: '$\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})$' },
              { key: 'B', content: '$\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\sin(\\overrightarrow{u}, \\overrightarrow{v})$' },
              { key: 'C', content: '$\\overrightarrow{u} \\cdot \\overrightarrow{v} = -|\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})$' },
              { key: 'D', content: '$\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}|$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định nghĩa Bài 11 (SBT trang 60): $\\overrightarrow{u} \\cdot \\overrightarrow{v} = |\\overrightarrow{u}| \\cdot |\\overrightarrow{v}| \\cdot \\cos(\\overrightarrow{u}, \\overrightarrow{v})$ (kết quả là một số thực).',
            pedagogicalTip: 'Tích vô hướng của hai vectơ là một **số thực** (không phải là một vectơ).',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 11: Xác định góc giữa hai vectơ trong tam giác đều (Ví dụ 1 SBT trang 60)',
            prompt:
              'Cho tam giác đều $ABC$ có cạnh bằng $a$. Góc giữa hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ bằng:',
            options: [
              { key: 'A', content: '$120^\\circ$' },
              { key: 'B', content: '$60^\\circ$' },
              { key: 'C', content: '$30^\\circ$' },
              { key: 'D', content: '$150^\\circ$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{BC}$ chưa cùng điểm đầu; tịnh tiến $\\overrightarrow{AB} = \\overrightarrow{BD}$ (với $B$ là trung điểm $AD$) thì $(\\overrightarrow{AB}, \\overrightarrow{BC}) = \\widehat{DBC} = 180^\\circ - 60^\\circ = 120^\\circ$.',
            pedagogicalTip: 'Cảnh giác bẫy kinh điển: $(\\overrightarrow{AB}, \\overrightarrow{BC}) = 180^\\circ - \\widehat{B}$, chỉ khi cùng gốc $(\\overrightarrow{BA}, \\overrightarrow{BC})$ mới bằng $\\widehat{B}$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 11: Tính tích vô hướng trong tam giác đều',
            prompt:
              'Cho tam giác đều $ABC$ có cạnh bằng $4$. Giá trị của tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ bằng:',
            options: [
              { key: 'A', content: '$-8$' },
              { key: 'B', content: '$8$' },
              { key: 'C', content: '$-8\\sqrt{3}$' },
              { key: 'D', content: '$16$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $(\\overrightarrow{AB}, \\overrightarrow{BC}) = 120^\\circ$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = 4 \\cdot 4 \\cdot \\cos 120^\\circ = 16 \\cdot \\left(-\\frac{1}{2}\\right) = -8$.',
            pedagogicalTip: 'Kiểm tra điểm đầu của hai vectơ trước khi thay góc vào công thức tích vô hướng.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 11: Biểu thức tọa độ của tích vô hướng',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\overrightarrow{u} = (3; -2)$ và $\\overrightarrow{v} = (4; 5)$. Tích vô hướng $\\overrightarrow{u} \\cdot \\overrightarrow{v}$ bằng:',
            options: [
              { key: 'A', content: '$2$' },
              { key: 'B', content: '$22$' },
              { key: 'C', content: '$-2$' },
              { key: 'D', content: '$23$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng công thức tọa độ $\\overrightarrow{u} \\cdot \\overrightarrow{v} = xx\' + yy\' = 3 \\cdot 4 + (-2) \\cdot 5 = 12 - 10 = 2$.',
            pedagogicalTip: 'Tích vô hướng = Hoành nhân Hoành + Tung nhân Tung.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 11: Điều kiện hai vectơ vuông góc',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\overrightarrow{a} = (2; -3)$ và $\\overrightarrow{b} = (6; m)$. Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ vuông góc với nhau khi và chỉ khi:',
            options: [
              { key: 'A', content: '$m = 4$' },
              { key: 'B', content: '$m = -4$' },
              { key: 'C', content: '$m = -9$' },
              { key: 'D', content: '$m = 9$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\overrightarrow{a} \\perp \\overrightarrow{b} \\Leftrightarrow \\overrightarrow{a} \\cdot \\overrightarrow{b} = 0 \\Leftrightarrow 2 \\cdot 6 + (-3) \\cdot m = 0 \\Leftrightarrow 12 - 3m = 0 \\Leftrightarrow m = 4$.',
            pedagogicalTip: 'Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng $0$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 11: Tính góc giữa hai vectơ trong mặt phẳng tọa độ (Bài 4.27 SBT trang 62)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, góc giữa hai vectơ $\\overrightarrow{a} = (2; 1)$ và $\\overrightarrow{b} = (3; -1)$ bằng:',
            options: [
              { key: 'A', content: '$45^\\circ$' },
              { key: 'B', content: '$60^\\circ$' },
              { key: 'C', content: '$135^\\circ$' },
              { key: 'D', content: '$30^\\circ$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\cos(\\overrightarrow{a}, \\overrightarrow{b}) = \\frac{2\\cdot 3 + 1\\cdot(-1)}{\\sqrt{2^2 + 1^2}\\cdot \\sqrt{3^2 + (-1)^2}} = \\frac{5}{\\sqrt{5}\\cdot \\sqrt{10}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow (\\overrightarrow{a}, \\overrightarrow{b}) = 45^\\circ$.',
            pedagogicalTip: 'Áp dụng công thức $\\cos(\\overrightarrow{a}, \\overrightarrow{b}) = \\frac{\\overrightarrow{a}\\cdot \\overrightarrow{b}}{|\\overrightarrow{a}|\\cdot |\\overrightarrow{b}|}$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 11: Tích vô hướng và hình chiếu vuông góc (Ví dụ 2 SBT trang 61)',
            prompt:
              'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3, AC = 4$. Giá trị của tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{BC}$ bằng:',
            options: [
              { key: 'A', content: '$-9$' },
              { key: 'B', content: '$9$' },
              { key: 'C', content: '$-16$' },
              { key: 'D', content: '$12$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tách $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$. Vì $\\overrightarrow{AB} \\perp \\overrightarrow{AC}$ nên $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$. Do đó $\\overrightarrow{AB} \\cdot \\overrightarrow{BC} = \\overrightarrow{AB} \\cdot (\\overrightarrow{AC} - \\overrightarrow{AB}) = -\\overrightarrow{AB}^2 = -3^2 = -9$.',
            pedagogicalTip: 'Phân tích vectơ cạnh huyền $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$ để tận dụng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 0$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 11: Tính độ dài tổ hợp vectơ nhờ bình phương vô hướng (Bài 4.26 SBT trang 62)',
            prompt:
              'Cho hai vectơ $\\overrightarrow{a}, \\overrightarrow{b}$ có $|\\overrightarrow{a}| = 3, |\\overrightarrow{b}| = 4$ và góc $(\\overrightarrow{a}, \\overrightarrow{b}) = 60^\\circ$. Độ dài của vectơ $\\overrightarrow{a} - \\overrightarrow{b}$ bằng:',
            options: [
              { key: 'A', content: '$\\sqrt{13}$' },
              { key: 'B', content: '$\\sqrt{37}$' },
              { key: 'C', content: '$5$' },
              { key: 'D', content: '$1$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $|\\overrightarrow{a} - \\overrightarrow{b}|^2 = (\\overrightarrow{a} - \\overrightarrow{b})^2 = \\overrightarrow{a}^2 + \\overrightarrow{b}^2 - 2\\overrightarrow{a}\\cdot \\overrightarrow{b} = 3^2 + 4^2 - 2\\cdot 3\\cdot 4\\cos 60^\\circ = 9 + 16 - 12 = 13 \\Rightarrow |\\overrightarrow{a} - \\overrightarrow{b}| = \\sqrt{13}$.',
            pedagogicalTip: 'Sử dụng hằng đẳng thức bình phương vô hướng $|\\overrightarrow{a} - \\overrightarrow{b}|^2 = |\\overrightarrow{a}|^2 + |\\overrightarrow{b}|^2 - 2\\overrightarrow{a}\\cdot \\overrightarrow{b}$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b11_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 11: Khai thác tích vô hướng trong tam giác biết tọa độ 3 đỉnh (Bài 4.27 SBT trang 62)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có ba đỉnh $A(1; 2), B(-2; 6), C(9; 8)$ (bám sát Bài 4.27 SBT trang 62). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Tọa độ hai vectơ cạnh là $\\overrightarrow{AB} = (-3; 4)$ và $\\overrightarrow{AC} = (8; 6)$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{AB} = (-2 - 1; 6 - 2) = (-3; 4)$ và $\\overrightarrow{AC} = (9 - 1; 8 - 2) = (8; 6)$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tam giác $ABC$ vuông tại $A$.',
                isCorrect: true,
                explanation: 'Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-3)\\cdot 8 + 4\\cdot 6 = -24 + 24 = 0 \\Rightarrow \\overrightarrow{AB} \\perp \\overrightarrow{AC}$, nên $\\triangle ABC$ vuông tại $A$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Chu vi của tam giác $ABC$ bằng $30$.',
                isCorrect: false,
                explanation: 'Ta có $AB = \\sqrt{(-3)^2 + 4^2} = 5, AC = \\sqrt{8^2 + 6^2} = 10$ và $BC = \\sqrt{11^2 + 2^2} = 5\\sqrt{5}$, nên chu vi bằng $15 + 5\\sqrt{5} \\ne 30$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Diện tích của tam giác $ABC$ bằng $25$.',
                isCorrect: true,
                explanation: 'Vì $\\triangle ABC$ vuông tại $A$ có $AB = 5, AC = 10$ nên diện tích $S = \\frac{1}{2}AB \\cdot AC = \\frac{1}{2} \\cdot 5 \\cdot 10 = 25$.',
              },
            ],
            pedagogicalTip: 'Chú ý statement c là Sai vì $BC = \\sqrt{(9 - (-2))^2 + (8 - 6)^2} = \\sqrt{125} = 5\\sqrt{5}$, nên chu vi là $15 + 5\\sqrt{5}$.',
          },
          {
            id: 'b11_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 11: Tìm trực tâm và tâm đường tròn ngoại tiếp bằng tích vô hướng (Ví dụ 3 SBT trang 61)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 3), B(-2; 0), C(4; 0)$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Độ dài hai cạnh $AB$ và $AC$ bằng nhau ($AB = AC = 3\\sqrt{2}$).',
                isCorrect: true,
                explanation: '$\\overrightarrow{AB} = (-3; -3) \\Rightarrow AB = 3\\sqrt{2}$ và $\\overrightarrow{AC} = (3; -3) \\Rightarrow AC = 3\\sqrt{2}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tam giác $ABC$ vuông cân tại $A$.',
                isCorrect: true,
                explanation: 'Ta có $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = (-3)\\cdot 3 + (-3)\\cdot(-3) = 0$ và $AB = AC = 3\\sqrt{2}$ nên $\\triangle ABC$ vuông cân tại $A$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Trực tâm $H$ của tam giác $ABC$ trùng với đỉnh $A(1; 3)$.',
                isCorrect: true,
                explanation: 'Trong tam giác vuông tại $A$, trực tâm $H$ chính là đỉnh góc vuông $A(1; 3)$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Tâm đường tròn ngoại tiếp $I$ của tam giác $ABC$ có tọa độ là $I(2; 0)$.',
                isCorrect: false,
                explanation: 'Tâm ngoại tiếp tam giác vuông tại $A$ là trung điểm của cạnh huyền $BC$: $I\\left(\\frac{-2+4}{2}; 0\\right) = I(1; 0)$.',
              },
            ],
            pedagogicalTip: 'Khi bài toán yêu cầu tìm trực tâm $H$ hoặc tâm ngoại tiếp $I$, hãy kiểm tra trước xem tam giác có vuông hay không bằng cách tính tích vô hướng!',
          },
        ],
        part3: [
          {
            id: 'b11_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 11: Tìm tham số để hai vectơ vuông góc',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\overrightarrow{u} = (4; -5)$ và $\\overrightarrow{v} = (m; 8)$. Tìm giá trị của $m$ để $\\overrightarrow{u} \\perp \\overrightarrow{v}$.',
            acceptableAnswers: ['10'],
            explanation:
              'Ta có $\\overrightarrow{u} \\perp \\overrightarrow{v} \\Leftrightarrow 4m + (-5)\\cdot 8 = 0 \\Leftrightarrow 4m = 40 \\Leftrightarrow m = 10$.',
            pedagogicalTip: 'Giải phương trình $xx\' + yy\' = 0$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 11: Tính tích vô hướng thông qua ba cạnh tam giác',
            prompt:
              'Cho tam giác $ABC$ có ba cạnh $AB = 5, AC = 6, BC = 7$. Tính giá trị của tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.',
            acceptableAnswers: ['6'],
            explanation:
              'Từ $BC^2 = (\\overrightarrow{AC} - \\overrightarrow{AB})^2 = AB^2 + AC^2 - 2\\overrightarrow{AB}\\cdot \\overrightarrow{AC} \\Rightarrow \\overrightarrow{AB}\\cdot \\overrightarrow{AC} = \\frac{AB^2 + AC^2 - BC^2}{2} = \\frac{25 + 36 - 49}{2} = 6$.',
            pedagogicalTip: 'Công thức vàng: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\frac{AB^2 + AC^2 - BC^2}{2}$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 11: Tính chân đường cao bằng tích vô hướng (Bài 4.27d SBT trang 62)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(2; 4), B(-1; 0), C(5; 0)$. Gọi $D(x_D; y_D)$ là chân đường cao kẻ từ $A$ xuống cạnh $BC$. Tìm hoành độ $x_D$.',
            acceptableAnswers: ['2'],
            explanation:
              'Vì $B, C$ nằm trên trục hoành $Ox$ ($y = 0$) nên đường thẳng $BC$ trùng với trục $Ox$. Chân đường cao $D$ hạ từ $A(2; 4)$ xuống $Ox$ có tọa độ $D(2; 0)$, vậy $x_D = 2$.',
            pedagogicalTip: 'Khi $D(x_D; 0) \\in BC$, điều kiện $\\overrightarrow{AD} \\cdot \\overrightarrow{BC} = 0 \\Leftrightarrow (x_D - 2)\\cdot 6 + (-4)\\cdot 0 = 0 \\Leftrightarrow x_D = 2$.',
            points: 0.5,
          },
          {
            id: 'b11_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 11: Tìm góc giữa hai vectơ từ hệ thức tích vô hướng',
            prompt:
              'Cho hai vectơ đơn vị $\\overrightarrow{e_1}, \\overrightarrow{e_2}$ (có $|\\overrightarrow{e_1}| = |\\overrightarrow{e_2}| = 1$) thỏa mãn $|\\overrightarrow{e_1} + \\overrightarrow{e_2}| = 1$. Số đo góc giữa hai vectơ $\\overrightarrow{e_1}$ và $\\overrightarrow{e_2}$ bằng bao nhiêu độ?',
            acceptableAnswers: ['120'],
            explanation:
              'Bình phương hai vế: $|\\overrightarrow{e_1} + \\overrightarrow{e_2}|^2 = 1 \\Leftrightarrow 1 + 1 + 2\\cos(\\overrightarrow{e_1}, \\overrightarrow{e_2}) = 1 \\Leftrightarrow \\cos(\\overrightarrow{e_1}, \\overrightarrow{e_2}) = -\\frac{1}{2} \\Leftrightarrow (\\overrightarrow{e_1}, \\overrightarrow{e_2}) = 120^\\circ$.',
            pedagogicalTip: 'Bình phương vô hướng để tìm $\\cos(\\overrightarrow{e_1}, \\overrightarrow{e_2})$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b11_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 11: Tìm tọa độ trực tâm H của tam giác bằng tích vô hướng (Ví dụ 3 SBT trang 61)',
            problemStatement:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(-1; 2), B(3; 0), C(1; 4)$. Hãy tìm tọa độ trực tâm $H(x; y)$ của tam giác $ABC$.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b11_d1_s1',
                originalIndex: 1,
                content:
                  'Gọi $H(x; y)$ là trực tâm của tam giác $ABC$. Tính các vectơ $\\overrightarrow{BC} = (-2; 4), \\overrightarrow{AC} = (2; 2)$ và $\\overrightarrow{AH} = (x + 1; y - 2), \\overrightarrow{BH} = (x - 3; y)$.',
                roleDescription: 'Gọi tọa độ H(x; y) và tính tọa độ các vectơ liên quan',
              },
              {
                id: 'b11_d1_s2',
                originalIndex: 2,
                content:
                  'Vì $H$ là trực tâm của tam giác $ABC$ nên $AH \\perp BC$ và $BH \\perp AC$, tương đương với hệ tích vô hướng $\\begin{cases} \\overrightarrow{AH} \\cdot \\overrightarrow{BC} = 0 \\\\ \\overrightarrow{BH} \\cdot \\overrightarrow{AC} = 0 \\end{cases}$.',
                roleDescription: 'Thiết lập điều kiện trực tâm bằng tích vô hướng',
              },
              {
                id: 'b11_d1_s3',
                originalIndex: 3,
                content:
                  'Thay tọa độ vào hệ ta được $\\begin{cases} -2(x + 1) + 4(y - 2) = 0 \\\\ 2(x - 3) + 2y = 0 \\end{cases} \\Leftrightarrow \\begin{cases} -x + 2y = 5 \\\\ x + y = 3 \\end{cases}$.',
                roleDescription: 'Đưa về hệ phương trình bậc nhất hai ẩn x, y',
              },
              {
                id: 'b11_d1_s4',
                originalIndex: 4,
                content:
                  'Giải hệ phương trình ta tìm được $x = \\frac{1}{3}, y = \\frac{8}{3}$. Vậy trực tâm của tam giác là $H\\left(\\frac{1}{3}; \\frac{8}{3}\\right)$.',
                roleDescription: 'Giải hệ và kết luận tọa độ trực tâm H',
              },
            ],
            pedagogicalTip:
              'Điều kiện cần và đủ để $H$ là trực tâm của $\\triangle ABC$ là $\\begin{cases} \\overrightarrow{AH} \\cdot \\overrightarrow{BC} = 0 \\\\ \\overrightarrow{BH} \\cdot \\overrightarrow{AC} = 0 \\end{cases}$.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn theo Ví dụ 3 trang 61 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-11-2',
        lessonId: 'bai-11',
        title: 'Đề ôn Bài 11 - Đề số 02',
        subtitle: 'Chứng minh vuông góc bằng tích vô hướng & ứng dụng tính công cơ học (SBT KNTT trang 62–66)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát các bài tập 4.28, 4.29, 4.30 (công của trọng lực trên mặt phẳng nghiêng) và các bài toán chứng minh vuông góc trong SBT Toán 10 KNTT.',
        part1: [
          {
            id: 'b11_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 11: Định lí côsin suy ra từ bình phương vô hướng',
            prompt:
              'Cho tam giác $ABC$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\frac{AB^2 + AC^2 - BC^2}{2}$' },
              { key: 'B', content: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\frac{AB^2 + BC^2 - AC^2}{2}$' },
              { key: 'C', content: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB^2 + AC^2 - BC^2$' },
              { key: 'D', content: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\frac{BC^2 - AB^2 - AC^2}{2}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Từ $BC^2 = (\\overrightarrow{AC} - \\overrightarrow{AB})^2 = AB^2 + AC^2 - 2\\overrightarrow{AB}\\cdot \\overrightarrow{AC} \\Rightarrow \\overrightarrow{AB}\\cdot \\overrightarrow{AC} = \\frac{AB^2 + AC^2 - BC^2}{2}$.',
            pedagogicalTip: 'Công thức này cho phép tính tích vô hướng của hai vectơ cạnh khi biết độ dài ba cạnh.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 11: Hệ thức hình chiếu trong tam giác vuông (Bài 4.28 SBT trang 62)',
            prompt:
              'Cho nửa đường tròn tâm $O$, đường kính $AB = 2R$. Gọi $M$ là một điểm thuộc nửa đường tròn và $I$ là một điểm thuộc đoạn $AM$ (Bài 4.28 SBT trang 62). Đẳng thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{AI} \\cdot \\overrightarrow{AB} = \\overrightarrow{AI} \\cdot \\overrightarrow{AM}$' },
              { key: 'B', content: '$\\overrightarrow{AI} \\cdot \\overrightarrow{AB} = \\overrightarrow{AM}^2$' },
              { key: 'C', content: '$\\overrightarrow{AI} \\cdot \\overrightarrow{AB} = 4R^2$' },
              { key: 'D', content: '$\\overrightarrow{AI} \\cdot \\overrightarrow{AB} = 0$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.28 SBT trang 113: Vì $M$ thuộc nửa đường tròn đường kính $AB$ nên $\\widehat{AMB} = 90^\\circ \\Rightarrow \\overrightarrow{MB} \\perp \\overrightarrow{AI}$. Suy ra $\\overrightarrow{AI} \\cdot \\overrightarrow{AB} = \\overrightarrow{AI} \\cdot (\\overrightarrow{AM} + \\overrightarrow{MB}) = \\overrightarrow{AI} \\cdot \\overrightarrow{AM}$.',
            pedagogicalTip: 'Tách $\\overrightarrow{AB} = \\overrightarrow{AM} + \\overrightarrow{MB}$ và sử dụng $\\overrightarrow{AI} \\cdot \\overrightarrow{MB} = 0$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 11: Tìm tập hợp điểm bằng tích vô hướng (Bài 4.29 SBT trang 62)',
            prompt:
              'Cho hai điểm cố định $A, B$ phân biệt. Tập hợp các điểm $M$ trong mặt phẳng thỏa mãn $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ là:',
            options: [
              { key: 'A', content: 'Đường tròn đường kính $AB$.' },
              { key: 'B', content: 'Đường trung trực của đoạn thẳng $AB$.' },
              { key: 'C', content: 'Đường thẳng $AB$.' },
              { key: 'D', content: 'Đường tròn tâm $A$ bán kính $AB$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0 \\Leftrightarrow MA \\perp MB$ (hoặc $M \\equiv A$ hay $M \\equiv B$). Vậy tập hợp điểm $M$ là đường tròn đường kính $AB$.',
            pedagogicalTip: 'Phương trình $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ là phương trình vectơ của đường tròn đường kính $AB$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 11: Ứng dụng tính công cơ học (Bài 4.30 SBT trang 62)',
            prompt:
              'Một lực $\\overrightarrow{F}$ không đổi có độ lớn $50\\text{ N}$ tác dụng lên một vật làm vật di chuyển một đoạn thẳng $AB = 10\\text{ m}$. Biết hướng của lực $\\overrightarrow{F}$ hợp với hướng chuyển động $\\overrightarrow{AB}$ một góc $60^\\circ$. Công $A = \\overrightarrow{F} \\cdot \\overrightarrow{AB}$ sinh bởi lực $\\overrightarrow{F}$ bằng:',
            options: [
              { key: 'A', content: '$250\\text{ J}$' },
              { key: 'B', content: '$500\\text{ J}$' },
              { key: 'C', content: '$250\\sqrt{3}\\text{ J}$' },
              { key: 'D', content: '$-250\\text{ J}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng công thức công cơ học: $A = \\overrightarrow{F} \\cdot \\overrightarrow{AB} = |\\overrightarrow{F}| \\cdot AB \\cdot \\cos 60^\\circ = 50 \\cdot 10 \\cdot 0{,}5 = 250\\text{ J}$.',
            pedagogicalTip: 'Công cơ học $A$ chính là tích vô hướng của vectơ lực $\\overrightarrow{F}$ và vectơ độ dịch chuyển $\\overrightarrow{d}$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 11: Công của trọng lực khi xe lên dốc (Bài 4.30 SBT trang 62)',
            prompt:
              'Một chiếc xe ô tô có khối lượng $m = 2{,}5\\text{ tấn} = 2500\\text{ kg}$ đi từ chân dốc lên đỉnh một con dốc dài $50\\text{ m}$ nghiêng góc $15^\\circ$ so với phương ngang. Lấy $g = 10\\text{ m/s}^2$ (Bài 4.30 SBT trang 62). Góc giữa vectơ trọng lực $\\overrightarrow{P}$ (hướng thẳng đứng xuống dưới) và vectơ độ dịch chuyển $\\overrightarrow{AB}$ (hướng lên theo mặt dốc) bằng:',
            options: [
              { key: 'A', content: '$105^\\circ$' },
              { key: 'B', content: '$75^\\circ$' },
              { key: 'C', content: '$15^\\circ$' },
              { key: 'D', content: '$165^\\circ$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.30 SBT trang 113: Phương thẳng đứng hướng xuống tạo với phương ngang góc $90^\\circ$, còn mặt dốc hướng lên tạo với phương ngang góc $15^\\circ$, nên góc $(\\overrightarrow{P}, \\overrightarrow{AB}) = 90^\\circ + 15^\\circ = 105^\\circ$.',
            pedagogicalTip: 'Khi vật đi lên dốc góc $\\alpha$, góc giữa trọng lực $\\overrightarrow{P}$ và độ dịch chuyển $\\overrightarrow{AB}$ là góc tù $90^\\circ + \\alpha$ (công cản $A < 0$).',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 11: Tìm điều kiện hai đường trung tuyến vuông góc bằng tích vô hướng',
            prompt:
              'Cho hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ vuông góc với nhau, biết $|\\overrightarrow{a}| = 2$ và $|\\overrightarrow{b}| = 3$. Giá trị của tích vô hướng $(2\\overrightarrow{a} - \\overrightarrow{b}) \\cdot (\\overrightarrow{a} + 2\\overrightarrow{b})$ bằng:',
            options: [
              { key: 'A', content: '$-10$' },
              { key: 'B', content: '$26$' },
              { key: 'C', content: '$-5$' },
              { key: 'D', content: '$10$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khai triển và dùng $\\overrightarrow{a} \\cdot \\overrightarrow{b} = 0$: $(2\\overrightarrow{a} - \\overrightarrow{b}) \\cdot (\\overrightarrow{a} + 2\\overrightarrow{b}) = 2\\overrightarrow{a}^2 + 3\\overrightarrow{a}\\cdot \\overrightarrow{b} - 2\\overrightarrow{b}^2 = 2\\cdot 2^2 + 0 - 2\\cdot 3^2 = 8 - 18 = -10$.',
            pedagogicalTip: 'Nhân phân phối như đa thức thông thường và thay $\\overrightarrow{a} \\cdot \\overrightarrow{b} = 0$, $\\overrightarrow{a}^2 = |\\overrightarrow{a}|^2$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 11: Chứng minh vuông góc trong hình vuông',
            prompt:
              'Cho hình vuông $ABCD$ cạnh $a$. Gọi $M$ là trung điểm của $AB$ và $N$ là trung điểm của $BC$. Tích vô hướng $\\overrightarrow{DM} \\cdot \\overrightarrow{AN}$ bằng:',
            options: [
              { key: 'A', content: '$0$' },
              { key: 'B', content: '$\\frac{a^2}{2}$' },
              { key: 'C', content: '$-\\frac{a^2}{2}$' },
              { key: 'D', content: '$a^2$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Biểu diễn qua hai vectơ vuông góc $\\overrightarrow{AB}, \\overrightarrow{AD}$: $\\overrightarrow{DM} = \\frac{1}{2}\\overrightarrow{AB} - \\overrightarrow{AD}$ và $\\overrightarrow{AN} = \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AD}$. Khi đó $\\overrightarrow{DM} \\cdot \\overrightarrow{AN} = \\frac{1}{2}\\overrightarrow{AB}^2 - \\frac{1}{2}\\overrightarrow{AD}^2 = \\frac{1}{2}a^2 - \\frac{1}{2}a^2 = 0$ (tức là $DM \\perp AN$).',
            pedagogicalTip: 'Phân tích các vectơ cần chứng minh vuông góc theo hai vectơ cạnh vuông góc $\\overrightarrow{AB}$ và $\\overrightarrow{AD}$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 11: Hệ thức Euler cho bốn điểm bất kì',
            prompt:
              'Với bốn điểm $A, B, C, D$ bất kì trong mặt phẳng, tổng $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} + \\overrightarrow{BC} \\cdot \\overrightarrow{AD} + \\overrightarrow{CA} \\cdot \\overrightarrow{BD}$ luôn bằng:',
            options: [
              { key: 'A', content: '$0$' },
              { key: 'B', content: '$1$' },
              { key: 'C', content: '$AB^2 + CD^2$' },
              { key: 'D', content: '$2(\\overrightarrow{AB} \\cdot \\overrightarrow{CD})$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Thay $\\overrightarrow{CD} = \\overrightarrow{AD} - \\overrightarrow{AC}$ và $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB}$, rút gọn ta được tổng bằng $0$ (định lí ba đường cao đồng quy tại trực tâm).',
            pedagogicalTip: 'Hệ thức $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} + \\overrightarrow{BC} \\cdot \\overrightarrow{AD} + \\overrightarrow{CA} \\cdot \\overrightarrow{BD} = 0$ chứng minh ba đường cao của tam giác đồng quy.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b11_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 11: Tìm tập hợp điểm nhờ tích vô hướng (Bài 4.29 SBT trang 62)',
            prompt:
              'Cho đoạn thẳng $AB$ có độ dài $AB = 6$ và trung điểm $I$. Xét tính đúng sai của các khẳng định sau đối với điểm $M$ trong mặt phẳng:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Với mọi điểm $M$, ta luôn có $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = MI^2 - \\frac{AB^2}{4} = MI^2 - 9$.',
                isCorrect: true,
                explanation:
                  '$\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) \\cdot (\\overrightarrow{MI} + \\overrightarrow{IB}) = (\\overrightarrow{MI} + \\overrightarrow{IA}) \\cdot (\\overrightarrow{MI} - \\overrightarrow{IA}) = MI^2 - IA^2 = MI^2 - 9$ (Bài 4.29 SBT trang 113).',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tập hợp các điểm $M$ thỏa mãn $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 16$ là đường tròn tâm $I$, bán kính $R = 5$.',
                isCorrect: true,
                explanation: '$MI^2 - 9 = 16 \\Leftrightarrow MI^2 = 25 \\Leftrightarrow MI = 5$, tức là đường tròn tâm $I$, bán kính $R = 5$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giá trị nhỏ nhất của tích vô hướng $\\overrightarrow{MA} \\cdot \\overrightarrow{MB}$ bằng $0$.',
                isCorrect: false,
                explanation: 'Vì $MI^2 \\ge 0$ nên $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = MI^2 - 9 \\ge -9$ (đạt giá trị nhỏ nhất bằng $-9$ khi $M \\equiv I$).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Với mọi điểm $M$, ta có $MA^2 - MB^2 = 2\\overrightarrow{AB} \\cdot \\overrightarrow{IM}$.',
                isCorrect: true,
                explanation:
                  '$MA^2 - MB^2 = (\\overrightarrow{MA} - \\overrightarrow{MB}) \\cdot (\\overrightarrow{MA} + \\overrightarrow{MB}) = \\overrightarrow{BA} \\cdot (2\\overrightarrow{MI}) = (-\\overrightarrow{AB}) \\cdot (-2\\overrightarrow{IM}) = 2\\overrightarrow{AB} \\cdot \\overrightarrow{IM}$ (Bài 4.29b SBT trang 113).',
              },
            ],
            pedagogicalTip: 'Hệ thức $MA^2 - MB^2 = 2\\overrightarrow{AB} \\cdot \\overrightarrow{IM}$ dùng để tìm tập hợp điểm có hiệu bình phương khoảng cách đến $A, B$ không đổi.',
          },
          {
            id: 'b11_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 11: Tìm tâm đường tròn ngoại tiếp tam giác trong Oxy',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 4), B(4; 1), C(1; 1)$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Hai vectơ $\\overrightarrow{CA} = (0; 3)$ và $\\overrightarrow{CB} = (3; 0)$ vuông góc với nhau.',
                isCorrect: true,
                explanation: '$\\overrightarrow{CA} \\cdot \\overrightarrow{CB} = 0\\cdot 3 + 3\\cdot 0 = 0 \\Rightarrow CA \\perp CB$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tam giác $ABC$ vuông cân tại $C$.',
                isCorrect: true,
                explanation: '$CA = CB = 3$ và $CA \\perp CB$ nên $\\triangle ABC$ vuông cân tại $C$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Tâm đường tròn ngoại tiếp $I$ của tam giác $ABC$ có tọa độ là $I\\left(\\frac{5}{2}; \\frac{5}{2}\\right)$.',
                isCorrect: true,
                explanation: 'Tâm ngoại tiếp là trung điểm của cạnh huyền $AB$: $I\\left(\\frac{1+4}{2}; \\frac{4+1}{2}\\right) = I\\left(\\frac{5}{2}; \\frac{5}{2}\\right)$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Bán kính đường tròn ngoại tiếp tam giác $ABC$ bằng $3\\sqrt{2}$.',
                isCorrect: false,
                explanation: 'Cạnh huyền $AB = 3\\sqrt{2}$ nên bán kính đường tròn ngoại tiếp là $R = \\frac{AB}{2} = \\frac{3\\sqrt{2}}{2}$.',
              },
            ],
            pedagogicalTip: 'Đừng nhầm đường kính $AB = 3\\sqrt{2}$ với bán kính $R = \\frac{AB}{2}$.',
          },
        ],
        part3: [
          {
            id: 'b11_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 11: Giá trị nhỏ nhất của tích vô hướng MA.MB (Bài 4.29 SBT trang 62)',
            prompt:
              'Cho đoạn thẳng $AB$ có độ dài $AB = 8$. Khi điểm $M$ thay đổi trong mặt phẳng, giá trị nhỏ nhất của tích vô hướng $\\overrightarrow{MA} \\cdot \\overrightarrow{MB}$ bằng bao nhiêu?',
            acceptableAnswers: ['-16'],
            explanation:
              'Gọi $I$ là trung điểm $AB$, ta có $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = MI^2 - IA^2 = MI^2 - 4^2 = MI^2 - 16 \\ge -16$ (đạt được khi $M \\equiv I$).',
            pedagogicalTip: 'Giá trị nhỏ nhất của $\\overrightarrow{MA} \\cdot \\overrightarrow{MB}$ luôn bằng $-\\frac{AB^2}{4}$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 11: Tính độ dài phân giác hoặc trung tuyến bằng bình phương vô hướng',
            prompt:
              'Cho hai vectơ $\\overrightarrow{a}, \\overrightarrow{b}$ thỏa mãn $|\\overrightarrow{a}| = 4, |\\overrightarrow{b}| = 6$ và $|\\overrightarrow{a} + \\overrightarrow{b}| = 8$. Tính giá trị của tích vô hướng $\\overrightarrow{a} \\cdot \\overrightarrow{b}$.',
            acceptableAnswers: ['6'],
            explanation:
              'Từ $|\\overrightarrow{a} + \\overrightarrow{b}|^2 = |\\overrightarrow{a}|^2 + |\\overrightarrow{b}|^2 + 2\\overrightarrow{a}\\cdot \\overrightarrow{b} \\Rightarrow 64 = 16 + 36 + 2\\overrightarrow{a}\\cdot \\overrightarrow{b} \\Rightarrow \\overrightarrow{a}\\cdot \\overrightarrow{b} = 6$.',
            pedagogicalTip: 'Dùng hằng đẳng thức $|\\overrightarrow{a} + \\overrightarrow{b}|^2 = |\\overrightarrow{a}|^2 + |\\overrightarrow{b}|^2 + 2\\overrightarrow{a}\\cdot \\overrightarrow{b}$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 11: Tìm điểm trên Ox nhìn đoạn AB dưới một góc vuông',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(1; 2)$ và $B(6; 2)$. Có bao nhiêu điểm $M$ thuộc trục hoành $Ox$ sao cho tam giác $MAB$ vuông tại $M$?',
            acceptableAnswers: ['2'],
            explanation:
              'Với $M(x; 0) \\in Ox$, ta có $\\overrightarrow{MA} = (1 - x; 2)$ và $\\overrightarrow{MB} = (6 - x; 2)$. Điều kiện $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0 \\Leftrightarrow (1 - x)(6 - x) + 4 = 0 \\Leftrightarrow x^2 - 7x + 10 = 0 \\Leftrightarrow x = 2$ hoặc $x = 5$. Vậy có $2$ điểm $M(2; 0)$ và $M(5; 0)$.',
            pedagogicalTip: 'Thiết lập phương trình $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ theo ẩn $x$.',
            points: 0.5,
          },
          {
            id: 'b11_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 11: Tính công cơ học khi kéo vật',
            prompt:
              'Một người kéo một thùng hàng trượt trên sàn ngang một đoạn $20\\text{ m}$ bằng một sợi dây hợp với phương ngang một góc $60^\\circ$. Biết lực kéo không đổi có độ lớn $80\\text{ N}$. Tính công của lực kéo đó (đơn vị: Jun).',
            acceptableAnswers: ['800'],
            explanation:
              'Công của lực kéo là $A = F \\cdot s \\cdot \\cos 60^\\circ = 80 \\cdot 20 \\cdot 0{,}5 = 800\\text{ J}$.',
            pedagogicalTip: '$A = |\\overrightarrow{F}| \\cdot |\\overrightarrow{s}| \\cdot \\cos(\\overrightarrow{F}, \\overrightarrow{s})$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b11_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 11: Chứng minh hai đường thẳng vuông góc bằng tích vô hướng (Bài 4.28 SBT trang 62)',
            problemStatement:
              'Cho nửa đường tròn tâm $O$ có đường kính $AB = 2R$. Gọi $M, N$ là hai điểm thuộc nửa đường tròn sao cho hai dây cung $AM$ và $BN$ cắt nhau tại $I$. Chứng minh rằng $\\overrightarrow{AI} \\cdot \\overrightarrow{AM} + \\overrightarrow{BI} \\cdot \\overrightarrow{BN} = 4R^2$.',
            conclusionTarget:
              'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b11_d2_s1',
                originalIndex: 1,
                content:
                  'Vì $M, N$ thuộc nửa đường tròn đường kính $AB$ nên $\\widehat{AMB} = \\widehat{ANB} = 90^\\circ$, suy ra $BM \\perp AI$ (hay $\\overrightarrow{AI} \\cdot \\overrightarrow{MB} = 0$) và $AN \\perp BI$ (hay $\\overrightarrow{BI} \\cdot \\overrightarrow{NA} = 0$).',
                roleDescription: 'Dùng tính chất góc nội tiếp chắn nửa đường tròn',
              },
              {
                id: 'b11_d2_s2',
                originalIndex: 2,
                content:
                  'Ta có $\\overrightarrow{AI} \\cdot \\overrightarrow{AB} = \\overrightarrow{AI} \\cdot (\\overrightarrow{AM} + \\overrightarrow{MB}) = \\overrightarrow{AI} \\cdot \\overrightarrow{AM} + \\overrightarrow{AI} \\cdot \\overrightarrow{MB} = \\overrightarrow{AI} \\cdot \\overrightarrow{AM}$.',
                roleDescription: 'Chứng minh AI.AM = AI.AB',
              },
              {
                id: 'b11_d2_s3',
                originalIndex: 3,
                content:
                  'Tương tự, $\\overrightarrow{BI} \\cdot \\overrightarrow{BA} = \\overrightarrow{BI} \\cdot (\\overrightarrow{BN} + \\overrightarrow{NA}) = \\overrightarrow{BI} \\cdot \\overrightarrow{BN} + \\overrightarrow{BI} \\cdot \\overrightarrow{NA} = \\overrightarrow{BI} \\cdot \\overrightarrow{BN}$.',
                roleDescription: 'Chứng minh BI.BN = BI.BA',
              },
              {
                id: 'b11_d2_s4',
                originalIndex: 4,
                content:
                  'Cộng vế theo vế hai đẳng thức trên: $\\overrightarrow{AI} \\cdot \\overrightarrow{AM} + \\overrightarrow{BI} \\cdot \\overrightarrow{BN} = \\overrightarrow{AI} \\cdot \\overrightarrow{AB} + \\overrightarrow{BI} \\cdot \\overrightarrow{BA} = (\\overrightarrow{AI} - \\overrightarrow{BI}) \\cdot \\overrightarrow{AB} = \\overrightarrow{AB}^2 = (2R)^2 = 4R^2$.',
                roleDescription: 'Cộng hai biểu thức, đặt nhân tử chung AB và kết luận',
              },
            ],
            pedagogicalTip:
              'Phép biến đổi $\\overrightarrow{AI} \\cdot \\overrightarrow{AM} = \\overrightarrow{AI} \\cdot \\overrightarrow{AB}$ giúp đưa hai tích vô hướng rời rạc về chung nhân tử $\\overrightarrow{AB}$.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 4.28 trang 113 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
];
