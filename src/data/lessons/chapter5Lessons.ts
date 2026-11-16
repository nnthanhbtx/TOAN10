import { LessonCatalogItem } from '../../types/exam';

export const CHAPTER_5_LESSONS: LessonCatalogItem[] = [
  {
    id: 'bai-12',
    lessonNumber: 12,
    name: 'Bài 12',
    topicTitle: 'Số gần đúng và sai số',
    chapter: 'Chương V – Các số đặc trưng của mẫu số liệu không ghép nhóm',
    keySummary:
      'Số đúng và số gần đúng, sai số tuyệt đối Δ_a = |ā - a|, độ chính xác d, sai số tương đối δ_a ≤ d/|a|, quy tròn số gần đúng theo độ chính xác d và ứng dụng kiểm định đo lường (bám sát SBT Toán 10 KNTT trang 72–75).',
    practiceExams: [
      {
        id: 'de-on-bai-12-1',
        lessonId: 'bai-12',
        title: 'Đề ôn Bài 12 - Đề số 01',
        subtitle: 'Sai số tuyệt đối, độ chính xác, sai số tương đối & quy tròn số gần đúng (SBT KNTT trang 72–74)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 5.1, 5.2, 5.3, 5.4, 5.5 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b12_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 12: Định nghĩa sai số tuyệt đối và độ chính xác',
            prompt:
              'Nếu $a$ là số gần đúng của số đúng $\\bar{a}$ thì **sai số tuyệt đối** của số gần đúng $a$ được xác định bởi công thức:',
            options: [
              { key: 'A', content: '$\\Delta_a = |\\bar{a} - a|$' },
              { key: 'B', content: '$\\Delta_a = \\bar{a} - a$' },
              { key: 'C', content: '$\\Delta_a = \\frac{|\\bar{a} - a|}{|a|}$' },
              { key: 'D', content: '$\\Delta_a = a - \\bar{a}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định nghĩa Bài 12 (SBT trang 72): Sai số tuyệt đối của số gần đúng $a$ là $\\Delta_a = |\\bar{a} - a|$ phản ánh mức độ sai lệch giữa số đúng $\\bar{a}$ và số gần đúng $a$.',
            pedagogicalTip: 'Sai số tuyệt đối luôn không âm ($\\Delta_a \\ge 0$).',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 12: Ý nghĩa của kí hiệu ā = a ± d',
            prompt:
              'Khi viết số đúng dưới dạng $\\bar{a} = a \\pm d$ (với $d > 0$), khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$a - d \\le \\bar{a} \\le a + d$ và $d$ gọi là độ chính xác của số gần đúng $a$.' },
              { key: 'B', content: '$\\bar{a}$ chỉ nhận một trong hai giá trị $a - d$ hoặc $a + d$.' },
              { key: 'C', content: '$d$ là sai số tương đối của số gần đúng $a$.' },
              { key: 'D', content: '$\\Delta_a > d$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo SBT trang 72: Nếu $\\Delta_a = |\\bar{a} - a| \\le d$ thì $a - d \\le \\bar{a} \\le a + d$, ta viết $\\bar{a} = a \\pm d$ và gọi $d$ là độ chính xác của số gần đúng.',
            pedagogicalTip: 'Độ chính xác $d$ là một chặn trên của sai số tuyệt đối $\\Delta_a$.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 12: Đánh giá sai số tương đối (Ví dụ 1 SBT trang 72)',
            prompt:
              'Cho số gần đúng $a$ với độ chính xác $d$. Công thức dùng để đánh giá **sai số tương đối** $\\delta_a$ của số gần đúng $a$ là:',
            options: [
              { key: 'A', content: '$\\delta_a \\le \\frac{d}{|a|}$' },
              { key: 'B', content: '$\\delta_a \\le \\frac{|a|}{d}$' },
              { key: 'C', content: '$\\delta_a = d \\cdot |a|$' },
              { key: 'D', content: '$\\delta_a \\le d$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Sai số tương đối là $\\delta_a = \\frac{\\Delta_a}{|a|}$. Vì $\\Delta_a \\le d$ nên $\\delta_a \\le \\frac{d}{|a|}$ (SBT trang 72).',
            pedagogicalTip: 'Tỉ số $\\frac{d}{|a|}$ càng nhỏ thì chất lượng của phép đo đạc hay tính toán càng cao.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 12: Quy tắc làm tròn số gần đúng theo độ chính xác d (Ví dụ 2 SBT trang 73)',
            prompt:
              'Cho số gần đúng $a = 167{,}23$ với độ chính xác $d = 0{,}07$ (Ví dụ 2 SBT trang 73). Số quy tròn của $a$ là:',
            options: [
              { key: 'A', content: '$167{,}2$' },
              { key: 'B', content: '$167{,}23$' },
              { key: 'C', content: '$167$' },
              { key: 'D', content: '$170$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 2 SBT trang 73: Hàng lớn nhất của độ chính xác $d = 0{,}07$ là hàng phần trăm, nên ta quy tròn $a = 167{,}23$ đến hàng phần mười (hàng lớn hơn kế tiếp) được $167{,}2$.',
            pedagogicalTip: 'Quy tắc vàng: Hàng lớn nhất của $d$ là hàng nào thì quy tròn số $a$ đến hàng đứng ngay bên trái hàng đó.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 12: Quy tròn số nguyên lớn theo độ chính xác d (Bài 5.4 SBT trang 74)',
            prompt:
              'Cho số gần đúng $a = 23\\,167$ với độ chính xác $d = 200$. Số quy tròn của $a$ là:',
            options: [
              { key: 'A', content: '$23\\,000$' },
              { key: 'B', content: '$23\\,200$' },
              { key: 'C', content: '$23\\,170$' },
              { key: 'D', content: '$20\\,000$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hàng lớn nhất của độ chính xác $d = 200$ là hàng trăm, nên ta quy tròn $a = 23\\,167$ đến hàng nghìn được $23\\,000$.',
            pedagogicalTip: 'Khi $d = 200$ (hàng trăm), phải quy tròn $a$ đến hàng nghìn (không phải hàng trăm!).',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 12: Nhận biết số đúng và số gần đúng (Bài 5.1 SBT trang 73)',
            prompt:
              'Trong các con số dưới đây, con số nào là **số đúng**?',
            options: [
              { key: 'A', content: 'Số học sinh của lớp 10A1 là $42$ học sinh.' },
              { key: 'B', content: 'Bán kính Trái Đất là $6\\,371\\text{ km}$.' },
              { key: 'C', content: 'Chiều dài một cây cầu đo được là $450{,}5\\text{ m}$.' },
              { key: 'D', content: 'Giá trị của $\\pi$ lấy bằng $3{,}14$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Số học sinh của một lớp được đếm chính xác là số nguyên $42$ (số đúng), còn các phép đo độ dài và xấp xỉ $\\pi \\approx 3{,}14$ đều là số gần đúng.',
            pedagogicalTip: 'Kết quả phép đếm hữu hạn các phần tử rời rạc là số đúng; kết quả phép đo đại lượng liên tục là số gần đúng.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 12: Xác định độ chính xác của số quy tròn (Ví dụ 3 SBT trang 73)',
            prompt:
              'Khi quy tròn số đúng $\\bar{a} = \\sqrt{2} = 1{,}4142135\\dots$ đến hàng phần trăm, ta được số gần đúng $a = 1{,}41$. Độ chính xác $d$ của phép quy tròn này có thể lấy bằng:',
            options: [
              { key: 'A', content: '$0{,}005$' },
              { key: 'B', content: '$0{,}05$' },
              { key: 'C', content: '$0{,}1$' },
              { key: 'D', content: '$0{,}0005$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khi quy tròn số đúng đến hàng phần trăm ($0{,}01$), sai số tuyệt đối không vượt quá nửa đơn vị của hàng quy tròn, tức là $d = \\frac{0{,}01}{2} = 0{,}005$.',
            pedagogicalTip: 'Quy tròn số đúng đến hàng nào thì độ chính xác bằng nửa đơn vị của hàng đó.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 12: Bài toán điện áp thực tế (Bài 5.2 SBT trang 74)',
            prompt:
              'Trên bao bì của một thiết bị điện có ghi điện áp hoạt động là $120\\text{ V} \\pm 5\\%$ (Bài 5.2 SBT trang 74). Độ chính xác $d$ của điện áp thiết bị đó là:',
            options: [
              { key: 'A', content: '$6\\text{ V}$' },
              { key: 'B', content: '$5\\text{ V}$' },
              { key: 'C', content: '$12\\text{ V}$' },
              { key: 'D', content: '$7{,}5\\text{ V}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Độ chính xác $d = 120 \\cdot 5\\% = 120 \\cdot 0{,}05 = 6\\text{ V}$, tức là điện áp hoạt động nằm trong đoạn $[114\\text{ V}; 126\\text{ V}]$.',
            pedagogicalTip: 'Khi biết số gần đúng $a$ và sai số tương đối $\\delta_a$, độ chính xác là $d = |a| \\cdot \\delta_a$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b12_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 12: So sánh độ chính xác của hai phép đo (Ví dụ 1 & Bài 5.3 SBT trang 72–74)',
            prompt:
              'Một người đo chiều dài một cây cầu được $\\bar{l}_1 = 152\\text{ m} \\pm 0{,}2\\text{ m}$ và người khác đo chiều cao một ngôi nhà được $\\bar{l}_2 = 15\\text{ m} \\pm 0{,}03\\text{ m}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Phép đo cây cầu có độ chính xác $d_1 = 0{,}2\\text{ m}$, phép đo ngôi nhà có độ chính xác $d_2 = 0{,}03\\text{ m}$.',
                isCorrect: true,
                explanation: 'Đọc trực tiếp từ kí hiệu $a \\pm d$: $d_1 = 0{,}2\\text{ m}$ và $d_2 = 0{,}03\\text{ m}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Sai số tương đối của phép đo cây cầu không vượt quá $\\frac{0{,}2}{152} \\approx 0{,}132\\%$.',
                isCorrect: true,
                explanation: '$\\delta_1 \\le \\frac{0{,}2}{152} = \\frac{1}{760} \\approx 0{,}00132 = 0{,}132\\%$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Sai số tương đối của phép đo ngôi nhà không vượt quá $0{,}2\\%$.',
                isCorrect: true,
                explanation: '$\\delta_2 \\le \\frac{0{,}03}{15} = 0{,}002 = 0{,}2\\%$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Phép đo ngôi nhà có chất lượng (độ chính xác tương đối) tốt hơn phép đo cây cầu vì $0{,}03\\text{ m} < 0{,}2\\text{ m}$.',
                isCorrect: false,
                explanation: 'Muốn so sánh chất lượng hai phép đo khác đại lượng phải so sánh **sai số tương đối**: vì $0{,}132\\% < 0{,}2\\%$ nên phép đo cây cầu chính xác hơn!',
              },
            ],
            pedagogicalTip: 'Không được so sánh trực tiếp độ chính xác $d$; phép đo nào có sai số tương đối $\\frac{d}{|a|}$ nhỏ hơn thì chính xác hơn.',
          },
          {
            id: 'b12_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 12: Quy tròn số gần đúng và ước lượng sai số (Bài 5.4, 5.5 SBT trang 74)',
            prompt:
              'Cho số đúng $\\bar{a} = \\frac{10}{7} = 1{,}428571\\dots$ và số gần đúng $b = 45\\,678$ với độ chính xác $d = 300$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Nếu lấy $a = 1{,}43$ làm giá trị gần đúng của $\\bar{a} = \\frac{10}{7}$ thì sai số tuyệt đối $\\Delta_a = \\left|\\frac{10}{7} - 1{,}43\\right| = \\frac{1}{700} < 0{,}0015$.',
                isCorrect: true,
                explanation: '$\\left|\\frac{10}{7} - \\frac{143}{100}\\right| = \\left|\\frac{1000 - 1001}{700}\\right| = \\frac{1}{700} \\approx 0{,}00143 < 0{,}0015$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Hàng lớn nhất của độ chính xác $d = 300$ đối với số gần đúng $b = 45\\,678$ là hàng trăm.',
                isCorrect: true,
                explanation: 'Trong số $d = 300$, chữ số khác $0$ đầu tiên từ trái sang là chữ số $3$ ở hàng trăm.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Số quy tròn của $b = 45\\,678$ với độ chính xác $d = 300$ là $45\\,700$.',
                isCorrect: false,
                explanation: 'Vì hàng lớn nhất của $d = 300$ là hàng trăm nên phải quy tròn $b$ đến **hàng nghìn**, được $46\\,000$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Sai số tương đối của số gần đúng $b = 45\\,678$ với $d = 300$ không vượt quá $0{,}66\\%$.',
                isCorrect: true,
                explanation: '$\\delta_b \\le \\frac{300}{45678} \\approx 0{,}006568 \\approx 0{,}657\\% < 0{,}66\\%$.',
              },
            ],
            pedagogicalTip: 'Luôn xác định hàng lớn nhất của $d$ rồi lùi sang trái 1 hàng để quy tròn.',
          },
        ],
        part3: [
          {
            id: 'b12_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 12: Quy tròn số thập phân theo độ chính xác d',
            prompt:
              'Cho số gần đúng $a = 38{,}4752$ với độ chính xác $d = 0{,}004$. Hãy viết số quy tròn của số $a$.',
            acceptableAnswers: ['38,48', '38.48'],
            explanation:
              'Hàng lớn nhất của $d = 0{,}004$ là hàng phần nghìn, nên ta quy tròn $a$ đến hàng phần trăm được $38{,}48$.',
            pedagogicalTip: 'Chữ số hàng phần nghìn của $a$ là $5$ nên tăng chữ số hàng phần trăm từ $7$ lên $8$.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 12: Quy tròn số nguyên theo độ chính xác d',
            prompt:
              'Cho số gần đúng $a = 1\\,548\\,260$ với độ chính xác $d = 400$. Số quy tròn của $a$ bằng bao nhiêu?',
            acceptableAnswers: ['1548000', '1 548 000'],
            explanation:
              'Hàng lớn nhất của $d = 400$ là hàng trăm, nên ta quy tròn $a$ đến hàng nghìn được $1\\,548\\,000$.',
            pedagogicalTip: 'Viết liền các chữ số $1548000$.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 12: Tính sai số tương đối theo phần trăm',
            prompt:
              'Một phép đo độ dài cho kết quả $\\bar{a} = 250\\text{ m} \\pm 0{,}5\\text{ m}$. Sai số tương đối tối đa của phép đo này bằng bao nhiêu phần trăm (viết số thập phân, không ghi kí hiệu %)?',
            acceptableAnswers: ['0,2', '0.2'],
            explanation:
              'Ta có $\\delta_a \\le \\frac{0{,}5}{250} = 0{,}002 = 0{,}2\\%$.',
            pedagogicalTip: 'Nhân $\\frac{d}{|a|}$ với $100$ để đổi ra đơn vị phần trăm.',
            points: 0.5,
          },
          {
            id: 'b12_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 12: Tính độ chính xác từ sai số tương đối',
            prompt:
              'Một bao gạo đóng gói tự động có khối lượng ghi trên bao bì là $50\\text{ kg}$ với sai số tương đối không vượt quá $0{,}5\\%$. Độ chính xác $d$ của khối lượng bao gạo bằng bao nhiêu kilôgam (viết dưới dạng số thập phân)?',
            acceptableAnswers: ['0,25', '0.25'],
            explanation:
              'Ta có $d = 50 \\cdot 0{,}5\\% = 50 \\cdot 0{,}005 = 0{,}25\\text{ kg}$.',
            pedagogicalTip: '$d = a \\cdot \\delta_a$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b12_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 12: Quy trình tìm số quy tròn và ước lượng sai số tương đối (Ví dụ 2 SBT trang 73)',
            problemStatement:
              'Cho kết quả đo diện tích một thửa ruộng là $\\bar{S} = 1\\,245{,}67\\text{ m}^2 \\pm 0{,}35\\text{ m}^2$. Hãy tìm số quy tròn của $S = 1\\,245{,}67$ và đánh giá sai số tương đối của kết quả đo ban đầu.',
            conclusionTarget:
              'Hãy sắp xếp các bước thực hiện sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b12_d1_s1',
                originalIndex: 1,
                content:
                  'Xác định số gần đúng $S = 1\\,245{,}67$ và độ chính xác $d = 0{,}35$.',
                roleDescription: 'Xác định số gần đúng S và độ chính xác d',
              },
              {
                id: 'b12_d1_s2',
                originalIndex: 2,
                content:
                  'Vì hàng lớn nhất của độ chính xác $d = 0{,}35$ là hàng phần mười, ta quy tròn số $S = 1\\,245{,}67$ đến hàng đơn vị (hàng kế tiếp bên trái) được số quy tròn là $1\\,246$.',
                roleDescription: 'Xác định hàng của d và tìm số quy tròn',
              },
              {
                id: 'b12_d1_s3',
                originalIndex: 3,
                content:
                  'Áp dụng công thức đánh giá sai số tương đối: $\\delta_S \\le \\frac{d}{|S|} = \\frac{0{,}35}{1\\,245{,}67}$.',
                roleDescription: 'Thiết lập bất đẳng thức đánh giá sai số tương đối',
              },
              {
                id: 'b12_d1_s4',
                originalIndex: 4,
                content:
                  'Tính toán tỉ số trên được $\\delta_S \\le 0{,}000281 \\approx 0{,}028\\%$, vậy phép đo có sai số tương đối không vượt quá $0{,}028\\%$.',
                roleDescription: 'Tính giá trị phần trăm và kết luận',
              },
            ],
            pedagogicalTip:
              'Khi $d = 0{,}35$ có hàng lớn nhất là hàng phần mười, số quy tròn phải làm tròn đến hàng đơn vị.',
            teacherAnalysis:
              'Quy trình chuẩn theo Ví dụ 2 trang 73 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-12-2',
        lessonId: 'bai-12',
        title: 'Đề ôn Bài 12 - Đề số 02',
        subtitle: 'Kiểm định đo lường thực tế & ước lượng sai số trong tính toán (SBT KNTT trang 73–75)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Bài tập 5.2, 5.5, 5.6 (kiểm định trụ bơm xăng tại trạm xăng) và các câu hỏi trắc nghiệm Chương V trong SBT Toán 10 KNTT.',
        part1: [
          {
            id: 'b12_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 12: Bài toán kiểm định trụ bơm xăng (Bài 5.6 SBT trang 74)',
            prompt:
              'Theo quy định kiểm định đo lường tại trạm xăng, sai số tương đối của trụ bơm xăng không được vượt quá $0{,}5\\%$. Trong một lần kiểm định, nhân viên bơm $50\\text{ lít}$ xăng (trên đồng hồ hiển thị) vào bình chuẩn thì thể tích thực tế đo được là $50{,}3\\text{ lít}$ (Bài 5.6 SBT trang 74). Kết luận nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Trụ bơm không đạt chuẩn vì thể tích cho phép phải nằm trong đoạn $[49{,}75; 50{,}25]$ lít.' },
              { key: 'B', content: 'Trụ bơm đạt chuẩn vì $50{,}3\\text{ lít} > 50\\text{ lít}$ có lợi cho khách hàng.' },
              { key: 'C', content: 'Trụ bơm đạt chuẩn vì sai số tuyệt đối $0{,}3\\text{ lít} < 0{,}5\\text{ lít}$.' },
              { key: 'D', content: 'Trụ bơm không đạt chuẩn vì sai số tương đối là $3\\%$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.6 SBT trang 125: Độ chính xác tối đa cho phép với $50\\text{ lít}$ là $d = 50 \\cdot 0{,}5\\% = 0{,}25\\text{ lít}$, nên thể tích thực phải thuộc $[49{,}75; 50{,}25]$ lít. Vì $50{,}3 \\notin [49{,}75; 50{,}25]$ (sai số tương đối $0{,}6\\% > 0{,}5\\%$) nên trụ bơm không đạt tiêu chuẩn kiểm định.',
            pedagogicalTip: 'Đừng nhầm $0{,}5\\%$ (sai số tương đối) với $0{,}5\\text{ lít}$ (sai số tuyệt đối). Với $50\\text{ lít}$ thì $0{,}5\\%$ ứng với $0{,}25\\text{ lít}$.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 12: Quy tròn điện áp có độ chính xác thập phân (Bài 5.2 SBT trang 74)',
            prompt:
              'Một thiết bị điện có ghi điện áp định mức là $120 \\pm 7{,}5\\text{ V}$ (Bài 5.2 SBT trang 74). Số quy tròn của $120$ theo độ chính xác $d = 7{,}5$ là:',
            options: [
              { key: 'A', content: '$120$' },
              { key: 'B', content: '$130$' },
              { key: 'C', content: '$100$' },
              { key: 'D', content: '$128$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.2 SBT trang 125: Hàng lớn nhất của độ chính xác $d = 7{,}5$ là hàng đơn vị, nên ta quy tròn $120$ đến hàng chục được $120$.',
            pedagogicalTip: 'Khi $d = 7{,}5$, chữ số đầu tiên bên trái khác $0$ là $7$ thuộc hàng đơn vị, nên quy tròn đến hàng chục.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 12: Xác định khoảng chứa số đúng từ số quy tròn',
            prompt:
              'Một số đúng $\\bar{a}$ sau khi được quy tròn đến hàng phần nghìn thì cho số gần đúng là $a = 2{,}548$. Khoảng chứa số đúng $\\bar{a}$ là:',
            options: [
              { key: 'A', content: '$[2{,}5475; 2{,}5485]$' },
              { key: 'B', content: '$[2{,}547; 2{,}549]$' },
              { key: 'C', content: '$[2{,}548; 2{,}549]$' },
              { key: 'D', content: '$[2{,}543; 2{,}553]$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Quy tròn số đúng đến hàng phần nghìn ($0{,}001$) thì độ chính xác là $d = 0{,}0005$, do đó $\\bar{a} \\in [2{,}548 - 0{,}0005; 2{,}548 + 0{,}0005] = [2{,}5475; 2{,}5485]$.',
            pedagogicalTip: 'Sai số quy tròn không vượt quá nửa đơn vị của hàng quy tròn ($0{,}0005$).',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 12: Sai số tuyệt đối của diện tích hình chữ nhật',
            prompt:
              'Một tấm kính hình vuông có cạnh đo được là $\\bar{x} = 10\\text{ cm} \\pm 0{,}1\\text{ cm}$. Khi tính diện tích $S = 10^2 = 100\\text{ cm}^2$, diện tích đúng $\\bar{S} = \\bar{x}^2$ nằm trong đoạn nào sau đây?',
            options: [
              { key: 'A', content: '$[98{,}01; 102{,}01]\\text{ cm}^2$' },
              { key: 'B', content: '$[99{,}9; 100{,}1]\\text{ cm}^2$' },
              { key: 'C', content: '$[99; 101]\\text{ cm}^2$' },
              { key: 'D', content: '$[99{,}99; 100{,}01]\\text{ cm}^2$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $9{,}9 \\le \\bar{x} \\le 10{,}1$ nên $9{,}9^2 \\le \\bar{x}^2 \\le 10{,}1^2 \\Leftrightarrow 98{,}01 \\le \\bar{S} \\le 102{,}01\\text{ cm}^2$.',
            pedagogicalTip: 'Bình phương hai đầu mút $a - d$ và $a + d$ để tìm khoảng chứa diện tích đúng $\\bar{S}$.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 12: Quy tròn số π theo độ chính xác',
            prompt:
              'Biết $3{,}1415 < \\pi < 3{,}1416$. Nếu lấy $a = 3{,}1415$ làm giá trị gần đúng của $\\pi$ thì độ chính xác $d$ có thể lấy bằng:',
            options: [
              { key: 'A', content: '$0{,}0001$' },
              { key: 'B', content: '$0{,}001$' },
              { key: 'C', content: '$0{,}00001$' },
              { key: 'D', content: '$0{,}01$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $3{,}1415 < \\pi < 3{,}1416$ nên $|\\pi - 3{,}1415| < 3{,}1416 - 3{,}1415 = 0{,}0001$. Vậy $d = 0{,}0001$.',
            pedagogicalTip: 'Nếu lấy trung điểm $a = 3{,}14155$ thì $d = 0{,}00005$; còn lấy đầu mút $a = 3{,}1415$ thì $d = 0{,}0001$.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 12: Quy tròn dân số một tỉnh',
            prompt:
              'Dân số của một tỉnh được thống kê là $\\bar{N} = 1\\,874\\,325 \\pm 5\\,000$ (người). Số quy tròn của $1\\,874\\,325$ là:',
            options: [
              { key: 'A', content: '$1\\,870\\,000$' },
              { key: 'B', content: '$1\\,874\\,000$' },
              { key: 'C', content: '$1\\,874\\,300$' },
              { key: 'D', content: '$1\\,900\\,000$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hàng lớn nhất của độ chính xác $d = 5\\,000$ là hàng nghìn, nên ta quy tròn $1\\,874\\,325$ đến hàng chục nghìn được $1\\,870\\,000$.',
            pedagogicalTip: 'Khi $d = 5\\,000$ (hàng nghìn), phải quy tròn số gần đúng đến hàng chục nghìn.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 12: Tính độ chính xác của tổng hai số gần đúng',
            prompt:
              'Cho hai số thực có giá trị đúng $\\bar{x} = 15{,}2 \\pm 0{,}1$ và $\\bar{y} = 24{,}8 \\pm 0{,}2$. Độ chính xác $d$ của tổng $x + y = 40{,}0$ là:',
            options: [
              { key: 'A', content: '$0{,}3$' },
              { key: 'B', content: '$0{,}1$' },
              { key: 'C', content: '$0{,}2$' },
              { key: 'D', content: '$0{,}02$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Từ $15{,}1 \\le \\bar{x} \\le 15{,}3$ và $24{,}6 \\le \\bar{y} \\le 25{,}0$, cộng vế theo vế được $39{,}7 \\le \\bar{x} + \\bar{y} \\le 40{,}3$, tức là $\\bar{x} + \\bar{y} = 40{,}0 \\pm 0{,}3$.',
            pedagogicalTip: 'Độ chính xác của tổng (hoặc hiệu) hai số gần đúng bằng tổng hai độ chính xác: $d = d_1 + d_2$.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 12: Đánh giá sai số tuyệt đối của số vô tỉ',
            prompt:
              'Sử dụng máy tính cầm tay ta có $\\sqrt[3]{15} = 2{,}466212074\\dots$. Giá trị gần đúng của $\\sqrt[3]{15}$ chính xác đến hàng phần trăm là:',
            options: [
              { key: 'A', content: '$2{,}47$' },
              { key: 'B', content: '$2{,}46$' },
              { key: 'C', content: '$2{,}5$' },
              { key: 'D', content: '$2{,}466$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Chữ số hàng phần trăm là $6$, chữ số ngay bên phải (hàng phần nghìn) là $6 \\ge 5$ nên làm tròn lên thành $2{,}47$.',
            pedagogicalTip: 'Nhìn chữ số ngay bên phải hàng làm tròn: nếu $\\ge 5$ thì cộng thêm $1$ vào hàng làm tròn.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b12_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 12: Bài toán kiểm định trụ bơm xăng thực tế (Bài 5.6 SBT trang 74)',
            prompt:
              'Một trạm xăng tiến hành kiểm định hai trụ bơm xăng A và B với quy định sai số tương đối không vượt quá $0{,}5\\%$. Khi bơm $50\\text{ lít}$ xăng hiển thị trên đồng hồ vào bình chuẩn, trụ A cho $50{,}3\\text{ lít}$ và trụ B cho $49{,}8\\text{ lít}$ (bám sát Bài 5.6 SBT trang 74). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Với lượng xăng chuẩn $50\\text{ lít}$, sai số tuyệt đối tối đa cho phép là $d = 50 \\cdot 0{,}5\\% = 0{,}25\\text{ lít}$.',
                isCorrect: true,
                explanation: 'Ta có $d = 50 \\cdot 0{,}005 = 0{,}25\\text{ lít}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Lượng xăng thực tế bơm ra được coi là đạt chuẩn nếu nằm trong đoạn $[49{,}75; 50{,}25]$ lít.',
                isCorrect: true,
                explanation: '$50 - 0{,}25 = 49{,}75$ và $50 + 0{,}25 = 50{,}25$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Trụ bơm A không đạt chuẩn kiểm định vì $50{,}3 > 50{,}25$.',
                isCorrect: true,
                explanation: 'Sai số tuyệt đối của trụ A là $|50{,}3 - 50| = 0{,}3\\text{ lít} > 0{,}25\\text{ lít}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Trụ bơm B cũng không đạt chuẩn kiểm định vì $49{,}8 < 50$.',
                isCorrect: false,
                explanation: 'Vì $49{,}8 \\in [49{,}75; 50{,}25]$ (sai số tuyệt đối $0{,}2\\text{ lít} \\le 0{,}25\\text{ lít}$) nên trụ bơm B **đạt chuẩn** kiểm định.',
              },
            ],
            pedagogicalTip: 'Mọi giá trị nằm trong đoạn $[a - d; a + d]$ đều đạt tiêu chuẩn sai số kỹ thuật.',
          },
          {
            id: 'b12_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 12: Tính chu vi và diện tích hình tròn với số gần đúng π',
            prompt:
              'Một bồn hoa hình tròn có bán kính đúng $R = 10\\text{ m}$. Người thợ dùng giá trị gần đúng $p = 3{,}14$ thay cho $\\pi = 3{,}14159265\\dots$ để tính chu vi $C = 2pR$ và diện tích $S = pR^2$ của bồn hoa. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Sai số tuyệt đối của số gần đúng $p = 3{,}14$ so với $\\pi$ nhỏ hơn $0{,}0016$.',
                isCorrect: true,
                explanation: '$|\\pi - 3{,}14| = 0{,}00159265\\dots < 0{,}0016$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Chu vi gần đúng tính được là $C = 62{,}8\\text{ m}$ với độ chính xác $d_C = 0{,}032\\text{ m}$.',
                isCorrect: true,
                explanation: '$|\\bar{C} - C| = 2R|\\pi - 3{,}14| < 20 \\cdot 0{,}0016 = 0{,}032\\text{ m}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Diện tích gần đúng tính được là $S = 314\\text{ m}^2$ với độ chính xác $d_S = 0{,}16\\text{ m}^2$.',
                isCorrect: true,
                explanation: '$|\\bar{S} - S| = R^2|\\pi - 3{,}14| < 100 \\cdot 0{,}0016 = 0{,}16\\text{ m}^2$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Số quy tròn của diện tích $S = 314$ với độ chính xác $d_S = 0{,}16$ là $310$.',
                isCorrect: false,
                explanation: 'Hàng lớn nhất của $d_S = 0{,}16$ là hàng phần mười, nên quy tròn $314$ đến hàng đơn vị vẫn là $314$.',
              },
            ],
            pedagogicalTip: 'Khi nhân số gần đúng với hằng số $k > 0$, độ chính xác cũng được nhân với $k$.',
          },
        ],
        part3: [
          {
            id: 'b12_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 12: Quy tròn số gần đúng đến hàng trăm',
            prompt:
              'Cho số gần đúng $a = 84\\,372$ với độ chính xác $d = 60$. Hãy viết số quy tròn của $a$.',
            acceptableAnswers: ['84400', '84 400'],
            explanation:
              'Hàng lớn nhất của $d = 60$ là hàng chục, nên ta quy tròn $a = 84\\,372$ đến hàng trăm được $84\\,400$.',
            pedagogicalTip: 'Chữ số hàng chục là $7 \\ge 5$ nên chữ số hàng trăm tăng từ $3$ lên $4$.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 12: Giới hạn trên của thể tích chuẩn (Bài 5.6 SBT trang 74)',
            prompt:
              'Một trụ bơm xăng có sai số tương đối tối đa cho phép là $0{,}5\\%$. Khi bơm $40\\text{ lít}$ xăng, thể tích xăng thực tế tối đa được phép chảy ra để trụ bơm vẫn đạt chuẩn là bao nhiêu lít (viết số thập phân)?',
            acceptableAnswers: ['40,2', '40.2'],
            explanation:
              'Độ chính xác tối đa $d = 40 \\cdot 0{,}5\\% = 0{,}2\\text{ lít}$. Vậy thể tích tối đa cho phép là $40 + 0{,}2 = 40{,}2\\text{ lít}$.',
            pedagogicalTip: 'Giới hạn trên của khoảng cho phép là $a + d$.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 12: Quy tròn số thập phân với d = 0,05',
            prompt:
              'Cho số gần đúng $a = 15{,}648$ với độ chính xác $d = 0{,}05$. Số quy tròn của $a$ là bao nhiêu?',
            acceptableAnswers: ['15,6', '15.6'],
            explanation:
              'Hàng lớn nhất của $d = 0{,}05$ là hàng phần trăm, nên quy tròn $a = 15{,}648$ đến hàng phần mười được $15{,}6$.',
            pedagogicalTip: 'Chữ số hàng phần trăm của $a$ là $4 < 5$ nên giữ nguyên chữ số $6$ ở hàng phần mười.',
            points: 0.5,
          },
          {
            id: 'b12_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 12: Tính độ chính xác của chu vi hình chữ nhật',
            prompt:
              'Một mảnh vườn hình chữ nhật có chiều dài $\\bar{a} = 25\\text{ m} \\pm 0{,}2\\text{ m}$ và chiều rộng $\\bar{b} = 15\\text{ m} \\pm 0{,}1\\text{ m}$. Độ chính xác $d$ của chu vi $P = 2(a + b) = 80\\text{ m}$ bằng bao nhiêu mét (viết số thập phân)?',
            acceptableAnswers: ['0,6', '0.6'],
            explanation:
              'Vì $\\bar{P} = 2(\\bar{a} + \\bar{b})$ nên độ chính xác của chu vi là $d = 2(0{,}2 + 0{,}1) = 0{,}6\\text{ m}$.',
            pedagogicalTip: 'Chu vi là $2(a + b)$ nên sai số tuyệt đối của tổng $(a + b)$ phải nhân với $2$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b12_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 12: Giải bài toán kiểm định trụ bơm xăng (Bài 5.6 SBT trang 74)',
            problemStatement:
              'Tại một trạm xăng, quy định kiểm định yêu cầu sai số tương đối của trụ bơm không vượt quá $0{,}5\\%$. Khi bơm $50\\text{ lít}$ xăng hiển thị trên trụ bơm vào bình chuẩn thì lượng xăng thực tế đo được là $50{,}3\\text{ lít}$. Hỏi trụ bơm đó có đạt tiêu chuẩn kiểm định hay không?',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b12_d2_s1',
                originalIndex: 1,
                content:
                  'Với thể tích chuẩn $V = 50\\text{ lít}$ và sai số tương đối tối đa cho phép $\\delta = 0{,}5\\%$, ta tính độ chính xác tối đa cho phép: $d = 50 \\cdot 0{,}5\\% = 0{,}25\\text{ lít}$.',
                roleDescription: 'Tính sai số tuyệt đối tối đa cho phép d',
              },
              {
                id: 'b12_d2_s2',
                originalIndex: 2,
                content:
                  'Xác định khoảng thể tích thực tế đạt chuẩn kiểm định: $[50 - 0{,}25;\\ 50 + 0{,}25] = [49{,}75;\\ 50{,}25]$ (lít).',
                roleDescription: 'Tìm đoạn thể tích cho phép [49,75; 50,25]',
              },
              {
                id: 'b12_d2_s3',
                originalIndex: 3,
                content:
                  'So sánh lượng xăng thực tế đo được là $50{,}3\\text{ lít}$ với đoạn $[49{,}75;\\ 50{,}25]$, ta thấy $50{,}3 > 50{,}25$ (nằm ngoài đoạn cho phép).',
                roleDescription: 'So sánh số đo thực tế với khoảng chuẩn',
              },
              {
                id: 'b12_d2_s4',
                originalIndex: 4,
                content:
                  'Kết luận: Trụ bơm xăng đã vượt quá giới hạn sai số cho phép nên không đạt tiêu chuẩn kiểm định.',
                roleDescription: 'Kết luận kiểm định',
              },
            ],
            pedagogicalTip:
              'Bài toán kiểm định đo lường luôn quy về việc kiểm tra xem giá trị thực tế có thuộc đoạn $[a - d; a + d]$ với $d = a \\cdot \\delta$ hay không.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 5.6 trang 125 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-13',
    lessonNumber: 13,
    name: 'Bài 13',
    topicTitle: 'Các số đặc trưng đo xu thế trung tâm',
    chapter: 'Chương V – Các số đặc trưng của mẫu số liệu không ghép nhóm',
    keySummary:
      'Số trung bình cộng x̄, trung vị M_e, tứ phân vị Q₁, Q₂, Q₃, mốt M_o của mẫu số liệu không ghép nhóm và ý nghĩa lựa chọn số đặc trưng khi có giá trị bất thường (bám sát SBT Toán 10 KNTT trang 75–78).',
    practiceExams: [
      {
        id: 'de-on-bai-13-1',
        lessonId: 'bai-13',
        title: 'Đề ôn Bài 13 - Đề số 01',
        subtitle: 'Số trung bình, trung vị, tứ phân vị Q₁, Q₂, Q₃ & mốt (SBT KNTT trang 75–78)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 5.7, 5.8, 5.9, 5.10, 5.11 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b13_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 13: Tính số trung bình và trung vị của mẫu số liệu',
            prompt:
              'Điểm kiểm tra môn Toán của $7$ học sinh trong tổ 1 là: $6;\\ 8;\\ 5;\\ 9;\\ 7;\\ 8;\\ 6$. **Trung vị** $M_e$ của mẫu số liệu này bằng:',
            options: [
              { key: 'A', content: '$7$' },
              { key: 'B', content: '$9$' },
              { key: 'C', content: '$8$' },
              { key: 'D', content: '$6{,}5$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Sắp xếp mẫu số liệu theo thứ tự không giảm: $5;\\ 6;\\ 6;\\ 7;\\ 8;\\ 8;\\ 9$. Vì cỡ mẫu $n = 7$ lẻ nên trung vị là số đứng chính giữa (thứ $4$): $M_e = 7$.',
            pedagogicalTip: 'Bắt buộc phải sắp xếp mẫu số liệu theo thứ tự không giảm trước khi tìm trung vị $M_e$ và tứ phân vị!',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 13: Tìm mốt của mẫu số liệu',
            prompt:
              'Số đôi giày bán được trong một ngày theo các cỡ của một cửa hàng được ghi lại như sau: $38;\\ 39;\\ 40;\\ 39;\\ 41;\\ 39;\\ 40;\\ 42;\\ 39$. **Mốt** $M_o$ của mẫu số liệu này là:',
            options: [
              { key: 'A', content: '$39$' },
              { key: 'B', content: '$40$' },
              { key: 'C', content: '$4$' },
              { key: 'D', content: '$42$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Giá trị $39$ xuất hiện nhiều nhất ($4$ lần) nên mốt của mẫu số liệu là $M_o = 39$.',
            pedagogicalTip: 'Mốt $M_o$ là **giá trị** có tần số lớn nhất ($39$), không phải là tần số của nó ($4$).',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 13: Tìm tứ phân vị của mẫu số liệu (Ví dụ 2 SBT trang 76)',
            prompt:
              'Cho mẫu số liệu đã sắp xếp theo thứ tự không giảm gồm $8$ giá trị: $2;\\ 4;\\ 6;\\ 8;\\ 10;\\ 12;\\ 14;\\ 16$. Bộ ba tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu lần lượt là:',
            options: [
              { key: 'A', content: '$Q_1 = 5,\\ Q_2 = 9,\\ Q_3 = 13$' },
              { key: 'B', content: '$Q_1 = 4,\\ Q_2 = 8,\\ Q_3 = 12$' },
              { key: 'C', content: '$Q_1 = 6,\\ Q_2 = 9,\\ Q_3 = 14$' },
              { key: 'D', content: '$Q_1 = 5,\\ Q_2 = 8,\\ Q_3 = 13$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Với $n = 8$: $Q_2 = \\frac{8 + 10}{2} = 9$. Nửa dưới là $2;\\ 4;\\ 6;\\ 8$ có trung vị $Q_1 = \\frac{4 + 6}{2} = 5$. Nửa trên là $10;\\ 12;\\ 14;\\ 16$ có trung vị $Q_3 = \\frac{12 + 14}{2} = 13$.',
            pedagogicalTip: 'Khi $n$ chẵn, chia mẫu thành hai nửa bằng nhau: $Q_1$ là trung vị nửa dưới, $Q_3$ là trung vị nửa trên.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 13: Bài toán tìm điểm bài kiểm tra thứ 5 (Bài 5.7 SBT trang 77)',
            prompt:
              'Một học sinh có điểm $4$ bài kiểm tra đầu tiên lần lượt là $94;\\ 82;\\ 78;\\ 80$ (thang điểm $100$). Để điểm trung bình của cả $5$ bài kiểm tra đạt ít nhất $85$ điểm thì bài kiểm tra thứ $5$ học sinh đó phải đạt tối thiểu bao nhiêu điểm (Bài 5.7 SBT trang 77)?',
            options: [
              { key: 'A', content: '$91$' },
              { key: 'B', content: '$88$' },
              { key: 'C', content: '$90$' },
              { key: 'D', content: '$95$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.7 SBT trang 125: Gọi $x$ là điểm bài thứ $5$. Ta có $\\frac{94 + 82 + 78 + 80 + x}{5} \\ge 85 \\Leftrightarrow 334 + x \\ge 425 \\Leftrightarrow x \\ge 91$.',
            pedagogicalTip: 'Tổng điểm $5$ bài phải đạt ít nhất $5 \\cdot 85 = 425$ điểm.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 13: Tứ phân vị khi cỡ mẫu n lẻ (Ví dụ 2 SBT trang 76)',
            prompt:
              'Cho mẫu số liệu gồm $9$ số liệu đã sắp xếp theo thứ tự không giảm: $3;\\ 5;\\ 7;\\ 8;\\ 10;\\ 12;\\ 14;\\ 15;\\ 18$. Giá trị tứ phân vị thứ nhất $Q_1$ và tứ phân vị thứ ba $Q_3$ lần lượt là:',
            options: [
              { key: 'A', content: '$Q_1 = 6$ và $Q_3 = 14{,}5$' },
              { key: 'B', content: '$Q_1 = 7$ và $Q_3 = 14$' },
              { key: 'C', content: '$Q_1 = 5$ và $Q_3 = 15$' },
              { key: 'D', content: '$Q_1 = 6{,}5$ và $Q_3 = 13$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $n = 9$ lẻ nên $Q_2 = x_5 = 10$. Nửa dưới (không kể $Q_2$) gồm $4$ số $3;\\ 5;\\ 7;\\ 8 \\Rightarrow Q_1 = \\frac{5 + 7}{2} = 6$. Nửa trên (không kể $Q_2$) gồm $4$ số $12;\\ 14;\\ 15;\\ 18 \\Rightarrow Q_3 = \\frac{14 + 15}{2} = 14{,}5$.',
            pedagogicalTip: 'Khi cỡ mẫu $n$ lẻ, **không** tính phần tử chính giữa $Q_2$ vào nửa dưới và nửa trên khi tìm $Q_1, Q_3$.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 13: Lựa chọn số đặc trưng khi có giá trị bất thường',
            prompt:
              'Khi trong mẫu số liệu xuất hiện một vài giá trị quá lớn hoặc quá nhỏ so với đa số các giá trị khác (giá trị bất thường), số đặc trưng nào sau đây thích hợp nhất để đại diện cho xu thế trung tâm của mẫu số liệu?',
            options: [
              { key: 'A', content: 'Trung vị $M_e$.' },
              { key: 'B', content: 'Số trung bình cộng $\\bar{x}$.' },
              { key: 'C', content: 'Giá trị lớn nhất $x_{\\max}$.' },
              { key: 'D', content: 'Tứ phân vị thứ ba $Q_3$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo tóm tắt kiến thức Bài 13 (SBT trang 75): Số trung bình rất nhạy cảm với các giá trị bất thường, trong khi trung vị $M_e$ không bị ảnh hưởng bởi các giá trị quá lớn hoặc quá nhỏ ở hai đầu.',
            pedagogicalTip: 'Khi mẫu có giá trị ngoại lai (outliers), hãy dùng **trung vị** $M_e$ thay cho số trung bình $\\bar{x}$.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 13: Tính số trung bình từ bảng tần số',
            prompt:
              'Số bàn thắng ghi được trong mỗi trận đấu của một giải bóng đá được thống kê trong bảng tần số: $1$ bàn ($4$ trận), $2$ bàn ($6$ trận), $3$ bàn ($5$ trận), $4$ bàn ($5$ trận). Số bàn thắng trung bình trong mỗi trận đấu là:',
            options: [
              { key: 'A', content: '$2{,}55$' },
              { key: 'B', content: '$2{,}50$' },
              { key: 'C', content: '$2{,}65$' },
              { key: 'D', content: '$3{,}00$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tổng số trận $n = 4 + 6 + 5 + 5 = 20$. Số bàn thắng trung bình: $\\bar{x} = \\frac{1\\cdot 4 + 2\\cdot 6 + 3\\cdot 5 + 4\\cdot 5}{20} = \\frac{4 + 12 + 15 + 20}{20} = \\frac{51}{20} = 2{,}55$.',
            pedagogicalTip: 'Trong bảng tần số: $\\bar{x} = \\frac{n_1x_1 + n_2x_2 + \\dots + n_kx_k}{n}$.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 13: Ý nghĩa của tứ phân vị thứ nhất Q₁ (Bài 5.11 SBT trang 78)',
            prompt:
              'Một công ty muốn hỗ trợ cho $25\\%$ số công nhân có mức thu nhập thấp nhất trong công ty (Bài 5.11 SBT trang 78). Đại lượng thống kê nào của mẫu số liệu thu nhập giúp công ty xác định ngưỡng thu nhập để nhận hỗ trợ?',
            options: [
              { key: 'A', content: 'Tứ phân vị thứ nhất $Q_1$.' },
              { key: 'B', content: 'Trung vị $Q_2$.' },
              { key: 'C', content: 'Tứ phân vị thứ ba $Q_3$.' },
              { key: 'D', content: 'Mốt $M_o$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.11 SBT trang 126: Tứ phân vị thứ nhất $Q_1$ chia mẫu số liệu đã sắp xếp thành $25\\%$ số liệu nhỏ hơn hoặc bằng $Q_1$ và $75\\%$ lớn hơn hoặc bằng $Q_1$, nên dùng $Q_1$ để xác định $25\\%$ công nhân có thu nhập thấp nhất.',
            pedagogicalTip: '$Q_1$ ứng với mốc $25\\%$ dưới, $Q_2$ ứng với $50\\%$, và $Q_3$ ứng với mốc $25\\%$ trên ($75\\%$ dưới).',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b13_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 13: Phân tích đầy đủ các số đặc trưng đo xu thế trung tâm (Bài 5.8, 5.9 SBT trang 77)',
            prompt:
              'Khảo sát thời gian tự học mỗi ngày (đơn vị: phút) của $10$ học sinh lớp 10A thu được mẫu số liệu sau: $45;\\ 60;\\ 90;\\ 60;\\ 75;\\ 120;\\ 60;\\ 90;\\ 45;\\ 75$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Thời gian tự học trung bình của $10$ học sinh là $\\bar{x} = 72$ phút.',
                isCorrect: true,
                explanation: 'Tổng thời gian là $45 + 60 + 90 + 60 + 75 + 120 + 60 + 90 + 45 + 75 = 720$ phút $\\Rightarrow \\bar{x} = \\frac{720}{10} = 72$ phút.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Mốt của mẫu số liệu là $M_o = 60$ phút.',
                isCorrect: true,
                explanation: 'Giá trị $60$ xuất hiện nhiều nhất ($3$ lần), nên $M_o = 60$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Trung vị của mẫu số liệu là $M_e = 67{,}5$ phút.',
                isCorrect: true,
                explanation: 'Sắp xếp tăng dần: $45;\\ 45;\\ 60;\\ 60;\\ 60;\\ 75;\\ 75;\\ 90;\\ 90;\\ 120$. Với $n = 10$, $M_e = \\frac{x_5 + x_6}{2} = \\frac{60 + 75}{2} = 67{,}5$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Tứ phân vị thứ nhất là $Q_1 = 45$ và tứ phân vị thứ ba là $Q_3 = 90$.',
                isCorrect: false,
                explanation: 'Nửa dưới gồm $5$ số $45;\\ 45;\\ 60;\\ 60;\\ 60$ có trung vị là số thứ $3$: $Q_1 = 60$ (không phải $45$); nửa trên $75;\\ 75;\\ 90;\\ 90;\\ 120$ có $Q_3 = 90$.',
              },
            ],
            pedagogicalTip: 'Với $n = 10$, mỗi nửa gồm $5$ số liệu nên $Q_1 = x_3$ và $Q_3 = x_8$.',
          },
          {
            id: 'b13_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 13: Bài toán hỗ trợ công nhân thu nhập thấp (Bài 5.11 SBT trang 78)',
            prompt:
              'Thu nhập hằng tháng (đơn vị: triệu đồng) của $12$ công nhân trong một xưởng sản xuất được thống kê như sau: $6{,}0;\\ 6{,}5;\\ 7{,}0;\\ 6{,}5;\\ 8{,}0;\\ 9{,}0;\\ 7{,}5;\\ 6{,}0;\\ 8{,}5;\\ 7{,}0;\\ 10{,}0;\\ 8{,}0$ (bám sát Bài 5.11 SBT trang 78). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Mẫu số liệu sắp xếp theo thứ tự không giảm là: $6{,}0;\\ 6{,}0;\\ 6{,}5;\\ 6{,}5;\\ 7{,}0;\\ 7{,}0;\\ 7{,}5;\\ 8{,}0;\\ 8{,}0;\\ 8{,}5;\\ 9{,}0;\\ 10{,}0$.',
                isCorrect: true,
                explanation: 'Kiểm tra đủ $12$ giá trị theo thứ tự tăng dần.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Thu nhập trung bình của $12$ công nhân là $\\bar{x} = 7{,}5$ triệu đồng.',
                isCorrect: true,
                explanation: 'Tổng thu nhập là $90$ triệu đồng $\\Rightarrow \\bar{x} = \\frac{90}{12} = 7{,}5$ triệu đồng.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Trung vị của mẫu số liệu là $Q_2 = 7{,}25$ triệu đồng.',
                isCorrect: true,
                explanation: 'Với $n = 12$, trung vị là $\\frac{x_6 + x_7}{2} = \\frac{7{,}0 + 7{,}5}{2} = 7{,}25$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Nếu công ty hỗ trợ cho $25\\%$ công nhân có thu nhập thấp nhất dựa theo tứ phân vị $Q_1$ thì mức thu nhập từ $6{,}0$ triệu đồng trở xuống mới được hỗ trợ.',
                isCorrect: false,
                explanation: 'Nửa dưới gồm $6$ số $6{,}0;\\ 6{,}0;\\ 6{,}5;\\ 6{,}5;\\ 7{,}0;\\ 7{,}0$ có trung vị $Q_1 = \\frac{6{,}5 + 6{,}5}{2} = 6{,}5$ triệu đồng (không phải $6{,}0$).',
              },
            ],
            pedagogicalTip: 'Với $n = 12$, nửa dưới có $6$ số nên $Q_1 = \\frac{x_3 + x_4}{2}$.',
          },
        ],
        part3: [
          {
            id: 'b13_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 13: Tính trung vị của mẫu số liệu chẵn',
            prompt:
              'Cho mẫu số liệu gồm $6$ giá trị: $12;\\ 18;\\ 15;\\ 22;\\ 10;\\ 25$. Tính trung vị $M_e$ của mẫu số liệu (viết dưới dạng số thập phân).',
            acceptableAnswers: ['16,5', '16.5'],
            explanation:
              'Sắp xếp không giảm: $10;\\ 12;\\ 15;\\ 18;\\ 22;\\ 25$. Trung vị $M_e = \\frac{15 + 18}{2} = 16{,}5$.',
            pedagogicalTip: 'Đừng quên sắp xếp mẫu trước khi lấy trung bình cộng hai số đứng giữa.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 13: Tính tứ phân vị thứ ba Q₃',
            prompt:
              'Cho mẫu số liệu đã sắp xếp không giảm gồm $7$ giá trị: $4;\\ 7;\\ 9;\\ 11;\\ 14;\\ 18;\\ 20$. Tìm tứ phân vị thứ ba $Q_3$ của mẫu số liệu.',
            acceptableAnswers: ['18'],
            explanation:
              'Với $n = 7$ lẻ, $Q_2 = x_4 = 11$. Nửa trên (không kể $Q_2$) là $14;\\ 18;\\ 20$ có trung vị $Q_3 = 18$.',
            pedagogicalTip: 'Khi $n = 7$, $Q_1 = x_2, Q_2 = x_4, Q_3 = x_6$.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 13: Tìm giá trị còn thiếu khi biết số trung bình',
            prompt:
              'Mẫu số liệu gồm $5$ số tự nhiên: $6;\\ 8;\\ 10;\\ x;\\ 14$ có số trung bình cộng bằng $10$. Tìm giá trị của $x$.',
            acceptableAnswers: ['12'],
            explanation:
              'Từ $\\frac{6 + 8 + 10 + x + 14}{5} = 10 \\Leftrightarrow 38 + x = 50 \\Leftrightarrow x = 12$.',
            pedagogicalTip: 'Tổng của $n$ số liệu bằng $n \\cdot \\bar{x}$.',
            points: 0.5,
          },
          {
            id: 'b13_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 13: Tính điểm trung bình môn học có hệ số (Bài 5.32 SBT trang 84)',
            prompt:
              'Điểm môn Toán trong học kì I của bạn An gồm: $4$ điểm đánh giá thường xuyên (hệ số 1) là $8;\\ 9;\\ 7;\\ 8$; điểm đánh giá giữa kì (hệ số 2) là $8$; điểm đánh giá cuối kì (hệ số 3) là $8$ (tương tự Bài 5.32 SBT trang 84). Tính điểm trung bình môn Toán học kì I của bạn An.',
            acceptableAnswers: ['8', '8,0', '8.0'],
            explanation:
              'Tổng các hệ số là $4\\cdot 1 + 2 + 3 = 9$. Điểm trung bình: $\\bar{x} = \\frac{(8 + 9 + 7 + 8) + 2\\cdot 8 + 3\\cdot 8}{9} = \\frac{32 + 16 + 24}{9} = \\frac{72}{9} = 8{,}0$.',
            pedagogicalTip: 'Chia tổng tích (điểm $\\times$ hệ số) cho tổng các hệ số ($9$).',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b13_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 13: Quy trình tìm bộ ba tứ phân vị Q₁, Q₂, Q₃ (Ví dụ 2 SBT trang 76)',
            problemStatement:
              'Cho mẫu số liệu thống kê số sách đọc được trong năm của $9$ học sinh: $5;\\ 12;\\ 8;\\ 4;\\ 15;\\ 7;\\ 10;\\ 6;\\ 14$. Hãy tìm bộ ba tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu trên.',
            conclusionTarget:
              'Hãy sắp xếp các bước thực hiện sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b13_d1_s1',
                originalIndex: 1,
                content:
                  'Sắp xếp mẫu số liệu gồm $n = 9$ giá trị theo thứ tự không giảm: $4;\\ 5;\\ 6;\\ 7;\\ 8;\\ 10;\\ 12;\\ 14;\\ 15$.',
                roleDescription: 'Sắp xếp mẫu số liệu theo thứ tự không giảm',
              },
              {
                id: 'b13_d1_s2',
                originalIndex: 2,
                content:
                  'Vì cỡ mẫu $n = 9$ là số lẻ nên tứ phân vị thứ hai (trung vị) là giá trị đứng thứ $5$: $Q_2 = 8$.',
                roleDescription: 'Xác định trung vị Q₂ = 8',
              },
              {
                id: 'b13_d1_s3',
                originalIndex: 3,
                content:
                  'Xét nửa số liệu bên trái $Q_2$ (không bao gồm $Q_2$) gồm $4$ giá trị $4;\\ 5;\\ 6;\\ 7$, ta tìm được trung vị của nửa này là $Q_1 = \\frac{5 + 6}{2} = 5{,}5$.',
                roleDescription: 'Tìm tứ phân vị thứ nhất Q₁ ở nửa dưới',
              },
              {
                id: 'b13_d1_s4',
                originalIndex: 4,
                content:
                  'Xét nửa số liệu bên phải $Q_2$ (không bao gồm $Q_2$) gồm $4$ giá trị $10;\\ 12;\\ 14;\\ 15$, ta tìm được trung vị của nửa này là $Q_3 = \\frac{12 + 14}{2} = 13$.',
                roleDescription: 'Tìm tứ phân vị thứ ba Q₃ ở nửa trên',
              },
            ],
            pedagogicalTip:
              'Luôn sắp xếp mẫu không giảm ở Bước 1 trước khi xác định $Q_2, Q_1, Q_3$.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn theo Ví dụ 2 trang 76 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-13-2',
        lessonId: 'bai-13',
        title: 'Đề ôn Bài 13 - Đề số 02',
        subtitle: 'Ứng dụng phân tích số liệu thực tế & xử lí giá trị bất thường (SBT KNTT trang 77–85)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát các bài tập thực tế 5.10, 5.11, 5.32 (điểm trung bình học kì), 5.34 (thời gian chờ khám bệnh) trong Sách bài tập Toán 10 KNTT.',
        part1: [
          {
            id: 'b13_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 13: Bài toán thời gian chờ khám bệnh có giá trị bất thường (Bài 5.34 SBT trang 84)',
            prompt:
              'Thời gian chờ khám bệnh (đơn vị: phút) của $9$ bệnh nhân tại một phòng khám được ghi lại như sau: $5;\\ 10;\\ 5;\\ 15;\\ 10;\\ 5;\\ 10;\\ 15;\\ 60$ (Bài 5.34 SBT trang 84). Số trung bình $\\bar{x}$, trung vị $M_e$ và mốt $M_o$ của mẫu số liệu này lần lượt là:',
            options: [
              { key: 'A', content: '$\\bar{x} = 15,\\ M_e = 10,\\ M_o = 5$ và $10$' },
              { key: 'B', content: '$\\bar{x} = 10,\\ M_e = 15,\\ M_o = 10$' },
              { key: 'C', content: '$\\bar{x} = 15,\\ M_e = 15,\\ M_o = 5$' },
              { key: 'D', content: '$\\bar{x} = 12,\\ M_e = 10,\\ M_o = 60$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Sắp xếp mẫu: $5;\\ 5;\\ 5;\\ 10;\\ 10;\\ 10;\\ 15;\\ 15;\\ 60$. Tổng bằng $135 \\Rightarrow \\bar{x} = \\frac{135}{9} = 15$. Số chính giữa thứ $5$ là $M_e = 10$. Cả $5$ và $10$ cùng xuất hiện $3$ lần (hoặc trong bài có $4$ số $5$ thì $M_o = 5$).',
            pedagogicalTip: 'Do có bệnh nhân chờ $60$ phút (bất thường) nên $\\bar{x} = 15$ bị kéo lên cao, trong khi $M_e = 10$ phản ánh đúng hơn thời gian chờ điển hình.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 13: Điểm trung bình học kì có hệ số (Bài 5.32 SBT trang 84)',
            prompt:
              'Trong học kì I, điểm môn Toán của bạn Bình gồm $4$ điểm thường xuyên (hệ số 1): $7;\\ 8;\\ 8;\\ 9$; điểm giữa kì (hệ số 2): $7{,}5$; điểm cuối kì (hệ số 3): $8{,}2$ (Bài 5.32 SBT trang 84). Điểm trung bình môn Toán của Bình (làm tròn đến hàng phần mười) là:',
            options: [
              { key: 'A', content: '$8{,}0$' },
              { key: 'B', content: '$7{,}9$' },
              { key: 'C', content: '$7{,}8$' },
              { key: 'D', content: '$8{,}1$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.32 SBT trang 126: $\\bar{x} = \\frac{(7 + 8 + 8 + 9) + 2\\cdot 7{,}5 + 3\\cdot 8{,}2}{4 + 2 + 3} = \\frac{32 + 15 + 24{,}6}{9} = \\frac{71{,}6}{9} \\approx 7{,}955\\dots$, làm tròn đến hàng phần mười được $8{,}0$.',
            pedagogicalTip: 'Tổng hệ số là $4\\times 1 + 2 + 3 = 9$.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 13: Mẫu số liệu có nhiều mốt',
            prompt:
              'Cho mẫu số liệu thống kê cỡ áo của $10$ học sinh nam: $38;\\ 39;\\ 39;\\ 40;\\ 40;\\ 40;\\ 41;\\ 41;\\ 41;\\ 42$. Mốt của mẫu số liệu này là:',
            options: [
              { key: 'A', content: 'Mẫu số liệu có hai mốt là $40$ và $41$.' },
              { key: 'B', content: 'Mẫu số liệu có mốt duy nhất là $40{,}5$.' },
              { key: 'C', content: 'Mẫu số liệu không có mốt.' },
              { key: 'D', content: 'Mẫu số liệu có mốt là $3$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hai giá trị $40$ và $41$ cùng có tần số lớn nhất bằng $3$, nên mẫu số liệu có hai mốt là $40$ và $41$.',
            pedagogicalTip: 'Một mẫu số liệu có thể có một hay nhiều mốt.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 13: Thay đổi số trung bình khi cộng thêm hằng số',
            prompt:
              'Nếu mỗi giá trị trong một mẫu số liệu đều được cộng thêm $5$ đơn vị thì số trung bình cộng $\\bar{x}$ và trung vị $M_e$ của mẫu số liệu mới sẽ thay đổi như thế nào?',
            options: [
              { key: 'A', content: 'Cả số trung bình $\\bar{x}$ và trung vị $M_e$ đều tăng thêm $5$ đơn vị.' },
              { key: 'B', content: 'Số trung bình $\\bar{x}$ tăng $5$ đơn vị, còn trung vị $M_e$ không đổi.' },
              { key: 'C', content: 'Cả hai đều không thay đổi.' },
              { key: 'D', content: 'Số trung bình $\\bar{x}$ tăng $5n$ đơn vị.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khi tịnh tiến mọi số liệu thêm $+5$, toàn bộ các số đặc trưng đo xu thế trung tâm ($\\bar{x}, M_e, Q_1, Q_2, Q_3, M_o$) đều tăng thêm $5$ đơn vị.',
            pedagogicalTip: 'Các số đo xu thế trung tâm dịch chuyển cùng lượng với dữ liệu.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 13: Tìm trung vị từ bảng tần số',
            prompt:
              'Khảo sát số con của $20$ hộ gia đình trong một tổ dân phố thu được bảng tần số: $0$ con ($2$ hộ), $1$ con ($7$ hộ), $2$ con ($8$ hộ), $3$ con ($3$ hộ). Trung vị $M_e$ của mẫu số liệu là:',
            options: [
              { key: 'A', content: '$2$' },
              { key: 'B', content: '$1{,}5$' },
              { key: 'C', content: '$1$' },
              { key: 'D', content: '$2{,}5$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Với $n = 20$, trung vị là $\\frac{x_{10} + x_{11}}{2}$. Vì $2 + 7 = 9 < 10$ và $9 + 8 = 17 \\ge 11$ nên cả $x_{10}$ và $x_{11}$ đều bằng $2 \\Rightarrow M_e = 2$.',
            pedagogicalTip: 'Cộng dồn tần số để xác định vị trí của phần tử thứ $10$ và thứ $11$.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 13: Tứ phân vị từ bảng tần số',
            prompt:
              'Trong bảng tần số ở Câu 5 ($20$ hộ gia đình: $2$ hộ có $0$ con, $7$ hộ có $1$ con, $8$ hộ có $2$ con, $3$ hộ có $3$ con), tứ phân vị thứ nhất $Q_1$ bằng:',
            options: [
              { key: 'A', content: '$1$' },
              { key: 'B', content: '$0{,}5$' },
              { key: 'C', content: '$1{,}5$' },
              { key: 'D', content: '$2$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Nửa dưới gồm $10$ số liệu đầu tiên ($x_1$ đến $x_{10}$), trung vị của nửa dưới là $Q_1 = \\frac{x_5 + x_6}{2}$. Vì $x_3$ đến $x_9$ đều bằng $1$ nên $x_5 = x_6 = 1 \\Rightarrow Q_1 = 1$.',
            pedagogicalTip: 'Xác định vị trí $x_5, x_6$ trong dãy tần số tích lũy.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 13: Số trung bình của hai nhóm gộp lại',
            prompt:
              'Tổ 1 có $10$ học sinh với điểm trung bình môn Toán là $7{,}8$. Tổ 2 có $15$ học sinh với điểm trung bình môn Toán là $8{,}2$. Điểm trung bình môn Toán của cả $25$ học sinh hai tổ là:',
            options: [
              { key: 'A', content: '$8{,}04$' },
              { key: 'B', content: '$8{,}00$' },
              { key: 'C', content: '$8{,}10$' },
              { key: 'D', content: '$7{,}96$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tổng điểm của cả hai tổ là $10 \\cdot 7{,}8 + 15 \\cdot 8{,}2 = 78 + 123 = 201$. Điểm trung bình chung: $\\bar{x} = \\frac{201}{25} = 8{,}04$.',
            pedagogicalTip: 'Không được lấy trung bình cộng giản đơn $\\frac{7{,}8 + 8{,}2}{2}$ vì sĩ số hai tổ khác nhau!',
            points: 0.5,
          },
          {
            id: 'b13_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 13: Tìm hai số liệu ẩn khi biết trung vị và trung bình',
            prompt:
              'Cho mẫu số liệu gồm $5$ số nguyên dương được sắp xếp theo thứ tự không giảm: $3;\\ 5;\\ x;\\ 9;\\ 11$. Biết số trung bình cộng của mẫu bằng trung vị của nó. Giá trị của $x$ là:',
            options: [
              { key: 'A', content: '$7$' },
              { key: 'B', content: '$6$' },
              { key: 'C', content: '$8$' },
              { key: 'D', content: '$5$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì mẫu đã sắp xếp không giảm nên trung vị là $M_e = x$. Số trung bình $\\bar{x} = \\frac{3 + 5 + x + 9 + 11}{5} = \\frac{28 + x}{5}$. Từ $\\frac{28 + x}{5} = x \\Leftrightarrow 4x = 28 \\Leftrightarrow x = 7$ (thỏa mãn $5 \\le 7 \\le 9$).',
            pedagogicalTip: 'Đặt phương trình $\\bar{x} = M_e$ và kiểm tra điều kiện thứ tự $5 \\le x \\le 9$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b13_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 13: Phân tích thời gian chờ khám bệnh (Bài 5.34 SBT trang 84)',
            prompt:
              'Thời gian chờ khám bệnh (phút) của $9$ bệnh nhân tại phòng khám là: $5;\\ 10;\\ 5;\\ 15;\\ 10;\\ 5;\\ 10;\\ 5;\\ 70$ (Bài 5.34 SBT trang 84 & giải trang 127). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Thời gian chờ trung bình của $9$ bệnh nhân là $\\bar{x} = 15$ phút.',
                isCorrect: true,
                explanation: 'Tổng thời gian là $5\\cdot 4 + 10\\cdot 3 + 15 + 70 = 20 + 30 + 15 + 70 = 135$ phút $\\Rightarrow \\bar{x} = \\frac{135}{9} = 15$ phút.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Mốt của mẫu số liệu là $M_o = 5$ phút.',
                isCorrect: true,
                explanation: 'Giá trị $5$ xuất hiện nhiều nhất ($4$ lần) nên $M_o = 5$ phút.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Trung vị của mẫu số liệu là $M_e = 10$ phút.',
                isCorrect: true,
                explanation: 'Sắp xếp không giảm: $5;\\ 5;\\ 5;\\ 5;\\ 10;\\ 10;\\ 10;\\ 15;\\ 70$. Số đứng thứ $5$ là $M_e = 10$ phút.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Đại diện tốt nhất cho thời gian chờ khám bệnh của đa số bệnh nhân là số trung bình $\\bar{x} = 15$ phút.',
                isCorrect: false,
                explanation: 'Vì có $8/9$ bệnh nhân chờ không quá $15$ phút (đa số chỉ $5–10$ phút), riêng $1$ bệnh nhân chờ $70$ phút là giá trị bất thường làm $\\bar{x} = 15$ bị lệch cao; nên dùng **trung vị** $M_e = 10$ phút để đại diện.',
              },
            ],
            pedagogicalTip: 'Bài 5.34 SBT minh họa rõ nhất vì sao trung vị $M_e$ tốt hơn số trung bình $\\bar{x}$ khi có giá trị ngoại lai.',
          },
          {
            id: 'b13_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 13: So sánh thu nhập và tứ phân vị',
            prompt:
              'Điểm thi thử môn Toán của $11$ học sinh trong đội tuyển được ghi lại như sau: $6{,}5;\\ 7{,}0;\\ 7{,}5;\\ 8{,}0;\\ 8{,}0;\\ 8{,}5;\\ 8{,}5;\\ 9{,}0;\\ 9{,}0;\\ 9{,}5;\\ 10{,}0$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Trung vị của mẫu số liệu là $Q_2 = 8{,}5$.',
                isCorrect: true,
                explanation: 'Với $n = 11$, trung vị là giá trị thứ $6$: $Q_2 = x_6 = 8{,}5$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tứ phân vị thứ nhất của mẫu số liệu là $Q_1 = 7{,}5$.',
                isCorrect: true,
                explanation: 'Nửa dưới (không kể $x_6$) gồm $5$ giá trị $6{,}5;\\ 7{,}0;\\ 7{,}5;\\ 8{,}0;\\ 8{,}0$ có trung vị là $x_3 = 7{,}5$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Tứ phân vị thứ ba của mẫu số liệu là $Q_3 = 9{,}0$.',
                isCorrect: true,
                explanation: 'Nửa trên (không kể $x_6$) gồm $5$ giá trị $8{,}5;\\ 9{,}0;\\ 9{,}0;\\ 9{,}5;\\ 10{,}0$ có trung vị là $x_9 = 9{,}0$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Mẫu số liệu có duy nhất một mốt là $8{,}5$.',
                isCorrect: false,
                explanation: 'Các giá trị $8{,}0;\\ 8{,}5;\\ 9{,}0$ đều xuất hiện $2$ lần nên mẫu có $3$ mốt là $8{,}0;\\ 8{,}5;\\ 9{,}0$.',
              },
            ],
            pedagogicalTip: 'Khi $n = 11$, $Q_1 = x_3, Q_2 = x_6, Q_3 = x_9$.',
          },
        ],
        part3: [
          {
            id: 'b13_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 13: Tìm điểm bài kiểm tra cuối cùng (Bài 5.7 SBT trang 77)',
            prompt:
              'Bạn Lan đã có $3$ cột điểm kiểm tra thường xuyên (hệ số 1) là $8;\\ 8;\\ 9$ và $1$ cột điểm giữa kì (hệ số 2) là $8{,}0$. Hỏi bài thi cuối kì (hệ số 3) bạn Lan cần đạt ít nhất bao nhiêu điểm để điểm trung bình môn đạt từ $8{,}5$ trở lên?',
            acceptableAnswers: ['9'],
            explanation:
              'Tổng hệ số là $3\\cdot 1 + 2 + 3 = 8$. Gọi $x$ là điểm cuối kì: $\\frac{(8 + 8 + 9) + 2\\cdot 8{,}0 + 3x}{8} \\ge 8{,}5 \\Leftrightarrow 41 + 3x \\ge 68 \\Leftrightarrow 3x \\ge 27 \\Leftrightarrow x \\ge 9$.',
            pedagogicalTip: 'Lập bất phương trình tổng điểm có trọng số $\\ge 8 \\cdot 8{,}5 = 68$.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 13: Tính tổng Q₁ + Q₃',
            prompt:
              'Cho mẫu số liệu gồm $8$ số tự nhiên: $3;\\ 7;\\ 5;\\ 11;\\ 9;\\ 15;\\ 13;\\ 17$. Tính tổng $Q_1 + Q_3$ của mẫu số liệu này.',
            acceptableAnswers: ['20'],
            explanation:
              'Sắp xếp tăng dần: $3;\\ 5;\\ 7;\\ 9;\\ 11;\\ 13;\\ 15;\\ 17$. Ta có $Q_1 = \\frac{5 + 7}{2} = 6$ và $Q_3 = \\frac{13 + 15}{2} = 14$. Vậy $Q_1 + Q_3 = 6 + 14 = 20$.',
            pedagogicalTip: 'Mẫu số liệu cách đều đối xứng nên $Q_1 + Q_3 = 2Q_2 = 20$.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 13: Tìm tần số chưa biết từ số trung bình',
            prompt:
              'Thời gian giải một bài toán (tính bằng phút) của một nhóm học sinh được cho bởi bảng tần số: $3$ phút ($4$ học sinh), $4$ phút ($n$ học sinh), $5$ phút ($6$ học sinh). Biết thời gian trung bình giải bài toán của cả nhóm là $4{,}1$ phút. Tìm giá trị của $n$.',
            acceptableAnswers: ['10'],
            explanation:
              'Ta có $\\frac{3\\cdot 4 + 4n + 5\\cdot 6}{4 + n + 6} = 4{,}1 \\Leftrightarrow 42 + 4n = 4{,}1(n + 10) \\Leftrightarrow 0{,}1n = 1 \\Leftrightarrow n = 10$.',
            pedagogicalTip: 'Tổng cỡ mẫu là $4 + n + 6 = n + 10$.',
            points: 0.5,
          },
          {
            id: 'b13_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 13: Tính số trung bình sau khi loại bỏ giá trị bất thường',
            prompt:
              'Trong mẫu số liệu thời gian chờ khám bệnh của $9$ bệnh nhân: $5;\\ 5;\\ 5;\\ 5;\\ 10;\\ 10;\\ 10;\\ 15;\\ 70$ (Bài 5.34 SBT trang 84), nếu loại bỏ giá trị bất thường $70$ phút thì thời gian chờ trung bình của $8$ bệnh nhân còn lại là bao nhiêu phút (viết dưới dạng số thập phân)?',
            acceptableAnswers: ['8,125', '8.125'],
            explanation:
              'Tổng thời gian của $8$ bệnh nhân còn lại là $135 - 70 = 65$ phút. Thời gian trung bình mới là $\\frac{65}{8} = 8{,}125$ phút.',
            pedagogicalTip: 'Loại bỏ giá trị ngoại lai $70$ giúp số trung bình giảm từ $15$ xuống $8{,}125$ phút, sát với thực tế hơn.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b13_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 13: Giải bài toán xác định ngưỡng thu nhập nhận hỗ trợ (Bài 5.11 SBT trang 78)',
            problemStatement:
              'Thu nhập hằng tháng (triệu đồng) của $10$ công nhân trong một tổ được ghi lại là: $5{,}5;\\ 8{,}0;\\ 6{,}5;\\ 7{,}0;\\ 9{,}5;\\ 6{,}0;\\ 7{,}5;\\ 8{,}5;\\ 7{,}0;\\ 12{,}0$. Công đoàn muốn chọn ra $25\\%$ công nhân có thu nhập thấp nhất để trao quà hỗ trợ.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để tìm ngưỡng thu nhập nhận hỗ trợ.',
            steps: [
              {
                id: 'b13_d2_s1',
                originalIndex: 1,
                content:
                  'Để xác định $25\\%$ số công nhân có mức thu nhập thấp nhất, ta cần tìm tứ phân vị thứ nhất $Q_1$ của mẫu số liệu.',
                roleDescription: 'Xác định đại lượng thống kê cần tính là Q₁',
              },
              {
                id: 'b13_d2_s2',
                originalIndex: 2,
                content:
                  'Sắp xếp mẫu số liệu gồm $n = 10$ giá trị theo thứ tự không giảm: $5{,}5;\\ 6{,}0;\\ 6{,}5;\\ 7{,}0;\\ 7{,}0;\\ 7{,}5;\\ 8{,}0;\\ 8{,}5;\\ 9{,}5;\\ 12{,}0$.',
                roleDescription: 'Sắp xếp mẫu số liệu theo thứ tự không giảm',
              },
              {
                id: 'b13_d2_s3',
                originalIndex: 3,
                content:
                  'Vì $n = 10$ chẵn nên nửa dưới của mẫu số liệu gồm $5$ giá trị đầu tiên: $5{,}5;\\ 6{,}0;\\ 6{,}5;\\ 7{,}0;\\ 7{,}0$.',
                roleDescription: 'Xác định nửa dưới của mẫu số liệu',
              },
              {
                id: 'b13_d2_s4',
                originalIndex: 4,
                content:
                  'Trung vị của nửa dưới là giá trị đứng thứ $3$: $Q_1 = 6{,}5$ (triệu đồng). Vậy những công nhân có thu nhập dưới $6{,}5$ triệu đồng (hoặc từ $6{,}5$ triệu đồng trở xuống) thuộc nhóm nhận hỗ trợ.',
                roleDescription: 'Tính Q₁ và kết luận ngưỡng thu nhập',
              },
            ],
            pedagogicalTip:
              'Tứ phân vị $Q_1$ luôn là công cụ chuẩn để xác định ngưỡng $25\\%$ thấp nhất của mẫu số liệu.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 5.11 trang 126 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-14',
    lessonNumber: 14,
    name: 'Bài 14',
    topicTitle: 'Các số đặc trưng đo độ phân tán',
    chapter: 'Chương V – Các số đặc trưng của mẫu số liệu không ghép nhóm',
    keySummary:
      'Khoảng biến thiên R, khoảng tứ phân vị Δ_Q = Q₃ - Q₁, phương sai s², độ lệch chuẩn s, nhận biết giá trị bất thường (ngoại lai) và ứng dụng chỉ số Z-score (bám sát SBT Toán 10 KNTT trang 79–85).',
    practiceExams: [
      {
        id: 'de-on-bai-14-1',
        lessonId: 'bai-14',
        title: 'Đề ôn Bài 14 - Đề số 01',
        subtitle: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn & giá trị ngoại lai (SBT KNTT trang 79–82)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 5.12, 5.13, 5.14, 5.15, 5.16 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b14_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 14: Định nghĩa khoảng biến thiên và khoảng tứ phân vị',
            prompt:
              'Cho mẫu số liệu có giá trị lớn nhất là $x_{\\max}$, giá trị nhỏ nhất là $x_{\\min}$ và các tứ phân vị là $Q_1, Q_2, Q_3$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Khoảng biến thiên $R = x_{\\max} - x_{\\min}$ và khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$.' },
              { key: 'B', content: 'Khoảng biến thiên $R = Q_3 - Q_1$ và khoảng tứ phân vị $\\Delta_Q = x_{\\max} - x_{\\min}$.' },
              { key: 'C', content: 'Khoảng tứ phân vị $\\Delta_Q = \\frac{Q_3 - Q_1}{2}$.' },
              { key: 'D', content: 'Khoảng biến thiên $R = \\frac{x_{\\max} + x_{\\min}}{2}$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định nghĩa Bài 14 (SBT trang 79): Khoảng biến thiên $R = x_{\\max} - x_{\\min}$ và khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$.',
            pedagogicalTip: '$\\Delta_Q = Q_3 - Q_1$ đo độ phân tán của $50\\%$ số liệu nằm ở chính giữa mẫu.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 14: Công thức phương sai và độ lệch chuẩn',
            prompt:
              'Cho mẫu số liệu $x_1, x_2, \\dots, x_n$ có số trung bình là $\\bar{x}$. **Phương sai** $s^2$ và **độ lệch chuẩn** $s$ của mẫu số liệu được tính theo công thức nào sau đây?',
            options: [
              { key: 'A', content: '$s^2 = \\frac{1}{n}\\left[(x_1 - \\bar{x})^2 + (x_2 - \\bar{x})^2 + \\dots + (x_n - \\bar{x})^2\\right]$ và $s = \\sqrt{s^2}$.' },
              { key: 'B', content: '$s^2 = \\frac{1}{n}\\left[|x_1 - \\bar{x}| + |x_2 - \\bar{x}| + \\dots + |x_n - \\bar{x}|\\right]$ và $s = \\sqrt{s^2}$.' },
              { key: 'C', content: '$s^2 = (x_1 - \\bar{x})^2 + \\dots + (x_n - \\bar{x})^2$.' },
              { key: 'D', content: '$s = \\frac{1}{n}\\left[(x_1 - \\bar{x})^2 + \\dots + (x_n - \\bar{x})^2\\right]$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo tóm tắt kiến thức Bài 14 (SBT trang 79): Phương sai $s^2 = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2 = \\frac{1}{n}\\sum_{i=1}^n x_i^2 - \\bar{x}^2$, và độ lệch chuẩn $s = \\sqrt{s^2}$.',
            pedagogicalTip: 'Độ lệch chuẩn $s = \\sqrt{s^2}$ có cùng đơn vị đo với dữ liệu ban đầu.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 14: Điều kiện xác định giá trị bất thường (ngoại lai)',
            prompt:
              'Cho mẫu số liệu có tứ phân vị thứ nhất $Q_1$, tứ phân vị thứ ba $Q_3$ và khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$. Một giá trị $x$ trong mẫu được coi là **giá trị bất thường** (ngoại lai) nếu:',
            options: [
              { key: 'A', content: '$x > Q_3 + 1{,}5\\Delta_Q$ hoặc $x < Q_1 - 1{,}5\\Delta_Q$.' },
              { key: 'B', content: '$x > Q_3 + \\Delta_Q$ hoặc $x < Q_1 - \\Delta_Q$.' },
              { key: 'C', content: '$x > Q_3 + 2\\Delta_Q$ hoặc $x < Q_1 - 2\\Delta_Q$.' },
              { key: 'D', content: '$x > Q_3$ hoặc $x < Q_1$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo quy tắc phát hiện giá trị bất thường (SBT trang 79): Giá trị $x$ là giá trị bất thường nếu $x > Q_3 + 1{,}5\\Delta_Q$ hoặc $x < Q_1 - 1{,}5\\Delta_Q$.',
            pedagogicalTip: 'Hệ số chuẩn quốc tế để xác định rào cản ngoại lai (Tukey fences) là $1{,}5\\Delta_Q$.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 14: Tính phương sai của mẫu số liệu nhỏ (Ví dụ 1 SBT trang 80)',
            prompt:
              'Cho mẫu số liệu gồm $5$ giá trị: $4;\\ 6;\\ 8;\\ 10;\\ 12$. Phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu này lần lượt là:',
            options: [
              { key: 'A', content: '$s^2 = 8$ và $s = 2\\sqrt{2}$' },
              { key: 'B', content: '$s^2 = 10$ và $s = \\sqrt{10}$' },
              { key: 'C', content: '$s^2 = 4$ và $s = 2$' },
              { key: 'D', content: '$s^2 = 40$ và $s = 2\\sqrt{10}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Số trung bình $\\bar{x} = 8$. Phương sai $s^2 = \\frac{(4-8)^2 + (6-8)^2 + (8-8)^2 + (10-8)^2 + (12-8)^2}{5} = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8 \\Rightarrow s = \\sqrt{8} = 2\\sqrt{2}$.',
            pedagogicalTip: 'Đừng quên chia tổng bình phương độ lệch cho cỡ mẫu $n = 5$.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 14: Phát hiện giá trị bất thường trong mẫu số liệu (Bài 5.14 SBT trang 81)',
            prompt:
              'Một mẫu số liệu có $Q_1 = 20$ và $Q_3 = 30$. Trong các giá trị dưới đây của mẫu số liệu, giá trị nào là **giá trị bất thường**?',
            options: [
              { key: 'A', content: '$48$' },
              { key: 'B', content: '$42$' },
              { key: 'C', content: '$8$' },
              { key: 'D', content: '$35$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\Delta_Q = Q_3 - Q_1 = 10 \\Rightarrow 1{,}5\\Delta_Q = 15$. Khi đó $Q_1 - 1{,}5\\Delta_Q = 5$ và $Q_3 + 1{,}5\\Delta_Q = 45$. Vì $48 > 45$ nên $48$ là giá trị bất thường.',
            pedagogicalTip: 'Tính ngưỡng dưới $Q_1 - 1{,}5\\Delta_Q = 5$ và ngưỡng trên $Q_3 + 1{,}5\\Delta_Q = 45$: mọi số nằm ngoài $[5; 45]$ là bất thường.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 14: So sánh độ ổn định của hai vận động viên bắn cung (Bài 5.15 SBT trang 81)',
            prompt:
              'Điểm số sau $10$ lần bắn của hai vận động viên bắn cung A và B có cùng điểm trung bình $\\bar{x}_A = \\bar{x}_B = 9{,}1$, nhưng độ lệch chuẩn của A là $s_A = 0{,}7$ và của B là $s_B \\approx 1{,}64$ (Bài 5.15 SBT trang 81). Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Vận động viên A có phong độ ổn định hơn vận động viên B vì $s_A < s_B$.' },
              { key: 'B', content: 'Vận động viên B có phong độ ổn định hơn vận động viên A vì $s_B > s_A$.' },
              { key: 'C', content: 'Hai vận động viên có độ ổn định như nhau vì $\\bar{x}_A = \\bar{x}_B$.' },
              { key: 'D', content: 'Không thể so sánh độ ổn định bằng độ lệch chuẩn.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.15 SBT trang 126: Độ lệch chuẩn càng nhỏ thì số liệu càng tập trung quanh giá trị trung bình, do đó vận động viên A ($s_A = 0{,}7 < s_B = 1{,}64$) bắn ổn định hơn.',
            pedagogicalTip: 'Độ lệch chuẩn $s$ càng nhỏ $\\Leftrightarrow$ mức độ phân tán càng thấp $\\Leftrightarrow$ độ ổn định càng cao.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 14: Tính chất của các số đo độ phân tán khi mẫu số liệu không đổi',
            prompt:
              'Nếu tất cả các giá trị trong mẫu số liệu đều bằng nhau ($x_1 = x_2 = \\dots = x_n = c$) thì các số đặc trưng đo độ phân tán ($R, \\Delta_Q, s^2, s$) nhận giá trị bằng:',
            options: [
              { key: 'A', content: '$0$' },
              { key: 'B', content: '$c$' },
              { key: 'C', content: '$1$' },
              { key: 'D', content: '$c^2$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khi mọi số liệu đều bằng $c$, không có sự biến thiên hay phân tán nào nên $R = \\Delta_Q = s^2 = s = 0$.',
            pedagogicalTip: 'Các số đo độ phân tán luôn không âm và chỉ bằng $0$ khi mọi giá trị của mẫu bằng nhau.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 14: Sự thay đổi phương sai và độ lệch chuẩn khi nhân hằng số',
            prompt:
              'Nếu tất cả các giá trị của một mẫu số liệu đều được nhân lên gấp $2$ lần thì độ lệch chuẩn $s$ và phương sai $s^2$ của mẫu số liệu mới thay đổi như thế nào?',
            options: [
              { key: 'A', content: 'Độ lệch chuẩn tăng gấp $2$ lần và phương sai tăng gấp $4$ lần.' },
              { key: 'B', content: 'Cả độ lệch chuẩn và phương sai đều tăng gấp $2$ lần.' },
              { key: 'C', content: 'Cả độ lệch chuẩn và phương sai đều không đổi.' },
              { key: 'D', content: 'Độ lệch chuẩn tăng $\\sqrt{2}$ lần và phương sai tăng $2$ lần.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khi nhân mọi giá trị với $k = 2$, hiệu $(2x_i - 2\\bar{x})^2 = 4(x_i - \\bar{x})^2$, nên phương sai $s^2$ tăng gấp $4$ lần và độ lệch chuẩn $s = \\sqrt{s^2}$ tăng gấp $2$ lần.',
            pedagogicalTip: 'Cộng thêm hằng số thì $R, \\Delta_Q, s, s^2$ không đổi; nhưng nhân với $k > 0$ thì $R, \\Delta_Q, s$ nhân với $k$, còn $s^2$ nhân với $k^2$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b14_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 14: So sánh hai vận động viên bắn cung (Bài 5.15 SBT trang 81)',
            prompt:
              'Điểm số trong $10$ lần bắn của hai cung thủ A và B được ghi lại như sau (Bài 5.15 SBT trang 81):\n- Cung thủ A: $8;\\ 9;\\ 10;\\ 9;\\ 9;\\ 10;\\ 9;\\ 9;\\ 8;\\ 10$.\n- Cung thủ B: $10;\\ 10;\\ 10;\\ 7;\\ 10;\\ 10;\\ 5;\\ 10;\\ 10;\\ 9$.\nXét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Điểm trung bình của cả hai cung thủ A và B đều bằng $9{,}1$.',
                isCorrect: true,
                explanation: 'Tổng điểm của A là $91 \\Rightarrow \\bar{x}_A = 9{,}1$; tổng điểm của B là $91 \\Rightarrow \\bar{x}_B = 9{,}1$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Khoảng biến thiên điểm của cung thủ A là $R_A = 2$, của cung thủ B là $R_B = 5$.',
                isCorrect: true,
                explanation: '$R_A = 10 - 8 = 2$ và $R_B = 10 - 5 = 5$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Phương sai mẫu số liệu của cung thủ A là $s_A^2 = 0{,}49$ và độ lệch chuẩn là $s_A = 0{,}7$.',
                isCorrect: true,
                explanation: 'Ta có $s_A^2 = \\frac{2(8 - 9{,}1)^2 + 5(9 - 9{,}1)^2 + 3(10 - 9{,}1)^2}{10} = \\frac{2{,}42 + 0{,}05 + 2{,}43}{10} = 0{,}49 \\Rightarrow s_A = 0{,}7$ (Bài 5.15 SBT trang 126).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Độ lệch chuẩn điểm của cung thủ B nhỏ hơn độ lệch chuẩn điểm của cung thủ A.',
                isCorrect: false,
                explanation: 'Phương sai của B là $s_B^2 = 2{,}69 \\Rightarrow s_B \\approx 1{,}64 > s_A = 0{,}7$.',
              },
            ],
            pedagogicalTip: 'Bài 5.15 SBT là ví dụ điển hình của hai mẫu có cùng số trung bình $\\bar{x} = 9{,}1$ nhưng độ phân tán rất khác nhau.',
          },
          {
            id: 'b14_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 14: Khoảng tứ phân vị và giá trị bất thường (Bài 5.13, 5.14 SBT trang 81)',
            prompt:
              'Cho mẫu số liệu gồm $9$ giá trị đã sắp xếp không giảm: $2;\\ 11;\\ 12;\\ 13;\\ 14;\\ 15;\\ 16;\\ 17;\\ 26$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Khoảng biến thiên của mẫu số liệu là $R = 24$.',
                isCorrect: true,
                explanation: '$R = x_{\\max} - x_{\\min} = 26 - 2 = 24$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tứ phân vị thứ nhất là $Q_1 = 11{,}5$ và tứ phân vị thứ ba là $Q_3 = 16{,}5$.',
                isCorrect: true,
                explanation: 'Với $n = 9$, $Q_2 = 14$. Nửa dưới $2;\\ 11;\\ 12;\\ 13$ có $Q_1 = \\frac{11 + 12}{2} = 11{,}5$; nửa trên $15;\\ 16;\\ 17;\\ 26$ có $Q_3 = \\frac{16 + 17}{2} = 16{,}5$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q = 5$.',
                isCorrect: true,
                explanation: '$\\Delta_Q = Q_3 - Q_1 = 16{,}5 - 11{,}5 = 5$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Mẫu số liệu trên không có giá trị bất thường nào.',
                isCorrect: false,
                explanation: 'Ta có $Q_1 - 1{,}5\\Delta_Q = 11{,}5 - 7{,}5 = 4$ và $Q_3 + 1{,}5\\Delta_Q = 16{,}5 + 7{,}5 = 24$. Vì $2 < 4$ và $26 > 24$ nên cả hai giá trị $2$ và $26$ đều là giá trị bất thường!',
              },
            ],
            pedagogicalTip: 'Kiểm tra cả hai đầu: nhỏ hơn $Q_1 - 1{,}5\\Delta_Q$ và lớn hơn $Q_3 + 1{,}5\\Delta_Q$.',
          },
        ],
        part3: [
          {
            id: 'b14_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 14: Tính khoảng biến thiên R',
            prompt:
              'Nhiệt độ cao nhất (đơn vị: $^\\circ\\text{C}$) tại Hà Nội trong $7$ ngày liên tiếp được ghi lại là: $28;\\ 31;\\ 29;\\ 34;\\ 27;\\ 30;\\ 32$. Tính khoảng biến thiên $R$ của mẫu số liệu.',
            acceptableAnswers: ['7'],
            explanation:
              'Giá trị lớn nhất $x_{\\max} = 34$, giá trị nhỏ nhất $x_{\\min} = 27$. Khoảng biến thiên $R = 34 - 27 = 7$.',
            pedagogicalTip: '$R = x_{\\max} - x_{\\min}$.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 14: Tính khoảng tứ phân vị Δ_Q',
            prompt:
              'Cho mẫu số liệu đã sắp xếp không giảm gồm $8$ giá trị: $5;\\ 7;\\ 9;\\ 10;\\ 12;\\ 14;\\ 16;\\ 20$. Tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu.',
            acceptableAnswers: ['7'],
            explanation:
              'Nửa dưới $5;\\ 7;\\ 9;\\ 10 \\Rightarrow Q_1 = \\frac{7 + 9}{2} = 8$. Nửa trên $12;\\ 14;\\ 16;\\ 20 \\Rightarrow Q_3 = \\frac{14 + 16}{2} = 15$. Vậy $\\Delta_Q = Q_3 - Q_1 = 15 - 8 = 7$.',
            pedagogicalTip: 'Tính $Q_1$ và $Q_3$ rồi lấy $Q_3 - Q_1$.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 14: Tính phương sai của mẫu số liệu',
            prompt:
              'Cho mẫu số liệu gồm $4$ giá trị: $3;\\ 5;\\ 7;\\ 9$. Tính phương sai $s^2$ của mẫu số liệu.',
            acceptableAnswers: ['5'],
            explanation:
              'Số trung bình $\\bar{x} = 6$. Phương sai $s^2 = \\frac{(3-6)^2 + (5-6)^2 + (7-6)^2 + (9-6)^2}{4} = \\frac{9 + 1 + 1 + 9}{4} = 5$.',
            pedagogicalTip: 'Tính $\\bar{x} = 6$ trước rồi lấy trung bình cộng của các bình phương độ lệch.',
            points: 0.5,
          },
          {
            id: 'b14_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 14: Tính ngưỡng trên xác định giá trị bất thường',
            prompt:
              'Một mẫu số liệu có tứ phân vị thứ nhất $Q_1 = 12$ và tứ phân vị thứ ba $Q_3 = 20$. Một giá trị $x$ vượt quá ngưỡng $M = Q_3 + 1{,}5\\Delta_Q$ sẽ được xem là giá trị bất thường lớn. Tính giá trị của ngưỡng $M$.',
            acceptableAnswers: ['32'],
            explanation:
              'Ta có $\\Delta_Q = Q_3 - Q_1 = 20 - 12 = 8$. Ngưỡng trên là $M = Q_3 + 1{,}5\\Delta_Q = 20 + 1{,}5 \\cdot 8 = 32$.',
            pedagogicalTip: '$M = Q_3 + 1{,}5(Q_3 - Q_1)$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b14_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 14: Quy trình tính phương sai, độ lệch chuẩn để so sánh độ ổn định (Bài 5.15 SBT trang 81)',
            problemStatement:
              'Điểm $10$ lần bắn của cung thủ A là: $8;\\ 9;\\ 10;\\ 9;\\ 9;\\ 10;\\ 9;\\ 9;\\ 8;\\ 10$ (có $2$ điểm $8$, $5$ điểm $9$ và $3$ điểm $10$). Hãy tính phương sai $s_A^2$ và độ lệch chuẩn $s_A$ của mẫu số liệu này.',
            conclusionTarget:
              'Hãy sắp xếp các bước tính toán sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b14_d1_s1',
                originalIndex: 1,
                content:
                  'Tính điểm trung bình cộng của cung thủ A qua $n = 10$ lần bắn: $\\bar{x}_A = \\frac{2\\cdot 8 + 5\\cdot 9 + 3\\cdot 10}{10} = \\frac{91}{10} = 9{,}1$.',
                roleDescription: 'Tính số trung bình cộng x̄_A = 9,1',
              },
              {
                id: 'b14_d1_s2',
                originalIndex: 2,
                content:
                  'Tính tổng bình phương các độ lệch so với số trung bình: $2(8 - 9{,}1)^2 + 5(9 - 9{,}1)^2 + 3(10 - 9{,}1)^2 = 2\\cdot 1{,}21 + 5\\cdot 0{,}01 + 3\\cdot 0{,}81 = 4{,}9$.',
                roleDescription: 'Tính tổng bình phương các độ lệch',
              },
              {
                id: 'b14_d1_s3',
                originalIndex: 3,
                content:
                  'Chia tổng bình phương các độ lệch cho cỡ mẫu $n = 10$ để được phương sai: $s_A^2 = \\frac{4{,}9}{10} = 0{,}49$.',
                roleDescription: 'Tính phương sai s_A² = 0,49',
              },
              {
                id: 'b14_d1_s4',
                originalIndex: 4,
                content:
                  'Lấy căn bậc hai của phương sai để được độ lệch chuẩn: $s_A = \\sqrt{0{,}49} = 0{,}7$.',
                roleDescription: 'Khai căn phương sai để tìm độ lệch chuẩn s_A = 0,7',
              },
            ],
            pedagogicalTip:
              'Khi dữ liệu có các giá trị lặp lại, gom theo tần số $n_i(x_i - \\bar{x})^2$ giúp tính phương sai nhanh gấp nhiều lần.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 5.15 trang 126 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-14-2',
        lessonId: 'bai-14',
        title: 'Đề ôn Bài 14 - Đề số 02',
        subtitle: 'Ứng dụng độ lệch chuẩn & chỉ số Z-score của WHO trong thực tiễn (SBT KNTT trang 81–85)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát các bài tập vận dụng 5.16, 5.33 (chỉ số Z-score đánh giá suy dinh dưỡng của WHO) và các câu hỏi tổng hợp Chương V trong SBT Toán 10 KNTT.',
        part1: [
          {
            id: 'b14_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 14: Bài toán chỉ số Z-score của WHO (Bài 5.33 SBT trang 84)',
            prompt:
              'Theo Tổ chức Y tế Thế giới (WHO), chỉ số $Z\\text{-score}$ về chiều cao của một trẻ em được tính theo công thức $Z = \\frac{H - \\bar{h}}{s}$, trong đó $H$ là chiều cao thực tế của trẻ, $\\bar{h}$ và $s$ lần lượt là chiều cao trung bình và độ lệch chuẩn của nhóm trẻ cùng độ tuổi - giới tính (trẻ bị suy dinh dưỡng thể thấp còi nếu $Z < -2$). Với bé trai $10$ tháng tuổi có $\\bar{h} = 73{,}3\\text{ cm}$ và $s = 2{,}384\\text{ cm}$, nếu một bé trai $10$ tháng tuổi cao $H = 67\\text{ cm}$ thì chỉ số $Z\\text{-score}$ của bé gần nhất với (Bài 5.33 SBT trang 84):',
            options: [
              { key: 'A', content: '$-2{,}64$' },
              { key: 'B', content: '$2{,}64$' },
              { key: 'C', content: '$-1{,}85$' },
              { key: 'D', content: '$-6{,}30$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 5.33 SBT trang 127: $Z = \\frac{67 - 73{,}3}{2{,}384} = \\frac{-6{,}3}{2{,}384} \\approx -2{,}64 < -2$ (bé thuộc diện suy dinh dưỡng thể thấp còi).',
            pedagogicalTip: 'Chỉ số $Z = \\frac{H - \\bar{h}}{s}$ cho biết chiều cao của trẻ lệch bao nhiêu lần độ lệch chuẩn so với mức trung bình.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 14: Tính phương sai từ bảng tần số',
            prompt:
              'Cho mẫu số liệu thống kê điểm kiểm tra của $10$ học sinh trong bảng tần số: điểm $7$ ($3$ học sinh), điểm $8$ ($4$ học sinh), điểm $9$ ($3$ học sinh). Phương sai $s^2$ của mẫu số liệu này bằng:',
            options: [
              { key: 'A', content: '$0{,}6$' },
              { key: 'B', content: '$0{,}8$' },
              { key: 'C', content: '$6$' },
              { key: 'D', content: '$\\sqrt{0{,}6}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Điểm trung bình $\\bar{x} = 8$. Phương sai $s^2 = \\frac{3(7-8)^2 + 4(8-8)^2 + 3(9-8)^2}{10} = \\frac{3 + 0 + 3}{10} = 0{,}6$.',
            pedagogicalTip: 'Nhân bình phương độ lệch $(x_i - \\bar{x})^2$ với tần số $n_i$ tương ứng.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 14: Ưu điểm của khoảng tứ phân vị so với khoảng biến thiên',
            prompt:
              'Ưu điểm nổi bật của **khoảng tứ phân vị** $\\Delta_Q$ so với **khoảng biến thiên** $R$ khi đo độ phân tán của mẫu số liệu là gì?',
            options: [
              { key: 'A', content: 'Khoảng tứ phân vị $\\Delta_Q$ không bị ảnh hưởng bởi các giá trị bất thường (quá lớn hoặc quá nhỏ) ở hai đầu mẫu số liệu.' },
              { key: 'B', content: 'Khoảng tứ phân vị $\\Delta_Q$ luôn lớn hơn khoảng biến thiên $R$.' },
              { key: 'C', content: 'Khoảng tứ phân vị $\\Delta_Q$ sử dụng tất cả mọi giá trị trong mẫu số liệu.' },
              { key: 'D', content: 'Khoảng tứ phân vị $\\Delta_Q$ không cần sắp xếp mẫu số liệu.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $R = x_{\\max} - x_{\\min}$ phụ thuộc hoàn toàn vào hai giá trị cực biên nên rất nhạy cảm với giá trị ngoại lai, còn $\\Delta_Q = Q_3 - Q_1$ chỉ xét $50\\%$ số liệu ở giữa nên không bị ảnh hưởng bởi các giá trị bất thường.',
            pedagogicalTip: 'Khi mẫu có giá trị ngoại lai: dùng $M_e$ đo xu thế trung tâm và dùng $\\Delta_Q$ đo độ phân tán.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 14: Sự bất biến của phương sai khi tịnh tiến số liệu',
            prompt:
              'Cho mẫu số liệu $x_1, x_2, \\dots, x_n$ có độ lệch chuẩn là $s = 3{,}5$. Nếu cộng thêm $100$ vào mỗi giá trị của mẫu số liệu thì độ lệch chuẩn của mẫu số liệu mới bằng:',
            options: [
              { key: 'A', content: '$3{,}5$' },
              { key: 'B', content: '$103{,}5$' },
              { key: 'C', content: '$350$' },
              { key: 'D', content: '$12{,}25$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Khi cộng thêm $100$ vào mỗi giá trị thì số trung bình cũng tăng thêm $100$, nên hiệu $(x_i + 100) - (\\bar{x} + 100) = x_i - \\bar{x}$ không đổi. Do đó độ lệch chuẩn vẫn bằng $3{,}5$.',
            pedagogicalTip: 'Phép tịnh tiến $x_i + c$ giữ nguyên khoảng cách giữa các số liệu nên giữ nguyên $R, \\Delta_Q, s^2, s$.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 14: Công thức rút gọn tính phương sai',
            prompt:
              'Một mẫu số liệu gồm $n = 10$ giá trị có số trung bình $\\bar{x} = 5$ và tổng bình phương các giá trị $\\sum_{i=1}^{10} x_i^2 = 290$. Phương sai $s^2$ của mẫu số liệu bằng:',
            options: [
              { key: 'A', content: '$4$' },
              { key: 'B', content: '$2$' },
              { key: 'C', content: '$24$' },
              { key: 'D', content: '$29$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Áp dụng công thức $s^2 = \\frac{1}{n}\\sum_{i=1}^n x_i^2 - \\bar{x}^2 = \\frac{290}{10} - 5^2 = 29 - 25 = 4$.',
            pedagogicalTip: 'Công thức $s^2 = \\overline{x^2} - (\\bar{x})^2$ giúp tính phương sai cực nhanh khi $\\bar{x}$ hoặc $x_i$ đã biết.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 14: Đánh giá độ đồng đều của hai lớp học',
            prompt:
              'Điểm kiểm tra Toán của lớp 10A có $\\bar{x}_A = 7{,}5, s_A = 1{,}2$; của lớp 10B có $\\bar{x}_B = 7{,}5, s_B = 2{,}1$. Nhận xét nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Học lực môn Toán của học sinh lớp 10A đồng đều hơn lớp 10B.' },
              { key: 'B', content: 'Học lực môn Toán của học sinh lớp 10B đồng đều hơn lớp 10A.' },
              { key: 'C', content: 'Lớp 10B có điểm trung bình cao hơn lớp 10A.' },
              { key: 'D', content: 'Hai lớp có mức độ đồng đều như nhau.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $s_A = 1{,}2 < s_B = 2{,}1$ nên điểm số của lớp 10A ít phân tán hơn, tức là học lực đồng đều hơn lớp 10B.',
            pedagogicalTip: 'Độ lệch chuẩn nhỏ hơn đồng nghĩa với mức độ đồng đều cao hơn.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 14: Tìm khoảng giá trị không bất thường',
            prompt:
              'Cho mẫu số liệu có $Q_1 = 40$ và $Q_3 = 60$. Một giá trị $x$ trong mẫu **không** phải là giá trị bất thường khi và chỉ khi $x$ thuộc đoạn nào sau đây?',
            options: [
              { key: 'A', content: '$[10; 90]$' },
              { key: 'B', content: '$[20; 80]$' },
              { key: 'C', content: '$[40; 60]$' },
              { key: 'D', content: '$[30; 70]$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\Delta_Q = 60 - 40 = 20 \\Rightarrow 1{,}5\\Delta_Q = 30$. Đoạn các giá trị bình thường là $[Q_1 - 1{,}5\\Delta_Q;\\ Q_3 + 1{,}5\\Delta_Q] = [40 - 30;\\ 60 + 30] = [10; 90]$.',
            pedagogicalTip: 'Giá trị bình thường nằm trong đoạn $[Q_1 - 1{,}5\\Delta_Q;\\ Q_3 + 1{,}5\\Delta_Q]$.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 14: So sánh khoảng biến thiên và khoảng tứ phân vị',
            prompt:
              'Trong mọi mẫu số liệu thống kê, quan hệ giữa khoảng tứ phân vị $\\Delta_Q$ và khoảng biến thiên $R$ luôn thỏa mãn:',
            options: [
              { key: 'A', content: '$0 \\le \\Delta_Q \\le R$' },
              { key: 'B', content: '$\\Delta_Q > R$' },
              { key: 'C', content: '$\\Delta_Q = \\frac{1}{2}R$' },
              { key: 'D', content: '$\\Delta_Q = 2R$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $x_{\\min} \\le Q_1 \\le Q_3 \\le x_{\\max}$ nên $0 \\le Q_3 - Q_1 \\le x_{\\max} - x_{\\min} \\Leftrightarrow 0 \\le \\Delta_Q \\le R$.',
            pedagogicalTip: 'Đoạn $[Q_1; Q_3]$ luôn nằm trọn trong đoạn $[x_{\\min}; x_{\\max}]$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b14_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 14: Bài toán đánh giá dinh dưỡng trẻ em theo chuẩn WHO (Bài 5.33 SBT trang 84)',
            prompt:
              'Theo chuẩn của Tổ chức Y tế Thế giới (WHO), đối với bé trai $10$ tháng tuổi, chiều cao trung bình là $\\bar{h} = 73{,}3\\text{ cm}$ và độ lệch chuẩn là $s = 2{,}384\\text{ cm}$. Chỉ số $Z\\text{-score}$ của một bé có chiều cao $H$ (cm) là $Z = \\frac{H - \\bar{h}}{s}$, và trẻ bị coi là suy dinh dưỡng thể thấp còi nếu $Z < -2$ (Bài 5.33 SBT trang 84). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Nếu một bé trai $10$ tháng tuổi có chiều cao đúng bằng $73{,}3\\text{ cm}$ thì chỉ số $Z\\text{-score}$ của bé bằng $0$.',
                isCorrect: true,
                explanation: 'Khi $H = \\bar{h} = 73{,}3$ thì $Z = \\frac{73{,}3 - 73{,}3}{2{,}384} = 0$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Bé An ($10$ tháng tuổi) có chiều cao $H = 67\\text{ cm}$ thì có chỉ số $Z \\approx -2{,}64$ và bị suy dinh dưỡng thể thấp còi.',
                isCorrect: true,
                explanation: '$Z = \\frac{67 - 73{,}3}{2{,}384} \\approx -2{,}64 < -2$ (Bài 5.33 SBT trang 127).',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Chiều cao tối thiểu để một bé trai $10$ tháng tuổi không bị coi là suy dinh dưỡng thể thấp còi ($Z \\ge -2$) là khoảng $68{,}53\\text{ cm}$.',
                isCorrect: true,
                explanation: '$Z \\ge -2 \\Leftrightarrow H \\ge \\bar{h} - 2s = 73{,}3 - 2\\cdot 2{,}384 = 68{,}532\\text{ cm}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Bé Bảo ($10$ tháng tuổi) có chiều cao $H = 70\\text{ cm}$ cũng bị suy dinh dưỡng thể thấp còi.',
                isCorrect: false,
                explanation: 'Với $H = 70\\text{ cm} > 68{,}532\\text{ cm}$, ta có $Z = \\frac{70 - 73{,}3}{2{,}384} \\approx -1{,}38 > -2$, nên bé Bảo không bị suy dinh dưỡng thể thấp còi.',
              },
            ],
            pedagogicalTip: 'Điều kiện $Z < -2$ tương đương với $H < \\bar{h} - 2s$ (thấp hơn mức trung bình quá $2$ lần độ lệch chuẩn).',
          },
          {
            id: 'b14_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 14: Phân tích sản lượng lúa của hai giống lúa mới (Bài 5.16 SBT trang 82)',
            prompt:
              'Năng suất (đơn vị: tạ/ha) của hai giống lúa A và B trồng thử nghiệm trên $5$ thửa ruộng được ghi lại như sau:\n- Giống lúa A: $62;\\ 64;\\ 65;\\ 66;\\ 68$.\n- Giống lúa B: $58;\\ 62;\\ 65;\\ 68;\\ 72$.\nXét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Năng suất trung bình của hai giống lúa A và B đều bằng $65$ tạ/ha.',
                isCorrect: true,
                explanation: '$\\bar{x}_A = \\frac{62+64+65+66+68}{5} = 65$ và $\\bar{x}_B = \\frac{58+62+65+68+72}{5} = 65$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Khoảng biến thiên năng suất của giống A là $R_A = 6$, của giống B là $R_B = 14$.',
                isCorrect: true,
                explanation: '$R_A = 68 - 62 = 6$ và $R_B = 72 - 58 = 14$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Phương sai năng suất của giống lúa A bằng $4$.',
                isCorrect: true,
                explanation: '$s_A^2 = \\frac{(-3)^2 + (-1)^2 + 0^2 + 1^2 + 3^2}{5} = \\frac{9 + 1 + 0 + 1 + 9}{5} = 4$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Giống lúa B có năng suất ổn định hơn giống lúa A.',
                isCorrect: false,
                explanation: 'Phương sai của B là $s_B^2 = \\frac{(-7)^2 + (-3)^2 + 0 + 3^2 + 7^2}{5} = 23{,}2 > s_A^2 = 4$, nên giống lúa A ổn định hơn nhiều so với giống lúa B.',
              },
            ],
            pedagogicalTip: 'Khi hai giống lúa có cùng năng suất trung bình, người nông dân ưu tiên chọn giống có phương sai/độ lệch chuẩn nhỏ hơn vì năng suất ổn định hơn.',
          },
        ],
        part3: [
          {
            id: 'b14_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 14: Tính độ lệch chuẩn của mẫu số liệu',
            prompt:
              'Cho mẫu số liệu gồm $5$ giá trị: $6;\\ 8;\\ 10;\\ 12;\\ 14$. Tính độ lệch chuẩn $s$ của mẫu số liệu (làm tròn đến hàng phần trăm).',
            acceptableAnswers: ['2,83', '2.83'],
            explanation:
              'Số trung bình $\\bar{x} = 10$. Phương sai $s^2 = \\frac{16 + 4 + 0 + 4 + 16}{5} = 8 \\Rightarrow s = \\sqrt{8} \\approx 2{,}83$.',
            pedagogicalTip: '$\\sqrt{8} = 2\\sqrt{2} \\approx 2{,}83$.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 14: Tính phương sai sau khi nhân số liệu với hằng số',
            prompt:
              'Một mẫu số liệu có phương sai bằng $3$. Nếu nhân mỗi giá trị của mẫu số liệu đó với $4$ rồi cộng thêm $10$ thì phương sai của mẫu số liệu mới bằng bao nhiêu?',
            acceptableAnswers: ['48'],
            explanation:
              'Khi biến đổi $y_i = 4x_i + 10$, cộng thêm $10$ không làm đổi phương sai, còn nhân với $4$ làm phương sai nhân với $4^2 = 16$. Vậy phương sai mới là $16 \\cdot 3 = 48$.',
            pedagogicalTip: 'Với phép biến đổi tuyến tính $y_i = ax_i + b$: $s_y^2 = a^2 s_x^2$ và $s_y = |a|s_x$.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 14: Tính chỉ số Z-score (Bài 5.33 SBT trang 84)',
            prompt:
              'Giả sử chiều cao của nhóm trẻ $2$ tuổi có trung bình $\\bar{h} = 86\\text{ cm}$ và độ lệch chuẩn $s = 3{,}2\\text{ cm}$. Một bé $2$ tuổi cao $H = 79{,}6\\text{ cm}$ có chỉ số $Z = \\frac{H - \\bar{h}}{s}$ bằng bao nhiêu?',
            acceptableAnswers: ['-2'],
            explanation:
              'Ta có $Z = \\frac{79{,}6 - 86}{3{,}2} = \\frac{-6{,}4}{3{,}2} = -2$.',
            pedagogicalTip: 'Chú ý dấu âm vì $H < \\bar{h}$.',
            points: 0.5,
          },
          {
            id: 'b14_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 14: Tìm số giá trị bất thường trong mẫu số liệu',
            prompt:
              'Cho mẫu số liệu gồm $9$ giá trị: $1;\\ 20;\\ 22;\\ 23;\\ 24;\\ 25;\\ 26;\\ 28;\\ 50$. Có bao nhiêu giá trị bất thường (ngoại lai) trong mẫu số liệu trên?',
            acceptableAnswers: ['2'],
            explanation:
              'Với $n = 9$: $Q_1 = \\frac{20 + 22}{2} = 21$ và $Q_3 = \\frac{26 + 28}{2} = 27 \\Rightarrow \\Delta_Q = 6$. Đoạn bình thường là $[21 - 9;\\ 27 + 9] = [12; 36]$. Hai giá trị $1 < 12$ và $50 > 36$ là $2$ giá trị bất thường.',
            pedagogicalTip: 'Tìm đoạn $[Q_1 - 1{,}5\\Delta_Q;\\ Q_3 + 1{,}5\\Delta_Q]$ rồi đếm các số nằm ngoài đoạn đó.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b14_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 14: Quy trình phát hiện giá trị bất thường bằng khoảng tứ phân vị (Ví dụ 2 & Bài 5.14 SBT trang 80–81)',
            problemStatement:
              'Cho mẫu số liệu thống kê gồm $9$ giá trị: $25;\\ 3;\\ 28;\\ 30;\\ 26;\\ 24;\\ 29;\\ 27;\\ 48$. Hãy tìm khoảng tứ phân vị $\\Delta_Q$ và xác định các giá trị bất thường trong mẫu số liệu trên.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b14_d2_s1',
                originalIndex: 1,
                content:
                  'Sắp xếp mẫu số liệu gồm $n = 9$ giá trị theo thứ tự không giảm: $3;\\ 24;\\ 25;\\ 26;\\ 27;\\ 28;\\ 29;\\ 30;\\ 48$. Khi đó trung vị là $Q_2 = 27$.',
                roleDescription: 'Sắp xếp mẫu số liệu và tìm trung vị Q₂',
              },
              {
                id: 'b14_d2_s2',
                originalIndex: 2,
                content:
                  'Tìm tứ phân vị thứ nhất từ nửa dưới ($3;\\ 24;\\ 25;\\ 26$): $Q_1 = \\frac{24 + 25}{2} = 24{,}5$; tìm tứ phân vị thứ ba từ nửa trên ($28;\\ 29;\\ 30;\\ 48$): $Q_3 = \\frac{29 + 30}{2} = 29{,}5$.',
                roleDescription: 'Tính Q₁ = 24,5 và Q₃ = 29,5',
              },
              {
                id: 'b14_d2_s3',
                originalIndex: 3,
                content:
                  'Tính khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1 = 29{,}5 - 24{,}5 = 5$, suy ra hai ngưỡng kiểm tra là $Q_1 - 1{,}5\\Delta_Q = 17$ và $Q_3 + 1{,}5\\Delta_Q = 37$.',
                roleDescription: 'Tính Δ_Q và hai ngưỡng Q₁ - 1,5Δ_Q; Q₃ + 1,5Δ_Q',
              },
              {
                id: 'b14_d2_s4',
                originalIndex: 4,
                content:
                  'So sánh các số liệu với đoạn $[17; 37]$, ta thấy $3 < 17$ và $48 > 37$. Vậy mẫu số liệu có hai giá trị bất thường là $3$ và $48$.',
                roleDescription: 'Đối chiếu với hai ngưỡng và kết luận các giá trị bất thường',
              },
            ],
            pedagogicalTip:
              'Quy trình 4 bước phát hiện ngoại lai: Sắp xếp mẫu $\\rightarrow$ Tính $Q_1, Q_3$ $\\rightarrow$ Tính $\\Delta_Q$ và hai ngưỡng $Q_1 - 1{,}5\\Delta_Q, Q_3 + 1{,}5\\Delta_Q$ $\\rightarrow$ Kết luận.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 5.14 trang 81 & 126 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
];
