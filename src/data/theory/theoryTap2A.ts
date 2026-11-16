import { LessonTheoryData } from '../../types/exam';
import {
  tikzLineAndNormal,
  tikzParabola,
  tikzPointToLineDistance,
  tikzQuadraticSignRoots,
} from '../lessons/lessonExamBuilder';

export const THEORY_TAP_2_A: LessonTheoryData[] = [
  // =========================================================================
  // BÀI 15: HÀM SỐ (SGK Toán 10 Tập 2 - Trang 4 đến 10)
  // =========================================================================
  {
    lessonId: 'bai-15',
    lessonNumber: 15,
    name: 'Bài 15',
    topicTitle: 'Hàm số',
    chapter: 'Chương VI. Hàm số, đồ thị và ứng dụng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 4 – 10',
    terms: [
      'Tập xác định',
      'Tập giá trị',
      'Đồ thị của hàm số',
      'Hàm số đồng biến',
      'Hàm số nghịch biến',
    ],
    objectives: [
      'Nhận biết những mô hình dẫn đến khái niệm hàm số.',
      'Mô tả các khái niệm cơ bản về hàm số: định nghĩa hàm số, tập xác định, tập giá trị, hàm số đồng biến, hàm số nghịch biến, đồ thị của hàm số.',
      'Mô tả dạng đồ thị của hàm số đồng biến, nghịch biến.',
      'Vận dụng kiến thức của hàm số vào giải quyết một số bài toán thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-15-sec-1',
        title: '1. Khái niệm hàm số',
        theoryPoints: [
          'Nếu với mỗi giá trị của $x$ thuộc tập hợp số $D$ có **một và chỉ một** giá trị tương ứng của $y$ thuộc tập số thực $\\mathbb{R}$ thì ta có một **hàm số**.',
          'Ta gọi $x$ là **biến số** và $y$ là **hàm số** của $x$, kí hiệu $y = f(x), y = g(x), \\dots$',
          'Tập hợp $D$ gọi là **tập xác định** của hàm số; tập tất cả các giá trị $y$ nhận được gọi là **tập giá trị** của hàm số.',
          '**Nhận xét:** Một hàm số có thể được cho bằng bảng, bằng biểu đồ, bằng công thức hoặc mô tả bằng lời.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định nghĩa hàm số & Quy ước tìm tập xác định D (SGK trang 6)',
            formula:
              '• Khi cho hàm số bằng công thức $y = f(x)$ mà không chỉ rõ tập xác định của nó thì ta quy ước **tập xác định của hàm số** là tập hợp tất cả các số thực $x$ sao cho biểu thức $f(x)$ có nghĩa:\n  – Biểu thức phân thức $\\dfrac{A(x)}{B(x)}$ có nghĩa khi $B(x) \\ne 0$;\n  – Biểu thức căn bậc hai $\\sqrt{A(x)}$ có nghĩa khi $A(x) \\ge 0$;\n  – Biểu thức $\\dfrac{1}{\\sqrt{A(x)}}$ có nghĩa khi $A(x) > 0$.',
          },
        ],
      },
      {
        id: 'bai-15-sec-2',
        title: '2. Đồ thị của hàm số',
        theoryPoints: [
          'Đồ thị của hàm số $y = f(x)$ xác định trên tập $D$ là tập hợp tất cả các điểm $M(x; f(x))$ trên mặt phẳng toạ độ với mọi $x$ thuộc $D$.',
          'Điểm $M(x_0; y_0)$ thuộc đồ thị hàm số $y = f(x)$ xác định trên $D$ khi và chỉ khi $x_0 \\in D$ và $y_0 = f(x_0)$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Đồ thị của hàm số (SGK trang 7)',
            formula:
              '$$\\text{Đồ thị } (G) = \\{M(x; f(x)) \\mid x \\in D\\}$$',
          },
        ],
      },
      {
        id: 'bai-15-sec-3',
        title: '3. Sự đồng biến, nghịch biến của hàm số',
        theoryPoints: [
          '**Chú ý về dạng đồ thị:**',
          '• Đồ thị của một hàm số **đồng biến** trên khoảng $(a; b)$ là đường **"đi lên"** từ trái sang phải;',
          '• Đồ thị của một hàm số **nghịch biến** trên khoảng $(a; b)$ là đường **"đi xuống"** từ trái sang phải.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Hàm số đồng biến, nghịch biến trên khoảng (a; b) (SGK trang 8)',
            formula:
              '• Hàm số $y = f(x)$ được gọi là **đồng biến** (tăng) trên khoảng $(a; b)$, nếu:\n  $$\\forall x_1, x_2 \\in (a; b),\\; x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$$\n• Hàm số $y = f(x)$ được gọi là **nghịch biến** (giảm) trên khoảng $(a; b)$, nếu:\n  $$\\forall x_1, x_2 \\in (a; b),\\; x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Tập xác định của hàm số y = f(x)',
        expression: 'D = \\{x \\in \\mathbb{R} \\mid f(x) \\text{ có nghĩa}\\}',
        description: 'Mẫu thức khác 0; biểu thức dưới dấu căn bậc chẵn không âm.',
      },
      {
        name: 'Hàm số đồng biến trên (a; b)',
        expression: '\\forall x_1, x_2 \\in (a; b),\\; x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)',
        description: 'Đồ thị "đi lên" từ trái sang phải.',
      },
      {
        name: 'Hàm số nghịch biến trên (a; b)',
        expression: '\\forall x_1, x_2 \\in (a; b),\\; x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)',
        description: 'Đồ thị "đi xuống" từ trái sang phải.',
      },
    ],
  },

  // =========================================================================
  // BÀI 16: HÀM SỐ BẬC HAI (SGK Toán 10 Tập 2 - Trang 11 đến 18)
  // =========================================================================
  {
    lessonId: 'bai-16',
    lessonNumber: 16,
    name: 'Bài 16',
    topicTitle: 'Hàm số bậc hai',
    chapter: 'Chương VI. Hàm số, đồ thị và ứng dụng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 11 – 18',
    terms: [
      'Hàm số bậc hai',
      'Bảng giá trị',
      'Parabol',
      'Đỉnh',
      'Trục đối xứng',
    ],
    objectives: [
      'Nhận biết hàm số bậc hai; thiết lập bảng giá trị của hàm số bậc hai.',
      'Vẽ parabol (parabola) là đồ thị của hàm số bậc hai.',
      'Nhận biết các yếu tố cơ bản của đường parabol như đỉnh, trục đối xứng.',
      'Nhận biết và giải thích các tính chất của hàm số bậc hai thông qua đồ thị.',
      'Vận dụng kiến thức về hàm số bậc hai và đồ thị vào giải quyết bài toán thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-16-sec-1',
        title: '1. Khái niệm hàm số bậc hai',
        theoryPoints: [
          'Hàm số bậc hai là hàm số cho bởi công thức $y = ax^2 + bx + c$, trong đó $x$ là biến số, $a, b, c$ là các hằng số và $a \\ne 0$.',
          'Tập xác định của hàm số bậc hai là $D = \\mathbb{R}$.',
          'Hàm số $y = ax^2$ ($a \\ne 0$) đã học ở lớp 9 là một trường hợp đặc biệt của hàm số bậc hai với $b = c = 0$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức hàm số bậc hai (SGK trang 11)',
            formula:
              '$$y = ax^2 + bx + c \\quad (a, b, c \\in \\mathbb{R},\\; a \\ne 0,\\; D = \\mathbb{R})$$',
          },
        ],
      },
      {
        id: 'bai-16-sec-2',
        title: '2. Đồ thị của hàm số bậc hai',
        theoryPoints: [
          'Ta có thể viết hàm số bậc hai $y = ax^2 + bx + c$ ($a \\ne 0$) dưới dạng chính tắc: $y = a\\left(x + \\dfrac{b}{2a}\\right)^2 - \\dfrac{\\Delta}{4a}$ với $\\Delta = b^2 - 4ac$.',
          '• Nếu $a > 0$ thì $y \\ge -\\dfrac{\\Delta}{4a}$ với mọi $x \\in \\mathbb{R}$, do đó đỉnh $I\\left(-\\dfrac{b}{2a}; -\\dfrac{\\Delta}{4a}\\right)$ là **điểm thấp nhất** trên đồ thị.',
          '• Nếu $a < 0$ thì $y \\le -\\dfrac{\\Delta}{4a}$ với mọi $x \\in \\mathbb{R}$, do đó đỉnh $I\\left(-\\dfrac{b}{2a}; -\\dfrac{\\Delta}{4a}\\right)$ là **điểm cao nhất** trên đồ thị.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Đỉnh, Trục đối xứng và Các bước vẽ Parabol (SGK trang 14)',
            formula:
              '• Đồ thị hàm số $y = ax^2 + bx + c$ ($a \\ne 0$) là một đường parabol có:\n  – **Đỉnh** là điểm $I\\left(-\\dfrac{b}{2a};\\; -\\dfrac{\\Delta}{4a}\\right)$ với $\\Delta = b^2 - 4ac$;\n  – **Trục đối xứng** là đường thẳng $x = -\\dfrac{b}{2a}$;\n  – Parabol quay bề lõm lên trên nếu $a > 0$, xuống dưới nếu $a < 0$.\n• Để vẽ đường parabol $y = ax^2 + bx + c$, ta tiến hành các bước:\n  1. Xác định toạ độ đỉnh $I\\left(-\\dfrac{b}{2a}; -\\dfrac{\\Delta}{4a}\\right)$;\n  2. Xác định trục đối xứng $x = -\\dfrac{b}{2a}$;\n  3. Xác định toạ độ các giao điểm của parabol với trục tung $(0; c)$, trục hoành (nếu có) và một vài điểm đặc biệt trên parabol;\n  4. Vẽ parabol.',
          },
          {
            label: 'Bảng tính chất biến thiên và Cực trị của hàm số bậc hai y = ax² + bx + c (SGK trang 15)',
            formula:
              '• **Với $a > 0$:**\n  – Hàm số **nghịch biến** trên khoảng $\\left(-\\infty; -\\dfrac{b}{2a}\\right)$ và **đồng biến** trên khoảng $\\left(-\\dfrac{b}{2a}; +\\infty\\right)$;\n  – $-\\dfrac{\\Delta}{4a}$ là **giá trị nhỏ nhất** của hàm số (đạt tại $x = -\\dfrac{b}{2a}$); tập giá trị $T = \\left[-\\dfrac{\\Delta}{4a}; +\\infty\\right)$.\n• **Với $a < 0$:**\n  – Hàm số **đồng biến** trên khoảng $\\left(-\\infty; -\\dfrac{b}{2a}\\right)$ và **nghịch biến** trên khoảng $\\left(-\\dfrac{b}{2a}; +\\infty\\right)$;\n  – $-\\dfrac{\\Delta}{4a}$ là **giá trị lớn nhất** của hàm số (đạt tại $x = -\\dfrac{b}{2a}$); tập giá trị $T = \\left(-\\infty; -\\dfrac{\\Delta}{4a}\\right]$.',
            note: 'Gợi ý (SGK trang 16): Phương trình parabol có đỉnh $I(h; k)$ có thể viết dưới dạng $y = a(x - h)^2 + k$ ($a \\ne 0$).',
          },
        ],
        tikzCode: tikzParabola(1, -2, -1, 'y=x^2-2x-1'),
        tikzCaption: 'Đồ thị parabol y = ax² + bx + c với đỉnh I(−b/(2a); −Δ/(4a)) và trục đối xứng x = −b/(2a)',
      },
    ],
    quickFormulas: [
      {
        name: 'Toạ độ đỉnh I và Trục đối xứng',
        expression: 'I\\left(-\\frac{b}{2a};\\; -\\frac{\\Delta}{4a}\\right);\\qquad \\text{Trục đối xứng: } x = -\\frac{b}{2a}',
        description: 'Tung độ đỉnh y_I = −Δ/(4a) cũng tính nhanh bằng cách thay x_I = −b/(2a) vào y = f(x).',
      },
      {
        name: 'Chiều biến thiên & GTNN (khi a > 0)',
        expression: 'NB: \\left(-\\infty; -\\frac{b}{2a}\\right),\\; ĐB: \\left(-\\frac{b}{2a}; +\\infty\\right),\\; y_{\\min} = -\\frac{\\Delta}{4a}',
        description: 'Khi a > 0, bề lõm parabol quay lên trên.',
      },
      {
        name: 'Chiều biến thiên & GTLN (khi a < 0)',
        expression: 'ĐB: \\left(-\\infty; -\\frac{b}{2a}\\right),\\; NB: \\left(-\\frac{b}{2a}; +\\infty\\right),\\; y_{\\max} = -\\frac{\\Delta}{4a}',
        description: 'Khi a < 0, bề lõm parabol quay xuống dưới.',
      },
    ],
  },

  // =========================================================================
  // BÀI 17: DẤU CỦA TAM THỨC BẬC HAI (SGK Toán 10 Tập 2 - Trang 19 đến 24)
  // =========================================================================
  {
    lessonId: 'bai-17',
    lessonNumber: 17,
    name: 'Bài 17',
    topicTitle: 'Dấu của tam thức bậc hai',
    chapter: 'Chương VI. Hàm số, đồ thị và ứng dụng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 19 – 24',
    terms: [
      'Tam thức bậc hai',
      'Dấu của tam thức bậc hai',
      'Bất phương trình bậc hai',
    ],
    objectives: [
      'Giải thích định lí về dấu của tam thức bậc hai từ việc quan sát đồ thị của hàm bậc hai.',
      'Giải bất phương trình bậc hai.',
      'Vận dụng bất phương trình bậc hai vào giải quyết bài toán thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-17-sec-1',
        title: '1. Dấu của tam thức bậc hai',
        theoryPoints: [
          '**Tam thức bậc hai** (đối với $x$) là biểu thức có dạng $f(x) = ax^2 + bx + c$, trong đó $a, b, c$ là những số thực cho trước (với $a \\ne 0$), được gọi là các hệ số của tam thức bậc hai.',
          'Nghiệm của phương trình bậc hai $ax^2 + bx + c = 0$ cũng được gọi là nghiệm của tam thức bậc hai $f(x) = ax^2 + bx + c$.',
          '$\\Delta = b^2 - 4ac$ và $\\Delta\' = b\'^2 - ac$ (với $b = 2b\'$) tương ứng được gọi là biệt thức và biệt thức thu gọn của tam thức bậc hai $ax^2 + bx + c$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Định lí về dấu của tam thức bậc hai f(x) = ax² + bx + c (a ≠ 0) (SGK trang 21)',
            formula:
              '• **Nếu $\\Delta < 0$** thì $f(x)$ **cùng dấu với hệ số $a$** với mọi $x \\in \\mathbb{R}$.\n• **Nếu $\\Delta = 0$** thì $f(x)$ **cùng dấu với hệ số $a$** với mọi $x \\ne -\\dfrac{b}{2a}$ và $f\\left(-\\dfrac{b}{2a}\\right) = 0$.\n• **Nếu $\\Delta > 0$** thì tam thức $f(x)$ có hai nghiệm phân biệt $x_1$ và $x_2$ ($x_1 < x_2$). Khi đó:\n  – $f(x)$ **cùng dấu với hệ số $a$** với mọi $x \\in (-\\infty; x_1) \\cup (x_2; +\\infty)$;\n  – $f(x)$ **trái dấu với hệ số $a$** với mọi $x \\in (x_1; x_2)$ *(Quy tắc: "Trong trái, ngoài cùng")*.',
            note: 'Chú ý: Trong định lí về dấu của tam thức bậc hai có thể thay $\\Delta$ bởi $\\Delta\' = b\'^2 - ac$.',
          },
        ],
        tikzCode: tikzQuadraticSignRoots(1, -2, 1),
        tikzCaption: 'Minh hoạ quy tắc xét dấu tam thức bậc hai khi Δ > 0: "Trong trái, ngoài cùng"',
      },
      {
        id: 'bai-17-sec-2',
        title: '2. Bất phương trình bậc hai',
        theoryPoints: [
          '• **Bất phương trình bậc hai ẩn $x$** là bất phương trình có dạng $ax^2 + bx + c > 0$ (hoặc $ax^2 + bx + c \\ge 0$, $ax^2 + bx + c < 0$, $ax^2 + bx + c \\le 0$), trong đó $a, b, c$ là những số thực đã cho và $a \\ne 0$.',
          '• Số thực $x_0$ gọi là một **nghiệm** của bất phương trình bậc hai $ax^2 + bx + c > 0$, nếu $ax_0^2 + bx_0 + c > 0$. Tập hợp gồm tất cả các nghiệm gọi là **tập nghiệm** của bất phương trình bậc hai.',
          '• **Nhận xét:** Để giải bất phương trình bậc hai, ta cần xét dấu tam thức $ax^2 + bx + c$, từ đó suy ra tập nghiệm.',
        ],
        formulas: [
          {
            label: 'Điều kiện để tam thức bậc hai f(x) = ax² + bx + c (a ≠ 0) luôn giữ một dấu trên ℝ',
            formula:
              '$$f(x) > 0,\\; \\forall x \\in \\mathbb{R} \\iff \\begin{cases} a > 0 \\\\ \\Delta < 0 \\end{cases};\\qquad f(x) \\ge 0,\\; \\forall x \\in \\mathbb{R} \\iff \\begin{cases} a > 0 \\\\ \\Delta \\le 0 \\end{cases}$$\n$$f(x) < 0,\\; \\forall x \\in \\mathbb{R} \\iff \\begin{cases} a < 0 \\\\ \\Delta < 0 \\end{cases};\\qquad f(x) \\le 0,\\; \\forall x \\in \\mathbb{R} \\iff \\begin{cases} a < 0 \\\\ \\Delta \\le 0 \\end{cases}$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Khi Δ < 0 (vô nghiệm)',
        expression: 'a \\cdot f(x) > 0,\\; \\forall x \\in \\mathbb{R}',
        description: 'Tam thức f(x) luôn cùng dấu với hệ số a trên toàn bộ ℝ.',
      },
      {
        name: 'Khi Δ > 0 (hai nghiệm x₁ < x₂)',
        expression: '\\text{Trong } (x_1; x_2): \\text{ trái dấu } a;\\quad \\text{Ngoài } (-\\infty; x_1) \\cup (x_2; +\\infty): \\text{ cùng dấu } a',
        description: 'Ghi nhớ: "Trong trái, ngoài cùng".',
      },
      {
        name: 'Điều kiện luôn dương / luôn âm với mọi x ∈ ℝ',
        expression: 'ax^2+bx+c > 0, \\forall x \\in \\mathbb{R} \\iff \\begin{cases} a > 0 \\\\ \\Delta < 0 \\end{cases}',
        description: 'Nếu có dấu "=" (≥ 0 hoặc ≤ 0 với mọi x ∈ ℝ) thì thay Δ < 0 bằng Δ ≤ 0.',
      },
    ],
  },

  // =========================================================================
  // BÀI 18: PHƯƠNG TRÌNH QUY VỀ PHƯƠNG TRÌNH BẬC HAI (SGK Toán 10 Tập 2 - Trang 25 đến 27)
  // =========================================================================
  {
    lessonId: 'bai-18',
    lessonNumber: 18,
    name: 'Bài 18',
    topicTitle: 'Phương trình quy về phương trình bậc hai',
    chapter: 'Chương VI. Hàm số, đồ thị và ứng dụng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 25 – 27',
    terms: [
      'Phương trình chứa căn thức',
    ],
    objectives: [
      'Giải một số phương trình chứa căn bậc hai đơn giản có thể quy về phương trình bậc hai.',
    ],
    sections: [
      {
        id: 'bai-18-sec-1',
        title: '1. Phương trình dạng √(ax² + bx + c) = √(dx² + ex + f)',
        theoryPoints: [
          'Khi bình phương hai vế của phương trình chứa căn thức $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$, ta thu được phương trình hệ quả $ax^2 + bx + c = dx^2 + ex + f$. Vì phép bình phương hai vế có thể làm xuất hiện nghiệm ngoại lai nên bước **thử lại nghiệm** (hoặc đối chiếu điều kiện dưới dấu căn không âm) là bắt buộc.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Cách giải phương trình √(ax² + bx + c) = √(dx² + ex + f) (SGK trang 25)',
            formula:
              'Để giải phương trình $\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}$, ta thực hiện như sau:\n• **Bước 1:** Bình phương hai vế để được phương trình $ax^2 + bx + c = dx^2 + ex + f$ và giải phương trình nhận được;\n• **Bước 2:** Thử lại các giá trị $x$ tìm được ở trên có thoả mãn phương trình đã cho hay không và kết luận nghiệm.',
            note: 'Cách biến đổi tương đương: $\\sqrt{A} = \\sqrt{B} \\iff \\begin{cases} A \\ge 0 \\text{ (hoặc } B \\ge 0\\text{)} \\\\ A = B \\end{cases}$.',
          },
        ],
      },
      {
        id: 'bai-18-sec-2',
        title: '2. Phương trình dạng √(ax² + bx + c) = dx + e',
        theoryPoints: [
          'Đối với phương trình $\\sqrt{ax^2 + bx + c} = dx + e$, vế trái là căn bậc hai số học nên luôn không âm. Do đó bất kì giá trị nào của $x$ làm cho vế phải $dx + e < 0$ đều không phải là nghiệm của phương trình.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Cách giải phương trình √(ax² + bx + c) = dx + e (SGK trang 26)',
            formula:
              'Để giải phương trình $\\sqrt{ax^2 + bx + c} = dx + e$, ta thực hiện như sau:\n• **Bước 1:** Bình phương hai vế để được phương trình $ax^2 + bx + c = (dx + e)^2$ và giải phương trình nhận được;\n• **Bước 2:** Thử lại các giá trị $x$ tìm được ở trên có thoả mãn phương trình đã cho hay không và kết luận nghiệm.',
            note: 'Cách biến đổi tương đương: $\\sqrt{A} = B \\iff \\begin{cases} B \\ge 0 \\\\ A = B^2 \\end{cases}$.',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Dạng 1: √A = √B',
        expression: '\\sqrt{ax^2+bx+c} = \\sqrt{dx^2+ex+f} \\iff \\begin{cases} ax^2+bx+c \\ge 0 \\\\ ax^2+bx+c = dx^2+ex+f \\end{cases}',
        description: 'Bình phương hai vế giải phương trình bậc hai rồi thử lại nghiệm vào phương trình đầu.',
      },
      {
        name: 'Dạng 2: √A = B',
        expression: '\\sqrt{ax^2+bx+c} = dx+e \\iff \\begin{cases} dx+e \\ge 0 \\\\ ax^2+bx+c = (dx+e)^2 \\end{cases}',
        description: 'Loại ngay mọi giá trị x làm cho vế phải dx + e < 0.',
      },
    ],
  },

  // =========================================================================
  // BÀI 19: PHƯƠNG TRÌNH ĐƯỜNG THẲNG (SGK Toán 10 Tập 2 - Trang 30 đến 35)
  // =========================================================================
  {
    lessonId: 'bai-19',
    lessonNumber: 19,
    name: 'Bài 19',
    topicTitle: 'Phương trình đường thẳng',
    chapter: 'Chương VII. Phương pháp toạ độ trong mặt phẳng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 30 – 35',
    terms: [
      'Vectơ chỉ phương',
      'Vectơ pháp tuyến',
      'Phương trình tổng quát',
      'Phương trình tham số',
    ],
    objectives: [
      'Mô tả phương trình tổng quát và phương trình tham số của đường thẳng.',
      'Lập phương trình của đường thẳng khi biết một điểm và một vectơ pháp tuyến hoặc một điểm và một vectơ chỉ phương hoặc hai điểm.',
      'Giải thích mối liên hệ giữa đồ thị hàm bậc nhất và đường thẳng.',
      'Vận dụng kiến thức về phương trình đường thẳng để giải một số bài toán có liên quan đến thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-19-sec-1',
        title: '1. Phương trình tổng quát của đường thẳng',
        theoryPoints: [
          '• **Vectơ pháp tuyến:** Vectơ $\\vec{n}$ khác $\\vec{0}$ được gọi là **vectơ pháp tuyến** của đường thẳng $\\Delta$ nếu giá của nó vuông góc với $\\Delta$. Nếu $\\vec{n}$ là vectơ pháp tuyến của $\\Delta$ thì $k\\vec{n}$ ($k \\ne 0$) cũng là vectơ pháp tuyến của $\\Delta$.',
          '• Đường thẳng hoàn toàn xác định nếu biết một điểm và một vectơ pháp tuyến của nó.',
          '• **Liên hệ với đồ thị hàm bậc nhất:** Trong mặt phẳng $Oxy$, cho đường thẳng $\\Delta: ax + by + c = 0$. Nếu $b = 0$ thì $\\Delta: x = -\\dfrac{c}{a}$ vuông góc với trục $Ox$; nếu $b \\ne 0$ thì $\\Delta$ đưa về dạng $y = kx + p$ với hệ số góc $k = -\\dfrac{a}{b}, p = -\\dfrac{c}{b}$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình tổng quát của đường thẳng Δ (SGK trang 31)',
            formula:
              '• Đường thẳng $\\Delta$ đi qua điểm $A(x_0; y_0)$ và có vectơ pháp tuyến $\\vec{n}(a; b)$ ($a^2 + b^2 \\ne 0$) có phương trình:\n  $$a(x - x_0) + b(y - y_0) = 0$$\n• Trong mặt phẳng toạ độ, mọi đường thẳng đều có **phương trình tổng quát** dạng:\n  $$ax + by + c = 0 \\quad (\\text{với } a \\text{ và } b \\text{ không đồng thời bằng } 0)$$\n  nhận $\\vec{n}(a; b)$ là một vectơ pháp tuyến.',
            note: 'Phương trình đoạn chắn (Bài 7.5 SGK trang 34): Đường thẳng đi qua $A(a; 0)$ và $B(0; b)$ ($ab \\ne 0$) có phương trình $\\dfrac{x}{a} + \\dfrac{y}{b} = 1$.',
          },
        ],
        tikzCode: tikzLineAndNormal(2, 1, '\\Delta'),
        tikzCaption: 'Đường thẳng Δ đi qua A(x₀; y₀) có vectơ pháp tuyến n vuông góc với Δ và vectơ chỉ phương u song song với Δ',
      },
      {
        id: 'bai-19-sec-2',
        title: '2. Phương trình tham số của đường thẳng',
        theoryPoints: [
          '• **Vectơ chỉ phương:** Vectơ $\\vec{u}$ khác $\\vec{0}$ được gọi là **vectơ chỉ phương** của đường thẳng $\\Delta$ nếu giá của nó song song hoặc trùng với $\\Delta$. Nếu $\\vec{u}$ là vectơ chỉ phương của $\\Delta$ thì $k\\vec{u}$ ($k \\ne 0$) cũng là vectơ chỉ phương của $\\Delta$.',
          '• **Mối liên hệ giữa VTPT và VTCP:** Vectơ $\\vec{n}(a; b)$ vuông góc với các vectơ $\\vec{u}(-b; a)$ và $\\vec{v}(b; -a)$ nên nếu $\\vec{n}(a; b)$ là vectơ pháp tuyến của $\\Delta$ thì $\\vec{u}(-b; a)$ và $\\vec{v}(b; -a)$ là hai vectơ chỉ phương của $\\Delta$ (và ngược lại).',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Phương trình tham số của đường thẳng Δ (SGK trang 33)',
            formula:
              'Cho đường thẳng $\\Delta$ đi qua điểm $A(x_0; y_0)$ và có vectơ chỉ phương $\\vec{u}(a; b)$. Khi đó điểm $M(x; y)$ thuộc đường thẳng $\\Delta$ khi và chỉ khi tồn tại số thực $t$ sao cho $\\overrightarrow{AM} = t\\vec{u}$, hay:\n$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\end{cases} \\quad (t \\in \\mathbb{R} \\text{ là tham số})$$',
          },
        ],
      },
    ],
    quickFormulas: [
      {
        name: 'Chuyển đổi giữa VTPT và VTCP',
        expression: '\\vec{n} = (a; b) \\Longleftrightarrow \\vec{u} = (-b; a) \\text{ hoặc } \\vec{u} = (b; -a)',
        description: 'Tích vô hướng của VTPT và VTCP luôn bằng 0.',
      },
      {
        name: 'Phương trình tổng quát của đường thẳng',
        expression: 'a(x - x_0) + b(y - y_0) = 0 \\iff ax + by + c = 0',
        description: 'Đi qua A(x₀; y₀) và có vectơ pháp tuyến n = (a; b).',
      },
      {
        name: 'Phương trình tham số của đường thẳng',
        expression: '\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\end{cases}\\; (t \\in \\mathbb{R})',
        description: 'Đi qua A(x₀; y₀) và có vectơ chỉ phương u = (a; b).',
      },
    ],
  },

  // =========================================================================
  // BÀI 20: VỊ TRÍ TƯƠNG ĐỐI GIỮA HAI ĐƯỜNG THẲNG. GÓC VÀ KHOẢNG CÁCH (SGK Tập 2 - Trang 36 đến 42)
  // =========================================================================
  {
    lessonId: 'bai-20',
    lessonNumber: 20,
    name: 'Bài 20',
    topicTitle: 'Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách',
    chapter: 'Chương VII. Phương pháp toạ độ trong mặt phẳng',
    volume: 'Tập 2',
    pageRange: 'SGK Tập 2 · Trang 36 – 42',
    terms: [
      'Vị trí tương đối giữa hai đường thẳng',
      'Góc, khoảng cách',
    ],
    objectives: [
      'Nhận biết hai đường thẳng cắt nhau, song song, trùng nhau, vuông góc.',
      'Thiết lập công thức tính góc giữa hai đường thẳng.',
      'Tính khoảng cách từ một điểm đến một đường thẳng.',
      'Vận dụng các công thức tính góc và khoảng cách để giải một số bài toán có liên quan đến thực tiễn.',
    ],
    sections: [
      {
        id: 'bai-20-sec-1',
        title: '1. Vị trí tương đối giữa hai đường thẳng',
        theoryPoints: [
          'Trên mặt phẳng toạ độ, xét hai đường thẳng $\\Delta_1: a_1x + b_1y + c_1 = 0$ (VTPT $\\vec{n}_1(a_1; b_1)$) và $\\Delta_2: a_2x + b_2y + c_2 = 0$ (VTPT $\\vec{n}_2(a_2; b_2)$). Khi đó, toạ độ giao điểm của $\\Delta_1$ và $\\Delta_2$ là nghiệm của hệ phương trình $(*)$ gồm hai phương trình trên.',
          '• $\\Delta_1$ và $\\Delta_2$ song song hoặc trùng nhau $\\iff \\vec{u}_1$ và $\\vec{u}_2$ cùng phương $\\iff \\vec{n}_1$ và $\\vec{n}_2$ cùng phương.',
          '• $\\Delta_1$ và $\\Delta_2$ cắt nhau $\\iff \\vec{u}_1$ và $\\vec{u}_2$ không cùng phương $\\iff \\vec{n}_1$ và $\\vec{n}_2$ không cùng phương.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Vị trí tương đối giữa hai đường thẳng Δ₁ và Δ₂ (SGK trang 36)',
            formula:
              'Xét hệ phương trình $(*): \\begin{cases} a_1x + b_1y + c_1 = 0 \\\\ a_2x + b_2y + c_2 = 0 \\end{cases}$\n• $\\Delta_1$ **cắt** $\\Delta_2$ tại $M(x_0; y_0)$ khi và chỉ khi hệ $(*)$ có **nghiệm duy nhất** $(x_0; y_0)$.\n• $\\Delta_1$ **song song** với $\\Delta_2$ khi và chỉ khi hệ $(*)$ **vô nghiệm**.\n• $\\Delta_1$ **trùng** $\\Delta_2$ khi và chỉ khi hệ $(*)$ có **vô số nghiệm**.',
          },
        ],
      },
      {
        id: 'bai-20-sec-2',
        title: '2. Góc giữa hai đường thẳng',
        theoryPoints: [
          'Hai đường thẳng cắt nhau tạo thành bốn góc, số đo của góc không tù ($0^\\circ \\le \\varphi \\le 90^\\circ$) được gọi là **số đo góc (hay đơn giản là góc) giữa hai đường thẳng**.',
          'Góc giữa hai đường thẳng song song hoặc trùng nhau được quy ước bằng $0^\\circ$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức tính góc φ giữa hai đường thẳng Δ₁, Δ₂ (SGK trang 38)',
            formula:
              'Cho $\\Delta_1: a_1x + b_1y + c_1 = 0$ (VTPT $\\vec{n}_1(a_1; b_1)$) và $\\Delta_2: a_2x + b_2y + c_2 = 0$ (VTPT $\\vec{n}_2(a_2; b_2)$):\n$$\\cos\\varphi = |\\cos(\\vec{n}_1, \\vec{n}_2)| = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|} = \\frac{|a_1a_2 + b_1b_2|}{\\sqrt{a_1^2 + b_1^2}\\cdot\\sqrt{a_2^2 + b_2^2}}$$\n• Điều kiện vuông góc: $\\Delta_1 \\perp \\Delta_2 \\iff \\vec{n}_1 \\perp \\vec{n}_2 \\iff a_1a_2 + b_1b_2 = 0$.',
            note: 'Nếu $\\Delta_1, \\Delta_2$ có các vectơ chỉ phương $\\vec{u}_1, \\vec{u}_2$ thì $\\cos\\varphi = |\\cos(\\vec{u}_1, \\vec{u}_2)|$. Nếu $d_1: y = k_1x + b_1$ và $d_2: y = k_2x + b_2$ thì $d_1 \\perp d_2 \\iff k_1k_2 = -1$.',
          },
        ],
      },
      {
        id: 'bai-20-sec-3',
        title: '3. Khoảng cách từ một điểm đến một đường thẳng',
        theoryPoints: [
          'Cho điểm $M(x_0; y_0)$ và đường thẳng $\\Delta: ax + by + c = 0$. Nếu $H$ là hình chiếu vuông góc của $M$ trên $\\Delta$ thì độ dài đoạn thẳng $MH$ chính là khoảng cách từ điểm $M$ đến đường thẳng $\\Delta$, kí hiệu $d(M, \\Delta)$.',
        ],
        formulas: [
          {
            label: 'Khung kiến thức: Công thức khoảng cách từ điểm M(x₀; y₀) đến đường thẳng Δ: ax + by + c = 0 (SGK trang 40)',
            formula:
              '$$d(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$$',
          },
        ],
        tikzCode: tikzPointToLineDistance('M(x_0;y_0)', '\\Delta: ax+by+c=0', 'MH'),
        tikzCaption: 'Khoảng cách d(M, Δ) = MH từ điểm M(x₀; y₀) đến đường thẳng Δ: ax + by + c = 0',
      },
    ],
    quickFormulas: [
      {
        name: 'Góc φ giữa hai đường thẳng (0° ≤ φ ≤ 90°)',
        expression: '\\cos\\varphi = \\frac{|a_1a_2 + b_1b_2|}{\\sqrt{a_1^2 + b_1^2}\\cdot\\sqrt{a_2^2 + b_2^2}}',
        description: 'Tử số luôn có dấu giá trị tuyệt đối vì góc giữa hai đường thẳng không tù.',
      },
      {
        name: 'Hai đường thẳng vuông góc',
        expression: '\\Delta_1 \\perp \\Delta_2 \\iff a_1a_2 + b_1b_2 = 0',
        description: 'Tích vô hướng hai vectơ pháp tuyến (hoặc hai vectơ chỉ phương) bằng 0.',
      },
      {
        name: 'Khoảng cách từ điểm M(x₀; y₀) đến Δ',
        expression: 'd(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}',
        description: 'Phải đưa phương trình đường thẳng về dạng tổng quát ax + by + c = 0 trước khi tính.',
      },
    ],
  },
];
