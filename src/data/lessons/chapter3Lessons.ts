import { LessonCatalogItem } from '../../types/exam';

export const CHAPTER_3_LESSONS: LessonCatalogItem[] = [
  {
    id: 'bai-5',
    lessonNumber: 5,
    name: 'Bài 5',
    topicTitle: 'Giá trị lượng giác của một góc từ 0° đến 180°',
    chapter: 'Chương III – Hệ thức lượng trong tam giác',
    keySummary:
      'Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị M(x₀; y₀), liên hệ giữa hai góc phụ nhau và hai góc bù nhau, các hệ thức lượng giác cơ bản và ứng dụng thực tiễn (bám sát SBT Toán 10 KNTT trang 29–33).',
    practiceExams: [
      {
        id: 'de-on-bai-5-1',
        lessonId: 'bai-5',
        title: 'Đề ôn Bài 5 - Đề số 01',
        subtitle: 'Nửa đường tròn đơn vị & Hệ thức lượng giác cơ bản (SBT KNTT trang 29–32)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 3.1, 3.2, 3.13–3.24 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b5_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 5: Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị',
            prompt:
              'Trên nửa đường tròn đơn vị, cho góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) ứng với điểm $M(x_0; y_0)$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\sin\\alpha = y_0$ và $\\cos\\alpha = x_0$.' },
              { key: 'B', content: '$\\sin\\alpha = x_0$ và $\\cos\\alpha = y_0$.' },
              { key: 'C', content: '$\\tan\\alpha = \\frac{x_0}{y_0}$ (với $y_0 \\ne 0$).' },
              { key: 'D', content: '$\\cot\\alpha = \\frac{y_0}{x_0}$ (với $x_0 \\ne 0$).' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị (SBT trang 29): $\\sin\\alpha = y_0$, $\\cos\\alpha = x_0$, $\\tan\\alpha = \\frac{y_0}{x_0}$ ($x_0 \\ne 0$), $\\cot\\alpha = \\frac{x_0}{y_0}$ ($y_0 \\ne 0$).',
            pedagogicalTip: 'Tung độ là sin ($y_0 = \\sin\\alpha$), hoành độ là côsin ($x_0 = \\cos\\alpha$).',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 5: Dấu của giá trị lượng giác góc tù (Câu 3.13 SBT trang 31)',
            prompt:
              'Cho góc tù $\\alpha$ ($90^\\circ < \\alpha < 180^\\circ$). Khẳng định nào sau đây về dấu của các giá trị lượng giác là **đúng**?',
            options: [
              { key: 'A', content: '$\\sin\\alpha > 0,\\ \\cos\\alpha < 0,\\ \\tan\\alpha < 0,\\ \\cot\\alpha < 0$.' },
              { key: 'B', content: '$\\sin\\alpha < 0,\\ \\cos\\alpha > 0,\\ \\tan\\alpha < 0,\\ \\cot\\alpha < 0$.' },
              { key: 'C', content: '$\\sin\\alpha > 0,\\ \\cos\\alpha > 0,\\ \\tan\\alpha > 0,\\ \\cot\\alpha > 0$.' },
              { key: 'D', content: '$\\sin\\alpha < 0,\\ \\cos\\alpha < 0,\\ \\tan\\alpha > 0,\\ \\cot\\alpha > 0$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Với $90^\\circ < \\alpha < 180^\\circ$, điểm $M(x_0; y_0)$ nằm ở góc phần tư thứ II có tung độ $y_0 > 0$ và hoành độ $x_0 < 0$, nên $\\sin\\alpha > 0$ còn $\\cos\\alpha < 0, \\tan\\alpha < 0, \\cot\\alpha < 0$ (Câu 3.13 SBT trang 31).',
            pedagogicalTip: 'Với mọi góc $\\alpha \\in (0^\\circ; 180^\\circ)$, giá trị $\\sin\\alpha$ luôn dương.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 5: Hai góc bù nhau',
            prompt:
              'Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), hệ thức liên hệ giữa hai góc bù nhau $\\alpha$ và $180^\\circ - \\alpha$ nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\sin(180^\\circ - \\alpha) = \\sin\\alpha$ và $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$.' },
              { key: 'B', content: '$\\sin(180^\\circ - \\alpha) = -\\sin\\alpha$ và $\\cos(180^\\circ - \\alpha) = \\cos\\alpha$.' },
              { key: 'C', content: '$\\tan(180^\\circ - \\alpha) = \\tan\\alpha$ (với $\\alpha \\ne 90^\\circ$).' },
              { key: 'D', content: '$\\cot(180^\\circ - \\alpha) = \\cot\\alpha$ (với $0^\\circ < \\alpha < 180^\\circ$).' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hai góc bù nhau có sin bằng nhau, còn côsin, tang, côtang đối nhau (SBT trang 29).',
            pedagogicalTip: 'Ghi nhớ: "Sin bù, Phụ chéo" — hai góc bù nhau chỉ có $\\sin$ bằng nhau.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 5: Tính giá trị biểu thức lượng giác (Ví dụ 1b SBT trang 30)',
            prompt:
              'Không dùng máy tính cầm tay, giá trị của biểu thức $B = 5\\tan 13^\\circ \\tan 77^\\circ - 3\\cos^2 60^\\circ$ bằng:',
            options: [
              { key: 'A', content: '$\\frac{17}{4}$' },
              { key: 'B', content: '$\\frac{19}{4}$' },
              { key: 'C', content: '$5$' },
              { key: 'D', content: '$\\frac{13}{4}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 1b SBT trang 30: Vì $77^\\circ = 90^\\circ - 13^\\circ$ nên $\\tan 77^\\circ = \\cot 13^\\circ$, suy ra $\\tan 13^\\circ \\tan 77^\\circ = 1$. Lại có $\\cos 60^\\circ = \\frac{1}{2} \\Rightarrow \\cos^2 60^\\circ = \\frac{1}{4}$. Vậy $B = 5\\cdot 1 - 3\\cdot \\frac{1}{4} = \\frac{17}{4}$.',
            pedagogicalTip: 'Khi gặp hai góc có tổng bằng $90^\\circ$, hãy chuyển $\\tan(90^\\circ - \\alpha) = \\cot\\alpha$.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 5: Tính các giá trị lượng giác khi biết cos (Ví dụ 2 SBT trang 30)',
            prompt:
              'Cho $\\cos\\alpha = -\\frac{1}{3}$ với $0^\\circ < \\alpha < 180^\\circ$. Giá trị của $\\sin\\alpha$ và $\\tan\\alpha$ lần lượt là:',
            options: [
              { key: 'A', content: '$\\sin\\alpha = \\frac{2\\sqrt{2}}{3}$ và $\\tan\\alpha = -2\\sqrt{2}$.' },
              { key: 'B', content: '$\\sin\\alpha = -\\frac{2\\sqrt{2}}{3}$ và $\\tan\\alpha = 2\\sqrt{2}$.' },
              { key: 'C', content: '$\\sin\\alpha = \\frac{2\\sqrt{2}}{3}$ và $\\tan\\alpha = 2\\sqrt{2}$.' },
              { key: 'D', content: '$\\sin\\alpha = \\frac{8}{9}$ và $\\tan\\alpha = -\\frac{8}{3}$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 2 SBT trang 30: Vì $0^\\circ < \\alpha < 180^\\circ$ nên $\\sin\\alpha > 0$. Do đó $\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - \\frac{1}{9}} = \\frac{2\\sqrt{2}}{3}$ và $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -2\\sqrt{2}$.',
            pedagogicalTip: 'Đừng quên $\\sin\\alpha > 0$ với mọi $\\alpha \\in (0^\\circ; 180^\\circ)$.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 5: Tính cos khi biết sin của góc tù (Câu 3.21 SBT trang 32)',
            prompt:
              'Cho $\\sin\\alpha = \\frac{1}{\\sqrt{3}}$ với $90^\\circ < \\alpha < 180^\\circ$. Khi đó giá trị của $\\cos\\alpha$ là:',
            options: [
              { key: 'A', content: '$-\\frac{\\sqrt{6}}{3}$' },
              { key: 'B', content: '$\\frac{\\sqrt{6}}{3}$' },
              { key: 'C', content: '$-\\frac{2}{3}$' },
              { key: 'D', content: '$-\\frac{\\sqrt{3}}{3}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $90^\\circ < \\alpha < 180^\\circ$ nên $\\cos\\alpha < 0$. Ta có $\\cos\\alpha = -\\sqrt{1 - \\sin^2\\alpha} = -\\sqrt{1 - \\frac{1}{3}} = -\\sqrt{\\frac{2}{3}} = -\\frac{\\sqrt{6}}{3}$ (Câu 3.21 SBT trang 32).',
            pedagogicalTip: 'Khi khai căn $\\cos^2\\alpha$ với góc tù, phải lấy dấu âm.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 5: Diện tích tam giác trên nửa đường tròn đơn vị (Câu 3.23 SBT trang 32)',
            prompt:
              'Trên nửa đường tròn đơn vị, cho điểm $M$ sao cho $\\widehat{xOM} = \\alpha$ và $\\sin\\alpha = \\frac{4}{5}$. Gọi $A(1; 0)$, diện tích của tam giác $AOM$ bằng:',
            options: [
              { key: 'A', content: '$\\frac{2}{5}$' },
              { key: 'B', content: '$\\frac{4}{5}$' },
              { key: 'C', content: '$\\frac{3}{5}$' },
              { key: 'D', content: '$\\frac{6}{25}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tam giác $AOM$ có đáy $OA = 1$ trên trục $Ox$ và đường cao hạ từ $M(x_0; y_0)$ xuống $OA$ chính là tung độ $y_0 = \\sin\\alpha = \\frac{4}{5}$. Vậy $S_{\\triangle AOM} = \\frac{1}{2} \\cdot OA \\cdot y_0 = \\frac{1}{2} \\cdot 1 \\cdot \\frac{4}{5} = \\frac{2}{5}$ (Câu 3.23 SBT trang 32).',
            pedagogicalTip: 'Tung độ $y_0 = \\sin\\alpha$ chính là khoảng cách từ $M$ đến trục hoành $Ox$.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 5: Hệ thức giữa tổng và tích sin, cos (Câu 3.20 SBT trang 32)',
            prompt:
              'Cho $\\sin\\alpha + \\cos\\alpha = m$. Giá trị của tích $\\sin\\alpha \\cos\\alpha$ tính theo $m$ là:',
            options: [
              { key: 'A', content: '$\\frac{m^2 - 1}{2}$' },
              { key: 'B', content: '$\\frac{1 - m^2}{2}$' },
              { key: 'C', content: '$m^2 - 1$' },
              { key: 'D', content: '$\\frac{m^2 + 1}{2}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Bình phương hai vế của $\\sin\\alpha + \\cos\\alpha = m$: $\\sin^2\\alpha + \\cos^2\\alpha + 2\\sin\\alpha\\cos\\alpha = m^2 \\Leftrightarrow 1 + 2\\sin\\alpha\\cos\\alpha = m^2 \\Leftrightarrow \\sin\\alpha\\cos\\alpha = \\frac{m^2 - 1}{2}$ (Câu 3.20 SBT trang 32).',
            pedagogicalTip: 'Sử dụng hằng đẳng thức $(\\sin\\alpha + \\cos\\alpha)^2 = 1 + 2\\sin\\alpha\\cos\\alpha$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b5_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 5: Tính giá trị biểu thức lượng giác khi biết sin (Bài 3.2a SBT trang 31)',
            prompt:
              'Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha = \\frac{3}{4}$ và $90^\\circ < \\alpha < 180^\\circ$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Vì $90^\\circ < \\alpha < 180^\\circ$ nên $\\cos\\alpha < 0$.',
                isCorrect: true,
                explanation: 'Góc tù có hoành độ điểm biểu diễn âm nên $\\cos\\alpha < 0$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Giá trị của $\\cos^2\\alpha$ bằng $\\frac{7}{16}$.',
                isCorrect: true,
                explanation: '$\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\frac{9}{16} = \\frac{7}{16}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giá trị của $\\cot^2\\alpha$ bằng $\\frac{9}{7}$.',
                isCorrect: false,
                explanation: '$\\cot^2\\alpha = \\frac{\\cos^2\\alpha}{\\sin^2\\alpha} = \\frac{7/16}{9/16} = \\frac{7}{9}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Giá trị của biểu thức $F = 2\\cos^2\\alpha + \\sin^2\\alpha$ bằng $\\frac{23}{16}$.',
                isCorrect: true,
                explanation:
                  'Ta có $F = \\cos^2\\alpha + (\\cos^2\\alpha + \\sin^2\\alpha) = \\frac{7}{16} + 1 = \\frac{23}{16}$ (Bài 3.2a SBT trang 94).',
              },
            ],
            pedagogicalTip: 'Rút gọn biểu thức trước khi thay số giúp việc tính toán nhanh và chính xác hơn.',
          },
          {
            id: 'b5_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 5: Hai điểm đối xứng trên nửa đường tròn đơn vị (Câu 3.24 SBT trang 32)',
            prompt:
              'Trên nửa đường tròn đơn vị, gọi $A(1; 0)$ và $M, N$ là hai điểm lần lượt ứng với hai góc $\\alpha$ và $180^\\circ - \\alpha$ (với $0^\\circ < \\alpha < 90^\\circ$). Biết $\\cos\\alpha = \\frac{1}{2}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Góc $\\alpha$ bằng $60^\\circ$.',
                isCorrect: true,
                explanation: 'Với $0^\\circ < \\alpha < 90^\\circ$ và $\\cos\\alpha = \\frac{1}{2}$, ta có $\\alpha = 60^\\circ$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Hai điểm $M$ và $N$ có cùng tung độ $y_0 = \\frac{\\sqrt{3}}{2}$.',
                isCorrect: true,
                explanation: '$\\sin(180^\\circ - \\alpha) = \\sin\\alpha = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Độ dài đoạn thẳng $MN$ bằng $\\sqrt{3}$.',
                isCorrect: false,
                explanation:
                  'Toạ độ $M\\left(\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$ và $N\\left(-\\frac{1}{2}; \\frac{\\sqrt{3}}{2}\\right)$ nên $MN = \\frac{1}{2} - \\left(-\\frac{1}{2}\\right) = 1$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Diện tích của tam giác $MAN$ bằng $\\frac{\\sqrt{3}}{4}$.',
                isCorrect: true,
                explanation:
                  'Đoạn $MN = 1$ song song với trục $Ox$ và cách $Ox$ (chứa điểm $A$) một khoảng $h = \\frac{\\sqrt{3}}{2}$, nên $S_{\\triangle MAN} = \\frac{1}{2} \\cdot 1 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{4}$ (Câu 3.24 SBT trang 95).',
              },
            ],
            pedagogicalTip: 'Hai điểm ứng với $\\alpha$ và $180^\\circ - \\alpha$ đối xứng nhau qua trục tung $Oy$.',
          },
        ],
        part3: [
          {
            id: 'b5_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 5: Tổng bình phương côsin các góc phụ nhau (Bài 3.1a SBT trang 30)',
            prompt:
              'Không dùng máy tính cầm tay, tính giá trị của biểu thức $C = \\cos^2 5^\\circ + \\cos^2 25^\\circ + \\cos^2 45^\\circ + \\cos^2 65^\\circ + \\cos^2 85^\\circ$ (viết dưới dạng số thập phân).',
            acceptableAnswers: ['2,5', '2.5'],
            explanation:
              'Vì $\\cos 85^\\circ = \\sin 5^\\circ$ và $\\cos 65^\\circ = \\sin 25^\\circ$ nên $C = (\\cos^2 5^\\circ + \\sin^2 5^\\circ) + (\\cos^2 25^\\circ + \\sin^2 25^\\circ) + \\cos^2 45^\\circ = 1 + 1 + 0{,}5 = 2{,}5$ (Bài 3.1a SBT trang 94).',
            pedagogicalTip: 'Nhóm hai góc có tổng bằng $90^\\circ$ để áp dụng $\\cos^2\\alpha + \\cos^2(90^\\circ - \\alpha) = 1$.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 5: Biểu thức góc bù nhau và góc phụ nhau (Bài 3.1b SBT trang 30)',
            prompt:
              'Không dùng máy tính cầm tay, tính giá trị của biểu thức $D = \\tan 1^\\circ \\cdot \\tan 2^\\circ \\cdots \\tan 89^\\circ + 14\\sin 90^\\circ$.',
            acceptableAnswers: ['15'],
            explanation:
              'Ghép cặp $(\\tan 1^\\circ \\tan 89^\\circ)(\\tan 2^\\circ \\tan 88^\\circ)\\cdots (\\tan 44^\\circ \\tan 46^\\circ)\\tan 45^\\circ = 1$. Cộng với $14\\sin 90^\\circ = 14$, ta được $D = 15$.',
            pedagogicalTip: 'Sử dụng $\\tan\\alpha \\cdot \\tan(90^\\circ - \\alpha) = \\tan\\alpha \\cdot \\cot\\alpha = 1$.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 5: Tính biểu thức hữu tỉ theo tan (Bài 3.2c SBT trang 31)',
            prompt:
              'Cho $\\tan\\alpha = 2$. Tính giá trị của biểu thức $H = \\frac{2\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - \\cos\\alpha}$.',
            acceptableAnswers: ['5'],
            explanation:
              'Chia cả tử và mẫu cho $\\cos\\alpha \\ne 0$: $H = \\frac{2\\tan\\alpha + 1}{\\tan\\alpha - 1} = \\frac{2\\cdot 2 + 1}{2 - 1} = 5$.',
            pedagogicalTip: 'Với biểu thức bậc nhất hoặc thuần nhất theo $\\sin\\alpha, \\cos\\alpha$, hãy chia cả tử và mẫu cho $\\cos^k\\alpha$.',
            points: 0.5,
          },
          {
            id: 'b5_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 5: Biểu thức bậc bốn của sin và cos',
            prompt:
              'Cho biết $\\sin\\alpha - \\cos\\alpha = \\frac{1}{\\sqrt{5}}$. Tính giá trị của biểu thức $P = \\sin^4\\alpha + \\cos^4\\alpha$ (viết dưới dạng số thập phân).',
            acceptableAnswers: ['0,68', '0.68', '17/25'],
            explanation:
              'Từ $(\\sin\\alpha - \\cos\\alpha)^2 = \\frac{1}{5} \\Rightarrow 1 - 2\\sin\\alpha\\cos\\alpha = \\frac{1}{5} \\Rightarrow \\sin\\alpha\\cos\\alpha = \\frac{2}{5}$. Khi đó $P = 1 - 2(\\sin\\alpha\\cos\\alpha)^2 = 1 - \\frac{8}{25} = \\frac{17}{25} = 0{,}68$.',
            pedagogicalTip: 'Nhớ công thức $\\sin^4\\alpha + \\cos^4\\alpha = 1 - 2\\sin^2\\alpha\\cos^2\\alpha$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b5_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 5: Chứng minh đẳng thức lượng giác (Ví dụ 3a SBT trang 30)',
            problemStatement:
              'Cho góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 180^\\circ$. Chứng minh đẳng thức lượng giác: $\\frac{1 - \\cos\\alpha}{\\sin\\alpha} = \\frac{\\sin\\alpha}{1 + \\cos\\alpha}$.',
            conclusionTarget:
              'Hãy sắp xếp các bước biến đổi sau theo thứ tự hợp lý để hoàn thành phép chứng minh.',
            steps: [
              {
                id: 'b5_d1_s1',
                originalIndex: 1,
                content:
                  'Vì $0^\\circ < \\alpha < 180^\\circ$ nên $\\sin\\alpha > 0$ và $\\cos\\alpha > -1 \\Rightarrow 1 + \\cos\\alpha > 0$ (mẫu thức hai vế đều khác $0$).',
                roleDescription: 'Kiểm tra điều kiện xác định của đẳng thức',
              },
              {
                id: 'b5_d1_s2',
                originalIndex: 2,
                content:
                  'Nhân cả tử và mẫu của vế trái $\\frac{1 - \\cos\\alpha}{\\sin\\alpha}$ với biểu thức $(1 + \\cos\\alpha)$, ta được $\\frac{(1 - \\cos\\alpha)(1 + \\cos\\alpha)}{\\sin\\alpha(1 + \\cos\\alpha)} = \\frac{1 - \\cos^2\\alpha}{\\sin\\alpha(1 + \\cos\\alpha)}$.',
                roleDescription: 'Nhân cả tử và mẫu với (1 + cos α)',
              },
              {
                id: 'b5_d1_s3',
                originalIndex: 3,
                content:
                  'Áp dụng hệ thức lượng giác cơ bản $1 - \\cos^2\\alpha = \\sin^2\\alpha$, biểu thức trở thành $\\frac{\\sin^2\\alpha}{\\sin\\alpha(1 + \\cos\\alpha)}$.',
                roleDescription: 'Thay 1 - cos²α = sin²α',
              },
              {
                id: 'b5_d1_s4',
                originalIndex: 4,
                content:
                  'Rút gọn cả tử và mẫu cho $\\sin\\alpha \\ne 0$, ta thu được $\\frac{\\sin\\alpha}{1 + \\cos\\alpha}$ bằng vế phải (điều phải chứng minh).',
                roleDescription: 'Rút gọn sin α và kết luận',
              },
            ],
            pedagogicalTip:
              'Biểu thức $(1 - \\cos\\alpha)(1 + \\cos\\alpha) = 1 - \\cos^2\\alpha = \\sin^2\\alpha$ là phép nhân liên hợp rất phổ biến.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn theo Ví dụ 3a trang 30 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-5-2',
        lessonId: 'bai-5',
        title: 'Đề ôn Bài 5 - Đề số 02',
        subtitle: 'Rút gọn biểu thức lượng giác & Vận dụng tia nắng mặt trời (SBT KNTT trang 30–33)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Bài tập 3.2, 3.3, 3.4 (bài toán thực tế góc chiếu tia nắng mặt trời) và các bài toán rút gọn biểu thức lượng giác trong SBT Toán 10 KNTT.',
        part1: [
          {
            id: 'b5_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 5: Tính cos khi biết tan của góc tù (Câu 3.22 SBT trang 32)',
            prompt:
              'Cho biết $\\tan\\alpha = -\\frac{2}{3}$. Giá trị của $\\cos\\alpha$ bằng:',
            options: [
              { key: 'A', content: '$-\\frac{3\\sqrt{13}}{13}$' },
              { key: 'B', content: '$\\frac{3\\sqrt{13}}{13}$' },
              { key: 'C', content: '$-\\frac{2\\sqrt{13}}{13}$' },
              { key: 'D', content: '$-\\frac{9}{13}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $\\tan\\alpha = -\\frac{2}{3} < 0$ nên $90^\\circ < \\alpha < 180^\\circ \\Rightarrow \\cos\\alpha < 0$. Từ $\\frac{1}{\\cos^2\\alpha} = 1 + \\tan^2\\alpha = 1 + \\frac{4}{9} = \\frac{13}{9} \\Rightarrow \\cos\\alpha = -\\frac{3}{\\sqrt{13}} = -\\frac{3\\sqrt{13}}{13}$ (Câu 3.22 SBT trang 32).',
            pedagogicalTip: 'Dấu của $\\tan\\alpha$ và $\\cos\\alpha$ luôn cùng dấu trên khoảng $(0^\\circ; 180^\\circ)$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 5: Tổng côsin các góc bù nhau',
            prompt:
              'Giá trị của biểu thức $P = \\cos 0^\\circ + \\cos 20^\\circ + \\cos 40^\\circ + \\dots + \\cos 160^\\circ + \\cos 180^\\circ$ bằng:',
            options: [
              { key: 'A', content: '$0$' },
              { key: 'B', content: '$1$' },
              { key: 'C', content: '$-1$' },
              { key: 'D', content: '$2$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Sử dụng $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$: $(\\cos 0^\\circ + \\cos 180^\\circ) + (\\cos 20^\\circ + \\cos 160^\\circ) + \\dots + (\\cos 80^\\circ + \\cos 100^\\circ) = 0$.',
            pedagogicalTip: 'Ghép cặp hai góc bù nhau có tổng bằng $180^\\circ$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 5: Rút gọn biểu thức lượng giác (Bài 3.3a SBT trang 31)',
            prompt:
              'Biểu thức $B = (\\sin\\alpha + \\cos\\alpha)^2 + (\\sin\\alpha - \\cos\\alpha)^2$ sau khi rút gọn có giá trị bằng:',
            options: [
              { key: 'A', content: '$2$' },
              { key: 'B', content: '$1$' },
              { key: 'C', content: '$4\\sin\\alpha\\cos\\alpha$' },
              { key: 'D', content: '$0$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khai triển hằng đẳng thức: $B = 2(\\sin^2\\alpha + \\cos^2\\alpha) = 2 \\cdot 1 = 2$ (Bài 3.3a SBT trang 31).',
            pedagogicalTip: 'Các số hạng $+2\\sin\\alpha\\cos\\alpha$ và $-2\\sin\\alpha\\cos\\alpha$ triệt tiêu nhau.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 5: Rút gọn biểu thức bậc 4 (Bài 3.3b SBT trang 31)',
            prompt:
              'Biểu thức $K = \\sin^4\\alpha + \\cos^4\\alpha + 2\\sin^2\\alpha\\cos^2\\alpha$ có giá trị bằng:',
            options: [
              { key: 'A', content: '$1$' },
              { key: 'B', content: '$2$' },
              { key: 'C', content: '$\\frac{1}{2}$' },
              { key: 'D', content: '$4$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $K = (\\sin^2\\alpha + \\cos^2\\alpha)^2 = 1^2 = 1$ (Bài 3.3b SBT trang 31).',
            pedagogicalTip: 'Nhận diện hằng đẳng thức $a^2 + b^2 + 2ab = (a+b)^2$ với $a = \\sin^2\\alpha, b = \\cos^2\\alpha$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 5: Hệ thức lượng giác giữa các góc trong tam giác',
            prompt:
              'Cho tam giác $ABC$. Khẳng định nào sau đây là **sai**?',
            options: [
              { key: 'A', content: '$\\sin(A + B) = -\\sin C$' },
              { key: 'B', content: '$\\sin(A + B) = \\sin C$' },
              { key: 'C', content: '$\\cos(A + B) = -\\cos C$' },
              { key: 'D', content: '$\\sin\\frac{A + B}{2} = \\cos\\frac{C}{2}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Trong tam giác $ABC$, $A + B = 180^\\circ - C$ nên hai góc $A + B$ và $C$ bù nhau, suy ra $\\sin(A + B) = \\sin C$. Do đó khẳng định A sai.',
            pedagogicalTip: 'Trong tam giác: tổng hai góc bù với góc thứ ba, nửa tổng hai góc phụ với nửa góc thứ ba.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 5: Tính tổng bình phương tan và cot',
            prompt:
              'Cho $\\tan\\alpha + \\cot\\alpha = 3$. Giá trị của biểu thức $\\tan^2\\alpha + \\cot^2\\alpha$ bằng:',
            options: [
              { key: 'A', content: '$7$' },
              { key: 'B', content: '$9$' },
              { key: 'C', content: '$5$' },
              { key: 'D', content: '$11$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\tan^2\\alpha + \\cot^2\\alpha = (\\tan\\alpha + \\cot\\alpha)^2 - 2\\tan\\alpha\\cot\\alpha = 3^2 - 2\\cdot 1 = 7$.',
            pedagogicalTip: 'Áp dụng hệ thức $\\tan\\alpha \\cdot \\cot\\alpha = 1$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 5: Tính biểu thức theo cot',
            prompt:
              'Cho $\\cot\\alpha = -3$. Giá trị của biểu thức $P = \\frac{3\\sin\\alpha - 2\\cos\\alpha}{5\\sin\\alpha + \\cos\\alpha}$ bằng:',
            options: [
              { key: 'A', content: '$\\frac{9}{2}$' },
              { key: 'B', content: '$-\\frac{9}{2}$' },
              { key: 'C', content: '$\\frac{3}{2}$' },
              { key: 'D', content: '$-\\frac{3}{8}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Chia cả tử và mẫu cho $\\sin\\alpha \\ne 0$: $P = \\frac{3 - 2\\cot\\alpha}{5 + \\cot\\alpha} = \\frac{3 - 2(-3)}{5 + (-3)} = \\frac{9}{2}$.',
            pedagogicalTip: 'Khi biết $\\cot\\alpha$, hãy chia cả tử và mẫu cho $\\sin\\alpha$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 5: Vận dụng thực tế góc nghiêng tia nắng mặt trời (Bài 3.4 SBT trang 31)',
            prompt:
              'Theo Bài 3.4 SBT trang 31, góc nghiêng $\\alpha$ của tia nắng mặt trời lúc giữa trưa tại vĩ độ $\\phi$ vào ngày thứ $N$ trong năm được cho bởi $\\alpha = 90^\\circ - \\phi - \\left|\\cos\\left(\\left(\\frac{2(N+10)}{365} - m\\right)180^\\circ\\right)\\right| \\cdot 23{,}5^\\circ$ (với $m = 0$ nếu $N \\le 78$ hoặc $N \\ge 264$). Tại vĩ độ $\\phi = 20^\\circ$ vào ngày 10 tháng 10 ($N = 283, m = 0$), góc nghiêng $\\alpha$ của tia nắng mặt trời gần nhất với giá trị nào sau đây?',
            options: [
              { key: 'A', content: '$62{,}35^\\circ$' },
              { key: 'B', content: '$70{,}00^\\circ$' },
              { key: 'C', content: '$46{,}50^\\circ$' },
              { key: 'D', content: '$58{,}15^\\circ$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 3.4 SBT trang 95: Ngày 10/10 là ngày thứ $N = 283$ trong năm (năm không nhuận), $m = 0$. Thay $\\phi = 20^\\circ, N = 283, m = 0$ vào công thức ta được $\\alpha = 90^\\circ - 20^\\circ - \\left|\\cos\\left(\\frac{2\\cdot 293}{365}\\cdot 180^\\circ\\right)\\right|\\cdot 23{,}5^\\circ \\approx 62{,}35^\\circ$.',
            pedagogicalTip: 'Chú ý xác định đúng số thứ tự ngày $N$ trong năm và hệ số $m$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b5_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 5: Chứng minh các hệ thức lượng giác (Bài 3.3 SBT trang 31)',
            prompt:
              'Với mọi góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 180^\\circ, \\alpha \\ne 90^\\circ$, xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Đẳng thức $\\sin^4\\alpha - \\cos^4\\alpha = 2\\sin^2\\alpha - 1$ luôn đúng.',
                isCorrect: true,
                explanation:
                  '$\\sin^4\\alpha - \\cos^4\\alpha = (\\sin^2\\alpha - \\cos^2\\alpha)(\\sin^2\\alpha + \\cos^2\\alpha) = \\sin^2\\alpha - (1 - \\sin^2\\alpha) = 2\\sin^2\\alpha - 1$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Đẳng thức $\\tan^2\\alpha - \\sin^2\\alpha = \\tan^2\\alpha \\cdot \\sin^2\\alpha$ luôn đúng.',
                isCorrect: true,
                explanation:
                  '$\\tan^2\\alpha - \\sin^2\\alpha = \\sin^2\\alpha\\left(\\frac{1}{\\cos^2\\alpha} - 1\\right) = \\sin^2\\alpha \\cdot \\tan^2\\alpha$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Đẳng thức $\\sin^6\\alpha + \\cos^6\\alpha = 1 - 3\\sin^2\\alpha\\cos^2\\alpha$ luôn đúng.',
                isCorrect: true,
                explanation:
                  '$\\sin^6\\alpha + \\cos^6\\alpha = (\\sin^2\\alpha + \\cos^2\\alpha)^3 - 3\\sin^2\\alpha\\cos^2\\alpha(\\sin^2\\alpha + \\cos^2\\alpha) = 1 - 3\\sin^2\\alpha\\cos^2\\alpha$.',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Giá trị của biểu thức $Q = 3(\\sin^4\\alpha + \\cos^4\\alpha) - 2(\\sin^6\\alpha + \\cos^6\\alpha)$ phụ thuộc vào $\\alpha$.',
                isCorrect: false,
                explanation:
                  '$Q = 3(1 - 2\\sin^2\\alpha\\cos^2\\alpha) - 2(1 - 3\\sin^2\\alpha\\cos^2\\alpha) = 1$ không phụ thuộc vào $\\alpha$.',
              },
            ],
            pedagogicalTip: 'Hằng đẳng thức $\\sin^4\\alpha + \\cos^4\\alpha = 1 - 2\\sin^2\\alpha\\cos^2\\alpha$ và $\\sin^6\\alpha + \\cos^6\\alpha = 1 - 3\\sin^2\\alpha\\cos^2\\alpha$ giúp rút gọn rất nhanh.',
          },
          {
            id: 'b5_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 5: Tính giá trị biểu thức theo tan (Bài 3.2b, c SBT trang 31)',
            prompt:
              'Cho biết $\\tan\\alpha = 2$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Vì $\\tan\\alpha = 2 > 0$ nên $0^\\circ < \\alpha < 90^\\circ$.',
                isCorrect: true,
                explanation: 'Trên $(0^\\circ; 180^\\circ)$, $\\tan\\alpha > 0$ khi và chỉ khi $\\alpha$ là góc nhọn.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Giá trị của $\\cos^2\\alpha$ bằng $\\frac{1}{5}$ và $\\cos\\alpha = \\frac{1}{\\sqrt{5}}$.',
                isCorrect: true,
                explanation: '$\\cos^2\\alpha = \\frac{1}{1 + \\tan^2\\alpha} = \\frac{1}{5}$, và vì $\\alpha$ nhọn nên $\\cos\\alpha = \\frac{1}{\\sqrt{5}}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement:
                  'Giá trị của biểu thức $G = \\frac{2\\sin\\alpha + \\cos\\alpha}{\\cos^3\\alpha}$ bằng $25\\sqrt{5}$.',
                isCorrect: false,
                explanation:
                  'Ta có $\\frac{2\\sin\\alpha + \\cos\\alpha}{\\cos^3\\alpha} = \\frac{2\\tan\\alpha + 1}{\\cos^2\\alpha} = \\frac{2\\cdot 2 + 1}{1/5} = 25$.',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Giá trị của biểu thức $H = \\frac{\\sin^3\\alpha + \\cos^3\\alpha}{\\sin^3\\alpha - \\cos^3\\alpha}$ bằng $\\frac{9}{7}$.',
                isCorrect: true,
                explanation:
                  'Chia cả tử và mẫu cho $\\cos^3\\alpha$: $H = \\frac{\\tan^3\\alpha + 1}{\\tan^3\\alpha - 1} = \\frac{2^3 + 1}{2^3 - 1} = \\frac{9}{7}$.',
              },
            ],
            pedagogicalTip: 'Chú ý bậc của tử và mẫu theo $\\sin\\alpha, \\cos\\alpha$ khi chia cho $\\cos^k\\alpha$.',
          },
        ],
        part3: [
          {
            id: 'b5_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 5: Tính giá trị biểu thức các góc đặc biệt (Bài 3.1c SBT trang 30)',
            prompt:
              'Không dùng máy tính cầm tay, tính giá trị của biểu thức $E = 3 - \\sin^2 90^\\circ + 2\\cos^2 60^\\circ - 3\\tan^2 45^\\circ + \\cot^2 30^\\circ$ (viết dưới dạng số thập phân).',
            acceptableAnswers: ['2,5', '2.5'],
            explanation:
              'Thay $\\sin 90^\\circ = 1, \\cos 60^\\circ = \\frac{1}{2}, \\tan 45^\\circ = 1, \\cot 30^\\circ = \\sqrt{3}$: $E = 3 - 1 + 2\\cdot \\frac{1}{4} - 3\\cdot 1 + 3 = 2{,}5$.',
            pedagogicalTip: 'Học thuộc bảng giá trị lượng giác của các góc đặc biệt $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 5: Tính tích sin cos từ tổng',
            prompt:
              'Cho $\\sin\\alpha + \\cos\\alpha = \\frac{7}{5}$ với $0^\\circ < \\alpha < 90^\\circ$. Tính giá trị của biểu thức $25\\sin\\alpha\\cos\\alpha$.',
            acceptableAnswers: ['12'],
            explanation:
              'Bình phương hai vế: $1 + 2\\sin\\alpha\\cos\\alpha = \\frac{49}{25} \\Rightarrow \\sin\\alpha\\cos\\alpha = \\frac{12}{25} \\Rightarrow 25\\sin\\alpha\\cos\\alpha = 12$.',
            pedagogicalTip: 'Dùng hằng đẳng thức $(\\sin\\alpha + \\cos\\alpha)^2 = 1 + 2\\sin\\alpha\\cos\\alpha$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 5: Biểu thức bậc hai thuần nhất theo sin và cos',
            prompt:
              'Cho biết $\\tan\\alpha = 3$. Tính giá trị của biểu thức $T = \\frac{\\sin^2\\alpha - 2\\sin\\alpha\\cos\\alpha + 3\\cos^2\\alpha}{\\sin^2\\alpha - \\cos^2\\alpha}$ (viết dưới dạng số thập phân).',
            acceptableAnswers: ['0,75', '0.75'],
            explanation:
              'Chia cả tử và mẫu cho $\\cos^2\\alpha$: $T = \\frac{\\tan^2\\alpha - 2\\tan\\alpha + 3}{\\tan^2\\alpha - 1} = \\frac{9 - 6 + 3}{9 - 1} = \\frac{6}{8} = 0{,}75$.',
            pedagogicalTip: 'Chia cả tử và mẫu cho $\\cos^2\\alpha$ để chuyển toàn bộ về $\\tan\\alpha$.',
            points: 0.5,
          },
          {
            id: 'b5_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 5: Biểu thức độc lập với góc alpha',
            prompt:
              'Tính giá trị của biểu thức $S = 3(\\sin^4\\alpha + \\cos^4\\alpha) - 2(\\sin^6\\alpha + \\cos^6\\alpha) + 9$.',
            acceptableAnswers: ['10'],
            explanation:
              'Vì $3(\\sin^4\\alpha + \\cos^4\\alpha) - 2(\\sin^6\\alpha + \\cos^6\\alpha) = 1$ với mọi $\\alpha$ nên $S = 1 + 9 = 10$.',
            pedagogicalTip: 'Có thể kiểm tra nhanh bằng cách thay một góc đặc biệt như $\\alpha = 0^\\circ$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b5_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 5: Chứng minh đẳng thức lượng giác (Ví dụ 3b SBT trang 30)',
            problemStatement:
              'Cho góc $\\alpha$ thỏa mãn $0^\\circ < \\alpha < 180^\\circ, \\alpha \\ne 90^\\circ$. Chứng minh đẳng thức: $\\frac{1 + \\sin^2\\alpha}{1 - \\sin^2\\alpha} = 1 + 2\\tan^2\\alpha$.',
            conclusionTarget:
              'Hãy sắp xếp các bước biến đổi vế trái thành vế phải theo thứ tự đúng.',
            steps: [
              {
                id: 'b5_d2_s1',
                originalIndex: 1,
                content:
                  'Vì $\\alpha \\ne 90^\\circ$ nên $\\cos\\alpha \\ne 0$, suy ra $1 - \\sin^2\\alpha = \\cos^2\\alpha \\ne 0$ và $\\tan\\alpha$ xác định.',
                roleDescription: 'Nêu điều kiện xác định và thay mẫu số',
              },
              {
                id: 'b5_d2_s2',
                originalIndex: 2,
                content:
                  'Biến đổi vế trái: $\\frac{1 + \\sin^2\\alpha}{1 - \\sin^2\\alpha} = \\frac{1 + \\sin^2\\alpha}{\\cos^2\\alpha} = \\frac{1}{\\cos^2\\alpha} + \\frac{\\sin^2\\alpha}{\\cos^2\\alpha}$.',
                roleDescription: 'Tách phân thức thành tổng hai phân thức',
              },
              {
                id: 'b5_d2_s3',
                originalIndex: 3,
                content:
                  'Sử dụng các hệ thức $\\frac{1}{\\cos^2\\alpha} = 1 + \\tan^2\\alpha$ và $\\frac{\\sin^2\\alpha}{\\cos^2\\alpha} = \\tan^2\\alpha$.',
                roleDescription: 'Áp dụng hệ thức lượng giác cơ bản',
              },
              {
                id: 'b5_d2_s4',
                originalIndex: 4,
                content:
                  'Cộng hai biểu thức lại ta được $(1 + \\tan^2\\alpha) + \\tan^2\\alpha = 1 + 2\\tan^2\\alpha$ bằng vế phải (điều phải chứng minh).',
                roleDescription: 'Thu gọn và kết luận',
              },
            ],
            pedagogicalTip:
              'Sử dụng hai hệ thức $1 - \\sin^2\\alpha = \\cos^2\\alpha$ và $\\frac{1}{\\cos^2\\alpha} = 1 + \\tan^2\\alpha$.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn xác theo Ví dụ 3b trang 30 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-6',
    lessonNumber: 6,
    name: 'Bài 6',
    topicTitle: 'Hệ thức lượng trong tam giác',
    chapter: 'Chương III – Hệ thức lượng trong tam giác',
    keySummary:
      'Định lí Côsin, định lí Sin, công thức tính độ dài đường trung tuyến, 5 công thức diện tích tam giác và ứng dụng giải tam giác, đo đạc thực tế (bám sát SBT Toán 10 KNTT trang 34–44).',
    practiceExams: [
      {
        id: 'de-on-bai-6-1',
        lessonId: 'bai-6',
        title: 'Đề ôn Bài 6 - Đề số 01',
        subtitle: 'Định lí Côsin, Định lí Sin, Trung tuyến & Diện tích tam giác (SBT KNTT trang 34–40)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3, 4 và các bài tập 3.5, 3.6, 3.7, 3.8, 3.9, 3.25–3.33 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b6_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 6: Định lí Côsin trong tam giác',
            prompt:
              'Cho tam giác $ABC$ có $BC = a, AC = b, AB = c$. Khẳng định nào sau đây là nội dung đúng của **định lí Côsin**?',
            options: [
              { key: 'A', content: '$a^2 = b^2 + c^2 - 2bc\\cos A$' },
              { key: 'B', content: '$a^2 = b^2 + c^2 + 2bc\\cos A$' },
              { key: 'C', content: '$a^2 = b^2 + c^2 - bc\\cos A$' },
              { key: 'D', content: '$\\cos A = \\frac{a^2 + b^2 - c^2}{2bc}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định lí Côsin trong tam giác $ABC$ (SBT trang 34): $a^2 = b^2 + c^2 - 2bc\\cos A$.',
            pedagogicalTip: 'Chú ý dấu trừ trước $2bc\\cos A$; khi $A = 90^\\circ$ thì định lí Côsin trở thành định lí Pythagore.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 6: Định lí Sin trong tam giác',
            prompt:
              'Cho tam giác $ABC$ có bán kính đường tròn ngoại tiếp là $R$. Khẳng định nào sau đây là đúng theo **định lí Sin**?',
            options: [
              { key: 'A', content: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$' },
              { key: 'B', content: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = R$' },
              { key: 'C', content: '$\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C} = 2R$' },
              { key: 'D', content: '$a\\sin A = b\\sin B = c\\sin C = 2R$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định lí Sin (SBT trang 34): $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$.',
            pedagogicalTip: 'Tỉ số giữa cạnh và sin góc đối diện bằng đường kính $2R$ (không phải bán kính $R$).',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 6: Tính cạnh bằng định lí Côsin',
            prompt:
              'Cho tam giác $ABC$ có $b = 7, c = 5$ và $\\cos A = \\frac{3}{5}$. Độ dài cạnh $a$ bằng:',
            options: [
              { key: 'A', content: '$4\\sqrt{2}$' },
              { key: 'B', content: '$6$' },
              { key: 'C', content: '$\\sqrt{74}$' },
              { key: 'D', content: '$8$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 49 + 25 - 2\\cdot 7\\cdot 5\\cdot \\frac{3}{5} = 32 \\Rightarrow a = 4\\sqrt{2}$.',
            pedagogicalTip: 'Tính $a^2$ trước rồi khai căn bậc hai.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 6: Tính diện tích tam giác bằng công thức Heron',
            prompt:
              'Cho tam giác $ABC$ có độ dài ba cạnh $a = 13, b = 14, c = 15$. Diện tích $S$ của tam giác $ABC$ bằng:',
            options: [
              { key: 'A', content: '$84$' },
              { key: 'B', content: '$42$' },
              { key: 'C', content: '$96$' },
              { key: 'D', content: '$168$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Nửa chu vi $p = \\frac{13 + 14 + 15}{2} = 21$. Theo công thức Heron: $S = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21\\cdot 8\\cdot 7\\cdot 6} = 84$.',
            pedagogicalTip: 'Bộ ba cạnh $(13, 14, 15)$ có diện tích nguyên rất đẹp $S = 84$ và đường cao ứng với cạnh $14$ bằng $12$.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 6: Tính độ dài đường trung tuyến',
            prompt:
              'Cho tam giác $ABC$ có $b = 8, c = 6$ và góc $\\widehat{A} = 60^\\circ$. Độ dài đường trung tuyến $m_a$ xuất phát từ đỉnh $A$ bằng:',
            options: [
              { key: 'A', content: '$\\sqrt{37}$' },
              { key: 'B', content: '$\\sqrt{13}$' },
              { key: 'C', content: '$5$' },
              { key: 'D', content: '$\\sqrt{74}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $a^2 = 8^2 + 6^2 - 2\\cdot 8\\cdot 6\\cos 60^\\circ = 52$. Khi đó $m_a^2 = \\frac{b^2 + c^2}{2} - \\frac{a^2}{4} = \\frac{100}{2} - \\frac{52}{4} = 37 \\Rightarrow m_a = \\sqrt{37}$.',
            pedagogicalTip: 'Tính $a^2$ từ định lí Côsin rồi thay trực tiếp vào công thức $m_a^2 = \\frac{b^2+c^2}{2} - \\frac{a^2}{4}$.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 6: Hệ thức đường cao và bán kính nội tiếp (Ví dụ 3a SBT trang 35)',
            prompt:
              'Trong tam giác $ABC$, gọi $h_a, h_b, h_c$ lần lượt là độ dài ba đường cao và $r$ là bán kính đường tròn nội tiếp. Đẳng thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\frac{1}{h_a} + \\frac{1}{h_b} + \\frac{1}{h_c} = \\frac{1}{r}$' },
              { key: 'B', content: '$\\frac{1}{h_a} + \\frac{1}{h_b} + \\frac{1}{h_c} = \\frac{2}{r}$' },
              { key: 'C', content: '$h_a + h_b + h_c = 3r$' },
              { key: 'D', content: '$\\frac{1}{h_a} + \\frac{1}{h_b} + \\frac{1}{h_c} = \\frac{1}{R}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 3a SBT trang 35: Vì $\\frac{1}{h_a} = \\frac{a}{2S}, \\frac{1}{h_b} = \\frac{b}{2S}, \\frac{1}{h_c} = \\frac{c}{2S}$ nên tổng của chúng bằng $\\frac{a+b+c}{2S} = \\frac{p}{pr} = \\frac{1}{r}$.',
            pedagogicalTip: 'Biểu diễn các đường cao và bán kính $r$ thông qua diện tích $S$.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 6: Hai đường trung tuyến vuông góc (Ví dụ 4 SBT trang 36)',
            prompt:
              'Cho tam giác $ABC$ có hai đường trung tuyến kẻ từ $A$ và $B$ vuông góc với nhau. Hệ thức liên hệ giữa ba cạnh $a, b, c$ của tam giác là:',
            options: [
              { key: 'A', content: '$a^2 + b^2 = 5c^2$' },
              { key: 'B', content: '$a^2 + b^2 = 3c^2$' },
              { key: 'C', content: '$b^2 + c^2 = 5a^2$' },
              { key: 'D', content: '$a^2 + b^2 = 2c^2$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 4 SBT trang 36: Gọi $G$ là trọng tâm $\\triangle ABC$. Tam giác $ABG$ vuông tại $G$ nên $GA^2 + GB^2 = AB^2 \\Leftrightarrow \\frac{4}{9}(m_a^2 + m_b^2) = c^2 \\Leftrightarrow a^2 + b^2 = 5c^2$.',
            pedagogicalTip: 'Hai trung tuyến kẻ từ $A$ và $B$ vuông góc $\\Leftrightarrow a^2 + b^2 = 5c^2$.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 6: Hệ thức tổng cotang ba góc (Bài 3.9b SBT trang 38)',
            prompt:
              'Trong tam giác $ABC$ có diện tích $S$, tổng $\\cot A + \\cot B + \\cot C$ bằng:',
            options: [
              { key: 'A', content: '$\\frac{a^2 + b^2 + c^2}{4S}$' },
              { key: 'B', content: '$\\frac{a^2 + b^2 + c^2}{2S}$' },
              { key: 'C', content: '$\\frac{a^2 + b^2 + c^2}{S}$' },
              { key: 'D', content: '$\\frac{a + b + c}{4R}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Bài 3.9b SBT trang 38 (lời giải trang 98): $\\cot A = \\frac{b^2+c^2-a^2}{4S}$, cộng ba đẳng thức tương tự được $\\cot A + \\cot B + \\cot C = \\frac{a^2 + b^2 + c^2}{4S}$.',
            pedagogicalTip: 'Sử dụng $\\cot A = \\frac{\\cos A}{\\sin A}$ kết hợp định lí Côsin và $S = \\frac{1}{2}bc\\sin A$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b6_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 6: Giải tam giác khi biết hai cạnh và góc xen giữa (Ví dụ 1 SBT trang 34)',
            prompt:
              'Cho tam giác $ABC$ có $AB = 5, AC = 8$ và góc $\\widehat{A} = 60^\\circ$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Độ dài cạnh $BC$ bằng $7$.',
                isCorrect: true,
                explanation: '$BC^2 = 5^2 + 8^2 - 2\\cdot 5\\cdot 8\\cos 60^\\circ = 49 \\Rightarrow BC = 7$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Diện tích của tam giác $ABC$ bằng $10\\sqrt{3}$.',
                isCorrect: true,
                explanation: '$S = \\frac{1}{2}\\cdot 5\\cdot 8\\sin 60^\\circ = 10\\sqrt{3}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Bán kính đường tròn ngoại tiếp tam giác $ABC$ là $R = \\frac{7\\sqrt{3}}{3}$.',
                isCorrect: true,
                explanation: '$R = \\frac{BC}{2\\sin A} = \\frac{7}{2\\cdot \\frac{\\sqrt{3}}{2}} = \\frac{7\\sqrt{3}}{3}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Độ dài đường cao $AH$ kẻ từ $A$ của tam giác $ABC$ bằng $\\frac{10\\sqrt{3}}{7}$.',
                isCorrect: false,
                explanation: '$AH = \\frac{2S}{BC} = \\frac{20\\sqrt{3}}{7}$.',
              },
            ],
            pedagogicalTip: 'Đừng quên hệ số $2$ trong công thức $h_a = \\frac{2S}{a}$.',
          },
          {
            id: 'b6_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 6: Giải tam giác khi biết ba cạnh (Bài 3.6 SBT trang 37)',
            prompt:
              'Cho tam giác $ABC$ có ba cạnh $a = 7, b = 8, c = 5$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Góc $\\widehat{A}$ của tam giác $ABC$ bằng $60^\\circ$.',
                isCorrect: true,
                explanation: '$\\cos A = \\frac{8^2 + 5^2 - 7^2}{2\\cdot 8\\cdot 5} = \\frac{1}{2} \\Rightarrow \\widehat{A} = 60^\\circ$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Nửa chu vi của tam giác $ABC$ là $p = 10$ và diện tích tam giác là $S = 10\\sqrt{3}$.',
                isCorrect: true,
                explanation: '$p = \\frac{7+8+5}{2} = 10$ và $S = \\sqrt{10\\cdot 3\\cdot 2\\cdot 5} = 10\\sqrt{3}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Bán kính đường tròn nội tiếp của tam giác $ABC$ bằng $\\sqrt{3}$.',
                isCorrect: true,
                explanation: '$r = \\frac{S}{p} = \\frac{10\\sqrt{3}}{10} = \\sqrt{3}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Độ dài đường trung tuyến $m_b$ xuất phát từ đỉnh $B$ bằng $3\\sqrt{3}$.',
                isCorrect: false,
                explanation: '$m_b^2 = \\frac{a^2 + c^2}{2} - \\frac{b^2}{4} = \\frac{49 + 25}{2} - \\frac{64}{4} = 21 \\Rightarrow m_b = \\sqrt{21}$.',
              },
            ],
            pedagogicalTip: 'Chú ý xác định đúng cạnh đối diện trong công thức đường trung tuyến $m_b^2 = \\frac{a^2+c^2}{2} - \\frac{b^2}{4}$.',
          },
        ],
        part3: [
          {
            id: 'b6_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 6: Tính bình phương cạnh từ định lí Côsin',
            prompt:
              'Cho tam giác $ABC$ có $AB = 3, AC = 4$ và $\\cos A = \\frac{1}{6}$. Tính bình phương độ dài cạnh $BC^2$.',
            acceptableAnswers: ['21'],
            explanation:
              'Áp dụng định lí Côsin: $BC^2 = AB^2 + AC^2 - 2\\cdot AB\\cdot AC\\cos A = 9 + 16 - 2\\cdot 3\\cdot 4\\cdot \\frac{1}{6} = 21$.',
            pedagogicalTip: 'Thay trực tiếp $\\cos A = \\frac{1}{6}$ vào định lí Côsin.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 6: Tính bán kính đường tròn nội tiếp',
            prompt:
              'Cho tam giác $ABC$ có ba cạnh $a = 6, b = 8, c = 10$. Tính bán kính đường tròn nội tiếp $r$ của tam giác $ABC$.',
            acceptableAnswers: ['2'],
            explanation:
              'Nửa chu vi $p = \\frac{6+8+10}{2} = 12$, diện tích $S = \\frac{1}{2}\\cdot 6\\cdot 8 = 24$. Suy ra $r = \\frac{S}{p} = \\frac{24}{12} = 2$.',
            pedagogicalTip: 'Trong tam giác vuông: $r = \\frac{a + b - c}{2} = \\frac{6 + 8 - 10}{2} = 2$.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 6: Tính bình phương đường trung tuyến',
            prompt:
              'Cho tam giác $ABC$ có $b = 7, c = 5, a = 6$. Tính bình phương độ dài đường trung tuyến $m_a^2$ xuất phát từ đỉnh $A$.',
            acceptableAnswers: ['28'],
            explanation:
              'Áp dụng công thức đường trung tuyến: $m_a^2 = \\frac{b^2 + c^2}{2} - \\frac{a^2}{4} = \\frac{49 + 25}{2} - \\frac{36}{4} = 37 - 9 = 28$.',
            pedagogicalTip: 'Thay đúng $a = 6$ vào số hạng $-\\frac{a^2}{4}$.',
            points: 0.5,
          },
          {
            id: 'b6_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 6: Hai trung tuyến vuông góc (Ví dụ 4 SBT trang 36)',
            prompt:
              'Cho tam giác $ABC$ có hai đường trung tuyến kẻ từ $A$ và $B$ vuông góc với nhau. Biết $a = 3, b = 4$. Tính bình phương độ dài cạnh $c^2$.',
            acceptableAnswers: ['5'],
            explanation:
              'Theo Ví dụ 4 SBT trang 36: $a^2 + b^2 = 5c^2 \\Rightarrow 5c^2 = 3^2 + 4^2 = 25 \\Rightarrow c^2 = 5$.',
            pedagogicalTip: 'Áp dụng hệ thức $a^2 + b^2 = 5c^2$ khi $m_a \\perp m_b$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b6_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 6: Chứng minh hệ thức đường cao và bán kính nội tiếp (Ví dụ 3a SBT trang 35)',
            problemStatement:
              'Cho tam giác $ABC$ có độ dài ba đường cao là $h_a, h_b, h_c$ và bán kính đường tròn nội tiếp là $r$. Chứng minh rằng $\\frac{1}{h_a} + \\frac{1}{h_b} + \\frac{1}{h_c} = \\frac{1}{r}$.',
            conclusionTarget:
              'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b6_d1_s1',
                originalIndex: 1,
                content:
                  'Gọi $S$ là diện tích và $p = \\frac{a + b + c}{2}$ là nửa chu vi của tam giác $ABC$.',
                roleDescription: 'Đặt diện tích S và nửa chu vi p',
              },
              {
                id: 'b6_d1_s2',
                originalIndex: 2,
                content:
                  'Từ công thức $S = \\frac{1}{2}ah_a = \\frac{1}{2}bh_b = \\frac{1}{2}ch_c$, suy ra $\\frac{1}{h_a} = \\frac{a}{2S},\\ \\frac{1}{h_b} = \\frac{b}{2S},\\ \\frac{1}{h_c} = \\frac{c}{2S}$.',
                roleDescription: 'Biểu diễn nghịch đảo các đường cao theo cạnh và S',
              },
              {
                id: 'b6_d1_s3',
                originalIndex: 3,
                content:
                  'Cộng vế theo vế ba đẳng thức trên: $\\frac{1}{h_a} + \\frac{1}{h_b} + \\frac{1}{h_c} = \\frac{a + b + c}{2S} = \\frac{p}{S}$.',
                roleDescription: 'Tính tổng nghịch đảo ba đường cao',
              },
              {
                id: 'b6_d1_s4',
                originalIndex: 4,
                content:
                  'Mặt khác $S = pr \\Rightarrow \\frac{p}{S} = \\frac{1}{r}$. Vậy $\\frac{1}{h_a} + \\frac{1}{h_b} + \\frac{1}{h_c} = \\frac{1}{r}$ (điều phải chứng minh).',
                roleDescription: 'Dùng công thức S = pr để kết luận',
              },
            ],
            pedagogicalTip:
              'Mọi hệ thức liên hệ giữa đường cao $h_a, h_b, h_c$ và bán kính $r, R$ đều thông qua diện tích $S$.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn theo Ví dụ 3a trang 35 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-6-2',
        lessonId: 'bai-6',
        title: 'Đề ôn Bài 6 - Đề số 02',
        subtitle: 'Ứng dụng giải tam giác vào đo đạc chiều cao & hàng hải (SBT KNTT trang 37–41)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 5 và các bài toán thực tiễn 3.10, 3.11, 3.12, 3.34–3.36 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b6_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 6: Bài toán đo chiều cao tháp (Ví dụ 5 SBT trang 37)',
            prompt:
              'Muốn đo chiều cao của một tòa tháp $CD$ khi không thể đến chân tháp, người ta chọn hai điểm $A, B$ trên mặt đất sao cho $A, B, D$ thẳng hàng ($B$ nằm giữa $A$ và $D$), với $AB = 15\\text{ m}$, góc ngắm $\\widehat{CAD} = 35^\\circ$ và $\\widehat{CBD} = 40^\\circ$. Chiều cao $CD$ của tòa tháp gần nhất với giá trị nào sau đây?',
            options: [
              { key: 'A', content: '$63{,}45\\text{ m}$' },
              { key: 'B', content: '$98{,}71\\text{ m}$' },
              { key: 'C', content: '$52{,}30\\text{ m}$' },
              { key: 'D', content: '$48{,}15\\text{ m}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 5 SBT trang 37: Trong $\\triangle ABC$, $\\widehat{ACB} = 40^\\circ - 35^\\circ = 5^\\circ$. Theo định lí Sin: $BC = \\frac{15\\sin 35^\\circ}{\\sin 5^\\circ} \\approx 98{,}71\\text{ m}$. Trong $\\triangle BCD$ vuông tại $D$: $CD = BC\\sin 40^\\circ \\approx 63{,}45\\text{ m}$.',
            pedagogicalTip: 'Dùng tính chất góc ngoài $\\widehat{CBD} = \\widehat{CAB} + \\widehat{ACB}$ để tìm góc $\\widehat{ACB}$ tại đỉnh tháp.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 6: Đo chiều cao cây trên sườn đồi (Bài 3.12 SBT trang 39)',
            prompt:
              'Một cái cây mọc thẳng đứng trên một sườn đồi nghiêng một góc $10^\\circ$ so với phương ngang. Từ một điểm cách gốc cây $31\\text{ m}$ về phía dưới dốc, người ta nhìn ngọn cây dưới một góc $40^\\circ$ so với mặt phẳng ngang. Chiều cao của cây gần nhất với giá trị nào sau đây?',
            options: [
              { key: 'A', content: '$20{,}23\\text{ m}$' },
              { key: 'B', content: '$25{,}18\\text{ m}$' },
              { key: 'C', content: '$18{,}50\\text{ m}$' },
              { key: 'D', content: '$22{,}40\\text{ m}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 3.12 SBT trang 98: Góc giữa tia ngắm và sườn đồi là $40^\\circ - 10^\\circ = 30^\\circ$, góc tại ngọn cây là $90^\\circ - 40^\\circ = 50^\\circ$. Áp dụng định lí Sin: $h = \\frac{31 \\cdot \\sin 30^\\circ}{\\sin 50^\\circ} \\approx 20{,}23\\text{ m}$.',
            pedagogicalTip: 'Tách góc ngắm $40^\\circ$ thành góc dốc $10^\\circ$ và góc trong tam giác $30^\\circ$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 6: Bài toán hàng hải tính khoảng cách (Bài 3.11 SBT trang 38)',
            prompt:
              'Một tàu thuỷ chạy trên biển từ cảng $A$ đến đảo $B$ cách $A$ $90\\text{ km}$, nhưng do sương mù tàu đi lệch hướng ban đầu một góc $20^\\circ$ được $50\\text{ km}$ đến vị trí $C$. Khoảng cách từ vị trí $C$ đến đảo $B$ gần nhất với:',
            options: [
              { key: 'A', content: '$46{,}29\\text{ km}$' },
              { key: 'B', content: '$40{,}00\\text{ km}$' },
              { key: 'C', content: '$52{,}15\\text{ km}$' },
              { key: 'D', content: '$38{,}50\\text{ km}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng định lí Côsin trong $\\triangle ABC$ có $AB = 90, AC = 50, \\widehat{A} = 20^\\circ$: $BC = \\sqrt{90^2 + 50^2 - 2\\cdot 90\\cdot 50\\cos 20^\\circ} \\approx 46{,}29\\text{ km}$.',
            pedagogicalTip: 'Biết hai cạnh $AB, AC$ và góc xen giữa $\\widehat{A}$, áp dụng ngay định lí Côsin.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 6: Tính đường chéo hình bình hành',
            prompt:
              'Cho hình bình hành $ABCD$ có $AB = 4, AD = 6$ và góc $\\widehat{BAD} = 60^\\circ$. Độ dài đường chéo $AC$ của hình bình hành bằng:',
            options: [
              { key: 'A', content: '$2\\sqrt{19}$' },
              { key: 'B', content: '$2\\sqrt{7}$' },
              { key: 'C', content: '$10$' },
              { key: 'D', content: '$4\\sqrt{3}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Trong hình bình hành $ABCD$, $\\widehat{ABC} = 180^\\circ - 60^\\circ = 120^\\circ$ và $BC = AD = 6$. Áp dụng định lí Côsin trong $\\triangle ABC$: $AC^2 = 4^2 + 6^2 - 2\\cdot 4\\cdot 6\\cos 120^\\circ = 76 \\Rightarrow AC = 2\\sqrt{19}$.',
            pedagogicalTip: 'Trong hình bình hành, góc đối diện với đường chéo $AC$ là góc $\\widehat{ABC} = 180^\\circ - \\widehat{BAD}$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 6: Nhận dạng tam giác nhờ định lí Sin và Côsin',
            prompt:
              'Cho tam giác $ABC$ thỏa mãn $\\frac{a}{\\cos A} = \\frac{b}{\\cos B}$. Tam giác $ABC$ là tam giác gì?',
            options: [
              { key: 'A', content: 'Tam giác cân tại $C$.' },
              { key: 'B', content: 'Tam giác đều.' },
              { key: 'C', content: 'Tam giác vuông tại $C$.' },
              { key: 'D', content: 'Tam giác cân tại $A$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Thay $a = 2R\\sin A, b = 2R\\sin B$ vào hệ thức được $\\tan A = \\tan B \\Rightarrow \\widehat{A} = \\widehat{B}$, nên $\\triangle ABC$ cân tại $C$.',
            pedagogicalTip: 'Dùng định lí Sin để chuyển các cạnh $a, b$ về $2R\\sin A, 2R\\sin B$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 6: Xét góc nhọn hay góc tù từ độ dài ba cạnh',
            prompt:
              'Cho tam giác $ABC$ có độ dài ba cạnh $a = 9, b = 6, c = 5$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Góc $\\widehat{A}$ là góc tù vì $b^2 + c^2 - a^2 < 0$.' },
              { key: 'B', content: 'Góc $\\widehat{A}$ là góc nhọn vì $b^2 + c^2 - a^2 > 0$.' },
              { key: 'C', content: 'Góc $\\widehat{A}$ là góc vuông.' },
              { key: 'D', content: 'Góc $\\widehat{B}$ là góc tù.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Góc lớn nhất đối diện với cạnh lớn nhất $a = 9$. Ta có $b^2 + c^2 - a^2 = 36 + 25 - 81 = -20 < 0 \\Rightarrow \\cos A < 0$, nên $\\widehat{A}$ là góc tù.',
            pedagogicalTip: 'Muốn xét tam giác có tù hay không, chỉ cần kiểm tra dấu của $b^2 + c^2 - a^2$ ứng với cạnh lớn nhất $a$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 6: Tính bán kính đường tròn nội tiếp',
            prompt:
              'Cho tam giác $ABC$ có $b = 10, c = 16$ và góc $\\widehat{A} = 60^\\circ$. Bán kính đường tròn nội tiếp $r$ của tam giác $ABC$ bằng:',
            options: [
              { key: 'A', content: '$2\\sqrt{3}$' },
              { key: 'B', content: '$4\\sqrt{3}$' },
              { key: 'C', content: '$3$' },
              { key: 'D', content: '$\\sqrt{3}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $a = \\sqrt{10^2 + 16^2 - 2\\cdot 10\\cdot 16\\cos 60^\\circ} = 14$. Nửa chu vi $p = \\frac{14 + 10 + 16}{2} = 20$. Diện tích $S = \\frac{1}{2}\\cdot 10\\cdot 16\\sin 60^\\circ = 40\\sqrt{3}$. Vậy $r = \\frac{S}{p} = 2\\sqrt{3}$.',
            pedagogicalTip: 'Kết hợp định lí Côsin để tìm cạnh thứ ba $a$ trước khi tính nửa chu vi $p$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 6: Tính cạnh theo định lí Sin khi biết hai góc',
            prompt:
              'Cho tam giác $ABC$ có $\\widehat{B} = 45^\\circ, \\widehat{C} = 75^\\circ$ và cạnh $BC = 12$. Độ dài cạnh $AC$ bằng:',
            options: [
              { key: 'A', content: '$4\\sqrt{6}$' },
              { key: 'B', content: '$6\\sqrt{6}$' },
              { key: 'C', content: '$8\\sqrt{3}$' },
              { key: 'D', content: '$12\\sqrt{2}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\widehat{A} = 180^\\circ - (45^\\circ + 75^\\circ) = 60^\\circ$. Theo định lí Sin: $AC = \\frac{BC\\sin B}{\\sin A} = \\frac{12\\sin 45^\\circ}{\\sin 60^\\circ} = \\frac{12\\cdot \\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{3}}{2}} = 4\\sqrt{6}$.',
            pedagogicalTip: 'Tính góc $\\widehat{A} = 180^\\circ - (\\widehat{B} + \\widehat{C})$ trước khi áp dụng định lí Sin.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b6_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 6: Bài toán hai tàu thuỷ xuất phát từ một cảng (Bài 3.10, 3.36 SBT trang 38–41)',
            prompt:
              'Một tàu tuần tra xuất phát từ cảng $A$ đi theo hướng Bắc chếch Đông $30^\\circ$ với vận tốc $40\\text{ km/h}$. Cùng lúc đó, một tàu hàng xuất phát từ cảng $A$ đi theo hướng Nam chếch Đông $30^\\circ$ với vận tốc $30\\text{ km/h}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Góc tạo bởi hai hướng đi của hai tàu là $120^\\circ$.',
                isCorrect: true,
                explanation:
                  'Hai hướng Bắc - Nam ngược nhau ($180^\\circ$), hai tàu cùng lệch về phía Đông mỗi bên $30^\\circ$ nên góc giữa hai hướng đi là $180^\\circ - 30^\\circ - 30^\\circ = 120^\\circ$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Sau $1{,}5$ giờ, tàu tuần tra đi được $60\\text{ km}$ và tàu hàng đi được $45\\text{ km}$.',
                isCorrect: true,
                explanation: '$s_1 = 40 \\cdot 1{,}5 = 60\\text{ km}$ và $s_2 = 30 \\cdot 1{,}5 = 45\\text{ km}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Khoảng cách giữa hai tàu sau $1{,}5$ giờ là $15\\sqrt{37}\\text{ km}$.',
                isCorrect: true,
                explanation:
                  '$d = \\sqrt{60^2 + 45^2 - 2\\cdot 60\\cdot 45\\cos 120^\\circ} = 15\\sqrt{16 + 9 + 12} = 15\\sqrt{37}\\text{ km}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Diện tích tam giác tạo bởi cảng $A$ và vị trí hai tàu sau $1{,}5$ giờ bằng $675\\text{ km}^2$.',
                isCorrect: false,
                explanation: '$S = \\frac{1}{2} \\cdot 60 \\cdot 45 \\cdot \\sin 120^\\circ = 675\\sqrt{3}\\text{ km}^2$.',
              },
            ],
            pedagogicalTip: 'Vẽ trục Bắc - Nam và Đông - Tây để xác định chính xác góc hợp bởi hai hướng đi.',
          },
          {
            id: 'b6_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 6: Tứ giác nội tiếp và định lí Côsin',
            prompt:
              'Cho tứ giác lồi $ABCD$ nội tiếp đường tròn có $AB = 3, BC = 4, CD = 5, DA = 6$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Vì tứ giác $ABCD$ nội tiếp nên $\\widehat{B} + \\widehat{D} = 180^\\circ$, suy ra $\\cos D = -\\cos B$.',
                isCorrect: true,
                explanation: 'Hai góc đối của tứ giác nội tiếp bù nhau nên $\\cos(180^\\circ - B) = -\\cos B$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Áp dụng định lí Côsin trong hai tam giác $ABC$ và $ADC$ ta có $25 - 24\\cos B = 61 + 60\\cos B$.',
                isCorrect: true,
                explanation:
                  '$AC^2 = 3^2 + 4^2 - 2\\cdot 3\\cdot 4\\cos B = 25 - 24\\cos B$ và $AC^2 = 5^2 + 6^2 - 2\\cdot 5\\cdot 6\\cos D = 61 + 60\\cos B$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giá trị của $\\cos B$ bằng $-\\frac{3}{7}$.',
                isCorrect: true,
                explanation: 'Từ $25 - 24\\cos B = 61 + 60\\cos B \\Leftrightarrow 84\\cos B = -36 \\Leftrightarrow \\cos B = -\\frac{3}{7}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Bình phương độ dài đường chéo $AC^2$ bằng $35$.',
                isCorrect: false,
                explanation: '$AC^2 = 25 - 24\\cdot \\left(-\\frac{3}{7}\\right) = \\frac{247}{7} \\approx 35{,}29$.',
              },
            ],
            pedagogicalTip: 'Trong tứ giác nội tiếp, tính chất $\\cos D = -\\cos B$ là chìa khóa để lập phương trình tìm $\\cos B$.',
          },
        ],
        part3: [
          {
            id: 'b6_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 6: Tính cạnh thứ ba khi biết hai cạnh và góc xen giữa',
            prompt:
              'Cho tam giác $ABC$ có $b = 10, c = 16$ và góc $\\widehat{A} = 60^\\circ$. Tính độ dài cạnh $a$.',
            acceptableAnswers: ['14'],
            explanation:
              'Áp dụng định lí Côsin: $a = \\sqrt{10^2 + 16^2 - 2\\cdot 10\\cdot 16\\cos 60^\\circ} = \\sqrt{196} = 14$.',
            pedagogicalTip: 'Bộ ba $(10, 16, 14)$ là bộ cạnh tam giác có góc $60^\\circ$ đối diện cạnh $14$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 6: Tính đường cao của tam giác',
            prompt:
              'Cho tam giác $ABC$ có ba cạnh $a = 14, b = 10, c = 16$ (với $\\widehat{A} = 60^\\circ$). Tính độ dài đường cao $h_a$ ứng với cạnh $a$ (làm tròn đến hàng phần mười).',
            acceptableAnswers: ['9,9', '9.9'],
            explanation:
              'Diện tích $S = \\frac{1}{2}\\cdot 10\\cdot 16\\sin 60^\\circ = 40\\sqrt{3}$. Khi đó $h_a = \\frac{2S}{a} = \\frac{80\\sqrt{3}}{14} = \\frac{40\\sqrt{3}}{7} \\approx 9{,}9$.',
            pedagogicalTip: 'Tính diện tích $S$ trước rồi suy ra $h_a = \\frac{2S}{a}$.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 6: Đo chiều cao cột cờ trên tòa nhà',
            prompt:
              'Để đo chiều cao của một cột cờ trên đỉnh một tòa nhà cao $20\\text{ m}$, một người đứng cách chân tòa nhà $30\\text{ m}$ nhìn thấy đỉnh cột cờ dưới góc nâng $45^\\circ$ so với phương ngang. Tính chiều cao của cột cờ (đơn vị: mét).',
            acceptableAnswers: ['10'],
            explanation:
              'Tổng chiều cao của tòa nhà và cột cờ là $H = 30 \\cdot \\tan 45^\\circ = 30\\text{ m}$. Vậy chiều cao cột cờ là $30 - 20 = 10\\text{ m}$.',
            pedagogicalTip: 'Trừ đi chiều cao của tòa nhà sau khi tính tổng độ cao từ mặt đất.',
            points: 0.5,
          },
          {
            id: 'b6_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 6: Khoảng cách từ đỉnh đến trọng tâm tam giác',
            prompt:
              'Cho tam giác $ABC$ có $AB = 6, AC = 8, BC = 10$. Gọi $G$ là trọng tâm tam giác $ABC$. Tính giá trị của $9AG^2$.',
            acceptableAnswers: ['100'],
            explanation:
              'Tam giác $ABC$ vuông tại $A$ nên trung tuyến $AM = \\frac{BC}{2} = 5$. Vì $AG = \\frac{2}{3}AM \\Rightarrow 3AG = 2AM = 10 \\Rightarrow 9AG^2 = 100$.',
            pedagogicalTip: 'Trọng tâm $G$ cách đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b6_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 6: Quy trình giải bài toán đo chiều cao tháp (Ví dụ 5 SBT trang 37)',
            problemStatement:
              'Muốn đo chiều cao của tháp $CD$ mà không thể đến chân tháp, người ta chọn hai điểm $A, B$ trên mặt đất sao cho $A, B, D$ thẳng hàng ($B$ nằm giữa $A$ và $D$), đo được $AB = 15\\text{ m}, \\widehat{CAD} = 35^\\circ, \\widehat{CBD} = 40^\\circ$.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý để tính chiều cao $CD$ của tòa tháp.',
            steps: [
              {
                id: 'b6_d2_s1',
                originalIndex: 1,
                content:
                  'Trong tam giác $ABC$, sử dụng tính chất góc ngoài tại đỉnh $B$ để tính góc $\\widehat{ACB} = \\widehat{CBD} - \\widehat{CAB} = 40^\\circ - 35^\\circ = 5^\\circ$.',
                roleDescription: 'Tính góc ACB tại đỉnh tháp',
              },
              {
                id: 'b6_d2_s2',
                originalIndex: 2,
                content:
                  'Áp dụng định lí Sin trong tam giác $ABC$: $\\frac{BC}{\\sin\\widehat{CAB}} = \\frac{AB}{\\sin\\widehat{ACB}} \\Rightarrow BC = \\frac{15\\cdot \\sin 35^\\circ}{\\sin 5^\\circ} \\approx 98{,}71\\text{ m}$.',
                roleDescription: 'Dùng định lí Sin trong tam giác ABC để tính BC',
              },
              {
                id: 'b6_d2_s3',
                originalIndex: 3,
                content:
                  'Xét tam giác vuông $BCD$ vuông tại $D$, ta có hệ thức cạnh và góc: $CD = BC \\cdot \\sin\\widehat{CBD} = BC \\cdot \\sin 40^\\circ$.',
                roleDescription: 'Thiết lập công thức tính CD trong tam giác vuông BCD',
              },
              {
                id: 'b6_d2_s4',
                originalIndex: 4,
                content:
                  'Thay $BC \\approx 98{,}71\\text{ m}$ vào công thức, tính được chiều cao của tháp $CD \\approx 98{,}71 \\cdot \\sin 40^\\circ \\approx 63{,}45\\text{ m}$.',
                roleDescription: 'Thay số và kết luận chiều cao tháp',
              },
            ],
            pedagogicalTip:
              'Phương pháp hai điểm ngắm thẳng hàng luôn giải qua 2 bước: định lí Sin trong $\\triangle ABC$ rồi tỉ số lượng giác trong $\\triangle BCD$ vuông.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn theo Ví dụ 5 trang 37 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
];
