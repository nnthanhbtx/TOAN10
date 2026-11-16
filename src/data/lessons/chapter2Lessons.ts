import { LessonCatalogItem } from '../../types/exam';

export const chapter2Lessons: LessonCatalogItem[] = [
  {
    id: 'bai-3',
    lessonNumber: 3,
    name: 'Bài 3',
    topicTitle: 'Bất phương trình bậc nhất hai ẩn',
    chapter: 'Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
    keySummary:
      'Nhận biết bất phương trình bậc nhất hai ẩn $ax + by \\le c$ ($<, >, \\ge$ với $a^2 + b^2 > 0$); xác định nghiệm và biểu diễn miền nghiệm trên mặt phẳng tọa độ $Oxy$; vận dụng mô hình hóa bài toán thực tiễn.',
    practiceExams: [
      {
        id: 'de-on-bai-3-1',
        lessonId: 'bai-3',
        title: 'Đề ôn Bài 3 - Đề số 01',
        subtitle: 'Bám sát Ví dụ & Bài tập Bài 3: BPT bậc nhất hai ẩn (SBT Kết nối tri thức Toán 10, trang 16–20)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 01 của Bài 3 (Bất phương trình bậc nhất hai ẩn) bám sát Ví dụ 1–2 và Bài tập 2.1–2.5, 2.10, 2.12–2.14 trong SBT Toán 10 Kết nối tri thức.',
        part1: [
          {
            id: 'b3_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 3: Nhận diện BPT bậc nhất hai ẩn (Bài 2.10 SBT trang 24)',
            prompt:
              'Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn?',
            options: [
              { key: 'A', content: '$2x^2 + 3y > 4$.' },
              { key: 'B', content: '$xy + x < 5$.' },
              { key: 'C', content: '$3^2x + 4^3y \\ge 6$.' },
              { key: 'D', content: '$x + y^3 \\le 3$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Bất phương trình $3^2x + 4^3y \\ge 6 \\Leftrightarrow 9x + 64y \\ge 6$ có dạng $ax + by \\ge c$ với $a = 9, b = 64$ nên là BPT bậc nhất hai ẩn (Bài 2.10 trang 24 SBT).',
            pedagogicalTip:
              'Chú ý $3^2 = 9$ và $4^3 = 64$ là các hệ số hằng số, còn ẩn $x, y$ đều có số mũ bằng $1$.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 3: Kiểm tra điểm thuộc miền nghiệm (Bài 2.12 SBT trang 24)',
            prompt:
              'Điểm nào dưới đây thuộc miền nghiệm của bất phương trình $2x + 5y \\le 10$?',
            options: [
              { key: 'A', content: '$(5; 2)$.' },
              { key: 'B', content: '$(-1; 4)$.' },
              { key: 'C', content: '$(2; 1)$.' },
              { key: 'D', content: '$(-5; 6)$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Thay tọa độ điểm $(2; 1)$ vào vế trái ta được $2 \\cdot 2 + 5 \\cdot 1 = 9 \\le 10$ (đúng). Các điểm A ($10+10=20$), B ($-2+20=18$), D ($-10+30=20$) đều không thỏa mãn.',
            pedagogicalTip: 'Thay trực tiếp $x = x_0, y = y_0$ vào bất phương trình để kiểm tra.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 3: Điểm không thuộc miền nghiệm (Bài 2.13 SBT trang 24)',
            prompt:
              'Điểm nào dưới đây KHÔNG thuộc miền nghiệm của bất phương trình $2x - 3y > 13$?',
            options: [
              { key: 'A', content: '$(1; -5)$.' },
              { key: 'B', content: '$(2; -4)$.' },
              { key: 'C', content: '$(3; -3)$.' },
              { key: 'D', content: '$(8; 1)$.' },
            ],
            correctAnswer: 'D',
            explanation:
              'Thay $(8; 1)$ vào vế trái ta có $2 \\cdot 8 - 3 \\cdot 1 = 13$, mà $13 > 13$ là mệnh đề sai. Vậy điểm $(8; 1)$ không thuộc miền nghiệm (Bài 2.13 trang 24 SBT).',
            pedagogicalTip: 'Bất phương trình có dấu $>$ nghiêm ngặt nên các điểm nằm trên đường thẳng bờ $2x - 3y = 13$ không thuộc miền nghiệm.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 3: Biểu diễn miền nghiệm trên mặt phẳng Oxy (Ví dụ 1 & Bài 2.14 SBT)',
            prompt: 'Cho bất phương trình $x + 2y \\le 3$. Khẳng định nào sau đây là ĐÚNG?',
            options: [
              {
                key: 'A',
                content:
                  'Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d: x + 2y = 3$ chứa gốc tọa độ $O(0; 0)$.',
              },
              {
                key: 'B',
                content:
                  'Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d: x + 2y = 3$ không chứa gốc tọa độ $O(0; 0)$.',
              },
              {
                key: 'C',
                content:
                  'Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d: x + 2y = -3$ chứa gốc tọa độ $O(0; 0)$.',
              },
              {
                key: 'D',
                content:
                  'Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d: x + 2y = -3$ không chứa gốc tọa độ $O(0; 0)$.',
              },
            ],
            correctAnswer: 'A',
            explanation:
              'Đường thẳng bờ là $d: x + 2y = 3$. Thay $O(0; 0)$ vào bất phương trình ta có $0 + 2 \\cdot 0 = 0 \\le 3$ (đúng), nên miền nghiệm là nửa mặt phẳng bờ $d: x + 2y = 3$ chứa gốc tọa độ $O$ (Ví dụ 1 trang 16 & Bài 2.14 trang 24 SBT).',
            pedagogicalTip: 'Khi $c \\ne 0$, luôn thử điểm gốc tọa độ $O(0; 0)$ để xác định nhanh nửa mặt phẳng.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 3: Rút gọn BPT bậc nhất hai ẩn (Bài 2.2 SBT trang 18)',
            prompt:
              'Bằng cách chuyển vế, bất phương trình $2x + 3y + 3 \\le 5x + 2y + 3$ tương đương với bất phương trình nào sau đây?',
            options: [
              { key: 'A', content: '$3x - y \\ge 0$.' },
              { key: 'B', content: '$3x - y \\le 0$.' },
              { key: 'C', content: '$3x + y \\ge 0$.' },
              { key: 'D', content: '$3x - y > 3$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Chuyển vế ta được $0 \\le (5x - 2x) + (2y - 3y) + (3 - 3) \\Leftrightarrow 3x - y \\ge 0$ (Bài 2.2 trang 18 & 88 SBT).',
            pedagogicalTip: 'Khi $c = 0$ (đường thẳng bờ đi qua gốc tọa độ $O$), ta chọn điểm thử $M(1; 0)$ hoặc $(0; 1)$ để xác định miền nghiệm.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 3: Lập BPT từ miền nghiệm cho trước (Bài 2.3 SBT trang 18)',
            prompt:
              'Đường thẳng $d$ đi qua hai điểm $(0; -2)$ và $(4; 0)$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Bất phương trình nào sau đây có miền nghiệm là nửa mặt phẳng bờ $d$ (kể cả bờ $d$) chứa gốc tọa độ $O(0; 0)$?',
            options: [
              { key: 'A', content: '$x - 2y \\le 4$.' },
              { key: 'B', content: '$x - 2y \\ge 4$.' },
              { key: 'C', content: '$2x - y \\le 4$.' },
              { key: 'D', content: '$x + 2y \\le -4$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Đường thẳng $d$ đi qua $(0; -2)$ và $(4; 0)$ có phương trình $\\frac{x}{4} + \\frac{y}{-2} = 1 \\Leftrightarrow x - 2y = 4$. Vì miền nghiệm kể cả bờ $d$ và chứa $O(0; 0)$ mà $0 - 2 \\cdot 0 = 0 < 4$ nên BPT cần tìm là $x - 2y \\le 4$ (Bài 2.3 trang 18 & 88 SBT).',
            pedagogicalTip: 'Viết phương trình đoạn chắn $\\frac{x}{a} + \\frac{y}{b} = 1$, sau đó thay tọa độ $O(0;0)$ để chọn dấu $\\le$ hoặc $\\ge$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b3_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 3: Phân tích miền nghiệm BPT bậc nhất hai ẩn (Bài 2.1 & 2.4 SBT)',
            prompt:
              'Cho bất phương trình bậc nhất hai ẩn $x + 2y \\ge -4$ (Bài 2.4 SBT trang 19). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Đường thẳng bờ $d: x + 2y = -4$ cắt trục hoành tại $(-4; 0)$ và cắt trục tung tại $(0; -2)$.',
                isCorrect: true,
                explanation: 'Cho $y = 0 \\Rightarrow x = -4$; cho $x = 0 \\Rightarrow y = -2$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O(0; 0)$ (kể cả bờ $d$).',
                isCorrect: true,
                explanation: 'Thay $O(0; 0)$ vào vế trái được $0 + 2 \\cdot 0 = 0 \\ge -4$ (đúng).',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Điểm $M(-2; -1)$ thuộc miền nghiệm của bất phương trình đã cho.',
                isCorrect: true,
                explanation: 'Với $M(-2; -1)$, ta có $-2 + 2(-1) = -4 \\ge -4$ (đúng, nằm ngay trên bờ $d$).',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Có đúng $4$ điểm $(x; y)$ thuộc miền nghiệm mà cả $x$ và $y$ đều là các số nguyên âm.',
                isCorrect: false,
                explanation:
                  'Vì $x, y \\in \\mathbb{Z}^-$ nên $x \\le -1, y \\le -1 \\Rightarrow 2y \\le -2$. Để $x + 2y \\ge -4$ thì $y$ chỉ có thể bằng $-1$ (vì nếu $y \\le -2$ thì $x + 2y \\le -1 - 4 = -5 < -4$). Khi $y = -1 \\Rightarrow x - 2 \\ge -4 \\Leftrightarrow x \\ge -2 \\Rightarrow x \\in \\{-1; -2\\}$. Vậy chỉ có đúng $2$ điểm là $(-1; -1)$ và $(-2; -1)$ (trang 88 SBT).',
              },
            ],
            pedagogicalTip: 'Đánh giá chặn trên của tổng số nguyên âm bằng cách thử $y = -1, -2, \\dots$',
          },
          {
            id: 'b3_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 3: Bài toán thực tế bán hàng và trộn cà phê (Ví dụ 2 & Bài 2.5 SBT)',
            prompt:
              'Một cửa hàng bán lẻ bán hai loại hạt cà phê: loại thứ nhất giá $140$ nghìn đồng/kg và loại thứ hai giá $180$ nghìn đồng/kg. Cửa hàng trộn $x$ kg loại thứ nhất và $y$ kg loại thứ hai ($x, y > 0$) sao cho hạt cà phê đã trộn có giá không quá $170$ nghìn đồng/kg (Bài 2.5 SBT trang 19). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Tổng số tiền của $x$ kg loại thứ nhất và $y$ kg loại thứ hai là $140x + 180y$ (nghìn đồng).',
                isCorrect: true,
                explanation: 'Giá loại I là $140$ nghìn/kg và loại II là $180$ nghìn/kg nên tổng giá trị là $140x + 180y$ (nghìn đồng).',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Điều kiện để giá cà phê sau khi trộn không quá $170$ nghìn đồng/kg là $140x + 180y \\le 170(x + y)$.',
                isCorrect: true,
                explanation: 'Tổng khối lượng sau khi trộn là $x + y$ (kg), nên giá trung bình mỗi kg không quá $170$ tương đương $140x + 180y \\le 170(x + y)$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Thu gọn bất phương trình trên ta được $3x - y \\ge 0$.',
                isCorrect: true,
                explanation: 'Ta có $140x + 180y \\le 170x + 170y \\Leftrightarrow 30x - 10y \\ge 0 \\Leftrightarrow 3x - y \\ge 0$ (trang 88 SBT).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Nếu cửa hàng dùng $2$ kg cà phê loại thứ nhất và $8$ kg cà phê loại thứ hai thì thỏa mãn yêu cầu đề bài.',
                isCorrect: false,
                explanation: 'Thay $x = 2, y = 8$ vào $3x - y \\ge 0$ ta có $3 \\cdot 2 - 8 = -2 < 0$ (không thỏa mãn).',
              },
            ],
            pedagogicalTip: 'Chuyển bài toán trung bình cộng có trọng số về bất phương trình bậc nhất hai ẩn.',
          },
        ],
        part3: [
          {
            id: 'b3_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 3: Đếm điểm nguyên âm trong miền nghiệm (Bài 2.4b SBT trang 19)',
            prompt:
              'Miền nghiệm của bất phương trình $x + 2y \\ge -4$ có chứa bao nhiêu điểm $(x; y)$ mà $x, y$ đều là các số nguyên âm?',
            acceptableAnswers: ['2'],
            explanation:
              'Như đã giải ở Bài 2.4b trang 88 SBT, với $x \\le -1, y \\le -1$ và $x + 2y \\ge -4$, chỉ có $2$ điểm thỏa mãn là $(-1; -1)$ và $(-2; -1)$.',
            pedagogicalTip: 'Các số nguyên âm bắt đầu từ $-1, -2, -3, \\dots$',
            points: 0.5,
          },
          {
            id: 'b3_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 3: Bài toán thực tế hoa hồng bán hàng (Ví dụ 2 SBT trang 17)',
            prompt:
              'Anh An làm nhân viên bán hàng tại siêu thị điện máy, kiếm được hoa hồng $0{,}6$ triệu đồng cho mỗi máy giặt và $1{,}3$ triệu đồng cho mỗi tủ lạnh bán được. Trong tháng này anh An đã bán được $5$ chiếc tủ lạnh. Hỏi anh An cần bán ít nhất bao nhiêu chiếc máy giặt để tổng tiền hoa hồng nhận được từ $10$ triệu đồng trở lên?',
            acceptableAnswers: ['6'],
            explanation:
              'Ta có bất phương trình $0{,}6x + 1{,}3y \\ge 10$. Thay $y = 5$: $0{,}6x + 6{,}5 \\ge 10 \\Leftrightarrow 0{,}6x \\ge 3{,}5 \\Leftrightarrow x \\ge \\frac{35}{6} \\approx 5{,}83$. Vì số máy giặt $x \\in \\mathbb{N}$ nên anh An cần bán ít nhất $6$ máy giặt.',
            pedagogicalTip: 'Số sản phẩm phải là số tự nhiên nên ta làm tròn lên số nguyên gần nhất.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 3: Tìm tham số để điểm thuộc miền nghiệm',
            prompt:
              'Tìm giá trị nguyên lớn nhất của tham số $m$ để điểm $A(2; m)$ thuộc miền nghiệm của bất phương trình $3x + 2y \\le 15$.',
            acceptableAnswers: ['4'],
            explanation:
              'Điểm $A(2; m)$ thuộc miền nghiệm khi $3 \\cdot 2 + 2m \\le 15 \\Leftrightarrow 2m \\le 9 \\Leftrightarrow m \\le 4{,}5$. Vì $m \\in \\mathbb{Z}$ nên giá trị nguyên lớn nhất của $m$ là $4$.',
            pedagogicalTip: 'Thay tọa độ điểm vào bất phương trình rồi giải tìm $m$.',
            points: 0.5,
          },
          {
            id: 'b3_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 3: Bài toán trộn cà phê (Bài 2.5 SBT trang 19)',
            prompt:
              'Trong bài toán trộn cà phê thỏa mãn bất phương trình $3x - y \\ge 0$ (với $x$ là số kg loại I giá $140$ nghìn/kg, $y$ là số kg loại II giá $180$ nghìn/kg), nếu cửa hàng dùng $4$ kg cà phê loại I thì có thể trộn tối đa bao nhiêu kg cà phê loại II để giá sau khi trộn không vượt quá $170$ nghìn đồng/kg?',
            acceptableAnswers: ['12'],
            explanation:
              'Thay $x = 4$ vào $3x - y \\ge 0 \\Leftrightarrow 12 - y \\ge 0 \\Leftrightarrow y \\le 12$. Vậy trộn được tối đa $12$ kg loại II.',
            pedagogicalTip: 'Từ $3x - y \\ge 0$ suy ra $y \\le 3x$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b3_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 3: Các bước biểu diễn miền nghiệm BPT bậc nhất hai ẩn (Ví dụ 1 SBT trang 16–17)',
            problemStatement:
              'Cho bất phương trình bậc nhất hai ẩn $x + 2y \\le 3$.',
            conclusionTarget:
              'Hãy sắp xếp các bước sau theo đúng trình tự chuẩn để biểu diễn miền nghiệm của bất phương trình trên mặt phẳng tọa độ $Oxy$.',
            steps: [
              {
                id: 'b3_d1_s1',
                originalIndex: 1,
                content:
                  'Bước 1: Trên mặt phẳng tọa độ $Oxy$, vẽ đường thẳng bờ $d: x + 2y = 3$ đi qua hai điểm $(3; 0)$ và $(0; \\frac{3}{2})$.',
                roleDescription: 'Vẽ đường thẳng bờ d',
              },
              {
                id: 'b3_d1_s2',
                originalIndex: 2,
                content:
                  'Bước 2: Vì $c = 3 \\ne 0$, ta lấy gốc tọa độ $O(0; 0)$ là điểm không thuộc đường thẳng $d$ và thay vào biểu thức $x + 2y$.',
                roleDescription: 'Chọn điểm thử O(0; 0) không thuộc d',
              },
              {
                id: 'b3_d1_s3',
                originalIndex: 3,
                content:
                  'Bước 3: Ta có $0 + 2 \\cdot 0 = 0 < 3$, nên tọa độ điểm $O(0; 0)$ thỏa mãn bất phương trình $x + 2y \\le 3$.',
                roleDescription: 'Kiểm tra dấu của biểu thức tại điểm thử',
              },
              {
                id: 'b3_d1_s4',
                originalIndex: 4,
                content:
                  'Bước 4: Gạch bỏ nửa mặt phẳng không chứa $O(0; 0)$; miền không bị gạch (nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O$, kể cả bờ $d$) là miền nghiệm của bất phương trình.',
                roleDescription: 'Kết luận miền nghiệm',
              },
            ],
            pedagogicalTip:
              'Nếu bất phương trình có dấu $<$ hoặc $>$ thì miền nghiệm không kể đường thẳng bờ $d$.',
            teacherAnalysis:
              'Quy trình 4 bước chuẩn xác theo Ví dụ 1 trang 16–17 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 3.0,
          },
        ],
      },
      {
        id: 'de-on-bai-3-2',
        lessonId: 'bai-3',
        title: 'Đề ôn Bài 3 - Đề số 02',
        subtitle: 'Vận dụng & Thực tiễn Bài 3: Bất phương trình bậc nhất hai ẩn (SBT KNTT)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 02 của Bài 3 rèn luyện kỹ năng đọc đồ thị miền nghiệm, xét đường thẳng bờ đi qua gốc tọa độ và giải bài toán thực tế.',
        part1: [
          {
            id: 'b3_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 3: Xác định miền nghiệm (Bài 2.1 SBT trang 18)',
            prompt:
              'Miền nghiệm của bất phương trình $-3x + y < 4$ trên mặt phẳng tọa độ $Oxy$ là:',
            options: [
              {
                key: 'A',
                content: 'Nửa mặt phẳng bờ $d: -3x + y = 4$ chứa gốc tọa độ $O(0; 0)$ và bỏ đi đường thẳng $d$.',
              },
              {
                key: 'B',
                content: 'Nửa mặt phẳng bờ $d: -3x + y = 4$ chứa gốc tọa độ $O(0; 0)$ kể cả đường thẳng $d$.',
              },
              {
                key: 'C',
                content: 'Nửa mặt phẳng bờ $d: -3x + y = 4$ không chứa gốc tọa độ $O(0; 0)$ và bỏ đi đường thẳng $d$.',
              },
              {
                key: 'D',
                content: 'Nửa mặt phẳng bờ $d: -3x + y = 4$ không chứa gốc tọa độ $O(0; 0)$ kể cả đường thẳng $d$.',
              },
            ],
            correctAnswer: 'A',
            explanation:
              'Thay $O(0; 0)$ vào $-3x + y < 4$ được $0 < 4$ (đúng). Do dấu bất phương trình là $<$ nghiêm ngặt nên miền nghiệm không kể bờ $d$ (Bài 2.1a trang 88 SBT).',
            pedagogicalTip: 'Dấu $<$ hoặc $>$ thì bỏ đi đường thẳng bờ $d$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 3: Đường thẳng bờ đi qua gốc tọa độ (Bài 2.25c SBT trang 27)',
            prompt:
              'Miền nghiệm của bất phương trình $x + 2y < 0$ là nửa mặt phẳng bờ $d: x + 2y = 0$ (không kể bờ $d$) chứa điểm nào sau đây?',
            options: [
              { key: 'A', content: '$M(1; 1)$.' },
              { key: 'B', content: '$N(-1; 0)$.' },
              { key: 'C', content: '$P(0; 2)$.' },
              { key: 'D', content: '$Q(2; -1)$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Thay $N(-1; 0)$ vào $x + 2y < 0$ ta được $-1 + 0 = -1 < 0$ (đúng). Điểm $Q(2; -1)$ nằm trên bờ $d$ nên không thuộc miền nghiệm (Bài 2.25c trang 92 SBT).',
            pedagogicalTip: 'Khi đường thẳng bờ đi qua $O(0; 0)$, ta thử điểm $(-1; 0)$ hoặc $(1; 0)$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 3: Kiểm tra cặp số là nghiệm',
            prompt: 'Cặp số $(x_0; y_0)$ nào sau đây là một nghiệm của bất phương trình $2x - y \\le 5$?',
            options: [
              { key: 'A', content: '$(3; 0)$.' },
              { key: 'B', content: '$(4; 1)$.' },
              { key: 'C', content: '$(1; -2)$.' },
              { key: 'D', content: '$(5; 2)$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Thay $(1; -2)$ vào $2x - y \\le 5$ ta được $2(1) - (-2) = 4 \\le 5$ (đúng).',
            pedagogicalTip: 'Chú ý dấu trừ trước $y$ khi thay $y = -2$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 3: Diện tích tam giác tạo bởi đường thẳng bờ và hai trục tọa độ',
            prompt:
              'Đường thẳng bờ $d$ của bất phương trình $2x + 3y \\le 6$ cắt hai trục tọa độ $Ox, Oy$ lần lượt tại $A$ và $B$. Diện tích tam giác $OAB$ bằng:',
            options: [
              { key: 'A', content: '$6$.' },
              { key: 'B', content: '$3$.' },
              { key: 'C', content: '$12$.' },
              { key: 'D', content: '$5$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Đường thẳng $2x + 3y = 6$ cắt $Ox$ tại $A(3; 0)$ và cắt $Oy$ tại $B(0; 2)$. Diện tích tam giác vuông $OAB$ là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 3 \\cdot 2 = 3$.',
            pedagogicalTip: '$S_{\\triangle OAB} = \\frac{1}{2}|x_A \\cdot y_B|$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 3: Mô hình hóa bài toán mua sắm thực tế',
            prompt:
              'Bạn Lan mang $100$ nghìn đồng đi nhà sách mua $x$ quyển vở (giá $8$ nghìn đồng/quyển) và $y$ chiếc bút bi (giá $5$ nghìn đồng/chiếc). Bất phương trình bậc nhất hai ẩn biểu thị điều kiện về số tiền Lan có thể mua là:',
            options: [
              { key: 'A', content: '$8x + 5y \\le 100$.' },
              { key: 'B', content: '$8x + 5y \\ge 100$.' },
              { key: 'C', content: '$5x + 8y \\le 100$.' },
              { key: 'D', content: '$8x + 5y < 100$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tổng số tiền mua $x$ quyển vở và $y$ chiếc bút là $8x + 5y$ (nghìn đồng). Vì Lan có $100$ nghìn đồng nên $8x + 5y \\le 100$.',
            pedagogicalTip: '"Không vượt quá số tiền hiện có" tương ứng với dấu $\\le$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 3: Miền nghiệm của BPT khuyết một ẩn',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, miền nghiệm của bất phương trình $y > -1$ (trong Ví dụ 1 trang 20 SBT) là:',
            options: [
              {
                key: 'A',
                content: 'Nửa mặt phẳng bờ là đường thẳng $y = -1$ chứa gốc tọa độ $O(0; 0)$ và không kể đường thẳng bờ.',
              },
              {
                key: 'B',
                content: 'Nửa mặt phẳng bờ là đường thẳng $y = -1$ không chứa gốc tọa độ $O(0; 0)$.',
              },
              {
                key: 'C',
                content: 'Nửa mặt phẳng bờ là đường thẳng $x = -1$ chứa gốc tọa độ $O(0; 0)$.',
              },
              {
                key: 'D',
                content: 'Nửa mặt phẳng bờ là đường thẳng $y = -1$ chứa gốc tọa độ $O(0; 0)$ và kể cả bờ.',
              },
            ],
            correctAnswer: 'A',
            explanation:
              'Bất phương trình $y > -1$ có dạng $0x + 1y > -1$, đường thẳng bờ là $y = -1$ song song với trục $Ox$. Vì $0 > -1$ nên miền nghiệm chứa $O(0; 0)$ và không kể bờ.',
            pedagogicalTip: 'Đường thẳng $y = k$ song song với trục hoành $Ox$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b3_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 3: Xét các bất phương trình trong Bài 2.25 SBT trang 27',
            prompt:
              'Xét các bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ $Oxy$. Các khẳng định sau đúng hay sai?',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement:
                  'Miền nghiệm của bất phương trình $x + y \\ge -4$ là nửa mặt phẳng bờ $d: x + y = -4$ chứa gốc tọa độ $O(0; 0)$ (kể cả bờ $d$).',
                isCorrect: true,
                explanation: 'Thay $O(0; 0)$ vào $x + y \\ge -4$ được $0 \\ge -4$ (đúng).',
              },
              {
                id: 'b',
                label: 'b',
                statement:
                  'Miền nghiệm của bất phương trình $2x - y \\le 5$ là nửa mặt phẳng bờ $d: 2x - y = 5$ không chứa gốc tọa độ $O(0; 0)$.',
                isCorrect: false,
                explanation: 'Thay $O(0; 0)$ vào $2x - y \\le 5$ được $0 \\le 5$ (đúng), nên miền nghiệm CHỨA gốc tọa độ $O(0; 0)$.',
              },
              {
                id: 'c',
                label: 'c',
                statement:
                  'Miền nghiệm của bất phương trình $-x + 2y > 0$ là nửa mặt phẳng bờ $d: -x + 2y = 0$ chứa điểm $A(-1; 0)$, không kể bờ $d$.',
                isCorrect: true,
                explanation: 'Thay $A(-1; 0)$ vào $-x + 2y > 0$ được $-(-1) + 0 = 1 > 0$ (đúng, Bài 2.25d trang 92 SBT).',
              },
              {
                id: 'd',
                label: 'd',
                statement:
                  'Mọi điểm nằm trên trục tung $Oy$ có tung độ dương đều thuộc miền nghiệm của bất phương trình $-x + 2y > 0$.',
                isCorrect: true,
                explanation: 'Điểm $(0; y)$ với $y > 0$ có $-0 + 2y = 2y > 0$ nên luôn thuộc miền nghiệm.',
              },
            ],
            pedagogicalTip: 'Đối với đường thẳng đi qua gốc tọa độ, chọn một điểm trên trục hoành như $(-1; 0)$ để thử.',
          },
          {
            id: 'b3_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 3: Bài toán hoa hồng bán hàng của anh An (Ví dụ 2 SBT trang 17)',
            prompt:
              'Anh An kiếm được hoa hồng $600$ nghìn đồng ($0{,}6$ triệu đồng) cho mỗi máy giặt và $1{,}3$ triệu đồng cho mỗi tủ lạnh bán được. Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số máy giặt và số tủ lạnh anh An bán được để nhận được từ $10$ triệu đồng trở lên tiền hoa hồng. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Bất phương trình biểu thị điều kiện của $x, y$ là $0{,}6x + 1{,}3y \\ge 10$.',
                isCorrect: true,
                explanation: 'Tổng tiền hoa hồng là $0{,}6x + 1{,}3y$ (triệu đồng), từ $10$ triệu trở lên nên $\\ge 10$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Miền nghiệm của bất phương trình $0{,}6x + 1{,}3y \\ge 10$ chứa gốc tọa độ $O(0; 0)$.',
                isCorrect: false,
                explanation: 'Thay $(0; 0)$ được $0 \\ge 10$ (sai), nên miền nghiệm không chứa $O(0; 0)$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Nếu anh An bán được $10$ máy giặt và $4$ tủ lạnh thì đạt mục tiêu từ $10$ triệu đồng trở lên.',
                isCorrect: true,
                explanation: 'Ta có $0{,}6 \\cdot 10 + 1{,}3 \\cdot 4 = 6 + 5{,}2 = 11{,}2 \\ge 10$ (triệu đồng).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Nếu anh An không bán được chiếc máy giặt nào ($x = 0$) thì anh cần bán ít nhất $8$ chiếc tủ lạnh để đạt mục tiêu.',
                isCorrect: true,
                explanation: 'Khi $x = 0$, $1{,}3y \\ge 10 \\Leftrightarrow y \\ge \\frac{100}{13} \\approx 7{,}69$. Vì $y \\in \\mathbb{N}$ nên cần ít nhất $8$ tủ lạnh.',
              },
            ],
            pedagogicalTip: 'Kết hợp miền nghiệm của BPT với điều kiện thực tế $x, y \\in \\mathbb{N}$.',
          },
        ],
        part3: [
          {
            id: 'b3_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 3: Tìm hoành độ giao điểm của đường thẳng bờ',
            prompt:
              'Đường thẳng bờ $d$ của bất phương trình $3x - 2y \\le 12$ cắt trục hoành $Ox$ tại điểm có hoành độ bằng bao nhiêu?',
            acceptableAnswers: ['4'],
            explanation: 'Cho $y = 0 \\Rightarrow 3x = 12 \\Leftrightarrow x = 4$.',
            pedagogicalTip: 'Giao điểm với trục hoành $Ox$ luôn có tung độ $y = 0$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 3: Đếm cặp nghiệm nguyên dương',
            prompt:
              'Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn bất phương trình $2x + 3y \\le 8$?',
            acceptableAnswers: ['3'],
            explanation:
              'Vì $x, y \\in \\mathbb{N}^*$ ($x \\ge 1, y \\ge 1$) nên:\n- Với $y = 1 \\Rightarrow 2x \\le 5 \\Leftrightarrow x \\in \\{1; 2\\}$ (có $2$ cặp $(1; 1), (2; 1)$).\n- Với $y = 2 \\Rightarrow 2x \\le 2 \\Leftrightarrow x = 1$ (có $1$ cặp $(1; 2)$).\n- Với $y \\ge 3 \\Rightarrow 2x \\le 8 - 9 = -1$ (vô nghiệm).\nVậy có tất cả $3$ cặp số nguyên dương thỏa mãn.',
            pedagogicalTip: 'Đừng quên kiểm tra dấu bằng xảy ra tại $2(1) + 3(2) = 8$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 3: Khoảng cách từ gốc tọa độ đến đường thẳng bờ',
            prompt:
              'Cho bất phương trình $3x + 4y \\ge 15$. Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng bờ $d: 3x + 4y - 15 = 0$ bằng bao nhiêu?',
            acceptableAnswers: ['3'],
            explanation:
              'Khoảng cách từ $O(0; 0)$ đến $d$ là $\\frac{|3\\cdot 0 + 4\\cdot 0 - 15|}{\\sqrt{3^2 + 4^2}} = \\frac{15}{5} = 3$.',
            pedagogicalTip: 'Trong $\\triangle OAB$ vuông tại $O$, đường cao $OH = \\frac{OA \\cdot OB}{\\sqrt{OA^2 + OB^2}} = 3$.',
            points: 0.5,
          },
          {
            id: 'b3_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 3: Vận dụng thực tế',
            prompt:
              'Một gian hàng hội chợ bán vé người lớn giá $50$ nghìn đồng/vé và vé trẻ em giá $30$ nghìn đồng/vé. Để doanh thu đạt ít nhất $1500$ nghìn đồng khi đã bán được $18$ vé người lớn thì gian hàng cần bán tối thiểu bao nhiêu vé trẻ em?',
            acceptableAnswers: ['20'],
            explanation:
              'Ta có $50x + 30y \\ge 1500$. Thay $x = 18$: $900 + 30y \\ge 1500 \\Leftrightarrow 30y \\ge 600 \\Leftrightarrow y \\ge 20$. Vậy cần bán tối thiểu $20$ vé trẻ em.',
            pedagogicalTip: 'Lập bất phương trình $50x + 30y \\ge 1500$ và thay $x = 18$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b3_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 3: Giải bài toán thực tế trộn hai loại cà phê (Bài 2.5 SBT trang 19 & 88)',
            problemStatement:
              'Một cửa hàng bán lẻ bán hai loại hạt cà phê: loại thứ nhất giá $140$ nghìn đồng/kg và loại thứ hai giá $180$ nghìn đồng/kg. Cửa hàng trộn $x$ kg loại thứ nhất và $y$ kg loại thứ hai sao cho hạt cà phê đã trộn có giá không quá $170$ nghìn đồng/kg.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để lập bất phương trình bậc nhất hai ẩn $x, y$ và xác định miền nghiệm của nó trên mặt phẳng tọa độ.',
            steps: [
              {
                id: 'b3_d2_s1',
                originalIndex: 1,
                content:
                  'Tổng giá tiền của $x$ kg loại I và $y$ kg loại II là $140x + 180y$ (nghìn đồng) cho tổng khối lượng $x + y$ (kg). Theo đề bài ta có: $140x + 180y \\le 170(x + y)$.',
                roleDescription: 'Lập bất phương trình từ dữ kiện giá bán',
              },
              {
                id: 'b3_d2_s2',
                originalIndex: 2,
                content:
                  'Chuyển vế và rút gọn ta được bất phương trình bậc nhất hai ẩn: $30x - 10y \\ge 0$ hay $3x - y \\ge 0$.',
                roleDescription: 'Đưa về dạng tổng quát 3x - y >= 0',
              },
              {
                id: 'b3_d2_s3',
                originalIndex: 3,
                content:
                  'Để biểu diễn miền nghiệm của $3x - y \\ge 0$, ta vẽ đường thẳng bờ $d: 3x - y = 0$ đi qua gốc tọa độ $O(0; 0)$ và điểm $(1; 3)$.',
                roleDescription: 'Vẽ đường thẳng bờ d: 3x - y = 0',
              },
              {
                id: 'b3_d2_s4',
                originalIndex: 4,
                content:
                  'Lấy điểm $M(1; 0)$ không thuộc $d$, ta thấy $3 \\cdot 1 - 0 = 3 > 0$ thỏa mãn BPT. Vậy miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $M(1; 0)$ (trong góc phần tư thứ nhất với $x, y > 0$).',
                roleDescription: 'Thử điểm M(1; 0) và kết luận miền nghiệm',
              },
            ],
            pedagogicalTip:
              'Vì đường thẳng $3x - y = 0$ đi qua gốc tọa độ $O(0; 0)$ nên ta phải chọn điểm thử $M(1; 0)$ không thuộc $d$.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 2.5 trang 88 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 3.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-4',
    lessonNumber: 4,
    name: 'Bài 4',
    topicTitle: 'Hệ bất phương trình bậc nhất hai ẩn',
    chapter: 'Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
    keySummary:
      'Nhận biết hệ bất phương trình bậc nhất hai ẩn; xác định miền đa giác nghiệm trên mặt phẳng tọa độ; tìm giá trị lớn nhất, giá trị nhỏ nhất của biểu thức $F(x;y) = ax + by$ trên miền đa giác nghiệm và giải bài toán tối ưu thực tiễn.',
    practiceExams: [
      {
        id: 'de-on-bai-4-1',
        lessonId: 'bai-4',
        title: 'Đề ôn Bài 4 - Đề số 01',
        subtitle: 'Bám sát Ví dụ & Bài tập Bài 4: Hệ BPT bậc nhất hai ẩn (SBT Kết nối tri thức Toán 10, trang 19–28)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 01 của Bài 4 (Hệ bất phương trình bậc nhất hai ẩn) bám sát Ví dụ 1–3 và Bài tập 2.6–2.9, 2.11, 2.15–2.24 trong SBT Toán 10 Kết nối tri thức.',
        part1: [
          {
            id: 'b4_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 4: Nhận diện hệ BPT bậc nhất hai ẩn (Bài 2.11 SBT trang 24)',
            prompt:
              'Trong các hệ bất phương trình sau, hệ bất phương trình nào là hệ bất phương trình bậc nhất hai ẩn?',
            options: [
              {
                key: 'A',
                content: '$\\begin{cases} 2x + 3y > 4 \\\\ 2^3x + 3y^2 < 1 \\end{cases}$',
              },
              {
                key: 'B',
                content: '$\\begin{cases} x + y > 4 \\\\ 2^3x + 3^2y < 1 \\end{cases}$',
              },
              {
                key: 'C',
                content: '$\\begin{cases} x > 3 \\\\ y < 2 \\\\ x + y \\ge y^2 \\end{cases}$',
              },
              {
                key: 'D',
                content: '$\\begin{cases} x - y \\le 3 \\\\ y < 1 \\\\ x + y \\ge x + xy \\end{cases}$',
              },
            ],
            correctAnswer: 'B',
            explanation:
              'Hệ ở phương án B gồm hai BPT bậc nhất hai ẩn là $x + y > 4$ và $8x + 9y < 1$. Các hệ A, C, D có chứa $y^2$ hoặc $xy$ nên không phải bậc nhất (Bài 2.11 trang 24 SBT).',
            pedagogicalTip: 'Mỗi bất phương trình trong hệ đều phải là bất phương trình bậc nhất hai ẩn.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 4: Nghiệm của hệ BPT bậc nhất hai ẩn (Bài 2.15 SBT trang 25)',
            prompt:
              'Cặp số nào dưới đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 2 \\\\ x - 2y \\ge 4 \\\\ x > 0 \\end{cases}$?',
            options: [
              { key: 'A', content: '$(-1; 2)$.' },
              { key: 'B', content: '$(-2; -4)$.' },
              { key: 'C', content: '$(0; 1)$.' },
              { key: 'D', content: '$(2; -4)$.' },
            ],
            correctAnswer: 'D',
            explanation:
              'Với $(2; -4)$: $x = 2 > 0$ (thỏa mãn), $x + y = 2 + (-4) = -2 \\le 2$ (thỏa mãn), $x - 2y = 2 - 2(-4) = 10 \\ge 4$ (thỏa mãn). Vậy $(2; -4)$ là nghiệm của hệ (Bài 2.15 trang 25 SBT).',
            pedagogicalTip: 'Kiểm tra điều kiện đơn giản nhất ($x > 0$) trước để loại nhanh A, B, C.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 4: Điểm thuộc miền nghiệm của hệ (Bài 2.16 SBT trang 25)',
            prompt:
              'Điểm nào dưới đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} -x + y \\le 2 \\\\ x - 2y \\ge 1 \\\\ y \\le 0 \\end{cases}$?',
            options: [
              { key: 'A', content: '$(-3; 2)$.' },
              { key: 'B', content: '$(0; 1)$.' },
              { key: 'C', content: '$(4; -1)$.' },
              { key: 'D', content: '$(-2; 2)$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Chỉ có điểm $(4; -1)$ có tung độ $y = -1 \\le 0$, đồng thời $-4 + (-1) = -5 \\le 2$ và $4 - 2(-1) = 6 \\ge 1$. Vậy đáp án đúng là C (Bài 2.16 trang 25 SBT).',
            pedagogicalTip: 'Dựa vào điều kiện $y \\le 0$ để loại ngay các điểm có tung độ dương.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 4: Hình dạng miền nghiệm của hệ BPT (Bài 2.18 SBT trang 26)',
            prompt:
              'Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge -1 \\\\ x + y \\le 0 \\\\ y \\ge 0 \\end{cases}$ là:',
            options: [
              { key: 'A', content: 'Một nửa mặt phẳng.' },
              { key: 'B', content: 'Miền tam giác.' },
              { key: 'C', content: 'Miền tứ giác.' },
              { key: 'D', content: 'Miền ngũ giác.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Ba đường thẳng $x = -1, y = 0, x + y = 0$ đôi một cắt nhau tại $3$ đỉnh $(-1; 0), (0; 0), (-1; 1)$ tạo thành miền tam giác (Bài 2.18 trang 26 & 91 SBT).',
            pedagogicalTip: 'Tìm giao điểm của các đường thẳng bờ để xác định các đỉnh của đa giác miền nghiệm.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 4: Tìm GTLN của biểu thức F(x;y) (Bài 2.21 SBT trang 26)',
            prompt:
              'Giá trị lớn nhất của biểu thức $F(x; y) = 3x + y$ với $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge -1 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$ là:',
            options: [
              { key: 'A', content: '$-3$.' },
              { key: 'B', content: '$6$.' },
              { key: 'C', content: '$5$.' },
              { key: 'D', content: '$8$.' },
            ],
            correctAnswer: 'B',
            explanation:
              'Miền nghiệm là tam giác có các đỉnh $A(-1; 0), B(2; 0), C(-1; 3)$. Tính giá trị của $F(x; y) = 3x + y$ tại các đỉnh: $F(-1; 0) = -3$, $F(2; 0) = 6$, $F(-1; 3) = 0$. Vậy giá trị lớn nhất bằng $6$ (Bài 2.21 trang 26 & 91 SBT).',
            pedagogicalTip: 'GTLN và GTNN của $F(x;y) = ax + by$ trên miền đa giác lồi luôn đạt được tại một trong các đỉnh.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 4: Tìm GTNN của biểu thức F(x;y) (Bài 2.22 SBT trang 26)',
            prompt:
              'Giá trị nhỏ nhất của biểu thức $F(x; y) = -x + 4y$ với $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} 1 \\le x \\le 2 \\\\ 0 \\le y \\le 3 \\end{cases}$ là:',
            options: [
              { key: 'A', content: '$-2$.' },
              { key: 'B', content: '$3$.' },
              { key: 'C', content: '$11$.' },
              { key: 'D', content: '$-4$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Miền nghiệm là hình chữ nhật có $4$ đỉnh $(1; 0), (2; 0), (2; 3), (1; 3)$. Để $F = -x + 4y$ nhỏ nhất thì $x$ lớn nhất ($x = 2$) và $y$ nhỏ nhất ($y = 0$), suy ra $\\min F = F(2; 0) = -2$ (Bài 2.22 trang 26 & 91 SBT).',
            pedagogicalTip: 'Với miền hình chữ nhật $a \\le x \\le b, c \\le y \\le d$, có thể đánh giá trực tiếp từng biến.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b4_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 4: Tìm GTLN và GTNN trên miền tam giác (Bài 2.7 SBT trang 23 & 89)',
            prompt:
              'Cho biểu thức $F(x; y) = 2x + 3y$ với $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 6 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Miền nghiệm của hệ bất phương trình đã cho là miền tam giác $OAB$ với $O(0; 0), A(6; 0), B(0; 6)$.',
                isCorrect: true,
                explanation: 'Ba đường thẳng $x = 0, y = 0, x + y = 6$ cắt nhau tạo thành tam giác vuông $OAB$ với $O(0;0), A(6;0), B(0;6)$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Diện tích của miền đa giác nghiệm bằng $36$.',
                isCorrect: false,
                explanation: 'Diện tích tam giác vuông $OAB$ là $S = \\frac{1}{2} \\cdot 6 \\cdot 6 = 18 \\ne 36$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giá trị nhỏ nhất của biểu thức $F(x; y)$ trên miền nghiệm bằng $0$.',
                isCorrect: true,
                explanation: 'Ta có $F(0; 0) = 0, F(6; 0) = 12, F(0; 6) = 18$ nên giá trị nhỏ nhất là $F(0; 0) = 0$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Giá trị lớn nhất của biểu thức $F(x; y)$ trên miền nghiệm bằng $18$ và đạt tại đỉnh $B(0; 6)$.',
                isCorrect: true,
                explanation: 'So sánh tại $3$ đỉnh ta thấy $\\max F = F(0; 6) = 2 \\cdot 0 + 3 \\cdot 6 = 18$ (Bài 2.7 trang 89 SBT).',
              },
            ],
            pedagogicalTip: 'Tính giá trị $F(x; y)$ tại tất cả các đỉnh của đa giác miền nghiệm rồi so sánh.',
          },
          {
            id: 'b4_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 4: Bài toán thực tế cuộc thi pha chế nước uống (Bài 2.9 SBT trang 23 & 90)',
            prompt:
              'Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa $12$ g hương liệu, $9$ lít nước và $315$ g đường để pha chế hai loại nước $A$ và $B$. Để pha chế $1$ lít nước $A$ cần $45$ g đường, $1$ lít nước và $0{,}5$ g hương liệu; để pha chế $1$ lít nước $B$ cần $15$ g đường, $1$ lít nước và $2$ g hương liệu. Mỗi lít nước $A$ nhận được $60$ điểm thưởng, mỗi lít nước $B$ nhận được $80$ điểm thưởng. Gọi $x, y$ lần lượt là số lít nước loại $A$ và loại $B$ cần pha chế. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement:
                  'Hệ bất phương trình mô tả các điều kiện của $x, y$ là $\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\le 9 \\\\ 3x + y \\le 21 \\\\ 0{,}5x + 2y \\le 12 \\end{cases}$.',
                isCorrect: true,
                explanation:
                  'Điều kiện nước: $x + y \\le 9$; đường: $45x + 15y \\le 315 \\Leftrightarrow 3x + y \\le 21$; hương liệu: $0{,}5x + 2y \\le 12$ (trang 90 SBT).',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Biểu thức tính tổng số điểm thưởng đội chơi nhận được là $F(x; y) = 60x + 80y$ (điểm).',
                isCorrect: true,
                explanation: 'Mỗi lít $A$ được $60$ điểm, mỗi lít $B$ được $80$ điểm nên tổng điểm là $F(x; y) = 60x + 80y$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Miền nghiệm của hệ là ngũ giác $OABCD$ với các đỉnh $O(0; 0), A(0; 6), B(4; 5), C(6; 3), D(7; 0)$.',
                isCorrect: true,
                explanation: 'Giao điểm các đường thẳng bờ tạo thành ngũ giác lồi với đúng $5$ đỉnh trên (trang 90 SBT).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Số điểm thưởng lớn nhất đội chơi có thể đạt được là $640$ điểm khi pha chế $4$ lít nước $A$ và $5$ lít nước $B$.',
                isCorrect: true,
                explanation:
                  'Ta có $F(0; 6) = 480, F(4; 5) = 640, F(6; 3) = 600, F(7; 0) = 420$. Vậy $\\max F = F(4; 5) = 640$ điểm (trang 91 SBT).',
              },
            ],
            pedagogicalTip: 'Rút gọn các hệ số lớn (như chia hai vế của $45x + 15y \\le 315$ cho $15$) để dễ tìm tọa độ đỉnh.',
          },
        ],
        part3: [
          {
            id: 'b4_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 4: Tìm GTLN, GTNN trên miền tứ giác (Ví dụ 2 SBT trang 21)',
            prompt:
              'Tìm giá trị lớn nhất của biểu thức $F(x; y) = x + 2y$ với $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 4 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$.',
            acceptableAnswers: ['8'],
            explanation:
              'Miền nghiệm là tam giác $OAB$ với $O(0; 0), A(0; 4), B(4; 0)$. Ta có $F(0; 0) = 0, F(4; 0) = 4, F(0; 4) = 8$. Vậy giá trị lớn nhất bằng $8$ (Ví dụ 2 trang 21 SBT).',
            pedagogicalTip: 'Thay tọa độ $3$ đỉnh vào $F(x; y) = x + 2y$.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 4: Tổng GTLN và GTNN (Bài 2.23 SBT trang 26)',
            prompt:
              'Tính tổng của giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y) = x + 5y$ với $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} -2 \\le y \\le 2 \\\\ x + y \\le 4 \\\\ y - x \\le 4 \\end{cases}$.',
            acceptableAnswers: ['-4'],
            explanation:
              'Miền nghiệm là hình thang cân có $4$ đỉnh: $A(-2; 2), B(2; 2), C(6; -2), D(-6; -2)$. Tính $F$ tại các đỉnh: $F(-2; 2) = 8, F(2; 2) = 12, F(6; -2) = -4, F(-6; -2) = -16$. Vậy $\\max F = 12, \\min F = -16$, suy ra tổng là $12 + (-16) = -4$ (Bài 2.23 trang 26 & 91 SBT).',
            pedagogicalTip: 'Cho $y = 2$ và $y = -2$ thay vào hai phương trình đường thẳng $x + y = 4$ và $y - x = 4$ để tìm nhanh $4$ đỉnh.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 4: Bài toán chiết xuất nguyên liệu (Ví dụ 3 SBT trang 22)',
            prompt:
              'Trong Ví dụ 3 (trang 22 SBT), người ta cần mua $x$ tấn nguyên liệu loại I (giá $4$ triệu đồng/tấn) và $y$ tấn nguyên liệu loại II (giá $3$ triệu đồng/tấn) thỏa mãn miền tứ giác nghiệm $ABCD$ với $A(5; 4), B(10; 2), C(10; 9), D(2{,}5; 9)$. Chi phí nhỏ nhất (đơn vị: triệu đồng) để mua nguyên liệu là bao nhiêu?',
            acceptableAnswers: ['32'],
            explanation:
              'Hàm chi phí là $F(x; y) = 4x + 3y$ (triệu đồng). Tại các đỉnh: $F(5; 4) = 32$, $F(10; 2) = 46$, $F(10; 9) = 67$, $F(2{,}5; 9) = 37$. Vậy chi phí nhỏ nhất là $32$ triệu đồng (trang 23 SBT).',
            pedagogicalTip: 'Đỉnh $A(5; 4)$ cho chi phí tối ưu nhất.',
            points: 0.5,
          },
          {
            id: 'b4_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 4: Bài toán thức ăn gia súc (Bài 2.24 SBT trang 27 & 91)',
            prompt:
              'Một hợp tác xã chăn nuôi trộn hai loại thức ăn $X$ (giá $250$ nghìn đồng/bao) và $Y$ (giá $200$ nghìn đồng/bao). Biết miền nghiệm số bao $(x; y)$ cần mua có các đỉnh là $A(0; 12), B(3; 6), C(9; 2), D(18; 0)$. Tìm chi phí nhỏ nhất (đơn vị: triệu đồng) để mua hai loại thức ăn trên.',
            acceptableAnswers: ['1.95', '1,95'],
            explanation:
              'Chi phí là $F(x; y) = 250x + 200y$ (nghìn đồng). Ta có $F(0; 12) = 2400$, $F(3; 6) = 1950$, $F(9; 2) = 2650$, $F(18; 0) = 4500$. Vậy chi phí nhỏ nhất là $1950$ nghìn đồng $= 1{,}95$ triệu đồng (Bài 2.24 trang 91 SBT).',
            pedagogicalTip: 'Đổi đơn vị từ $1950$ nghìn đồng sang $1{,}95$ triệu đồng.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b4_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 4: Bài toán tối ưu lợi nhuận phân xưởng hai máy M1, M2 (Bài 2.28 SBT trang 27 & 92)',
            problemStatement:
              'Một phân xưởng có hai máy chuyên dụng $M_1$ và $M_2$ để sản xuất hai loại sản phẩm $A$ (lãi $2$ triệu đồng/tấn) và $B$ (lãi $1{,}6$ triệu đồng/tấn). Sản xuất $1$ tấn $A$ cần máy $M_1$ làm trong $3$ giờ và máy $M_2$ trong $1$ giờ; sản xuất $1$ tấn $B$ cần máy $M_1$ trong $1$ giờ và máy $M_2$ trong $1$ giờ. Máy $M_1$ làm việc không quá $6$ giờ/ngày, máy $M_2$ không quá $4$ giờ/ngày.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để tìm số tiền lãi lớn nhất mà phân xưởng có thể thu được trong một ngày.',
            steps: [
              {
                id: 'b4_d1_s1',
                originalIndex: 1,
                content:
                  'Gọi $x, y$ ($x \\ge 0, y \\ge 0$) lần lượt là số tấn sản phẩm loại $A$ và loại $B$ sản xuất trong một ngày. Theo đề bài, ta có hệ bất phương trình: $\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ 3x + y \\le 6 \\\\ x + y \\le 4 \\end{cases}$.',
                roleDescription: 'Đặt ẩn và lập hệ bất phương trình bậc nhất hai ẩn',
              },
              {
                id: 'b4_d1_s2',
                originalIndex: 2,
                content:
                  'Số tiền lãi thu được là $F(x; y) = 2x + 1{,}6y$ (triệu đồng). Biểu diễn trên mặt phẳng tọa độ, miền nghiệm của hệ là tứ giác $OABC$ với $O(0; 0), A(0; 4), B(1; 3)$ và $C(2; 0)$.',
                roleDescription: 'Xác định hàm mục tiêu và tọa độ các đỉnh miền đa giác',
              },
              {
                id: 'b4_d1_s3',
                originalIndex: 3,
                content:
                  'Tính giá trị của $F(x; y)$ tại các đỉnh: $F(0; 0) = 0$; $F(0; 4) = 6{,}4$; $F(1; 3) = 2 \\cdot 1 + 1{,}6 \\cdot 3 = 6{,}8$; $F(2; 0) = 4$.',
                roleDescription: 'Tính giá trị hàm mục tiêu tại các đỉnh',
              },
              {
                id: 'b4_d1_s4',
                originalIndex: 4,
                content:
                  'So sánh các giá trị trên, ta được giá trị lớn nhất là $F(1; 3) = 6{,}8$. Vậy số tiền lãi lớn nhất phân xưởng thu được trong một ngày là $6{,}8$ triệu đồng.',
                roleDescription: 'So sánh và kết luận số tiền lãi lớn nhất',
              },
            ],
            pedagogicalTip:
              'Đỉnh $B(1; 3)$ là giao điểm của hai đường thẳng $3x + y = 6$ và $x + y = 4$.',
            teacherAnalysis:
              'Lời giải bám sát hoàn toàn Bài 2.28 trang 92–93 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 3.0,
          },
        ],
      },
      {
        id: 'de-on-bai-4-2',
        lessonId: 'bai-4',
        title: 'Đề ôn Bài 4 - Đề số 02',
        subtitle: 'Nâng cao & Thực tiễn Bài 4: Hệ bất phương trình bậc nhất hai ẩn (SBT KNTT)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 02 của Bài 4 tập trung vào các bài toán xác định hệ BPT từ hình vẽ, tìm GTLN/GTNN trên hình thang/hình vuông và bài toán thực đơn dinh dưỡng (Bài 2.8, 2.17, 2.19, 2.20, 2.27, 2.29 SBT).',
        part1: [
          {
            id: 'b4_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 4: Xác định hệ BPT từ miền tam giác (Bài 2.17 SBT trang 25)',
            prompt:
              'Trong mặt phẳng tọa độ $Oxy$, miền tam giác $ABC$ có các đỉnh $A(0; 1), B(1; 0), C(0; -1)$ (nằm bên phải trục tung $Oy$) là miền nghiệm của hệ bất phương trình nào sau đây?',
            options: [
              {
                key: 'A',
                content: '$\\begin{cases} x + y \\le 1 \\\\ x - y \\ge 1 \\\\ x \\ge 0 \\end{cases}$',
              },
              {
                key: 'B',
                content: '$\\begin{cases} x + y \\le 1 \\\\ x - y \\le 1 \\\\ x \\ge 0 \\end{cases}$',
              },
              {
                key: 'C',
                content: '$\\begin{cases} x - y \\ge -1 \\\\ x + y \\ge -1 \\\\ x \\ge 0 \\end{cases}$',
              },
              {
                key: 'D',
                content: '$\\begin{cases} x - y \\ge -1 \\\\ x + y \\ge -1 \\\\ y \\ge 0 \\end{cases}$',
              },
            ],
            correctAnswer: 'B',
            explanation:
              'Ba cạnh của tam giác $ABC$ nằm trên các đường thẳng $x = 0$, $AB: x + y = 1$ và $BC: x - y = 1$. Vì miền tam giác nằm bên phải $Oy$ ($x \\ge 0$) và chứa gốc tọa độ $O(0; 0)$ nên thỏa mãn $x + y \\le 1$ và $x - y \\le 1$ (Bài 2.17 trang 25 & 91 SBT).',
            pedagogicalTip: 'Thay điểm $O(0; 0)$ và điểm $\\left(\\frac{1}{2}; 0\\right)$ thuộc miền tam giác vào các hệ để kiểm tra.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 4: Đếm số cạnh của miền đa giác nghiệm (Bài 2.19 SBT trang 26)',
            prompt:
              'Miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 1 \\\\ -3 \\le y \\le 3 \\\\ -3 \\le x \\le 3 \\end{cases}$ là hình gì?',
            options: [
              { key: 'A', content: 'Miền lục giác.' },
              { key: 'B', content: 'Miền tam giác.' },
              { key: 'C', content: 'Miền tứ giác.' },
              { key: 'D', content: 'Miền ngũ giác.' },
            ],
            correctAnswer: 'D',
            explanation:
              'Hình vuông $[-3; 3] \\times [-3; 3]$ có $4$ đỉnh $(-3;3), (3;3), (3;-3), (-3;-3)$. Đường thẳng $x + y = 1$ cắt hai cạnh $y = 3$ (tại $(-2; 3)$) và $x = 3$ (tại $(3; -2)$), loại bỏ góc đỉnh $(3; 3)$, tạo thành miền ngũ giác có $5$ đỉnh (Bài 2.19 trang 26 & 91 SBT).',
            pedagogicalTip: 'Khi một đường thẳng cắt bỏ $1$ góc của hình chữ nhật, miền còn lại có $5$ đỉnh (ngũ giác).',
            points: 0.5,
          },
          {
            id: 'b4_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 4: Miền nghiệm khi một BPT luôn thỏa mãn (Bài 2.20 SBT trang 26)',
            prompt:
              'Miền nghiệm của hệ bất phương trình $\\begin{cases} x + y \\le 10 \\\\ -3 \\le y \\le 3 \\\\ -3 \\le x \\le 3 \\end{cases}$ là hình gì?',
            options: [
              { key: 'A', content: 'Miền lục giác.' },
              { key: 'B', content: 'Miền tam giác.' },
              { key: 'C', content: 'Miền tứ giác.' },
              { key: 'D', content: 'Miền ngũ giác.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Với mọi $(x; y)$ thuộc hình vuông $-3 \\le x \\le 3, -3 \\le y \\le 3$, ta luôn có $x + y \\le 3 + 3 = 6 < 10$. Do đó BPT $x + y \\le 10$ luôn thỏa mãn và miền nghiệm chính là hình vuông (miền tứ giác) (Bài 2.20 trang 26 & 91 SBT).',
            pedagogicalTip: 'Kiểm tra giá trị lớn nhất của $x + y$ trên hình vuông $[-3; 3] \\times [-3; 3]$.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 4: Hệ BPT vô nghiệm (Bài 2.26c SBT trang 27 & 92)',
            prompt:
              'Xét hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ 4x - 6y < 0 \\\\ 2x - 3y \\ge 1 \\end{cases}$. Khẳng định nào sau đây là ĐÚNG?',
            options: [
              { key: 'A', content: 'Miền nghiệm của hệ là một tam giác.' },
              { key: 'B', content: 'Miền nghiệm của hệ là một tứ giác.' },
              { key: 'C', content: 'Hệ bất phương trình vô nghiệm.' },
              { key: 'D', content: 'Miền nghiệm chứa gốc tọa độ $O(0; 0)$.' },
            ],
            correctAnswer: 'C',
            explanation:
              'Từ $4x - 6y < 0 \\Leftrightarrow 2x - 3y < 0$, mâu thuẫn với điều kiện $2x - 3y \\ge 1$. Do đó hệ bất phương trình vô nghiệm (Bài 2.26c trang 27 & 92 SBT).',
            pedagogicalTip: 'Hai đường thẳng bờ $4x - 6y = 0$ và $2x - 3y = 1$ song song và hai nửa mặt phẳng ngược phía nhau.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 4: Diện tích miền hình chữ nhật nghiệm (Bài 2.6c SBT trang 23)',
            prompt:
              'Miền nghiệm của hệ bất phương trình $\\begin{cases} -1 \\le x \\le 3 \\\\ -2 \\le y \\le 3 \\end{cases}$ là một hình chữ nhật có diện tích bằng:',
            options: [
              { key: 'A', content: '$20$.' },
              { key: 'B', content: '$15$.' },
              { key: 'C', content: '$12$.' },
              { key: 'D', content: '$9$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hình chữ nhật giới hạn bởi $x \\in [-1; 3]$ (chiều rộng $3 - (-1) = 4$) và $y \\in [-2; 3]$ (chiều dài $3 - (-2) = 5$) có diện tích $S = 4 \\cdot 5 = 20$ (Bài 2.6c trang 89 SBT).',
            pedagogicalTip: 'Độ dài đoạn $[a; b]$ bằng $b - a$.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 4: Diện tích miền tam giác nghiệm (Bài 2.6a SBT trang 23)',
            prompt:
              'Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge -1 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là tam giác $ABC$ với $A(-1; 5), B(-1; 0), C(4; 0)$. Diện tích tam giác $ABC$ bằng:',
            options: [
              { key: 'A', content: '$12{,}5$.' },
              { key: 'B', content: '$25$.' },
              { key: 'C', content: '$10$.' },
              { key: 'D', content: '$8$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tam giác $ABC$ vuông tại $B(-1; 0)$ có $BA = 5$ và $BC = 4 - (-1) = 5$. Diện tích là $S = \\frac{1}{2} \\cdot 5 \\cdot 5 = 12{,}5$ (Bài 2.6a trang 89 SBT).',
            pedagogicalTip: 'Đoạn $AB$ vuông góc với trục hoành tại $x = -1$, đoạn $BC$ nằm trên trục hoành.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b4_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 4: Tìm GTLN, GTNN trên miền hình thang (Bài 2.27 SBT trang 27 & 92)',
            prompt:
              'Cho biểu thức $F(x; y) = 2x + 3y$ với $(x; y)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} -1 \\le y \\le 1 \\\\ x + y \\le 4 \\\\ y - x \\le 4 \\end{cases}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Miền nghiệm của hệ là hình thang cân $ABCD$ có $4$ đỉnh $A(-5; -1), B(5; -1), C(3; 1), D(-3; 1)$.',
                isCorrect: true,
                explanation: 'Cho $y = -1$ được $x \\in [-5; 5]$; cho $y = 1$ được $x \\in [-3; 3]$ (Bài 2.27 trang 92 SBT).',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tại đỉnh $C(3; 1)$, giá trị của biểu thức là $F(3; 1) = 9$.',
                isCorrect: true,
                explanation: 'Ta có $F(3; 1) = 2 \\cdot 3 + 3 \\cdot 1 = 9$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Giá trị lớn nhất của $F(x; y)$ trên miền nghiệm bằng $9$.',
                isCorrect: true,
                explanation: 'Ta có $F(-5; -1) = -13, F(5; -1) = 7, F(3; 1) = 9, F(-3; 1) = -3$, nên $\\max F = 9$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Giá trị nhỏ nhất của $F(x; y)$ trên miền nghiệm bằng $-3$.',
                isCorrect: false,
                explanation: 'Giá trị nhỏ nhất là $F(-5; -1) = -13 \\ne -3$ (trang 92 SBT).',
              },
            ],
            pedagogicalTip: 'Thay lần lượt $y = -1$ và $y = 1$ vào các phương trình đường thẳng bên để tìm hoành độ các đỉnh.',
          },
          {
            id: 'b4_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 4: Bài toán chế độ ăn kiêng tối ưu chi phí (Bài 2.29 SBT trang 28 & 93)',
            prompt:
              'Một người ăn kiêng cần được cung cấp ít nhất $300$ calo, $36$ đơn vị vitamin A và $90$ đơn vị vitamin C mỗi ngày từ hai loại đồ uống I và II. Mỗi cốc đồ uống I (giá $12$ nghìn đồng) cung cấp $60$ calo, $12$ đơn vị vitamin A và $10$ đơn vị vitamin C. Mỗi cốc đồ uống II (giá $15$ nghìn đồng) cung cấp $60$ calo, $6$ đơn vị vitamin A và $30$ đơn vị vitamin C. Gọi $x, y$ là số cốc đồ uống I và II sử dụng mỗi ngày. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement:
                  'Thu gọn các điều kiện dinh dưỡng ta được hệ bất phương trình $\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\ge 5 \\\\ 2x + y \\ge 6 \\\\ x + 3y \\ge 9 \\end{cases}$.',
                isCorrect: true,
                explanation:
                  'Calo: $60x + 60y \\ge 300 \\Leftrightarrow x + y \\ge 5$; Vitamin A: $12x + 6y \\ge 36 \\Leftrightarrow 2x + y \\ge 6$; Vitamin C: $10x + 30y \\ge 90 \\Leftrightarrow x + 3y \\ge 9$ (trang 93 SBT).',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Số tiền phải trả mỗi ngày là $F(x; y) = 12x + 15y$ (nghìn đồng).',
                isCorrect: true,
                explanation: 'Cốc loại I giá $12$ nghìn đồng, loại II giá $15$ nghìn đồng.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Miền nghiệm không bị chặn có các đỉnh là $A(0; 6), B(1; 4), C(3; 2), D(9; 0)$.',
                isCorrect: true,
                explanation: 'Giao của các đường thẳng bờ tạo ra $4$ đỉnh biên $A(0; 6), B(1; 4), C(3; 2), D(9; 0)$ (trang 93 SBT).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Chi phí nhỏ nhất mỗi ngày là $66$ nghìn đồng khi uống $3$ cốc loại I và $2$ cốc loại II.',
                isCorrect: true,
                explanation:
                  'Ta có $F(0; 6) = 90, F(1; 4) = 72, F(3; 2) = 66, F(9; 0) = 108$. Vậy $\\min F = F(3; 2) = 66$ nghìn đồng (trang 93 SBT).',
              },
            ],
            pedagogicalTip: 'Đây là bài toán cực tiểu hóa chi phí trên miền nghiệm có các điều kiện $\\ge$.',
          },
        ],
        part3: [
          {
            id: 'b4_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 4: Tìm GTLN trên miền hình vuông nghiêng (Bài 2.8 SBT trang 23 & 89)',
            prompt:
              'Tìm giá trị lớn nhất của biểu thức $F(x; y) = 4x - 3y$ trên miền nghiệm của hệ bất phương trình $\\begin{cases} -4 \\le x + y \\le 5 \\\\ -4 \\le x - y \\le 5 \\end{cases}$.',
            acceptableAnswers: ['20'],
            explanation:
              'Miền nghiệm là hình vuông $ABCD$ có các đỉnh $A(5; 0), B(0{,}5; -4{,}5), C(-4; 0), D(0{,}5; 4{,}5)$. Tính $F$ tại các đỉnh: $F(5; 0) = 20, F(0{,}5; -4{,}5) = 15{,}5, F(-4; 0) = -16, F(0{,}5; 4{,}5) = -11{,}5$. Vậy giá trị lớn nhất bằng $20$ (Bài 2.8 trang 89–90 SBT).',
            pedagogicalTip: 'Đỉnh $A(5; 0)$ là giao điểm của $x + y = 5$ và $x - y = 5$.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 4: Tìm GTNN trên miền hình vuông nghiêng (Bài 2.8 SBT trang 23 & 90)',
            prompt:
              'Với cùng hệ bất phương trình $\\begin{cases} -4 \\le x + y \\le 5 \\\\ -4 \\le x - y \\le 5 \\end{cases}$, giá trị nhỏ nhất của biểu thức $F(x; y) = 4x - 3y$ bằng bao nhiêu?',
            acceptableAnswers: ['-16'],
            explanation:
              'Tại đỉnh $C(-4; 0)$ (giao của $x + y = -4$ và $x - y = -4$), ta có $F(-4; 0) = -16$ là giá trị nhỏ nhất (trang 90 SBT).',
            pedagogicalTip: 'Cộng từng vế $x + y = -4$ và $x - y = -4$ được $2x = -8 \\Leftrightarrow x = -4, y = 0$.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 4: Chi phí tối thiểu ăn kiêng (Bài 2.29 SBT trang 28)',
            prompt:
              'Trong Bài 2.29 (trang 28 SBT), số tiền nhỏ nhất (đơn vị: nghìn đồng) mà người ăn kiêng phải trả mỗi ngày để đảm bảo đủ $300$ calo, $36$ đơn vị vitamin A và $90$ đơn vị vitamin C là bao nhiêu?',
            acceptableAnswers: ['66'],
            explanation:
              'Giá trị nhỏ nhất của $F(x; y) = 12x + 15y$ đạt tại $(3; 2)$ và bằng $12 \\cdot 3 + 15 \\cdot 2 = 66$ (nghìn đồng).',
            pedagogicalTip: 'Kiểm tra tại $(3; 2)$: $x+y=5$, $2x+y=8 \\ge 6$, $x+3y=9$.',
            points: 0.5,
          },
          {
            id: 'b4_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 4: Điểm thưởng tối đa trong cuộc thi pha chế (Bài 2.9 SBT trang 23)',
            prompt:
              'Trong cuộc thi pha chế nước uống (Bài 2.9 trang 23 SBT), số điểm thưởng lớn nhất mà đội chơi có thể đạt được là bao nhiêu điểm?',
            acceptableAnswers: ['640'],
            explanation:
              'Tại đỉnh $B(4; 5)$ (pha $4$ lít nước A và $5$ lít nước B), điểm thưởng đạt giá trị lớn nhất là $F(4; 5) = 60 \\cdot 4 + 80 \\cdot 5 = 640$ điểm.',
            pedagogicalTip: 'Đỉnh $B(4; 5)$ là giao của $x + y = 9$ và $0{,}5x + 2y = 12$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b4_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 4: Giải bài toán pha chế nước uống tối ưu điểm thưởng (Bài 2.9 SBT trang 23 & 90)',
            problemStatement:
              'Trong cuộc thi pha chế, mỗi đội dùng tối đa $12$ g hương liệu, $9$ lít nước và $315$ g đường để pha nước $A$ ($60$ điểm/lít, cần $45$ g đường, $1$ lít nước, $0{,}5$ g hương liệu) và nước $B$ ($80$ điểm/lít, cần $15$ g đường, $1$ lít nước, $2$ g hương liệu).',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để tìm số lít nước mỗi loại cần pha chế sao cho tổng điểm thưởng là lớn nhất.',
            steps: [
              {
                id: 'b4_d2_s1',
                originalIndex: 1,
                content:
                  'Gọi $x, y$ ($x \\ge 0, y \\ge 0$) là số lít nước loại $A$ và $B$ cần pha chế. Từ giới hạn nguyên liệu, ta có hệ BPT: $\\begin{cases} x \\ge 0,\\ y \\ge 0 \\\\ x + y \\le 9 \\\\ 45x + 15y \\le 315 \\\\ 0{,}5x + 2y \\le 12 \\end{cases}$.',
                roleDescription: 'Đặt ẩn và lập hệ bất phương trình ràng buộc nguyên liệu',
              },
              {
                id: 'b4_d2_s2',
                originalIndex: 2,
                content:
                  'Hàm điểm thưởng cần tìm GTLN là $F(x; y) = 60x + 80y$. Biểu diễn trên mặt phẳng tọa độ, miền nghiệm của hệ là ngũ giác $OABCD$ với các đỉnh $O(0; 0), A(0; 6), B(4; 5), C(6; 3), D(7; 0)$.',
                roleDescription: 'Xác định hàm điểm thưởng và các đỉnh của ngũ giác miền nghiệm',
              },
              {
                id: 'b4_d2_s3',
                originalIndex: 3,
                content:
                  'Tính giá trị của $F(x; y)$ tại các đỉnh: $F(0; 0) = 0$; $F(0; 6) = 480$; $F(4; 5) = 640$; $F(6; 3) = 600$; $F(7; 0) = 420$.',
                roleDescription: 'Tính điểm thưởng tại từng đỉnh của ngũ giác',
              },
              {
                id: 'b4_d2_s4',
                originalIndex: 4,
                content:
                  'So sánh các kết quả, ta thấy $F(x; y)$ đạt giá trị lớn nhất bằng $640$ tại $(x; y) = (4; 5)$. Vậy cần pha chế $4$ lít nước loại $A$ và $5$ lít nước loại $B$.',
                roleDescription: 'Kết luận phương án pha chế tối ưu',
              },
            ],
            pedagogicalTip:
              ' Luôn kiểm tra tọa độ giao điểm của từng cặp đường thẳng xem có thỏa mãn các bất phương trình còn lại trong hệ hay không.',
            teacherAnalysis:
              'Bài toán quy hoạch tuyến tính kinh điển trong Bài 4 (trang 90–91 SBT Toán 10 Kết nối tri thức).',
            points: 3.0,
          },
        ],
      },
    ],
  },
];
