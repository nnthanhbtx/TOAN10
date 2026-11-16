import { LessonCatalogItem } from '../../types/exam';
import {
  buildFullLessonExam,
  tikzCountingTree,
  tikzSampleSpaceVenn,
} from './lessonExamBuilder';

export const CHAPTER_9_LESSONS: LessonCatalogItem[] = [
  {
    id: 'bai-26',
    lessonNumber: 26,
    name: 'Bài 26',
    topicTitle: 'Biến cố và định nghĩa cổ điển của xác suất',
    chapter: 'Chương IX: Tính xác suất theo định nghĩa cổ điển',
    keySummary:
      'Xác định không gian mẫu $\\Omega$, biến cố ngẫu nhiên $E \\subset \\Omega$, biến cố đối $\\overline{E} = \\Omega \\setminus E$, biến cố chắc chắn và biến cố không thể; tính xác suất theo định nghĩa cổ điển $P(E) = \\frac{n(E)}{n(\\Omega)}$ khi các kết quả đồng khả năng và hiểu các tính chất cơ bản $0 \\le P(E) \\le 1$.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-26-1',
        lessonId: 'bai-26',
        title: 'Đề ôn Bài 26 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–5, Luyện tập 1–4, Vận dụng và Bài tập 9.1–9.6 (SGK Toán 10 Tập 2, trang 77–82)',
        description:
          'Đề ôn tập số 01 của Bài 26 (Biến cố và định nghĩa cổ điển của xác suất): Mô tả không gian mẫu, biến cố, biến cố đối và tính xác suất cổ điển cơ bản.',
        mcqs: [
          {
            topic: 'Bài 26: Xác định không gian mẫu của phép thử gieo xúc xắc (Tương tự HĐ1 trang 77)',
            prompt:
              'Gieo ngẫu nhiên một con xúc xắc cân đối và đồng chất $1$ lần. Không gian mẫu $\\Omega$ của phép thử là:',
            correct: '$\\Omega = \\{1; 2; 3; 4; 5; 6\\}$.',
            wrongs: [
              '$\\Omega = \\{1; 2; 3; 4; 5\\}$.',
              '$\\Omega = \\{0; 1; 2; 3; 4; 5; 6\\}$.',
              '$\\Omega = \\{2; 4; 6\\}$.',
            ],
            explanation:
              'Khi gieo một con xúc xắc $6$ mặt, số chấm xuất hiện có thể là $1, 2, 3, 4, 5$ hoặc $6$, nên $\\Omega = \\{1; 2; 3; 4; 5; 6\\}$.',
          },
          {
            topic: 'Bài 26: Số phần tử của không gian mẫu khi tung đồng xu (Tương tự Ví dụ 1)',
            prompt:
              'Tung một đồng xu cân đối và đồng chất $3$ lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:',
            correct: '$8$.',
            wrongs: ['$6$.', '$4$.', '$9$.'],
            explanation:
              'Mỗi lần tung có $2$ kết quả ($S$ hoặc $N$). Tung $3$ lần liên tiếp có $n(\\Omega) = 2 \\cdot 2 \\cdot 2 = 8$ phần tử.',
          },
          {
            topic: 'Bài 26: Tập hợp mô tả biến cố (Tương tự Ví dụ 1 & Luyện tập 1)',
            prompt:
              'Gieo một con xúc xắc cân đối $1$ lần. Gọi $A$ là biến cố "Số chấm xuất hiện là một số nguyên tố". Tập hợp mô tả biến cố $A$ là:',
            correct: '$A = \\{2; 3; 5\\}$.',
            wrongs: [
              '$A = \\{1; 2; 3; 5\\}$.',
              '$A = \\{1; 3; 5\\}$.',
              '$A = \\{2; 3; 5; 6\\}$.',
            ],
            explanation:
              'Trong tập $\\{1; 2; 3; 4; 5; 6\\}$, các số nguyên tố là $2, 3, 5$ (số $1$ không phải là số nguyên tố). Vậy $A = \\{2; 3; 5\\}$.',
          },
          {
            topic: 'Bài 26: Biến cố đối của một biến cố (Tương tự Ví dụ 2 & Luyện tập 2)',
            prompt:
              'Một hộp có các thẻ ghi số từ $1$ đến $10$. Lấy ngẫu nhiên $1$ thẻ. Biến cố đối của biến cố $E$: "Thẻ lấy ra ghi số lớn hơn $6$" là:',
            correct: '$\\overline{E}$: "Thẻ lấy ra ghi số nhỏ hơn hoặc bằng $6$".',
            wrongs: [
              '$\\overline{E}$: "Thẻ lấy ra ghi số nhỏ hơn $6$".',
              '$\\overline{E}$: "Thẻ lấy ra ghi số chẵn".',
              '$\\overline{E}$: "Thẻ lấy ra ghi số bằng $6$".',
            ],
            explanation:
              'Phủ định của điều kiện "lớn hơn $6$" ($x > 6$) là "nhỏ hơn hoặc bằng $6$" ($x \\le 6$).',
            tikzCode: tikzSampleSpaceVenn('10', 'E', '4'),
          },
          {
            topic: 'Bài 26: Công thức định nghĩa cổ điển của xác suất (Tương tự Khung kiến thức trang 80)',
            prompt:
              'Xét một phép thử có không gian mẫu $\\Omega$ gồm hữu hạn các kết quả có cùng khả năng xảy ra. Xác suất của biến cố $E$ được tính theo công thức:',
            correct: '$P(E) = \\frac{n(E)}{n(\\Omega)}$.',
            wrongs: [
              '$P(E) = \\frac{n(\\Omega)}{n(E)}$.',
              '$P(E) = n(\\Omega) - n(E)$.',
              '$P(E) = n(E) \\cdot n(\\Omega)$.',
            ],
            explanation:
              'Theo định nghĩa cổ điển của xác suất: $P(E) = \\frac{n(E)}{n(\\Omega)}$, trong đó $n(E)$ là số kết quả thuận lợi cho $E$.',
          },
          {
            topic: 'Bài 26: Tính chất của xác suất (Tương tự Khung kiến thức trang 81)',
            prompt:
              'Với mọi biến cố $E$ trong không gian mẫu $\\Omega$, khẳng định nào sau đây là SAI?',
            correct: '$P(E)$ có thể lớn hơn $1$ nếu $n(E)$ lớn.',
            wrongs: [
              '$0 \\le P(E) \\le 1$.',
              '$P(\\Omega) = 1$ và $P(\\emptyset) = 0$.',
              '$P(E) + P(\\overline{E}) = 1$.',
            ],
            explanation:
              'Vì $\\emptyset \\subset E \\subset \\Omega$ nên $0 \\le n(E) \\le n(\\Omega) \\Rightarrow 0 \\le P(E) \\le 1$ luôn đúng với mọi biến cố $E$. Khẳng định $P(E) > 1$ là sai.',
          },
          {
            topic: 'Bài 26: Tính xác suất khi gieo 1 con xúc xắc (Tương tự Ví dụ 3)',
            prompt:
              'Gieo một con xúc xắc cân đối và đồng chất $1$ lần. Xác suất để xuất hiện mặt có số chấm chia hết cho $3$ là:',
            correct: '$\\frac{1}{3}$.',
            wrongs: ['$\\frac{1}{6}$.', '$\\frac{1}{2}$.', '$\\frac{2}{3}$.'],
            explanation:
              'Không gian mẫu có $n(\\Omega) = 6$. Các mặt có số chấm chia hết cho $3$ là $\\{3; 6\\}$ ($2$ kết quả). Vậy $P = \\frac{2}{6} = \\frac{1}{3}$.',
          },
          {
            topic: 'Bài 26: Tính xác suất khi tung hai đồng xu (Tương tự Luyện tập 3)',
            prompt:
              'Tung đồng thời hai đồng xu cân đối và đồng chất. Xác suất để cả hai đồng xu đều xuất hiện mặt Ngửa ($NN$) là:',
            correct: '$\\frac{1}{4}$.',
            wrongs: ['$\\frac{1}{2}$.', '$\\frac{1}{3}$.', '$\\frac{3}{4}$.'],
            explanation:
              'Không gian mẫu $\\Omega = \\{SS, SN, NS, NN\\}$ có $n(\\Omega) = 4$ kết quả đồng khả năng. Biến cố $E = \\{NN\\}$ có $n(E) = 1$, nên $P(E) = \\frac{1}{4}$.',
          },
          {
            topic: 'Bài 26: Tính xác suất rút thẻ từ hộp (Tương tự Bài 9.3)',
            prompt:
              'Một hộp chứa $20$ tấm thẻ cùng loại được đánh số từ $1$ đến $20$. Rút ngẫu nhiên $1$ tấm thẻ từ hộp. Xác suất để rút được tấm thẻ ghi số chia hết cho $5$ là:',
            correct: '$\\frac{1}{5}$.',
            wrongs: ['$\\frac{1}{4}$.', '$\\frac{1}{20}$.', '$\\frac{3}{20}$.'],
            explanation:
              'Ta có $n(\\Omega) = 20$. Các số từ $1$ đến $20$ chia hết cho $5$ là $\\{5; 10; 15; 20\\}$ gồm $4$ số. Xác suất là $\\frac{4}{20} = \\frac{1}{5}$.',
          },
          {
            topic: 'Bài 26: Tính xác suất khi gieo hai con xúc xắc (Tương tự Ví dụ 4)',
            prompt:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Số phần tử của không gian mẫu $n(\\Omega)$ và xác suất để hai con xúc xắc xuất hiện số chấm bằng nhau lần lượt là:',
            correct: '$n(\\Omega) = 36$ và $P = \\frac{1}{6}$.',
            wrongs: [
              '$n(\\Omega) = 12$ và $P = \\frac{1}{2}$.',
              '$n(\\Omega) = 36$ và $P = \\frac{1}{12}$.',
              '$n(\\Omega) = 21$ và $P = \\frac{2}{7}$.',
            ],
            explanation:
              'Ta có $n(\\Omega) = 6 \\cdot 6 = 36$. Có $6$ kết quả hai mặt bằng nhau là $(1;1), (2;2), (3;3), (4;4), (5;5), (6;6)$, nên $P = \\frac{6}{36} = \\frac{1}{6}$.',
          },
          {
            topic: 'Bài 26: Nhận biết biến cố chắc chắn và biến cố không thể (Tương tự Bài 9.2)',
            prompt:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Gọi $T$ là tổng số chấm xuất hiện trên hai con xúc xắc. Biến cố nào sau đây là biến cố CHẮC CHẮN?',
            correct: 'Tổng số chấm $T$ thoả mãn $2 \\le T \\le 12$.',
            wrongs: [
              'Tổng số chấm $T$ là một số chẵn.',
              'Tổng số chấm $T = 1$.',
              'Tổng số chấm $T > 6$.',
            ],
            explanation:
              'Mỗi con xúc xắc có số chấm từ $1$ đến $6$, nên tổng số chấm $T$ của hai con xúc xắc luôn thoả mãn $2 \\le T \\le 12$ trong mọi lần gieo.',
          },
          {
            topic: 'Bài 26: Tính xác suất chọn bóng trong hộp (Tương tự Ví dụ 5)',
            prompt:
              'Trong một túi có $5$ viên bi đỏ, $3$ viên bi xanh và $2$ viên bi vàng có cùng kích thước và khối lượng. Lấy ngẫu nhiên $1$ viên bi từ túi. Xác suất để viên bi lấy ra KHÔNG phải màu vàng là:',
            correct: '$\\frac{4}{5}$.',
            wrongs: ['$\\frac{1}{5}$.', '$\\frac{1}{2}$.', '$\\frac{3}{10}$.'],
            explanation:
              'Tổng số viên bi là $5 + 3 + 2 = 10$. Số viên bi không phải màu vàng (đỏ hoặc xanh) là $5 + 3 = 8$. Xác suất bằng $\\frac{8}{10} = \\frac{4}{5}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 26: Phân tích không gian mẫu và biến cố khi gieo hai con xúc xắc (Tương tự Ví dụ 4 & Bài 9.4)',
            prompt:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất (con thứ nhất màu đỏ, con thứ hai màu trắng). Kí hiệu $(i; j)$ là kết quả con đỏ ra $i$ chấm và con trắng ra $j$ chấm. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Không gian mẫu $\\Omega = \\{(i; j) \\mid 1 \\le i \\le 6,\\ 1 \\le j \\le 6\\}$ có $36$ phần tử đồng khả năng.',
                isCorrect: true,
                explanation: 'Mỗi con xúc xắc có $6$ kết quả độc lập nên $n(\\Omega) = 6 \\cdot 6 = 36$.',
              },
              {
                statement: 'Biến cố $A$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng $7$" có $6$ kết quả thuận lợi.',
                isCorrect: true,
                explanation:
                  'Các bộ có tổng bằng $7$ là $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$, gồm $6$ kết quả.',
              },
              {
                statement: 'Xác suất của biến cố $A$ là $P(A) = \\frac{1}{6}$.',
                isCorrect: true,
                explanation: 'Ta có $P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{6}{36} = \\frac{1}{6}$.',
              },
              {
                statement: 'Biến cố $B$: "Tổng số chấm trên hai con xúc xắc lớn hơn $10$" có xác suất bằng $\\frac{1}{6}$.',
                isCorrect: false,
                explanation:
                  'Tổng lớn hơn $10$ gồm tổng bằng $11$ (có $(5;6), (6;5)$) và tổng bằng $12$ (có $(6;6)$), chỉ có $3$ kết quả thuận lợi nên $P(B) = \\frac{3}{36} = \\frac{1}{12}$ (không phải $\\frac{1}{6}$).',
              },
            ],
          },
          {
            topic: 'Bài 26: Phép thử rút thẻ đánh số và biến cố đối (Tương tự Bài 9.3 & 9.5)',
            prompt:
              'Một hộp chứa $12$ tấm thẻ giống hệt nhau được đánh số lần lượt từ $1$ đến $12$. Rút ngẫu nhiên $1$ tấm thẻ từ trong hộp. Xét tính đúng/sai của các mệnh đề sau:',
            tikzCode: tikzSampleSpaceVenn('12', 'E', '3'),
            statements: [
              {
                statement: 'Không gian mẫu của phép thử là $\\Omega = \\{1; 2; 3; \\dots; 12\\}$ với $n(\\Omega) = 12$.',
                isCorrect: true,
                explanation: 'Rút $1$ thẻ từ $12$ thẻ có $12$ kết quả có thể xảy ra.',
              },
              {
                statement: 'Gọi $E$ là biến cố "Số ghi trên thẻ là số chính phương". Khi đó $E = \\{1; 4; 9\\}$ và $P(E) = \\frac{1}{4}$.',
                isCorrect: true,
                explanation:
                  'Các số chính phương từ $1$ đến $12$ là $1 = 1^2,\\ 4 = 2^2,\\ 9 = 3^2$, nên $n(E) = 3 \\Rightarrow P(E) = \\frac{3}{12} = \\frac{1}{4}$.',
              },
              {
                statement: 'Xác suất của biến cố đối $\\overline{E}$ ("Số ghi trên thẻ không phải là số chính phương") bằng $\\frac{3}{4}$.',
                isCorrect: true,
                explanation: 'Ta có $P(\\overline{E}) = 1 - P(E) = 1 - \\frac{1}{4} = \\frac{3}{4}$.',
              },
              {
                statement: 'Gọi $F$ là biến cố "Số ghi trên thẻ là ước nguyên dương của $12$". Khi đó $P(F) = \\frac{1}{3}$.',
                isCorrect: false,
                explanation:
                  'Các ước nguyên dương của $12$ là $\\{1; 2; 3; 4; 6; 12\\}$ gồm $6$ số, nên $P(F) = \\frac{6}{12} = \\frac{1}{2}$ (không phải $\\frac{1}{3}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 26: Tính xác suất tung đồng xu 3 lần (viết dưới dạng số thập phân)',
            prompt:
              'Tung một đồng xu cân đối và đồng chất $3$ lần liên tiếp. Tính xác suất để có đúng $2$ lần xuất hiện mặt Ngửa (viết kết quả dưới dạng số thập phân).',
            answers: ['0,375', '0.375'],
            explanation:
              'Không gian mẫu có $n(\\Omega) = 8$. Biến cố có đúng $2$ mặt Ngửa là $\\{NNS, NSN, SNN\\}$ gồm $3$ kết quả. Xác suất là $\\frac{3}{8} = 0,375$.',
          },
          {
            topic: 'Bài 26: Tính xác suất chọn số có hai chữ số chia hết cho 10',
            prompt:
              'Chọn ngẫu nhiên một số tự nhiên có $2$ chữ số (từ $10$ đến $99$). Tính xác suất để số được chọn chia hết cho $10$ (viết dưới dạng số thập phân).',
            answers: ['0,1', '0.1'],
            explanation:
              'Có $90$ số tự nhiên có $2$ chữ số ($n(\\Omega) = 90$). Các số chia hết cho $10$ là $\\{10; 20; \\dots; 90\\}$ gồm $9$ số. Xác suất là $\\frac{9}{90} = 0,1$.',
          },
          {
            topic: 'Bài 26: Tìm số phần tử thuận lợi khi biết xác suất',
            prompt:
              'Một hộp có $25$ quả bóng gồm bóng trắng và bóng cam. Lấy ngẫu nhiên $1$ quả bóng, biết xác suất lấy được quả bóng cam là $0,4$. Hỏi trong hộp có bao nhiêu quả bóng cam?',
            answers: ['10'],
            explanation:
              'Gọi $k$ là số quả bóng cam. Ta có $P = \\frac{k}{25} = 0,4 \\Leftrightarrow k = 25 \\cdot 0,4 = 10$ (quả).',
          },
          {
            topic: 'Bài 26: Tính xác suất chọn đỉnh của đa giác đều',
            prompt:
              'Cho hình vuông $ABCD$ có tâm $O$. Chọn ngẫu nhiên $1$ điểm trong $5$ điểm $\\{A, B, C, D, O\\}$. Tính xác suất để điểm được chọn cách đều hai điểm $A$ và $C$ (viết dưới dạng số thập phân).',
            answers: ['0,6', '0.6'],
            explanation:
              'Đường trung trực của đoạn $AC$ trong hình vuông $ABCD$ là đường thẳng $BD$, đi qua $3$ điểm $B, O, D$. Vậy có $3$ kết quả thuận lợi trong $5$ điểm, xác suất là $\\frac{3}{5} = 0,6$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 26: Mô tả không gian mẫu và tính xác suất khi tung đồng xu (Tương tự Ví dụ 3)',
            problemStatement:
              'Tung một đồng xu cân đối và đồng chất $3$ lần liên tiếp. Tính xác suất của biến cố $A$: "Mặt Ngửa xuất hiện ít nhất $2$ lần".',
            conclusionTarget: 'Liệt kê không gian mẫu $\\Omega$, tập hợp $A$ và tính $P(A) = \\frac{n(A)}{n(\\Omega)}$.',
            steps: [
              'Kí hiệu $N$ là mặt Ngửa, $S$ là mặt Sấp. Không gian mẫu là $\\Omega = \\{NNN, NNS, NSN, SNN, NSS, SNS, SSN, SSS\\}$ có $n(\\Omega) = 8$.',
              'Biến cố $A$ ("Mặt Ngửa xuất hiện ít nhất $2$ lần") gồm các trường hợp có $2$ mặt Ngửa hoặc $3$ mặt Ngửa.',
              'Liệt kê các kết quả thuận lợi cho $A$: $A = \\{NNN, NNS, NSN, SNN\\}$, suy ra $n(A) = 4$.',
              'Vì các kết quả có cùng khả năng xảy ra nên xác suất của biến cố $A$ là $P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{4}{8} = \\frac{1}{2}$.',
            ],
            analysis:
              'Với phép thử có số phần tử không gian mẫu nhỏ ($n(\\Omega) = 8$), liệt kê tường minh các phần tử giúp kiểm soát chính xác tuyệt đối.',
          },
          {
            topic: 'Bài 26: Tính xác suất trong phép thử gieo hai con xúc xắc (Tương tự Ví dụ 4 & Bài 9.4)',
            problemStatement:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Tính xác suất của biến cố $E$: "Tổng số chấm xuất hiện trên hai con xúc xắc bằng $8$".',
            conclusionTarget: 'Xác định $n(\\Omega) = 36$, liệt kê các cặp $(i; j)$ có $i + j = 8$ và tính $P(E)$.',
            steps: [
              'Mỗi kết quả khi gieo hai con xúc xắc là một cặp $(i; j)$ với $1 \\le i, j \\le 6$, nên không gian mẫu có $n(\\Omega) = 6 \\cdot 6 = 36$.',
              'Biến cố $E$ xảy ra khi tổng số chấm $i + j = 8$ với $i, j \\in \\{1; 2; 3; 4; 5; 6\\}$.',
              'Các kết quả thuận lợi cho $E$ là $E = \\{(2; 6),\\ (3; 5),\\ (4; 4),\\ (5; 3),\\ (6; 2)\\}$, gồm $n(E) = 5$ phần tử.',
              'Vậy xác suất của biến cố $E$ là $P(E) = \\frac{n(E)}{n(\\Omega)} = \\frac{5}{36}$.',
            ],
            analysis:
              'Chú ý hai cặp $(2; 6)$ và $(6; 2)$ là hai kết quả khác nhau trong không gian mẫu $36$ phần tử, còn $(4; 4)$ chỉ tính $1$ lần.',
          },
          {
            topic: 'Bài 26: Vận dụng biến cố đối để tính xác suất (Tương tự Bài 9.5)',
            problemStatement:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Tính xác suất của biến cố $M$: "Tích số chấm xuất hiện trên hai con xúc xắc là một số chẵn".',
            conclusionTarget: 'Xét biến cố đối $\\overline{M}$ ("Tích số chấm là số lẻ") và tính $P(M) = 1 - P(\\overline{M})$.',
            steps: [
              'Không gian mẫu có $n(\\Omega) = 6 \\cdot 6 = 36$ kết quả đồng khả năng.',
              'Xét biến cố đối $\\overline{M}$: "Tích số chấm trên hai con xúc xắc là một số lẻ".',
              'Tích của hai số tự nhiên là số lẻ khi và chỉ khi cả hai số đều lẻ (thuộc $\\{1; 3; 5\\}$), nên $n(\\overline{M}) = 3 \\cdot 3 = 9$.',
              'Vậy $P(\\overline{M}) = \\frac{9}{36} = \\frac{1}{4}$, suy ra $P(M) = 1 - P(\\overline{M}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.',
            ],
            analysis:
              'Để tích hai số là số chẵn có 3 trường hợp (chẵn-chẵn, chẵn-lẻ, lẻ-chẵn), trong khi tích là số lẻ chỉ có 1 trường hợp (lẻ-lẻ).',
          },
          {
            topic: 'Bài 26: Bài toán rút thẻ và tính xác suất chia hết (Tương tự Bài 9.3)',
            problemStatement:
              'Một hộp có $30$ tấm thẻ cùng loại được đánh số từ $1$ đến $30$. Rút ngẫu nhiên $1$ tấm thẻ từ hộp. Tính xác suất của biến cố $K$: "Số ghi trên thẻ rút được chia hết cho cả $2$ và $3$".',
            conclusionTarget: 'Nhận diện số chia hết cho cả $2$ và $3$ là bội của $6$, đếm $n(K)$ và tính $P(K)$.',
            steps: [
              'Rút ngẫu nhiên $1$ thẻ từ $30$ thẻ có $n(\\Omega) = 30$ kết quả đồng khả năng.',
              'Vì $\\text{ƯCLN}(2, 3) = 1$ nên một số tự nhiên chia hết cho cả $2$ và $3$ khi và chỉ khi số đó chia hết cho $6$.',
              'Trong các số từ $1$ đến $30$, các bội của $6$ là $K = \\{6; 12; 18; 24; 30\\}$, nên $n(K) = 5$.',
              'Vậy xác suất của biến cố $K$ là $P(K) = \\frac{n(K)}{n(\\Omega)} = \\frac{5}{30} = \\frac{1}{6}$.',
            ],
            analysis:
              'Đưa điều kiện "chia hết cho cả $2$ và $3$" về "chia hết cho $6$" giúp liệt kê nhanh và không bỏ sót phần tử.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-26-2',
        lessonId: 'bai-26',
        title: 'Đề ôn Bài 26 - Đề số 02',
        subtitle: 'Nâng cao bài toán biến cố, không gian mẫu và xác suất cổ điển (SGK Toán 10 Tập 2, trang 77–82)',
        description:
          'Đề ôn tập số 02 của Bài 26 (Biến cố và định nghĩa cổ điển của xác suất): Xác suất trong phép thử chọn ngẫu nhiên, quay đĩa tròn, rút thăm và bài toán thực tế.',
        mcqs: [
          {
            topic: 'Bài 26: Số phần tử không gian mẫu khi rút 1 thẻ và tung 1 đồng xu',
            prompt:
              'Thực hiện phép thử gồm tung một đồng xu cân đối rồi rút ngẫu nhiên $1$ tấm thẻ từ hộp có $5$ tấm thẻ đánh số $1, 2, 3, 4, 5$. Số phần tử của không gian mẫu $n(\\Omega)$ là:',
            correct: '$10$.',
            wrongs: ['$7$.', '$25$.', '$5$.'],
            explanation:
              'Tung đồng xu có $2$ kết quả, rút thẻ có $5$ kết quả. Theo quy tắc nhân, $n(\\Omega) = 2 \\cdot 5 = 10$.',
          },
          {
            topic: 'Bài 26: Biến cố không thể trong phép thử',
            prompt:
              'Một hộp chỉ chứa $6$ quả bóng màu xanh và $4$ quả bóng màu đỏ. Lấy ngẫu nhiên $1$ quả bóng từ hộp. Xác suất của biến cố $A$: "Quả bóng lấy ra có màu tím" bằng:',
            correct: '$0$.',
            wrongs: ['$\\frac{1}{10}$.', '$1$.', '$\\frac{2}{5}$.'],
            explanation:
              'Trong hộp không có quả bóng màu tím nào nên $A = \\emptyset$ là biến cố không thể, do đó $P(A) = 0$.',
          },
          {
            topic: 'Bài 26: Tính xác suất của biến cố đối khi biết xác suất biến cố gốc',
            prompt:
              'Cho $E$ là một biến cố liên quan đến phép thử $T$ có xác suất $P(E) = \\frac{3}{11}$. Xác suất của biến cố đối $\\overline{E}$ bằng:',
            correct: '$\\frac{8}{11}$.',
            wrongs: ['$\\frac{3}{11}$.', '$\\frac{11}{3}$.', '$\\frac{7}{11}$.'],
            explanation:
              'Ta có $P(\\overline{E}) = 1 - P(E) = 1 - \\frac{3}{11} = \\frac{8}{11}$.',
          },
          {
            topic: 'Bài 26: Tính xác suất chọn chữ cái nguyên âm',
            prompt:
              'Chọn ngẫu nhiên $1$ chữ cái từ tập hợp gồm $6$ chữ cái $\\{A, B, C, D, E, G\\}$. Xác suất để chọn được một chữ cái nguyên âm (tức $A$ hoặc $E$) là:',
            correct: '$\\frac{1}{3}$.',
            wrongs: ['$\\frac{1}{6}$.', '$\\frac{2}{3}$.', '$\\frac{1}{2}$.'],
            explanation:
              'Không gian mẫu có $6$ chữ cái, trong đó có $2$ nguyên âm là $A, E$. Xác suất bằng $\\frac{2}{6} = \\frac{1}{3}$.',
          },
          {
            topic: 'Bài 26: Tính xác suất rút thẻ chia hết cho 3 hoặc 5',
            prompt:
              'Một hộp có $15$ tấm thẻ đánh số từ $1$ đến $15$. Rút ngẫu nhiên $1$ tấm thẻ. Xác suất để số ghi trên thẻ chia hết cho $3$ hoặc chia hết cho $5$ là:',
            correct: '$\\frac{7}{15}$.',
            wrongs: ['$\\frac{8}{15}$.', '$\\frac{1}{3}$.', '$\\frac{2}{5}$.'],
            explanation:
              'Các số từ $1$ đến $15$ chia hết cho $3$ hoặc $5$ là $\\{3; 5; 6; 9; 10; 12; 15\\}$ gồm $7$ số (số $15$ chỉ đếm $1$ lần). Vậy $P = \\frac{7}{15}$.',
          },
          {
            topic: 'Bài 26: Xác suất trong bài toán vòng quay may mắn',
            prompt:
              'Một chiếc đĩa hình tròn được chia thành $12$ hình quạt bằng nhau và đánh số từ $1$ đến $12$. Quay đĩa ngẫu nhiên $1$ lần. Xác suất để mũi tên dừng lại ở hình quạt ghi số là ước của $10$ bằng:',
            correct: '$\\frac{1}{3}$.',
            wrongs: ['$\\frac{1}{4}$.', '$\\frac{5}{12}$.', '$\\frac{1}{6}$.'],
            explanation:
              'Các ước nguyên dương của $10$ trong phạm vi từ $1$ đến $12$ là $\\{1; 2; 5; 10\\}$ gồm $4$ số. Xác suất bằng $\\frac{4}{12} = \\frac{1}{3}$.',
          },
          {
            topic: 'Bài 26: Xác suất gieo hai con xúc xắc có tổng số chấm nhỏ hơn 5',
            prompt:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc nhỏ hơn $5$ là:',
            correct: '$\\frac{1}{6}$.',
            wrongs: ['$\\frac{1}{9}$.', '$\\frac{5}{36}$.', '$\\frac{7}{36}$.'],
            explanation:
              'Tổng nhỏ hơn $5$ gồm tổng bằng $2$ $(1;1)$, tổng bằng $3$ $(1;2), (2;1)$, và tổng bằng $4$ $(1;3), (2;2), (3;1)$, tất cả có $1 + 2 + 3 = 6$ kết quả. Vậy $P = \\frac{6}{36} = \\frac{1}{6}$.',
          },
          {
            topic: 'Bài 26: Xác suất chọn ngẫu nhiên một ngày trong tuần',
            prompt:
              'Hai bạn An và Bình mỗi người chọn ngẫu nhiên một ngày từ Thứ Hai đến Chủ Nhật trong cùng một tuần để đi thư viện. Xác suất để hai bạn chọn trùng vào cùng một ngày là:',
            correct: '$\\frac{1}{7}$.',
            wrongs: ['$\\frac{2}{7}$.', '$\\frac{1}{49}$.', '$\\frac{1}{14}$.'],
            explanation:
              'Không gian mẫu có $7 \\cdot 7 = 49$ kết quả. Có $7$ kết quả hai bạn chọn cùng ngày (cùng Thứ Hai, ..., cùng Chủ Nhật), nên $P = \\frac{7}{49} = \\frac{1}{7}$.',
          },
          {
            topic: 'Bài 26: Xác suất khi chọn số tự nhiên có hai chữ số giống nhau',
            prompt:
              'Chọn ngẫu nhiên một số tự nhiên có $2$ chữ số (từ $10$ đến $99$). Xác suất để chọn được số có hai chữ số giống nhau (như $11, 22, \\dots$) là:',
            correct: '$\\frac{1}{10}$.',
            wrongs: ['$\\frac{1}{9}$.', '$\\frac{1}{11}$.', '$\\frac{2}{9}$.'],
            explanation:
              'Có $90$ số có $2$ chữ số, trong đó có $9$ số có hai chữ số giống nhau là $11, 22, 33, 44, 55, 66, 77, 88, 99$. Vậy $P = \\frac{9}{90} = \\frac{1}{10}$.',
          },
          {
            topic: 'Bài 26: Xác suất rút thăm trúng thưởng',
            prompt:
              'Trong một thùng phiếu bốc thăm có $50$ lá phiếu, trong đó có $2$ phiếu giải Nhất, $5$ phiếu giải Nhì và $8$ phiếu giải Khuyến khích (các phiếu còn lại không trúng giải). Một người rút ngẫu nhiên $1$ phiếu. Xác suất để người đó trúng một giải bất kỳ là:',
            correct: '$\\frac{3}{10}$.',
            wrongs: ['$\\frac{7}{10}$.', '$\\frac{1}{5}$.', '$\\frac{7}{50}$.'],
            explanation:
              'Tổng số phiếu trúng giải là $2 + 5 + 8 = 15$ phiếu. Xác suất trúng giải là $\\frac{15}{50} = \\frac{3}{10}$.',
          },
          {
            topic: 'Bài 26: Xác suất khi tung đồng xu 4 lần liên tiếp',
            prompt:
              'Tung một đồng xu cân đối và đồng chất $4$ lần liên tiếp. Xác suất để cả $4$ lần đều xuất hiện cùng một mặt (hoặc cả $4$ lần Sấp, hoặc cả $4$ lần Ngửa) là:',
            correct: '$\\frac{1}{8}$.',
            wrongs: ['$\\frac{1}{16}$.', '$\\frac{1}{4}$.', '$\\frac{1}{2}$.'],
            explanation:
              'Ta có $n(\\Omega) = 2^4 = 16$. Biến cố có $2$ kết quả thuận lợi là $SSSS$ và $NNNN$. Xác suất bằng $\\frac{2}{16} = \\frac{1}{8}$.',
          },
          {
            topic: 'Bài 26: Ý nghĩa thực tế của nguyên lí xác suất bé (Tương tự trang 81 SGK)',
            prompt:
              'Theo nguyên lí xác suất bé, nếu một biến cố có xác suất xảy ra rất nhỏ (gần bằng $0$) thì trong một phép thử đơn lẻ:',
            correct: 'Ta có thể xem như biến cố đó sẽ không xảy ra trong thực tế.',
            wrongs: [
              'Biến cố đó chắc chắn là biến cố không thể ($E = \\emptyset$).',
              'Biến cố đó sẽ xảy ra ngay ở lần thử đầu tiên.',
              'Xác suất của biến cố đối cũng gần bằng $0$.',
            ],
            explanation:
              'Nguyên lí xác suất bé phát biểu rằng: nếu một biến cố có xác suất rất bé thì trong một phép thử, thực tế có thể coi như biến cố đó không xảy ra.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 26: Phép thử lấy bi từ hai hộp khác nhau (Tương tự Bài 9.6)',
            prompt:
              'Hộp thứ nhất chứa $3$ quả cầu đánh số $1, 2, 3$. Hộp thứ hai chứa $4$ quả cầu đánh số $1, 2, 3, 4$. Lấy ngẫu nhiên từ mỗi hộp ra $1$ quả cầu. Kí hiệu $(a; b)$ là kết quả quả cầu lấy từ hộp thứ nhất ghi số $a$ và từ hộp thứ hai ghi số $b$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Không gian mẫu $\\Omega$ của phép thử có $n(\\Omega) = 3 \\cdot 4 = 12$ phần tử.',
                isCorrect: true,
                explanation: 'Theo quy tắc nhân, có $3$ cách lấy ở hộp 1 và $4$ cách lấy ở hộp 2, nên $n(\\Omega) = 12$.',
              },
              {
                statement: 'Biến cố $A$: "Hai quả cầu lấy ra ghi cùng một số" có $3$ kết quả thuận lợi là $(1;1), (2;2), (3;3)$.',
                isCorrect: true,
                explanation: 'Các số chung ở cả hai hộp là $1, 2, 3$, nên $A = \\{(1;1), (2;2), (3;3)\\}$ có $3$ phần tử.',
              },
              {
                statement: 'Xác suất để hai quả cầu lấy ra ghi hai số khác nhau là $\\frac{3}{4}$.',
                isCorrect: true,
                explanation:
                  'Đây là biến cố đối $\\overline{A}$, có xác suất $P(\\overline{A}) = 1 - P(A) = 1 - \\frac{3}{12} = \\frac{3}{4}$.',
              },
              {
                statement: 'Xác suất để tổng hai số ghi trên hai quả cầu bằng $5$ là $\\frac{1}{3}$.',
                isCorrect: false,
                explanation:
                  'Các cặp $(a; b)$ có $a + b = 5$ với $a \\in \\{1;2;3\\}, b \\in \\{1;2;3;4\\}$ là $(1;4), (2;3), (3;2)$, gồm $3$ phần tử, nên xác suất là $\\frac{3}{12} = \\frac{1}{4}$ (không phải $\\frac{1}{3}$).',
              },
            ],
          },
          {
            topic: 'Bài 26: Phân tích bảng kết quả khảo sát và tính xác suất cổ điển',
            prompt:
              'Lớp 10B có $40$ học sinh, trong đó có $22$ học sinh thích môn Toán, $18$ học sinh thích môn Tiếng Anh và $10$ học sinh thích cả hai môn Toán và Tiếng Anh. Giáo viên chọn ngẫu nhiên $1$ học sinh trong lớp. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Xác suất để chọn được học sinh thích môn Toán là $\\frac{22}{40} = \\frac{11}{20}$.',
                isCorrect: true,
                explanation: 'Có $22$ học sinh thích Toán trong $40$ học sinh, nên xác suất là $\\frac{22}{40} = \\frac{11}{20}$.',
              },
              {
                statement: 'Xác suất để chọn được học sinh thích cả hai môn Toán và Tiếng Anh là $\\frac{1}{4}$.',
                isCorrect: true,
                explanation: 'Có $10$ học sinh thích cả hai môn, nên xác suất là $\\frac{10}{40} = \\frac{1}{4}$.',
              },
              {
                statement: 'Số học sinh thích ít nhất một trong hai môn Toán hoặc Tiếng Anh là $22 + 18 - 10 = 30$ học sinh.',
                isCorrect: true,
                explanation: 'Theo công thức lực lượng hợp hai tập hợp: $n(T \\cup A) = 22 + 18 - 10 = 30$.',
              },
              {
                statement: 'Xác suất để chọn được học sinh không thích cả hai môn trên là $\\frac{1}{2}$.',
                isCorrect: false,
                explanation:
                  'Số học sinh không thích môn nào trong hai môn là $40 - 30 = 10$ học sinh, nên xác suất là $\\frac{10}{40} = \\frac{1}{4}$ (không phải $\\frac{1}{2}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 26: Tính xác suất rút thẻ ghi số nguyên tố',
            prompt:
              'Một hộp có $10$ tấm thẻ đánh số từ $1$ đến $10$. Rút ngẫu nhiên $1$ tấm thẻ. Tính xác suất để rút được thẻ ghi số nguyên tố (viết dưới dạng số thập phân).',
            answers: ['0,4', '0.4'],
            explanation:
              'Các số nguyên tố từ $1$ đến $10$ là $\\{2; 3; 5; 7\\}$ gồm $4$ số. Xác suất là $\\frac{4}{10} = 0,4$.',
          },
          {
            topic: 'Bài 26: Tính xác suất của biến cố đối',
            prompt:
              'Trong một lô hàng gồm $100$ sản phẩm có $4$ sản phẩm bị lỗi. Lấy ngẫu nhiên $1$ sản phẩm để kiểm tra. Tính xác suất để lấy được sản phẩm đạt chuẩn (không bị lỗi), viết kết quả dưới dạng số thập phân.',
            answers: ['0,96', '0.96'],
            explanation:
              'Số sản phẩm đạt chuẩn là $100 - 4 = 96$. Xác suất là $\\frac{96}{100} = 0,96$.',
          },
          {
            topic: 'Bài 26: Tính số viên bi cần thêm vào hộp để đạt xác suất cho trước',
            prompt:
              'Một hộp hiện có $6$ viên bi xanh và $9$ viên bi đỏ. Cần bỏ thêm vào hộp bao nhiêu viên bi xanh nữa để khi lấy ngẫu nhiên $1$ viên bi từ hộp thì xác suất lấy được viên bi xanh đúng bằng $0,5$?',
            answers: ['3'],
            explanation:
              'Gọi $x$ là số bi xanh bỏ thêm. Để xác suất lấy được bi xanh bằng $0,5$, số bi xanh phải bằng số bi đỏ: $6 + x = 9 \\Leftrightarrow x = 3$.',
          },
          {
            topic: 'Bài 26: Tính xác suất khi tung đồng xu và gieo xúc xắc',
            prompt:
              'Tung một đồng xu cân đối và gieo một con xúc xắc cân đối đồng thời. Tính xác suất để đồng xu xuất hiện mặt Ngửa và con xúc xắc xuất hiện mặt có số chấm chẵn (viết kết quả dưới dạng số thập phân).',
            answers: ['0,25', '0.25'],
            explanation:
              'Không gian mẫu có $2 \\cdot 6 = 12$ kết quả. Đồng xu ra Ngửa ($1$ cách) và xúc xắc ra mặt chẵn $\\{2; 4; 6\\}$ ($3$ cách) có $1 \\cdot 3 = 3$ kết quả thuận lợi. Xác suất là $\\frac{3}{12} = 0,25$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 26: Lập bảng / liệt kê không gian mẫu của hai hộp và tính xác suất (Tương tự Bài 9.6)',
            problemStatement:
              'Hộp I có $3$ tấm thẻ ghi số $1, 2, 3$. Hộp II có $3$ tấm thẻ ghi số $2, 3, 4$. Rút ngẫu nhiên từ mỗi hộp $1$ tấm thẻ. Tính xác suất của biến cố $E$: "Tổng hai số ghi trên hai tấm thẻ rút ra là một số nguyên tố".',
            conclusionTarget: 'Xác định $n(\\Omega) = 9$, liệt kê các cặp $(a; b)$ có $a + b$ nguyên tố và tính $P(E)$.',
            steps: [
              'Mỗi kết quả là một cặp $(a; b)$ với $a \\in \\{1; 2; 3\\}$ và $b \\in \\{2; 3; 4\\}$, nên không gian mẫu có $n(\\Omega) = 3 \\cdot 3 = 9$ phần tử.',
              'Tổng $a + b$ nhận các giá trị từ $3$ đến $7$, trong đó các số nguyên tố là $3, 5, 7$.',
              'Các cặp $(a; b)$ thuận lợi cho biến cố $E$ là: $(1; 2),\\ (1; 4),\\ (2; 3),\\ (3; 2),\\ (3; 4)$, gồm $n(E) = 5$ kết quả.',
              'Vậy xác suất của biến cố $E$ là $P(E) = \\frac{n(E)}{n(\\Omega)} = \\frac{5}{9}$.',
            ],
            analysis:
              'Xác định trước miền giá trị của tổng $a + b \\in [3; 7]$ giúp tìm ra ngay các tổng nguyên tố là $3, 5, 7$.',
          },
          {
            topic: 'Bài 26: Tính xác suất trong phép thử chọn số tự nhiên có hai chữ số',
            problemStatement:
              'Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Tính xác suất của biến cố $A$: "Số được chọn là một số chính phương hoặc là một số chia hết cho $25$".',
            conclusionTarget: 'Tìm $n(\\Omega) = 90$, liệt kê các phần tử của $A$ và tính $P(A)$.',
            steps: [
              'Tập hợp các số tự nhiên có hai chữ số từ $10$ đến $99$ có $n(\\Omega) = 99 - 10 + 1 = 90$ phần tử.',
              'Các số chính phương có hai chữ số là $\\{16; 25; 36; 49; 64; 81\\}$ (gồm $6$ số).',
              'Các số có hai chữ số chia hết cho $25$ là $\\{25; 50; 75\\}$ (trong đó số $25$ đã được tính ở nhóm số chính phương), nên $A = \\{16; 25; 36; 49; 50; 64; 75; 81\\}$ có $n(A) = 8$ phần tử.',
              'Vậy xác suất của biến cố $A$ là $P(A) = \\frac{8}{90} = \\frac{4}{45}$.',
            ],
            analysis:
              'Khi hợp hai điều kiện có phần tử chung ($25$ vừa là số chính phương vừa chia hết cho $25$), cần lưu ý chỉ đếm phần tử chung đúng $1$ lần.',
          },
          {
            topic: 'Bài 26: Tính xác suất gieo hai con xúc xắc có hiệu số chấm cho trước',
            problemStatement:
              'Gieo đồng thời hai con xúc xắc cân đối và đồng chất. Tính xác suất của biến cố $H$: "Số chấm trên hai con xúc xắc hơn kém nhau đúng $1$ đơn vị".',
            conclusionTarget: 'Liệt kê các cặp $(i; j)$ thoả mãn $|i - j| = 1$ và tính xác suất.',
            steps: [
              'Không gian mẫu khi gieo hai con xúc xắc có $n(\\Omega) = 6 \\cdot 6 = 36$ kết quả đồng khả năng.',
              'Biến cố $H$ xảy ra khi $|i - j| = 1$ với $i, j \\in \\{1; 2; 3; 4; 5; 6\\}$.',
              'Các cặp thuận lợi gồm $5$ cặp tăng $(1;2), (2;3), (3;4), (4;5), (5;6)$ và $5$ cặp giảm $(2;1), (3;2), (4;3), (5;4), (6;5)$, suy ra $n(H) = 10$.',
              'Vậy xác suất của biến cố $H$ là $P(H) = \\frac{10}{36} = \\frac{5}{18}$.',
            ],
            analysis:
              'Biểu thức $|i - j| = 1$ đối xứng theo $i, j$, nên số cặp $(i; j)$ với $i < j$ luôn bằng số cặp với $i > j$.',
          },
          {
            topic: 'Bài 26: Bài toán tìm số lượng quả cầu trong hộp từ điều kiện xác suất',
            problemStatement:
              'Một hộp có $12$ quả bóng màu xanh và một số quả bóng màu đỏ có cùng kích thước. Lấy ngẫu nhiên $1$ quả bóng từ hộp. Biết rằng xác suất lấy được quả bóng màu đỏ bằng $\\frac{3}{5}$. Tính tổng số quả bóng có trong hộp.',
            conclusionTarget: 'Gọi $x$ là số quả bóng đỏ, lập phương trình xác suất và giải tìm $x$.',
            steps: [
              'Gọi $x$ ($x \\in \\mathbb{N}^*$) là số quả bóng màu đỏ trong hộp. Khi đó tổng số quả bóng là $n(\\Omega) = x + 12$.',
              'Xác suất lấy được quả bóng màu đỏ là $P = \\frac{x}{x + 12}$.',
              'Theo giả thiết, ta có phương trình $\\frac{x}{x + 12} = \\frac{3}{5} \\Leftrightarrow 5x = 3x + 36 \\Leftrightarrow 2x = 36 \\Leftrightarrow x = 18$.',
              'Vậy trong hộp có $18$ quả bóng đỏ và tổng số quả bóng trong hộp là $12 + 18 = 30$ (quả).',
            ],
            analysis:
              'Sử dụng công thức $P(E) = \\frac{n(E)}{n(\\Omega)}$ theo chiều ngược giúp tìm kích thước mẫu từ giá trị xác suất đã biết.',
          },
        ],
      }),
    ],
  },
  {
    id: 'bai-27',
    lessonNumber: 27,
    name: 'Bài 27',
    topicTitle: 'Thực hành tính xác suất theo định nghĩa cổ điển',
    chapter: 'Chương IX: Tính xác suất theo định nghĩa cổ điển',
    keySummary:
      'Sử dụng phương pháp tổ hợp (quy tắc cộng, quy tắc nhân, hoán vị $P_n$, chỉnh hợp $A_n^k$, tổ hợp $C_n^k$) và sơ đồ hình cây để tính $n(\\Omega)$ và $n(E)$; vận dụng công thức xác suất của biến cố đối $P(\\overline{E}) = 1 - P(E)$ để giải nhanh các bài toán xác suất phức tạp và bài toán thực tiễn.',
    practiceExams: [
      buildFullLessonExam({
        id: 'de-on-bai-27-1',
        lessonId: 'bai-27',
        title: 'Đề ôn Bài 27 - Đề số 01',
        subtitle: 'Bám sát Ví dụ 1–4, Luyện tập 1–3, Vận dụng và Bài tập 9.7–9.12 (SGK Toán 10 Tập 2, trang 83–87)',
        description:
          'Đề ôn tập số 01 của Bài 27 (Thực hành tính xác suất theo định nghĩa cổ điển): Tính xác suất bằng tổ hợp, hoán vị, sơ đồ hình cây và quy tắc biến cố đối.',
        mcqs: [
          {
            topic: 'Bài 27: Tính xác suất bằng tổ hợp khi rút đồng thời các quả cầu (Tương tự Ví dụ 1)',
            prompt:
              'Trong một hộp có $6$ quả cầu trắng và $4$ quả cầu đen. Lấy ngẫu nhiên đồng thời $2$ quả cầu từ hộp. Xác suất để lấy được $2$ quả cầu cùng màu trắng là:',
            correct: '$\\frac{1}{3}$.',
            wrongs: ['$\\frac{2}{15}$.', '$\\frac{3}{5}$.', '$\\frac{1}{5}$.'],
            explanation:
              'Không gian mẫu có $n(\\Omega) = C_{10}^2 = 45$. Số cách lấy $2$ quả cầu trắng từ $6$ quả trắng là $C_6^2 = 15$. Xác suất bằng $\\frac{15}{45} = \\frac{1}{3}$.',
          },
          {
            topic: 'Bài 27: Tính xác suất lấy 2 quả cầu khác màu (Tương tự Ví dụ 1b)',
            prompt:
              'Một hộp có $5$ viên bi đỏ và $4$ viên bi xanh. Lấy ngẫu nhiên đồng thời $2$ viên bi. Xác suất để lấy được $1$ viên bi đỏ và $1$ viên bi xanh là:',
            correct: '$\\frac{5}{9}$.',
            wrongs: ['$\\frac{4}{9}$.', '$\\frac{5}{18}$.', '$\\frac{1}{2}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_9^2 = 36$. Số cách lấy $1$ đỏ và $1$ xanh là $C_5^1 \\cdot C_4^1 = 20$. Xác suất bằng $\\frac{20}{36} = \\frac{5}{9}$.',
          },
          {
            topic: 'Bài 27: Tính xác suất khi chọn đội tuyển học sinh (Tương tự Luyện tập 1)',
            prompt:
              'Một tổ học sinh có $6$ bạn nam và $4$ bạn nữ. Chọn ngẫu nhiên $3$ bạn đi dự đại hội. Xác suất để $3$ bạn được chọn gồm đúng $2$ bạn nam và $1$ bạn nữ là:',
            correct: '$\\frac{1}{2}$.',
            wrongs: ['$\\frac{1}{3}$.', '$\\frac{3}{10}$.', '$\\frac{2}{5}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_{10}^3 = 120$. Số cách chọn $2$ nam và $1$ nữ là $C_6^2 \\cdot C_4^1 = 15 \\cdot 4 = 60$. Xác suất bằng $\\frac{60}{120} = \\frac{1}{2}$.',
          },
          {
            topic: 'Bài 27: Tính xác suất bằng biến cố đối với cụm từ "ít nhất 1" (Tương tự Ví dụ 3)',
            prompt:
              'Một hộp có $7$ chiếc bút xanh và $3$ chiếc bút đỏ. Lấy ngẫu nhiên đồng thời $2$ chiếc bút. Xác suất để trong $2$ chiếc bút lấy ra có ít nhất $1$ chiếc bút đỏ là:',
            correct: '$\\frac{8}{15}$.',
            wrongs: ['$\\frac{7}{15}$.', '$\\frac{1}{15}$.', '$\\frac{3}{10}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_{10}^2 = 45$. Biến cố đối là cả $2$ chiếc bút đều màu xanh, có $C_7^2 = 21$ cách. Vậy $P = 1 - \\frac{21}{45} = \\frac{24}{45} = \\frac{8}{15}$.',
            tikzCode: tikzSampleSpaceVenn('45', 'E', '24'),
          },
          {
            topic: 'Bài 27: Tính xác suất bằng hoán vị trong bài toán xếp hàng (Tương tự Ví dụ 2)',
            prompt:
              'Xếp ngẫu nhiên $4$ bạn học sinh trong đó có An và Bình thành một hàng ngang. Xác suất để An và Bình đứng cạnh nhau là:',
            correct: '$\\frac{1}{2}$.',
            wrongs: ['$\\frac{1}{4}$.', '$\\frac{1}{3}$.', '$\\frac{2}{3}$.'],
            explanation:
              'Số cách xếp $4$ bạn là $n(\\Omega) = 4! = 24$. Số cách xếp để An và Bình đứng cạnh nhau là $2! \\cdot 3! = 12$. Xác suất bằng $\\frac{12}{24} = \\frac{1}{2}$.',
          },
          {
            topic: 'Bài 27: Tính xác suất chọn số tự nhiên lập từ tập chữ số (Tương tự Bài 9.8)',
            prompt:
              'Gọi $S$ là tập hợp tất cả các số tự nhiên có $3$ chữ số đôi một khác nhau được lập từ các chữ số $1; 2; 3; 4; 5$. Chọn ngẫu nhiên $1$ số từ $S$. Xác suất để số được chọn là số chẵn bằng:',
            correct: '$\\frac{2}{5}$.',
            wrongs: ['$\\frac{3}{5}$.', '$\\frac{1}{2}$.', '$\\frac{1}{5}$.'],
            explanation:
              'Trong $5$ chữ số $\\{1; 2; 3; 4; 5\\}$ có $2$ chữ số chẵn là $2, 4$. Do vai trò các chữ số bình đẳng ở hàng đơn vị nên xác suất chọn được số chẵn là $\\frac{2}{5}$ (hoặc $\\frac{2 \\cdot 4 \\cdot 3}{5 \\cdot 4 \\cdot 3} = \\frac{24}{60} = \\frac{2}{5}$).',
          },
          {
            topic: 'Bài 27: Tính xác suất bằng sơ đồ hình cây (Tương tự Ví dụ 4)',
            prompt:
              'Một học sinh làm ngẫu nhiên $2$ câu trắc nghiệm khách quan, mỗi câu có $4$ đáp án $A, B, C, D$ trong đó chỉ có $1$ đáp án đúng. Xác suất để học sinh đó trả lời đúng cả $2$ câu là:',
            correct: '$\\frac{1}{16}$.',
            wrongs: ['$\\frac{1}{8}$.', '$\\frac{1}{4}$.', '$\\frac{9}{16}$.'],
            explanation:
              'Không gian mẫu có $4 \\cdot 4 = 16$ bộ đáp án đồng khả năng. Chỉ có duy nhất $1$ bộ đáp án đúng cả $2$ câu, nên $P = \\frac{1}{16}$.',
            tikzCode: tikzCountingTree('\\text{Bài thi}', '\\text{Câu 1 (4)}', '\\text{Câu 2 (4)}', 'n(\\Omega)=16'),
          },
          {
            topic: 'Bài 27: Tính xác suất rút 2 thẻ có tổng chẵn (Tương tự Bài 9.7)',
            prompt:
              'Một hộp có $9$ tấm thẻ được đánh số từ $1$ đến $9$. Rút ngẫu nhiên đồng thời $2$ tấm thẻ. Xác suất để tổng hai số ghi trên hai thẻ là một số chẵn bằng:',
            correct: '$\\frac{4}{9}$.',
            wrongs: ['$\\frac{5}{9}$.', '$\\frac{1}{2}$.', '$\\frac{1}{3}$.'],
            explanation:
              'Từ $1$ đến $9$ có $5$ số lẻ và $4$ số chẵn; $n(\\Omega) = C_9^2 = 36$. Tổng hai số là chẵn khi cả hai cùng lẻ ($C_5^2 = 10$) hoặc cả hai cùng chẵn ($C_4^2 = 6$). Vậy $P = \\frac{10 + 6}{36} = \\frac{16}{36} = \\frac{4}{9}$.',
          },
          {
            topic: 'Bài 27: Tính xác suất rút 2 thẻ có tích chẵn bằng biến cố đối',
            prompt:
              'Một hộp có $8$ tấm thẻ đánh số từ $1$ đến $8$. Lấy ngẫu nhiên đồng thời $2$ tấm thẻ. Xác suất để tích hai số ghi trên hai tấm thẻ là một số chẵn bằng:',
            correct: '$\\frac{11}{14}$.',
            wrongs: ['$\\frac{3}{14}$.', '$\\frac{5}{7}$.', '$\\frac{3}{4}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_8^2 = 28$. Biến cố đối là tích hai số lẻ (cả hai thẻ cùng ghi số lẻ trong $4$ số lẻ $\\{1; 3; 5; 7\\}$), có $C_4^2 = 6$ cách. Vậy $P = 1 - \\frac{6}{28} = \\frac{22}{28} = \\frac{11}{14}$.',
          },
          {
            topic: 'Bài 27: Tính xác suất chọn 2 đỉnh của đa giác đều',
            prompt:
              'Cho một lục giác đều $ABCDEF$ (có $6$ đỉnh phân biệt). Chọn ngẫu nhiên $2$ đỉnh từ $6$ đỉnh của lục giác đều. Xác suất để đoạn thẳng nối $2$ đỉnh được chọn là một cạnh của lục giác đều bằng:',
            correct: '$\\frac{2}{5}$.',
            wrongs: ['$\\frac{3}{5}$.', '$\\frac{1}{3}$.', '$\\frac{1}{5}$.'],
            explanation:
              'Số cách chọn $2$ đỉnh bất kỳ của lục giác đều là $n(\\Omega) = C_6^2 = 15$. Lục giác đều có $6$ cạnh, nên xác suất bằng $\\frac{6}{15} = \\frac{2}{5}$.',
          },
          {
            topic: 'Bài 27: Xác suất trong bài toán kiểm tra chất lượng sản phẩm (Tương tự Bài 9.10)',
            prompt:
              'Một lô hàng có $10$ sản phẩm, trong đó có $8$ sản phẩm tốt và $2$ phế phẩm. Lấy ngẫu nhiên đồng thời $3$ sản phẩm để kiểm tra. Xác suất để cả $3$ sản phẩm lấy ra đều là sản phẩm tốt bằng:',
            correct: '$\\frac{7}{15}$.',
            wrongs: ['$\\frac{8}{15}$.', '$\\frac{1}{2}$.', '$\\frac{7}{10}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_{10}^3 = 120$. Số cách lấy $3$ sản phẩm tốt từ $8$ sản phẩm tốt là $C_8^3 = 56$. Xác suất là $\\frac{56}{120} = \\frac{7}{15}$.',
          },
          {
            topic: 'Bài 27: Ứng dụng xác suất trong bài toán mật khẩu (Tương tự Vận dụng trang 86)',
            prompt:
              'Một khoá số có $3$ vòng số, mỗi vòng có các chữ số từ $0$ đến $9$. Một người quên mật khẩu nên chọn ngẫu nhiên $1$ bộ $3$ chữ số để mở khoá. Xác suất để người đó mở đúng ngay ở lần thử đầu tiên là:',
            correct: '$\\frac{1}{1000}$.',
            wrongs: ['$\\frac{1}{720}$.', '$\\frac{1}{100}$.', '$\\frac{3}{1000}$.'],
            explanation:
              'Tổng số bộ mã số có thể của $3$ vòng là $n(\\Omega) = 10^3 = 1000$. Chỉ có $1$ mã số đúng nên xác suất là $\\frac{1}{1000}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 27: Tính xác suất chọn đại biểu từ tổ học sinh bằng tổ hợp (Tương tự Ví dụ 3 & Bài 9.9)',
            prompt:
              'Một đội học sinh giỏi có $10$ học sinh gồm $6$ học sinh khối 10 và $4$ học sinh khối 11. Nhà trường chọn ngẫu nhiên $3$ học sinh từ đội để trao học bổng đợt 1. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số phần tử của không gian mẫu là $n(\\Omega) = C_{10}^3 = 120$.',
                isCorrect: true,
                explanation: 'Chọn ngẫu nhiên $3$ học sinh từ $10$ học sinh có $C_{10}^3 = 120$ cách.',
              },
              {
                statement: 'Xác suất để cả $3$ học sinh được chọn đều thuộc khối 10 là $\\frac{1}{6}$.',
                isCorrect: true,
                explanation:
                  'Số cách chọn $3$ học sinh từ $6$ học sinh khối 10 là $C_6^3 = 20$. Xác suất là $\\frac{20}{120} = \\frac{1}{6}$.',
              },
              {
                statement: 'Xác suất để trong $3$ học sinh được chọn có ít nhất $1$ học sinh khối 11 là $\\frac{5}{6}$.',
                isCorrect: true,
                explanation:
                  'Biến cố đối là cả $3$ học sinh đều thuộc khối 10 (có xác suất $\\frac{1}{6}$), nên xác suất cần tìm là $1 - \\frac{1}{6} = \\frac{5}{6}$.',
              },
              {
                statement: 'Xác suất để $3$ học sinh được chọn có đủ cả hai khối 10 và 11 cũng bằng $\\frac{5}{6}$.',
                isCorrect: false,
                explanation:
                  'Để có đủ cả hai khối, ta phải loại cả trường hợp toàn khối 10 ($C_6^3 = 20$) và toàn khối 11 ($C_4^3 = 4$), nên xác suất là $1 - \\frac{24}{120} = \\frac{4}{5}$ (không phải $\\frac{5}{6}$).',
              },
            ],
          },
          {
            topic: 'Bài 27: Tính xác suất trong bài toán xếp sách lên kệ bằng hoán vị (Tương tự Ví dụ 2)',
            prompt:
              'Bạn Mai có $4$ quyển sách Toán khác nhau và $3$ quyển sách Ngữ văn khác nhau. Bạn Mai xếp ngẫu nhiên cả $7$ quyển sách này thành một dãy hàng ngang trên kệ sách. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số phần tử của không gian mẫu là $n(\\Omega) = 7! = 5040$.',
                isCorrect: true,
                explanation: 'Xếp $7$ quyển sách khác nhau vào $7$ vị trí có $P_7 = 7! = 5040$ cách.',
              },
              {
                statement: 'Số kết quả thuận lợi cho biến cố $A$: "Ba quyển sách Ngữ văn đứng kề nhau" là $3! \\cdot 5! = 720$.',
                isCorrect: true,
                explanation:
                  'Buộc $3$ quyển Văn thành $1$ khối ($3! = 6$ cách), rồi xếp khối này cùng $4$ quyển Toán ($5$ phần tử) có $5! = 120$ cách $\\Rightarrow 6 \\cdot 120 = 720$.',
              },
              {
                statement: 'Xác suất để $3$ quyển sách Ngữ văn đứng kề nhau là $\\frac{1}{7}$.',
                isCorrect: true,
                explanation: 'Ta có $P(A) = \\frac{3! \\cdot 5!}{7!} = \\frac{6}{7 \\cdot 6} = \\frac{1}{7}$.',
              },
              {
                statement: 'Xác suất để các quyển sách Toán đứng kề nhau và các quyển sách Ngữ văn đứng kề nhau là $\\frac{1}{35}$.',
                isCorrect: false,
                explanation:
                  'Số cách xếp $2$ khối môn học là $2! \\cdot 4! \\cdot 3! = 2 \\cdot 24 \\cdot 6 = 288$. Xác suất là $\\frac{288}{5040} = \\frac{2}{35}$ (không phải $\\frac{1}{35}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 27: Tính xác suất rút 2 quả cầu cùng màu',
            prompt:
              'Một hộp có $3$ quả cầu đỏ và $2$ quả cầu xanh. Lấy ngẫu nhiên đồng thời $2$ quả cầu. Tính xác suất để $2$ quả cầu lấy ra cùng màu (viết kết quả dưới dạng số thập phân).',
            answers: ['0,4', '0.4'],
            explanation:
              'Ta có $n(\\Omega) = C_5^2 = 10$. Số cách lấy $2$ quả cùng màu là $C_3^2 + C_2^2 = 3 + 1 = 4$. Xác suất bằng $\\frac{4}{10} = 0,4$.',
          },
          {
            topic: 'Bài 27: Tính xác suất bằng biến cố đối',
            prompt:
              'Một tổ gồm $3$ bạn nam và $2$ bạn nữ. Chọn ngẫu nhiên $2$ bạn. Tính xác suất để trong $2$ bạn được chọn có ít nhất $1$ bạn nữ (viết kết quả dưới dạng số thập phân).',
            answers: ['0,7', '0.7'],
            explanation:
              'Với $3$ nam và $2$ nữ ($5$ bạn), $n(\\Omega) = C_5^2 = 10$. Biến cố đối là cả $2$ bạn đều là nam có $C_3^2 = 3$ cách. Xác suất có ít nhất $1$ nữ là $1 - \\frac{3}{10} = 0,7$.',
          },
          {
            topic: 'Bài 27: Tính xác suất xếp chỗ ngồi',
            prompt:
              'Xếp ngẫu nhiên $5$ học sinh vào $5$ ghế kê thành hàng ngang. Tính xác suất để bạn lớp trưởng ngồi đúng ở ghế chính giữa (viết dưới dạng số thập phân).',
            answers: ['0,2', '0.2'],
            explanation:
              'Không gian mẫu có $5! = 120$. Lớp trưởng ngồi ghế chính giữa ($1$ cách), $4$ bạn còn lại có $4! = 24$ cách. Xác suất là $\\frac{24}{120} = 0,2$.',
          },
          {
            topic: 'Bài 27: Tính xác suất lập số tự nhiên chia hết cho 5',
            prompt:
              'Từ các chữ số $1; 2; 3; 4; 5$, lập ngẫu nhiên một số tự nhiên gồm $3$ chữ số đôi một khác nhau. Tính xác suất để số lập được chia hết cho $5$ (viết dưới dạng số thập phân).',
            answers: ['0,2', '0.2'],
            explanation:
              'Số các số có $3$ chữ số khác nhau là $n(\\Omega) = A_5^3 = 60$. Để chia hết cho $5$, chữ số tận cùng phải là $5$ ($1$ cách), hai chữ số đầu có $A_4^2 = 12$ cách. Xác suất là $\\frac{12}{60} = 0,2$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 27: Tính xác suất bằng công thức tổ hợp (Tương tự Ví dụ 1)',
            problemStatement:
              'Một hộp đựng $5$ viên bi màu đỏ, $4$ viên bi màu xanh và $3$ viên bi màu vàng (các viên bi khác nhau). Lấy ngẫu nhiên đồng thời $3$ viên bi từ hộp. Tính xác suất của biến cố $A$: "Ba viên bi lấy ra có đủ cả ba màu".',
            conclusionTarget: 'Tính $n(\\Omega) = C_{12}^3$, tính $n(A)$ bằng quy tắc nhân và suy ra $P(A)$.',
            steps: [
              'Tổng số viên bi trong hộp là $5 + 4 + 3 = 12$ viên. Lấy ngẫu nhiên $3$ viên bi có $n(\\Omega) = C_{12}^3 = 220$ (kết quả).',
              'Để $3$ viên bi lấy ra có đủ cả ba màu, ta phải chọn $1$ viên đỏ, $1$ viên xanh và $1$ viên vàng.',
              'Theo quy tắc nhân, số kết quả thuận lợi cho biến cố $A$ là $n(A) = C_5^1 \\cdot C_4^1 \\cdot C_3^1 = 5 \\cdot 4 \\cdot 3 = 60$.',
              'Vậy xác suất của biến cố $A$ là $P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{60}{220} = \\frac{3}{11}$.',
            ],
            analysis:
              'Khi lấy đồng thời $k$ vật từ $n$ vật, không gian mẫu luôn được tính bằng số tổ hợp $C_n^k$.',
          },
          {
            topic: 'Bài 27: Sử dụng biến cố đối để tính xác suất (Tương tự Ví dụ 3 & Bài 9.10)',
            problemStatement:
              'Một hộp có $6$ quả cầu trắng và $4$ quả cầu đỏ. Lấy ngẫu nhiên đồng thời $4$ quả cầu từ hộp. Tính xác suất của biến cố $B$: "Trong $4$ quả cầu lấy ra có ít nhất $1$ quả cầu màu đỏ".',
            conclusionTarget: 'Xác định biến cố đối $\\overline{B}$ ("Cả 4 quả đều màu trắng") và tính $P(B) = 1 - P(\\overline{B})$.',
            steps: [
              'Số cách lấy ngẫu nhiên $4$ quả cầu từ $10$ quả cầu là $n(\\Omega) = C_{10}^4 = 210$.',
              'Xét biến cố đối $\\overline{B}$: "Trong $4$ quả cầu lấy ra không có quả cầu đỏ nào" (tức cả $4$ quả đều màu trắng).',
              'Số cách chọn $4$ quả cầu trắng từ $6$ quả cầu trắng là $n(\\overline{B}) = C_6^4 = 15$.',
              'Do đó $P(\\overline{B}) = \\frac{15}{210} = \\frac{1}{14}$, suy ra $P(B) = 1 - P(\\overline{B}) = 1 - \\frac{1}{14} = \\frac{13}{14}$.',
            ],
            analysis:
              'Nếu tính trực tiếp biến cố $B$, ta phải chia 4 trường hợp (1 đỏ, 2 đỏ, 3 đỏ, 4 đỏ); dùng biến cố đối chỉ cần tính duy nhất 1 trường hợp (0 đỏ).',
          },
          {
            topic: 'Bài 27: Tính xác suất trong bài toán hoán vị xếp chỗ (Tương tự Ví dụ 2)',
            problemStatement:
              'Xếp ngẫu nhiên $3$ bạn nam và $3$ bạn nữ thành một hàng ngang. Tính xác suất của biến cố $C$: "Nam và nữ đứng xen kẽ nhau".',
            conclusionTarget: 'Tính $n(\\Omega) = 6!$, đếm số cách xếp xen kẽ và tính $P(C)$.',
            steps: [
              'Xếp ngẫu nhiên $6$ bạn thành một hàng ngang có $n(\\Omega) = 6! = 720$ (cách).',
              'Để nam và nữ đứng xen kẽ nhau, có $2$ trường hợp về vị trí: (Nam - Nữ - Nam - Nữ - Nam - Nữ) hoặc (Nữ - Nam - Nữ - Nam - Nữ - Nam).',
              'Trong mỗi trường hợp, xếp $3$ nam vào $3$ vị trí có $3!$ cách và xếp $3$ nữ vào $3$ vị trí có $3!$ cách, nên $n(C) = 2 \\cdot 3! \\cdot 3! = 2 \\cdot 6 \\cdot 6 = 72$.',
              'Vậy xác suất của biến cố $C$ là $P(C) = \\frac{72}{720} = \\frac{1}{10}$.',
            ],
            analysis:
              'Khi số nam bằng số nữ, luôn nhớ nhân $2$ vì cả nam lẫn nữ đều có thể đứng ở vị trí đầu hàng.',
          },
          {
            topic: 'Bài 27: Tính xác suất trong bài toán lập số tự nhiên (Tương tự Bài 9.8)',
            problemStatement:
              'Từ các chữ số $0; 1; 2; 3; 4; 5$, lập tất cả các số tự nhiên có $3$ chữ số đôi một khác nhau. Chọn ngẫu nhiên một số trong các số vừa lập được. Tính xác suất để số được chọn chia hết cho $5$.',
            conclusionTarget: 'Đếm tổng số các số có 3 chữ số khác nhau $n(\\Omega)$, đếm các số chia hết cho 5 và tính xác suất.',
            steps: [
              'Số các số tự nhiên có $3$ chữ số đôi một khác nhau $\\overline{abc}$ ($a \\neq 0$) lập từ $6$ chữ số đã cho là $n(\\Omega) = 5 \\cdot 5 \\cdot 4 = 100$.',
              'Gọi $E$ là biến cố "Số được chọn chia hết cho $5$", khi đó $c \\in \\{0; 5\\}$.',
              'Nếu $c = 0$ thì có $5 \\cdot 4 = 20$ số; nếu $c = 5$ thì $a \\notin \\{0; 5\\}$ có $4$ cách, $b$ có $4$ cách nên có $4 \\cdot 4 = 16$ số. Suy ra $n(E) = 20 + 16 = 36$.',
              'Vậy xác suất cần tìm là $P(E) = \\frac{36}{100} = \\frac{9}{25} = 0,36$.',
            ],
            analysis:
              'Kết hợp chặt chẽ kiến thức quy tắc đếm ở Chương VIII với công thức xác suất cổ điển ở Chương IX.',
          },
        ],
      }),
      buildFullLessonExam({
        id: 'de-on-bai-27-2',
        lessonId: 'bai-27',
        title: 'Đề ôn Bài 27 - Đề số 02',
        subtitle: 'Nâng cao thực hành tính xác suất bằng tổ hợp và biến cố đối (SGK Toán 10 Tập 2, trang 83–87)',
        description:
          'Đề ôn tập số 02 của Bài 27 (Thực hành tính xác suất theo định nghĩa cổ điển): Bài toán chia bảng, chọn sản phẩm, hình học phẳng và sơ đồ hình cây xác suất.',
        mcqs: [
          {
            topic: 'Bài 27: Xác suất lấy được 3 quả cầu khác màu hoàn toàn',
            prompt:
              'Một hộp có $3$ quả cầu xanh, $4$ quả cầu đỏ và $5$ quả cầu vàng. Lấy ngẫu nhiên đồng thời $3$ quả cầu. Xác suất để lấy được $3$ quả cầu có đủ $3$ màu khác nhau là:',
            correct: '$\\frac{3}{11}$.',
            wrongs: ['$\\frac{8}{11}$.', '$\\frac{1}{11}$.', '$\\frac{3}{22}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_{12}^3 = 220$. Số cách lấy mỗi màu $1$ quả là $3 \\cdot 4 \\cdot 5 = 60$. Xác suất bằng $\\frac{60}{220} = \\frac{3}{11}$.',
          },
          {
            topic: 'Bài 27: Xác suất lấy được các quả cầu không cùng một màu (biến cố đối)',
            prompt:
              'Một hộp có $4$ viên bi xanh và $5$ viên bi đỏ. Lấy ngẫu nhiên đồng thời $3$ viên bi. Xác suất để $3$ viên bi lấy ra có cả hai màu xanh và đỏ là:',
            correct: '$\\frac{5}{6}$.',
            wrongs: ['$\\frac{1}{6}$.', '$\\frac{2}{3}$.', '$\\frac{5}{7}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_9^3 = 84$. Biến cố đối là $3$ viên bi cùng một màu: cùng xanh ($C_4^3 = 4$) hoặc cùng đỏ ($C_5^3 = 10$), tổng $14$ cách. Vậy $P = 1 - \\frac{14}{84} = \\frac{70}{84} = \\frac{5}{6}$.',
          },
          {
            topic: 'Bài 27: Xác suất chọn 2 số có tổng là số lẻ',
            prompt:
              'Từ các số tự nhiên từ $1$ đến $10$, chọn ngẫu nhiên đồng thời $2$ số. Xác suất để tổng của $2$ số được chọn là một số lẻ bằng:',
            correct: '$\\frac{5}{9}$.',
            wrongs: ['$\\frac{4}{9}$.', '$\\frac{1}{2}$.', '$\\frac{5}{18}$.'],
            explanation:
              'Từ $1$ đến $10$ có $5$ số chẵn và $5$ số lẻ; $n(\\Omega) = C_{10}^2 = 45$. Để tổng là số lẻ thì phải chọn $1$ số chẵn và $1$ số lẻ, có $5 \\cdot 5 = 25$ cách. Xác suất bằng $\\frac{25}{45} = \\frac{5}{9}$.',
          },
          {
            topic: 'Bài 27: Xác suất hai người không đứng cạnh nhau trong hàng ngang',
            prompt:
              'Xếp ngẫu nhiên $5$ học sinh thành một hàng ngang. Xác suất để hai bạn Minh và Lan KHÔNG đứng cạnh nhau là:',
            correct: '$\\frac{3}{5}$.',
            wrongs: ['$\\frac{2}{5}$.', '$\\frac{4}{5}$.', '$\\frac{1}{2}$.'],
            explanation:
              'Ta có $n(\\Omega) = 5! = 120$. Số cách để Minh và Lan đứng cạnh nhau là $2! \\cdot 4! = 48$, xác suất đứng cạnh nhau là $\\frac{48}{120} = \\frac{2}{5}$. Vậy xác suất không đứng cạnh nhau là $1 - \\frac{2}{5} = \\frac{3}{5}$.',
          },
          {
            topic: 'Bài 27: Xác suất gieo đồng xu xuất hiện ít nhất 1 mặt Ngửa',
            prompt:
              'Tung một đồng xu cân đối và đồng chất $4$ lần liên tiếp. Xác suất để mặt Ngửa xuất hiện ít nhất $1$ lần là:',
            correct: '$\\frac{15}{16}$.',
            wrongs: ['$\\frac{1}{16}$.', '$\\frac{3}{4}$.', '$\\frac{7}{8}$.'],
            explanation:
              'Ta có $n(\\Omega) = 2^4 = 16$. Biến cố đối là cả $4$ lần đều ra mặt Sấp ($SSSS$), chỉ có $1$ kết quả. Vậy $P = 1 - \\frac{1}{16} = \\frac{15}{16}$.',
          },
          {
            topic: 'Bài 27: Xác suất rút 3 thẻ có số lớn nhất bằng một số cho trước',
            prompt:
              'Một hộp có $7$ tấm thẻ đánh số từ $1$ đến $7$. Lấy ngẫu nhiên đồng thời $3$ tấm thẻ. Xác suất để cả $3$ tấm thẻ lấy ra đều ghi số nhỏ hơn $6$ là:',
            correct: '$\\frac{2}{7}$.',
            wrongs: ['$\\frac{5}{7}$.', '$\\frac{1}{7}$.', '$\\frac{3}{7}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_7^3 = 35$. Các số nhỏ hơn $6$ là $\\{1; 2; 3; 4; 5\\}$ ($5$ số), chọn $3$ thẻ trong nhóm này có $C_5^3 = 10$ cách. Vậy $P = \\frac{10}{35} = \\frac{2}{7}$.',
          },
          {
            topic: 'Bài 27: Xác suất chọn đỉnh tạo thành đường chéo của đa giác',
            prompt:
              'Cho một bát giác đều (đa giác đều $8$ đỉnh). Chọn ngẫu nhiên $2$ đỉnh của bát giác. Xác suất để đoạn thẳng nối $2$ đỉnh được chọn là một đường chéo của bát giác bằng:',
            correct: '$\\frac{5}{7}$.',
            wrongs: ['$\\frac{2}{7}$.', '$\\frac{3}{4}$.', '$\\frac{5}{8}$.'],
            explanation:
              'Tổng số đoạn thẳng nối $2$ đỉnh là $n(\\Omega) = C_8^2 = 28$. Trong đó có $8$ cạnh, nên có $28 - 8 = 20$ đường chéo. Xác suất là $\\frac{20}{28} = \\frac{5}{7}$.',
          },
          {
            topic: 'Bài 27: Xác suất chọn tất từ ngăn kéo',
            prompt:
              'Trong ngăn kéo có $3$ đôi tất khác màu (gồm $6$ chiếc tất rời). Lấy ngẫu nhiên đồng thời $2$ chiếc tất. Xác suất để $2$ chiếc tất lấy ra tạo thành đúng $1$ đôi cùng màu là:',
            correct: '$\\frac{1}{5}$.',
            wrongs: ['$\\frac{1}{3}$.', '$\\frac{2}{5}$.', '$\\frac{1}{6}$.'],
            explanation:
              'Số cách chọn $2$ chiếc tất từ $6$ chiếc là $n(\\Omega) = C_6^2 = 15$. Chỉ có $3$ cặp tạo thành đúng $1$ đôi cùng màu, nên $P = \\frac{3}{15} = \\frac{1}{5}$.',
          },
          {
            topic: 'Bài 27: Xác suất chọn học sinh trực nhật theo tổ',
            prompt:
              'Một nhóm có $4$ học sinh tổ 1 và $4$ học sinh tổ 2. Chọn ngẫu nhiên $2$ học sinh. Xác suất để $2$ học sinh được chọn thuộc cùng một tổ là:',
            correct: '$\\frac{3}{7}$.',
            wrongs: ['$\\frac{4}{7}$.', '$\\frac{1}{2}$.', '$\\frac{3}{14}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_8^2 = 28$. Số cách chọn $2$ học sinh cùng tổ là $C_4^2 + C_4^2 = 6 + 6 = 12$. Xác suất bằng $\\frac{12}{28} = \\frac{3}{7}$.',
          },
          {
            topic: 'Bài 27: Xác suất gieo một con xúc xắc 2 lần có ít nhất một mặt 6 chấm',
            prompt:
              'Gieo một con xúc xắc cân đối và đồng chất $2$ lần liên tiếp. Xác suất để có ít nhất $1$ lần xuất hiện mặt $6$ chấm là:',
            correct: '$\\frac{11}{36}$.',
            wrongs: ['$\\frac{1}{3}$.', '$\\frac{25}{36}$.', '$\\frac{1}{6}$.'],
            explanation:
              'Ta có $n(\\Omega) = 6 \\cdot 6 = 36$. Biến cố đối là cả $2$ lần đều không ra mặt $6$ chấm (mỗi lần có $5$ cách từ $1$ đến $5$), có $5 \\cdot 5 = 25$ kết quả. Vậy $P = 1 - \\frac{25}{36} = \\frac{11}{36}$.',
          },
          {
            topic: 'Bài 27: Xác suất chọn câu hỏi thi vấn đáp',
            prompt:
              'Bộ đề thi vấn đáp có $10$ câu hỏi, một học sinh đã thuộc $7$ câu. Học sinh đó bốc ngẫu nhiên $2$ câu hỏi. Xác suất để học sinh đó thuộc cả $2$ câu đã bốc là:',
            correct: '$\\frac{7}{15}$.',
            wrongs: ['$\\frac{8}{15}$.', '$\\frac{7}{10}$.', '$\\frac{14}{45}$.'],
            explanation:
              'Ta có $n(\\Omega) = C_{10}^2 = 45$. Số cách bốc $2$ câu trong $7$ câu đã thuộc là $C_7^2 = 21$. Xác suất là $\\frac{21}{45} = \\frac{7}{15}$.',
          },
          {
            topic: 'Bài 27: Xác suất chia hết cho 3 khi rút 3 thẻ',
            prompt:
              'Một hộp có $6$ tấm thẻ ghi các số $1; 2; 3; 4; 5; 6$. Lấy ngẫu nhiên đồng thời $2$ tấm thẻ. Xác suất để tổng hai số trên hai thẻ bằng $7$ là:',
            correct: '$\\frac{1}{5}$.',
            wrongs: ['$\\frac{1}{6}$.', '$\\frac{2}{15}$.', '$\\frac{1}{3}$.'],
            explanation:
              'Số cách chọn $2$ thẻ từ $6$ thẻ là $n(\\Omega) = C_6^2 = 15$. Các bộ $2$ thẻ có tổng bằng $7$ là $\\{1; 6\\}, \\{2; 5\\}, \\{3; 4\\}$ gồm $3$ bộ. Vậy $P = \\frac{3}{15} = \\frac{1}{5}$.',
          },
        ],
        tfs: [
          {
            topic: 'Bài 27: Phân tích xác suất trong bài toán kiểm định lô hàng (Tương tự Bài 9.10)',
            prompt:
              'Một hộp chứa $12$ linh kiện điện tử có hình dạng giống nhau, trong đó có $9$ linh kiện loại I (đạt chuẩn) và $3$ linh kiện loại II (kém phẩm chất). Người kiểm định lấy ngẫu nhiên đồng thời $3$ linh kiện từ hộp để kiểm tra. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Không gian mẫu của phép thử có số phần tử là $n(\\Omega) = C_{12}^3 = 220$.',
                isCorrect: true,
                explanation: 'Chọn đồng thời $3$ linh kiện từ $12$ linh kiện có $C_{12}^3 = 220$ cách.',
              },
              {
                statement: 'Xác suất để cả $3$ linh kiện lấy ra đều là loại I bằng $\\frac{21}{55}$.',
                isCorrect: true,
                explanation:
                  'Số cách chọn $3$ linh kiện loại I từ $9$ linh kiện loại I là $C_9^3 = 84$. Xác suất là $\\frac{84}{220} = \\frac{21}{55}$.',
              },
              {
                statement: 'Xác suất để trong $3$ linh kiện lấy ra có ít nhất $1$ linh kiện loại II bằng $\\frac{34}{55}$.',
                isCorrect: true,
                explanation:
                  'Đây là biến cố đối của biến cố "Cả $3$ linh kiện đều là loại I", nên xác suất bằng $1 - \\frac{21}{55} = \\frac{34}{55}$.',
              },
              {
                statement: 'Xác suất để có đúng $1$ linh kiện loại II trong $3$ linh kiện lấy ra bằng $\\frac{9}{55}$.',
                isCorrect: false,
                explanation:
                  'Số cách chọn $2$ linh kiện loại I và $1$ linh kiện loại II là $C_9^2 \\cdot C_3^1 = 36 \\cdot 3 = 108$. Xác suất là $\\frac{108}{220} = \\frac{27}{55}$ (không phải $\\frac{9}{55}$).',
              },
            ],
          },
          {
            topic: 'Bài 27: Xác suất trong bài toán lập số tự nhiên từ tập chữ số (Tương tự Bài 9.8)',
            prompt:
              'Cho tập hợp $A = \\{1; 2; 3; 4; 5; 6\\}$. Gọi $S$ là tập hợp tất cả các số tự nhiên có $3$ chữ số đôi một khác nhau được lập từ các chữ số của tập $A$. Chọn ngẫu nhiên một số từ tập $S$. Xét tính đúng/sai của các mệnh đề sau:',
            statements: [
              {
                statement: 'Số phần tử của không gian mẫu là $n(\\Omega) = A_6^3 = 120$.',
                isCorrect: true,
                explanation: 'Số các số tự nhiên có $3$ chữ số đôi một khác nhau lập từ $6$ chữ số là $A_6^3 = 6 \\cdot 5 \\cdot 4 = 120$.',
              },
              {
                statement: 'Xác suất để số được chọn là một số lẻ bằng $\\frac{1}{2}$.',
                isCorrect: true,
                explanation: 'Vì tập $A$ có $3$ chữ số lẻ và $3$ chữ số chẵn nên có $60$ số lẻ và $60$ số chẵn, xác suất bằng $\\frac{60}{120} = \\frac{1}{2}$.',
              },
              {
                statement: 'Xác suất để số được chọn luôn có mặt chữ số $1$ bằng $\\frac{1}{2}$.',
                isCorrect: true,
                explanation:
                  'Số các số không chứa chữ số $1$ (lập từ $5$ chữ số còn lại) là $A_5^3 = 60$, nên số các số có mặt chữ số $1$ là $120 - 60 = 60$. Xác suất bằng $\\frac{60}{120} = \\frac{1}{2}$.',
              },
              {
                statement: 'Xác suất để số được chọn có tất cả $3$ chữ số đều là chữ số chẵn bằng $\\frac{1}{10}$.',
                isCorrect: false,
                explanation:
                  'Số các số lập từ $3$ chữ số chẵn $\\{2; 4; 6\\}$ là $3! = 6$ số. Xác suất bằng $\\frac{6}{120} = \\frac{1}{20}$ (không phải $\\frac{1}{10}$).',
              },
            ],
          },
        ],
        sas: [
          {
            topic: 'Bài 27: Tính xác suất chọn 2 học sinh cùng giới tính',
            prompt:
              'Một nhóm gồm $3$ bạn nam và $2$ bạn nữ. Chọn ngẫu nhiên $2$ bạn. Tính xác suất để $2$ bạn được chọn có cùng giới tính (viết kết quả dưới dạng số thập phân).',
            answers: ['0,4', '0.4'],
            explanation:
              'Không gian mẫu có $C_5^2 = 10$. Chọn $2$ bạn cùng giới (cùng nam $C_3^2 = 3$ hoặc cùng nữ $C_2^2 = 1$) có $3 + 1 = 4$ cách. Xác suất là $\\frac{4}{10} = 0,4$.',
          },
          {
            topic: 'Bài 27: Tính xác suất hai người ngồi hai đầu ghế',
            prompt:
              'Xếp ngẫu nhiên $5$ người vào một bàn dài có $5$ chỗ ngồi. Tính xác suất để hai bạn An và Bình ngồi ở hai đầu bàn (viết dưới dạng số thập phân).',
            answers: ['0,1', '0.1'],
            explanation:
              'Không gian mẫu có $5! = 120$. Xếp An và Bình vào hai đầu bàn có $2! = 2$ cách, $3$ người còn lại ở giữa có $3! = 6$ cách $\\Rightarrow 12$ cách. Xác suất là $\\frac{12}{120} = 0,1$.',
          },
          {
            topic: 'Bài 27: Tính xác suất bốc được ít nhất 1 sản phẩm tốt',
            prompt:
              'Một hộp có $4$ bóng đèn tốt và $2$ bóng đèn hỏng. Lấy ngẫu nhiên đồng thời $2$ bóng đèn. Tính xác suất để cả $2$ bóng đèn lấy ra đều là bóng tốt (viết dưới dạng số thập phân).',
            answers: ['0,4', '0.4'],
            explanation:
              'Ta có $n(\\Omega) = C_6^2 = 15$. Số cách lấy $2$ bóng tốt từ $4$ bóng tốt là $C_4^2 = 6$. Xác suất là $\\frac{6}{15} = 0,4$.',
          },
          {
            topic: 'Bài 27: Tính xác suất chọn 3 điểm không thẳng hàng tạo tam giác',
            prompt:
              'Cho $5$ điểm phân biệt trong đó có đúng $3$ điểm thẳng hàng. Chọn ngẫu nhiên $3$ điểm trong $5$ điểm đó. Tính xác suất để $3$ điểm được chọn là $3$ đỉnh của một tam giác (viết dưới dạng số thập phân).',
            answers: ['0,9', '0.9'],
            explanation:
              'Số cách chọn $3$ điểm từ $5$ điểm là $n(\\Omega) = C_5^3 = 10$. Chỉ có $1$ bộ $3$ điểm thẳng hàng không tạo thành tam giác, nên có $10 - 1 = 9$ bộ tạo thành tam giác. Xác suất là $\\frac{9}{10} = 0,9$.',
          },
        ],
        steps: [
          {
            topic: 'Bài 27: Giải bài toán xác suất chọn ban đại diện có đủ nam và nữ (Tương tự Bài 9.9)',
            problemStatement:
              'Một ban chấp hành đoàn có $5$ bạn nam và $4$ bạn nữ. Chọn ngẫu nhiên $3$ bạn đi dự hội nghị. Tính xác suất của biến cố $E$: "Trong $3$ bạn được chọn có cả nam và nữ".',
            conclusionTarget: 'Tính $n(\\Omega) = C_9^3$, xét biến cố đối $\\overline{E}$ ("Cả 3 bạn cùng giới tính") và tính $P(E)$.',
            steps: [
              'Số cách chọn ngẫu nhiên $3$ bạn từ $9$ bạn là $n(\\Omega) = C_9^3 = 84$.',
              'Xét biến cố đối $\\overline{E}$: "Ba bạn được chọn có cùng giới tính" (tức cả $3$ đều là nam hoặc cả $3$ đều là nữ).',
              'Số kết quả thuận lợi cho $\\overline{E}$ là $n(\\overline{E}) = C_5^3 + C_4^3 = 10 + 4 = 14$.',
              'Suy ra $P(\\overline{E}) = \\frac{14}{84} = \\frac{1}{6}$, do đó xác suất cần tìm là $P(E) = 1 - \\frac{1}{6} = \\frac{5}{6}$.',
            ],
            analysis:
              'Có thể tính trực tiếp $n(E) = C_5^2 C_4^1 + C_5^1 C_4^2 = 40 + 30 = 70 \\Rightarrow P(E) = \\frac{70}{84} = \\frac{5}{6}$, hai cách cho cùng kết quả.',
          },
          {
            topic: 'Bài 27: Tính xác suất rút thẻ có tích chia hết cho 3',
            problemStatement:
              'Một hộp có $10$ tấm thẻ được đánh số từ $1$ đến $10$. Lấy ngẫu nhiên đồng thời $2$ tấm thẻ. Tính xác suất của biến cố $M$: "Tích hai số ghi trên hai tấm thẻ lấy ra là một số chia hết cho $3$".',
            conclusionTarget: 'Sử dụng biến cố đối $\\overline{M}$ ("Không có thẻ nào ghi số chia hết cho 3") để tính $P(M)$.',
            steps: [
              'Số cách lấy ngẫu nhiên $2$ tấm thẻ từ $10$ tấm thẻ là $n(\\Omega) = C_{10}^2 = 45$.',
              'Vì $3$ là số nguyên tố nên tích hai số tự nhiên KHÔNG chia hết cho $3$ khi và chỉ khi cả hai số đều không chia hết cho $3$.',
              'Trong các số từ $1$ đến $10$, có $3$ số chia hết cho $3$ là $\\{3; 6; 9\\}$ và $7$ số không chia hết cho $3$, nên $n(\\overline{M}) = C_7^2 = 21$.',
              'Vậy $P(\\overline{M}) = \\frac{21}{45} = \\frac{7}{15}$, suy ra xác suất cần tìm là $P(M) = 1 - \\frac{7}{15} = \\frac{8}{15}$.',
            ],
            analysis:
              'Tính chất số học: với $p$ nguyên tố, tích $a \\cdot b \\vdots p \\Leftrightarrow$ ít nhất một trong hai thừa số chia hết cho $p$.',
          },
          {
            topic: 'Bài 27: Tính xác suất trong bài toán xếp sách có điều kiện không kề nhau',
            problemStatement:
              'Xếp ngẫu nhiên $5$ cuốn sách Toán khác nhau và $2$ cuốn sách Vật lí khác nhau lên một kệ sách dài. Tính xác suất để $2$ cuốn sách Vật lí KHÔNG đứng kề nhau.',
            conclusionTarget: 'Tính xác suất $2$ cuốn Vật lí đứng kề nhau rồi lấy phần bù.',
            steps: [
              'Xếp ngẫu nhiên $7$ cuốn sách lên kệ có $n(\\Omega) = 7! = 5040$ (cách).',
              'Gọi $A$ là biến cố "Hai cuốn sách Vật lí KHÔNG đứng kề nhau", khi đó $\\overline{A}$ là biến cố "Hai cuốn sách Vật lí đứng kề nhau".',
              'Buộc $2$ cuốn Vật lí thành một nhóm kép ($2!$ cách) rồi xếp cùng $5$ cuốn Toán ($6$ phần tử) có $n(\\overline{A}) = 2! \\cdot 6! = 1440$ (cách).',
              'Suy ra $P(\\overline{A}) = \\frac{2! \\cdot 6!}{7!} = \\frac{2}{7}$, do đó xác suất cần tìm là $P(A) = 1 - \\frac{2}{7} = \\frac{5}{7}$.',
            ],
            analysis:
              'Rút gọn trực tiếp bằng giai thừa $\\frac{2! \\cdot 6!}{7!} = \\frac{2}{7}$ giúp tính toán nhẩm nhanh mà không cần nhân hết $7! = 5040$.',
          },
          {
            topic: 'Bài 27: Tính xác suất bằng sơ đồ hình cây trong phép thử nhiều giai đoạn (Tương tự Ví dụ 4)',
            problemStatement:
              'Có hai hộp đựng bi: Hộp I có $3$ bi đỏ và $2$ bi xanh; Hộp II có $2$ bi đỏ và $4$ bi xanh. Lấy ngẫu nhiên $1$ viên bi từ Hộp I và $1$ viên bi từ Hộp II. Tính xác suất để $2$ viên bi lấy ra có cùng màu.',
            conclusionTarget: 'Tính $n(\\Omega) = 5 \\cdot 6 = 30$, chia 2 trường hợp (cùng đỏ hoặc cùng xanh) và tính xác suất.',
            steps: [
              'Hộp I có $5$ viên bi, Hộp II có $6$ viên bi. Lấy từ mỗi hộp $1$ viên bi có $n(\\Omega) = 5 \\cdot 6 = 30$ kết quả đồng khả năng.',
              'Gọi $E$ là biến cố "Hai viên bi lấy ra cùng màu", gồm hai trường hợp độc lập: cả hai cùng đỏ hoặc cả hai cùng xanh.',
              'Số cách lấy $2$ viên cùng đỏ là $3 \\cdot 2 = 6$ cách; số cách lấy $2$ viên cùng xanh là $2 \\cdot 4 = 8$ cách $\\Rightarrow n(E) = 6 + 8 = 14$.',
              'Vậy xác suất để hai viên bi lấy ra cùng màu là $P(E) = \\frac{14}{30} = \\frac{7}{15}$.',
            ],
            analysis:
              'Phân tích hai giai đoạn lấy bi từ hai hộp độc lập theo quy tắc nhân và cộng hai trường hợp cùng màu.',
          },
        ],
      }),
    ],
  },
];
