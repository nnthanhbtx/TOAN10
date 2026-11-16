import { LessonTheoryData } from '../../types/exam';

export const THEORY_TAP_1_A: LessonTheoryData[] = [
  // =========================================================================
  // BÀI 1: MỆNH ĐỀ (SGK Toán 10 Tập 1 - Trang 5 đến 11)
  // =========================================================================
  {
    lessonId: 'bai-1',
    lessonNumber: 1,
    name: 'Bài 1',
    topicTitle: 'Mệnh đề',
    chapter: 'Chương I. Mệnh đề và tập hợp',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 5 – 11',
    terms: [
      'Mệnh đề',
      'Mệnh đề phủ định',
      'Mệnh đề kéo theo, mệnh đề đảo',
      'Mệnh đề tương đương',
      'Điều kiện cần, điều kiện đủ, điều kiện cần và đủ',
      'Các kí hiệu: ∀, ∃',
    ],
    objectives: [
      'Thiết lập và phát biểu mệnh đề phủ định, mệnh đề đảo, mệnh đề kéo theo, mệnh đề tương đương.',
      'Thiết lập và phát biểu các mệnh đề có chứa kí hiệu $\\forall$, $\\exists$.',
      'Xác định tính đúng sai của một mệnh đề trong những trường hợp đơn giản.',
    ],
    sections: [
      {
        id: 'bai-1-sec-1',
        title: '1. Mệnh đề, mệnh đề chứa biến',
        theoryPoints: [
          '**a) Mệnh đề:** Những khẳng định có tính đúng hoặc sai được gọi là **mệnh đề lôgic** (gọi tắt là **mệnh đề**). Những câu không xác định được tính đúng sai (như câu nghi vấn, câu cảm thán, câu cầu khiến) không phải là mệnh đề.',
          '**Chú ý:** Người ta thường sử dụng các chữ cái $P, Q, R, \\dots$ để biểu thị các mệnh đề. Những mệnh đề liên quan đến toán học được gọi là **mệnh đề toán học**.',
          '**b) Mệnh đề chứa biến:** Câu khẳng định chứa một hoặc nhiều biến (ví dụ: "$n$ chia hết cho $2$" với $n$ là số tự nhiên; "$x > 5$" với $x \\in \\mathbb{R}$) chưa khẳng định được tính đúng sai nên chưa phải là mệnh đề. Tuy nhiên, khi thay biến bằng một giá trị cụ thể thuộc miền xác định thì câu đó cho ta một mệnh đề (đúng hoặc sai). Những câu như vậy được gọi là **mệnh đề chứa biến**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Tính chất cơ bản của mệnh đề (SGK trang 6)',
            formula:
              '• Mỗi mệnh đề phải hoặc đúng hoặc sai.\n• Một mệnh đề không thể vừa đúng vừa sai.',
            note: 'Những câu nghi vấn (câu hỏi), câu cảm thán, câu cầu khiến không phải là mệnh đề.',
          },
        ],
      },
      {
        id: 'bai-1-sec-2',
        title: '2. Mệnh đề phủ định',
        theoryPoints: [
          'Để phủ định một mệnh đề $P$, người ta thường thêm (hoặc bớt) từ **"không"** hoặc **"không phải"** vào trước vị ngữ của mệnh đề $P$.',
          'Ta kí hiệu mệnh đề phủ định của mệnh đề $P$ là $\\overline{P}$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Mệnh đề phủ định (SGK trang 7)',
            formula:
              'Mệnh đề $P$ và mệnh đề $\\overline{P}$ là hai phát biểu trái ngược nhau. Nếu $P$ đúng thì $\\overline{P}$ sai, còn nếu $P$ sai thì $\\overline{P}$ đúng.',
            note: 'Khi phủ định các quan hệ toán học: phủ định của "$=$" là "$\\ne$"; phủ định của "$>$" là "$\\le$"; phủ định của "$<$" là "$\\ge$".',
          },
        ],
      },
      {
        id: 'bai-1-sec-3',
        title: '3. Mệnh đề kéo theo, mệnh đề đảo',
        theoryPoints: [
          '**a) Mệnh đề kéo theo:** Mệnh đề "Nếu $P$ thì $Q$" được gọi là một **mệnh đề kéo theo** và kí hiệu là $P \\Rightarrow Q$.',
          '**Tính đúng sai của mệnh đề $P \\Rightarrow Q$:** Mệnh đề $P \\Rightarrow Q$ **chỉ sai khi $P$ đúng và $Q$ sai**. Do đó ta chỉ cần xét tính đúng sai của mệnh đề $P \\Rightarrow Q$ khi $P$ đúng: nếu $Q$ đúng thì $P \\Rightarrow Q$ đúng, nếu $Q$ sai thì $P \\Rightarrow Q$ sai (khi $P$ sai thì $P \\Rightarrow Q$ luôn đúng).',
          '**Định lí toán học:** Các định lí toán học là những mệnh đề đúng và thường có dạng $P \\Rightarrow Q$.',
          '**b) Mệnh đề đảo:** Mệnh đề $Q \\Rightarrow P$ được gọi là **mệnh đề đảo** của mệnh đề $P \\Rightarrow Q$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Mệnh đề kéo theo & Điều kiện cần, điều kiện đủ (SGK trang 8)',
            formula:
              '• Mệnh đề "Nếu $P$ thì $Q$" được gọi là một mệnh đề kéo theo và kí hiệu là $P \\Rightarrow Q$.\n• Khi định lí $P \\Rightarrow Q$ đúng, ta nói:\n  – $P$ là giả thiết của định lí, $Q$ là kết luận của định lí, hoặc\n  – "$P$ là điều kiện đủ để có $Q$" hoặc "$Q$ là điều kiện cần để có $P$".',
          },
          {
            label: 'Khung kiến thức: Mệnh đề đảo (SGK trang 9)',
            formula: 'Mệnh đề $Q \\Rightarrow P$ được gọi là mệnh đề đảo của mệnh đề $P \\Rightarrow Q$.',
            note: 'Nhận xét: Mệnh đề đảo của một mệnh đề đúng không nhất thiết là đúng.',
          },
        ],
      },
      {
        id: 'bai-1-sec-4',
        title: '4. Mệnh đề tương đương',
        theoryPoints: [
          'Mệnh đề "$P$ nếu và chỉ nếu $Q$" được gọi là một **mệnh đề tương đương** và kí hiệu là $P \\Leftrightarrow Q$.',
          '**Nhận xét:** Nếu cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng thì mệnh đề tương đương $P \\Leftrightarrow Q$ đúng. Khi đó ta nói **"$P$ tương đương với $Q$"** hoặc **"$P$ là điều kiện cần và đủ để có $Q$"** hoặc **"$P$ khi và chỉ khi $Q$"**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Mệnh đề tương đương & Điều kiện cần và đủ (SGK trang 9)',
            formula:
              '$$P \\Leftrightarrow Q \\text{ đúng } \\iff \\begin{cases} P \\Rightarrow Q \\text{ đúng} \\\\ Q \\Rightarrow P \\text{ đúng} \\end{cases}$$',
            note: 'Khi $P \\Leftrightarrow Q$ đúng, ta nói "$P$ là điều kiện cần và đủ để có $Q$" (hoặc "$P$ khi và chỉ khi $Q$").',
          },
        ],
      },
      {
        id: 'bai-1-sec-5',
        title: '5. Mệnh đề có chứa kí hiệu ∀, ∃',
        theoryPoints: [
          'Kí hiệu $\\forall$ đọc là **"với mọi"**; kí hiệu $\\exists$ đọc là **"tồn tại"** (hoặc "có một", "có ít nhất một").',
          'Mệnh đề "$\\forall x \\in X, P(x)$" đúng khi với mọi $x_0 \\in X$, $P(x_0)$ đều là mệnh đề đúng; sai khi tồn tại ít nhất một $x_0 \\in X$ làm cho $P(x_0)$ sai.',
          'Mệnh đề "$\\exists x \\in X, P(x)$" đúng khi có ít nhất một $x_0 \\in X$ làm cho $P(x_0)$ đúng; sai khi với mọi $x_0 \\in X$, $P(x_0)$ đều sai.',
        ],
        formulas: [
          {
            label: 'Công thức phủ định mệnh đề có chứa kí hiệu ∀, ∃ (SGK trang 10)',
            formula:
              '• Phủ định của mệnh đề $P: \\text{"}\\forall x \\in X,\\; P(x)\\text{"}$ là mệnh đề $\\overline{P}: \\text{"}\\exists x \\in X,\\; \\overline{P(x)}\\text{"}$.\n• Phủ định của mệnh đề $Q: \\text{"}\\exists x \\in X,\\; P(x)\\text{"}$ là mệnh đề $\\overline{Q}: \\text{"}\\forall x \\in X,\\; \\overline{P(x)}\\text{"}$.',
            note: 'Ví dụ: Phủ định của mệnh đề $P: \\text{"}\\exists x \\in \\mathbb{R}, x^2 + 1 = 0\\text{"}$ là $\\overline{P}: \\text{"}\\forall x \\in \\mathbb{R}, x^2 + 1 \\ne 0\\text{"}$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Tính đúng sai của P ⇒ Q',
        expression: 'P \\Rightarrow Q \\text{ chỉ sai khi } P \\text{ đúng và } Q \\text{ sai}',
        description: 'Trong mọi trường hợp còn lại, mệnh đề kéo theo P ⇒ Q đều đúng.',
      },
      {
        name: 'Điều kiện cần và điều kiện đủ',
        expression: 'P \\Rightarrow Q \\text{ đúng: } P \\text{ là ĐK đủ để có } Q;\\; Q \\text{ là ĐK cần để có } P',
        description: 'Giả thiết P là điều kiện đủ; kết luận Q là điều kiện cần.',
      },
      {
        name: 'Mệnh đề tương đương',
        expression: 'P \\Leftrightarrow Q \\text{ đúng } \\iff (P \\Rightarrow Q \\text{ đúng và } Q \\Rightarrow P \\text{ đúng})',
        description: 'P là điều kiện cần và đủ để có Q (P khi và chỉ khi Q).',
      },
      {
        name: 'Phủ định mệnh đề chứa ∀, ∃',
        expression: '\\overline{\\forall x \\in X, P(x)} \\equiv \\exists x \\in X, \\overline{P(x)};\\quad \\overline{\\exists x \\in X, P(x)} \\equiv \\forall x \\in X, \\overline{P(x)}',
        description: 'Đổi ∀ thành ∃ (và ngược lại), đồng thời phủ định tính chất P(x).',
      },
    ],
  },

  // =========================================================================
  // BÀI 2: TẬP HỢP VÀ CÁC PHÉP TOÁN TRÊN TẬP HỢP (SGK Toán 10 Tập 1 - Trang 12 đến 19)
  // =========================================================================
  {
    lessonId: 'bai-2',
    lessonNumber: 2,
    name: 'Bài 2',
    topicTitle: 'Tập hợp và các phép toán trên tập hợp',
    chapter: 'Chương I. Mệnh đề và tập hợp',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 12 – 19',
    terms: [
      'Tập hợp, tập con, tập hợp bằng nhau, tập rỗng',
      'Hợp, giao, hiệu của hai tập hợp, phần bù của một tập con',
      'Biểu đồ Ven',
    ],
    objectives: [
      'Nhận biết các khái niệm cơ bản về tập hợp.',
      'Thực hiện các phép toán trên tập hợp và vận dụng giải một số bài toán có nội dung thực tiễn.',
      'Sử dụng biểu đồ Ven để biểu diễn tập hợp và các phép toán trên tập hợp.',
    ],
    sections: [
      {
        id: 'bai-2-sec-1',
        title: '1. Các khái niệm cơ bản về tập hợp',
        theoryPoints: [
          '**a) Tập hợp:** Kí hiệu $a \\in S$ chỉ phần tử $a$ thuộc tập hợp $S$; kí hiệu $a \\notin S$ chỉ phần tử $a$ không thuộc tập hợp $S$. Số phần tử của tập hợp hữu hạn $S$ được kí hiệu là $n(S)$.',
          '**Tập rỗng:** Tập hợp không chứa phần tử nào được gọi là **tập rỗng**, kí hiệu là $\\varnothing$ ($n(\\varnothing) = 0$).',
          '**b) Tập hợp con:** Nếu mọi phần tử của tập hợp $T$ đều là phần tử của tập hợp $S$ thì ta nói $T$ là một **tập hợp con (tập con)** của $S$ và viết là $T \\subset S$ (hoặc $S \\supset T$). Kí hiệu $T \\not\\subset S$ chỉ $T$ không là tập con của $S$. Quy ước $\\varnothing$ là tập con của mọi tập hợp.',
          '**Biểu đồ Ven:** Người ta thường minh hoạ một tập hợp bằng một hình phẳng được bao quanh bởi một đường kín, gọi là **biểu đồ Ven**.',
          '**c) Hai tập hợp bằng nhau:** Hai tập hợp $S$ và $T$ được gọi là **hai tập hợp bằng nhau** nếu mỗi phần tử của $T$ cũng là phần tử của tập hợp $S$ và ngược lại. Kí hiệu là $S = T$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Cách mô tả tập hợp, Tập con & Hai tập hợp bằng nhau (SGK trang 13–14)',
            formula:
              '• Có thể mô tả một tập hợp bằng một trong hai cách:\n  – Cách 1: Liệt kê các phần tử của tập hợp;\n  – Cách 2: Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp.\n• Tập con: $T \\subset S \\iff (\\forall x,\\; x \\in T \\Rightarrow x \\in S)$.\n• Hai tập hợp bằng nhau: $S = T \\iff (S \\subset T \\text{ và } T \\subset S)$.',
            note: 'Một tập hợp hữu hạn có $n$ phần tử thì có tất cả $2^n$ tập hợp con.',
          },
        ],
      },
      {
        id: 'bai-2-sec-2',
        title: '2. Các tập hợp số',
        theoryPoints: [
          '**a) Mối quan hệ giữa các tập hợp số:** Tập hợp các số tự nhiên $\\mathbb{N} = \\{0; 1; 2; 3; 4; \\dots\\}$; tập hợp các số nguyên $\\mathbb{Z} = \\{\\dots; -3; -2; -1; 0; 1; 2; 3; \\dots\\}$; tập hợp các số hữu tỉ $\\mathbb{Q} = \\left\\{\\dfrac{a}{b} \\;\\middle|\\; a, b \\in \\mathbb{Z}, b \\ne 0\\right\\}$; tập hợp các số thực $\\mathbb{R}$ gồm các số hữu tỉ và các số vô tỉ.',
          '**b) Các tập con thường dùng của $\\mathbb{R}$:** Khoảng, đoạn, nửa khoảng với hai đầu mút $a, b$ ($a < b$) và các kí hiệu $+\\infty$ (dương vô cực), $-\\infty$ (âm vô cực).',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Quan hệ bao hàm giữa các tập hợp số (SGK trang 15)',
            formula: '$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$',
          },
          {
            label: 'Khung kiến thức: Các tập con thường dùng của tập số thực ℝ (SGK trang 16, với a < b)',
            formula:
              '• Khoảng:\n  $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$;\n  $(a; +\\infty) = \\{x \\in \\mathbb{R} \\mid x > a\\}$;\n  $(-\\infty; b) = \\{x \\in \\mathbb{R} \\mid x < b\\}$;\n  $(-\\infty; +\\infty) = \\mathbb{R}$.\n• Đoạn:\n  $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.\n• Nửa khoảng:\n  $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$;\n  $(a; b] = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$;\n  $[a; +\\infty) = \\{x \\in \\mathbb{R} \\mid x \\ge a\\}$;\n  $(-\\infty; b] = \\{x \\in \\mathbb{R} \\mid x \\le b\\}$.',
          },
        ],
      },
      {
        id: 'bai-2-sec-3',
        title: '3. Các phép toán trên tập hợp',
        theoryPoints: [
          '**a) Giao của hai tập hợp:** Tập hợp gồm các phần tử thuộc cả hai tập hợp $S$ và $T$ gọi là **giao của hai tập hợp** $S$ và $T$, kí hiệu là $S \\cap T$.',
          '**b) Hợp của hai tập hợp:** Tập hợp gồm các phần tử thuộc tập hợp $S$ hoặc thuộc tập hợp $T$ gọi là **hợp của hai tập hợp** $S$ và $T$, kí hiệu là $S \\cup T$.',
          '**c) Hiệu của hai tập hợp và Phần bù:** Hiệu của hai tập hợp $S$ và $T$ là tập hợp gồm các phần tử thuộc $S$ nhưng không thuộc $T$, kí hiệu là $S \\setminus T$. Nếu $T \\subset S$ thì $S \\setminus T$ được gọi là **phần bù** của $T$ trong $S$, kí hiệu là $C_S T$ (chú ý: $C_S S = \\varnothing$).',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Giao, Hợp, Hiệu, Phần bù & Công thức số phần tử (SGK trang 17–18)',
            formula:
              '$$S \\cap T = \\{x \\mid x \\in S \\text{ và } x \\in T\\}$$\n$$S \\cup T = \\{x \\mid x \\in S \\text{ hoặc } x \\in T\\}$$\n$$S \\setminus T = \\{x \\mid x \\in S \\text{ và } x \\notin T\\}$$\n$$C_S T = S \\setminus T \\quad (\\text{khi } T \\subset S)$$\n$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$',
            note: 'Đặc biệt: nếu $A \\cap B = \\varnothing$ thì $n(A \\cup B) = n(A) + n(B)$.',
          },
        ],
        tikzCode: `\\begin{tikzpicture}
\\draw (-2.6,-1.6) rectangle (2.6,1.6);
\\draw (-0.7,0) circle (1.1);
\\draw (0.7,0) circle (1.1);
\\node at (-1.3,0.9) {$A$};
\\node at (1.3,0.9) {$B$};
\\node at (0,0) {$A \\cap B$};
\\node at (-1.2,-0.1) {$A \\setminus B$};
\\node at (1.2,-0.1) {$B \\setminus A$};
\\end{tikzpicture}`,
        tikzCaption: 'Biểu đồ Ven minh hoạ giao, hợp và hiệu của hai tập hợp A, B',
      },
    ],
    quickFormulas: [
      {
        name: 'Giao của hai tập hợp',
        expression: 'S \\cap T = \\{x \\mid x \\in S \\text{ và } x \\in T\\}',
        description: 'Lấy các phần tử chung thuộc cả S và T.',
      },
      {
        name: 'Hợp của hai tập hợp',
        expression: 'S \\cup T = \\{x \\mid x \\in S \\text{ hoặc } x \\in T\\}',
        description: 'Lấy tất cả các phần tử thuộc S hoặc thuộc T.',
      },
      {
        name: 'Hiệu và Phần bù',
        expression: 'S \\setminus T = \\{x \\mid x \\in S, x \\notin T\\};\\quad C_S T = S \\setminus T\\; (T \\subset S)',
        description: 'Các phần tử thuộc S nhưng không thuộc T.',
      },
      {
        name: 'Công thức số phần tử của hợp hai tập hợp',
        expression: 'n(A \\cup B) = n(A) + n(B) - n(A \\cap B)',
        description: 'Công thức giải bài toán thực tế bằng biểu đồ Ven.',
      },
    ],
  },

  // =========================================================================
  // BÀI 3: BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (SGK Toán 10 Tập 1 - Trang 22 đến 25)
  // =========================================================================
  {
    lessonId: 'bai-3',
    lessonNumber: 3,
    name: 'Bài 3',
    topicTitle: 'Bất phương trình bậc nhất hai ẩn',
    chapter: 'Chương II. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 22 – 25',
    terms: [
      'Bất phương trình bậc nhất hai ẩn',
      'Miền nghiệm của bất phương trình bậc nhất hai ẩn',
    ],
    objectives: [
      'Nhận biết bất phương trình bậc nhất hai ẩn.',
      'Biết biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ.',
      'Vận dụng kiến thức về bất phương trình bậc nhất hai ẩn vào giải quyết bài toán thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-3-sec-1',
        title: '1. Bất phương trình bậc nhất hai ẩn',
        theoryPoints: [
          'Bất phương trình bậc nhất hai ẩn $x, y$ có dạng tổng quát là $ax + by \\le c$ (hoặc $ax + by \\ge c$, $ax + by < c$, $ax + by > c$), trong đó $a, b, c$ là những số thực đã cho, $a$ và $b$ không đồng thời bằng $0$, $x$ và $y$ là các ẩn số.',
          'Cặp số $(x_0; y_0)$ được gọi là **một nghiệm** của bất phương trình bậc nhất hai ẩn $ax + by \\le c$ nếu bất đẳng thức $ax_0 + by_0 \\le c$ đúng.',
          '**Nhận xét:** Bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Dạng tổng quát và Nghiệm của BPT bậc nhất hai ẩn (SGK trang 23)',
            formula:
              '• Dạng tổng quát: $ax + by \\le c$ ($ax + by \\ge c$, $ax + by < c$, $ax + by > c$) với $a, b, c \\in \\mathbb{R}$ và $a^2 + b^2 \\ne 0$.\n• Cặp số $(x_0; y_0)$ là một nghiệm của $ax + by \\le c$ khi và chỉ khi $ax_0 + by_0 \\le c$ là bất đẳng thức đúng.',
          },
        ],
      },
      {
        id: 'bai-3-sec-2',
        title: '2. Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ',
        theoryPoints: [
          'Trong mặt phẳng toạ độ $Oxy$, tập hợp các điểm có toạ độ là nghiệm của bất phương trình $ax + by \\le c$ được gọi là **miền nghiệm** của bất phương trình đó.',
          'Đường thẳng $d: ax + by = c$ chia mặt phẳng toạ độ $Oxy$ thành hai nửa mặt phẳng bờ $d$: một nửa mặt phẳng (không kể bờ $d$) gồm các điểm có toạ độ $(x; y)$ thoả mãn $ax + by > c$; nửa mặt phẳng còn lại (không kể bờ $d$) gồm các điểm có toạ độ $(x; y)$ thoả mãn $ax + by < c$. Bờ $d$ gồm các điểm có toạ độ $(x; y)$ thoả mãn $ax + by = c$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Cách biểu diễn miền nghiệm của BPT ax + by ≤ c (SGK trang 24)',
            formula:
              '• Bước 1: Vẽ đường thẳng $d: ax + by = c$ trên mặt phẳng toạ độ $Oxy$.\n• Bước 2: Lấy một điểm $M_0(x_0; y_0)$ không thuộc $d$ (nếu $c \\ne 0$ thường chọn gốc toạ độ $O(0; 0)$; nếu $c = 0$ thường chọn $(1; 0)$ hoặc $(0; 1)$).\n• Bước 3: Tính $ax_0 + by_0$ và so sánh với $c$.\n• Bước 4: Nếu $ax_0 + by_0 < c$ thì nửa mặt phẳng bờ $d$ chứa $M_0$ là miền nghiệm của bất phương trình. Nếu $ax_0 + by_0 > c$ thì nửa mặt phẳng bờ $d$ không chứa $M_0$ là miền nghiệm của bất phương trình.',
            note: 'Chú ý: Miền nghiệm của bất phương trình $ax + by < c$ là miền nghiệm của bất phương trình $ax + by \\le c$ bỏ đi đường thẳng $ax + by = c$ và biểu diễn đường thẳng bằng nét đứt.',
          },
        ],
        tikzCode: `\\begin{tikzpicture}
\\draw[->] (-1,0) -- (3.5,0) node[below] {$x$};
\\draw[->] (0,-1) -- (0,3.2) node[left] {$y$};
\\node at (-0.25,-0.25) {$O$};
\\draw[thick] (-0.5,2.5) -- (2.5,-0.5);
\\node at (2.1,1.3) {$d: x+y=2$};
\\fill (0,0) circle (1.5pt);
\\node at (0.6,0.4) {$M_0(0;0)$};
\\end{tikzpicture}`,
        tikzCaption: 'Đường thẳng bờ d: ax + by = c chia mặt phẳng Oxy thành hai nửa mặt phẳng',
      },
    ],
    quickFormulas: [
      {
        name: 'Dạng tổng quát BPT bậc nhất hai ẩn',
        expression: 'ax + by \\le c\\; (\\ge, <, >) \\text{ với } a^2 + b^2 \\ne 0',
        description: 'Bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm.',
      },
      {
        name: 'Quy tắc thử điểm M₀(x₀; y₀) ∉ d',
        expression: '\\text{Thay } (x_0; y_0) \\text{ vào } ax + by \\text{ rồi so sánh với } c',
        description: 'Nếu thỏa mãn BPT thì nửa mặt phẳng bờ d chứa M₀ là miền nghiệm.',
      },
    ],
  },

  // =========================================================================
  // BÀI 4: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (SGK Toán 10 Tập 1 - Trang 26 đến 30)
  // =========================================================================
  {
    lessonId: 'bai-4',
    lessonNumber: 4,
    name: 'Bài 4',
    topicTitle: 'Hệ bất phương trình bậc nhất hai ẩn',
    chapter: 'Chương II. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 26 – 30',
    terms: [
      'Hệ bất phương trình bậc nhất hai ẩn',
      'Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn',
    ],
    objectives: [
      'Nhận biết hệ bất phương trình bậc nhất hai ẩn.',
      'Biết biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ.',
      'Vận dụng kiến thức hệ bất phương trình bậc nhất hai ẩn vào giải quyết bài toán thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-4-sec-1',
        title: '1. Hệ bất phương trình bậc nhất hai ẩn',
        theoryPoints: [
          '**Hệ bất phương trình bậc nhất hai ẩn** là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.',
          'Cặp số $(x_0; y_0)$ là **nghiệm** của một hệ bất phương trình bậc nhất hai ẩn khi $(x_0; y_0)$ đồng thời là nghiệm của tất cả các bất phương trình trong hệ đó.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Hệ bất phương trình bậc nhất hai ẩn (SGK trang 26)',
            formula:
              '• Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.\n• Cặp số $(x_0; y_0)$ là nghiệm của hệ khi $(x_0; y_0)$ đồng thời nghiệm đúng tất cả các bất phương trình trong hệ.',
          },
        ],
      },
      {
        id: 'bai-4-sec-2',
        title: '2. Biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ',
        theoryPoints: [
          'Trong mặt phẳng toạ độ, tập hợp các điểm có toạ độ là nghiệm của hệ bất phương trình bậc nhất hai ẩn là **miền nghiệm** của hệ bất phương trình đó.',
          'Miền nghiệm của hệ là **giao các miền nghiệm** của các bất phương trình trong hệ.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Cách xác định miền nghiệm của hệ BPT bậc nhất hai ẩn (SGK trang 28)',
            formula:
              '• Trên cùng một mặt phẳng toạ độ, xác định miền nghiệm của mỗi bất phương trình bậc nhất hai ẩn trong hệ và gạch bỏ miền còn lại.\n• Miền không bị gạch là miền nghiệm của hệ bất phương trình đã cho.',
            note: 'Phương trình của trục $Ox$ là $y = 0$ và phương trình của trục $Oy$ là $x = 0$.',
          },
        ],
      },
      {
        id: 'bai-4-sec-3',
        title: '3. Ứng dụng của hệ bất phương trình bậc nhất hai ẩn',
        theoryPoints: [
          'Tổng quát, người ta chứng minh được rằng giá trị lớn nhất (hay nhỏ nhất) của biểu thức bậc nhất $F(x; y) = ax + by$, với $(x; y)$ là toạ độ các điểm thuộc miền đa giác $A_1A_2\\dots A_n$ (tức là các điểm nằm bên trong hay nằm trên các cạnh của đa giác), **đạt được tại một trong các đỉnh của đa giác đó**.',
        ],
        formulas: [
          {
            label: 'Quy trình tìm giá trị lớn nhất / nhỏ nhất của F(x; y) = ax + by trên miền đa giác (SGK trang 29)',
            formula:
              '• Bước 1: Xác định miền nghiệm của hệ bất phương trình trên mặt phẳng $Oxy$. Tìm toạ độ các đỉnh của miền đa giác nghiệm.\n• Bước 2: Tính giá trị của biểu thức $F(x; y) = ax + by$ tại các đỉnh của đa giác đó.\n• Bước 3: So sánh các giá trị thu được ở Bước 2 để kết luận giá trị lớn nhất hoặc giá trị nhỏ nhất của $F(x; y)$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Miền nghiệm của hệ BPT',
        expression: 'D = D_1 \\cap D_2 \\cap \\dots \\cap D_k',
        description: 'Miền không bị gạch là giao các miền nghiệm của từng bất phương trình trong hệ.',
      },
      {
        name: 'Định lí cực trị trên miền đa giác',
        expression: '\\max / \\min_{(x;y) \\in \\text{đa giác}} F(x; y) \\text{ đạt tại một trong các đỉnh } A_i',
        description: 'Tính giá trị F(x; y) = ax + by tại tất cả các đỉnh của miền đa giác rồi so sánh.',
      },
    ],
  },

  // =========================================================================
  // BÀI 5: GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180° (SGK Toán 10 Tập 1 - Trang 33 đến 37)
  // =========================================================================
  {
    lessonId: 'bai-5',
    lessonNumber: 5,
    name: 'Bài 5',
    topicTitle: 'Giá trị lượng giác của một góc từ 0° đến 180°',
    chapter: 'Chương III. Hệ thức lượng trong tam giác',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 33 – 37',
    terms: [
      'Giá trị lượng giác của một góc',
      'Hai góc bù nhau',
      'Nửa đường tròn đơn vị',
    ],
    objectives: [
      'Nhận biết giá trị lượng giác của một góc từ $0^\\circ$ đến $180^\\circ$.',
      'Giải thích hệ thức liên hệ giữa các giá trị lượng giác của hai góc phụ nhau, bù nhau.',
      'Sử dụng máy tính cầm tay để tính các giá trị lượng giác của một góc.',
      'Vận dụng giải một số bài toán có nội dung thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-5-sec-1',
        title: '1. Giá trị lượng giác của một góc',
        theoryPoints: [
          'Trong mặt phẳng toạ độ $Oxy$, nửa đường tròn tâm $O$, bán kính $R = 1$ nằm phía trên trục hoành được gọi là **nửa đường tròn đơn vị**.',
          'Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), gọi $M(x_0; y_0)$ là điểm duy nhất trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = \\alpha$. Khi đó:',
          '• **sin** của góc $\\alpha$ là tung độ $y_0$ của điểm $M$, kí hiệu là $\\sin\\alpha = y_0$;',
          '• **côsin** của góc $\\alpha$ là hoành độ $x_0$ của điểm $M$, kí hiệu là $\\cos\\alpha = x_0$;',
          '• Khi $\\alpha \\ne 90^\\circ$ (hay $x_0 \\ne 0$), **tang** của $\\alpha$ là $\\dfrac{y_0}{x_0}$, kí hiệu là $\\tan\\alpha = \\dfrac{y_0}{x_0}$;',
          '• Khi $\\alpha \\ne 0^\\circ$ và $\\alpha \\ne 180^\\circ$ (hay $y_0 \\ne 0$), **côtang** của $\\alpha$ là $\\dfrac{x_0}{y_0}$, kí hiệu là $\\cot\\alpha = \\dfrac{x_0}{y_0}$.',
          '**Dấu của các giá trị lượng giác:** Với $0^\\circ < \\alpha < 180^\\circ$ thì $\\sin\\alpha > 0$. Nếu $0^\\circ < \\alpha < 90^\\circ$ (góc nhọn) thì $\\cos\\alpha > 0, \\tan\\alpha > 0, \\cot\\alpha > 0$; nếu $90^\\circ < \\alpha < 180^\\circ$ (góc tù) thì $\\cos\\alpha < 0, \\tan\\alpha < 0, \\cot\\alpha < 0$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Liên hệ giữa tan α, cot α, sin α, cos α & Hệ thức cơ bản (SGK trang 34, 37)',
            formula:
              '$$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}\\; (\\alpha \\ne 90^\\circ);\\quad \\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}\\; (\\alpha \\notin \\{0^\\circ; 180^\\circ\\});\\quad \\tan\\alpha = \\frac{1}{\\cot\\alpha}\\; (\\alpha \\notin \\{0^\\circ; 90^\\circ; 180^\\circ\\})$$\n$$\\sin^2\\alpha + \\cos^2\\alpha = 1;\\quad 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}\\; (\\alpha \\ne 90^\\circ);\\quad 1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}\\; (0^\\circ < \\alpha < 180^\\circ)$$',
          },
          {
            label: 'Bảng 3.1 & 3.2: Giá trị lượng giác của các góc đặc biệt từ 0° đến 180° (SGK trang 34, 36)',
            formula:
              '• $\\alpha = 0^\\circ$: $\\sin 0^\\circ = 0,\\; \\cos 0^\\circ = 1,\\; \\tan 0^\\circ = 0,\\; \\cot 0^\\circ$: không xác định.\n• $\\alpha = 30^\\circ$: $\\sin 30^\\circ = \\dfrac{1}{2},\\; \\cos 30^\\circ = \\dfrac{\\sqrt{3}}{2},\\; \\tan 30^\\circ = \\dfrac{\\sqrt{3}}{3},\\; \\cot 30^\\circ = \\sqrt{3}$.\n• $\\alpha = 45^\\circ$: $\\sin 45^\\circ = \\dfrac{\\sqrt{2}}{2},\\; \\cos 45^\\circ = \\dfrac{\\sqrt{2}}{2},\\; \\tan 45^\\circ = 1,\\; \\cot 45^\\circ = 1$.\n• $\\alpha = 60^\\circ$: $\\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2},\\; \\cos 60^\\circ = \\dfrac{1}{2},\\; \\tan 60^\\circ = \\sqrt{3},\\; \\cot 60^\\circ = \\dfrac{\\sqrt{3}}{3}$.\n• $\\alpha = 90^\\circ$: $\\sin 90^\\circ = 1,\\; \\cos 90^\\circ = 0,\\; \\tan 90^\\circ$: không xác định, $\\cot 90^\\circ = 0$.\n• $\\alpha = 120^\\circ$: $\\sin 120^\\circ = \\dfrac{\\sqrt{3}}{2},\\; \\cos 120^\\circ = -\\dfrac{1}{2},\\; \\tan 120^\\circ = -\\sqrt{3},\\; \\cot 120^\\circ = -\\dfrac{\\sqrt{3}}{3}$.\n• $\\alpha = 135^\\circ$: $\\sin 135^\\circ = \\dfrac{\\sqrt{2}}{2},\\; \\cos 135^\\circ = -\\dfrac{\\sqrt{2}}{2},\\; \\tan 135^\\circ = -1,\\; \\cot 135^\\circ = -1$.\n• $\\alpha = 150^\\circ$: $\\sin 150^\\circ = \\dfrac{1}{2},\\; \\cos 150^\\circ = -\\dfrac{\\sqrt{3}}{2},\\; \\tan 150^\\circ = -\\dfrac{\\sqrt{3}}{3},\\; \\cot 150^\\circ = -\\sqrt{3}$.\n• $\\alpha = 180^\\circ$: $\\sin 180^\\circ = 0,\\; \\cos 180^\\circ = -1,\\; \\tan 180^\\circ = 0,\\; \\cot 180^\\circ$: không xác định.',
          },
        ],
      },
      {
        id: 'bai-5-sec-2',
        title: '2. Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau và phụ nhau',
        theoryPoints: [
          '**Hai góc bù nhau ($\\alpha$ và $180^\\circ - \\alpha$):** Hai góc bù nhau có sin bằng nhau; có côsin, tang, côtang đối nhau.',
          '**Hai góc phụ nhau ($\\alpha$ và $90^\\circ - \\alpha$, với $0^\\circ \\le \\alpha \\le 90^\\circ$):** Hai góc phụ nhau có sin góc này bằng côsin góc kia, tang góc này bằng côtang góc kia.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Hai góc bù nhau α và 180° − α (SGK trang 36)',
            formula:
              '$$\\sin(180^\\circ - \\alpha) = \\sin\\alpha;\\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha$$\n$$\\tan(180^\\circ - \\alpha) = -\\tan\\alpha\\; (\\alpha \\ne 90^\\circ);\\qquad \\cot(180^\\circ - \\alpha) = -\\cot\\alpha\\; (0^\\circ < \\alpha < 180^\\circ)$$',
            note: 'Đối với hai góc phụ nhau ($0^\\circ \\le \\alpha \\le 90^\\circ$): $\\sin(90^\\circ - \\alpha) = \\cos\\alpha$, $\\cos(90^\\circ - \\alpha) = \\sin\\alpha$, $\\tan(90^\\circ - \\alpha) = \\cot\\alpha$, $\\cot(90^\\circ - \\alpha) = \\tan\\alpha$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Định nghĩa trên nửa đường tròn đơn vị',
        expression: 'M(x_0; y_0):\\; \\sin\\alpha = y_0,\\; \\cos\\alpha = x_0,\\; \\tan\\alpha = \\frac{y_0}{x_0},\\; \\cot\\alpha = \\frac{x_0}{y_0}',
        description: 'Với 0° ≤ α ≤ 180°, tung độ y₀ ≥ 0 nên sin α ≥ 0.',
      },
      {
        name: 'Hai góc bù nhau (α và 180° − α)',
        expression: '\\sin(180^\\circ - \\alpha) = \\sin\\alpha,\\quad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha',
        description: 'Ghi nhớ: "Sin bù, phụ chéo" (tan và cot của hai góc bù nhau cũng đối nhau).',
      },
      {
        name: 'Hệ thức lượng giác cơ bản',
        expression: '\\sin^2\\alpha + \\cos^2\\alpha = 1,\\quad 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha},\\quad 1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}',
        description: 'Áp dụng để tính các giá trị lượng giác còn lại khi biết một giá trị lượng giác.',
      },
    ],
  },

  // =========================================================================
  // BÀI 6: HỆ THỨC LƯỢNG TRONG TAM GIÁC (SGK Toán 10 Tập 1 - Trang 38 đến 43)
  // =========================================================================
  {
    lessonId: 'bai-6',
    lessonNumber: 6,
    name: 'Bài 6',
    topicTitle: 'Hệ thức lượng trong tam giác',
    chapter: 'Chương III. Hệ thức lượng trong tam giác',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 38 – 43',
    terms: [
      'Định lí côsin',
      'Định lí sin',
      'Công thức tính diện tích',
      'Giải tam giác',
    ],
    objectives: [
      'Hiểu định lí côsin, định lí sin, công thức tính diện tích tam giác.',
      'Giải tam giác và giải quyết một số bài toán trong đo đạc.',
    ],
    sections: [
      {
        id: 'bai-6-sec-1',
        title: '1. Định lí côsin',
        theoryPoints: [
          'Đối với tam giác $ABC$, ta thường kí hiệu $A, B, C$ là các góc của tam giác tại đỉnh tương ứng; $a = BC, b = CA, c = AB$ tương ứng là độ dài của các cạnh đối diện với đỉnh $A, B, C$; $p = \\dfrac{a + b + c}{2}$ là nửa chu vi; $S$ là diện tích; $R, r$ tương ứng là bán kính đường tròn ngoại tiếp, nội tiếp tam giác.',
          'Định lí Pythagore là trường hợp đặc biệt của định lí côsin khi góc của tam giác bằng $90^\\circ$ ($\\cos 90^\\circ = 0$).',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định lí côsin trong tam giác ABC (SGK trang 39)',
            formula:
              '$$a^2 = b^2 + c^2 - 2bc\\cos A$$\n$$b^2 = c^2 + a^2 - 2ca\\cos B$$\n$$c^2 = a^2 + b^2 - 2ab\\cos C$$',
            note: 'Hệ quả tính côsin góc theo ba cạnh: $\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}$; $\\cos B = \\dfrac{c^2 + a^2 - b^2}{2ca}$; $\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$.',
          },
        ],
        tikzCode: `\\begin{tikzpicture}
\\draw[thick] (0,0) -- (4.2,0) -- (1.4,2.4) -- cycle;
\\node at (-0.25,-0.2) {$B$};
\\node at (4.45,-0.2) {$C$};
\\node at (1.4,2.65) {$A$};
\\node at (2.1,-0.25) {$a$};
\\node at (3.0,1.4) {$b$};
\\node at (0.45,1.4) {$c$};
\\end{tikzpicture}`,
        tikzCaption: 'Kí hiệu các cạnh a = BC, b = CA, c = AB và các góc A, B, C trong tam giác ABC',
      },
      {
        id: 'bai-6-sec-2',
        title: '2. Định lí sin',
        theoryPoints: [
          'Mối liên hệ giữa độ dài ba cạnh, sin của ba góc và bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ được thể hiện qua **Định lí sin**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định lí sin trong tam giác ABC (SGK trang 39)',
            formula: '$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$',
            note: 'Từ định lí sin suy ra: $a = 2R\\sin A,\\; b = 2R\\sin B,\\; c = 2R\\sin C$ và $R = \\dfrac{a}{2\\sin A} = \\dfrac{b}{2\\sin B} = \\dfrac{c}{2\\sin C}$.',
          },
        ],
      },
      {
        id: 'bai-6-sec-3',
        title: '3. Giải tam giác và ứng dụng thực tế',
        theoryPoints: [
          'Việc tính độ dài các cạnh và số đo các góc của một tam giác khi biết một số yếu tố của tam giác đó được gọi là **giải tam giác**.',
          '**Chú ý:** Áp dụng các định lí côsin, sin và sử dụng máy tính cầm tay, ta có thể tính (gần đúng) các cạnh và các góc của một tam giác trong các trường hợp sau: (1) Biết hai cạnh và góc xen giữa; (2) Biết ba cạnh; (3) Biết một cạnh và hai góc.',
        ],
        formulas: [],
      },
      {
        id: 'bai-6-sec-4',
        title: '4. Công thức tính diện tích tam giác',
        theoryPoints: [
          'Từ công thức diện tích tam giác theo cạnh đáy và chiều cao tương ứng, kết hợp với định lí sin, định lí côsin và bán kính đường tròn nội tiếp, ngoại tiếp, ta có các công thức tính diện tích tam giác $ABC$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Các công thức tính diện tích tam giác ABC & Công thức Heron (SGK trang 41)',
            formula:
              '$$S = pr = \\frac{(a + b + c)r}{2}$$\n$$S = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ca\\sin B = \\frac{1}{2}ab\\sin C$$\n$$S = \\frac{abc}{4R}$$\n$$\\text{Công thức Heron: } S = \\sqrt{p(p - a)(p - b)(p - c)} \\quad \\text{với } p = \\frac{a + b + c}{2}$$',
            note: 'Công thức đường trung tuyến mở rộng (Bài 3.16 SGK trang 44): $m_a^2 = \\dfrac{2(b^2 + c^2) - a^2}{4}$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Định lí côsin',
        expression: 'a^2 = b^2 + c^2 - 2bc\\cos A \\implies \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
        description: 'Tính cạnh thứ ba khi biết 2 cạnh và góc xen giữa, hoặc tính góc khi biết 3 cạnh.',
      },
      {
        name: 'Định lí sin',
        expression: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
        description: 'Liên hệ giữa cạnh, góc đối diện và bán kính đường tròn ngoại tiếp R.',
      },
      {
        name: 'Các công thức diện tích tam giác',
        expression: 'S = \\frac{1}{2}bc\\sin A = \\frac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}',
        description: 'Trong đó p = (a + b + c)/2 là nửa chu vi, R là bán kính ngoại tiếp, r là bán kính nội tiếp.',
      },
    ],
  },
];
