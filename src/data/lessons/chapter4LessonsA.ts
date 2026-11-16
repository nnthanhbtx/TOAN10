import { LessonCatalogItem } from '../../types/exam';

export const CHAPTER_4_LESSONS_A: LessonCatalogItem[] = [
  {
    id: 'bai-7',
    lessonNumber: 7,
    name: 'Bài 7',
    topicTitle: 'Các khái niệm mở đầu (Vectơ)',
    chapter: 'Chương IV – Vectơ',
    keySummary:
      'Khái niệm vectơ, giá của vectơ, độ dài vectơ, hai vectơ cùng phương, cùng hướng, ngược hướng, hai vectơ bằng nhau và biểu diễn vận tốc bằng vectơ (bám sát SBT Toán 10 KNTT trang 45–48).',
    practiceExams: [
      {
        id: 'de-on-bai-7-1',
        lessonId: 'bai-7',
        title: 'Đề ôn Bài 7 - Đề số 01',
        subtitle: 'Khái niệm vectơ, cùng phương, cùng hướng & hai vectơ bằng nhau (SBT KNTT trang 45–47)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2 và các bài tập 4.1, 4.2, 4.3, 4.4 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b7_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 7: Định nghĩa hai vectơ bằng nhau',
            prompt:
              'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ được gọi là **bằng nhau** khi và chỉ khi:',
            options: [
              { key: 'A', content: 'Chúng có cùng hướng và cùng độ dài.' },
              { key: 'B', content: 'Chúng có cùng phương và cùng độ dài.' },
              { key: 'C', content: 'Chúng có giá trùng nhau và cùng độ dài.' },
              { key: 'D', content: 'Chúng có cùng điểm đầu và cùng độ dài.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo tóm tắt kiến thức Bài 7 (SBT trang 45): Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ bằng nhau nếu chúng có cùng hướng và cùng độ dài, kí hiệu $\\overrightarrow{a} = \\overrightarrow{b}$.',
            pedagogicalTip: 'Cùng phương và cùng độ dài chưa đủ (vì có thể ngược hướng), bắt buộc phải **cùng hướng** và **cùng độ dài**.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 7: Số vectơ tạo bởi các điểm phân biệt',
            prompt:
              'Cho tam giác $ABC$ có ba đỉnh phân biệt. Có bao nhiêu vectơ (khác $\\overrightarrow{0}$) có điểm đầu và điểm cuối là các đỉnh $A, B, C$?',
            options: [
              { key: 'A', content: '$6$' },
              { key: 'B', content: '$3$' },
              { key: 'C', content: '$9$' },
              { key: 'D', content: '$4$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Từ $3$ điểm $A, B, C$ ta lập được $6$ vectơ khác $\\overrightarrow{0}$ là: $\\overrightarrow{AB}, \\overrightarrow{BA}, \\overrightarrow{BC}, \\overrightarrow{CB}, \\overrightarrow{CA}, \\overrightarrow{AC}$.',
            pedagogicalTip: 'Với $n$ điểm phân biệt, số vectơ khác $\\overrightarrow{0}$ tạo thành là $n(n - 1)$.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 7: Hai vectơ bằng nhau trong hình bình hành',
            prompt:
              'Cho tứ giác $ABCD$. Điều kiện cần và đủ để $ABCD$ là hình bình hành là:',
            options: [
              { key: 'A', content: '$\\overrightarrow{AB} = \\overrightarrow{DC}$' },
              { key: 'B', content: '$\\overrightarrow{AB} = \\overrightarrow{CD}$' },
              { key: 'C', content: '$\\overrightarrow{AC} = \\overrightarrow{BD}$' },
              { key: 'D', content: '$|\\overrightarrow{AB}| = |\\overrightarrow{CD}|$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Trong hình bình hành $ABCD$ (đọc theo vòng đỉnh), hai cạnh đối $AB$ và $DC$ song song, bằng nhau và hai vectơ $\\overrightarrow{AB}, \\overrightarrow{DC}$ cùng hướng nên $\\overrightarrow{AB} = \\overrightarrow{DC}$.',
            pedagogicalTip: 'Chú ý thứ tự đỉnh của hình bình hành $ABCD$: $\\overrightarrow{AB} = \\overrightarrow{DC}$ (không phải $\\overrightarrow{CD}$).',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 7: Vectơ trong hình thoi (Ví dụ 1 SBT trang 46)',
            prompt:
              'Cho hình thoi $ABCD$ tâm $O$ có cạnh bằng $a$ và góc $\\widehat{BAD} = 60^\\circ$. Độ dài của vectơ $\\overrightarrow{AC}$ bằng:',
            options: [
              { key: 'A', content: '$a\\sqrt{3}$' },
              { key: 'B', content: '$a$' },
              { key: 'C', content: '$\\frac{a\\sqrt{3}}{2}$' },
              { key: 'D', content: '$2a$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 1 SBT trang 46: Tam giác $ABD$ cân tại $A$ có $\\widehat{BAD} = 60^\\circ$ nên đều cạnh $a \\Rightarrow BO = \\frac{a}{2}$ và $AO = \\frac{a\\sqrt{3}}{2}$. Suy ra $|\\overrightarrow{AC}| = AC = 2AO = a\\sqrt{3}$.',
            pedagogicalTip: 'Độ dài của vectơ $\\overrightarrow{AC}$ chính là độ dài đoạn thẳng $AC$.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 7: Vectơ trong lục giác đều (Bài 4.1 SBT trang 47)',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$. Số các vectơ (khác $\\overrightarrow{0}$) có điểm đầu và điểm cuối là các đỉnh của lục giác hoặc tâm $O$ mà **bằng** vectơ $\\overrightarrow{OC}$ là:',
            options: [
              { key: 'A', content: '$3$' },
              { key: 'B', content: '$2$' },
              { key: 'C', content: '$4$' },
              { key: 'D', content: '$6$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Các vectơ khác $\\overrightarrow{OC}$ và bằng $\\overrightarrow{OC}$ là: $\\overrightarrow{FO}, \\overrightarrow{AB}, \\overrightarrow{ED}$ (có $3$ vectơ).',
            pedagogicalTip: 'Vẽ hình lục giác đều $ABCDEF$ tâm $O$ để liệt kê các đoạn thẳng song song, bằng $OC$ và cùng chiều với $\\overrightarrow{OC}$.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 7: Trọng tâm tam giác và vectơ cùng phương (Ví dụ 2 SBT trang 46)',
            prompt:
              'Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Hai vectơ $\\overrightarrow{GA}$ và $\\overrightarrow{GM}$ ngược hướng và $|\\overrightarrow{GA}| = 2|\\overrightarrow{GM}|$.' },
              { key: 'B', content: 'Hai vectơ $\\overrightarrow{GA}$ và $\\overrightarrow{GM}$ cùng hướng và $|\\overrightarrow{GA}| = 2|\\overrightarrow{GM}|$.' },
              { key: 'C', content: 'Hai vectơ $\\overrightarrow{AG}$ và $\\overrightarrow{AM}$ ngược hướng.' },
              { key: 'D', content: '$|\\overrightarrow{AM}| = 2|\\overrightarrow{GM}|$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 2 SBT trang 46: Điểm $G$ nằm giữa $A$ và $M$ nên $\\overrightarrow{GA}$ và $\\overrightarrow{GM}$ ngược hướng, đồng thời theo tính chất trọng tâm thì $GA = 2GM$.',
            pedagogicalTip: 'Khi $G$ nằm giữa $A$ và $M$, hai vectơ $\\overrightarrow{GA}$ và $\\overrightarrow{GM}$ luôn ngược hướng.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 7: Hai vectơ cùng phương và ba điểm thẳng hàng',
            prompt:
              'Cho ba điểm phân biệt $A, B, C$. Ba điểm $A, B, C$ thẳng hàng khi và chỉ khi:',
            options: [
              { key: 'A', content: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương.' },
              { key: 'B', content: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng.' },
              { key: 'C', content: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ bằng nhau.' },
              { key: 'D', content: '$|\\overrightarrow{AB}| = |\\overrightarrow{AC}|$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo tính chất trong Bài 7 (SBT trang 45): Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương.',
            pedagogicalTip: 'Cùng phương bao gồm cả trường hợp cùng hướng và ngược hướng.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 7: Đường trung bình của tam giác (Bài 4.3 SBT trang 47)',
            prompt:
              'Cho tam giác $ABC$ có $M, N, P$ lần lượt là trung điểm của các cạnh $BC, CA, AB$. Vectơ $\\overrightarrow{MN}$ bằng vectơ nào sau đây?',
            options: [
              { key: 'A', content: '$\\overrightarrow{PA}$' },
              { key: 'B', content: '$\\overrightarrow{AP}$' },
              { key: 'C', content: '$\\overrightarrow{PB}$' },
              { key: 'D', content: '$\\overrightarrow{AB}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $MN$ là đường trung bình của $\\triangle ABC$ nên $MN \\parallel AB$ và $MN = \\frac{1}{2}AB = PA$. Chiều từ $M$ đến $N$ cùng hướng với chiều từ $B$ đến $A$ (tức là từ $P$ đến $A$), nên $\\overrightarrow{MN} = \\overrightarrow{PA} = \\overrightarrow{BP}$ (Bài 4.3 SBT trang 47).',
            pedagogicalTip: 'Chú ý hướng đi từ $M$ (trung điểm $BC$) sang $N$ (trung điểm $CA$) cùng chiều với $\\overrightarrow{BA}$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b7_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 7: Các vectơ trong hình thoi (Ví dụ 1 SBT trang 46)',
            prompt:
              'Cho hình thoi $ABCD$ tâm $O$ có cạnh bằng $a$ và $\\widehat{BAD} = 60^\\circ$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{DC}$ bằng nhau.',
                isCorrect: true,
                explanation: 'Hình thoi là hình bình hành nên $\\overrightarrow{AB} = \\overrightarrow{DC}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Hai vectơ $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ bằng nhau.',
                isCorrect: false,
                explanation: 'Vì $O$ là trung điểm $AC$ nên $\\overrightarrow{OA}$ và $\\overrightarrow{OC}$ ngược hướng (là hai vectơ đối nhau).',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Độ dài của vectơ $\\overrightarrow{BD}$ bằng $a$.',
                isCorrect: true,
                explanation: 'Tam giác $ABD$ đều cạnh $a$ nên $|\\overrightarrow{BD}| = BD = a$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Độ dài của vectơ $\\overrightarrow{AO}$ bằng $\\frac{a\\sqrt{3}}{2}$.',
                isCorrect: true,
                explanation: '$AO$ là đường cao của tam giác đều $ABD$ cạnh $a$ nên $|\\overrightarrow{AO}| = AO = \\frac{a\\sqrt{3}}{2}$.',
              },
            ],
            pedagogicalTip: 'Phân biệt rõ $|\\overrightarrow{OA}| = |\\overrightarrow{OC}|$ (cùng độ dài) với $\\overrightarrow{OA} = \\overrightarrow{OC}$ (sai vì ngược hướng).',
          },
          {
            id: 'b7_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 7: Trực tâm tam giác và đường kính đường tròn ngoại tiếp (Bài 4.4 SBT trang 47)',
            prompt:
              'Cho tam giác $ABC$ nội tiếp đường tròn tâm $O$, có trực tâm $H$. Vẽ đường kính $AA\'$ của đường tròn $(O)$ và gọi $M$ là trung điểm của $BC$ (Bài 4.4 SBT trang 47). Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Hai đường thẳng $BH$ và $A\'C$ cùng vuông góc với $AC$ nên song song với nhau.',
                isCorrect: true,
                explanation: '$\\widehat{ACA\'} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn) nên $A\'C \\perp AC$, mà $BH \\perp AC \\Rightarrow BH \\parallel A\'C$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Tứ giác $BHCA\'$ là hình bình hành, suy ra $\\overrightarrow{BH} = \\overrightarrow{A\'C}$.',
                isCorrect: true,
                explanation: 'Ta có $BH \\parallel A\'C$ và $CH \\parallel A\'B$ (cùng vuông góc với $AB$) nên $BHCA\'$ là hình bình hành $\\Rightarrow \\overrightarrow{BH} = \\overrightarrow{A\'C}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Điểm $M$ là trung điểm của đoạn thẳng $HA\'$.',
                isCorrect: true,
                explanation: 'Trong hình bình hành $BHCA\'$, hai đường chéo $BC$ và $HA\'$ cắt nhau tại trung điểm $M$ của mỗi đường.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Hai vectơ $\\overrightarrow{AH}$ và $\\overrightarrow{OM}$ cùng hướng và $|\\overrightarrow{AH}| = |\\overrightarrow{OM}|$.',
                isCorrect: false,
                explanation: '$OM$ là đường trung bình của $\\triangle AHA\'$ nên $\\overrightarrow{AH}$ và $\\overrightarrow{OM}$ cùng hướng nhưng $|\\overrightarrow{AH}| = 2|\\overrightarrow{OM}|$ (Bài 4.4b SBT trang 103).',
              },
            ],
            pedagogicalTip: 'Bài toán kinh điển dựng đường kính $AA\'$ giúp chứng minh $BHCA\'$ là hình bình hành và $AH = 2OM$.',
          },
        ],
        part3: [
          {
            id: 'b7_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 7: Tính độ dài vectơ trong hình chữ nhật',
            prompt:
              'Cho hình chữ nhật $ABCD$ có $AB = 6$ và $BC = 8$. Tính độ dài của vectơ $\\overrightarrow{AC}$.',
            acceptableAnswers: ['10'],
            explanation:
              'Theo định lí Pythagore trong $\\triangle ABC$ vuông tại $B$: $|\\overrightarrow{AC}| = AC = \\sqrt{6^2 + 8^2} = 10$.',
            pedagogicalTip: '$|\\overrightarrow{AC}| = AC$.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 7: Tỉ số độ dài vectơ tại trọng tâm (Ví dụ 2 SBT trang 46)',
            prompt:
              'Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$. Tính tỉ số $\\frac{|\\overrightarrow{AM}|}{|\\overrightarrow{GM}|}$.',
            acceptableAnswers: ['3'],
            explanation:
              'Theo tính chất trọng tâm tam giác, $GM = \\frac{1}{3}AM \\Rightarrow \\frac{|\\overrightarrow{AM}|}{|\\overrightarrow{GM}|} = 3$.',
            pedagogicalTip: 'Độ dài trung tuyến $AM$ gấp $3$ lần đoạn $GM$.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 7: Đếm vectơ cùng phương trong lục giác đều (Bài 4.1 SBT trang 47)',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$. Có bao nhiêu vectơ (khác $\\overrightarrow{0}$ và khác $\\overrightarrow{OA}$) có điểm đầu và điểm cuối là các đỉnh $A, B, C, D, E, F$ hoặc tâm $O$ mà **bằng** vectơ $\\overrightarrow{OA}$?',
            acceptableAnswers: ['3'],
            explanation:
              'Các vectơ khác $\\overrightarrow{OA}$ và bằng $\\overrightarrow{OA}$ là $\\overrightarrow{DO}, \\overrightarrow{CB}, \\overrightarrow{EF}$ (có $3$ vectơ).',
            pedagogicalTip: 'Chú ý đếm cả các cạnh song song $CB, EF$ và nửa đường chéo $DO$.',
            points: 0.5,
          },
          {
            id: 'b7_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 7: Biểu diễn vận tốc tàu biển bằng vectơ (Bài 4.5 SBT trang 47)',
            prompt:
              'Một con tàu khởi hành từ đảo $A$, đi thẳng theo hướng Bắc chếch Đông $20^\\circ$ với vận tốc $20\\text{ km/h}$ trong $2$ giờ thì đến đảo $B$ (Bài 4.5 SBT trang 47). Độ dài của vectơ dịch chuyển $\\overrightarrow{AB}$ bằng bao nhiêu kilômét?',
            acceptableAnswers: ['40'],
            explanation:
              'Theo lời giải Bài 4.5 SBT trang 104: Quãng đường tàu đi được sau $2$ giờ là $|\\overrightarrow{AB}| = AB = 20 \\cdot 2 = 40\\text{ km}$.',
            pedagogicalTip: 'Độ dài vectơ dịch chuyển $\\overrightarrow{AB}$ trong chuyển động thẳng đều bằng $v \\cdot t$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b7_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 7: Chứng minh hai vectơ bằng nhau nhờ hình bình hành (Bài 4.4 SBT trang 47)',
            problemStatement:
              'Cho tam giác $ABC$ có trực tâm $H$ và nội tiếp đường tròn $(O)$ đường kính $AA\'$. Chứng minh rằng $\\overrightarrow{BH} = \\overrightarrow{A\'C}$.',
            conclusionTarget:
              'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b7_d1_s1',
                originalIndex: 1,
                content:
                  'Vì $AA\'$ là đường kính của đường tròn $(O)$ nên các góc nội tiếp chắn nửa đường tròn $\\widehat{ABA\'} = \\widehat{ACA\'} = 90^\\circ$, suy ra $A\'B \\perp AB$ và $A\'C \\perp AC$.',
                roleDescription: 'Chứng minh A\'B ⊥ AB và A\'C ⊥ AC',
              },
              {
                id: 'b7_d1_s2',
                originalIndex: 2,
                content:
                  'Vì $H$ là trực tâm của tam giác $ABC$ nên $CH \\perp AB$ và $BH \\perp AC$.',
                roleDescription: 'Sử dụng tính chất trực tâm H',
              },
              {
                id: 'b7_d1_s3',
                originalIndex: 3,
                content:
                  'Từ đó suy ra $BH \\parallel A\'C$ (cùng vuông góc với $AC$) và $CH \\parallel A\'B$ (cùng vuông góc với $AB$), nên tứ giác $BHCA\'$ là hình bình hành.',
                roleDescription: 'Suy ra tứ giác BHCA\' là hình bình hành',
              },
              {
                id: 'b7_d1_s4',
                originalIndex: 4,
                content:
                  'Vì $BHCA\'$ là hình bình hành nên hai cạnh đối $BH = A\'C$ và hai vectơ $\\overrightarrow{BH}, \\overrightarrow{A\'C}$ cùng hướng, vậy $\\overrightarrow{BH} = \\overrightarrow{A\'C}$.',
                roleDescription: 'Kết luận hai vectơ bằng nhau',
              },
            ],
            pedagogicalTip:
              'Phương pháp phổ biến nhất để chứng minh $\\overrightarrow{BH} = \\overrightarrow{A\'C}$ là chứng minh tứ giác $BHCA\'$ là hình bình hành.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 4.4a trang 103 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-7-2',
        lessonId: 'bai-7',
        title: 'Đề ôn Bài 7 - Đề số 02',
        subtitle: 'Quan hệ vectơ trong hình học phẳng & bài toán thực tế (SBT KNTT trang 46–48)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Đề ôn tập số 02 của Bài 7 rèn luyện kỹ năng nhận biết vectơ bằng nhau, đối nhau trong đa giác đều, đường trung bình và ứng dụng vật lý.',
        part1: [
          {
            id: 'b7_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 7: Vectơ không',
            prompt:
              'Khẳng định nào sau đây về vectơ-không ($\\overrightarrow{0}$) là **đúng**?',
            options: [
              { key: 'A', content: 'Vectơ-không cùng phương và cùng hướng với mọi vectơ.' },
              { key: 'B', content: 'Vectơ-không có độ dài bằng $1$.' },
              { key: 'C', content: 'Vectơ-không không có hướng.' },
              { key: 'D', content: 'Vectơ $\\overrightarrow{AA}$ khác vectơ $\\overrightarrow{BB}$ khi $A$ khác $B$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo quy ước (SBT trang 45): Vectơ-không $\\overrightarrow{0}$ có độ dài bằng $0$ và cùng phương, cùng hướng với mọi vectơ; mọi vectơ $\\overrightarrow{AA} = \\overrightarrow{BB} = \\overrightarrow{0}$.',
            pedagogicalTip: 'Quy ước $\\overrightarrow{0}$ cùng phương và cùng hướng với mọi vectơ giúp các tính chất đại số của vectơ luôn đúng.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 7: Lục giác đều (Bài 4.1 SBT trang 47)',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$. Khẳng định nào sau đây là **sai**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{OB} = \\overrightarrow{OE}$' },
              { key: 'B', content: '$\\overrightarrow{AB} = \\overrightarrow{OC}$' },
              { key: 'C', content: '$\\overrightarrow{AB} = \\overrightarrow{ED}$' },
              { key: 'D', content: '$|\\overrightarrow{AB}| = |\\overrightarrow{OE}|$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $O$ là trung điểm của đường chéo chính $BE$ nên $\\overrightarrow{OB}$ và $\\overrightarrow{OE}$ ngược hướng (chúng không bằng nhau). Do đó khẳng định A sai.',
            pedagogicalTip: '$\\overrightarrow{OB}$ và $\\overrightarrow{EO}$ mới bằng nhau, còn $\\overrightarrow{OB}$ và $\\overrightarrow{OE}$ ngược hướng.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 7: Ba hình bình hành có chung cạnh (Bài 4.2 SBT trang 47)',
            prompt:
              'Cho hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $BC$ và $AD$ (Bài 4.2 SBT trang 47). Vectơ $\\overrightarrow{AM}$ bằng vectơ nào sau đây?',
            options: [
              { key: 'A', content: '$\\overrightarrow{NC}$' },
              { key: 'B', content: '$\\overrightarrow{CN}$' },
              { key: 'C', content: '$\\overrightarrow{MC}$' },
              { key: 'D', content: '$\\overrightarrow{ND}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $AN \\parallel MC$ và $AN = \\frac{1}{2}AD = \\frac{1}{2}BC = MC$ nên tứ giác $AMCN$ là hình bình hành. Suy ra $\\overrightarrow{AM} = \\overrightarrow{NC}$.',
            pedagogicalTip: 'Chứng minh $AMCN$ là hình bình hành để suy ra hai vectơ cạnh đối bằng nhau.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 7: Điều kiện hai vectơ bằng nhau',
            prompt:
              'Cho bốn điểm không thẳng hàng $A, B, C, D$ thỏa mãn $\\overrightarrow{AB} = \\overrightarrow{CD}$. Khi đó tứ giác nào sau đây là hình bình hành?',
            options: [
              { key: 'A', content: 'Tứ giác $ABDC$.' },
              { key: 'B', content: 'Tứ giác $ABCD$.' },
              { key: 'C', content: 'Tứ giác $ACBD$.' },
              { key: 'D', content: 'Không có tứ giác nào là hình bình hành.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $\\overrightarrow{AB} = \\overrightarrow{CD}$ nên hai đoạn $AB, CD$ song song, bằng nhau và theo thứ tự vòng đỉnh thì tứ giác $ABDC$ là hình bình hành.',
            pedagogicalTip: 'Khi $\\overrightarrow{AB} = \\overrightarrow{CD}$, đỉnh $B$ nối với $D$ và $C$ nối với $A$ tạo thành hình bình hành $ABDC$.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 7: Độ dài vectơ trong tam giác vuông cân',
            prompt:
              'Cho tam giác $ABC$ vuông cân tại $A$ có $AB = AC = 3a$. Độ dài của vectơ $\\overrightarrow{BC}$ bằng:',
            options: [
              { key: 'A', content: '$3a\\sqrt{2}$' },
              { key: 'B', content: '$3a$' },
              { key: 'C', content: '$6a$' },
              { key: 'D', content: '$a\\sqrt{6}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Tam giác $ABC$ vuông cân tại $A$ nên $|\\overrightarrow{BC}| = BC = AB\\sqrt{2} = 3a\\sqrt{2}$.',
            pedagogicalTip: 'Cạnh huyền tam giác vuông cân bằng cạnh góc vuông nhân $\\sqrt{2}$.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 7: Vectơ cùng hướng trên một đường thẳng',
            prompt:
              'Cho bốn điểm $A, B, C, D$ phân biệt cùng nằm trên một đường thẳng và sắp xếp theo thứ tự đó. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ cùng hướng.' },
              { key: 'B', content: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{DC}$ cùng hướng.' },
              { key: 'C', content: 'Hai vectơ $\\overrightarrow{BC}$ và $\\overrightarrow{DA}$ cùng hướng.' },
              { key: 'D', content: 'Hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{DB}$ cùng hướng.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Do $A, B, C, D$ theo thứ tự từ trái sang phải trên đường thẳng nên $\\overrightarrow{AB}$ và $\\overrightarrow{CD}$ đều hướng từ trái sang phải, tức là cùng hướng.',
            pedagogicalTip: 'Vẽ trục thẳng và đánh dấu thứ tự $A - B - C - D$ để nhìn ngay chiều mũi tên.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 7: Hướng của vectơ dịch chuyển ngược lại (Bài 4.5 SBT trang 47)',
            prompt:
              'Một con tàu đi thẳng từ đảo $A$ đến đảo $B$ theo hướng Bắc chếch Đông $20^\\circ$ (kí hiệu $N20^\\circ E$). Nếu một con tàu khác đi thẳng từ đảo $B$ về đảo $A$ thì vectơ $\\overrightarrow{BA}$ có hướng là (Bài 4.5 SBT trang 47):',
            options: [
              { key: 'A', content: 'Nam chếch Tây $20^\\circ$ ($S20^\\circ W$).' },
              { key: 'B', content: 'Nam chếch Đông $20^\\circ$ ($S20^\\circ E$).' },
              { key: 'C', content: 'Bắc chếch Tây $20^\\circ$ ($N20^\\circ W$).' },
              { key: 'D', content: 'Tây chếch Nam $20^\\circ$ ($W20^\\circ S$).' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.5 SBT trang 104: Vectơ $\\overrightarrow{BA}$ ngược hướng với $\\overrightarrow{AB}$ ($N20^\\circ E$) nên có hướng Nam chếch Tây $20^\\circ$ ($S20^\\circ W$).',
            pedagogicalTip: 'Hướng ngược lại của Bắc (N) là Nam (S), của Đông (E) là Tây (W) với cùng góc lệch $20^\\circ$.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 7: Xác định điểm thỏa mãn đẳng thức vectơ',
            prompt:
              'Cho vectơ $\\overrightarrow{a}$ và một điểm $A$ cố định. Có bao nhiêu điểm $M$ thỏa mãn $\\overrightarrow{AM} = \\overrightarrow{a}$?',
            options: [
              { key: 'A', content: 'Duy nhất $1$ điểm $M$.' },
              { key: 'B', content: 'Có $2$ điểm $M$ đối xứng nhau qua $A$.' },
              { key: 'C', content: 'Vô số điểm $M$ nằm trên đường thẳng qua $A$.' },
              { key: 'D', content: 'Không tồn tại điểm $M$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Với điểm đầu $A$ cho trước và vectơ $\\overrightarrow{a}$ cho trước, hoàn toàn xác định duy nhất điểm cuối $M$ sao cho $\\overrightarrow{AM}$ cùng hướng và cùng độ dài với $\\overrightarrow{a}$.',
            pedagogicalTip: 'Mỗi vectơ được xác định duy nhất khi biết điểm đầu, hướng và độ dài.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b7_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 7: Ba đường trung bình trong tam giác (Bài 4.3 SBT trang 47)',
            prompt:
              'Cho tam giác đều $ABC$ cạnh bằng $4$. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $BC, CA, AB$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Hai vectơ $\\overrightarrow{MN}$ và $\\overrightarrow{PA}$ bằng nhau.',
                isCorrect: true,
                explanation: '$MN$ là đường trung bình ứng với cạnh $AB$ nên $MN \\parallel PA, MN = PA$ và cùng hướng $\\Rightarrow \\overrightarrow{MN} = \\overrightarrow{PA}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Ba vectơ $\\overrightarrow{AP}, \\overrightarrow{PB}$ và $\\overrightarrow{NM}$ đôi một bằng nhau.',
                isCorrect: true,
                explanation: 'Vì $P$ là trung điểm $AB$ nên $\\overrightarrow{AP} = \\overrightarrow{PB}$, đồng thời $\\overrightarrow{NM} = \\overrightarrow{AP}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Độ dài của vectơ $\\overrightarrow{AM}$ bằng $2\\sqrt{3}$.',
                isCorrect: true,
                explanation: '$AM$ là đường cao của tam giác đều cạnh $4$ nên $|\\overrightarrow{AM}| = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Hai vectơ $\\overrightarrow{MP}$ và $\\overrightarrow{NC}$ cùng hướng.',
                isCorrect: false,
                explanation: '$\\overrightarrow{MP}$ hướng từ $M$ đến $P$ (cùng hướng $\\overrightarrow{CA}$), còn $\\overrightarrow{NC}$ hướng từ $N$ đến $C$ (cùng hướng $\\overrightarrow{AC}$), nên chúng ngược hướng.',
              },
            ],
            pedagogicalTip: 'Chú ý thứ tự đỉnh khi đọc hướng của đường trung bình trong tam giác.',
          },
          {
            id: 'b7_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 7: Lục giác đều tâm O (Bài 4.1 SBT trang 47)',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$ có cạnh bằng $a$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Các vectơ $\\overrightarrow{AB}, \\overrightarrow{FO}, \\overrightarrow{OC}, \\overrightarrow{ED}$ đôi một bằng nhau.',
                isCorrect: true,
                explanation: 'Bốn vectơ này đều có cùng hướng và cùng độ dài bằng $a$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Độ dài của vectơ $\\overrightarrow{AD}$ bằng $2a$.',
                isCorrect: true,
                explanation: '$AD$ là đường kính của đường tròn ngoại tiếp lục giác đều bán kính $a$ nên $AD = 2a$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Độ dài của vectơ $\\overrightarrow{AC}$ bằng $a\\sqrt{2}$.',
                isCorrect: false,
                explanation: 'Tam giác $ACD$ vuông tại $C$ có $AD = 2a, CD = a \\Rightarrow AC = \\sqrt{(2a)^2 - a^2} = a\\sqrt{3}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Hai vectơ $\\overrightarrow{AC}$ và $\\overrightarrow{FD}$ bằng nhau.',
                isCorrect: true,
                explanation: 'Tứ giác $ACDF$ là hình chữ nhật nên $\\overrightarrow{AC} = \\overrightarrow{FD}$.',
              },
            ],
            pedagogicalTip: 'Trong lục giác đều cạnh $a$, đường chéo ngắn ($AC, BD, CE, \\dots$) có độ dài $a\\sqrt{3}$, đường chéo chính ($AD, BE, CF$) có độ dài $2a$.',
          },
        ],
        part3: [
          {
            id: 'b7_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 7: Số vectơ khác vectơ-không từ 4 điểm',
            prompt:
              'Cho bốn điểm phân biệt $A, B, C, D$. Có tất cả bao nhiêu vectơ khác $\\overrightarrow{0}$ có điểm đầu và điểm cuối thuộc tập hợp $\\{A, B, C, D\\}$?',
            acceptableAnswers: ['12'],
            explanation:
              'Chọn điểm đầu có $4$ cách, chọn điểm cuối khác điểm đầu có $3$ cách. Vậy có $4 \\cdot 3 = 12$ vectơ khác $\\overrightarrow{0}$.',
            pedagogicalTip: 'Công thức nhanh: $n(n - 1)$ với $n = 4$.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 7: Độ dài vectơ đường chéo ngắn lục giác đều',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$ có cạnh bằng $2\\sqrt{3}$. Tính độ dài của vectơ $\\overrightarrow{AC}$.',
            acceptableAnswers: ['6'],
            explanation:
              'Trong lục giác đều cạnh $a = 2\\sqrt{3}$, đường chéo ngắn $AC = a\\sqrt{3} = 2\\sqrt{3} \\cdot \\sqrt{3} = 6$.',
            pedagogicalTip: 'Áp dụng công thức đường chéo ngắn $AC = a\\sqrt{3}$.',
            points: 0.5,
          },
          {
            id: 'b7_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 7: Tỉ số độ dài AH và OM trong tam giác (Bài 4.4b SBT trang 47)',
            prompt:
              'Cho tam giác $ABC$ có trực tâm $H$, tâm đường tròn ngoại tiếp $O$ và $M$ là trung điểm cạnh $BC$. Biết $|\\overrightarrow{OM}| = 5$, tính độ dài của vectơ $\\overrightarrow{AH}$.',
            acceptableAnswers: ['10'],
            explanation:
              'Theo kết quả Bài 4.4b SBT trang 47: $|\\overrightarrow{AH}| = 2|\\overrightarrow{OM}| = 2 \\cdot 5 = 10$.',
            pedagogicalTip: 'Trong mọi tam giác, khoảng cách từ đỉnh đến trực tâm gấp đôi khoảng cách từ tâm ngoại tiếp đến cạnh đối diện ($AH = 2OM$).',
            points: 0.5,
          },
          {
            id: 'b7_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 7: Độ dài vectơ trung tuyến tam giác vuông',
            prompt:
              'Cho tam giác $ABC$ vuông tại $A$ có $AB = 9, AC = 12$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Tính độ dài của vectơ $\\overrightarrow{AM}$ (viết dưới dạng số thập phân).',
            acceptableAnswers: ['7,5', '7.5'],
            explanation:
              'Ta có $BC = \\sqrt{9^2 + 12^2} = 15$. Trong tam giác vuông, trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền nên $|\\overrightarrow{AM}| = AM = \\frac{15}{2} = 7{,}5$.',
            pedagogicalTip: 'Đường trung tuyến ứng với cạnh huyền bằng $\\frac{1}{2}$ cạnh huyền.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b7_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 7: Chứng minh các vectơ bằng nhau trong hình bình hành (Bài 4.2 SBT trang 47)',
            problemStatement:
              'Cho hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh đối $BC$ và $AD$. Chứng minh rằng $\\overrightarrow{AM} = \\overrightarrow{NC}$ và $\\overrightarrow{BN} = \\overrightarrow{MD}$.',
            conclusionTarget:
              'Hãy sắp xếp các bước lập luận sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b7_d2_s1',
                originalIndex: 1,
                content:
                  'Vì $ABCD$ là hình bình hành nên $AD \\parallel BC$ và $AD = BC$.',
                roleDescription: 'Nêu tính chất hai cạnh đối AD và BC của hình bình hành',
              },
              {
                id: 'b7_d2_s2',
                originalIndex: 2,
                content:
                  'Do $M, N$ lần lượt là trung điểm của $BC, AD$ nên $AN = ND = \\frac{1}{2}AD$ và $BM = MC = \\frac{1}{2}BC$, suy ra $AN = MC$ và $ND = BM$.',
                roleDescription: 'Chứng minh các đoạn thẳng bằng nhau',
              },
              {
                id: 'b7_d2_s3',
                originalIndex: 3,
                content:
                  'Xét tứ giác $AMCN$ có $AN \\parallel MC$ và $AN = MC$ nên $AMCN$ là hình bình hành, suy ra $\\overrightarrow{AM} = \\overrightarrow{NC}$.',
                roleDescription: 'Suy ra AMCN là hình bình hành và vectơ AM = NC',
              },
              {
                id: 'b7_d2_s4',
                originalIndex: 4,
                content:
                  'Tương tự, tứ giác $BNDM$ có $BM \\parallel ND$ và $BM = ND$ nên $BNDM$ là hình bình hành, suy ra $\\overrightarrow{BN} = \\overrightarrow{MD}$ (điều phải chứng minh).',
                roleDescription: 'Suy ra BNDM là hình bình hành và kết luận',
              },
            ],
            pedagogicalTip:
              'Khai thác các cặp cạnh đối song song và bằng nhau để tạo ra các hình bình hành con $AMCN$ và $BNDM$.',
            teacherAnalysis:
              'Lời giải bám sát Bài 4.2 trang 103 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-8',
    lessonNumber: 8,
    name: 'Bài 8',
    topicTitle: 'Tổng và hiệu của hai vectơ',
    chapter: 'Chương IV – Vectơ',
    keySummary:
      'Quy tắc ba điểm, quy tắc hình bình hành, quy tắc hiệu hai vectơ, tính chất trung điểm đoạn thẳng - trọng tâm tam giác và bài toán cân bằng lực (bám sát SBT Toán 10 KNTT trang 48–51).',
    practiceExams: [
      {
        id: 'de-on-bai-8-1',
        lessonId: 'bai-8',
        title: 'Đề ôn Bài 8 - Đề số 01',
        subtitle: 'Quy tắc 3 điểm, quy tắc hình bình hành & quy tắc hiệu (SBT KNTT trang 48–50)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2 và các bài tập 4.6, 4.7, 4.8, 4.9, 4.10 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b8_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 8: Quy tắc ba điểm và quy tắc hiệu',
            prompt:
              'Với ba điểm $A, B, C$ bất kì, đẳng thức nào sau đây là **sai**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{BC}$' },
              { key: 'B', content: '$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$' },
              { key: 'C', content: '$\\overrightarrow{AC} - \\overrightarrow{AB} = \\overrightarrow{BC}$' },
              { key: 'D', content: '$\\overrightarrow{AB} = \\overrightarrow{CB} - \\overrightarrow{CA}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo quy tắc hiệu (SBT trang 48): $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$ (không phải $\\overrightarrow{BC}$). Vậy A sai.',
            pedagogicalTip: 'Quy tắc hiệu chung điểm đầu $A$: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$ (điểm cuối của vectơ trừ trở thành điểm đầu).',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 8: Quy tắc hình bình hành',
            prompt:
              'Cho hình bình hành $ABCD$ tâm $O$. Đẳng thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$' },
              { key: 'B', content: '$\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$' },
              { key: 'C', content: '$\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AC}$' },
              { key: 'D', content: '$\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{0}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo quy tắc hình bình hành (SBT trang 48): Với hình bình hành $ABCD$, ta luôn có $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.',
            pedagogicalTip: 'Hai vectơ cạnh xuất phát từ cùng đỉnh $A$ có tổng bằng vectơ đường chéo $\\overrightarrow{AC}$.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 8: Hệ thức trung điểm và trọng tâm',
            prompt:
              'Cho đoạn thẳng $AB$ có trung điểm $I$ và tam giác $ABC$ có trọng tâm $G$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{IA} + \\overrightarrow{IB} = \\overrightarrow{0}$ và $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$.' },
              { key: 'B', content: '$\\overrightarrow{IA} - \\overrightarrow{IB} = \\overrightarrow{0}$ và $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$.' },
              { key: 'C', content: '$\\overrightarrow{AI} + \\overrightarrow{BI} = \\overrightarrow{AB}$.' },
              { key: 'D', content: '$\\overrightarrow{GA} + \\overrightarrow{GB} = \\overrightarrow{GC}$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo tính chất trung điểm và trọng tâm (SBT trang 48): $I$ là trung điểm $AB \\Leftrightarrow \\overrightarrow{IA} + \\overrightarrow{IB} = \\overrightarrow{0}$; $G$ là trọng tâm $\\triangle ABC \\Leftrightarrow \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$.',
            pedagogicalTip: 'Hai hệ thức đặc trưng của trung điểm và trọng tâm là nền tảng để chứng minh các đẳng thức vectơ.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 8: Rút gọn tổng hiệu nhiều vectơ (Ví dụ 1 SBT trang 49)',
            prompt:
              'Cho năm điểm $A, B, C, D, E$ bất kì. Tổng $\\overrightarrow{AB} + \\overrightarrow{CD} + \\overrightarrow{BC} + \\overrightarrow{DE}$ bằng:',
            options: [
              { key: 'A', content: '$\\overrightarrow{AE}$' },
              { key: 'B', content: '$\\overrightarrow{EA}$' },
              { key: 'C', content: '$\\overrightarrow{AD}$' },
              { key: 'D', content: '$\\overrightarrow{0}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Nhóm theo quy tắc ba điểm: $(\\overrightarrow{AB} + \\overrightarrow{BC}) + (\\overrightarrow{CD} + \\overrightarrow{DE}) = \\overrightarrow{AC} + \\overrightarrow{CE} = \\overrightarrow{AE}$.',
            pedagogicalTip: 'Hoán vị các vectơ sao cho điểm cuối của vectơ trước trùng với điểm đầu của vectơ sau.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 8: Tính độ dài tổng các vectơ trong hình chữ nhật (Ví dụ 2 SBT trang 49)',
            prompt:
              'Cho hình chữ nhật $ABCD$ có $AB = a, AD = a\\sqrt{2}$. Độ dài của vectơ $\\overrightarrow{u} = \\overrightarrow{DC} + \\overrightarrow{BD} + \\overrightarrow{AB}$ bằng:',
            options: [
              { key: 'A', content: '$a\\sqrt{3}$' },
              { key: 'B', content: '$a\\sqrt{2}$' },
              { key: 'C', content: '$2a$' },
              { key: 'D', content: '$3a$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 2 SBT trang 49: $\\overrightarrow{u} = (\\overrightarrow{AB} + \\overrightarrow{BD}) + \\overrightarrow{DC} = \\overrightarrow{AD} + \\overrightarrow{DC} = \\overrightarrow{AC}$. Suy ra $|\\overrightarrow{u}| = AC = \\sqrt{AB^2 + AD^2} = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$.',
            pedagogicalTip: 'Thu gọn tổng các vectơ về một vectơ duy nhất trước khi tính độ dài.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 8: Tính độ dài hiệu hai vectơ trong tam giác đều (Bài 4.9 SBT trang 50)',
            prompt:
              'Cho tam giác đều $ABC$ cạnh bằng $a$. Độ dài của hai vectơ $\\overrightarrow{AB} - \\overrightarrow{AC}$ và $\\overrightarrow{AB} + \\overrightarrow{AC}$ lần lượt là:',
            options: [
              { key: 'A', content: '$a$ và $a\\sqrt{3}$.' },
              { key: 'B', content: '$a\\sqrt{3}$ và $a$.' },
              { key: 'C', content: '$2a$ và $a\\sqrt{3}$.' },
              { key: 'D', content: '$0$ và $2a$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $|\\overrightarrow{AB} - \\overrightarrow{AC}| = |\\overrightarrow{CB}| = CB = a$. Gọi $M$ là trung điểm $BC$, dựng hình thoi $ABDC$ thì $\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$ có độ dài $AD = 2AM = 2\\cdot \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$.',
            pedagogicalTip: 'Hiệu hai vectơ chung gốc $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$, còn tổng $\\overrightarrow{AB} + \\overrightarrow{AC}$ bằng $2$ lần vectơ trung tuyến.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 8: Tổng vectơ trong lục giác đều (Bài 4.10 SBT trang 50)',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$ có cạnh bằng $1$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{OE}$ bằng:',
            options: [
              { key: 'A', content: '$1$' },
              { key: 'B', content: '$2$' },
              { key: 'C', content: '$\\sqrt{3}$' },
              { key: 'D', content: '$0$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.10 SBT trang 106: Vì $\\overrightarrow{OE} = \\overrightarrow{BO}$ nên $\\overrightarrow{AB} + \\overrightarrow{OE} = \\overrightarrow{AB} + \\overrightarrow{BO} = \\overrightarrow{AO}$. Do đó $|\\overrightarrow{AB} + \\overrightarrow{OE}| = AO = 1$.',
            pedagogicalTip: 'Thay $\\overrightarrow{OE}$ bằng vectơ bằng nó là $\\overrightarrow{BO}$ để áp dụng quy tắc 3 điểm.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 8: Bất đẳng thức độ dài tổng hai vectơ (Bài 4.8 SBT trang 50)',
            prompt:
              'Với hai vectơ $\\overrightarrow{a}, \\overrightarrow{b}$ khác $\\overrightarrow{0}$, đẳng thức $|\\overrightarrow{a} + \\overrightarrow{b}| = |\\overrightarrow{a}| + |\\overrightarrow{b}|$ xảy ra khi và chỉ khi:',
            options: [
              { key: 'A', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ cùng hướng.' },
              { key: 'B', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ ngược hướng.' },
              { key: 'C', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ cùng phương.' },
              { key: 'D', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ vuông góc với nhau.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Bài 4.8a SBT trang 50 (lời giải trang 106): Đặt $\\overrightarrow{a} = \\overrightarrow{AB}, \\overrightarrow{b} = \\overrightarrow{BC}$ thì $|\\overrightarrow{a} + \\overrightarrow{b}| = |\\overrightarrow{a}| + |\\overrightarrow{b}| \\Leftrightarrow AC = AB + BC \\Leftrightarrow B$ nằm giữa $A$ và $C \\Leftrightarrow \\overrightarrow{a}, \\overrightarrow{b}$ cùng hướng.',
            pedagogicalTip: 'Độ dài của tổng bằng tổng hai độ dài khi và chỉ khi hai vectơ cùng hướng.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b8_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 8: Các đẳng thức vectơ trong hình bình hành (Bài 4.6, 4.7 SBT trang 50)',
            prompt:
              'Cho hình bình hành $ABCD$ có hai đường chéo cắt nhau tại tâm $O$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: '$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = \\overrightarrow{0}$.',
                isCorrect: true,
                explanation: 'Vì $O$ là trung điểm của cả $AC$ và $BD$ nên $(\\overrightarrow{OA} + \\overrightarrow{OC}) + (\\overrightarrow{OB} + \\overrightarrow{OD}) = \\overrightarrow{0} + \\overrightarrow{0} = \\overrightarrow{0}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: '$\\overrightarrow{AB} - \\overrightarrow{BC} = \\overrightarrow{DB}$.',
                isCorrect: true,
                explanation: 'Vì $\\overrightarrow{BC} = \\overrightarrow{AD}$ nên $\\overrightarrow{AB} - \\overrightarrow{BC} = \\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: '$\\overrightarrow{DA} - \\overrightarrow{DB} + \\overrightarrow{DC} = \\overrightarrow{0}$.',
                isCorrect: true,
                explanation: 'Theo quy tắc hình bình hành $\\overrightarrow{DA} + \\overrightarrow{DC} = \\overrightarrow{DB} \\Leftrightarrow \\overrightarrow{DA} - \\overrightarrow{DB} + \\overrightarrow{DC} = \\overrightarrow{0}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Nếu $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AB} - \\overrightarrow{AD}|$ thì hình bình hành $ABCD$ là hình thoi.',
                isCorrect: false,
                explanation: 'Ta có $|\\overrightarrow{AB} + \\overrightarrow{AD}| = AC$ và $|\\overrightarrow{AB} - \\overrightarrow{AD}| = |\\overrightarrow{DB}| = BD$. Hình bình hành có $AC = BD$ là **hình chữ nhật** (không nhất thiết là hình thoi).',
              },
            ],
            pedagogicalTip: 'Chú ý: $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AB} - \\overrightarrow{AD}| \\Leftrightarrow AC = BD \\Leftrightarrow ABCD$ là hình chữ nhật.',
          },
          {
            id: 'b8_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 8: Tính độ dài tổng và hiệu vectơ trong tam giác vuông (Bài 4.9 SBT trang 50)',
            prompt:
              'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3a, AC = 4a$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Độ dài của vectơ $\\overrightarrow{AB} - \\overrightarrow{AC}$ bằng $5a$.',
                isCorrect: true,
                explanation: '$|\\overrightarrow{AB} - \\overrightarrow{AC}| = |\\overrightarrow{CB}| = BC = \\sqrt{(3a)^2 + (4a)^2} = 5a$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AC}$ bằng $5a$.',
                isCorrect: true,
                explanation: 'Dựng hình chữ nhật $ABDC$ thì $\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$ và $AD = BC = 5a$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Độ dài của vectơ $\\overrightarrow{BA} + \\overrightarrow{BC}$ bằng $7a$.',
                isCorrect: false,
                explanation: 'Vì $\\overrightarrow{BA}$ và $\\overrightarrow{BC}$ không cùng hướng nên $|\\overrightarrow{BA} + \\overrightarrow{BC}| < BA + BC = 3a + 5a = 8a$ (cụ thể $|\\overrightarrow{BA} + \\overrightarrow{BC}| = \\sqrt{73}a$).',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Độ dài của vectơ $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC}$ bằng $\\frac{5a}{2}$.',
                isCorrect: true,
                explanation: 'Vì $M$ là trung điểm $BC$ nên $\\overrightarrow{MB} + \\overrightarrow{MC} = \\overrightarrow{0}$. Suy ra $|\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC}| = |\\overrightarrow{MA}| = AM = \\frac{BC}{2} = \\frac{5a}{2}$.',
              },
            ],
            pedagogicalTip: 'Trong tam giác vuông tại $A$, $|\\overrightarrow{AB} + \\overrightarrow{AC}| = |\\overrightarrow{AB} - \\overrightarrow{AC}| = BC$.',
          },
        ],
        part3: [
          {
            id: 'b8_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 8: Độ dài tổng hai vectơ vuông góc',
            prompt:
              'Cho hình vuông $ABCD$ có cạnh bằng $5\\sqrt{2}$. Tính độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$.',
            acceptableAnswers: ['10'],
            explanation:
              'Theo quy tắc hình bình hành: $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AC}| = AC = 5\\sqrt{2} \\cdot \\sqrt{2} = 10$.',
            pedagogicalTip: 'Đường chéo hình vuông cạnh $a$ có độ dài $a\\sqrt{2}$.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 8: Độ dài tổng vectơ trong tam giác đều',
            prompt:
              'Cho tam giác đều $ABC$ có cạnh bằng $2\\sqrt{3}$. Tính độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AC}$.',
            acceptableAnswers: ['6'],
            explanation:
              'Trong tam giác đều cạnh $a = 2\\sqrt{3}$, $|\\overrightarrow{AB} + \\overrightarrow{AC}| = a\\sqrt{3} = 2\\sqrt{3} \\cdot \\sqrt{3} = 6$.',
            pedagogicalTip: 'Trong tam giác đều cạnh $a$, $|\\overrightarrow{AB} + \\overrightarrow{AC}| = 2AM = a\\sqrt{3}$.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 8: Độ dài tổng ba vectơ trong lục giác đều (Bài 4.10 SBT trang 50)',
            prompt:
              'Cho lục giác đều $ABCDEF$ tâm $O$ có cạnh bằng $4$. Tính độ dài của vectơ $\\overrightarrow{OA} + \\overrightarrow{OC} + \\overrightarrow{OE}$.',
            acceptableAnswers: ['0'],
            explanation:
              'Theo quy tắc hình bình hành trong hình thoi $ABCO$: $\\overrightarrow{OA} + \\overrightarrow{OC} = \\overrightarrow{OB}$. Mà $\\overrightarrow{OB} + \\overrightarrow{OE} = \\overrightarrow{0}$, nên $|\\overrightarrow{OA} + \\overrightarrow{OC} + \\overrightarrow{OE}| = 0$.',
            pedagogicalTip: 'Ba đỉnh cách đều trên đường tròn $(A, C, E)$ tạo thành tam giác đều có tâm $O$ là trọng tâm nên $\\overrightarrow{OA} + \\overrightarrow{OC} + \\overrightarrow{OE} = \\overrightarrow{0}$.',
            points: 0.5,
          },
          {
            id: 'b8_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 8: Độ dài hiệu hai vectơ cùng hướng',
            prompt:
              'Cho hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ cùng hướng, biết $|\\overrightarrow{a}| = 12$ và $|\\overrightarrow{b}| = 5$. Tính độ dài của vectơ $\\overrightarrow{a} - \\overrightarrow{b}$.',
            acceptableAnswers: ['7'],
            explanation:
              'Vì $\\overrightarrow{a}, \\overrightarrow{b}$ cùng hướng nên $|\\overrightarrow{a} - \\overrightarrow{b}| = ||\\overrightarrow{a}| - |\\overrightarrow{b}|| = |12 - 5| = 7$.',
            pedagogicalTip: 'Hai vectơ cùng hướng thì độ dài của hiệu bằng hiệu hai độ dài.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b8_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 8: Chứng minh đẳng thức vectơ (Ví dụ 1 SBT trang 49)',
            problemStatement:
              'Cho bốn điểm $A, B, C, D$ bất kì. Chứng minh rằng $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$.',
            conclusionTarget:
              'Hãy sắp xếp các bước biến đổi vế trái thành vế phải theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b8_d1_s1',
                originalIndex: 1,
                content:
                  'Xét vế trái $\\overrightarrow{AB} + \\overrightarrow{CD}$, áp dụng quy tắc ba điểm chèn điểm $D$ vào vectơ $\\overrightarrow{AB}$ và chèn điểm $B$ vào vectơ $\\overrightarrow{CD}$.',
                roleDescription: 'Chèn điểm D và điểm B theo quy tắc ba điểm',
              },
              {
                id: 'b8_d1_s2',
                originalIndex: 2,
                content:
                  'Ta được $\\overrightarrow{AB} + \\overrightarrow{CD} = (\\overrightarrow{AD} + \\overrightarrow{DB}) + (\\overrightarrow{CB} + \\overrightarrow{BD})$.',
                roleDescription: 'Khai triển thành tổng bốn vectơ',
              },
              {
                id: 'b8_d1_s3',
                originalIndex: 3,
                content:
                  'Sử dụng tính chất giao hoán và kết hợp của phép cộng vectơ: $(\\overrightarrow{AD} + \\overrightarrow{CB}) + (\\overrightarrow{DB} + \\overrightarrow{BD})$.',
                roleDescription: 'Nhóm hai vectơ đối nhau DB và BD',
              },
              {
                id: 'b8_d1_s4',
                originalIndex: 4,
                content:
                  'Vì $\\overrightarrow{DB} + \\overrightarrow{BD} = \\overrightarrow{0}$ nên biểu thức bằng $\\overrightarrow{AD} + \\overrightarrow{CB}$ (điều phải chứng minh).',
                roleDescription: 'Triệt tiêu tổng hai vectơ đối và kết luận',
              },
            ],
            pedagogicalTip:
              'Có thể dùng quy tắc hiệu: $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB} \\Leftrightarrow \\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{CB} - \\overrightarrow{CD} \\Leftrightarrow \\overrightarrow{DB} = \\overrightarrow{DB}$.',
            teacherAnalysis:
              'Quy trình chèn điểm theo Ví dụ 1 trang 49 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-8-2',
        lessonId: 'bai-8',
        title: 'Đề ôn Bài 8 - Đề số 02',
        subtitle: 'Ứng dụng tổng hợp lực & cân bằng lực trong Vật lí (SBT KNTT trang 49–51)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 3 và các bài toán cân bằng lực 4.11, 4.12 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b8_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 8: Điều kiện cân bằng của ba lực đồng quy (Ví dụ 3 SBT trang 49)',
            prompt:
              'Cho chất điểm $A$ chịu tác dụng của ba lực đồng quy $\\overrightarrow{F_1}, \\overrightarrow{F_2}, \\overrightarrow{F_3}$ và ở trạng thái cân bằng. Hệ thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{F_1} + \\overrightarrow{F_2} + \\overrightarrow{F_3} = \\overrightarrow{0}$' },
              { key: 'B', content: '$|\\overrightarrow{F_1}| + |\\overrightarrow{F_2}| = |\\overrightarrow{F_3}|$' },
              { key: 'C', content: '$\\overrightarrow{F_1} + \\overrightarrow{F_2} = \\overrightarrow{F_3}$' },
              { key: 'D', content: '$\\overrightarrow{F_1} - \\overrightarrow{F_2} = \\overrightarrow{F_3}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 3 SBT trang 49: Chất điểm $A$ ở trạng thái cân bằng khi và chỉ khi hợp lực của các lực tác dụng lên nó bằng $\\overrightarrow{0}$, tức là $\\overrightarrow{F_1} + \\overrightarrow{F_2} + \\overrightarrow{F_3} = \\overrightarrow{0}$.',
            pedagogicalTip: 'Khi cân bằng: $\\overrightarrow{F_1} + \\overrightarrow{F_2} = -\\overrightarrow{F_3} \\Rightarrow |\\overrightarrow{F_3}| = |\\overrightarrow{F_1} + \\overrightarrow{F_2}|$.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 8: Cường độ lực cân bằng khi góc 120 độ (Ví dụ 3 SBT trang 49)',
            prompt:
              'Cho ba lực $\\overrightarrow{F_1}, \\overrightarrow{F_2}, \\overrightarrow{F_3}$ cùng tác động vào một vật tại điểm $M$ và vật đứng yên. Biết hai lực $\\overrightarrow{F_1}, \\overrightarrow{F_2}$ đều có cường độ là $100\\text{ N}$ và tạo với nhau một góc $120^\\circ$ (Ví dụ 3 SBT trang 49). Cường độ của lực $\\overrightarrow{F_3}$ bằng:',
            options: [
              { key: 'A', content: '$100\\text{ N}$' },
              { key: 'B', content: '$100\\sqrt{3}\\text{ N}$' },
              { key: 'C', content: '$200\\text{ N}$' },
              { key: 'D', content: '$50\\text{ N}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 3 SBT trang 49: Dựng hình thoi có hai cạnh $MA = MB = 100$ và $\\widehat{AMB} = 120^\\circ$, đường chéo $MC$ chia góc $120^\\circ$ thành hai góc $60^\\circ$ nên $\\triangle MAC$ đều $\\Rightarrow |\\overrightarrow{F_3}| = MC = 100\\text{ N}$.',
            pedagogicalTip: 'Hai lực bằng nhau hợp với nhau góc $120^\\circ$ có hợp lực bằng chính cường độ của mỗi lực.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 8: Cường độ lực cân bằng khi hai lực vuông góc (Bài 4.11 SBT trang 50)',
            prompt:
              'Cho ba lực $\\overrightarrow{F_1} = \\overrightarrow{MA}, \\overrightarrow{F_2} = \\overrightarrow{MB}, \\overrightarrow{F_3} = \\overrightarrow{MC}$ cùng tác động vào một vật tại điểm $M$ và vật đứng yên. Cho biết cường độ của $\\overrightarrow{F_1}, \\overrightarrow{F_2}$ lần lượt là $30\\text{ N}$ và $40\\text{ N}$, và góc $\\widehat{AMB} = 90^\\circ$ (Bài 4.11 SBT trang 50). Cường độ của lực $\\overrightarrow{F_3}$ là:',
            options: [
              { key: 'A', content: '$50\\text{ N}$' },
              { key: 'B', content: '$70\\text{ N}$' },
              { key: 'C', content: '$10\\text{ N}$' },
              { key: 'D', content: '$25\\sqrt{2}\\text{ N}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.11 SBT trang 106: Hình chữ nhật có hai cạnh $30$ và $40$ có đường chéo bằng $\\sqrt{30^2 + 40^2} = 50$. Vậy $|\\overrightarrow{F_3}| = |\\overrightarrow{F_1} + \\overrightarrow{F_2}| = 50\\text{ N}$.',
            pedagogicalTip: 'Khi $\\overrightarrow{F_1} \\perp \\overrightarrow{F_2}$ thì $|\\overrightarrow{F_3}| = \\sqrt{F_1^2 + F_2^2}$.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 8: Cường độ lực cân bằng khi góc 60 độ (Bài 4.12 SBT trang 51)',
            prompt:
              'Ba lực $\\overrightarrow{F_1}, \\overrightarrow{F_2}, \\overrightarrow{F_3}$ cùng tác động vào một vật tại điểm $M$ và vật đứng yên. Biết hai lực $\\overrightarrow{F_1}, \\overrightarrow{F_2}$ đều có cường độ là $2\\sqrt{3}\\text{ N}$ và góc giữa chúng bằng $60^\\circ$ (Bài 4.12 SBT trang 51). Cường độ của lực $\\overrightarrow{F_3}$ bằng:',
            options: [
              { key: 'A', content: '$6\\text{ N}$' },
              { key: 'B', content: '$2\\sqrt{3}\\text{ N}$' },
              { key: 'C', content: '$4\\sqrt{3}\\text{ N}$' },
              { key: 'D', content: '$3\\text{ N}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.12 SBT trang 107: Hình thoi cạnh $a = 2\\sqrt{3}$ có góc $60^\\circ$ thì đường chéo lớn bằng $a\\sqrt{3} = 2\\sqrt{3}\\cdot \\sqrt{3} = 6\\text{ N}$.',
            pedagogicalTip: 'Hai lực bằng nhau $F$ hợp góc $60^\\circ$ có hợp lực bằng $F\\sqrt{3}$.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 8: Điều kiện để độ dài tổng bằng độ dài hiệu (Bài 4.8b SBT trang 50)',
            prompt:
              'Cho hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ khác $\\overrightarrow{0}$. Đẳng thức $|\\overrightarrow{a} + \\overrightarrow{b}| = |\\overrightarrow{a} - \\overrightarrow{b}|$ xảy ra khi và chỉ khi:',
            options: [
              { key: 'A', content: 'Giá của hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ vuông góc với nhau.' },
              { key: 'B', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ cùng phương.' },
              { key: 'C', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ có cùng độ dài.' },
              { key: 'D', content: 'Hai vectơ $\\overrightarrow{a}$ và $\\overrightarrow{b}$ bằng nhau.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.8b SBT trang 106: Dựng hình bình hành $ABCD$ với $\\overrightarrow{AB} = \\overrightarrow{a}, \\overrightarrow{AD} = \\overrightarrow{b}$ thì $|\\overrightarrow{a} + \\overrightarrow{b}| = |\\overrightarrow{a} - \\overrightarrow{b}| \\Leftrightarrow AC = BD \\Leftrightarrow ABCD$ là hình chữ nhật $\\Leftrightarrow AB \\perp AD$.',
            pedagogicalTip: 'Hai đường chéo hình bình hành bằng nhau khi và chỉ khi hình bình hành đó là hình chữ nhật.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 8: Thu gọn biểu thức hiệu các vectơ',
            prompt:
              'Cho bốn điểm $A, B, C, D$ bất kì. Hiệu $(\\overrightarrow{AB} - \\overrightarrow{CD}) - (\\overrightarrow{AC} - \\overrightarrow{BD})$ bằng:',
            options: [
              { key: 'A', content: '$\\overrightarrow{0}$' },
              { key: 'B', content: '$\\overrightarrow{BC}$' },
              { key: 'C', content: '$\\overrightarrow{AD}$' },
              { key: 'D', content: '$2\\overrightarrow{BC}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $(\\overrightarrow{AB} - \\overrightarrow{AC}) + (\\overrightarrow{BD} - \\overrightarrow{CD}) = \\overrightarrow{CB} + (\\overrightarrow{BD} + \\overrightarrow{DC}) = \\overrightarrow{CB} + \\overrightarrow{BC} = \\overrightarrow{0}$.',
            pedagogicalTip: 'Đổi $-\\overrightarrow{CD} = +\\overrightarrow{DC}$ để dùng quy tắc ba điểm.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 8: Tìm điểm thỏa mãn tổng hai vectơ bằng vectơ không',
            prompt:
              'Cho tam giác $ABC$. Điểm $M$ thỏa mãn $\\overrightarrow{MA} + \\overrightarrow{MB} - \\overrightarrow{MC} = \\overrightarrow{0}$ là đỉnh thứ tư của hình bình hành nào sau đây?',
            options: [
              { key: 'A', content: 'Hình bình hành $ACBM$.' },
              { key: 'B', content: 'Hình bình hành $ABCM$.' },
              { key: 'C', content: 'Hình bình hành $ABMC$.' },
              { key: 'D', content: 'Điểm $M$ là trung điểm của $AB$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\overrightarrow{MA} + \\overrightarrow{MB} - \\overrightarrow{MC} = \\overrightarrow{0} \\Leftrightarrow \\overrightarrow{MB} - \\overrightarrow{MC} = \\overrightarrow{AM} \\Leftrightarrow \\overrightarrow{CB} = \\overrightarrow{AM}$. Vậy tứ giác $ACBM$ là hình bình hành.',
            pedagogicalTip: 'Biến đổi $\\overrightarrow{MB} - \\overrightarrow{MC} = \\overrightarrow{CB}$ để đưa về hai vectơ bằng nhau.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 8: Tổng các vectơ từ tâm đa giác đều',
            prompt:
              'Cho hình vuông $ABCD$ tâm $O$ cạnh bằng $a$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{OD} + \\overrightarrow{BC} + \\overrightarrow{OB}$ bằng:',
            options: [
              { key: 'A', content: '$a\\sqrt{2}$' },
              { key: 'B', content: '$2a$' },
              { key: 'C', content: '$a$' },
              { key: 'D', content: '$0$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $O$ là trung điểm $BD$ nên $\\overrightarrow{OD} + \\overrightarrow{OB} = \\overrightarrow{0}$. Còn $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ có độ dài $AC = a\\sqrt{2}$.',
            pedagogicalTip: 'Nhóm $\\overrightarrow{OD} + \\overrightarrow{OB} = \\overrightarrow{0}$ trước.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b8_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 8: Bài toán cân bằng của ba lực (Bài 4.11, 4.12 SBT trang 50–51)',
            prompt:
              'Một vật tại điểm $M$ chịu tác dụng của ba lực đồng quy $\\overrightarrow{F_1} = \\overrightarrow{MA}, \\overrightarrow{F_2} = \\overrightarrow{MB}, \\overrightarrow{F_3} = \\overrightarrow{MC}$ và nằm cân bằng. Biết $|\\overrightarrow{F_1}| = 60\\text{ N}, |\\overrightarrow{F_2}| = 60\\text{ N}$ và $\\widehat{AMB} = 60^\\circ$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Vectơ hợp lực của $\\overrightarrow{F_1}$ và $\\overrightarrow{F_2}$ là vectơ đối của $\\overrightarrow{F_3}$.',
                isCorrect: true,
                explanation: 'Từ $\\overrightarrow{F_1} + \\overrightarrow{F_2} + \\overrightarrow{F_3} = \\overrightarrow{0} \\Rightarrow \\overrightarrow{F_1} + \\overrightarrow{F_2} = -\\overrightarrow{F_3}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Dựng hình bình hành $MADB$ thì tứ giác $MADB$ là hình thoi có $\\widehat{AMB} = 60^\\circ$.',
                isCorrect: true,
                explanation: 'Vì $MA = MB = 60$ nên hình bình hành $MADB$ là hình thoi.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Cường độ của lực $\\overrightarrow{F_3}$ bằng $60\\sqrt{3}\\text{ N}$.',
                isCorrect: true,
                explanation: 'Đường chéo lớn $MD$ của hình thoi cạnh $60$ có góc $60^\\circ$ bằng $60\\sqrt{3}\\text{ N}$, nên $|\\overrightarrow{F_3}| = MD = 60\\sqrt{3}\\text{ N}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Góc hợp bởi lực $\\overrightarrow{F_3}$ và lực $\\overrightarrow{F_1}$ bằng $120^\\circ$.',
                isCorrect: false,
                explanation: 'Tia $MD$ là phân giác của $\\widehat{AMB} = 60^\\circ$ nên $\\widehat{AMD} = 30^\\circ$. Tia $MC$ là tia đối của tia $MD$ nên $\\widehat{AMC} = 180^\\circ - 30^\\circ = 150^\\circ$.',
              },
            ],
            pedagogicalTip: 'Chú ý tia $MC$ ngược hướng với tia hợp lực $MD$, nên góc $\\widehat{AMC}$ bù với góc $\\widehat{AMD}$.',
          },
          {
            id: 'b8_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 8: Trọng tâm của hai tam giác có cùng trọng tâm',
            prompt:
              'Cho tam giác $ABC$ có trọng tâm $G$. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $BC, CA, AB$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: '$\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$.',
                isCorrect: true,
                explanation: 'Hệ thức đặc trưng của trọng tâm $G$ trong tam giác $ABC$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Với mọi điểm $O$ bất kì, ta có $\\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OP}$.',
                isCorrect: true,
                explanation: 'Vì $P$ là trung điểm $AB$ nên $\\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OP}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: '$\\overrightarrow{GM} + \\overrightarrow{GN} + \\overrightarrow{GP} = \\overrightarrow{0}$, nghĩa là $G$ cũng là trọng tâm của tam giác $MNP$.',
                isCorrect: true,
                explanation: '$2(\\overrightarrow{GM} + \\overrightarrow{GN} + \\overrightarrow{GP}) = (\\overrightarrow{GB} + \\overrightarrow{GC}) + (\\overrightarrow{GC} + \\overrightarrow{GA}) + (\\overrightarrow{GA} + \\overrightarrow{GB}) = 2(\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC}) = \\overrightarrow{0}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: '$\\overrightarrow{AM} + \\overrightarrow{BN} + \\overrightarrow{CP} = 3\\overrightarrow{AG}$.',
                isCorrect: false,
                explanation: 'Tổng ba vectơ trung tuyến $\\overrightarrow{AM} + \\overrightarrow{BN} + \\overrightarrow{CP}$ luôn bằng $\\overrightarrow{0}$.',
              },
            ],
            pedagogicalTip: 'Tổng ba vectơ đường trung tuyến xuất phát từ ba đỉnh của một tam giác luôn bằng $\\overrightarrow{0}$.',
          },
        ],
        part3: [
          {
            id: 'b8_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 8: Tính hợp lực của hai lực vuông góc (Bài 4.11 SBT trang 50)',
            prompt:
              'Hai lực $\\overrightarrow{F_1}$ và $\\overrightarrow{F_2}$ có điểm đặt tại $O$, vuông góc với nhau và có độ lớn lần lượt là $60\\text{ N}$ và $80\\text{ N}$. Cường độ hợp lực $\\overrightarrow{F} = \\overrightarrow{F_1} + \\overrightarrow{F_2}$ bằng bao nhiêu Newton?',
            acceptableAnswers: ['100'],
            explanation:
              'Vì $\\overrightarrow{F_1} \\perp \\overrightarrow{F_2}$ nên $|\\overrightarrow{F}| = \\sqrt{60^2 + 80^2} = 100\\text{ N}$.',
            pedagogicalTip: 'Áp dụng định lí Pythagore trong hình chữ nhật hợp lực.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 8: Độ dài tổng hai vectơ trong hình thoi',
            prompt:
              'Cho hình thoi $ABCD$ có cạnh bằng $8$ và góc $\\widehat{BAD} = 120^\\circ$. Tính độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$.',
            acceptableAnswers: ['8'],
            explanation:
              'Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Vì $\\widehat{BAD} = 120^\\circ$ nên $\\widehat{ABC} = 60^\\circ \\Rightarrow \\triangle ABC$ đều cạnh $8 \\Rightarrow AC = 8$.',
            pedagogicalTip: 'Hình thoi có góc $120^\\circ$ thì đường chéo xuất phát từ đỉnh đó chia hình thoi thành hai tam giác đều.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 8: Khoảng cách vật lí sau hai lần dịch chuyển',
            prompt:
              'Một ca nô đi từ bến $A$ sang bến $B$ theo hướng chính Đông một đoạn $12\\text{ km}$, sau đó đi tiếp từ $B$ đến $C$ theo hướng chính Bắc một đoạn $5\\text{ km}$. Độ dài của vectơ dịch chuyển tổng hợp $\\overrightarrow{AC}$ bằng bao nhiêu kilômét?',
            acceptableAnswers: ['13'],
            explanation:
              'Ta có $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}$ với $AB \\perp BC$, nên $|\\overrightarrow{AC}| = \\sqrt{12^2 + 5^2} = 13\\text{ km}$.',
            pedagogicalTip: 'Hướng Đông và hướng Bắc vuông góc với nhau.',
            points: 0.5,
          },
          {
            id: 'b8_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 8: Cân bằng lực trên dây treo',
            prompt:
              'Một chiếc đèn chùm nặng được giữ cân bằng bởi hai sợi dây cáp tạo với nhau một góc $120^\\circ$. Biết lực căng trên mỗi sợi dây đều có độ lớn $150\\text{ N}$. Trọng lượng của chiếc đèn chùm bằng bao nhiêu Newton?',
            acceptableAnswers: ['150'],
            explanation:
              'Hợp lực của hai lực căng dây $150\\text{ N}$ hợp nhau góc $120^\\circ$ có độ lớn bằng $150\\text{ N}$ và cân bằng với trọng lượng của đèn (Ví dụ 3 SBT trang 49).',
            pedagogicalTip: 'Hai vectơ bằng nhau hợp góc $120^\\circ$ có độ dài tổng bằng chính độ dài mỗi vectơ.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b8_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 8: Giải bài toán cân bằng của ba lực đồng quy (Bài 4.12 SBT trang 51)',
            problemStatement:
              'Cho ba lực $\\overrightarrow{F_1} = \\overrightarrow{MA}, \\overrightarrow{F_2} = \\overrightarrow{MB}, \\overrightarrow{F_3} = \\overrightarrow{MC}$ cùng tác động vào một vật tại điểm $M$ và vật đứng yên. Cho biết cường độ của $\\overrightarrow{F_1}, \\overrightarrow{F_2}$ đều bằng $2\\sqrt{3}\\text{ N}$ và góc $\\widehat{AMB} = 60^\\circ$.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau để tính cường độ của lực $\\overrightarrow{F_3}$.',
            steps: [
              {
                id: 'b8_d2_s1',
                originalIndex: 1,
                content:
                  'Vì vật tại $M$ đứng yên nên hợp lực bằng $\\overrightarrow{0}$: $\\overrightarrow{F_1} + \\overrightarrow{F_2} + \\overrightarrow{F_3} = \\overrightarrow{0} \\Leftrightarrow \\overrightarrow{F_3} = -(\\overrightarrow{F_1} + \\overrightarrow{F_2})$.',
                roleDescription: 'Viết phương trình cân bằng lực tại M',
              },
              {
                id: 'b8_d2_s2',
                originalIndex: 2,
                content:
                  'Dựng hình bình hành $MADB$, theo quy tắc hình bình hành ta có $\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{MD}$, suy ra $|\\overrightarrow{F_3}| = |\\overrightarrow{MD}| = MD$.',
                roleDescription: 'Dựng hình bình hành hợp lực MADB',
              },
              {
                id: 'b8_d2_s3',
                originalIndex: 3,
                content:
                  'Vì $MA = MB = 2\\sqrt{3}$ và $\\widehat{AMB} = 60^\\circ$ nên $MADB$ là hình thoi và tam giác $MAB$ là tam giác đều cạnh $2\\sqrt{3}$.',
                roleDescription: 'Chứng minh MADB là hình thoi có tam giác MAB đều',
              },
              {
                id: 'b8_d2_s4',
                originalIndex: 4,
                content:
                  'Đường chéo $MD$ gấp đôi đường cao của tam giác đều $MAB$: $MD = 2 \\cdot \\frac{2\\sqrt{3}\\cdot \\sqrt{3}}{2} = 6$. Vậy cường độ của lực $\\overrightarrow{F_3}$ bằng $6\\text{ N}$.',
                roleDescription: 'Tính độ dài đường chéo MD và kết luận',
              },
            ],
            pedagogicalTip:
              'Luôn dựng hình bình hành hợp lực của $\\overrightarrow{F_1}$ và $\\overrightarrow{F_2}$ để tính độ dài đường chéo.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 4.12 trang 107 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
  {
    id: 'bai-9',
    lessonNumber: 9,
    name: 'Bài 9',
    topicTitle: 'Tích của một vectơ với một số',
    chapter: 'Chương IV – Vectơ',
    keySummary:
      'Định nghĩa và tính chất tích của vectơ với một số, điều kiện hai vectơ cùng phương, phân tích một vectơ theo hai vectơ không cùng phương và bài toán lực đẩy Ác-si-mét (bám sát SBT Toán 10 KNTT trang 51–55).',
    practiceExams: [
      {
        id: 'de-on-bai-9-1',
        lessonId: 'bai-9',
        title: 'Đề ôn Bài 9 - Đề số 01',
        subtitle: 'Tích của vectơ với một số & phân tích vectơ (SBT KNTT trang 51–54)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát Ví dụ 1, 2, 3 và các bài tập 4.13, 4.14, 4.15, 4.16, 4.17 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b9_d1_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 9: Định nghĩa tích của một vectơ với một số',
            prompt:
              'Cho vectơ $\\overrightarrow{a} \\ne \\overrightarrow{0}$ và số thực $k \\ne 0$. Khẳng định nào sau đây là **đúng** về vectơ $k\\overrightarrow{a}$?',
            options: [
              { key: 'A', content: 'Vectơ $k\\overrightarrow{a}$ có độ dài bằng $|k||\\overrightarrow{a}|$, cùng hướng với $\\overrightarrow{a}$ nếu $k > 0$ và ngược hướng với $\\overrightarrow{a}$ nếu $k < 0$.' },
              { key: 'B', content: 'Vectơ $k\\overrightarrow{a}$ có độ dài bằng $k|\\overrightarrow{a}|$ với mọi $k \\ne 0$.' },
              { key: 'C', content: 'Vectơ $k\\overrightarrow{a}$ luôn cùng hướng với $\\overrightarrow{a}$.' },
              { key: 'D', content: 'Vectơ $k\\overrightarrow{a}$ cùng phương với $\\overrightarrow{a}$ chỉ khi $k > 0$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo định nghĩa Bài 9 (SBT trang 51): $|k\\overrightarrow{a}| = |k||\\overrightarrow{a}|$, cùng hướng với $\\overrightarrow{a}$ khi $k > 0$ và ngược hướng với $\\overrightarrow{a}$ khi $k < 0$.',
            pedagogicalTip: 'Độ dài vectơ luôn không âm nên phải có dấu giá trị tuyệt đối $|k|$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 9: Hệ thức trung điểm và trọng tâm với điểm O bất kì',
            prompt:
              'Cho đoạn thẳng $AB$ có trung điểm $I$ và tam giác $ABC$ có trọng tâm $G$. Với mọi điểm $O$ bất kì, khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OI}$ và $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$.' },
              { key: 'B', content: '$\\overrightarrow{OA} + \\overrightarrow{OB} = \\overrightarrow{OI}$ và $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = \\overrightarrow{OG}$.' },
              { key: 'C', content: '$\\overrightarrow{OA} - \\overrightarrow{OB} = 2\\overrightarrow{OI}$.' },
              { key: 'D', content: '$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 2\\overrightarrow{OG}$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo tóm tắt kiến thức Bài 9 (SBT trang 51): Với điểm $O$ bất kì, $\\overrightarrow{OA} + \\overrightarrow{OB} = 2\\overrightarrow{OI}$ và $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$.',
            pedagogicalTip: 'Hai công thức này cho phép rút gọn nhanh tổng $2$ vectơ hoặc $3$ vectơ chung gốc $O$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 9: Điểm chia đoạn thẳng theo tỉ số (Bài 4.13 SBT trang 53)',
            prompt:
              'Cho đoạn thẳng $BC$ và điểm $M$ nằm trên đoạn thẳng $BC$ sao cho $BM = 2MC$. Đẳng thức vectơ nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{MB} + 2\\overrightarrow{MC} = \\overrightarrow{0}$' },
              { key: 'B', content: '$2\\overrightarrow{MB} + \\overrightarrow{MC} = \\overrightarrow{0}$' },
              { key: 'C', content: '$\\overrightarrow{MB} - 2\\overrightarrow{MC} = \\overrightarrow{0}$' },
              { key: 'D', content: '$\\overrightarrow{BM} = -2\\overrightarrow{MC}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $M$ nằm giữa $B$ và $C$ nên $\\overrightarrow{MB}$ và $\\overrightarrow{MC}$ ngược hướng, kết hợp $MB = 2MC$ suy ra $\\overrightarrow{MB} = -2\\overrightarrow{MC} \\Leftrightarrow \\overrightarrow{MB} + 2\\overrightarrow{MC} = \\overrightarrow{0}$ (Bài 4.13a SBT trang 53).',
            pedagogicalTip: 'Cẩn thận hệ số: vì $MB$ dài gấp đôi $MC$ nên phải nhân $2$ vào $\\overrightarrow{MC}$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 9: Biểu diễn vectơ AM khi BM = 2MC (Bài 4.13b SBT trang 53)',
            prompt:
              'Cho tam giác $ABC$ và điểm $M$ thuộc cạnh $BC$ sao cho $BM = 2MC$ (Bài 4.13b SBT trang 53). Khi biểu diễn $\\overrightarrow{AM}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$, ta được:',
            options: [
              { key: 'A', content: '$\\overrightarrow{AM} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$' },
              { key: 'B', content: '$\\overrightarrow{AM} = \\frac{2}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$' },
              { key: 'C', content: '$\\overrightarrow{AM} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$' },
              { key: 'D', content: '$\\overrightarrow{AM} = \\overrightarrow{AB} + 2\\overrightarrow{AC}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.13b SBT trang 108: Từ $\\overrightarrow{MB} + 2\\overrightarrow{MC} = \\overrightarrow{0} \\Leftrightarrow (\\overrightarrow{AB} - \\overrightarrow{AM}) + 2(\\overrightarrow{AC} - \\overrightarrow{AM}) = \\overrightarrow{0} \\Leftrightarrow 3\\overrightarrow{AM} = \\overrightarrow{AB} + 2\\overrightarrow{AC} \\Leftrightarrow \\overrightarrow{AM} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$.',
            pedagogicalTip: 'Điểm $M$ gần $C$ hơn ($MC = \\frac{1}{3}BC$) nên hệ số của $\\overrightarrow{AC}$ là $\\frac{2}{3}$, hệ số của $\\overrightarrow{AB}$ là $\\frac{1}{3}$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 9: Biểu diễn vectơ cạnh theo hai đường trung tuyến (Ví dụ 2 SBT trang 52)',
            prompt:
              'Cho tam giác $ABC$ có hai đường trung tuyến $AD$ và $BE$ (Ví dụ 2 SBT trang 52). Biểu diễn vectơ $\\overrightarrow{AB}$ theo hai vectơ $\\overrightarrow{AD}$ và $\\overrightarrow{BE}$ ta được:',
            options: [
              { key: 'A', content: '$\\overrightarrow{AB} = \\frac{2}{3}\\overrightarrow{AD} - \\frac{2}{3}\\overrightarrow{BE}$' },
              { key: 'B', content: '$\\overrightarrow{AB} = \\frac{2}{3}\\overrightarrow{AD} + \\frac{2}{3}\\overrightarrow{BE}$' },
              { key: 'C', content: '$\\overrightarrow{AB} = \\frac{1}{3}\\overrightarrow{AD} - \\frac{1}{3}\\overrightarrow{BE}$' },
              { key: 'D', content: '$\\overrightarrow{AB} = \\frac{4}{3}\\overrightarrow{AD} - \\frac{2}{3}\\overrightarrow{BE}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 2 SBT trang 52: Gọi $G$ là trọng tâm $\\triangle ABC$, ta có $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AD}$ và $\\overrightarrow{BG} = \\frac{2}{3}\\overrightarrow{BE}$. Suy ra $\\overrightarrow{AB} = \\overrightarrow{AG} - \\overrightarrow{BG} = \\frac{2}{3}\\overrightarrow{AD} - \\frac{2}{3}\\overrightarrow{BE}$.',
            pedagogicalTip: 'Sử dụng trọng tâm $G$ làm điểm trung gian: $\\overrightarrow{AB} = \\overrightarrow{AG} - \\overrightarrow{BG}$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 9: Đường thẳng Euler trong tam giác (Ví dụ 3 SBT trang 52)',
            prompt:
              'Cho tam giác $ABC$ có trọng tâm $G$, trực tâm $H$ và tâm đường tròn ngoại tiếp $O$ (Ví dụ 3 SBT trang 52). Đẳng thức vectơ nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{OH} = 3\\overrightarrow{OG}$' },
              { key: 'B', content: '$\\overrightarrow{OG} = 3\\overrightarrow{OH}$' },
              { key: 'C', content: '$\\overrightarrow{OH} = 2\\overrightarrow{OG}$' },
              { key: 'D', content: '$\\overrightarrow{OH} = -3\\overrightarrow{OG}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo Ví dụ 3 SBT trang 52: Ta có $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$ và $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$, suy ra $\\overrightarrow{OH} = 3\\overrightarrow{OG}$ (ba điểm $O, G, H$ thẳng hàng trên đường thẳng Euler).',
            pedagogicalTip: 'Hệ thức Euler $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$ chứng minh $O, G, H$ thẳng hàng.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 9: Đoạn thẳng nối trung điểm hai đường chéo tứ giác (Bài 4.14 SBT trang 53)',
            prompt:
              'Cho tứ giác $ABCD$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh $AB, CD$ và $I$ là trung điểm của đoạn thẳng $MN$ (Bài 4.14 SBT trang 53). Với mọi điểm $O$ bất kì, đẳng thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = 4\\overrightarrow{OI}$' },
              { key: 'B', content: '$\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD} = 2\\overrightarrow{OI}$' },
              { key: 'C', content: '$\\overrightarrow{IA} + \\overrightarrow{IB} + \\overrightarrow{IC} + \\overrightarrow{ID} = \\overrightarrow{MN}$' },
              { key: 'D', content: '$\\overrightarrow{AB} + \\overrightarrow{CD} = 4\\overrightarrow{MN}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $M, N$ là trung điểm $AB, CD$ và $I$ là trung điểm $MN$ nên $(\\overrightarrow{OA} + \\overrightarrow{OB}) + (\\overrightarrow{OC} + \\overrightarrow{OD}) = 2\\overrightarrow{OM} + 2\\overrightarrow{ON} = 2(2\\overrightarrow{OI}) = 4\\overrightarrow{OI}$ (Bài 4.14 SBT trang 108).',
            pedagogicalTip: 'Điểm $I$ được gọi là trọng tâm của hệ 4 điểm $A, B, C, D$: $\\overrightarrow{IA} + \\overrightarrow{IB} + \\overrightarrow{IC} + \\overrightarrow{ID} = \\overrightarrow{0}$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 9: Điều kiện hai vectơ cùng phương',
            prompt:
              'Cho hai vectơ không cùng phương $\\overrightarrow{e_1}, \\overrightarrow{e_2}$. Hai vectơ $\\overrightarrow{u} = 2\\overrightarrow{e_1} - 3\\overrightarrow{e_2}$ và $\\overrightarrow{v} = -4\\overrightarrow{e_1} + m\\overrightarrow{e_2}$ cùng phương khi và chỉ khi:',
            options: [
              { key: 'A', content: '$m = 6$' },
              { key: 'B', content: '$m = -6$' },
              { key: 'C', content: '$m = \\frac{8}{3}$' },
              { key: 'D', content: '$m = 3$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Hai vectơ $\\overrightarrow{u}, \\overrightarrow{v}$ cùng phương $\\Leftrightarrow \\frac{-4}{2} = \\frac{m}{-3} \\Leftrightarrow m = 6$ (khi đó $\\overrightarrow{v} = -2\\overrightarrow{u}$).',
            pedagogicalTip: 'Hai vectơ biểu diễn qua cặp cơ sở không cùng phương $(\\overrightarrow{e_1}, \\overrightarrow{e_2})$ cùng phương khi các hệ số tỉ lệ với nhau.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b9_d1_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 9: Phân tích vectơ trong hình bình hành (Ví dụ 1 & Bài 4.16 SBT trang 52–54)',
            prompt:
              'Cho hình bình hành $ABCD$ tâm $O$. Gọi $M$ là trung điểm của cạnh $BC$ và $G$ là trọng tâm của tam giác $ABC$. Đặt $\\overrightarrow{AB} = \\overrightarrow{a}, \\overrightarrow{AD} = \\overrightarrow{b}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: '$\\overrightarrow{AC} = \\overrightarrow{a} + \\overrightarrow{b}$ và $\\overrightarrow{BD} = \\overrightarrow{b} - \\overrightarrow{a}$.',
                isCorrect: true,
                explanation: 'Theo quy tắc hình bình hành và quy tắc hiệu: $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{a} + \\overrightarrow{b}$ và $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB} = \\overrightarrow{b} - \\overrightarrow{a}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: '$\\overrightarrow{AM} = \\overrightarrow{a} + \\frac{1}{2}\\overrightarrow{b}$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AD} = \\overrightarrow{a} + \\frac{1}{2}\\overrightarrow{b}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: '$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{a} + \\frac{1}{3}\\overrightarrow{b}$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM} = \\frac{2}{3}\\left(\\overrightarrow{a} + \\frac{1}{2}\\overrightarrow{b}\\right) = \\frac{2}{3}\\overrightarrow{a} + \\frac{1}{3}\\overrightarrow{b}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Ba điểm $B, G, D$ không thẳng hàng.',
                isCorrect: false,
                explanation: 'Trong hình bình hành $ABCD$, $O$ là trung điểm $AC$ nên $BO$ là trung tuyến của $\\triangle ABC \\Rightarrow G \\in BO \\subset BD$, vậy $B, G, D$ thẳng hàng ($\\overrightarrow{BD} = 3\\overrightarrow{BG}$).',
              },
            ],
            pedagogicalTip: 'Mọi vectơ trong hình bình hành $ABCD$ đều biểu diễn được duy nhất theo hai vectơ cạnh $\\overrightarrow{AB}$ và $\\overrightarrow{AD}$.',
          },
          {
            id: 'b9_d1_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 9: Chứng minh ba điểm thẳng hàng bằng vectơ (Bài 4.17 SBT trang 54)',
            prompt:
              'Cho tam giác $ABC$. Gọi $I$ là trung điểm của cạnh $BC$, $D$ là điểm trên cạnh $AC$ sao cho $AD = \\frac{1}{3}AC$ và $J$ là điểm thỏa mãn $\\overrightarrow{JA} + 2\\overrightarrow{JB} = \\overrightarrow{0}$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Đẳng thức $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$ là đúng.',
                isCorrect: true,
                explanation: 'Vì $I$ là trung điểm $BC$ nên $\\overrightarrow{AI} = \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC})$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Đẳng thức $\\overrightarrow{AJ} = \\frac{2}{3}\\overrightarrow{AB}$ là đúng.',
                isCorrect: true,
                explanation: 'Từ $\\overrightarrow{JA} + 2\\overrightarrow{JB} = \\overrightarrow{0} \\Leftrightarrow -\\overrightarrow{AJ} + 2(\\overrightarrow{AB} - \\overrightarrow{AJ}) = \\overrightarrow{0} \\Leftrightarrow \\overrightarrow{AJ} = \\frac{2}{3}\\overrightarrow{AB}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Biểu diễn $\\overrightarrow{JD}$ theo $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ ta được $\\overrightarrow{JD} = -\\frac{2}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{JD} = \\overrightarrow{AD} - \\overrightarrow{AJ} = \\frac{1}{3}\\overrightarrow{AC} - \\frac{2}{3}\\overrightarrow{AB} = -\\frac{2}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Hai vectơ $\\overrightarrow{JI}$ và $\\overrightarrow{JD}$ cùng phương, nghĩa là $J, I, D$ thẳng hàng.',
                isCorrect: false,
                explanation: 'Ta có $\\overrightarrow{JI} = \\overrightarrow{AI} - \\overrightarrow{AJ} = -\\frac{1}{6}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$. Vì $\\frac{-1/6}{-2/3} = \\frac{1}{4} \\ne \\frac{1/2}{1/3} = \\frac{3}{2}$ nên $\\overrightarrow{JI}$ và $\\overrightarrow{JD}$ không cùng phương.',
              },
            ],
            pedagogicalTip: 'Muốn kiểm tra 3 điểm $J, I, D$ có thẳng hàng hay không, hãy biểu diễn $\\overrightarrow{JI}$ và $\\overrightarrow{JD}$ theo $\\overrightarrow{AB}, \\overrightarrow{AC}$ rồi xét tỉ lệ hệ số.',
          },
        ],
        part3: [
          {
            id: 'b9_d1_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 9: Tính tổng hệ số phân tích vectơ',
            prompt:
              'Cho tam giác $ABC$ có điểm $M$ thuộc cạnh $BC$ sao cho $BM = 3MC$. Biết $\\overrightarrow{AM} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$. Tính giá trị của biểu thức $4x + 8y$.',
            acceptableAnswers: ['7'],
            explanation:
              'Từ $\\overrightarrow{MB} + 3\\overrightarrow{MC} = \\overrightarrow{0} \\Rightarrow \\overrightarrow{AM} = \\frac{1}{4}\\overrightarrow{AB} + \\frac{3}{4}\\overrightarrow{AC}$. Vậy $x = \\frac{1}{4}, y = \\frac{3}{4} \\Rightarrow 4x + 8y = 1 + 6 = 7$.',
            pedagogicalTip: 'Chú ý tổng hệ số $x + y = 1$ vì $M$ thuộc đường thẳng $BC$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 9: Độ dài tích của vectơ với một số',
            prompt:
              'Cho tam giác đều $ABC$ có cạnh bằng $6$ và trọng tâm $G$. Tính độ dài của vectơ $\\overrightarrow{v} = \\overrightarrow{AB} + \\overrightarrow{AC} - 3\\overrightarrow{AG}$.',
            acceptableAnswers: ['0'],
            explanation:
              'Gọi $M$ là trung điểm $BC$ thì $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM} = 3\\overrightarrow{AG}$. Do đó $\\overrightarrow{v} = 3\\overrightarrow{AG} - 3\\overrightarrow{AG} = \\overrightarrow{0} \\Rightarrow |\\overrightarrow{v}| = 0$.',
            pedagogicalTip: 'Trong mọi tam giác có trọng tâm $G$: $\\overrightarrow{AB} + \\overrightarrow{AC} = 3\\overrightarrow{AG}$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 9: Đường thẳng Euler OH = 3OG',
            prompt:
              'Cho tam giác $ABC$ có tâm đường tròn ngoại tiếp $O$, trọng tâm $G$ và trực tâm $H$. Biết khoảng cách $OG = 4$, tính khoảng cách $GH$.',
            acceptableAnswers: ['8'],
            explanation:
              'Theo hệ thức Euler $\\overrightarrow{OH} = 3\\overrightarrow{OG}$, điểm $G$ nằm giữa $O$ và $H$ với $OH = 3OG = 12$. Suy ra $GH = OH - OG = 12 - 4 = 8$.',
            pedagogicalTip: 'Trên đường thẳng Euler: $GH = 2OG$ và $OH = 3OG$.',
            points: 0.5,
          },
          {
            id: 'b9_d1_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 9: Lực đẩy Ác-si-mét tác dụng lên khúc gỗ (Bài 4.20 SBT trang 54)',
            prompt:
              'Một khúc gỗ hình trụ nổi trên mặt nước khi cân bằng có một nửa thể tích chìm trong nước. Dưới tác dụng của trọng lực $\\overrightarrow{P}$ và lực đẩy Ác-si-mét $\\overrightarrow{F_A}$, ta có $\\overrightarrow{P} + \\overrightarrow{F_A} = \\overrightarrow{0}$ (Bài 4.20 SBT trang 54). Tính tỉ số $\\frac{d}{d\'}$ giữa trọng lượng riêng $d$ của nước và trọng lượng riêng $d\'$ của gỗ.',
            acceptableAnswers: ['2'],
            explanation:
              'Theo lời giải Bài 4.20 SBT trang 110: Khi cân bằng $|\\overrightarrow{P}| = |\\overrightarrow{F_A}| \\Leftrightarrow d\' \\cdot V = d \\cdot \\frac{V}{2} \\Leftrightarrow \\frac{d}{d\'} = 2$.',
            pedagogicalTip: 'Lực đẩy Ác-si-mét có độ lớn bằng trọng lượng phần nước bị vật chiếm chỗ ($d \\cdot \\frac{V}{2}$).',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b9_d1_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 9: Chứng minh hệ thức Euler OH = 3OG (Ví dụ 3 SBT trang 52)',
            problemStatement:
              'Cho tam giác $ABC$ có tâm đường tròn ngoại tiếp $O$, trọng tâm $G$ và trực tâm $H$. Chứng minh rằng $\\overrightarrow{OH} = 3\\overrightarrow{OG}$ (suy ra ba điểm $O, G, H$ thẳng hàng).',
            conclusionTarget:
              'Hãy sắp xếp các bước chứng minh sau theo thứ tự hợp lý.',
            steps: [
              {
                id: 'b9_d1_s1',
                originalIndex: 1,
                content:
                  'Vẽ đường kính $AA\'$ của đường tròn $(O)$ và gọi $M$ là trung điểm của cạnh $BC$. Khi đó tứ giác $BHCA\'$ là hình bình hành nên $M$ cũng là trung điểm của $HA\'$.',
                roleDescription: 'Dựng đường kính AA\' và trung điểm M của BC',
              },
              {
                id: 'b9_d1_s2',
                originalIndex: 2,
                content:
                  'Trong tam giác $AHA\'$, đoạn $OM$ là đường trung bình nên $\\overrightarrow{AH} = 2\\overrightarrow{OM} = \\overrightarrow{OB} + \\overrightarrow{OC}$ (vì $M$ là trung điểm $BC$).',
                roleDescription: 'Chứng minh vectơ AH = 2OM = OB + OC',
              },
              {
                id: 'b9_d1_s3',
                originalIndex: 3,
                content:
                  'Suy ra $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{AH} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$.',
                roleDescription: 'Biểu diễn vectơ OH = OA + OB + OC',
              },
              {
                id: 'b9_d1_s4',
                originalIndex: 4,
                content:
                  'Mặt khác vì $G$ là trọng tâm tam giác $ABC$ nên $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$. Vậy $\\overrightarrow{OH} = 3\\overrightarrow{OG}$ (điều phải chứng minh).',
                roleDescription: 'Kết hợp tính chất trọng tâm G và kết luận',
              },
            ],
            pedagogicalTip:
              'Đẳng thức $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} = 3\\overrightarrow{OG}$ là một trong những định lí đẹp nhất của hình học phẳng.',
            teacherAnalysis:
              'Trình tự 4 bước chuẩn theo Ví dụ 3 trang 52–53 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
      {
        id: 'de-on-bai-9-2',
        lessonId: 'bai-9',
        title: 'Đề ôn Bài 9 - Đề số 02',
        subtitle: 'Chứng minh ba điểm thẳng hàng & tìm tập hợp điểm (SBT KNTT trang 53–55)',
        grade: 10,
        durationMinutes: 45,
        totalPoints: 10,
        description:
          'Bám sát các bài tập 4.15, 4.17, 4.18, 4.19 (tập hợp điểm) và 4.20 trong Sách bài tập Toán 10 Tập 1 – Kết nối tri thức với cuộc sống.',
        part1: [
          {
            id: 'b9_d2_p1_q1',
            part: 'part1',
            number: 1,
            topic: 'Bài 9: Tính chất phân phối của phép nhân vectơ với một số',
            prompt:
              'Cho hai vectơ $\\overrightarrow{a}, \\overrightarrow{b}$ và hai số thực $k, t$. Đẳng thức nào sau đây là **sai**?',
            options: [
              { key: 'A', content: '$|k\\overrightarrow{a}| = k|\\overrightarrow{a}|$ với mọi $k \\in \\mathbb{R}$.' },
              { key: 'B', content: '$k(t\\overrightarrow{a}) = (kt)\\overrightarrow{a}$.' },
              { key: 'C', content: '$(k + t)\\overrightarrow{a} = k\\overrightarrow{a} + t\\overrightarrow{a}$.' },
              { key: 'D', content: '$k(\\overrightarrow{a} + \\overrightarrow{b}) = k\\overrightarrow{a} + k\\overrightarrow{b}$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Độ dài của vectơ $k\\overrightarrow{a}$ là $|k||\\overrightarrow{a}|$ (khi $k < 0$ thì $k|\\overrightarrow{a}| < 0$ nên A sai).',
            pedagogicalTip: 'Luôn lấy $|k|$ khi tính độ dài $|k\\overrightarrow{a}|$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q2',
            part: 'part1',
            number: 2,
            topic: 'Bài 9: Hệ thức trung điểm hai cạnh đối tứ giác (Bài 4.14 SBT trang 53)',
            prompt:
              'Cho tứ giác $ABCD$ có $M, N$ lần lượt là trung điểm của hai cạnh đối $AB$ và $CD$. Đẳng thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{AD} + \\overrightarrow{BC} = 2\\overrightarrow{MN}$' },
              { key: 'B', content: '$\\overrightarrow{AD} + \\overrightarrow{BC} = \\overrightarrow{MN}$' },
              { key: 'C', content: '$\\overrightarrow{AB} + \\overrightarrow{CD} = 2\\overrightarrow{MN}$' },
              { key: 'D', content: '$\\overrightarrow{AC} + \\overrightarrow{BD} = 4\\overrightarrow{MN}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ và $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$. Cộng vế theo vế và dùng $\\overrightarrow{MA} + \\overrightarrow{MB} = \\overrightarrow{0}, \\overrightarrow{DN} + \\overrightarrow{CN} = \\overrightarrow{0}$ được $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$ (Bài 4.14 SBT trang 53).',
            pedagogicalTip: 'Đẳng thức $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC} = \\overrightarrow{AC} + \\overrightarrow{BD}$ rất hay dùng cho hình thang và tứ giác bất kì.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q3',
            part: 'part1',
            number: 3,
            topic: 'Bài 9: Điều kiện ba điểm thẳng hàng',
            prompt:
              'Cho ba điểm phân biệt $A, B, C$ thỏa mãn $\\overrightarrow{AB} = -3\\overrightarrow{AC}$. Khẳng định nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: 'Điểm $A$ nằm giữa hai điểm $B$ và $C$, đồng thời $AB = 3AC$.' },
              { key: 'B', content: 'Điểm $C$ nằm giữa hai điểm $A$ và $B$, đồng thời $AB = 3AC$.' },
              { key: 'C', content: 'Điểm $B$ nằm giữa hai điểm $A$ và $C$.' },
              { key: 'D', content: 'Hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $k = -3 < 0$ nên $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ ngược hướng, suy ra điểm gốc chung $A$ nằm giữa $B$ và $C$, và $AB = |-3|AC = 3AC$.',
            pedagogicalTip: 'Hai vectơ chung điểm đầu $A$ mà ngược hướng thì $A$ luôn nằm giữa hai điểm cuối.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q4',
            part: 'part1',
            number: 4,
            topic: 'Bài 9: Tìm tập hợp điểm nhờ tâm tỉ cự / trung điểm (Bài 4.19 SBT trang 54)',
            prompt:
              'Cho đoạn thẳng $AB$ có trung điểm $I$ và độ dài $AB = 6$. Tập hợp các điểm $M$ trong mặt phẳng thỏa mãn $|\\overrightarrow{MA} + \\overrightarrow{MB}| = 8$ là:',
            options: [
              { key: 'A', content: 'Đường tròn tâm $I$, bán kính $R = 4$.' },
              { key: 'B', content: 'Đường tròn tâm $I$, bán kính $R = 8$.' },
              { key: 'C', content: 'Đường trung trực của đoạn thẳng $AB$.' },
              { key: 'D', content: 'Đường tròn đường kính $AB$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Vì $I$ là trung điểm $AB$ nên $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$. Khi đó $|\\overrightarrow{MA} + \\overrightarrow{MB}| = 8 \\Leftrightarrow |2\\overrightarrow{MI}| = 8 \\Leftrightarrow MI = 4$, nên tập hợp điểm $M$ là đường tròn tâm $I$, bán kính $R = 4$ (Bài 4.19 SBT trang 54).',
            pedagogicalTip: 'Thay $\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\overrightarrow{MI}$ để đưa về khoảng cách từ $M$ đến điểm cố định $I$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q5',
            part: 'part1',
            number: 5,
            topic: 'Bài 9: Tập hợp điểm liên quan đến trọng tâm (Bài 4.19 SBT trang 54)',
            prompt:
              'Cho tam giác đều $ABC$ cạnh $a$ có trọng tâm $G$ và trung điểm $M$ của cạnh $BC$. Tập hợp các điểm $X$ thỏa mãn $|\\overrightarrow{XA} + \\overrightarrow{XB} + \\overrightarrow{XC}| = \\frac{3}{2}|\\overrightarrow{XB} + \\overrightarrow{XC}|$ là:',
            options: [
              { key: 'A', content: 'Đường trung trực của đoạn thẳng $GM$.' },
              { key: 'B', content: 'Đường tròn tâm $G$, bán kính $GM$.' },
              { key: 'C', content: 'Đường thẳng $AM$.' },
              { key: 'D', content: 'Đường tròn tâm $M$, bán kính $GA$.' },
            ],
            correctAnswer: 'A',
            explanation:
              'Ta có $\\overrightarrow{XA} + \\overrightarrow{XB} + \\overrightarrow{XC} = 3\\overrightarrow{XG}$ và $\\overrightarrow{XB} + \\overrightarrow{XC} = 2\\overrightarrow{XM}$. Đẳng thức trở thành $|3\\overrightarrow{XG}| = \\frac{3}{2}|2\\overrightarrow{XM}| \\Leftrightarrow XG = XM$, tức là đường trung trực của đoạn thẳng $GM$ (Bài 4.19 SBT trang 110).',
            pedagogicalTip: 'Biến đổi vế trái về $3\\overrightarrow{XG}$ và vế phải về $3\\overrightarrow{XM}$ để thu được $XG = XM$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q6',
            part: 'part1',
            number: 6,
            topic: 'Bài 9: Biểu diễn vectơ trọng tâm theo hai cạnh',
            prompt:
              'Cho tam giác $ABC$ có trọng tâm $G$. Biểu diễn vectơ $\\overrightarrow{AG}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ ta được:',
            options: [
              { key: 'A', content: '$\\overrightarrow{AG} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$' },
              { key: 'B', content: '$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$' },
              { key: 'C', content: '$\\overrightarrow{AG} = \\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{2}\\overrightarrow{AC}$' },
              { key: 'D', content: '$\\overrightarrow{AG} = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Gọi $M$ là trung điểm $BC$, ta có $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM} = \\frac{2}{3}\\cdot \\frac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC}) = \\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
            pedagogicalTip: 'Công thức $\\overrightarrow{AG} = \\frac{1}{3}(\\overrightarrow{AB} + \\overrightarrow{AC})$ xuất hiện rất thường xuyên trong các bài toán phân tích vectơ.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q7',
            part: 'part1',
            number: 7,
            topic: 'Bài 9: Trọng tâm của hai tam giác (Bài 4.15 SBT trang 53)',
            prompt:
              'Cho hai tam giác $ABC$ và $A\'B\'C\'$ lần lượt có trọng tâm là $G$ và $G\'$ (Bài 4.15 SBT trang 53). Đẳng thức nào sau đây là **đúng**?',
            options: [
              { key: 'A', content: '$\\overrightarrow{AA\'} + \\overrightarrow{BB\'} + \\overrightarrow{CC\'} = 3\\overrightarrow{GG\'}$' },
              { key: 'B', content: '$\\overrightarrow{AA\'} + \\overrightarrow{BB\'} + \\overrightarrow{CC\'} = \\overrightarrow{GG\'}$' },
              { key: 'C', content: '$\\overrightarrow{AA\'} + \\overrightarrow{BB\'} + \\overrightarrow{CC\'} = \\overrightarrow{0}$' },
              { key: 'D', content: '$\\overrightarrow{AA\'} + \\overrightarrow{BB\'} + \\overrightarrow{CC\'} = 2\\overrightarrow{GG\'}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Theo lời giải Bài 4.15 SBT trang 108: Chèn $G$ và $G\'$ vào mỗi vectơ, dùng $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{0}$ và $\\overrightarrow{G\'A\'} + \\overrightarrow{G\'B\'} + \\overrightarrow{G\'C\'} = \\overrightarrow{0}$ ta được $\\overrightarrow{AA\'} + \\overrightarrow{BB\'} + \\overrightarrow{CC\'} = 3\\overrightarrow{GG\'}$.',
            pedagogicalTip: 'Hệ quả: Hai tam giác $ABC$ và $A\'B\'C\'$ có cùng trọng tâm khi và chỉ khi $\\overrightarrow{AA\'} + \\overrightarrow{BB\'} + \\overrightarrow{CC\'} = \\overrightarrow{0}$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p1_q8',
            part: 'part1',
            number: 8,
            topic: 'Bài 9: Tính độ dài tổ hợp tuyến tính hai vectơ vuông góc',
            prompt:
              'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3, AC = 2$. Độ dài của vectơ $\\overrightarrow{u} = 2\\overrightarrow{AB} - 3\\overrightarrow{AC}$ bằng:',
            options: [
              { key: 'A', content: '$6\\sqrt{2}$' },
              { key: 'B', content: '$12$' },
              { key: 'C', content: '$0$' },
              { key: 'D', content: '$\\sqrt{13}$' },
            ],
            correctAnswer: 'A',
            explanation:
              'Đặt $\\overrightarrow{AD} = 2\\overrightarrow{AB} \\Rightarrow AD = 6$ và $\\overrightarrow{AE} = 3\\overrightarrow{AC} \\Rightarrow AE = 6$. Vì $AD \\perp AE$ nên $|\\overrightarrow{u}| = |\\overrightarrow{AD} - \\overrightarrow{AE}| = |\\overrightarrow{ED}| = \\sqrt{6^2 + 6^2} = 6\\sqrt{2}$.',
            pedagogicalTip: 'Khi $\\overrightarrow{a} \\perp \\overrightarrow{b}$, độ dài $|x\\overrightarrow{a} + y\\overrightarrow{b}| = \\sqrt{(x|\\overrightarrow{a}|)^2 + (y|\\overrightarrow{b}|)^2}$.',
            points: 0.5,
          },
        ],
        part2: [
          {
            id: 'b9_d2_p2_q1',
            part: 'part2',
            number: 1,
            topic: 'Bài 9: Chứng minh ba điểm thẳng hàng trong tam giác (Bài 4.18 SBT trang 54)',
            prompt:
              'Cho tam giác $ABC$. Gọi $M$ là trung điểm của cạnh $BC$, $I$ là trung điểm của đoạn $AM$, và $K$ là điểm trên cạnh $AC$ sao cho $AK = \\frac{1}{3}AC$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Biểu diễn $\\overrightarrow{BI}$ theo $\\overrightarrow{AB}, \\overrightarrow{AC}$ ta được $\\overrightarrow{BI} = -\\frac{3}{4}\\overrightarrow{AB} + \\frac{1}{4}\\overrightarrow{AC}$.',
                isCorrect: true,
                explanation:
                  '$\\overrightarrow{BI} = \\frac{1}{2}(\\overrightarrow{BA} + \\overrightarrow{BM}) = \\frac{1}{2}\\left(-\\overrightarrow{AB} + \\frac{1}{2}(\\overrightarrow{BC})\\right) = -\\frac{1}{2}\\overrightarrow{AB} + \\frac{1}{4}(\\overrightarrow{AC} - \\overrightarrow{AB}) = -\\frac{3}{4}\\overrightarrow{AB} + \\frac{1}{4}\\overrightarrow{AC}$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Biểu diễn $\\overrightarrow{BK}$ theo $\\overrightarrow{AB}, \\overrightarrow{AC}$ ta được $\\overrightarrow{BK} = -\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
                isCorrect: true,
                explanation: '$\\overrightarrow{BK} = \\overrightarrow{AK} - \\overrightarrow{AB} = -\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Đẳng thức $\\overrightarrow{BK} = \\frac{4}{3}\\overrightarrow{BI}$ là đúng.',
                isCorrect: true,
                explanation: 'Ta có $\\frac{4}{3}\\overrightarrow{BI} = \\frac{4}{3}\\left(-\\frac{3}{4}\\overrightarrow{AB} + \\frac{1}{4}\\overrightarrow{AC}\\right) = -\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC} = \\overrightarrow{BK}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Ba điểm $B, I, K$ thẳng hàng và $I$ là trung điểm của $BK$.',
                isCorrect: false,
                explanation: 'Vì $\\overrightarrow{BK} = \\frac{4}{3}\\overrightarrow{BI}$ nên $B, I, K$ thẳng hàng nhưng $BI = \\frac{3}{4}BK$ (không phải trung điểm của $BK$).',
              },
            ],
            pedagogicalTip: 'Biểu diễn cả hai vectơ $\\overrightarrow{BI}$ và $\\overrightarrow{BK}$ qua hai vectơ gốc $\\overrightarrow{AB}, \\overrightarrow{AC}$ là phương pháp tổng quát nhất.',
          },
          {
            id: 'b9_d2_p2_q2',
            part: 'part2',
            number: 2,
            topic: 'Bài 9: Tìm điểm cố định và quỹ tích điểm (Bài 4.19 SBT trang 54)',
            prompt:
              'Cho tam giác đều $ABC$ cạnh bằng $6$. Gọi $I$ là điểm thỏa mãn $2\\overrightarrow{IA} + \\overrightarrow{IB} + \\overrightarrow{IC} = \\overrightarrow{0}$ và $M$ là trung điểm của cạnh $BC$. Xét tính đúng sai của các khẳng định sau:',
            statements: [
              {
                id: 'a',
                label: 'a',
                statement: 'Điểm $I$ là trung điểm của đoạn thẳng $AM$.',
                isCorrect: true,
                explanation: 'Vì $M$ là trung điểm $BC$ nên $\\overrightarrow{IB} + \\overrightarrow{IC} = 2\\overrightarrow{IM}$. Suy ra $2\\overrightarrow{IA} + 2\\overrightarrow{IM} = \\overrightarrow{0} \\Leftrightarrow \\overrightarrow{IA} + \\overrightarrow{IM} = \\overrightarrow{0}$, nên $I$ là trung điểm $AM$.',
              },
              {
                id: 'b',
                label: 'b',
                statement: 'Với mọi điểm $X$ trong mặt phẳng, ta có $2\\overrightarrow{XA} + \\overrightarrow{XB} + \\overrightarrow{XC} = 4\\overrightarrow{XI}$.',
                isCorrect: true,
                explanation: 'Chèn điểm $I$: $2(\\overrightarrow{XI} + \\overrightarrow{IA}) + (\\overrightarrow{XI} + \\overrightarrow{IB}) + (\\overrightarrow{XI} + \\overrightarrow{IC}) = 4\\overrightarrow{XI} + (2\\overrightarrow{IA} + \\overrightarrow{IB} + \\overrightarrow{IC}) = 4\\overrightarrow{XI}$.',
              },
              {
                id: 'c',
                label: 'c',
                statement: 'Độ dài đoạn thẳng $AI$ bằng $3\\sqrt{3}$.',
                isCorrect: false,
                explanation: 'Đường cao $AM = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$, mà $I$ là trung điểm $AM$ nên $AI = \\frac{3\\sqrt{3}}{2}$.',
              },
              {
                id: 'd',
                label: 'd',
                statement: 'Tập hợp các điểm $X$ thỏa mãn $|2\\overrightarrow{XA} + \\overrightarrow{XB} + \\overrightarrow{XC}| = 12$ là đường tròn tâm $I$ bán kính $R = 3$.',
                isCorrect: true,
                explanation: 'Ta có $|4\\overrightarrow{XI}| = 12 \\Leftrightarrow XI = 3$, nên tập hợp điểm $X$ là đường tròn tâm $I$ bán kính $R = 3$.',
              },
            ],
            pedagogicalTip: 'Kỹ thuật chọn điểm $I$ sao cho $\\alpha\\overrightarrow{IA} + \\beta\\overrightarrow{IB} + \\gamma\\overrightarrow{IC} = \\overrightarrow{0}$ giúp rút gọn $\\alpha\\overrightarrow{XA} + \\beta\\overrightarrow{XB} + \\gamma\\overrightarrow{XC} = (\\alpha + \\beta + \\gamma)\\overrightarrow{XI}$.',
          },
        ],
        part3: [
          {
            id: 'b9_d2_p3_q1',
            part: 'part3',
            number: 1,
            topic: 'Bài 9: Bán kính đường tròn tập hợp điểm',
            prompt:
              'Cho tam giác $ABC$ có trọng tâm $G$. Tập hợp các điểm $M$ thỏa mãn $|\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC}| = 15$ là đường tròn tâm $G$ có bán kính $R$ bằng bao nhiêu?',
            acceptableAnswers: ['5'],
            explanation:
              'Vì $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$ nên $|3\\overrightarrow{MG}| = 15 \\Leftrightarrow MG = 5$. Vậy $R = 5$.',
            pedagogicalTip: 'Chia $15$ cho tổng hệ số $3$ để tìm bán kính $R = MG$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p3_q2',
            part: 'part3',
            number: 2,
            topic: 'Bài 9: Tính hệ số phân tích vectơ theo hai trung tuyến (Ví dụ 2 SBT trang 52)',
            prompt:
              'Cho tam giác $ABC$ có hai đường trung tuyến $AD$ và $BE$. Biết $\\overrightarrow{AB} = m\\overrightarrow{AD} + n\\overrightarrow{BE}$. Tính giá trị của biểu thức $3m - 6n$.',
            acceptableAnswers: ['6'],
            explanation:
              'Theo Ví dụ 2 SBT trang 52: $\\overrightarrow{AB} = \\frac{2}{3}\\overrightarrow{AD} - \\frac{2}{3}\\overrightarrow{BE}$, nên $m = \\frac{2}{3}, n = -\\frac{2}{3}$. Khi đó $3m - 6n = 2 - (-4) = 6$.',
            pedagogicalTip: 'Chú ý dấu âm của $n = -\\frac{2}{3}$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p3_q3',
            part: 'part3',
            number: 3,
            topic: 'Bài 9: Tìm tham số để hai vectơ cùng phương',
            prompt:
              'Cho hai vectơ không cùng phương $\\overrightarrow{a}, \\overrightarrow{b}$. Tìm giá trị của $k$ để hai vectơ $\\overrightarrow{u} = 3\\overrightarrow{a} + 2\\overrightarrow{b}$ và $\\overrightarrow{v} = 9\\overrightarrow{a} + k\\overrightarrow{b}$ cùng phương.',
            acceptableAnswers: ['6'],
            explanation:
              'Hai vectơ $\\overrightarrow{u}, \\overrightarrow{v}$ cùng phương $\\Leftrightarrow \\frac{9}{3} = \\frac{k}{2} \\Leftrightarrow k = 6$.',
            pedagogicalTip: 'Lập tỉ lệ hệ số tương ứng của $\\overrightarrow{a}$ và $\\overrightarrow{b}$.',
            points: 0.5,
          },
          {
            id: 'b9_d2_p3_q4',
            part: 'part3',
            number: 4,
            topic: 'Bài 9: Độ dài đoạn nối trung điểm hai đường chéo hình thang',
            prompt:
              'Cho hình thang $ABCD$ có hai đáy $AB = 4$ và $CD = 10$ ($AB \\parallel CD$). Gọi $E, F$ lần lượt là trung điểm của hai đường chéo $BD$ và $AC$. Tính độ dài đoạn thẳng $EF$.',
            acceptableAnswers: ['3'],
            explanation:
              'Ta có $2\\overrightarrow{EF} = \\overrightarrow{DC} + \\overrightarrow{BA}$. Vì $\\overrightarrow{DC}$ và $\\overrightarrow{BA}$ ngược hướng nên $|2\\overrightarrow{EF}| = CD - AB = 10 - 4 = 6 \\Rightarrow EF = 3$.',
            pedagogicalTip: 'Đoạn nối trung điểm hai đường chéo hình thang song song với hai đáy và bằng nửa hiệu hai đáy: $EF = \\frac{|CD - AB|}{2}$.',
            points: 0.5,
          },
        ],
        part4: [
          {
            id: 'b9_d2_p4_q1',
            part: 'part4',
            number: 1,
            topic: 'Bài 9: Chứng minh ba điểm thẳng hàng bằng phân tích vectơ (Bài 4.18 SBT trang 54)',
            problemStatement:
              'Cho tam giác $ABC$ có trung tuyến $AM$. Gọi $I$ là trung điểm của $AM$ và $K$ là điểm trên cạnh $AC$ sao cho $AK = \\frac{1}{3}AC$. Chứng minh ba điểm $B, I, K$ thẳng hàng.',
            conclusionTarget:
              'Hãy sắp xếp các bước giải sau theo thứ tự hợp lý để hoàn thành phép chứng minh.',
            steps: [
              {
                id: 'b9_d2_s1',
                originalIndex: 1,
                content:
                  'Vì $I$ là trung điểm của $AM$ và $M$ là trung điểm của $BC$ nên $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AM} = \\frac{1}{4}(\\overrightarrow{AB} + \\overrightarrow{AC})$.',
                roleDescription: 'Biểu diễn vectơ AI theo AB và AC',
              },
              {
                id: 'b9_d2_s2',
                originalIndex: 2,
                content:
                  'Áp dụng quy tắc hiệu: $\\overrightarrow{BI} = \\overrightarrow{AI} - \\overrightarrow{AB} = \\frac{1}{4}(\\overrightarrow{AB} + \\overrightarrow{AC}) - \\overrightarrow{AB} = -\\frac{3}{4}\\overrightarrow{AB} + \\frac{1}{4}\\overrightarrow{AC}$.',
                roleDescription: 'Biểu diễn vectơ BI theo AB và AC',
              },
              {
                id: 'b9_d2_s3',
                originalIndex: 3,
                content:
                  'Vì $AK = \\frac{1}{3}AC$ trên cạnh $AC$ nên $\\overrightarrow{AK} = \\frac{1}{3}\\overrightarrow{AC}$, suy ra $\\overrightarrow{BK} = \\overrightarrow{AK} - \\overrightarrow{AB} = -\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
                roleDescription: 'Biểu diễn vectơ BK theo AB và AC',
              },
              {
                id: 'b9_d2_s4',
                originalIndex: 4,
                content:
                  'So sánh hai biểu thức ta thấy $\\overrightarrow{BK} = \\frac{4}{3}\\left(-\\frac{3}{4}\\overrightarrow{AB} + \\frac{1}{4}\\overrightarrow{AC}\\right) = \\frac{4}{3}\\overrightarrow{BI}$. Vậy $\\overrightarrow{BK}, \\overrightarrow{BI}$ cùng phương hay $B, I, K$ thẳng hàng.',
                roleDescription: 'Chỉ ra BK = 4/3 BI và kết luận ba điểm thẳng hàng',
              },
            ],
            pedagogicalTip:
              'Quy trình chuẩn chứng minh $B, I, K$ thẳng hàng: biểu diễn $\\overrightarrow{BI}$ và $\\overrightarrow{BK}$ theo $\\overrightarrow{AB}, \\overrightarrow{AC}$ rồi suy ra $\\overrightarrow{BK} = k\\overrightarrow{BI}$.',
            teacherAnalysis:
              'Lời giải bám sát tuyệt đối Bài 4.18 trang 109 Sách bài tập Toán 10 Kết nối tri thức.',
            points: 2.0,
          },
        ],
      },
    ],
  },
];
