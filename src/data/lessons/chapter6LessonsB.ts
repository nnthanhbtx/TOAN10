import { LessonCatalogItem } from '../../types/exam';
import {
  buildFullLessonExam,
  tikzParabola,
  tikzQuadraticSignRoots,
  tikzCoastTriangleModel,
} from './lessonExamBuilder';

export const CHAPTER_6_LESSONS_B: LessonCatalogItem[] = [
  {
    id: 'bai-17',
    lessonNumber: 17,
    name: 'Bài 17',
    topicTitle: 'Dấu của tam thức bậc hai',
    chapter: 'Chương VI: Hàm số, đồ thị và ứng dụng',
    keySummary:
      'Nhận biết tam thức bậc hai $f(x) = ax^2 + bx + c\\ (a \\neq 0)$; giải thích và vận dụng định lí về dấu của tam thức bậc hai theo dấu của hệ số $a$ và biệt thức $\\Delta$ ("Trong trái, ngoài cùng" khi $\\Delta > 0$); giải bất phương trình bậc hai, tìm điều kiện tham số $m$ để tam thức luôn dương/luôn âm trên $\\mathbb{R}$ và giải bài toán thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-17-1',
        lessonId: 'bai-17',
        title: 'Đề ôn Bài 17 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–3, Luyện tập 1–3, Vận dụng và Bài tập 6.15–6.19 (SGK Toán 10 Tập 2, trang 19–24)',
        description:
          'Đề ôn tập số 01 của Bài 17 (Dấu của tam thức bậc hai): Nhận biết tam thức bậc hai, xét dấu tam thức bậc hai, giải bất phương trình bậc hai và ứng dụng thực tiễn.',
        mcqs: [
          {
            topic: 'Bài 17: Nhận biết tam thức bậc hai (Tương tự HĐ1 & Luyện tập 1)',
            prompt: 'Trong các biểu thức sau đây, biểu thức nào là một tam thức bậc hai đối với biến $x$?',
            correct: '$f(x) = -2x^2 + 5x - 3$.',
            wrongs: [
              '$g(x) = 3x + 4\\sqrt{x} - 1$.',
              '$h(x) = x^4 - 3x^2 + 2$.',
              '$k(x) = \\frac{1}{x^2} + 2x + 1$.',
            ],
            explanation:
              'Tam thức bậc hai đối với $x$ là biểu thức có dạng $ax^2 + bx + c$ với $a \\neq 0$. Biểu thức $f(x) = -2x^2 + 5x - 3$ có $a = -2 \\neq 0, b = 5, c = -3$ nên là tam thức bậc hai.',
          },
          {
            topic: 'Bài 17: Định lí về dấu khi $\\Delta < 0$ (Tương tự Ví dụ 1a)',
            prompt: 'Cho tam thức bậc hai $f(x) = x^2 - 2x + 5$. Khẳng định nào sau đây là ĐÚNG?',
            correct: '$f(x) > 0$ với mọi $x \\in \\mathbb{R}$.',
            wrongs: [
              '$f(x) < 0$ với mọi $x \\in \\mathbb{R}$.',
              '$f(x) = 0$ có hai nghiệm phân biệt.',
              '$f(x) \\le 0$ trên đoạn $[1; 5]$.',
            ],
            explanation:
              'Tam thức $f(x) = x^2 - 2x + 5$ có hệ số $a = 1 > 0$ và $\\Delta\' = (-1)^2 - 1 \\cdot 5 = -4 < 0$. Theo định lí về dấu, $f(x)$ luôn cùng dấu với $a$, tức $f(x) > 0,\\ \\forall x \\in \\mathbb{R}$.',
            tikzCode: tikzParabola(1, -2, 5, 'f(x)=x^2-2x+5'),
          },
          {
            topic: 'Bài 17: Định lí về dấu khi $\\Delta = 0$ (Tương tự Ví dụ 1b)',
            prompt: 'Cho tam thức bậc hai $f(x) = -x^2 + 6x - 9$. Khẳng định nào sau đây là ĐÚNG?',
            correct: '$f(x) < 0$ với mọi $x \\neq 3$.',
            wrongs: [
              '$f(x) > 0$ với mọi $x \\neq 3$.',
              '$f(x) < 0$ với mọi $x \\in \\mathbb{R}$.',
              '$f(x) > 0$ trên khoảng $(-3; 3)$.',
            ],
            explanation:
              'Ta có $f(x) = -(x - 3)^2$ có $a = -1 < 0$ và $\\Delta\' = 0$ (nghiệm kép $x = 3$). Do đó $f(x) < 0$ với mọi $x \\neq 3$ và $f(3) = 0$.',
          },
          {
            topic: 'Bài 17: Xét dấu tam thức khi $\\Delta > 0$ (Tương tự Ví dụ 1c & Bài 6.15)',
            prompt: 'Tam thức bậc hai $f(x) = x^2 - 5x + 4$ nhận giá trị âm ($f(x) < 0$) khi và chỉ khi:',
            correct: '$x \\in (1; 4)$.',
            wrongs: [
              '$x \\in (-\\infty; 1) \\cup (4; +\\infty)$.',
              '$x \\in [1; 4]$.',
              '$x \\in (-4; -1)$.',
            ],
            explanation:
              'Tam thức $f(x) = x^2 - 5x + 4$ có hai nghiệm $x_1 = 1, x_2 = 4$ và hệ số $a = 1 > 0$. Theo quy tắc "Trong trái, ngoài cùng", $f(x) < 0$ (trái dấu với $a$) khi $x \\in (1; 4)$.',
            tikzCode: tikzQuadraticSignRoots(1, 1, 4),
          },
          {
            topic: 'Bài 17: Xét dấu tam thức có $a < 0$ và $\\Delta > 0$ (Tương tự HĐ3)',
            prompt: 'Cho tam thức bậc hai $g(x) = -2x^2 + 7x - 3$. Tập hợp các giá trị của $x$ để $g(x) \\ge 0$ là:',
            correct: '$\\left[\\frac{1}{2}; 3\\right]$.',
            wrongs: [
              '$\\left(-\\infty; \\frac{1}{2}\\right] \\cup [3; +\\infty)$.',
              '$\\left(\\frac{1}{2}; 3\\right)$.',
              '$[-3; -\\frac{1}{2}]$.',
            ],
            explanation:
              'Phương trình $-2x^2 + 7x - 3 = 0$ có hai nghiệm $x_1 = \\frac{1}{2}$ và $x_2 = 3$. Vì $a = -2 < 0$ nên $g(x) \\ge 0$ (trái dấu hoặc bằng $0$) trên đoạn $\\left[\\frac{1}{2}; 3\\right]$.',
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai vô nghiệm (Tương tự Ví dụ 2a)',
            prompt: 'Tập nghiệm của bất phương trình $2x^2 - 3x + 4 \\le 0$ là:',
            correct: '$S = \\emptyset$.',
            wrongs: ['$S = \\mathbb{R}$.', '$S = \\left\\{\\frac{3}{4}\\right\\}$.', '$S = (0; +\\infty)$.'],
            explanation:
              'Tam thức $f(x) = 2x^2 - 3x + 4$ có $a = 2 > 0$ và $\\Delta = (-3)^2 - 4 \\cdot 2 \\cdot 4 = -23 < 0$, nên $f(x) > 0$ với mọi $x \\in \\mathbb{R}$. Vậy bất phương trình $f(x) \\le 0$ vô nghiệm ($S = \\emptyset$).',
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai có nghiệm duy nhất (Tương tự Ví dụ 2b & Luyện tập 3b)',
            prompt: 'Tập nghiệm của bất phương trình $x^2 - 10x + 25 \\le 0$ là:',
            correct: '$S = \\{5\\}$.',
            wrongs: ['$S = \\emptyset$.', '$S = \\mathbb{R}$.', '$S = (-\\infty; 5]$.'],
            explanation:
              'Ta có $x^2 - 10x + 25 = (x - 5)^2 \\ge 0,\\ \\forall x \\in \\mathbb{R}$. Do đó $(x - 5)^2 \\le 0 \\Leftrightarrow x - 5 = 0 \\Leftrightarrow x = 5$. Tập nghiệm là $S = \\{5\\}$.',
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai (Tương tự Bài 6.16a)',
            prompt: 'Tập nghiệm của bất phương trình $x^2 - 9 \\ge 0$ là:',
            correct: '$S = (-\\infty; -3] \\cup [3; +\\infty)$.',
            wrongs: ['$S = [-3; 3]$.', '$S = (-3; 3)$.', '$S = [3; +\\infty)$.'],
            explanation:
              'Tam thức $x^2 - 9$ có hai nghiệm $x = -3, x = 3$ và $a = 1 > 0$, nên $x^2 - 9 \\ge 0 \\Leftrightarrow x \\in (-\\infty; -3] \\cup [3; +\\infty)$.',
          },
          {
            topic: 'Bài 17: Tìm tham số để tam thức luôn dương trên $\\mathbb{R}$ (Tương tự Bài 6.17 & 6.27)',
            prompt:
              'Bất phương trình $x^2 - 2mx + 9 > 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$ khi và chỉ khi:',
            correct: '$-3 < m < 3$.',
            wrongs: ['$m > 3$ hoặc $m < -3$.', '$-3 \\le m \\le 3$.', '$m > 3$.'],
            explanation:
              'Vì hệ số $a = 1 > 0$, để $x^2 - 2mx + 9 > 0,\\ \\forall x \\in \\mathbb{R}$ thì $\\Delta\' = m^2 - 9 < 0 \\Leftrightarrow -3 < m < 3$.',
          },
          {
            topic: 'Bài 17: Tìm tập xác định hàm số chứa căn bậc hai bằng xét dấu',
            prompt: 'Tập xác định của hàm số $y = \\sqrt{-x^2 + 4x + 5}$ là:',
            correct: '$D = [-1; 5]$.',
            wrongs: [
              '$D = (-\\infty; -1] \\cup [5; +\\infty)$.',
              '$D = (-1; 5)$.',
              '$D = [-5; 1]$.',
            ],
            explanation:
              'Hàm số xác định khi $-x^2 + 4x + 5 \\ge 0$. Tam thức có hai nghiệm $x = -1, x = 5$ và $a = -1 < 0$ nên nhận giá trị không âm trên đoạn $[-1; 5]$.',
          },
          {
            topic: 'Bài 17: Bài toán rào vườn có diện tích không nhỏ hơn mức cho trước (Tương tự Ví dụ 3)',
            prompt:
              'Bác Việt dùng $20\\text{ m}$ lưới rào ba mặt của một mảnh vườn hình chữ nhật sát bờ tường, diện tích mảnh vườn là $S(x) = -2x^2 + 20x\\text{ (m}^2\\text{)}$ với $x\\text{ (m)}$ là chiều rộng vuông góc bờ tường. Để diện tích vườn không nhỏ hơn $42\\text{ m}^2$ thì $x$ phải thuộc đoạn nào?',
            correct: '$[3; 7]$.',
            wrongs: ['$[4; 6]$.', '$[2; 8]$.', '$(0; 3] \\cup [7; 10)$.'],
            explanation:
              'Yêu cầu $-2x^2 + 20x \\ge 42 \\Leftrightarrow 2x^2 - 20x + 42 \\le 0 \\Leftrightarrow x^2 - 10x + 21 \\le 0 \\Leftrightarrow 3 \\le x \\le 7$.',
          },
          {
            topic: 'Bài 17: Bài toán độ cao quả bóng theo thời gian (Tương tự Vận dụng trang 23)',
            prompt:
              'Một quả bóng được ném thẳng đứng lên với độ cao $h(t) = -5t^2 + 20t + 2\\text{ (m)}$ theo thời gian $t$ (giây). Trong khoảng thời gian nào thì quả bóng ở độ cao trên $17\\text{ m}$?',
            correct: 'Từ giây thứ $1$ đến giây thứ $3$, tức $t \\in (1; 3)$.',
            wrongs: [
              'Từ giây thứ $0$ đến giây thứ $4$, tức $t \\in (0; 4)$.',
              'Từ giây thứ $2$ đến giây thứ $4$, tức $t \\in (2; 4)$.',
              'Từ giây thứ $1$ đến giây thứ $2$, tức $t \\in (1; 2)$.',
            ],
            explanation:
              'Giải bất phương trình $h(t) > 17 \\Leftrightarrow -5t^2 + 20t + 2 > 17 \\Leftrightarrow 5t^2 - 20t + 15 < 0 \\Leftrightarrow t^2 - 4t + 3 < 0 \\Leftrightarrow 1 < t < 3$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 17: Xét dấu tam thức bậc hai và giải bất phương trình (Tương tự Ví dụ 1 & 2)',
            prompt:
              'Cho tam thức bậc hai $f(x) = 2x^2 - 7x + 3$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzQuadraticSignRoots(2, 0.5, 3),
            statements: [
              {
                statement: 'Tam thức $f(x)$ có biệt thức $\\Delta = 25 > 0$ và có hai nghiệm phân biệt là $x_1 = \\frac{1}{2};\\ x_2 = 3$.',
                isCorrect: true,
                explanation: 'Ta có $\\Delta = (-7)^2 - 4 \\cdot 2 \\cdot 3 = 49 - 24 = 25 > 0$, nghiệm là $x = \\frac{7 \\pm 5}{4} \\in \\left\\{\\frac{1}{2}; 3\\right\\}$.',
              },
              {
                statement: 'Tam thức $f(x) < 0$ với mọi $x \\in \\left(\\frac{1}{2}; 3\\right)$.',
                isCorrect: true,
                explanation: 'Do $a = 2 > 0$, trong khoảng hai nghiệm $\\left(\\frac{1}{2}; 3\\right)$ thì $f(x)$ trái dấu với $a$, tức $f(x) < 0$.',
              },
              {
                statement: 'Tập nghiệm của bất phương trình $f(x) \\ge 0$ là $S = \\left[\\frac{1}{2}; 3\\right]$.',
                isCorrect: false,
                explanation:
                  'Tập nghiệm của $f(x) \\ge 0$ là ngoài khoảng hai nghiệm: $S = \\left(-\\infty; \\frac{1}{2}\\right] \\cup [3; +\\infty)$.',
              },
              {
                statement: 'Có đúng $2$ giá trị nguyên của $x$ thoả mãn bất phương trình $f(x) < 0$.',
                isCorrect: true,
                explanation: 'Trong khoảng $\\left(\\frac{1}{2}; 3\\right)$ có đúng $2$ số nguyên là $x = 1$ và $x = 2$.',
              },
            ],
          },
          {
            topic: 'Bài 17: Ứng dụng bất phương trình bậc hai trong chuyển động thẳng đứng (Tương tự Bài 6.18)',
            prompt:
              'Một vật được ném thẳng đứng xuống dưới từ độ cao $240\\text{ m}$ so với mặt đất với vận tốc ban đầu $v_0 = 20\\text{ m/s}$. Bỏ qua sức cản của không khí và lấy $g = 10\\text{ m/s}^2$, quãng đường vật đi được sau $t$ giây là $s(t) = 20t + 5t^2\\text{ (m)}$, do đó khoảng cách từ vật đến mặt đất sau $t$ giây là $h(t) = 240 - 20t - 5t^2\\text{ (m)}$.',
            statements: [
              {
                statement: 'Sau $2$ giây kể từ lúc ném, vật cách mặt đất $180\\text{ m}$.',
                isCorrect: true,
                explanation: 'Thay $t = 2$: $h(2) = 240 - 20 \\cdot 2 - 5 \\cdot 2^2 = 240 - 40 - 20 = 180\\text{ (m)}$.',
              },
              {
                statement: 'Để vật cách mặt đất không quá $135\\text{ m}$ thì $t$ phải thoả mãn $5t^2 + 20t - 105 \\ge 0$.',
                isCorrect: true,
                explanation:
                  'Điều kiện $h(t) \\le 135 \\Leftrightarrow 240 - 20t - 5t^2 \\le 135 \\Leftrightarrow 5t^2 + 20t - 105 \\ge 0$.',
              },
              {
                statement: 'Sau ít nhất $3$ giây kể từ lúc ném thì vật cách mặt đất không quá $135\\text{ m}$.',
                isCorrect: true,
                explanation:
                  'Giải $5t^2 + 20t - 105 \\ge 0 \\Leftrightarrow t^2 + 4t - 21 \\ge 0 \\Leftrightarrow (t - 3)(t + 7) \\ge 0 \\Leftrightarrow t \\ge 3$ (vì $t > 0$). Vậy sau ít nhất $3$ giây thì vật cách mặt đất không quá $135\\text{ m}$.',
              },
              {
                statement: 'Thời điểm vật chạm đất ($h(t) = 0$) là $t = 6$ giây.',
                isCorrect: false,
                explanation:
                  'Khi chạm đất: $5t^2 + 20t - 240 = 0 \\Leftrightarrow t^2 + 4t - 48 = 0 \\Rightarrow t = 4\\sqrt{3} - 2 \\approx 4,93$ giây (không phải $6$ giây).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 17: Đếm số nghiệm nguyên của bất phương trình bậc hai',
            prompt:
              'Bất phương trình $-x^2 + 6x - 5 \\ge 0$ có tất cả bao nhiêu nghiệm nguyên?',
            answers: ['5'],
            explanation:
              'Ta có $-x^2 + 6x - 5 \\ge 0 \\Leftrightarrow x^2 - 6x + 5 \\le 0 \\Leftrightarrow 1 \\le x \\le 5$. Các nghiệm nguyên là $\\{1; 2; 3; 4; 5\\}$, gồm $5$ giá trị.',
          },
          {
            topic: 'Bài 17: Tìm tham số để tam thức bậc hai luôn dương (Tương tự Bài 6.17)',
            prompt:
              'Có bao nhiêu giá trị nguyên của tham số $m$ để tam thức bậc hai $f(x) = x^2 - 2(m - 1)x + 2m + 13$ dương với mọi $x \\in \\mathbb{R}$?',
            answers: ['7'],
            explanation:
              'Điều kiện $f(x) > 0,\\ \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta\' = (m - 1)^2 - (2m + 13) < 0 \\Leftrightarrow m^2 - 4m - 12 < 0 \\Leftrightarrow -2 < m < 6$. Các giá trị nguyên của $m$ là $\\{-1; 0; 1; 2; 3; 4; 5\\}$, gồm $7$ giá trị.',
          },
          {
            topic: 'Bài 17: Bài toán hình học đường tròn trong đoạn thẳng (Tương tự Bài 6.19)',
            prompt:
              'Cho đoạn thẳng $AB = 6$ và điểm $M$ trên đoạn $AB$ sao cho $AM = x\\ (0 < x < 6)$. Vẽ các đường tròn đường kính $AM, MB$ và $AB$. Gọi $S(x)$ là diện tích phần hình phẳng nằm trong hình tròn lớn và nằm ngoài hai hình tròn nhỏ. Độ dài đoạn $x$ bằng bao nhiêu thì $S(x)$ đạt giá trị lớn nhất?',
            answers: ['3'],
            explanation:
              'Bán kính 3 đường tròn lần lượt là $\\frac{x}{2}, \\frac{6-x}{2}, 3$. Ta có $S(x) = \\pi \\cdot 3^2 - \\pi\\left(\\frac{x}{2}\\right)^2 - \\pi\\left(\\frac{6-x}{2}\\right)^2 = \\frac{\\pi}{2}(6x - x^2)$. Biểu thức $6x - x^2$ đạt GTLN tại $x = 3$.',
          },
          {
            topic: 'Bài 17: Tổng các nghiệm nguyên của bất phương trình bậc hai',
            prompt:
              'Tính tổng tất cả các nghiệm nguyên của bất phương trình $x^2 - 7x + 10 \\le 0$.',
            answers: ['14'],
            explanation:
              'Giải $x^2 - 7x + 10 \\le 0 \\Leftrightarrow 2 \\le x \\le 5$. Các nghiệm nguyên là $2, 3, 4, 5$. Tổng của chúng là $2 + 3 + 4 + 5 = 14$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 17: Xét dấu tam thức bậc hai (Tương tự Ví dụ 1c & Bài 6.15)',
            problemStatement:
              'Xét dấu của tam thức bậc hai $f(x) = -2x^2 + 5x - 2$.',
            conclusionTarget: 'Chỉ rõ các khoảng mà $f(x) > 0$, $f(x) < 0$ và các điểm $f(x) = 0$.',
            steps: [
              'Tam thức $f(x) = -2x^2 + 5x - 2$ có hệ số $a = -2 < 0$ và biệt thức $\\Delta = 5^2 - 4(-2)(-2) = 9 > 0$.',
              'Phương trình $f(x) = 0$ có hai nghiệm phân biệt là $x_1 = \\frac{1}{2}$ và $x_2 = 2$.',
              'Theo định lí về dấu của tam thức bậc hai ("Trong trái, ngoài cùng"), trong khoảng $\\left(\\frac{1}{2}; 2\\right)$ thì $f(x)$ trái dấu với $a = -2$ nên $f(x) > 0$.',
              'Ngoài khoảng hai nghiệm, tức với $x \\in \\left(-\\infty; \\frac{1}{2}\\right) \\cup (2; +\\infty)$, $f(x)$ cùng dấu với $a$ nên $f(x) < 0$.',
            ],
            analysis:
              'Xác định dấu của hệ số $a$ và tính $\\Delta$ tìm nghiệm trước khi áp dụng định lí về dấu.',
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai (Tương tự Ví dụ 2c & Bài 6.32)',
            problemStatement:
              'Giải bất phương trình bậc hai $3x^2 - 10x + 3 > 0$.',
            conclusionTarget: 'Tìm tập nghiệm $S$ của bất phương trình.',
            steps: [
              'Xét tam thức bậc hai $f(x) = 3x^2 - 10x + 3$ có hệ số $a = 3 > 0$.',
              'Tính biệt thức thu gọn $\\Delta\' = (-5)^2 - 3 \\cdot 3 = 16 > 0$, suy ra $f(x)$ có hai nghiệm phân biệt $x_1 = \\frac{1}{3}$ và $x_2 = 3$.',
              'Vì $a = 3 > 0$ nên $f(x) > 0$ (cùng dấu với $a$) khi $x$ nằm ngoài đoạn hai nghiệm.',
              'Vậy tập nghiệm của bất phương trình là $S = \\left(-\\infty; \\frac{1}{3}\\right) \\cup (3; +\\infty)$.',
            ],
            analysis:
              'Do $a = 3 > 0$ và chiều bất phương trình là $> 0$, ta lấy miền ngoài hai nghiệm.',
          },
          {
            topic: 'Bài 17: Tìm tham số $m$ để tam thức luôn dương với mọi $x \\in \\mathbb{R}$ (Tương tự Bài 6.17)',
            problemStatement:
              'Tìm tất cả các giá trị của tham số $m$ để tam thức bậc hai $f(x) = x^2 - 2(m - 1)x + m + 5$ dương với mọi $x \\in \\mathbb{R}$.',
            conclusionTarget: 'Xác định khoảng giá trị của tham số $m$.',
            steps: [
              'Tam thức $f(x) = x^2 - 2(m - 1)x + m + 5$ có hệ số $a = 1 > 0$.',
              'Theo định lí về dấu, $f(x) > 0,\\ \\forall x \\in \\mathbb{R}$ khi và chỉ khi biệt thức thu gọn $\\Delta\' < 0$.',
              'Ta có $\\Delta\' = (m - 1)^2 - (m + 5) = m^2 - 2m + 1 - m - 5 = m^2 - 3m - 4$.',
              'Giải bất phương trình $m^2 - 3m - 4 < 0 \\Leftrightarrow -1 < m < 4$. Vậy $m \\in (-1; 4)$.',
            ],
            analysis:
              'Với $a > 0$ cố định, bài toán $f(x) > 0,\\ \\forall x \\in \\mathbb{R}$ đưa về giải bất phương trình bậc hai $\\Delta\'(m) < 0$ theo ẩn $m$.',
          },
          {
            topic: 'Bài 17: Giải bài toán thực tế chuyển động thẳng đứng (Tương tự Bài 6.18)',
            problemStatement:
              'Một vật được ném thẳng đứng xuống dưới từ độ cao $180\\text{ m}$ với vận tốc đầu $v_0 = 15\\text{ m/s}$ (lấy $g = 10\\text{ m/s}^2$). Khoảng cách từ vật đến mặt đất sau $t$ giây là $h(t) = 180 - 15t - 5t^2\\text{ (m)}$. Hỏi sau ít nhất bao nhiêu giây thì vật cách mặt đất không quá $80\\text{ m}$?',
            conclusionTarget: 'Thiết lập và giải bất phương trình bậc hai theo $t$.',
            steps: [
              'Yêu cầu vật cách mặt đất không quá $80\\text{ m}$ tương ứng với bất phương trình $h(t) \\le 80$ (với $t > 0$).',
              'Thay công thức $h(t)$ vào, ta được $180 - 15t - 5t^2 \\le 80 \\Leftrightarrow 5t^2 + 15t - 100 \\ge 0 \\Leftrightarrow t^2 + 3t - 20 \\ge 0$.',
              'Tam thức $t^2 + 3t - 20$ có nghiệm dương là $t_2 = \\frac{-3 + \\sqrt{89}}{2} \\approx 3,22$ (giây).',
              'Kết hợp điều kiện $t > 0$, vậy sau ít nhất khoảng $3,22$ giây thì vật cách mặt đất không quá $80\\text{ m}$.',
            ],
            analysis:
              'Chuyển ngôn ngữ thực tế "cách mặt đất không quá $80\\text{ m}$" thành bất phương trình $h(t) \\le 80$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-17-2',
        lessonId: 'bai-17',
        title: 'Đề ôn Bài 17 - Đề số 02',
        subtitle: 'Nâng cao giải bất phương trình bậc hai và bài toán chứa tham số $m$ (SGK Toán 10 Tập 2, trang 19–24)',
        description:
          'Đề ôn tập số 02 của Bài 17 (Dấu của tam thức bậc hai): Bảng xét dấu, bất phương trình bậc hai, điều kiện vô nghiệm và bài toán hình học - vật lý.',
        mcqs: [
          {
            topic: 'Bài 17: Xác định hệ số của tam thức bậc hai (Tương tự HĐ1)',
            prompt: 'Khai triển biểu thức $P(x) = (2 - x)(3x + 1)$ ta được tam thức bậc hai $ax^2 + bx + c$ với:',
            correct: '$a = -3,\\ b = 5,\\ c = 2$.',
            wrongs: [
              '$a = 3,\\ b = -5,\\ c = -2$.',
              '$a = -3,\\ b = 7,\\ c = 2$.',
              '$a = -1,\\ b = 5,\\ c = 2$.',
            ],
            explanation:
              'Ta có $(2 - x)(3x + 1) = 6x + 2 - 3x^2 - x = -3x^2 + 5x + 2$. Vậy $a = -3, b = 5, c = 2$.',
          },
          {
            topic: 'Bài 17: Dấu của tam thức bậc hai có $\\Delta < 0$ (Tương tự Bài 6.15d)',
            prompt: 'Cho tam thức bậc hai $f(x) = -x^2 + x - 3$. Mệnh đề nào sau đây là ĐÚNG?',
            correct: '$f(x) < 0$ với mọi $x \\in \\mathbb{R}$.',
            wrongs: [
              '$f(x) > 0$ với mọi $x \\in \\mathbb{R}$.',
              '$f(x) \\ge 0$ trên đoạn $[1; 3]$.',
              '$f(x) = 0$ có nghiệm kép.',
            ],
            explanation:
              'Tam thức có $a = -1 < 0$ và $\\Delta = 1^2 - 4(-1)(-3) = -11 < 0$. Do đó $f(x)$ luôn cùng dấu với $a = -1$, tức $f(x) < 0,\\ \\forall x \\in \\mathbb{R}$.',
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai (Tương tự Bài 6.16b)',
            prompt: 'Tập nghiệm của bất phương trình $x^2 - 4x - 5 < 0$ là:',
            correct: '$S = (-1; 5)$.',
            wrongs: [
              '$S = (-\\infty; -1) \\cup (5; +\\infty)$.',
              '$S = [-1; 5]$.',
              '$S = (-5; 1)$.',
            ],
            explanation:
              'Tam thức $x^2 - 4x - 5$ có hai nghiệm $x_1 = -1, x_2 = 5$ và $a = 1 > 0$. Vậy $x^2 - 4x - 5 < 0 \\Leftrightarrow x \\in (-1; 5)$.',
            tikzCode: tikzQuadraticSignRoots(1, -1, 5),
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai với hệ số vô tỉ (Tương tự Ví dụ 2c)',
            prompt: 'Tập nghiệm của bất phương trình $-x^2 + 4x - 1 > 0$ là:',
            correct: '$S = (2 - \\sqrt{3}; 2 + \\sqrt{3})$.',
            wrongs: [
              '$S = (-\\infty; 2 - \\sqrt{3}) \\cup (2 + \\sqrt{3}; +\\infty)$.',
              '$S = [2 - \\sqrt{3}; 2 + \\sqrt{3}]$.',
              '$S = (-2 - \\sqrt{3}; -2 + \\sqrt{3})$.',
            ],
            explanation:
              'Tam thức $-x^2 + 4x - 1$ có $\\Delta\' = 4 - 1 = 3 > 0$, hai nghiệm là $2 - \\sqrt{3}$ và $2 + \\sqrt{3}$. Vì $a = -1 < 0$ nên tam thức dương trong khoảng hai nghiệm $(2 - \\sqrt{3}; 2 + \\sqrt{3})$.',
          },
          {
            topic: 'Bài 17: Bất phương trình nghiệm đúng với mọi $x \\in \\mathbb{R}$ (Tương tự Bài 6.16d)',
            prompt: 'Tập nghiệm của bất phương trình $3x^2 - 2x + 2 \\ge 0$ là:',
            correct: '$S = \\mathbb{R}$.',
            wrongs: ['$S = \\emptyset$.', '$S = \\left[\\frac{1}{3}; +\\infty\\right)$.', '$S = (0; +\\infty)$.'],
            explanation:
              'Tam thức $3x^2 - 2x + 2$ có $a = 3 > 0$ và $\\Delta\' = (-1)^2 - 3 \\cdot 2 = -5 < 0$, nên $3x^2 - 2x + 2 > 0,\\ \\forall x \\in \\mathbb{R}$. Tập nghiệm là $S = \\mathbb{R}$.',
          },
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai có nghiệm kép (Tương tự Bài 6.32c)',
            prompt: 'Tập nghiệm của bất phương trình $-2x^2 + 12x - 18 \\ge 0$ là:',
            correct: '$S = \\{3\\}$.',
            wrongs: ['$S = \\mathbb{R}$.', '$S = \\emptyset$.', '$S = \\mathbb{R} \\setminus \\{3\\}$.'],
            explanation:
              'Ta có $-2x^2 + 12x - 18 = -2(x - 3)^2 \\le 0,\\ \\forall x \\in \\mathbb{R}$. Do đó $-2(x - 3)^2 \\ge 0 \\Leftrightarrow x - 3 = 0 \\Leftrightarrow x = 3$.',
          },
          {
            topic: 'Bài 17: Tìm điều kiện để phương trình bậc hai vô nghiệm',
            prompt: 'Phương trình bậc hai $x^2 - (m + 2)x + 4 = 0$ vô nghiệm khi và chỉ khi:',
            correct: '$-6 < m < 2$.',
            wrongs: ['$m < -6$ hoặc $m > 2$.', '$-2 < m < 6$.', '$-6 \\le m \\le 2$.'],
            explanation:
              'Phương trình vô nghiệm khi $\\Delta = (m + 2)^2 - 16 < 0 \\Leftrightarrow (m - 2)(m + 6) < 0 \\Leftrightarrow -6 < m < 2$.',
          },
          {
            topic: 'Bài 17: Tìm tham số để tam thức luôn âm trên $\\mathbb{R}$',
            prompt: 'Tam thức bậc hai $f(x) = -x^2 + 2(m - 1)x - m^2 + 5m - 10$ âm với mọi $x \\in \\mathbb{R}$ khi và chỉ khi:',
            correct: '$m < 3$.',
            wrongs: ['$m > 3$.', '$m \\le 3$.', '$m \\in \\mathbb{R}$.'],
            explanation:
              'Vì $a = -1 < 0$, để $f(x) < 0,\\ \\forall x \\in \\mathbb{R}$ thì $\\Delta\' = (m - 1)^2 - (-1)(-m^2 + 5m - 10) < 0 \\Leftrightarrow m^2 - 2m + 1 - m^2 + 5m - 10 < 0 \\Leftrightarrow 3m - 9 < 0 \\Leftrightarrow m < 3$.',
          },
          {
            topic: 'Bài 17: Giao của hai tập nghiệm bất phương trình',
            prompt:
              'Tập nghiệm của hệ gồm hai bất phương trình $\\begin{cases} x^2 - 4x + 3 \\le 0 \\\\ x - 2 > 0 \\end{cases}$ là:',
            correct: '$(2; 3]$.',
            wrongs: ['$[1; 3]$.', '$[1; 2)$.', '$(2; +\\infty)$.'],
            explanation:
              'Bất phương trình thứ nhất có nghiệm $1 \\le x \\le 3$; bất phương trình thứ hai có nghiệm $x > 2$. Giao lại ta được $x \\in (2; 3]$.',
          },
          {
            topic: 'Bài 17: Tìm miền giá trị mà đồ thị parabol nằm phía trên đường thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, đồ thị parabol $(P): y = x^2 - x + 1$ nằm phía trên đường thẳng $d: y = 2x + 5$ khi và chỉ khi:',
            correct: '$x \\in (-\\infty; -1) \\cup (4; +\\infty)$.',
            wrongs: ['$x \\in (-1; 4)$.', '$x \\in [-1; 4]$.', '$x \\in (-4; 1)$.'],
            explanation:
              'Đồ thị $(P)$ nằm phía trên $d$ khi $x^2 - x + 1 > 2x + 5 \\Leftrightarrow x^2 - 3x - 4 > 0 \\Leftrightarrow x < -1$ hoặc $x > 4$.',
          },
          {
            topic: 'Bài 17: Ứng dụng bất phương trình bậc hai vào bài toán lợi nhuận',
            prompt:
              'Lợi nhuận $L(x)$ (triệu đồng) của một xưởng sản xuất theo sản lượng $x$ (tấn) là $L(x) = -x^2 + 14x - 24$. Để xưởng không bị lỗ ($L(x) \\ge 0$) thì sản lượng $x$ phải thuộc đoạn nào?',
            correct: '$[2; 12]$.',
            wrongs: ['$[3; 8]$.', '$[0; 14]$.', '$(2; 12)$.'],
            explanation:
              'Để không bị lỗ: $-x^2 + 14x - 24 \\ge 0 \\Leftrightarrow x^2 - 14x + 24 \\le 0 \\Leftrightarrow 2 \\le x \\le 12$.',
          },
          {
            topic: 'Bài 17: Điều kiện để phương trình bậc hai có hai nghiệm trái dấu',
            prompt: 'Phương trình $x^2 - 5x + m - 3 = 0$ có hai nghiệm trái dấu khi và chỉ khi:',
            correct: '$m < 3$.',
            wrongs: ['$m > 3$.', '$m \\le 3$.', '$m > -3$.'],
            explanation:
              'Phương trình bậc hai $ax^2 + bx + c = 0$ có hai nghiệm trái dấu khi và chỉ khi $P = \\frac{c}{a} < 0 \\Leftrightarrow m - 3 < 0 \\Leftrightarrow m < 3$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 17: Đọc dấu tam thức bậc hai từ đồ thị (Tương tự HĐ2 & HĐ3 trang 20)',
            prompt:
              'Cho hàm số bậc hai $y = f(x) = ax^2 + bx + c$ có đồ thị là parabol cắt trục hoành tại hai điểm $(-2; 0), (3; 0)$ và đi qua điểm $(0; 6)$ như hình vẽ. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzParabola(-1, 1, 6, 'y=-x^2+x+6'),
            statements: [
              {
                statement: 'Hệ số $a$ của tam thức bậc hai $f(x)$ là số âm ($a < 0$).',
                isCorrect: true,
                explanation: 'Đồ thị có bề lõm quay xuống dưới nên hệ số $a < 0$ (cụ thể $f(x) = -x^2 + x + 6$).',
              },
              {
                statement: 'Trên khoảng $(-2; 3)$, đồ thị nằm phía trên trục $Ox$ nên $f(x) > 0$.',
                isCorrect: true,
                explanation: 'Với mọi $x \\in (-2; 3)$, các điểm trên parabol có tung độ dương nên $f(x) > 0$.',
              },
              {
                statement: 'Tập nghiệm của bất phương trình $f(x) \\le 0$ là đoạn $[-2; 3]$.',
                isCorrect: false,
                explanation:
                  'Bất phương trình $f(x) \\le 0$ ứng với phần đồ thị nằm dưới hoặc trên trục $Ox$, tức là $S = (-\\infty; -2] \\cup [3; +\\infty)$.',
              },
              {
                statement: 'Bất phương trình $f(x) > 4$ có tập nghiệm là khoảng $(-1; 2)$.',
                isCorrect: true,
                explanation:
                  'Vì $f(x) = -(x + 2)(x - 3) = -x^2 + x + 6$, nên $f(x) > 4 \\Leftrightarrow -x^2 + x + 2 > 0 \\Leftrightarrow x^2 - x - 2 < 0 \\Leftrightarrow -1 < x < 2$.',
              },
            ],
          },
          {
            topic: 'Bài 17: Bài toán hình học hai đường tròn tiếp xúc trong đường tròn lớn (Tương tự Bài 6.19)',
            prompt:
              'Xét đường tròn đường kính $AB = 8$ và một điểm $M$ di chuyển trên đoạn $AB$, đặt $AM = x\\ (0 < x < 8)$. Xét hai đường tròn nhỏ có đường kính lần lượt là $AM$ và $MB$. Gọi $S(x)$ là diện tích phần hình phẳng nằm trong hình tròn lớn và nằm ngoài hai hình tròn nhỏ.',
            statements: [
              {
                statement: 'Tổng diện tích của hai hình tròn nhỏ là $\\pi\\left[\\left(\\frac{x}{2}\\right)^2 + \\left(\\frac{8 - x}{2}\\right)^2\\right] = \\frac{\\pi}{2}(x^2 - 8x + 32)$.',
                isCorrect: true,
                explanation:
                  'Bán kính hai đường tròn nhỏ là $\\frac{x}{2}$ và $\\frac{8 - x}{2}$, tổng diện tích là $\\frac{\\pi}{4}[x^2 + (8 - x)^2] = \\frac{\\pi}{2}(x^2 - 8x + 32)$.',
              },
              {
                statement: 'Biểu thức diện tích $S(x)$ là $S(x) = \\frac{\\pi}{2}(-x^2 + 8x)$.',
                isCorrect: true,
                explanation:
                  'Diện tích hình tròn lớn bán kính $R = 4$ là $16\\pi$. Do đó $S(x) = 16\\pi - \\frac{\\pi}{2}(x^2 - 8x + 32) = \\frac{\\pi}{2}(-x^2 + 8x)$.',
              },
              {
                statement: 'Diện tích $S(x)$ không vượt quá một nửa tổng diện tích hai hình tròn nhỏ khi $3x^2 - 24x + 32 \\ge 0$.',
                isCorrect: true,
                explanation:
                  'Yêu cầu $\\frac{\\pi}{2}(-x^2 + 8x) \\le \\frac{1}{2} \\cdot \\frac{\\pi}{2}(x^2 - 8x + 32) \\Leftrightarrow -2x^2 + 16x \\le x^2 - 8x + 32 \\Leftrightarrow 3x^2 - 24x + 32 \\ge 0$.',
              },
              {
                statement: 'Tại vị trí $M$ là trung điểm của $AB$ ($x = 4$), diện tích $S(x)$ nhỏ hơn một nửa tổng diện tích hai hình tròn nhỏ.',
                isCorrect: false,
                explanation:
                  'Tại $x = 4$: $S(4) = 8\\pi$, còn tổng diện tích hai hình tròn nhỏ cũng bằng $8\\pi$ (một nửa là $4\\pi$). Vì $8\\pi > 4\\pi$ nên mệnh đề sai.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 17: Tìm số giá trị nguyên của tham số để tam thức luôn dương',
            prompt:
              'Có bao nhiêu giá trị nguyên của tham số $m$ để tam thức bậc hai $f(x) = x^2 - 2(m - 1)x + m + 5$ dương với mọi $x \\in \\mathbb{R}$?',
            answers: ['4'],
            explanation:
              'Điều kiện $\\Delta\' = (m - 1)^2 - (m + 5) = m^2 - 3m - 4 < 0 \\Leftrightarrow -1 < m < 4$. Các giá trị nguyên của $m$ là $\\{0; 1; 2; 3\\}$, có tất cả $4$ giá trị.',
          },
          {
            topic: 'Bài 17: Tìm nghiệm nguyên lớn nhất của bất phương trình bậc hai',
            prompt:
              'Tìm nghiệm nguyên lớn nhất của bất phương trình $2x^2 - 9x - 5 < 0$.',
            answers: ['4'],
            explanation:
              'Tam thức $2x^2 - 9x - 5$ có hai nghiệm $x_1 = -\\frac{1}{2}$ và $x_2 = 5$. Tập nghiệm của bất phương trình là $\\left(-\\frac{1}{2}; 5\\right)$, nên nghiệm nguyên lớn nhất là $x = 4$.',
          },
          {
            topic: 'Bài 17: Bài toán rào vườn diện tích đạt ngưỡng tối thiểu',
            prompt:
              'Một mảnh vườn hình chữ nhật có chu vi $40\\text{ m}$ và chiều rộng là $x\\text{ (m)}$ ($0 < x \\le 10$). Có bao nhiêu giá trị nguyên của chiều rộng $x$ để diện tích mảnh vườn không nhỏ hơn $91\\text{ m}^2$?',
            answers: ['4'],
            explanation:
              'Nửa chu vi là $20\\text{ m}$, diện tích $S(x) = x(20 - x) \\ge 91 \\Leftrightarrow x^2 - 20x + 91 \\le 0 \\Leftrightarrow 7 \\le x \\le 13$. Kết hợp $x \\le 10$, ta có $x \\in \\{7; 8; 9; 10\\}$, gồm $4$ giá trị nguyên.',
          },
          {
            topic: 'Bài 17: Giá trị nguyên nhỏ nhất của $m$ để bất phương trình vô nghiệm',
            prompt:
              'Tìm giá trị nguyên nhỏ nhất của tham số $m$ để bất phương trình $x^2 - 4x + m \\le 0$ vô nghiệm.',
            answers: ['5'],
            explanation:
              'Bất phương trình $x^2 - 4x + m \\le 0$ vô nghiệm khi và chỉ khi $x^2 - 4x + m > 0,\\ \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta\' = 4 - m < 0 \\Leftrightarrow m > 4$. Giá trị nguyên nhỏ nhất của $m$ là $5$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 17: Giải bất phương trình bậc hai bằng cách thu gọn hai vế',
            problemStatement:
              'Giải bất phương trình $(x - 2)(2x + 3) \\ge x^2 - 3$.',
            conclusionTarget: 'Đưa về bất phương trình bậc hai chuẩn và tìm tập nghiệm $S$.',
            steps: [
              'Khai triển vế trái và chuyển vế: $2x^2 - x - 6 \\ge x^2 - 3 \\Leftrightarrow x^2 - x - 3 \\ge 0$.',
              'Xét tam thức $f(x) = x^2 - x - 3$ có hệ số $a = 1 > 0$ và biệt thức $\\Delta = (-1)^2 - 4(1)(-3) = 13 > 0$.',
              'Tam thức $f(x)$ có hai nghiệm phân biệt là $x_1 = \\frac{1 - \\sqrt{13}}{2}$ và $x_2 = \\frac{1 + \\sqrt{13}}{2}$.',
              'Vì $a = 1 > 0$ nên $f(x) \\ge 0$ ngoài khoảng hai nghiệm: $S = \\left(-\\infty; \\frac{1 - \\sqrt{13}}{2}\\right] \\cup \\left[\\frac{1 + \\sqrt{13}}{2}; +\\infty\\right)$.',
            ],
            analysis:
              'Khai triển và chuyển toàn bộ các hạng tử về một vế để đưa bất phương trình về dạng chuẩn $ax^2 + bx + c \\ge 0$.',
          },
          {
            topic: 'Bài 17: Tìm tham số để tam thức bậc hai luôn không dương trên $\\mathbb{R}$',
            problemStatement:
              'Tìm tất cả các giá trị của tham số $m$ để bất phương trình $-x^2 + 2(m + 1)x - m^2 - 4m \\le 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$.',
            conclusionTarget: 'Xác định điều kiện của $m$.',
            steps: [
              'Tam thức $f(x) = -x^2 + 2(m + 1)x - m^2 - 4m$ có hệ số $a = -1 < 0$.',
              'Để $f(x) \\le 0$ với mọi $x \\in \\mathbb{R}$ thì biệt thức thu gọn phải thoả mãn $\\Delta\' \\le 0$.',
              'Ta có $\\Delta\' = (m + 1)^2 - (-1)(-m^2 - 4m) = m^2 + 2m + 1 - m^2 - 4m = 1 - 2m$.',
              'Giải bất phương trình $1 - 2m \\le 0 \\Leftrightarrow m \\ge \\frac{1}{2}$. Vậy $m \\in \\left[\\frac{1}{2}; +\\infty\\right)$.',
            ],
            analysis:
              'Chú ý: Với bất phương trình không ngặt $f(x) \\le 0,\\ \\forall x \\in \\mathbb{R}$ (khi $a < 0$), điều kiện của biệt thức là $\\Delta\' \\le 0$ (cho phép dấu bằng).',
          },
          {
            topic: 'Bài 17: Xét dấu tích/thương của tam thức bậc hai',
            problemStatement:
              'Tìm tập xác định $D$ của hàm số $y = \\sqrt{\\frac{x^2 - 4x + 3}{x^2 + 2}}$.',
            conclusionTarget: 'Giải bất phương trình dưới căn và kết luận tập xác định $D$.',
            steps: [
              'Vì mẫu số $x^2 + 2 \\ge 2 > 0$ với mọi $x \\in \\mathbb{R}$, nên hàm số xác định khi và chỉ khi tử số $x^2 - 4x + 3 \\ge 0$.',
              'Tam thức $f(x) = x^2 - 4x + 3$ có hệ số $a = 1 > 0$ và hai nghiệm phân biệt $x_1 = 1, x_2 = 3$.',
              'Theo định lí về dấu, $x^2 - 4x + 3 \\ge 0 \\Leftrightarrow x \\le 1$ hoặc $x \\ge 3$.',
              'Vậy tập xác định của hàm số là $D = (-\\infty; 1] \\cup [3; +\\infty)$.',
            ],
            analysis:
              'Khi mẫu thức luôn dương trên $\\mathbb{R}$, dấu của phân thức trùng với dấu của tử thức.',
          },
          {
            topic: 'Bài 17: Giải bài toán thực tiễn bằng bất phương trình bậc hai (Tương tự Vận dụng trang 23)',
            problemStatement:
              'Một pháo hoa được bắn thẳng đứng lên từ mặt đất với độ cao $h(t) = -5t^2 + 35t\\text{ (m)}$ theo thời gian $t$ (giây). Trong khoảng thời gian nào thì quả pháo hoa ở độ cao từ $50\\text{ m}$ trở lên?',
            conclusionTarget: 'Tìm đoạn thời gian $t$ thoả mãn yêu cầu.',
            steps: [
              'Để pháo hoa ở độ cao từ $50\\text{ m}$ trở lên, ta cần giải bất phương trình $h(t) \\ge 50$.',
              'Thay công thức $h(t)$ vào: $-5t^2 + 35t \\ge 50 \\Leftrightarrow 5t^2 - 35t + 50 \\le 0 \\Leftrightarrow t^2 - 7t + 10 \\le 0$.',
              'Tam thức $t^2 - 7t + 10$ có hệ số $a = 1 > 0$ và hai nghiệm là $t_1 = 2,\\ t_2 = 5$.',
              'Vậy trong khoảng thời gian từ giây thứ $2$ đến giây thứ $5$ ($t \\in [2; 5]$), pháo hoa ở độ cao từ $50\\text{ m}$ trở lên.',
            ],
            analysis:
              'Đổi chiều bất phương trình khi chia cả hai vế cho $-5 < 0$.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-18',
    lessonNumber: 18,
    name: 'Bài 18',
    topicTitle: 'Phương trình quy về phương trình bậc hai',
    chapter: 'Chương VI: Hàm số, đồ thị và ứng dụng',
    keySummary:
      'Giải hai dạng phương trình chứa căn thức thường gặp quy về phương trình bậc hai: $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$ và $\\sqrt{ax^2 + bx + c} = dx + e$ bằng phương pháp bình phương hai vế rồi thử lại nghiệm (hoặc kết hợp điều kiện không âm), và vận dụng giải các bài toán hình học - chuyển động thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-18-1',
        lessonId: 'bai-18',
        title: 'Đề ôn Bài 18 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–2, Luyện tập 1–2, Vận dụng và Bài tập 6.20–6.23 (SGK Toán 10 Tập 2, trang 25–27)',
        description:
          'Đề ôn tập số 01 của Bài 18 (Phương trình quy về phương trình bậc hai): Giải phương trình chứa căn hai dạng chuẩn, loại nghiệm ngoại lai và giải toán thực tế.',
        mcqs: [
          {
            topic: 'Bài 18: Giải phương trình dạng $\\sqrt{f(x)} = \\sqrt{g(x)}$ (Tương tự Ví dụ 1)',
            prompt: 'Tập nghiệm của phương trình $\\sqrt{2x^2 - 3x - 5} = \\sqrt{x^2 - x - 2}$ là:',
            correct: '$S = \\{3\\}$.',
            wrongs: ['$S = \\{-1; 3\\}$.', '$S = \\{-1\\}$.', '$S = \\emptyset$.'],
            explanation:
              'Bình phương hai vế ta được $2x^2 - 3x - 5 = x^2 - x - 2 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Thử lại vào phương trình đầu: với $x = -1$ thì biểu thức dưới căn bằng $-2 < 0$ (loại); với $x = 3$ thì hai vế bằng $2$ (thoả mãn). Vậy $S = \\{3\\}$.',
          },
          {
            topic: 'Bài 18: Số nghiệm của phương trình $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$ (Tương tự Luyện tập 1a)',
            prompt: 'Số nghiệm thực của phương trình $\\sqrt{3x^2 - 4x - 4} = \\sqrt{x^2 + 2x - 4}$ là:',
            correct: '$1$.',
            wrongs: ['$2$.', '$0$.', '$3$.'],
            explanation:
              'Bình phương hai vế: $3x^2 - 4x - 4 = x^2 + 2x - 4 \\Leftrightarrow 2x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$. Thử lại: với $x = 0$, biểu thức dưới căn bằng $-4 < 0$ (loại); với $x = 3$, hai vế bằng $\\sqrt{11}$ (thoả mãn). Vậy phương trình có đúng $1$ nghiệm.',
          },
          {
            topic: 'Bài 18: Giải phương trình dạng $\\sqrt{f(x)} = dx + e$ (Tương tự Ví dụ 2)',
            prompt: 'Nghiệm của phương trình $\\sqrt{2x^2 - 3x - 1} = x - 1$ là:',
            correct: '$x = 2$.',
            wrongs: ['$x = -1$.', '$x = 2$ và $x = -1$.', '$x = 3$.'],
            explanation:
              'Bình phương hai vế: $2x^2 - 3x - 1 = (x - 1)^2 = x^2 - 2x + 1 \\Leftrightarrow x^2 - x - 2 = 0 \\Leftrightarrow x = -1$ hoặc $x = 2$. Với $x = -1$ thì vế phải $x - 1 = -2 < 0$ (loại). Với $x = 2$ thì hai vế bằng $1$ (nhận). Vậy $x = 2$.',
          },
          {
            topic: 'Bài 18: Phương trình chứa căn vô nghiệm do điều kiện vế phải (Tương tự Bài 6.21b)',
            prompt: 'Số nghiệm của phương trình $\\sqrt{x^2 + 4x + 5} = x - 3$ là:',
            correct: '$0$.',
            wrongs: ['$1$.', '$2$.', '$3$.'],
            explanation:
              'Bình phương hai vế: $x^2 + 4x + 5 = (x - 3)^2 = x^2 - 6x + 9 \\Leftrightarrow 10x = 4 \\Leftrightarrow x = \\frac{2}{5}$. Thử lại: với $x = \\frac{2}{5}$, vế phải $x - 3 = -\\frac{13}{5} < 0$ trong khi vế trái không âm, nên bị loại. Phương trình vô nghiệm.',
          },
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{f(x)} = g(x)$ có hai nghiệm đều thoả mãn (Tương tự Bài 6.21a)',
            prompt: 'Tổng tất cả các nghiệm của phương trình $\\sqrt{2x^2 - x + 3} = x + 1$ bằng:',
            correct: '$3$.',
            wrongs: ['$1$.', '$2$.', '$5$.'],
            explanation:
              'Bình phương hai vế: $2x^2 - x + 3 = (x + 1)^2 = x^2 + 2x + 1 \\Leftrightarrow x^2 - 3x + 2 = 0 \\Leftrightarrow x = 1$ hoặc $x = 2$. Thử lại cả hai giá trị đều làm $x + 1 > 0$ nên đều là nghiệm. Tổng các nghiệm là $1 + 2 = 3$.',
          },
          {
            topic: 'Bài 18: Điều kiện cần để $\\sqrt{ax^2 + bx + c} = dx + e$ có nghiệm',
            prompt:
              'Khi giải phương trình $\\sqrt{ax^2 + bx + c} = dx + e$, một giá trị $x_0$ làm cho $dx_0 + e < 0$ thì ta có thể kết luận ngay điều gì?',
            correct: '$x_0$ chắc chắn không phải là nghiệm của phương trình.',
            wrongs: [
              '$x_0$ là nghiệm âm của phương trình.',
              '$x_0$ vẫn là nghiệm nếu $ax_0^2 + bx_0 + c = (dx_0 + e)^2$.',
              '$x_0$ là nghiệm kép của phương trình.',
            ],
            explanation:
              'Vì căn bậc hai số học $\\sqrt{ax^2 + bx + c} \\ge 0$ nên nếu tại $x_0$ vế phải $dx_0 + e < 0$ thì hai vế trái dấu, do đó $x_0$ không thể là nghiệm (chú ý trang 26 SGK).',
          },
          {
            topic: 'Bài 18: Giải phương trình dạng $\\sqrt{f(x)} = \\sqrt{g(x)}$ (Tương tự Bài 6.20b)',
            prompt: 'Nghiệm dương của phương trình $\\sqrt{x^2 + 3x + 2} = \\sqrt{2x^2 - x - 3}$ là:',
            correct: '$x = 5$.',
            wrongs: ['$x = 4$.', '$x = 1$.', '$x = 6$.'],
            explanation:
              'Bình phương hai vế: $x^2 + 3x + 2 = 2x^2 - x - 3 \\Leftrightarrow x^2 - 4x - 5 = 0 \\Leftrightarrow x = -1$ hoặc $x = 5$. Thử lại với $x = 5$, hai vế đều bằng $\\sqrt{42}$ (thoả mãn). Vậy nghiệm dương là $x = 5$.',
          },
          {
            topic: 'Bài 18: Phương trình quy về phương trình bậc hai bằng chuyển vế (Tương tự Bài 6.28)',
            prompt: 'Tập nghiệm của phương trình $\\sqrt{2x^2 - 2x + 4} = x + 1$ là:',
            correct: '$S = \\{1; 3\\}$.',
            wrongs: ['$S = \\{-1; 3\\}$.', '$S = \\{3\\}$.', '$S = \\{1\\}$.'],
            explanation:
              'Bình phương hai vế: $2x^2 - 2x + 4 = (x + 1)^2 = x^2 + 2x + 1 \\Leftrightarrow x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Cả hai giá trị đều thoả mãn $x + 1 \\ge 0$ nên $S = \\{1; 3\\}$.',
          },
          {
            topic: 'Bài 18: Giải phương trình chứa căn có biểu thức bậc nhất dưới căn',
            prompt: 'Nghiệm của phương trình $\\sqrt{3x + 7} = x - 1$ là:',
            correct: '$x = 6$.',
            wrongs: ['$x = -1$.', '$x = 6$ và $x = -1$.', '$x = 3$.'],
            explanation:
              'Bình phương hai vế: $3x + 7 = (x - 1)^2 = x^2 - 2x + 1 \\Leftrightarrow x^2 - 5x - 6 = 0 \\Leftrightarrow x = -1$ hoặc $x = 6$. Thử lại chỉ có $x = 6$ thoả mãn ($\\sqrt{25} = 5$).',
          },
          {
            topic: 'Bài 18: Bài toán hình học tính độ dài cạnh bằng phương trình chứa căn (Tương tự Bài 6.22)',
            prompt:
              'Cho tam giác $ABC$ vuông tại $A$ có cạnh $AB = 3\\text{ cm}$, cạnh $AC = x\\text{ (cm)}$ ($x > 0$) và cạnh huyền $BC = \\sqrt{2x^2 - 3x + 5}\\text{ (cm)}$. Giá trị của $x$ bằng:',
            correct: '$x = 4$.',
            wrongs: ['$x = 2$.', '$x = 3$.', '$x = 5$.'],
            explanation:
              'Theo định lí Pythagore: $BC = \\sqrt{AB^2 + AC^2} \\Rightarrow \\sqrt{2x^2 - 3x + 5} = \\sqrt{x^2 + 9}$. Bình phương hai vế: $2x^2 - 3x + 5 = x^2 + 9 \\Leftrightarrow x^2 - 3x - 4 = 0 \\Leftrightarrow x = 4$ (do $x > 0$).',
          },
          {
            topic: 'Bài 18: Giao điểm của đồ thị hàm căn thức và đường thẳng',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, đồ thị hàm số $y = \\sqrt{x^2 + 5}$ và đường thẳng $y = 2x - 1$ cắt nhau tại điểm $M(x_0; y_0)$. Giá trị của $x_0 + y_0$ bằng:',
            correct: '$5$.',
            wrongs: ['$3$.', '$4$.', '$7$.'],
            explanation:
              'Phương trình hoành độ giao điểm: $\\sqrt{x^2 + 5} = 2x - 1$. Với $x \\ge \\frac{1}{2}$, bình phương được $x^2 + 5 = 4x^2 - 4x + 1 \\Leftrightarrow 3x^2 - 4x - 4 = 0 \\Leftrightarrow x = 2$ (nhận) hoặc $x = -\\frac{2}{3}$ (loại). Suy ra $x_0 = 2, y_0 = 3 \\Rightarrow x_0 + y_0 = 5$.',
          },
          {
            topic: 'Bài 18: Ứng dụng phương trình chứa căn trong bài toán điểm hẹn (Tương tự Vận dụng trang 26)',
            prompt:
              'Một trạm cứu hộ $A$ ở trên đảo cách bờ biển thẳng tại điểm $B$ một khoảng $AB = 3\\text{ km}$. Điểm $C$ trên bờ biển cách $B$ một đoạn $BC = 9\\text{ km}$. Người cứu hộ chèo xuồng từ $A$ đến điểm $M$ trên đoạn $BC$ (với $BM = x\\text{ km}$) với vận tốc $3\\text{ km/h}$ để gặp xe cứu thương đi từ $C$ đến $M$ với vận tốc $5\\text{ km/h}$ xuất phát cùng lúc. Phương trình xác định $x$ để hai bên đến $M$ cùng lúc là:',
            correct: '$\\frac{\\sqrt{x^2 + 9}}{3} = \\frac{9 - x}{5}$.',
            wrongs: [
              '$\\frac{\\sqrt{x^2 + 3}}{3} = \\frac{9 - x}{5}$.',
              '$\\frac{\\sqrt{x^2 + 9}}{5} = \\frac{9 - x}{3}$.',
              '$3\\sqrt{x^2 + 9} = 5(9 - x)$.',
            ],
            explanation:
              'Quãng đường xuồng đi là $AM = \\sqrt{AB^2 + BM^2} = \\sqrt{x^2 + 9}\\text{ (km)}$, thời gian là $\\frac{\\sqrt{x^2 + 9}}{3}\\text{ (giờ)}$. Thời gian xe đi từ $C$ đến $M$ là $\\frac{9 - x}{5}\\text{ (giờ)}$. Để gặp nhau cùng lúc: $\\frac{\\sqrt{x^2 + 9}}{3} = \\frac{9 - x}{5}$.',
            tikzCode: tikzCoastTriangleModel(3, 9),
          },
        ],
        tfs: [
          {
            topic: 'Bài 18: Quy trình giải và biện luận nghiệm phương trình $\\sqrt{f(x)} = g(x)$ (Tương tự Ví dụ 2)',
            prompt:
              'Cho phương trình chứa căn thức $\\sqrt{3x^2 - 13x + 14} = x - 3$ (1). Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Điều kiện để vế phải của phương trình (1) không âm là $x \\ge 3$.',
                isCorrect: true,
                explanation: 'Vế phải là $x - 3 \\ge 0 \\Leftrightarrow x \\ge 3$.',
              },
              {
                statement: 'Khi bình phương hai vế của phương trình (1), ta thu được phương trình bậc hai $2x^2 - 7x + 5 = 0$.',
                isCorrect: true,
                explanation:
                  'Bình phương hai vế: $3x^2 - 13x + 14 = (x - 3)^2 = x^2 - 6x + 9 \\Leftrightarrow 2x^2 - 7x + 5 = 0$.',
              },
              {
                statement: 'Phương trình $2x^2 - 7x + 5 = 0$ có hai nghiệm là $x = 1$ và $x = \\frac{5}{2}$.',
                isCorrect: true,
                explanation: 'Vì $a + b + c = 2 - 7 + 5 = 0$ nên phương trình có hai nghiệm $x = 1$ và $x = \\frac{5}{2}$.',
              },
              {
                statement: 'Phương trình (1) đã cho có đúng $2$ nghiệm phân biệt.',
                isCorrect: false,
                explanation:
                  'Cả hai giá trị $x = 1$ và $x = \\frac{5}{2} = 2,5$ đều nhỏ hơn $3$ (làm cho vế phải âm), nên khi thử lại đều không thoả mãn. Vậy phương trình (1) vô nghiệm.',
              },
            ],
          },
          {
            topic: 'Bài 18: Bài toán thực tế hai bạn hẹn gặp nhau trên đường (Tương tự Bài 6.23)',
            prompt:
              'Nhà bạn An tại điểm $A$ cách lề đường thẳng một khoảng $AH = 60\\text{ m}$ ($AH$ vuông góc với lề đường tại $H$). Khi thấy bạn Bình đi xe đạp trên lề đường tại vị trí $B$ cách $H$ một đoạn $BH = 220\\text{ m}$, An bắt đầu chạy bộ theo đường thẳng $AC$ ra điểm $C$ nằm giữa $B$ và $H$ trên lề đường để gặp Bình vừa kịp lúc. Biết vận tốc chạy bộ của An là $6\\text{ km/h}$ và vận tốc đạp xe của Bình là $18\\text{ km/h}$. Đặt $CH = x\\text{ (m)}$ với $0 < x < 220$.',
            statements: [
              {
                statement: 'Tỉ số vận tốc của Bình so với vận tốc của An bằng $3$, do đó trong cùng thời gian thì quãng đường $BC$ gấp $3$ lần quãng đường $AC$.',
                isCorrect: true,
                explanation: 'Ta có $\\frac{v_{\\text{Bình}}}{v_{\\text{An}}} = \\frac{18}{6} = 3$. Vì hai bạn xuất phát và gặp nhau cùng lúc nên $BC = 3AC$.',
              },
              {
                statement: 'Theo định lí Pythagore trong tam giác vuông $AHC$, ta có $AC = \\sqrt{x^2 + 3600}\\text{ (m)}$ và $BC = 220 - x\\text{ (m)}$.',
                isCorrect: true,
                explanation: 'Trong $\\triangle AHC$ vuông tại $H$: $AC = \\sqrt{CH^2 + AH^2} = \\sqrt{x^2 + 60^2} = \\sqrt{x^2 + 3600}$, và $BC = BH - CH = 220 - x$.',
              },
              {
                statement: 'Phương trình tìm $x$ là $3\\sqrt{x^2 + 3600} = 220 - x \\Leftrightarrow 8x^2 + 440x - 16000 = 0$.',
                isCorrect: true,
                explanation:
                  'Bình phương hai vế của $3\\sqrt{x^2 + 3600} = 220 - x$: $9(x^2 + 3600) = (220 - x)^2 = x^2 - 440x + 48400 \\Leftrightarrow 8x^2 + 440x - 16000 = 0$.',
              },
              {
                statement: 'Điểm hẹn $C$ cách $H$ một khoảng $x = 40\\text{ m}$.',
                isCorrect: false,
                explanation:
                  'Giải $8x^2 + 440x - 16000 = 0 \\Leftrightarrow x^2 + 55x - 2000 = 0 \\Leftrightarrow (x - 25)(x + 80) = 0 \\Rightarrow x = 25\\text{ m}$ (không phải $40\\text{ m}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{f(x)} = \\sqrt{g(x)}$',
            prompt:
              'Tìm nghiệm dương của phương trình $\\sqrt{2x^2 - 5x + 1} = \\sqrt{x^2 - 2x + 5}$.',
            answers: ['4'],
            explanation:
              'Bình phương hai vế: $2x^2 - 5x + 1 = x^2 - 2x + 5 \\Leftrightarrow x^2 - 3x - 4 = 0 \\Leftrightarrow x = -1$ hoặc $x = 4$. Nghiệm dương thoả mãn phương trình là $x = 4$.',
          },
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{f(x)} = dx + e$ (Tương tự Ví dụ 2)',
            prompt:
              'Tìm nghiệm của phương trình $\\sqrt{2x^2 - 5x - 9} = x - 1$.',
            answers: ['5'],
            explanation:
              'Bình phương hai vế: $2x^2 - 5x - 9 = x^2 - 2x + 1 \\Leftrightarrow x^2 - 3x - 10 = 0 \\Leftrightarrow x = -2$ hoặc $x = 5$. Thử lại chỉ có $x = 5$ thoả mãn ($\\sqrt{16} = 4$).',
          },
          {
            topic: 'Bài 18: Bài toán thực tế trạm hải đăng và bờ biển (Tương tự Vận dụng trang 26)',
            prompt:
              'Một trạm hải đăng tại $A$ cách bờ biển tại $B$ một khoảng $AB = 3\\text{ km}$. Thôn $C$ trên bờ biển cách $B$ một đoạn $BC = 8,5\\text{ km}$. Bác Hải chèo thuyền từ $A$ đến điểm $M$ trên đoạn $BC$ (với $BM = x\\text{ km}$) với vận tốc $3\\text{ km/h}$ để gặp anh Tùng đi xe kéo từ $C$ đến $M$ với vận tốc $5\\text{ km/h}$ xuất phát cùng lúc. Tính độ dài đoạn $BM = x$ (đơn vị: km).',
            answers: ['2,25', '2.25'],
            explanation:
              'Phương trình thời gian bằng nhau: $\\frac{\\sqrt{x^2 + 9}}{3} = \\frac{8,5 - x}{5} \\Leftrightarrow 25(x^2 + 9) = 9(8,5 - x)^2 \\Leftrightarrow 16x^2 + 153x - 425,25 = 0$. Với $0 < x < 8,5$, ta tìm được $x = 2,25\\text{ km}$.',
          },
          {
            topic: 'Bài 18: Giải phương trình chứa căn thức bậc hai',
            prompt:
              'Tìm nghiệm của phương trình $\\sqrt{x^2 + 16} = x + 2$.',
            answers: ['3'],
            explanation:
              'Bình phương hai vế của $\\sqrt{x^2 + 16} = x + 2$ (với $x \\ge -2$): $x^2 + 16 = x^2 + 4x + 4 \\Leftrightarrow 4x = 12 \\Leftrightarrow x = 3$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 18: Giải phương trình dạng $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$ (Tương tự Ví dụ 1)',
            problemStatement:
              'Giải phương trình chứa căn thức $\\sqrt{3x^2 - 7x + 2} = \\sqrt{x^2 - 3x + 2}$.',
            conclusionTarget: 'Bình phương hai vế, giải phương trình bậc hai và thử lại để kết luận nghiệm.',
            steps: [
              'Bình phương hai vế của phương trình đã cho, ta được $3x^2 - 7x + 2 = x^2 - 3x + 2$.',
              'Thu gọn phương trình về dạng bậc hai: $2x^2 - 4x = 0 \\Leftrightarrow 2x(x - 2) = 0$.',
              'Giải phương trình bậc hai trên, ta tìm được hai giá trị là $x = 0$ hoặc $x = 2$.',
              'Thử lại vào phương trình ban đầu: với $x = 0$ hai vế bằng $\\sqrt{2}$; với $x = 2$ hai vế bằng $0$. Vậy phương trình có tập nghiệm $S = \\{0; 2\\}$.',
            ],
            analysis:
              'Bước thử lại nghiệm vào phương trình gốc là bắt buộc vì phép bình phương hai vế chỉ là phép biến đổi hệ quả.',
          },
          {
            topic: 'Bài 18: Giải phương trình dạng $\\sqrt{ax^2 + bx + c} = dx + e$ (Tương tự Ví dụ 2)',
            problemStatement:
              'Giải phương trình $\\sqrt{3x^2 - 9x + 7} = x - 1$.',
            conclusionTarget: 'Tìm nghiệm của phương trình sau khi đối chiếu điều kiện.',
            steps: [
              'Bình phương hai vế của phương trình, ta được $3x^2 - 9x + 7 = (x - 1)^2 = x^2 - 2x + 1$.',
              'Chuyển vế và thu gọn ta được phương trình bậc hai: $2x^2 - 7x + 6 = 0$.',
              'Giải phương trình $2x^2 - 7x + 6 = 0$, ta tìm được hai nghiệm là $x = 2$ và $x = \\frac{3}{2}$.',
              'Thay lần lượt $x = 2$ và $x = \\frac{3}{2}$ vào phương trình đầu, cả hai đều làm vế phải dương và hai vế bằng nhau. Vậy $S = \\left\\{\\frac{3}{2}; 2\\right\\}$.',
            ],
            analysis:
              'Với cả $x = 2$ và $x = \\frac{3}{2}$, vế phải $x - 1 > 0$ nên cả hai nghiệm của phương trình hệ quả đều là nghiệm của phương trình đã cho.',
          },
          {
            topic: 'Bài 18: Giải bài toán thực tế điểm hẹn trên bờ biển (Tương tự Vận dụng trang 26)',
            problemStatement:
              'Trạm hải đăng $A$ cách bờ biển tại bến $B$ một khoảng $AB = 3\\text{ km}$. Thôn $C$ trên bờ biển cách bến $B$ một đoạn $BC = 8,5\\text{ km}$. Bác Việt chèo thuyền từ $A$ cập bến tại điểm $M$ thuộc đoạn $BC$ ($BM = x\\text{ km}$) với vận tốc $3\\text{ km/h}$ để gặp anh Nam kéo xe từ $C$ đến $M$ với vận tốc $5\\text{ km/h}$ xuất phát cùng lúc. Tìm $x$ để hai người đến $M$ cùng một lúc.',
            conclusionTarget: 'Thiết lập phương trình chứa căn và giải tìm $x$.',
            steps: [
              'Quãng đường chèo thuyền là $AM = \\sqrt{x^2 + 9}\\text{ (km)}$ và quãng đường kéo xe là $CM = 8,5 - x\\text{ (km)}$ với $0 < x < 8,5$.',
              'Để hai người gặp nhau tại $M$ cùng lúc mà không phải chờ nhau, thời gian đi của hai người phải bằng nhau: $\\frac{\\sqrt{x^2 + 9}}{3} = \\frac{8,5 - x}{5}$.',
              'Quy đồng và bình phương hai vế: $25(x^2 + 9) = 9(8,5 - x)^2 \\Leftrightarrow 16x^2 + 153x - 425,25 = 0$.',
              'Giải phương trình trên với điều kiện $0 < x < 8,5$, ta được nghiệm duy nhất $x = 2,25\\text{ (km)}$.',
            ],
            analysis:
              'Sử dụng công thức $t = \\frac{S}{v}$ cho hai chuyển động đồng thời để lập phương trình quy về phương trình bậc hai.',
          },
          {
            topic: 'Bài 18: Bài toán hình học tính diện tích tứ giác (Tương tự Bài 6.22)',
            problemStatement:
              'Cho tứ giác $ABCD$ có $AB \\perp CD$. Gọi $H$ là giao điểm của các đường thẳng $AB$ và $CD$ sao cho $A$ nằm giữa $H, B$ và $D$ nằm giữa $H, C$. Biết $AB = 2,\\ BC = 13,\\ CD = 8,\\ DA = 5$ và đặt $AH = x\\ (x > 0)$. Tính độ dài $x$ và diện tích tứ giác $ABCD$.',
            conclusionTarget: 'Thiết lập phương trình chứa căn theo $x$ và tính diện tích tứ giác $ABCD$.',
            steps: [
              'Trong tam giác vuông $AHD$ vuông tại $H$, ta có $HD = \\sqrt{AD^2 - AH^2} = \\sqrt{25 - x^2}$ (với $0 < x < 5$).',
              'Trong tam giác vuông $BHC$ vuông tại $H$, ta có $HB = x + 2,\\ HC = \\sqrt{25 - x^2} + 8$ và $HB^2 + HC^2 = BC^2 = 169$.',
              'Thay vào hệ thức Pythagore: $(x + 2)^2 + \\left(\\sqrt{25 - x^2} + 8\\right)^2 = 169 \\Leftrightarrow 4\\sqrt{25 - x^2} = 19 - x$, bình phương giải ra $x = 3$.',
              'Với $x = 3$, suy ra $HD = 4,\\ HB = 5,\\ HC = 12$. Diện tích tứ giác là $S_{ABCD} = S_{\\triangle BHC} - S_{\\triangle AHD} = \\frac{1}{2} \\cdot 5 \\cdot 12 - \\frac{1}{2} \\cdot 3 \\cdot 4 = 24$.',
            ],
            analysis:
              'Áp dụng định lí Pythagore trong hai tam giác vuông đồng dạng góc vuông tại $H$ để lập phương trình vô tỉ ẩn $x$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-18-2',
        lessonId: 'bai-18',
        title: 'Đề ôn Bài 18 - Đề số 02',
        subtitle: 'Thực hành giải phương trình chứa căn thức và bài toán vận dụng thực tế (SGK Toán 10 Tập 2, trang 25–27)',
        description:
          'Đề ôn tập số 02 của Bài 18 (Phương trình quy về phương trình bậc hai): Rèn kỹ năng kiểm tra nghiệm ngoại lai, giải phương trình chứa căn và bài toán tối ưu - chuyển động.',
        mcqs: [
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{f(x)} = \\sqrt{g(x)}$ (Tương tự Bài 6.20a)',
            prompt: 'Tập nghiệm của phương trình $\\sqrt{3x^2 - 5x - 2} = \\sqrt{x^2 - x + 4}$ là:',
            correct: '$S = \\{-1; 3\\}$.',
            wrongs: ['$S = \\{3\\}$.', '$S = \\{-1\\}$.', '$S = \\emptyset$.'],
            explanation:
              'Bình phương hai vế: $3x^2 - 5x - 2 = x^2 - x + 4 \\Leftrightarrow 2x^2 - 4x - 6 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Thử lại: với $x = -1$, hai vế bằng $\\sqrt{6}$; với $x = 3$, hai vế bằng $\\sqrt{10}$. Vậy $S = \\{-1; 3\\}$.',
          },
          {
            topic: 'Bài 18: Phương trình $\\sqrt{f(x)} = \\sqrt{g(x)}$ vô nghiệm (Tương tự Bài 6.20c)',
            prompt: 'Số nghiệm thực của phương trình $\\sqrt{2x^2 + 3x + 5} = \\sqrt{-x^2 - x + 2}$ là:',
            correct: '$0$.',
            wrongs: ['$1$.', '$2$.', '$3$.'],
            explanation:
              'Bình phương hai vế: $2x^2 + 3x + 5 = -x^2 - x + 2 \\Leftrightarrow 3x^2 + 4x + 3 = 0$. Phương trình bậc hai này có $\\Delta\' = 4 - 9 = -5 < 0$ nên vô nghiệm.',
          },
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{f(x)} = dx + e$ (Tương tự Luyện tập 2a)',
            prompt: 'Nghiệm nguyên lớn nhất của phương trình $\\sqrt{2x^2 + 3x + 4} = 2 - x$ là:',
            correct: '$x = 0$.',
            wrongs: ['$x = -7$.', '$x = 1$.', '$x = 2$.'],
            explanation:
              'Bình phương hai vế (với $x \\le 2$): $2x^2 + 3x + 4 = (2 - x)^2 = x^2 - 4x + 4 \\Leftrightarrow x^2 + 7x = 0 \\Leftrightarrow x = 0$ hoặc $x = -7$. Cả hai đều thoả mãn $x \\le 2$, trong đó nghiệm nguyên lớn nhất là $x = 0$.',
          },
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{f(x)} = dx + e$ (Tương tự Bài 6.21c)',
            prompt: 'Tập nghiệm của phương trình $\\sqrt{2x^2 - 5x - 9} = x - 1$ là:',
            correct: '$S = \\{5\\}$.',
            wrongs: ['$S = \\{-2; 5\\}$.', '$S = \\{-2\\}$.', '$S = \\{2; 5\\}$.'],
            explanation:
              'Bình phương hai vế: $2x^2 - 5x - 9 = (x - 1)^2 = x^2 - 2x + 1 \\Leftrightarrow x^2 - 3x - 10 = 0 \\Leftrightarrow x = -2$ (loại vì $x - 1 = -3 < 0$) hoặc $x = 5$ (thoả mãn). Vậy $S = \\{5\\}$.',
          },
          {
            topic: 'Bài 18: Biến đổi phương trình chứa căn về dạng chuẩn',
            prompt: 'Phương trình $\\sqrt{x^2 + 3x} - x = 1$ có nghiệm là:',
            correct: '$x = 1$.',
            wrongs: ['$x = -1$.', '$x = 2$.', '$x = 3$.'],
            explanation:
              'Chuyển vế: $\\sqrt{x^2 + 3x} = x + 1$. Với $x \\ge -1$, bình phương hai vế được $x^2 + 3x = x^2 + 2x + 1 \\Leftrightarrow x = 1$ (thoả mãn).',
          },
          {
            topic: 'Bài 18: Tổng các nghiệm của phương trình chứa căn (Tương tự Bài 6.33b)',
            prompt: 'Tổng tất cả các nghiệm của phương trình $\\sqrt{-x^2 + 5x - 4} = \\sqrt{x^2 - 3x + 2}$ là:',
            correct: '$4$.',
            wrongs: ['$5$.', '$3$.', '$1$.'],
            explanation:
              'Bình phương hai vế: $-x^2 + 5x - 4 = x^2 - 3x + 2 \\Leftrightarrow 2x^2 - 8x + 6 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Thử lại cả $x = 1$ (hai vế bằng $0$) và $x = 3$ (hai vế bằng $\\sqrt{2}$) đều thoả mãn. Tổng các nghiệm là $1 + 3 = 4$.',
          },
          {
            topic: 'Bài 18: Khoảng cách từ gốc toạ độ đến điểm trên đường thẳng',
            prompt:
              'Trên đường thẳng $d: y = x - 1$, điểm $M(x; y)$ có hoành độ dương và cách gốc toạ độ $O(0; 0)$ một khoảng bằng $\\sqrt{5}$. Hoành độ của điểm $M$ là:',
            correct: '$x = 2$.',
            wrongs: ['$x = 1$.', '$x = 3$.', '$x = \\sqrt{5}$.'],
            explanation:
              'Ta có $OM = \\sqrt{x^2 + (x - 1)^2} = \\sqrt{2x^2 - 2x + 1} = \\sqrt{5} \\Leftrightarrow 2x^2 - 2x - 4 = 0 \\Leftrightarrow x = 2$ hoặc $x = -1$. Vì $x > 0$ nên $x = 2$.',
          },
          {
            topic: 'Bài 18: Nghiệm nguyên của phương trình $\\sqrt{ax^2 + bx + c} = k$',
            prompt: 'Tích các nghiệm của phương trình $\\sqrt{x^2 - 4x + 7} = 2$ bằng:',
            correct: '$3$.',
            wrongs: ['$-3$.', '$4$.', '$7$.'],
            explanation:
              'Bình phương hai vế: $x^2 - 4x + 7 = 4 \\Leftrightarrow x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Tích hai nghiệm là $1 \\cdot 3 = 3$.',
          },
          {
            topic: 'Bài 18: Phương trình chứa căn thức có nghiệm kép',
            prompt: 'Phương trình $\\sqrt{2x^2 - 2x + 1} = x$ có bao nhiêu nghiệm thực?',
            correct: '$1$.',
            wrongs: ['$2$.', '$0$.', '$3$.'],
            explanation:
              'Với $x \\ge 0$, bình phương hai vế ta được $2x^2 - 2x + 1 = x^2 \\Leftrightarrow x^2 - 2x + 1 = 0 \\Leftrightarrow (x - 1)^2 = 0 \\Leftrightarrow x = 1$ (thoả mãn). Vậy phương trình có đúng $1$ nghiệm.',
          },
          {
            topic: 'Bài 18: Chu vi tam giác vuông từ phương trình chứa căn',
            prompt:
              'Một tam giác vuông có hai cạnh góc vuông là $x\\text{ (cm)}$ và $x + 7\\text{ (cm)}$, cạnh huyền bằng $x + 8\\text{ (cm)}$. Độ dài cạnh góc vuông nhỏ hơn là:',
            correct: '$5\\text{ cm}$.',
            wrongs: ['$6\\text{ cm}$.', '$8\\text{ cm}$.', '$12\\text{ cm}$.'],
            explanation:
              'Theo định lí Pythagore: $\\sqrt{x^2 + (x + 7)^2} = x + 8 \\Leftrightarrow 2x^2 + 14x + 49 = x^2 + 16x + 64 \\Leftrightarrow x^2 - 2x - 15 = 0 \\Leftrightarrow x = 5$ (vì $x > 0$).',
          },
          {
            topic: 'Bài 18: Tìm tham số để $x = 2$ là nghiệm của phương trình chứa căn',
            prompt:
              'Tìm giá trị của tham số $m$ để phương trình $\\sqrt{x^2 + mx + 2} = x + 1$ nhận $x = 2$ làm nghiệm.',
            correct: '$m = \\frac{3}{2}$.',
            wrongs: ['$m = 2$.', '$m = \\frac{1}{2}$.', '$m = 3$.'],
            explanation:
              'Thay $x = 2$ vào phương trình: $\\sqrt{4 + 2m + 2} = 3 \\Leftrightarrow 2m + 6 = 9 \\Leftrightarrow m = \\frac{3}{2}$.',
          },
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{-x^2 + 5x - 4} = x - 1$',
            prompt: 'Số nghiệm của phương trình $\\sqrt{-x^2 + 5x - 4} = x - 1$ là:',
            correct: '$2$.',
            wrongs: ['$1$.', '$0$.', '$3$.'],
            explanation:
              'Bình phương hai vế (với $x \\ge 1$): $-x^2 + 5x - 4 = x^2 - 2x + 1 \\Leftrightarrow 2x^2 - 7x + 5 = 0 \\Leftrightarrow x = 1$ hoặc $x = \\frac{5}{2}$. Cả hai nghiệm đều lớn hơn hoặc bằng $1$ nên đều thoả mãn. Vậy có $2$ nghiệm.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 18: Phân tích hai dạng phương trình chứa căn (Tương tự Bài 6.20 & 6.21)',
            prompt:
              'Cho hai phương trình: $(E_1): \\sqrt{2x^2 - 3x - 2} = \\sqrt{x^2 - 2}$ và $(E_2): \\sqrt{x^2 + 5x - 2} = x + 1$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Khi bình phương hai vế của $(E_1)$, ta được phương trình $x^2 - 3x = 0$ có hai nghiệm $x = 0$ và $x = 3$.',
                isCorrect: true,
                explanation: 'Ta có $2x^2 - 3x - 2 = x^2 - 2 \\Leftrightarrow x^2 - 3x = 0 \\Leftrightarrow x = 0$ hoặc $x = 3$.',
              },
              {
                statement: 'Cả hai giá trị $x = 0$ và $x = 3$ đều là nghiệm của phương trình $(E_1)$.',
                isCorrect: false,
                explanation:
                  'Thử lại vào $(E_1)$: với $x = 0$, biểu thức dưới căn $x^2 - 2 = -2 < 0$ (không có nghĩa), nên chỉ có $x = 3$ là nghiệm của $(E_1)$.',
              },
              {
                statement: 'Phương trình $(E_2)$ có nghiệm duy nhất là $x = 1$.',
                isCorrect: true,
                explanation:
                  'Với $x \\ge -1$, bình phương hai vế của $(E_2)$: $x^2 + 5x - 2 = x^2 + 2x + 1 \\Leftrightarrow 3x = 3 \\Leftrightarrow x = 1$ (thoả mãn).',
              },
              {
                statement: 'Tổng tất cả các nghiệm thực của cả hai phương trình $(E_1)$ và $(E_2)$ bằng $4$.',
                isCorrect: true,
                explanation: 'Nghiệm của $(E_1)$ là $3$, nghiệm của $(E_2)$ là $1$, tổng của chúng là $3 + 1 = 4$.',
              },
            ],
          },
          {
            topic: 'Bài 18: Ứng dụng phương trình chứa căn trong thiết kế đường dây cáp (Tương tự Vận dụng trang 26)',
            prompt:
              'Một trạm biến áp $A$ nằm cách một con đường thẳng một khoảng $AB = 4\\text{ km}$ ($AB$ vuông góc với con đường tại $B$). Một nhà máy $C$ nằm trên con đường đó và cách $B$ một đoạn $BC = 10\\text{ km}$. Người ta chọn một điểm $M$ nằm trên đoạn $BC$ cách $B$ một đoạn $BM = x\\text{ (km)}$ ($0 < x < 10$) để kéo đường dây ngầm từ $A$ đến $M$ và đường dây nổi từ $M$ đến $C$.',
            tikzCode: tikzCoastTriangleModel(4, 10),
            statements: [
              {
                statement: 'Độ dài đoạn dây ngầm $AM$ tính theo $x$ là $AM = \\sqrt{x^2 + 16}\\text{ (km)}$.',
                isCorrect: true,
                explanation: 'Trong tam giác $ABM$ vuông tại $B$: $AM = \\sqrt{BM^2 + AB^2} = \\sqrt{x^2 + 4^2} = \\sqrt{x^2 + 16}$.',
              },
              {
                statement: 'Tổng chiều dài cả đường dây ngầm và đường dây nổi là $L(x) = \\sqrt{x^2 + 16} + 10 - x\\text{ (km)}$.',
                isCorrect: true,
                explanation: 'Ta có $MC = BC - BM = 10 - x$, nên $L(x) = AM + MC = \\sqrt{x^2 + 16} + 10 - x$.',
              },
              {
                statement: 'Để tổng chiều dài đường dây đúng bằng $12\\text{ km}$, giá trị của $x$ phải thoả mãn phương trình $\\sqrt{x^2 + 16} = x + 2$.',
                isCorrect: true,
                explanation: 'Từ $\\sqrt{x^2 + 16} + 10 - x = 12 \\Leftrightarrow \\sqrt{x^2 + 16} = x + 2$.',
              },
              {
                statement: 'Khi tổng chiều dài đường dây bằng $12\\text{ km}$ thì điểm $M$ cách $B$ một khoảng $x = 4\\text{ km}$.',
                isCorrect: false,
                explanation:
                  'Giải $\\sqrt{x^2 + 16} = x + 2 \\Leftrightarrow x^2 + 16 = x^2 + 4x + 4 \\Leftrightarrow 4x = 12 \\Leftrightarrow x = 3\\text{ km}$ (không phải $4\\text{ km}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 18: Giải phương trình chứa căn $\\sqrt{ax^2 + bx + c} = dx + e$ (Tương tự Bài 6.33a)',
            prompt:
              'Tìm nghiệm của phương trình $\\sqrt{2x^2 - 14} = x - 1$.',
            answers: ['3'],
            explanation:
              'Với $x \\ge 1$, bình phương hai vế: $2x^2 - 14 = x^2 - 2x + 1 \\Leftrightarrow x^2 + 2x - 15 = 0 \\Leftrightarrow x = 3$ (thoả mãn) hoặc $x = -5$ (loại). Vậy nghiệm của phương trình là $x = 3$.',
          },
          {
            topic: 'Bài 18: Tính tổng các nghiệm của phương trình chứa hai căn thức',
            prompt:
              'Tính tổng tất cả các nghiệm của phương trình $\\sqrt{x^2 + 2x + 4} = \\sqrt{2x^2 - x}$.',
            answers: ['3'],
            explanation:
              'Bình phương hai vế: $x^2 + 2x + 4 = 2x^2 - x \\Leftrightarrow x^2 - 3x - 4 = 0 \\Leftrightarrow x = -1$ hoặc $x = 4$. Thử lại: cả $x = -1$ (hai vế bằng $\\sqrt{3}$) và $x = 4$ (hai vế bằng $\\sqrt{28}$) đều thoả mãn. Tổng hai nghiệm là $-1 + 4 = 3$.',
          },
          {
            topic: 'Bài 18: Bài toán gặp nhau trên lề đường (Tương tự Bài 6.23)',
            prompt:
              'Bạn Minh đứng ở vị trí $A$ cách lề đường thẳng một đoạn $AH = 30\\text{ m}$ ($AH$ vuông góc lề đường tại $H$). Bạn Minh chạy thẳng từ $A$ đến điểm hẹn $C$ trên lề đường với quãng đường $AC = 50\\text{ m}$. Tính khoảng cách $CH$ từ điểm hẹn $C$ đến chân đường vuông góc $H$ (đơn vị: mét).',
            answers: ['40'],
            explanation:
              'Trong tam giác $AHC$ vuông tại $H$, với $AH = 30\\text{ m}$ và $AC = 50\\text{ m}$, theo định lí Pythagore ta có $CH = \\sqrt{AC^2 - AH^2} = \\sqrt{50^2 - 30^2} = 40\\text{ (m)}$.',
          },
          {
            topic: 'Bài 18: Giải phương trình quy về bậc hai bằng ẩn phụ',
            prompt:
              'Tìm nghiệm dương của phương trình $(x + 1)^2 + 3\\sqrt{x^2 + 2x + 1} = 10$.',
            answers: ['1'],
            explanation:
              'Với $x > 0$, ta có $\\sqrt{x^2 + 2x + 1} = x + 1$, phương trình trở thành $(x + 1)^2 + 3(x + 1) - 10 = 0 \\Leftrightarrow x + 1 = 2 \\Leftrightarrow x = 1$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{ax^2 + bx + c} = dx + e$ (Tương tự Bài 6.33a)',
            problemStatement:
              'Giải phương trình chứa căn thức $\\sqrt{2x^2 - 14} = x - 1$.',
            conclusionTarget: 'Tìm tập nghiệm $S$ của phương trình.',
            steps: [
              'Bình phương hai vế của phương trình đã cho, ta thu được $2x^2 - 14 = (x - 1)^2 = x^2 - 2x + 1$.',
              'Chuyển vế và thu gọn về phương trình bậc hai: $x^2 + 2x - 15 = 0$.',
              'Giải phương trình $x^2 + 2x - 15 = 0$, ta tìm được hai nghiệm là $x = 3$ hoặc $x = -5$.',
              'Thử lại vào phương trình đầu: với $x = 3$ ta có $\\sqrt{4} = 2$ (thoả mãn); với $x = -5$ vế phải bằng $-6 < 0$ (loại). Vậy $S = \\{3\\}$.',
            ],
            analysis:
              'Nghiệm $x = -5$ làm vế phải $x - 1 = -6 < 0$ nên bị loại ngay khi kiểm tra.',
          },
          {
            topic: 'Bài 18: Giải phương trình $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$ (Tương tự Bài 6.20d)',
            problemStatement:
              'Giải phương trình $\\sqrt{-x^2 + 5x - 4} = \\sqrt{-2x^2 + 4x + 2}$.',
            conclusionTarget: 'Bình phương hai vế, tìm nghiệm và thử lại vào điều kiện dưới căn.',
            steps: [
              'Bình phương hai vế của phương trình, ta được $-x^2 + 5x - 4 = -2x^2 + 4x + 2$.',
              'Chuyển vế thu gọn ta được phương trình bậc hai: $x^2 + x - 6 = 0$.',
              'Giải phương trình $x^2 + x - 6 = 0$, ta được hai nghiệm là $x = 2$ hoặc $x = -3$.',
              'Thử lại: với $x = 2$ hai vế đều bằng $\\sqrt{2}$ (thoả mãn); với $x = -3$ biểu thức dưới căn bằng $-28 < 0$ (loại). Vậy $S = \\{2\\}$.',
            ],
            analysis:
              'Khi giải $\\sqrt{f(x)} = \\sqrt{g(x)}$, nghiệm tìm được phải làm cho biểu thức dưới dấu căn không âm ($f(x) \\ge 0$).',
          },
          {
            topic: 'Bài 18: Giải phương trình chứa căn bằng cách đặt điều kiện trước',
            problemStatement:
              'Giải phương trình $\\sqrt{x^2 + 6x + 9} + \\sqrt{2x^2 - 5x + 2} = 2x + 3$.',
            conclusionTarget: 'Biến đổi phương trình về dạng cơ bản và tìm nghiệm.',
            steps: [
              'Chú ý rằng $\\sqrt{x^2 + 6x + 9} = \\sqrt{(x + 3)^2} = |x + 3|$.',
              'Với $x \\ge -3$, ta có $|x + 3| = x + 3$, phương trình trở thành $x + 3 + \\sqrt{2x^2 - 5x + 2} = 2x + 3 \\Leftrightarrow \\sqrt{2x^2 - 5x + 2} = x$.',
              'Với điều kiện $x \\ge 0$, bình phương hai vế ta được $2x^2 - 5x + 2 = x^2 \\Leftrightarrow x^2 - 5x + 2 = 0$.',
              'Giải phương trình ta được hai nghiệm dương $x = \\frac{5 \\pm \\sqrt{17}}{2}$ đều thoả mãn $x \\ge 0$.',
            ],
            analysis:
              'Khai thác hằng đẳng thức $(x + 3)^2$ dưới dấu căn thứ nhất để rút gọn phương trình về dạng chuẩn $\\sqrt{f(x)} = x$.',
          },
          {
            topic: 'Bài 18: Ứng dụng phương trình chứa căn vào bài toán thực tế (Tương tự Bài 6.23)',
            problemStatement:
              'Nhà bạn Minh tại $A$ cách đường thẳng một khoảng $AH = 30\\text{ m}$ ($AH$ vuông góc đường tại $H$). Bạn Hùng đi xe đạp từ $B$ trên đường cách $H$ một đoạn $BH = 70\\text{ m}$ tiến về $H$ với vận tốc $10\\text{ km/h}$. Cùng lúc đó Minh đi bộ thẳng từ $A$ tới điểm $C$ trên đoạn $BH$ với vận tốc $5\\text{ km/h}$ để gặp Hùng cùng lúc. Tính khoảng cách $CH = x\\text{ (m)}$.',
            conclusionTarget: 'Lập phương trình chứa căn theo $x$ và tìm vị trí điểm hẹn $C$.',
            steps: [
              'Trong tam giác vuông $AHC$, quãng đường Minh đi bộ là $AC = \\sqrt{x^2 + 30^2} = \\sqrt{x^2 + 900}\\text{ (m)}$, còn quãng đường Hùng đạp xe là $BC = 70 - x\\text{ (m)}$.',
              'Vì vận tốc của Hùng gấp $2$ lần vận tốc của Minh và hai bạn đi trong cùng thời gian nên $BC = 2AC$, tức là $2\\sqrt{x^2 + 900} = 70 - x$.',
              'Với $0 < x < 70$, bình phương hai vế: $4(x^2 + 900) = (70 - x)^2 \\Leftrightarrow 3x^2 + 140x - 1300 = 0$.',
              'Giải phương trình bậc hai với $x > 0$, ta tìm được nghiệm dương $x = \\frac{10(\\sqrt{88} - 7)}{3} \\approx 7,94\\text{ (m)}$.',
            ],
            analysis:
              'Sử dụng tỉ lệ vận tốc $\\frac{v_1}{v_2} = \\frac{S_1}{S_2}$ giúp thiết lập nhanh phương trình liên hệ độ dài hai đoạn đường.',
          },
        ],
      }),
    ],
  },
];
