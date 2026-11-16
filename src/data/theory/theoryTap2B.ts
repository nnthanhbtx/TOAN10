import { LessonTheoryData } from '../../types/exam';
import {
  tikzCircleWithTangent,
  tikzCountingTree,
  tikzEllipseDiagram,
  tikzParabolaConic,
  tikzSampleSpaceVenn,
} from '../lessons/lessonExamBuilder';

export const THEORY_TAP_2_B: LessonTheoryData[] = [
  // =========================================================================
  // BÀI 21: ĐƯỜNG TRÒN TRONG MẶT PHẲNG TOẠ ĐỘ (SGK Toán 10 Tập 2 - Trang 43 đến 47)
  // =========================================================================
  {
    lessonId: 'bai-21',
    lessonNumber: 21,
    name: 'Bài 21',
    topicTitle: 'Đường tròn trong mặt phẳng toạ độ',
    chapter: 'Chương VII. Phương pháp toạ độ trong mặt phẳng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 43 – 47',
    terms: [
      'Đường tròn',
      'Tâm',
      'Bán kính',
      'Phương trình đường tròn',
      'Phương trình tiếp tuyến',
    ],
    objectives: [
      'Lập phương trình đường tròn khi biết toạ độ tâm và bán kính hoặc biết toạ độ ba điểm thuộc đường tròn.',
      'Xác định tâm và bán kính của đường tròn khi biết phương trình của nó.',
      'Lập phương trình tiếp tuyến của đường tròn khi biết toạ độ của tiếp điểm.',
      'Vận dụng kiến thức về phương trình đường tròn để giải một số bài toán liên quan đến thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-21-sec-1',
        title: '1. Phương trình đường tròn',
        theoryPoints: [
          'Đường tròn tâm $I$, bán kính $R$ là tập hợp những điểm $M$ thoả mãn điều kiện $IM = R$.',
          'Trong mặt phẳng toạ độ $Oxy$, điểm $M(x; y)$ thuộc đường tròn $(C)$ tâm $I(a; b)$, bán kính $R$ khi và chỉ khi $\\sqrt{(x - a)^2 + (y - b)^2} = R \\iff (x - a)^2 + (y - b)^2 = R^2$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình đường tròn (C) tâm I(a; b), bán kính R & Dạng khai triển (SGK trang 43–44)',
            formula:
              '• **Phương trình chính tắc của đường tròn $(C)$ tâm $I(a; b)$, bán kính $R$:**\n  $$(x - a)^2 + (y - b)^2 = R^2 \\quad (1)$$\n• **Nhận xét (Phương trình dạng khai triển):** Phương trình $x^2 + y^2 - 2ax - 2by + c = 0$ là phương trình của một đường tròn $(C)$ khi và chỉ khi:\n  $$a^2 + b^2 - c > 0$$\n  Khi đó, $(C)$ có **tâm $I(a; b)$** và **bán kính $R = \\sqrt{a^2 + b^2 - c}$**.',
            note: 'Để lập phương trình đường tròn đi qua 3 điểm không thẳng hàng $A, B, C$, ta có thể tìm giao điểm $I$ của hai đường trung trực của $AB, AC$ (hoặc giải hệ 3 phương trình ẩn $a, b, c$ từ dạng khai triển).',
          },
        ],
      },
      {
        id: 'bai-21-sec-2',
        title: '2. Phương trình tiếp tuyến của đường tròn',
        theoryPoints: [
          'Tiếp tuyến $\\Delta$ của đường tròn $(C)$ tâm $I(a; b)$ tại tiếp điểm $M(x_0; y_0) \\in (C)$ là đường thẳng đi qua $M(x_0; y_0)$ và vuông góc với bán kính $IM$, do đó nhận vectơ $\\overrightarrow{MI} = (a - x_0; b - y_0)$ (hoặc $\\overrightarrow{IM} = (x_0 - a; y_0 - b)$) làm một vectơ pháp tuyến.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình tiếp tuyến của đường tròn tại tiếp điểm M(x₀; y₀) (SGK trang 46)',
            formula:
              'Cho điểm $M(x_0; y_0)$ thuộc đường tròn $(C): (x - a)^2 + (y - b)^2 = R^2$ (tâm $I(a; b)$, bán kính $R$). Khi đó, tiếp tuyến $\\Delta$ của $(C)$ tại $M(x_0; y_0)$ có vectơ pháp tuyến $\\overrightarrow{MI} = (a - x_0; b - y_0)$ và phương trình:\n$$(a - x_0)(x - x_0) + (b - y_0)(y - y_0) = 0$$',
            note: 'Có thể viết tương đương dưới dạng tách đôi toạ độ: $(x_0 - a)(x - a) + (y_0 - b)(y - b) = R^2$. Đường thẳng $\\Delta$ bất kì tiếp xúc với đường tròn $(C)$ tâm $I$, bán kính $R \\iff d(I, \\Delta) = R$.',
          },
        ],
        tikzCode: tikzCircleWithTangent(1, 2, 5, 'M(x_0;y_0)'),
        tikzCaption: 'Tiếp tuyến Δ của đường tròn (C) tâm I(a; b) tại tiếp điểm M(x₀; y₀) vuông góc với bán kính IM',
      },
    ],
    quickFormulas: [
      {
        name: 'Phương trình đường tròn tâm I(a; b), bán kính R',
        expression: '(x - a)^2 + (y - b)^2 = R^2',
        description: 'Đặc biệt đường tròn tâm O(0; 0), bán kính R có phương trình x² + y² = R².',
      },
      {
        name: 'Dạng khai triển của đường tròn',
        expression: 'x^2 + y^2 - 2ax - 2by + c = 0 \\quad (\\text{ĐK: } a^2 + b^2 - c > 0,\\; R = \\sqrt{a^2 + b^2 - c})',
        description: 'Hệ số của x² và y² phải bằng nhau (= 1) và không chứa số hạng xy.',
      },
      {
        name: 'Phương trình tiếp tuyến tại M(x₀; y₀) ∈ (C)',
        expression: '(a - x_0)(x - x_0) + (b - y_0)(y - y_0) = 0',
        description: 'Tiếp tuyến đi qua M(x₀; y₀) và nhận Vec(MI) = (a − x₀; b − y₀) làm VTPT.',
      },
    ],
  },

  // =========================================================================
  // BÀI 22: BA ĐƯỜNG CONIC (SGK Toán 10 Tập 2 - Trang 48 đến 57)
  // =========================================================================
  {
    lessonId: 'bai-22',
    lessonNumber: 22,
    name: 'Bài 22',
    topicTitle: 'Ba đường conic',
    chapter: 'Chương VII. Phương pháp toạ độ trong mặt phẳng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 48 – 57',
    terms: [
      'Conic, elip, hypebol, parabol',
      'Tiêu điểm',
      'Tiêu cự',
      'Phương trình chính tắc',
      'Đường chuẩn, tham số tiêu',
    ],
    objectives: [
      'Nhận biết ba đường conic bằng hình học.',
      'Nhận biết phương trình chính tắc của ba đường conic.',
      'Giải quyết một số vấn đề thực tiễn gắn với ba đường conic.',
    ],
    sections: [
      {
        id: 'bai-22-sec-1',
        title: '1. Elip',
        theoryPoints: [
          'Cho hai điểm cố định và phân biệt $F_1, F_2$. Đặt $F_1F_2 = 2c > 0$. Cho số thực $a$ lớn hơn $c$. Tập hợp các điểm $M$ sao cho $MF_1 + MF_2 = 2a$ được gọi là **đường elip (hay elip)**. Hai điểm $F_1, F_2$ được gọi là **hai tiêu điểm** và $F_1F_2 = 2c$ được gọi là **tiêu cự** của elip đó.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình chính tắc của Elip (E) (SGK trang 49)',
            formula:
              'Trong mặt phẳng toạ độ $Oxy$, elip có hai tiêu điểm thuộc trục hoành sao cho $O$ là trung điểm của đoạn nối hai tiêu điểm đó thì có **phương trình chính tắc**:\n$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad \\text{với } a > b > 0 \\quad (2)$$\n• Hệ thức liên hệ: $c^2 = a^2 - b^2 \\implies c = \\sqrt{a^2 - b^2}$.\n• Hai tiêu điểm: $F_1(-\\sqrt{a^2 - b^2}; 0)$ và $F_2(\\sqrt{a^2 - b^2}; 0)$.\n• Tiêu cự: $2c = 2\\sqrt{a^2 - b^2}$; tổng các khoảng cách từ mỗi điểm thuộc elip tới hai tiêu điểm bằng $2a$.\n• Độ dài trục lớn $A_1A_2 = 2a$; độ dài trục nhỏ $B_1B_2 = 2b$ (Chú ý Bài 7.35 SGK trang 59).',
          },
        ],
        tikzCode: tikzEllipseDiagram(5, 3, 'c'),
        tikzCaption: 'Elip (E): x²/a² + y²/b² = 1 (a > b > 0) với hai tiêu điểm F₁(−c; 0), F₂(c; 0) và c² = a² − b²',
      },
      {
        id: 'bai-22-sec-2',
        title: '2. Hypebol',
        theoryPoints: [
          'Cho hai điểm phân biệt cố định $F_1$ và $F_2$. Đặt $F_1F_2 = 2c$. Cho số thực dương $a$ nhỏ hơn $c$. Tập hợp các điểm $M$ sao cho $|MF_1 - MF_2| = 2a$ được gọi là **đường hypebol (hay hypebol)**. Hai điểm $F_1, F_2$ được gọi là **hai tiêu điểm** và $F_1F_2 = 2c$ được gọi là **tiêu cự** của hypebol đó.',
          'Hypebol có hai nhánh: một nhánh gồm những điểm $M$ thoả mãn $MF_1 - MF_2 = 2a$ và nhánh còn lại gồm những điểm $M$ thoả mãn $MF_1 - MF_2 = -2a$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình chính tắc của Hypebol (H) (SGK trang 51)',
            formula:
              'Trong mặt phẳng toạ độ $Oxy$, hypebol có hai tiêu điểm thuộc trục hoành sao cho $O$ là trung điểm của đoạn nối hai tiêu điểm đó thì có **phương trình chính tắc**:\n$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\quad \\text{với } a > 0,\\; b > 0 \\quad (4)$$\n• Hệ thức liên hệ: $c^2 = a^2 + b^2 \\implies c = \\sqrt{a^2 + b^2}$.\n• Hai tiêu điểm: $F_1(-\\sqrt{a^2 + b^2}; 0)$ và $F_2(\\sqrt{a^2 + b^2}; 0)$.\n• Tiêu cự: $2c = 2\\sqrt{a^2 + b^2}$; giá trị tuyệt đối của hiệu các khoảng cách từ mỗi điểm thuộc hypebol đến hai tiêu điểm bằng $2a$.',
          },
        ],
      },
      {
        id: 'bai-22-sec-3',
        title: '3. Parabol',
        theoryPoints: [
          'Cho một điểm $F$ cố định và một đường thẳng $\\Delta$ cố định không đi qua $F$. Tập hợp các điểm $M$ cách đều $F$ và $\\Delta$ ($MF = d(M, \\Delta)$) được gọi là **đường parabol (hay parabol)**. Điểm $F$ được gọi là **tiêu điểm**, $\\Delta$ được gọi là **đường chuẩn**, khoảng cách từ $F$ đến $\\Delta$ ($p = d(F, \\Delta) > 0$) được gọi là **tham số tiêu** của parabol đó.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình chính tắc của Parabol (P) (SGK trang 53)',
            formula:
              'Trong hệ trục toạ độ $Oxy$ với gốc $O$ là trung điểm của $HF$ ($H$ là hình chiếu vuông góc của $F$ trên $\\Delta$), tia $Ox$ trùng tia $OF$, parabol $(P)$ có **phương trình chính tắc**:\n$$y^2 = 2px \\quad (\\text{với } p > 0) \\quad (5)$$\n• Tiêu điểm: $F\\left(\\dfrac{p}{2}; 0\\right)$.\n• Phương trình đường chuẩn: $\\Delta: x = -\\dfrac{p}{2}$ (hay $x + \\dfrac{p}{2} = 0$).\n• Khoảng cách từ điểm $M(x_0; y_0) \\in (P)$ đến tiêu điểm $F$: $MF = d(M, \\Delta) = x_0 + \\dfrac{p}{2}$.',
          },
        ],
        tikzCode: tikzParabolaConic(4),
        tikzCaption: 'Parabol (P): y² = 2px (p > 0) với tiêu điểm F(p/2; 0), đường chuẩn Δ: x = −p/2 và MF = d(M, Δ)',
      },
    ],
    quickFormulas: [
      {
        name: 'Elip (E): x²/a² + y²/b² = 1 (a > b > 0)',
        expression: 'c = \\sqrt{a^2 - b^2},\\quad F_1(-c; 0),\\; F_2(c; 0),\\quad MF_1 + MF_2 = 2a',
        description: 'Trục lớn 2a, trục nhỏ 2b, tiêu cự 2c.',
      },
      {
        name: 'Hypebol (H): x²/a² − y²/b² = 1 (a, b > 0)',
        expression: 'c = \\sqrt{a^2 + b^2},\\quad F_1(-c; 0),\\; F_2(c; 0),\\quad |MF_1 - MF_2| = 2a',
        description: 'Trong hypebol: c² = a² + b² (c > a).',
      },
      {
        name: 'Parabol (P): y² = 2px (p > 0)',
        expression: 'F\\left(\\frac{p}{2}; 0\\right),\\quad \\Delta: x = -\\frac{p}{2},\\quad MF = x_M + \\frac{p}{2}',
        description: 'p là tham số tiêu (khoảng cách từ tiêu điểm F đến đường chuẩn Δ).',
      },
    ],
  },

  // =========================================================================
  // BÀI 23: QUY TẮC ĐẾM (SGK Toán 10 Tập 2 - Trang 60 đến 65)
  // =========================================================================
  {
    lessonId: 'bai-23',
    lessonNumber: 23,
    name: 'Bài 23',
    topicTitle: 'Quy tắc đếm',
    chapter: 'Chương VIII. Đại số tổ hợp',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 60 – 65',
    terms: [
      'Quy tắc cộng',
      'Quy tắc nhân',
      'Sơ đồ hình cây',
    ],
    objectives: [
      'Vận dụng quy tắc cộng, quy tắc nhân để tính toán số cách thực hiện một công việc hoặc đếm số phần tử của một tập hợp.',
      'Vận dụng sơ đồ hình cây trong các bài toán đếm đơn giản.',
    ],
    sections: [
      {
        id: 'bai-23-sec-1',
        title: '1. Quy tắc cộng và Sơ đồ hình cây',
        theoryPoints: [
          '• **Sơ đồ hình cây:** Sơ đồ minh hoạ cách phân chia trường hợp được gọi là **sơ đồ hình cây**. Trong các bài toán đếm, người ta thường dùng sơ đồ hình cây để minh hoạ, giúp cho việc đếm thuận tiện và không bỏ sót trường hợp.',
          '• **Chú ý:** Ta áp dụng quy tắc cộng cho một công việc có nhiều phương án khi các phương án đó phải **rời nhau**, không phụ thuộc vào nhau (độc lập với nhau).',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Quy tắc cộng (SGK trang 61)',
            formula:
              'Giả sử một công việc có thể thực hiện theo một trong hai phương án khác nhau:\n– Phương án một có $n_1$ cách thực hiện,\n– Phương án hai có $n_2$ cách thực hiện (không trùng với bất kì cách thực hiện nào của phương án một).\nKhi đó số cách thực hiện công việc sẽ là:\n$$N = n_1 + n_2 \\text{ (cách)}$$',
            note: 'Mở rộng cho $k$ phương án rời nhau: $N = n_1 + n_2 + \\dots + n_k$ (cách).',
          },
        ],
        tikzCode: tikzCountingTree('\\text{Gốc}', 'A_1', 'A_2', '\\text{Kết quả}'),
        tikzCaption: 'Sơ đồ hình cây minh hoạ các khả năng thực hiện công việc theo từng bước',
      },
      {
        id: 'bai-23-sec-2',
        title: '2. Quy tắc nhân',
        theoryPoints: [
          '**Chú ý:** Quy tắc nhân áp dụng để tính số cách thực hiện một công việc có nhiều công đoạn, các công đoạn nối tiếp nhau và những công đoạn này độc lập với nhau.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Quy tắc nhân (SGK trang 63)',
            formula:
              'Giả sử một công việc phải hoàn thành qua hai công đoạn liên tiếp nhau:\n– Công đoạn một có $m_1$ cách thực hiện,\n– Với mỗi cách thực hiện công đoạn một, có $m_2$ cách thực hiện công đoạn hai.\nKhi đó số cách thực hiện công việc là:\n$$N = m_1 \\cdot m_2 \\text{ (cách)}$$',
            note: 'Mở rộng cho $k$ công đoạn liên tiếp: $N = m_1 \\cdot m_2 \\cdots m_k$ (cách).',
          },
        ],
      },
      {
        id: 'bai-23-sec-3',
        title: '3. Kết hợp quy tắc cộng và quy tắc nhân',
        theoryPoints: [
          '• **Quy tắc cộng** được áp dụng khi công việc được chia thành các **phương án phân biệt** (thực hiện một trong các phương án để hoàn thành công việc).',
          '• **Quy tắc nhân** được áp dụng khi công việc có nhiều **công đoạn nối tiếp nhau** (phải thực hiện tất cả các công đoạn để hoàn thành công việc).',
        ],
        formulas: [],
      },
    ],
    quickFormulas: [
      {
        name: 'Quy tắc cộng (chia trường hợp / phương án)',
        expression: 'N = n_1 + n_2 + \\dots + n_k',
        description: 'Áp dụng khi chọn 1 trong các phương án rời nhau để hoàn thành công việc.',
      },
      {
        name: 'Quy tắc nhân (chia công đoạn / bước liên tiếp)',
        expression: 'N = m_1 \\cdot m_2 \\cdots m_k',
        description: 'Áp dụng khi phải thực hiện liên tiếp tất cả các công đoạn mới hoàn thành công việc.',
      },
    ],
  },

  // =========================================================================
  // BÀI 24: HOÁN VỊ, CHỈNH HỢP VÀ TỔ HỢP (SGK Toán 10 Tập 2 - Trang 66 đến 71)
  // =========================================================================
  {
    lessonId: 'bai-24',
    lessonNumber: 24,
    name: 'Bài 24',
    topicTitle: 'Hoán vị, chỉnh hợp và tổ hợp',
    chapter: 'Chương VIII. Đại số tổ hợp',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 66 – 71',
    terms: [
      'Hoán vị',
      'Chỉnh hợp',
      'Tổ hợp',
    ],
    objectives: [
      'Tính số hoán vị, chỉnh hợp, tổ hợp.',
      'Tính số hoán vị, chỉnh hợp, tổ hợp bằng máy tính cầm tay.',
    ],
    sections: [
      {
        id: 'bai-24-sec-1',
        title: '1. Hoán vị',
        theoryPoints: [
          'Một **hoán vị** của một tập hợp có $n$ phần tử là một cách sắp xếp có thứ tự $n$ phần tử đó (với $n$ là một số tự nhiên, $n \\ge 1$).',
          'Kí hiệu $n\\cdot(n - 1)\\cdot(n - 2)\\cdots 2\\cdot 1$ là $n!$ (đọc là *$n$ giai thừa*), quy ước $0! = 1$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức tính số các hoán vị Pn (SGK trang 67)',
            formula:
              '$$P_n = n! = n \\cdot (n - 1) \\cdot (n - 2) \\cdots 2 \\cdot 1 \\quad (n \\ge 1,\\; 0! = 1)$$',
          },
        ],
      },
      {
        id: 'bai-24-sec-2',
        title: '2. Chỉnh hợp',
        theoryPoints: [
          'Một **chỉnh hợp chập $k$ của $n$** là một cách sắp xếp **có thứ tự** $k$ phần tử từ một tập hợp $n$ phần tử (với $k, n$ là các số tự nhiên, $1 \\le k \\le n$).',
          '• Hoán vị sắp xếp tất cả các phần tử của tập hợp, còn chỉnh hợp chọn ra một số phần tử và sắp xếp chúng.',
          '• Mỗi hoán vị của $n$ phần tử cũng chính là một chỉnh hợp chập $n$ của $n$ phần tử đó: $P_n = A_n^n = n!$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức tính số các chỉnh hợp chập k của n (SGK trang 67)',
            formula:
              '$$A_n^k = n \\cdot (n - 1) \\cdots (n - k + 1) = \\frac{n!}{(n - k)!} \\quad (1 \\le k \\le n)$$',
          },
        ],
      },
      {
        id: 'bai-24-sec-3',
        title: '3. Tổ hợp',
        theoryPoints: [
          'Một **tổ hợp chập $k$ của $n$** là một cách chọn **không phân biệt thứ tự** $k$ phần tử từ một tập hợp $n$ phần tử (với $k, n$ là các số tự nhiên, $0 \\le k \\le n$).',
          '**Chú ý phân biệt Chỉnh hợp và Tổ hợp:** Chỉnh hợp và tổ hợp có điểm giống nhau là đều chọn một số phần tử trong một tập hợp, nhưng khác nhau ở chỗ: **chỉnh hợp là chọn có xếp thứ tự**, còn **tổ hợp là chọn không xếp thứ tự**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức tính số các tổ hợp chập k của n (SGK trang 68)',
            formula:
              '$$C_n^k = \\frac{n!}{(n - k)!k!} = \\frac{A_n^k}{k!} \\quad (0 \\le k \\le n)$$\n• Các tính chất cơ bản: $C_n^0 = C_n^n = 1$;\\quad $C_n^1 = n$;\\quad $C_n^k = C_n^{n - k}$;\\quad $C_n^{k - 1} + C_n^k = C_{n + 1}^k$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Hoán vị của n phần tử',
        expression: 'P_n = n! = n(n-1)\\cdots 2 \\cdot 1 \\quad (0! = 1)',
        description: 'Sắp xếp thứ tự toàn bộ n phần tử.',
      },
      {
        name: 'Chỉnh hợp chập k của n phần tử',
        expression: 'A_n^k = \\frac{n!}{(n - k)!} = n(n-1)\\cdots(n-k+1) \\quad (1 \\le k \\le n)',
        description: 'Chọn k phần tử từ n phần tử và CÓ sắp xếp thứ tự.',
      },
      {
        name: 'Tổ hợp chập k của n phần tử',
        expression: 'C_n^k = \\frac{n!}{k!(n - k)!} = \\frac{A_n^k}{k!} \\quad (0 \\le k \\le n)',
        description: 'Chọn k phần tử từ n phần tử và KHÔNG phân biệt thứ tự.',
      },
    ],
  },

  // =========================================================================
  // BÀI 25: NHỊ THỨC NEWTON (SGK Toán 10 Tập 2 - Trang 72 đến 75)
  // =========================================================================
  {
    lessonId: 'bai-25',
    lessonNumber: 25,
    name: 'Bài 25',
    topicTitle: 'Nhị thức Newton',
    chapter: 'Chương VIII. Đại số tổ hợp',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 72 – 75',
    terms: [
      'Khai triển',
      'Nhị thức',
    ],
    objectives: [
      'Khai triển nhị thức Newton $(a + b)^n$ bằng vận dụng tổ hợp với số mũ thấp ($n = 4$ hoặc $n = 5$).',
    ],
    sections: [
      {
        id: 'bai-25-sec-1',
        title: '1. Công thức khai triển nhị thức Newton (a + b)⁴ và (a + b)⁵',
        theoryPoints: [
          'Ở lớp 8, ta đã biết các hằng đẳng thức: $(a + b)^2 = a^2 + 2ab + b^2 = C_2^0a^2 + C_2^1ab + C_2^2b^2$ và $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = C_3^0a^3 + C_3^1a^2b + C_3^2ab^2 + C_3^3b^3$.',
          'Bằng sơ đồ hình cây và tổ hợp, khi khai triển $(a + b)^n$, số đơn thức đồng dạng với $a^{n-k}b^k$ (chọn $k$ nhân tử $b$ từ $n$ nhân tử) chính là $C_n^k$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Khai triển nhị thức Newton (a + b)⁴ (SGK trang 73)',
            formula:
              '$$(a + b)^4 = C_4^0 a^4 + C_4^1 a^3b + C_4^2 a^2b^2 + C_4^3 ab^3 + C_4^4 b^4$$\n$$= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$',
            note: 'Trong khai triển nhị thức Newton $(a + b)^4$, có $5$ số hạng và các đơn thức đều có bậc là $4$.',
          },
          {
            label: 'Khung kiến thức: Khai triển nhị thức Newton (a + b)⁵ (SGK trang 74)',
            formula:
              '$$(a + b)^5 = C_5^0 a^5 + C_5^1 a^4b + C_5^2 a^3b^2 + C_5^3 a^2b^3 + C_5^4 ab^4 + C_5^5 b^5$$\n$$= a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$',
            note: 'Trong khai triển nhị thức Newton $(a + b)^5$, có $6$ số hạng và các đơn thức đều có bậc là $5$. Số hạng tổng quát thứ $k + 1$ trong khai triển $(a + b)^n$ là $T_{k+1} = C_n^k a^{n-k}b^k$ ($0 \\le k \\le n$).',
          },
        ],
      },
      {
        id: 'bai-25-sec-2',
        title: '2. Tính chất hệ số và Ứng dụng tính xấp xỉ',
        theoryPoints: [
          '• Trong khai triển $(a + b)^n$ theo số mũ giảm dần của $a$, số mũ của $a$ giảm từ $n$ về $0$, số mũ của $b$ tăng từ $0$ đến $n$, tổng số mũ của $a$ và $b$ trong mỗi số hạng luôn bằng $n$.',
          '• **Ứng dụng tính giá trị gần đúng:** Khi $|x|$ rất nhỏ so với $1$, ta có thể dùng hai hoặc ba số hạng đầu tiên trong khai triển của $(1 + x)^n$ để tính giá trị gần đúng của $(1 + x)^n$.',
        ],
        formulas: [
          {
            label: 'Tổng các hệ số trong khai triển nhị thức Newton',
            formula:
              '• Tổng các hệ số tổ hợp:\n  $$C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4 = 2^4 = 16;\\qquad C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5 = 2^5 = 32$$\n• Tổng tất cả các hệ số của đa thức $P(x) = (px + q)^n$ sau khi khai triển và thu gọn bằng $P(1) = (p + q)^n$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Khai triển (a + b)⁴',
        expression: '(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4',
        description: 'Bộ 5 hệ số đối xứng: 1 – 4 – 6 – 4 – 1.',
      },
      {
        name: 'Khai triển (a + b)⁵',
        expression: '(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5',
        description: 'Bộ 6 hệ số đối xứng: 1 – 5 – 10 – 10 – 5 – 1.',
      },
      {
        name: 'Số hạng tổng quát thứ k + 1',
        expression: 'T_{k+1} = C_n^k a^{n-k}b^k \\quad (0 \\le k \\le n)',
        description: 'Dùng để tìm hệ số của x^m trong khai triển (px + q)^n.',
      },
    ],
  },

  // =========================================================================
  // BÀI 26: BIẾN CỐ VÀ ĐỊNH NGHĨA CỔ ĐIỂN CỦA XÁC SUẤT (SGK Tập 2 - Trang 77 đến 82)
  // =========================================================================
  {
    lessonId: 'bai-26',
    lessonNumber: 26,
    name: 'Bài 26',
    topicTitle: 'Biến cố và định nghĩa cổ điển của xác suất',
    chapter: 'Chương IX. Tính xác suất theo định nghĩa cổ điển',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 77 – 82',
    terms: [
      'Biến cố đối',
      'Định nghĩa cổ điển của xác suất',
      'Nguyên lí xác suất bé',
    ],
    objectives: [
      'Nhận biết một số khái niệm: Phép thử ngẫu nhiên, không gian mẫu, biến cố là tập con của không gian mẫu, biến cố đối, định nghĩa cổ điển của xác suất, nguyên lí xác suất bé.',
      'Mô tả không gian mẫu, biến cố trong một số phép thử đơn giản.',
      'Mô tả tính chất cơ bản của xác suất.',
    ],
    sections: [
      {
        id: 'bai-26-sec-1',
        title: '1. Biến cố',
        theoryPoints: [
          '• **Phép thử ngẫu nhiên** (gọi tắt là **phép thử**) là một thí nghiệm hay một hành động mà kết quả của nó không thể biết được trước khi phép thử được thực hiện.',
          '• **Không gian mẫu** của phép thử là tập hợp tất cả các kết quả có thể xảy ra khi thực hiện phép thử. Không gian mẫu của phép thử được kí hiệu là $\\Omega$.',
          '• **Kết quả thuận lợi** cho một biến cố $E$ liên quan tới phép thử $T$ là kết quả của phép thử $T$ làm cho biến cố đó xảy ra.',
          '• **Nhận xét:** Biến cố chắc chắn là tập $\\Omega$, biến cố không thể là tập $\\varnothing$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Biến cố & Biến cố đối (SGK trang 78–79)',
            formula:
              '• Mỗi **biến cố** $E$ là một tập con của không gian mẫu $\\Omega$ ($E \\subset \\Omega$). Tập con này là tập tất cả các kết quả thuận lợi cho biến cố đó.\n• **Biến cố đối** của biến cố $E$ là biến cố "$E$ không xảy ra", kí hiệu là $\\overline{E}$.\n• Biến cố $\\overline{E}$ là phần bù của $E$ trong $\\Omega$: $\\overline{E} = C_\\Omega E = \\Omega \\setminus E$, do đó $n(\\overline{E}) = n(\\Omega) - n(E)$.',
          },
        ],
        tikzCode: tikzSampleSpaceVenn('n(\\Omega)', 'E', 'n(E)'),
        tikzCaption: 'Biểu đồ Ven minh hoạ không gian mẫu Ω, biến cố E và biến cố đối Ē = C_Ω E',
      },
      {
        id: 'bai-26-sec-2',
        title: '2. Định nghĩa cổ điển của xác suất',
        theoryPoints: [
          'Các kết quả có thể của phép thử $T$ gọi là **đồng khả năng** nếu chúng có khả năng xuất hiện như nhau.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định nghĩa cổ điển của xác suất & Tính chất cơ bản (SGK trang 80)',
            formula:
              'Cho phép thử $T$ có không gian mẫu là $\\Omega$. Giả thiết rằng các kết quả có thể của $T$ là đồng khả năng. Khi đó nếu $E$ là một biến cố liên quan đến phép thử $T$ thì **xác suất** của $E$ được cho bởi công thức:\n$$P(E) = \\frac{n(E)}{n(\\Omega)}$$\ntrong đó $n(\\Omega)$ và $n(E)$ tương ứng là số phần tử của tập $\\Omega$ và tập $E$.\n• **Nhận xét:**\n  – Với mỗi biến cố $E$, ta có $0 \\le P(E) \\le 1$;\n  – Với biến cố chắc chắn (là tập $\\Omega$), ta có $P(\\Omega) = 1$;\n  – Với biến cố không thể (là tập $\\varnothing$), ta có $P(\\varnothing) = 0$.',
          },
        ],
      },
      {
        id: 'bai-26-sec-3',
        title: '3. Nguyên lí xác suất bé',
        theoryPoints: [
          'Qua thực tế người ta thấy rằng một biến cố có xác suất rất bé thì sẽ không xảy ra khi ta thực hiện một phép thử hay một vài phép thử.',
          '**Ý nghĩa thực tế của xác suất (Vận dụng SGK trang 82):** Giả sử biến cố $A$ có xác suất $P(A)$. Khi thực hiện phép thử $n$ lần ($n \\ge 30$) thì số lần xuất hiện biến cố $A$ sẽ xấp xỉ bằng $n \\cdot P(A)$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Nguyên lí xác suất bé (SGK trang 81)',
            formula:
              'Nếu một biến cố có xác suất rất bé thì trong một phép thử biến cố đó sẽ không xảy ra.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Công thức xác suất cổ điển',
        expression: 'P(E) = \\frac{n(E)}{n(\\Omega)} \\quad (0 \\le P(E) \\le 1)',
        description: 'Tỉ số giữa số kết quả thuận lợi cho E và tổng số kết quả có thể của không gian mẫu Ω.',
      },
      {
        name: 'Biến cố chắc chắn & Biến cố không thể',
        expression: 'P(\\Omega) = 1;\\qquad P(\\varnothing) = 0',
        description: 'Mọi biến cố E ⊂ Ω đều có xác suất thuộc đoạn [0; 1].',
      },
      {
        name: 'Biến cố đối Ē',
        expression: '\\overline{E} = C_\\Omega E = \\Omega \\setminus E,\\qquad n(\\overline{E}) = n(\\Omega) - n(E)',
        description: 'Biến cố Ē xảy ra khi và chỉ khi biến cố E không xảy ra.',
      },
    ],
  },

  // =========================================================================
  // BÀI 27: THỰC HÀNH TÍNH XÁC SUẤT THEO ĐỊNH NGHĨA CỔ ĐIỂN (SGK Tập 2 - Trang 83 đến 87)
  // =========================================================================
  {
    lessonId: 'bai-27',
    lessonNumber: 27,
    name: 'Bài 27',
    topicTitle: 'Thực hành tính xác suất theo định nghĩa cổ điển',
    chapter: 'Chương IX. Tính xác suất theo định nghĩa cổ điển',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 83 – 87',
    terms: [
      'Xác suất của biến cố đối',
    ],
    objectives: [
      'Tính xác suất trong một số bài toán đơn giản bằng phương pháp tổ hợp.',
      'Tính xác suất trong một số bài toán đơn giản bằng cách sử dụng sơ đồ hình cây.',
      'Nắm và vận dụng quy tắc tính xác suất của biến cố đối.',
    ],
    sections: [
      {
        id: 'bai-27-sec-1',
        title: '1. Sử dụng phương pháp tổ hợp',
        theoryPoints: [
          'Khi số phần tử của không gian mẫu $\\Omega$ và của các biến cố là khá lớn, ta không thể liệt kê trực tiếp tất cả các phần tử mà sử dụng Đại số tổ hợp ("sự kiểm đếm không cần phải liệt kê").',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Sử dụng phương pháp tổ hợp trong tính xác suất (SGK trang 83)',
            formula:
              'Trong nhiều bài toán, để tính số phần tử của không gian mẫu $n(\\Omega)$ và của các biến cố $n(E)$, ta thường sử dụng các quy tắc đếm (quy tắc cộng, quy tắc nhân), các công thức tính số hoán vị ($P_n = n!$), chỉnh hợp ($A_n^k$) và tổ hợp ($C_n^k$), sau đó tính:\n$$P(E) = \\frac{n(E)}{n(\\Omega)}$$',
          },
        ],
      },
      {
        id: 'bai-27-sec-2',
        title: '2. Sử dụng sơ đồ hình cây',
        theoryPoints: [
          'Trong một số bài toán, phép thử $T$ được hình thành từ một vài phép thử liên tiếp, chẳng hạn: gieo xúc xắc hay đồng xu liên tiếp nhiều lần; lấy lần lượt từng viên bi từ mỗi hộp; quay nhiều bánh xe... Khi đó ta sử dụng **sơ đồ hình cây** để có thể mô tả đầy đủ, trực quan không gian mẫu $\\Omega$ và biến cố cần tính xác suất.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Sử dụng sơ đồ hình cây (SGK trang 84)',
            formula:
              'Mỗi nhánh đi từ gốc đến ngọn của sơ đồ hình cây tương ứng với đúng một phần tử của không gian mẫu $\\Omega$. Đếm tổng số nhánh cho ta $n(\\Omega)$ và đếm số nhánh thoả mãn điều kiện biến cố $E$ cho ta $n(E)$.',
          },
        ],
      },
      {
        id: 'bai-27-sec-3',
        title: '3. Xác suất của biến cố đối',
        theoryPoints: [
          'Vì $\\overline{E} = \\Omega \\setminus E$ nên $n(\\overline{E}) = n(\\Omega) - n(E)$, suy ra $P(\\overline{E}) = \\dfrac{n(\\Omega) - n(E)}{n(\\Omega)} = 1 - P(E)$.',
          '**Chú ý:** Trong một số bài toán, nếu tính trực tiếp xác suất của biến cố gặp khó khăn (như các biến cố có chứa cụm từ *"ít nhất một"*, *"không quá"*, *"có đủ cả hai loại"*...), ta có thể tính gián tiếp bằng cách tính xác suất của biến cố đối của nó.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức xác suất của biến cố đối (SGK trang 85)',
            formula:
              'Cho $E$ là một biến cố. Xác suất của biến cố đối $\\overline{E}$ liên hệ với xác suất của $E$ bởi công thức sau:\n$$P(\\overline{E}) = 1 - P(E) \\quad \\Longleftrightarrow \\quad P(E) = 1 - P(\\overline{E})$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Công thức xác suất của biến cố đối',
        expression: 'P(\\overline{E}) = 1 - P(E) \\iff P(E) = 1 - P(\\overline{E})',
        description: 'Tổng xác suất của biến cố E và biến cố đối Ē luôn bằng 1.',
      },
      {
        name: 'Phương pháp tính gián tiếp qua biến cố đối',
        expression: 'P(E) = 1 - \\frac{n(\\overline{E})}{n(\\Omega)}',
        description: 'Đặc biệt hiệu quả cho bài toán chứa cụm từ "ít nhất một", "có cả nam và nữ", "có đủ các màu".',
      },
    ],
  },
];
