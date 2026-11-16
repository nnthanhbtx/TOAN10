import { LessonTheoryData } from '../../types/exam';

export const THEORY_TAP_1_B: LessonTheoryData[] = [
  // =========================================================================
  // BÀI 7: CÁC KHÁI NIỆM MỞ ĐẦU (SGK Toán 10 Tập 1 - Trang 46 đến 50)
  // =========================================================================
  {
    lessonId: 'bai-7',
    lessonNumber: 7,
    name: 'Bài 7',
    topicTitle: 'Các khái niệm mở đầu',
    chapter: 'Chương IV. Vectơ',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 46 – 50',
    terms: [
      'Vectơ, vectơ-không',
      'Độ dài của vectơ',
      'Giá của vectơ',
      'Hai vectơ cùng phương',
      'Hai vectơ cùng hướng, ngược hướng',
      'Hai vectơ bằng nhau',
    ],
    objectives: [
      'Nhận biết khái niệm vectơ, hai vectơ cùng phương, hai vectơ cùng hướng, hai vectơ bằng nhau, vectơ-không.',
      'Biểu thị một số đại lượng như lực, vận tốc bằng vectơ.',
    ],
    sections: [
      {
        id: 'bai-7-sec-1',
        title: '1. Khái niệm vectơ',
        theoryPoints: [
          '• **Vectơ** là một đoạn thẳng có hướng, nghĩa là, trong hai điểm mút của đoạn thẳng, đã chỉ rõ điểm đầu, điểm cuối.',
          '• **Độ dài của vectơ** là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó.',
          '• **Chú ý:** Vectơ có điểm đầu $A$ và điểm cuối $B$ được kí hiệu là $\\overrightarrow{AB}$, đọc là *vectơ $AB$*. Vectơ còn được kí hiệu là $\\vec{a}, \\vec{b}, \\vec{x}, \\vec{y}, \\dots$ Độ dài của vectơ $\\overrightarrow{AB}, \\vec{a}$ tương ứng được kí hiệu là $|\\overrightarrow{AB}|$ ($|\\overrightarrow{AB}| = AB$), $|\\vec{a}|$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định nghĩa vectơ & Độ dài vectơ (SGK trang 47)',
            formula:
              '• Vectơ là một đoạn thẳng có hướng (đã chỉ rõ điểm đầu, điểm cuối).\n• Độ dài của vectơ $\\overrightarrow{AB}$ là khoảng cách giữa điểm đầu $A$ và điểm cuối $B$: $|\\overrightarrow{AB}| = AB$.',
          },
        ],
      },
      {
        id: 'bai-7-sec-2',
        title: '2. Hai vectơ cùng phương, cùng hướng, bằng nhau',
        theoryPoints: [
          '• Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là **giá của vectơ** đó.',
          '• Hai vectơ được gọi là **cùng phương** nếu chúng có giá song song hoặc trùng nhau.',
          '• Đối với hai vectơ cùng phương thì chúng **cùng hướng** hoặc **ngược hướng** (chỉ khi hai vectơ cùng phương, ta mới nói tới chúng cùng hướng hay ngược hướng).',
          '• **Hai vectơ bằng nhau:** Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là **bằng nhau**, kí hiệu $\\vec{a} = \\vec{b}$, nếu chúng có **cùng độ dài** và **cùng hướng**.',
          '• **Vectơ-không:** Các vectơ có điểm đầu và điểm cuối trùng nhau (chẳng hạn $\\overrightarrow{AA}, \\overrightarrow{BB}, \\overrightarrow{MM}$) gọi là các **vectơ-không**, kí hiệu chung là $\\vec{0}$. Quy ước vectơ-không có độ dài bằng $0$ ($|\\vec{0}| = 0$) và cùng hướng (do đó cùng phương) với mọi vectơ.',
          '• Với mỗi điểm $O$ và vectơ $\\vec{a}$ cho trước, có duy nhất điểm $A$ sao cho $\\overrightarrow{OA} = \\vec{a}$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Hai vectơ bằng nhau & Điều kiện 3 điểm thẳng hàng (SGK trang 48–49)',
            formula:
              '$$\\vec{a} = \\vec{b} \\iff \\begin{cases} |\\vec{a}| = |\\vec{b}| \\\\ \\vec{a}, \\vec{b} \\text{ cùng hướng} \\end{cases}$$\n$$\\text{Ba điểm phân biệt } A, B, C \\text{ thẳng hàng} \\iff \\overrightarrow{AB}, \\overrightarrow{AC} \\text{ cùng phương.}$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Hai vectơ cùng phương',
        expression: '\\vec{a}, \\vec{b} \\text{ cùng phương} \\iff \\text{giá của chúng song song hoặc trùng nhau}',
        description: 'Hai vectơ cùng phương thì cùng hướng hoặc ngược hướng.',
      },
      {
        name: 'Hai vectơ bằng nhau',
        expression: '\\vec{a} = \\vec{b} \\iff |\\vec{a}| = |\\vec{b}| \\text{ và } \\vec{a}, \\vec{b} \\text{ cùng hướng}',
        description: 'Trong hình bình hành ABCD: Vec(AB) = Vec(DC) và Vec(AD) = Vec(BC).',
      },
      {
        name: 'Điều kiện 3 điểm thẳng hàng',
        expression: 'A, B, C \\text{ phân biệt thẳng hàng} \\iff \\overrightarrow{AB}, \\overrightarrow{AC} \\text{ cùng phương}',
        description: 'Ứng dụng chứng minh ba điểm thẳng hàng bằng vectơ.',
      },
    ],
  },

  // =========================================================================
  // BÀI 8: TỔNG VÀ HIỆU CỦA HAI VECTƠ (SGK Toán 10 Tập 1 - Trang 51 đến 54)
  // =========================================================================
  {
    lessonId: 'bai-8',
    lessonNumber: 8,
    name: 'Bài 8',
    topicTitle: 'Tổng và hiệu của hai vectơ',
    chapter: 'Chương IV. Vectơ',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 51 – 54',
    terms: [
      'Tổng của hai vectơ',
      'Hiệu của hai vectơ',
      'Vectơ đối',
    ],
    objectives: [
      'Thực hiện các phép toán cộng, trừ vectơ.',
      'Mô tả trung điểm của đoạn thẳng, trọng tâm của tam giác bằng vectơ.',
      'Vận dụng vectơ trong bài toán tổng hợp lực, tổng hợp vận tốc.',
    ],
    sections: [
      {
        id: 'bai-8-sec-1',
        title: '1. Tổng của hai vectơ',
        theoryPoints: [
          'Cho hai vectơ $\\vec{a}, \\vec{b}$. Lấy một điểm $A$ tuỳ ý và vẽ $\\overrightarrow{AB} = \\vec{a}, \\overrightarrow{BC} = \\vec{b}$. Khi đó vectơ $\\overrightarrow{AC}$ được gọi là **tổng của hai vectơ** $\\vec{a}$ và $\\vec{b}$ và được kí hiệu là $\\vec{a} + \\vec{b}$. Phép lấy tổng của hai vectơ được gọi là **phép cộng vectơ**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Quy tắc ba điểm, Quy tắc hình bình hành & Tính chất phép cộng (SGK trang 52)',
            formula:
              '• Quy tắc ba điểm: Với ba điểm bất kì $A, B, C$, ta có:\n  $$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$$\n• Quy tắc hình bình hành: Nếu $ABCD$ là một hình bình hành thì:\n  $$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$$\n• Tính chất của phép cộng vectơ (với ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ tuỳ ý):\n  – Tính chất giao hoán: $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$;\n  – Tính chất kết hợp: $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$;\n  – Tính chất của vectơ-không: $\\vec{a} + \\vec{0} = \\vec{0} + \\vec{a} = \\vec{a}$.',
          },
        ],
      },
      {
        id: 'bai-8-sec-2',
        title: '2. Hiệu của hai vectơ',
        theoryPoints: [
          '• **Vectơ đối:** Vectơ có cùng độ dài và ngược hướng với vectơ $\\vec{a}$ được gọi là **vectơ đối** của vectơ $\\vec{a}$, kí hiệu là $-\\vec{a}$. Vectơ $\\vec{0}$ được coi là vectơ đối của chính nó. Hai vectơ đối nhau khi và chỉ khi tổng của chúng bằng $\\vec{0}$ ($\\vec{a} + (-\\vec{a}) = \\vec{0}$, $\\overrightarrow{BA} = -\\overrightarrow{AB}$).',
          '• **Hiệu của hai vectơ:** Vectơ $\\vec{a} + (-\\vec{b})$ được gọi là **hiệu của hai vectơ** $\\vec{a}$ và $\\vec{b}$ và được kí hiệu là $\\vec{a} - \\vec{b}$. Phép lấy hiệu hai vectơ được gọi là **phép trừ vectơ**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Quy tắc hiệu, Hệ thức trung điểm & Trọng tâm (SGK trang 53)',
            formula:
              '• Quy tắc hiệu: Với ba điểm $O, M, N$ tuỳ ý, ta có:\n  $$\\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM} \\quad (\\text{hay } \\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB})$$\n• Hệ thức trung điểm: $I$ là trung điểm của đoạn thẳng $AB \\iff \\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$.\n• Hệ thức trọng tâm: $G$ là trọng tâm của tam giác $ABC \\iff \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Quy tắc 3 điểm & Quy tắc hiệu',
        expression: '\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC};\\qquad \\overrightarrow{OB} - \\overrightarrow{OA} = \\overrightarrow{AB}',
        description: 'Nền tảng biến đổi đẳng thức vectơ.',
      },
      {
        name: 'Quy tắc hình bình hành',
        expression: 'ABCD \\text{ là hình bình hành } \\Rightarrow \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}',
        description: 'Tổng hai vectơ cạnh chung gốc A bằng vectơ đường chéo AC.',
      },
      {
        name: 'Trung điểm I và Trọng tâm G',
        expression: '\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0};\\qquad \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}',
        description: 'Điều kiện cần và đủ của trung điểm đoạn thẳng và trọng tâm tam giác.',
      },
    ],
  },

  // =========================================================================
  // BÀI 9: TÍCH CỦA MỘT VECTƠ VỚI MỘT SỐ (SGK Toán 10 Tập 1 - Trang 55 đến 59)
  // =========================================================================
  {
    lessonId: 'bai-9',
    lessonNumber: 9,
    name: 'Bài 9',
    topicTitle: 'Tích của một vectơ với một số',
    chapter: 'Chương IV. Vectơ',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 55 – 59',
    terms: [
      'Tích của vectơ với một số',
      'Phân tích một vectơ theo hai vectơ không cùng phương',
    ],
    objectives: [
      'Thực hiện phép nhân vectơ với một số.',
      'Mô tả các mối quan hệ cùng phương, cùng hướng bằng vectơ.',
    ],
    sections: [
      {
        id: 'bai-9-sec-1',
        title: '1. Tích của một vectơ với một số',
        theoryPoints: [
          '• Tích của một vectơ $\\vec{a} \\ne \\vec{0}$ với một số thực $k > 0$ là một vectơ, kí hiệu là $k\\vec{a}$, **cùng hướng** với vectơ $\\vec{a}$ và có độ dài bằng $k|\\vec{a}|$.',
          '• Tích của một vectơ $\\vec{a} \\ne \\vec{0}$ với một số thực $k < 0$ là một vectơ, kí hiệu là $k\\vec{a}$, **ngược hướng** với vectơ $\\vec{a}$ và có độ dài bằng $(-k)|\\vec{a}| = |k||\\vec{a}|$.',
          '• **Chú ý:** Ta quy ước $k\\vec{a} = \\vec{0}$ nếu $\\vec{a} = \\vec{0}$ hoặc $k = 0$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Tích của một vectơ với một số & Điều kiện cùng phương (SGK trang 55–56)',
            formula:
              '• Vectơ $k\\vec{a}$ có độ dài $|k\\vec{a}| = |k|\\cdot|\\vec{a}|$, cùng hướng với $\\vec{a}$ nếu $k \\ge 0$, ngược hướng với $\\vec{a}$ nếu $\\vec{a} \\ne \\vec{0}$ và $k < 0$.\n• Điều kiện hai vectơ cùng phương: Hai vectơ $\\vec{a}$ và $\\vec{b}$ ($\\vec{b} \\ne \\vec{0}$) cùng phương khi và chỉ khi tồn tại số thực $k$ để $\\vec{a} = k\\vec{b}$.\n• Điều kiện 3 điểm thẳng hàng: Ba điểm phân biệt $A, B, C$ thẳng hàng $\\iff \\exists k \\ne 0$ sao cho $\\overrightarrow{AB} = k\\overrightarrow{AC}$.',
          },
        ],
      },
      {
        id: 'bai-9-sec-2',
        title: '2. Các tính chất của phép nhân vectơ với một số',
        theoryPoints: [
          'Phép nhân vectơ với một số có các tính chất kết hợp, phân phối tương tự phép nhân số thực và dẫn đến các hệ thức quan trọng cho trung điểm, trọng tâm cũng như định lí phân tích một vectơ theo hai vectơ không cùng phương.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Tính chất phép nhân vectơ với một số & Hệ thức trung điểm, trọng tâm (SGK trang 57)',
            formula:
              '• Với hai vectơ $\\vec{a}, \\vec{b}$ và hai số thực $k, t$, ta luôn có:\n  $k(t\\vec{a}) = (kt)\\vec{a}$;\\quad $(k + t)\\vec{a} = k\\vec{a} + t\\vec{a}$;\\quad $k(\\vec{a} \\pm \\vec{b}) = k\\vec{a} \\pm k\\vec{b}$;\\quad $1\\vec{a} = \\vec{a}$;\\quad $(-1)\\vec{a} = -\\vec{a}$.\n• Nếu $I$ là trung điểm của đoạn thẳng $AB$ thì với điểm $O$ tuỳ ý: $\\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OI}$.\n• Nếu $G$ là trọng tâm của tam giác $ABC$ thì với điểm $O$ tuỳ ý: $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$.\n• Phân tích vectơ: Cho hai vectơ không cùng phương $\\vec{a}, \\vec{b}$. Khi đó mọi vectơ $\\vec{u}$ đều biểu thị (phân tích) được một cách duy nhất theo $\\vec{a}, \\vec{b}$, nghĩa là có duy nhất cặp số $(x; y)$ sao cho $\\vec{u} = x\\vec{a} + y\\vec{b}$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Hệ thức trung điểm với điểm O bất kì',
        expression: 'I \\text{ là trung điểm } AB \\iff \\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OI}',
        description: 'Đặc biệt khi O trùng A: Vec(AB) = 2 Vec(AI).',
      },
      {
        name: 'Hệ thức trọng tâm với điểm O bất kì',
        expression: 'G \\text{ là trọng tâm } \\triangle ABC \\iff \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}',
        description: 'Với AM là trung tuyến: Vec(AG) = (2/3) Vec(AM), Vec(GA) = -2 Vec(GM).',
      },
      {
        name: 'Điều kiện cùng phương & phân tích vectơ',
        expression: '\\vec{a} \\parallel \\vec{b}\\; (\\vec{b} \\ne \\vec{0}) \\iff \\exists k \\in \\mathbb{R}: \\vec{a} = k\\vec{b}',
        description: 'Mọi vectơ u đều biểu thị duy nhất: u = x.a + y.b với a, b không cùng phương.',
      },
    ],
  },

  // =========================================================================
  // BÀI 10: VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ (SGK Toán 10 Tập 1 - Trang 60 đến 65)
  // =========================================================================
  {
    lessonId: 'bai-10',
    lessonNumber: 10,
    name: 'Bài 10',
    topicTitle: 'Vectơ trong mặt phẳng toạ độ',
    chapter: 'Chương IV. Vectơ',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 60 – 65',
    terms: [
      'Mặt phẳng toạ độ',
      'Toạ độ của vectơ',
    ],
    objectives: [
      'Nhận biết toạ độ của vectơ và thể hiện các phép toán vectơ theo toạ độ.',
      'Thể hiện mối quan hệ giữa các vectơ thông qua toạ độ của chúng.',
      'Ứng dụng của toạ độ vectơ trong bài toán xác định vị trí của vật trên mặt phẳng toạ độ.',
    ],
    sections: [
      {
        id: 'bai-10-sec-1',
        title: '1. Toạ độ của vectơ',
        theoryPoints: [
          'Trên mặt phẳng toạ độ $Oxy$, vectơ đơn vị của trục hoành $Ox$ là $\\vec{i} = (1; 0)$, vectơ đơn vị của trục tung $Oy$ là $\\vec{j} = (0; 1)$, vectơ-không là $\\vec{0} = (0; 0)$.',
          'Với mỗi vectơ $\\vec{u}$ trên mặt phẳng $Oxy$, có duy nhất cặp số $(x_0; y_0)$ sao cho $\\vec{u} = x_0\\vec{i} + y_0\\vec{j}$. Ta nói vectơ $\\vec{u}$ có **toạ độ** $(x_0; y_0)$ và viết $\\vec{u} = (x_0; y_0)$ hay $\\vec{u}(x_0; y_0)$. Trong đó $x_0$ gọi là hoành độ, $y_0$ gọi là tung độ của $\\vec{u}$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Toạ độ của vectơ & Hai vectơ bằng nhau (SGK trang 61)',
            formula:
              '$$\\vec{u} = x_0\\vec{i} + y_0\\vec{j} \\iff \\vec{u} = (x_0; y_0)$$\n$$\\vec{u}(x; y) = \\vec{v}(x\'; y\') \\iff \\begin{cases} x = x\' \\\\ y = y\' \\end{cases}$$',
          },
        ],
      },
      {
        id: 'bai-10-sec-2',
        title: '2. Biểu thức toạ độ của các phép toán vectơ',
        theoryPoints: [
          'Nhờ toạ độ của vectơ, các phép toán cộng, trừ vectơ, nhân vectơ với một số, tính độ dài vectơ, khoảng cách giữa hai điểm, toạ độ trung điểm đoạn thẳng và trọng tâm tam giác đều được chuyển về các phép tính đại số.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Biểu thức toạ độ của các phép toán vectơ & Độ dài vectơ (SGK trang 61–63)',
            formula:
              '• Cho hai vectơ $\\vec{u} = (x; y)$ và $\\vec{v} = (x\'; y\')$. Khi đó:\n  $$\\vec{u} + \\vec{v} = (x + x\';\\; y + y\');\\qquad \\vec{u} - \\vec{v} = (x - x\';\\; y - y\');\\qquad k\\vec{u} = (kx;\\; ky)\\; (k \\in \\mathbb{R})$$\n• Hai vectơ cùng phương: $\\vec{v}(x\'; y\')$ cùng phương với $\\vec{u}(x; y) \\ne \\vec{0} \\iff \\exists k \\in \\mathbb{R}: x\' = kx,\\; y\' = ky$ (hay $\\dfrac{x\'}{x} = \\dfrac{y\'}{y}$ nếu $xy \\ne 0$).\n• Độ dài của vectơ $\\vec{u} = (x; y)$: $|\\vec{u}| = \\sqrt{x^2 + y^2}$.\n• Với hai điểm $M(x; y)$ và $N(x\'; y\')$:\n  $$\\overrightarrow{MN} = (x\' - x;\\; y\' - y);\\qquad MN = |\\overrightarrow{MN}| = \\sqrt{(x\' - x)^2 + (y\' - y)^2}$$',
          },
          {
            label: 'Chú ý: Toạ độ trung điểm đoạn thẳng và Trọng tâm tam giác (SGK trang 64)',
            formula:
              '• Trung điểm $M$ của đoạn thẳng $AB$ với $A(x_A; y_A), B(x_B; y_B)$ có toạ độ là:\n  $$M\\left(\\frac{x_A + x_B}{2};\\; \\frac{y_A + y_B}{2}\\right)$$\n• Trọng tâm $G$ của tam giác $ABC$ với $A(x_A; y_A), B(x_B; y_B), C(x_C; y_C)$ có toạ độ là:\n  $$G\\left(\\frac{x_A + x_B + x_C}{3};\\; \\frac{y_A + y_B + y_C}{3}\\right)$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Phép toán vectơ theo toạ độ',
        expression: '\\vec{u} \\pm \\vec{v} = (x \\pm x\'; y \\pm y\');\\quad k\\vec{u} = (kx; ky);\\quad |\\vec{u}| = \\sqrt{x^2 + y^2}',
        description: 'Cộng, trừ hoành độ theo hoành độ, tung độ theo tung độ.',
      },
      {
        name: 'Vectơ MN và độ dài đoạn thẳng MN',
        expression: '\\overrightarrow{MN} = (x_N - x_M; y_N - y_M);\\quad MN = \\sqrt{(x_N - x_M)^2 + (y_N - y_M)^2}',
        description: 'Lấy toạ độ điểm cuối trừ toạ độ điểm đầu.',
      },
      {
        name: 'Toạ độ Trung điểm M & Trọng tâm G',
        expression: 'M\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}\\right);\\quad G\\left(\\frac{x_A+x_B+x_C}{3}; \\frac{y_A+y_B+y_C}{3}\\right)',
        description: 'Trung điểm chia 2, trọng tâm tam giác chia 3.',
      },
    ],
  },

  // =========================================================================
  // BÀI 11: TÍCH VÔ HƯỚNG CỦA HAI VECTƠ (SGK Toán 10 Tập 1 - Trang 66 đến 70)
  // =========================================================================
  {
    lessonId: 'bai-11',
    lessonNumber: 11,
    name: 'Bài 11',
    topicTitle: 'Tích vô hướng của hai vectơ',
    chapter: 'Chương IV. Vectơ',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 66 – 70',
    terms: [
      'Góc giữa hai vectơ',
      'Tích vô hướng của hai vectơ',
    ],
    objectives: [
      'Tính góc, tích vô hướng của hai vectơ trong những trường hợp cụ thể.',
      'Công thức toạ độ của tích vô hướng, tính chất của tích vô hướng.',
      'Liên hệ khái niệm tích vô hướng với khái niệm công trong Vật lí.',
    ],
    sections: [
      {
        id: 'bai-11-sec-1',
        title: '1. Góc giữa hai vectơ',
        theoryPoints: [
          'Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ đều khác $\\vec{0}$. Từ một điểm $A$ tuỳ ý, vẽ các vectơ $\\overrightarrow{AB} = \\vec{u}$ và $\\overrightarrow{AC} = \\vec{v}$. Khi đó, số đo của góc $\\widehat{BAC}$ ($0^\\circ \\le \\widehat{BAC} \\le 180^\\circ$) được gọi là **số đo góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$** hay đơn giản là **góc giữa hai vectơ $\\vec{u}, \\vec{v}$**, kí hiệu là $(\\vec{u}, \\vec{v})$.',
          '• Quy ước góc giữa hai vectơ $\\vec{u}$ và $\\vec{0}$ có thể nhận một giá trị tuỳ ý từ $0^\\circ$ đến $180^\\circ$.',
          '• Nếu $(\\vec{u}, \\vec{v}) = 90^\\circ$ thì ta nói rằng $\\vec{u}$ và $\\vec{v}$ **vuông góc** với nhau, kí hiệu là $\\vec{u} \\perp \\vec{v}$ hoặc $\\vec{v} \\perp \\vec{u}$.',
          '• Hai vectơ cùng hướng thì $(\\vec{u}, \\vec{v}) = 0^\\circ$; hai vectơ ngược hướng thì $(\\vec{u}, \\vec{v}) = 180^\\circ$.',
        ],
        formulas: [],
      },
      {
        id: 'bai-11-sec-2',
        title: '2. Tích vô hướng của hai vectơ',
        theoryPoints: [
          'Tích vô hướng của hai vectơ $\\vec{u}$ và $\\vec{v}$ là một số thực (không phải là một vectơ), kí hiệu là $\\vec{u}\\cdot\\vec{v}$.',
          'Trong Vật lí, công $A$ sinh bởi lực $\\vec{F}$ không đổi khi vật dịch chuyển từ $M$ đến $N$ bằng tích vô hướng: $A = \\vec{F}\\cdot\\overrightarrow{MN} = |\\vec{F}|\\cdot|\\overrightarrow{MN}|\\cdot\\cos(\\vec{F}, \\overrightarrow{MN})$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định nghĩa tích vô hướng của hai vectơ (SGK trang 67)',
            formula:
              '$$\\vec{u}\\cdot\\vec{v} = |\\vec{u}|\\cdot|\\vec{v}|\\cdot\\cos(\\vec{u}, \\vec{v})$$',
            note: 'Chú ý: $\\vec{u} \\perp \\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0$. Bình phương vô hướng của một vectơ bằng bình phương độ dài của vectơ đó: $\\vec{u}^2 = \\vec{u}\\cdot\\vec{u} = |\\vec{u}|^2$.',
          },
        ],
      },
      {
        id: 'bai-11-sec-3',
        title: '3. Biểu thức toạ độ và tính chất của tích vô hướng',
        theoryPoints: [
          'Trong mặt phẳng toạ độ $Oxy$, tích vô hướng của hai vectơ được tính trực tiếp từ hoành độ và tung độ của chúng.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Biểu thức toạ độ & Tính chất của tích vô hướng (SGK trang 68–69)',
            formula:
              '• Biểu thức toạ độ: Cho $\\vec{u} = (x; y)$ và $\\vec{v} = (x\'; y\')$:\n  $$\\vec{u}\\cdot\\vec{v} = xx\' + yy\'$$\n• Điều kiện vuông góc: $\\vec{u} \\perp \\vec{v} \\iff xx\' + yy\' = 0$.\n• Côsin góc giữa hai vectơ khác $\\vec{0}$:\n  $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}|\\cdot|\\vec{v}|} = \\frac{xx\' + yy\'}{\\sqrt{x^2 + y^2}\\cdot\\sqrt{x\'^2 + y\'^2}}$$\n• Tính chất của tích vô hướng (với mọi $\\vec{u}, \\vec{v}, \\vec{w}$ và $k \\in \\mathbb{R}$):\n  – $\\vec{u}\\cdot\\vec{v} = \\vec{v}\\cdot\\vec{u}$ (giao hoán);\n  – $\\vec{u}\\cdot(\\vec{v} \\pm \\vec{w}) = \\vec{u}\\cdot\\vec{v} \\pm \\vec{u}\\cdot\\vec{w}$ (phân phối);\n  – $(k\\vec{u})\\cdot\\vec{v} = k(\\vec{u}\\cdot\\vec{v}) = \\vec{u}\\cdot(k\\vec{v})$;\n  – $(\\vec{u} \\pm \\vec{v})^2 = \\vec{u}^2 \\pm 2\\vec{u}\\cdot\\vec{v} + \\vec{v}^2$;\\quad $(\\vec{u} + \\vec{v})\\cdot(\\vec{u} - \\vec{v}) = \\vec{u}^2 - \\vec{v}^2$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Công thức hình học & toạ độ của tích vô hướng',
        expression: '\\vec{u}\\cdot\\vec{v} = |\\vec{u}|\\cdot|\\vec{v}|\\cdot\\cos(\\vec{u}, \\vec{v}) = xx\' + yy\'',
        description: 'Tích vô hướng của hai vectơ là một số thực.',
      },
      {
        name: 'Điều kiện hai vectơ vuông góc',
        expression: '\\vec{u} \\perp \\vec{v} \\iff \\vec{u}\\cdot\\vec{v} = 0 \\iff xx\' + yy\' = 0',
        description: 'Ứng dụng chứng minh hai đường thẳng vuông góc, tìm trực tâm tam giác.',
      },
      {
        name: 'Góc giữa hai vectơ khác 0',
        expression: '\\cos(\\vec{u}, \\vec{v}) = \\frac{xx\' + yy\'}{\\sqrt{x^2+y^2}\\cdot\\sqrt{x\'^2+y\'^2}}',
        description: 'Chú ý góc giữa hai vectơ có thể tù (0° ≤ (u, v) ≤ 180°).',
      },
    ],
  },

  // =========================================================================
  // BÀI 12: SỐ GẦN ĐÚNG VÀ SAI SỐ (SGK Toán 10 Tập 1 - Trang 73 đến 77)
  // =========================================================================
  {
    lessonId: 'bai-12',
    lessonNumber: 12,
    name: 'Bài 12',
    topicTitle: 'Số gần đúng và sai số',
    chapter: 'Chương V. Các số đặc trưng của mẫu số liệu không ghép nhóm',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 73 – 77',
    terms: [
      'Số gần đúng',
      'Sai số tuyệt đối',
      'Độ chính xác',
      'Sai số tương đối',
      'Số quy tròn',
    ],
    objectives: [
      'Hiểu khái niệm số gần đúng, sai số tuyệt đối.',
      'Xác định số gần đúng của một số với độ chính xác cho trước.',
      'Xác định sai số tương đối của số gần đúng.',
      'Xác định số quy tròn của số gần đúng với độ chính xác cho trước.',
      'Biết sử dụng máy tính cầm tay để tính toán với các số gần đúng.',
    ],
    sections: [
      {
        id: 'bai-12-sec-1',
        title: '1. Số gần đúng',
        theoryPoints: [
          'Trong nhiều trường hợp, ta không biết hoặc khó biết **số đúng** (kí hiệu là $\\bar{a}$) mà chỉ tìm được giá trị khác xấp xỉ nó. Giá trị này được gọi là **số gần đúng**, kí hiệu là $a$.',
        ],
        formulas: [],
      },
      {
        id: 'bai-12-sec-2',
        title: '2. Sai số tuyệt đối và sai số tương đối',
        theoryPoints: [
          '• **Sai số tuyệt đối:** Giá trị $\\Delta_a = |a - \\bar{a}|$ phản ánh mức độ sai lệch giữa số đúng $\\bar{a}$ và số gần đúng $a$, được gọi là **sai số tuyệt đối** của số gần đúng $a$.',
          '• **Độ chính xác của số gần đúng:** Nếu $\\Delta_a \\le d$ thì $a - d \\le \\bar{a} \\le a + d$, khi đó ta viết $\\bar{a} = a \\pm d$ và hiểu là số đúng $\\bar{a}$ nằm trong đoạn $[a - d; a + d]$. Do $d$ càng nhỏ thì $a$ càng gần $\\bar{a}$ nên $d$ được gọi là **độ chính xác của số gần đúng**.',
          '• **Sai số tương đối:** Sai số tương đối của số gần đúng $a$, kí hiệu là $\\delta_a$, là tỉ số giữa sai số tuyệt đối và $|a|$, tức là $\\delta_a = \\dfrac{\\Delta_a}{|a|}$. Nếu $\\bar{a} = a \\pm d$ thì $\\Delta_a \\le d$ nên $\\delta_a \\le \\dfrac{d}{|a|}$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Sai số tuyệt đối, Độ chính xác & Sai số tương đối (SGK trang 75–76)',
            formula:
              '$$\\Delta_a = |a - \\bar{a}| \\le d \\iff \\bar{a} = a \\pm d \\iff \\bar{a} \\in [a - d;\\; a + d]$$\n$$\\delta_a = \\frac{\\Delta_a}{|a|} \\le \\frac{d}{|a|}$$',
            note: 'Trong các phép đo, độ chính xác $d$ của số gần đúng bằng một nửa đơn vị của thước đo. Nếu $\\dfrac{d}{|a|}$ càng nhỏ thì chất lượng của phép đo hay tính toán càng cao.',
          },
        ],
      },
      {
        id: 'bai-12-sec-3',
        title: '3. Quy tròn số gần đúng',
        theoryPoints: [
          'Số thu được sau khi thực hiện làm tròn số được gọi là **số quy tròn**. Số quy tròn là một số gần đúng của số ban đầu.',
          '• **Nhận xét 1:** Khi thay số đúng bởi số quy tròn đến một hàng nào đó thì sai số tuyệt đối của số quy tròn không vượt quá **nửa đơn vị** của hàng làm tròn.',
          '• **Nhận xét 2 (Quy tắc quy tròn số gần đúng $a$ với độ chính xác $d$):** Cho số gần đúng $a$ với độ chính xác $d$. Khi được yêu cầu làm tròn số $a$ mà không nói rõ làm tròn đến hàng nào thì ta **làm tròn số $a$ đến hàng thấp nhất mà $d$ nhỏ hơn $1$ đơn vị của hàng đó**.',
        ],
        formulas: [
          {
            label: 'Quy tắc làm tròn số & Quy tròn theo độ chính xác d (SGK trang 76–77)',
            formula:
              '• Đối với chữ số hàng làm tròn: giữ nguyên nếu chữ số ngay bên phải nó nhỏ hơn $5$; tăng $1$ đơn vị nếu chữ số ngay bên phải nó lớn hơn hoặc bằng $5$.\n• Đối với chữ số sau hàng làm tròn: bỏ đi nếu ở phần thập phân; thay bởi các chữ số $0$ nếu ở phần số nguyên.\n• Quy tròn $a$ theo độ chính xác $d$: làm tròn $a$ đến hàng thấp nhất mà $d < 1$ đơn vị của hàng đó (ví dụ: $d = 200 < 1000 \\Rightarrow$ quy tròn đến hàng nghìn; $d = 0{,}01 < 0{,}1 \\Rightarrow$ quy tròn đến hàng phần chục).',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Sai số tuyệt đối & Độ chính xác',
        expression: '\\Delta_a = |a - \\bar{a}| \\le d;\\quad \\bar{a} = a \\pm d \\iff \\bar{a} \\in [a - d; a + d]',
        description: 'Số đúng nằm trong đoạn [a − d; a + d].',
      },
      {
        name: 'Sai số tương đối',
        expression: '\\delta_a = \\frac{\\Delta_a}{|a|} \\le \\frac{d}{|a|}',
        description: 'Tỉ số đánh giá mức độ chính xác của phép đo (thường viết dạng %).',
      },
      {
        name: 'Quy tròn số a với độ chính xác d',
        expression: '\\text{Làm tròn } a \\text{ đến hàng thấp nhất mà } d < 1 \\text{ đơn vị của hàng đó}',
        description: 'Ví dụ: d = 300 → hàng nghìn; d = 0,02 → hàng phần chục.',
      },
    ],
  },

  // =========================================================================
  // BÀI 13: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM (SGK Toán 10 Tập 1 - Trang 78 đến 83)
  // =========================================================================
  {
    lessonId: 'bai-13',
    lessonNumber: 13,
    name: 'Bài 13',
    topicTitle: 'Các số đặc trưng đo xu thế trung tâm',
    chapter: 'Chương V. Các số đặc trưng của mẫu số liệu không ghép nhóm',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 78 – 83',
    terms: [
      'Số trung bình',
      'Trung vị',
      'Tứ phân vị',
      'Mốt',
    ],
    objectives: [
      'Lựa chọn và tính các số đặc trưng đo xu thế trung tâm của một mẫu số liệu: số trung bình, trung vị, tứ phân vị, mốt.',
      'Giải thích ý nghĩa, vai trò của các số đặc trưng trong mẫu số liệu thực tiễn.',
      'Rút ra kết luận từ ý nghĩa của các số đặc trưng đo xu thế trung tâm.',
    ],
    sections: [
      {
        id: 'bai-13-sec-1',
        title: '1. Số trung bình và Trung vị',
        theoryPoints: [
          '**a) Số trung bình:** Số trung bình là giá trị trung bình cộng của các số trong mẫu số liệu, nó cho biết vị trí trung tâm của mẫu số liệu và có thể dùng để đại diện cho mẫu số liệu.',
          '**b) Trung vị ($M_e$):** Trung vị không bị ảnh hưởng bởi giá trị bất thường trong khi số trung bình bị ảnh hưởng bởi giá trị bất thường. Vì vậy, khi mẫu số liệu có giá trị bất thường người ta thường dùng trung vị đại diện cho các số liệu thống kê.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức tính Số trung bình & Cách tìm Trung vị Me (SGK trang 78–79)',
            formula:
              '• Số trung bình cộng của mẫu số liệu $x_1, x_2, \\dots, x_n$:\n  $$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$\n• Nếu mẫu số liệu cho dưới dạng bảng tần số (giá trị $x_k$ có tần số $m_k$, với $n = m_1 + m_2 + \\dots + m_k$):\n  $$\\bar{x} = \\frac{m_1x_1 + m_2x_2 + \\dots + m_kx_k}{n}$$\n• Cách tìm trung vị $M_e$: Sắp xếp các giá trị trong mẫu số liệu theo thứ tự không giảm:\n  – Nếu cỡ mẫu $n$ là số lẻ ($n = 2k - 1$) thì giá trị chính giữa $x_k$ là trung vị: $M_e = x_k$.\n  – Nếu cỡ mẫu $n$ là số chẵn ($n = 2k$) thì trung vị là trung bình cộng của hai giá trị chính giữa: $M_e = \\dfrac{x_k + x_{k+1}}{2}$.',
          },
        ],
      },
      {
        id: 'bai-13-sec-2',
        title: '2. Tứ phân vị',
        theoryPoints: [
          'Các điểm $Q_1, Q_2, Q_3$ chia mẫu số liệu đã sắp xếp theo thứ tự từ nhỏ đến lớn thành bốn phần, mỗi phần đều chứa $25\\%$ giá trị.',
          '$Q_1$ được gọi là **tứ phân vị thứ nhất** hay **tứ phân vị dưới**; $Q_2$ là **tứ phân vị thứ hai** (chính là trung vị $M_e$); $Q_3$ được gọi là **tứ phân vị thứ ba** hay **tứ phân vị trên**.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Các bước tìm Tứ phân vị Q₁, Q₂, Q₃ (SGK trang 80)',
            formula:
              'Để tìm các tứ phân vị của mẫu số liệu có $n$ giá trị, ta làm như sau:\n• Sắp xếp mẫu số liệu theo thứ tự không giảm.\n• Tìm trung vị của mẫu. Giá trị này là $Q_2$.\n• Tìm trung vị của nửa số liệu bên trái $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ). Giá trị này là $Q_1$.\n• Tìm trung vị của nửa số liệu bên phải $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ). Giá trị này là $Q_3$.',
          },
        ],
      },
      {
        id: 'bai-13-sec-3',
        title: '3. Mốt',
        theoryPoints: [
          '**Mốt** của mẫu số liệu là giá trị xuất hiện với **tần số lớn nhất**.',
          '**Ý nghĩa:** Có thể dùng mốt để đo xu thế trung tâm của mẫu số liệu khi mẫu số liệu có nhiều giá trị trùng nhau (hoặc mẫu dữ liệu định tính).',
          '**Nhận xét:** Mốt có thể không là duy nhất (mẫu có hai hay nhiều mốt). Khi các giá trị trong mẫu số liệu xuất hiện với tần số như nhau thì mẫu số liệu không có mốt.',
        ],
        formulas: [],
      },
    ],
    quickFormulas: [
      {
        name: 'Số trung bình cộng',
        expression: '\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n} = \\frac{m_1x_1 + m_2x_2 + \\dots + m_kx_k}{n}',
        description: 'Đại diện cho vị trí trung tâm khi mẫu không có giá trị bất thường.',
      },
      {
        name: 'Trung vị Me và Tứ phân vị Q₁, Q₂, Q₃',
        expression: 'Q_2 = M_e;\\quad Q_1 = M_e(\\text{nửa trái});\\quad Q_3 = M_e(\\text{nửa phải})',
        description: 'Sắp xếp mẫu không giảm trước khi tìm trung vị và tứ phân vị.',
      },
      {
        name: 'Mốt Mo',
        expression: 'M_o = \\text{giá trị có tần số xuất hiện lớn nhất}',
        description: 'Một mẫu số liệu có thể không có mốt, có 1 mốt hoặc nhiều mốt.',
      },
    ],
  },

  // =========================================================================
  // BÀI 14: CÁC SỐ ĐẶC TRƯNG ĐO ĐỘ PHÂN TÁN (SGK Toán 10 Tập 1 - Trang 84 đến 88)
  // =========================================================================
  {
    lessonId: 'bai-14',
    lessonNumber: 14,
    name: 'Bài 14',
    topicTitle: 'Các số đặc trưng đo độ phân tán',
    chapter: 'Chương V. Các số đặc trưng của mẫu số liệu không ghép nhóm',
    volume: 'Tập 1',
    pageRange: 'SGK Tập 1 · Trang 84 – 88',
    terms: [
      'Khoảng biến thiên',
      'Khoảng tứ phân vị',
      'Phương sai',
      'Độ lệch chuẩn',
    ],
    objectives: [
      'Tính các số đặc trưng đo độ phân tán.',
      'Biết ý nghĩa của các số đặc trưng đo độ phân tán.',
      'Phát hiện các giá trị bất thường sử dụng các công cụ toán học.',
    ],
    sections: [
      {
        id: 'bai-14-sec-1',
        title: '1. Khoảng biến thiên và Khoảng tứ phân vị',
        theoryPoints: [
          '• **Khoảng biến thiên ($R$):** Là hiệu số giữa giá trị lớn nhất và giá trị nhỏ nhất trong mẫu số liệu. Khoảng biến thiên càng lớn thì mẫu số liệu càng phân tán, nhưng rất dễ bị ảnh hưởng bởi các giá trị bất thường.',
          '• **Khoảng tứ phân vị ($\\Delta_Q$):** Là hiệu số giữa tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$. Về bản chất, khoảng tứ phân vị là khoảng biến thiên của $50\\%$ số liệu chính giữa của mẫu số liệu đã sắp xếp nên không bị ảnh hưởng bởi các giá trị bất thường ở hai đầu.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Khoảng biến thiên R & Khoảng tứ phân vị ΔQ (SGK trang 84–85)',
            formula:
              '$$R = x_{\\max} - x_{\\min}$$\n$$\\Delta_Q = Q_3 - Q_1$$',
          },
        ],
      },
      {
        id: 'bai-14-sec-2',
        title: '2. Phương sai và Độ lệch chuẩn',
        theoryPoints: [
          'Với mẫu số liệu $x_1, x_2, \\dots, x_n$, nếu gọi số trung bình là $\\bar{x}$ thì với mỗi giá trị $x_i$, độ lệch của nó so với giá trị trung bình là $x_i - \\bar{x}$.',
          '**Ý nghĩa:** Phương sai hoặc độ lệch chuẩn càng lớn thì số liệu càng phân tán (độ ổn định / đồng đều càng thấp). Độ lệch chuẩn có cùng đơn vị đo với mẫu số liệu.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương sai s² và Độ lệch chuẩn s (SGK trang 86)',
            formula:
              '$$s^2 = \\frac{(x_1 - \\bar{x})^2 + (x_2 - \\bar{x})^2 + \\dots + (x_n - \\bar{x})^2}{n} = \\frac{1}{n}\\sum_{i=1}^{n} x_i^2 - \\bar{x}^2$$\n$$s = \\sqrt{s^2}$$',
            note: 'Chú ý: Người ta còn sử dụng đại lượng phương sai mẫu hiệu chỉnh $\\hat{s}^2 = \\dfrac{(x_1 - \\bar{x})^2 + (x_2 - \\bar{x})^2 + \\dots + (x_n - \\bar{x})^2}{n - 1}$. Khi cộng thêm cùng một hằng số $c$ vào mọi giá trị của mẫu thì $R, \\Delta_Q, s^2, s$ không đổi; khi nhân mọi giá trị của mẫu với hằng số $k > 0$ thì $R, \\Delta_Q, s$ gấp lên $k$ lần còn $s^2$ gấp lên $k^2$ lần.',
          },
        ],
      },
      {
        id: 'bai-14-sec-3',
        title: '3. Phát hiện số liệu bất thường hoặc không chính xác bằng biểu đồ hộp',
        theoryPoints: [
          'Trong mẫu số liệu thống kê, những giá trị quá lớn hoặc quá nhỏ so với đa số các giá trị khác được gọi là **giá trị bất thường (ngoại lai)**. Ta sử dụng tứ phân vị $Q_1, Q_3$ và khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ để phát hiện giá trị bất thường.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Tiêu chuẩn xác định giá trị bất thường (SGK trang 87)',
            formula:
              'Các giá trị $x$ trong mẫu số liệu lớn hơn $Q_3 + 1{,}5\\cdot\\Delta_Q$ hoặc bé hơn $Q_1 - 1{,}5\\cdot\\Delta_Q$ được xem là **giá trị bất thường**:\n$$x > Q_3 + 1{,}5\\Delta_Q \\quad \\text{hoặc} \\quad x < Q_1 - 1{,}5\\Delta_Q$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Khoảng biến thiên & Khoảng tứ phân vị',
        expression: 'R = x_{\\max} - x_{\\min};\\qquad \\Delta_Q = Q_3 - Q_1',
        description: 'Đo độ trải rộng của toàn bộ mẫu (R) và của 50% số liệu chính giữa (ΔQ).',
      },
      {
        name: 'Phương sai & Độ lệch chuẩn',
        expression: 's^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2;\\qquad s = \\sqrt{s^2}',
        description: 's càng nhỏ thì mẫu số liệu càng đồng đều, ổn định.',
      },
      {
        name: 'Giá trị bất thường (ngoại lai)',
        expression: 'x < Q_1 - 1{,}5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1{,}5\\Delta_Q',
        description: 'Mọi giá trị nằm ngoài đoạn [Q₁ − 1,5ΔQ; Q₃ + 1,5ΔQ] là giá trị bất thường.',
      },
    ],
  },
];
