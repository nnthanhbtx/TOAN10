import { LessonCatalogItem } from '../../types/exam';

export const chapter1Lessons: LessonCatalogItem[] = [
  {
    id: 'bai-1',
    lessonNumber: 1,
    name: 'Bài 1',
    topicTitle: 'Mệnh đề',
    chapter: 'Chương I: Mệnh đề và Tập hợp',
    keySummary:
      'Nhận biết mệnh đề, mệnh đề chứa biến; lập mệnh đề phủ định $\\overline{P}$; mệnh đề kéo theo $P \\Rightarrow Q$ (giả thiết, kết luận, điều kiện cần, điều kiện đủ); mệnh đề đảo $Q \\Rightarrow P$, mệnh đề tương đương $P \\Leftrightarrow Q$ và mệnh đề chứa ký hiệu $\\forall, \\exists$.',
    practiceExams: [
      {
        id: 'de-on-bai-1-1',
        lessonId: 'bai-1',
        title: 'Đề ôn Bài 1 - Đề số 01',
        subtitle: 'Bám sát Ví dụ & Bài tập Bài 1: Mệnh đề (SBT Kết nối tri thức Toán 10, trang 5–7)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 01 của Bài 1 (Mệnh đề) được biên soạn bám sát yêu cầu cần đạt và hệ thống Ví dụ 1–3, Bài tập 1.1–1.8 trong sách Bài tập Toán 10 Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b1_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 1: Nhận biết mệnh đề (Tương tự Ví dụ 1)',
            prompt: 'Trong các câu sau, câu nào là một mệnh đề toán học?',
            options: [
              { key: 'A', content: 'Hôm nay trời đẹp quá!' },
              { key: 'B', content: '$3x + 2 = 5$.' },
              { key: 'C', content: 'Hình vuông có hai đường chéo vuông góc với nhau.' },
              { key: 'D', content: 'Số $123$ là số nguyên tố phải không?' },
            ],
            correctAnswer: 'C',
            explanation:
              'Câu "Hình vuông có hai đường chéo vuông góc với nhau" là một khẳng định đúng nên là mệnh đề. Câu A là câu cảm thán, câu D là câu hỏi, câu B là mệnh đề chứa biến.',
            pedagogicalTip:
              'Câu cảm thán, câu nghi vấn và mệnh đề chứa biến (chưa gán giá trị cụ thể cho $x$) không phải là mệnh đề.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 1: Mệnh đề chứa biến (Tương tự Ví dụ 1e)',
            prompt: 'Trong các câu sau, câu nào là mệnh đề chứa biến?',
            options: [
              { key: 'A', content: 'Năm $2022$ không phải là năm nhuận.' },
              { key: 'B', content: '$2x - 7 > 1$.' },
              { key: 'C', content: '$4 > 6 \\cdot 5$.' },
              { key: 'D', content: '$\\sqrt{2}$ là số vô tỉ.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Câu "$2x - 7 > 1$" chứa biến $x$; tính đúng sai của nó phụ thuộc vào giá trị thực của $x$ nên là mệnh đề chứa biến.',
            pedagogicalTip:
              'Mệnh đề chứa biến chỉ trở thành mệnh đề khi ta thay biến bằng một giá trị cụ thể.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 1: Mệnh đề phủ định (Tương tự Ví dụ 2 & Bài 1.2)',
            prompt: 'Cho mệnh đề $P$: "$\\sqrt{2}$ là số hữu tỉ". Mệnh đề phủ định $\\overline{P}$ của mệnh đề $P$ là:',
            options: [
              { key: 'A', content: '"$\\sqrt{2}$ là số tự nhiên".' },
              { key: 'B', content: '"$\\sqrt{2}$ không phải là số hữu tỉ".' },
              { key: 'C', content: '"$\\sqrt{2}$ là số nguyên dương".' },
              { key: 'D', content: '"$\\sqrt{2} > 0$".' },
            ],
            correctAnswer: 'B',
            explanation:
              'Để lập mệnh đề phủ định của mệnh đề $P$, ta thêm cụm từ "không phải" vào trước vị ngữ: "$\\sqrt{2}$ không phải là số hữu tỉ" (hoặc "$\\sqrt{2}$ là số vô tỉ").',
            pedagogicalTip:
              'Trên tập số thực $\\mathbb{R}$, không phải số hữu tỉ thì chính là số vô tỉ.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 1: Tính đúng sai của mệnh đề (Tương tự Bài 1.1)',
            prompt: 'Trong các mệnh đề sau, mệnh đề nào là mệnh đề ĐÚNG?',
            options: [
              { key: 'A', content: 'Các số nguyên tố đều là số lẻ.' },
              { key: 'B', content: 'Phương trình $x^2 + 1 = 0$ có hai nghiệm nguyên phân biệt.' },
              { key: 'C', content: 'Mọi số nguyên lẻ đều không chia hết cho $2$.' },
              { key: 'D', content: 'Số $106$ là một số nguyên tố.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Mọi số nguyên lẻ có dạng $2k + 1$ ($k \\in \\mathbb{Z}$) nên đều không chia hết cho $2$ (mệnh đề C đúng). Mệnh đề A sai vì số $2$ là số nguyên tố chẵn; B sai vì $x^2 + 1 = 0$ vô nghiệm thực; D sai vì $106 \\vdots 2$ nên $106$ là hợp số.',
            pedagogicalTip:
              'Khi chứng minh một mệnh đề với mọi là sai, chỉ cần chỉ ra một phản ví dụ (như số nguyên tố $2$ là số chẵn).',
            points: 0.5,
          },
          {
            id: 'b1_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 1: Mệnh đề kéo theo và điều kiện cần (Tương tự Bài 1.4)',
            prompt:
              'Cho định lí: "Nếu hai góc đối đỉnh thì chúng bằng nhau". Phát biểu nào sau đây diễn đạt đúng định lí trên dưới dạng "điều kiện cần"?',
            options: [
              { key: 'A', content: 'Hai góc đối đỉnh là điều kiện cần để hai góc đó bằng nhau.' },
              { key: 'B', content: 'Hai góc bằng nhau là điều kiện cần để hai góc đó đối đỉnh.' },
              { key: 'C', content: 'Hai góc bằng nhau là điều kiện đủ để hai góc đó đối đỉnh.' },
              { key: 'D', content: 'Hai góc đối đỉnh là điều kiện cần và đủ để hai góc đó bằng nhau.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Trong mệnh đề đúng $P \\Rightarrow Q$ ($P$: "Hai góc đối đỉnh", $Q$: "Hai góc bằng nhau"), $P$ là điều kiện đủ để có $Q$, còn $Q$ là điều kiện cần để có $P$. Vậy "Hai góc bằng nhau là điều kiện cần để hai góc đó đối đỉnh".',
            pedagogicalTip:
              'Ghi nhớ quy tắc: Trong định lí $P \\Rightarrow Q$, giả thiết $P$ là điều kiện ĐỦ, kết luận $Q$ là điều kiện CẦN.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 1: Phủ định mệnh đề có lượng từ (Tương tự Bài 1.7 & 1.32)',
            prompt:
              'Mệnh đề phủ định của mệnh đề $P$: "$\\exists x \\in \\mathbb{R},\\ x^4 < x^2$" là:',
            options: [
              { key: 'A', content: '$\\overline{P}$: "$\\forall x \\in \\mathbb{R},\\ x^4 \\ge x^2$".' },
              { key: 'B', content: '$\\overline{P}$: "$\\forall x \\in \\mathbb{R},\\ x^4 > x^2$".' },
              { key: 'C', content: '$\\overline{P}$: "$\\exists x \\in \\mathbb{R},\\ x^4 \\ge x^2$".' },
              { key: 'D', content: '$\\overline{P}$: "$\\forall x \\in \\mathbb{R},\\ x^4 \\le x^2$".' },
            ],
            correctAnswer: 'A',
            explanation:
              'Phủ định của lượng từ $\\exists$ là $\\forall$, phủ định của tính chất $x^4 < x^2$ là $x^4 \\ge x^2$. Vậy $\\overline{P}$: "$\\forall x \\in \\mathbb{R},\\ x^4 \\ge x^2$".',
            pedagogicalTip:
              'Đổi $\\exists \\leftrightarrow \\forall$ và đổi dấu $< \\leftrightarrow \\ge$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b1_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 1: Mệnh đề kéo theo, mệnh đề đảo và tương đương (Tương tự Bài 1.3, 1.5, 1.6)',
            prompt:
              'Cho các mệnh đề toán học liên quan đến số thực $x, y$ và số tự nhiên $n$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement:
                  'Mệnh đề đảo của mệnh đề "Nếu số tự nhiên $n$ có tổng các chữ số bằng $6$ thì $n$ chia hết cho $3$" là một mệnh đề đúng.',
                isCorrect: false,
                explanation:
                  'Mệnh đề đảo là: "Nếu số tự nhiên $n$ chia hết cho $3$ thì $n$ có tổng các chữ số bằng $6$". Mệnh đề này SAI vì $n = 9$ chia hết cho $3$ nhưng tổng chữ số bằng $9 \\ne 6$.',
              },
              {
                id: 'b',
                label: 'b',
                statement:
                  'Mệnh đề đảo của mệnh đề "Nếu $x > y$ thì $x^3 > y^3$" là một mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Mệnh đề đảo là: "Nếu $x^3 > y^3$ thì $x > y$". Vì hàm bậc ba đồng biến trên $\\mathbb{R}$ nên với mọi số thực $x, y$, $x^3 > y^3 \\Leftrightarrow x > y$. Do đó mệnh đề đảo là ĐÚNG.',
              },
              {
                id: 'c',
                label: 'c',
                statement:
                  'Với hai số thực $x, y$, mệnh đề tương đương "$x^2 + y^2 = 0 \\Leftrightarrow x = 0$ và $y = 0$" là mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Vì $x^2 \\ge 0$ và $y^2 \\ge 0$ với mọi $x, y \\in \\mathbb{R}$ nên $x^2 + y^2 = 0 \\Leftrightarrow x = 0$ và $y = 0$. Cả hai chiều suy luận đều đúng.',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Với số thực $x$, mệnh đề tương đương "$x^2 > 0 \\Leftrightarrow x > 0$" là mệnh đề đúng.',
                isCorrect: false,
                explanation:
                  'Mệnh đề này SAI vì khi $x = -2$, ta có $x^2 = 4 > 0$ nhưng $x = -2 < 0$ (chiều suy ra từ $x^2 > 0$ sang $x > 0$ bị sai).',
              },
            ],
            pedagogicalTip:
              'Mệnh đề tương đương $P \\Leftrightarrow Q$ chỉ đúng khi cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ cùng đúng.',
          },
          {
            id: 'b1_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 1: Mệnh đề chứa ký hiệu với mọi, tồn tại (Tương tự Bài 1.7, 1.8, 1.33)',
            prompt:
              'Xét tính đúng sai của các khẳng định sau về mệnh đề chứa lượng từ $\\forall, \\exists$:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement:
                  'Mệnh đề "$\\exists x \\in \\mathbb{R},\\ x^4 < x^2$" là một mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Chọn $x = \\frac{1}{2} \\in \\mathbb{R}$, ta có $x^4 = \\frac{1}{16} < \\frac{1}{4} = x^2$. Vậy mệnh đề tồn tại này là ĐÚNG.',
              },
              {
                id: 'b',
                label: 'b',
                statement:
                  'Mệnh đề "Bình phương của mọi số thực đều lớn hơn $0$" (tức là $\\forall x \\in \\mathbb{R},\\ x^2 > 0$) là mệnh đề đúng.',
                isCorrect: false,
                explanation:
                  'Mệnh đề này SAI vì tại $x = 0 \\in \\mathbb{R}$ thì $x^2 = 0$ (không lớn hơn $0$).',
              },
              {
                id: 'c',
                label: 'c',
                statement:
                  'Phủ định của mệnh đề "Mọi số tự nhiên có chữ số tận cùng bằng $0$ đều chia hết cho $10$" là "Có ít nhất một số tự nhiên có chữ số tận cùng bằng $0$ không chia hết cho $10$".',
                isCorrect: true,
                explanation:
                  'Phủ định của "Mọi ... đều có tính chất P" là "Có ít nhất một (tồn tại) ... không có tính chất P".',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Với mọi số thực $x$, mệnh đề kéo theo "Nếu $x < -2$ thì $x^2 > 4$" là mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Khi $x < -2 < 0$ thì $|x| > 2 \\Rightarrow x^2 = |x|^2 > 4$. Do đó mệnh đề đã cho là ĐÚNG.',
              },
            ],
            pedagogicalTip:
              'Chú ý trường hợp đặc biệt $x = 0$ hoặc $x \\in (0; 1)$ khi xét lũy thừa của số thực.',
          },
        ],
        part3: [
          {
            id: 'b1_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 1: Đếm số mệnh đề đúng (Tương tự Bài 1.1 & 1.33)',
            prompt:
              'Cho $4$ mệnh đề sau:\n(1) Số $2$ là số nguyên tố chẵn duy nhất.\n(2) $\\forall x \\in \\mathbb{R},\\ x^2 \\ge 0$.\n(3) Phương trình $x^2 - 3x + 2 = 0$ vô nghiệm.\n(4) Mọi số tự nhiên có chữ số tận cùng bằng $0$ đều chia hết cho $10$.\nCó bao nhiêu mệnh đề ĐÚNG trong $4$ mệnh đề trên?',
            acceptableAnswers: ['3'],
            explanation:
              'Các mệnh đề (1), (2), (4) là các mệnh đề đúng. Mệnh đề (3) sai vì phương trình $x^2 - 3x + 2 = 0$ có hai nghiệm $x = 1; x = 2$. Vậy có $3$ mệnh đề đúng.',
            pedagogicalTip: 'Kiểm tra cẩn thận tính đúng/sai của từng phát biểu độc lập.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 1: Tìm giá trị biến để mệnh đề chứa biến đúng',
            prompt:
              'Cho mệnh đề chứa biến $P(n)$: "$n^2 - 4n + 3 = 0$" với $n$ là số nguyên dương. Tổng tất cả các giá trị của $n$ để $P(n)$ là một mệnh đề đúng bằng bao nhiêu?',
            acceptableAnswers: ['4'],
            explanation:
              'Giải phương trình $n^2 - 4n + 3 = 0 \\Leftrightarrow n = 1$ hoặc $n = 3$ (đều là số nguyên dương). Tổng các giá trị của $n$ là $1 + 3 = 4$.',
            pedagogicalTip: 'Mệnh đề $P(n)$ đúng khi và chỉ khi $n$ là nghiệm của phương trình.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 1: Phản ví dụ của mệnh đề với mọi',
            prompt:
              'Cho mệnh đề sai $M$: "Với mọi số nguyên tố $p$, số $p$ đều là số lẻ". Hãy tìm giá trị số nguyên tố $p$ là phản ví dụ chứng tỏ mệnh đề $M$ sai.',
            acceptableAnswers: ['2'],
            explanation:
              'Số $p = 2$ là số nguyên tố nhưng là số chẵn, nên $p = 2$ là phản ví dụ duy nhất.',
            pedagogicalTip: '$2$ là số nguyên tố nhỏ nhất và cũng là số nguyên tố chẵn duy nhất.',
            points: 0.5,
          },
          {
            id: 'b1_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 1: Mệnh đề chứa biến với số nguyên',
            prompt:
              'Có bao nhiêu số nguyên $x$ thuộc đoạn $[-3; 3]$ để mệnh đề chứa biến $Q(x)$: "$x^2 < 5$" là một mệnh đề đúng?',
            acceptableAnswers: ['5'],
            explanation:
              'Ta có $x^2 < 5 \\Leftrightarrow -\\sqrt{5} < x < \\sqrt{5} \\approx 2,236$. Vì $x \\in \\mathbb{Z}$ nên $x \\in \\{-2; -1; 0; 1; 2\\}$. Có tất cả $5$ giá trị nguyên của $x$.',
            pedagogicalTip: 'Đừng quên tính cả số $0$ và các số nguyên âm.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b1_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 1: Chứng minh mệnh đề tương đương (Tương tự Bài 1.6a trang 7 & 85)',
            problemStatement:
              'Cho hai mệnh đề $P$: "$x^2 + y^2 = 0$" và $Q$: "$x = 0$ và $y = 0$" (với $x, y$ là hai số thực).',
            conclusionTarget:
              'Hãy sắp xếp các bước lập luận sau theo đúng thứ tự để chứng minh mệnh đề tương đương $P \\Leftrightarrow Q$ là đúng.',
            steps: [
              {
                id: 'b1_d1_s1',
                originalIndex: 1,
                content:
                  'Trước hết, ta xét mệnh đề chiều thuận $P \\Rightarrow Q$: Giả sử có $x^2 + y^2 = 0$.',
                roleDescription: 'Xét mệnh đề kéo theo P => Q',
              },
              {
                id: 'b1_d1_s2',
                originalIndex: 2,
                content:
                  'Vì $x^2 \\ge 0$ và $y^2 \\ge 0$ với mọi $x, y \\in \\mathbb{R}$, nên từ $x^2 + y^2 = 0$ suy ra $x^2 = 0$ và $y^2 = 0$, tức là $x = 0$ và $y = 0$. Vậy $P \\Rightarrow Q$ đúng.',
                roleDescription: 'Chứng minh P => Q đúng',
              },
              {
                id: 'b1_d1_s3',
                originalIndex: 3,
                content:
                  'Tiếp theo, xét mệnh đề đảo $Q \\Rightarrow P$: Nếu $x = 0$ và $y = 0$ thì hiển nhiên $x^2 + y^2 = 0^2 + 0^2 = 0$. Vậy $Q \\Rightarrow P$ cũng đúng.',
                roleDescription: 'Chứng minh mệnh đề đảo Q => P đúng',
              },
              {
                id: 'b1_d1_s4',
                originalIndex: 4,
                content:
                  'Vì cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng nên mệnh đề tương đương $P \\Leftrightarrow Q$ là mệnh đề đúng.',
                roleDescription: 'Kết luận mệnh đề tương đương đúng',
              },
            ],
            pedagogicalTip:
              'Để chứng minh $P \\Leftrightarrow Q$ đúng, ta lần lượt kiểm tra tính đúng của $P \\Rightarrow Q$ và $Q \\Rightarrow P$.',
            teacherAnalysis:
              'Bài toán rèn luyện quy trình lập luận chặt chẽ hai chiều khi xét mệnh đề tương đương trong Bài 1.',
            points: 3.0,
          },
        ],
      },
      {
        id: 'de-on-bai-1-2',
        lessonId: 'bai-1',
        title: 'Đề ôn Bài 1 - Đề số 02',
        subtitle: 'Nâng cao & Vận dụng Bài 1: Mệnh đề (SBT Kết nối tri thức Toán 10)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 02 của Bài 1 (Mệnh đề) tập trung vào các câu hỏi trắc nghiệm và tự luận cuối Chương I (Bài 1.16, 1.18, 1.19, 1.28–1.33 SBT Toán 10).',
        part1: [
          {
            id: 'b1_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 1: Nhận diện mệnh đề (Bài 1.16 SBT trang 12)',
            prompt: 'Trong các câu sau, câu nào là một mệnh đề?',
            options: [
              { key: 'A', content: '$6 + x = 4x^2$.' },
              { key: 'B', content: '$a < 2$.' },
              { key: 'C', content: '$123$ là số nguyên tố phải không?' },
              { key: 'D', content: 'Bắc Giang là tỉnh thuộc miền Nam Việt Nam.' },
            ],
            correctAnswer: 'D',
            explanation:
              'Câu "Bắc Giang là tỉnh thuộc miền Nam Việt Nam" là một câu khẳng định có tính chất sai rõ ràng nên là một mệnh đề (mệnh đề sai). Câu A, B là mệnh đề chứa biến; câu C là câu nghi vấn.',
            pedagogicalTip:
              'Một khẳng định dù SAI vẫn là một mệnh đề toán học nếu nó không mơ hồ.',
            points: 0.5,
          },
          {
            id: 'b1_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 1: Mệnh đề phủ định (Bài 1.18 SBT trang 12)',
            prompt: 'Phủ định của mệnh đề "$5 + 8 = 13$" là mệnh đề nào sau đây?',
            options: [
              { key: 'A', content: '$5 + 8 < 13$.' },
              { key: 'B', content: '$5 + 8 \\ge 13$.' },
              { key: 'C', content: '$5 + 8 > 13$.' },
              { key: 'D', content: '$5 + 8 \\ne 13$.' },
            ],
            correctAnswer: 'D',
            explanation: 'Phủ định của quan hệ bằng ($=$) là quan hệ khác ($\\ne$). Vậy phủ định là "$5 + 8 \\ne 13$".',
            pedagogicalTip: 'Phủ định của $A = B$ là $A \\ne B$.',
            points: 0.5,
          },
          {
            id: 'b1_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 1: Mệnh đề kéo theo (Bài 1.19 SBT trang 12)',
            prompt: 'Mệnh đề nào sau đây là mệnh đề ĐÚNG?',
            options: [
              { key: 'A', content: 'Nếu $a$ là số tự nhiên thì $a$ là số hữu tỉ không âm.' },
              { key: 'B', content: 'Nếu $a$ là số hữu tỉ không âm thì $a$ là số tự nhiên.' },
              { key: 'C', content: 'Nếu $a$ là số hữu tỉ dương thì $a$ là số tự nhiên.' },
              { key: 'D', content: 'Nếu $a$ không là số tự nhiên thì $a$ không phải là số hữu tỉ không âm.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $\\mathbb{N} \\subset \\mathbb{Q}$ và mọi số tự nhiên $a \\in \\mathbb{N}$ đều thỏa mãn $a \\ge 0$ nên $a$ là số hữu tỉ không âm (A đúng). B và C sai (ví dụ $a = \\frac{1}{2}$).',
            pedagogicalTip: 'Mọi số tự nhiên $n$ đều viết được dưới dạng phân số $\\frac{n}{1} \\ge 0$.',
            points: 0.5,
          },
          {
            id: 'b1_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 1: Mệnh đề tương đương trong hình học (Bài 1.28 SBT trang 13)',
            prompt: 'Trong các mệnh đề sau, mệnh đề nào SAI?',
            options: [
              { key: 'A', content: 'Tam giác $ABC$ là tam giác đều $\\Leftrightarrow$ Tam giác $ABC$ cân.' },
              { key: 'B', content: 'Tam giác $ABC$ là tam giác đều $\\Leftrightarrow$ Tam giác $ABC$ có ba góc bằng $60^\\circ$.' },
              { key: 'C', content: 'Tam giác $ABC$ là tam giác đều $\\Leftrightarrow$ Tam giác $ABC$ có ba cạnh bằng nhau.' },
              { key: 'D', content: 'Tam giác $ABC$ là tam giác đều $\\Leftrightarrow$ Tam giác $ABC$ cân và có một góc $60^\\circ$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tam giác cân chưa chắc là tam giác đều (chiều $\\Leftarrow$ sai), nên mệnh đề tương đương ở đáp án A là mệnh đề SAI.',
            pedagogicalTip: 'Tam giác đều thì cân, nhưng tam giác cân cần thêm điều kiện có một góc $60^\\circ$ mới là tam giác đều.',
            points: 0.5,
          },
          {
            id: 'b1_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 1: Phát biểu mệnh đề tồn tại (Bài 1.30 SBT trang 13)',
            prompt: 'Mệnh đề "$\\exists x \\in \\mathbb{R},\\ x^2 = 15$" được phát biểu bằng lời là:',
            options: [
              { key: 'A', content: 'Bình phương của mỗi số thực bằng $15$.' },
              { key: 'B', content: 'Có ít nhất một số thực mà bình phương của nó bằng $15$.' },
              { key: 'C', content: 'Chỉ có một số thực mà bình phương của nó bằng $15$.' },
              { key: 'D', content: 'Nếu $x$ là một số thực thì $x^2 = 15$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Ký hiệu $\\exists x \\in \\mathbb{R}$ đọc là "Tồn tại (hoặc có ít nhất một) số thực $x$". Do đó đáp án đúng là B.',
            pedagogicalTip: 'Ký hiệu $\\exists$ có nghĩa là "tồn tại ít nhất một", không phải là "chỉ có duy nhất một".',
            points: 0.5,
          },
          {
            id: 'b1_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 1: Phủ định mệnh đề với mọi (Bài 1.32 SBT trang 14)',
            prompt:
              'Mệnh đề phủ định của mệnh đề "$x^2 + 3x + 1 > 0$ với mọi $x \\in \\mathbb{R}$" là:',
            options: [
              { key: 'A', content: 'Tồn tại $x \\in \\mathbb{R}$ sao cho $x^2 + 3x + 1 > 0$.' },
              { key: 'B', content: 'Tồn tại $x \\in \\mathbb{R}$ sao cho $x^2 + 3x + 1 \\le 0$.' },
              { key: 'C', content: 'Tồn tại $x \\in \\mathbb{R}$ sao cho $x^2 + 3x + 1 = 0$.' },
              { key: 'D', content: 'Tồn tại $x \\in \\mathbb{R}$ sao cho $x^2 + 3x + 1 < 0$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Phủ định của "với mọi" là "tồn tại", phủ định của "$> 0$" là "$\\le 0$". Vậy mệnh đề phủ định là: "Tồn tại $x \\in \\mathbb{R}$ sao cho $x^2 + 3x + 1 \\le 0$".',
            pedagogicalTip: 'Phủ định của dấu $>$ là dấu $\\le$ (bao gồm cả dấu $=$).',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b1_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 1: Mệnh đề hình học & số học (Tương tự Bài 1.3 & 1.29)',
            prompt:
              'Cho hai mệnh đề $P$: "Tứ giác $ABCD$ là hình bình hành" và $Q$: "Tứ giác $ABCD$ có $AB \\parallel CD$ và $AB = CD$". Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement:
                  'Mệnh đề kéo theo $P \\Rightarrow Q$ là một mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Theo tính chất hình bình hành, nếu $ABCD$ là hình bình hành thì hai cạnh đối $AB$ và $CD$ song song và bằng nhau.',
              },
              {
                id: 'b',
                label: 'b',
                statement:
                  'Mệnh đề đảo $Q \\Rightarrow P$ là một mệnh đề sai.',
                isCorrect: false,
                explanation:
                  'Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau ($AB \\parallel CD$ và $AB = CD$) thì tứ giác đó là hình bình hành. Do đó mệnh đề đảo $Q \\Rightarrow P$ là ĐÚNG.',
              },
              {
                id: 'c',
                label: 'c',
                statement:
                  'Hai mệnh đề $P$ và $Q$ là hai mệnh đề tương đương ($P \\Leftrightarrow Q$).',
                isCorrect: true,
                explanation:
                  'Vì cả $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng nên $P \\Leftrightarrow Q$ là mệnh đề đúng.',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Phủ định của mệnh đề "Số $12$ chia hết cho $4$ và $3$" là "Số $12$ không chia hết cho $4$ hoặc không chia hết cho $3$".',
                isCorrect: true,
                explanation:
                  'Theo quy tắc phủ định mệnh đề liên kết "và", phủ định của "$A$ và $B$" là "$\\overline{A}$ hoặc $\\overline{B}$" (Bài 1.29 SBT trang 13).',
              },
            ],
            pedagogicalTip: 'Lưu ý quy tắc De Morgan trong ngôn ngữ mệnh đề: phủ định của "và" là "hoặc".',
          },
          {
            id: 'b1_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 1: Lượng từ và suy luận toán học',
            prompt: 'Xét tính đúng sai của các mệnh đề sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Mệnh đề "$\\forall n \\in \\mathbb{N},\\ n^2 + n$ là số chẵn" là mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Ta có $n^2 + n = n(n+1)$ là tích của hai số tự nhiên liên tiếp nên luôn chia hết cho $2$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Mệnh đề "$\\exists x \\in \\mathbb{Q},\\ x^2 = 2$" là mệnh đề đúng.',
                isCorrect: false,
                explanation:
                  'Phương trình $x^2 = 2 \\Leftrightarrow x = \\pm\\sqrt{2} \\notin \\mathbb{Q}$ nên không tồn tại số hữu tỉ nào bình phương bằng $2$.',
              },
              {
                id: 'c',
                label: 'c',
                statement:
                  'Điều kiện cần và đủ để số tự nhiên $n$ chia hết cho $5$ là chữ số tận cùng của $n$ bằng $0$.',
                isCorrect: false,
                explanation:
                  'Sai vì số tự nhiên chia hết cho $5$ có thể có chữ số tận cùng bằng $0$ hoặc bằng $5$.',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Mệnh đề "$\\forall x \\in \\mathbb{R},\\ x^2 - 4x + 5 > 0$" là mệnh đề đúng.',
                isCorrect: true,
                explanation:
                  'Vì $x^2 - 4x + 5 = (x - 2)^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$.',
              },
            ],
            pedagogicalTip: 'Sử dụng hằng đẳng thức $(x-a)^2 + m$ để xét dấu tam thức bậc hai.',
          },
        ],
        part3: [
          {
            id: 'b1_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 1: Tìm nghiệm nguyên của mệnh đề chứa biến',
            prompt:
              'Có bao nhiêu số tự nhiên $n$ thỏa mãn mệnh đề chứa biến $P(n)$: "$2n + 1$ là ước của $15$"?',
            acceptableAnswers: ['4'],
            explanation:
              'Các ước tự nhiên của $15$ là $1; 3; 5; 15$. Do $n \\in \\mathbb{N}$ nên $2n + 1 \\in \\{1; 3; 5; 15\\} \\Leftrightarrow n \\in \\{0; 1; 2; 7\\}$. Vậy có $4$ số tự nhiên $n$.',
            pedagogicalTip: 'Tập hợp số tự nhiên $\\mathbb{N}$ bao gồm cả số $0$.',
            points: 0.5,
          },
          {
            id: 'b1_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 1: Xác định tính đúng sai của tổ hợp mệnh đề',
            prompt:
              'Cho các câu sau:\n(1) $\\pi$ là một số hữu tỉ.\n(2) Tổng hai cạnh của một tam giác luôn lớn hơn cạnh thứ ba.\n(3) Bạn có chăm học Toán không?\n(4) $106$ là một hợp số.\nTrong $4$ câu trên, có bao nhiêu câu là MỆNH ĐỀ ĐÚNG?',
            acceptableAnswers: ['2'],
            explanation:
              'Câu (1) là mệnh đề sai; câu (2) và câu (4) là mệnh đề đúng; câu (3) là câu hỏi (không phải mệnh đề). Vậy có $2$ mệnh đề đúng.',
            pedagogicalTip: 'Loại câu nghi vấn trước, sau đó kiểm tra tính đúng của các mệnh đề còn lại.',
            points: 0.5,
          },
          {
            id: 'b1_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 1: Tìm giá trị để mệnh đề kéo theo sai',
            prompt:
              'Cho mệnh đề chứa biến trên tập số nguyên dương: "Nếu $n$ là số nguyên tố nhỏ hơn $10$ thì $n^2 + 1$ là số nguyên tố". Tìm giá trị nguyên tố $n < 10$ lớn nhất làm cho mệnh đề trên nhận giá trị ĐÚNG.',
            acceptableAnswers: ['2'],
            explanation:
              'Các số nguyên tố nhỏ hơn $10$ là $2; 3; 5; 7$. Với $n = 2 \\Rightarrow n^2 + 1 = 5$ (nguyên tố). Với $n = 3 \\Rightarrow 10$ (hợp số); $n = 5 \\Rightarrow 26$ (hợp số); $n = 7 \\Rightarrow 50$ (hợp số). Vậy chỉ có $n = 2$.',
            pedagogicalTip: 'Với mọi số nguyên tố lẻ $n$, $n^2$ là số lẻ nên $n^2 + 1$ là số chẵn lớn hơn $2$ (hợp số).',
            points: 0.5,
          },
          {
            id: 'b1_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 1: Giá trị nhỏ nhất trong mệnh đề với mọi',
            prompt:
              'Tìm số thực $m$ lớn nhất sao cho mệnh đề "$\\forall x \\in \\mathbb{R},\\ x^2 - 6x + 12 \\ge m$" là một mệnh đề đúng.',
            acceptableAnswers: ['3'],
            explanation:
              'Ta có $x^2 - 6x + 12 = (x - 3)^2 + 3 \\ge 3$ với mọi $x \\in \\mathbb{R}$. Để bất đẳng thức đúng với mọi $x \\in \\mathbb{R}$ thì $m \\le 3$. Giá trị lớn nhất của $m$ là $3$.',
            pedagogicalTip: '$\\forall x \\in \\mathbb{R},\\ f(x) \\ge m \\Leftrightarrow m \\le \\min_{\\mathbb{R}} f(x)$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b1_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 1: Xét tính đúng sai và tìm mệnh đề phủ định (Bài 1.7 SBT trang 7 & 86)',
            problemStatement:
              'Cho mệnh đề $P$: "$\\exists x \\in \\mathbb{R},\\ x^4 < x^2$".',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để xét tính đúng sai của mệnh đề $P$ và lập mệnh đề phủ định $\\overline{P}$.',
            steps: [
              {
                id: 'b1_d2_s1',
                originalIndex: 1,
                content:
                  'Mệnh đề $P$ phát biểu là: "Tồn tại ít nhất một số thực $x$ thỏa mãn $x^4 < x^2$".',
                roleDescription: 'Phát biểu nội dung mệnh đề P',
              },
              {
                id: 'b1_d2_s2',
                originalIndex: 2,
                content:
                  'Xét $x = \\frac{1}{2} \\in \\mathbb{R}$, ta có $x^4 = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$ và $x^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.',
                roleDescription: 'Chỉ ra giá trị cụ thể của x',
              },
              {
                id: 'b1_d2_s3',
                originalIndex: 3,
                content:
                  'Vì $\\frac{1}{16} < \\frac{1}{4}$ nên $x = \\frac{1}{2}$ thỏa mãn $x^4 < x^2$. Do đó mệnh đề $P$ là mệnh đề đúng.',
                roleDescription: 'Kết luận tính đúng sai của P',
              },
              {
                id: 'b1_d2_s4',
                originalIndex: 4,
                content:
                  'Đổi lượng từ $\\exists$ thành $\\forall$ và phủ định dấu $<$ thành $\\ge$, ta được mệnh đề phủ định là $\\overline{P}$: "$\\forall x \\in \\mathbb{R},\\ x^4 \\ge x^2$".',
                roleDescription: 'Lập mệnh đề phủ định của P',
              },
            ],
            pedagogicalTip:
              'Để chứng minh mệnh đề tồn tại "$\\exists x \\in X, P(x)$" đúng, ta chỉ cần chỉ ra một giá trị $x_0 \\in X$ cụ thể làm cho $P(x_0)$ đúng.',
            teacherAnalysis:
              'Lời giải mẫu chuẩn theo trang 86 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 3.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-2',
    lessonNumber: 2,
    name: 'Bài 2',
    topicTitle: 'Tập hợp và các phép toán trên tập hợp',
    chapter: 'Chương I: Mệnh đề và Tập hợp',
    keySummary:
      'Cách xác định tập hợp, tập rỗng $\\emptyset$, tập hợp con ($A \\subset B$), hai tập hợp bằng nhau ($A = B$), các tập con của $\\mathbb{R}$ (khoảng, đoạn, nửa khoảng) và các phép toán giao ($A \\cap B$), hợp ($A \\cup B$), hiệu ($A \\setminus B$), phần bù ($C_A B$).',
    practiceExams: [
      {
        id: 'de-on-bai-2-1',
        lessonId: 'bai-2',
        title: 'Đề ôn Bài 2 - Đề số 01',
        subtitle: 'Bám sát Ví dụ & Bài tập Bài 2: Tập hợp (SBT Kết nối tri thức Toán 10, trang 8–12)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 01 của Bài 2 (Tập hợp và các phép toán trên tập hợp) bám sát Ví dụ 1–4 và Bài tập 1.9–1.15 trong SBT Toán 10 Kết nối tri thức.',
        part1: [
          {
            id: 'b2_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 2: Ký hiệu phần tử và tập hợp con (Tương tự Ví dụ 1 & Bài 1.9)',
            prompt: 'Trong các mệnh đề sau, mệnh đề nào ĐÚNG?',
            options: [
              { key: 'A', content: '$\\emptyset = \\{0\\}$.' },
              { key: 'B', content: '$\\emptyset \\subset \\{0\\}$.' },
              { key: 'C', content: '$\\{0\\} \\subset \\emptyset$.' },
              { key: 'D', content: '$0 \\subset \\emptyset$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Tập rỗng $\\emptyset$ là tập hợp con của mọi tập hợp, nên $\\emptyset \\subset \\{0\\}$ là mệnh đề đúng (Bài 1.17 SBT trang 12). Tập $\\{0\\}$ có $1$ phần tử là số $0$ nên khác $\\emptyset$.',
            pedagogicalTip:
              'Phân biệt rõ: $\\emptyset$ không có phần tử nào, còn $\\{0\\}$ là tập hợp có $1$ phần tử là $0$.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 2: Liệt kê phần tử của tập hợp (Tương tự Ví dụ 2)',
            prompt:
              'Cho tập hợp $G$ gồm các số nguyên dương nhỏ hơn $10$ là bội của $3$. Tập hợp $G$ được viết bằng cách liệt kê các phần tử là:',
            options: [
              { key: 'A', content: '$G = \\{0; 3; 6; 9\\}$.' },
              { key: 'B', content: '$G = \\{3; 6; 9\\}$.' },
              { key: 'C', content: '$G = \\{3; 6; 9; 12\\}$.' },
              { key: 'D', content: '$G = \\{1; 3; 9\\}$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Các số nguyên dương (lớn hơn $0$) nhỏ hơn $10$ và chia hết cho $3$ là $3; 6; 9$. Vậy $G = \\{3; 6; 9\\}$ (Ví dụ 2 trang 9 SBT).',
            pedagogicalTip: 'Số nguyên dương không bao gồm số $0$.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 2: Nhận biết tập hợp rỗng (Tương tự Bài 1.12 & 1.23)',
            prompt: 'Trong các tập hợp sau, tập hợp nào là tập hợp rỗng?',
            options: [
              { key: 'A', content: '$M = \\{x \\in \\mathbb{N} \\mid x^2 - 16 = 0\\}$.' },
              { key: 'B', content: '$N = \\{x \\in \\mathbb{R} \\mid x^2 + 2x + 5 = 0\\}$.' },
              { key: 'C', content: '$P = \\{x \\in \\mathbb{R} \\mid x^2 - 15 = 0\\}$.' },
              { key: 'D', content: '$Q = \\{x \\in \\mathbb{Q} \\mid x^2 + 3x - 4 = 0\\}$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Ta có $x^2 + 2x + 5 = (x + 1)^2 + 4 > 0$ với mọi $x \\in \\mathbb{R}$, nên phương trình vô nghiệm thực. Vậy $N = \\emptyset$ (Bài 1.23 SBT trang 13).',
            pedagogicalTip: 'Kiểm tra biệt thức $\\Delta$ và điều kiện miền xác định ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}$) của nghiệm.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 2: Phép toán trên khoảng, đoạn (Tương tự Ví dụ 4a)',
            prompt: 'Cho hai tập hợp $A = [3; 9]$ và $B = [-2; 7)$. Tập hợp $A \\setminus B$ là:',
            options: [
              { key: 'A', content: '$(7; 9]$.' },
              { key: 'B', content: '$[7; 9]$.' },
              { key: 'C', content: '$[3; 7)$.' },
              { key: 'D', content: '$[-2; 3)$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Ta có $x \\in [3; 9] \\setminus [-2; 7) \\Leftrightarrow \\begin{cases} 3 \\le x \\le 9 \\\\ x \\ge 7 \\end{cases} \\Leftrightarrow 7 \\le x \\le 9$. Vậy $A \\setminus B = [7; 9]$ (Ví dụ 4a trang 10 SBT).',
            pedagogicalTip:
              'Vì $7 \\notin [-2; 7)$ nhưng $7 \\in [3; 9]$ nên phần tử $7$ thuộc hiệu $A \\setminus B$ (ngoặc vuông tại $7$).',
            points: 0.5,
          },
          {
            id: 'b2_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 2: Giao của hai tập hợp số thực (Tương tự Ví dụ 4b)',
            prompt: 'Tập hợp $[-1; +\\infty) \\cap (-4; 9]$ bằng tập hợp nào sau đây?',
            options: [
              { key: 'A', content: '$(-4; +\\infty)$.' },
              { key: 'B', content: '$(-1; 9)$. ' },
              { key: 'C', content: '$[-1; 9]$.' },
              { key: 'D', content: '$(-4; -1]$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Giao của hai tập hợp là các số thực $x$ thỏa mãn đồng thời $x \\ge -1$ và $-4 < x \\le 9$, tức là $-1 \\le x \\le 9$, hay đoạn $[-1; 9]$ (Ví dụ 4b trang 10 SBT).',
            pedagogicalTip: 'Biểu diễn trên trục số và lấy phần chung của hai tập hợp.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 2: Phần bù trong tập số thực (Tương tự Ví dụ 4d)',
            prompt: 'Tập hợp $\\mathbb{R} \\setminus [-1; +\\infty)$ là:',
            options: [
              { key: 'A', content: '$(-\\infty; -1]$.' },
              { key: 'B', content: '$(-\\infty; -1)$.' },
              { key: 'C', content: '$(-1; +\\infty)$.' },
              { key: 'D', content: '$[-1; +\\infty)$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Loại bỏ các phần tử $x \\ge -1$ khỏi $\\mathbb{R}$, ta còn lại các số thực $x < -1$, tức là khoảng $(-\\infty; -1)$ (Ví dụ 4d trang 10 SBT).',
            pedagogicalTip: 'Khi lấy phần bù của nửa khoảng có ngoặc vuông $[ -1$, kết quả sẽ đổi thành ngoặc tròn $-1 )$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b2_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 2: Các phép toán trên tập hợp hữu hạn (Tương tự Bài 1.10 SBT trang 11)',
            prompt:
              'Cho hai tập hợp $A = \\{1; 4; 5; 8\\}$ và $B = \\{2; 4; 7; 8; 9\\}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Giao của hai tập hợp là $A \\cap B = \\{4; 8\\}$.',
                isCorrect: true,
                explanation: 'Các phần tử chung của cả $A$ và $B$ là $4$ và $8$, nên $A \\cap B = \\{4; 8\\}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Số phần tử của tập hợp $A \\cup B$ là $n(A \\cup B) = 9$.',
                isCorrect: false,
                explanation:
                  'Ta có $A \\cup B = \\{1; 2; 4; 5; 7; 8; 9\\}$ gồm $7$ phần tử (hoặc $n(A \\cup B) = 4 + 5 - 2 = 7 \\ne 9$).',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Tập hợp các phần tử thuộc $A$ mà không thuộc $B$ là $A \\setminus B = \\{1; 5\\}$.',
                isCorrect: true,
                explanation: 'Loại bỏ $4, 8$ khỏi tập $A$, ta được $A \\setminus B = \\{1; 5\\}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Tập hợp $B \\setminus A$ có đúng $3$ phần tử là $2; 7; 9$.',
                isCorrect: true,
                explanation: 'Loại bỏ $4, 8$ khỏi tập $B$, ta được $B \\setminus A = \\{2; 7; 9\\}$ gồm $3$ phần tử.',
              },
            ],
            pedagogicalTip: 'Khi liệt kê $A \\cup B$, mỗi phần tử chung chỉ được viết một lần.',
          },
          {
            id: 'b2_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 2: Phép toán trên các tập con của R (Bài 1.37 SBT trang 15)',
            prompt:
              'Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid |x| \\le 4\\}$ và $B = \\{x \\in \\mathbb{R} \\mid -3 < x \\le 8\\}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Viết dưới dạng đoạn và nửa khoảng thì $A = [-4; 4]$ và $B = (-3; 8]$.',
                isCorrect: true,
                explanation: 'Ta có $|x| \\le 4 \\Leftrightarrow -4 \\le x \\le 4$ nên $A = [-4; 4]$, và $B = (-3; 8]$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tập hợp giao $A \\cap B = [-3; 4]$.',
                isCorrect: false,
                explanation:
                  'Vì $-3 \\notin B$ nên $-3 \\notin A \\cap B$. Do đó $A \\cap B = (-3; 4]$ (không lấy đầu mút $-3$).',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Tập hợp hiệu $A \\setminus B = [-4; -3]$.',
                isCorrect: true,
                explanation:
                  'Vì $-3 \\in A$ và $-3 \\notin B$ nên $[-4; 4] \\setminus (-3; 8] = [-4; -3]$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Tập hợp hiệu $B \\setminus A = (4; 8]$.',
                isCorrect: true,
                explanation:
                  'Các phần tử thuộc $(-3; 8]$ nhưng không thuộc $[-4; 4]$ là $(4; 8]$.',
              },
            ],
            pedagogicalTip:
              'Cẩn thận tại các đầu mút $-3$ và $4$ khi thực hiện phép giao và phép hiệu.',
          },
        ],
        part3: [
          {
            id: 'b2_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 2: Bài toán thực tế biểu đồ Ven (Bài 1.15 SBT trang 11)',
            prompt:
              'Trong một cuộc phỏng vấn $56$ người về những việc họ thường làm vào ngày nghỉ cuối tuần, có $24$ người thích tập thể thao, $15$ người thích đi câu cá và $20$ người không thích cả hai hoạt động trên. Hỏi có bao nhiêu người thích cả câu cá và chơi thể thao?',
            acceptableAnswers: ['3'],
            explanation:
              'Số người thích ít nhất một trong hai hoạt động (thể thao hoặc câu cá) là $56 - 20 = 36$ (người). Gọi $A, B$ lần lượt là tập hợp người thích thể thao và thích câu cá. Ta có $n(A \\cap B) = n(A) + n(B) - n(A \\cup B) = 24 + 15 - 36 = 3$ (người).',
            pedagogicalTip: 'Áp dụng công thức $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 2: Bài toán thực tế đếm số phần tử (Bài 1.24 SBT trang 13)',
            prompt:
              'Lớp 10A có $10$ học sinh giỏi môn Toán, $15$ học sinh giỏi môn Vật lí, $8$ học sinh giỏi cả hai môn Toán và Vật lí. Số học sinh giỏi ít nhất một môn (Toán hoặc Vật lí) của lớp 10A là bao nhiêu?',
            acceptableAnswers: ['17'],
            explanation:
              'Số học sinh giỏi ít nhất một trong hai môn là $10 + 15 - 8 = 17$ (học sinh).',
            pedagogicalTip: 'Trừ đi phần giao $8$ học sinh để không đếm trùng hai lần.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 2: Hai tập hợp bằng nhau (Bài 1.25 SBT trang 13)',
            prompt:
              'Cho hai tập hợp $M = \\{x \\in \\mathbb{Z} \\mid x^2 - 3x - 4 = 0\\}$ và $N = \\{a; -1\\}$. Với giá trị nào của $a$ thì $M = N$?',
            acceptableAnswers: ['4'],
            explanation:
              'Giải phương trình $x^2 - 3x - 4 = 0 \\Leftrightarrow x = -1$ hoặc $x = 4$. Suy ra $M = \\{-1; 4\\}$. Để $M = N$ thì $a = 4$.',
            pedagogicalTip: 'Hai tập hợp bằng nhau khi và chỉ khi chúng có cùng các phần tử.',
            points: 0.5,
          },
          {
            id: 'b2_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 2: Bài toán thực tế lớp học (Bài 1.40 SBT trang 15)',
            prompt:
              'Lớp 10A có $40$ học sinh, trong đó có $20$ học sinh thích môn Ngữ văn, $18$ học sinh thích môn Toán, $4$ học sinh thích cả hai môn Ngữ văn và Toán. Hỏi có bao nhiêu học sinh không thích môn nào trong hai môn Ngữ văn và Toán?',
            acceptableAnswers: ['6'],
            explanation:
              'Số học sinh thích ít nhất một trong hai môn Ngữ văn hoặc Toán là $20 + 18 - 4 = 34$ (học sinh). Vậy số học sinh không thích môn nào trong hai môn trên là $40 - 34 = 6$ (học sinh).',
            pedagogicalTip: 'Lấy tổng số học sinh cả lớp trừ đi số học sinh thuộc hợp $A \\cup B$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b2_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 2: Giải bài toán thực tế bằng biểu đồ Ven (Bài 1.41 SBT trang 15 & 87)',
            problemStatement:
              'Thống kê tại một trung tâm mua sắm gồm $46$ cửa hàng, với $26$ cửa hàng có bán quần áo, $16$ cửa hàng có bán giày và $34$ cửa hàng bán ít nhất một trong hai mặt hàng này.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để tìm: a) Số cửa hàng bán cả quần áo và giày; b) Số cửa hàng chỉ bán một trong hai loại; c) Số cửa hàng không bán cả hai loại hàng hóa trên.',
            steps: [
              {
                id: 'b2_d1_s1',
                originalIndex: 1,
                content:
                  'Gọi $x$ là số cửa hàng bán cả quần áo và giày ($x \\in \\mathbb{N}$). Khi đó số cửa hàng chỉ bán quần áo là $26 - x$ và số cửa hàng chỉ bán giày là $16 - x$.',
                roleDescription: 'Đặt ẩn và biểu diễn theo biểu đồ Ven',
              },
              {
                id: 'b2_d1_s2',
                originalIndex: 2,
                content:
                  'Vì có $34$ cửa hàng bán ít nhất một trong hai mặt hàng nên ta có phương trình: $(26 - x) + x + (16 - x) = 34 \\Leftrightarrow 42 - x = 34 \\Leftrightarrow x = 8$. Vậy có $8$ cửa hàng bán cả quần áo và giày.',
                roleDescription: 'Giải phương trình tìm số cửa hàng bán cả hai loại',
              },
              {
                id: 'b2_d1_s3',
                originalIndex: 3,
                content:
                  'Suy ra số cửa hàng chỉ bán một trong hai loại quần áo hoặc giày là $(26 - 8) + (16 - 8) = 18 + 8 = 26$ (cửa hàng).',
                roleDescription: 'Tính số cửa hàng chỉ bán đúng một loại',
              },
              {
                id: 'b2_d1_s4',
                originalIndex: 4,
                content:
                  'Số cửa hàng không bán cả hai loại hàng hóa trên là $46 - 34 = 12$ (cửa hàng).',
                roleDescription: 'Tính số cửa hàng không bán cả hai loại',
              },
            ],
            pedagogicalTip:
              'Phân biệt rõ "bán ít nhất một trong hai loại" ($A \\cup B$) và "chỉ bán một trong hai loại" ($(A \\setminus B) \\cup (B \\setminus A)$).',
            teacherAnalysis:
              'Bài toán chuẩn theo lời giải Bài 1.41 trang 87 SBT Toán 10 Kết nối tri thức.',
            points: 3.0,
          },
        ],
      },
      {
        id: 'de-on-bai-2-2',
        lessonId: 'bai-2',
        title: 'Đề ôn Bài 2 - Đề số 02',
        subtitle: 'Nâng cao & Vận dụng Bài 2: Tập hợp và các phép toán trên tập hợp (SBT KNTT)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 02 của Bài 2 rèn luyện sâu kỹ năng xác định tập hợp qua tính chất đặc trưng, tìm tham số để giao hai tập hợp bằng rỗng và giải toán thực tế.',
        part1: [
          {
            id: 'b2_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 2: Quan hệ thuộc và tập con (Bài 1.20 SBT trang 12)',
            prompt:
              'Cho $x$ là một phần tử của tập hợp $X$. Xét các mệnh đề: (I) $x \\in X$; (II) $\\{x\\} \\in X$; (III) $x \\subset X$; (IV) $\\{x\\} \\subset X$. Trong các mệnh đề trên, các mệnh đề ĐÚNG là:',
            options: [
              { key: 'A', content: '(I) và (II).' },
              { key: 'B', content: '(I) và (III).' },
              { key: 'C', content: '(I) và (IV).' },
              { key: 'D', content: '(II) và (IV).' },
            ],
            correctAnswer: 'C',
            explanation:
              'Vì $x$ là phần tử của $X$ nên $x \\in X$ (I đúng), và tập hợp đơn tử $\\{x\\}$ là tập con của $X$ nên $\\{x\\} \\subset X$ (IV đúng). Vậy (I) và (IV) đúng.',
            pedagogicalTip: 'Ký hiệu $\\in$ dùng giữa phần tử và tập hợp; ký hiệu $\\subset$ dùng giữa hai tập hợp.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 2: Tập nghiệm phương trình tích (Bài 1.21 SBT trang 12)',
            prompt:
              'Cho ba tập hợp $E = \\{x \\in \\mathbb{R} \\mid f(x) = 0\\}$, $F = \\{x \\in \\mathbb{R} \\mid g(x) = 0\\}$ và $H = \\{x \\in \\mathbb{R} \\mid f(x) \\cdot g(x) = 0\\}$. Mệnh đề nào sau đây đúng?',
            options: [
              { key: 'A', content: '$H = E \\cap F$.' },
              { key: 'B', content: '$H = E \\cup F$.' },
              { key: 'C', content: '$H = E \\setminus F$.' },
              { key: 'D', content: '$H = F \\setminus E$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Ta có $f(x) \\cdot g(x) = 0 \\Leftrightarrow f(x) = 0$ hoặc $g(x) = 0 \\Leftrightarrow x \\in E$ hoặc $x \\in F \\Leftrightarrow x \\in E \\cup F$. Vậy $H = E \\cup F$.',
            pedagogicalTip: 'Phương trình tích bằng $0$ tương ứng với liên từ "hoặc" (phép hợp $\\cup$).',
            points: 0.5,
          },
          {
            id: 'b2_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 2: Quan hệ giữa hai tập hợp bội số (Bài 1.22 SBT trang 12)',
            prompt:
              'Cho hai tập hợp $X = \\{n \\in \\mathbb{N} \\mid n \\text{ là bội của } 2 \\text{ và } 3\\}$ và $Y = \\{n \\in \\mathbb{N} \\mid n \\text{ là bội của } 6\\}$. Mệnh đề nào sau đây SAI?',
            options: [
              { key: 'A', content: '$Y \\subset X$.' },
              { key: 'B', content: '$X \\subset Y$.' },
              { key: 'C', content: '$\\exists n: n \\in X \\text{ và } n \\notin Y$.' },
              { key: 'D', content: '$X = Y$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Vì $\\text{ƯCLN}(2, 3) = 1$ nên một số tự nhiên vừa chia hết cho $2$ vừa chia hết cho $3$ khi và chỉ khi nó chia hết cho $6$. Do đó $X = Y$, mệnh đề C là mệnh đề SAI.',
            pedagogicalTip: 'Bội chung của $2$ và $3$ chính là bội của $6$.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 2: Phân biệt tập số thực và tập số nguyên (Bài 1.26 SBT trang 13)',
            prompt: 'Trong các mệnh đề sau, mệnh đề nào SAI?',
            options: [
              { key: 'A', content: '$\\mathbb{N} \\subset [0; +\\infty)$.' },
              { key: 'B', content: '$\\{-2; 3\\} \\subset [-2; 3]$.' },
              { key: 'C', content: '$[3; 7] = \\{3; 4; 5; 6; 7\\}$.' },
              { key: 'D', content: '$\\emptyset \\subset \\mathbb{Q}$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Đoạn $[3; 7] = \\{x \\in \\mathbb{R} \\mid 3 \\le x \\le 7\\}$ chứa vô số số thực (ví dụ $3,5 \\in [3; 7]$), còn $\\{3; 4; 5; 6; 7\\}$ chỉ có $5$ số tự nhiên. Vậy C sai.',
            pedagogicalTip: 'Đoạn $[a; b]$ luôn là tập hợp các số thực liên tục từ $a$ đến $b$.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 2: Phép toán trên các nửa khoảng (Bài 1.27 SBT trang 13)',
            prompt:
              'Cho hai tập hợp $A = (-\\infty; -1]$ và $B = (-2; 4]$. Tìm mệnh đề SAI trong các mệnh đề sau:',
            options: [
              { key: 'A', content: '$A \\cap B = (-2; -1]$.' },
              { key: 'B', content: '$A \\setminus B = (-\\infty; -2)$.' },
              { key: 'C', content: '$A \\cup B = (-\\infty; 4]$.' },
              { key: 'D', content: '$B \\setminus A = (-1; 4]$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Vì $-2 \\in A$ nhưng $-2 \\notin B = (-2; 4]$ nên $-2 \\in A \\setminus B$. Do đó $A \\setminus B = (-\\infty; -2]$ chứ không phải $(-\\infty; -2)$. Vậy B sai.',
            pedagogicalTip: 'Kiểm tra kỹ đầu mút $x = -2$: thuộc $A$, không thuộc $B$ nên phải thuộc $A \\setminus B$.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 2: Tính chất đặc trưng của tập hợp (Bài 1.11a SBT trang 11)',
            prompt:
              'Tập hợp $A = \\{0; 4; 8; 12; 16\\}$ được viết bằng cách chỉ ra tính chất đặc trưng cho các phần tử là:',
            options: [
              { key: 'A', content: '$A = \\{4n \\mid n \\in \\mathbb{N},\\ 0 \\le n \\le 4\\}$.' },
              { key: 'B', content: '$A = \\{4n \\mid n \\in \\mathbb{N}^*,\\ 1 \\le n \\le 4\\}$.' },
              { key: 'C', content: '$A = \\{2n \\mid n \\in \\mathbb{N},\\ 0 \\le n \\le 8\\}$.' },
              { key: 'D', content: '$A = \\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 16\\}$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Các phần tử của $A$ có dạng $4n$ với $n \\in \\{0; 1; 2; 3; 4\\}$, tức là $n \\in \\mathbb{N}$ và $0 \\le n \\le 4$ (Bài 1.11a trang 11 & 86 SBT).',
            pedagogicalTip: 'Thay lần lượt $n = 0, 1, 2, 3, 4$ vào biểu thức $4n$ để kiểm tra.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b2_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 2: Liệt kê phần tử từ phương trình và bất phương trình (Bài 1.36 & 1.39 SBT)',
            prompt:
              'Cho các tập hợp $A = \\{x \\in \\mathbb{Q} \\mid (2x + 1)(x^2 + x - 1)(2x^2 - 3x + 1) = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x^2 > 2 \\text{ và } x < 4\\}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Phương trình $x^2 + x - 1 = 0$ có hai nghiệm hữu tỉ.',
                isCorrect: false,
                explanation:
                  'Phương trình $x^2 + x - 1 = 0$ có $\\Delta = 5$ nên hai nghiệm $x = \\frac{-1 \\pm \\sqrt{5}}{2} \\notin \\mathbb{Q}$ (vô tỉ).',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tập hợp $A$ có đúng $3$ phần tử là $A = \\left\\{-\\frac{1}{2}; \\frac{1}{2}; 1\\right\\}$.',
                isCorrect: true,
                explanation:
                  'Do $2x + 1 = 0 \\Leftrightarrow x = -\\frac{1}{2} \\in \\mathbb{Q}$ và $2x^2 - 3x + 1 = 0 \\Leftrightarrow x = 1$ hoặc $x = \\frac{1}{2} \\in \\mathbb{Q}$, nên $A = \\left\\{-\\frac{1}{2}; \\frac{1}{2}; 1\\right\\}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Tập hợp $B$ viết dưới dạng liệt kê phần tử là $B = \\{2; 3\\}$.',
                isCorrect: true,
                explanation:
                  'Với $x \\in \\mathbb{N}$ và $x < 4$ thì $x \\in \\{0; 1; 2; 3\\}$. Điều kiện $x^2 > 2$ chỉ thỏa mãn với $x = 2$ ($2^2 = 4 > 2$) và $x = 3$ ($3^2 = 9 > 2$). Vậy $B = \\{2; 3\\}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Giao của hai tập hợp $A$ và $B$ là tập hợp rỗng ($A \\cap B = \\emptyset$).',
                isCorrect: true,
                explanation:
                  'Vì $A = \\left\\{-\\frac{1}{2}; \\frac{1}{2}; 1\\right\\}$ và $B = \\{2; 3\\}$ không có phần tử chung nên $A \\cap B = \\emptyset$.',
              },
            ],
            pedagogicalTip: 'Chú ý điều kiện $x \\in \\mathbb{Q}$ của tập $A$ và $x \\in \\mathbb{N}$ của tập $B$.',
          },
          {
            id: 'b2_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 2: Xét quan hệ giữa các tập hợp số nguyên (Bài 1.39 SBT trang 15)',
            prompt:
              'Cho các tập hợp: $A = \\{x \\mid x \\text{ là số nguyên tố và } 20 \\le x \\le 30\\}$; $B = \\{x \\mid x \\text{ là bội của } 18 \\text{ và } 20 \\le x \\le 30\\}$; $C$ là tập hợp các nghiệm nguyên dương của phương trình $x^3 - 52x^2 + 667x = 0$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Phần tử $25 \\in A$.',
                isCorrect: false,
                explanation: '$25 = 5^2$ là hợp số, không phải số nguyên tố nên $25 \\notin A$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tập hợp $A = \\{23; 29\\}$.',
                isCorrect: true,
                explanation: 'Trong đoạn $[20; 30]$ chỉ có hai số nguyên tố là $23$ và $29$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Tập hợp $B$ là tập hợp rỗng ($B = \\emptyset$).',
                isCorrect: true,
                explanation: 'Các bội dương của $18$ là $18; 36; 54; \\dots$ nên không có bội nào của $18$ thuộc $[20; 30]$. Vậy $B = \\emptyset$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Hai tập hợp $A$ và $C$ bằng nhau ($A = C$).',
                isCorrect: true,
                explanation:
                  'Phương trình $x^3 - 52x^2 + 667x = 0 \\Leftrightarrow x(x - 23)(x - 29) = 0 \\Leftrightarrow x \\in \\{0; 23; 29\\}$. Vì $C$ chỉ lấy nghiệm nguyên dương ($x > 0$) nên $C = \\{23; 29\\} = A$.',
              },
            ],
            pedagogicalTip: 'Số $0$ là số nguyên nhưng không phải là số nguyên dương.',
          },
        ],
        part3: [
          {
            id: 'b2_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 2: Điều kiện để hai đoạn rời nhau (Bài 1.38 SBT trang 15)',
            prompt:
              'Cho hai tập hợp $A = [a; 5]$ và $B = [-2; 3]$ với $a < 5$. Có bao nhiêu giá trị nguyên của tham số $a$ để $A \\cap B = \\emptyset$?',
            acceptableAnswers: ['1'],
            explanation:
              'Với $a < 5$, để $[a; 5] \\cap [-2; 3] = \\emptyset$ thì $a > 3$. Kết hợp $a < 5$, ta được $3 < a < 5$ (Bài 1.38 trang 87 SBT). Vì $a \\in \\mathbb{Z}$ nên chỉ có duy nhất $1$ giá trị nguyên là $a = 4$.',
            pedagogicalTip: 'Tại $a = 3$, $[3; 5] \\cap [-2; 3] = \\{3\\} \\ne \\emptyset$, nên phải có $a > 3$.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 2: Đếm số nguyên trong hiệu của hai khoảng (Bài 1.14c SBT trang 11)',
            prompt:
              'Cho hai tập hợp $M = (-2; 6)$ và $N = (3; 10)$. Tập hợp $M \\setminus N$ chứa bao nhiêu số nguyên?',
            acceptableAnswers: ['5'],
            explanation:
              'Ta có $M \\setminus N = (-2; 6) \\setminus (3; 10) = (-2; 3]$ (Bài 1.14c trang 86 SBT). Các số nguyên thuộc nửa khoảng $(-2; 3]$ là $-1; 0; 1; 2; 3$. Vậy có $5$ số nguyên.',
            pedagogicalTip: 'Vì $3 \\notin (3; 10)$ nhưng $3 \\in (-2; 6)$ nên $3 \\in M \\setminus N$.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 2: Đếm số tập hợp con',
            prompt:
              'Cho tập hợp $H$ là tập nghiệm của phương trình $x^2 - 7x + 10 = 0$ (Ví dụ 2 trang 9 SBT). Hỏi tập hợp $H$ có tất cả bao nhiêu tập hợp con?',
            acceptableAnswers: ['4'],
            explanation:
              'Phương trình $x^2 - 7x + 10 = 0$ có hai nghiệm $x = 2; x = 5$ nên $H = \\{2; 5\\}$ gồm $2$ phần tử. Các tập con của $H$ là $\\emptyset, \\{2\\}, \\{5\\}, \\{2; 5\\}$ (tất cả $2^2 = 4$ tập con).',
            pedagogicalTip: 'Tập hợp có $n$ phần tử thì có $2^n$ tập hợp con.',
            points: 0.5,
          },
          {
            id: 'b2_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 2: Bài toán thực tế phỏng vấn (Bài 1.15c SBT trang 11)',
            prompt:
              'Trong cuộc phỏng vấn $56$ người về hoạt động ngày nghỉ cuối tuần, có $24$ người thích chơi thể thao, $15$ người thích đi câu cá và $3$ người thích cả hai hoạt động trên. Hỏi có bao nhiêu người CHỈ thích đi câu cá mà không thích chơi thể thao?',
            acceptableAnswers: ['12'],
            explanation:
              'Số người chỉ thích đi câu cá mà không thích chơi thể thao là $n(B \\setminus A) = 15 - 3 = 12$ (người) (Bài 1.15c trang 86 SBT).',
            pedagogicalTip: '$n(B \\setminus A) = n(B) - n(A \\cap B)$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b2_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 2: Xác định giao và hiệu của hai tập hợp số thực (Bài 1.37 SBT trang 15 & 87)',
            problemStatement:
              'Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid |x| \\le 4\\}$ và $B = \\{x \\in \\mathbb{R} \\mid -3 < x \\le 8\\}$.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để viết $A, B$ dưới dạng khoảng, đoạn và tìm $A \\cap B$, $A \\setminus B$, $B \\setminus A$.',
            steps: [
              {
                id: 'b2_d2_s1',
                originalIndex: 1,
                content:
                  'Ta có $|x| \\le 4 \\Leftrightarrow -4 \\le x \\le 4$, do đó $A = [-4; 4]$; từ giả thiết suy ra $B = (-3; 8]$.',
                roleDescription: 'Viết A, B dưới dạng đoạn và nửa khoảng',
              },
              {
                id: 'b2_d2_s2',
                originalIndex: 2,
                content:
                  'Lấy phần chung của $[-4; 4]$ và $(-3; 8]$ trên trục số, ta được $A \\cap B = (-3; 4]$.',
                roleDescription: 'Xác định tập hợp giao A ∩ B',
              },
              {
                id: 'b2_d2_s3',
                originalIndex: 3,
                content:
                  'Lấy các phần tử thuộc $A = [-4; 4]$ nhưng không thuộc $B = (-3; 8]$, ta được $A \\setminus B = [-4; -3]$.',
                roleDescription: 'Xác định hiệu A \\ B',
              },
              {
                id: 'b2_d2_s4',
                originalIndex: 4,
                content:
                  'Lấy các phần tử thuộc $B = (-3; 8]$ nhưng không thuộc $A = [-4; 4]$, ta được $B \\setminus A = (4; 8]$.',
                roleDescription: 'Xác định hiệu B \\ A',
              },
            ],
            pedagogicalTip:
              'Khi bỏ đi một khoảng có ngoặc tròn tại $-3$, phần tử $-3$ vẫn còn lại trong hiệu $A \\setminus B$.',
            teacherAnalysis:
              'Bài tập rèn luyện chuẩn xác kỹ năng biểu diễn tập hợp trên trục số của Bài 2.',
            points: 3.0,
          },
        ],
      },
    ],
  },
];
