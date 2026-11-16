import { LessonCatalogItem } from '../../types/exam';
import {
  buildFullLessonExam,
  tikzCircleWithTangent,
  tikzEllipseDiagram,
  tikzParabolaConic,
} from './lessonExamBuilder';

export const CHAPTER_7_LESSONS_B: LessonCatalogItem[] = [
  {
    id: 'bai-21',
    lessonNumber: 21,
    name: 'Bài 21',
    topicTitle: 'Đường tròn trong mặt phẳng toạ độ',
    chapter: 'Chương VII: Phương pháp toạ độ trong mặt phẳng',
    keySummary:
      'Thiết lập phương trình đường tròn $(x - a)^2 + (y - b)^2 = R^2$ khi biết tâm $I(a; b)$ và bán kính $R$, hoặc biết ba điểm thuộc đường tròn; nhận diện phương trình dạng $x^2 + y^2 - 2ax - 2by + c = 0$ (điều kiện $a^2 + b^2 - c > 0$); viết phương trình tiếp tuyến của đường tròn tại điểm $M_0(x_0; y_0)$ và giải bài toán thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-21-1',
        lessonId: 'bai-21',
        title: 'Đề ôn Bài 21 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–4, Luyện tập 1–4, Vận dụng 1–2 và Bài tập 7.13–7.17 (SGK Toán 10 Tập 2, trang 43–47)',
        description:
          'Đề ôn tập số 01 của Bài 21 (Đường tròn trong mặt phẳng toạ độ): Tâm và bán kính đường tròn, lập phương trình đường tròn, phương trình tiếp tuyến và ứng dụng thực tế.',
        mcqs: [
          {
            topic: 'Bài 21: Xác định tâm và bán kính từ phương trình chính tắc (Tương tự HĐ1)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, đường tròn $(C): (x - 3)^2 + (y + 2)^2 = 16$ có tâm $I$ và bán kính $R$ là:',
            correct: '$I(3; -2),\\ R = 4$.',
            wrongs: [
              '$I(-3; 2),\\ R = 4$.',
              '$I(3; -2),\\ R = 16$.',
              '$I(-3; 2),\\ R = 16$.',
            ],
            explanation:
              'Phương trình $(x - a)^2 + (y - b)^2 = R^2$ có tâm $I(a; b) = (3; -2)$ và bán kính $R = \\sqrt{16} = 4$.',
          },
          {
            topic: 'Bài 21: Lập phương trình đường tròn biết tâm và bán kính',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình đường tròn có tâm $I(-1; 4)$ và bán kính $R = 5$ là:',
            correct: '$(x + 1)^2 + (y - 4)^2 = 25$.',
            wrongs: [
              '$(x - 1)^2 + (y + 4)^2 = 25$.',
              '$(x + 1)^2 + (y - 4)^2 = 5$.',
              '$(x - 1)^2 + (y - 4)^2 = 25$.',
            ],
            explanation:
              'Đường tròn tâm $I(-1; 4)$ và bán kính $R = 5$ có phương trình $(x - (-1))^2 + (y - 4)^2 = 5^2 \\Leftrightarrow (x + 1)^2 + (y - 4)^2 = 25$.',
          },
          {
            topic: 'Bài 21: Nhận diện phương trình đường tròn dạng khai triển (Tương tự Ví dụ 1 & Bài 7.13)',
            prompt:
              'Trong các phương trình sau, phương trình nào là phương trình của một đường tròn trong mặt phẳng $Oxy$?',
            correct: '$x^2 + y^2 - 4x + 6y - 3 = 0$.',
            wrongs: [
              '$x^2 + y^2 - 2x + 4y + 9 = 0$.',
              '$2x^2 + y^2 - 4x - 2y - 1 = 0$.',
              '$x^2 - y^2 - 6x + 2y - 5 = 0$.',
            ],
            explanation:
              'Xét $x^2 + y^2 - 4x + 6y - 3 = 0$ có $a = 2, b = -3, c = -3$, thoả mãn $a^2 + b^2 - c = 4 + 9 - (-3) = 16 > 0$, nên là phương trình đường tròn bán kính $R = 4$.',
          },
          {
            topic: 'Bài 21: Tìm tâm và bán kính từ phương trình khai triển (Tương tự Luyện tập 1)',
            prompt:
              'Trong mặt phẳng $Oxy$, đường tròn $(C): x^2 + y^2 + 6x - 8y = 0$ có tâm $I$ và bán kính $R$ là:',
            correct: '$I(-3; 4),\\ R = 5$.',
            wrongs: [
              '$I(3; -4),\\ R = 5$.',
              '$I(-3; 4),\\ R = 25$.',
              '$I(6; -8),\\ R = 10$.',
            ],
            explanation:
              'Từ $x^2 + y^2 - 2ax - 2by + c = 0$, ta có $a = -3, b = 4, c = 0 \\Rightarrow$ tâm $I(-3; 4)$ và bán kính $R = \\sqrt{(-3)^2 + 4^2 - 0} = 5$.',
          },
          {
            topic: 'Bài 21: Lập phương trình đường tròn có đường kính AB (Tương tự Luyện tập 2)',
            prompt:
              'Trong mặt phẳng $Oxy$, cho hai điểm $A(1; 2)$ và $B(5; 4)$. Phương trình đường tròn có đường kính $AB$ là:',
            correct: '$(x - 3)^2 + (y - 3)^2 = 5$.',
            wrongs: [
              '$(x - 3)^2 + (y - 3)^2 = 20$.',
              '$(x + 3)^2 + (y + 3)^2 = 5$.',
              '$(x - 2)^2 + (y - 1)^2 = 5$.',
            ],
            explanation:
              'Tâm $I$ là trung điểm của $AB \\Rightarrow I(3; 3)$. Bán kính $R = IA = \\sqrt{(1 - 3)^2 + (2 - 3)^2} = \\sqrt{5} \\Rightarrow R^2 = 5$. Phương trình là $(x - 3)^2 + (y - 3)^2 = 5$.',
          },
          {
            topic: 'Bài 21: Lập phương trình đường tròn biết tâm và điểm đi qua (Tương tự Bài 7.14a)',
            prompt:
              'Phương trình đường tròn có tâm $I(2; -1)$ và đi qua điểm $A(5; 3)$ là:',
            correct: '$(x - 2)^2 + (y + 1)^2 = 25$.',
            wrongs: [
              '$(x - 2)^2 + (y + 1)^2 = 5$.',
              '$(x + 2)^2 + (y - 1)^2 = 25$.',
              '$(x - 5)^2 + (y - 3)^2 = 25$.',
            ],
            explanation:
              'Bán kính đường tròn là $R = IA = \\sqrt{(5 - 2)^2 + (3 - (-1))^2} = \\sqrt{9 + 16} = 5$. Phương trình là $(x - 2)^2 + (y + 1)^2 = 25$.',
          },
          {
            topic: 'Bài 21: Lập phương trình đường tròn tiếp xúc với đường thẳng (Tương tự Bài 7.14b)',
            prompt:
              'Đường tròn có tâm $I(1; 2)$ và tiếp xúc với đường thẳng $\\Delta: 3x - 4y + 15 = 0$ có phương trình là:',
            correct: '$(x - 1)^2 + (y - 2)^2 = 4$.',
            wrongs: [
              '$(x - 1)^2 + (y - 2)^2 = 2$.',
              '$(x + 1)^2 + (y + 2)^2 = 4$.',
              '$(x - 1)^2 + (y - 2)^2 = 16$.',
            ],
            explanation:
              'Bán kính $R = d(I, \\Delta) = \\frac{|3 \\cdot 1 - 4 \\cdot 2 + 15|}{\\sqrt{3^2 + (-4)^2}} = \\frac{10}{5} = 2 \\Rightarrow R^2 = 4$. Phương trình là $(x - 1)^2 + (y - 2)^2 = 4$.',
          },
          {
            topic: 'Bài 21: Vectơ pháp tuyến của tiếp tuyến tại một điểm trên đường tròn (Tương tự HĐ3)',
            prompt:
              'Cho đường tròn $(C)$ có tâm $I(1; -2)$ và điểm $M(4; 2)$ thuộc $(C)$. Tiếp tuyến của $(C)$ tại điểm $M$ có một vectơ pháp tuyến là:',
            correct: '$\\overrightarrow{IM} = (3; 4)$.',
            wrongs: [
              '$\\vec{n} = (4; -3)$.',
              '$\\vec{n} = (1; -2)$.',
              '$\\vec{n} = (4; 2)$.',
            ],
            explanation:
              'Tiếp tuyến của đường tròn tại tiếp điểm $M$ vuông góc với bán kính $IM$, nên nhận $\\overrightarrow{IM} = (4 - 1; 2 - (-2)) = (3; 4)$ làm một vectơ pháp tuyến.',
            tikzCode: tikzCircleWithTangent(1, -2, 5, 'M(4;2)'),
          },
          {
            topic: 'Bài 21: Lập phương trình tiếp tuyến tại một điểm thuộc đường tròn (Tương tự Ví dụ 4 & Luyện tập 4)',
            prompt:
              'Trong mặt phẳng $Oxy$, cho đường tròn $(C): (x - 1)^2 + (y - 2)^2 = 10$. Phương trình tiếp tuyến của $(C)$ tại điểm $M(4; 3)$ là:',
            correct: '$3x + y - 15 = 0$.',
            wrongs: [
              '$3x - y - 9 = 0$.',
              '$x + 3y - 13 = 0$.',
              '$3x + y + 15 = 0$.',
            ],
            explanation:
              'Đường tròn có tâm $I(1; 2)$. Tiếp tuyến tại $M(4; 3)$ nhận $\\overrightarrow{IM} = (3; 1)$ làm VTPT nên có phương trình $3(x - 4) + 1(y - 3) = 0 \\Leftrightarrow 3x + y - 15 = 0$.',
          },
          {
            topic: 'Bài 21: Tìm điều kiện tham số m để phương trình là phương trình đường tròn',
            prompt:
              'Phương trình $x^2 + y^2 - 2x + 4y + m = 0$ là phương trình của một đường tròn khi và chỉ khi:',
            correct: '$m < 5$.',
            wrongs: ['$m > 5$.', '$m \\le 5$.', '$m < 20$.'],
            explanation:
              'Ta có $a = 1, b = -2, c = m$. Điều kiện là $a^2 + b^2 - c > 0 \\Leftrightarrow 1^2 + (-2)^2 - m > 0 \\Leftrightarrow m < 5$.',
          },
          {
            topic: 'Bài 21: Vị trí của một điểm đối với đường tròn',
            prompt:
              'Trong mặt phẳng $Oxy$, cho đường tròn $(C): (x - 2)^2 + (y - 1)^2 = 9$ và điểm $A(4; 2)$. Khẳng định nào sau đây là ĐÚNG?',
            correct: 'Điểm $A$ nằm bên trong đường tròn $(C)$.',
            wrongs: [
              'Điểm $A$ nằm trên đường tròn $(C)$.',
              'Điểm $A$ nằm bên ngoài đường tròn $(C)$.',
              'Điểm $A$ trùng với tâm của đường tròn $(C)$.',
            ],
            explanation:
              'Đường tròn có tâm $I(2; 1)$ và bán kính $R = 3$. Ta có $IA = \\sqrt{(4 - 2)^2 + (2 - 1)^2} = \\sqrt{5} < 3 = R$, nên điểm $A$ nằm bên trong $(C)$.',
          },
          {
            topic: 'Bài 21: Ứng dụng phương trình đường tròn trong mô hình guồng nước (Tương tự Bài 7.17)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$ (tia $Ox$ trùng mặt nước, tia $Oy$ hướng thẳng đứng lên trên, đơn vị: mét), một chiếc cọn nước hình tròn có bán kính $3\\text{ m}$ và trục quay đặt tại điểm $I(0; 2,5)$. Phương trình đường tròn mô tả vành ngoài của cọn nước là:',
            correct: '$x^2 + (y - 2,5)^2 = 9$.',
            wrongs: [
              '$x^2 + (y + 2,5)^2 = 9$.',
              '$(x - 2,5)^2 + y^2 = 9$.',
              '$x^2 + (y - 2,5)^2 = 3$.',
            ],
            explanation:
              'Đường tròn tâm $I(0; 2,5)$, bán kính $R = 3$ có phương trình $(x - 0)^2 + (y - 2,5)^2 = 3^2 \\Leftrightarrow x^2 + (y - 2,5)^2 = 9$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 21: Phân tích đường tròn và tiếp tuyến từ phương trình khai triển (Tương tự Bài 7.13 & 7.15)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho đường tròn $(C): x^2 + y^2 - 4x + 2y - 20 = 0$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzCircleWithTangent(2, -1, 5, 'M(5;3)'),
            statements: [
              {
                statement: 'Đường tròn $(C)$ có tâm là $I(2; -1)$ và bán kính $R = 5$.',
                isCorrect: true,
                explanation:
                  'Ta có $a = 2,\\ b = -1,\\ c = -20 \\Rightarrow I(2; -1)$ và $R = \\sqrt{2^2 + (-1)^2 - (-20)} = \\sqrt{25} = 5$.',
              },
              {
                statement: 'Điểm $M(5; 3)$ thuộc đường tròn $(C)$.',
                isCorrect: true,
                explanation:
                  'Thay $M(5; 3)$ vào phương trình $(C)$: $5^2 + 3^2 - 4(5) + 2(3) - 20 = 25 + 9 - 20 + 6 - 20 = 0$, nên $M \\in (C)$.',
              },
              {
                statement: 'Tiếp tuyến $\\Delta$ của đường tròn $(C)$ tại điểm $M(5; 3)$ có phương trình là $3x + 4y - 27 = 0$.',
                isCorrect: true,
                explanation:
                  'Ta có $\\overrightarrow{IM} = (3; 4)$ là VTPT của tiếp tuyến tại $M(5; 3)$. Phương trình tiếp tuyến là $3(x - 5) + 4(y - 3) = 0 \\Leftrightarrow 3x + 4y - 27 = 0$.',
              },
              {
                statement: 'Đường thẳng $d: 4x - 3y + 14 = 0$ không có điểm chung với đường tròn $(C)$.',
                isCorrect: false,
                explanation:
                  'Khoảng cách từ tâm $I(2; -1)$ đến $d$ là $d(I, d) = \\frac{|4(2) - 3(-1) + 14|}{5} = \\frac{25}{5} = 5 = R$, nên $d$ tiếp xúc với $(C)$ (có $1$ điểm chung).',
              },
            ],
          },
          {
            topic: 'Bài 21: Lập phương trình đường tròn ngoại tiếp tam giác đi qua 3 điểm (Tương tự Ví dụ 3)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có ba đỉnh $A(1; 4),\\ B(5; 2)$ và $C(1; -2)$. Gọi $(C)$ là đường tròn ngoại tiếp tam giác $ABC$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Giả sử phương trình đường tròn $(C)$ có dạng $x^2 + y^2 - 2ax - 2by + c = 0$, khi thay toạ độ điểm $A(1; 4)$ vào ta được $-2a - 8b + c = -17$.',
                isCorrect: true,
                explanation:
                  'Thay $x = 1, y = 4$ vào phương trình: $1^2 + 4^2 - 2a(1) - 2b(4) + c = 0 \\Leftrightarrow -2a - 8b + c = -17$.',
              },
              {
                statement: 'Tâm $I$ của đường tròn ngoại tiếp tam giác $ABC$ có toạ độ là $I(2; 1)$.',
                isCorrect: true,
                explanation:
                  'Kiểm tra khoảng cách từ $I(2; 1)$: $IA^2 = (1 - 2)^2 + (4 - 1)^2 = 10$, $IB^2 = (5 - 2)^2 + (2 - 1)^2 = 10$, $IC^2 = (1 - 2)^2 + (-2 - 1)^2 = 10$, nên $I(2; 1)$ cách đều $A, B, C$.',
              },
              {
                statement: 'Bán kính của đường tròn ngoại tiếp tam giác $ABC$ bằng $10$.',
                isCorrect: false,
                explanation:
                  'Vì $IA^2 = 10$ nên bán kính của đường tròn là $R = \\sqrt{10}$ (không phải $10$).',
              },
              {
                statement: 'Phương trình chính tắc của đường tròn $(C)$ là $(x - 2)^2 + (y - 1)^2 = 10$.',
                isCorrect: true,
                explanation:
                  'Đường tròn tâm $I(2; 1)$, bán kính $R = \\sqrt{10}$ có phương trình $(x - 2)^2 + (y - 1)^2 = 10$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 21: Tính bán kính đường tròn từ phương trình khai triển',
            prompt:
              'Trong mặt phẳng $Oxy$, tính bán kính $R$ của đường tròn $(C): x^2 + y^2 - 8x + 6y - 11 = 0$.',
            answers: ['6'],
            explanation:
              'Ta có $a = 4,\\ b = -3,\\ c = -11$. Bán kính $R = \\sqrt{4^2 + (-3)^2 - (-11)} = \\sqrt{16 + 9 + 11} = \\sqrt{36} = 6$.',
          },
          {
            topic: 'Bài 21: Tìm số giá trị nguyên dương của m để phương trình là đường tròn',
            prompt:
              'Có bao nhiêu giá trị nguyên dương của tham số $m$ để phương trình $x^2 + y^2 - 4x + 2y + m = 0$ là phương trình của một đường tròn?',
            answers: ['4'],
            explanation:
              'Điều kiện: $a^2 + b^2 - c > 0 \\Leftrightarrow 2^2 + (-1)^2 - m > 0 \\Leftrightarrow m < 5$. Vì $m$ nguyên dương nên $m \\in \\{1; 2; 3; 4\\}$, gồm $4$ giá trị.',
          },
          {
            topic: 'Bài 21: Khoảng cách từ gốc toạ độ đến tâm đường tròn',
            prompt:
              'Trong mặt phẳng $Oxy$, tính khoảng cách từ gốc toạ độ $O(0; 0)$ đến tâm $I$ của đường tròn $(C): (x + 6)^2 + (y - 8)^2 = 15$.',
            answers: ['10'],
            explanation:
              'Đường tròn $(C)$ có tâm $I(-6; 8)$. Khoảng cách $OI = \\sqrt{(-6)^2 + 8^2} = \\sqrt{100} = 10$.',
          },
          {
            topic: 'Bài 21: Tính độ cao thấp nhất của guồng nước so với mặt nước (Tương tự Bài 7.17)',
            prompt:
              'Một cọn nước hình tròn có bán kính $R = 3,2\\text{ m}$ và tâm trục quay đặt ở độ cao $2,5\\text{ m}$ phía trên mặt nước. Điểm thấp nhất của cọn nước ngập sâu dưới mặt nước bao nhiêu mét?',
            answers: ['0,7', '0.7'],
            explanation:
              'Điểm thấp nhất của đường tròn cách tâm $3,2\\text{ m}$ về phía dưới, nên ngập sâu dưới mặt nước một đoạn là $3,2 - 2,5 = 0,7\\text{ (m)}$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 21: Lập phương trình đường tròn đi qua ba điểm (Tương tự Ví dụ 3 & Luyện tập 3)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, lập phương trình đường tròn $(C)$ đi qua ba điểm $A(1; 4),\\ B(5; 2)$ và $C(1; -2)$.',
            conclusionTarget: 'Gọi dạng khai triển của $(C)$, lập hệ phương trình tìm $a, b, c$ và kết luận.',
            steps: [
              'Giả sử phương trình đường tròn $(C)$ có dạng $x^2 + y^2 - 2ax - 2by + c = 0$ (với $a^2 + b^2 - c > 0$).',
              'Thay toạ độ của $A(1; 4),\\ B(5; 2),\\ C(1; -2)$ vào phương trình, ta được hệ $\\begin{cases} 2a + 8b - c = 17 \\\\ 10a + 4b - c = 29 \\\\ 2a - 4b - c = 5 \\end{cases}$.',
              'Giải hệ phương trình bậc nhất ba ẩn trên, ta tìm được $a = 2,\\ b = 1,\\ c = -5$ (thoả mãn $2^2 + 1^2 - (-5) = 10 > 0$).',
              'Vậy phương trình đường tròn $(C)$ là $x^2 + y^2 - 4x - 2y - 5 = 0$, hay $(x - 2)^2 + (y - 1)^2 = 10$.',
            ],
            analysis:
              'Khi lập phương trình đường tròn đi qua 3 điểm, sử dụng dạng khai triển $x^2 + y^2 - 2ax - 2by + c = 0$ giúp đưa ngay về hệ phương trình tuyến tính 3 ẩn.',
          },
          {
            topic: 'Bài 21: Lập phương trình đường tròn có tâm thuộc đường thẳng và tiếp xúc với đường thẳng khác',
            problemStatement:
              'Lập phương trình đường tròn $(C)$ có tâm $I(2; -3)$ và tiếp xúc với đường thẳng $\\Delta: 4x - 3y + 8 = 0$.',
            conclusionTarget: 'Tính bán kính $R = d(I, \\Delta)$ và viết phương trình chính tắc của $(C)$.',
            steps: [
              'Vì đường tròn $(C)$ tiếp xúc với đường thẳng $\\Delta$ nên bán kính $R$ của $(C)$ bằng khoảng cách từ tâm $I(2; -3)$ đến $\\Delta$.',
              'Áp dụng công thức khoảng cách: $R = d(I, \\Delta) = \\frac{|4 \\cdot 2 - 3(-3) + 8|}{\\sqrt{4^2 + (-3)^2}}$.',
              'Thu gọn biểu thức, ta được $R = \\frac{|8 + 9 + 8|}{5} = \\frac{25}{5} = 5$.',
              'Vậy phương trình đường tròn $(C)$ là $(x - 2)^2 + (y + 3)^2 = 25$.',
            ],
            analysis:
              'Điều kiện tiếp xúc giữa đường tròn tâm $I$, bán kính $R$ và đường thẳng $\\Delta$ là $d(I, \\Delta) = R$.',
          },
          {
            topic: 'Bài 21: Viết phương trình tiếp tuyến của đường tròn tại điểm thuộc đường tròn (Tương tự Ví dụ 4)',
            problemStatement:
              'Trong mặt phẳng $Oxy$, cho đường tròn $(C): (x + 1)^2 + (y - 2)^2 = 13$. Lập phương trình tiếp tuyến $\\Delta$ của $(C)$ tại điểm $M(1; 5)$.',
            conclusionTarget: 'Tìm tâm $I$, vectơ pháp tuyến $\\overrightarrow{IM}$ và lập phương trình tiếp tuyến $\\Delta$.',
            steps: [
              'Đường tròn $(C)$ có tâm là $I(-1; 2)$ và điểm $M(1; 5)$ thuộc $(C)$ vì $(1 + 1)^2 + (5 - 2)^2 = 4 + 9 = 13$.',
              'Tiếp tuyến $\\Delta$ tại $M(1; 5)$ vuông góc với bán kính $IM$ nên nhận $\\overrightarrow{IM} = (1 - (-1); 5 - 2) = (2; 3)$ làm vectơ pháp tuyến.',
              'Phương trình tiếp tuyến $\\Delta$ đi qua $M(1; 5)$ là $2(x - 1) + 3(y - 5) = 0$.',
              'Thu gọn phương trình, ta được tiếp tuyến $\\Delta: 2x + 3y - 17 = 0$.',
            ],
            analysis:
              'Tính chất hình học cơ bản: tiếp tuyến tại $M$ luôn vuông góc với bán kính $IM$ tại tiếp điểm.',
          },
          {
            topic: 'Bài 21: Ứng dụng phương trình đường tròn xác định vùng ảnh hưởng (Tương tự Vận dụng 1 trang 45)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$ (đơn vị: km), một đài kiểm soát không lưu đặt tại vị trí $I(-2; 3)$ có phạm vi quét radar tối đa là $50\\text{ km}$. Một máy bay đang ở vị trí $M(30; 40)$. Viết phương trình đường tròn ranh giới vùng quét radar và xét xem đài kiểm soát có phát hiện được máy bay tại $M$ hay không.',
            conclusionTarget: 'Lập phương trình đường tròn và tính khoảng cách $IM$ để so sánh với $R = 50$.',
            steps: [
              'Ranh giới vùng quét radar là đường tròn $(C)$ có tâm $I(-2; 3)$ và bán kính $R = 50\\text{ (km)}$.',
              'Phương trình đường tròn $(C)$ là $(x + 2)^2 + (y - 3)^2 = 50^2 = 2500$.',
              'Khoảng cách từ đài kiểm soát $I(-2; 3)$ đến máy bay $M(30; 40)$ là $IM = \\sqrt{(30 + 2)^2 + (40 - 3)^2} = \\sqrt{32^2 + 37^2} = \\sqrt{2393} \\approx 48,92\\text{ (km)}$.',
              'Vì $IM \\approx 48,92\\text{ km} < 50\\text{ km}$ nên máy bay nằm trong vùng phủ sóng và đài kiểm soát phát hiện được máy bay.',
            ],
            analysis:
              'Điểm $M(x_0; y_0)$ nằm trong vùng phủ sóng khi $(x_0 - a)^2 + (y_0 - b)^2 \\le R^2$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-21-2',
        lessonId: 'bai-21',
        title: 'Đề ôn Bài 21 - Đề số 02',
        subtitle: 'Nâng cao phương trình tiếp tuyến, dây cung và bài toán toạ độ đường tròn (SGK Toán 10 Tập 2, trang 43–47)',
        description:
          'Đề ôn tập số 02 của Bài 21 (Đường tròn trong mặt phẳng toạ độ): Lập phương trình tiếp tuyến song song/vuông góc đường thẳng, dây cung và bài toán thực tế.',
        mcqs: [
          {
            topic: 'Bài 21: Phương trình đường tròn có tâm tại gốc toạ độ O(0;0)',
            prompt:
              'Trong mặt phẳng $Oxy$, đường tròn có tâm là gốc toạ độ $O(0; 0)$ và đi qua điểm $A(3; -4)$ có phương trình là:',
            correct: '$x^2 + y^2 = 25$.',
            wrongs: [
              '$x^2 + y^2 = 5$.',
              '$(x - 3)^2 + (y + 4)^2 = 25$.',
              '$x^2 + y^2 = 7$.',
            ],
            explanation:
              'Bán kính $R = OA = \\sqrt{3^2 + (-4)^2} = 5 \\Rightarrow R^2 = 25$. Phương trình đường tròn tâm $O(0; 0)$ là $x^2 + y^2 = 25$.',
          },
          {
            topic: 'Bài 21: Chuyển phương trình chính tắc sang dạng khai triển',
            prompt:
              'Khai triển phương trình đường tròn $(x - 2)^2 + (y + 1)^2 = 9$ ta được phương trình nào sau đây?',
            correct: '$x^2 + y^2 - 4x + 2y - 4 = 0$.',
            wrongs: [
              '$x^2 + y^2 - 4x + 2y + 5 = 0$.',
              '$x^2 + y^2 + 4x - 2y - 4 = 0$.',
              '$x^2 + y^2 - 2x + y - 9 = 0$.',
            ],
            explanation:
              'Ta có $(x - 2)^2 + (y + 1)^2 = 9 \\Leftrightarrow x^2 - 4x + 4 + y^2 + 2y + 1 - 9 = 0 \\Leftrightarrow x^2 + y^2 - 4x + 2y - 4 = 0$.',
          },
          {
            topic: 'Bài 21: Đường tròn tiếp xúc với trục hoành Ox',
            prompt:
              'Trong mặt phẳng $Oxy$, đường tròn có tâm $I(3; -4)$ và tiếp xúc với trục hoành $Ox$ có bán kính bằng:',
            correct: '$R = 4$.',
            wrongs: ['$R = 3$.', '$R = 5$.', '$R = 7$.'],
            explanation:
              'Khoảng cách từ tâm $I(3; -4)$ đến trục hoành $Ox: y = 0$ là $|y_I| = |-4| = 4$, nên bán kính $R = 4$.',
          },
          {
            topic: 'Bài 21: Đường tròn tiếp xúc với trục tung Oy',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình đường tròn có tâm $I(-5; 2)$ và tiếp xúc với trục tung $Oy$ là:',
            correct: '$(x + 5)^2 + (y - 2)^2 = 25$.',
            wrongs: [
              '$(x + 5)^2 + (y - 2)^2 = 4$.',
              '$(x - 5)^2 + (y + 2)^2 = 25$.',
              '$(x + 5)^2 + (y - 2)^2 = 29$.',
            ],
            explanation:
              'Đường tròn tiếp xúc với trục tung $Oy: x = 0$ có bán kính $R = |x_I| = |-5| = 5 \\Rightarrow R^2 = 25$. Phương trình là $(x + 5)^2 + (y - 2)^2 = 25$.',
          },
          {
            topic: 'Bài 21: Tìm toạ độ tâm đường tròn ngoại tiếp tam giác vuông',
            prompt:
              'Cho tam giác $OAB$ vuông tại $O(0; 0)$ với $A(6; 0)$ và $B(0; 8)$. Tâm $I$ và bán kính $R$ của đường tròn ngoại tiếp tam giác $OAB$ là:',
            correct: '$I(3; 4),\\ R = 5$.',
            wrongs: [
              '$I(6; 8),\\ R = 10$.',
              '$I(3; 4),\\ R = 10$.',
              '$I(2; \\frac{8}{3}),\\ R = 5$.',
            ],
            explanation:
              'Tam giác $OAB$ vuông tại $O$ nên tâm đường tròn ngoại tiếp là trung điểm cạnh huyền $AB$, tức $I(3; 4)$, và bán kính $R = \\frac{AB}{2} = \\frac{10}{2} = 5$.',
          },
          {
            topic: 'Bài 21: Tiếp tuyến tại điểm có hoành độ hoặc tung độ bằng hoành độ/tung độ tâm',
            prompt:
              'Cho đường tròn $(C): (x - 2)^2 + (y - 3)^2 = 16$. Tiếp tuyến của $(C)$ tại điểm $M(2; 7)$ có phương trình là:',
            correct: '$y - 7 = 0$.',
            wrongs: ['$x - 2 = 0$.', '$2x + 7y - 53 = 0$.', '$y + 7 = 0$.'],
            explanation:
              'Tâm $I(2; 3)$, vectơ pháp tuyến tại $M(2; 7)$ là $\\overrightarrow{IM} = (0; 4) = 4(0; 1)$. Phương trình tiếp tuyến là $0(x - 2) + 1(y - 7) = 0 \\Leftrightarrow y - 7 = 0$.',
          },
          {
            topic: 'Bài 21: Tìm tham số m để đường thẳng tiếp xúc với đường tròn',
            prompt:
              'Đường thẳng $\\Delta: 3x + 4y + m = 0$ tiếp xúc với đường tròn $(C): (x - 1)^2 + (y - 1)^2 = 4$ khi và chỉ khi:',
            correct: '$m = 3$ hoặc $m = -17$.',
            wrongs: [
              '$m = 3$ hoặc $m = 17$.',
              '$m = -3$ hoặc $m = 17$.',
              '$m = 7$.',
            ],
            explanation:
              'Đường tròn có tâm $I(1; 1), R = 2$. Điều kiện tiếp xúc: $d(I, \\Delta) = R \\Leftrightarrow \\frac{|3 + 4 + m|}{5} = 2 \\Leftrightarrow |m + 7| = 10 \\Leftrightarrow m = 3$ hoặc $m = -17$.',
          },
          {
            topic: 'Bài 21: Độ dài dây cung khi đường thẳng cắt đường tròn',
            prompt:
              'Đường thẳng $d: 3x - 4y + 5 = 0$ cắt đường tròn $(C): x^2 + y^2 = 9$ theo một dây cung $AB$. Độ dài dây cung $AB$ bằng:',
            correct: '$4\\sqrt{2}$.',
            wrongs: ['$2\\sqrt{2}$.', '$4$.', '$2\\sqrt{5}$.'],
            explanation:
              'Đường tròn tâm $O(0; 0)$, bán kính $R = 3$. Khoảng cách $h = d(O, d) = \\frac{|5|}{5} = 1$. Độ dài dây cung là $AB = 2\\sqrt{R^2 - h^2} = 2\\sqrt{9 - 1} = 4\\sqrt{2}$.',
          },
          {
            topic: 'Bài 21: Tìm điểm trên đường tròn gần gốc toạ độ nhất',
            prompt:
              'Cho đường tròn $(C): (x - 3)^2 + (y - 4)^2 = 4$. Khoảng cách ngắn nhất từ gốc toạ độ $O(0; 0)$ đến một điểm $M$ thuộc đường tròn $(C)$ bằng:',
            correct: '$3$.',
            wrongs: ['$5$.', '$7$.', '$1$.'],
            explanation:
              'Đường tròn có tâm $I(3; 4),\\ R = 2$ và $OI = \\sqrt{3^2 + 4^2} = 5 > R$. Khoảng cách ngắn nhất từ $O$ đến $M \\in (C)$ là $OI - R = 5 - 2 = 3$.',
          },
          {
            topic: 'Bài 21: Đường tròn có tâm thuộc trục Ox và đi qua hai điểm',
            prompt:
              'Đường tròn $(C)$ có tâm $I$ thuộc trục hoành $Ox$ và đi qua hai điểm $A(1; 2),\\ B(3; 4)$ có toạ độ tâm $I$ là:',
            correct: '$I(5; 0)$.',
            wrongs: ['$I(4; 0)$.', '$I(3; 0)$.', '$I(6; 0)$.'],
            explanation:
              'Gọi $I(x; 0) \\in Ox$. Từ $IA^2 = IB^2 \\Leftrightarrow (x - 1)^2 + 4 = (x - 3)^2 + 16 \\Leftrightarrow -2x + 5 = -6x + 25 \\Leftrightarrow 4x = 20 \\Leftrightarrow x = 5$. Vậy $I(5; 0)$.',
          },
          {
            topic: 'Bài 21: Tìm bán kính lớn nhất của họ đường tròn theo tham số',
            prompt:
              'Cho họ đường tròn $(C_m): x^2 + y^2 - 2mx - 4y + m^2 - 5 = 0$. Bán kính $R$ của đường tròn $(C_m)$ bằng:',
            correct: '$R = 3$ (không phụ thuộc vào $m$).',
            wrongs: ['$R = 9$.', '$R = \\sqrt{m^2 + 9}$.', '$R = \\sqrt{5}$.'],
            explanation:
              'Ta có $a = m,\\ b = 2,\\ c = m^2 - 5$. Suy ra $R = \\sqrt{a^2 + b^2 - c} = \\sqrt{m^2 + 4 - (m^2 - 5)} = \\sqrt{9} = 3$.',
          },
          {
            topic: 'Bài 21: Ứng dụng định vị vị trí từ hai trạm thu phát (Tương tự Vận dụng 2 trang 46)',
            prompt:
              'Trong mặt phẳng $Oxy$, tập hợp các điểm cách điểm $A(1; -2)$ một khoảng không đổi bằng $6$ là:',
            correct: 'Đường tròn có phương trình $(x - 1)^2 + (y + 2)^2 = 36$.',
            wrongs: [
              'Đường tròn có phương trình $(x + 1)^2 + (y - 2)^2 = 36$.',
              'Hình tròn $(x - 1)^2 + (y + 2)^2 \\le 6$.',
              'Đường thẳng $x - 2y - 6 = 0$.',
            ],
            explanation:
              'Tập hợp các điểm cách tâm $A(1; -2)$ một khoảng bằng $6$ là đường tròn tâm $A(1; -2)$, bán kính $R = 6$, có phương trình $(x - 1)^2 + (y + 2)^2 = 36$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 21: Lập phương trình tiếp tuyến biết phương của tiếp tuyến',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho đường tròn $(C): (x - 2)^2 + (y + 1)^2 = 5$ và đường thẳng $d: 2x - y + 7 = 0$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Đường tròn $(C)$ có tâm $I(2; -1)$ và bán kính $R = \\sqrt{5}$.',
                isCorrect: true,
                explanation: 'Từ phương trình chính tắc $(x - 2)^2 + (y + 1)^2 = 5$, suy ra $I(2; -1)$ và $R = \\sqrt{5}$.',
              },
              {
                statement: 'Mọi đường thẳng $\\Delta$ song song với $d$ đều viết được dưới dạng $2x - y + c = 0$ (với $c \\neq 7$).',
                isCorrect: true,
                explanation: 'Hai đường thẳng song song có cùng cặp hệ số pháp tuyến $(2; -1)$.',
              },
              {
                statement: 'Đường thẳng $\\Delta: 2x - y + c = 0$ là tiếp tuyến của $(C)$ khi và chỉ khi $\\frac{|5 + c|}{\\sqrt{5}} = \\sqrt{5} \\Leftrightarrow |c + 5| = 5$.',
                isCorrect: true,
                explanation:
                  'Điều kiện tiếp xúc: $d(I, \\Delta) = R \\Leftrightarrow \\frac{|2(2) - (-1) + c|}{\\sqrt{2^2 + (-1)^2}} = \\sqrt{5} \\Leftrightarrow |c + 5| = 5$.',
              },
              {
                statement: 'Chỉ có duy nhất $1$ tiếp tuyến của đường tròn $(C)$ song song với đường thẳng $d$.',
                isCorrect: false,
                explanation:
                  'Phương trình $|c + 5| = 5$ cho hai nghiệm $c = 0$ và $c = -10$ (đều khác $7$), nên có $2$ tiếp tuyến của $(C)$ song song với $d$.',
              },
            ],
          },
          {
            topic: 'Bài 21: Bài toán thực tế mô hình vòng đu quay Mặt Trời (Tương tự Bài 7.17)',
            prompt:
              'Một vòng đu quay (Ferris wheel) có bán kính $R = 30\\text{ m}$, tâm trục quay $I$ đặt trên trụ đỡ ở độ cao $35\\text{ m}$ so với mặt đất. Chọn hệ trục toạ độ $Oxy$ trong mặt phẳng chứa vòng quay sao cho trục $Ox$ trùng với mặt đất, trục $Oy$ đi qua tâm $I$ và hướng thẳng đứng lên trên (đơn vị trên mỗi trục là mét).',
            statements: [
              {
                statement: 'Toạ độ tâm của vòng đu quay trong hệ trục $Oxy$ đã chọn là $I(0; 35)$.',
                isCorrect: true,
                explanation: 'Vì trục $Oy$ đi qua tâm $I$ và $I$ ở độ cao $35\\text{ m}$ so với mặt đất $Ox$ nên $I(0; 35)$.',
              },
              {
                statement: 'Phương trình đường tròn mô tả quỹ đạo của các cabin trên vòng đu quay là $x^2 + (y - 35)^2 = 900$.',
                isCorrect: true,
                explanation: 'Đường tròn tâm $I(0; 35)$, bán kính $R = 30$ có phương trình $x^2 + (y - 35)^2 = 30^2 = 900$.',
              },
              {
                statement: 'Độ cao lớn nhất của cabin so với mặt đất là $65\\text{ m}$ và độ cao thấp nhất là $5\\text{ m}$.',
                isCorrect: true,
                explanation: 'Từ $(y - 35)^2 = 900 - x^2 \\le 900 \\Rightarrow -30 \\le y - 35 \\le 30 \\Leftrightarrow 5 \\le y \\le 65$.',
              },
              {
                statement: 'Khi một cabin ở độ cao $53\\text{ m}$ so với mặt đất thì khoảng cách từ cabin đó đến trục thẳng đứng $Oy$ bằng $20\\text{ m}$.',
                isCorrect: false,
                explanation:
                  'Thay $y = 53$ vào phương trình: $x^2 + (53 - 35)^2 = 900 \\Leftrightarrow x^2 + 324 = 900 \\Leftrightarrow x^2 = 576 \\Rightarrow |x| = 24\\text{ m}$ (không phải $20\\text{ m}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 21: Tính tổng toạ độ tâm và bán kính đường tròn',
            prompt:
              'Trong mặt phẳng $Oxy$, đường tròn $(C): x^2 + y^2 - 6x + 4y - 12 = 0$ có tâm $I(a; b)$ và bán kính $R$. Tính giá trị của $a + b + R$.',
            answers: ['6'],
            explanation:
              'Ta có $a = 3,\\ b = -2$ và $R = \\sqrt{3^2 + (-2)^2 - (-12)} = \\sqrt{25} = 5$. Vậy $a + b + R = 3 + (-2) + 5 = 6$.',
          },
          {
            topic: 'Bài 21: Tính hệ số tự do trong phương trình tiếp tuyến của đường tròn',
            prompt:
              'Tiếp tuyến của đường tròn $(C): (x - 1)^2 + (y - 2)^2 = 25$ tại điểm $M(4; 6)$ có phương trình dạng $3x + 4y - c = 0$. Tìm giá trị của $c$.',
            answers: ['36'],
            explanation:
              'Tâm $I(1; 2) \\Rightarrow \\overrightarrow{IM} = (3; 4)$. Phương trình tiếp tuyến tại $M(4; 6)$ là $3(x - 4) + 4(y - 6) = 0 \\Leftrightarrow 3x + 4y - 36 = 0 \\Rightarrow c = 36$.',
          },
          {
            topic: 'Bài 21: Tìm hoành độ tâm đường tròn thuộc trục Ox đi qua hai điểm',
            prompt:
              'Tìm hoành độ tâm $I$ của đường tròn có tâm nằm trên trục hoành $Ox$ và đi qua hai điểm $A(1; 3),\\ B(5; 1)$.',
            answers: ['2'],
            explanation:
              'Gọi $I(x; 0) \\in Ox$. Từ $IA^2 = IB^2 \\Leftrightarrow (x - 1)^2 + 9 = (x - 5)^2 + 1 \\Leftrightarrow -2x + 10 = -10x + 26 \\Leftrightarrow 8x = 16 \\Leftrightarrow x = 2$. Vậy hoành độ tâm $I$ là $2$.',
          },
          {
            topic: 'Bài 21: Khoảng cách lớn nhất từ một điểm đến đường tròn',
            prompt:
              'Trong mặt phẳng $Oxy$, tính khoảng cách lớn nhất từ điểm $A(7; 9)$ đến một điểm $M$ bất kỳ thuộc đường tròn $(C): (x - 1)^2 + (y - 1)^2 = 16$.',
            answers: ['14'],
            explanation:
              'Đường tròn có tâm $I(1; 1)$, bán kính $R = 4$. Khoảng cách $IA = \\sqrt{(7 - 1)^2 + (9 - 1)^2} = \\sqrt{36 + 64} = 10$. Khoảng cách lớn nhất từ $A$ đến $M \\in (C)$ là $IA + R = 10 + 4 = 14$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 21: Lập phương trình đường tròn có đường kính AB (Tương tự Luyện tập 2)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-1; 3)$ và $B(5; -5)$. Lập phương trình đường tròn $(C)$ nhận đoạn thẳng $AB$ làm đường kính.',
            conclusionTarget: 'Tìm trung điểm $I$ của $AB$, bán kính $R = IA$ và viết phương trình $(C)$.',
            steps: [
              'Tâm $I$ của đường tròn $(C)$ là trung điểm của đoạn thẳng $AB$, nên $I\\left(\\frac{-1 + 5}{2}; \\frac{3 + (-5)}{2}\\right) = I(2; -1)$.',
              'Bán kính của đường tròn là $R = IA = \\sqrt{(-1 - 2)^2 + (3 - (-1))^2} = \\sqrt{9 + 16} = 5$.',
              'Thay toạ độ tâm $I(2; -1)$ và bán kính $R = 5$ vào dạng chính tắc $(x - a)^2 + (y - b)^2 = R^2$.',
              'Ta được phương trình đường tròn $(C)$ là $(x - 2)^2 + (y + 1)^2 = 25$.',
            ],
            analysis:
              'Đường tròn đường kính $AB$ luôn nhận trung điểm của $AB$ làm tâm và một nửa độ dài $AB$ làm bán kính.',
          },
          {
            topic: 'Bài 21: Lập phương trình tiếp tuyến của đường tròn vuông góc với đường thẳng cho trước',
            problemStatement:
              'Cho đường tròn $(C): (x - 1)^2 + (y + 2)^2 = 10$. Lập phương trình tiếp tuyến $\\Delta$ của $(C)$ biết $\\Delta$ vuông góc với đường thẳng $d: x - 3y + 5 = 0$.',
            conclusionTarget: 'Gọi dạng phương trình của $\\Delta$ và giải điều kiện tiếp xúc $d(I, \\Delta) = R$.',
            steps: [
              'Đường tròn $(C)$ có tâm $I(1; -2)$ và bán kính $R = \\sqrt{10}$.',
              'Vì $\\Delta \\perp d: x - 3y + 5 = 0$ nên phương trình của $\\Delta$ có dạng $3x + y + c = 0$.',
              'Để $\\Delta$ là tiếp tuyến của $(C)$ thì $d(I, \\Delta) = R \\Leftrightarrow \\frac{|3(1) + (-2) + c|}{\\sqrt{3^2 + 1^2}} = \\sqrt{10} \\Leftrightarrow |c + 1| = 10$.',
              'Giải ra $c = 9$ hoặc $c = -11$. Vậy có hai tiếp tuyến là $3x + y + 9 = 0$ và $3x + y - 11 = 0$.',
            ],
            analysis:
              'Một đường tròn luôn có đúng 2 tiếp tuyến cùng vuông góc (hoặc cùng song song) với một đường thẳng cho trước.',
          },
          {
            topic: 'Bài 21: Tìm tâm đường tròn thuộc một đường thẳng và đi qua hai điểm',
            problemStatement:
              'Lập phương trình đường tròn $(C)$ đi qua hai điểm $A(1; 2),\\ B(3; 0)$ và có tâm $I$ nằm trên đường thẳng $d: 2x - y - 1 = 0$.',
            conclusionTarget: 'Tham số hoá toạ độ tâm $I \\in d$, giải phương trình $IA^2 = IB^2$ và viết phương trình $(C)$.',
            steps: [
              'Vì tâm $I$ thuộc đường thẳng $d: y = 2x - 1$ nên ta gọi toạ độ tâm là $I(t; 2t - 1)$.',
              'Do $A(1; 2)$ và $B(3; 0)$ thuộc $(C)$ nên $IA^2 = IB^2 \\Leftrightarrow (t - 1)^2 + (2t - 3)^2 = (t - 3)^2 + (2t - 1)^2$.',
              'Thu gọn phương trình: $5t^2 - 14t + 10 = 5t^2 - 10t + 10 \\Leftrightarrow 4t = 0 \\Leftrightarrow t = 0$, suy ra tâm $I(0; -1)$.',
              'Bán kính $R = IA = \\sqrt{(1 - 0)^2 + (2 + 1)^2} = \\sqrt{10}$. Phương trình $(C)$ là $x^2 + (y + 1)^2 = 10$.',
            ],
            analysis:
              'Tham số hoá điểm $I(t; 2t - 1) \\in d$ giúp đưa bài toán tìm tâm về giải phương trình bậc nhất một ẩn $t$.',
          },
          {
            topic: 'Bài 21: Bài toán thực tế xác định vị trí tâm chấn hoặc trạm phát (Tương tự Vận dụng 2 trang 46)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$ (đơn vị: km), ba trạm quan trắc địa chấn đặt tại $O(0; 0),\\ A(6; 0)$ và $B(0; 8)$ phát hiện tâm chấn $I$ của một trận động đất nhỏ cách đều cả ba trạm. Tìm toạ độ tâm chấn $I$ và khoảng cách từ tâm chấn đến mỗi trạm.',
            conclusionTarget: 'Nhận diện $I$ là tâm đường tròn ngoại tiếp $\\triangle OAB$ và tính bán kính $R$.',
            steps: [
              'Vì tâm chấn $I$ cách đều ba trạm $O(0; 0),\\ A(6; 0),\\ B(0; 8)$ nên $I$ là tâm đường tròn ngoại tiếp tam giác $OAB$.',
              'Nhận xét rằng $O(0; 0),\\ A(6; 0) \\in Ox$ và $B(0; 8) \\in Oy$ nên tam giác $OAB$ vuông tại $O$.',
              'Do đó tâm đường tròn ngoại tiếp $I$ chính là trung điểm của cạnh huyền $AB$, suy ra $I(3; 4)$.',
              'Khoảng cách từ tâm chấn đến mỗi trạm là bán kính $R = OI = \\sqrt{3^2 + 4^2} = 5\\text{ (km)}$.',
            ],
            analysis:
              'Nhận diện tam giác vuông tại $O$ giúp xác định ngay tâm đường tròn ngoại tiếp là trung điểm cạnh huyền mà không cần giải hệ 3 ẩn.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-22',
    lessonNumber: 22,
    name: 'Bài 22',
    topicTitle: 'Ba đường conic',
    chapter: 'Chương VII: Phương pháp toạ độ trong mặt phẳng',
    keySummary:
      'Nhận biết định nghĩa hình học và phương trình chính tắc của ba đường conic: Elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\ (a > b > 0, c^2 = a^2 - b^2)$, Hypebol $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\ (a, b > 0, c^2 = a^2 + b^2)$, và Parabol $y^2 = 2px\\ (p > 0$, tiêu điểm $F(\\frac{p}{2}; 0)$, đường chuẩn $x = -\\frac{p}{2})$; vận dụng giải các bài toán thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-22-1',
        lessonId: 'bai-22',
        title: 'Đề ôn Bài 22 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–4, Luyện tập 1–4, Vận dụng và Bài tập 7.18–7.25 (SGK Toán 10 Tập 2, trang 48–57)',
        description:
          'Đề ôn tập số 01 của Bài 22 (Ba đường conic): Phương trình chính tắc, tiêu điểm, tiêu cự của Elip, Hypebol, Parabol và ứng dụng thực tiễn.',
        mcqs: [
          {
            topic: 'Bài 22: Nhận biết phương trình chính tắc của Elip (Tương tự HĐ2 trang 49)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, phương trình nào sau đây là phương trình chính tắc của một đường elip?',
            correct: '$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.',
            wrongs: [
              '$\\frac{x^2}{9} + \\frac{y^2}{16} = 1$.',
              '$\\frac{x^2}{25} - \\frac{y^2}{16} = 1$.',
              '$\\frac{x^2}{25} + \\frac{y^2}{16} = -1$.',
            ],
            explanation:
              'Phương trình chính tắc của elip có dạng $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ với $a > b > 0$. Ở đây $a^2 = 25 > b^2 = 16$,即 $a = 5 > b = 4 > 0$.',
            tikzCode: tikzEllipseDiagram(5, 4, '3'),
          },
          {
            topic: 'Bài 22: Xác định tiêu điểm và tiêu cự của Elip (Tương tự Ví dụ 1)',
            prompt:
              'Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Tiêu cự $2c$ của elip $(E)$ bằng:',
            correct: '$8$.',
            wrongs: ['$4$.', '$10$.', '$2\\sqrt{34}$.'],
            explanation:
              'Từ phương trình $(E)$, ta có $a^2 = 25,\\ b^2 = 9 \\Rightarrow c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = 4$. Vậy tiêu cự của elip là $2c = 8$.',
          },
          {
            topic: 'Bài 22: Tính chất tổng khoảng cách đến hai tiêu điểm của Elip (Tương tự HĐ1 trang 48)',
            prompt:
              'Cho điểm $M$ bất kỳ nằm trên elip $(E): \\frac{x^2}{36} + \\frac{y^2}{20} = 1$ có hai tiêu điểm là $F_1, F_2$. Tổng khoảng cách $MF_1 + MF_2$ bằng:',
            correct: '$12$.',
            wrongs: ['$6$.', '$8$.', '$16$.'],
            explanation:
              'Ta có $a^2 = 36 \\Rightarrow a = 6$. Theo định nghĩa elip, với mọi $M \\in (E)$ ta luôn có $MF_1 + MF_2 = 2a = 12$.',
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Elip (Tương tự Luyện tập 1)',
            prompt:
              'Phương trình chính tắc của elip $(E)$ có độ dài trục lớn bằng $10$ và tiêu cự bằng $6$ là:',
            correct: '$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.',
            wrongs: [
              '$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.',
              '$\\frac{x^2}{100} + \\frac{y^2}{64} = 1$.',
              '$\\frac{x^2}{25} - \\frac{y^2}{16} = 1$.',
            ],
            explanation:
              'Độ dài trục lớn $2a = 10 \\Rightarrow a = 5 \\Rightarrow a^2 = 25$. Tiêu cự $2c = 6 \\Rightarrow c = 3$. Suy ra $b^2 = a^2 - c^2 = 25 - 9 = 16$. Phương trình là $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.',
          },
          {
            topic: 'Bài 22: Nhận biết phương trình chính tắc của Hypebol (Tương tự Khung kiến thức trang 52)',
            prompt:
              'Cho hypebol $(H): \\frac{x^2}{9} - \\frac{y^2}{16} = 1$. Toạ độ hai tiêu điểm của hypebol $(H)$ là:',
            correct: '$F_1(-5; 0)$ và $F_2(5; 0)$.',
            wrongs: [
              '$F_1(-\\sqrt{7}; 0)$ và $F_2(\\sqrt{7}; 0)$.',
              '$F_1(0; -5)$ và $F_2(0; 5)$.',
              '$F_1(-3; 0)$ và $F_2(3; 0)$.',
            ],
            explanation:
              'Đối với hypebol, $c = \\sqrt{a^2 + b^2} = \\sqrt{9 + 16} = 5$, nên hai tiêu điểm là $F_1(-5; 0)$ và $F_2(5; 0)$.',
          },
          {
            topic: 'Bài 22: Tính chất hiệu khoảng cách trên Hypebol (Tương tự HĐ3 trang 51)',
            prompt:
              'Với mọi điểm $M$ thuộc hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$ có hai tiêu điểm $F_1, F_2$, giá trị tuyệt đối của hiệu $|MF_1 - MF_2|$ bằng:',
            correct: '$8$.',
            wrongs: ['$4$.', '$6$.', '$10$.'],
            explanation:
              'Ta có $a^2 = 16 \\Rightarrow a = 4$. Theo định nghĩa hypebol, $|MF_1 - MF_2| = 2a = 8$.',
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Hypebol (Tương tự Ví dụ 3 & Luyện tập 2)',
            prompt:
              'Lập phương trình chính tắc của hypebol $(H)$ biết $(H)$ có một tiêu điểm là $F_2(13; 0)$ và đi qua điểm $A(5; 0)$.',
            correct: '$\\frac{x^2}{25} - \\frac{y^2}{144} = 1$.',
            wrongs: [
              '$\\frac{x^2}{25} + \\frac{y^2}{144} = 1$.',
              '$\\frac{x^2}{144} - \\frac{y^2}{25} = 1$.',
              '$\\frac{x^2}{25} - \\frac{y^2}{169} = 1$.',
            ],
            explanation:
              'Điểm $A(5; 0) \\in (H) \\Rightarrow a = 5 \\Rightarrow a^2 = 25$. Tiêu điểm $F_2(13; 0) \\Rightarrow c = 13$. Suy ra $b^2 = c^2 - a^2 = 169 - 25 = 144$. Phương trình là $\\frac{x^2}{25} - \\frac{y^2}{144} = 1$.',
          },
          {
            topic: 'Bài 22: Tìm tiêu điểm và đường chuẩn của Parabol (Tương tự Ví dụ 4)',
            prompt:
              'Trong mặt phẳng $Oxy$, cho parabol $(P): y^2 = 8x$. Toạ độ tiêu điểm $F$ và phương trình đường chuẩn $\\Delta$ của $(P)$ là:',
            correct: '$F(2; 0)$ và $\\Delta: x + 2 = 0$.',
            wrongs: [
              '$F(4; 0)$ và $\\Delta: x + 4 = 0$.',
              '$F(-2; 0)$ và $\\Delta: x - 2 = 0$.',
              '$F(0; 2)$ và $\\Delta: y + 2 = 0$.',
            ],
            explanation:
              'Phương trình $y^2 = 2px = 8x \\Rightarrow 2p = 8 \\Leftrightarrow p = 4 \\Rightarrow \\frac{p}{2} = 2$. Vậy tiêu điểm $F(2; 0)$ và đường chuẩn $\\Delta: x = -2 \\Leftrightarrow x + 2 = 0$.',
            tikzCode: tikzParabolaConic(4),
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Parabol khi biết tiêu điểm (Tương tự Luyện tập 3)',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình chính tắc của parabol $(P)$ có tiêu điểm $F(3; 0)$ là:',
            correct: '$y^2 = 12x$.',
            wrongs: ['$y^2 = 6x$.', '$y^2 = 3x$.', '$x^2 = 12y$.'],
            explanation:
              'Tiêu điểm $F\\left(\\frac{p}{2}; 0\\right) = (3; 0) \\Rightarrow \\frac{p}{2} = 3 \\Leftrightarrow p = 6 \\Rightarrow 2p = 12$. Phương trình chính tắc là $y^2 = 12x$.',
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Parabol đi qua một điểm',
            prompt:
              'Parabol $(P): y^2 = 2px$ đi qua điểm $M(2; 4)$ có tham số tiêu $p$ bằng:',
            correct: '$p = 4$.',
            wrongs: ['$p = 8$.', '$p = 2$.', '$p = 16$.'],
            explanation:
              'Thay $x = 2, y = 4$ vào $y^2 = 2px$: $4^2 = 2p \\cdot 2 \\Leftrightarrow 16 = 4p \\Leftrightarrow p = 4$.',
          },
          {
            topic: 'Bài 22: Khoảng cách từ điểm trên Parabol đến tiêu điểm',
            prompt:
              'Cho điểm $M$ thuộc parabol $(P): y^2 = 4x$ có hoành độ $x_M = 5$. Khoảng cách từ điểm $M$ đến tiêu điểm $F$ của parabol $(P)$ bằng:',
            correct: '$6$.',
            wrongs: ['$5$.', '$7$.', '$4$.'],
            explanation:
              'Ta có $2p = 4 \\Rightarrow \\frac{p}{2} = 1$. Theo định nghĩa parabol, $MF = d(M, \\Delta) = x_M + \\frac{p}{2} = 5 + 1 = 6$.',
          },
          {
            topic: 'Bài 22: Ứng dụng Elip trong bài toán khung tranh / mặt bàn elip (Tương tự Ví dụ 2)',
            prompt:
              'Một mặt bàn hình elip có chiều dài trục lớn là $160\\text{ cm}$ và chiều rộng trục nhỏ là $100\\text{ cm}$. Nếu chọn hệ trục $Oxy$ trùng với hai trục đối xứng của elip (đơn vị: cm) thì phương trình chính tắc của viền mặt bàn là:',
            correct: '$\\frac{x^2}{6400} + \\frac{y^2}{2500} = 1$.',
            wrongs: [
              '$\\frac{x^2}{25600} + \\frac{y^2}{10000} = 1$.',
              '$\\frac{x^2}{80} + \\frac{y^2}{50} = 1$.',
              '$\\frac{x^2}{2500} + \\frac{y^2}{6400} = 1$.',
            ],
            explanation:
              'Ta có $2a = 160 \\Rightarrow a = 80 \\Rightarrow a^2 = 6400$, và $2b = 100 \\Rightarrow b = 50 \\Rightarrow b^2 = 2500$. Phương trình chính tắc là $\\frac{x^2}{6400} + \\frac{y^2}{2500} = 1$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 22: Các yếu tố hình học của đường Elip (Tương tự Ví dụ 1 & Bài 7.18)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho đường elip $(E)$ có phương trình $9x^2 + 25y^2 = 225$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzEllipseDiagram(5, 3, '4'),
            statements: [
              {
                statement: 'Phương trình chính tắc của elip $(E)$ là $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.',
                isCorrect: true,
                explanation:
                  'Chia cả hai vế của $9x^2 + 25y^2 = 225$ cho $225$, ta được $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.',
              },
              {
                statement: 'Độ dài trục lớn của elip $(E)$ là $10$ và độ dài trục nhỏ là $6$.',
                isCorrect: true,
                explanation: 'Ta có $a = 5 \\Rightarrow 2a = 10$ và $b = 3 \\Rightarrow 2b = 6$.',
              },
              {
                statement: 'Hai tiêu điểm của elip $(E)$ là $F_1(-4; 0)$ và $F_2(4; 0)$.',
                isCorrect: true,
                explanation:
                  'Ta có $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = 4$, nên hai tiêu điểm là $F_1(-4; 0)$ và $F_2(4; 0)$.',
              },
              {
                statement: 'Với điểm $M$ thuộc $(E)$ sao cho $MF_1 = 3$, độ dài đoạn $MF_2$ bằng $5$.',
                isCorrect: false,
                explanation:
                  'Vì $M \\in (E)$ nên $MF_1 + MF_2 = 2a = 10 \\Rightarrow MF_2 = 10 - 3 = 7$ (không phải $5$).',
              },
            ],
          },
          {
            topic: 'Bài 22: So sánh tính chất của Hypebol và Parabol (Tương tự Bài 7.19 & 7.20)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{20} = 1$ và parabol $(P): y^2 = 24x$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Hypebol $(H)$ có nửa tiêu cự $c = 6$ và tiêu điểm bên phải là $F_2(6; 0)$.',
                isCorrect: true,
                explanation: 'Đối với $(H)$, $c = \\sqrt{a^2 + b^2} = \\sqrt{16 + 20} = \\sqrt{36} = 6$, nên $F_2(6; 0)$.',
              },
              {
                statement: 'Parabol $(P): y^2 = 24x$ có tiêu điểm $F$ trùng với tiêu điểm $F_2(6; 0)$ của hypebol $(H)$.',
                isCorrect: true,
                explanation:
                  'Từ $y^2 = 2px = 24x \\Rightarrow p = 12 \\Rightarrow \\frac{p}{2} = 6$. Vậy tiêu điểm của $(P)$ là $F(6; 0) \\equiv F_2$.',
              },
              {
                statement: 'Phương trình đường chuẩn của parabol $(P)$ là $x = -12$.',
                isCorrect: false,
                explanation:
                  'Đường chuẩn của parabol $(P)$ có phương trình $x = -\\frac{p}{2} = -6$ (không phải $x = -12$).',
              },
              {
                statement: 'Điểm $M(6; 5)$ là một giao điểm của hypebol $(H)$ và đường thẳng $x = 6$.',
                isCorrect: true,
                explanation:
                  'Thay $x = 6$ vào $(H)$: $\\frac{36}{16} - \\frac{y^2}{20} = 1 \\Leftrightarrow \\frac{y^2}{20} = \\frac{5}{4} \\Leftrightarrow y^2 = 25 \\Rightarrow y = \\pm 5$. Do đó $M(6; 5)$ thuộc $(H)$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 22: Tính tiêu cự của Elip',
            prompt:
              'Trong mặt phẳng $Oxy$, tính tiêu cự $2c$ của elip $(E): \\frac{x^2}{100} + \\frac{y^2}{64} = 1$.',
            answers: ['12'],
            explanation:
              'Ta có $a^2 = 100,\\ b^2 = 64 \\Rightarrow c = \\sqrt{100 - 64} = 6$. Vậy tiêu cự $2c = 12$.',
          },
          {
            topic: 'Bài 22: Tính tiêu cự của Hypebol',
            prompt:
              'Trong mặt phẳng $Oxy$, tính tiêu cự $2c$ của hypebol $(H): \\frac{x^2}{36} - \\frac{y^2}{64} = 1$.',
            answers: ['20'],
            explanation:
              'Ta có $a^2 = 36,\\ b^2 = 64 \\Rightarrow c = \\sqrt{36 + 64} = 10$. Vậy tiêu cự $2c = 20$.',
          },
          {
            topic: 'Bài 22: Tìm tham số tiêu p của Parabol',
            prompt:
              'Cho parabol $(P): y^2 = 18x$. Tính khoảng cách từ tiêu điểm $F$ đến đường chuẩn $\\Delta$ của parabol $(P)$ (tức tham số tiêu $p$).',
            answers: ['9'],
            explanation:
              'Từ $y^2 = 2px = 18x \\Rightarrow 2p = 18 \\Leftrightarrow p = 9$. Khoảng cách từ tiêu điểm $F$ đến đường chuẩn $\\Delta$ chính là $p = 9$.',
          },
          {
            topic: 'Bài 22: Ứng dụng vòm cổng hình nửa Elip (Tương tự Bài 7.22)',
            prompt:
              'Một vòm cổng có hình dạng là một nửa elip với chiều rộng chân cổng là $2a = 10\\text{ m}$ và chiều cao tại chính giữa cổng là $b = 4\\text{ m}$. Tính chiều cao của vòm cổng (đơn vị: mét) tại vị trí cách tim cổng (trục đối xứng đứng) một khoảng $x = 3\\text{ m}$.',
            answers: ['3,2', '3.2'],
            explanation:
              'Phương trình elip là $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ (với $y \\ge 0$). Tại $x = 3$: $\\frac{9}{25} + \\frac{y^2}{16} = 1 \\Leftrightarrow \\frac{y^2}{16} = \\frac{16}{25} \\Rightarrow y = \\frac{16}{5} = 3,2\\text{ (m)}$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Elip đi qua điểm và biết tiêu cự (Tương tự Bài 7.20a)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, lập phương trình chính tắc của elip $(E)$ biết $(E)$ có một tiêu điểm là $F_1(-3; 0)$ và đi qua điểm $M(0; 4)$.',
            conclusionTarget: 'Xác định $c, b$, tính $a^2 = b^2 + c^2$ và viết phương trình chính tắc của $(E)$.',
            steps: [
              'Gọi phương trình chính tắc của elip $(E)$ là $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ (với $a > b > 0$).',
              'Vì $(E)$ có tiêu điểm $F_1(-3; 0)$ nên $c = 3 \\Rightarrow c^2 = 9$.',
              'Vì điểm $M(0; 4)$ thuộc $(E)$ nên $\\frac{0^2}{a^2} + \\frac{4^2}{b^2} = 1 \\Rightarrow b^2 = 16$, suy ra $a^2 = b^2 + c^2 = 16 + 9 = 25$.',
              'Vậy phương trình chính tắc của elip $(E)$ là $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.',
            ],
            analysis:
              'Trong elip, luôn nhớ hệ thức $a^2 = b^2 + c^2$ (với $a$ là bán trục lớn nên $a > b$ và $a > c$).',
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Hypebol (Tương tự Ví dụ 3)',
            problemStatement:
              'Lập phương trình chính tắc của hypebol $(H)$ có tiêu cự bằng $10$ và độ dài trục thực bằng $6$.',
            conclusionTarget: 'Tìm $c, a$, tính $b^2 = c^2 - a^2$ và viết phương trình của $(H)$.',
            steps: [
              'Gọi phương trình chính tắc của hypebol $(H)$ là $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ (với $a > 0, b > 0$).',
              'Theo giả thiết, độ dài trục thực $2a = 6 \\Rightarrow a = 3 \\Rightarrow a^2 = 9$.',
              'Tiêu cự của hypebol là $2c = 10 \\Rightarrow c = 5 \\Rightarrow c^2 = 25$, suy ra $b^2 = c^2 - a^2 = 25 - 9 = 16$.',
              'Vậy phương trình chính tắc của hypebol $(H)$ là $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.',
            ],
            analysis:
              'Khác với elip, trong hypebol nửa tiêu cự $c$ lớn hơn $a$ và ta có hệ thức $c^2 = a^2 + b^2$.',
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Parabol và tìm tiêu điểm, đường chuẩn (Tương tự Ví dụ 4)',
            problemStatement:
              'Trong mặt phẳng $Oxy$, lập phương trình chính tắc của parabol $(P)$ đi qua điểm $A(3; -6)$, từ đó xác định toạ độ tiêu điểm $F$ và phương trình đường chuẩn $\\Delta$.',
            conclusionTarget: 'Tìm tham số tiêu $p$, viết phương trình $(P)$, suy ra $F$ và $\\Delta$.',
            steps: [
              'Gọi phương trình chính tắc của parabol $(P)$ là $y^2 = 2px$ (với $p > 0$).',
              'Vì điểm $A(3; -6)$ thuộc $(P)$ nên $(-6)^2 = 2p \\cdot 3 \\Leftrightarrow 36 = 6p \\Leftrightarrow p = 6$.',
              'Suy ra phương trình chính tắc của parabol $(P)$ là $y^2 = 12x$.',
              'Với $\\frac{p}{2} = 3$, tiêu điểm của $(P)$ là $F(3; 0)$ và phương trình đường chuẩn là $\\Delta: x = -3$ (hay $x + 3 = 0$).',
            ],
            analysis:
              'Khi biết phương trình $y^2 = 2px$, hệ số của $x$ bằng $2p$, còn hoành độ tiêu điểm bằng một nửa của $p$, tức $\\frac{p}{2}$.',
          },
          {
            topic: 'Bài 22: Ứng dụng Parabol trong thiết kế chảo thu sóng / đèn pha (Tương tự Vận dụng trang 55)',
            problemStatement:
              'Mặt cắt qua trục của một chảo thu sóng vệ tinh có dạng một nhánh parabol $(P): y^2 = 2px$. Biết chảo có đường kính miệng là $240\\text{ cm}$ và chiều sâu tính từ đỉnh $O(0; 0)$ đến mặt phẳng miệng chảo là $45\\text{ cm}$. Tìm vị trí đặt đầu thu sóng (tại tiêu điểm $F$ của parabol) cách đỉnh chảo bao nhiêu centimét.',
            conclusionTarget: 'Xác định toạ độ điểm mép chảo, tìm $p$ và tính khoảng cách $OF = \\frac{p}{2}$.',
            steps: [
              'Chọn hệ trục $Oxy$ sao cho đỉnh chảo tại $O(0; 0)$ và trục đối xứng trùng với tia $Ox$.',
              'Vì chiều sâu chảo là $45\\text{ cm}$ và đường kính miệng là $240\\text{ cm}$ nên mép trên của chảo đi qua điểm $M(45; 120)$.',
              'Thay toạ độ $M(45; 120)$ vào phương trình $y^2 = 2px$, ta có $120^2 = 2p \\cdot 45 \\Leftrightarrow 14400 = 90p \\Leftrightarrow p = 160$.',
              'Đầu thu đặt tại tiêu điểm $F\\left(\\frac{p}{2}; 0\\right) = F(80; 0)$, tức cách đỉnh chảo một khoảng bằng $80\\text{ cm}$.',
            ],
            analysis:
              'Tính chất quang học của parabol: mọi tia sóng song song với trục đối xứng khi phản xạ trên bề mặt parabol đều hội tụ tại tiêu điểm $F$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-22-2',
        lessonId: 'bai-22',
        title: 'Đề ôn Bài 22 - Đề số 02',
        subtitle: 'Nâng cao phương trình chính tắc và ứng dụng thực tiễn của ba đường conic (SGK Toán 10 Tập 2, trang 48–57)',
        description:
          'Đề ôn tập số 02 của Bài 22 (Ba đường conic): Bán kính qua tiêu, hình chữ nhật cơ sở, bài toán quỹ đạo hành tinh, tháp giải nhiệt hypebol và gương parabol.',
        mcqs: [
          {
            topic: 'Bài 22: Tìm toạ độ các đỉnh của Elip',
            prompt:
              'Trong mặt phẳng $Oxy$, cho elip $(E): \\frac{x^2}{49} + \\frac{y^2}{36} = 1$. Toạ độ hai đỉnh trên trục nhỏ của elip $(E)$ là:',
            correct: '$B_1(0; -6)$ và $B_2(0; 6)$.',
            wrongs: [
              '$A_1(-7; 0)$ và $A_2(7; 0)$.',
              '$B_1(-6; 0)$ và $B_2(6; 0)$.',
              '$B_1(0; -36)$ và $B_2(0; 36)$.',
            ],
            explanation:
              'Ta có $b^2 = 36 \\Rightarrow b = 6$. Hai đỉnh trên trục nhỏ $Oy$ là $B_1(0; -6)$ và $B_2(0; 6)$.',
          },
          {
            topic: 'Bài 22: Tỉ số c/a của đường Elip',
            prompt:
              'Cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{12} = 1$. Tỉ số giữa tiêu cự và độ dài trục lớn (tức $\\frac{2c}{2a} = \\frac{c}{a}$) của elip $(E)$ bằng:',
            correct: '$\\frac{1}{2}$.',
            wrongs: ['$\\frac{\\sqrt{3}}{2}$.', '$\\frac{3}{4}$.', '$\\frac{\\sqrt{7}}{4}$.'],
            explanation:
              'Ta có $a = 4$ và $c = \\sqrt{16 - 12} = 2$. Suy ra $\\frac{c}{a} = \\frac{2}{4} = \\frac{1}{2}$.',
          },
          {
            topic: 'Bài 22: Lập phương trình Elip đi qua hai điểm thuộc hai trục toạ độ',
            prompt:
              'Elip $(E)$ có một đỉnh trên trục lớn là $A_2(6; 0)$ và một đỉnh trên trục nhỏ là $B_2(0; 4)$ có phương trình chính tắc là:',
            correct: '$\\frac{x^2}{36} + \\frac{y^2}{16} = 1$.',
            wrongs: [
              '$\\frac{x^2}{6} + \\frac{y^2}{4} = 1$.',
              '$\\frac{x^2}{16} + \\frac{y^2}{36} = 1$.',
              '$\\frac{x^2}{36} - \\frac{y^2}{16} = 1$.',
            ],
            explanation:
              'Từ $A_2(6; 0)$ và $B_2(0; 4)$, suy ra $a = 6,\\ b = 4$. Phương trình chính tắc là $\\frac{x^2}{36} + \\frac{y^2}{16} = 1$.',
          },
          {
            topic: 'Bài 22: Đưa phương trình Hypebol về dạng chính tắc',
            prompt:
              'Đưa phương trình $4x^2 - 9y^2 = 36$ về dạng chính tắc của hypebol, ta được:',
            correct: '$\\frac{x^2}{9} - \\frac{y^2}{4} = 1$.',
            wrongs: [
              '$\\frac{x^2}{4} - \\frac{y^2}{9} = 1$.',
              '$\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.',
              '$\\frac{x^2}{3} - \\frac{y^2}{2} = 1$.',
            ],
            explanation:
              'Chia cả hai vế của $4x^2 - 9y^2 = 36$ cho $36$, ta được $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$.',
          },
          {
            topic: 'Bài 22: Độ dài trục thực và trục ảo của Hypebol',
            prompt:
              'Cho hypebol $(H): \\frac{x^2}{64} - \\frac{y^2}{25} = 1$. Hiệu giữa độ dài trục thực $2a$ và độ dài trục ảo $2b$ bằng:',
            correct: '$6$.',
            wrongs: ['$3$.', '$39$.', '$16$.'],
            explanation:
              'Ta có $a = 8 \\Rightarrow 2a = 16$ và $b = 5 \\Rightarrow 2b = 10$. Hiệu $2a - 2b = 16 - 10 = 6$.',
          },
          {
            topic: 'Bài 22: Lập phương trình Parabol khi biết đường chuẩn (Tương tự Luyện tập 3)',
            prompt:
              'Trong mặt phẳng $Oxy$, phương trình chính tắc của parabol $(P)$ có đường chuẩn $\\Delta: x + 5 = 0$ là:',
            correct: '$y^2 = 20x$.',
            wrongs: ['$y^2 = 10x$.', '$y^2 = 5x$.', '$y^2 = -20x$.'],
            explanation:
              'Đường chuẩn $x = -\\frac{p}{2} = -5 \\Rightarrow \\frac{p}{2} = 5 \\Leftrightarrow p = 10 \\Rightarrow 2p = 20$. Vậy $(P): y^2 = 20x$.',
          },
          {
            topic: 'Bài 22: Tìm điểm trên Parabol có khoảng cách đến tiêu điểm cho trước',
            prompt:
              'Cho parabol $(P): y^2 = 12x$ có tiêu điểm $F$. Điểm $M(x_0; y_0)$ thuộc $(P)$ có $y_0 > 0$ và $MF = 6$. Tung độ $y_0$ của điểm $M$ bằng:',
            correct: '$y_0 = 6$.',
            wrongs: ['$y_0 = 3$.', '$y_0 = 4$.', '$y_0 = 2\\sqrt{3}$.'],
            explanation:
              'Ta có $2p = 12 \\Rightarrow \\frac{p}{2} = 3$. Từ $MF = x_0 + \\frac{p}{2} = 6 \\Rightarrow x_0 + 3 = 6 \\Leftrightarrow x_0 = 3$. Khi đó $y_0^2 = 12 \\cdot 3 = 36 \\Rightarrow y_0 = 6$ (do $y_0 > 0$).',
          },
          {
            topic: 'Bài 22: Độ dài dây cung của Parabol đi qua tiêu điểm và vuông góc trục đối xứng',
            prompt:
              'Đường thẳng đi qua tiêu điểm $F$ của parabol $(P): y^2 = 8x$ và vuông góc với trục đối xứng $Ox$ cắt $(P)$ tại hai điểm $A, B$. Độ dài đoạn thẳng $AB$ bằng:',
            correct: '$8$.',
            wrongs: ['$4$.', '$2$.', '$16$.'],
            explanation:
              'Tiêu điểm của $(P): y^2 = 8x$ là $F(2; 0)$. Thay $x = 2$ vào $y^2 = 8x \\Rightarrow y^2 = 16 \\Rightarrow y = \\pm 4$. Hai giao điểm là $A(2; 4)$ và $B(2; -4)$, nên $AB = 8$.',
          },
          {
            topic: 'Bài 22: Tam giác tạo bởi điểm trên Elip và hai tiêu điểm',
            prompt:
              'Cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{7} = 1$ có hai tiêu điểm $F_1, F_2$. Với điểm $M$ bất kỳ thuộc $(E)$ không nằm trên trục hoành, chu vi của tam giác $MF_1F_2$ bằng:',
            correct: '$14$.',
            wrongs: ['$8$.', '$11$.', '$16$.'],
            explanation:
              'Ta có $a = 4$ và $c = \\sqrt{16 - 7} = 3$. Chu vi tam giác $MF_1F_2$ là $MF_1 + MF_2 + F_1F_2 = 2a + 2c = 8 + 6 = 14$.',
          },
          {
            topic: 'Bài 22: Điểm thuộc Hypebol cách tiêu điểm',
            prompt:
              'Cho hypebol $(H): \\frac{x^2}{9} - \\frac{y^2}{7} = 1$ có hai tiêu điểm $F_1(-4; 0),\\ F_2(4; 0)$. Điểm $M$ thuộc nhánh bên phải của $(H)$ ($x_M > 0$) có $MF_2 = 3$. Độ dài $MF_1$ bằng:',
            correct: '$9$.',
            wrongs: ['$6$.', '$5$.', '$7$.'],
            explanation:
              'Vì $M$ thuộc nhánh bên phải nên $MF_1 > MF_2$ và $MF_1 - MF_2 = 2a = 6 \\Rightarrow MF_1 = 3 + 6 = 9$.',
          },
          {
            topic: 'Bài 22: Ứng dụng quỹ đạo elip của hành tinh quanh Mặt Trời (Tương tự Bài 7.21)',
            prompt:
              'Một vệ tinh nhân tạo chuyển động theo quỹ đạo là một đường elip nhận tâm Trái Đất làm một tiêu điểm $F_2$. Biết bán trục lớn của quỹ đạo là $a = 10000\\text{ km}$ và nửa tiêu cự là $c = 2000\\text{ km}$. Khoảng cách gần nhất từ vệ tinh đến tâm Trái Đất bằng:',
            correct: '$8000\\text{ km}$.',
            wrongs: ['$12000\\text{ km}$.', '$6000\\text{ km}$.', '$9000\\text{ km}$.'],
            explanation:
              'Khoảng cách gần nhất từ vệ tinh trên elip đến tiêu điểm $F_2$ là $a - c = 10000 - 2000 = 8000\\text{ (km)}$.',
          },
          {
            topic: 'Bài 22: Ứng dụng tháp giải nhiệt hình Hypebol (Tương tự Bài 7.24)',
            prompt:
              'Mặt cắt dọc qua trục của một tháp làm lạnh trong nhà máy điện có dạng hai nhánh của hypebol $(H): \\frac{x^2}{900} - \\frac{y^2}{2500} = 1$ (đơn vị: mét), trong đó trục $Oy$ là trục đối xứng đứng của tháp. Đường kính tại vị trí eo hẹp nhất của tháp (ứng với $y = 0$) bằng:',
            correct: '$60\\text{ m}$.',
            wrongs: ['$30\\text{ m}$.', '$50\\text{ m}$.', '$100\\text{ m}$.'],
            explanation:
              'Tại vị trí eo hẹp nhất ($y = 0$), ta có $\\frac{x^2}{900} = 1 \\Rightarrow x = \\pm 30\\text{ (m)}$. Vậy đường kính tại eo tháp là $2a = 60\\text{ m}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 22: Điểm nhìn hai tiêu điểm dưới một góc vuông trên Elip',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{16} = 1$ có hai tiêu điểm là $F_1(-c; 0)$ và $F_2(c; 0)$ ($c > 0$). Gọi $M$ là một điểm thuộc elip $(E)$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Hai tiêu điểm của elip $(E)$ là $F_1(-3; 0)$ và $F_2(3; 0)$, độ dài đoạn $F_1F_2 = 6$.',
                isCorrect: true,
                explanation: 'Ta có $c = \\sqrt{25 - 16} = 3$, nên $F_1(-3; 0),\\ F_2(3; 0)$ và $F_1F_2 = 2c = 6$.',
              },
              {
                statement: 'Tổng $MF_1 + MF_2 = 10$ với mọi vị trí của điểm $M$ trên elip $(E)$.',
                isCorrect: true,
                explanation: 'Theo định nghĩa elip, $MF_1 + MF_2 = 2a = 2 \\cdot 5 = 10$.',
              },
              {
                statement: 'Khi điểm $M$ trùng với đỉnh $B_2(0; 4)$ trên trục nhỏ thì tam giác $MF_1F_2$ là tam giác cân có cạnh bên bằng $5$.',
                isCorrect: true,
                explanation: 'Tại $B_2(0; 4)$, $B_2F_1 = B_2F_2 = \\sqrt{3^2 + 4^2} = 5 = a$.',
              },
              {
                statement: 'Nếu điểm $M \\in (E)$ nhìn đoạn $F_1F_2$ dưới một góc vuông ($\\widehat{F_1MF_2} = 90^{\\circ}$) thì tích $MF_1 \\cdot MF_2 = 16$.',
                isCorrect: false,
                explanation:
                  'Khi $\\widehat{F_1MF_2} = 90^{\\circ}$, ta có $MF_1^2 + MF_2^2 = F_1F_2^2 = 36$. Kết hợp $(MF_1 + MF_2)^2 = 100 \\Rightarrow 2MF_1 \\cdot MF_2 = 100 - 36 = 64 \\Rightarrow MF_1 \\cdot MF_2 = 32$ (không phải $16$).',
              },
            ],
          },
          {
            topic: 'Bài 22: Phân tích Parabol và ứng dụng gương phản xạ (Tương tự Vận dụng trang 55)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho parabol $(P): y^2 = 16x$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzParabolaConic(8),
            statements: [
              {
                statement: 'Tham số tiêu của parabol $(P)$ là $p = 8$, tiêu điểm là $F(4; 0)$ và đường chuẩn là $\\Delta: x = -4$.',
                isCorrect: true,
                explanation: 'Từ $y^2 = 2px = 16x \\Rightarrow p = 8 \\Rightarrow \\frac{p}{2} = 4$, nên $F(4; 0)$ và $\\Delta: x = -4$.',
              },
              {
                statement: 'Điểm $M(4; 8)$ thuộc parabol $(P)$ và khoảng cách từ $M$ đến tiêu điểm $F$ bằng $8$.',
                isCorrect: true,
                explanation:
                  'Thay $x = 4, y = 8$: $8^2 = 64 = 16 \\cdot 4$ (đúng). Khoảng cách $MF = x_M + \\frac{p}{2} = 4 + 4 = 8$.',
              },
              {
                statement: 'Hình chiếu vuông góc của điểm $M(4; 8)$ lên đường chuẩn $\\Delta: x = -4$ là điểm $H(-4; 8)$ và tam giác $MFH$ là tam giác cân tại $M$.',
                isCorrect: true,
                explanation:
                  'Theo định nghĩa parabol, mọi điểm $M \\in (P)$ đều cách đều tiêu điểm $F$ và đường chuẩn $\\Delta$, nên $MF = MH = 8$, tức $\\triangle MFH$ cân tại $M$.',
              },
              {
                statement: 'Diện tích của tam giác $OFM$ (với $O$ là gốc toạ độ) bằng $32$.',
                isCorrect: false,
                explanation:
                  'Tam giác $OFM$ có đáy $OF = 4$ và chiều cao $|y_M| = 8$, nên diện tích là $S = \\frac{1}{2} \\cdot 4 \\cdot 8 = 16$ (không phải $32$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 22: Tính tổng a^2 + b^2 của Elip đi qua điểm và biết tiêu điểm',
            prompt:
              'Elip $(E): \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ có một tiêu điểm $F_2(2; 0)$ và độ dài trục lớn bằng $6$. Tính giá trị của $a^2 + b^2$.',
            answers: ['14'],
            explanation:
              'Ta có $2a = 6 \\Rightarrow a = 3 \\Rightarrow a^2 = 9$. Với $c = 2$, suy ra $b^2 = a^2 - c^2 = 9 - 4 = 5$. Vậy $a^2 + b^2 = 9 + 5 = 14$.',
          },
          {
            topic: 'Bài 22: Tìm hoành độ điểm trên Parabol biết khoảng cách đến tiêu điểm',
            prompt:
              'Cho parabol $(P): y^2 = 10x$ có tiêu điểm $F$. Điểm $M$ thuộc $(P)$ cách tiêu điểm $F$ một khoảng bằng $8$. Tìm hoành độ của điểm $M$.',
            answers: ['5,5', '5.5'],
            explanation:
              'Từ $y^2 = 10x \\Rightarrow 2p = 10 \\Rightarrow \\frac{p}{2} = 2,5$. Ta có $MF = x_M + \\frac{p}{2} = 8 \\Rightarrow x_M = 8 - 2,5 = 5,5$.',
          },
          {
            topic: 'Bài 22: Tính diện tích hình chữ nhật cơ sở của Elip',
            prompt:
              'Hình chữ nhật cơ sở của elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$ (có các cạnh bằng $2a$ và $2b$) có diện tích bằng bao nhiêu?',
            answers: ['48'],
            explanation:
              'Ta có $a = 4 \\Rightarrow 2a = 8$ và $b = 3 \\Rightarrow 2b = 6$. Diện tích hình chữ nhật cơ sở là $2a \\cdot 2b = 8 \\cdot 6 = 48$.',
          },
          {
            topic: 'Bài 22: Ứng dụng tháp làm lạnh hình Hypebol (Tương tự Bài 7.24)',
            prompt:
              'Mặt cắt dọc của một tháp làm lạnh có dạng hypebol $\\frac{x^2}{16^2} - \\frac{y^2}{24^2} = 1$ (đơn vị: mét), với $y = 0$ là mặt phẳng tại eo hẹp nhất của tháp. Tính bán kính của tháp (đơn vị: mét) tại độ cao $y = 18\\text{ m}$ phía trên eo tháp.',
            answers: ['20'],
            explanation:
              'Thay $y = 18$ vào phương trình: $\\frac{x^2}{16^2} - \\frac{18^2}{24^2} = 1 \\Leftrightarrow \\frac{x^2}{256} = 1 + \\frac{9}{16} = \\frac{25}{16} \\Rightarrow x^2 = 400 \\Rightarrow |x| = 20\\text{ (m)}$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Elip đi qua hai điểm (Tương tự Bài 7.20)',
            problemStatement:
              'Trong mặt phẳng toạ độ $Oxy$, lập phương trình chính tắc của elip $(E)$ biết $(E)$ đi qua hai điểm $M(4; \\sqrt{3})$ và $N(2\\sqrt{2}; 3)$.',
            conclusionTarget: 'Đặt ẩn phụ $u = \\frac{1}{a^2}, v = \\frac{1}{b^2}$, giải hệ tìm $a^2, b^2$ và kết luận.',
            steps: [
              'Gọi phương trình chính tắc của elip $(E)$ là $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ (với $a > b > 0$).',
              'Thay toạ độ của $M(4; \\sqrt{3})$ và $N(2\\sqrt{2}; 3)$ vào phương trình, ta được hệ $\\begin{cases} \\frac{16}{a^2} + \\frac{3}{b^2} = 1 \\\\ \\frac{8}{a^2} + \\frac{9}{b^2} = 1 \\end{cases}$.',
              'Nhân phương trình thứ hai với $2$ rồi trừ vế theo vế, ta tìm được $\\frac{15}{b^2} = 1 \\Rightarrow b^2 = 15$, suy ra $\\frac{16}{a^2} = 1 - \\frac{3}{15} = \\frac{4}{5} \\Rightarrow a^2 = 20$.',
              'Vậy phương trình chính tắc của elip $(E)$ là $\\frac{x^2}{20} + \\frac{y^2}{15} = 1$.',
            ],
            analysis:
              'Khi elip đi qua hai điểm bất kỳ, xem $\\frac{1}{a^2}$ và $\\frac{1}{b^2}$ là hai ẩn bậc nhất giúp giải hệ rất nhanh gọn.',
          },
          {
            topic: 'Bài 22: Lập phương trình chính tắc của Hypebol đi qua điểm và biết tiêu điểm',
            problemStatement:
              'Lập phương trình chính tắc của hypebol $(H)$ biết $(H)$ có một tiêu điểm là $F_2(5; 0)$ và đi qua điểm $M(3\\sqrt{2}; 4)$.',
            conclusionTarget: 'Sử dụng $a^2 + b^2 = 25$ và phương trình điểm $M \\in (H)$ để tìm $a^2, b^2$.',
            steps: [
              'Gọi phương trình chính tắc của hypebol $(H)$ là $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Vì $F_2(5; 0)$ là tiêu điểm nên $c = 5 \\Rightarrow a^2 + b^2 = 25$.',
              'Vì điểm $M(3\\sqrt{2}; 4) \\in (H)$ nên $\\frac{18}{a^2} - \\frac{16}{b^2} = 1$.',
              'Thay $b^2 = 25 - a^2$ vào phương trình trên: $\\frac{18}{a^2} - \\frac{16}{25 - a^2} = 1 \\Leftrightarrow a^4 - 59a^2 + 450 = 0$.',
              'Với $0 < a^2 < 25$, ta nhận $a^2 = 9 \\Rightarrow b^2 = 16$. Vậy phương trình $(H)$ là $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$.',
            ],
            analysis:
              'Chú ý điều kiện $a^2 < c^2 = 25$ để loại ngay nghiệm ngoại lai $a^2 = 50 > 25$.',
          },
          {
            topic: 'Bài 22: Bài toán thực tế xe tải đi qua vòm cầu hình nửa Elip (Tương tự Bài 7.22)',
            problemStatement:
              'Một đường hầm có mặt cắt ngang là một nửa hình elip cao $5\\text{ m}$ và rộng $12\\text{ m}$ tại mặt đường. Một chiếc xe tải có chiều rộng thùng xe là $6\\text{ m}$ và chiều cao là $4,2\\text{ m}$ đi đúng chính giữa làn đường hầm. Hỏi xe tải có đi lọt qua đường hầm mà không chạm trần không?',
            conclusionTarget: 'Lập phương trình elip, tính chiều cao trần hầm tại $x = 3\\text{ m}$ và so sánh với $4,2\\text{ m}$.',
            steps: [
              'Chọn hệ trục $Oxy$ với gốc $O$ tại tâm mặt đường hầm, trục $Ox$ nằm ngang ($a = 6\\text{ m}$) và tia $Oy$ hướng thẳng đứng ($b = 5\\text{ m}$).',
              'Phương trình chính tắc của vòm elip là $\\frac{x^2}{36} + \\frac{y^2}{25} = 1$ (với $y \\ge 0$).',
              'Vì xe tải rộng $6\\text{ m}$ đi chính giữa hầm nên hai mép ngoài của xe ứng với hoành độ $x = \\pm 3\\text{ (m)}$.',
              'Tại $x = 3$, chiều cao trần hầm là $y = 5\\sqrt{1 - \\frac{9}{36}} = \\frac{5\\sqrt{3}}{2} \\approx 4,33\\text{ m} > 4,2\\text{ m}$, nên xe tải đi lọt qua hầm an toàn.',
            ],
            analysis:
              'Điểm kiểm tra giới hạn va chạm của xe tải hình chữ nhật với vòm elip chính là góc trên ngoài cùng của thùng xe ($x = 3\\text{ m}$).',
          },
          {
            topic: 'Bài 22: Tìm điểm trên Parabol thoả mãn điều kiện hình học với tiêu điểm',
            problemStatement:
              'Cho parabol $(P): y^2 = 8x$ có tiêu điểm $F$. Tìm toạ độ các điểm $M$ thuộc $(P)$ sao cho khoảng cách từ $M$ đến tiêu điểm $F$ bằng $5$.',
            conclusionTarget: 'Dùng công thức bán kính qua tiêu $MF = x_M + \\frac{p}{2}$ tìm $x_M$, từ đó tìm $y_M$.',
            steps: [
              'Từ phương trình $(P): y^2 = 8x$, ta có $2p = 8 \\Leftrightarrow p = 4 \\Rightarrow \\frac{p}{2} = 2$.',
              'Gọi $M(x_0; y_0) \\in (P)$ (với $x_0 \\ge 0$). Theo công thức khoảng cách đến tiêu điểm, ta có $MF = x_0 + \\frac{p}{2} = x_0 + 2$.',
              'Theo giả thiết $MF = 5 \\Leftrightarrow x_0 + 2 = 5 \\Leftrightarrow x_0 = 3$.',
              'Thay $x_0 = 3$ vào phương trình $y^2 = 8x$, ta được $y_0^2 = 24 \\Leftrightarrow y_0 = \\pm 2\\sqrt{6}$. Vậy có hai điểm $M(3; 2\\sqrt{6})$ và $M\'(3; -2\\sqrt{6})$.',
            ],
            analysis:
              'Sử dụng công thức bán kính qua tiêu $MF = x_0 + \\frac{p}{2}$ giúp tìm ngay $x_0$ mà không cần giải phương trình căn thức.',
          },
        ],
      }),
    ],
  },
];
