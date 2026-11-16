import { LessonCatalogItem } from '../../types/exam';
import {
  buildFullLessonExam,
  tikzCountingTree,
} from './lessonExamBuilder';

export const CHAPTER_8_LESSONS: LessonCatalogItem[] = [
  {
    id: 'bai-23',
    lessonNumber: 23,
    name: 'Bài 23',
    topicTitle: 'Quy tắc đếm',
    chapter: 'Chương VIII: Đại số tổ hợp',
    keySummary:
      'Vận dụng Quy tắc cộng (cho công việc chia thành các phương án độc lập không trùng nhau: $m + n$ cách) và Quy tắc nhân (cho công việc thực hiện qua các công đoạn liên tiếp: $m \\cdot n$ cách); sử dụng sơ đồ hình cây để minh hoạ và đếm số cách thực hiện trong các bài toán lập số tự nhiên, chọn lộ trình, mã số.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-23-1',
        lessonId: 'bai-23',
        title: 'Đề ôn Bài 23 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–5, Luyện tập 1–3, Vận dụng và Bài tập 8.1–8.5 (SGK Toán 10 Tập 2, trang 60–65)',
        description:
          'Đề ôn tập số 01 của Bài 23 (Quy tắc đếm): Quy tắc cộng, quy tắc nhân, sơ đồ hình cây, bài toán lập số tự nhiên và ứng dụng thực tiễn.',
        mcqs: [
          {
            topic: 'Bài 23: Vận dụng Quy tắc cộng cơ bản (Tương tự Ví dụ 1)',
            prompt:
              'Trên giá sách có $8$ quyển sách Toán khác nhau và $6$ quyển sách Vật lí khác nhau. Một học sinh muốn chọn $1$ quyển sách (hoặc sách Toán, hoặc sách Vật lí) để đọc thì có bao nhiêu cách chọn?',
            correct: '$14$ cách.',
            wrongs: ['$48$ cách.', '$2$ cách.', '$28$ cách.'],
            explanation:
              'Công việc chọn $1$ quyển sách có $2$ phương án độc lập: chọn sách Toán có $8$ cách, chọn sách Vật lí có $6$ cách. Theo quy tắc cộng, có $8 + 6 = 14$ cách chọn.',
          },
          {
            topic: 'Bài 23: Quy tắc cộng với 3 phương án (Tương tự HĐ1 trang 60)',
            prompt:
              'Một tổ học sinh có $5$ bạn nam và $7$ bạn nữ. Giáo viên cần chọn $1$ bạn làm tổ trưởng thì có bao nhiêu cách chọn?',
            correct: '$12$ cách.',
            wrongs: ['$35$ cách.', '$2$ cách.', '$24$ cách.'],
            explanation:
              'Theo quy tắc cộng, số cách chọn $1$ bạn từ $5$ nam và $7$ nữ là $5 + 7 = 12$ cách.',
          },
          {
            topic: 'Bài 23: Vận dụng Quy tắc nhân cơ bản (Tương tự Ví dụ 3)',
            prompt:
              'Bạn Lan có $4$ chiếc áo sơ mi khác màu và $5$ chiếc quần âu khác kiểu. Hỏi bạn Lan có bao nhiêu cách chọn một bộ trang phục gồm $1$ chiếc áo và $1$ chiếc quần?',
            correct: '$20$ cách.',
            wrongs: ['$9$ cách.', '$45$ cách.', '$16$ cách.'],
            explanation:
              'Công đoạn 1: chọn áo có $4$ cách. Công đoạn 2: chọn quần có $5$ cách. Theo quy tắc nhân, số bộ trang phục là $4 \\cdot 5 = 20$ cách.',
            tikzCode: tikzCountingTree('\\text{Chọn bộ}', '4\\text{ áo}', '5\\text{ quần}', '4\\times 5=20'),
          },
          {
            topic: 'Bài 23: Bài toán chọn đường đi qua trạm trung chuyển (Tương tự HĐ2 trang 62)',
            prompt:
              'Từ thành phố $A$ đến thành phố $B$ có $3$ con đường bộ, từ thành phố $B$ đến thành phố $C$ có $4$ con đường bộ. Hỏi có bao nhiêu cách đi từ $A$ đến $C$ mà phải đi qua $B$?',
            correct: '$12$ cách.',
            wrongs: ['$7$ cách.', '$24$ cách.', '$9$ cách.'],
            explanation:
              'Đi từ $A$ đến $B$ có $3$ cách, tiếp theo đi từ $B$ đến $C$ có $4$ cách. Theo quy tắc nhân, có $3 \\cdot 4 = 12$ cách.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên có các chữ số có thể lặp lại (Tương tự Ví dụ 4a)',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5$, có thể lập được bao nhiêu số tự nhiên có $3$ chữ số?',
            correct: '$125$ số.',
            wrongs: ['$60$ số.', '$15$ số.', '$100$ số.'],
            explanation:
              'Gọi số cần lập là $\\overline{abc}$. Mỗi chữ số $a, b, c$ đều có $5$ cách chọn từ $\\{1; 2; 3; 4; 5\\}$. Theo quy tắc nhân, có $5 \\cdot 5 \\cdot 5 = 125$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên có các chữ số đôi một khác nhau (Tương tự Ví dụ 4b)',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5$, có thể lập được bao nhiêu số tự nhiên có $3$ chữ số đôi một khác nhau?',
            correct: '$60$ số.',
            wrongs: ['$125$ số.', '$12$ số.', '$20$ số.'],
            explanation:
              'Chọn chữ số hàng trăm $a$ có $5$ cách; chọn chữ số hàng chục $b \\neq a$ có $4$ cách; chọn chữ số hàng đơn vị $c \\notin \\{a; b\\}$ có $3$ cách. Theo quy tắc nhân, có $5 \\cdot 4 \\cdot 3 = 60$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên có chứa chữ số 0 (Tương tự Luyện tập 2)',
            prompt:
              'Từ các chữ số $0; 1; 2; 3; 4$, lập được bao nhiêu số tự nhiên có $3$ chữ số đôi một khác nhau?',
            correct: '$48$ số.',
            wrongs: ['$60$ số.', '$100$ số.', '$36$ số.'],
            explanation:
              'Chữ số hàng trăm $a \\neq 0$ có $4$ cách chọn ($1; 2; 3; 4$). Chữ số hàng chục $b \\neq a$ có $4$ cách chọn. Chữ số hàng đơn vị $c \\notin \\{a; b\\}$ có $3$ cách chọn. Vậy có $4 \\cdot 4 \\cdot 3 = 48$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên lẻ (Tương tự Bài 8.3)',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 6; 7$, lập được bao nhiêu số tự nhiên lẻ có $3$ chữ số đôi một khác nhau?',
            correct: '$60$ số.',
            wrongs: ['$120$ số.', '$108$ số.', '$45$ số.'],
            explanation:
              'Gọi số là $\\overline{abc}$. Vì số lẻ nên $c \\in \\{1; 3; 7\\}$ có $3$ cách chọn. Chọn $a \\neq c$ có $5$ cách; chọn $b \\notin \\{a; c\\}$ có $4$ cách. Theo quy tắc nhân có $3 \\cdot 5 \\cdot 4 = 60$ số.',
          },
          {
            topic: 'Bài 23: Đếm số mật khẩu theo quy tắc nhân (Tương tự Vận dụng trang 64)',
            prompt:
              'Một mật khẩu mở khoá gồm $4$ kí tự, trong đó kí tự đầu tiên là một chữ cái in hoa trong tập $\\{A, B, C\\}$ và $3$ kí tự tiếp theo là các chữ số đôi một khác nhau lấy từ $\\{1; 2; 3; 4; 5\\}$. Có bao nhiêu mật khẩu như vậy?',
            correct: '$180$ mật khẩu.',
            wrongs: ['$375$ mật khẩu.', '$63$ mật khẩu.', '$120$ mật khẩu.'],
            explanation:
              'Chọn chữ cái đầu có $3$ cách. Chọn $3$ chữ số tiếp theo đôi một khác nhau có $5 \\cdot 4 \\cdot 3 = 60$ cách. Theo quy tắc nhân, có $3 \\cdot 60 = 180$ mật khẩu.',
          },
          {
            topic: 'Bài 23: Kết hợp quy tắc cộng và quy tắc nhân (Tương tự Ví dụ 5)',
            prompt:
              'Một nhà hàng có thực đơn bữa sáng gồm: $3$ món phở, $4$ món bún và $5$ loại đồ uống. Một thực khách muốn chọn $1$ món ăn nước (phở hoặc bún) kèm theo $1$ loại đồ uống thì có bao nhiêu cách chọn?',
            correct: '$35$ cách.',
            wrongs: ['$60$ cách.', '$12$ cách.', '$23$ cách.'],
            explanation:
              'Công đoạn 1: chọn $1$ món ăn nước có $3 + 4 = 7$ cách (quy tắc cộng). Công đoạn 2: chọn $1$ đồ uống có $5$ cách. Theo quy tắc nhân, có $7 \\cdot 5 = 35$ cách.',
          },
          {
            topic: 'Bài 23: Đếm số ước nguyên dương của một số tự nhiên (Tương tự Ví dụ 2)',
            prompt:
              'Số tự nhiên $N = 36 = 2^2 \\cdot 3^2$ có tất cả bao nhiêu ước nguyên dương?',
            correct: '$9$ ước.',
            wrongs: ['$6$ ước.', '$4$ ước.', '$8$ ước.'],
            explanation:
              'Mỗi ước nguyên dương của $2^2 \\cdot 3^2$ có dạng $2^x \\cdot 3^y$ với $x \\in \\{0; 1; 2\\}$ ($3$ cách chọn) và $y \\in \\{0; 1; 2\\}$ ($3$ cách chọn). Theo quy tắc nhân, có $3 \\cdot 3 = 9$ ước.',
          },
          {
            topic: 'Bài 23: Đếm số kết quả tung đồng xu và gieo xúc xắc',
            prompt:
              'Thực hiện phép thử gồm tung một đồng xu cân đối rồi tiếp theo gieo một con xúc xắc $6$ mặt. Có tất cả bao nhiêu kết quả có thể xảy ra?',
            correct: '$12$ kết quả.',
            wrongs: ['$8$ kết quả.', '$6$ kết quả.', '$36$ kết quả.'],
            explanation:
              'Tung đồng xu có $2$ kết quả (Sấp hoặc Ngửa), gieo xúc xắc có $6$ kết quả ($1$ đến $6$ chấm). Theo quy tắc nhân, có $2 \\cdot 6 = 12$ kết quả.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 23: Phân tích bài toán đếm số tự nhiên từ tập chữ số có chữ số 0 (Tương tự Ví dụ 5)',
            prompt:
              'Cho tập hợp các chữ số $A = \\{0; 1; 2; 3; 4; 5\\}$. Xét các số tự nhiên được lập từ các chữ số thuộc tập $A$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số các số tự nhiên có $1$ chữ số lập từ tập $A$ là $6$ số.',
                isCorrect: true,
                explanation: 'Các số tự nhiên có $1$ chữ số là $0; 1; 2; 3; 4; 5$, gồm $6$ số.',
              },
              {
                statement: 'Số các số tự nhiên có $3$ chữ số (không nhất thiết khác nhau) lập từ tập $A$ là $180$ số.',
                isCorrect: true,
                explanation:
                  'Gọi số là $\\overline{abc}$: chữ số $a \\neq 0$ có $5$ cách chọn, $b$ có $6$ cách chọn, $c$ có $6$ cách chọn. Vậy có $5 \\cdot 6 \\cdot 6 = 180$ số.',
              },
              {
                statement: 'Số các số tự nhiên có $3$ chữ số đôi một khác nhau lập từ tập $A$ là $100$ số.',
                isCorrect: true,
                explanation:
                  'Chọn $a \\neq 0$ có $5$ cách; chọn $b \\neq a$ có $5$ cách; chọn $c \\notin \\{a; b\\}$ có $4$ cách. Vậy có $5 \\cdot 5 \\cdot 4 = 100$ số.',
              },
              {
                statement: 'Số các số tự nhiên chẵn có $3$ chữ số đôi một khác nhau lập từ tập $A$ là $48$ số.',
                isCorrect: false,
                explanation:
                  'Chia 2 trường hợp: TH1 ($c = 0$) có $5 \\cdot 4 = 20$ số; TH2 ($c \\in \\{2; 4\\}$) có $2 \\cdot 4 \\cdot 4 = 32$ số. Tổng cộng có $20 + 32 = 52$ số (không phải $48$ số).',
              },
            ],
          },
          {
            topic: 'Bài 23: Kết hợp quy tắc cộng và quy tắc nhân trong bài toán lộ trình (Tương tự Bài 8.1 & 8.4)',
            prompt:
              'Để đi từ thành phố $A$ đến thành phố $D$, người ta có thể đi theo một trong hai lộ trình: Lộ trình 1 đi từ $A$ qua $B$ rồi đến $D$ (biết từ $A$ đến $B$ có $3$ con đường, từ $B$ đến $D$ có $4$ con đường); Lộ trình 2 đi từ $A$ qua $C$ rồi đến $D$ (biết từ $A$ đến $C$ có $2$ con đường, từ $C$ đến $D$ có $5$ con đường). Không có con đường nào nối trực tiếp giữa $B$ và $C$.',
            tikzCode: tikzCountingTree('A', 'B\\ (3\\times 4)', 'C\\ (2\\times 5)', '12+10=22'),
            statements: [
              {
                statement: 'Số cách đi từ $A$ đến $D$ thông qua thành phố $B$ là $12$ cách.',
                isCorrect: true,
                explanation: 'Theo quy tắc nhân, số cách đi $A \\to B \\to D$ là $3 \\cdot 4 = 12$ cách.',
              },
              {
                statement: 'Số cách đi từ $A$ đến $D$ thông qua thành phố $C$ là $7$ cách.',
                isCorrect: false,
                explanation: 'Theo quy tắc nhân, số cách đi $A \\to C \\to D$ là $2 \\cdot 5 = 10$ cách (không phải $7$ cách).',
              },
              {
                statement: 'Tổng số cách đi từ thành phố $A$ đến thành phố $D$ là $22$ cách.',
                isCorrect: true,
                explanation: 'Theo quy tắc cộng cho hai lộ trình độc lập, tổng số cách đi là $12 + 10 = 22$ cách.',
              },
              {
                statement: 'Số cách thực hiện một chuyến đi khứ hồi từ $A$ đến $D$ rồi quay về $A$ (lượt về có thể trùng đường lượt đi) là $484$ cách.',
                isCorrect: true,
                explanation: 'Đi từ $A$ đến $D$ có $22$ cách, quay về từ $D$ đến $A$ cũng có $22$ cách. Theo quy tắc nhân có $22 \\cdot 22 = 484$ cách.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 23: Đếm số cách chọn 1 nam và 1 nữ (Quy tắc nhân)',
            prompt:
              'Một câu lạc bộ âm nhạc có $9$ bạn nam và $8$ bạn nữ. Có bao nhiêu cách chọn ra một cặp song ca gồm $1$ bạn nam và $1$ bạn nữ?',
            answers: ['72'],
            explanation:
              'Chọn $1$ bạn nam có $9$ cách, chọn $1$ bạn nữ có $8$ cách. Theo quy tắc nhân, có $9 \\cdot 8 = 72$ cách.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên chẵn có 3 chữ số khác nhau',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5$, lập được bao nhiêu số tự nhiên chẵn có $3$ chữ số đôi một khác nhau?',
            answers: ['24'],
            explanation:
              'Gọi số là $\\overline{abc}$. Vì số chẵn nên $c \\in \\{2; 4\\}$ có $2$ cách chọn. Chọn $a \\neq c$ có $4$ cách; chọn $b \\notin \\{a; c\\}$ có $3$ cách. Vậy có $2 \\cdot 4 \\cdot 3 = 24$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên nhỏ hơn 100 từ tập chữ số (Tương tự Ví dụ 5)',
            prompt:
              'Từ các chữ số $0; 1; 2; 3; 4$, có thể lập được bao nhiêu số tự nhiên nhỏ hơn $100$?',
            answers: ['25'],
            explanation:
              'Chia 2 phương án: Số tự nhiên có $1$ chữ số có $5$ số ($0; 1; 2; 3; 4$). Số tự nhiên có $2$ chữ số $\\overline{ab}$ ($a \\neq 0$) có $4 \\cdot 5 = 20$ số. Tổng cộng có $5 + 20 = 25$ số.',
          },
          {
            topic: 'Bài 23: Bài toán mã số học sinh (Tương tự Bài 8.5)',
            prompt:
              'Mỗi mã số dự thi gồm $1$ chữ cái trong tập $\\{A, B, C, D\\}$ ghép nối tiếp với $2$ chữ số đôi một khác nhau lấy từ tập $\\{1; 2; 3; 4; 5; 6\\}$. Có tất cả bao nhiêu mã số dự thi tạo thành?',
            answers: ['120'],
            explanation:
              'Chọn chữ cái có $4$ cách; chọn chữ số thứ nhất có $6$ cách; chọn chữ số thứ hai khác chữ số thứ nhất có $5$ cách. Theo quy tắc nhân, có $4 \\cdot 6 \\cdot 5 = 120$ mã số.',
          },
        ],
        steps: [
          {
            topic: 'Bài 23: Vận dụng Quy tắc nhân lập số tự nhiên (Tương tự Ví dụ 4)',
            problemStatement:
              'Từ các chữ số $1; 3; 4; 6; 7; 8$, có thể lập được bao nhiêu số tự nhiên lẻ có $3$ chữ số đôi một khác nhau?',
            conclusionTarget: 'Chia công đoạn chọn chữ số hàng đơn vị trước và áp dụng quy tắc nhân.',
            steps: [
              'Gọi số tự nhiên lẻ có $3$ chữ số đôi một khác nhau cần lập là $\\overline{abc}$.',
              'Công đoạn 1: Vì $\\overline{abc}$ là số lẻ nên chữ số tận cùng $c$ phải thuộc $\\{1; 3; 7\\}$, do đó có $3$ cách chọn $c$.',
              'Công đoạn 2: Chọn chữ số hàng trăm $a$ khác $c$ từ $5$ chữ số còn lại có $5$ cách chọn; tiếp theo chọn chữ số hàng chục $b$ khác $a$ và $c$ có $4$ cách chọn.',
              'Theo quy tắc nhân, số các số tự nhiên lẻ thoả mãn yêu cầu là $3 \\cdot 5 \\cdot 4 = 60$ (số).',
            ],
            analysis:
              'Trong các bài toán lập số có điều kiện về tính chẵn/lẻ hoặc chia hết cho $5$, ta luôn ưu tiên chọn chữ số hàng đơn vị trước.',
          },
          {
            topic: 'Bài 23: Kết hợp quy tắc cộng và quy tắc nhân khi có chữ số 0 (Tương tự Bài 8.3)',
            problemStatement:
              'Từ các chữ số $0; 1; 2; 3; 4; 5$, lập được bao nhiêu số tự nhiên chẵn có $3$ chữ số đôi một khác nhau?',
            conclusionTarget: 'Chia hai trường hợp $c = 0$ và $c \\in \\{2; 4\\}$ rồi áp dụng quy tắc cộng.',
            steps: [
              'Gọi số cần lập là $\\overline{abc}$ ($a \\neq 0$). Vì $\\overline{abc}$ là số chẵn nên $c \\in \\{0; 2; 4\\}$. Ta chia làm hai trường hợp độc lập.',
              'Trường hợp 1 ($c = 0$): Chọn $c = 0$ có $1$ cách, chọn $a \\neq 0$ có $5$ cách, chọn $b \\notin \\{a; 0\\}$ có $4$ cách $\\Rightarrow$ có $1 \\cdot 5 \\cdot 4 = 20$ số.',
              'Trường hợp 2 ($c \\in \\{2; 4\\}$): Chọn $c$ có $2$ cách, chọn $a \\notin \\{0; c\\}$ có $4$ cách, chọn $b \\notin \\{a; c\\}$ có $4$ cách $\\Rightarrow$ có $2 \\cdot 4 \\cdot 4 = 32$ số.',
              'Theo quy tắc cộng, tổng số các số chẵn lập được là $20 + 32 = 52$ (số).',
            ],
            analysis:
              'Vì chữ số hàng trăm $a$ phải khác $0$, khi chữ số hàng đơn vị $c$ có thể bằng $0$, ta bắt buộc phải tách riêng trường hợp $c = 0$.',
          },
          {
            topic: 'Bài 23: Bài toán đếm số ước nguyên dương của một số tự nhiên (Tương tự Ví dụ 2)',
            problemStatement:
              'Phân tích số $180$ ra thừa số nguyên tố và tính số các ước nguyên dương của $180$.',
            conclusionTarget: 'Biểu diễn dạng ước $2^x \\cdot 3^y \\cdot 5^z$ và dùng quy tắc nhân.',
            steps: [
              'Phân tích số $180$ ra thừa số nguyên tố, ta có $180 = 2^2 \\cdot 3^2 \\cdot 5^1$.',
              'Mọi ước nguyên dương của $180$ đều có dạng $2^x \\cdot 3^y \\cdot 5^z$, trong đó $x, y, z$ là các số tự nhiên.',
              'Để tạo thành một ước, ta chọn $x \\in \\{0; 1; 2\\}$ ($3$ cách), chọn $y \\in \\{0; 1; 2\\}$ ($3$ cách) và chọn $z \\in \\{0; 1\\}$ ($2$ cách).',
              'Theo quy tắc nhân, số ước nguyên dương của $180$ là $3 \\cdot 3 \\cdot 2 = 18$ (ước).',
            ],
            analysis:
              'Tổng quát: nếu $N = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k}$ thì số ước nguyên dương của $N$ là $(\\alpha_1 + 1)(\\alpha_2 + 1)\\dots(\\alpha_k + 1)$.',
          },
          {
            topic: 'Bài 23: Vận dụng quy tắc đếm trong bài toán chọn thực đơn / lộ trình (Tương tự Bài 8.4)',
            problemStatement:
              'Một cửa hàng công nghệ bán $4$ mẫu máy tính xách tay hãng X, $5$ mẫu máy tính xách tay hãng Y, cùng với $3$ loại chuột không dây và $2$ loại chuột có dây. Một khách hàng muốn mua $1$ chiếc máy tính xách tay và $1$ chiếc chuột máy tính thì có bao nhiêu cách chọn?',
            conclusionTarget: 'Sử dụng quy tắc cộng trong từng nhóm sản phẩm rồi nhân hai công đoạn.',
            steps: [
              'Công việc của khách hàng gồm hai công đoạn liên tiếp: chọn $1$ máy tính xách tay và chọn $1$ chuột máy tính.',
              'Công đoạn 1 (chọn máy tính): theo quy tắc cộng, khách hàng có $4 + 5 = 9$ cách chọn máy tính (hãng X hoặc hãng Y).',
              'Công đoạn 2 (chọn chuột): theo quy tắc cộng, khách hàng có $3 + 2 = 5$ cách chọn chuột (không dây hoặc có dây).',
              'Theo quy tắc nhân cho hai công đoạn, tổng số cách chọn bộ sản phẩm là $9 \\cdot 5 = 45$ (cách).',
            ],
            analysis:
              'Phân biệt rõ: chọn 1 phần tử từ các nhóm rời nhau thì dùng quy tắc cộng; ghép các thành phần thành 1 bộ hoàn chỉnh thì dùng quy tắc nhân.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-23-2',
        lessonId: 'bai-23',
        title: 'Đề ôn Bài 23 - Đề số 02',
        subtitle: 'Nâng cao kết hợp quy tắc cộng, quy tắc nhân và đếm có điều kiện (SGK Toán 10 Tập 2, trang 60–65)',
        description:
          'Đề ôn tập số 02 của Bài 23 (Quy tắc đếm): Đếm số tự nhiên thoả mãn điều kiện chia hết, lớn hơn/nhỏ hơn một số cho trước, đếm theo phần bù và bài toán thực tế.',
        mcqs: [
          {
            topic: 'Bài 23: Quy tắc cộng cho các tập hợp không giao nhau',
            prompt:
              'Lớp 10A có $18$ học sinh giỏi môn Toán, $12$ học sinh giỏi môn Tiếng Anh và không có học sinh nào giỏi cả hai môn. Giáo viên chủ nhiệm có bao nhiêu cách chọn $1$ học sinh thuộc nhóm học sinh giỏi trên đi dự hội nghị của trường?',
            correct: '$30$ cách.',
            wrongs: ['$216$ cách.', '$6$ cách.', '$15$ cách.'],
            explanation:
              'Vì hai nhóm không có học sinh chung nên theo quy tắc cộng, số cách chọn là $18 + 12 = 30$ cách.',
          },
          {
            topic: 'Bài 23: Quy tắc nhân cho chuỗi nhiều hành động liên tiếp',
            prompt:
              'Một bài kiểm tra trắc nghiệm nhanh gồm $4$ câu hỏi, mỗi câu hỏi có $4$ phương án trả lời $A, B, C, D$ và chỉ chọn $1$ phương án. Một học sinh làm đầy đủ cả $4$ câu hỏi thì có bao nhiêu cách chọn bộ đáp án?',
            correct: '$256$ cách.',
            wrongs: ['$16$ cách.', '$24$ cách.', '$64$ cách.'],
            explanation:
              'Mỗi câu hỏi có $4$ cách chọn đáp án. Với $4$ câu liên tiếp, theo quy tắc nhân có $4 \\cdot 4 \\cdot 4 \\cdot 4 = 4^4 = 256$ cách.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên chia hết cho 5 (lặp chữ số)',
            prompt:
              'Từ các chữ số $0; 1; 2; 3; 4; 5$, lập được bao nhiêu số tự nhiên có $3$ chữ số (không nhất thiết khác nhau) và chia hết cho $5$?',
            correct: '$60$ số.',
            wrongs: ['$30$ số.', '$72$ số.', '$36$ số.'],
            explanation:
              'Gọi số là $\\overline{abc}$. Chữ số hàng trăm $a \\in \\{1; 2; 3; 4; 5\\}$ có $5$ cách chọn; chữ số hàng chục $b$ có $6$ cách chọn; chữ số hàng đơn vị $c \\in \\{0; 5\\}$ có $2$ cách chọn. Vậy có $5 \\cdot 6 \\cdot 2 = 60$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên chia hết cho 5 có các chữ số đôi một khác nhau',
            prompt:
              'Từ các chữ số $0; 1; 2; 3; 4; 5$, lập được bao nhiêu số tự nhiên có $3$ chữ số đôi một khác nhau và chia hết cho $5$?',
            correct: '$36$ số.',
            wrongs: ['$40$ số.', '$32$ số.', '$60$ số.'],
            explanation:
              'TH1 ($c = 0$): $a$ có $5$ cách, $b$ có $4$ cách $\\Rightarrow 20$ số. TH2 ($c = 5$): $a \\notin \\{0; 5\\}$ có $4$ cách, $b \\notin \\{a; 5\\}$ có $4$ cách $\\Rightarrow 16$ số. Tổng cộng có $20 + 16 = 36$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên lớn hơn một ngưỡng cho trước',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5$, lập được bao nhiêu số tự nhiên có $3$ chữ số đôi một khác nhau và lớn hơn $300$?',
            correct: '$36$ số.',
            wrongs: ['$24$ số.', '$48$ số.', '$60$ số.'],
            explanation:
              'Để $\\overline{abc} > 300$, chữ số hàng trăm $a \\in \\{3; 4; 5\\}$ có $3$ cách chọn. Chọn $b \\neq a$ có $4$ cách, chọn $c \\notin \\{a; b\\}$ có $3$ cách. Vậy có $3 \\cdot 4 \\cdot 3 = 36$ số.',
          },
          {
            topic: 'Bài 23: Đếm số biển số xe theo quy định chữ cái và chữ số',
            prompt:
              'Một khu vực quy định mã thẻ gửi xe gồm $2$ chữ cái in hoa (lấy từ $26$ chữ cái tiếng Anh, các chữ cái có thể trùng nhau) theo sau bởi $3$ chữ số (lấy từ $0$ đến $9$, có thể trùng nhau). Tổng số mã thẻ tối đa có thể tạo ra là:',
            correct: '$26^2 \\cdot 10^3$.',
            wrongs: [
              '$26 \\cdot 25 \\cdot 10 \\cdot 9 \\cdot 8$.',
              '$26^2 + 10^3$.',
              '$2 \\cdot 26 \\cdot 3 \\cdot 10$.',
            ],
            explanation:
              'Mỗi vị trí chữ cái có $26$ cách chọn ($26^2$ cách), mỗi vị trí chữ số có $10$ cách chọn ($10^3$ cách). Theo quy tắc nhân, có $26^2 \\cdot 10^3$ mã thẻ.',
          },
          {
            topic: 'Bài 23: Đếm bằng phương pháp phần bù (loại trừ)',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5$, có bao nhiêu số tự nhiên có $3$ chữ số mà trong đó có ít nhất hai chữ số giống nhau?',
            correct: '$65$ số.',
            wrongs: ['$60$ số.', '$125$ số.', '$45$ số.'],
            explanation:
              'Tổng số các số có $3$ chữ số lập từ $5$ chữ số trên là $5^3 = 125$ số. Số các số có $3$ chữ số đôi một khác nhau là $5 \\cdot 4 \\cdot 3 = 60$ số. Vậy số các số có ít nhất hai chữ số giống nhau là $125 - 60 = 65$ số.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên đối xứng (palindrome)',
            prompt:
              'Có bao nhiêu số tự nhiên có $3$ chữ số dạng $\\overline{aba}$ (chữ số hàng trăm và chữ số hàng đơn vị giống nhau) được lập từ tập các chữ số $\\{0; 1; 2; 3; 4; 5\\}$?',
            correct: '$30$ số.',
            wrongs: ['$36$ số.', '$25$ số.', '$20$ số.'],
            explanation:
              'Chọn chữ số $a \\in \\{1; 2; 3; 4; 5\\}$ có $5$ cách (khi chọn $a$ thì chữ số hàng đơn vị cũng được xác định duy nhất là $a$). Chọn chữ số hàng chục $b \\in \\{0; 1; 2; 3; 4; 5\\}$ có $6$ cách. Vậy có $5 \\cdot 6 = 30$ số.',
          },
          {
            topic: 'Bài 23: Bài toán xếp chỗ ngồi vào bàn dài',
            prompt:
              'Có $4$ học sinh cùng đến một phòng đọc sách có $6$ chiếc ghế trống đánh số từ $1$ đến $6$. Hỏi có bao nhiêu cách xếp $4$ học sinh đó ngồi vào $4$ ghế khác nhau?',
            correct: '$360$ cách.',
            wrongs: ['$24$ cách.', '$120$ cách.', '$15$ cách.'],
            explanation:
              'Học sinh thứ nhất có $6$ cách chọn ghế, học sinh thứ hai có $5$ cách, học sinh thứ ba có $4$ cách, học sinh thứ tư có $3$ cách. Theo quy tắc nhân, có $6 \\cdot 5 \\cdot 4 \\cdot 3 = 360$ cách.',
          },
          {
            topic: 'Bài 23: Chọn ban đại diện từ các khối lớp',
            prompt:
              'Trường THPT có $4$ lớp khối 10, $5$ lớp khối 11 và $6$ lớp khối 12. Đoàn trường cần chọn $2$ lớp thuộc hai khối khác nhau để tổ chức giao lưu văn nghệ thì có bao nhiêu cách chọn?',
            correct: '$74$ cách.',
            wrongs: ['$120$ cách.', '$15$ cách.', '$54$ cách.'],
            explanation:
              'Chia 3 phương án độc lập: (Khối 10 & Khối 11) có $4 \\cdot 5 = 20$ cách; (Khối 11 & Khối 12) có $5 \\cdot 6 = 30$ cách; (Khối 10 & Khối 12) có $4 \\cdot 6 = 24$ cách. Theo quy tắc cộng, có $20 + 30 + 24 = 74$ cách.',
          },
          {
            topic: 'Bài 23: Sơ đồ hình cây cho trận đấu thể thao (Tương tự Bài 8.2)',
            prompt:
              'Hai vận động viên $A$ và $B$ thi đấu bóng bàn theo thể thức ai thắng trước $2$ hiệp sẽ thắng chung cuộc (không có kết quả hoà ở mỗi hiệp). Hỏi sơ đồ hình cây mô tả diễn biến trận đấu có tất cả bao nhiêu kịch bản kết thúc trận đấu?',
            correct: '$6$ kịch bản.',
            wrongs: ['$4$ kịch bản.', '$8$ kịch bản.', '$5$ kịch bản.'],
            explanation:
              'Các kịch bản kết thúc trận đấu gồm: $(AA),\\ (ABA),\\ (BAA)$ (vận động viên $A$ thắng) và $(BB),\\ (BAB),\\ (ABB)$ (vận động viên $B$ thắng), tổng cộng có $6$ kịch bản.',
          },
          {
            topic: 'Bài 23: Đếm số hình chữ nhật trên lưới ô vuông',
            prompt:
              'Trên mặt phẳng cho $4$ đường thẳng song song nằm ngang cắt $5$ đường thẳng song song thẳng đứng. Để tạo thành một hình chữ nhật cần chọn $1$ cặp đường ngang (có $6$ cách) và $1$ cặp đường đứng (có $10$ cách). Số hình chữ nhật tạo thành là:',
            correct: '$60$ hình.',
            wrongs: ['$16$ hình.', '$20$ hình.', '$40$ hình.'],
            explanation:
              'Theo quy tắc nhân, số hình chữ nhật là $6 \\cdot 10 = 60$ hình.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 23: Lập mã PIN điện thoại và đếm số trường hợp (Tương tự Vận dụng trang 64)',
            prompt:
              'Bạn Nam cài đặt mã PIN mở khoá máy tính bảng gồm $4$ chữ số $\\overline{abcd}$ được lấy từ tập hợp $S = \\{0; 1; 2; 3; 4; 5; 6; 7; 8; 9\\}$ (chữ số đầu tiên $a$ có thể bằng $0$). Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Nếu các chữ số trong mã PIN không có điều kiện ràng buộc gì thì có tất cả $10^4 = 10000$ mã PIN khác nhau.',
                isCorrect: true,
                explanation: 'Mỗi vị trí $a, b, c, d$ đều có $10$ cách chọn, nên theo quy tắc nhân có $10^4 = 10000$ mã PIN.',
              },
              {
                statement: 'Nếu Nam chọn mã PIN có $4$ chữ số đôi một khác nhau thì có $10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$ cách chọn.',
                isCorrect: true,
                explanation: 'Chữ số thứ nhất có $10$ cách, chữ số thứ hai có $9$ cách, thứ ba có $8$ cách, thứ tư có $7$ cách, tích bằng $5040$.',
              },
              {
                statement: 'Nếu chữ số đầu tiên $a$ là chữ số lẻ và chữ số cuối cùng $d$ là chữ số chẵn (các chữ số có thể lặp lại) thì có $2500$ mã PIN.',
                isCorrect: true,
                explanation: 'Chọn $a \\in \\{1; 3; 5; 7; 9\\}$ có $5$ cách, $b$ có $10$ cách, $c$ có $10$ cách, $d \\in \\{0; 2; 4; 6; 8\\}$ có $5$ cách. Tổng số là $5 \\cdot 10 \\cdot 10 \\cdot 5 = 2500$.',
              },
              {
                statement: 'Số mã PIN mà tất cả $4$ chữ số đều là chữ số lẻ (có thể lặp lại) là $125$ mã PIN.',
                isCorrect: false,
                explanation:
                  'Mỗi vị trí trong $4$ vị trí có $5$ cách chọn từ $\\{1; 3; 5; 7; 9\\}$, nên có $5^4 = 625$ mã PIN (không phải $125$).',
              },
            ],
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên thoả mãn điều kiện về thứ tự và giá trị',
            prompt:
              'Cho tập hợp các chữ số $E = \\{1; 2; 3; 4; 5; 6\\}$. Xét các số tự nhiên có $3$ chữ số đôi một khác nhau $\\overline{abc}$ được lập từ tập $E$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Tổng số các số tự nhiên có $3$ chữ số đôi một khác nhau lập từ tập $E$ là $120$ số.',
                isCorrect: true,
                explanation: 'Theo quy tắc nhân, có $6 \\cdot 5 \\cdot 4 = 120$ số.',
              },
              {
                statement: 'Trong đó có đúng $60$ số chẵn và $60$ số lẻ.',
                isCorrect: true,
                explanation: 'Tập $E$ có $3$ chữ số chẵn và $3$ chữ số lẻ, nên số các số chẵn bằng số các số lẻ và bằng $3 \\cdot 5 \\cdot 4 = 60$ số.',
              },
              {
                statement: 'Số các số nhỏ hơn $400$ là $60$ số.',
                isCorrect: true,
                explanation: 'Để $\\overline{abc} < 400$ thì $a \\in \\{1; 2; 3\\}$ ($3$ cách chọn), $b$ có $5$ cách, $c$ có $4$ cách, gồm $3 \\cdot 5 \\cdot 4 = 60$ số.',
              },
              {
                statement: 'Số các số tự nhiên $\\overline{abc}$ vừa là số chẵn vừa nhỏ hơn $400$ là $30$ số.',
                isCorrect: false,
                explanation:
                  'Để $\\overline{abc} < 400$ và chẵn: $a \\in \\{1; 2; 3\\}$. Nếu $a = 2$ ($1$ cách) thì $c \\in \\{4; 6\\}$ ($2$ cách), $b$ có $4$ cách $\\Rightarrow 8$ số. Nếu $a \\in \\{1; 3\\}$ ($2$ cách) thì $c \\in \\{2; 4; 6\\}$ ($3$ cách), $b$ có $4$ cách $\\Rightarrow 24$ số. Tổng cộng có $8 + 24 = 32$ số (không phải $30$ số).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 23: Đếm số tự nhiên có 4 chữ số khác nhau',
            prompt:
              'Từ các chữ số $0; 1; 2; 3; 4$, có thể lập được bao nhiêu số tự nhiên có $4$ chữ số đôi một khác nhau?',
            answers: ['96'],
            explanation:
              'Gọi số là $\\overline{abcd}$. Chọn $a \\neq 0$ có $4$ cách; chọn $b \\neq a$ có $4$ cách; chọn $c$ có $3$ cách; chọn $d$ có $2$ cách. Theo quy tắc nhân có $4 \\cdot 4 \\cdot 3 \\cdot 2 = 96$ số.',
          },
          {
            topic: 'Bài 23: Đếm số cách chọn ban đại diện theo quy tắc cộng và nhân',
            prompt:
              'Một đội học sinh tình nguyện có $6$ học sinh khối 10, $5$ học sinh khối 11 và $4$ học sinh khối 12. Có bao nhiêu cách chọn ra $2$ học sinh thuộc hai khối khác nhau để trực cổng trường?',
            answers: ['74'],
            explanation:
              'Số cách chọn $2$ học sinh khác khối là: $6 \\cdot 5 + 5 \\cdot 4 + 6 \\cdot 4 = 30 + 20 + 24 = 74$ cách.',
          },
          {
            topic: 'Bài 23: Đếm số ước nguyên dương của số tự nhiên (Tương tự Ví dụ 2)',
            prompt:
              'Số tự nhiên $240 = 2^4 \\cdot 3^1 \\cdot 5^1$ có tất cả bao nhiêu ước nguyên dương?',
            answers: ['20'],
            explanation:
              'Số ước nguyên dương của $240 = 2^4 \\cdot 3^1 \\cdot 5^1$ là $(4 + 1)(1 + 1)(1 + 1) = 5 \\cdot 2 \\cdot 2 = 20$ ước.',
          },
          {
            topic: 'Bài 23: Đếm số cách tô màu bản đồ',
            prompt:
              'Có $4$ màu sơn khác nhau để sơn $3$ bức tường liên tiếp $T_1, T_2, T_3$ sao cho mỗi bức tường sơn $1$ màu và hai bức tường kề nhau không cùng màu. Hỏi có tất cả bao nhiêu cách sơn?',
            answers: ['36'],
            explanation:
              'Sơn $T_1$ có $4$ cách; sơn $T_2$ khác màu $T_1$ có $3$ cách; sơn $T_3$ khác màu $T_2$ có $3$ cách. Theo quy tắc nhân, có $4 \\cdot 3 \\cdot 3 = 36$ cách.',
          },
        ],
        steps: [
          {
            topic: 'Bài 23: Đếm số tự nhiên có chữ số thoả mãn điều kiện chẵn và nhỏ hơn một số',
            problemStatement:
              'Từ tập hợp $E = \\{1; 2; 3; 4; 5; 6\\}$, lập được bao nhiêu số tự nhiên chẵn có $3$ chữ số đôi một khác nhau và nhỏ hơn $400$?',
            conclusionTarget: 'Chia hai trường hợp theo tính chẵn/lẻ của chữ số hàng trăm $a \\in \\{1; 2; 3\\}$.',
            steps: [
              'Gọi số cần lập là $\\overline{abc}$. Vì $\\overline{abc} < 400$ nên $a \\in \\{1; 2; 3\\}$, và vì số chẵn nên $c \\in \\{2; 4; 6\\}$.',
              'Trường hợp 1 ($a = 2$): Chọn $a = 2$ có $1$ cách; chọn $c \\in \\{4; 6\\}$ có $2$ cách; chọn $b \\notin \\{a; c\\}$ có $4$ cách $\\Rightarrow$ có $1 \\cdot 2 \\cdot 4 = 8$ số.',
              'Trường hợp 2 ($a \\in \\{1; 3\\}$): Chọn $a$ có $2$ cách; chọn $c \\in \\{2; 4; 6\\}$ có $3$ cách; chọn $b \\notin \\{a; c\\}$ có $4$ cách $\\Rightarrow$ có $2 \\cdot 3 \\cdot 4 = 24$ số.',
              'Theo quy tắc cộng, tổng số các số thoả mãn yêu cầu là $8 + 24 = 32$ (số).',
            ],
            analysis:
              'Khi điều kiện của chữ số hàng trăm $a$ và chữ số hàng đơn vị $c$ giao nhau tại phần tử $2$, ta tách trường hợp $a = 2$ để số cách chọn $c$ luôn xác định.',
          },
          {
            topic: 'Bài 23: Đếm theo phương pháp phần bù (loại trừ)',
            problemStatement:
              'Từ các chữ số $1; 2; 3; 4; 5; 6$, lập được bao nhiêu số tự nhiên có $3$ chữ số đôi một khác nhau mà trong đó luôn có mặt chữ số $5$?',
            conclusionTarget: 'Tính tổng số các số có 3 chữ số khác nhau rồi trừ đi số các số không chứa chữ số 5.',
            steps: [
              'Xét tổng số các số tự nhiên có $3$ chữ số đôi một khác nhau lập từ $\\{1; 2; 3; 4; 5; 6\\}$ là $6 \\cdot 5 \\cdot 4 = 120$ (số).',
              'Xét các số có $3$ chữ số đôi một khác nhau mà KHÔNG có mặt chữ số $5$ (tức chỉ lập từ $5$ chữ số $\\{1; 2; 3; 4; 6\\}$).',
              'Theo quy tắc nhân, số các số không chứa chữ số $5$ là $5 \\cdot 4 \\cdot 3 = 60$ (số).',
              'Vậy số các số có $3$ chữ số đôi một khác nhau luôn có mặt chữ số $5$ là $120 - 60 = 60$ (số).',
            ],
            analysis:
              'Ngoài cách đếm trực tiếp (chọn vị trí cho chữ số $5$ có $3$ cách, chọn $2$ chữ số còn lại có $5 \\cdot 4 = 20$ cách $\\Rightarrow 60$ số), đếm phần bù rất hiệu quả khi có từ "ít nhất".',
          },
          {
            topic: 'Bài 23: Bài toán đi đường khứ hồi không lặp lại đường cũ',
            problemStatement:
              'Từ thành phố $A$ đến thành phố $B$ có $4$ con đường, từ thành phố $B$ đến thành phố $C$ có $3$ con đường. Một người đi từ $A$ qua $B$ đến $C$, sau đó từ $C$ quay về $B$ rồi về $A$ sao cho trên mỗi chặng lượt về không đi lại đúng con đường đã đi ở lượt đi. Hỏi người đó có bao nhiêu cách chọn hành trình?',
            conclusionTarget: 'Chia hành trình thành 4 chặng liên tiếp và áp dụng quy tắc nhân.',
            steps: [
              'Chặng 1 (đi từ $A$ đến $B$): có $4$ cách chọn đường; Chặng 2 (đi từ $B$ đến $C$): có $3$ cách chọn đường.',
              'Chặng 3 (về từ $C$ đến $B$): không đi lại con đường đã đi từ $B$ đến $C$, nên còn $3 - 1 = 2$ cách chọn đường.',
              'Chặng 4 (về từ $B$ đến $A$): không đi lại con đường đã đi từ $A$ đến $B$, nên còn $4 - 1 = 3$ cách chọn đường.',
              'Theo quy tắc nhân cho $4$ chặng liên tiếp, tổng số hành trình là $4 \\cdot 3 \\cdot 2 \\cdot 3 = 72$ (cách).',
            ],
            analysis:
              'Điều kiện "không đi lại đường cũ ở mỗi chặng" làm giảm số lựa chọn của chặng về đi $1$ so với chặng đi tương ứng.',
          },
          {
            topic: 'Bài 23: Đếm số tự nhiên có chữ số tăng dần hoặc tổng chữ số cho trước',
            problemStatement:
              'Có bao nhiêu số tự nhiên gồm không quá $3$ chữ số đôi một khác nhau được lập từ các chữ số $1; 2; 3; 4$?',
            conclusionTarget: 'Chia 3 trường hợp (1 chữ số, 2 chữ số, 3 chữ số) và áp dụng quy tắc cộng.',
            steps: [
              'Số tự nhiên gồm không quá $3$ chữ số được chia thành $3$ phương án độc lập: số có $1$ chữ số, số có $2$ chữ số khác nhau và số có $3$ chữ số đôi một khác nhau.',
              'Phương án 1: Số có $1$ chữ số lập từ $\\{1; 2; 3; 4\\}$ có $4$ số.',
              'Phương án 2: Số có $2$ chữ số khác nhau có $4 \\cdot 3 = 12$ số. Phương án 3: Số có $3$ chữ số đôi một khác nhau có $4 \\cdot 3 \\cdot 2 = 24$ số.',
              'Theo quy tắc cộng, tổng số các số tự nhiên thoả mãn là $4 + 12 + 24 = 40$ (số).',
            ],
            analysis:
              'Cụm từ "không quá $3$ chữ số" nghĩa là số chữ số có thể là $1$, $2$ hoặc $3$, do đó ta phải xét đủ cả $3$ phương án.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-24',
    lessonNumber: 24,
    name: 'Bài 24',
    topicTitle: 'Hoán vị, chỉnh hợp và tổ hợp',
    chapter: 'Chương VIII: Đại số tổ hợp',
    keySummary:
      'Tính số các hoán vị $P_n = n!$, chỉnh hợp $A_n^k = \\frac{n!}{(n - k)!}$ (chọn $k$ phần tử và sắp thứ tự) và tổ hợp $C_n^k = \\frac{n!}{k!(n - k)!}$ (chọn tập con $k$ phần tử không phân biệt thứ tự); phân biệt rõ sự khác nhau giữa chỉnh hợp và tổ hợp để giải các bài toán đếm hình học và thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-24-1',
        lessonId: 'bai-24',
        title: 'Đề ôn Bài 24 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–6, Luyện tập 1–4, Vận dụng 1–2 và Bài tập 8.6–8.11 (SGK Toán 10 Tập 2, trang 66–71)',
        description:
          'Đề ôn tập số 01 của Bài 24 (Hoán vị, chỉnh hợp và tổ hợp): Công thức tính $P_n, A_n^k, C_n^k$, phân biệt bài toán có thứ tự và không thứ tự, ứng dụng hình học và thực tế.',
        mcqs: [
          {
            topic: 'Bài 24: Công thức số hoán vị của n phần tử (Tương tự Ví dụ 1)',
            prompt:
              'Có bao nhiêu cách xếp $5$ học sinh thành một hàng dọc?',
            correct: '$5! = 120$ cách.',
            wrongs: ['$25$ cách.', '$5$ cách.', '$20$ cách.'],
            explanation:
              'Mỗi cách xếp $5$ học sinh thành một hàng dọc là một hoán vị của $5$ phần tử, nên số cách xếp là $P_5 = 5! = 120$ cách.',
          },
          {
            topic: 'Bài 24: Công thức tính số chỉnh hợp chập k của n phần tử (Tương tự Khung kiến thức trang 67)',
            prompt:
              'Với $n, k$ là các số nguyên thoả mãn $1 \\le k \\le n$, công thức tính số các chỉnh hợp chập $k$ của $n$ phần tử là:',
            correct: '$A_n^k = \\frac{n!}{(n - k)!}$.',
            wrongs: [
              '$A_n^k = \\frac{n!}{k!(n - k)!}$.',
              '$A_n^k = \\frac{n!}{k!}$.',
              '$A_n^k = k!(n - k)!$.',
            ],
            explanation:
              'Theo định nghĩa chỉnh hợp, $A_n^k = n(n - 1)\\dots(n - k + 1) = \\frac{n!}{(n - k)!}$.',
          },
          {
            topic: 'Bài 24: Vận dụng chỉnh hợp khi chọn và phân công chức vụ (Tương tự Ví dụ 3)',
            prompt:
              'Một lớp học có $30$ học sinh. Giáo viên chủ nhiệm cần chọn ra $3$ học sinh để làm Lớp trưởng, Lớp phó học tập và Bí thư. Hỏi có bao nhiêu cách chọn?',
            correct: '$A_{30}^3 = 24360$ cách.',
            wrongs: [
              '$C_{30}^3 = 4060$ cách.',
              '$30^3 = 27000$ cách.',
              '$3! = 6$ cách.',
            ],
            explanation:
              'Chọn $3$ học sinh từ $30$ học sinh và sắp xếp vào $3$ chức vụ khác nhau (có phân biệt thứ tự) là một chỉnh hợp chập $3$ của $30$, nên có $A_{30}^3 = 30 \\cdot 29 \\cdot 28 = 24360$ cách.',
          },
          {
            topic: 'Bài 24: Vận dụng tổ hợp khi chọn tập con không phân biệt thứ tự (Tương tự Ví dụ 5)',
            prompt:
              'Một lớp học có $30$ học sinh. Giáo viên cần chọn ra $3$ học sinh để tham gia đội tình nguyện của trường (vai trò như nhau). Hỏi có bao nhiêu cách chọn?',
            correct: '$C_{30}^3 = 4060$ cách.',
            wrongs: [
              '$A_{30}^3 = 24360$ cách.',
              '$90$ cách.',
              '$30!$ cách.',
            ],
            explanation:
              'Chọn $3$ học sinh từ $30$ học sinh không phân biệt thứ tự hay chức vụ là một tổ hợp chập $3$ của $30$, nên có $C_{30}^3 = \\frac{30 \\cdot 29 \\cdot 28}{3!} = 4060$ cách.',
          },
          {
            topic: 'Bài 24: Tính chất của số tổ hợp (Tương tự Chú ý trang 69)',
            prompt:
              'Với mọi số nguyên $n, k$ thoả mãn $1 \\le k \\le n$, đẳng thức nào sau đây là ĐÚNG?',
            correct: '$C_n^{k - 1} + C_n^k = C_{n + 1}^k$.',
            wrongs: [
              '$C_n^{k - 1} + C_n^k = C_n^{k + 1}$.',
              '$C_n^k = k! \\cdot A_n^k$.',
              '$C_n^k = C_{n - 1}^k$.',
            ],
            explanation:
              'Theo tính chất Pascal của tổ hợp: $C_n^{k - 1} + C_n^k = C_{n + 1}^k$, và $A_n^k = k! \\cdot C_n^k$.',
          },
          {
            topic: 'Bài 24: Đếm số đoạn thẳng hoặc vectơ tạo từ n điểm phân biệt',
            prompt:
              'Trong mặt phẳng cho $10$ điểm phân biệt. Số vectơ khác vectơ-không có điểm đầu và điểm cuối thuộc $10$ điểm đã cho là:',
            correct: '$A_{10}^2 = 90$ vectơ.',
            wrongs: [
              '$C_{10}^2 = 45$ vectơ.',
              '$100$ vectơ.',
              '$20$ vectơ.',
            ],
            explanation:
              'Mỗi cặp điểm có thứ tự $(A; B)$ tạo thành một vectơ $\\overrightarrow{AB} \\neq \\vec{0}$ (với $\\overrightarrow{AB} \\neq \\overrightarrow{BA}$), nên số vectơ là $A_{10}^2 = 10 \\cdot 9 = 90$.',
          },
          {
            topic: 'Bài 24: Đếm số tam giác tạo bởi các điểm không thẳng hàng',
            prompt:
              'Trong mặt phẳng cho $8$ điểm phân biệt, trong đó không có $3$ điểm nào thẳng hàng. Số tam giác có $3$ đỉnh được lấy từ $8$ điểm đã cho là:',
            correct: '$C_8^3 = 56$ tam giác.',
            wrongs: [
              '$A_8^3 = 336$ tam giác.',
              '$24$ tam giác.',
              '$8! $ tam giác.',
            ],
            explanation:
              'Cứ $3$ điểm không thẳng hàng tạo thành duy nhất $1$ tam giác (không phân biệt thứ tự đỉnh), nên số tam giác là $C_8^3 = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$.',
          },
          {
            topic: 'Bài 24: Đếm số đường chéo của đa giác lồi (Tương tự Bài 8.9)',
            prompt:
              'Một đa giác lồi có $10$ cạnh (thập giác lồi) thì có tất cả bao nhiêu đường chéo?',
            correct: '$35$ đường chéo.',
            wrongs: ['$45$ đường chéo.', '$90$ đường chéo.', '$25$ đường chéo.'],
            explanation:
              'Số đoạn thẳng nối $2$ đỉnh bất kỳ trong $10$ đỉnh là $C_{10}^2 = 45$ (gồm các cạnh và các đường chéo). Trừ đi $10$ cạnh của đa giác, số đường chéo là $45 - 10 = 35$.',
          },
          {
            topic: 'Bài 24: Lập số tự nhiên bằng chỉnh hợp (Tương tự Ví dụ 4)',
            prompt:
              'Số các số tự nhiên gồm $4$ chữ số đôi một khác nhau được lập từ các chữ số $1; 2; 3; 4; 5; 6; 7$ là:',
            correct: '$A_7^4 = 840$ số.',
            wrongs: [
              '$C_7^4 = 35$ số.',
              '$7^4 = 2401$ số.',
              '$4! = 24$ số.',
            ],
            explanation:
              'Mỗi số tự nhiên có $4$ chữ số đôi một khác nhau lập từ $7$ chữ số khác $0$ là một chỉnh hợp chập $4$ của $7$, nên có $A_7^4 = 7 \\cdot 6 \\cdot 5 \\cdot 4 = 840$ số.',
          },
          {
            topic: 'Bài 24: Kết hợp tổ hợp và quy tắc nhân (Tương tự Ví dụ 6)',
            prompt:
              'Một hộp có $6$ quả cầu đỏ và $4$ quả cầu xanh (các quả cầu đôi một khác nhau). Số cách lấy ra đồng thời $4$ quả cầu sao cho có đúng $2$ quả cầu đỏ và $2$ quả cầu xanh là:',
            correct: '$C_6^2 \\cdot C_4^2 = 90$ cách.',
            wrongs: [
              '$C_6^2 + C_4^2 = 21$ cách.',
              '$A_6^2 \\cdot A_4^2 = 360$ cách.',
              '$C_{10}^4 = 210$ cách.',
            ],
            explanation:
              'Công đoạn 1: chọn $2$ quả đỏ từ $6$ quả đỏ có $C_6^2 = 15$ cách. Công đoạn 2: chọn $2$ quả xanh từ $4$ quả xanh có $C_4^2 = 6$ cách. Theo quy tắc nhân có $15 \\cdot 6 = 90$ cách.',
          },
          {
            topic: 'Bài 24: Xếp chỗ có phần tử đứng cố định hoặc đứng cạnh nhau',
            prompt:
              'Xếp $5$ bạn gồm An, Bình, Chi, Dũng, Em thành một hàng ngang sao cho bạn An luôn đứng ở vị trí đầu hàng bên trái. Số cách xếp là:',
            correct: '$4! = 24$ cách.',
            wrongs: ['$5! = 120$ cách.', '$2 \\cdot 4! = 48$ cách.', '$16$ cách.'],
            explanation:
              'An cố định ở đầu hàng ($1$ cách), $4$ bạn còn lại hoán vị ở $4$ vị trí tiếp theo có $P_4 = 4! = 24$ cách.',
          },
          {
            topic: 'Bài 24: Bài toán giải đấu vòng tròn một lượt',
            prompt:
              'Một giải bóng đá học sinh có $8$ đội tham gia thi đấu theo thể thức vòng tròn một lượt (mỗi đội gặp nhau đúng $1$ trận). Hỏi toàn giải có tất cả bao nhiêu trận đấu?',
            correct: '$C_8^2 = 28$ trận.',
            wrongs: [
              '$A_8^2 = 56$ trận.',
              '$16$ trận.',
              '$64$ trận.',
            ],
            explanation:
              'Mỗi trận đấu ứng với việc chọn ra $2$ đội từ $8$ đội (không phân biệt thứ tự), nên tổng số trận đấu là $C_8^2 = \\frac{8 \\cdot 7}{2} = 28$ trận.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 24: Phân biệt Hoán vị, Chỉnh hợp và Tổ hợp trong thực tế (Tương tự Bài 8.6 & 8.8)',
            prompt:
              'Một câu lạc bộ Tin học của trường có $12$ thành viên gồm $7$ học sinh nam và $5$ học sinh nữ. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số cách xếp $5$ bạn học sinh nữ thành một hàng ngang để chụp ảnh kỷ niệm là $P_5 = 120$ cách.',
                isCorrect: true,
                explanation: 'Xếp $5$ bạn nữ vào $5$ vị trí hàng ngang là hoán vị của $5$ phần tử: $P_5 = 5! = 120$ cách.',
              },
              {
                statement: 'Số cách chọn ra $3$ thành viên để giữ $3$ vị trí Chủ nhiệm, Phó chủ nhiệm và Thư ký câu lạc bộ là $C_{12}^3 = 220$ cách.',
                isCorrect: false,
                explanation:
                  'Vì $3$ chức vụ Chủ nhiệm, Phó chủ nhiệm và Thư ký là khác nhau (có thứ tự), nên số cách chọn phải là chỉnh hợp $A_{12}^3 = 12 \\cdot 11 \\cdot 10 = 1320$ cách (không phải $220$).',
              },
              {
                statement: 'Số cách chọn ra một đội tuyển gồm $4$ thành viên bất kỳ đi dự thi Tin học trẻ là $C_{12}^4 = 495$ cách.',
                isCorrect: true,
                explanation: 'Chọn $4$ thành viên không phân biệt thứ tự từ $12$ thành viên có $C_{12}^4 = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$ cách.',
              },
              {
                statement: 'Số cách chọn ra $4$ thành viên gồm đúng $2$ bạn nam và $2$ bạn nữ là $C_7^2 \\cdot C_5^2 = 210$ cách.',
                isCorrect: true,
                explanation: 'Chọn $2$ nam từ $7$ nam có $C_7^2 = 21$ cách; chọn $2$ nữ từ $5$ nữ có $C_5^2 = 10$ cách. Tích là $21 \\cdot 10 = 210$ cách.',
              },
            ],
          },
          {
            topic: 'Bài 24: Bài toán đếm có điều kiện "ít nhất" trong tổ hợp (Tương tự Ví dụ 6 & Bài 8.10)',
            prompt:
              'Một tổ công tác có $6$ bác sĩ nội khoa và $4$ bác sĩ ngoại khoa. Bệnh viện cần cử một đoàn công tác gồm $4$ bác sĩ đi khám thiện nguyện. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số cách chọn ngẫu nhiên $4$ bác sĩ bất kỳ từ $10$ bác sĩ là $C_{10}^4 = 210$ cách.',
                isCorrect: true,
                explanation: 'Ta có $C_{10}^4 = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4!} = 210$ cách.',
              },
              {
                statement: 'Số cách chọn $4$ bác sĩ mà toàn bộ đều là bác sĩ nội khoa là $C_6^4 = 15$ cách.',
                isCorrect: true,
                explanation: 'Chọn $4$ bác sĩ từ $6$ bác sĩ nội khoa có $C_6^4 = C_6^2 = 15$ cách.',
              },
              {
                statement: 'Số cách chọn $4$ bác sĩ sao cho có ít nhất $1$ bác sĩ ngoại khoa là $210 - 15 = 195$ cách.',
                isCorrect: true,
                explanation:
                  'Dùng phần bù: lấy tổng số cách chọn ($210$) trừ đi số cách chọn không có bác sĩ ngoại khoa nào ($15$), được $195$ cách.',
              },
              {
                statement: 'Số cách chọn $4$ bác sĩ sao cho có cả bác sĩ nội khoa và bác sĩ ngoại khoa là $195$ cách.',
                isCorrect: false,
                explanation:
                  'Để có cả hai chuyên khoa, ta phải trừ đi cả trường hợp toàn nội khoa ($C_6^4 = 15$) và toàn ngoại khoa ($C_4^4 = 1$), nên có $210 - 15 - 1 = 194$ cách (không phải $195$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 24: Tính số chỉnh hợp',
            prompt:
              'Tính giá trị của $A_6^3$ (số chỉnh hợp chập $3$ của $6$ phần tử).',
            answers: ['120'],
            explanation:
              'Ta có $A_6^3 = 6 \\cdot 5 \\cdot 4 = 120$.',
          },
          {
            topic: 'Bài 24: Tính số cách chọn nhóm có điều kiện',
            prompt:
              'Một hộp đựng $5$ viên bi xanh và $4$ viên bi đỏ (đôi một khác nhau). Có bao nhiêu cách lấy ra $3$ viên bi sao cho có đúng $2$ viên bi xanh và $1$ viên bi đỏ?',
            answers: ['40'],
            explanation:
              'Chọn $2$ viên bi xanh có $C_5^2 = 10$ cách; chọn $1$ viên bi đỏ có $C_4^1 = 4$ cách. Theo quy tắc nhân có $10 \\cdot 4 = 40$ cách.',
          },
          {
            topic: 'Bài 24: Đếm số đường chéo của đa giác lồi (Tương tự Bài 8.9)',
            prompt:
              'Một đa giác lồi có $12$ đỉnh thì có tất cả bao nhiêu đường chéo?',
            answers: ['54'],
            explanation:
              'Số đoạn thẳng nối $2$ đỉnh bất kỳ là $C_{12}^2 = 66$. Trừ đi $12$ cạnh của đa giác, số đường chéo là $66 - 12 = 54$.',
          },
          {
            topic: 'Bài 24: Xếp hàng sao cho 2 người luôn đứng cạnh nhau',
            prompt:
              'Có bao nhiêu cách xếp $5$ học sinh thành một hàng ngang sao cho hai bạn An và Bình luôn đứng cạnh nhau?',
            answers: ['48'],
            explanation:
              'Gộp An và Bình thành một nhóm kép $X$ (có $2! = 2$ cách đổi chỗ An, Bình). Xếp nhóm $X$ cùng $3$ bạn còn lại ($4$ phần tử) có $4! = 24$ cách. Theo quy tắc nhân có $2 \\cdot 24 = 48$ cách.',
          },
        ],
        steps: [
          {
            topic: 'Bài 24: Giải bài toán chọn nhóm có điều kiện "ít nhất" bằng hai cách (Tương tự Ví dụ 6)',
            problemStatement:
              'Một đội thanh niên tình nguyện có $7$ học sinh nam và $5$ học sinh nữ. Cần chọn ra $4$ học sinh đi làm nhiệm vụ sao cho trong $4$ học sinh đó có ít nhất $1$ học sinh nữ. Hỏi có bao nhiêu cách chọn?',
            conclusionTarget: 'Sử dụng tổ hợp và phương pháp phần bù để tính số cách chọn.',
            steps: [
              'Số cách chọn $4$ học sinh bất kỳ từ $12$ học sinh (không phân biệt nam, nữ) là $C_{12}^4 = 495$ (cách).',
              'Xét phương án đối lập: chọn $4$ học sinh mà không có học sinh nữ nào (tức cả $4$ đều là nam).',
              'Số cách chọn $4$ học sinh toàn nam từ $7$ học sinh nam là $C_7^4 = 35$ (cách).',
              'Vậy số cách chọn $4$ học sinh có ít nhất $1$ học sinh nữ là $495 - 35 = 460$ (cách).',
            ],
            analysis:
              'Khi gặp yêu cầu "có ít nhất $1$ phần tử loại A", tính phần bù (tổng số cách chọn trừ đi số cách không có phần tử loại A) giúp tránh phải chia 4 trường hợp.',
          },
          {
            topic: 'Bài 24: Kết hợp tổ hợp và hoán vị (chọn phần tử rồi sắp xếp)',
            problemStatement:
              'Từ $5$ chữ số lẻ $\\{1; 3; 5; 7; 9\\}$ và $4$ chữ số chẵn $\\{2; 4; 6; 8\\}$, lập được bao nhiêu số tự nhiên gồm $5$ chữ số đôi một khác nhau trong đó có đúng $3$ chữ số lẻ và $2$ chữ số chẵn?',
            conclusionTarget: 'Chọn bộ chữ số bằng tổ hợp rồi hoán vị $5$ chữ số đã chọn.',
            steps: [
              'Công đoạn 1: Chọn $3$ chữ số lẻ từ $5$ chữ số lẻ có $C_5^3 = 10$ cách.',
              'Công đoạn 2: Chọn $2$ chữ số chẵn từ $4$ chữ số chẵn có $C_4^2 = 6$ cách.',
              'Công đoạn 3: Sắp xếp $5$ chữ số đã chọn (3 lẻ, 2 chẵn) thành một số có $5$ chữ số có $P_5 = 5! = 120$ cách.',
              'Theo quy tắc nhân, số các số tự nhiên thoả mãn yêu cầu là $10 \\cdot 6 \\cdot 120 = 7200$ (số).',
            ],
            analysis:
              'Tách bài toán thành hai bước rõ ràng: Bước 1 dùng tổ hợp để chọn tập hợp chữ số; Bước 2 dùng hoán vị để xếp thứ tự các chữ số.',
          },
          {
            topic: 'Bài 24: Đếm số tam giác tạo từ các điểm thuộc hai đường thẳng song song',
            problemStatement:
              'Trên đường thẳng $d_1$ cho $6$ điểm phân biệt và trên đường thẳng $d_2$ song song với $d_1$ cho $5$ điểm phân biệt. Tính số tam giác có $3$ đỉnh được lấy từ $11$ điểm đã cho.',
            conclusionTarget: 'Chia hai trường hợp (1 đỉnh trên $d_1$, 2 đỉnh trên $d_2$ và ngược lại) rồi cộng kết quả.',
            steps: [
              'Để $3$ điểm không thẳng hàng tạo thành một tam giác, phải có $1$ đỉnh thuộc đường thẳng này và $2$ đỉnh thuộc đường thẳng kia.',
              'Trường hợp 1: Chọn $1$ đỉnh trên $d_1$ và $2$ đỉnh trên $d_2$ có $C_6^1 \\cdot C_5^2 = 6 \\cdot 10 = 60$ (tam giác).',
              'Trường hợp 2: Chọn $2$ đỉnh trên $d_1$ và $1$ đỉnh trên $d_2$ có $C_6^2 \\cdot C_5^1 = 15 \\cdot 5 = 75$ (tam giác).',
              'Theo quy tắc cộng, tổng số tam giác tạo thành là $60 + 75 = 135$ (tam giác).',
            ],
            analysis:
              'Hoặc dùng phần bù: chọn $3$ điểm bất kỳ từ $11$ điểm rồi trừ đi các bộ $3$ điểm thẳng hàng: $C_{11}^3 - C_6^3 - C_5^3 = 165 - 20 - 10 = 135$.',
          },
          {
            topic: 'Bài 24: Tìm n từ phương trình chứa tổ hợp và chỉnh hợp',
            problemStatement:
              'Tìm số nguyên dương $n$ ($n \\ge 2$) thoả mãn phương trình $A_n^2 + 2C_n^2 = 40$, từ đó tính số hoán vị $P_n$.',
            conclusionTarget: 'Khai triển công thức $A_n^2, C_n^2$ theo $n$, giải phương trình bậc hai tìm $n$ và tính $P_n$.',
            steps: [
              'Với $n \\ge 2$, áp dụng công thức $A_n^2 = n(n - 1)$ và $C_n^2 = \\frac{n(n - 1)}{2}$.',
              'Thay vào phương trình đã cho: $n(n - 1) + 2 \\cdot \\frac{n(n - 1)}{2} = 40 \\Leftrightarrow 2n(n - 1) = 40$.',
              'Thu gọn phương trình: $n^2 - n - 20 = 0 \\Leftrightarrow (n - 5)(n + 4) = 0 \\Rightarrow n = 5$ (do $n \\ge 2$).',
              'Với $n = 5$, số hoán vị là $P_5 = 5! = 120$.',
            ],
            analysis:
              'Chú ý mối liên hệ $2C_n^2 = A_n^2 = n(n - 1)$ giúp rút gọn phương trình tổ hợp rất nhanh.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-24-2',
        lessonId: 'bai-24',
        title: 'Đề ôn Bài 24 - Đề số 02',
        subtitle: 'Nâng cao bài toán hoán vị, chỉnh hợp, tổ hợp và phương trình tổ hợp (SGK Toán 10 Tập 2, trang 66–71)',
        description:
          'Đề ôn tập số 02 của Bài 24 (Hoán vị, chỉnh hợp và tổ hợp): Bài toán xếp chỗ xen kẽ, chọn đội tuyển có điều kiện, đếm hình học và giải phương trình tổ hợp.',
        mcqs: [
          {
            topic: 'Bài 24: Mối liên hệ giữa chỉnh hợp và tổ hợp (Tương tự HĐ3 trang 69)',
            prompt:
              'Với các số tự nhiên $n, k$ thoả mãn $1 \\le k \\le n$, hệ thức nào sau đây là ĐÚNG?',
            correct: '$A_n^k = k! \\cdot C_n^k$.',
            wrongs: [
              '$C_n^k = k! \\cdot A_n^k$.',
              '$A_n^k = n! \\cdot C_n^k$.',
              '$A_n^k = (n - k)! \\cdot C_n^k$.',
            ],
            explanation:
              'Vì $C_n^k = \\frac{n!}{k!(n - k)!} = \\frac{A_n^k}{k!}$ nên $A_n^k = k! \\cdot C_n^k$.',
          },
          {
            topic: 'Bài 24: Tính chất đối xứng của số tổ hợp',
            prompt:
              'Biết $C_{20}^k = C_{20}^{14}$ với $k < 10$. Giá trị của $k$ bằng:',
            correct: '$k = 6$.',
            wrongs: ['$k = 4$.', '$k = 7$.', '$k = 8$.'],
            explanation:
              'Theo tính chất $C_n^k = C_n^{n - k}$, ta có $C_{20}^{14} = C_{20}^{20 - 14} = C_{20}^6$, nên với $k < 10$ thì $k = 6$.',
          },
          {
            topic: 'Bài 24: Xếp xen kẽ nam và nữ thành một hàng ngang',
            prompt:
              'Có bao nhiêu cách xếp $4$ bạn nam và $4$ bạn nữ thành một hàng ngang sao cho nam và nữ đứng xen kẽ nhau?',
            correct: '$2 \\cdot 4! \\cdot 4! = 1152$ cách.',
            wrongs: [
              '$4! \\cdot 4! = 576$ cách.',
              '$8! = 40320$ cách.',
              '$2 \\cdot 4! = 48$ cách.',
            ],
            explanation:
              'Có $2$ kiểu xếp xen kẽ (Nam đứng đầu hoặc Nữ đứng đầu). Trong mỗi kiểu, xếp $4$ nam vào $4$ vị trí có $4!$ cách, xếp $4$ nữ vào $4$ vị trí còn lại có $4!$ cách. Vậy có $2 \\cdot 4! \\cdot 4! = 1152$ cách.',
          },
          {
            topic: 'Bài 24: Đếm số giao điểm tối đa của các đường thẳng',
            prompt:
              'Trong mặt phẳng cho $10$ đường thẳng đôi một cắt nhau và không có $3$ đường thẳng nào đồng quy. Số giao điểm của $10$ đường thẳng đó là:',
            correct: '$C_{10}^2 = 45$ giao điểm.',
            wrongs: [
              '$A_{10}^2 = 90$ giao điểm.',
              '$20$ giao điểm.',
              '$100$ giao điểm.',
            ],
            explanation:
              'Cứ mỗi cặp $2$ đường thẳng trong $10$ đường thẳng cắt nhau tại duy nhất $1$ giao điểm phân biệt, nên số giao điểm là $C_{10}^2 = 45$.',
          },
          {
            topic: 'Bài 24: Đếm số hình bình hành tạo từ hai họ đường thẳng song song',
            prompt:
              'Trong mặt phẳng cho $5$ đường thẳng song song cắt $6$ đường thẳng song song khác. Số hình bình hành được tạo thành từ các đường thẳng đã cho là:',
            correct: '$C_5^2 \\cdot C_6^2 = 150$ hình.',
            wrongs: [
              '$C_5^2 + C_6^2 = 25$ hình.',
              '$5 \\cdot 6 = 30$ hình.',
              '$A_5^2 \\cdot A_6^2 = 600$ hình.',
            ],
            explanation:
              'Mỗi hình bình hành được tạo bởi $2$ đường thẳng thuộc họ thứ nhất ($C_5^2 = 10$ cách) và $2$ đường thẳng thuộc họ thứ hai ($C_6^2 = 15$ cách). Theo quy tắc nhân có $10 \\cdot 15 = 150$ hình.',
          },
          {
            topic: 'Bài 24: Chọn số tự nhiên có các chữ số tăng dần thực sự',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5; 6; 7$, lập được bao nhiêu số tự nhiên có $3$ chữ số $\\overline{abc}$ sao cho $a < b < c$?',
            correct: '$C_7^3 = 35$ số.',
            wrongs: [
              '$A_7^3 = 210$ số.',
              '$21$ số.',
              '$42$ số.',
            ],
            explanation:
              'Mỗi tập con gồm $3$ chữ số khác nhau lấy từ $7$ chữ số chỉ có duy nhất $1$ cách sắp xếp theo thứ tự tăng dần $a < b < c$. Do đó số các số thoả mãn chính là $C_7^3 = 35$ số.',
          },
          {
            topic: 'Bài 24: Tìm n từ số đường chéo của đa giác lồi',
            prompt:
              'Một đa giác lồi có $n$ đỉnh có đúng $27$ đường chéo. Giá trị của $n$ bằng:',
            correct: '$n = 9$.',
            wrongs: ['$n = 8$.', '$n = 10$.', '$n = 12$.'],
            explanation:
              'Số đường chéo của đa giác $n$ đỉnh là $C_n^2 - n = \\frac{n(n - 3)}{2} = 27 \\Leftrightarrow n(n - 3) = 54 \\Leftrightarrow n = 9$.',
          },
          {
            topic: 'Bài 24: Chọn ban điều hành vừa có tổ hợp vừa có chỉnh hợp',
            prompt:
              'Một tổ có $10$ người. Cần chọn ra $1$ Tổ trưởng, $1$ Tổ phó và $2$ Uỷ viên (hai Uỷ viên có vai trò như nhau). Số cách chọn là:',
            correct: '$10 \\cdot 9 \\cdot C_8^2 = 2520$ cách.',
            wrongs: [
              '$A_{10}^4 = 5040$ cách.',
              '$C_{10}^4 = 210$ cách.',
              '$1260$ cách.',
            ],
            explanation:
              'Chọn Tổ trưởng có $10$ cách, chọn Tổ phó có $9$ cách, chọn $2$ Uỷ viên từ $8$ người còn lại có $C_8^2 = 28$ cách. Tổng số cách là $10 \\cdot 9 \\cdot 28 = 2520$ cách.',
          },
          {
            topic: 'Bài 24: Chia tập hợp các phần tử vào các nhóm có kích thước cố định',
            prompt:
              'Có bao nhiêu cách chia $9$ cuốn sách khác nhau cho $3$ học sinh An, Bình, Chi sao cho An được $4$ cuốn, Bình được $3$ cuốn và Chi được $2$ cuốn?',
            correct: '$C_9^4 \\cdot C_5^3 \\cdot C_2^2 = 1260$ cách.',
            wrongs: [
              '$C_9^4 + C_5^3 + C_2^2 = 137$ cách.',
              '$9! = 362880$ cách.',
              '$420$ cách.',
            ],
            explanation:
              'Chọn $4$ cuốn cho An có $C_9^4 = 126$ cách; chọn $3$ cuốn trong $5$ cuốn còn lại cho Bình có $C_5^3 = 10$ cách; còn $2$ cuốn cho Chi có $C_2^2 = 1$ cách. Tích là $126 \\cdot 10 \\cdot 1 = 1260$ cách.',
          },
          {
            topic: 'Bài 24: Xếp sách theo từng môn đứng cạnh nhau trên kệ',
            prompt:
              'Xếp $3$ cuốn sách Toán khác nhau và $2$ cuốn sách Văn khác nhau lên một kệ sách hàng ngang sao cho các sách cùng môn phải đứng cạnh nhau. Số cách xếp là:',
            correct: '$2! \\cdot 3! \\cdot 2! = 24$ cách.',
            wrongs: [
              '$3! \\cdot 2! = 12$ cách.',
              '$5! = 120$ cách.',
              '$36$ cách.',
            ],
            explanation:
              'Xếp thứ tự $2$ nhóm môn học có $2!$ cách. Hoán vị $3$ cuốn sách Toán có $3!$ cách, hoán vị $2$ cuốn sách Văn có $2!$ cách. Tích là $2 \\cdot 6 \\cdot 2 = 24$ cách.',
          },
          {
            topic: 'Bài 24: Chọn sản phẩm từ lô hàng có chính phẩm và phế phẩm',
            prompt:
              'Một hộp có $10$ bóng đèn, trong đó có $7$ bóng tốt và $3$ bóng hỏng. Số cách lấy ra $3$ bóng đèn trong đó có không quá $1$ bóng hỏng là:',
            correct: '$C_7^3 + C_7^2 \\cdot C_3^1 = 98$ cách.',
            wrongs: [
              '$C_7^2 \\cdot C_3^1 = 63$ cách.',
              '$C_7^3 = 35$ cách.',
              '$C_{10}^3 = 120$ cách.',
            ],
            explanation:
              'Không quá $1$ bóng hỏng gồm: $0$ bóng hỏng ($C_7^3 = 35$ cách) hoặc $1$ bóng hỏng ($C_7^2 \\cdot C_3^1 = 21 \\cdot 3 = 63$ cách). Tổng cộng có $35 + 63 = 98$ cách.',
          },
          {
            topic: 'Bài 24: Giải phương trình tổ hợp cơ bản',
            prompt:
              'Số nguyên dương $n$ thoả mãn $C_n^1 + C_n^2 = 15$ là:',
            correct: '$n = 5$.',
            wrongs: ['$n = 6$.', '$n = 4$.', '$n = 7$.'],
            explanation:
              'Ta có $C_n^1 + C_n^2 = C_{n + 1}^2 = \\frac{(n + 1)n}{2} = 15 \\Leftrightarrow n(n + 1) = 30 \\Leftrightarrow n = 5$ (vì $n \\ge 2$).',
          },
        ],
        tfs: [
          {
            topic: 'Bài 24: Bài toán xếp hàng có điều kiện đứng cạnh nhau / không đứng cạnh nhau',
            prompt:
              'Có $6$ học sinh gồm $4$ bạn nam và $2$ bạn nữ được xếp thành một hàng ngang. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số cách xếp $6$ học sinh thành một hàng ngang bất kỳ là $P_6 = 6! = 720$ cách.',
                isCorrect: true,
                explanation: 'Số hoán vị của $6$ học sinh là $6! = 720$ cách.',
              },
              {
                statement: 'Số cách xếp sao cho $2$ bạn nữ luôn đứng cạnh nhau là $2! \\cdot 5! = 240$ cách.',
                isCorrect: true,
                explanation: 'Buộc $2$ bạn nữ thành $1$ nhóm (có $2!$ cách đổi chỗ), rồi xếp cùng $4$ bạn nam ($5$ phần tử) có $5!$ cách. Tích là $2 \\cdot 120 = 240$ cách.',
              },
              {
                statement: 'Số cách xếp sao cho $2$ bạn nữ KHÔNG đứng cạnh nhau là $480$ cách.',
                isCorrect: true,
                explanation: 'Dùng phần bù: $720 - 240 = 480$ cách.',
              },
              {
                statement: 'Số cách xếp sao cho $4$ bạn nam đứng liền nhau là $4! \\cdot 2! = 48$ cách.',
                isCorrect: false,
                explanation:
                  'Buộc $4$ bạn nam thành $1$ nhóm (có $4! = 24$ cách), rồi xếp nhóm này cùng $2$ bạn nữ ($3$ phần tử) có $3! = 6$ cách. Vậy phải có $24 \\cdot 6 = 144$ cách (không phải $48$).',
              },
            ],
          },
          {
            topic: 'Bài 24: Đếm số tam giác khi có một số điểm thẳng hàng',
            prompt:
              'Trong mặt phẳng cho $10$ điểm phân biệt, trong đó có $4$ điểm $A, B, C, D$ cùng nằm trên một đường thẳng $\\Delta$, ngoài ra không có $3$ điểm nào khác thẳng hàng. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số cách chọn ra một bộ $3$ điểm bất kỳ từ $10$ điểm đã cho là $C_{10}^3 = 120$ cách.',
                isCorrect: true,
                explanation: 'Ta có $C_{10}^3 = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$.',
              },
              {
                statement: 'Số bộ $3$ điểm thẳng hàng được lấy từ $4$ điểm trên đường thẳng $\\Delta$ là $C_4^3 = 4$ bộ.',
                isCorrect: true,
                explanation: 'Chọn $3$ điểm từ $4$ điểm thẳng hàng trên $\\Delta$ có $C_4^3 = 4$ bộ không tạo thành tam giác.',
              },
              {
                statement: 'Tổng số tam giác có $3$ đỉnh lấy từ $10$ điểm đã cho là $116$ tam giác.',
                isCorrect: true,
                explanation: 'Lấy tổng số bộ $3$ điểm trừ đi số bộ $3$ điểm thẳng hàng: $120 - 4 = 116$ tam giác.',
              },
              {
                statement: 'Số đường thẳng phân biệt đi qua ít nhất $2$ trong $10$ điểm đã cho là $C_{10}^2 - C_4^2 = 39$ đường thẳng.',
                isCorrect: false,
                explanation:
                  'Khi trừ đi $C_4^2 = 6$ cặp điểm trên $\\Delta$, ta đã trừ mất cả đường thẳng $\\Delta$, nên phải cộng lại $1$: có $45 - 6 + 1 = 40$ đường thẳng (không phải $39$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 24: Tính số tổ hợp trong bài toán bắt tay',
            prompt:
              'Trong một buổi gặp mặt đầu xuân có $15$ đại biểu tham dự. Nếu mỗi đại biểu đều bắt tay với từng đại biểu khác đúng $1$ lần thì có tất cả bao nhiêu cái bắt tay?',
            answers: ['105'],
            explanation:
              'Mỗi cái bắt tay ứng với một tổ hợp chập $2$ của $15$ đại biểu: $C_{15}^2 = \\frac{15 \\cdot 14}{2} = 105$.',
          },
          {
            topic: 'Bài 24: Đếm số tự nhiên có chữ số 0 bằng chỉnh hợp',
            prompt:
              'Từ các chữ số $0; 1; 2; 3; 4; 5$, lập được bao nhiêu số tự nhiên có $4$ chữ số đôi một khác nhau?',
            answers: ['300'],
            explanation:
              'Chọn chữ số hàng nghìn $a \\neq 0$ có $5$ cách. Chọn và sắp xếp $3$ chữ số tiếp theo từ $5$ chữ số còn lại có $A_5^3 = 60$ cách. Vậy có $5 \\cdot 60 = 300$ số.',
          },
          {
            topic: 'Bài 24: Chọn uỷ ban có đủ đại diện nam và nữ',
            prompt:
              'Một tổ có $5$ nam và $4$ nữ. Có bao nhiêu cách chọn ra $3$ người sao cho trong đó có ít nhất $1$ nam và ít nhất $1$ nữ?',
            answers: ['70'],
            explanation:
              'Tổng số cách chọn $3$ người là $C_9^3 = 84$. Số cách chọn toàn nam là $C_5^3 = 10$, toàn nữ là $C_4^3 = 4$. Vậy số cách có cả nam và nữ là $84 - 10 - 4 = 70$.',
          },
          {
            topic: 'Bài 24: Tìm n từ phương trình chỉnh hợp',
            prompt:
              'Tìm số nguyên dương $n$ thoả mãn phương trình $A_n^2 - n = 48$.',
            answers: ['8'],
            explanation:
              'Với $n \\ge 2$: $n(n - 1) - n = 48 \\Leftrightarrow n^2 - 2n - 48 = 0 \\Leftrightarrow (n - 8)(n + 6) = 0 \\Rightarrow n = 8$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 24: Giải phương trình tìm n rồi tính số tổ hợp',
            problemStatement:
              'Tìm số nguyên dương $n$ ($n \\ge 2$) thoả mãn $A_n^2 + 2C_n^2 = 40$, từ đó tính giá trị của $C_{n + 2}^3$.',
            conclusionTarget: 'Biến đổi phương trình về bậc hai ẩn $n$, tìm $n = 5$ và tính $C_7^3$.',
            steps: [
              'Với điều kiện $n \\in \\mathbb{N}^*, n \\ge 2$, ta có $A_n^2 = n(n - 1)$ và $C_n^2 = \\frac{n(n - 1)}{2}$.',
              'Phương trình trở thành $n(n - 1) + 2 \\cdot \\frac{n(n - 1)}{2} = 40 \\Leftrightarrow 2n(n - 1) = 40 \\Leftrightarrow n^2 - n - 20 = 0$.',
              'Giải phương trình bậc hai trên với $n \\ge 2$, ta được nghiệm duy nhất $n = 5$.',
              'Thay $n = 5$ vào biểu thức cần tính, ta có $C_{n + 2}^3 = C_7^3 = \\frac{7 \\cdot 6 \\cdot 5}{3!} = 35$.',
            ],
            analysis:
              'Luôn đặt điều kiện $n \\in \\mathbb{N}, n \\ge k$ trước khi biến đổi các biểu thức $A_n^k$ và $C_n^k$.',
          },
          {
            topic: 'Bài 24: Bài toán xếp chỗ cho hai phần tử không đứng cạnh nhau (phương pháp vách ngăn)',
            problemStatement:
              'Có bao nhiêu cách xếp $5$ bạn nam và $3$ bạn nữ thành một hàng ngang sao cho không có bất kỳ $2$ bạn nữ nào đứng cạnh nhau?',
            conclusionTarget: 'Xếp $5$ bạn nam trước tạo $6$ khoảng trống rồi xếp $3$ bạn nữ vào các khoảng trống.',
            steps: [
              'Công đoạn 1: Xếp $5$ bạn nam thành một hàng ngang có $P_5 = 5! = 120$ cách.',
              'Giữa $5$ bạn nam và ở hai đầu hàng tạo ra tất cả $5 + 1 = 6$ vị trí khoảng trống (vách ngăn).',
              'Công đoạn 2: Để không có $2$ bạn nữ nào đứng cạnh nhau, ta xếp $3$ bạn nữ vào $3$ trong $6$ khoảng trống đó, có $A_6^3 = 6 \\cdot 5 \\cdot 4 = 120$ cách.',
              'Theo quy tắc nhân, số cách xếp thoả mãn yêu cầu là $120 \\cdot 120 = 14400$ (cách).',
            ],
            analysis:
              'Khi có từ $3$ phần tử trở lên không được đứng kề nhau, phương pháp xếp xen vào các khoảng trống (vách ngăn) ngắn gọn hơn rất nhiều so với phần bù.',
          },
          {
            topic: 'Bài 24: Lập số tự nhiên luôn có mặt hai chữ số cho trước đứng cạnh nhau',
            problemStatement:
              'Từ các chữ số $1; 2; 3; 4; 5; 6$, lập được bao nhiêu số tự nhiên có $4$ chữ số đôi một khác nhau mà trong đó luôn có mặt cả hai chữ số $1, 2$ và hai chữ số $1, 2$ đứng cạnh nhau?',
            conclusionTarget: 'Gộp $(1; 2)$ thành một khối, chọn thêm 2 chữ số còn lại rồi hoán vị.',
            steps: [
              'Công đoạn 1: Chọn thêm $2$ chữ số nữa từ $4$ chữ số còn lại $\\{3; 4; 5; 6\\}$ có $C_4^2 = 6$ cách.',
              'Công đoạn 2: Buộc hai chữ số $1$ và $2$ thành một khối kép $X$; trong khối $X$ có $2! = 2$ cách đổi chỗ ($12$ hoặc $21$).',
              'Công đoạn 3: Sắp xếp khối $X$ cùng với $2$ chữ số vừa chọn (gồm $3$ phần tử) có $3! = 6$ cách.',
              'Theo quy tắc nhân, tổng số các số thoả mãn là $6 \\cdot 2 \\cdot 6 = 72$ (số).',
            ],
            analysis:
              'Kỹ thuật "buộc phần tử" kết hợp với chọn tổ hợp giúp giải quyết nhanh bài toán vừa chọn chữ số vừa ràng buộc vị trí kề nhau.',
          },
          {
            topic: 'Bài 24: Bài toán chọn hộp sản phẩm theo tiêu chuẩn chất lượng (Tương tự Bài 8.10)',
            problemStatement:
              'Một hộp có $12$ chiếc bút bi khác nhau gồm $5$ bút xanh, $4$ bút đen và $3$ bút đỏ. Cần chọn ra $4$ chiếc bút sao cho có đủ cả $3$ màu (xanh, đen, đỏ). Hỏi có bao nhiêu cách chọn?',
            conclusionTarget: 'Chia 3 trường hợp theo màu có 2 chiếc bút rồi áp dụng quy tắc cộng.',
            steps: [
              'Để $4$ chiếc bút lấy ra có đủ cả $3$ màu, phải có đúng $1$ màu có $2$ chiếc bút và $2$ màu còn lại mỗi màu $1$ chiếc.',
              'Trường hợp 1 (2 xanh, 1 đen, 1 đỏ): có $C_5^2 \\cdot C_4^1 \\cdot C_3^1 = 10 \\cdot 4 \\cdot 3 = 120$ cách.',
              'Trường hợp 2 (1 xanh, 2 đen, 1 đỏ): có $C_5^1 \\cdot C_4^2 \\cdot C_3^1 = 5 \\cdot 6 \\cdot 3 = 90$ cách. Trường hợp 3 (1 xanh, 1 đen, 2 đỏ): có $C_5^1 \\cdot C_4^1 \\cdot C_3^2 = 5 \\cdot 4 \\cdot 3 = 60$ cách.',
              'Theo quy tắc cộng, tổng số cách chọn là $120 + 90 + 60 = 270$ (cách).',
            ],
            analysis:
              'Khi chọn $4$ phần tử có đủ $3$ loại, bộ số lượng của $3$ loại chỉ có thể là $(2; 1; 1), (1; 2; 1)$ hoặc $(1; 1; 2)$.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-25',
    lessonNumber: 25,
    name: 'Bài 25',
    topicTitle: 'Nhị thức Newton',
    chapter: 'Chương VIII: Đại số tổ hợp',
    keySummary:
      'Khai triển công thức nhị thức Newton $(a + b)^n$ với số mũ thấp ($n = 4$ và $n = 5$) nhờ tam giác Pascal hoặc số tổ hợp $C_n^k$; tìm hệ số của $x^k$, số hạng chứa luỹ thừa cho trước, tổng các hệ số trong khai triển và tính tổng tổ hợp cơ bản.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-25-1',
        lessonId: 'bai-25',
        title: 'Đề ôn Bài 25 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–3, Luyện tập 1–3, Vận dụng và Bài tập 8.12–8.16 (SGK Toán 10 Tập 2, trang 72–75)',
        description:
          'Đề ôn tập số 01 của Bài 25 (Nhị thức Newton): Công thức khai triển $(a + b)^4$ và $(a + b)^5$, tìm hệ số của $x^k$, tổng các hệ số và tổng các số tổ hợp.',
        mcqs: [
          {
            topic: 'Bài 25: Công thức khai triển nhị thức Newton bậc 4 (Tương tự Khung kiến thức trang 73)',
            prompt:
              'Trong khai triển nhị thức Newton $(a + b)^4 = C_4^0 a^4 + C_4^1 a^3 b + C_4^2 a^2 b^2 + C_4^3 a b^3 + C_4^4 b^4$, bộ các hệ số $(C_4^0; C_4^1; C_4^2; C_4^3; C_4^4)$ lần lượt là:',
            correct: '$(1; 4; 6; 4; 1)$.',
            wrongs: [
              '$(1; 4; 4; 4; 1)$.',
              '$(1; 5; 10; 10; 5; 1)$.',
              '$(1; 3; 6; 3; 1)$.',
            ],
            explanation:
              'Ta có $C_4^0 = 1,\\ C_4^1 = 4,\\ C_4^2 = 6,\\ C_4^3 = 4,\\ C_4^4 = 1$.',
          },
          {
            topic: 'Bài 25: Công thức khai triển nhị thức Newton bậc 5 (Tương tự Khung kiến thức trang 73)',
            prompt:
              'Trong khai triển nhị thức Newton của $(a + b)^5$, có tất cả bao nhiêu số hạng (sau khi thu gọn)?',
            correct: '$6$ số hạng.',
            wrongs: ['$5$ số hạng.', '$4$ số hạng.', '$10$ số hạng.'],
            explanation:
              'Khai triển $(a + b)^n$ có $n + 1$ số hạng. Với $n = 5$, khai triển có $5 + 1 = 6$ số hạng.',
          },
          {
            topic: 'Bài 25: Khai triển biểu thức $(x + 1)^4$ (Tương tự Ví dụ 1)',
            prompt:
              'Khai triển biểu thức $(x + 1)^4$ theo công thức nhị thức Newton, ta được:',
            correct: '$x^4 + 4x^3 + 6x^2 + 4x + 1$.',
            wrongs: [
              '$x^4 + 4x^3 + 4x^2 + 4x + 1$.',
              '$x^4 - 4x^3 + 6x^2 - 4x + 1$.',
              '$x^4 + 6x^3 + 4x^2 + 6x + 1$.',
            ],
            explanation:
              'Áp dụng công thức $(a + b)^4$ với $a = x, b = 1$: $(x + 1)^4 = x^4 + 4x^3 + 6x^2 + 4x + 1$.',
          },
          {
            topic: 'Bài 25: Khai triển biểu thức có dấu trừ $(x - 2)^4$ (Tương tự Ví dụ 1b)',
            prompt:
              'Trong khai triển của $(x - 2)^4$, hệ số của $x^3$ bằng:',
            correct: '$-8$.',
            wrongs: ['$8$.', '$-4$.', '$24$.'],
            explanation:
              'Số hạng chứa $x^3$ trong $(x + (-2))^4$ là $C_4^1 x^3 (-2)^1 = 4 \\cdot (-2) x^3 = -8x^3$. Vậy hệ số của $x^3$ là $-8$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của $x^2$ trong khai triển bậc 4 (Tương tự Luyện tập 1)',
            prompt:
              'Hệ số của $x^2$ trong khai triển của biểu thức $(2x + 1)^4$ là:',
            correct: '$24$.',
            wrongs: ['$6$.', '$12$.', '$32$.'],
            explanation:
              'Số hạng chứa $x^2$ là $C_4^2 (2x)^2 \\cdot 1^2 = 6 \\cdot 4x^2 = 24x^2$. Vậy hệ số của $x^2$ bằng $24$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của $x^3$ trong khai triển bậc 5 (Tương tự Ví dụ 2 & Bài 8.13)',
            prompt:
              'Trong khai triển của $(x + 2)^5$, hệ số của $x^3$ bằng:',
            correct: '$40$.',
            wrongs: ['$10$.', '$20$.', '$80$.'],
            explanation:
              'Số hạng chứa $x^3$ trong $(x + 2)^5$ là $C_5^2 x^3 \\cdot 2^2 = 10 \\cdot 4 x^3 = 40x^3$. Hệ số của $x^3$ là $40$.',
          },
          {
            topic: 'Bài 25: Tìm số hạng tự do (không chứa x) trong khai triển bậc 4',
            prompt:
              'Số hạng không chứa $x$ trong khai triển của $\\left(x + \\frac{2}{x}\\right)^4$ (với $x \\neq 0$) là:',
            correct: '$24$.',
            wrongs: ['$6$.', '$16$.', '$12$.'],
            explanation:
              'Số hạng tổng quát là $C_4^k x^{4 - k} \\left(\\frac{2}{x}\\right)^k = C_4^k 2^k x^{4 - 2k}$. Số hạng không chứa $x$ ứng với $4 - 2k = 0 \\Leftrightarrow k = 2$, bằng $C_4^2 \\cdot 2^2 = 6 \\cdot 4 = 24$.',
          },
          {
            topic: 'Bài 25: Tính tổng các số tổ hợp bậc 5 (Tương tự Ví dụ 3 & Bài 8.16)',
            prompt:
              'Giá trị của tổng $S = C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5$ bằng:',
            correct: '$32$.',
            wrongs: ['$16$.', '$64$.', '$25$.'],
            explanation:
              'Khai triển $(1 + 1)^5 = C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5 = 2^5 = 32$.',
          },
          {
            topic: 'Bài 25: Tính tổng đan dấu các số tổ hợp bậc 4',
            prompt:
              'Giá trị của biểu thức $T = C_4^0 - C_4^1 + C_4^2 - C_4^3 + C_4^4$ bằng:',
            correct: '$0$.',
            wrongs: ['$16$.', '$1$.', '$8$.'],
            explanation:
              'Thay $a = 1, b = -1$ vào khai triển $(a + b)^4$, ta được $(1 - 1)^4 = C_4^0 - C_4^1 + C_4^2 - C_4^3 + C_4^4 = 0$.',
          },
          {
            topic: 'Bài 25: Tính tổng tất cả các hệ số của đa thức sau khi khai triển (Tương tự Bài 8.14)',
            prompt:
              'Cho đa thức $P(x) = (3x - 2)^5 = a_5 x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$. Tổng các hệ số $a_5 + a_4 + a_3 + a_2 + a_1 + a_0$ bằng:',
            correct: '$1$.',
            wrongs: ['$32$.', '$243$.', '$-1$.'],
            explanation:
              'Tổng các hệ số của đa thức $P(x)$ bằng $P(1) = (3 \\cdot 1 - 2)^5 = 1^5 = 1$.',
          },
          {
            topic: 'Bài 25: Tính xấp xỉ số thập phân bằng nhị thức Newton (Tương tự Luyện tập 2)',
            prompt:
              'Sử dụng hai số hạng đầu tiên trong khai triển của $(1 + 0,02)^4 = 1 + 4 \\cdot 0,02 + 6 \\cdot 0,02^2 + \\dots$, giá trị gần đúng của $1,02^4$ là:',
            correct: '$1,08$.',
            wrongs: ['$1,04$.', '$1,06$.', '$1,12$.'],
            explanation:
              'Lấy hai số hạng đầu tiên: $1 + 4 \\cdot 0,02 = 1 + 0,08 = 1,08$.',
          },
          {
            topic: 'Bài 25: Đếm số tập hợp con của tập hợp có 5 phần tử (Tương tự Vận dụng trang 75)',
            prompt:
              'Cho tập hợp $A = \\{a; b; c; d; e\\}$ gồm $5$ phần tử. Tổng số các tập hợp con (kể cả tập rỗng và chính tập $A$) của tập hợp $A$ là:',
            correct: '$32$ tập con.',
            wrongs: ['$25$ tập con.', '$16$ tập con.', '$31$ tập con.'],
            explanation:
              'Số tập con có $k$ phần tử ($0 \\le k \\le 5$) là $C_5^k$. Tổng số tập con là $C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5 = 2^5 = 32$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 25: Phân tích khai triển nhị thức Newton bậc 5 (Tương tự Ví dụ 2 & Bài 8.12)',
            prompt:
              'Xét khai triển nhị thức Newton của biểu thức $P(x) = (2x - 1)^5$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Khai triển $P(x)$ theo luỹ thừa giảm dần của $x$ có tất cả $6$ số hạng.',
                isCorrect: true,
                explanation: 'Đa thức bậc $5$ có $5 + 1 = 6$ số hạng tương ứng với số mũ của $x$ từ $5$ xuống $0$.',
              },
              {
                statement: 'Số hạng chứa $x^5$ trong khai triển là $32x^5$.',
                isCorrect: true,
                explanation: 'Số hạng đầu tiên là $C_5^0 (2x)^5 (-1)^0 = 32x^5$.',
              },
              {
                statement: 'Hệ số của $x^3$ trong khai triển của $P(x)$ bằng $-80$.',
                isCorrect: false,
                explanation:
                  'Số hạng chứa $x^3$ ứng với $k = 2$: $C_5^2 (2x)^3 (-1)^2 = 10 \\cdot 8x^3 \\cdot 1 = 80x^3$, nên hệ số của $x^3$ là $80$ (không phải $-80$).',
              },
              {
                statement: 'Hệ số của $x^2$ trong khai triển của $P(x)$ bằng $-40$.',
                isCorrect: true,
                explanation:
                  'Số hạng chứa $x^2$ ứng với $k = 3$: $C_5^3 (2x)^2 (-1)^3 = 10 \\cdot 4x^2 \\cdot (-1) = -40x^2$, nên hệ số của $x^2$ là $-40$.',
              },
            ],
          },
          {
            topic: 'Bài 25: Ứng dụng nhị thức Newton tính tổng tổ hợp và số tập con (Tương tự Ví dụ 3 & Bài 8.16)',
            prompt:
              'Cho khai triển $(1 + x)^4 = C_4^0 + C_4^1 x + C_4^2 x^2 + C_4^3 x^3 + C_4^4 x^4$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Thay $x = 1$ vào hai vế của khai triển, ta được $C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4 = 16$.',
                isCorrect: true,
                explanation: 'Với $x = 1$, vế trái bằng $(1 + 1)^4 = 2^4 = 16$.',
              },
              {
                statement: 'Thay $x = 2$ vào hai vế, ta được $C_4^0 + 2C_4^1 + 4C_4^2 + 8C_4^3 + 16C_4^4 = 81$.',
                isCorrect: true,
                explanation: 'Với $x = 2$, vế trái bằng $(1 + 2)^4 = 3^4 = 81$.',
              },
              {
                statement: 'Tổng $C_4^0 + C_4^2 + C_4^4$ bằng tổng $C_4^1 + C_4^3$ và cùng bằng $8$.',
                isCorrect: true,
                explanation: 'Ta có $C_4^0 + C_4^2 + C_4^4 = 1 + 6 + 1 = 8$ và $C_4^1 + C_4^3 = 4 + 4 = 8$.',
              },
              {
                statement: 'Một tập hợp gồm $4$ phần tử có tất cả $16$ tập hợp con khác tập rỗng.',
                isCorrect: false,
                explanation:
                  'Tổng số tập con là $2^4 = 16$, nếu trừ đi tập rỗng ($C_4^0 = 1$) thì có $16 - 1 = 15$ tập con khác rỗng (không phải $16$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 25: Tìm hệ số của x^2 trong khai triển bậc 4',
            prompt:
              'Tìm hệ số của $x^2$ trong khai triển nhị thức Newton của $(x - 3)^4$.',
            answers: ['54'],
            explanation:
              'Số hạng chứa $x^2$ là $C_4^2 x^2 (-3)^2 = 6 \\cdot 9 x^2 = 54x^2$. Hệ số của $x^2$ là $54$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của x^4 trong khai triển bậc 5',
            prompt:
              'Tìm hệ số của $x^4$ trong khai triển nhị thức Newton của $(2x + 3)^5$.',
            answers: ['240'],
            explanation:
              'Số hạng chứa $x^4$ là $C_5^1 (2x)^4 \\cdot 3^1 = 5 \\cdot 16x^4 \\cdot 3 = 240x^4$. Hệ số của $x^4$ là $240$.',
          },
          {
            topic: 'Bài 25: Tính tổng các hệ số của đa thức khai triển',
            prompt:
              'Tính tổng tất cả các hệ số trong khai triển của đa thức $P(x) = (4x - 2)^4$.',
            answers: ['16'],
            explanation:
              'Tổng các hệ số của $P(x)$ bằng $P(1) = (4 \\cdot 1 - 2)^4 = 2^4 = 16$.',
          },
          {
            topic: 'Bài 25: Tính tổng tổ hợp từ khai triển nhị thức Newton',
            prompt:
              'Tính giá trị của biểu thức $S = C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5$.',
            answers: ['31'],
            explanation:
              'Vì $C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5 = 2^5 = 32$ và $C_5^0 = 1$, nên $S = 32 - 1 = 31$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 25: Khai triển nhị thức Newton bậc 4 (Tương tự Ví dụ 1 & Bài 8.12)',
            problemStatement:
              'Sử dụng công thức nhị thức Newton, hãy khai triển và thu gọn biểu thức $(2x - 1)^4$.',
            conclusionTarget: 'Áp dụng công thức $(a + b)^4$ với $a = 2x, b = -1$ và thu gọn từng số hạng.',
            steps: [
              'Áp dụng công thức $(a + b)^4$ với $a = 2x$ và $b = -1$, cùng các hệ số $C_4^0 = 1, C_4^1 = 4, C_4^2 = 6, C_4^3 = 4, C_4^4 = 1$.',
              'Ta viết khai triển: $(2x - 1)^4 = 1 \\cdot (2x)^4 + 4 \\cdot (2x)^3(-1) + 6 \\cdot (2x)^2(-1)^2 + 4 \\cdot (2x)(-1)^3 + 1 \\cdot (-1)^4$.',
              'Tính các luỹ thừa: $(2x)^4 = 16x^4$, $(2x)^3(-1) = -8x^3$, $(2x)^2(-1)^2 = 4x^2$, $(2x)(-1)^3 = -2x$.',
              'Nhân với các hệ số tổ hợp, ta được kết quả: $(2x - 1)^4 = 16x^4 - 32x^3 + 24x^2 - 8x + 1$.',
            ],
            analysis:
              'Khi khai triển $(a - b)^n$, dấu của các số hạng sẽ đan dấu $(+, -, +, -, \\dots)$ theo luỹ thừa lẻ/chẵn của $(-b)$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của một luỹ thừa trong khai triển bậc 5 (Tương tự Bài 8.13)',
            problemStatement:
              'Tìm hệ số của $x^3$ trong khai triển nhị thức Newton của biểu thức $(3x - 2)^5$.',
            conclusionTarget: 'Viết số hạng tổng quát $T_{k + 1}$, xác định $k$ ứng với $x^3$ và tính hệ số.',
            steps: [
              'Số hạng tổng quát thứ $k + 1$ trong khai triển $(3x - 2)^5$ là $T_{k + 1} = C_5^k (3x)^{5 - k} (-2)^k$ (với $0 \\le k \\le 5$).',
              'Tách phần hệ số và phần biến: $T_{k + 1} = C_5^k \\cdot 3^{5 - k} \\cdot (-2)^k \\cdot x^{5 - k}$.',
              'Số hạng chứa $x^3$ tương ứng với $5 - k = 3 \\Leftrightarrow k = 2$.',
              'Thay $k = 2$ vào phần hệ số, ta được $C_5^2 \\cdot 3^3 \\cdot (-2)^2 = 10 \\cdot 27 \\cdot 4 = 1080$.',
            ],
            analysis:
              'Viết tách biệt phần hệ số $C_5^k a^{5 - k} b^k$ và phần biến $x^{5 - k}$ giúp tránh nhầm lẫn giữa hệ số của $x^3$ và số hạng chứa $x^3$.',
          },
          {
            topic: 'Bài 25: Tìm số hạng không chứa x trong khai triển có phân thức',
            problemStatement:
              'Tìm số hạng không chứa $x$ trong khai triển nhị thức Newton của $\\left(2x^2 - \\frac{1}{x^3}\\right)^5$ (với $x \\neq 0$).',
            conclusionTarget: 'Rút gọn số mũ của $x$ trong số hạng tổng quát và cho số mũ bằng $0$.',
            steps: [
              'Số hạng tổng quát trong khai triển là $T_{k + 1} = C_5^k (2x^2)^{5 - k} \\left(-\\frac{1}{x^3}\\right)^k$ (với $0 \\le k \\le 5$).',
              'Biến đổi luỹ thừa của $x$: $T_{k + 1} = C_5^k \\cdot 2^{5 - k} \\cdot (-1)^k \\cdot x^{10 - 2k - 3k} = C_5^k \\cdot 2^{5 - k} \\cdot (-1)^k \\cdot x^{10 - 5k}$.',
              'Số hạng không chứa $x$ ứng với số mũ của $x$ bằng $0$, tức $10 - 5k = 0 \\Leftrightarrow k = 2$.',
              'Thay $k = 2$, số hạng không chứa $x$ là $C_5^2 \\cdot 2^3 \\cdot (-1)^2 = 10 \\cdot 8 \\cdot 1 = 80$.',
            ],
            analysis:
              'Sử dụng quy tắc luỹ thừa $\\frac{(x^2)^{5-k}}{(x^3)^k} = x^{10 - 5k}$ để gom toàn bộ biến $x$ về một luỹ thừa duy nhất.',
          },
          {
            topic: 'Bài 25: Chứng minh và tính tổng tổ hợp bằng nhị thức Newton (Tương tự Ví dụ 3)',
            problemStatement:
              'Sử dụng khai triển nhị thức Newton của $(1 + x)^5$, hãy tính giá trị của tổng $S = C_5^0 + 3C_5^1 + 3^2 C_5^2 + 3^3 C_5^3 + 3^4 C_5^4 + 3^5 C_5^5$.',
            conclusionTarget: 'Viết khai triển $(1 + x)^5$ và thay giá trị $x = 3$ thích hợp.',
            steps: [
              'Theo công thức nhị thức Newton bậc $5$, ta có $(1 + x)^5 = C_5^0 + C_5^1 x + C_5^2 x^2 + C_5^3 x^3 + C_5^4 x^4 + C_5^5 x^5$.',
              'Quan sát tổng $S$, ta thấy số hạng tổng quát có dạng $3^k C_5^k$ tương ứng với việc chọn $x = 3$.',
              'Thay $x = 3$ vào cả hai vế của đẳng thức khai triển trên, ta được $(1 + 3)^5 = S$.',
              'Vậy giá trị của tổng là $S = 4^5 = 1024$.',
            ],
            analysis:
              'Mọi tổng dạng $\\sum_{k=0}^n C_n^k a^{n-k} b^k$ đều rút gọn ngay thành $(a + b)^n$.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-25-2',
        lessonId: 'bai-25',
        title: 'Đề ôn Bài 25 - Đề số 02',
        subtitle: 'Nâng cao tìm hệ số trong khai triển và ứng dụng nhị thức Newton (SGK Toán 10 Tập 2, trang 72–75)',
        description:
          'Đề ôn tập số 02 của Bài 25 (Nhị thức Newton): Tìm hệ số trong tích đa thức với nhị thức Newton, bài toán chứa tham số trong khai triển và tổng tổ hợp.',
        mcqs: [
          {
            topic: 'Bài 25: Hệ số lớn nhất trong khai triển $(a + b)^4$',
            prompt:
              'Trong khai triển $(x + y)^4 = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$, hệ số lớn nhất của các số hạng là:',
            correct: '$6$.',
            wrongs: ['$4$.', '$10$.', '$16$.'],
            explanation:
              'Các hệ số trong khai triển $(x + y)^4$ là $1; 4; 6; 4; 1$, trong đó hệ số chính giữa $C_4^2 = 6$ là lớn nhất.',
          },
          {
            topic: 'Bài 25: Tìm số hạng thứ k trong khai triển theo luỹ thừa giảm dần',
            prompt:
              'Viết khai triển của $(x + 2)^4$ theo số mũ giảm dần của $x$, số hạng thứ ba trong khai triển là:',
            correct: '$24x^2$.',
            wrongs: ['$8x^3$.', '$32x$.', '$6x^2$.'],
            explanation:
              'Số hạng thứ ba ứng với $k = 2$: $T_3 = C_4^2 x^{4 - 2} \\cdot 2^2 = 6 \\cdot 4 x^2 = 24x^2$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của $x^3 y^2$ trong khai triển hai biến',
            prompt:
              'Trong khai triển của biểu thức $(x - 2y)^5$, hệ số của đơn thức $x^3 y^2$ bằng:',
            correct: '$40$.',
            wrongs: ['$-40$.', '$20$.', '$-20$.'],
            explanation:
              'Số hạng chứa $x^3 y^2$ là $C_5^2 x^3 (-2y)^2 = 10 \\cdot 4 x^3 y^2 = 40 x^3 y^2$. Hệ số bằng $40$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của $x^6$ trong khai triển $(x^2 + 1)^4$',
            prompt:
              'Trong khai triển của $(x^2 + 3)^4$, hệ số của $x^6$ bằng:',
            correct: '$12$.',
            wrongs: ['$4$.', '$27$.', '$54$.'],
            explanation:
              'Số hạng tổng quát là $C_4^k (x^2)^{4 - k} \\cdot 3^k = C_4^k 3^k x^{8 - 2k}$. Để có $x^6$ thì $8 - 2k = 6 \\Leftrightarrow k = 1$. Hệ số là $C_4^1 \\cdot 3^1 = 12$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của $x$ trong khai triển có phân thức bậc 5',
            prompt:
              'Trong khai triển $\\left(x + \\frac{1}{x}\\right)^5$ (với $x \\neq 0$), hệ số của $x$ bằng:',
            correct: '$10$.',
            wrongs: ['$5$.', '$1$.', '$20$.'],
            explanation:
              'Số hạng tổng quát là $C_5^k x^{5 - k} x^{-k} = C_5^k x^{5 - 2k}$. Để có $x^1$ thì $5 - 2k = 1 \\Leftrightarrow k = 2$. Hệ số là $C_5^2 = 10$.',
          },
          {
            topic: 'Bài 25: Tìm tham số m khi biết hệ số trong khai triển',
            prompt:
              'Biết rằng trong khai triển $(x + m)^4$ (với $m > 0$), hệ số của $x^2$ bằng $54$. Giá trị của $m$ là:',
            correct: '$m = 3$.',
            wrongs: ['$m = 2$.', '$m = 9$.', '$m = 6$.'],
            explanation:
              'Hệ số của $x^2$ là $C_4^2 m^2 = 6m^2 = 54 \\Leftrightarrow m^2 = 9 \\Rightarrow m = 3$ (vì $m > 0$).',
          },
          {
            topic: 'Bài 25: Tính tổng các hệ số của đa thức nhiều biến',
            prompt:
              'Sau khi khai triển và thu gọn biểu thức $Q(x, y) = (2x - 3y)^4$, tổng tất cả các hệ số của các hạng tử trong $Q(x, y)$ bằng:',
            correct: '$1$.',
            wrongs: ['$-1$.', '$16$.', '$625$.'],
            explanation:
              'Thay $x = 1, y = 1$ vào $Q(x, y)$, tổng tất cả các hệ số là $Q(1, 1) = (2 \\cdot 1 - 3 \\cdot 1)^4 = (-1)^4 = 1$.',
          },
          {
            topic: 'Bài 25: Rút gọn biểu thức chứa căn bằng nhị thức Newton',
            prompt:
              'Giá trị của biểu thức $A = (1 + \\sqrt{2})^4 + (1 - \\sqrt{2})^4$ bằng:',
            correct: '$34$.',
            wrongs: ['$17$.', '$24$.', '$32$.'],
            explanation:
              'Khi cộng $(1 + \\sqrt{2})^4$ và $(1 - \\sqrt{2})^4$, các số hạng bậc lẻ của $\\sqrt{2}$ triệt tiêu: $A = 2\\left[C_4^0 + C_4^2(\\sqrt{2})^2 + C_4^4(\\sqrt{2})^4\\right] = 2(1 + 6 \\cdot 2 + 1 \\cdot 4) = 34$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số trong tổng hai khai triển',
            prompt:
              'Hệ số của $x^3$ trong đa thức $P(x) = (x + 1)^4 + (x + 2)^5$ bằng:',
            correct: '$44$.',
            wrongs: ['$40$.', '$36$.', '$14$.'],
            explanation:
              'Hệ số của $x^3$ trong $(x + 1)^4$ là $C_4^1 \\cdot 1^1 = 4$. Hệ số của $x^3$ trong $(x + 2)^5$ là $C_5^2 \\cdot 2^2 = 40$. Tổng hệ số của $x^3$ là $4 + 40 = 44$.',
          },
          {
            topic: 'Bài 25: Tìm hệ số trong tích của nhị thức bậc nhất và nhị thức bậc 4',
            prompt:
              'Hệ số của $x^3$ trong khai triển của $F(x) = x(2x + 1)^4$ bằng:',
            correct: '$24$.',
            wrongs: ['$32$.', '$8$.', '$16$.'],
            explanation:
              'Số hạng chứa $x^3$ trong $x(2x + 1)^4$ bằng $x$ nhân với số hạng chứa $x^2$ trong $(2x + 1)^4$. Hệ số của $x^2$ trong $(2x + 1)^4$ là $C_4^2 \\cdot 2^2 = 24$.',
          },
          {
            topic: 'Bài 25: Đếm số tập hợp con có ít nhất 2 phần tử (Tương tự Vận dụng trang 75)',
            prompt:
              'Một tập hợp $S$ có $5$ phần tử. Số tập hợp con của $S$ có từ $2$ phần tử trở lên là:',
            correct: '$26$ tập con.',
            wrongs: ['$32$ tập con.', '$25$ tập con.', '$31$ tập con.'],
            explanation:
              'Tổng số tập con của $S$ là $2^5 = 32$. Trừ đi số tập con có $0$ phần tử ($C_5^0 = 1$) và có $1$ phần tử ($C_5^1 = 5$), còn lại $32 - 1 - 5 = 26$ tập con.',
          },
          {
            topic: 'Bài 25: Tìm chữ số tận cùng hoặc số dư nhờ nhị thức Newton',
            prompt:
              'Biểu thức $11^5 = (10 + 1)^5$ khi chia cho $100$ có số dư bằng:',
            correct: '$51$.',
            wrongs: ['$1$.', '$11$.', '$21$.'],
            explanation:
              'Khai triển $(10 + 1)^5 = 10^5 + 5 \\cdot 10^4 + 10 \\cdot 10^3 + 10 \\cdot 10^2 + 5 \\cdot 10 + 1$. Bốn số hạng đầu đều chia hết cho $100$, còn $5 \\cdot 10 + 1 = 51$, nên số dư khi chia cho $100$ là $51$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 25: Phân tích đa thức khai triển từ tích hai biểu thức',
            prompt:
              'Cho đa thức $P(x) = (x + 1)(2x - 1)^4 = a_5 x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Khai triển của $(2x - 1)^4$ là $16x^4 - 32x^3 + 24x^2 - 8x + 1$.',
                isCorrect: true,
                explanation:
                  'Áp dụng công thức bậc $4$: $(2x)^4 - 4(2x)^3 + 6(2x)^2 - 4(2x) + 1 = 16x^4 - 32x^3 + 24x^2 - 8x + 1$.',
              },
              {
                statement: 'Hệ số tự do $a_0$ của đa thức $P(x)$ bằng $1$.',
                isCorrect: true,
                explanation: 'Ta có $a_0 = P(0) = (0 + 1)(0 - 1)^4 = 1$.',
              },
              {
                statement: 'Hệ số của $x^3$ trong đa thức $P(x)$ là $a_3 = -8$.',
                isCorrect: true,
                explanation:
                  'Viết $P(x) = x(2x - 1)^4 + 1 \\cdot (2x - 1)^4$. Hệ số của $x^3$ trong $P(x)$ bằng hệ số của $x^2$ trong $(2x - 1)^4$ cộng hệ số của $x^3$ trong $(2x - 1)^4$, tức $24 + (-32) = -8$.',
              },
              {
                statement: 'Tổng tất cả các hệ số $a_5 + a_4 + a_3 + a_2 + a_1 + a_0$ bằng $16$.',
                isCorrect: false,
                explanation:
                  'Tổng tất cả các hệ số bằng $P(1) = (1 + 1)(2 \\cdot 1 - 1)^4 = 2 \\cdot 1^4 = 2$ (không phải $16$).',
              },
            ],
          },
          {
            topic: 'Bài 25: Tìm tham số và hệ số trong khai triển nhị thức Newton bậc 5',
            prompt:
              'Cho nhị thức $\\left(ax + \\frac{1}{x}\\right)^5$ (với $x \\neq 0$ và $a$ là tham số dương). Biết rằng hệ số của $x^3$ trong khai triển bằng $80$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số hạng tổng quát thứ $k + 1$ trong khai triển là $T_{k + 1} = C_5^k a^{5 - k} x^{5 - 2k}$.',
                isCorrect: true,
                explanation: 'Ta có $C_5^k (ax)^{5 - k} x^{-k} = C_5^k a^{5 - k} x^{5 - 2k}$.',
              },
              {
                statement: 'Số hạng chứa $x^3$ trong khai triển ứng với $k = 1$ và có hệ số là $5a^4$.',
                isCorrect: true,
                explanation: 'Cho $5 - 2k = 3 \\Leftrightarrow k = 1$. Khi đó hệ số là $C_5^1 a^4 = 5a^4$.',
              },
              {
                statement: 'Giá trị của tham số dương $a$ bằng $2$.',
                isCorrect: true,
                explanation: 'Từ $5a^4 = 80 \\Leftrightarrow a^4 = 16 \\Rightarrow a = 2$ (vì $a > 0$).',
              },
              {
                statement: 'Với $a = 2$, trong khai triển tồn tại một số hạng không chứa $x$.',
                isCorrect: false,
                explanation:
                  'Để số hạng không chứa $x$ thì $5 - 2k = 0 \\Leftrightarrow k = 2,5$, không phải số tự nhiên, nên không tồn tại số hạng không chứa $x$.',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 25: Tìm hệ số của x^3 trong khai triển bậc 4',
            prompt:
              'Tìm hệ số của $x^3$ trong khai triển nhị thức Newton của $(3x + 2)^4$.',
            answers: ['216'],
            explanation:
              'Số hạng chứa $x^3$ ứng với $k = 1$: $C_4^1 (3x)^3 \\cdot 2^1 = 4 \\cdot 27x^3 \\cdot 2 = 216x^3$. Hệ số bằng $216$.',
          },
          {
            topic: 'Bài 25: Tìm số hạng không chứa x trong khai triển bậc 4',
            prompt:
              'Tìm số hạng không chứa $x$ trong khai triển của $\\left(3x - \\frac{1}{x}\\right)^4$ (với $x \\neq 0$).',
            answers: ['54'],
            explanation:
              'Số hạng không chứa $x$ ứng với $k = 2$: $C_4^2 (3x)^2 \\left(-\\frac{1}{x}\\right)^2 = 6 \\cdot 9 \\cdot 1 = 54$.',
          },
          {
            topic: 'Bài 25: Tìm tham số m biết tổng các hệ số trong khai triển',
            prompt:
              'Tìm giá trị thực của tham số $m$ biết tổng tất cả các hệ số trong khai triển của đa thức $P(x) = (mx - 3)^5$ bằng $32$.',
            answers: ['5'],
            explanation:
              'Tổng các hệ số của $P(x)$ là $P(1) = (m - 3)^5 = 32 = 2^5 \\Leftrightarrow m - 3 = 2 \\Leftrightarrow m = 5$.',
          },
          {
            topic: 'Bài 25: Tính tổng tổ hợp chẵn bậc 5',
            prompt:
              'Tính giá trị của tổng $S = C_5^0 + C_5^2 + C_5^4$.',
            answers: ['16'],
            explanation:
              'Ta có $S = 1 + 10 + 5 = 16$ (bằng $2^{5 - 1} = 16$).',
          },
        ],
        steps: [
          {
            topic: 'Bài 25: Khai triển nhị thức Newton bậc 5 (Tương tự Bài 8.12b)',
            problemStatement:
              'Khai triển và thu gọn biểu thức $(x - 2y)^5$ theo công thức nhị thức Newton.',
            conclusionTarget: 'Áp dụng bộ hệ số $(1; 5; 10; 10; 5; 1)$ của bậc 5 và thu gọn.',
            steps: [
              'Sử dụng công thức nhị thức Newton bậc $5$ với $a = x,\\ b = -2y$ và bộ hệ số tổ hợp $(1; 5; 10; 10; 5; 1)$.',
              'Ta có $(x - 2y)^5 = x^5 + 5x^4(-2y) + 10x^3(-2y)^2 + 10x^2(-2y)^3 + 5x(-2y)^4 + (-2y)^5$.',
              'Tính các luỹ thừa của $(-2y)$: $(-2y)^2 = 4y^2,\\ (-2y)^3 = -8y^3,\\ (-2y)^4 = 16y^4,\\ (-2y)^5 = -32y^5$.',
              'Thu gọn các hệ số, ta được $(x - 2y)^5 = x^5 - 10x^4y + 40x^3y^2 - 80x^2y^3 + 80xy^4 - 32y^5$.',
            ],
            analysis:
              'Ghi nhớ hàng thứ 5 của tam giác Pascal $(1; 5; 10; 10; 5; 1)$ giúp viết ngay khai triển bậc 5 rất nhanh.',
          },
          {
            topic: 'Bài 25: Tìm hệ số của $x^k$ trong đa thức tích $(ax + b)(cx + d)^4$',
            problemStatement:
              'Tìm hệ số của $x^3$ trong khai triển thành đa thức của biểu thức $P(x) = (2x - 3)(x + 2)^4$.',
            conclusionTarget: 'Tách $P(x) = 2x(x + 2)^4 - 3(x + 2)^4$ và tính hệ số của $x^3$ từ hai phần.',
            steps: [
              'Khai triển phép nhân: $P(x) = 2x(x + 2)^4 - 3(x + 2)^4$.',
              'Trong $(x + 2)^4$, số hạng chứa $x^2$ là $C_4^2 x^2 \\cdot 2^2 = 24x^2$, và số hạng chứa $x^3$ là $C_4^1 x^3 \\cdot 2^1 = 8x^3$.',
              'Khi nhân với $2x$ và $-3$, số hạng chứa $x^3$ của $P(x)$ là $2x \\cdot (24x^2) - 3 \\cdot (8x^3) = 48x^3 - 24x^3 = 24x^3$.',
              'Vậy hệ số của $x^3$ trong khai triển của $P(x)$ bằng $24$.',
            ],
            analysis:
              'Thay vì khai triển toàn bộ $(x + 2)^4$, ta chỉ cần trích đúng hai số hạng chứa $x^2$ và $x^3$ của $(x + 2)^4$.',
          },
          {
            topic: 'Bài 25: Tìm tham số trong khai triển nhị thức Newton',
            problemStatement:
              'Cho khai triển $(1 + ax)^5 = 1 + a_1 x + a_2 x^2 + a_3 x^3 + a_4 x^4 + a_5 x^5$. Biết rằng $a_3 = 80$, hãy tìm giá trị của $a$ và tính tổng các hệ số của đa thức.',
            conclusionTarget: 'Biểu diễn $a_3$ theo $a$, giải tìm $a$ và tính giá trị đa thức tại $x = 1$.',
            steps: [
              'Số hạng chứa $x^3$ trong khai triển $(1 + ax)^5$ là $C_5^3 \\cdot 1^2 \\cdot (ax)^3 = 10a^3 x^3$, suy ra $a_3 = 10a^3$.',
              'Theo giả thiết $a_3 = 80 \\Leftrightarrow 10a^3 = 80 \\Leftrightarrow a^3 = 8 \\Leftrightarrow a = 2$.',
              'Với $a = 2$, biểu thức trở thành $P(x) = (1 + 2x)^5$.',
              'Tổng tất cả các hệ số trong khai triển là $P(1) = (1 + 2 \\cdot 1)^5 = 3^5 = 243$.',
            ],
            analysis:
              'Phương trình $a^3 = 8$ có nghiệm thực duy nhất $a = 2$ nên không cần thêm điều kiện dấu của $a$.',
          },
          {
            topic: 'Bài 25: Ứng dụng nhị thức Newton trong bài toán đếm số tập hợp con (Tương tự Vận dụng trang 75)',
            problemStatement:
              'Một cửa hàng pizza cung cấp $5$ loại nhân phụ (topping) khác nhau. Khách hàng có thể chọn thêm từ $1$ đến $5$ loại nhân phụ cho chiếc bánh của mình. Hỏi khách hàng có tất cả bao nhiêu cách chọn nhân phụ?',
            conclusionTarget: 'Biểu diễn số cách chọn theo tổng tổ hợp $\\sum_{k=1}^5 C_5^k$ và tính kết quả.',
            steps: [
              'Số cách chọn $k$ loại nhân phụ từ $5$ loại ($1 \\le k \\le 5$) là số tổ hợp $C_5^k$.',
              'Tổng số cách chọn từ $1$ đến $5$ loại nhân phụ là $S = C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5$.',
              'Theo khai triển nhị thức Newton $(1 + 1)^5$, ta có $C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5 = 2^5 = 32$.',
              'Vì $C_5^0 = 1$, suy ra $S = 32 - 1 = 31$ (cách chọn).',
            ],
            analysis:
              'Liên hệ giữa nhị thức Newton $(1 + 1)^n = 2^n$ và tổng số tập con khác rỗng ($2^n - 1$) là ứng dụng thực tế rất phổ biến.',
          },
        ],
      }),
    ],
  },
];
