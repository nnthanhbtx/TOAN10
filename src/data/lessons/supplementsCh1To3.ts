import { MultipleChoiceQuestion, StepOrderingQuestion } from '../../types/exam';

export interface RawStepOrderingSupplement {
  id: string;
  part: 'part4';
  number: number;
  topic: string;
  prompt: string;
  steps: {
    id: string;
    content: string;
    originalIndex?: number;
    roleDescription?: string;
  }[];
  correctOrder: string[];
  explanation: string;
  pedagogicalTip?: string;
  points: number;
}

export interface ExamSupplement {
  extraPart1: MultipleChoiceQuestion[];
  extraPart4: Array<StepOrderingQuestion | RawStepOrderingSupplement>;
}

export const SUPPLEMENTS_CH1_TO_3: Record<string, ExamSupplement> = {
  // ==================== BÀI 1: MỆNH ĐỀ ====================
  'de-on-bai-1-1': {
    extraPart1: [
      {
        id: 'b1_d1_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 1: Mệnh đề tương đương (Bài 1.4 SBT trang 8)',
        prompt:
          'Cho hai mệnh đề $P$: "Tứ giác $ABCD$ là hình vuông" và $Q$: "Tứ giác $ABCD$ là hình chữ nhật có hai đường chéo vuông góc". Khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$P \\Leftrightarrow Q$ là mệnh đề đúng.' },
          { key: 'B', content: '$P \\Rightarrow Q$ đúng nhưng $Q \\Rightarrow P$ sai.' },
          { key: 'C', content: '$Q \\Rightarrow P$ đúng nhưng $P \\Rightarrow Q$ sai.' },
          { key: 'D', content: 'Cả $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều sai.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo dấu hiệu nhận biết hình vuông, một tứ giác là hình vuông khi và chỉ khi nó là hình chữ nhật có hai đường chéo vuông góc. Do đó cả $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng, suy ra $P \\Leftrightarrow Q$ đúng (Bài 1.4 SBT trang 8).',
        pedagogicalTip: 'Hai mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi cả hai chiều suy luận thuận và đảo đều đúng.',
        points: 0.25,
      },
      {
        id: 'b1_d1_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 1: Điều kiện cần và điều kiện đủ (Ví dụ 4 SBT trang 7)',
        prompt:
          'Cho định lí: "Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau". Phát biểu nào sau đây sử dụng đúng thuật ngữ **điều kiện cần**?',
        options: [
          { key: 'A', content: 'Hai tam giác có diện tích bằng nhau là điều kiện cần để chúng bằng nhau.' },
          { key: 'B', content: 'Hai tam giác bằng nhau là điều kiện cần để diện tích của chúng bằng nhau.' },
          { key: 'C', content: 'Hai tam giác có diện tích bằng nhau là điều kiện đủ để chúng bằng nhau.' },
          { key: 'D', content: 'Hai tam giác bằng nhau là điều kiện cần và đủ để diện tích của chúng bằng nhau.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Trong định lí $P \\Rightarrow Q$, $P$ ("hai tam giác bằng nhau") là điều kiện đủ để có $Q$, còn $Q$ ("diện tích bằng nhau") là điều kiện cần để có $P$ (Ví dụ 4 SBT trang 7).',
        pedagogicalTip: 'Trong $P \\Rightarrow Q$: Giả thiết $P$ là **đủ**, Kết luận $Q$ là **cần**.',
        points: 0.25,
      },
      {
        id: 'b1_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 1: Xét tính đúng sai của mệnh đề chứa lượng từ (Bài 1.6 SBT trang 9)',
        prompt:
          'Trong các mệnh đề sau, mệnh đề nào là mệnh đề **đúng**?',
        options: [
          { key: 'A', content: '$\\exists n \\in \\mathbb{N},\\ n^2 + 1$ chia hết cho $5$.' },
          { key: 'B', content: '$\\forall x \\in \\mathbb{R},\\ x^2 > 0$.' },
          { key: 'C', content: '$\\exists x \\in \\mathbb{Q},\\ x^2 = 3$.' },
          { key: 'D', content: '$\\forall n \\in \\mathbb{N},\\ n^2 + n + 1$ là số chẵn.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Với $n = 2 \\in \\mathbb{N}$, ta có $n^2 + 1 = 5$ chia hết cho $5$, nên mệnh đề A đúng. B sai tại $x = 0$; C sai vì $\\sqrt{3} \\notin \\mathbb{Q}$; D sai vì $n(n+1)$ chẵn nên $n^2+n+1$ luôn lẻ.',
        pedagogicalTip: 'Để chứng minh mệnh đề $\\exists x, P(x)$ đúng, chỉ cần chỉ ra một giá trị cụ thể của $x$.',
        points: 0.25,
      },
      {
        id: 'b1_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 1: Mệnh đề chứa biến (Ví dụ 2 SBT trang 6)',
        prompt:
          'Cho mệnh đề chứa biến $P(x): "x^2 - 5x + 6 = 0"$ với $x \\in \\mathbb{R}$. Tập hợp tất cả các giá trị của $x$ để $P(x)$ là mệnh đề **đúng** là:',
        options: [
          { key: 'A', content: '$\\{2; 3\\}$' },
          { key: 'B', content: '$\\{-2; -3\\}$' },
          { key: 'C', content: '$\\{1; 6\\}$' },
          { key: 'D', content: '$\\{-1; 6\\}$' },
        ],
        correctAnswer: 'A',
        explanation:
          '$P(x)$ đúng khi và chỉ khi $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x \\in \\{2; 3\\}$.',
        pedagogicalTip: 'Giải phương trình trong $P(x)$ để tìm các giá trị làm mệnh đề chứa biến nhận chân trị đúng.',
        points: 0.25,
      },
      {
        id: 'b1_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 1: Mệnh đề phủ định của mệnh đề kéo theo và tính chất số học',
        prompt:
          'Mệnh đề phủ định của mệnh đề $P$: "Số tự nhiên $n$ chia hết cho $2$ và chia hết cho $3$" là:',
        options: [
          { key: 'A', content: 'Số tự nhiên $n$ không chia hết cho $2$ hoặc không chia hết cho $3$.' },
          { key: 'B', content: 'Số tự nhiên $n$ không chia hết cho $2$ và không chia hết cho $3$.' },
          { key: 'C', content: 'Số tự nhiên $n$ chia hết cho $6$.' },
          { key: 'D', content: 'Số tự nhiên $n$ chia hết cho $2$ hoặc chia hết cho $3$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Phủ định của mệnh đề liên kết bởi từ "và" ($A$ và $B$) là mệnh đề liên kết bởi từ "hoặc" ($\\overline{A}$ hoặc $\\overline{B}$).',
        pedagogicalTip: 'Quy tắc De Morgan trong logic: Phủ định của "và" là "hoặc".',
        points: 0.25,
      },
      {
        id: 'b1_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 1: Mệnh đề đảo của định lí hình học (Bài 1.3 SBT trang 8)',
        prompt:
          'Cho mệnh đề $P \\Rightarrow Q$: "Nếu tứ giác $ABCD$ là hình thoi thì hai đường chéo $AC$ và $BD$ vuông góc với nhau". Mệnh đề đảo $Q \\Rightarrow P$ và tính đúng sai của nó là:',
        options: [
          { key: 'A', content: '"Nếu tứ giác $ABCD$ có hai đường chéo $AC$ và $BD$ vuông góc với nhau thì $ABCD$ là hình thoi" — đây là mệnh đề **sai**.' },
          { key: 'B', content: '"Nếu tứ giác $ABCD$ có hai đường chéo $AC$ và $BD$ vuông góc với nhau thì $ABCD$ là hình thoi" — đây là mệnh đề **đúng**.' },
          { key: 'C', content: '"Nếu tứ giác $ABCD$ không là hình thoi thì $AC$ không vuông góc với $BD$" — đây là mệnh đề **sai**.' },
          { key: 'D', content: '"Nếu tứ giác $ABCD$ là hình thoi thì $AC = BD$" — đây là mệnh đề **sai**.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Mệnh đề đảo $Q \\Rightarrow P$ là sai vì một tứ giác có hai đường chéo vuông góc nhưng không cắt nhau tại trung điểm mỗi đường (ví dụ hình cánh diều) thì không phải là hình thoi.',
        pedagogicalTip: 'Định lí thuận $P \\Rightarrow Q$ đúng không có nghĩa là mệnh đề đảo $Q \\Rightarrow P$ cũng đúng.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b1_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 1: Lập mệnh đề phủ định và xét tính đúng sai của mệnh đề chứa lượng từ (Bài 1.6 SBT trang 9)',
        problemStatement:
          'Cho mệnh đề $P: "\\forall x \\in \\mathbb{R},\\ x^2 - 4x + 5 > 0"$. Hãy xét tính đúng sai của mệnh đề $P$ và lập mệnh đề phủ định $\\overline{P}$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b1_d1_q2_s1',
            originalIndex: 1,
            content:
              'Biến đổi biểu thức trong mệnh đề $P$: $x^2 - 4x + 5 = (x^2 - 4x + 4) + 1 = (x - 2)^2 + 1$.',
            roleDescription: 'Tách bình phương đủ cho tam thức bậc hai',
          },
          {
            id: 'b1_d1_q2_s2',
            originalIndex: 2,
            content:
              'Vì $(x - 2)^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$ nên $(x - 2)^2 + 1 \\ge 1 > 0$ với mọi $x \\in \\mathbb{R}$.',
            roleDescription: 'Đánh giá dấu của biểu thức với mọi x thuộc R',
          },
          {
            id: 'b1_d1_q2_s3',
            originalIndex: 3,
            content:
              'Suy ra mệnh đề $P$ là mệnh đề **đúng** (và mệnh đề phủ định $\\overline{P}$ là mệnh đề sai).',
            roleDescription: 'Kết luận tính đúng sai của mệnh đề P',
          },
          {
            id: 'b1_d1_q2_s4',
            originalIndex: 4,
            content:
              'Đổi lượng từ $\\forall$ thành $\\exists$ và phủ định dấu $>$, ta được mệnh đề phủ định $\\overline{P}: "\\exists x \\in \\mathbb{R},\\ x^2 - 4x + 5 \\le 0"$.',
            roleDescription: 'Phát biểu mệnh đề phủ định P̄',
          },
        ],
        pedagogicalTip: 'Phủ định của dấu $>$ là dấu $\\le$, và phủ định của $\\forall$ là $\\exists$.',
        teacherAnalysis: 'Bám sát phương pháp giải Bài 1.6 trang 9 & 86 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b1_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 1: Chứng minh định lí số học bằng phương pháp phản chứng',
        problemStatement:
          'Sử dụng phương pháp phản chứng để chứng minh định lí: "Với mọi số tự nhiên $n$, nếu $3n + 2$ là số lẻ thì $n$ là số lẻ".',
        conclusionTarget:
          'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b1_d1_q3_s1',
            originalIndex: 1,
            content:
              'Giả sử điều cần chứng minh là sai, tức là tồn tại số tự nhiên $n$ sao cho $3n + 2$ là số lẻ nhưng $n$ không phải là số lẻ (nghĩa là $n$ là số chẵn).',
            roleDescription: 'Giả sử phản chứng n là số chẵn',
          },
          {
            id: 'b1_d1_q3_s2',
            originalIndex: 2,
            content:
              'Vì $n$ là số chẵn nên $n = 2k$ với $k \\in \\mathbb{N}$.',
            roleDescription: 'Biểu diễn số chẵn n = 2k',
          },
          {
            id: 'b1_d1_q3_s3',
            originalIndex: 3,
            content:
              'Khi đó $3n + 2 = 3(2k) + 2 = 2(3k + 1)$ chia hết cho $2$, suy ra $3n + 2$ là số chẵn.',
            roleDescription: 'Thay n = 2k vào 3n + 2',
          },
          {
            id: 'b1_d1_q3_s4',
            originalIndex: 4,
            content:
              'Điều này mâu thuẫn với giả thiết $3n + 2$ là số lẻ. Vậy giả sử ban đầu là sai, suy ra $n$ phải là số lẻ (điều phải chứng minh).',
            roleDescription: 'Chỉ ra mâu thuẫn và kết luận',
          },
        ],
        pedagogicalTip: 'Chứng minh phản chứng cho $P \\Rightarrow Q$: Giả sử $P$ đúng và $\\overline{Q}$ đúng, rồi suy ra mâu thuẫn.',
        teacherAnalysis: 'Rèn luyện tư duy suy luận logic chuẩn mực trong Bài 1 Chương I.',
        points: 0.75,
      },
      {
        id: 'b1_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 1: Xét mệnh đề kéo theo và mệnh đề tương đương (Bài 1.4 SBT trang 8)',
        problemStatement:
          'Cho hai mệnh đề $P$: "Số tự nhiên $n$ có chữ số tận cùng bằng $0$" và $Q$: "Số tự nhiên $n$ chia hết cho $5$". Hãy xét tính đúng sai của $P \\Rightarrow Q$, $Q \\Rightarrow P$ và $P \\Leftrightarrow Q$.',
        conclusionTarget:
          'Hãy sắp xếp các bước phân tích sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b1_d1_q4_s1',
            originalIndex: 1,
            content:
              'Xét mệnh đề thuận $P \\Rightarrow Q$: Mọi số tự nhiên có chữ số tận cùng bằng $0$ đều có dạng $10k = 5 \\cdot (2k)$ nên chia hết cho $5$. Do đó $P \\Rightarrow Q$ là mệnh đề **đúng**.',
            roleDescription: 'Xét tính đúng sai của mệnh đề thuận P => Q',
          },
          {
            id: 'b1_d1_q4_s2',
            originalIndex: 2,
            content:
              'Phát biểu mệnh đề đảo $Q \\Rightarrow P$: "Nếu số tự nhiên $n$ chia hết cho $5$ thì $n$ có chữ số tận cùng bằng $0$".',
            roleDescription: 'Phát biểu mệnh đề đảo Q => P',
          },
          {
            id: 'b1_d1_q4_s3',
            originalIndex: 3,
            content:
              'Lấy phản ví dụ $n = 15$: số $15$ chia hết cho $5$ nhưng có chữ số tận cùng bằng $5 \\ne 0$. Do đó mệnh đề đảo $Q \\Rightarrow P$ là mệnh đề **sai**.',
            roleDescription: 'Chỉ ra phản ví dụ cho mệnh đề đảo',
          },
          {
            id: 'b1_d1_q4_s4',
            originalIndex: 4,
            content:
              'Vì $P \\Rightarrow Q$ đúng nhưng $Q \\Rightarrow P$ sai nên hai mệnh đề $P$ và $Q$ không tương đương, tức là $P \\Leftrightarrow Q$ là mệnh đề **sai**.',
            roleDescription: 'Kết luận về mệnh đề tương đương P <=> Q',
          },
        ],
        pedagogicalTip: 'Chỉ cần một chiều suy luận sai thì mệnh đề tương đương $P \\Leftrightarrow Q$ lập tức sai.',
        teacherAnalysis: 'Bám sát Bài 1.4 trang 8 & 86 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-1-2': {
    extraPart1: [
      {
        id: 'b1_d2_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 1: Phủ định mệnh đề tồn tại (Bài 1.6 SBT trang 9)',
        prompt:
          'Cho mệnh đề $P: "\\exists x \\in \\mathbb{Q},\\ 2x^2 - 5x + 2 = 0"$. Mệnh đề phủ định $\\overline{P}$ của mệnh đề $P$ là:',
        options: [
          { key: 'A', content: '$\\overline{P}: "\\forall x \\in \\mathbb{Q},\\ 2x^2 - 5x + 2 \\ne 0"$.' },
          { key: 'B', content: '$\\overline{P}: "\\exists x \\in \\mathbb{Q},\\ 2x^2 - 5x + 2 \\ne 0"$.' },
          { key: 'C', content: '$\\overline{P}: "\\forall x \\notin \\mathbb{Q},\\ 2x^2 - 5x + 2 \\ne 0"$.' },
          { key: 'D', content: '$\\overline{P}: "\\forall x \\in \\mathbb{Q},\\ 2x^2 - 5x + 2 > 0"$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Phủ định của lượng từ $\\exists$ là $\\forall$, và phủ định của quan hệ $=$ là $\\ne$ (giữ nguyên miền biến $x \\in \\mathbb{Q}$).',
        pedagogicalTip: 'Không được đổi miền xác định $x \\in \\mathbb{Q}$ thành $x \\notin \\mathbb{Q}$ khi lấy phủ định!',
        points: 0.25,
      },
      {
        id: 'b1_d2_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 1: Điều kiện đủ trong hình học (Bài 1.5 SBT trang 8)',
        prompt:
          'Cho hai mệnh đề $P$: "Tam giác $ABC$ là tam giác đều" và $Q$: "Tam giác $ABC$ là tam giác cân". Khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$P$ là điều kiện đủ để có $Q$.' },
          { key: 'B', content: '$P$ là điều kiện cần để có $Q$.' },
          { key: 'C', content: '$Q$ là điều kiện đủ để có $P$.' },
          { key: 'D', content: '$P$ là điều kiện cần và đủ để có $Q$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì mọi tam giác đều đều là tam giác cân nên $P \\Rightarrow Q$ đúng. Vậy $P$ là điều kiện đủ để có $Q$, còn $Q$ là điều kiện cần để có $P$.',
        pedagogicalTip: 'Tam giác đều $\\Rightarrow$ Tam giác cân, nên "tam giác đều" là điều kiện đủ.',
        points: 0.25,
      },
      {
        id: 'b1_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 1: Chân trị của mệnh đề kéo theo',
        prompt:
          'Cho mệnh đề kéo theo $P \\Rightarrow Q$. Mệnh đề $P \\Rightarrow Q$ chỉ **sai** trong trường hợp nào sau đây?',
        options: [
          { key: 'A', content: '$P$ đúng và $Q$ sai.' },
          { key: 'B', content: '$P$ sai và $Q$ đúng.' },
          { key: 'C', content: '$P$ sai và $Q$ sai.' },
          { key: 'D', content: '$P$ đúng và $Q$ đúng.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo định nghĩa chân trị của mệnh đề kéo theo (SBT trang 6): Mệnh đề $P \\Rightarrow Q$ chỉ sai khi giả thiết $P$ đúng mà kết luận $Q$ sai.',
        pedagogicalTip: 'Từ giả thiết đúng không thể suy ra kết luận sai ($Đ \\Rightarrow S$ là Sai).',
        points: 0.25,
      },
      {
        id: 'b1_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 1: Kiểm tra mệnh đề với mọi bằng phản ví dụ (Bài 1.7 SBT trang 9)',
        prompt:
          'Để chứng minh mệnh đề "$\\forall n \\in \\mathbb{N},\\ n^2 + n + 41$ là số nguyên tố" là mệnh đề **sai**, ta có thể chọn phản ví dụ nào sau đây?',
        options: [
          { key: 'A', content: '$n = 41$' },
          { key: 'B', content: '$n = 1$' },
          { key: 'C', content: '$n = 2$' },
          { key: 'D', content: '$n = 3$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khi $n = 41$, ta có $41^2 + 41 + 41 = 41 \\cdot (41 + 1 + 1) = 41 \\cdot 43$ là hợp số (chia hết cho $41$). Do đó $n = 41$ là phản ví dụ chứng tỏ mệnh đề sai.',
        pedagogicalTip: 'Đa thức Euler $n^2 + n + 41$ nhận giá trị nguyên tố với mọi $n \\in \\{0, 1, \\dots, 39\\}$ nhưng là hợp số tại $n = 40$ và $n = 41$.',
        points: 0.25,
      },
      {
        id: 'b1_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 1: Mệnh đề tương đương trong đại số',
        prompt:
          'Với hai số thực $a, b$ bất kì, mệnh đề nào sau đây là mệnh đề **đúng**?',
        options: [
          { key: 'A', content: '$a = b \\Rightarrow a^2 = b^2$.' },
          { key: 'B', content: '$a^2 = b^2 \\Rightarrow a = b$.' },
          { key: 'C', content: '$a > b \\Rightarrow a^2 > b^2$.' },
          { key: 'D', content: '$a^2 > b^2 \\Rightarrow a > b$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Nếu $a = b$ thì bình phương hai vế được $a^2 = b^2$ (luôn đúng). Các mệnh đề B, C, D đều sai khi lấy $a = -2, b = 1$ hoặc $a = -1, b = -2$.',
        pedagogicalTip: 'Khi bình phương hai vế của bất đẳng thức hoặc khai căn $a^2 = b^2$, luôn chú ý đến các số âm.',
        points: 0.25,
      },
      {
        id: 'b1_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 1: Nhận diện định lí có mệnh đề đảo đúng',
        prompt:
          'Trong các định lí sau, định lí nào có **mệnh đề đảo** cũng là một mệnh đề đúng?',
        options: [
          { key: 'A', content: 'Nếu một tam giác có hai góc bằng nhau thì tam giác đó là tam giác cân.' },
          { key: 'B', content: 'Nếu một số tự nhiên chia hết cho $6$ thì số đó chia hết cho $3$.' },
          { key: 'C', content: 'Nếu hai góc đối đỉnh thì hai góc đó bằng nhau.' },
          { key: 'D', content: 'Nếu một tứ giác là hình chữ nhật thì tứ giác đó có hai đường chéo bằng nhau.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Mệnh đề đảo của A là: "Nếu một tam giác là tam giác cân thì nó có hai góc bằng nhau" — đây là định lí đúng. Các mệnh đề B, C, D đều có mệnh đề đảo sai.',
        pedagogicalTip: 'Khi cả định lí thuận và mệnh đề đảo đều đúng, ta có điều kiện cần và đủ.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b1_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 1: Phát biểu định lí dưới dạng điều kiện cần và điều kiện đủ (Bài 1.5 SBT trang 8)',
        problemStatement:
          'Cho hai mệnh đề $P$: "Tam giác $ABC$ có $AB^2 + AC^2 = BC^2$" và $Q$: "Tam giác $ABC$ vuông tại $A$". Hãy chứng minh $P \\Leftrightarrow Q$ và phát biểu dưới dạng điều kiện cần và đủ.',
        conclusionTarget:
          'Hãy sắp xếp các bước lập luận sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b1_d2_q2_s1',
            originalIndex: 1,
            content:
              'Xét mệnh đề $P \\Rightarrow Q$: Theo định lí Pythagore đảo, nếu tam giác $ABC$ có $AB^2 + AC^2 = BC^2$ thì tam giác $ABC$ vuông tại $A$ ($P \\Rightarrow Q$ đúng).',
            roleDescription: 'Kiểm tra chiều thuận P => Q theo định lí Pythagore đảo',
          },
          {
            id: 'b1_d2_q2_s2',
            originalIndex: 2,
            content:
              'Xét mệnh đề đảo $Q \\Rightarrow P$: Theo định lí Pythagore thuận, nếu tam giác $ABC$ vuông tại $A$ thì $AB^2 + AC^2 = BC^2$ ($Q \\Rightarrow P$ đúng).',
            roleDescription: 'Kiểm tra chiều đảo Q => P theo định lí Pythagore thuận',
          },
          {
            id: 'b1_d2_q2_s3',
            originalIndex: 3,
            content:
              'Vì cả $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng nên hai mệnh đề $P$ và $Q$ tương đương ($P \\Leftrightarrow Q$ đúng).',
            roleDescription: 'Suy ra mệnh đề tương đương P <=> Q đúng',
          },
          {
            id: 'b1_d2_q2_s4',
            originalIndex: 4,
            content:
              'Phát biểu: "Tam giác $ABC$ có $AB^2 + AC^2 = BC^2$ là điều kiện cần và đủ để tam giác $ABC$ vuông tại $A$".',
            roleDescription: 'Phát biểu bằng thuật ngữ điều kiện cần và đủ',
          },
        ],
        pedagogicalTip: 'Định lí Pythagore thuận và đảo hợp thành một mệnh đề tương đương hoàn chỉnh.',
        teacherAnalysis: 'Bám sát Bài 1.5 trang 8 & 86 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b1_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 1: Xét tính đúng sai của mệnh đề tồn tại và phủ định (Bài 1.6 SBT trang 9)',
        problemStatement:
          'Cho mệnh đề $R: "\\exists x \\in \\mathbb{Z},\\ x^2 - 3x - 4 = 0"$. Hãy xét tính đúng sai của mệnh đề $R$ và lập mệnh đề phủ định $\\overline{R}$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b1_d2_q3_s1',
            originalIndex: 1,
            content:
              'Giải phương trình $x^2 - 3x - 4 = 0$ trên tập số thực ta được hai nghiệm $x = -1$ hoặc $x = 4$.',
            roleDescription: 'Tìm nghiệm của phương trình x² - 3x - 4 = 0',
          },
          {
            id: 'b1_d2_q3_s2',
            originalIndex: 2,
            content:
              'Ta thấy cả $x = -1$ và $x = 4$ đều thuộc tập số nguyên $\\mathbb{Z}$.',
            roleDescription: 'Kiểm tra nghiệm thuộc tập số nguyên Z',
          },
          {
            id: 'b1_d2_q3_s3',
            originalIndex: 3,
            content:
              'Do tồn tại số nguyên thỏa mãn phương trình nên mệnh đề $R$ là mệnh đề **đúng**.',
            roleDescription: 'Kết luận mệnh đề R đúng',
          },
          {
            id: 'b1_d2_q3_s4',
            originalIndex: 4,
            content:
              'Mệnh đề phủ định của $R$ là $\\overline{R}: "\\forall x \\in \\mathbb{Z},\\ x^2 - 3x - 4 \\ne 0"$ (và $\\overline{R}$ là mệnh đề sai).',
            roleDescription: 'Viết mệnh đề phủ định R̄',
          },
        ],
        pedagogicalTip: 'Chú ý kiểm tra nghiệm tìm được có thuộc tập hợp đi kèm lượng từ ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}$) hay không.',
        teacherAnalysis: 'Bám sát Bài 1.6 trang 9 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b1_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 1: Chứng minh mệnh đề với mọi bằng biến đổi đại số',
        problemStatement:
          'Chứng minh mệnh đề: "Với mọi số tự nhiên $n$, tích $(n + 1)(n + 2)$ luôn là một số chẵn".',
        conclusionTarget:
          'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b1_d2_q4_s1',
            originalIndex: 1,
            content:
              'Với số tự nhiên $n$ bất kì, ta xét hai trường hợp có thể xảy ra: $n$ là số chẵn ($n = 2k$) hoặc $n$ là số lẻ ($n = 2k + 1$) với $k \\in \\mathbb{N}$.',
            roleDescription: 'Chia hai trường hợp chẵn lẻ của n',
          },
          {
            id: 'b1_d2_q4_s2',
            originalIndex: 2,
            content:
              'Trường hợp 1: Nếu $n = 2k$ thì $n + 2 = 2k + 2 = 2(k + 1)$ chia hết cho $2$, nên tích $(n + 1)(n + 2) = 2(k + 1)(2k + 1)$ là số chẵn.',
            roleDescription: 'Chứng minh tích chẵn khi n = 2k',
          },
          {
            id: 'b1_d2_q4_s3',
            originalIndex: 3,
            content:
              'Trường hợp 2: Nếu $n = 2k + 1$ thì $n + 1 = 2k + 2 = 2(k + 1)$ chia hết cho $2$, nên tích $(n + 1)(n + 2) = 2(k + 1)(2k + 3)$ cũng là số chẵn.',
            roleDescription: 'Chứng minh tích chẵn khi n = 2k + 1',
          },
          {
            id: 'b1_d2_q4_s4',
            originalIndex: 4,
            content:
              'Trong cả hai trường hợp, tích $(n + 1)(n + 2)$ đều chia hết cho $2$. Vậy với mọi $n \\in \\mathbb{N}$, $(n + 1)(n + 2)$ luôn là số chẵn.',
            roleDescription: 'Tổng hợp hai trường hợp và kết luận',
          },
        ],
        pedagogicalTip: 'Tích của hai số tự nhiên liên tiếp luôn chia hết cho $2$.',
        teacherAnalysis: 'Phương pháp xét tính chẵn lẻ vét cạn các trường hợp trong số học lớp 10.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 2: TẬP HỢP VÀ CÁC PHÉP TOÁN TRÊN TẬP HỢP ====================
  'de-on-bai-2-1': {
    extraPart1: [
      {
        id: 'b2_d1_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 2: Số tập con của tập hợp hữu hạn (Bài 1.9 SBT trang 12)',
        prompt:
          'Cho tập hợp $A = \\{a; b; c; d\\}$ gồm $4$ phần tử phân biệt. Số tập hợp con của tập hợp $A$ là:',
        options: [
          { key: 'A', content: '$16$' },
          { key: 'B', content: '$8$' },
          { key: 'C', content: '$15$' },
          { key: 'D', content: '$4$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Một tập hợp có $n$ phần tử thì có tất cả $2^n$ tập hợp con (kể cả tập rỗng $\\varnothing$ và chính nó). Với $n = 4$, số tập con là $2^4 = 16$.',
        pedagogicalTip: 'Số tập con của tập $n$ phần tử là $2^n$; số tập con khác rỗng là $2^n - 1$.',
        points: 0.25,
      },
      {
        id: 'b2_d1_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 2: Phần bù của hai tập hợp (Bài 1.11 SBT trang 12)',
        prompt:
          'Cho tập hợp $E = \\{1; 2; 3; 4; 5; 6; 7\\}$ và tập con $A = \\{2; 4; 6\\}$. Phần bù của $A$ trong $E$ (kí hiệu $C_E A$) là:',
        options: [
          { key: 'A', content: '$C_E A = \\{1; 3; 5; 7\\}$' },
          { key: 'B', content: '$C_E A = \\{2; 4; 6\\}$' },
          { key: 'C', content: '$C_E A = \\varnothing$' },
          { key: 'D', content: '$C_E A = \\{1; 2; 3; 5; 7\\}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khi $A \\subset E$, phần bù $C_E A = E \\setminus A$ gồm các phần tử thuộc $E$ nhưng không thuộc $A$: $\\{1; 3; 5; 7\\}$.',
        pedagogicalTip: 'Phần bù $C_E A$ chỉ xác định khi $A \\subset E$ và chính là hiệu $E \\setminus A$.',
        points: 0.25,
      },
      {
        id: 'b2_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 2: Giao của hai khoảng trên trục số (Ví dụ 3 SBT trang 11)',
        prompt:
          'Cho hai tập hợp $A = (-3; 5]$ và $B = [1; 8)$. Tập hợp $A \\cap B$ là:',
        options: [
          { key: 'A', content: '$[1; 5]$' },
          { key: 'B', content: '$(-3; 8)$' },
          { key: 'C', content: '$(1; 5)$' },
          { key: 'D', content: '$(-3; 1)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Biểu diễn trên trục số: các số thực vừa lớn hơn $-3$, nhỏ hơn hoặc bằng $5$, đồng thời lớn hơn hoặc bằng $1$, nhỏ hơn $8$ tạo thành đoạn $[1; 5]$.',
        pedagogicalTip: 'Kiểm tra kĩ dấu ngoặc vuông hay tròn tại hai đầu mút $1$ và $5$.',
        points: 0.25,
      },
      {
        id: 'b2_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 2: Hiệu của hai tập con của R (Bài 1.13 SBT trang 13)',
        prompt:
          'Cho hai tập hợp $A = [-2; 4]$ và $B = (1; 6]$. Tập hợp hiệu $A \\setminus B$ là:',
        options: [
          { key: 'A', content: '$[-2; 1]$' },
          { key: 'B', content: '$[-2; 1)$' },
          { key: 'C', content: '$(4; 6]$' },
          { key: 'D', content: '$[-2; 6]$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Điểm $x = 1$ thuộc $A = [-2; 4]$ nhưng **không** thuộc $B = (1; 6]$, nên $x = 1$ vẫn thuộc $A \\setminus B$. Vậy $A \\setminus B = [-2; 1]$.',
        pedagogicalTip: 'Khi gạch bỏ tập $B = (1; 6]$, ngoặc tròn tại $1$ đổi thành ngoặc vuông tại $1$ trong $A \\setminus B$.',
        points: 0.25,
      },
      {
        id: 'b2_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 2: Phần bù trên tập số thực R (Bài 1.13 SBT trang 13)',
        prompt:
          'Phần bù của nửa khoảng $(-\\infty; 3]$ trong tập số thực $\\mathbb{R}$, tức là $C_{\\mathbb{R}}(-\\infty; 3]$, bằng:',
        options: [
          { key: 'A', content: '$(3; +\\infty)$' },
          { key: 'B', content: '$[3; +\\infty)$' },
          { key: 'C', content: '$(-\\infty; 3)$' },
          { key: 'D', content: '$\\mathbb{R} \\setminus \\{3\\}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $3 \\in (-\\infty; 3]$ nên $3 \\notin \\mathbb{R} \\setminus (-\\infty; 3]$. Vậy $C_{\\mathbb{R}}(-\\infty; 3] = (3; +\\infty)$.',
        pedagogicalTip: 'Lấy phần bù trên $\\mathbb{R}$ thì ngoặc vuông `[` đổi thành ngoặc tròn `(` và ngược lại.',
        points: 0.25,
      },
      {
        id: 'b2_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 2: Công thức số phần tử của hợp hai tập hợp (Ví dụ 4 SBT trang 12)',
        prompt:
          'Cho hai tập hợp hữu hạn $A$ và $B$ biết $n(A) = 18, n(B) = 15$ và $n(A \\cap B) = 7$. Số phần tử của tập hợp $A \\cup B$ là:',
        options: [
          { key: 'A', content: '$26$' },
          { key: 'B', content: '$33$' },
          { key: 'C', content: '$25$' },
          { key: 'D', content: '$40$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Áp dụng công thức $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 18 + 15 - 7 = 26$.',
        pedagogicalTip: 'Trừ đi $n(A \\cap B)$ để không đếm lặp các phần tử chung.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b2_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 2: Liệt kê các phần tử của tập hợp từ phương trình tích (Bài 1.8 SBT trang 12)',
        problemStatement:
          'Hãy viết tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 4)(2x^2 - 5x + 2) = 0\\}$ bằng cách liệt kê các phần tử.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b2_d1_q2_s1',
            originalIndex: 1,
            content:
              'Ta có phương trình tích $(x^2 - 4)(2x^2 - 5x + 2) = 0 \\Leftrightarrow x^2 - 4 = 0$ hoặc $2x^2 - 5x + 2 = 0$.',
            roleDescription: 'Đưa phương trình tích về hai phương trình bậc hai',
          },
          {
            id: 'b2_d1_q2_s2',
            originalIndex: 2,
            content:
              'Giải $x^2 - 4 = 0$ được $x = -2$ hoặc $x = 2$; giải $2x^2 - 5x + 2 = 0$ được $x = 2$ hoặc $x = \\frac{1}{2}$.',
            roleDescription: 'Giải từng phương trình trên tập số thực',
          },
          {
            id: 'b2_d1_q2_s3',
            originalIndex: 3,
            content:
              'Đối chiếu với điều kiện $x \\in \\mathbb{Z}$, ta loại nghiệm $x = \\frac{1}{2} \\notin \\mathbb{Z}$ và nhận các nghiệm nguyên $x = -2, x = 2$.',
            roleDescription: 'Chọn các nghiệm thuộc tập số nguyên Z',
          },
          {
            id: 'b2_d1_q2_s4',
            originalIndex: 4,
            content:
              'Vậy tập hợp $A$ viết dưới dạng liệt kê các phần tử là $A = \\{-2; 2\\}$.',
            roleDescription: 'Viết tập hợp A bằng cách liệt kê phần tử',
          },
        ],
        pedagogicalTip: 'Khi viết tập hợp, mỗi phần tử chỉ được liệt kê một lần (nghiệm lặp $x = 2$ chỉ viết một lần).',
        teacherAnalysis: 'Bám sát Bài 1.8 trang 12 & 87 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b2_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 2: Xác định giao, hợp, hiệu của hai khoảng - đoạn trên R (Bài 1.13 SBT trang 13)',
        problemStatement:
          'Cho hai tập hợp $A = (-4; 2]$ và $B = [0; 5)$. Hãy xác định các tập hợp $A \\cap B$, $A \\cup B$ và $A \\setminus B$.',
        conclusionTarget:
          'Hãy sắp xếp các bước thực hiện sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b2_d1_q3_s1',
            originalIndex: 1,
            content:
              'Biểu diễn hai nửa khoảng $A = (-4; 2]$ và $B = [0; 5)$ trên trục số thực với các điểm mốc sắp xếp theo thứ tự tăng dần: $-4 < 0 < 2 < 5$.',
            roleDescription: 'Sắp xếp các đầu mút trên trục số thực',
          },
          {
            id: 'b2_d1_q3_s2',
            originalIndex: 2,
            content:
              'Phần chung của $A$ và $B$ gồm các số thực $x$ thỏa mãn $0 \\le x \\le 2$, nên $A \\cap B = [0; 2]$.',
            roleDescription: 'Tìm giao A ∩ B = [0; 2]',
          },
          {
            id: 'b2_d1_q3_s3',
            originalIndex: 3,
            content:
              'Phần gộp của $A$ và $B$ gồm các số thực $x$ thỏa mãn $-4 < x < 5$, nên $A \\cup B = (-4; 5)$.',
            roleDescription: 'Tìm hợp A ∪ B = (-4; 5)',
          },
          {
            id: 'b2_d1_q3_s4',
            originalIndex: 4,
            content:
              'Phần thuộc $A$ nhưng không thuộc $B$ gồm các số thực $x$ thỏa mãn $-4 < x < 0$ (vì $0 \\in B$), nên $A \\setminus B = (-4; 0)$.',
            roleDescription: 'Tìm hiệu A \\ B = (-4; 0)',
          },
        ],
        pedagogicalTip: 'Vì $0 \\in B$ nên khi lấy $A \\setminus B$, đầu mút $0$ không còn thuộc $A \\setminus B$ (ngoặc tròn).',
        teacherAnalysis: 'Bám sát Bài 1.13 trang 13 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b2_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 2: Giải bài toán thực tế bằng biểu đồ Ven (Ví dụ 4 SBT trang 12)',
        problemStatement:
          'Lớp 10A có $40$ học sinh, trong đó có $22$ học sinh thích môn Toán, $18$ học sinh thích môn Văn và $5$ học sinh không thích cả hai môn Toán và Văn. Hỏi có bao nhiêu học sinh thích cả hai môn Toán và Văn?',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b2_d1_q4_s1',
            originalIndex: 1,
            content:
              'Gọi $A$ là tập hợp học sinh thích môn Toán ($n(A) = 22$) và $B$ là tập hợp học sinh thích môn Văn ($n(B) = 18$).',
            roleDescription: 'Kí hiệu tập hợp A, B và số phần tử',
          },
          {
            id: 'b2_d1_q4_s2',
            originalIndex: 2,
            content:
              'Vì lớp có $40$ học sinh và có $5$ học sinh không thích cả hai môn nên số học sinh thích ít nhất một trong hai môn là $n(A \\cup B) = 40 - 5 = 35$.',
            roleDescription: 'Tính số phần tử của hợp A ∪ B',
          },
          {
            id: 'b2_d1_q4_s3',
            originalIndex: 3,
            content:
              'Áp dụng công thức số phần tử của hợp hai tập hợp: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.',
            roleDescription: 'Viết công thức liên hệ n(A ∪ B) và n(A ∩ B)',
          },
          {
            id: 'b2_d1_q4_s4',
            originalIndex: 4,
            content:
              'Thay số vào công thức: $n(A \\cap B) = 22 + 18 - 35 = 5$. Vậy có $5$ học sinh thích cả hai môn Toán và Văn.',
            roleDescription: 'Tính n(A ∩ B) và kết luận',
          },
        ],
        pedagogicalTip: 'Đừng quên trừ đi số học sinh không tham gia nhóm nào trước khi tính $n(A \\cup B)$.',
        teacherAnalysis: 'Bám sát Ví dụ 4 trang 12 & Bài 1.15 trang 13 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-2-2': {
    extraPart1: [
      {
        id: 'b2_d2_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 2: Tìm điều kiện tham số để A ⊂ B (Bài 1.14 SBT trang 13)',
        prompt:
          'Cho hai tập hợp $A = [1; 4]$ và $B = (m; m + 5)$. Tập hợp $A$ là tập con của tập hợp $B$ ($A \\subset B$) khi và chỉ khi:',
        options: [
          { key: 'A', content: '$-1 < m < 1$' },
          { key: 'B', content: '$-1 \\le m \\le 1$' },
          { key: 'C', content: '$m < 1$' },
          { key: 'D', content: '$m > -1$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Để $[1; 4] \\subset (m; m + 5)$, ta cần $\\begin{cases} m < 1 \\\\ m + 5 > 4 \\end{cases} \\Leftrightarrow \\begin{cases} m < 1 \\\\ m > -1 \\end{cases} \\Leftrightarrow -1 < m < 1$ (không xảy ra dấu bằng vì $B$ là khoảng mở còn $A$ là đoạn đóng).',
        pedagogicalTip: 'Khi tập lớn $B$ mang ngoặc tròn còn tập con $A$ mang ngoặc vuông thì bất đẳng thức ở đầu mút là ngặt ($<$).',
        points: 0.25,
      },
      {
        id: 'b2_d2_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 2: Tìm điều kiện tham số để A ∩ B = ∅ (Bài 1.14 SBT trang 13)',
        prompt:
          'Cho hai tập hợp $A = (-\\infty; 2]$ và $B = (m; +\\infty)$. Điều kiện của tham số $m$ để $A \\cap B = \\varnothing$ là:',
        options: [
          { key: 'A', content: '$m \\ge 2$' },
          { key: 'B', content: '$m > 2$' },
          { key: 'C', content: '$m \\le 2$' },
          { key: 'D', content: '$m < 2$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Hai tập $(-\\infty; 2]$ và $(m; +\\infty)$ rời nhau khi $m \\ge 2$ (tại $m = 2$ thì $(-\\infty; 2] \\cap (2; +\\infty) = \\varnothing$ vì $2 \\notin (2; +\\infty)$).',
        pedagogicalTip: 'Luôn thử trực tiếp giá trị biên $m = 2$ để quyết định có lấy dấu bằng hay không.',
        points: 0.25,
      },
      {
        id: 'b2_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 2: Phép toán tập hợp các ước số tự nhiên',
        prompt:
          'Gọi $A$ là tập hợp các ước nguyên dương của $12$ và $B$ là tập hợp các ước nguyên dương của $18$. Tập hợp $A \\cap B$ là:',
        options: [
          { key: 'A', content: '$\\{1; 2; 3; 6\\}$' },
          { key: 'B', content: '$\\{1; 2; 3; 4; 6\\}$' },
          { key: 'C', content: '$\\{6\\}$' },
          { key: 'D', content: '$\\{1; 2; 3; 6; 9; 12; 18\\}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $A = \\{1; 2; 3; 4; 6; 12\\}$ và $B = \\{1; 2; 3; 6; 9; 18\\}$. Suy ra $A \\cap B = \\{1; 2; 3; 6\\}$ (tập các ước nguyên dương của $\\text{ƯCLN}(12, 18) = 6$).',
        pedagogicalTip: 'Giao của tập ước của $a$ và tập ước của $b$ chính là tập ước của $\\text{ƯCLN}(a, b)$.',
        points: 0.25,
      },
      {
        id: 'b2_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 2: Quan hệ bao hàm giữa các tập hợp tứ giác',
        prompt:
          'Gọi $T$ là tập hợp các hình thang, $B$ là tập hợp các hình bình hành, $C$ là tập hợp các hình chữ nhật, $V$ là tập hợp các hình vuông. Quan hệ bao hàm nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$V \\subset C \\subset B \\subset T$' },
          { key: 'B', content: '$T \\subset B \\subset C \\subset V$' },
          { key: 'C', content: '$V \\subset B \\subset C \\subset T$' },
          { key: 'D', content: '$C \\subset V \\subset B \\subset T$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Mọi hình vuông đều là hình chữ nhật ($V \\subset C$), mọi hình chữ nhật đều là hình bình hành ($C \\subset B$), và mọi hình bình hành đều là hình thang ($B \\subset T$).',
        pedagogicalTip: 'Tập hợp có điều kiện càng chặt thì càng nhỏ (nằm bên trong).',
        points: 0.25,
      },
      {
        id: 'b2_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 2: Đếm số giá trị nguyên trong giao hai tập hợp',
        prompt:
          'Cho hai tập hợp $A = [-5; 3)$ và $B = (-2; 6]$. Có bao nhiêu số nguyên thuộc tập hợp $A \\cap B$?',
        options: [
          { key: 'A', content: '$4$' },
          { key: 'B', content: '$5$' },
          { key: 'C', content: '$6$' },
          { key: 'D', content: '$3$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $A \\cap B = (-2; 3)$. Các số nguyên thuộc khoảng $(-2; 3)$ là $\\{-1; 0; 1; 2\\}$ (có $4$ số nguyên).',
        pedagogicalTip: 'Chú ý cả hai đầu $-2$ và $3$ đều mang dấu ngoặc tròn nên không lấy $-2$ và $3$.',
        points: 0.25,
      },
      {
        id: 'b2_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 2: Bài toán thực tế 3 tập hợp (Bài 1.16 SBT trang 14)',
        prompt:
          'Cho hai tập hợp $A, B$ thỏa mãn $n(A \\setminus B) = 10, n(B \\setminus A) = 8$ và $n(A \\cap B) = 5$. Số phần tử của tập hợp $A \\cup B$ là:',
        options: [
          { key: 'A', content: '$23$' },
          { key: 'B', content: '$18$' },
          { key: 'C', content: '$28$' },
          { key: 'D', content: '$13$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ba tập hợp $A \\setminus B$, $B \\setminus A$ và $A \\cap B$ đôi một rời nhau và có hợp bằng $A \\cup B$, nên $n(A \\cup B) = 10 + 8 + 5 = 23$.',
        pedagogicalTip: 'Trên biểu đồ Ven, $A \\cup B$ được chia thành 3 miền rời nhau: $A \\setminus B$, $A \\cap B$ và $B \\setminus A$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b2_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 2: Tìm tham số m để giao của hai tập hợp khác rỗng (Bài 1.14 SBT trang 13)',
        problemStatement:
          'Cho hai tập hợp khác rỗng $A = [m - 1; 4]$ và $B = (-2; 2m + 2]$ với $m \\in \\mathbb{R}$. Tìm tất cả các giá trị của $m$ để $A \\cap B \\ne \\varnothing$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b2_d2_q2_s1',
            originalIndex: 1,
            content:
              'Điều kiện để hai tập hợp $A, B$ tồn tại (khác rỗng) là $\\begin{cases} m - 1 \\le 4 \\\\ -2 < 2m + 2 \\end{cases} \\Leftrightarrow -1 < m \\le 5$.',
            roleDescription: 'Tìm điều kiện để hai tập A, B khác rỗng',
          },
          {
            id: 'b2_d2_q2_s2',
            originalIndex: 2,
            content:
              'Ta tìm điều kiện ngược lại để $A \\cap B = \\varnothing$: trên trục số, $A$ và $B$ rời nhau khi $2m + 2 < m - 1$ hoặc $4 \\le -2$ (vô lí).',
            roleDescription: 'Thiết lập điều kiện để A ∩ B = ∅',
          },
          {
            id: 'b2_d2_q2_s3',
            originalIndex: 3,
            content:
              'Suy ra $A \\cap B \\ne \\varnothing \\Leftrightarrow 2m + 2 \\ge m - 1 \\Leftrightarrow m \\ge -3$.',
            roleDescription: 'Lấy phần bù để có điều kiện A ∩ B ≠ ∅',
          },
          {
            id: 'b2_d2_q2_s4',
            originalIndex: 4,
            content:
              'Kết hợp với điều kiện tồn tại $-1 < m \\le 5$, ta được kết quả cuối cùng là $-1 < m \\le 5$.',
            roleDescription: 'Kết hợp điều kiện xác định và kết luận',
          },
        ],
        pedagogicalTip: 'Đừng quên đặt điều kiện đầu mút trái nhỏ hơn hoặc bằng đầu mút phải để các tập $A, B$ có nghĩa.',
        teacherAnalysis: 'Bám sát Bài 1.14 trang 13 & 87 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b2_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 2: Chứng minh đẳng thức tập hợp',
        problemStatement:
          'Cho hai tập hợp $A = (-\\infty; 2]$ và $B = (-1; +\\infty)$. Hãy xác định tập hợp $C_{\\mathbb{R}}(A \\cap B)$ và kiểm tra đẳng thức $C_{\\mathbb{R}}(A \\cap B) = (C_{\\mathbb{R}}A) \\cup (C_{\\mathbb{R}}B)$.',
        conclusionTarget:
          'Hãy sắp xếp các bước thực hiện sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b2_d2_q3_s1',
            originalIndex: 1,
            content:
              'Tìm giao của hai tập hợp $A$ và $B$: $A \\cap B = (-\\infty; 2] \\cap (-1; +\\infty) = (-1; 2]$.',
            roleDescription: 'Tính A ∩ B = (-1; 2]',
          },
          {
            id: 'b2_d2_q3_s2',
            originalIndex: 2,
            content:
              'Lấy phần bù của $A \\cap B$ trong $\\mathbb{R}$: $C_{\\mathbb{R}}(A \\cap B) = \\mathbb{R} \\setminus (-1; 2] = (-\\infty; -1] \\cup (2; +\\infty)$.',
            roleDescription: 'Tính vế trái C_R(A ∩ B)',
          },
          {
            id: 'b2_d2_q3_s3',
            originalIndex: 3,
            content:
              'Tính phần bù của từng tập hợp: $C_{\\mathbb{R}}A = \\mathbb{R} \\setminus (-\\infty; 2] = (2; +\\infty)$ và $C_{\\mathbb{R}}B = \\mathbb{R} \\setminus (-1; +\\infty) = (-\\infty; -1]$.',
            roleDescription: 'Tính C_R(A) và C_R(B)',
          },
          {
            id: 'b2_d2_q3_s4',
            originalIndex: 4,
            content:
              'Lấy hợp hai phần bù vừa tìm được: $(C_{\\mathbb{R}}A) \\cup (C_{\\mathbb{R}}B) = (-\\infty; -1] \\cup (2; +\\infty) = C_{\\mathbb{R}}(A \\cap B)$ (điều phải kiểm tra).',
            roleDescription: 'So sánh hai vế và kết luận',
          },
        ],
        pedagogicalTip: 'Đây là minh họa cụ thể cho luật De Morgan: Phần bù của giao bằng hợp của hai phần bù.',
        teacherAnalysis: 'Rèn luyện kỹ năng lấy phần bù của các khoảng, đoạn trên trục số thực.',
        points: 0.75,
      },
      {
        id: 'b2_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 2: Bài toán khảo sát ba môn thể thao bằng biểu đồ Ven (Bài 1.16 SBT trang 14)',
        problemStatement:
          'Một nhóm gồm $35$ học sinh đăng kí tham gia ít nhất một trong ba câu lạc bộ: Bóng đá ($A$), Bóng rổ ($B$), Cầu lông ($C$). Biết $n(A) = 18, n(B) = 15, n(C) = 12$; số học sinh tham gia đồng thời hai CLB là $n(A \\cap B) = 5, n(B \\cap C) = 4, n(C \\cap A) = 3$. Hãy tính số học sinh tham gia cả ba câu lạc bộ.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b2_d2_q4_s1',
            originalIndex: 1,
            content:
              'Vì mọi học sinh trong nhóm đều tham gia ít nhất một câu lạc bộ nên $n(A \\cup B \\cup C) = 35$.',
            roleDescription: 'Xác định số phần tử của hợp 3 tập hợp',
          },
          {
            id: 'b2_d2_q4_s2',
            originalIndex: 2,
            content:
              'Áp dụng công thức lực lượng của hợp ba tập hợp: $n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C)$.',
            roleDescription: 'Viết công thức bao hàm - loại trừ cho 3 tập hợp',
          },
          {
            id: 'b2_d2_q4_s3',
            originalIndex: 3,
            content:
              'Thay các số liệu đã biết vào phương trình: $35 = (18 + 15 + 12) - (5 + 4 + 3) + n(A \\cap B \\cap C) = 45 - 12 + n(A \\cap B \\cap C)$.',
            roleDescription: 'Thay số vào công thức',
          },
          {
            id: 'b2_d2_q4_s4',
            originalIndex: 4,
            content:
              'Giải phương trình $35 = 33 + n(A \\cap B \\cap C)$, ta được $n(A \\cap B \\cap C) = 2$. Vậy có $2$ học sinh tham gia cả ba câu lạc bộ.',
            roleDescription: 'Tính n(A ∩ B ∩ C) và kết luận',
          },
        ],
        pedagogicalTip: 'Công thức hợp 3 tập hợp: Tổng đơn $-$ Tổng đôi $+$ Giao ba.',
        teacherAnalysis: 'Bám sát Bài 1.16 trang 14 & 87 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 3: BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN ====================
  'de-on-bai-3-1': {
    extraPart1: [
      {
        id: 'b3_d1_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 3: Đường thẳng bờ đi qua gốc tọa độ (Bài 2.1c SBT trang 18)',
        prompt:
          'Khi biểu diễn miền nghiệm của bất phương trình $2x - y > 0$ trên mặt phẳng tọa độ $Oxy$, vì đường thẳng bờ $d: 2x - y = 0$ đi qua gốc tọa độ $O(0; 0)$ nên ta có thể chọn điểm thử là $M(1; 0)$. Khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: 'Miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $M(1; 0)$ (không kể bờ $d$).' },
          { key: 'B', content: 'Miền nghiệm là nửa mặt phẳng bờ $d$ không chứa điểm $M(1; 0)$ (không kể bờ $d$).' },
          { key: 'C', content: 'Miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $M(1; 0)$ (kể cả bờ $d$).' },
          { key: 'D', content: 'Điểm $M(1; 0)$ nằm trên đường thẳng bờ $d$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Thay $M(1; 0)$ vào $2x - y > 0$ ta được $2\\cdot 1 - 0 = 2 > 0$ (đúng). Vì dấu bất phương trình là $>$ ngặt nên miền nghiệm là nửa mặt phẳng bờ $d$ chứa $M(1; 0)$ và không kể bờ $d$.',
        pedagogicalTip: 'Khi $c = 0$ (đường thẳng bờ qua gốc $O$), hãy chọn điểm thử $M(1; 0)$ hoặc $N(0; 1)$.',
        points: 0.25,
      },
      {
        id: 'b3_d1_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 3: Kiểm tra cặp số thuộc miền nghiệm có tham số',
        prompt:
          'Cặp số $(2; -1)$ là một nghiệm của bất phương trình $mx + 3y - 5 \\le 0$ khi và chỉ khi tham số $m$ thỏa mãn:',
        options: [
          { key: 'A', content: '$m \\le 4$' },
          { key: 'B', content: '$m \\ge 4$' },
          { key: 'C', content: '$m < 4$' },
          { key: 'D', content: '$m \\le 1$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Thay $x = 2, y = -1$ vào bất phương trình: $2m + 3(-1) - 5 \\le 0 \\Leftrightarrow 2m - 8 \\le 0 \\Leftrightarrow m \\le 4$.',
        pedagogicalTip: 'Thay trực tiếp tọa độ điểm vào bất phương trình để giải bất phương trình bậc nhất theo $m$.',
        points: 0.25,
      },
      {
        id: 'b3_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 3: Bất phương trình khuyết một ẩn',
        prompt:
          'Trên mặt phẳng tọa độ $Oxy$, miền nghiệm của bất phương trình $y - 3 \\le 0$ là:',
        options: [
          { key: 'A', content: 'Nửa mặt phẳng bờ là đường thẳng $y = 3$ (song song với trục $Ox$) chứa gốc tọa độ $O(0; 0)$, kể cả bờ.' },
          { key: 'B', content: 'Nửa mặt phẳng bờ là đường thẳng $x = 3$ (song song với trục $Oy$) chứa gốc tọa độ $O(0; 0)$, kể cả bờ.' },
          { key: 'C', content: 'Nửa mặt phẳng bờ là đường thẳng $y = 3$ không chứa gốc tọa độ $O(0; 0)$.' },
          { key: 'D', content: 'Tập hợp các điểm nằm trên đường thẳng $y = 3$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bất phương trình $0x + y - 3 \\le 0$ có đường thẳng bờ $y = 3$ song song với trục hoành $Ox$. Thay $O(0; 0)$ được $-3 \\le 0$ (đúng), nên miền nghiệm chứa $O(0; 0)$ kể cả bờ.',
        pedagogicalTip: 'Bất phương trình $y \\le c$ hoặc $x \\le c$ vẫn là bất phương trình bậc nhất hai ẩn (với một hệ số bằng $0$).',
        points: 0.25,
      },
      {
        id: 'b3_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 3: Xác định bất phương trình từ hai điểm cắt trục tọa độ (Bài 2.2 SBT trang 18)',
        prompt:
          'Đường thẳng bờ $d$ đi qua hai điểm $A(3; 0)$ và $B(0; 2)$. Bất phương trình nào sau đây nhận nửa mặt phẳng bờ $d$ **không** chứa gốc tọa độ $O(0; 0)$ (kể cả bờ $d$) làm miền nghiệm?',
        options: [
          { key: 'A', content: '$2x + 3y \\ge 6$' },
          { key: 'B', content: '$2x + 3y \\le 6$' },
          { key: 'C', content: '$3x + 2y \\ge 6$' },
          { key: 'D', content: '$2x + 3y > 6$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đường thẳng qua $A(3; 0)$ và $B(0; 2)$ có phương trình $\\frac{x}{3} + \\frac{y}{2} = 1 \\Leftrightarrow 2x + 3y = 6$. Vì miền nghiệm không chứa $O(0; 0)$ và kể cả bờ nên bất phương trình là $2x + 3y \\ge 6$.',
        pedagogicalTip: 'Dùng phương trình đoạn chắn $\\frac{x}{a} + \\frac{y}{b} = 1$ để lập nhanh phương trình đường thẳng bờ.',
        points: 0.25,
      },
      {
        id: 'b3_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 3: Mô hình hóa bài toán thời gian sản xuất (Bài 2.3 SBT trang 18)',
        prompt:
          'Một xưởng mộc sản xuất hai loại bàn ($x$ chiếc) và ghế ($y$ chiếc). Để đóng xong $1$ chiếc bàn cần $4$ giờ công và đóng xong $1$ chiếc ghế cần $2$ giờ công. Biết tổng số giờ công trong tuần không vượt quá $120$ giờ. Bất phương trình biểu thị mối liên hệ giữa $x$ và $y$ là:',
        options: [
          { key: 'A', content: '$2x + y \\le 60$' },
          { key: 'B', content: '$4x + 2y \\ge 120$' },
          { key: 'C', content: '$x + 2y \\le 60$' },
          { key: 'D', content: '$4x + 2y < 120$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tổng số giờ công là $4x + 2y \\le 120$. Chia cả hai vế cho $2$ ta được $2x + y \\le 60$.',
        pedagogicalTip: 'Cụm từ "không vượt quá" luôn tương ứng với dấu $\\le$.',
        points: 0.25,
      },
      {
        id: 'b3_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 3: Tính diện tích tam giác tạo bởi đường thẳng bờ và hai trục tọa độ',
        prompt:
          'Đường thẳng bờ $d$ của bất phương trình $3x + 4y \\le 12$ tạo với hai trục tọa độ $Ox, Oy$ một tam giác $OAB$. Diện tích của tam giác $OAB$ bằng:',
        options: [
          { key: 'A', content: '$6$' },
          { key: 'B', content: '$12$' },
          { key: 'C', content: '$7$' },
          { key: 'D', content: '$24$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Đường thẳng $3x + 4y = 12$ cắt $Ox$ tại $A(4; 0)$ và cắt $Oy$ tại $B(0; 3)$. Diện tích $\\triangle OAB$ vuông tại $O$ là $S = \\frac{1}{2} \\cdot OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 3 = 6$.',
        pedagogicalTip: 'Cho $y = 0$ tìm $OA$, cho $x = 0$ tìm $OB$, rồi tính $S = \\frac{1}{2}OA \\cdot OB$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b3_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 3: Xác định bất phương trình từ miền nghiệm trên hình vẽ (Bài 2.2 SBT trang 18)',
        tikzType: 'bpt_halfplane_2x_y_4',
        problemStatement:
          'Trên mặt phẳng tọa độ $Oxy$, miền không bị gạch (không kể đường thẳng bờ $d$) có bờ $d$ đi qua hai điểm $A(-2; 0)$ và $B(0; 4)$, đồng thời miền đó chứa gốc tọa độ $O(0; 0)$. Hãy tìm bất phương trình bậc nhất hai ẩn có miền nghiệm là miền đã cho.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b3_d1_q2_s1',
            originalIndex: 1,
            content:
              'Đường thẳng bờ $d$ cắt trục $Ox$ tại $A(-2; 0)$ và cắt trục $Oy$ tại $B(0; 4)$ nên có phương trình đoạn chắn $\\frac{x}{-2} + \\frac{y}{4} = 1 \\Leftrightarrow 2x - y + 4 = 0$.',
            roleDescription: 'Viết phương trình đường thẳng bờ d: 2x - y + 4 = 0',
          },
          {
            id: 'b3_d1_q2_s2',
            originalIndex: 2,
            content:
              'Thay tọa độ gốc $O(0; 0)$ thuộc miền nghiệm vào vế trái $2x - y + 4$, ta được $2\\cdot 0 - 0 + 4 = 4 > 0$.',
            roleDescription: 'Thử điểm O(0; 0) thuộc miền nghiệm vào biểu thức',
          },
          {
            id: 'b3_d1_q2_s3',
            originalIndex: 3,
            content:
              'Vì miền nghiệm không kể đường thẳng bờ $d$ nên bất phương trình mang dấu lớn hơn ngặt ($>$).',
            roleDescription: 'Xác định dấu bất phương trình không kể bờ d',
          },
          {
            id: 'b3_d1_q2_s4',
            originalIndex: 4,
            content:
              'Vậy bất phương trình cần tìm là $2x - y + 4 > 0$ (hay $2x - y > -4$).',
            roleDescription: 'Kết luận bất phương trình cần tìm',
          },
        ],
        pedagogicalTip: 'Luôn kiểm tra xem miền nghiệm có kể bờ $d$ hay không để chọn dấu $>$ hay $\\ge$.',
        teacherAnalysis: 'Bám sát Bài 2.2 trang 18 & 88 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b3_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 3: Giải bài toán thực tế điểm thưởng bán hàng (Bài 2.4 SBT trang 18)',
        problemStatement:
          'Anh An làm việc tại một cửa hàng điện máy: mỗi chiếc máy giặt bán được thưởng $0{,}6$ triệu đồng, mỗi chiếc tủ lạnh bán được thưởng $1{,}3$ triệu đồng. Tháng này anh An muốn nhận được ít nhất $10$ triệu đồng tiền thưởng. Nếu anh bán được $7$ chiếc máy giặt thì anh cần bán ít nhất bao nhiêu chiếc tủ lạnh?',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b3_d1_q3_s1',
            originalIndex: 1,
            content:
              'Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số máy giặt và số tủ lạnh anh An bán được trong tháng.',
            roleDescription: 'Gọi ẩn x, y và đặt điều kiện tự nhiên',
          },
          {
            id: 'b3_d1_q3_s2',
            originalIndex: 2,
            content:
              'Tổng tiền thưởng là $0{,}6x + 1{,}3y$ (triệu đồng). Để đạt mục tiêu từ $10$ triệu đồng trở lên, ta có bất phương trình: $0{,}6x + 1{,}3y \\ge 10$.',
            roleDescription: 'Lập bất phương trình tiền thưởng',
          },
          {
            id: 'b3_d1_q3_s3',
            originalIndex: 3,
            content:
              'Thay $x = 7$ vào bất phương trình: $0{,}6 \\cdot 7 + 1{,}3y \\ge 10 \\Leftrightarrow 1{,}3y \\ge 5{,}8 \\Leftrightarrow y \\ge \\frac{58}{13} \\approx 4{,}46$.',
            roleDescription: 'Thay x = 7 và giải bất phương trình theo y',
          },
          {
            id: 'b3_d1_q3_s4',
            originalIndex: 4,
            content:
              'Vì số tủ lạnh $y$ phải là số tự nhiên nên $y \\ge 5$. Vậy anh An cần bán ít nhất $5$ chiếc tủ lạnh.',
            roleDescription: 'Làm tròn lên theo điều kiện nguyên và kết luận',
          },
        ],
        pedagogicalTip: 'Khi $y \\ge 4{,}46$ và $y \\in \\mathbb{N}$, giá trị nguyên nhỏ nhất thỏa mãn là $y = 5$.',
        teacherAnalysis: 'Bám sát Bài 2.4 trang 18 & 88 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b3_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 3: Biểu diễn miền nghiệm khi đường thẳng bờ qua gốc tọa độ (Bài 2.1c SBT trang 18)',
        problemStatement:
          'Hãy biểu diễn miền nghiệm của bất phương trình $3x + y > 0$ trên mặt phẳng tọa độ $Oxy$.',
        conclusionTarget:
          'Hãy sắp xếp các bước thực hiện sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b3_d1_q4_s1',
            originalIndex: 1,
            content:
              'Vẽ đường thẳng bờ $d: 3x + y = 0$ đi qua gốc tọa độ $O(0; 0)$ và điểm $A(1; -3)$ trên mặt phẳng tọa độ $Oxy$.',
            roleDescription: 'Vẽ đường thẳng bờ d: 3x + y = 0',
          },
          {
            id: 'b3_d1_q4_s2',
            originalIndex: 2,
            content:
              'Vì gốc tọa độ $O(0; 0)$ nằm trên đường thẳng $d$ nên ta chọn điểm thử $M(1; 0)$ không thuộc đường thẳng $d$.',
            roleDescription: 'Chọn điểm thử M(1; 0) ngoài đường thẳng d',
          },
          {
            id: 'b3_d1_q4_s3',
            originalIndex: 3,
            content:
              'Thay tọa độ $M(1; 0)$ vào vế trái của bất phương trình ta được $3\\cdot 1 + 0 = 3 > 0$ (bất đẳng thức đúng).',
            roleDescription: 'Kiểm tra dấu của biểu thức tại M(1; 0)',
          },
          {
            id: 'b3_d1_q4_s4',
            originalIndex: 4,
            content:
              'Kết luận: Miền nghiệm của bất phương trình $3x + y > 0$ là nửa mặt phẳng bờ $d$ chứa điểm $M(1; 0)$, không kể đường thẳng bờ $d$.',
            roleDescription: 'Kết luận miền nghiệm',
          },
        ],
        pedagogicalTip: 'Tuyệt đối không dùng $O(0; 0)$ làm điểm thử khi hệ số tự do $c = 0$.',
        teacherAnalysis: 'Bám sát Bài 2.1c trang 18 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-3-2': {
    extraPart1: [
      {
        id: 'b3_d2_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 3: Biểu diễn miền nghiệm của bất phương trình chứa ngoặc (Bài 2.1d SBT trang 18)',
        prompt:
          'Bất phương trình $2(x - 1) + 3(y + 2) \\le 4$ tương đương với bất phương trình bậc nhất hai ẩn nào sau đây?',
        options: [
          { key: 'A', content: '$2x + 3y \\le 0$' },
          { key: 'B', content: '$2x + 3y \\le 8$' },
          { key: 'C', content: '$2x + 3y \\ge 0$' },
          { key: 'D', content: '$2x + 3y \\le 4$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khai triển vế trái: $2x - 2 + 3y + 6 \\le 4 \\Leftrightarrow 2x + 3y + 4 \\le 4 \\Leftrightarrow 2x + 3y \\le 0$.',
        pedagogicalTip: 'Thu gọn bất phương trình về dạng chuẩn $ax + by \\le c$ trước khi vẽ đường thẳng bờ.',
        points: 0.25,
      },
      {
        id: 'b3_d2_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 3: Kiểm tra điểm thuộc góc phần tư trong miền nghiệm',
        prompt:
          'Miền nghiệm của bất phương trình $x + y + 2 < 0$ **không** chứa điểm nào thuộc góc phần tư thứ mấy của hệ trục tọa độ $Oxy$?',
        options: [
          { key: 'A', content: 'Góc phần tư thứ I (nơi $x > 0, y > 0$).' },
          { key: 'B', content: 'Góc phần tư thứ II (nơi $x < 0, y > 0$).' },
          { key: 'C', content: 'Góc phần tư thứ III (nơi $x < 0, y < 0$).' },
          { key: 'D', content: 'Góc phần tư thứ IV (nơi $x > 0, y < 0$).' },
        ],
        correctAnswer: 'A',
        explanation:
          'Trong góc phần tư thứ I, mọi điểm đều có $x > 0, y > 0 \\Rightarrow x + y + 2 > 2 > 0$, nên không có điểm nào thỏa mãn $x + y + 2 < 0$.',
        pedagogicalTip: 'Xét dấu của $x, y$ trong góc phần tư thứ I ($x > 0, y > 0$) để loại trừ nhanh.',
        points: 0.25,
      },
      {
        id: 'b3_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 3: Bài toán thực tế nhiên liệu tàu thuyền (Bài 2.6 SBT trang 19)',
        prompt:
          'Một chiếc thuyền máy chạy xuôi dòng tiêu thụ $1{,}5$ lít nhiên liệu mỗi giờ và chạy ngược dòng tiêu thụ $2{,}5$ lít nhiên liệu mỗi giờ. Nếu thuyền chạy xuôi dòng trong $x$ giờ và ngược dòng trong $y$ giờ với lượng nhiên liệu mang theo là $15$ lít thì bất phương trình nào sau đây biểu thị điều kiện của $x, y$?',
        options: [
          { key: 'A', content: '$3x + 5y \\le 30$' },
          { key: 'B', content: '$3x + 5y \\ge 30$' },
          { key: 'C', content: '$1{,}5x + 2{,}5y > 15$' },
          { key: 'D', content: '$5x + 3y \\le 30$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tổng lượng nhiên liệu tiêu thụ không vượt quá $15$ lít: $1{,}5x + 2{,}5y \\le 15 \\Leftrightarrow 3x + 5y \\le 30$.',
        pedagogicalTip: 'Nhân cả hai vế với $2$ để khử số thập phân.',
        points: 0.25,
      },
      {
        id: 'b3_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 3: Tìm tham số m để hai điểm nằm về hai phía của đường thẳng bờ',
        prompt:
          'Cho bất phương trình $3x - 2y + m > 0$. Biết điểm $A(1; 1)$ thuộc miền nghiệm và gốc tọa độ $O(0; 0)$ không thuộc miền nghiệm của bất phương trình. Khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$-1 < m \\le 0$' },
          { key: 'B', content: '$m > 0$' },
          { key: 'C', content: '$m < -1$' },
          { key: 'D', content: '$-1 \\le m < 0$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $A(1; 1)$ thuộc miền nghiệm nên $3(1) - 2(1) + m > 0 \\Leftrightarrow m > -1$. Vì $O(0; 0)$ không thuộc miền nghiệm nên $3(0) - 2(0) + m \\le 0 \\Leftrightarrow m \\le 0$. Vậy $-1 < m \\le 0$.',
        pedagogicalTip: 'Điểm không thuộc miền nghiệm của $f(x, y) > 0$ thì thỏa mãn $f(x, y) \\le 0$ (có dấu bằng!).',
        points: 0.25,
      },
      {
        id: 'b3_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 3: Bất phương trình có đường thẳng bờ song song trục tung Oy',
        prompt:
          'Miền nghiệm của bất phương trình $2x + 6 \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:',
        options: [
          { key: 'A', content: 'Nửa mặt phẳng bờ là đường thẳng $x = -3$ chứa gốc tọa độ $O(0; 0)$, kể cả bờ.' },
          { key: 'B', content: 'Nửa mặt phẳng bờ là đường thẳng $x = -3$ không chứa gốc tọa độ $O(0; 0)$.' },
          { key: 'C', content: 'Nửa mặt phẳng bờ là đường thẳng $y = -3$ chứa gốc tọa độ $O(0; 0)$.' },
          { key: 'D', content: 'Nửa mặt phẳng bờ là đường thẳng $x = 3$ chứa gốc tọa độ $O(0; 0)$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $2x + 6 \\ge 0 \\Leftrightarrow x \\ge -3$. Đường thẳng bờ $x = -3$ song song với trục $Oy$ và gốc tọa độ $O(0; 0)$ thỏa mãn $0 \\ge -3$.',
        pedagogicalTip: 'Đường thẳng $x = x_0$ luôn vuông góc với trục hoành $Ox$ (song song với $Oy$).',
        points: 0.25,
      },
      {
        id: 'b3_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 3: Chu vi tam giác giới hạn bởi đường thẳng bờ và hai trục tọa độ',
        prompt:
          'Đường thẳng bờ $d$ của bất phương trình $4x + 3y \\le 12$ cắt hai trục tọa độ $Ox, Oy$ lần lượt tại $A$ và $B$. Chu vi của tam giác $OAB$ bằng:',
        options: [
          { key: 'A', content: '$12$' },
          { key: 'B', content: '$6$' },
          { key: 'C', content: '$15$' },
          { key: 'D', content: '$7$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Cho $y = 0 \\Rightarrow x = 3 \\Rightarrow OA = 3$; cho $x = 0 \\Rightarrow y = 4 \\Rightarrow OB = 4$. Khi đó $AB = \\sqrt{3^2 + 4^2} = 5$. Chu vi $\\triangle OAB$ là $3 + 4 + 5 = 12$.',
        pedagogicalTip: 'Tam giác vuông $OAB$ có bộ ba cạnh Pythagore $(3, 4, 5)$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b3_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 3: Thu gọn và biểu diễn miền nghiệm bất phương trình (Bài 2.1d SBT trang 18)',
        problemStatement:
          'Hãy rút gọn và biểu diễn miền nghiệm của bất phương trình $\\frac{x - y}{2} + \\frac{x + y}{3} \\le 1$ trên mặt phẳng tọa độ $Oxy$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b3_d2_q2_s1',
            originalIndex: 1,
            content:
              'Quy đồng mẫu số (nhân hai vế với $6 > 0$): $3(x - y) + 2(x + y) \\le 6 \\Leftrightarrow 5x - y \\le 6$.',
            roleDescription: 'Quy đồng và thu gọn về dạng chuẩn 5x - y <= 6',
          },
          {
            id: 'b3_d2_q2_s2',
            originalIndex: 2,
            content:
              'Trên mặt phẳng tọa độ $Oxy$, vẽ đường thẳng bờ $d: 5x - y = 6$ đi qua hai điểm $(0; -6)$ và $(1; -1)$.',
            roleDescription: 'Vẽ đường thẳng bờ d: 5x - y = 6',
          },
          {
            id: 'b3_d2_q2_s3',
            originalIndex: 3,
            content:
              'Lấy gốc tọa độ $O(0; 0)$ không thuộc $d$, thay vào vế trái được $5\\cdot 0 - 0 = 0 \\le 6$ (thỏa mãn bất phương trình).',
            roleDescription: 'Thử điểm O(0; 0) vào bất phương trình 5x - y <= 6',
          },
          {
            id: 'b3_d2_q2_s4',
            originalIndex: 4,
            content:
              'Vậy miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O(0; 0)$, kể cả đường thẳng bờ $d$.',
            roleDescription: 'Kết luận miền nghiệm',
          },
        ],
        pedagogicalTip: 'Khi nhân cả hai vế của bất phương trình với mẫu chung dương, chiều bất phương trình giữ nguyên.',
        teacherAnalysis: 'Bám sát Bài 2.1d trang 18 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b3_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 3: Giải bài toán thực tế mua sắm văn phòng phẩm (Ví dụ 2 SBT trang 17)',
        problemStatement:
          'Bạn Minh có $100$ nghìn đồng để mua vở và bút bi. Mỗi quyển vở giá $12$ nghìn đồng và mỗi chiếc bút bi giá $5$ nghìn đồng. Nếu Minh đã chọn mua $6$ quyển vở thì bạn có thể mua tối đa bao nhiêu chiếc bút bi?',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b3_d2_q3_s1',
            originalIndex: 1,
            content:
              'Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số quyển vở và số chiếc bút bi mà bạn Minh mua.',
            roleDescription: 'Đặt ẩn x, y là số tự nhiên',
          },
          {
            id: 'b3_d2_q3_s2',
            originalIndex: 2,
            content:
              'Tổng số tiền mua $x$ quyển vở và $y$ chiếc bút là $12x + 5y$ (nghìn đồng). Do có $100$ nghìn đồng nên ta có bất phương trình: $12x + 5y \\le 100$.',
            roleDescription: 'Lập bất phương trình tổng chi phí',
          },
          {
            id: 'b3_d2_q3_s3',
            originalIndex: 3,
            content:
              'Thay $x = 6$ vào bất phương trình: $12 \\cdot 6 + 5y \\le 100 \\Leftrightarrow 5y \\le 28 \\Leftrightarrow y \\le 5{,}6$.',
            roleDescription: 'Thay x = 6 và giải bất phương trình theo y',
          },
          {
            id: 'b3_d2_q3_s4',
            originalIndex: 4,
            content:
              'Vì $y \\in \\mathbb{N}$ nên giá trị lớn nhất của $y$ là $5$. Vậy bạn Minh có thể mua tối đa $5$ chiếc bút bi.',
            roleDescription: 'Lấy phần nguyên lớn nhất và kết luận',
          },
        ],
        pedagogicalTip: 'Khi tìm số lượng tối đa ($y \\le 5{,}6$), ta làm tròn xuống số nguyên gần nhất ($y = 5$).',
        teacherAnalysis: 'Bám sát Ví dụ 2 trang 17 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b3_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 3: Tìm các cặp nghiệm nguyên dương của bất phương trình',
        problemStatement:
          'Tìm tất cả các cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình $3x + 2y \\le 9$.',
        conclusionTarget:
          'Hãy sắp xếp các bước liệt kê và kiểm tra sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b3_d2_q4_s1',
            originalIndex: 1,
            content:
              'Vì $x, y \\in \\mathbb{N}^*$ nên $x \\ge 1$ và $y \\ge 1$. Từ $3x + 2y \\le 9 \\Rightarrow 3x \\le 9 - 2y \\le 9 - 2 = 7 \\Rightarrow x \\in \\{1; 2\\}$.',
            roleDescription: 'Chặn miền giá trị nguyên dương của x',
          },
          {
            id: 'b3_d2_q4_s2',
            originalIndex: 2,
            content:
              'Với $x = 1$: bất phương trình trở thành $2y \\le 6 \\Leftrightarrow y \\le 3$. Vì $y \\in \\mathbb{N}^*$ nên $y \\in \\{1; 2; 3\\}$, ta được $3$ cặp $(1; 1), (1; 2), (1; 3)$.',
            roleDescription: 'Xét trường hợp x = 1',
          },
          {
            id: 'b3_d2_q4_s3',
            originalIndex: 3,
            content:
              'Với $x = 2$: bất phương trình trở thành $6 + 2y \\le 9 \\Leftrightarrow 2y \\le 3 \\Leftrightarrow y \\le 1{,}5$. Vì $y \\in \\mathbb{N}^*$ nên $y = 1$, ta được $1$ cặp $(2; 1)$.',
            roleDescription: 'Xét trường hợp x = 2',
          },
          {
            id: 'b3_d2_q4_s4',
            originalIndex: 4,
            content:
              'Vậy có tất cả $4$ cặp số nguyên dương thỏa mãn bất phương trình là $(1; 1), (1; 2), (1; 3)$ và $(2; 1)$.',
            roleDescription: 'Tổng hợp kết quả 4 cặp nghiệm nguyên dương',
          },
        ],
        pedagogicalTip: 'Chặn biến có hệ số lớn hơn ($3x$) trước sẽ giúp số trường hợp cần xét ít hơn.',
        teacherAnalysis: 'Rèn luyện kỹ năng tìm nghiệm nguyên dương trong các bài toán thực tế.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 4: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN ====================
  'de-on-bai-4-1': {
    extraPart1: [
      {
        id: 'b4_d1_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 4: Tìm tọa độ đỉnh của đa giác miền nghiệm (Ví dụ 2 SBT trang 20)',
        prompt:
          'Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$. Miền nghiệm của hệ là tam giác $OAB$ với ba đỉnh có tọa độ là:',
        options: [
          { key: 'A', content: '$O(0; 0),\\ A(2; 0),\\ B(0; 4)$' },
          { key: 'B', content: '$O(0; 0),\\ A(4; 0),\\ B(0; 2)$' },
          { key: 'C', content: '$O(0; 0),\\ A(2; 4),\\ B(4; 2)$' },
          { key: 'D', content: '$O(0; 0),\\ A(1; 2),\\ B(2; 0)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Giao của $x = 0$ và $y = 0$ là $O(0; 0)$; giao của $2x + y = 4$ với $y = 0$ là $A(2; 0)$; giao của $2x + y = 4$ với $x = 0$ là $B(0; 4)$.',
        pedagogicalTip: 'Đỉnh của miền đa giác chính là giao điểm của các cặp đường thẳng bờ.',
        points: 0.25,
      },
      {
        id: 'b4_d1_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 4: Giá trị lớn nhất của biểu thức F(x; y) trên miền tam giác',
        prompt:
          'Giá trị lớn nhất của biểu thức $F(x; y) = 3x + 2y$ trên miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$ bằng:',
        options: [
          { key: 'A', content: '$8$' },
          { key: 'B', content: '$6$' },
          { key: 'C', content: '$10$' },
          { key: 'D', content: '$12$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tính giá trị $F(x; y) = 3x + 2y$ tại ba đỉnh $O(0; 0), A(2; 0), B(0; 4)$: $F(0; 0) = 0, F(2; 0) = 6, F(0; 4) = 8$. Vậy giá trị lớn nhất bằng $8$ tại $(0; 4)$.',
        pedagogicalTip: 'Thay tọa độ các đỉnh của miền đa giác vào $F(x; y)$ rồi so sánh.',
        points: 0.25,
      },
      {
        id: 'b4_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 4: Diện tích miền nghiệm của hệ bất phương trình',
        prompt:
          'Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\end{cases}$ là một miền tam giác có diện tích bằng:',
        options: [
          { key: 'A', content: '$18$' },
          { key: 'B', content: '$36$' },
          { key: 'C', content: '$12$' },
          { key: 'D', content: '$9$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Miền nghiệm là tam giác vuông $OAB$ với $O(0; 0), A(6; 0), B(0; 6)$, có diện tích $S = \\frac{1}{2} \\cdot 6 \\cdot 6 = 18$.',
        pedagogicalTip: 'Tam giác vuông tại gốc $O$ có hai cạnh góc vuông $OA = 6, OB = 6$.',
        points: 0.25,
      },
      {
        id: 'b4_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 4: Hệ bất phương trình xác định hình chữ nhật',
        prompt:
          'Hệ bất phương trình $\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$ có miền nghiệm là một hình chữ nhật với diện tích bằng:',
        options: [
          { key: 'A', content: '$12$' },
          { key: 'B', content: '$7$' },
          { key: 'C', content: '$14$' },
          { key: 'D', content: '$6$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Miền nghiệm là hình chữ nhật có chiều dài $4$ và chiều rộng $3$, nên diện tích bằng $4 \\cdot 3 = 12$.',
        pedagogicalTip: 'Hệ $a \\le x \\le b,\\ c \\le y \\le d$ biểu diễn hình chữ nhật có diện tích $(b - a)(d - c)$.',
        points: 0.25,
      },
      {
        id: 'b4_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 4: Ràng buộc diện tích và vốn trong bài toán trồng trọt (Bài 2.10 SBT trang 22)',
        prompt:
          'Một hộ nông dân có $8\\text{ ha}$ đất để trồng ngô ($x\\text{ ha}$) và trồng khoai ($y\\text{ ha}$). Biết $1\\text{ ha}$ ngô cần $20$ ngày công và $1\\text{ ha}$ khoai cần $30$ ngày công, tổng số ngày công không quá $180$ ngày. Hệ bất phương trình ràng buộc của $x, y$ là:',
        options: [
          { key: 'A', content: '$\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\le 8 \\\\ 2x + 3y \\le 18 \\end{cases}$' },
          { key: 'B', content: '$\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\ge 8 \\\\ 2x + 3y \\le 18 \\end{cases}$' },
          { key: 'C', content: '$\\begin{cases} x + y \\le 8 \\\\ 3x + 2y \\le 18 \\end{cases}$' },
          { key: 'D', content: '$\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\le 8 \\\\ 2x + 3y \\ge 18 \\end{cases}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Điều kiện diện tích: $x \\ge 0, y \\ge 0, x + y \\le 8$. Điều kiện ngày công: $20x + 30y \\le 180 \\Leftrightarrow 2x + 3y \\le 18$ (Bài 2.10 SBT trang 22).',
        pedagogicalTip: 'Đừng quên hai điều kiện không âm $x \\ge 0, y \\ge 0$ đối với diện tích cây trồng.',
        points: 0.25,
      },
      {
        id: 'b4_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 4: Tìm lợi nhuận tối đa trong bài toán trồng ngô và khoai (Bài 2.10 SBT trang 22)',
        prompt:
          'Trong bài toán ở Câu 11 ($x \\ge 0, y \\ge 0, x + y \\le 8, 2x + 3y \\le 18$), biết mỗi ha ngô thu lãi $30$ triệu đồng và mỗi ha khoai thu lãi $40$ triệu đồng. Lợi nhuận cao nhất mà hộ nông dân thu được là:',
        options: [
          { key: 'A', content: '$260$ triệu đồng.' },
          { key: 'B', content: '$240$ triệu đồng.' },
          { key: 'C', content: '$280$ triệu đồng.' },
          { key: 'D', content: '$300$ triệu đồng.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Các đỉnh của miền tứ giác là $O(0; 0), A(8; 0), B(6; 2), C(0; 6)$. Hàm lợi nhuận $F(x; y) = 30x + 40y$ tại các đỉnh: $F(0;0)=0, F(8;0)=240, F(6;2)=260, F(0;6)=240$. Vậy lãi tối đa là $260$ triệu đồng (khi trồng $6\\text{ ha}$ ngô và $2\\text{ ha}$ khoai).',
        pedagogicalTip: 'Giao điểm $B$ của $x + y = 8$ và $2x + 3y = 18$ là $B(6; 2)$ thường là điểm đạt cực đại.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b4_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 4: Tìm giá trị lớn nhất và nhỏ nhất trên miền đa giác (Bài 2.8 SBT trang 21)',
        problemStatement:
          'Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y) = 4x - 3y$ trên miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\end{cases}$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b4_d1_q2_s1',
            originalIndex: 1,
            content:
              'Biểu diễn miền nghiệm của hệ bất phương trình trên mặt phẳng $Oxy$, ta được miền tam giác $OAB$ kể cả biên.',
            roleDescription: 'Xác định miền nghiệm là tam giác OAB',
          },
          {
            id: 'b4_d1_q2_s2',
            originalIndex: 2,
            content:
              'Tìm tọa độ ba đỉnh của miền tam giác $OAB$ bằng cách giải giao điểm các đường thẳng bờ: $O(0; 0), A(5; 0)$ và $B(0; 5)$.',
            roleDescription: 'Tìm tọa độ ba đỉnh O(0; 0), A(5; 0), B(0; 5)',
          },
          {
            id: 'b4_d1_q2_s3',
            originalIndex: 3,
            content:
              'Tính giá trị của $F(x; y) = 4x - 3y$ tại từng đỉnh: $F(0; 0) = 0,\\ F(5; 0) = 20$ và $F(0; 5) = -15$.',
            roleDescription: 'Tính giá trị F(x; y) tại 3 đỉnh',
          },
          {
            id: 'b4_d1_q2_s4',
            originalIndex: 4,
            content:
              'So sánh các giá trị vừa tính: giá trị lớn nhất của $F$ là $20$ (tại $(5; 0)$) và giá trị nhỏ nhất của $F$ là $-15$ (tại $(0; 5)$).',
            roleDescription: 'Kết luận GTLN và GTNN của F(x; y)',
          },
        ],
        pedagogicalTip: 'Định lí quy hoạch tuyến tính đảm bảo GTLN và GTNN trên miền đa giác luôn đạt tại một trong các đỉnh.',
        teacherAnalysis: 'Bám sát Bài 2.8 trang 21 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b4_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 4: Giải bài toán tối ưu lợi nhuận trồng trọt (Bài 2.10 SBT trang 22)',
        problemStatement:
          'Một hộ nông dân có $8\\text{ ha}$ đất dự định trồng ngô ($x\\text{ ha}$) và khoai ($y\\text{ ha}$). Mỗi ha ngô cần $20$ ngày công và thu lãi $30$ triệu đồng; mỗi ha khoai cần $30$ ngày công và thu lãi $40$ triệu đồng. Tổng số ngày công không quá $180$ ngày. Hãy tìm diện tích mỗi loại cây trồng để thu được lợi nhuận lớn nhất.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b4_d1_q3_s1',
            originalIndex: 1,
            content:
              'Từ điều kiện diện tích và ngày công, ta lập hệ bất phương trình $\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\le 8 \\\\ 2x + 3y \\le 18 \\end{cases}$ và hàm lợi nhuận $F(x; y) = 30x + 40y$ (triệu đồng).',
            roleDescription: 'Lập hệ bất phương trình và hàm mục tiêu F(x; y)',
          },
          {
            id: 'b4_d1_q3_s2',
            originalIndex: 2,
            content:
              'Miền nghiệm của hệ là tứ giác lồi $OABC$ với các đỉnh $O(0; 0), A(8; 0), B(6; 2)$ và $C(0; 6)$.',
            roleDescription: 'Xác định tọa độ 4 đỉnh của miền tứ giác OABC',
          },
          {
            id: 'b4_d1_q3_s3',
            originalIndex: 3,
            content:
              'Tính lợi nhuận tại các đỉnh: $F(0; 0) = 0,\\ F(8; 0) = 240,\\ F(6; 2) = 260,\\ F(0; 6) = 240$.',
            roleDescription: 'Tính giá trị F tại 4 đỉnh',
          },
          {
            id: 'b4_d1_q3_s4',
            originalIndex: 4,
            content:
              'Vậy hộ nông dân cần trồng $6\\text{ ha}$ ngô và $2\\text{ ha}$ khoai để thu được lợi nhuận lớn nhất là $260$ triệu đồng.',
            roleDescription: 'Kết luận phương án tối ưu',
          },
        ],
        pedagogicalTip: 'Đỉnh $B(6; 2)$ là nghiệm của hệ $\\begin{cases} x + y = 8 \\\\ 2x + 3y = 18 \\end{cases}$.',
        teacherAnalysis: 'Bám sát Bài 2.10 trang 22 & 89 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b4_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 4: Tính diện tích miền đa giác nghiệm của hệ bất phương trình',
        problemStatement:
          'Tính diện tích miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 3 \\\\ x + y \\le 5 \\end{cases}$ trên mặt phẳng tọa độ $Oxy$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b4_d1_q4_s1',
            originalIndex: 1,
            content:
              'Xác định các đường thẳng bờ: $x = 0$ (trục $Oy$), $y = 0$ (trục $Ox$), $x = 3$ và $x + y = 5$.',
            roleDescription: 'Xác định 4 đường thẳng bờ',
          },
          {
            id: 'b4_d1_q4_s2',
            originalIndex: 2,
            content:
              'Tìm tọa độ $4$ đỉnh của miền nghiệm: $O(0; 0), A(3; 0), B(3; 2)$ (giao của $x = 3$ và $x + y = 5$) và $C(0; 5)$.',
            roleDescription: 'Tìm tọa độ 4 đỉnh O, A, B, C',
          },
          {
            id: 'b4_d1_q4_s3',
            originalIndex: 3,
            content:
              'Nhận xét tứ giác $OABC$ là hình thang vuông tại $O$ và $A$, có hai đáy song song $OC = 5, AB = 2$ và chiều cao $OA = 3$.',
            roleDescription: 'Nhận dạng hình thang vuông OABC',
          },
          {
            id: 'b4_d1_q4_s4',
            originalIndex: 4,
            content:
              'Áp dụng công thức diện tích hình thang: $S = \\frac{(OC + AB) \\cdot OA}{2} = \\frac{(5 + 2) \\cdot 3}{2} = 10{,}5$.',
            roleDescription: 'Tính diện tích hình thang và kết luận',
          },
        ],
        pedagogicalTip: 'Có thể tính diện tích hình thang vuông hoặc lấy diện tích tam giác lớn trừ tam giác nhỏ.',
        teacherAnalysis: 'Giúp học sinh nắm vững hình học của miền đa giác nghiệm.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-4-2': {
    extraPart1: [
      {
        id: 'b4_d2_p1_q7',
        part: 'part1',
        number: 7,
        topic: 'Bài 4: Tìm giá trị nhỏ nhất của chi phí dinh dưỡng (Ví dụ 2 SBT trang 20)',
        prompt:
          'Trên miền nghiệm đa giác có các đỉnh $A(0; 6), B(2; 3), C(5; 1), D(8; 0)$, biểu thức chi phí $T(x; y) = 80x + 60y$ (nghìn đồng) đạt giá trị **nhỏ nhất** bằng:',
        options: [
          { key: 'A', content: '$340$ nghìn đồng (tại $B(2; 3)$).' },
          { key: 'B', content: '$360$ nghìn đồng (tại $A(0; 6)$).' },
          { key: 'C', content: '$460$ nghìn đồng (tại $C(5; 1)$).' },
          { key: 'D', content: '$640$ nghìn đồng (tại $D(8; 0)$).' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tính $T$ tại $4$ đỉnh: $T(0; 6) = 360,\\ T(2; 3) = 80\\cdot 2 + 60\\cdot 3 = 340,\\ T(5; 1) = 460,\\ T(8; 0) = 640$. Vậy giá trị nhỏ nhất là $340$ nghìn đồng tại $B(2; 3)$.',
        pedagogicalTip: 'Bài toán tối thiểu hóa chi phí ăn uống luôn xét giá trị nhỏ nhất tại các đỉnh biên dưới.',
        points: 0.25,
      },
      {
        id: 'b4_d2_p1_q8',
        part: 'part1',
        number: 8,
        topic: 'Bài 4: Đếm số điểm nguyên trong miền nghiệm của hệ bất phương trình',
        prompt:
          'Có bao nhiêu cặp số nguyên $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 1 \\\\ y \\ge 1 \\\\ x + y \\le 3 \\end{cases}$?',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$4$' },
          { key: 'C', content: '$2$' },
          { key: 'D', content: '$6$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Các cặp số nguyên thỏa mãn $x \\ge 1, y \\ge 1$ và $x + y \\le 3$ là: $(1; 1), (1; 2), (2; 1)$ — có tất cả $3$ cặp.',
        pedagogicalTip: 'Liệt kê theo từng giá trị nguyên của $x \\in \\{1; 2\\}$.',
        points: 0.25,
      },
      {
        id: 'b4_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 4: Hệ bất phương trình vô nghiệm',
        prompt:
          'Hệ bất phương trình nào sau đây có miền nghiệm là **tập rỗng** (vô nghiệm)?',
        options: [
          { key: 'A', content: '$\\begin{cases} x + y \\le 2 \\\\ x + y \\ge 5 \\end{cases}$' },
          { key: 'B', content: '$\\begin{cases} x + y \\ge 2 \\\\ x + y \\le 5 \\end{cases}$' },
          { key: 'C', content: '$\\begin{cases} x \\ge 0 \\\\ x + y \\le 2 \\end{cases}$' },
          { key: 'D', content: '$\\begin{cases} x - y \\le 1 \\\\ x + y \\ge 3 \\end{cases}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Không tồn tại cặp số $(x; y)$ nào có tổng $x + y$ vừa nhỏ hơn hoặc bằng $2$ lại vừa lớn hơn hoặc bằng $5$, nên hệ A vô nghiệm.',
        pedagogicalTip: 'Hai nửa mặt phẳng có bờ song song và quay lưng vào nhau có giao bằng rỗng.',
        points: 0.25,
      },
      {
        id: 'b4_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 4: Bài toán pha chế nước cam và nước táo (Bài 2.11 SBT trang 22)',
        prompt:
          'Một đội dự định pha chế $x$ lít nước cam và $y$ lít nước táo. Để pha $1$ lít nước cam cần $30\\text{ g}$ đường, để pha $1$ lít nước táo cần $10\\text{ g}$ đường, và tổng lượng đường có sẵn là $210\\text{ g}$. Bất phương trình ràng buộc về lượng đường là:',
        options: [
          { key: 'A', content: '$3x + y \\le 21$' },
          { key: 'B', content: '$x + 3y \\le 21$' },
          { key: 'C', content: '$3x + y \\ge 21$' },
          { key: 'D', content: '$30x + 10y \\le 21$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tổng lượng đường sử dụng là $30x + 10y \\le 210 \\Leftrightarrow 3x + y \\le 21$.',
        pedagogicalTip: 'Rút gọn cả hai vế cho $10$ để được bất phương trình hệ số nhỏ.',
        points: 0.25,
      },
      {
        id: 'b4_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 4: Tìm tọa độ giao điểm của hai đường thẳng bờ',
        prompt:
          'Trong hệ bất phương trình có hai đường thẳng bờ $d_1: x + 2y = 8$ và $d_2: 3x + y = 9$, tọa độ giao điểm $I$ của $d_1$ và $d_2$ là:',
        options: [
          { key: 'A', content: '$I(2; 3)$' },
          { key: 'B', content: '$I(3; 2)$' },
          { key: 'C', content: '$I(4; 2)$' },
          { key: 'D', content: '$I(2; 4)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Giải hệ $\\begin{cases} x + 2y = 8 \\\\ 3x + y = 9 \\end{cases} \\Leftrightarrow \\begin{cases} x = 2 \\\\ y = 3 \\end{cases}$, vậy $I(2; 3)$.',
        pedagogicalTip: 'Từ phương trình thứ hai rút $y = 9 - 3x$ thế vào phương trình thứ nhất.',
        points: 0.25,
      },
      {
        id: 'b4_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 4: Giá trị lớn nhất của biểu thức F = 2x + 5y trên hình chữ nhật',
        prompt:
          'Trên miền nghiệm của hệ bất phương trình $\\begin{cases} 1 \\le x \\le 4 \\\\ 2 \\le y \\le 6 \\end{cases}$, hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y) = 2x + 5y$ bằng:',
        options: [
          { key: 'A', content: '$26$' },
          { key: 'B', content: '$38$' },
          { key: 'C', content: '$12$' },
          { key: 'D', content: '$20$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì hệ số của $x$ và $y$ đều dương nên $F_{\\max} = F(4; 6) = 2\\cdot 4 + 5\\cdot 6 = 38$ và $F_{\\min} = F(1; 2) = 2\\cdot 1 + 5\\cdot 2 = 12$. Hiệu $F_{\\max} - F_{\\min} = 38 - 12 = 26$.',
        pedagogicalTip: 'Trên hình chữ nhật $[a; b] \\times [c; d]$ với $A, B > 0$: $F = Ax + By$ đạt GTLN tại $(b; d)$ và GTNN tại $(a; c)$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b4_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 4: Giải bài toán pha chế nước giải khát đạt điểm thưởng cao nhất (Bài 2.11 SBT trang 22)',
        problemStatement:
          'Trong một cuộc thi pha chế, mỗi đội được sử dụng tối đa $24\\text{ g}$ hương liệu, $9\\text{ lít}$ nước và $210\\text{ g}$ đường để pha nước cam ($x$ lít) và nước táo ($y$ lít). Pha $1$ lít nước cam cần $30\\text{ g}$ đường, $1\\text{ lít}$ nước và $1\\text{ g}$ hương liệu (được $60$ điểm); pha $1$ lít nước táo cần $10\\text{ g}$ đường, $1\\text{ lít}$ nước và $4\\text{ g}$ hương liệu (được $80$ điểm). Hãy tìm $x, y$ để tổng điểm thưởng là lớn nhất.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b4_d2_q2_s1',
            originalIndex: 1,
            content:
              'Lập hệ bất phương trình từ các ràng buộc nguyên liệu: $\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\le 9 \\\\ 3x + y \\le 21 \\\\ x + 4y \\le 24 \\end{cases}$ và hàm điểm thưởng $F(x; y) = 60x + 80y$.',
            roleDescription: 'Lập hệ bất phương trình và hàm điểm thưởng F(x; y)',
          },
          {
            id: 'b4_d2_q2_s2',
            originalIndex: 2,
            content:
              'Xác định miền nghiệm là ngũ giác $OABCD$ với tọa độ các đỉnh: $O(0; 0), A(7; 0), B(6; 3), C(4; 5)$ và $D(0; 6)$.',
            roleDescription: 'Tìm tọa độ 5 đỉnh của miền ngũ giác OABCD',
          },
          {
            id: 'b4_d2_q2_s3',
            originalIndex: 3,
            content:
              'Tính điểm thưởng tại các đỉnh: $F(0; 0) = 0,\\ F(7; 0) = 420,\\ F(6; 3) = 600,\\ F(4; 5) = 640$ và $F(0; 6) = 480$.',
            roleDescription: 'Tính giá trị F tại các đỉnh',
          },
          {
            id: 'b4_d2_q2_s4',
            originalIndex: 4,
            content:
              'Vậy cần pha chế $4$ lít nước cam và $5$ lít nước táo để đạt số điểm thưởng cao nhất là $640$ điểm.',
            roleDescription: 'Kết luận phương án pha chế tối ưu',
          },
        ],
        pedagogicalTip: 'Đỉnh $C(4; 5)$ là giao điểm của hai đường thẳng $x + y = 9$ và $x + 4y = 24$.',
        teacherAnalysis: 'Bám sát Bài 2.11 trang 22 & 90 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b4_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 4: Lập hệ bất phương trình từ miền tam giác cho trước trên mặt phẳng tọa độ (Bài 2.7 SBT trang 21)',
        problemStatement:
          'Trên mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có ba đỉnh $A(0; 3), B(4; 0)$ và $C(0; -2)$. Hãy lập hệ bất phương trình bậc nhất hai ẩn có miền nghiệm là miền tam giác $ABC$ (kể cả ba cạnh).',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b4_d2_q3_s1',
            originalIndex: 1,
            content:
              'Cạnh $AC$ nằm trên trục tung $Oy$ (phương trình $x = 0$), điểm $B(4; 0)$ có $x_B = 4 > 0$ nên nửa mặt phẳng bờ $AC$ chứa $B$ là $x \\ge 0$.',
            roleDescription: 'Viết bất phương trình ứng với cạnh AC',
          },
          {
            id: 'b4_d2_q3_s2',
            originalIndex: 2,
            content:
              'Đường thẳng $AB$ đi qua $A(0; 3), B(4; 0)$ có phương trình $3x + 4y = 12$; thay $C(0; -2)$ được $-8 \\le 12$, nên nửa mặt phẳng bờ $AB$ chứa $C$ là $3x + 4y \\le 12$.',
            roleDescription: 'Viết bất phương trình ứng với cạnh AB',
          },
          {
            id: 'b4_d2_q3_s3',
            originalIndex: 3,
            content:
              'Đường thẳng $BC$ đi qua $B(4; 0), C(0; -2)$ có phương trình $x - 2y = 4$; thay $A(0; 3)$ được $-6 \\le 4$, nên nửa mặt phẳng bờ $BC$ chứa $A$ là $x - 2y \\le 4$.',
            roleDescription: 'Viết bất phương trình ứng với cạnh BC',
          },
          {
            id: 'b4_d2_q3_s4',
            originalIndex: 4,
            content:
              'Kết hợp ba điều kiện trên, hệ bất phương trình cần tìm là $\\begin{cases} x \\ge 0 \\\\ 3x + 4y \\le 12 \\\\ x - 2y \\le 4 \\end{cases}$.',
            roleDescription: 'Kết luận hệ bất phương trình biểu diễn miền tam giác ABC',
          },
        ],
        pedagogicalTip: 'Với mỗi cạnh của tam giác, viết phương trình đường thẳng chứa cạnh đó rồi lấy đỉnh thứ ba làm điểm thử.',
        teacherAnalysis: 'Bám sát Bài 2.7 trang 21 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b4_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 4: Bài toán thuê xe vận chuyển hành khách tối ưu chi phí (Bài 2.12 SBT trang 22)',
        problemStatement:
          'Một đoàn khách gồm $140$ người cần thuê xe đi tham quan, đồng thời cần chở ít nhất $9$ tấn hàng. Công ty vận tải có hai loại xe: xe loại A (tối đa $10$ chiếc) chở được $20$ người và $0{,}6$ tấn hàng với giá thuê $4$ triệu đồng/xe; xe loại B (tối đa $9$ chiếc) chở được $10$ người và $1{,}5$ tấn hàng với giá thuê $3$ triệu đồng/xe. Hỏi cần thuê mấy xe mỗi loại để chi phí thấp nhất?',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b4_d2_q4_s1',
            originalIndex: 1,
            content:
              'Gọi $x, y$ là số xe loại A và loại B cần thuê ($0 \\le x \\le 10,\\ 0 \\le y \\le 9$). Điều kiện chở người và hàng là $\\begin{cases} 20x + 10y \\ge 140 \\\\ 0{,}6x + 1{,}5y \\ge 9 \\end{cases} \\Leftrightarrow \\begin{cases} 2x + y \\ge 14 \\\\ 2x + 5y \\ge 30 \\end{cases}$.',
            roleDescription: 'Lập hệ bất phương trình ràng buộc về số xe, số người và lượng hàng',
          },
          {
            id: 'b4_d2_q4_s2',
            originalIndex: 2,
            content:
              'Hàm tổng chi phí thuê xe cần tìm giá trị nhỏ nhất là $F(x; y) = 4x + 3y$ (triệu đồng).',
            roleDescription: 'Viết hàm chi phí mục tiêu F(x; y) = 4x + 3y',
          },
          {
            id: 'b4_d2_q4_s3',
            originalIndex: 3,
            content:
              'Xác định miền nghiệm tứ giác $ABCD$ với các đỉnh $A(5; 4), B(10; 2), C(10; 9)$ và $D(2{,}5; 9)$.',
            roleDescription: 'Tìm tọa độ 4 đỉnh của miền nghiệm',
          },
          {
            id: 'b4_d2_q4_s4',
            originalIndex: 4,
            content:
              'Tính $F$ tại các đỉnh: $F(5; 4) = 32,\\ F(10; 2) = 46,\\ F(10; 9) = 67,\\ F(2{,}5; 9) = 37$. Vậy thuê $5$ xe loại A và $4$ xe loại B có chi phí thấp nhất là $32$ triệu đồng.',
            roleDescription: 'Tính chi phí tại các đỉnh và kết luận phương án tối ưu',
          },
        ],
        pedagogicalTip: 'Đỉnh $A(5; 4)$ là giao điểm của hai đường ràng buộc tối thiểu $2x + y = 14$ và $2x + 5y = 30$.',
        teacherAnalysis: 'Bám sát Bài 2.12 trang 22 & 90 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 5: GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180° ====================
  'de-on-bai-5-1': {
    extraPart1: [
      {
        id: 'b5_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 5: Tính cos khi biết tan của góc tù (Câu 3.22 SBT trang 32)',
        prompt:
          'Cho biết $\\tan\\alpha = -\\frac{2}{3}$ với $0^\\circ < \\alpha < 180^\\circ$. Giá trị của $\\cos\\alpha$ bằng:',
        options: [
          { key: 'A', content: '$-\\frac{3\\sqrt{13}}{13}$' },
          { key: 'B', content: '$\\frac{3\\sqrt{13}}{13}$' },
          { key: 'C', content: '$-\\frac{2\\sqrt{13}}{13}$' },
          { key: 'D', content: '$-\\frac{9}{13}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $\\tan\\alpha < 0$ nên $90^\\circ < \\alpha < 180^\\circ \\Rightarrow \\cos\\alpha < 0$. Từ $\\frac{1}{\\cos^2\\alpha} = 1 + \\tan^2\\alpha = 1 + \\frac{4}{9} = \\frac{13}{9} \\Rightarrow \\cos\\alpha = -\\frac{3\\sqrt{13}}{13}$ (Câu 3.22 SBT trang 32).',
        pedagogicalTip: 'Trên $(0^\\circ; 180^\\circ)$, dấu của $\\cos\\alpha$ luôn cùng dấu với $\\tan\\alpha$.',
        points: 0.25,
      },
      {
        id: 'b5_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 5: Tính giá trị biểu thức theo tan (Bài 3.2b SBT trang 31)',
        prompt:
          'Cho $\\tan\\alpha = 2$. Giá trị của biểu thức $G = 2\\sin^2\\alpha + 5\\cos^2\\alpha$ bằng:',
        options: [
          { key: 'A', content: '$\\frac{13}{5}$' },
          { key: 'B', content: '$\\frac{9}{5}$' },
          { key: 'C', content: '$3$' },
          { key: 'D', content: '$\\frac{11}{5}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Viết $G = \\frac{2\\sin^2\\alpha + 5\\cos^2\\alpha}{\\sin^2\\alpha + \\cos^2\\alpha} = \\frac{2\\tan^2\\alpha + 5}{\\tan^2\\alpha + 1} = \\frac{2\\cdot 4 + 5}{4 + 1} = \\frac{13}{5}$.',
        pedagogicalTip: 'Chia cho $\\sin^2\\alpha + \\cos^2\\alpha = 1$ để đưa về biểu thức thuần nhất theo $\\tan^2\\alpha$.',
        points: 0.25,
      },
      {
        id: 'b5_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 5: Hai góc phụ nhau (Ví dụ 1a SBT trang 30)',
        prompt:
          'Không dùng máy tính cầm tay, giá trị của biểu thức $A = \\sin^2 32^\\circ + \\sin^2 58^\\circ$ bằng:',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$0$' },
          { key: 'C', content: '$2$' },
          { key: 'D', content: '$\\frac{1}{2}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $58^\\circ = 90^\\circ - 32^\\circ$ nên $\\sin 58^\\circ = \\cos 32^\\circ$. Suy ra $A = \\sin^2 32^\\circ + \\cos^2 32^\\circ = 1$ (Ví dụ 1a SBT trang 30).',
        pedagogicalTip: 'Hai góc phụ nhau có $\\sin$ góc này bằng $\\cos$ góc kia.',
        points: 0.25,
      },
      {
        id: 'b5_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 5: Giá trị lượng giác của góc 150 độ',
        prompt:
          'Khẳng định nào sau đây là **đúng** khi tính giá trị lượng giác của góc $150^\\circ$?',
        options: [
          { key: 'A', content: '$\\sin 150^\\circ = \\frac{1}{2}$ và $\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$.' },
          { key: 'B', content: '$\\sin 150^\\circ = -\\frac{1}{2}$ và $\\cos 150^\\circ = \\frac{\\sqrt{3}}{2}$.' },
          { key: 'C', content: '$\\sin 150^\\circ = \\frac{\\sqrt{3}}{2}$ và $\\cos 150^\\circ = -\\frac{1}{2}$.' },
          { key: 'D', content: '$\\tan 150^\\circ = \\sqrt{3}$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $150^\\circ$ bù với $30^\\circ$ nên $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$ và $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.',
        pedagogicalTip: 'Đưa góc tù $150^\\circ$ về góc nhọn bù với nó là $30^\\circ$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b5_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 5: Tính các giá trị lượng giác khi biết cos của góc tù (Ví dụ 2 SBT trang 30)',
        problemStatement:
          'Cho góc $\\alpha$ thỏa mãn $\\cos\\alpha = -\\frac{1}{3}$ với $0^\\circ < \\alpha < 180^\\circ$. Hãy tính $\\sin\\alpha, \\tan\\alpha$ và $\\cot\\alpha$.',
        conclusionTarget:
          'Hãy sắp xếp các bước tính toán sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b5_d1_q2_s1',
            originalIndex: 1,
            content:
              'Áp dụng hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$, ta có $\\sin^2\\alpha = 1 - \\left(-\\frac{1}{3}\\right)^2 = 1 - \\frac{1}{9} = \\frac{8}{9}$.',
            roleDescription: 'Tính sin²α từ hệ thức cơ bản',
          },
          {
            id: 'b5_d1_q2_s2',
            originalIndex: 2,
            content:
              'Vì $0^\\circ < \\alpha < 180^\\circ$ nên $\\sin\\alpha > 0$, suy ra $\\sin\\alpha = \\sqrt{\\frac{8}{9}} = \\frac{2\\sqrt{2}}{3}$.',
            roleDescription: 'Xác định dấu dương của sin α và khai căn',
          },
          {
            id: 'b5_d1_q2_s3',
            originalIndex: 3,
            content:
              'Tính $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{2\\sqrt{2}/3}{-1/3} = -2\\sqrt{2}$.',
            roleDescription: 'Tính tan α = sin α / cos α',
          },
          {
            id: 'b5_d1_q2_s4',
            originalIndex: 4,
            content:
              'Tính $\\cot\\alpha = \\frac{1}{\\tan\\alpha} = -\\frac{1}{2\\sqrt{2}} = -\\frac{\\sqrt{2}}{4}$.',
            roleDescription: 'Tính cot α = 1 / tan α và kết luận',
          },
        ],
        pedagogicalTip: 'Với mọi góc $\\alpha \\in (0^\\circ; 180^\\circ)$, $\\sin\\alpha$ luôn nhận giá trị dương.',
        teacherAnalysis: 'Bám sát Ví dụ 2 trang 30 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b5_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 5: Tính diện tích tam giác trên nửa đường tròn đơn vị (Câu 3.24 SBT trang 32)',
        problemStatement:
          'Trên nửa đường tròn đơn vị, gọi $A(1; 0)$ và $M, N$ là hai điểm lần lượt ứng với hai góc $\\alpha$ và $180^\\circ - \\alpha$ ($0^\\circ < \\alpha < 90^\\circ$). Biết $\\cos\\alpha = \\frac{1}{2}$, hãy tính diện tích tam giác $MAN$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b5_d1_q3_s1',
            originalIndex: 1,
            content:
              'Vì $0^\\circ < \\alpha < 90^\\circ$ và $\\cos\\alpha = \\frac{1}{2}$ nên $\\sin\\alpha = \\sqrt{1 - \\frac{1}{4}} = \\frac{\\sqrt{3}}{2}$, suy ra tọa độ $M\\left(\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$.',
            roleDescription: 'Tìm tọa độ điểm M ứng với góc α',
          },
          {
            id: 'b5_d1_q3_s2',
            originalIndex: 2,
            content:
              'Do hai góc $\\alpha$ và $180^\\circ - \\alpha$ bù nhau nên điểm $N$ đối xứng với $M$ qua trục tung $Oy$, suy ra $N\\left(-\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$.',
            roleDescription: 'Tìm tọa độ điểm N ứng với góc 180° - α',
          },
          {
            id: 'b5_d1_q3_s3',
            originalIndex: 3,
            content:
              'Đoạn thẳng $MN$ song song với trục hoành $Ox$, có độ dài $MN = \\frac{1}{2} - \\left(-\\frac{1}{2}\\right) = 1$ và khoảng cách từ $A(1; 0) \\in Ox$ đến $MN$ là $h = \\frac{\\sqrt{3}}{2}$.',
            roleDescription: 'Tính đáy MN và chiều cao h của tam giác MAN',
          },
          {
            id: 'b5_d1_q3_s4',
            originalIndex: 4,
            content:
              'Vậy diện tích tam giác $MAN$ là $S_{\\triangle MAN} = \\frac{1}{2} \\cdot MN \\cdot h = \\frac{1}{2} \\cdot 1 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{4}$.',
            roleDescription: 'Tính diện tích tam giác MAN và kết luận',
          },
        ],
        pedagogicalTip: 'Hai điểm ứng với $\\alpha$ và $180^\\circ - \\alpha$ có cùng tung độ $y_0 = \\sin\\alpha$ và có hoành độ đối nhau.',
        teacherAnalysis: 'Bám sát Câu 3.24 trang 32 & 95 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b5_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 5: Tính giá trị biểu thức lượng giác khi biết tan (Bài 3.2c SBT trang 31)',
        problemStatement:
          'Cho biết $\\tan\\alpha = 3$. Hãy tính giá trị của biểu thức $P = \\frac{2\\sin\\alpha + 3\\cos\\alpha}{4\\sin\\alpha - 5\\cos\\alpha}$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b5_d1_q4_s1',
            originalIndex: 1,
            content:
              'Vì $\\tan\\alpha = 3$ xác định nên $\\cos\\alpha \\ne 0$.',
            roleDescription: 'Nêu điều kiện cos α ≠ 0',
          },
          {
            id: 'b5_d1_q4_s2',
            originalIndex: 2,
            content:
              'Chia cả tử và mẫu của biểu thức $P$ cho $\\cos\\alpha$, ta được $P = \\frac{2\\frac{\\sin\\alpha}{\\cos\\alpha} + 3}{4\\frac{\\sin\\alpha}{\\cos\\alpha} - 5}$.',
            roleDescription: 'Chia cả tử và mẫu cho cos α',
          },
          {
            id: 'b5_d1_q4_s3',
            originalIndex: 3,
            content:
              'Thay $\\frac{\\sin\\alpha}{\\cos\\alpha} = \\tan\\alpha$ vào biểu thức: $P = \\frac{2\\tan\\alpha + 3}{4\\tan\\alpha - 5}$.',
            roleDescription: 'Biểu diễn P theo tan α',
          },
          {
            id: 'b5_d1_q4_s4',
            originalIndex: 4,
            content:
              'Thay $\\tan\\alpha = 3$ vào ta được $P = \\frac{2\\cdot 3 + 3}{4\\cdot 3 - 5} = \\frac{9}{7}$.',
            roleDescription: 'Thay số và kết luận',
          },
        ],
        pedagogicalTip: 'Kỹ thuật chia tử và mẫu cho $\\cos\\alpha$ áp dụng cho mọi phân thức thuần nhất bậc nhất theo $\\sin\\alpha, \\cos\\alpha$.',
        teacherAnalysis: 'Bám sát Bài 3.2c trang 31 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-5-2': {
    extraPart1: [
      {
        id: 'b5_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 5: Tính cot(180° - α) khi biết sin α',
        prompt:
          'Cho góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 90^\\circ$ và $\\sin\\alpha = \\frac{3}{5}$. Giá trị của $\\cot(180^\\circ - \\alpha)$ bằng:',
        options: [
          { key: 'A', content: '$-\\frac{4}{3}$' },
          { key: 'B', content: '$\\frac{4}{3}$' },
          { key: 'C', content: '$-\\frac{3}{4}$' },
          { key: 'D', content: '$\\frac{3}{4}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $0^\\circ < \\alpha < 90^\\circ$ nên $\\cos\\alpha = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5} \\Rightarrow \\cot\\alpha = \\frac{4}{3}$. Do đó $\\cot(180^\\circ - \\alpha) = -\\cot\\alpha = -\\frac{4}{3}$.',
        pedagogicalTip: 'Hai góc bù nhau có côtang đối nhau: $\\cot(180^\\circ - \\alpha) = -\\cot\\alpha$.',
        points: 0.25,
      },
      {
        id: 'b5_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 5: Tính tan α từ phương trình bậc nhất của sin và cos',
        prompt:
          'Cho góc $\\alpha$ thỏa mãn $2\\sin\\alpha + 3\\cos\\alpha = 0$ (với $\\cos\\alpha \\ne 0$). Giá trị của $\\tan\\alpha$ bằng:',
        options: [
          { key: 'A', content: '$-\\frac{3}{2}$' },
          { key: 'B', content: '$\\frac{3}{2}$' },
          { key: 'C', content: '$-\\frac{2}{3}$' },
          { key: 'D', content: '$\\frac{2}{3}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ $2\\sin\\alpha + 3\\cos\\alpha = 0 \\Leftrightarrow 2\\sin\\alpha = -3\\cos\\alpha \\Leftrightarrow \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -\\frac{3}{2}$.',
        pedagogicalTip: 'Chia hai vế của $2\\sin\\alpha = -3\\cos\\alpha$ cho $2\\cos\\alpha$.',
        points: 0.25,
      },
      {
        id: 'b5_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 5: Tính tan α + cot α từ tọa độ điểm trên nửa đường tròn đơn vị',
        prompt:
          'Trên nửa đường tròn đơn vị, cho điểm $M\\left(-\\frac{5}{13}; \\frac{12}{13}\\right)$ ứng với góc $\\alpha$. Giá trị của $\\tan\\alpha + \\cot\\alpha$ bằng:',
        options: [
          { key: 'A', content: '$-\\frac{169}{60}$' },
          { key: 'B', content: '$\\frac{169}{60}$' },
          { key: 'C', content: '$-\\frac{7}{13}$' },
          { key: 'D', content: '$-\\frac{60}{169}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $\\sin\\alpha = \\frac{12}{13},\\ \\cos\\alpha = -\\frac{5}{13}$. Khi đó $\\tan\\alpha + \\cot\\alpha = \\frac{\\sin^2\\alpha + \\cos^2\\alpha}{\\sin\\alpha\\cos\\alpha} = \\frac{1}{-60/169} = -\\frac{169}{60}$.',
        pedagogicalTip: 'Sử dụng hằng đẳng thức rất đẹp: $\\tan\\alpha + \\cot\\alpha = \\frac{1}{\\sin\\alpha\\cos\\alpha}$.',
        points: 0.25,
      },
      {
        id: 'b5_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 5: Góc nghiêng tia nắng mặt trời vào ngày Xuân phân (Bài 3.4 SBT trang 31)',
        prompt:
          'Trong công thức tính góc nghiêng tia nắng mặt trời lúc giữa trưa $\\alpha = 90^\\circ - \\phi - \\left|\\cos\\left(\\left(\\frac{2(N+10)}{365} - m\\right)180^\\circ\\right)\\right| \\cdot 23{,}5^\\circ$ (Bài 3.4 SBT trang 31), tại vĩ độ $\\phi = 21^\\circ$ vào ngày Xuân phân (khi $\\cos(\\dots) = 0$), góc nghiêng $\\alpha$ bằng:',
        options: [
          { key: 'A', content: '$69^\\circ$' },
          { key: 'B', content: '$45{,}5^\\circ$' },
          { key: 'C', content: '$70^\\circ$' },
          { key: 'D', content: '$66{,}5^\\circ$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khi $\\cos(\\dots) = 0$, số hạng thứ ba bằng $0$ nên $\\alpha = 90^\\circ - \\phi = 90^\\circ - 21^\\circ = 69^\\circ$.',
        pedagogicalTip: 'Vào ngày Xuân phân và Thu phân, tia nắng mặt trời chiếu vuông góc tại xích đạo nên tại vĩ độ $\\phi$ góc chiếu bằng $90^\\circ - \\phi$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b5_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 5: Chứng minh biểu thức lượng giác không phụ thuộc vào α (Bài 3.3 SBT trang 31)',
        problemStatement:
          'Chứng minh rằng giá trị của biểu thức $P = 3(\\sin^4\\alpha + \\cos^4\\alpha) - 2(\\sin^6\\alpha + \\cos^6\\alpha)$ không phụ thuộc vào $\\alpha$.',
        conclusionTarget:
          'Hãy sắp xếp các bước biến đổi sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b5_d2_q2_s1',
            originalIndex: 1,
            content:
              'Biến đổi $\\sin^4\\alpha + \\cos^4\\alpha = (\\sin^2\\alpha + \\cos^2\\alpha)^2 - 2\\sin^2\\alpha\\cos^2\\alpha = 1 - 2\\sin^2\\alpha\\cos^2\\alpha$.',
            roleDescription: 'Đưa sin⁴α + cos⁴α về tích sin²α cos²α',
          },
          {
            id: 'b5_d2_q2_s2',
            originalIndex: 2,
            content:
              'Biến đổi $\\sin^6\\alpha + \\cos^6\\alpha = (\\sin^2\\alpha + \\cos^2\\alpha)^3 - 3\\sin^2\\alpha\\cos^2\\alpha(\\sin^2\\alpha + \\cos^2\\alpha) = 1 - 3\\sin^2\\alpha\\cos^2\\alpha$.',
            roleDescription: 'Đưa sin⁶α + cos⁶α về tích sin²α cos²α',
          },
          {
            id: 'b5_d2_q2_s3',
            originalIndex: 3,
            content:
              'Thay hai kết quả trên vào biểu thức $P$: $P = 3(1 - 2\\sin^2\\alpha\\cos^2\\alpha) - 2(1 - 3\\sin^2\\alpha\\cos^2\\alpha)$.',
            roleDescription: 'Thay vào biểu thức P',
          },
          {
            id: 'b5_d2_q2_s4',
            originalIndex: 4,
            content:
              'Khai triển và rút gọn: $P = 3 - 6\\sin^2\\alpha\\cos^2\\alpha - 2 + 6\\sin^2\\alpha\\cos^2\\alpha = 1$ (không phụ thuộc vào $\\alpha$).',
            roleDescription: 'Triệt tiêu số hạng chứa α và kết luận P = 1',
          },
        ],
        pedagogicalTip: 'Hai hằng đẳng thức $\\sin^4\\alpha + \\cos^4\\alpha = 1 - 2\\sin^2\\alpha\\cos^2\\alpha$ và $\\sin^6\\alpha + \\cos^6\\alpha = 1 - 3\\sin^2\\alpha\\cos^2\\alpha$ rất hữu ích.',
        teacherAnalysis: 'Bám sát Bài 3.3 trang 31 & 94 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b5_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 5: Tính giá trị biểu thức khi biết tổng sin α + cos α',
        problemStatement:
          'Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha + \\cos\\alpha = \\frac{5}{4}$. Hãy tính giá trị của tích $\\sin\\alpha\\cos\\alpha$ và biểu thức $Q = \\sin^3\\alpha + \\cos^3\\alpha$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b5_d2_q3_s1',
            originalIndex: 1,
            content:
              'Bình phương hai vế của giả thiết: $(\\sin\\alpha + \\cos\\alpha)^2 = \\frac{25}{16} \\Leftrightarrow \\sin^2\\alpha + \\cos^2\\alpha + 2\\sin\\alpha\\cos\\alpha = \\frac{25}{16}$.',
            roleDescription: 'Bình phương hai vế của sin α + cos α = 5/4',
          },
          {
            id: 'b5_d2_q3_s2',
            originalIndex: 2,
            content:
              'Thay $\\sin^2\\alpha + \\cos^2\\alpha = 1$, ta tính được $\\sin\\alpha\\cos\\alpha = \\frac{25/16 - 1}{2} = \\frac{9}{32}$.',
            roleDescription: 'Tính tích sin α cos α = 9/32',
          },
          {
            id: 'b5_d2_q3_s3',
            originalIndex: 3,
            content:
              'Phân tích hằng đẳng thức bậc ba: $Q = \\sin^3\\alpha + \\cos^3\\alpha = (\\sin\\alpha + \\cos\\alpha)(\\sin^2\\alpha - \\sin\\alpha\\cos\\alpha + \\cos^2\\alpha) = (\\sin\\alpha + \\cos\\alpha)(1 - \\sin\\alpha\\cos\\alpha)$.',
            roleDescription: 'Biểu diễn Q theo tổng và tích của sin α, cos α',
          },
          {
            id: 'b5_d2_q3_s4',
            originalIndex: 4,
            content:
              'Thay số vào biểu thức: $Q = \\frac{5}{4} \\cdot \\left(1 - \\frac{9}{32}\\right) = \\frac{5}{4} \\cdot \\frac{23}{32} = \\frac{115}{128}$.',
            roleDescription: 'Thay số và kết luận giá trị của Q',
          },
        ],
        pedagogicalTip: 'Mọi đa thức đối xứng của $\\sin\\alpha, \\cos\\alpha$ đều biểu diễn được qua tổng $S = \\sin\\alpha + \\cos\\alpha$ và tích $P = \\sin\\alpha\\cos\\alpha$.',
        teacherAnalysis: 'Rèn luyện kỹ năng biến đổi đại số kết hợp hệ thức $\\sin^2\\alpha + \\cos^2\\alpha = 1$.',
        points: 0.75,
      },
      {
        id: 'b5_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 5: Giải bài toán góc nghiêng tia nắng mặt trời (Bài 3.4 SBT trang 31)',
        problemStatement:
          'Áp dụng công thức $\\alpha = 90^\\circ - \\phi - \\left|\\cos\\left(\\left(\\frac{2(N+10)}{365} - m\\right)180^\\circ\\right)\\right| \\cdot 23{,}5^\\circ$ (Bài 3.4 SBT trang 31) để tính góc nghiêng $\\alpha$ của tia nắng mặt trời lúc giữa trưa tại vị trí có vĩ độ $\\phi = 20^\\circ$ vào ngày 10 tháng 10 (năm không nhuận, biết $m = 0$ khi $N \\ge 264$).',
        conclusionTarget:
          'Hãy sắp xếp các bước tính toán sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b5_d2_q4_s1',
            originalIndex: 1,
            content:
              'Tính số thứ tự ngày $N$ từ đầu năm đến ngày 10/10 trong năm không nhuận: $N = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 10 = 283$.',
            roleDescription: 'Xác định ngày thứ N = 283 trong năm',
          },
          {
            id: 'b5_d2_q4_s2',
            originalIndex: 2,
            content:
              'Vì $N = 283 \\ge 264$ nên theo quy tắc của công thức ta chọn hệ số $m = 0$.',
            roleDescription: 'Xác định hệ số m = 0',
          },
          {
            id: 'b5_d2_q4_s3',
            originalIndex: 3,
            content:
              'Thay $\\phi = 20^\\circ, N = 283, m = 0$ vào công thức: $\\alpha = 90^\\circ - 20^\\circ - \\left|\\cos\\left(\\frac{2(283 + 10)}{365}\\cdot 180^\\circ\\right)\\right| \\cdot 23{,}5^\\circ$.',
            roleDescription: 'Thay các tham số φ, N, m vào công thức',
          },
          {
            id: 'b5_d2_q4_s4',
            originalIndex: 4,
            content:
              'Bấm máy tính thu gọn biểu thức ta được góc nghiêng của tia nắng mặt trời $\\alpha \\approx 70^\\circ - 7{,}65^\\circ = 62{,}35^\\circ$.',
            roleDescription: 'Tính kết quả gần đúng α ≈ 62,35°',
          },
        ],
        pedagogicalTip: 'Chú ý đếm đúng số ngày của từng tháng từ tháng 1 đến tháng 9 cộng thêm 10 ngày tháng 10.',
        teacherAnalysis: 'Lời giải bám sát tuyệt đối Bài 3.4 trang 31 & 95 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 6: HỆ THỨC LƯỢNG TRONG TAM GIÁC ====================
  'de-on-bai-6-1': {
    extraPart1: [
      {
        id: 'b6_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 6: Tính bán kính đường tròn ngoại tiếp bằng định lí Sin',
        prompt:
          'Cho tam giác $ABC$ có cạnh $a = 10$ và góc $\\widehat{A} = 30^\\circ$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ bằng:',
        options: [
          { key: 'A', content: '$10$' },
          { key: 'B', content: '$5$' },
          { key: 'C', content: '$20$' },
          { key: 'D', content: '$5\\sqrt{3}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo định lí Sin: $2R = \\frac{a}{\\sin A} = \\frac{10}{\\sin 30^\\circ} = \\frac{10}{0{,}5} = 20 \\Rightarrow R = 10$.',
        pedagogicalTip: 'Nhớ chia đôi $2R$ để ra bán kính $R$.',
        points: 0.25,
      },
      {
        id: 'b6_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 6: Tính bán kính đường tròn nội tiếp từ ba cạnh',
        prompt:
          'Cho tam giác $ABC$ có độ dài ba cạnh $a = 13, b = 14, c = 15$. Bán kính đường tròn nội tiếp $r$ của tam giác $ABC$ bằng:',
        options: [
          { key: 'A', content: '$4$' },
          { key: 'B', content: '$8{,}125$' },
          { key: 'C', content: '$6$' },
          { key: 'D', content: '$3{,}5$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Nửa chu vi $p = 21$, diện tích $S = \\sqrt{21\\cdot 8\\cdot 7\\cdot 6} = 84$. Suy ra $r = \\frac{S}{p} = \\frac{84}{21} = 4$.',
        pedagogicalTip: 'Dùng công thức $S = pr \\Rightarrow r = \\frac{S}{p}$.',
        points: 0.25,
      },
      {
        id: 'b6_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 6: Tìm số đo góc từ hệ thức giữa ba cạnh',
        prompt:
          'Cho tam giác $ABC$ có ba cạnh thỏa mãn $a^2 = b^2 + c^2 + bc$. Số đo của góc $\\widehat{A}$ bằng:',
        options: [
          { key: 'A', content: '$120^\\circ$' },
          { key: 'B', content: '$60^\\circ$' },
          { key: 'C', content: '$150^\\circ$' },
          { key: 'D', content: '$135^\\circ$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo hệ quả định lí Côsin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{-bc}{2bc} = -\\frac{1}{2}$. Vì $0^\\circ < A < 180^\\circ$ nên $\\widehat{A} = 120^\\circ$.',
        pedagogicalTip: 'Khi $a^2 = b^2 + c^2 + bc$ (dấu $+$), $\\cos A = -\\frac{1}{2}$ nên góc $A = 120^\\circ$.',
        points: 0.25,
      },
      {
        id: 'b6_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 6: Tính cạnh từ độ dài đường trung tuyến',
        prompt:
          'Cho tam giác $ABC$ có $AB = 4, AC = 6$ và độ dài đường trung tuyến $AM = \\sqrt{22}$. Độ dài cạnh $BC$ bằng:',
        options: [
          { key: 'A', content: '$4$' },
          { key: 'B', content: '$2\\sqrt{6}$' },
          { key: 'C', content: '$6$' },
          { key: 'D', content: '$5$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ công thức $m_a^2 = \\frac{b^2 + c^2}{2} - \\frac{a^2}{4} \\Rightarrow 22 = \\frac{36 + 16}{2} - \\frac{a^2}{4} = 26 - \\frac{a^2}{4} \\Rightarrow \\frac{a^2}{4} = 4 \\Rightarrow a = 4$.',
        pedagogicalTip: 'Từ $m_a^2 = \\frac{b^2 + c^2}{2} - \\frac{a^2}{4}$ suy ra $a^2 = 2(b^2 + c^2) - 4m_a^2$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b6_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 6: Tính diện tích S, bán kính R và r khi biết ba cạnh (Bài 3.6 SBT trang 37)',
        problemStatement:
          'Cho tam giác $ABC$ có độ dài ba cạnh $a = 13, b = 14, c = 15$. Hãy tính diện tích $S$, bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$ của tam giác $ABC$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b6_d1_q2_s1',
            originalIndex: 1,
            content:
              'Tính nửa chu vi của tam giác: $p = \\frac{a + b + c}{2} = \\frac{13 + 14 + 15}{2} = 21$.',
            roleDescription: 'Tính nửa chu vi p = 21',
          },
          {
            id: 'b6_d1_q2_s2',
            originalIndex: 2,
            content:
              'Áp dụng công thức Heron: $S = \\sqrt{p(p - a)(p - b)(p - c)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$.',
            roleDescription: 'Tính diện tích S = 84 theo công thức Heron',
          },
          {
            id: 'b6_d1_q2_s3',
            originalIndex: 3,
            content:
              'Từ công thức $S = \\frac{abc}{4R}$, suy ra bán kính đường tròn ngoại tiếp $R = \\frac{abc}{4S} = \\frac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\frac{65}{8} = 8{,}125$.',
            roleDescription: 'Tính bán kính ngoại tiếp R = abc / (4S)',
          },
          {
            id: 'b6_d1_q2_s4',
            originalIndex: 4,
            content:
              'Từ công thức $S = pr$, suy ra bán kính đường tròn nội tiếp $r = \\frac{S}{p} = \\frac{84}{21} = 4$.',
            roleDescription: 'Tính bán kính nội tiếp r = S / p',
          },
        ],
        pedagogicalTip: 'Khi biết ba cạnh $a, b, c$, luôn tính $p \\rightarrow S$ (Heron) $\\rightarrow R, r, h_a$.',
        teacherAnalysis: 'Bám sát Bài 3.6 trang 37 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b6_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 6: Chứng minh hệ thức hai đường trung tuyến vuông góc (Ví dụ 4 SBT trang 36)',
        problemStatement:
          'Cho tam giác $ABC$ có hai đường trung tuyến kẻ từ $A$ và $B$ vuông góc với nhau. Chứng minh rằng $a^2 + b^2 = 5c^2$.',
        conclusionTarget:
          'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b6_d1_q3_s1',
            originalIndex: 1,
            content:
              'Gọi $G$ là trọng tâm của tam giác $ABC$. Theo tính chất trọng tâm, ta có $GA = \\frac{2}{3}m_a$ và $GB = \\frac{2}{3}m_b$.',
            roleDescription: 'Biểu diễn GA, GB theo độ dài hai trung tuyến m_a, m_b',
          },
          {
            id: 'b6_d1_q3_s2',
            originalIndex: 2,
            content:
              'Vì hai đường trung tuyến kẻ từ $A$ và $B$ vuông góc với nhau tại $G$ nên tam giác $GAB$ vuông tại $G$, suy ra $GA^2 + GB^2 = AB^2 \\Leftrightarrow \\frac{4}{9}(m_a^2 + m_b^2) = c^2$.',
            roleDescription: 'Áp dụng định lí Pythagore trong tam giác vuông GAB',
          },
          {
            id: 'b6_d1_q3_s3',
            originalIndex: 3,
            content:
              'Thay công thức đường trung tuyến $m_a^2 = \\frac{b^2 + c^2}{2} - \\frac{a^2}{4}$ và $m_b^2 = \\frac{a^2 + c^2}{2} - \\frac{b^2}{4}$ vào đẳng thức $4(m_a^2 + m_b^2) = 9c^2$.',
            roleDescription: 'Thay công thức m_a² và m_b² theo a, b, c',
          },
          {
            id: 'b6_d1_q3_s4',
            originalIndex: 4,
            content:
              'Thu gọn biểu thức: $4\\left(\\frac{a^2 + b^2}{4} + c^2\\right) = 9c^2 \\Leftrightarrow a^2 + b^2 + 4c^2 = 9c^2 \\Leftrightarrow a^2 + b^2 = 5c^2$ (điều phải chứng minh).',
            roleDescription: 'Thu gọn đại số và kết luận a² + b² = 5c²',
          },
        ],
        pedagogicalTip: 'Tổng $m_a^2 + m_b^2 = \\frac{a^2 + b^2}{4} + c^2$ giúp rút gọn rất gọn gàng.',
        teacherAnalysis: 'Bám sát Ví dụ 4 trang 36 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b6_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 6: Chứng minh hệ thức cot A + cot B + cot C (Bài 3.9b SBT trang 38)',
        problemStatement:
          'Cho tam giác $ABC$ có diện tích $S$ và độ dài ba cạnh $a, b, c$. Chứng minh rằng $\\cot A + \\cot B + \\cot C = \\frac{a^2 + b^2 + c^2}{4S}$.',
        conclusionTarget:
          'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b6_d1_q4_s1',
            originalIndex: 1,
            content:
              'Từ công thức diện tích $S = \\frac{1}{2}bc\\sin A$, ta suy ra $\\sin A = \\frac{2S}{bc}$.',
            roleDescription: 'Biểu diễn sin A theo diện tích S và hai cạnh b, c',
          },
          {
            id: 'b6_d1_q4_s2',
            originalIndex: 2,
            content:
              'Theo hệ quả định lí Côsin, ta có $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.',
            roleDescription: 'Biểu diễn cos A theo ba cạnh a, b, c',
          },
          {
            id: 'b6_d1_q4_s3',
            originalIndex: 3,
            content:
              'Suy ra $\\cot A = \\frac{\\cos A}{\\sin A} = \\frac{b^2 + c^2 - a^2}{4S}$. Chứng minh tương tự ta có $\\cot B = \\frac{a^2 + c^2 - b^2}{4S}$ và $\\cot C = \\frac{a^2 + b^2 - c^2}{4S}$.',
            roleDescription: 'Tính cot A, cot B, cot C theo a, b, c và 4S',
          },
          {
            id: 'b6_d1_q4_s4',
            originalIndex: 4,
            content:
              'Cộng vế theo vế ba đẳng thức trên ta thu được $\\cot A + \\cot B + \\cot C = \\frac{a^2 + b^2 + c^2}{4S}$ (điều phải chứng minh).',
            roleDescription: 'Cộng ba biểu thức và kết luận',
          },
        ],
        pedagogicalTip: 'Đẳng thức $\\cot A = \\frac{b^2 + c^2 - a^2}{4S}$ kết nối trực tiếp định lí Côsin và diện tích tam giác.',
        teacherAnalysis: 'Bám sát Bài 3.9b trang 38 & 98 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-6-2': {
    extraPart1: [
      {
        id: 'b6_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 6: Khoảng cách giữa hai tàu đánh cá sau 2 giờ',
        prompt:
          'Hai tàu đánh cá cùng xuất phát từ bến $A$ và đi thẳng đều theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất chạy với tốc độ $15\\text{ km/h}$, tàu thứ hai chạy với tốc độ $20\\text{ km/h}$. Sau $2$ giờ, khoảng cách giữa hai tàu là:',
        options: [
          { key: 'A', content: '$10\\sqrt{13}\\text{ km}$' },
          { key: 'B', content: '$5\\sqrt{13}\\text{ km}$' },
          { key: 'C', content: '$50\\text{ km}$' },
          { key: 'D', content: '$10\\sqrt{19}\\text{ km}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Sau $2$ giờ, quãng đường hai tàu đi được là $AB = 30\\text{ km}$ và $AC = 40\\text{ km}$. Áp dụng định lí Côsin: $BC = \\sqrt{30^2 + 40^2 - 2\\cdot 30\\cdot 40\\cos 60^\\circ} = \\sqrt{1300} = 10\\sqrt{13}\\text{ km}$.',
        pedagogicalTip: 'Tính quãng đường $s = v \\cdot t$ của mỗi tàu sau $2$ giờ trước khi áp dụng định lí Côsin.',
        points: 0.25,
      },
      {
        id: 'b6_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 6: Đo khoảng cách qua hồ nước bằng định lí Côsin',
        prompt:
          'Để đo khoảng cách giữa hai địa điểm $A$ và $B$ ở hai bên bờ hồ, người ta chọn điểm $C$ trên bờ sao cho $CA = 80\\text{ m}, CB = 100\\text{ m}$ và đo được góc $\\widehat{ACB} = 60^\\circ$. Khoảng cách $AB$ gần nhất với giá trị nào sau đây?',
        options: [
          { key: 'A', content: '$91{,}65\\text{ m}$' },
          { key: 'B', content: '$85{,}40\\text{ m}$' },
          { key: 'C', content: '$128{,}06\\text{ m}$' },
          { key: 'D', content: '$90{,}00\\text{ m}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Áp dụng định lí Côsin: $AB = \\sqrt{80^2 + 100^2 - 2\\cdot 80\\cdot 100\\cos 60^\\circ} = \\sqrt{8400} \\approx 91{,}65\\text{ m}$.',
        pedagogicalTip: 'Phương pháp chọn điểm trung gian $C$ trên bờ giúp đo khoảng cách $AB$ mà không cần băng qua hồ.',
        points: 0.25,
      },
      {
        id: 'b6_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 6: Bán kính đường tròn ngoại tiếp tam giác vuông',
        prompt:
          'Cho tam giác $ABC$ có độ dài ba cạnh $a = 5, b = 12, c = 13$. Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng:',
        options: [
          { key: 'A', content: '$6{,}5$' },
          { key: 'B', content: '$6$' },
          { key: 'C', content: '$2$' },
          { key: 'D', content: '$13$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $5^2 + 12^2 = 13^2$ nên tam giác $ABC$ vuông tại $C$ với cạnh huyền $c = 13$. Suy ra $R = \\frac{c}{2} = 6{,}5$.',
        pedagogicalTip: 'Nhận biết bộ ba Pythagore $(5, 12, 13)$ để suy ra ngay $R = \\frac{\\text{cạnh huyền}}{2}$.',
        points: 0.25,
      },
      {
        id: 'b6_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 6: Tính góc trong bài toán đo chiều cao tháp (Ví dụ 5 SBT trang 37)',
        prompt:
          'Trong bài toán đo chiều cao tháp $CD$ với $A, B, D$ thẳng hàng ($B$ nằm giữa $A$ và $D$), góc ngắm $\\widehat{CAD} = 35^\\circ$ và $\\widehat{CBD} = 40^\\circ$ (Ví dụ 5 SBT trang 37), số đo góc $\\widehat{ACB}$ bằng:',
        options: [
          { key: 'A', content: '$5^\\circ$' },
          { key: 'B', content: '$75^\\circ$' },
          { key: 'C', content: '$140^\\circ$' },
          { key: 'D', content: '$10^\\circ$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Góc $\\widehat{CBD} = 40^\\circ$ là góc ngoài tại đỉnh $B$ của $\\triangle ABC$, nên $\\widehat{ACB} = \\widehat{CBD} - \\widehat{CAB} = 40^\\circ - 35^\\circ = 5^\\circ$.',
        pedagogicalTip: 'Góc ở đỉnh $C$ nhìn đoạn $AB$ luôn bằng hiệu hai góc nâng $\\beta - \\alpha$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b6_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 6: Giải bài toán đo chiều cao cây trên sườn đồi (Bài 3.12 SBT trang 39)',
        problemStatement:
          'Một cái cây $AB$ mọc thẳng đứng trên một sườn đồi nghiêng góc $10^\\circ$ so với phương ngang ($A$ là gốc cây, $B$ là ngọn cây). Từ điểm $C$ cách gốc cây $A$ một đoạn $AC = 31\\text{ m}$ về phía dưới dốc, người ta nhìn ngọn cây $B$ dưới một góc $40^\\circ$ so với phương ngang. Hãy tính chiều cao $AB$ của cây.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b6_d2_q2_s1',
            originalIndex: 1,
            content:
              'Trong tam giác $ABC$, tia ngắm $CB$ tạo với phương ngang góc $40^\\circ$, còn sườn đồi $CA$ tạo với phương ngang góc $10^\\circ$, nên góc $\\widehat{ACB} = 40^\\circ - 10^\\circ = 30^\\circ$.',
            roleDescription: 'Tính góc ACB = 30° giữa tia ngắm và mặt dốc',
          },
          {
            id: 'b6_d2_q2_s2',
            originalIndex: 2,
            content:
              'Vì cây $AB$ mọc thẳng đứng (vuông góc với phương ngang) nên góc tại đỉnh ngọn cây là $\\widehat{ABC} = 90^\\circ - 40^\\circ = 50^\\circ$.',
            roleDescription: 'Tính góc ABC = 50° tại ngọn cây',
          },
          {
            id: 'b6_d2_q2_s3',
            originalIndex: 3,
            content:
              'Áp dụng định lí Sin trong tam giác $ABC$: $\\frac{AB}{\\sin\\widehat{ACB}} = \\frac{AC}{\\sin\\widehat{ABC}} \\Rightarrow AB = \\frac{AC \\cdot \\sin 30^\\circ}{\\sin 50^\\circ}$.',
            roleDescription: 'Thiết lập công thức tính AB theo định lí Sin',
          },
          {
            id: 'b6_d2_q2_s4',
            originalIndex: 4,
            content:
              'Thay $AC = 31\\text{ m}$ vào công thức: $AB = \\frac{31 \\cdot 0{,}5}{\\sin 50^\\circ} \\approx 20{,}23\\text{ m}$. Vậy cây cao khoảng $20{,}23\\text{ m}$.',
            roleDescription: 'Thay số và kết luận chiều cao của cây',
          },
        ],
        pedagogicalTip: 'Vẽ đường nằm ngang phụ qua điểm ngắm $C$ để tìm nhanh hai góc $\\widehat{ACB} = 30^\\circ$ và $\\widehat{ABC} = 50^\\circ$.',
        teacherAnalysis: 'Lời giải bám sát tuyệt đối Bài 3.12 trang 39 & 98 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b6_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 6: Bài toán tàu thuỷ đi lệch hướng do sương mù (Bài 3.11 SBT trang 38)',
        problemStatement:
          'Một tàu thuỷ xuất phát từ cảng $A$ để đi đến đảo $B$ cách $A$ $90\\text{ km}$. Do sương mù, tàu đi lệch hướng ban đầu một góc $20^\\circ$ và đi thẳng được $50\\text{ km}$ thì đến vị trí $C$. Hãy tính khoảng cách từ vị trí $C$ đến đảo $B$ và góc cần điều chỉnh để tàu đi thẳng từ $C$ đến $B$.',
        conclusionTarget:
          'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b6_d2_q3_s1',
            originalIndex: 1,
            content:
              'Xét tam giác $ABC$ có $AB = 90\\text{ km}, AC = 50\\text{ km}$ và góc xen giữa $\\widehat{BAC} = 20^\\circ$.',
            roleDescription: 'Mô hình hóa bài toán bằng tam giác ABC',
          },
          {
            id: 'b6_d2_q3_s2',
            originalIndex: 2,
            content:
              'Áp dụng định lí Côsin trong tam giác $ABC$: $BC^2 = AB^2 + AC^2 - 2\\cdot AB\\cdot AC\\cos 20^\\circ = 90^2 + 50^2 - 2\\cdot 90\\cdot 50\\cos 20^\\circ \\approx 2142{,}77$.',
            roleDescription: 'Dùng định lí Côsin tính BC²',
          },
          {
            id: 'b6_d2_q3_s3',
            originalIndex: 3,
            content:
              'Khai căn bậc hai ta được khoảng cách từ $C$ đến đảo $B$ là $BC \\approx 46{,}29\\text{ km}$.',
            roleDescription: 'Suy ra khoảng cách BC ≈ 46,29 km',
          },
          {
            id: 'b6_d2_q3_s4',
            originalIndex: 4,
            content:
              'Tính $\\cos\\widehat{ACB} = \\frac{AC^2 + BC^2 - AB^2}{2\\cdot AC\\cdot BC} \\approx -0{,}747 \\Rightarrow \\widehat{ACB} \\approx 138{,}3^\\circ$, vậy tàu cần quay một góc bù là $180^\\circ - 138{,}3^\\circ = 41{,}7^\\circ$ về phía đảo $B$.',
            roleDescription: 'Tính góc ACB và góc chuyển hướng của tàu',
          },
        ],
        pedagogicalTip: 'Dùng định lí Côsin để tính góc $\\widehat{ACB}$ tránh được sự nhập nhằng góc nhọn/góc tù của định lí Sin.',
        teacherAnalysis: 'Bám sát Bài 3.11 trang 38 & 98 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
      {
        id: 'b6_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 6: Chứng minh công thức diện tích S = R.r.(sin A + sin B + sin C) (Bài 3.9a SBT trang 38)',
        problemStatement:
          'Cho tam giác $ABC$ có diện tích $S$, bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$. Chứng minh rằng $S = Rr(\\sin A + \\sin B + \\sin C)$.',
        conclusionTarget:
          'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
        steps: [
          {
            id: 'b6_d2_q4_s1',
            originalIndex: 1,
            content:
              'Theo định lí Sin trong tam giác $ABC$, ta có $\\sin A = \\frac{a}{2R},\\ \\sin B = \\frac{b}{2R}$ và $\\sin C = \\frac{c}{2R}$.',
            roleDescription: 'Biểu diễn sin A, sin B, sin C theo các cạnh và 2R',
          },
          {
            id: 'b6_d2_q4_s2',
            originalIndex: 2,
            content:
              'Cộng ba đẳng thức trên: $\\sin A + \\sin B + \\sin C = \\frac{a + b + c}{2R} = \\frac{p}{R}$ (với $p = \\frac{a + b + c}{2}$ là nửa chu vi).',
            roleDescription: 'Tính tổng sin A + sin B + sin C = p / R',
          },
          {
            id: 'b6_d2_q4_s3',
            originalIndex: 3,
            content:
              'Thay vào vế phải của đẳng thức cần chứng minh: $Rr(\\sin A + \\sin B + \\sin C) = Rr \\cdot \\frac{p}{R} = pr$.',
            roleDescription: 'Rút gọn R ở tử và mẫu',
          },
          {
            id: 'b6_d2_q4_s4',
            originalIndex: 4,
            content:
              'Mà theo công thức diện tích tam giác thì $pr = S$, vậy $S = Rr(\\sin A + \\sin B + \\sin C)$ (điều phải chứng minh).',
            roleDescription: 'Áp dụng công thức S = pr và kết luận',
          },
        ],
        pedagogicalTip: 'Đưa $\\sin A + \\sin B + \\sin C$ về $\\frac{p}{R}$ nhờ định lí Sin.',
        teacherAnalysis: 'Bám sát Bài 3.9a trang 38 & 98 Sách bài tập Toán 10 Kết nối tri thức.',
        points: 0.75,
      },
    ],
  },
};
