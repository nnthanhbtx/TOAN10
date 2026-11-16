import { LessonCatalogItem } from '../../types/exam';
import {
  buildFullLessonExam,
  tikzParabola,
} from './lessonExamBuilder';

export const CHAPTER_6_LESSONS_A: LessonCatalogItem[] = [
  {
    id: 'bai-15',
    lessonNumber: 15,
    name: 'Bài 15',
    topicTitle: 'Hàm số',
    chapter: 'Chương VI: Hàm số, đồ thị và ứng dụng',
    keySummary:
      'Nhận biết mô hình hàm số cho bằng bảng, biểu đồ hoặc công thức $y = f(x)$; tìm tập xác định $D$ và tập giá trị của hàm số; xác định điểm thuộc đồ thị hàm số; xét sự đồng biến, nghịch biến của hàm số trên một khoảng $(a; b)$ và vận dụng giải bài toán thực tiễn (tiền điện, cước taxi, thuê xe).',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-15-1',
        lessonId: 'bai-15',
        title: 'Đề ôn Bài 15 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–5, Luyện tập 1–3, Vận dụng 1–2 và Bài tập 6.1–6.6 (SGK Toán 10 Tập 2, trang 4–10)',
        description:
          'Đề ôn tập số 01 của Bài 15 (Hàm số): Tập xác định, tập giá trị, đồ thị hàm số, khoảng đồng biến - nghịch biến và mô hình hoá hàm số bậc thang thực tế.',
        mcqs: [
          {
            topic: 'Bài 15: Nhận biết hàm số từ hệ thức (Tương tự Bài 6.1)',
            prompt:
              'Xét hai đại lượng $x, y$ phụ thuộc vào nhau theo các hệ thức dưới đây. Trong trường hợp nào thì $y$ là một hàm số của biến số $x$?',
            correct: '$2x + y - 5 = 0$.',
            wrongs: ['$y^2 = 4x$.', '$x^2 + y^2 = 9$.', '$|y| = x + 1$.'],
            explanation:
              'Từ $2x + y - 5 = 0 \\Leftrightarrow y = 5 - 2x$. Với mỗi giá trị $x \\in \\mathbb{R}$ luôn xác định duy nhất một giá trị $y \\in \\mathbb{R}$, nên $y$ là hàm số của $x$. Ở các phương án còn lại, với $x = 1$ có hai giá trị $y$ đối nhau nên không phải là hàm số.',
          },
          {
            topic: 'Bài 15: Hàm số cho bằng bảng (Tương tự Ví dụ 1)',
            prompt:
              'Bảng dưới đây ghi lại nhiệt độ không khí $y$ ($^\\circ\\text{C}$) tại một trạm khí tượng theo các mốc thời điểm $x$ (giờ) trong ngày: $(0; 18), (6; 20), (12; 29), (18; 25), (24; 21)$. Tập xác định $D$ của hàm số này là:',
            correct: '$D = \\{0; 6; 12; 18; 24\\}$.',
            wrongs: [
              '$D = \\{18; 20; 21; 25; 29\\}$.',
              '$D = [0; 24]$.',
              '$D = (18; 29)$.',
            ],
            explanation:
              'Khi hàm số được cho bằng bảng, tập xác định $D$ là tập hợp tất cả các giá trị của biến số $x$ (thời điểm đo): $D = \\{0; 6; 12; 18; 24\\}$. Tập $\\{18; 20; 21; 25; 29\\}$ là tập giá trị.',
          },
          {
            topic: 'Bài 15: Tập giá trị của hàm số cho bằng bảng (Tương tự Luyện tập 1)',
            prompt:
              'Trong bài toán bảng nhiệt độ với các cặp $(x; y)$ là $(0; 18), (6; 20), (12; 29), (18; 25), (24; 21)$, tập giá trị $T$ của hàm số là:',
            correct: '$T = \\{18; 20; 21; 25; 29\\}$.',
            wrongs: [
              '$T = \\{0; 6; 12; 18; 24\\}$.',
              '$T = [18; 29]$.',
              '$T = \\mathbb{R}$.',
            ],
            explanation:
              'Tập giá trị của hàm số là tập hợp tất cả các giá trị $y$ tương ứng với các giá trị $x \\in D$, tức là $T = \\{18; 20; 21; 25; 29\\}$.',
          },
          {
            topic: 'Bài 15: Tập xác định của hàm chứa căn thức (Tương tự Ví dụ 3a)',
            prompt: 'Tập xác định của hàm số $y = \\sqrt{3x - 9}$ là:',
            correct: '$D = [3; +\\infty)$.',
            wrongs: ['$D = (3; +\\infty)$.', '$D = (-\\infty; 3]$.', '$D = \\mathbb{R} \\setminus \\{3\\}$.'],
            explanation:
              'Biểu thức $\\sqrt{3x - 9}$ có nghĩa khi và chỉ khi $3x - 9 \\ge 0 \\Leftrightarrow x \\ge 3$. Vậy tập xác định là $D = [3; +\\infty)$.',
          },
          {
            topic: 'Bài 15: Tập xác định của hàm phân thức (Tương tự Ví dụ 3b & Bài 6.3b)',
            prompt: 'Tập xác định của hàm số $y = \\frac{x + 2}{x^2 - 5x + 6}$ là:',
            correct: '$D = \\mathbb{R} \\setminus \\{2; 3\\}$.',
            wrongs: [
              '$D = \\mathbb{R} \\setminus \\{-2\\}$.',
              '$D = (2; 3)$.',
              '$D = \\mathbb{R} \\setminus \\{-2; -3\\}$.',
            ],
            explanation:
              'Biểu thức phân thức có nghĩa khi mẫu thức khác $0$: $x^2 - 5x + 6 \\neq 0 \\Leftrightarrow (x - 2)(x - 3) \\neq 0 \\Leftrightarrow x \\neq 2$ và $x \\neq 3$. Vậy $D = \\mathbb{R} \\setminus \\{2; 3\\}$.',
          },
          {
            topic: 'Bài 15: Tập xác định kết hợp hai căn thức (Tương tự Bài 6.3c)',
            prompt: 'Tập xác định của hàm số $y = \\sqrt{x + 3} + \\sqrt{5 - x}$ là:',
            correct: '$D = [-3; 5]$.',
            wrongs: ['$D = (-3; 5)$.', '$D = [-3; +\\infty)$.', '$D = (-\\infty; 5]$.'],
            explanation:
              'Hàm số xác định khi $\\begin{cases} x + 3 \\ge 0 \\\\ 5 - x \\ge 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ge -3 \\\\ x \\le 5 \\end{cases} \\Leftrightarrow -3 \\le x \\le 5$. Vậy $D = [-3; 5]$.',
          },
          {
            topic: 'Bài 15: Tính giá trị hàm số (Tương tự Luyện tập 1c)',
            prompt: 'Cho hàm số $f(x) = -3x^2 + 2$. Giá trị của $f(-2)$ bằng:',
            correct: '$-10$.',
            wrongs: ['$14$.', '$-4$.', '$10$.'],
            explanation:
              'Thay $x = -2$ vào công thức $f(x) = -3x^2 + 2$, ta được $f(-2) = -3 \\cdot (-2)^2 + 2 = -3 \\cdot 4 + 2 = -10$.',
          },
          {
            topic: 'Bài 15: Điểm thuộc đồ thị hàm số (Tương tự HĐ4 & Luyện tập 2)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, điểm nào sau đây thuộc đồ thị của hàm số $y = \\frac{1}{3}x^2 - 1$?',
            correct: '$M(3; 2)$.',
            wrongs: ['$N(3; 3)$.', '$P(-3; -4)$.', '$Q(1; 0)$.'],
            explanation:
              'Thay $x = 3$ vào hàm số ta có $y = \\frac{1}{3} \\cdot 3^2 - 1 = 3 - 1 = 2 = y_M$. Do đó điểm $M(3; 2)$ thuộc đồ thị hàm số.',
            tikzCode: tikzParabola(0.33, 0, -1, 'y=\\frac{1}{3}x^2-1'),
          },
          {
            topic: 'Bài 15: Tập giá trị của hàm số bậc nhất trên đoạn (Tương tự Ví dụ 4)',
            prompt: 'Cho hàm số $y = 2x + 5$ xác định trên đoạn $D = [0; 10]$. Tập giá trị của hàm số này là:',
            correct: '$[5; 25]$.',
            wrongs: ['$[0; 20]$.', '$(5; 25)$.', '$[2; 15]$.'],
            explanation:
              'Vì $0 \\le x \\le 10$ nên $0 \\le 2x \\le 20 \\Leftrightarrow 5 \\le 2x + 5 \\le 25$. Vậy tập giá trị của hàm số trên $[0; 10]$ là $[5; 25]$.',
          },
          {
            topic: 'Bài 15: Sự đồng biến, nghịch biến của hàm bậc nhất (Tương tự Luyện tập 3a & Bài 6.5a)',
            prompt: 'Khẳng định nào sau đây là ĐÚNG về tính đơn điệu của hàm số $y = -4x + 7$?',
            correct: 'Hàm số nghịch biến trên $\\mathbb{R}$.',
            wrongs: [
              'Hàm số đồng biến trên $\\mathbb{R}$.',
              'Hàm số đồng biến trên $(-\\infty; 7)$ và nghịch biến trên $(7; +\\infty)$.',
              'Hàm số chỉ nghịch biến trên khoảng $(0; +\\infty)$.',
            ],
            explanation:
              'Với mọi $x_1, x_2 \\in \\mathbb{R}$ mà $x_1 < x_2$, ta có $-4x_1 + 7 > -4x_2 + 7$, tức $f(x_1) > f(x_2)$. Do đó hàm số $y = -4x + 7$ nghịch biến trên toàn bộ tập số thực $\\mathbb{R}$.',
          },
          {
            topic: 'Bài 15: Sự đồng biến, nghịch biến của hàm $y = ax^2$ (Tương tự Ví dụ 5 & Bài 6.5b)',
            prompt: 'Hàm số $y = 3x^2$ đồng biến trên khoảng nào dưới đây?',
            correct: '$(0; +\\infty)$.',
            wrongs: ['$(-\\infty; 0)$.', '$(-\\infty; +\\infty)$.', '$(-3; 3)$.'],
            explanation:
              'Hàm số $y = ax^2$ với $a = 3 > 0$ nghịch biến trên khoảng $(-\\infty; 0)$ và đồng biến trên khoảng $(0; +\\infty)$.',
          },
          {
            topic: 'Bài 15: Mô hình hàm số chuyển động đều (Tương tự Ví dụ 2)',
            prompt:
              'Một thiết bị tự hành di chuyển thẳng đều với vận tốc $3,5\\text{ m/s}$. Quãng đường $S$ (mét) đi được sau thời gian $t$ (giây, $t \\ge 0$) được biểu diễn bởi hàm số $S(t) = 3,5t$. Quãng đường thiết bị đi được sau $12$ giây là:',
            correct: '$42\\text{ m}$.',
            wrongs: ['$35\\text{ m}$.', '$45,5\\text{ m}$.', '$38\\text{ m}$.'],
            explanation:
              'Thay $t = 12$ vào công thức $S(t) = 3,5t$, ta được $S(12) = 3,5 \\cdot 12 = 42\\text{ (m)}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 15: Phân tích đồ thị và tính đơn điệu của hàm số (Tương tự Ví dụ 5 & Bài 6.4)',
            prompt:
              'Cho hàm số $y = f(x) = -2x^2$ xác định trên $\\mathbb{R}$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzParabola(-2, 0, 0, 'y=-2x^2'),
            statements: [
              {
                statement: 'Tập xác định của hàm số là $D = \\mathbb{R}$.',
                isCorrect: true,
                explanation: 'Biểu thức $-2x^2$ xác định với mọi $x \\in \\mathbb{R}$.',
              },
              {
                statement: 'Điểm $A(-2; -8)$ thuộc đồ thị của hàm số.',
                isCorrect: true,
                explanation: 'Vì $f(-2) = -2 \\cdot (-2)^2 = -8$ nên $A(-2; -8)$ thuộc đồ thị.',
              },
              {
                statement: 'Tập giá trị của hàm số là $[0; +\\infty)$.',
                isCorrect: false,
                explanation: 'Vì $-2x^2 \\le 0,\\ \\forall x \\in \\mathbb{R}$ nên tập giá trị của hàm số là $(-\\infty; 0]$.',
              },
              {
                statement: 'Hàm số đồng biến trên khoảng $(-\\infty; 0)$ và nghịch biến trên khoảng $(0; +\\infty)$.',
                isCorrect: true,
                explanation:
                  'Trên $(-\\infty; 0)$ đồ thị đi lên từ trái sang phải nên hàm số đồng biến; trên $(0; +\\infty)$ đồ thị đi xuống nên hàm số nghịch biến.',
              },
            ],
          },
          {
            topic: 'Bài 15: Mô hình hàm số bậc thang tính tiền thuê xe (Tương tự Bài 6.6)',
            prompt:
              'Một dịch vụ cho thuê xe du lịch tự lái tính giá $1,5$ triệu đồng/ngày cho $2$ ngày đầu tiên và $1,1$ triệu đồng/ngày cho mỗi ngày tiếp theo (kể từ ngày thứ $3$). Gọi $T(x)$ (triệu đồng) là tổng số tiền phải trả khi thuê xe $x$ ngày ($x \\in \\mathbb{N}^*$).',
            statements: [
              {
                statement: 'Nếu khách thuê xe trong $2$ ngày thì số tiền phải trả là $T(2) = 3$ (triệu đồng).',
                isCorrect: true,
                explanation: 'Trong $2$ ngày đầu, mỗi ngày giá $1,5$ triệu đồng nên $T(2) = 1,5 \\cdot 2 = 3$ triệu đồng.',
              },
              {
                statement: 'Với $x > 2$, công thức của hàm số là $T(x) = 3 + 1,1(x - 2) = 1,1x + 0,8$ (triệu đồng).',
                isCorrect: true,
                explanation:
                  'Khi $x > 2$, tiền $2$ ngày đầu là $3$ triệu đồng, $(x - 2)$ ngày tiếp theo có giá $1,1(x - 2)$ triệu đồng, suy ra $T(x) = 3 + 1,1x - 2,2 = 1,1x + 0,8$.',
              },
              {
                statement: 'Số tiền khách phải trả khi thuê xe $5$ ngày là $6,5$ triệu đồng.',
                isCorrect: false,
                explanation: 'Với $x = 5$: $T(5) = 1,1 \\cdot 5 + 0,8 = 6,3$ triệu đồng (không phải $6,5$ triệu đồng).',
              },
              {
                statement: 'Nếu một khách hàng thanh toán hết $8,5$ triệu đồng thì khách đó đã thuê xe trong $7$ ngày.',
                isCorrect: true,
                explanation: 'Giải phương trình $1,1x + 0,8 = 8,5 \\Leftrightarrow 1,1x = 7,7 \\Leftrightarrow x = 7$ (ngày).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 15: Đếm số giá trị nguyên trong tập xác định (Tương tự Bài 6.3c)',
            prompt:
              'Có bao nhiêu giá trị nguyên của $x$ thuộc tập xác định của hàm số $y = \\frac{\\sqrt{x + 2}}{x - 1} + \\sqrt{4 - x}$?',
            answers: ['6'],
            explanation:
              'Điều kiện xác định: $\\begin{cases} x + 2 \\ge 0 \\\\ 4 - x \\ge 0 \\\\ x - 1 \\neq 0 \\end{cases} \\Leftrightarrow \\begin{cases} -2 \\le x \\le 4 \\\\ x \\neq 1 \\end{cases}$. Các giá trị nguyên của $x$ là $\\{-2; -1; 0; 2; 3; 4\\}$, gồm $6$ giá trị.',
          },
          {
            topic: 'Bài 15: Tìm hoành độ điểm thuộc đồ thị (Tương tự Luyện tập 2a)',
            prompt:
              'Cho hàm số $y = \\frac{1}{2}x^2$. Tổng bình phương các giá trị của $x$ để $y = 18$ bằng bao nhiêu?',
            answers: ['72'],
            explanation:
              'Ta có $\\frac{1}{2}x^2 = 18 \\Leftrightarrow x^2 = 36 \\Leftrightarrow x = 6$ hoặc $x = -6$. Tổng bình phương hai giá trị của $x$ là $6^2 + (-6)^2 = 36 + 36 = 72$.',
          },
          {
            topic: 'Bài 15: Vận dụng tính tiền cước taxi (Tương tự Vận dụng 2)',
            prompt:
              'Một hãng taxi quy định giá mở cửa là $12$ nghìn đồng cho $1\\text{ km}$ đầu tiên, từ km thứ $2$ đến km thứ $20$ có giá $14$ nghìn đồng/km, và từ km thứ $21$ trở đi có giá $11$ nghìn đồng/km. Một hành khách đi quãng đường $25\\text{ km}$ phải trả bao nhiêu nghìn đồng?',
            answers: ['333'],
            explanation:
              'Số tiền phải trả cho $25\\text{ km}$ là: $12 + 19 \\cdot 14 + (25 - 20) \\cdot 11 = 12 + 266 + 55 = 333$ (nghìn đồng).',
          },
          {
            topic: 'Bài 15: Mô hình hoá diện tích mảnh vườn (Tương tự mục Em có biết trang 10)',
            prompt:
              'Bác Bình dùng $28\\text{ m}$ lưới thép rào kín bốn cạnh của một mảnh vườn hình chữ nhật có chiều rộng $x\\text{ (m)}$. Khi chiều rộng $x = 5\\text{ m}$ thì diện tích $S(5)$ của mảnh vườn bằng bao nhiêu $\\text{m}^2$?',
            answers: ['45'],
            explanation:
              'Nửa chu vi mảnh vườn là $28 : 2 = 14\\text{ (m)}$. Chiều dài là $14 - x\\text{ (m)}$, nên hàm diện tích là $S(x) = x(14 - x)$. Với $x = 5\\text{ m}$, ta có $S(5) = 5 \\cdot (14 - 5) = 45\\text{ (m}^2\\text{)}$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 15: Tìm tập xác định của hàm số chứa căn và mẫu (Tương tự Ví dụ 3 & Bài 6.3)',
            problemStatement:
              'Tìm tập xác định $D$ của hàm số $y = \\frac{\\sqrt{2x - 6}}{x - 5}$.',
            conclusionTarget: 'Xác định tập xác định $D$ dưới dạng khoảng, nửa khoảng.',
            steps: [
              'Biểu thức $\\frac{\\sqrt{2x - 6}}{x - 5}$ có nghĩa khi và chỉ khi đồng thời $2x - 6 \\ge 0$ và $x - 5 \\neq 0$.',
              'Giải bất phương trình dưới dấu căn: $2x - 6 \\ge 0 \\Leftrightarrow 2x \\ge 6 \\Leftrightarrow x \\ge 3$.',
              'Giải điều kiện mẫu thức khác $0$: $x - 5 \\neq 0 \\Leftrightarrow x \\neq 5$.',
              'Kết hợp hai điều kiện trên, tập xác định của hàm số là $D = [3; +\\infty) \\setminus \\{5\\}$.',
            ],
            analysis:
              'Cần đặt điều kiện cho cả biểu thức dưới căn bậc hai ($A \\ge 0$) lẫn biểu thức dưới mẫu số ($B \\neq 0$).',
          },
          {
            topic: 'Bài 15: Chứng minh hàm số đồng biến trên khoảng (Tương tự Ví dụ 5)',
            problemStatement:
              'Chứng minh hàm số $y = f(x) = 3x - 4$ đồng biến trên tập số thực $\\mathbb{R}$.',
            conclusionTarget: 'Khẳng định hàm số đồng biến trên $\\mathbb{R}$ theo định nghĩa.',
            steps: [
              'Lấy hai số thực tuỳ ý $x_1, x_2 \\in \\mathbb{R}$ sao cho $x_1 < x_2$.',
              'Xét hiệu $f(x_2) - f(x_1) = (3x_2 - 4) - (3x_1 - 4) = 3(x_2 - x_1)$.',
              'Vì $x_1 < x_2$ nên $x_2 - x_1 > 0$, suy ra $3(x_2 - x_1) > 0$ hay $f(x_1) < f(x_2)$.',
              'Vậy theo định nghĩa, hàm số $y = 3x - 4$ đồng biến trên $\\mathbb{R}$.',
            ],
            analysis:
              'Sử dụng định nghĩa: Với mọi $x_1, x_2 \\in (a; b)$, nếu $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$ thì hàm số đồng biến trên $(a; b)$.',
          },
          {
            topic: 'Bài 15: Lập công thức hàm số tiền điện bậc thang (Tương tự Vận dụng 1)',
            problemStatement:
              'Giả sử giá điện sinh hoạt bậc 1 (từ $0$ đến $50\\text{ kWh}$) là $1\\,700$ đồng/kWh và bậc 2 (từ trên $50$ đến $100\\text{ kWh}$) là $1\\,800$ đồng/kWh. Hãy lập công thức tính số tiền điện $y$ (nghìn đồng) theo lượng điện tiêu thụ $x\\text{ (kWh)}$ khi $50 < x \\le 100$.',
            conclusionTarget: 'Rút gọn công thức $y$ và tìm tập giá trị trên $(50; 100]$.',
            steps: [
              'Số tiền phải trả cho $50\\text{ kWh}$ đầu tiên ở bậc 1 là $1,7 \\cdot 50 = 85$ (nghìn đồng).',
              'Lượng điện tiêu thụ vượt mức $50\\text{ kWh}$ ở bậc 2 là $(x - 50)\\text{ (kWh)}$ với đơn giá $1,8$ nghìn đồng/kWh.',
              'Tổng số tiền phải trả là $y = 85 + 1,8(x - 50) = 1,8x - 5$ (nghìn đồng) với $50 < x \\le 100$.',
              'Khi $50 < x \\le 100$ thì $85 < y \\le 175$, vậy tập giá trị của hàm số trên $(50; 100]$ là $(85; 175]$.',
            ],
            analysis:
              'Chia lượng điện tiêu thụ thành phần định mức bậc 1 ($50\\text{ kWh}$) và phần vượt định mức $(x - 50)\\text{ kWh}$.',
          },
          {
            topic: 'Bài 15: Thiết lập và giải mô hình hàm số hình học (Tương tự mục Em có biết trang 10)',
            problemStatement:
              'Một người dùng $24\\text{ m}$ dây kẽm gai để rào bốn mặt của một mảnh vườn hình chữ nhật có chiều rộng $x\\text{ (m)}$. Tìm chiều rộng $x$ để diện tích mảnh vườn bằng $32\\text{ m}^2$.',
            conclusionTarget: 'Xác định kích thước chiều rộng và chiều dài của mảnh vườn.',
            steps: [
              'Nửa chu vi mảnh vườn hình chữ nhật là $24 : 2 = 12\\text{ (m)}$, suy ra chiều dài mảnh vườn là $12 - x\\text{ (m)}$ với $0 < x \\le 6$.',
              'Thiết lập hàm số biểu diễn diện tích mảnh vườn theo biến $x$: $S(x) = x(12 - x) = -x^2 + 12x\\text{ (m}^2\\text{)}$.',
              'Để diện tích bằng $32\\text{ m}^2$, ta giải phương trình $-x^2 + 12x = 32 \\Leftrightarrow x^2 - 12x + 32 = 0 \\Leftrightarrow x = 4$ hoặc $x = 8$.',
              'Do chiều rộng nhỏ hơn hoặc bằng chiều dài ($x \\le 6$) nên chỉ có $x = 4\\text{ (m)}$ thoả mãn (chiều dài tương ứng là $8\\text{ m}$).',
            ],
            analysis:
              'Quy trình mô hình hoá gồm 4 bước: Diễn tả bằng lời $\\to$ Chọn biến số $x$ $\\to$ Thiết lập hàm $S(x)$ $\\to$ Giải phương trình và đối chiếu điều kiện thực tế.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-15-2',
        lessonId: 'bai-15',
        title: 'Đề ôn Bài 15 - Đề số 02',
        subtitle: 'Nâng cao kỹ năng đọc đồ thị, xét tính đơn điệu và mô hình hoá hàm số (SGK Toán 10 Tập 2, trang 4–10)',
        description:
          'Đề ôn tập số 02 của Bài 15 (Hàm số): Rèn luyện tìm tập xác định chứa tham số, đọc biểu đồ thực tế và thiết lập hàm số kinh tế - đời sống.',
        mcqs: [
          {
            topic: 'Bài 15: Khái niệm hàm số (Tương tự Bài 6.1)',
            prompt: 'Bảng giá trị nào dưới đây của các cặp $(x; y)$ KHÔNG xác định $y$ là một hàm số của $x$?',
            correct: '$(1; 2), (2; 4), (1; -2), (3; 6)$.',
            wrongs: [
              '$(1; 3), (2; 3), (3; 3), (4; 3)$.',
              '$(-2; 4), (-1; 1), (0; 0), (1; 1)$.',
              '$(0; 5), (2; 7), (4; 9), (6; 11)$.',
            ],
            explanation:
              'Trong bộ $(1; 2), (2; 4), (1; -2), (3; 6)$, tại cùng một giá trị $x = 1$ lại ứng với hai giá trị khác nhau của $y$ là $2$ và $-2$, vi phạm định nghĩa hàm số.',
          },
          {
            topic: 'Bài 15: Tập xác định của hàm đa thức (Tương tự Bài 6.3a)',
            prompt: 'Tập xác định của hàm số $y = 4x^3 - 5x^2 + 2x - 9$ là:',
            correct: '$D = \\mathbb{R}$.',
            wrongs: ['$D = (0; +\\infty)$.', '$D = \\mathbb{R} \\setminus \\{0\\}$.', '$D = [-9; +\\infty)$.'],
            explanation:
              'Mọi hàm đa thức đều có nghĩa với mọi số thực $x$, nên tập xác định của hàm số là $D = \\mathbb{R}$.',
          },
          {
            topic: 'Bài 15: Tập xác định của căn thức ở mẫu số (Tương tự Bài 6.24)',
            prompt: 'Tập xác định của hàm số $y = \\frac{5}{\\sqrt{x - 4}}$ là:',
            correct: '$D = (4; +\\infty)$.',
            wrongs: ['$D = [4; +\\infty)$.', '$D = \\mathbb{R} \\setminus \\{4\\}$.', '$D = (-\\infty; 4)$.'],
            explanation:
              'Biểu thức $\\frac{5}{\\sqrt{x - 4}}$ có nghĩa khi và chỉ khi $x - 4 > 0 \\Leftrightarrow x > 4$. Vậy $D = (4; +\\infty)$.',
          },
          {
            topic: 'Bài 15: Tập xác định của hàm số phân thức bậc hai',
            prompt: 'Tập xác định của hàm số $y = \\frac{3x - 1}{x^2 + 4}$ là:',
            correct: '$D = \\mathbb{R}$.',
            wrongs: [
              '$D = \\mathbb{R} \\setminus \\{-2; 2\\}$.',
              '$D = \\mathbb{R} \\setminus \\{-4\\}$.',
              '$D = (-2; 2)$.',
            ],
            explanation:
              'Vì $x^2 + 4 \\ge 4 > 0$ với mọi $x \\in \\mathbb{R}$ nên mẫu thức không bao giờ bằng $0$. Do đó tập xác định là $D = \\mathbb{R}$.',
          },
          {
            topic: 'Bài 15: Tính giá trị hàm số cho bởi nhiều công thức',
            prompt:
              'Cho hàm số $f(x) = \\begin{cases} 2x + 3 & \\text{nếu } x < 1 \\\\ x^2 + 4 & \\text{nếu } x \\ge 1 \\end{cases}$. Giá trị của biểu thức $P = f(-1) + f(2)$ bằng:',
            correct: '$9$.',
            wrongs: ['$13$.', '$8$.', '$11$.'],
            explanation:
              'Vì $-1 < 1$ nên $f(-1) = 2(-1) + 3 = 1$. Vì $2 \\ge 1$ nên $f(2) = 2^2 + 4 = 8$. Suy ra $P = 1 + 8 = 9$.',
          },
          {
            topic: 'Bài 15: Điểm thuộc đồ thị hàm số (Tương tự HĐ4)',
            prompt: 'Cho hàm số $y = 2x - 5$. Giao điểm của đồ thị hàm số với trục tung $Oy$ có toạ độ là:',
            correct: '$(0; -5)$.',
            wrongs: ['$(-5; 0)$.', '$\\left(\\frac{5}{2}; 0\\right)$.', '$(0; 5)$.'],
            explanation:
              'Điểm nằm trên trục tung $Oy$ có hoành độ $x = 0$, suy ra $y = 2 \\cdot 0 - 5 = -5$. Vậy giao điểm là $(0; -5)$.',
          },
          {
            topic: 'Bài 15: Tính đơn điệu trên khoảng từ đồ thị (Tương tự HĐ6)',
            prompt:
              'Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$. Phát biểu nào sau đây là ĐÚNG?',
            correct:
              'Nếu với mọi $x_1, x_2 \\in (a; b)$ mà $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$ thì hàm số nghịch biến trên $(a; b)$.',
            wrongs: [
              'Nếu với mọi $x_1, x_2 \\in (a; b)$ mà $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$ thì hàm số đồng biến trên $(a; b)$.',
              'Đồ thị của hàm số đồng biến trên $(a; b)$ là đường đi xuống từ trái sang phải.',
              'Đồ thị của hàm số nghịch biến trên $(a; b)$ là đường đi lên từ trái sang phải.',
            ],
            explanation:
              'Theo định nghĩa trong SGK trang 8: Hàm số $y = f(x)$ nghịch biến (giảm) trên khoảng $(a; b)$ nếu $\\forall x_1, x_2 \\in (a; b),\\ x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$.',
          },
          {
            topic: 'Bài 15: Tập giá trị của hàm số $y = ax^2$ (Tương tự Bài 6.4b)',
            prompt: 'Tập giá trị của hàm số $y = 5x^2$ trên tập xác định $\\mathbb{R}$ là:',
            correct: '$[0; +\\infty)$.',
            wrongs: ['$(-\\infty; 0]$.', '$\\mathbb{R}$.', '$[5; +\\infty)$.'],
            explanation:
              'Vì $x^2 \\ge 0,\\ \\forall x \\in \\mathbb{R}$ nên $y = 5x^2 \\ge 0$. Hơn nữa với mọi $y_0 \\ge 0$ luôn tồn tại $x = \\sqrt{y_0/5}$ để $y = y_0$. Vậy tập giá trị là $[0; +\\infty)$.',
          },
          {
            topic: 'Bài 15: Khoảng nghịch biến của hàm số $y = -\\frac{1}{2}x^2$ (Tương tự Bài 6.5b)',
            prompt: 'Hàm số $y = -\\frac{1}{2}x^2$ nghịch biến trên khoảng nào sau đây?',
            correct: '$(0; +\\infty)$.',
            wrongs: ['$(-\\infty; 0)$.', '$(-\\infty; +\\infty)$.', '$(-2; 2)$.'],
            explanation:
              'Do hệ số $a = -\\frac{1}{2} < 0$, đồ thị hàm số $y = -\\frac{1}{2}x^2$ đi lên trên $(-\\infty; 0)$ và đi xuống trên $(0; +\\infty)$. Vậy hàm số nghịch biến trên khoảng $(0; +\\infty)$.',
            tikzCode: tikzParabola(-0.5, 0, 0, 'y=-\\frac{1}{2}x^2'),
          },
          {
            topic: 'Bài 15: Điều kiện của hệ số để hàm bậc nhất đồng biến',
            prompt: 'Với giá trị nào của tham số $m$ thì hàm số $y = (m - 3)x + 2025$ đồng biến trên $\\mathbb{R}$?',
            correct: '$m > 3$.',
            wrongs: ['$m < 3$.', '$m \\ge 3$.', '$m \\neq 3$.'],
            explanation:
              'Hàm số bậc nhất $y = ax + b$ đồng biến trên $\\mathbb{R}$ khi và chỉ khi hệ số góc $a > 0$, tức là $m - 3 > 0 \\Leftrightarrow m > 3$.',
          },
          {
            topic: 'Bài 15: Hàm số mô tả chi phí sản xuất (Tương tự Vận dụng)',
            prompt:
              'Một xưởng in có chi phí cố định mỗi ngày là $2$ triệu đồng và chi phí in mỗi cuốn sách là $25$ nghìn đồng. Gọi $C(x)$ (nghìn đồng) là tổng chi phí in $x$ cuốn sách trong một ngày. Công thức của hàm số $C(x)$ là:',
            correct: '$C(x) = 25x + 2000$.',
            wrongs: ['$C(x) = 25x + 2$.', '$C(x) = 2000x + 25$.', '$C(x) = 27x$.'],
            explanation:
              'Đổi $2$ triệu đồng $= 2000$ nghìn đồng. Tổng chi phí gồm chi phí cố định cộng chi phí biến đổi cho $x$ cuốn sách: $C(x) = 25x + 2000$ (nghìn đồng).',
          },
          {
            topic: 'Bài 15: Tìm tập xác định chứa căn bậc hai và mẫu thức (Tương tự Bài 6.29a)',
            prompt: 'Tập xác định của hàm số $y = \\sqrt{2x - 4} + \\sqrt{8 - x}$ là:',
            correct: '$D = [2; 8]$.',
            wrongs: ['$D = (2; 8)$.', '$D = [4; 8]$.', '$D = [2; +\\infty)$.'],
            explanation:
              'Hàm số xác định khi $\\begin{cases} 2x - 4 \\ge 0 \\\\ 8 - x \\ge 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ge 2 \\\\ x \\le 8 \\end{cases} \\Leftrightarrow 2 \\le x \\le 8$. Vậy $D = [2; 8]$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 15: Khảo sát tập xác định và giá trị của hàm số phân thức - căn thức',
            prompt:
              'Cho hàm số $y = f(x) = \\frac{\\sqrt{x + 4}}{x - 2}$. Xét tính đúng/sai của các khẳng định sau:',
            statements: [
              {
                statement: 'Biểu thức $\\sqrt{x + 4}$ có nghĩa khi $x \\ge -4$.',
                isCorrect: true,
                explanation: 'Căn bậc hai $\\sqrt{x + 4}$ xác định khi $x + 4 \\ge 0 \\Leftrightarrow x \\ge -4$.',
              },
              {
                statement: 'Tập xác định của hàm số $y = f(x)$ là $D = [-4; +\\infty)$.',
                isCorrect: false,
                explanation:
                  'Cần thêm điều kiện mẫu khác $0$: $x - 2 \\neq 0 \\Leftrightarrow x \\neq 2$, nên $D = [-4; +\\infty) \\setminus \\{2\\}$.',
              },
              {
                statement: 'Tại $x = 5$, giá trị của hàm số bằng $f(5) = 1$.',
                isCorrect: true,
                explanation: 'Ta có $f(5) = \\frac{\\sqrt{5 + 4}}{5 - 2} = \\frac{3}{3} = 1$.',
              },
              {
                statement: 'Điểm $M(0; -1)$ thuộc đồ thị của hàm số đã cho.',
                isCorrect: true,
                explanation: 'Vì $f(0) = \\frac{\\sqrt{0 + 4}}{0 - 2} = \\frac{2}{-2} = -1$ nên $M(0; -1)$ thuộc đồ thị.',
              },
            ],
          },
          {
            topic: 'Bài 15: Đọc biểu đồ thực tế theo thời gian (Tương tự HĐ2 & Luyện tập 1b)',
            prompt:
              'Một trạm thuỷ văn ghi lại mực nước sông (đơn vị: cm) từ năm $2018$ đến năm $2023$ lần lượt tại các năm $(2018; 310), (2019; 325), (2020; 295), (2021; 340), (2022; 330), (2023; 350)$. Coi mực nước $y$ là hàm số của năm $x$.',
            statements: [
              {
                statement: 'Tập xác định của hàm số là $D = \\{2018; 2019; 2020; 2021; 2022; 2023\\}$.',
                isCorrect: true,
                explanation: 'Tập xác định gồm $6$ mốc năm quan trắc từ $2018$ đến $2023$.',
              },
              {
                statement: 'Giá trị của hàm số tại $x = 2020$ là $y = 325\\text{ cm}$.',
                isCorrect: false,
                explanation: 'Tại năm $x = 2020$, mực nước tương ứng là $295\\text{ cm}$ (không phải $325\\text{ cm}$).',
              },
              {
                statement: 'Trong giai đoạn quan trắc, mực nước thấp nhất là $295\\text{ cm}$ và cao nhất là $350\\text{ cm}$.',
                isCorrect: true,
                explanation: 'Trong tập giá trị $\\{295; 310; 325; 330; 340; 350\\}$, giá trị nhỏ nhất là $295$ và lớn nhất là $350$.',
              },
              {
                statement: 'Độ chênh lệch mực nước giữa năm $2021$ và năm $2020$ là $45\\text{ cm}$.',
                isCorrect: true,
                explanation: 'Ta có $f(2021) - f(2020) = 340 - 295 = 45\\text{ (cm)}$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 15: Tìm tham số để điểm thuộc đồ thị hàm số',
            prompt:
              'Tìm giá trị của tham số $m$ biết rằng điểm $A(2; 7)$ thuộc đồ thị của hàm số $y = (m - 1)x^2 + 3$.',
            answers: ['2'],
            explanation:
              'Vì $A(2; 7)$ thuộc đồ thị hàm số nên $7 = (m - 1) \\cdot 2^2 + 3 \\Leftrightarrow 4(m - 1) = 4 \\Leftrightarrow m - 1 = 1 \\Leftrightarrow m = 2$.',
          },
          {
            topic: 'Bài 15: Tính giá trị hàm số hợp',
            prompt:
              'Cho hàm số $f(x) = 2x^2 - 3x + 5$. Tính giá trị của biểu thức $f(3) - f(-1)$.',
            answers: ['4'],
            explanation:
              'Ta có $f(3) = 2 \\cdot 3^2 - 3 \\cdot 3 + 5 = 14$ và $f(-1) = 2 \\cdot (-1)^2 - 3 \\cdot (-1) + 5 = 10$. Vậy $f(3) - f(-1) = 14 - 10 = 4$.',
          },
          {
            topic: 'Bài 15: Bài toán cước phí gửi hàng bậc thang',
            prompt:
              'Một công ty chuyển phát nhanh tính phí gửi bưu kiện như sau: $30$ nghìn đồng cho $2\\text{ kg}$ đầu tiên và $8$ nghìn đồng cho mỗi kg tiếp theo. Một kiện hàng nặng $9\\text{ kg}$ thì cước phí gửi là bao nhiêu nghìn đồng?',
            answers: ['86'],
            explanation:
              'Với $x = 9\\text{ kg} > 2\\text{ kg}$, số tiền cước phải trả là $T(9) = 30 + 8 \\cdot (9 - 2) = 30 + 56 = 86$ (nghìn đồng).',
          },
          {
            topic: 'Bài 15: Tìm điều kiện tham số cho tập xác định',
            prompt:
              'Có bao nhiêu giá trị nguyên dương của tham số $m$ nhỏ hơn $10$ để hàm số $y = \\frac{x + 1}{\\sqrt{x - m}}$ xác định tại $x = 6$?',
            answers: ['5'],
            explanation:
              'Hàm số xác định tại $x = 6$ khi $6 - m > 0 \\Leftrightarrow m < 6$. Vì $m$ nguyên dương nên $m \\in \\{1; 2; 3; 4; 5\\}$, có tất cả $5$ giá trị.',
          },
        ],
        steps: [
          {
            topic: 'Bài 15: Khảo sát sự biến thiên của hàm số $y = -2x^2$ (Tương tự Luyện tập 3b)',
            problemStatement:
              'Xét sự đồng biến, nghịch biến của hàm số $y = f(x) = -2x^2$ trên khoảng $(0; +\\infty)$.',
            conclusionTarget: 'Chứng minh hàm số nghịch biến trên $(0; +\\infty)$.',
            steps: [
              'Lấy hai số thực bất kỳ $x_1, x_2 \\in (0; +\\infty)$ sao cho $0 < x_1 < x_2$.',
              'Vì $0 < x_1 < x_2$ nên khi bình phương hai vế dương ta được $x_1^2 < x_2^2$.',
              'Nhân cả hai vế của bất đẳng thức $x_1^2 < x_2^2$ với số âm $-2$, ta được $-2x_1^2 > -2x_2^2$, tức là $f(x_1) > f(x_2)$.',
              'Vậy với mọi $x_1, x_2 \\in (0; +\\infty)$, $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$ nên hàm số nghịch biến trên khoảng $(0; +\\infty)$.',
            ],
            analysis:
              'Khi nhân hai vế của bất đẳng thức với hệ số âm ($-2 < 0$), chiều của bất đẳng thức đổi ngược lại.',
          },
          {
            topic: 'Bài 15: Tìm tập xác định của hàm số phân thức chứa căn (Tương tự Bài 6.29b)',
            problemStatement:
              'Tìm tập xác định $D$ của hàm số $y = \\frac{3}{\\sqrt{x + 3} - 2}$.',
            conclusionTarget: 'Viết tập xác định $D$ dưới dạng hiệu của hai tập hợp.',
            steps: [
              'Biểu thức có nghĩa khi biểu thức dưới căn không âm và mẫu số khác $0$: $\\begin{cases} x + 3 \\ge 0 \\\\ \\sqrt{x + 3} - 2 \\neq 0 \\end{cases}$.',
              'Từ điều kiện thứ nhất: $x + 3 \\ge 0 \\Leftrightarrow x \\ge -3$.',
              'Từ điều kiện thứ hai: $\\sqrt{x + 3} \\neq 2 \\Leftrightarrow x + 3 \\neq 4 \\Leftrightarrow x \\neq 1$.',
              'Kết hợp lại, tập xác định của hàm số là $D = [-3; +\\infty) \\setminus \\{1\\}$.',
            ],
            analysis:
              'Không được quên điều kiện mẫu thức $\\sqrt{x + 3} - 2 \\neq 0$ bên cạnh điều kiện căn thức $x + 3 \\ge 0$.',
          },
          {
            topic: 'Bài 15: Thiết lập hàm số giá cước taxi (Tương tự Vận dụng 2)',
            problemStatement:
              'Một hãng taxi 4 chỗ tính giá mở cửa $10$ nghìn đồng cho $0,5\\text{ km}$ đầu tiên, và $13$ nghìn đồng cho mỗi kilômét tiếp theo (đến $25\\text{ km}$). Lập công thức hàm số tính tiền cước $y$ (nghìn đồng) theo quãng đường $x\\text{ (km)}$ với $0,5 < x \\le 25$.',
            conclusionTarget: 'Tìm công thức rút gọn của $y$ và tính tiền cước khi đi $10,5\\text{ km}$.',
            steps: [
              'Với quãng đường $x\\text{ (km)}$ thoả mãn $0,5 < x \\le 25$, phần quãng đường tính theo giá $13$ nghìn đồng/km là $(x - 0,5)\\text{ (km)}$.',
              'Tổng số tiền cước phải trả là $y = 10 + 13(x - 0,5)$ (nghìn đồng).',
              'Thu gọn biểu thức ta được hàm số bậc nhất $y = 13x + 3,5$ với $0,5 < x \\le 25$.',
              'Khi hành khách đi $x = 10,5\\text{ km}$, số tiền phải trả là $y(10,5) = 13 \\cdot 10,5 + 3,5 = 140$ (nghìn đồng).',
            ],
            analysis:
              'Tách quãng đường $x$ thành $0,5\\text{ km}$ mở cửa và $(x - 0,5)\\text{ km}$ tiếp theo.',
          },
          {
            topic: 'Bài 15: Tìm tập giá trị của hàm số trên đoạn',
            problemStatement:
              'Cho hàm số $y = -3x + 10$ xác định trên đoạn $D = [-1; 4]$. Tìm tập giá trị $T$ của hàm số.',
            conclusionTarget: 'Xác định đoạn giá trị $T = [m; M]$ của hàm số.',
            steps: [
              'Hàm số $y = -3x + 10$ có hệ số $a = -3 < 0$ nên nghịch biến trên đoạn $[-1; 4]$.',
              'Do hàm số nghịch biến nên với mọi $x \\in [-1; 4]$, ta có $f(4) \\le f(x) \\le f(-1)$.',
              'Tính giá trị tại hai đầu mút: $f(4) = -3 \\cdot 4 + 10 = -2$ và $f(-1) = -3 \\cdot (-1) + 10 = 13$.',
              'Vậy tập giá trị của hàm số đã cho trên đoạn $[-1; 4]$ là $T = [-2; 13]$.',
            ],
            analysis:
              'Với hàm bậc nhất nghịch biến trên đoạn $[a; b]$, tập giá trị luôn là đoạn $[f(b); f(a)]$.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-16',
    lessonNumber: 16,
    name: 'Bài 16',
    topicTitle: 'Hàm số bậc hai',
    chapter: 'Chương VI: Hàm số, đồ thị và ứng dụng',
    keySummary:
      'Nhận biết hàm số bậc hai $y = ax^2 + bx + c\\ (a \\neq 0)$; xác định toạ độ đỉnh $I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$, trục đối xứng $x = -\\frac{b}{2a}$, chiều bề lõm, khoảng đồng biến - nghịch biến, giá trị lớn nhất - nhỏ nhất; lập phương trình parabol và giải bài toán thực tiễn (rào vườn, cổng parabol, quỹ đạo vật ném, doanh thu).',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-16-1',
        lessonId: 'bai-16',
        title: 'Đề ôn Bài 16 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–2, Luyện tập 1–2, Vận dụng 1–2 và Bài tập 6.7–6.14 (SGK Toán 10 Tập 2, trang 11–18)',
        description:
          'Đề ôn tập số 01 của Bài 16 (Hàm số bậc hai): Đỉnh, trục đối xứng, sự biến thiên của parabol, xác định hệ số $a, b, c$ và bài toán tối ưu thực tế.',
        mcqs: [
          {
            topic: 'Bài 16: Nhận biết hàm số bậc hai (Tương tự câu hỏi trang 12 & Luyện tập 1)',
            prompt: 'Trong các hàm số sau, hàm số nào là hàm số bậc hai?',
            correct: '$y = -2x^2 + 5x - 1$.',
            wrongs: [
              '$y = x^3 - 2x^2 + 1$.',
              '$y = \\frac{1}{x^2 + 2x + 1}$.',
              '$y = 4x - 7$.',
            ],
            explanation:
              'Hàm số bậc hai có dạng $y = ax^2 + bx + c$ với $a \\neq 0$. Hàm số $y = -2x^2 + 5x - 1$ có $a = -2 \\neq 0, b = 5, c = -1$ nên là hàm số bậc hai.',
          },
          {
            topic: 'Bài 16: Xác định hệ số $a, b, c$ sau khi khai triển (Tương tự Luyện tập 1a)',
            prompt:
              'Khi viết hàm số $y = (x - 2)(4 - 3x)$ về dạng chuẩn $y = ax^2 + bx + c$, các hệ số $a, b, c$ lần lượt là:',
            correct: '$a = -3,\\ b = 10,\\ c = -8$.',
            wrongs: [
              '$a = 3,\\ b = -10,\\ c = 8$.',
              '$a = -3,\\ b = -2,\\ c = -8$.',
              '$a = 1,\\ b = -3,\\ c = -8$.',
            ],
            explanation:
              'Khai triển $y = (x - 2)(4 - 3x) = 4x - 3x^2 - 8 + 6x = -3x^2 + 10x - 8$. Vậy $a = -3, b = 10, c = -8$.',
          },
          {
            topic: 'Bài 16: Toạ độ đỉnh của parabol (Tương tự Ví dụ 2 & Bài 6.25)',
            prompt: 'Trong mặt phẳng toạ độ $Oxy$, parabol $(P): y = x^2 - 4x + 7$ có toạ độ đỉnh $I$ là:',
            correct: '$I(2; 3)$.',
            wrongs: ['$I(-2; 19)$.', '$I(4; 7)$.', '$I(2; -3)$.'],
            explanation:
              'Hoành độ đỉnh là $x_I = -\\frac{b}{2a} = -\\frac{-4}{2 \\cdot 1} = 2$. Tung độ đỉnh là $y_I = 2^2 - 4 \\cdot 2 + 7 = 3$. Vậy $I(2; 3)$.',
            tikzCode: tikzParabola(1, -4, 7, 'y=x^2-4x+7'),
          },
          {
            topic: 'Bài 16: Trục đối xứng của parabol (Tương tự HĐ3 & Bài 6.7)',
            prompt: 'Trục đối xứng của parabol $(P): y = 2x^2 + 6x - 5$ là đường thẳng có phương trình:',
            correct: '$x = -\\frac{3}{2}$.',
            wrongs: ['$x = \\frac{3}{2}$.', '$x = -3$.', '$y = -\\frac{3}{2}$.'],
            explanation:
              'Trục đối xứng của parabol $y = ax^2 + bx + c$ là đường thẳng $x = -\\frac{b}{2a} = -\\frac{6}{2 \\cdot 2} = -\\frac{3}{2}$.',
          },
          {
            topic: 'Bài 16: Khoảng đồng biến, nghịch biến của hàm số bậc hai (Tương tự Bài 6.8 & 6.26)',
            prompt: 'Cho hàm số bậc hai $y = -x^2 + 6x - 4$. Khẳng định nào dưới đây là ĐÚNG?',
            correct: 'Hàm số đồng biến trên khoảng $(-\\infty; 3)$ và nghịch biến trên khoảng $(3; +\\infty)$.',
            wrongs: [
              'Hàm số nghịch biến trên khoảng $(-\\infty; 3)$ và đồng biến trên khoảng $(3; +\\infty)$.',
              'Hàm số đồng biến trên khoảng $(-\\infty; 6)$.',
              'Hàm số nghịch biến trên khoảng $(-\\infty; -3)$.',
            ],
            explanation:
              'Parabol có $a = -1 < 0$ và hoành độ đỉnh $x_I = -\\frac{6}{2(-1)} = 3$. Do $a < 0$ nên hàm số đồng biến trên $(-\\infty; 3)$ và nghịch biến trên $(3; +\\infty)$.',
          },
          {
            topic: 'Bài 16: Giá trị nhỏ nhất của hàm số bậc hai (Tương tự Luyện tập 2)',
            prompt: 'Giá trị nhỏ nhất của hàm số $y = 2x^2 - 8x + 11$ trên $\\mathbb{R}$ bằng:',
            correct: '$3$.',
            wrongs: ['$2$.', '$11$.', '$-3$.'],
            explanation:
              'Ta có $a = 2 > 0$, hoành độ đỉnh $x_I = -\\frac{-8}{2 \\cdot 2} = 2$. Giá trị nhỏ nhất của hàm số là $y_{\\min} = y(2) = 2 \\cdot 2^2 - 8 \\cdot 2 + 11 = 3$.',
          },
          {
            topic: 'Bài 16: Giao điểm của parabol với trục hoành (Tương tự Ví dụ 2a)',
            prompt: 'Số giao điểm của parabol $(P): y = x^2 - 5x + 4$ với trục hoành $Ox$ là:',
            correct: '$2$.',
            wrongs: ['$1$.', '$0$.', '$3$.'],
            explanation:
              'Phương trình hoành độ giao điểm $x^2 - 5x + 4 = 0$ có hai nghiệm phân biệt $x = 1$ và $x = 4$. Vậy $(P)$ cắt trục hoành tại $2$ điểm phân biệt.',
          },
          {
            topic: 'Bài 16: Xác định dấu của $a$ và $\\Delta$ từ vị trí đồ thị (Tương tự Bài 6.11)',
            prompt:
              'Biết parabol $(P): y = ax^2 + bx + c$ nằm hoàn toàn phía trên trục hoành $Ox$. Khẳng định nào sau đây là ĐÚNG?',
            correct: '$a > 0$ và $\\Delta < 0$.',
            wrongs: [
              '$a > 0$ và $\\Delta > 0$.',
              '$a < 0$ và $\\Delta < 0$.',
              '$a > 0$ và $\\Delta = 0$.',
            ],
            explanation:
              'Để $(P)$ nằm hoàn toàn phía trên trục hoành thì bề lõm phải quay lên trên ($a > 0$) và $(P)$ không có điểm chung với trục hoành ($\\Delta < 0$).',
          },
          {
            topic: 'Bài 16: Tìm parabol biết đỉnh (Tương tự Bài 6.9c)',
            prompt: 'Biết parabol $(P): y = ax^2 + bx + 4$ có đỉnh là $I(1; 3)$. Khi đó giá trị của tổng $a + b$ bằng:',
            correct: '$-1$.',
            wrongs: ['$1$.', '$3$.', '$-3$.'],
            explanation:
              'Vì điểm $I(1; 3)$ thuộc $(P)$ nên khi thay $x = 1, y = 3$ vào phương trình ta có ngay $a(1)^2 + b(1) + 4 = 3 \\Leftrightarrow a + b = -1$. (Cụ thể $-b/(2a)=1 \\Rightarrow b=-2a \\Rightarrow a=1, b=-2$).',
          },
          {
            topic: 'Bài 16: Chuyển động rơi tự do (Tương tự Vận dụng 1)',
            prompt:
              'Một vật rơi tự do từ độ cao $44,1\\text{ m}$ xuống mặt đất. Độ cao $h$ (mét) của vật so với mặt đất sau $t$ (giây) được tính theo công thức $h(t) = 44,1 - 4,9t^2$. Hỏi sau bao nhiêu giây kể từ lúc rơi thì vật chạm đất?',
            correct: '$3\\text{ giây}$.',
            wrongs: ['$9\\text{ giây}$.', '$2,5\\text{ giây}$.', '$4\\text{ giây}$.'],
            explanation:
              'Khi vật chạm đất thì $h(t) = 0 \\Leftrightarrow 44,1 - 4,9t^2 = 0 \\Leftrightarrow t^2 = 9 \\Leftrightarrow t = 3$ (giây, vì $t > 0$).',
          },
          {
            topic: 'Bài 16: Bài toán rào vườn diện tích lớn nhất (Tương tự HĐ1 & Bài 6.13)',
            prompt:
              'Bác Nam dùng một tấm lưới dài $24\\text{ m}$ để rào ba mặt của một mảnh vườn hình chữ nhật sát bờ tường thẳng (mặt thứ tư là bờ tường không cần rào). Diện tích lớn nhất của mảnh vườn mà bác Nam rào được là:',
            correct: '$72\\text{ m}^2$.',
            wrongs: ['$36\\text{ m}^2$.', '$64\\text{ m}^2$.', '$144\\text{ m}^2$.'],
            explanation:
              'Gọi $x\\text{ (m)}$ là độ dài cạnh vuông góc với bờ tường ($0 < x < 12$), cạnh song song với tường là $24 - 2x$. Diện tích $S(x) = x(24 - 2x) = -2x^2 + 24x = -2(x - 6)^2 + 72 \\le 72\\text{ m}^2$, đạt GTLN tại $x = 6\\text{ m}$.',
          },
          {
            topic: 'Bài 16: Quỹ đạo ném xiên parabol (Tương tự Bài 6.14)',
            prompt:
              'Một quả bóng được đá lên từ gốc toạ độ $O$ có quỹ đạo là một phần parabol $y = -0,05x^2 + x$, trong đó $x$ (mét) là khoảng cách ngang và $y$ (mét) là độ cao của bóng. Độ cao cực đại của quả bóng đạt được là:',
            correct: '$5\\text{ m}$.',
            wrongs: ['$10\\text{ m}$.', '$20\\text{ m}$.', '$4\\text{ m}$.'],
            explanation:
              'Độ cao cực đại chính là tung độ đỉnh của parabol tại $x_I = -\\frac{1}{2(-0,05)} = 10\\text{ (m)}$: $y_{\\max} = -0,05 \\cdot 10^2 + 10 = 5\\text{ (m)}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 16: Khảo sát toàn diện parabol (Tương tự Ví dụ 2 & Bài 6.30)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho hàm số bậc hai $y = f(x) = -x^2 + 2x + 3$ có đồ thị là parabol $(P)$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzParabola(-1, 2, 3, 'y=-x^2+2x+3'),
            statements: [
              {
                statement: 'Parabol $(P)$ có bề lõm quay xuống dưới và có trục đối xứng là đường thẳng $x = 1$.',
                isCorrect: true,
                explanation: 'Vì $a = -1 < 0$ nên bề lõm quay xuống dưới; trục đối xứng $x = -\\frac{b}{2a} = 1$.',
              },
              {
                statement: 'Toạ độ đỉnh của parabol $(P)$ là $I(1; 4)$.',
                isCorrect: true,
                explanation: 'Ta có $x_I = 1$ và $y_I = -(1)^2 + 2(1) + 3 = 4$, nên $I(1; 4)$.',
              },
              {
                statement: 'Hàm số nghịch biến trên khoảng $(-\\infty; 1)$ và đồng biến trên khoảng $(1; +\\infty)$.',
                isCorrect: false,
                explanation:
                  'Vì $a = -1 < 0$ nên hàm số đồng biến trên $(-\\infty; 1)$ và nghịch biến trên $(1; +\\infty)$.',
              },
              {
                statement: 'Parabol $(P)$ cắt trục hoành tại hai điểm $A(-1; 0), B(3; 0)$ và diện tích tam giác $IAB$ bằng $8$.',
                isCorrect: true,
                explanation:
                  'Giải $-x^2 + 2x + 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$, suy ra $AB = 4$. Đường cao hạ từ $I(1; 4)$ xuống $Ox$ bằng $4$, nên $S_{\\triangle IAB} = \\frac{1}{2} \\cdot 4 \\cdot 4 = 8$.',
              },
            ],
          },
          {
            topic: 'Bài 16: Ứng dụng hàm số bậc hai trong bài toán cổng vòm parabol (Tương tự Vận dụng 2 & Bài 6.12)',
            prompt:
              'Một chiếc cổng chào có hình dạng là một đường parabol $(P)$. Chọn hệ trục toạ độ $Oxy$ sao cho một chân cổng đặt tại gốc toạ độ $O(0; 0)$, chân cổng còn lại nằm tại điểm $B(10; 0)$ trên tia $Ox$ (đơn vị trên mỗi trục là mét). Biết tại vị trí cách chân cổng $O$ một khoảng $1\\text{ m}$ theo phương ngang thì cổng có độ cao là $1,8\\text{ m}$.',
            statements: [
              {
                statement: 'Khoảng cách giữa hai chân cổng là $10\\text{ m}$ và trục đối xứng của cổng là đường thẳng $x = 5$.',
                isCorrect: true,
                explanation: 'Hai chân cổng tại $(0; 0)$ và $(10; 0)$ nên khoảng cách là $10\\text{ m}$ và trục đối xứng đi qua trung điểm $x = 5$.',
              },
              {
                statement: 'Phương trình của đường parabol $(P)$ có dạng $y = ax^2 + bx$ đi qua hai điểm $(10; 0)$ và $(1; 1,8)$.',
                isCorrect: true,
                explanation: 'Vì $(P)$ đi qua $O(0; 0)$ nên $c = 0$, đồng thời $(P)$ đi qua $B(10; 0)$ và $M(1; 1,8)$.',
              },
              {
                statement: 'Hệ số của parabol là $a = -0,2$ và $b = 2$.',
                isCorrect: true,
                explanation:
                  'Từ $\\begin{cases} 100a + 10b = 0 \\\\ a + b = 1,8 \\end{cases} \\Leftrightarrow \\begin{cases} b = -10a \\\\ -9a = 1,8 \\end{cases} \\Leftrightarrow a = -0,2;\\ b = 2$.',
              },
              {
                statement: 'Chiều cao lớn nhất của đỉnh cổng chào so với mặt đất là $6\\text{ m}$.',
                isCorrect: false,
                explanation:
                  'Tại đỉnh $x_I = 5$, độ cao cực đại của cổng là $y(5) = -0,2 \\cdot 5^2 + 2 \\cdot 5 = 5\\text{ m}$ (không phải $6\\text{ m}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 16: Xác định hệ số parabol khi biết đỉnh (Tương tự Bài 6.10 & 6.31)',
            prompt:
              'Biết parabol $(P): y = ax^2 + bx + c$ đi qua điểm $A(0; 5)$ và có đỉnh là $I(2; 1)$. Tính giá trị của biểu thức $S = a + b + c$.',
            answers: ['2'],
            explanation:
              'Vì $I(2; 1)$ là đỉnh nên $y = a(x - 2)^2 + 1$. Do $(P)$ qua $A(0; 5)$ nên $5 = 4a + 1 \\Rightarrow a = 1$. Khi đó $S = a + b + c = y(1) = 1 \\cdot (1 - 2)^2 + 1 = 2$.',
          },
          {
            topic: 'Bài 16: Tìm tầm xa của vật ném parabol (Tương tự Bài 6.14b)',
            prompt:
              'Quỹ đạo của một quả cầu được ném lên từ gốc $O$ có phương trình $y = -0,02x^2 + 0,8x$ ($x, y$ tính bằng mét). Khoảng cách từ điểm ném $O$ đến điểm quả cầu chạm đất (tầm xa) bằng bao nhiêu mét?',
            answers: ['40'],
            explanation:
              'Khi quả cầu chạm đất thì $y = 0 \\Leftrightarrow -0,02x^2 + 0,8x = 0 \\Leftrightarrow x = 0$ hoặc $x = \\frac{0,8}{0,02} = 40\\text{ (m)}$. Vậy tầm xa là $40\\text{ m}$.',
          },
          {
            topic: 'Bài 16: Bài toán tối ưu doanh thu bán hàng (Tương tự mục Em có biết trang 18)',
            prompt:
              'Doanh thu bán một mặt hàng theo đơn giá $x$ (nghìn đồng) được mô tả bởi hàm số bậc hai $R(x) = 120x - 2x^2$ (nghìn đồng). Đơn giá $x$ bằng bao nhiêu nghìn đồng thì doanh thu $R(x)$ đạt mức cực đại?',
            answers: ['30'],
            explanation:
              'Hàm số $R(x) = -2x^2 + 120x$ có $a = -2 < 0$ nên đạt giá trị lớn nhất tại hoành độ đỉnh $x = -\\frac{120}{2(-2)} = 30$ (nghìn đồng).',
          },
          {
            topic: 'Bài 16: Tìm giá trị lớn nhất của hàm số bậc hai',
            prompt:
              'Tìm giá trị lớn nhất của hàm số $y = -3x^2 + 12x - 5$ trên $\\mathbb{R}$.',
            answers: ['7'],
            explanation:
              'Hoành độ đỉnh $x_I = -\\frac{12}{2(-3)} = 2$. Giá trị lớn nhất của hàm số là $y(2) = -3 \\cdot 2^2 + 12 \\cdot 2 - 5 = 7$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 16: Các bước khảo sát và vẽ parabol (Tương tự Ví dụ 2)',
            problemStatement:
              'Tìm toạ độ đỉnh, trục đối xứng, giao điểm với hai trục toạ độ và khoảng đơn điệu của hàm số $y = x^2 - 4x + 3$.',
            conclusionTarget: 'Xác định các yếu tố đặc trưng và kết luận khoảng đồng biến, nghịch biến.',
            steps: [
              'Hàm số có $a = 1 > 0, b = -4, c = 3$ nên đồ thị là parabol quay bề lõm lên trên.',
              'Toạ độ đỉnh là $I(2; -1)$ và trục đối xứng là đường thẳng $x = 2$.',
              'Đồ thị cắt trục tung tại $(0; 3)$ và cắt trục hoành tại hai điểm $(1; 0), (3; 0)$.',
              'Do $a = 1 > 0$, hàm số nghịch biến trên khoảng $(-\\infty; 2)$ và đồng biến trên khoảng $(2; +\\infty)$.',
            ],
            analysis:
              'Quy trình chuẩn khảo sát hàm bậc hai: Xác định chiều bề lõm $\\to$ Đỉnh $I$ và trục đối xứng $\\to$ Giao điểm với các trục $\\to$ Kết luận sự biến thiên.',
          },
          {
            topic: 'Bài 16: Lập phương trình parabol đi qua hai điểm và biết trục đối xứng (Tương tự Bài 6.9b & 6.31b)',
            problemStatement:
              'Xác định phương trình parabol $(P): y = ax^2 + bx + 2$ biết $(P)$ đi qua điểm $M(3; 5)$ và có trục đối xứng là đường thẳng $x = 1$.',
            conclusionTarget: 'Tìm các hệ số $a, b$ và viết phương trình $(P)$.',
            steps: [
              'Vì $(P)$ đi qua điểm $M(3; 5)$ nên thay $x = 3, y = 5$ vào phương trình ta được $9a + 3b + 2 = 5 \\Leftrightarrow 9a + 3b = 3 \\Leftrightarrow 3a + b = 1$ (1).',
              'Vì trục đối xứng của $(P)$ là đường thẳng $x = 1$ nên $-\\frac{b}{2a} = 1 \\Leftrightarrow 2a + b = 0$ (2).',
              'Giải hệ phương trình gồm (1) và (2), ta tìm được $a = 1$ và $b = -2$.',
              'Vậy phương trình của parabol cần tìm là $(P): y = x^2 - 2x + 2$.',
            ],
            analysis:
              'Dịch mỗi giả thiết hình học (đi qua điểm, trục đối xứng) thành một phương trình bậc nhất theo $a$ và $b$.',
          },
          {
            topic: 'Bài 16: Giải bài toán rào vườn diện tích lớn nhất (Tương tự Bài 6.13)',
            problemStatement:
              'Bác Hùng dùng $48\\text{ m}$ lưới thép gai rào thành bốn cạnh của một mảnh vườn hình chữ nhật để trồng rau. Tìm kích thước của mảnh vườn để diện tích rào được là lớn nhất.',
            conclusionTarget: 'Tìm chiều rộng, chiều dài và diện tích lớn nhất của mảnh vườn.',
            steps: [
              'Gọi $x\\text{ (m)}$ là chiều rộng của mảnh vườn ($0 < x \\le 12$). Vì nửa chu vi bằng $24\\text{ m}$ nên chiều dài mảnh vườn là $24 - x\\text{ (m)}$.',
              'Diện tích của mảnh vườn là hàm số bậc hai $S(x) = x(24 - x) = -x^2 + 24x\\text{ (m}^2\\text{)}$.',
              'Hàm số $S(x) = -x^2 + 24x$ có hệ số $a = -1 < 0$ nên đạt giá trị lớn nhất tại hoành độ đỉnh $x = -\\frac{24}{2(-1)} = 12\\text{ (m)}$.',
              'Khi $x = 12\\text{ m}$ thì chiều dài cũng bằng $12\\text{ m}$ (mảnh vườn hình vuông cạnh $12\\text{ m}$) và diện tích lớn nhất đạt được là $S_{\\max} = 144\\text{ m}^2$.',
            ],
            analysis:
              'Bài toán quy về tìm giá trị lớn nhất của hàm số bậc hai $S(x) = -x^2 + 24x$ tại đỉnh của parabol.',
          },
          {
            topic: 'Bài 16: Mô hình dự báo sản lượng bằng hàm bậc hai (Tương tự Bài 6.34)',
            problemStatement:
              'Số lượng sản phẩm (nghìn chiếc) bán ra mỗi năm của một công ty kể từ năm $2020$ (ứng với $t = 0$) được mô tả bởi hàm số bậc hai $y = f(t) = at^2 + bt + c$. Biết điểm $(0; 4)$ là đỉnh của parabol và năm $2021$ ($t = 1$) công ty bán được $5$ nghìn chiếc.',
            conclusionTarget: 'Xác định công thức $f(t)$ và tính sản lượng năm $2025$ ($t = 5$).',
            steps: [
              'Vì đỉnh của parabol là $I(0; 4)$ nên hàm số có dạng $f(t) = a(t - 0)^2 + 4 = at^2 + 4$.',
              'Năm $2021$ ứng với $t = 1$, đồ thị đi qua điểm $(1; 5)$ nên $a \\cdot 1^2 + 4 = 5 \\Leftrightarrow a = 1$.',
              'Do đó công thức hàm số biểu diễn sản lượng theo thời gian $t$ là $f(t) = t^2 + 4$ (nghìn chiếc).',
              'Năm $2025$ ứng với $t = 2025 - 2020 = 5$, sản lượng bán ra là $f(5) = 5^2 + 4 = 29$ (nghìn chiếc).',
            ],
            analysis:
              'Sử dụng dạng đỉnh $y = a(t - h)^2 + k$ giúp tìm nhanh hệ số của hàm bậc hai khi biết toạ độ đỉnh $I(h; k)$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-16-2',
        lessonId: 'bai-16',
        title: 'Đề ôn Bài 16 - Đề số 02',
        subtitle: 'Chuyên sâu đồ thị Parabol, tìm tham số và ứng dụng thực tiễn (SGK Toán 10 Tập 2, trang 11–18)',
        description:
          'Đề ôn tập số 02 của Bài 16 (Hàm số bậc hai): Đọc đồ thị parabol, bài toán quỹ đạo chuyển động, bài toán cầu vòm parabol và cực trị hàm bậc hai.',
        mcqs: [
          {
            topic: 'Bài 16: Tìm bảng giá trị của hàm số bậc hai (Tương tự Ví dụ 1)',
            prompt: 'Cho hàm số bậc hai $y = -x^2 + 6x$. Giá trị của $y$ tại $x = 4$ bằng:',
            correct: '$8$.',
            wrongs: ['$40$.', '$-8$.', '$12$.'],
            explanation:
              'Thay $x = 4$ vào $y = -x^2 + 6x$, ta được $y = -(4)^2 + 6 \\cdot 4 = -16 + 24 = 8$.',
          },
          {
            topic: 'Bài 16: Toạ độ đỉnh của parabol (Tương tự HĐ3)',
            prompt: 'Parabol $(P): y = -2x^2 - 4x + 1$ có toạ độ đỉnh $I$ là:',
            correct: '$I(-1; 3)$.',
            wrongs: ['$I(1; -5)$.', '$I(-1; -5)$.', '$I(2; -15)$.'],
            explanation:
              'Ta có $x_I = -\\frac{-4}{2(-2)} = -1$ và $y_I = -2(-1)^2 - 4(-1) + 1 = 3$. Vậy $I(-1; 3)$.',
            tikzCode: tikzParabola(-2, -4, 1, 'y=-2x^2-4x+1'),
          },
          {
            topic: 'Bài 16: Phép tịnh tiến đồ thị $y = ax^2$ (Tương tự trang 14)',
            prompt:
              'Đồ thị $(P)$ của hàm số $y = 3(x - 2)^2 + 5$ thu được khi dịch chuyển parabol $(P_0): y = 3x^2$ theo vectơ $\\overrightarrow{OI}$ với điểm $I$ có toạ độ là:',
            correct: '$I(2; 5)$.',
            wrongs: ['$I(-2; 5)$.', '$I(2; -5)$.', '$I(3; 5)$.'],
            explanation:
              'Hàm số $y = 3(x - 2)^2 + 5$ có đỉnh là $I(2; 5)$, thu được bằng cách dịch chuyển $(P_0): y = 3x^2$ (đỉnh $O(0;0)$) theo vectơ $\\overrightarrow{OI} = (2; 5)$.',
          },
          {
            topic: 'Bài 16: Khoảng nghịch biến của hàm số bậc hai (Tương tự Bài 6.26)',
            prompt: 'Hàm số $y = x^2 - 6x + 8$ nghịch biến trên khoảng nào dưới đây?',
            correct: '$(-\\infty; 3)$.',
            wrongs: ['$(3; +\\infty)$.', '$(-\\infty; 6)$.', '$(2; 4)$.'],
            explanation:
              'Vì hệ số $a = 1 > 0$ và hoành độ đỉnh $x_I = -\\frac{-6}{2 \\cdot 1} = 3$ nên hàm số nghịch biến trên khoảng $(-\\infty; 3)$ và đồng biến trên khoảng $(3; +\\infty)$.',
          },
          {
            topic: 'Bài 16: Tập giá trị của hàm số bậc hai (Tương tự Bài 6.30)',
            prompt: 'Tập giá trị của hàm số $y = -x^2 + 4x + 1$ trên $\\mathbb{R}$ là:',
            correct: '$(-\\infty; 5]$.',
            wrongs: ['$[5; +\\infty)$.', '$(-\\infty; 1]$.', '$[2; +\\infty)$.'],
            explanation:
              'Ta có $y = -x^2 + 4x + 1 = -(x - 2)^2 + 5 \\le 5,\\ \\forall x \\in \\mathbb{R}$. Do đó tập giá trị của hàm số là $(-\\infty; 5]$.',
          },
          {
            topic: 'Bài 16: Tìm tham số biết trục đối xứng của parabol',
            prompt:
              'Tìm giá trị của tham số $m$ để parabol $(P): y = 2x^2 - (m + 1)x + 3$ có trục đối xứng là đường thẳng $x = 2$.',
            correct: '$m = 7$.',
            wrongs: ['$m = 3$.', '$m = -9$.', '$m = 5$.'],
            explanation:
              'Trục đối xứng của $(P)$ là $x = -\\frac{-(m + 1)}{2 \\cdot 2} = \\frac{m + 1}{4}$. Theo đề bài $\\frac{m + 1}{4} = 2 \\Leftrightarrow m + 1 = 8 \\Leftrightarrow m = 7$.',
          },
          {
            topic: 'Bài 16: Điều kiện tiếp xúc với trục hoành (Tương tự Bài 6.11d)',
            prompt:
              'Parabol $(P): y = ax^2 + bx + c$ tiếp xúc với trục hoành $Ox$ và nằm phía trên trục hoành khi và chỉ khi:',
            correct: '$a > 0$ và $\\Delta = 0$.',
            wrongs: [
              '$a > 0$ và $\\Delta > 0$.',
              '$a < 0$ và $\\Delta = 0$.',
              '$a > 0$ và $\\Delta < 0$.',
            ],
            explanation:
              'Parabol tiếp xúc với trục hoành khi phương trình $ax^2 + bx + c = 0$ có nghiệm kép ($\\Delta = 0$), và nằm phía trên trục hoành khi bề lõm quay lên ($a > 0$).',
          },
          {
            topic: 'Bài 16: Xác định parabol đi qua 2 điểm (Tương tự Bài 6.9a)',
            prompt:
              'Biết parabol $(P): y = ax^2 + bx + 1$ đi qua hai điểm $A(1; 4)$ và $B(-1; 2)$. Giá trị của hệ số $a$ và $b$ là:',
            correct: '$a = 2,\\ b = 1$.',
            wrongs: ['$a = 1,\\ b = 2$.', '$a = 2,\\ b = -1$.', '$a = 3,\\ b = 0$.'],
            explanation:
              'Thay toạ độ $A, B$ vào $(P)$: $\\begin{cases} a + b + 1 = 4 \\\\ a - b + 1 = 2 \\end{cases} \\Leftrightarrow \\begin{cases} a + b = 3 \\\\ a - b = 1 \\end{cases} \\Leftrightarrow \\begin{cases} a = 2 \\\\ b = 1 \\end{cases}$.',
          },
          {
            topic: 'Bài 16: Giao điểm của parabol và đường thẳng',
            prompt:
              'Trong mặt phẳng $Oxy$, parabol $(P): y = x^2 - 3x + 2$ và đường thẳng $d: y = x - 1$ cắt nhau tại hai điểm có hoành độ $x_1, x_2$. Tổng $x_1 + x_2$ bằng:',
            correct: '$4$.',
            wrongs: ['$-4$.', '$3$.', '$2$.'],
            explanation:
              'Phương trình hoành độ giao điểm: $x^2 - 3x + 2 = x - 1 \\Leftrightarrow x^2 - 4x + 3 = 0$. Theo định lí Vi-ét (hoặc giải trực tiếp $x_1 = 1, x_2 = 3$), ta có $x_1 + x_2 = 4$.',
          },
          {
            topic: 'Bài 16: Vật ném thẳng đứng lên trên (Tương tự mục Em có biết trang 17)',
            prompt:
              'Một quả bóng được ném thẳng đứng lên trên từ độ cao $1,5\\text{ m}$ với vận tốc đầu $v_0 = 19,6\\text{ m/s}$. Độ cao của bóng sau $t$ giây là $y(t) = -4,9t^2 + 19,6t + 1,5\\text{ (m)}$. Quả bóng đạt độ cao lớn nhất tại thời điểm:',
            correct: '$t = 2\\text{ giây}$.',
            wrongs: ['$t = 4\\text{ giây}$.', '$t = 1,5\\text{ giây}$.', '$t = 3\\text{ giây}$.'],
            explanation:
              'Độ cao lớn nhất đạt tại hoành độ đỉnh $t = -\\frac{b}{2a} = -\\frac{19,6}{2 \\cdot (-4,9)} = 2$ (giây).',
          },
          {
            topic: 'Bài 16: Tìm tung độ đỉnh khi biết điểm đi qua (Tương tự Bài 6.9d)',
            prompt:
              'Cho parabol $(P): y = ax^2 - 4x + c$ có trục đối xứng là đường thẳng $x = 1$ và đi qua điểm $M(0; 3)$. Tung độ đỉnh của parabol $(P)$ bằng:',
            correct: '$1$.',
            wrongs: ['$3$.', '$-1$.', '$5$.'],
            explanation:
              'Do $(P)$ qua $M(0; 3)$ nên $c = 3$. Trục đối xứng $x = -\\frac{-4}{2a} = 1 \\Rightarrow a = 2$. Vậy $y = 2x^2 - 4x + 3$, tung độ đỉnh là $y(1) = 2 - 4 + 3 = 1$.',
          },
          {
            topic: 'Bài 16: Giá trị lớn nhất, nhỏ nhất của hàm bậc hai trên đoạn',
            prompt:
              'Giá trị lớn nhất của hàm số $y = x^2 - 2x + 3$ trên đoạn $[0; 4]$ bằng:',
            correct: '$11$.',
            wrongs: ['$3$.', '$2$.', '$9$.'],
            explanation:
              'Đỉnh của parabol là $I(1; 2) \\in [0; 4]$. Tính giá trị tại đỉnh và hai đầu mút: $y(1) = 2,\\ y(0) = 3,\\ y(4) = 16 - 8 + 3 = 11$. Vậy giá trị lớn nhất trên $[0; 4]$ là $11$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 16: Xác định phương trình parabol và tính chất hình học (Tương tự Bài 6.10)',
            prompt:
              'Trong mặt phẳng toạ độ $Oxy$, cho parabol $(P): y = ax^2 + bx + c$ có đỉnh là $I(3; -4)$ và đi qua điểm $A(5; 0)$. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzParabola(1, -6, 5, 'y=x^2-6x+5'),
            statements: [
              {
                statement: 'Trục đối xứng của parabol $(P)$ là đường thẳng $x = 3$.',
                isCorrect: true,
                explanation: 'Đỉnh $I(3; -4)$ có hoành độ bằng $3$ nên trục đối xứng là đường thẳng $x = 3$.',
              },
              {
                statement: 'Phương trình của parabol $(P)$ là $y = x^2 - 6x + 5$.',
                isCorrect: true,
                explanation:
                  'Viết $(P)$ dưới dạng $y = a(x - 3)^2 - 4$. Vì $(P)$ qua $A(5; 0)$ nên $0 = a(5 - 3)^2 - 4 \\Rightarrow a = 1$. Khai triển: $y = (x - 3)^2 - 4 = x^2 - 6x + 5$.',
              },
              {
                statement: 'Giao điểm thứ hai của parabol $(P)$ với trục hoành $Ox$ có toạ độ là $(-1; 0)$.',
                isCorrect: false,
                explanation:
                  'Điểm đối xứng với $A(5; 0)$ qua trục đối xứng $x = 3$ có hoành độ $x = 2 \\cdot 3 - 5 = 1$, tức là điểm $(1; 0)$ (không phải $(-1; 0)$).',
              },
              {
                statement: 'Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-4$.',
                isCorrect: true,
                explanation: 'Vì $a = 1 > 0$ nên giá trị nhỏ nhất của hàm số bằng tung độ đỉnh $y_I = -4$.',
              },
            ],
          },
          {
            topic: 'Bài 16: Bài toán chuyển động của vật ném thẳng đứng (Tương tự Em có biết trang 17)',
            prompt:
              'Một quả pháo sáng được bắn thẳng đứng lên cao từ một bệ phóng cao $2\\text{ m}$ so với mặt đất với vận tốc đầu $v_0 = 30\\text{ m/s}$. Bỏ qua sức cản không khí và lấy $g = 10\\text{ m/s}^2$, độ cao $y$ (mét) của quả pháo sau $t$ (giây) được cho bởi công thức $y(t) = -5t^2 + 30t + 2$.',
            statements: [
              {
                statement: 'Tại thời điểm $t = 1$ giây, quả pháo sáng ở độ cao $27\\text{ m}$ so với mặt đất.',
                isCorrect: true,
                explanation: 'Thay $t = 1$: $y(1) = -5(1)^2 + 30(1) + 2 = 27\\text{ (m)}$.',
              },
              {
                statement: 'Quả pháo sáng đạt độ cao lớn nhất sau $3$ giây kể từ lúc bắn.',
                isCorrect: true,
                explanation: 'Hoành độ đỉnh của parabol là $t_I = -\\frac{30}{2(-5)} = 3$ (giây).',
              },
              {
                statement: 'Độ cao cực đại mà quả pháo sáng đạt được là $45\\text{ m}$.',
                isCorrect: false,
                explanation:
                  'Độ cao cực đại là $y(3) = -5 \\cdot 3^2 + 30 \\cdot 3 + 2 = 47\\text{ m}$ (không phải $45\\text{ m}$).',
              },
              {
                statement: 'Trong khoảng thời gian từ $t = 0$ đến $t = 3$ giây, độ cao của quả pháo luôn tăng.',
                isCorrect: true,
                explanation: 'Hàm số $y(t)$ đồng biến trên khoảng $(0; 3)$ nên độ cao luôn tăng từ lúc bắn đến giây thứ $3$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 16: Tính chiều cao vòm cầu parabol (Tương tự Vận dụng 2)',
            prompt:
              'Một vòm cầu bằng thép có hình dạng parabol với khoảng cách giữa hai chân vòm trên mặt cầu là $20\\text{ m}$. Biết tại điểm cách một chân vòm $2\\text{ m}$ theo phương ngang thì vòm cầu cao $3,6\\text{ m}$. Chiều cao của đỉnh vòm cầu bằng bao nhiêu mét?',
            answers: ['10'],
            explanation:
              'Chọn hệ trục $Oxy$ với một chân vòm tại $O(0; 0)$, chân kia tại $(20; 0)$. Phương trình có dạng $y = ax(x - 20)$. Thay điểm $(2; 3,6)$: $3,6 = a \\cdot 2 \\cdot (-18) \\Rightarrow a = -0,1$. Đỉnh vòm tại $x = 10$ có chiều cao $y(10) = -0,1 \\cdot 10 \\cdot (-10) = 10\\text{ (m)}$.',
          },
          {
            topic: 'Bài 16: Tìm tham số từ tung độ đỉnh',
            prompt:
              'Tìm giá trị của tham số $m$ để hàm số bậc hai $y = x^2 - 4x + m$ có giá trị nhỏ nhất trên $\\mathbb{R}$ bằng $5$.',
            answers: ['9'],
            explanation:
              'Hàm số có $a = 1 > 0$ nên đạt giá trị nhỏ nhất tại $x_I = 2$. Ta có $y(2) = 4 - 8 + m = m - 4$. Để $y_{\\min} = 5 \\Leftrightarrow m - 4 = 5 \\Leftrightarrow m = 9$.',
          },
          {
            topic: 'Bài 16: Khoảng cách giữa hai giao điểm với trục hoành',
            prompt:
              'Parabol $(P): y = x^2 - 8x + 7$ cắt trục hoành $Ox$ tại hai điểm phân biệt $A$ và $B$. Độ dài đoạn thẳng $AB$ bằng bao nhiêu?',
            answers: ['6'],
            explanation:
              'Giải phương trình $x^2 - 8x + 7 = 0 \\Leftrightarrow x = 1$ hoặc $x = 7$. Hai giao điểm là $A(1; 0)$ và $B(7; 0)$, suy ra $AB = |7 - 1| = 6$.',
          },
          {
            topic: 'Bài 16: Tính tổng hệ số của parabol (Tương tự Bài tập ôn tập cuối năm câu 3)',
            prompt:
              'Biết rằng parabol $(P): y = x^2 + bx + c$ có đỉnh là $I(2; 3)$. Tính giá trị của tổng $b + c$.',
            answers: ['3'],
            explanation:
              'Phương trình parabol có đỉnh $I(2; 3)$ và hệ số $a = 1$ là $y = (x - 2)^2 + 3 = x^2 - 4x + 7$. Suy ra $b = -4, c = 7$, do đó $b + c = -4 + 7 = 3$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 16: Xác định phương trình parabol biết đỉnh và một điểm (Tương tự Bài 6.10)',
            problemStatement:
              'Xác định phương trình của parabol $(P): y = ax^2 + bx + c$ biết $(P)$ có đỉnh là $I(2; -3)$ và đi qua điểm $A(4; 5)$.',
            conclusionTarget: 'Tìm hệ số $a, b, c$ và viết phương trình chuẩn của $(P)$.',
            steps: [
              'Vì parabol $(P)$ có đỉnh là $I(2; -3)$ nên phương trình của $(P)$ viết được dưới dạng $y = a(x - 2)^2 - 3$ với $a \\neq 0$.',
              'Do $(P)$ đi qua điểm $A(4; 5)$, thay $x = 4, y = 5$ vào phương trình trên ta có $5 = a(4 - 2)^2 - 3$.',
              'Giải phương trình $4a - 3 = 5 \\Leftrightarrow 4a = 8 \\Leftrightarrow a = 2$ (thoả mãn $a \\neq 0$).',
              'Khai triển $y = 2(x - 2)^2 - 3 = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 5$. Vậy $(P): y = 2x^2 - 8x + 5$.',
            ],
            analysis:
              'Viết phương trình parabol dưới dạng đỉnh $y = a(x - h)^2 + k$ giúp tránh phải giải hệ 3 ẩn $a, b, c$.',
          },
          {
            topic: 'Bài 16: Giải bài toán thực tế kiểm tra chiều cao cổng Parabol (Tương tự Bài 6.12)',
            problemStatement:
              'Một cổng trường có hình dạng parabol với khoảng cách giữa hai chân cổng là $8\\text{ m}$. Tại vị trí trên mặt đất cách chân cổng $1\\text{ m}$, chiều cao của cổng đo được là $3,5\\text{ m}$. Hãy tính chiều cao của đỉnh cổng.',
            conclusionTarget: 'Xác định phương trình parabol và tính chiều cao tối đa của cổng.',
            steps: [
              'Chọn hệ trục toạ độ $Oxy$ sao cho một chân cổng tại gốc $O(0; 0)$, chân cổng kia tại $B(8; 0)$. Khi đó parabol có dạng $y = ax^2 + bx$.',
              'Vì parabol đi qua $B(8; 0)$ và điểm $M(1; 3,5)$ nên ta có hệ phương trình $\\begin{cases} 64a + 8b = 0 \\\\ a + b = 3,5 \\end{cases}$.',
              'Giải hệ phương trình trên, từ $b = -8a$ thay vào phương trình dưới ta được $-7a = 3,5 \\Leftrightarrow a = -0,5$ và $b = 4$.',
              'Đỉnh của cổng ứng với hoành độ $x_I = 4\\text{ (m)}$, suy ra chiều cao đỉnh cổng là $y(4) = -0,5 \\cdot 4^2 + 4 \\cdot 4 = 8\\text{ (m)}$.',
            ],
            analysis:
              'Đặt gốc toạ độ tại một chân cổng giúp hệ số tự do $c = 0$, đơn giản hoá việc tìm $a$ và $b$.',
          },
          {
            topic: 'Bài 16: Khảo sát sự biến thiên và tìm giá trị lớn nhất, nhỏ nhất trên đoạn',
            problemStatement:
              'Tìm giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = f(x) = -x^2 + 4x + 2$ trên đoạn $[0; 3]$.',
            conclusionTarget: 'Tính $M, m$ và tổng $M + m$.',
            steps: [
              'Hàm số $f(x) = -x^2 + 4x + 2$ có $a = -1 < 0$ và hoành độ đỉnh $x_I = 2 \\in [0; 3]$.',
              'Trên đoạn $[0; 3]$, hàm số đồng biến trên $[0; 2]$ và nghịch biến trên $[2; 3]$.',
              'Tính giá trị tại đỉnh và hai đầu mút: $f(2) = 6,\\ f(0) = 2,\\ f(3) = 5$.',
              'Vậy giá trị lớn nhất là $M = 6$ (tại $x = 2$) và giá trị nhỏ nhất là $m = 2$ (tại $x = 0$), suy ra $M + m = 8$.',
            ],
            analysis:
              'Khi tìm GTLN, GTNN của hàm bậc hai trên đoạn $[p; q]$, luôn kiểm tra xem hoành độ đỉnh $x_I$ có thuộc đoạn $[p; q]$ hay không.',
          },
          {
            topic: 'Bài 16: Bài toán tối ưu lợi nhuận kinh doanh (Tương tự mục Em có biết trang 18)',
            problemStatement:
              'Một cửa hàng nhận thấy nếu bán một sản phẩm với giá $x$ (nghìn đồng) thì số lượng sản phẩm bán được trong tháng là $n = 200 - 2x$. Biết giá nhập mỗi sản phẩm là $20$ nghìn đồng. Tìm giá bán $x$ để tổng lợi nhuận thu được trong tháng là lớn nhất.',
            conclusionTarget: 'Lập hàm lợi nhuận $L(x)$ và tìm giá bán $x$ tối ưu.',
            steps: [
              'Lợi nhuận thu được trên mỗi sản phẩm bán ra là $(x - 20)$ (nghìn đồng) với điều kiện $20 < x < 100$.',
              'Tổng lợi nhuận trong tháng là $L(x) = (x - 20)(200 - 2x) = -2x^2 + 240x - 4000$ (nghìn đồng).',
              'Hàm số bậc hai $L(x)$ có hệ số $a = -2 < 0$ nên đạt giá trị lớn nhất tại hoành độ đỉnh $x = -\\frac{240}{2(-2)} = 60$.',
              'Vậy cửa hàng nên đặt giá bán $x = 60$ nghìn đồng/sản phẩm để đạt lợi nhuận tối đa là $L(60) = 3200$ nghìn đồng.',
            ],
            analysis:
              'Lợi nhuận bằng số lượng sản phẩm tiêu thụ nhân với lãi gộp trên mỗi đơn vị sản phẩm.',
          },
        ],
      }),
    ],
  },
];
