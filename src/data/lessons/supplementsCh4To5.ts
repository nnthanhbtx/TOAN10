import { ExamSupplement } from './supplementsCh1To3';

export const SUPPLEMENTS_CH4_TO_5: Record<string, ExamSupplement> = {
  // ==================== BÀI 7: CÁC KHÁI NIỆM MỞ ĐẦU ====================
  'de-on-bai-7-1': {
    extraPart1: [
      {
        id: 'b7_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 7: Số vectơ khác vectơ-không tạo bởi các điểm (Bài 4.2 SBT trang 68)',
        prompt:
          'Cho $4$ điểm phân biệt $A, B, C, D$. Hỏi có tất cả bao nhiêu vectơ khác $\\vec{0}$ có điểm đầu và điểm cuối được lấy từ $4$ điểm đã cho?',
        options: [
          { key: 'A', content: '$12$' },
          { key: 'B', content: '$6$' },
          { key: 'C', content: '$8$' },
          { key: 'D', content: '$16$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Mỗi cặp điểm có thứ tự $(X, Y)$ với $X \\neq Y$ lấy từ $4$ điểm tạo thành một vectơ $\\overrightarrow{XY} \\neq \\vec{0}$. Số cách chọn điểm đầu là $4$, số cách chọn điểm cuối khác điểm đầu là $3$. Vậy có $4 \\cdot 3 = 12$ vectơ (Bài 4.2 SBT trang 68).',
        pedagogicalTip: 'Với $n$ điểm phân biệt, số vectơ khác $\\vec{0}$ tạo thành là $n(n-1)$.',
        points: 0.25,
      },
      {
        id: 'b7_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 7: Hai vectơ bằng nhau trong lục giác đều (Ví dụ 2 SBT trang 66)',
        prompt:
          'Cho lục giác đều $ABCDEF$ tâm $O$. Số các vectơ khác $\\vec{0}$ (có điểm đầu và điểm cuối là các đỉnh của lục giác hoặc tâm $O$) **bằng** vectơ $\\overrightarrow{OC}$ là:',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$2$' },
          { key: 'C', content: '$4$' },
          { key: 'D', content: '$6$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Trong lục giác đều $ABCDEF$ tâm $O$, các vectơ (khác $\\overrightarrow{OC}$) cùng hướng và cùng độ dài với $\\overrightarrow{OC}$ là $\\overrightarrow{FO},\\ \\overrightarrow{AB},\\ \\overrightarrow{ED}$. Vậy có $3$ vectơ bằng $\\overrightarrow{OC}$ (Ví dụ 2 SBT trang 66).',
        pedagogicalTip: 'Hai vectơ bằng nhau khi và chỉ khi chúng cùng hướng và cùng độ dài.',
        points: 0.25,
      },
      {
        id: 'b7_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 7: Độ dài vectơ trong tam giác vuông (Bài 4.4 SBT trang 68)',
        prompt:
          'Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm},\\ AC = 8\\text{ cm}$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Độ dài của vectơ $\\overrightarrow{AM}$ bằng:',
        options: [
          { key: 'A', content: '$5\\text{ cm}$' },
          { key: 'B', content: '$10\\text{ cm}$' },
          { key: 'C', content: '$7\\text{ cm}$' },
          { key: 'D', content: '$4\\sqrt{3}\\text{ cm}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo định lí Pythagore: $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền nên $|\\overrightarrow{AM}| = AM = \\dfrac{BC}{2} = 5\\text{ cm}$.',
        pedagogicalTip: 'Độ dài vectơ $|\\overrightarrow{AM}|$ chính là độ dài đoạn thẳng $AM$.',
        points: 0.25,
      },
      {
        id: 'b7_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 7: Điều kiện ba điểm thẳng hàng bằng vectơ (Bài 4.5 SBT trang 69)',
        prompt:
          'Cho ba điểm phân biệt $A, B, C$. Khẳng định nào sau đây là **đúng** khi biết $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng?',
        options: [
          { key: 'A', content: 'Hai điểm $B, C$ nằm cùng phía đối với điểm $A$ trên đường thẳng $AB$.' },
          { key: 'B', content: 'Điểm $A$ nằm giữa hai điểm $B$ và $C$.' },
          { key: 'C', content: 'Ba điểm $A, B, C$ tạo thành một tam giác.' },
          { key: 'D', content: 'Độ dài đoạn $AB$ luôn bằng độ dài đoạn $AC$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng hướng nên chúng cùng phương, suy ra $A, B, C$ thẳng hàng và hai tia $AB, AC$ trùng nhau, nghĩa là $B, C$ nằm cùng phía đối với $A$ (Bài 4.5 SBT trang 69).',
        pedagogicalTip: 'Nếu $A$ nằm giữa $B$ và $C$ thì $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ ngược hướng.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b7_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 7: Chứng minh hai vectơ bằng nhau nhờ hình bình hành (Bài 4.3 SBT trang 68)',
        prompt:
          'Cho hình bình hành $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB$ và $CD$. Hãy sắp xếp các bước sau theo thứ tự hợp lý để chứng minh $\\overrightarrow{AM} = \\overrightarrow{NC}$ và $\\overrightarrow{MD} = \\overrightarrow{BN}$.',
        steps: [
          {
            id: 'b7_d1_p4_q2_s1',
            content:
              'Vì $ABCD$ là hình bình hành nên $AB // CD$ và $AB = CD$, đồng thời hai vectơ $\\overrightarrow{AB},\\ \\overrightarrow{DC}$ cùng hướng.',
          },
          {
            id: 'b7_d1_p4_q2_s2',
            content:
              'Do $M, N$ là trung điểm của $AB, CD$ nên $AM = MB = \\dfrac{1}{2}AB = \\dfrac{1}{2}CD = DN = NC$.',
          },
          {
            id: 'b7_d1_p4_q2_s3',
            content:
              'Hai vectơ $\\overrightarrow{AM}$ và $\\overrightarrow{NC}$ cùng hướng (vì cùng hướng với $\\overrightarrow{AB}, \\overrightarrow{DC}$) và có $AM = NC$ nên $\\overrightarrow{AM} = \\overrightarrow{NC}$.',
          },
          {
            id: 'b7_d1_p4_q2_s4',
            content:
              'Tứ giác $MBND$ có $MB // DN$ và $MB = DN$ nên là hình bình hành, suy ra hai vectơ $\\overrightarrow{MD}$ và $\\overrightarrow{BN}$ cùng hướng và cùng độ dài hay $\\overrightarrow{MD} = \\overrightarrow{BN}$.',
          },
        ],
        correctOrder: ['b7_d1_p4_q2_s1', 'b7_d1_p4_q2_s2', 'b7_d1_p4_q2_s3', 'b7_d1_p4_q2_s4'],
        explanation:
          'Trình tự chuẩn: (1) Nêu tính chất hình bình hành $ABCD$ -> (2) So sánh độ dài các nửa cạnh -> (3) Kết luận $\\overrightarrow{AM} = \\overrightarrow{NC}$ -> (4) Chứng minh $MBND$ là hình bình hành để suy ra $\\overrightarrow{MD} = \\overrightarrow{BN}$.',
        points: 0.75,
      },
      {
        id: 'b7_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 7: Tính độ dài vectơ trong hình thoi (Bài 4.4 SBT trang 68)',
        prompt:
          'Cho hình thoi $ABCD$ có cạnh bằng $a$ và góc $\\widehat{BAD} = 60^\\circ$. Gọi $O$ là giao điểm hai đường chéo. Sắp xếp các bước tính độ dài của các vectơ $\\overrightarrow{BD}$ và $\\overrightarrow{AC}$.',
        steps: [
          {
            id: 'b7_d1_p4_q3_s1',
            content:
              'Xét tam giác $ABD$ có $AB = AD = a$ và $\\widehat{BAD} = 60^\\circ$ nên tam giác $ABD$ là tam giác đều cạnh $a$.',
          },
          {
            id: 'b7_d1_p4_q3_s2',
            content:
              'Suy ra $BD = a$, do đó độ dài vectơ $\\overrightarrow{BD}$ là $|\\overrightarrow{BD}| = BD = a$.',
          },
          {
            id: 'b7_d1_p4_q3_s3',
            content:
              'Vì $O$ là trung điểm $BD$ trong tam giác đều $ABD$ nên đường cao $AO = \\dfrac{a\\sqrt{3}}{2}$.',
          },
          {
            id: 'b7_d1_p4_q3_s4',
            content:
              'Do $O$ cũng là trung điểm của đường chéo $AC$ nên $|\\overrightarrow{AC}| = AC = 2AO = a\\sqrt{3}$.',
          },
        ],
        correctOrder: ['b7_d1_p4_q3_s1', 'b7_d1_p4_q3_s2', 'b7_d1_p4_q3_s3', 'b7_d1_p4_q3_s4'],
        explanation:
          'Các bước lần lượt: Chứng minh $\\triangle ABD$ đều cạnh $a$ -> Tính $|\\overrightarrow{BD}| = a$ -> Tính đường cao $AO = \\frac{a\\sqrt{3}}{2}$ -> Suy ra $|\\overrightarrow{AC}| = 2AO = a\\sqrt{3}$.',
        points: 0.75,
      },
      {
        id: 'b7_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 7: Biểu diễn vectơ vận tốc thực tế (Vận dụng SBT trang 69)',
        prompt:
          'Một chiếc thuyền di chuyển thẳng từ bến $A$ đến bến $B$ theo hướng từ Tây sang Đông với tốc độ $15\\text{ km/h}$, cùng lúc một ca nô đi từ $B$ về $A$ với tốc độ $30\\text{ km/h}$. Sắp xếp các bước so sánh vectơ vận tốc $\\vec{v}_1$ của thuyền và $\\vec{v}_2$ của ca nô.',
        steps: [
          {
            id: 'b7_d1_p4_q4_s1',
            content:
              'Xác định giá của hai vectơ vận tốc $\\vec{v}_1$ và $\\vec{v}_2$ đều song song hoặc trùng với đường thẳng $AB$ (phương Đông - Tây).',
          },
          {
            id: 'b7_d1_p4_q4_s2',
            content:
              'Suy ra hai vectơ $\\vec{v}_1$ và $\\vec{v}_2$ cùng phương với nhau.',
          },
          {
            id: 'b7_d1_p4_q4_s3',
            content:
              'Vì thuyền đi từ $A$ đến $B$ (Tây sang Đông) còn ca nô đi từ $B$ về $A$ (Đông sang Tây) nên $\\vec{v}_1$ và $\\vec{v}_2$ ngược hướng.',
          },
          {
            id: 'b7_d1_p4_q4_s4',
            content:
              'So sánh độ lớn: $|\\vec{v}_1| = 15\\text{ km/h}$ và $|\\vec{v}_2| = 30\\text{ km/h}$, suy ra $|\\vec{v}_2| = 2|\\vec{v}_1|$.',
          },
        ],
        correctOrder: ['b7_d1_p4_q4_s1', 'b7_d1_p4_q4_s2', 'b7_d1_p4_q4_s3', 'b7_d1_p4_q4_s4'],
        explanation:
          'Trình tự chuẩn: Xác định giá của hai vectơ -> Kết luận cùng phương -> Xét chiều chuyển động suy ra ngược hướng -> So sánh độ dài hai vectơ vận tốc.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-7-2': {
    extraPart1: [
      {
        id: 'b7_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 7: Nhận biết vectơ cùng phương từ hình vẽ lưới ô vuông (Bài 4.1 SBT trang 68)',
        prompt:
          'Cho hình chữ nhật $ABCD$ tâm $O$. Khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$|\\overrightarrow{AC}| = |\\overrightarrow{BD}|$' },
          { key: 'B', content: '$\\overrightarrow{AC} = \\overrightarrow{BD}$' },
          { key: 'C', content: '$\\overrightarrow{OA} = \\overrightarrow{OC}$' },
          { key: 'D', content: '$\\overrightarrow{AB} = \\overrightarrow{CD}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Trong hình chữ nhật $ABCD$, hai đường chéo bằng nhau ($AC = BD$) nhưng cắt nhau nên $\\overrightarrow{AC}$ và $\\overrightarrow{BD}$ không cùng phương (do đó không bằng nhau), chỉ có độ dài $|\\overrightarrow{AC}| = |\\overrightarrow{BD}|$ (Bài 4.1 SBT trang 68).',
        pedagogicalTip: 'Hai đường chéo hình chữ nhật bằng nhau về độ dài nhưng hai vectơ đường chéo không cùng phương nên không bằng nhau.',
        points: 0.25,
      },
      {
        id: 'b7_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 7: Đường trung bình của tam giác và vectơ bằng nhau (Bài 4.3 SBT trang 68)',
        prompt:
          'Cho tam giác $ABC$ có $M, N, P$ lần lượt là trung điểm của các cạnh $AB, BC, CA$. Vectơ nào sau đây **bằng** vectơ $\\overrightarrow{MN}$?',
        options: [
          { key: 'A', content: '$\\overrightarrow{AP}$' },
          { key: 'B', content: '$\\overrightarrow{PA}$' },
          { key: 'C', content: '$\\overrightarrow{CA}$' },
          { key: 'D', content: '$\\overrightarrow{PB}$' },
        ],
        correctAnswer: 'A',
        explanation:
          '$MN$ là đường trung bình của $\\triangle ABC$ nên $MN // AC$ và $MN = \\dfrac{1}{2}AC = AP = PC$. Hơn nữa $\\overrightarrow{MN}$ cùng hướng với $\\overrightarrow{AC}$ và $\\overrightarrow{AP}$, nên $\\overrightarrow{MN} = \\overrightarrow{AP} = \\overrightarrow{PC}$.',
        pedagogicalTip: 'Chú ý thứ tự điểm đầu - điểm cuối để xác định đúng chiều mũi tên của vectơ.',
        points: 0.25,
      },
      {
        id: 'b7_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 7: Vectơ-không và các tính chất cơ bản (Lý thuyết SBT trang 65)',
        prompt:
          'Phát biểu nào sau đây về vectơ-không ($\\vec{0}$) là **sai**?',
        options: [
          { key: 'A', content: 'Vectơ-không chỉ cùng phương với chính nó.' },
          { key: 'B', content: 'Vectơ-không cùng hướng với mọi vectơ.' },
          { key: 'C', content: 'Độ dài của vectơ-không bằng $0$.' },
          { key: 'D', content: 'Với mọi điểm $A$, ta luôn có $\\overrightarrow{AA} = \\vec{0}$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo quy ước trong SGK và SBT Toán 10 trang 65, vectơ-không có độ dài bằng $0$ và **cùng phương, cùng hướng với mọi vectơ**. Do đó phát biểu "chỉ cùng phương với chính nó" là sai.',
        pedagogicalTip: 'Quy ước: $\\vec{0}$ cùng phương và cùng hướng với mọi vectơ trong mặt phẳng.',
        points: 0.25,
      },
      {
        id: 'b7_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 7: Ứng dụng vectơ lực căng dây và trọng lực (Bài 4.6 SBT trang 69)',
        prompt:
          'Một vật nặng có trọng lượng $P = 20\\text{ N}$ được treo đứng yên vào một sợi dây mảnh không dãn. Gọi $\\vec{P}$ là trọng lực và $\\vec{T}$ là lực căng của sợi dây tác dụng lên vật. Khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$\\vec{P}$ và $\\vec{T}$ cùng phương, ngược hướng và $|\\vec{P}| = |\\vec{T}| = 20\\text{ N}$.' },
          { key: 'B', content: '$\\vec{P} = \\vec{T}$ và $|\\vec{T}| = 20\\text{ N}$.' },
          { key: 'C', content: '$\\vec{P}$ và $\\vec{T}$ cùng hướng và $|\\vec{T}| = 20\\text{ N}$.' },
          { key: 'D', content: '$\\vec{P}$ và $\\vec{T}$ có giá vuông góc với nhau.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Để vật đứng yên ở trạng thái cân bằng, lực căng dây $\\vec{T}$ và trọng lực $\\vec{P}$ phải là hai lực trực đối: cùng giá (cùng phương), ngược chiều (ngược hướng) và cùng độ lớn $|\\vec{T}| = |\\vec{P}| = 20\\text{ N}$ (Bài 4.6 SBT trang 69).',
        pedagogicalTip: 'Hai lực cân bằng là hai vectơ đối nhau (cùng độ dài nhưng ngược hướng).',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b7_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 7: Chứng minh ba điểm thẳng hàng nhờ hai vectơ bằng nhau (Bài 4.5 SBT trang 69)',
        prompt:
          'Cho tam giác $ABC$. Dựng các điểm $M, N$ sao cho tứ giác $ABMC$ và tứ giác $ACBN$ đều là hình bình hành. Sắp xếp các bước chứng minh $C$ là trung điểm của đoạn thẳng $MN$.',
        steps: [
          {
            id: 'b7_d2_p4_q2_s1',
            content:
              'Vì $ABMC$ là hình bình hành nên $\\overrightarrow{AB} = \\overrightarrow{CM}$.',
          },
          {
            id: 'b7_d2_p4_q2_s2',
            content:
              'Vì $ACBN$ là hình bình hành nên $\\overrightarrow{AB} = \\overrightarrow{NC}$.',
          },
          {
            id: 'b7_d2_p4_q2_s3',
            content:
              'Từ hai đẳng thức trên suy ra $\\overrightarrow{NC} = \\overrightarrow{CM}$.',
          },
          {
            id: 'b7_d2_p4_q2_s4',
            content:
              'Đẳng thức $\\overrightarrow{NC} = \\overrightarrow{CM}$ chứng tỏ ba điểm $N, C, M$ thẳng hàng theo thứ tự đó và $NC = CM$, tức $C$ là trung điểm của $MN$.',
          },
        ],
        correctOrder: ['b7_d2_p4_q2_s1', 'b7_d2_p4_q2_s2', 'b7_d2_p4_q2_s3', 'b7_d2_p4_q2_s4'],
        explanation:
          'Trình tự chuẩn: Từ hình bình hành $ABMC$ có $\\overrightarrow{AB}=\\overrightarrow{CM}$ -> Từ hình bình hành $ACBN$ có $\\overrightarrow{AB}=\\overrightarrow{NC}$ -> Bắc cầu $\\overrightarrow{NC}=\\overrightarrow{CM}$ -> Kết luận $C$ là trung điểm $MN$.',
        points: 0.75,
      },
      {
        id: 'b7_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 7: Xác định số các vectơ bằng nhau trong lưới đường trung bình tam giác (Bài 4.3 SBT trang 68)',
        prompt:
          'Cho tam giác đều $ABC$ cạnh bằng $6\\text{ cm}$. Gọi $M, N, P$ lần lượt là trung điểm của $BC, CA, AB$. Sắp xếp các bước tìm các vectơ bằng $\\overrightarrow{BM}$ và tính độ dài của chúng.',
        steps: [
          {
            id: 'b7_d2_p4_q3_s1',
            content:
              'Do $M$ là trung điểm của cạnh $BC = 6\\text{ cm}$ nên $BM = MC = 3\\text{ cm}$ và hai vectơ $\\overrightarrow{BM},\\ \\overrightarrow{MC}$ cùng hướng.',
          },
          {
            id: 'b7_d2_p4_q3_s2',
            content:
              'Do $P, N$ là trung điểm của $AB, AC$ nên $PN$ là đường trung bình của $\\triangle ABC$, suy ra $PN // BC$ và $PN = \\dfrac{1}{2}BC = 3\\text{ cm}$.',
          },
          {
            id: 'b7_d2_p4_q3_s3',
            content:
              'Vì vectơ $\\overrightarrow{PN}$ cùng hướng với $\\overrightarrow{BC}$ nên $\\overrightarrow{PN}$ cũng cùng hướng với $\\overrightarrow{BM}$.',
          },
          {
            id: 'b7_d2_p4_q3_s4',
            content:
              'Kết luận: Có hai vectơ bằng $\\overrightarrow{BM}$ là $\\overrightarrow{MC}$ và $\\overrightarrow{PN}$, đồng thời $|\\overrightarrow{BM}| = |\\overrightarrow{MC}| = |\\overrightarrow{PN}| = 3\\text{ cm}$.',
          },
        ],
        correctOrder: ['b7_d2_p4_q3_s1', 'b7_d2_p4_q3_s2', 'b7_d2_p4_q3_s3', 'b7_d2_p4_q3_s4'],
        explanation:
          'Xét trung điểm $M$ trên cạnh $BC$ -> Xét đường trung bình $PN$ -> Xét hướng của $\\overrightarrow{PN}$ so với $\\overrightarrow{BM}$ -> Kết luận các vectơ bằng nhau và độ dài $3\\text{ cm}$.',
        points: 0.75,
      },
      {
        id: 'b7_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 7: Phân tích hệ hai lò xo cân bằng (Bài 4.6 SBT trang 69)',
        prompt:
          'Một khối gỗ nằm yên trên mặt bàn nhẵn nằm ngang dưới tác dụng của hai lực kéo $\\vec{F}_1$ và $\\vec{F}_2$ gắn ở hai đầu đối diện. Biết lực $\\vec{F}_1$ hướng sang phải với độ lớn $12\\text{ N}$. Sắp xếp các bước xác định phương, hướng và độ lớn của lực $\\vec{F}_2$.',
        steps: [
          {
            id: 'b7_d2_p4_q4_s1',
            content:
              'Vì khối gỗ đứng yên trên mặt bàn nhẵn nên hai lực kéo $\\vec{F}_1$ và $\\vec{F}_2$ phải là hai lực cân bằng (trực đối).',
          },
          {
            id: 'b7_d2_p4_q4_s2',
            content:
              'Suy ra vectơ $\\vec{F}_2$ phải cùng phương (nằm ngang) với vectơ $\\vec{F}_1$.',
          },
          {
            id: 'b7_d2_p4_q4_s3',
            content:
              'Do $\\vec{F}_1$ hướng sang phải nên $\\vec{F}_2$ phải ngược hướng với $\\vec{F}_1$, tức là hướng sang trái.',
          },
          {
            id: 'b7_d2_p4_q4_s4',
            content:
              'Độ lớn của lực $\\vec{F}_2$ bằng độ lớn của lực $\\vec{F}_1$: $|\\vec{F}_2| = |\\vec{F}_1| = 12\\text{ N}$.',
          },
        ],
        correctOrder: ['b7_d2_p4_q4_s1', 'b7_d2_p4_q4_s2', 'b7_d2_p4_q4_s3', 'b7_d2_p4_q4_s4'],
        explanation:
          'Trình tự vật lý & toán học: Điều kiện cân bằng hai lực trực đối -> Xác định phương -> Xác định hướng -> Xác định độ lớn $|\\vec{F}_2| = 12\\text{ N}$.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 8: TỔNG VÀ HIỆU CỦA HAI VECTƠ ====================
  'de-on-bai-8-1': {
    extraPart1: [
      {
        id: 'b8_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 8: Rút gọn tổng nhiều vectơ theo quy tắc 3 điểm (Bài 4.7 SBT trang 73)',
        prompt:
          'Cho $5$ điểm bất kì $A, B, C, D, E$. Tổng $\\overrightarrow{AB} + \\overrightarrow{CD} + \\overrightarrow{BC} + \\overrightarrow{DE}$ bằng vectơ nào sau đây?',
        options: [
          { key: 'A', content: '$\\overrightarrow{AE}$' },
          { key: 'B', content: '$\\overrightarrow{EA}$' },
          { key: 'C', content: '$\\overrightarrow{AD}$' },
          { key: 'D', content: '$\\vec{0}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dùng tính chất giao hoán và kết hợp của phép cộng vectơ: $(\\overrightarrow{AB} + \\overrightarrow{BC}) + (\\overrightarrow{CD} + \\overrightarrow{DE}) = \\overrightarrow{AC} + \\overrightarrow{CE} = \\overrightarrow{AE}$ (Bài 4.7 SBT trang 73).',
        pedagogicalTip: 'Sắp xếp các vectơ nối tiếp điểm cuối - điểm đầu để áp dụng quy tắc 3 điểm liên hoàn.',
        points: 0.25,
      },
      {
        id: 'b8_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 8: Tính độ dài tổng hai vectơ trong tam giác vuông (Bài 4.9 SBT trang 74)',
        prompt:
          'Cho hình chữ nhật $ABCD$ có $AB = 5,\\ AD = 12$. Độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AD}$ bằng:',
        options: [
          { key: 'A', content: '$13$' },
          { key: 'B', content: '$17$' },
          { key: 'C', content: '$7$' },
          { key: 'D', content: '$\\sqrt{119}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo quy tắc hình bình hành: $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$. Suy ra $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AC}| = AC = \\sqrt{AB^2 + AD^2} = \\sqrt{5^2 + 12^2} = 13$ (Bài 4.9 SBT trang 74).',
        pedagogicalTip: 'Độ dài của tổng hai vectơ $|\\vec{a}+\\vec{b}|$ thường khác $|\\vec{a}|+|\\vec{b}|$; hãy đưa về một vectơ đơn rồi tính độ dài.',
        points: 0.25,
      },
      {
        id: 'b8_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 8: Tính chất trọng tâm tam giác (Ví dụ 2 SBT trang 71)',
        prompt:
          'Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm của cạnh $BC$. Đẳng thức nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$\\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{AG}$' },
          { key: 'B', content: '$\\overrightarrow{GB} + \\overrightarrow{GC} = \\overrightarrow{GA}$' },
          { key: 'C', content: '$\\overrightarrow{GA} + \\overrightarrow{GB} = \\overrightarrow{GC}$' },
          { key: 'D', content: '$\\overrightarrow{GB} - \\overrightarrow{GC} = \\overrightarrow{GA}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $G$ là trọng tâm tam giác $ABC$ nên $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\Rightarrow \\overrightarrow{GB} + \\overrightarrow{GC} = -\\overrightarrow{GA} = \\overrightarrow{AG}$ (Ví dụ 2 SBT trang 71).',
        pedagogicalTip: 'Từ $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0}$, tổng hai vectơ bất kì bằng vectơ đối của vectơ thứ ba.',
        points: 0.25,
      },
      {
        id: 'b8_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 8: Ứng dụng tổng hợp vận tốc thuyền qua sông (Bài 4.12 SBT trang 75)',
        prompt:
          'Một chiếc thuyền máy chạy vuông góc với bờ sông với vận tốc thực (so với nước) có độ lớn $v_1 = 8\\text{ km/h}$. Nước sông chảy song song với bờ với vận tốc có độ lớn $v_2 = 6\\text{ km/h}$. Độ lớn vận tốc thực tế của thuyền so với bờ sông bằng:',
        options: [
          { key: 'A', content: '$10\\text{ km/h}$' },
          { key: 'B', content: '$14\\text{ km/h}$' },
          { key: 'C', content: '$2\\text{ km/h}$' },
          { key: 'D', content: '$2\\sqrt{7}\\text{ km/h}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vectơ vận tốc của thuyền so với bờ là $\\vec{v} = \\vec{v}_1 + \\vec{v}_2$. Vì $\\vec{v}_1 \\perp \\vec{v}_2$ nên theo quy tắc hình bình hành (hình chữ nhật): $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2} = \\sqrt{8^2 + 6^2} = 10\\text{ km/h}$ (Bài 4.12 SBT trang 75).',
        pedagogicalTip: 'Khi hai vectơ thành phần vuông góc, độ lớn vectơ tổng được tính bằng định lí Pythagore.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b8_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 8: Chứng minh đẳng thức vectơ dùng quy tắc trừ (Bài 4.8 SBT trang 74)',
        prompt:
          'Cho bốn điểm bất kì $A, B, C, D$. Sắp xếp các bước sau theo thứ tự đúng để chứng minh đẳng thức $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$.',
        steps: [
          {
            id: 'b8_d1_p4_q2_s1',
            content:
              'Biến đổi vế trái bằng cách chèn điểm $D$ vào $\\overrightarrow{AB}$ theo quy tắc ba điểm: $\\overrightarrow{AB} = \\overrightarrow{AD} + \\overrightarrow{DB}$.',
          },
          {
            id: 'b8_d1_p4_q2_s2',
            content:
              'Khi đó vế trái trở thành: $VT = \\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + (\\overrightarrow{CD} + \\overrightarrow{DB})$.',
          },
          {
            id: 'b8_d1_p4_q2_s3',
            content:
              'Áp dụng quy tắc ba điểm cho tổng trong ngoặc: $\\overrightarrow{CD} + \\overrightarrow{DB} = \\overrightarrow{CB}$.',
          },
          {
            id: 'b8_d1_p4_q2_s4',
            content:
              'Thay vào biểu thức ta được $VT = \\overrightarrow{AD} + \\overrightarrow{CB} = VP$ (điều phải chứng minh).',
          },
        ],
        correctOrder: ['b8_d1_p4_q2_s1', 'b8_d1_p4_q2_s2', 'b8_d1_p4_q2_s3', 'b8_d1_p4_q2_s4'],
        explanation:
          'Trình tự chuẩn: Chèn điểm $D$ vào $\\overrightarrow{AB}$ -> Nhóm $(\\overrightarrow{CD} + \\overrightarrow{DB})$ -> Thu gọn thành $\\overrightarrow{CB}$ -> Kết luận $VT = VP$.',
        points: 0.75,
      },
      {
        id: 'b8_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 8: Tính độ dài tổng hai vectơ chung gốc trong tam giác đều (Bài 4.10 SBT trang 74)',
        prompt:
          'Cho tam giác đều $ABC$ có cạnh bằng $a$. Sắp xếp các bước tính độ dài của vectơ $\\overrightarrow{AB} + \\overrightarrow{AC}$.',
        steps: [
          {
            id: 'b8_d1_p4_q3_s1',
            content:
              'Gọi $M$ là trung điểm của cạnh $BC$, dựng điểm $D$ sao cho $M$ là trung điểm của $AD$ thì tứ giác $ABDC$ là hình bình hành (và là hình thoi cạnh $a$).',
          },
          {
            id: 'b8_d1_p4_q3_s2',
            content:
              'Theo quy tắc hình bình hành, ta có $\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$, suy ra $|\\overrightarrow{AB} + \\overrightarrow{AC}| = AD = 2AM$.',
          },
          {
            id: 'b8_d1_p4_q3_s3',
            content:
              'Trong tam giác đều $ABC$ cạnh $a$, đường trung tuyến cũng là đường cao nên $AM = \\dfrac{a\\sqrt{3}}{2}$.',
          },
          {
            id: 'b8_d1_p4_q3_s4',
            content:
              'Vậy $|\\overrightarrow{AB} + \\overrightarrow{AC}| = 2 \\cdot \\dfrac{a\\sqrt{3}}{2} = a\\sqrt{3}$.',
          },
        ],
        correctOrder: ['b8_d1_p4_q3_s1', 'b8_d1_p4_q3_s2', 'b8_d1_p4_q3_s3', 'b8_d1_p4_q3_s4'],
        explanation:
          'Dựng hình bình hành $ABDC$ có tâm $M$ -> Áp dụng quy tắc hình bình hành đưa về $AD = 2AM$ -> Tính đường cao $AM = \\frac{a\\sqrt{3}}{2}$ -> Kết luận $|\\overrightarrow{AB}+\\overrightarrow{AC}| = a\\sqrt{3}$.',
        points: 0.75,
      },
      {
        id: 'b8_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 8: Tổng hợp hai lực cùng độ lớn tạo góc 60 độ (Bài 4.11 SBT trang 75)',
        prompt:
          'Hai tàu kéo cùng kéo một sà lan bằng hai dây cáp tạo với nhau một góc $60^\\circ$. Biết lực kéo của mỗi tàu đều có độ lớn bằng $4000\\text{ N}$. Sắp xếp các bước tính độ lớn hợp lực tác dụng lên sà lan.',
        steps: [
          {
            id: 'b8_d1_p4_q4_s1',
            content:
              'Biểu diễn hai lực kéo bởi hai vectơ $\\overrightarrow{OA} = \\vec{F}_1$ và $\\overrightarrow{OB} = \\vec{F}_2$ với $OA = OB = 4000$ và $\\widehat{AOB} = 60^\\circ$.',
          },
          {
            id: 'b8_d1_p4_q4_s2',
            content:
              'Dựng hình thoi $OACB$, theo quy tắc hình bình hành thì hợp lực là $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 = \\overrightarrow{OC}$.',
          },
          {
            id: 'b8_d1_p4_q4_s3',
            content:
              'Tam giác $OAB$ có $OA = OB = 4000$ và $\\widehat{AOB} = 60^\\circ$ nên là tam giác đều cạnh $4000$, có đường cao $OM = 4000 \\cdot \\dfrac{\\sqrt{3}}{2} = 2000\\sqrt{3}$.',
          },
          {
            id: 'b8_d1_p4_q4_s4',
            content:
              'Suy ra độ lớn hợp lực là $|\\vec{F}| = OC = 2OM = 4000\\sqrt{3}\\text{ N} \\approx 6928\\text{ N}$.',
          },
        ],
        correctOrder: ['b8_d1_p4_q4_s1', 'b8_d1_p4_q4_s2', 'b8_d1_p4_q4_s3', 'b8_d1_p4_q4_s4'],
        explanation:
          'Biểu diễn hai lực bởi $\\overrightarrow{OA}, \\overrightarrow{OB}$ -> Dựng hình thoi $OACB$ có $\\vec{F} = \\overrightarrow{OC}$ -> Tính đường cao $OM$ của tam giác đều $OAB$ -> Suy ra $|\\vec{F}| = 2OM = 4000\\sqrt{3}\\text{ N}$.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-8-2': {
    extraPart1: [
      {
        id: 'b8_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 8: Độ dài hiệu hai vectơ bằng quy tắc hiệu (Bài 4.9 SBT trang 74)',
        prompt:
          'Cho tam giác đều $ABC$ có cạnh bằng $5a$. Độ dài của vectơ hiệu $\\overrightarrow{AB} - \\overrightarrow{AC}$ bằng:',
        options: [
          { key: 'A', content: '$5a$' },
          { key: 'B', content: '$5a\\sqrt{3}$' },
          { key: 'C', content: '$0$' },
          { key: 'D', content: '$10a$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo quy tắc hiệu: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$. Do đó $|\\overrightarrow{AB} - \\overrightarrow{AC}| = |\\overrightarrow{CB}| = CB = 5a$ (Bài 4.9 SBT trang 74).',
        pedagogicalTip: 'Quy tắc hiệu chung điểm đầu: $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$ (điểm cuối vectơ trừ nối sang điểm cuối vectơ bị trừ).',
        points: 0.25,
      },
      {
        id: 'b8_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 8: Hình bình hành và tổng hiệu vectơ (Ví dụ 3 SBT trang 72)',
        prompt:
          'Cho hình bình hành $ABCD$ có tâm $O$. Đẳng thức nào sau đây là **sai**?',
        options: [
          { key: 'A', content: '$\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{BD}$' },
          { key: 'B', content: '$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$' },
          { key: 'C', content: '$\\overrightarrow{OA} + \\overrightarrow{OC} = \\vec{0}$' },
          { key: 'D', content: '$\\overrightarrow{BA} + \\overrightarrow{BC} = \\overrightarrow{BD}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo quy tắc hiệu: $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB} \\neq \\overrightarrow{BD}$. Do đó phương án A sai.',
        pedagogicalTip: 'Cẩn thận thứ tự điểm trong quy tắc hiệu: $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$.',
        points: 0.25,
      },
      {
        id: 'b8_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 8: Điều kiện để độ dài tổng bằng độ dài hiệu (Bài 4.10 SBT trang 74)',
        prompt:
          'Cho hình bình hành $ABCD$. Điều kiện cần và đủ để $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AB} - \\overrightarrow{AD}|$ là:',
        options: [
          { key: 'A', content: '$ABCD$ là hình chữ nhật.' },
          { key: 'B', content: '$ABCD$ là hình thoi.' },
          { key: 'C', content: '$AB = AD$.' },
          { key: 'D', content: '$AC \\perp BD$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $|\\overrightarrow{AB} + \\overrightarrow{AD}| = |\\overrightarrow{AC}| = AC$ và $|\\overrightarrow{AB} - \\overrightarrow{AD}| = |\\overrightarrow{DB}| = BD$. Để $AC = BD$ thì hình bình hành $ABCD$ phải có hai đường chéo bằng nhau, tức là hình chữ nhật (Bài 4.10 SBT trang 74).',
        pedagogicalTip: 'Hình bình hành có hai đường chéo bằng nhau ($AC = BD$) là hình chữ nhật.',
        points: 0.25,
      },
      {
        id: 'b8_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 8: Cân bằng ba lực đồng quy tác dụng lên vật (Bài 4.11 SBT trang 75)',
        prompt:
          'Một chất điểm $A$ đứng yên dưới tác dụng của ba lực đồng quy $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết hai lực $\\vec{F}_1, \\vec{F}_2$ có giá vuông góc với nhau và có độ lớn lần lượt là $|\\vec{F}_1| = 30\\text{ N},\\ |\\vec{F}_2| = 40\\text{ N}$. Độ lớn của lực $\\vec{F}_3$ bằng:',
        options: [
          { key: 'A', content: '$50\\text{ N}$' },
          { key: 'B', content: '$70\\text{ N}$' },
          { key: 'C', content: '$10\\text{ N}$' },
          { key: 'D', content: '$25\\text{ N}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì chất điểm đứng yên nên $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\Rightarrow \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$. Suy ra $|\\vec{F}_3| = |\\vec{F}_1 + \\vec{F}_2| = \\sqrt{|\\vec{F}_1|^2 + |\\vec{F}_2|^2} = \\sqrt{30^2 + 40^2} = 50\\text{ N}$ (Bài 4.11 SBT trang 75).',
        pedagogicalTip: 'Khi ba lực cân bằng ($\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$), độ lớn lực thứ ba bằng độ lớn hợp lực của hai lực kia.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b8_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 8: Chứng minh tổng vectơ từ hai hình bình hành (Bài 4.8 SBT trang 74)',
        prompt:
          'Cho hai hình bình hành $ABCD$ và $AB\'C\'D\'$ có chung đỉnh $A$. Sắp xếp các bước chứng minh đẳng thức $\\overrightarrow{BB\'} + \\overrightarrow{DD\'} = \\overrightarrow{CC\'}$.',
        steps: [
          {
            id: 'b8_d2_p4_q2_s1',
            content:
              'Theo quy tắc hiệu với gốc $A$, ta viết: $\\overrightarrow{BB\'} = \\overrightarrow{AB\'} - \\overrightarrow{AB}$ và $\\overrightarrow{DD\'} = \\overrightarrow{AD\'} - \\overrightarrow{AD}$.',
          },
          {
            id: 'b8_d2_p4_q2_s2',
            content:
              'Cộng hai đẳng thức trên vế theo vế: $\\overrightarrow{BB\'} + \\overrightarrow{DD\'} = (\\overrightarrow{AB\'} + \\overrightarrow{AD\'}) - (\\overrightarrow{AB} + \\overrightarrow{AD})$.',
          },
          {
            id: 'b8_d2_p4_q2_s3',
            content:
              'Áp dụng quy tắc hình bình hành cho $AB\'C\'D\'$ và $ABCD$: $\\overrightarrow{AB\'} + \\overrightarrow{AD\'} = \\overrightarrow{AC\'}$ và $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$.',
          },
          {
            id: 'b8_d2_p4_q2_s4',
            content:
              'Suy ra $\\overrightarrow{BB\'} + \\overrightarrow{DD\'} = \\overrightarrow{AC\'} - \\overrightarrow{AC} = \\overrightarrow{CC\'}$ (điều phải chứng minh).',
          },
        ],
        correctOrder: ['b8_d2_p4_q2_s1', 'b8_d2_p4_q2_s2', 'b8_d2_p4_q2_s3', 'b8_d2_p4_q2_s4'],
        explanation:
          'Đưa các vectơ về gốc chung $A$ -> Nhóm $(\\overrightarrow{AB\'}+\\overrightarrow{AD\'})$ và $(\\overrightarrow{AB}+\\overrightarrow{AD})$ -> Áp dụng quy tắc hình bình hành được $\\overrightarrow{AC\'} - \\overrightarrow{AC}$ -> Thu gọn bằng $\\overrightarrow{CC\'}$.',
        points: 0.75,
      },
      {
        id: 'b8_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 8: Chứng minh tính chất tâm hình bình hành với điểm M bất kì (Ví dụ 3 SBT trang 72)',
        prompt:
          'Cho hình bình hành $ABCD$ có tâm $O$. Sắp xếp các bước chứng minh rằng với hai trung điểm $M$ của $AB$ và $N$ của $CD$, ta luôn có $\\overrightarrow{OM} + \\overrightarrow{ON} = \\vec{0}$.',
        steps: [
          {
            id: 'b8_d2_p4_q3_s1',
            content:
              'Vì $O$ là tâm hình bình hành $ABCD$ nên $O$ là trung điểm của hai đường chéo $AC$ và $BD$, suy ra $\\overrightarrow{OA} + \\overrightarrow{OC} = \\vec{0}$ và $\\overrightarrow{OB} + \\overrightarrow{OD} = \\vec{0}$.',
          },
          {
            id: 'b8_d2_p4_q3_s2',
            content:
              'Theo quy tắc ba điểm: $\\overrightarrow{OM} = \\overrightarrow{OA} + \\overrightarrow{AM}$ và $\\overrightarrow{ON} = \\overrightarrow{OC} + \\overrightarrow{CN}$.',
          },
          {
            id: 'b8_d2_p4_q3_s3',
            content:
              'Cộng hai vế: $\\overrightarrow{OM} + \\overrightarrow{ON} = (\\overrightarrow{OA} + \\overrightarrow{OC}) + (\\overrightarrow{AM} + \\overrightarrow{CN}) = \\overrightarrow{AM} + \\overrightarrow{CN}$.',
          },
          {
            id: 'b8_d2_p4_q3_s4',
            content:
              'Vì $M, N$ là trung điểm $AB, CD$ của hình bình hành nên $\\overrightarrow{AM}$ và $\\overrightarrow{CN}$ là hai vectơ đối nhau ($\\overrightarrow{AM} + \\overrightarrow{CN} = \\vec{0}$), suy ra $\\overrightarrow{OM} + \\overrightarrow{ON} = \\vec{0}$.',
          },
        ],
        correctOrder: ['b8_d2_p4_q3_s1', 'b8_d2_p4_q3_s2', 'b8_d2_p4_q3_s3', 'b8_d2_p4_q3_s4'],
        explanation:
          'Sử dụng tính chất tâm $O$: $\\overrightarrow{OA}+\\overrightarrow{OC}=\\vec{0}$ -> Tách $\\overrightarrow{OM}, \\overrightarrow{ON}$ qua $A, C$ -> Nhóm $(\\overrightarrow{OA}+\\overrightarrow{OC})$ -> Dùng tính chất hai vectơ đối $\\overrightarrow{AM}+\\overrightarrow{CN}=\\vec{0}$.',
        points: 0.75,
      },
      {
        id: 'b8_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 8: Bài toán định hướng bay khi có gió thổi ngang (Bài 4.12 SBT trang 75)',
        prompt:
          'Một máy bay muốn bay thẳng từ $A$ đến $B$ theo hướng Bắc. Gió thổi từ hướng Tây sang Đông với tốc độ $50\\text{ km/h}$. Biết tốc độ thực tế của máy bay so với mặt đất theo hướng Bắc là $200\\sqrt{3}\\text{ km/h}$. Sắp xếp các bước tính tốc độ của máy bay so với không khí.',
        steps: [
          {
            id: 'b8_d2_p4_q4_s1',
            content:
              'Gọi $\\vec{v}_1$ là vận tốc máy bay so với không khí, $\\vec{v}_2$ là vận tốc gió (hướng Đông, $|\\vec{v}_2| = 50$) và $\\vec{v}$ là vận tốc thực tế so với đất (hướng Bắc, $|\\vec{v}| = 200\\sqrt{3}$).',
          },
          {
            id: 'b8_d2_p4_q4_s2',
            content:
              'Theo công thức cộng vận tốc: $\\vec{v} = \\vec{v}_1 + \\vec{v}_2 \\Leftrightarrow \\vec{v}_1 = \\vec{v} - \\vec{v}_2$.',
          },
          {
            id: 'b8_d2_p4_q4_s3',
            content:
              'Vì hướng Bắc ($\\vec{v}$) vuông góc với hướng Đông ($\\vec{v}_2$) nên tam giác vận tốc là tam giác vuông có cạnh huyền tương ứng với $\\vec{v}_1$.',
          },
          {
            id: 'b8_d2_p4_q4_s4',
            content:
              'Áp dụng định lí Pythagore: $|\\vec{v}_1| = \\sqrt{|\\vec{v}|^2 + |\\vec{v}_2|^2} = \\sqrt{(200\\sqrt{3})^2 + 50^2} = \\sqrt{122500} = 350\\text{ km/h}$.',
          },
        ],
        correctOrder: ['b8_d2_p4_q4_s1', 'b8_d2_p4_q4_s2', 'b8_d2_p4_q4_s3', 'b8_d2_p4_q4_s4'],
        explanation:
          'Gọi tên các vectơ vận tốc -> Viết công thức $\\vec{v}_1 = \\vec{v} - \\vec{v}_2$ -> Nhận xét $\\vec{v} \\perp \\vec{v}_2$ -> Tính $|\\vec{v}_1| = \\sqrt{120000 + 2500} = 350\\text{ km/h}$.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 9: TÍCH CỦA MỘT VECTƠ VỚI MỘT SỐ ====================
  'de-on-bai-9-1': {
    extraPart1: [
      {
        id: 'b9_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 9: Rút gọn biểu thức tuyến tính các vectơ (Bài 4.13 SBT trang 79)',
        prompt:
          'Cho tam giác $ABC$ có $M$ là trung điểm của cạnh $BC$. Khi đó vectơ $\\overrightarrow{AB} + \\overrightarrow{AC} - 2\\overrightarrow{AM}$ bằng:',
        options: [
          { key: 'A', content: '$\\vec{0}$' },
          { key: 'B', content: '$2\\overrightarrow{AM}$' },
          { key: 'C', content: '$\\overrightarrow{BC}$' },
          { key: 'D', content: '$2\\overrightarrow{BC}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo tính chất trung điểm $M$ của đoạn thẳng $BC$, với điểm $A$ bất kì ta luôn có $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$. Do đó $\\overrightarrow{AB} + \\overrightarrow{AC} - 2\\overrightarrow{AM} = \\vec{0}$ (Bài 4.13 SBT trang 79).',
        pedagogicalTip: 'Hệ thức trung điểm: $M$ là trung điểm $BC \\Leftrightarrow \\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AM}$.',
        points: 0.25,
      },
      {
        id: 'b9_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 9: Phân tích vectơ theo hai vectơ cạnh trong hình bình hành (Ví dụ 2 SBT trang 77)',
        prompt:
          'Cho hình bình hành $ABCD$ có tâm $O$. Biểu diễn vectơ $\\overrightarrow{AO}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AD}$ là:',
        options: [
          { key: 'A', content: '$\\overrightarrow{AO} = \\dfrac{1}{2}\\overrightarrow{AB} + \\dfrac{1}{2}\\overrightarrow{AD}$' },
          { key: 'B', content: '$\\overrightarrow{AO} = \\overrightarrow{AB} + \\overrightarrow{AD}$' },
          { key: 'C', content: '$\\overrightarrow{AO} = \\dfrac{1}{2}\\overrightarrow{AB} - \\dfrac{1}{2}\\overrightarrow{AD}$' },
          { key: 'D', content: '$\\overrightarrow{AO} = 2\\overrightarrow{AB} + 2\\overrightarrow{AD}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $O$ là trung điểm của đường chéo $AC$ nên $\\overrightarrow{AO} = \\dfrac{1}{2}\\overrightarrow{AC}$. Theo quy tắc hình bình hành $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$, suy ra $\\overrightarrow{AO} = \\dfrac{1}{2}\\overrightarrow{AB} + \\dfrac{1}{2}\\overrightarrow{AD}$ (Ví dụ 2 SBT trang 77).',
        pedagogicalTip: 'Đường chéo xuất phát từ đỉnh $A$ của hình bình hành $ABCD$ chia đôi tại tâm $O$.',
        points: 0.25,
      },
      {
        id: 'b9_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 9: Điều kiện hai vectơ cùng phương (Bài 4.16 SBT trang 80)',
        prompt:
          'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ không cùng phương. Vectơ $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ cùng phương với vectơ nào sau đây?',
        options: [
          { key: 'A', content: '$\\vec{v} = -4\\vec{a} + 6\\vec{b}$' },
          { key: 'B', content: '$\\vec{v} = 4\\vec{a} + 6\\vec{b}$' },
          { key: 'C', content: '$\\vec{v} = 3\\vec{a} - 2\\vec{b}$' },
          { key: 'D', content: '$\\vec{v} = -2\\vec{a} - 3\\vec{b}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta thấy $\\vec{v} = -4\\vec{a} + 6\\vec{b} = -2(2\\vec{a} - 3\\vec{b}) = -2\\vec{u}$. Do đó $\\vec{v}$ cùng phương với $\\vec{u}$ (Bài 4.16 SBT trang 80).',
        pedagogicalTip: 'Hai tổ hợp tuyến tính $m_1\\vec{a} + n_1\\vec{b}$ và $m_2\\vec{a} + n_2\\vec{b}$ cùng phương khi $\\dfrac{m_1}{m_2} = \\dfrac{n_1}{n_2}$.',
        points: 0.25,
      },
      {
        id: 'b9_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 9: Xác định vị trí điểm thỏa mãn đẳng thức vectơ (Bài 4.17 SBT trang 80)',
        prompt:
          'Cho đoạn thẳng $AB$ có độ dài bằng $12\\text{ cm}$. Điểm $I$ thỏa mãn $2\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0}$. Độ dài đoạn thẳng $AI$ bằng:',
        options: [
          { key: 'A', content: '$4\\text{ cm}$' },
          { key: 'B', content: '$6\\text{ cm}$' },
          { key: 'C', content: '$8\\text{ cm}$' },
          { key: 'D', content: '$3\\text{ cm}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ $2\\overrightarrow{IA} + \\overrightarrow{IB} = \\vec{0} \\Leftrightarrow 2\\overrightarrow{IA} + (\\overrightarrow{IA} + \\overrightarrow{AB}) = \\vec{0} \\Leftrightarrow 3\\overrightarrow{AI} = \\overrightarrow{AB} \\Leftrightarrow \\overrightarrow{AI} = \\dfrac{1}{3}\\overrightarrow{AB}$. Suy ra $AI = \\dfrac{1}{3}AB = \\dfrac{12}{3} = 4\\text{ cm}$ (Bài 4.17 SBT trang 80).',
        pedagogicalTip: 'Chèn điểm $A$ vào $\\overrightarrow{IB}$ để đưa về mối liên hệ giữa $\\overrightarrow{AI}$ và $\\overrightarrow{AB}$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b9_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 9: Biểu diễn vectơ theo hai vectơ cạnh tam giác (Ví dụ 3 SBT trang 77)',
        prompt:
          'Cho tam giác $ABC$. Điểm $M$ nằm trên cạnh $BC$ sao cho $BM = 2MC$. Hãy sắp xếp các bước biểu diễn vectơ $\\overrightarrow{AM}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$.',
        steps: [
          {
            id: 'b9_d1_p4_q2_s1',
            content:
              'Vì $M$ thuộc đoạn thẳng $BC$ và $BM = 2MC$ nên $\\overrightarrow{BM} = \\dfrac{2}{3}\\overrightarrow{BC}$.',
          },
          {
            id: 'b9_d1_p4_q2_s2',
            content:
              'Theo quy tắc ba điểm và quy tắc hiệu: $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM}$ và $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$.',
          },
          {
            id: 'b9_d1_p4_q2_s3',
            content:
              'Thay $\\overrightarrow{BM} = \\dfrac{2}{3}(\\overrightarrow{AC} - \\overrightarrow{AB})$ vào biểu thức của $\\overrightarrow{AM}$: $\\overrightarrow{AM} = \\overrightarrow{AB} + \\dfrac{2}{3}\\overrightarrow{AC} - \\dfrac{2}{3}\\overrightarrow{AB}$.',
          },
          {
            id: 'b9_d1_p4_q2_s4',
            content:
              'Thu gọn các số hạng đồng dạng ta được $\\overrightarrow{AM} = \\dfrac{1}{3}\\overrightarrow{AB} + \\dfrac{2}{3}\\overrightarrow{AC}$.',
          },
        ],
        correctOrder: ['b9_d1_p4_q2_s1', 'b9_d1_p4_q2_s2', 'b9_d1_p4_q2_s3', 'b9_d1_p4_q2_s4'],
        explanation:
          'Từ $BM = 2MC$ suy ra $\\overrightarrow{BM} = \\frac{2}{3}\\overrightarrow{BC}$ -> Tách $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM}$ và $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$ -> Thay thế -> Thu gọn được $\\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AC}$.',
        points: 0.75,
      },
      {
        id: 'b9_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 9: Chứng minh ba điểm thẳng hàng bằng tích vectơ với một số (Ví dụ 4 SBT trang 78)',
        prompt:
          'Cho tam giác $ABC$ có $M$ là trung điểm $BC$, $I$ là trung điểm $AM$. Điểm $K$ thuộc cạnh $AC$ sao cho $\\overrightarrow{AK} = \\dfrac{1}{3}\\overrightarrow{AC}$. Sắp xếp các bước chứng minh ba điểm $B, I, K$ thẳng hàng.',
        steps: [
          {
            id: 'b9_d1_p4_q3_s1',
            content:
              'Chọn hai vectơ gốc $\\overrightarrow{BA},\\ \\overrightarrow{BC}$. Vì $I$ là trung điểm $AM$ và $M$ là trung điểm $BC$ nên $\\overrightarrow{BI} = \\dfrac{1}{2}(\\overrightarrow{BA} + \\overrightarrow{BM}) = \\dfrac{1}{2}\\overrightarrow{BA} + \\dfrac{1}{4}\\overrightarrow{BC}$.',
          },
          {
            id: 'b9_d1_p4_q3_s2',
            content:
              'Biểu diễn $\\overrightarrow{BK}$: $\\overrightarrow{BK} = \\overrightarrow{BA} + \\overrightarrow{AK} = \\overrightarrow{BA} + \\dfrac{1}{3}\\overrightarrow{AC} = \\overrightarrow{BA} + \\dfrac{1}{3}(\\overrightarrow{BC} - \\overrightarrow{BA})$.',
          },
          {
            id: 'b9_d1_p4_q3_s3',
            content:
              'Thu gọn biểu thức của $\\overrightarrow{BK}$: $\\overrightarrow{BK} = \\dfrac{2}{3}\\overrightarrow{BA} + \\dfrac{1}{3}\\overrightarrow{BC}$.',
          },
          {
            id: 'b9_d1_p4_q3_s4',
            content:
              'So sánh hệ số: $\\overrightarrow{BK} = \\dfrac{4}{3}\\left(\\dfrac{1}{2}\\overrightarrow{BA} + \\dfrac{1}{4}\\overrightarrow{BC}\\right) = \\dfrac{4}{3}\\overrightarrow{BI}$, suy ra $\\overrightarrow{BK}$ và $\\overrightarrow{BI}$ cùng phương nên $B, I, K$ thẳng hàng.',
          },
        ],
        correctOrder: ['b9_d1_p4_q3_s1', 'b9_d1_p4_q3_s2', 'b9_d1_p4_q3_s3', 'b9_d1_p4_q3_s4'],
        explanation:
          'Phân tích $\\overrightarrow{BI}$ theo $\\overrightarrow{BA}, \\overrightarrow{BC}$ -> Phân tích $\\overrightarrow{BK}$ -> Thu gọn $\\overrightarrow{BK} = \\frac{2}{3}\\overrightarrow{BA} + \\frac{1}{3}\\overrightarrow{BC}$ -> Chỉ ra $\\overrightarrow{BK} = \\frac{4}{3}\\overrightarrow{BI}$ và kết luận 3 điểm thẳng hàng.',
        points: 0.75,
      },
      {
        id: 'b9_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 9: Chứng minh hệ thức đoạn nối trung điểm hai cạnh đối tứ giác (Bài 4.14 SBT trang 79)',
        prompt:
          'Cho tứ giác $ABCD$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh đối $AB$ và $CD$. Sắp xếp các bước chứng minh đẳng thức $\\overrightarrow{MN} = \\dfrac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.',
        steps: [
          {
            id: 'b9_d1_p4_q4_s1',
            content:
              'Áp dụng quy tắc ba điểm theo hai đường gấp khúc $M \\to A \\to D \\to N$ và $M \\to B \\to C \\to N$ ta có: $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ và $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$.',
          },
          {
            id: 'b9_d1_p4_q4_s2',
            content:
              'Cộng vế theo vế hai đẳng thức trên: $2\\overrightarrow{MN} = (\\overrightarrow{MA} + \\overrightarrow{MB}) + (\\overrightarrow{AD} + \\overrightarrow{BC}) + (\\overrightarrow{DN} + \\overrightarrow{CN})$.',
          },
          {
            id: 'b9_d1_p4_q4_s3',
            content:
              'Vì $M$ là trung điểm $AB$ và $N$ là trung điểm $CD$ nên $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$ và $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$.',
          },
          {
            id: 'b9_d1_p4_q4_s4',
            content:
              'Suy ra $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC} \\Leftrightarrow \\overrightarrow{MN} = \\dfrac{1}{2}(\\overrightarrow{AD} + \\overrightarrow{BC})$.',
          },
        ],
        correctOrder: ['b9_d1_p4_q4_s1', 'b9_d1_p4_q4_s2', 'b9_d1_p4_q4_s3', 'b9_d1_p4_q4_s4'],
        explanation:
          'Viết $\\overrightarrow{MN}$ theo hai nhánh qua $A, D$ và $B, C$ -> Cộng vế theo vế -> Triệt tiêu các cặp vectơ đối tại trung điểm $M, N$ -> Chia hai vế cho $2$.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-9-2': {
    extraPart1: [
      {
        id: 'b9_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 9: Tính chất trọng tâm tam giác với điểm M bất kì (Lý thuyết SBT trang 76)',
        prompt:
          'Cho tam giác $ABC$ có trọng tâm $G$. Với điểm $M$ bất kì trong mặt phẳng, khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: '$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$' },
          { key: 'B', content: '$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = \\overrightarrow{MG}$' },
          { key: 'C', content: '$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 2\\overrightarrow{MG}$' },
          { key: 'D', content: '$\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = \\vec{0}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Chèn điểm $G$ vào từng vectơ vế trái: $(\\overrightarrow{MG}+\\overrightarrow{GA}) + (\\overrightarrow{MG}+\\overrightarrow{GB}) + (\\overrightarrow{MG}+\\overrightarrow{GC}) = 3\\overrightarrow{MG} + (\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}) = 3\\overrightarrow{MG}$ (Lý thuyết SBT trang 76).',
        pedagogicalTip: 'Hệ thức trọng tâm tổng quát: $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$ với mọi điểm $M$.',
        points: 0.25,
      },
      {
        id: 'b9_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 9: Độ dài tích của một vectơ với một số (Bài 4.15 SBT trang 80)',
        prompt:
          'Cho tam giác vuông cân $ABC$ tại $A$ có $AB = AC = 4$. Độ dài của vectơ $\\vec{u} = \\dfrac{3}{2}\\overrightarrow{AB} - \\dfrac{3}{2}\\overrightarrow{AC}$ bằng:',
        options: [
          { key: 'A', content: '$6\\sqrt{2}$' },
          { key: 'B', content: '$4\\sqrt{2}$' },
          { key: 'C', content: '$6$' },
          { key: 'D', content: '$12$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $\\vec{u} = \\dfrac{3}{2}(\\overrightarrow{AB} - \\overrightarrow{AC}) = \\dfrac{3}{2}\\overrightarrow{CB}$. Vì $\\triangle ABC$ vuông cân tại $A$ nên $CB = 4\\sqrt{2}$. Suy ra $|\\vec{u}| = \\dfrac{3}{2}CB = \\dfrac{3}{2} \\cdot 4\\sqrt{2} = 6\\sqrt{2}$ (Bài 4.15 SBT trang 80).',
        pedagogicalTip: 'Đặt nhân tử chung $\\dfrac{3}{2}$ ra ngoài để dùng quy tắc hiệu $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$.',
        points: 0.25,
      },
      {
        id: 'b9_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 9: Tìm tham số để hai vectơ cùng phương (Bài 4.16 SBT trang 80)',
        prompt:
          'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ không cùng phương. Tìm số thực $k$ để hai vectơ $\\vec{u} = \\vec{a} + (2k - 1)\\vec{b}$ và $\\vec{v} = 3\\vec{a} + 9\\vec{b}$ cùng phương.',
        options: [
          { key: 'A', content: '$k = 2$' },
          { key: 'B', content: '$k = 1$' },
          { key: 'C', content: '$k = 5$' },
          { key: 'D', content: '$k = -1$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $\\vec{a}, \\vec{b}$ không cùng phương nên $\\vec{u}$ và $\\vec{v}$ cùng phương khi và chỉ khi $\\dfrac{1}{3} = \\dfrac{2k - 1}{9} \\Leftrightarrow 2k - 1 = 3 \\Leftrightarrow k = 2$ (Bài 4.16 SBT trang 80).',
        pedagogicalTip: 'Hai vectơ biểu diễn theo cơ sở $(\\vec{a}, \\vec{b})$ cùng phương khi tỉ lệ các hệ số tương ứng bằng nhau.',
        points: 0.25,
      },
      {
        id: 'b9_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 9: Tập hợp điểm thỏa mãn đẳng thức độ dài vectơ (Bài 4.18 SBT trang 81)',
        prompt:
          'Cho tam giác $ABC$ có trọng tâm $G$. Tập hợp các điểm $M$ trong mặt phẳng thỏa mãn $|\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC}| = 9$ là:',
        options: [
          { key: 'A', content: 'Đường tròn tâm $G$, bán kính $R = 3$.' },
          { key: 'B', content: 'Đường tròn tâm $G$, bán kính $R = 9$.' },
          { key: 'C', content: 'Đường tròn tâm $A$, bán kính $R = 3$.' },
          { key: 'D', content: 'Đường trung trực của đoạn thẳng $BC$.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $G$ là trọng tâm $\\triangle ABC$ nên $\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} = 3\\overrightarrow{MG}$. Hệ thức trở thành $|3\\overrightarrow{MG}| = 9 \\Leftrightarrow 3MG = 9 \\Leftrightarrow MG = 3$. Vậy tập hợp điểm $M$ là đường tròn tâm $G$, bán kính $R = 3$ (Bài 4.18 SBT trang 81).',
        pedagogicalTip: 'Thu gọn tổng các vectơ vế trái về một vectơ duy nhất trước khi lấy độ dài.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b9_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 9: Phân tích vectơ trọng tâm theo hai cạnh tam giác (Bài 4.15 SBT trang 80)',
        prompt:
          'Cho tam giác $ABC$ có trọng tâm $G$, gọi $M$ là trung điểm của $BC$. Sắp xếp các bước biểu diễn vectơ $\\overrightarrow{AG}$ theo hai vectơ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$.',
        steps: [
          {
            id: 'b9_d2_p4_q2_s1',
            content:
              'Vì $M$ là trung điểm của cạnh $BC$ nên theo hệ thức trung điểm ta có $\\overrightarrow{AM} = \\dfrac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC})$.',
          },
          {
            id: 'b9_d2_p4_q2_s2',
            content:
              'Vì $G$ là trọng tâm tam giác $ABC$ nên $G$ nằm trên đường trung tuyến $AM$ và $AG = \\dfrac{2}{3}AM$, hai vectơ $\\overrightarrow{AG},\\ \\overrightarrow{AM}$ cùng hướng.',
          },
          {
            id: 'b9_d2_p4_q2_s3',
            content:
              'Do đó ta có đẳng thức vectơ $\\overrightarrow{AG} = \\dfrac{2}{3}\\overrightarrow{AM}$.',
          },
          {
            id: 'b9_d2_p4_q2_s4',
            content:
              'Thay $\\overrightarrow{AM} = \\dfrac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC})$ vào ta được $\\overrightarrow{AG} = \\dfrac{1}{3}\\overrightarrow{AB} + \\dfrac{1}{3}\\overrightarrow{AC}$.',
          },
        ],
        correctOrder: ['b9_d2_p4_q2_s1', 'b9_d2_p4_q2_s2', 'b9_d2_p4_q2_s3', 'b9_d2_p4_q2_s4'],
        explanation:
          'Biểu diễn trung tuyến $\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AB}+\\overrightarrow{AC})$ -> Nêu tính chất trọng tâm $AG = \\frac{2}{3}AM$ cùng hướng -> Viết $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AM}$ -> Thay thế được $\\frac{1}{3}\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AC}$.',
        points: 0.75,
      },
      {
        id: 'b9_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 9: Chứng minh hai trọng tâm trùng nhau (Bài 4.17 SBT trang 80)',
        prompt:
          'Cho tam giác $ABC$ và các điểm $M, N, P$ lần lượt thuộc các cạnh $BC, CA, AB$ sao cho $\\overrightarrow{BM} = k\\overrightarrow{BC},\\ \\overrightarrow{CN} = k\\overrightarrow{CA},\\ \\overrightarrow{AP} = k\\overrightarrow{AB}$. Sắp xếp các bước chứng minh hai tam giác $ABC$ và $MNP$ có cùng trọng tâm.',
        steps: [
          {
            id: 'b9_d2_p4_q3_s1',
            content:
              'Ta biết hai tam giác $ABC$ và $MNP$ có cùng trọng tâm khi và chỉ khi $\\overrightarrow{AM} + \\overrightarrow{BN} + \\overrightarrow{CP} = \\vec{0}$.',
          },
          {
            id: 'b9_d2_p4_q3_s2',
            content:
              'Theo quy tắc ba điểm: $\\overrightarrow{AM} + \\overrightarrow{BN} + \\overrightarrow{CP} = (\\overrightarrow{AB} + \\overrightarrow{BM}) + (\\overrightarrow{BC} + \\overrightarrow{CN}) + (\\overrightarrow{CA} + \\overrightarrow{AP})$.',
          },
          {
            id: 'b9_d2_p4_q3_s3',
            content:
              'Nhóm các số hạng và thay giả thiết: $(\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA}) + k(\\overrightarrow{BC} + \\overrightarrow{CA} + \\overrightarrow{AB})$.',
          },
          {
            id: 'b9_d2_p4_q3_s4',
            content:
              'Vì $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\overrightarrow{AA} = \\vec{0}$ nên tổng trên bằng $\\vec{0} + k\\vec{0} = \\vec{0}$, suy ra hai tam giác có cùng trọng tâm.',
          },
        ],
        correctOrder: ['b9_d2_p4_q3_s1', 'b9_d2_p4_q3_s2', 'b9_d2_p4_q3_s3', 'b9_d2_p4_q3_s4'],
        explanation:
          'Nêu điều kiện tương đương $\\overrightarrow{AM}+\\overrightarrow{BN}+\\overrightarrow{CP}=\\vec{0}$ -> Tách mỗi vectơ theo quy tắc 3 điểm -> Thay giả thiết với nhân tử $k$ -> Sử dụng $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CA}=\\vec{0}$ để kết luận.',
        points: 0.75,
      },
      {
        id: 'b9_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 9: Tìm tâm tỉ cự và tập hợp điểm (Bài 4.18 SBT trang 81)',
        prompt:
          'Cho đoạn thẳng $AB = 10$. Sắp xếp các bước tìm tập hợp các điểm $M$ thỏa mãn $|3\\overrightarrow{MA} + 2\\overrightarrow{MB}| = 15$.',
        steps: [
          {
            id: 'b9_d2_p4_q4_s1',
            content:
              'Gọi $I$ là điểm cố định trên đoạn $AB$ thỏa mãn $3\\overrightarrow{IA} + 2\\overrightarrow{IB} = \\vec{0}$ (khi đó $\\overrightarrow{AI} = \\dfrac{2}{5}\\overrightarrow{AB}$, điểm $I$ xác định duy nhất).',
          },
          {
            id: 'b9_d2_p4_q4_s2',
            content:
              'Chèn điểm $I$ vào biểu thức vectơ: $3\\overrightarrow{MA} + 2\\overrightarrow{MB} = 3(\\overrightarrow{MI} + \\overrightarrow{IA}) + 2(\\overrightarrow{MI} + \\overrightarrow{IB}) = 5\\overrightarrow{MI} + (3\\overrightarrow{IA} + 2\\overrightarrow{IB}) = 5\\overrightarrow{MI}$.',
          },
          {
            id: 'b9_d2_p4_q4_s3',
            content:
              'Thay vào đẳng thức độ dài đã cho: $|5\\overrightarrow{MI}| = 15 \\Leftrightarrow 5MI = 15 \\Leftrightarrow MI = 3$.',
          },
          {
            id: 'b9_d2_p4_q4_s4',
            content:
              'Kết luận: Tập hợp các điểm $M$ là đường tròn tâm $I$ cố định, bán kính $R = 3$.',
          },
        ],
        correctOrder: ['b9_d2_p4_q4_s1', 'b9_d2_p4_q4_s2', 'b9_d2_p4_q4_s3', 'b9_d2_p4_q4_s4'],
        explanation:
          'Chọn điểm tâm tỉ cự $I$ sao cho $3\\overrightarrow{IA}+2\\overrightarrow{IB}=\\vec{0}$ -> Thu gọn $3\\overrightarrow{MA}+2\\overrightarrow{MB} = 5\\overrightarrow{MI}$ -> Giải $|5\\overrightarrow{MI}|=15 \\Leftrightarrow MI=3$ -> Kết luận đường tròn $(I; 3)$.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 10: VECTƠ TRONG MẶT PHẲNG TỌA ĐỘ ====================
  'de-on-bai-10-1': {
    extraPart1: [
      {
        id: 'b10_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 10: Tọa độ của vectơ biểu diễn theo hai vectơ đơn vị (Ví dụ 1 SBT trang 82)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho vectơ $\\vec{u} = 4\\vec{i} - 7\\vec{j}$. Tọa độ của vectơ $\\vec{u}$ là:',
        options: [
          { key: 'A', content: '$\\vec{u} = (4; -7)$' },
          { key: 'B', content: '$\\vec{u} = (-7; 4)$' },
          { key: 'C', content: '$\\vec{u} = (4; 7)$' },
          { key: 'D', content: '$\\vec{u} = (-4; 7)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo định nghĩa tọa độ vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} \\Leftrightarrow \\vec{u} = (x; y)$. Với $\\vec{u} = 4\\vec{i} - 7\\vec{j}$ ta có $\\vec{u} = (4; -7)$ (Ví dụ 1 SBT trang 82).',
        pedagogicalTip: 'Hệ số của $\\vec{i}$ là hoành độ $x$, hệ số của $\\vec{j}$ là tung độ $y$.',
        points: 0.25,
      },
      {
        id: 'b10_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 10: Tọa độ trung điểm của đoạn thẳng (Bài 4.21 SBT trang 86)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(-2; 5)$ và $B(6; -1)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là:',
        options: [
          { key: 'A', content: '$I(2; 2)$' },
          { key: 'B', content: '$I(4; 4)$' },
          { key: 'C', content: '$I(4; -3)$' },
          { key: 'D', content: '$I(2; 3)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Công thức tọa độ trung điểm: $x_I = \\dfrac{x_A + x_B}{2} = \\dfrac{-2 + 6}{2} = 2$; $y_I = \\dfrac{y_A + y_B}{2} = \\dfrac{5 + (-1)}{2} = 2$. Vậy $I(2; 2)$ (Bài 4.21 SBT trang 86).',
        pedagogicalTip: 'Tọa độ trung điểm bằng trung bình cộng tọa độ hai đầu mút.',
        points: 0.25,
      },
      {
        id: 'b10_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 10: Tính độ dài đoạn thẳng bằng tọa độ (Bài 4.22 SBT trang 86)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, khoảng cách giữa hai điểm $M(1; -2)$ và $N(4; 2)$ bằng:',
        options: [
          { key: 'A', content: '$5$' },
          { key: 'B', content: '$25$' },
          { key: 'C', content: '$\\sqrt{7}$' },
          { key: 'D', content: '$7$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $\\overrightarrow{MN} = (4 - 1; 2 - (-2)) = (3; 4)$. Suy ra $MN = |\\overrightarrow{MN}| = \\sqrt{3^2 + 4^2} = 5$ (Bài 4.22 SBT trang 86).',
        pedagogicalTip: 'Công thức khoảng cách: $MN = \\sqrt{(x_N - x_M)^2 + (y_N - y_M)^2}$.',
        points: 0.25,
      },
      {
        id: 'b10_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 10: Tìm tham số để hai vectơ cùng phương bằng tọa độ (Bài 4.20 SBT trang 86)',
        prompt:
          'Cho hai vectơ $\\vec{a} = (2; -3)$ và $\\vec{b} = (-6; m)$. Giá trị của $m$ để hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương là:',
        options: [
          { key: 'A', content: '$m = 9$' },
          { key: 'B', content: '$m = -9$' },
          { key: 'C', content: '$m = 4$' },
          { key: 'D', content: '$m = -4$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Hai vectơ $\\vec{a} = (2; -3)$ và $\\vec{b} = (-6; m)$ cùng phương khi và chỉ khi $\\dfrac{-6}{2} = \\dfrac{m}{-3} \\Leftrightarrow m = (-3) \\cdot (-3) = 9$ (Bài 4.20 SBT trang 86).',
        pedagogicalTip: 'Điều kiện cùng phương của $\\vec{a}=(x_1;y_1)$ và $\\vec{b}=(x_2;y_2)$ là $x_1 y_2 - x_2 y_1 = 0$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b10_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 10: Tìm đỉnh thứ tư của hình bình hành bằng tọa độ (Ví dụ 4 SBT trang 85)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(1; 2),\\ B(3; 5)$ và $C(7; 1)$. Sắp xếp các bước tìm tọa độ đỉnh $D$ sao cho tứ giác $ABCD$ là hình bình hành.',
        steps: [
          {
            id: 'b10_d1_p4_q2_s1',
            content:
              'Gọi tọa độ điểm cần tìm là $D(x; y)$. Tính tọa độ vectơ $\\overrightarrow{AB} = (3 - 1; 5 - 2) = (2; 3)$.',
          },
          {
            id: 'b10_d1_p4_q2_s2',
            content:
              'Tính tọa độ vectơ $\\overrightarrow{DC}$ theo $x, y$: $\\overrightarrow{DC} = (7 - x; 1 - y)$.',
          },
          {
            id: 'b10_d1_p4_q2_s3',
            content:
              'Tứ giác $ABCD$ là hình bình hành khi và chỉ khi $\\overrightarrow{AB} = \\overrightarrow{DC} \\Leftrightarrow \\begin{cases} 7 - x = 2 \\\\ 1 - y = 3 \\end{cases}$.',
          },
          {
            id: 'b10_d1_p4_q2_s4',
            content:
              'Giải hệ phương trình ta được $x = 5,\\ y = -2$. Vậy tọa độ đỉnh $D$ là $D(5; -2)$.',
          },
        ],
        correctOrder: ['b10_d1_p4_q2_s1', 'b10_d1_p4_q2_s2', 'b10_d1_p4_q2_s3', 'b10_d1_p4_q2_s4'],
        explanation:
          'Gọi $D(x;y)$ và tính $\\overrightarrow{AB}=(2;3)$ -> Tính $\\overrightarrow{DC}=(7-x;1-y)$ -> Thiết lập $\\overrightarrow{AB}=\\overrightarrow{DC}$ -> Giải hệ tìm được $D(5;-2)$.',
        points: 0.75,
      },
      {
        id: 'b10_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 10: Tìm giao điểm của đường thẳng đi qua hai điểm với trục hoành (Bài 4.23 SBT trang 87)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(1; 3)$ và $B(5; -1)$. Sắp xếp các bước tìm tọa độ điểm $M$ thuộc trục hoành $Ox$ sao cho ba điểm $A, B, M$ thẳng hàng.',
        steps: [
          {
            id: 'b10_d1_p4_q3_s1',
            content:
              'Vì điểm $M$ thuộc trục hoành $Ox$ nên tung độ của $M$ bằng $0$, gọi tọa độ của $M$ là $M(x; 0)$.',
          },
          {
            id: 'b10_d1_p4_q3_s2',
            content:
              'Tính tọa độ hai vectơ $\\overrightarrow{AB} = (5 - 1; -1 - 3) = (4; -4)$ và $\\overrightarrow{AM} = (x - 1; -3)$.',
          },
          {
            id: 'b10_d1_p4_q3_s3',
            content:
              'Ba điểm $A, B, M$ thẳng hàng khi và chỉ khi hai vectơ $\\overrightarrow{AM}$ và $\\overrightarrow{AB}$ cùng phương, tức là $\\dfrac{x - 1}{4} = \\dfrac{-3}{-4}$.',
          },
          {
            id: 'b10_d1_p4_q3_s4',
            content:
              'Giải phương trình $x - 1 = 3 \\Leftrightarrow x = 4$. Vậy điểm cần tìm là $M(4; 0)$.',
          },
        ],
        correctOrder: ['b10_d1_p4_q3_s1', 'b10_d1_p4_q3_s2', 'b10_d1_p4_q3_s3', 'b10_d1_p4_q3_s4'],
        explanation:
          'Tham số hóa $M(x;0) \\in Ox$ -> Tính $\\overrightarrow{AB}=(4;-4)$ và $\\overrightarrow{AM}=(x-1;-3)$ -> Cho hai vectơ cùng phương -> Giải tìm $x = 4$, kết luận $M(4;0)$.',
        points: 0.75,
      },
      {
        id: 'b10_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 10: Phân tích một vectơ theo hai vectơ không cùng phương bằng tọa độ (Bài 4.24 SBT trang 87)',
        prompt:
          'Cho ba vectơ $\\vec{a} = (2; 1),\\ \\vec{b} = (1; -3)$ và $\\vec{c} = (7; 0)$. Sắp xếp các bước biểu diễn vectơ $\\vec{c}$ theo hai vectơ $\\vec{a}$ và $\\vec{b}$.',
        steps: [
          {
            id: 'b10_d1_p4_q4_s1',
            content:
              'Giả sử $\\vec{c} = m\\vec{a} + n\\vec{b}$ với $m, n \\in \\mathbb{R}$.',
          },
          {
            id: 'b10_d1_p4_q4_s2',
            content:
              'Tính tọa độ của $m\\vec{a} + n\\vec{b} = (2m + n;\\ m - 3n)$.',
          },
          {
            id: 'b10_d1_p4_q4_s3',
            content:
              'Đồng nhất tọa độ với $\\vec{c} = (7; 0)$ ta được hệ phương trình $\\begin{cases} 2m + n = 7 \\\\ m - 3n = 0 \\end{cases}$.',
          },
          {
            id: 'b10_d1_p4_q4_s4',
            content:
              'Giải hệ phương trình được $m = 3,\\ n = 1$. Vậy $\\vec{c} = 3\\vec{a} + \\vec{b}$.',
          },
        ],
        correctOrder: ['b10_d1_p4_q4_s1', 'b10_d1_p4_q4_s2', 'b10_d1_p4_q4_s3', 'b10_d1_p4_q4_s4'],
        explanation:
          'Đặt $\\vec{c} = m\\vec{a} + n\\vec{b}$ -> Viết tọa độ $(2m+n; m-3n)$ -> Lập hệ phương trình -> Giải ra $m=3, n=1$, kết luận $\\vec{c} = 3\\vec{a} + \\vec{b}$.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-10-2': {
    extraPart1: [
      {
        id: 'b10_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 10: Tìm tọa độ đỉnh tam giác khi biết trọng tâm (Bài 4.21 SBT trang 86)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 4),\\ B(-3; 2)$ và trọng tâm $G(1; 1)$. Tọa độ đỉnh $C$ là:',
        options: [
          { key: 'A', content: '$C(5; -3)$' },
          { key: 'B', content: '$C(3; -5)$' },
          { key: 'C', content: '$C(-1; 7)$' },
          { key: 'D', content: '$C(5; 3)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ công thức trọng tâm: $x_C = 3x_G - x_A - x_B = 3(1) - 1 - (-3) = 5$; $y_C = 3y_G - y_A - y_B = 3(1) - 4 - 2 = -3$. Vậy $C(5; -3)$ (Bài 4.21 SBT trang 86).',
        pedagogicalTip: 'Từ $x_G = \\dfrac{x_A+x_B+x_C}{3}$, suy ra $x_C = 3x_G - x_A - x_B$.',
        points: 0.25,
      },
      {
        id: 'b10_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 10: Tọa độ hình chiếu của điểm trên trục tọa độ (Lý thuyết SBT trang 83)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho điểm $M(5; -8)$. Gọi $H$ là hình chiếu vuông góc của $M$ lên trục tung $Oy$. Tọa độ của điểm $H$ là:',
        options: [
          { key: 'A', content: '$H(0; -8)$' },
          { key: 'B', content: '$H(5; 0)$' },
          { key: 'C', content: '$H(-5; -8)$' },
          { key: 'D', content: '$H(0; 8)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Hình chiếu vuông góc của điểm $M(x_0; y_0)$ lên trục tung $Oy$ có hoành độ bằng $0$ và giữ nguyên tung độ $y_0$, nên $H(0; -8)$.',
        pedagogicalTip: 'Chiếu lên $Ox$ thì $y = 0$; chiếu lên $Oy$ thì $x = 0$.',
        points: 0.25,
      },
      {
        id: 'b10_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 10: Độ dài của tổ hợp tuyến tính hai vectơ (Bài 4.19 SBT trang 86)',
        prompt:
          'Cho hai vectơ $\\vec{u} = (3; -1)$ và $\\vec{v} = (-1; 5)$. Độ dài của vectơ $\\vec{w} = 2\\vec{u} + \\vec{v}$ bằng:',
        options: [
          { key: 'A', content: '$\\sqrt{34}$' },
          { key: 'B', content: '$8$' },
          { key: 'C', content: '$\\sqrt{26}$' },
          { key: 'D', content: '$34$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $2\\vec{u} = (6; -2)$, suy ra $\\vec{w} = 2\\vec{u} + \\vec{v} = (6 - 1; -2 + 5) = (5; 3)$. Do đó $|\\vec{w}| = \\sqrt{5^2 + 3^2} = \\sqrt{34}$ (Bài 4.19 SBT trang 86).',
        pedagogicalTip: 'Tính tọa độ của vectơ tổng trước, sau đó mới áp dụng công thức độ dài $\\sqrt{x^2 + y^2}$.',
        points: 0.25,
      },
      {
        id: 'b10_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 10: Ứng dụng tọa độ theo dõi vị trí tàu trên radar (Bài 4.25 SBT trang 88)',
        prompt:
          'Trên màn hình radar hàng hải (đơn vị trên mỗi trục là hải lý), một tàu tuần tra xuất phát từ vị trí $A(2; 3)$ chuyển động thẳng đều. Sau mỗi giờ, vị trí của tàu dịch chuyển theo vectơ vận tốc $\\vec{v} = (4; 3)$. Sau $3$ giờ, tọa độ của tàu tuần tra là:',
        options: [
          { key: 'A', content: '$M(14; 12)$' },
          { key: 'B', content: '$M(6; 6)$' },
          { key: 'C', content: '$M(12; 9)$' },
          { key: 'D', content: '$M(10; 12)$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Sau $t = 3$ giờ, độ dịch chuyển của tàu là $\\overrightarrow{AM} = 3\\vec{v} = (12; 9)$. Suy ra tọa độ điểm $M$ là $x_M = 2 + 12 = 14$ và $y_M = 3 + 9 = 12$, tức $M(14; 12)$ (Bài 4.25 SBT trang 88).',
        pedagogicalTip: 'Vị trí chuyển động thẳng đều sau thời gian $t$: $\\overrightarrow{OM} = \\overrightarrow{OA} + t\\vec{v}$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b10_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 10: Tìm đỉnh của tam giác khi biết tọa độ ba trung điểm các cạnh (Bài 4.22 SBT trang 86)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $M(1; 2),\\ N(3; 4),\\ P(-1; 3)$ lần lượt là trung điểm của các cạnh $BC, CA, AB$. Sắp xếp các bước tìm tọa độ đỉnh $A$.',
        steps: [
          {
            id: 'b10_d2_p4_q2_s1',
            content:
              'Vì $M, N, P$ lần lượt là trung điểm của $BC, CA, AB$ nên $MN$ là đường trung bình của $\\triangle ABC$, suy ra tứ giác $APMN$ là hình bình hành.',
          },
          {
            id: 'b10_d2_p4_q2_s2',
            content:
              'Do đó hai vectơ $\\overrightarrow{PA}$ và $\\overrightarrow{MN}$ bằng nhau: $\\overrightarrow{PA} = \\overrightarrow{MN}$.',
          },
          {
            id: 'b10_d2_p4_q2_s3',
            content:
              'Gọi $A(x; y)$, ta có $\\overrightarrow{PA} = (x + 1; y - 3)$ và $\\overrightarrow{MN} = (3 - 1; 4 - 2) = (2; 2)$.',
          },
          {
            id: 'b10_d2_p4_q2_s4',
            content:
              'Từ $\\overrightarrow{PA} = \\overrightarrow{MN}$ suy ra $\\begin{cases} x + 1 = 2 \\\\ y - 3 = 2 \\end{cases} \\Leftrightarrow \\begin{cases} x = 1 \\\\ y = 5 \\end{cases}$, vậy $A(1; 5)$.',
          },
        ],
        correctOrder: ['b10_d2_p4_q2_s1', 'b10_d2_p4_q2_s2', 'b10_d2_p4_q2_s3', 'b10_d2_p4_q2_s4'],
        explanation:
          'Nhận xét $APMN$ là hình bình hành -> Viết $\\overrightarrow{PA} = \\overrightarrow{MN}$ -> Tính tọa độ $\\overrightarrow{PA}$ và $\\overrightarrow{MN}=(2;2)$ -> Giải hệ tìm $A(1;5)$.',
        points: 0.75,
      },
      {
        id: 'b10_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 10: Tìm điểm chia đoạn thẳng theo tỉ số cho trước bằng tọa độ (Bài 4.23 SBT trang 87)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(-1; 4)$ và $B(5; -2)$. Sắp xếp các bước tìm tọa độ điểm $M$ thỏa mãn $\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$.',
        steps: [
          {
            id: 'b10_d2_p4_q3_s1',
            content:
              'Gọi tọa độ điểm cần tìm là $M(x; y)$. Khi đó $\\overrightarrow{MA} = (-1 - x; 4 - y)$ và $\\overrightarrow{MB} = (5 - x; -2 - y)$.',
          },
          {
            id: 'b10_d2_p4_q3_s2',
            content:
              'Tính tọa độ vectơ vế trái: $\\overrightarrow{MA} + 2\\overrightarrow{MB} = (-1 - x + 2(5 - x);\\ 4 - y + 2(-2 - y)) = (9 - 3x;\\ -3y)$.',
          },
          {
            id: 'b10_d2_p4_q3_s3',
            content:
              'Cho $\\overrightarrow{MA} + 2\\overrightarrow{MB} = \\vec{0}$ ta được hệ phương trình $\\begin{cases} 9 - 3x = 0 \\\\ -3y = 0 \\end{cases}$.',
          },
          {
            id: 'b10_d2_p4_q3_s4',
            content:
              'Giải hệ phương trình được $x = 3,\\ y = 0$. Vậy điểm cần tìm là $M(3; 0)$.',
          },
        ],
        correctOrder: ['b10_d2_p4_q3_s1', 'b10_d2_p4_q3_s2', 'b10_d2_p4_q3_s3', 'b10_d2_p4_q3_s4'],
        explanation:
          'Gọi $M(x;y)$ và viết $\\overrightarrow{MA}, \\overrightarrow{MB}$ -> Tính $\\overrightarrow{MA}+2\\overrightarrow{MB} = (9-3x;-3y)$ -> Cho bằng $(0;0)$ -> Giải ra $M(3;0)$.',
        points: 0.75,
      },
      {
        id: 'b10_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 10: Tìm điểm trên trục tọa độ cách đều hai điểm cho trước (Bài 4.24 SBT trang 87)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho hai điểm $A(2; 1)$ và $B(4; 5)$. Sắp xếp các bước tìm tọa độ điểm $P$ thuộc trục tung $Oy$ sao cho $P$ cách đều hai điểm $A$ và $B$.',
        steps: [
          {
            id: 'b10_d2_p4_q4_s1',
            content:
              'Vì điểm $P$ thuộc trục tung $Oy$ nên hoành độ của $P$ bằng $0$, gọi tọa độ của $P$ là $P(0; y)$.',
          },
          {
            id: 'b10_d2_p4_q4_s2',
            content:
              'Tính bình phương khoảng cách: $PA^2 = (2 - 0)^2 + (1 - y)^2 = 4 + (y - 1)^2$ và $PB^2 = (4 - 0)^2 + (5 - y)^2 = 16 + (y - 5)^2$.',
          },
          {
            id: 'b10_d2_p4_q4_s3',
            content:
              'Điểm $P$ cách đều $A, B$ khi và chỉ khi $PA = PB \\Leftrightarrow PA^2 = PB^2 \\Leftrightarrow 4 + y^2 - 2y + 1 = 16 + y^2 - 10y + 25$.',
          },
          {
            id: 'b10_d2_p4_q4_s4',
            content:
              'Thu gọn phương trình: $8y = 36 \\Leftrightarrow y = \\dfrac{9}{2}$. Vậy điểm cần tìm là $P\\left(0; \\dfrac{9}{2}\\right)$.',
          },
        ],
        correctOrder: ['b10_d2_p4_q4_s1', 'b10_d2_p4_q4_s2', 'b10_d2_p4_q4_s3', 'b10_d2_p4_q4_s4'],
        explanation:
          'Tham số hóa $P(0;y) \\in Oy$ -> Tính $PA^2$ và $PB^2$ -> Thiết lập $PA^2 = PB^2$ -> Giải phương trình bậc nhất tìm $y = \\frac{9}{2}$.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 11: TÍCH VÔ HƯỚNG CỦA HAI VECTƠ ====================
  'de-on-bai-11-1': {
    extraPart1: [
      {
        id: 'b11_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 11: Góc giữa hai vectơ trong tam giác đều (Ví dụ 1 SBT trang 89)',
        prompt:
          'Cho tam giác đều $ABC$. Số đo của góc $(\\overrightarrow{AB}, \\overrightarrow{BC})$ bằng:',
        options: [
          { key: 'A', content: '$120^\\circ$' },
          { key: 'B', content: '$60^\\circ$' },
          { key: 'C', content: '$30^\\circ$' },
          { key: 'D', content: '$150^\\circ$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dựng $\\overrightarrow{BD} = \\overrightarrow{AB}$ (tia $BD$ là tia đối của tia $BA$). Khi đó $(\\overrightarrow{AB}, \\overrightarrow{BC}) = (\\overrightarrow{BD}, \\overrightarrow{BC}) = \\widehat{DBC} = 180^\\circ - \\widehat{ABC} = 180^\\circ - 60^\\circ = 120^\\circ$ (Ví dụ 1 SBT trang 89).',
        pedagogicalTip: 'Muốn xác định góc giữa hai vectơ, phải đưa chúng về **cùng điểm đầu**.',
        points: 0.25,
      },
      {
        id: 'b11_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 11: Biểu thức tọa độ của tích vô hướng (Bài 4.27 SBT trang 93)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\vec{a} = (3; -4)$ và $\\vec{b} = (2; 5)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:',
        options: [
          { key: 'A', content: '$-14$' },
          { key: 'B', content: '$26$' },
          { key: 'C', content: '$14$' },
          { key: 'D', content: '$-26$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo công thức tọa độ của tích vô hướng: $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 = 3 \\cdot 2 + (-4) \\cdot 5 = 6 - 20 = -14$ (Bài 4.27 SBT trang 93).',
        pedagogicalTip: 'Tích vô hướng của hai vectơ là một số thực: $\\vec{a}\\cdot\\vec{b} = x_1x_2 + y_1y_2$.',
        points: 0.25,
      },
      {
        id: 'b11_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 11: Điều kiện hai vectơ vuông góc bằng tọa độ (Bài 4.28 SBT trang 94)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho hai vectơ $\\vec{u} = (m; 3)$ và $\\vec{v} = (4; -2)$. Giá trị của tham số $m$ để $\\vec{u} \\perp \\vec{v}$ là:',
        options: [
          { key: 'A', content: '$m = \\dfrac{3}{2}$' },
          { key: 'B', content: '$m = -\\dfrac{3}{2}$' },
          { key: 'C', content: '$m = 6$' },
          { key: 'D', content: '$m = -6$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng $0$: $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow 4m + 3(-2) = 0 \\Leftrightarrow 4m = 6 \\Leftrightarrow m = \\dfrac{3}{2}$ (Bài 4.28 SBT trang 94).',
        pedagogicalTip: '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.',
        points: 0.25,
      },
      {
        id: 'b11_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 11: Ứng dụng tích vô hướng tính công của lực (Bài 4.32 SBT trang 95)',
        prompt:
          'Một người kéo một chiếc xe trượt trên mặt phẳng ngang đi được quãng đường $d = 15\\text{ m}$ bằng một lực kéo $\\vec{F}$ có độ lớn $40\\text{ N}$, hợp với hướng dịch chuyển một góc $60^\\circ$. Công $A$ của lực kéo $\\vec{F}$ trên đoạn đường đó bằng:',
        options: [
          { key: 'A', content: '$300\\text{ J}$' },
          { key: 'B', content: '$600\\text{ J}$' },
          { key: 'C', content: '$300\\sqrt{3}\\text{ J}$' },
          { key: 'D', content: '$200\\text{ J}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Công cơ học được tính bởi tích vô hướng: $A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| \\cdot |\\vec{d}| \\cdot \\cos 60^\\circ = 40 \\cdot 15 \\cdot \\dfrac{1}{2} = 300\\text{ J}$ (Bài 4.32 SBT trang 95).',
        pedagogicalTip: 'Công thức tính công của lực không đổi: $A = \\vec{F} \\cdot \\vec{d} = F \\cdot d \\cdot \\cos(\\vec{F}, \\vec{d})$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b11_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 11: Tính độ dài tổng vectơ nhờ bình phương vô hướng (Ví dụ 3 SBT trang 91)',
        prompt:
          'Cho hai vectơ $\\vec{a}, \\vec{b}$ có $|\\vec{a}| = 3,\\ |\\vec{b}| = 4$ và góc $(\\vec{a}, \\vec{b}) = 60^\\circ$. Sắp xếp các bước tính độ dài của vectơ $\\vec{u} = \\vec{a} + \\vec{b}$.',
        steps: [
          {
            id: 'b11_d1_p4_q2_s1',
            content:
              'Tính tích vô hướng của hai vectơ: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos 60^\\circ = 3 \\cdot 4 \\cdot \\dfrac{1}{2} = 6$.',
          },
          {
            id: 'b11_d1_p4_q2_s2',
            content:
              'Sử dụng công thức bình phương vô hướng: $|\\vec{a} + \\vec{b}|^2 = (\\vec{a} + \\vec{b})^2 = |\\vec{a}|^2 + 2\\vec{a}\\cdot\\vec{b} + |\\vec{b}|^2$.',
          },
          {
            id: 'b11_d1_p4_q2_s3',
            content:
              'Thay số vào biểu thức: $|\\vec{a} + \\vec{b}|^2 = 3^2 + 2 \\cdot 6 + 4^2 = 9 + 12 + 16 = 37$.',
          },
          {
            id: 'b11_d1_p4_q2_s4',
            content:
              'Lấy căn bậc hai hai vế ta được $|\\vec{u}| = |\\vec{a} + \\vec{b}| = \\sqrt{37}$.',
          },
        ],
        correctOrder: ['b11_d1_p4_q2_s1', 'b11_d1_p4_q2_s2', 'b11_d1_p4_q2_s3', 'b11_d1_p4_q2_s4'],
        explanation:
          'Tính $\\vec{a}\\cdot\\vec{b} = 6$ -> Khai triển bình phương vô hướng $|\\vec{a}+\\vec{b}|^2$ -> Thay số được $37$ -> Khai căn được $\\sqrt{37}$.',
        points: 0.75,
      },
      {
        id: 'b11_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 11: Chứng minh tam giác vuông và tính diện tích bằng tọa độ (Bài 4.29 SBT trang 94)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(1; 2),\\ B(4; 6)$ và $C(-3; 5)$. Sắp xếp các bước chứng minh tam giác $ABC$ vuông tại $A$ và tính diện tích của nó.',
        steps: [
          {
            id: 'b11_d1_p4_q3_s1',
            content:
              'Tính tọa độ hai vectơ cạnh xuất phát từ $A$: $\\overrightarrow{AB} = (3; 4)$ và $\\overrightarrow{AC} = (-4; 3)$.',
          },
          {
            id: 'b11_d1_p4_q3_s2',
            content:
              'Tính tích vô hướng: $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 3 \\cdot (-4) + 4 \\cdot 3 = -12 + 12 = 0$, suy ra $\\overrightarrow{AB} \\perp \\overrightarrow{AC}$ hay $\\triangle ABC$ vuông tại $A$.',
          },
          {
            id: 'b11_d1_p4_q3_s3',
            content:
              'Tính độ dài hai cạnh góc vuông: $AB = \\sqrt{3^2 + 4^2} = 5$ và $AC = \\sqrt{(-4)^2 + 3^2} = 5$.',
          },
          {
            id: 'b11_d1_p4_q3_s4',
            content:
              'Diện tích tam giác vuông $ABC$ là $S_{\\triangle ABC} = \\dfrac{1}{2} AB \\cdot AC = \\dfrac{1}{2} \\cdot 5 \\cdot 5 = 12{,}5$.',
          },
        ],
        correctOrder: ['b11_d1_p4_q3_s1', 'b11_d1_p4_q3_s2', 'b11_d1_p4_q3_s3', 'b11_d1_p4_q3_s4'],
        explanation:
          'Tính $\\overrightarrow{AB}=(3;4), \\overrightarrow{AC}=(-4;3)$ -> Kiểm tra $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=0$ suy ra vuông tại $A$ -> Tính $AB=5, AC=5$ -> Tính diện tích $S = 12{,}5$.',
        points: 0.75,
      },
      {
        id: 'b11_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 11: Tìm chân đường cao của tam giác bằng tích vô hướng (Bài 4.30 SBT trang 95)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ với $A(2; 4),\\ B(0; 0)$ và $C(6; 0)$. Sắp xếp các bước tìm tọa độ chân đường cao $H$ kẻ từ $A$ xuống cạnh $BC$.',
        steps: [
          {
            id: 'b11_d1_p4_q4_s1',
            content:
              'Gọi $H(x; y)$ là chân đường cao kẻ từ $A$. Khi đó $\\overrightarrow{BH} = (x; y),\\ \\overrightarrow{BC} = (6; 0)$ và $\\overrightarrow{AH} = (x - 2; y - 4)$.',
          },
          {
            id: 'b11_d1_p4_q4_s2',
            content:
              'Vì $H$ thuộc đường thẳng $BC$ nên $\\overrightarrow{BH}$ và $\\overrightarrow{BC}$ cùng phương, suy ra $6y - 0x = 0 \\Leftrightarrow y = 0$.',
          },
          {
            id: 'b11_d1_p4_q4_s3',
            content:
              'Vì $AH \\perp BC$ nên $\\overrightarrow{AH} \\cdot \\overrightarrow{BC} = 0 \\Leftrightarrow 6(x - 2) + 0(y - 4) = 0$.',
          },
          {
            id: 'b11_d1_p4_q4_s4',
            content:
              'Giải phương trình được $x = 2$, kết hợp với $y = 0$ suy ra tọa độ chân đường cao là $H(2; 0)$.',
          },
        ],
        correctOrder: ['b11_d1_p4_q4_s1', 'b11_d1_p4_q4_s2', 'b11_d1_p4_q4_s3', 'b11_d1_p4_q4_s4'],
        explanation:
          'Gọi $H(x;y)$ và viết $\\overrightarrow{BH}, \\overrightarrow{BC}, \\overrightarrow{AH}$ -> Điều kiện $B, H, C$ thẳng hàng cho $y=0$ -> Điều kiện $\\overrightarrow{AH}\\cdot\\overrightarrow{BC}=0$ cho $x=2$ -> Kết luận $H(2;0)$.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-11-2': {
    extraPart1: [
      {
        id: 'b11_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 11: Tính góc giữa hai vectơ bằng biểu thức tọa độ (Ví dụ 4 SBT trang 92)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, góc giữa hai vectơ $\\vec{u} = (1; 2)$ và $\\vec{v} = (-1; 3)$ bằng:',
        options: [
          { key: 'A', content: '$45^\\circ$' },
          { key: 'B', content: '$60^\\circ$' },
          { key: 'C', content: '$30^\\circ$' },
          { key: 'D', content: '$135^\\circ$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $\\cos(\\vec{u}, \\vec{v}) = \\dfrac{1(-1) + 2 \\cdot 3}{\\sqrt{1^2 + 2^2} \\cdot \\sqrt{(-1)^2 + 3^2}} = \\dfrac{5}{\\sqrt{5} \\cdot \\sqrt{10}} = \\dfrac{5}{5\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$. Suy ra $(\\vec{u}, \\vec{v}) = 45^\\circ$ (Ví dụ 4 SBT trang 92).',
        pedagogicalTip: 'Công thức cosin góc: $\\cos(\\vec{u},\\vec{v}) = \\dfrac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}|\\cdot|\\vec{v}|}$.',
        points: 0.25,
      },
      {
        id: 'b11_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 11: Tích vô hướng trong tam giác vuông (Bài 4.26 SBT trang 93)',
        prompt:
          'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3,\\ AC = 4$. Tích vô hướng $\\overrightarrow{BA} \\cdot \\overrightarrow{BC}$ bằng:',
        options: [
          { key: 'A', content: '$9$' },
          { key: 'B', content: '$12$' },
          { key: 'C', content: '$15$' },
          { key: 'D', content: '$16$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tách $\\overrightarrow{BC} = \\overrightarrow{BA} + \\overrightarrow{AC}$. Khi đó $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = \\overrightarrow{BA} \\cdot (\\overrightarrow{BA} + \\overrightarrow{AC}) = \\overrightarrow{BA}^2 + \\overrightarrow{BA} \\cdot \\overrightarrow{AC} = AB^2 + 0 = 3^2 = 9$ (vì $\\overrightarrow{BA} \\perp \\overrightarrow{AC}$) (Bài 4.26 SBT trang 93).',
        pedagogicalTip: 'Kĩ thuật tách vectơ cạnh huyền thành tổng hai vectơ cạnh góc vuông giúp tính tích vô hướng không cần tính $\\cos B$.',
        points: 0.25,
      },
      {
        id: 'b11_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 11: Định lí cosin suy ra từ bình phương vô hướng (Bài 4.27 SBT trang 93)',
        prompt:
          'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ thỏa mãn $|\\vec{a}| = 2,\\ |\\vec{b}| = 3$ và $|\\vec{a} - \\vec{b}| = \\sqrt{7}$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$6$' },
          { key: 'C', content: '$-3$' },
          { key: 'D', content: '$\\dfrac{3}{2}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $|\\vec{a} - \\vec{b}|^2 = |\\vec{a}|^2 - 2\\vec{a}\\cdot\\vec{b} + |\\vec{b}|^2 \\Leftrightarrow 7 = 2^2 - 2\\vec{a}\\cdot\\vec{b} + 3^2 \\Leftrightarrow 7 = 13 - 2\\vec{a}\\cdot\\vec{b} \\Leftrightarrow \\vec{a}\\cdot\\vec{b} = 3$.',
        pedagogicalTip: 'Từ $|\\vec{a}-\\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 - 2\\vec{a}\\cdot\\vec{b}$, rút được $\\vec{a}\\cdot\\vec{b} = \\dfrac{|\\vec{a}|^2+|\\vec{b}|^2-|\\vec{a}-\\vec{b}|^2}{2}$.',
        points: 0.25,
      },
      {
        id: 'b11_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 11: Điều kiện hai đường thẳng vuông góc qua tích vô hướng (Bài 4.31 SBT trang 95)',
        prompt:
          'Cho hình vuông $ABCD$ cạnh $a$. Gọi $M$ là trung điểm của $AB$, $N$ là trung điểm của $BC$. Giá trị của tích vô hướng $\\overrightarrow{DM} \\cdot \\overrightarrow{AN}$ bằng:',
        options: [
          { key: 'A', content: '$0$' },
          { key: 'B', content: '$\\dfrac{a^2}{2}$' },
          { key: 'C', content: '$a^2$' },
          { key: 'D', content: '$-\\dfrac{a^2}{2}$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Biểu diễn theo hai vectơ vuông góc $\\overrightarrow{AB}, \\overrightarrow{AD}$: $\\overrightarrow{DM} = \\overrightarrow{AM} - \\overrightarrow{AD} = \\dfrac{1}{2}\\overrightarrow{AB} - \\overrightarrow{AD}$ và $\\overrightarrow{AN} = \\overrightarrow{AB} + \\dfrac{1}{2}\\overrightarrow{AD}$. Nhân vô hướng: $\\overrightarrow{DM}\\cdot\\overrightarrow{AN} = \\dfrac{1}{2}AB^2 - \\dfrac{1}{2}AD^2 = 0$ (Bài 4.31 SBT trang 95).',
        pedagogicalTip: 'Chọn hai vectơ cạnh vuông góc xuất phát từ một đỉnh làm cơ sở để tính tích vô hướng trong hình vuông/hình chữ nhật.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b11_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 11: Tìm tham số để hai vectơ tổ hợp vuông góc (Bài 4.28 SBT trang 94)',
        prompt:
          'Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau, biết $|\\vec{a}| = 2$ và $|\\vec{b}| = 3$. Sắp xếp các bước tìm số thực $k$ để hai vectơ $\\vec{u} = 3\\vec{a} + 2\\vec{b}$ và $\\vec{v} = \\vec{a} + k\\vec{b}$ vuông góc với nhau.',
        steps: [
          {
            id: 'b11_d2_p4_q2_s1',
            content:
              'Vì $\\vec{a} \\perp \\vec{b}$ nên $\\vec{a} \\cdot \\vec{b} = 0$, đồng thời $\\vec{a}^2 = |\\vec{a}|^2 = 4$ và $\\vec{b}^2 = |\\vec{b}|^2 = 9$.',
          },
          {
            id: 'b11_d2_p4_q2_s2',
            content:
              'Khai triển tích vô hướng: $\\vec{u} \\cdot \\vec{v} = (3\\vec{a} + 2\\vec{b}) \\cdot (\\vec{a} + k\\vec{b}) = 3\\vec{a}^2 + (3k + 2)\\vec{a}\\cdot\\vec{b} + 2k\\vec{b}^2$.',
          },
          {
            id: 'b11_d2_p4_q2_s3',
            content:
              'Thay các giá trị vào biểu thức: $\\vec{u} \\cdot \\vec{v} = 3 \\cdot 4 + (3k + 2) \\cdot 0 + 2k \\cdot 9 = 12 + 18k$.',
          },
          {
            id: 'b11_d2_p4_q2_s4',
            content:
              'Để $\\vec{u} \\perp \\vec{v}$ thì $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow 12 + 18k = 0 \\Leftrightarrow k = -\\dfrac{2}{3}$.',
          },
        ],
        correctOrder: ['b11_d2_p4_q2_s1', 'b11_d2_p4_q2_s2', 'b11_d2_p4_q2_s3', 'b11_d2_p4_q2_s4'],
        explanation:
          'Từ giả thiết có $\\vec{a}\\cdot\\vec{b}=0, \\vec{a}^2=4, \\vec{b}^2=9$ -> Khai triển $\\vec{u}\\cdot\\vec{v}$ -> Thay số được $12+18k$ -> Giải $12+18k=0 \\Leftrightarrow k = -\\frac{2}{3}$.',
        points: 0.75,
      },
      {
        id: 'b11_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 11: Tìm trực tâm của tam giác trong mặt phẳng tọa độ (Bài 4.30 SBT trang 95)',
        prompt:
          'Trong mặt phẳng tọa độ $Oxy$, cho tam giác $ABC$ có $A(1; 3),\\ B(-2; 0)$ và $C(4; 0)$. Sắp xếp các bước tìm tọa độ trực tâm $H$ của tam giác $ABC$.',
        steps: [
          {
            id: 'b11_d2_p4_q3_s1',
            content:
              'Gọi trực tâm là $H(x; y)$. Tính tọa độ các vectơ: $\\overrightarrow{BC} = (6; 0),\\ \\overrightarrow{AC} = (3; -3)$ và $\\overrightarrow{AH} = (x - 1; y - 3),\\ \\overrightarrow{BH} = (x + 2; y)$.',
          },
          {
            id: 'b11_d2_p4_q3_s2',
            content:
              'Điểm $H$ là trực tâm của $\\triangle ABC$ khi và chỉ khi $\\begin{cases} AH \\perp BC \\\\ BH \\perp AC \\end{cases} \\Leftrightarrow \\begin{cases} \\overrightarrow{AH} \\cdot \\overrightarrow{BC} = 0 \\\\ \\overrightarrow{BH} \\cdot \\overrightarrow{AC} = 0 \\end{cases}$.',
          },
          {
            id: 'b11_d2_p4_q3_s3',
            content:
              'Viết hệ phương trình tọa độ: $\\begin{cases} 6(x - 1) + 0(y - 3) = 0 \\\\ 3(x + 2) - 3y = 0 \\end{cases}$.',
          },
          {
            id: 'b11_d2_p4_q3_s4',
            content:
              'Giải hệ phương trình được $x = 1$ và $y = 3$. Vậy trực tâm của tam giác là $H(1; 3)$ (trùng với đỉnh góc vuông $A$).',
          },
        ],
        correctOrder: ['b11_d2_p4_q3_s1', 'b11_d2_p4_q3_s2', 'b11_d2_p4_q3_s3', 'b11_d2_p4_q3_s4'],
        explanation:
          'Gọi $H(x;y)$ và tính các vectơ -> Nêu điều kiện trực tâm $AH \\perp BC, BH \\perp AC$ -> Lập hệ phương trình tích vô hướng -> Giải hệ tìm được $H(1;3)$.',
        points: 0.75,
      },
      {
        id: 'b11_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 11: Chứng minh công thức đường trung tuyến bằng tích vô hướng (Bài 4.31 SBT trang 95)',
        prompt:
          'Cho tam giác $ABC$ có $BC = a,\\ CA = b,\\ AB = c$ và $M$ là trung điểm cạnh $BC$. Sắp xếp các bước dùng tích vô hướng để chứng minh công thức độ dài đường trung tuyến $AM^2 = \\dfrac{b^2 + c^2}{2} - \\dfrac{a^2}{4}$.',
        steps: [
          {
            id: 'b11_d2_p4_q4_s1',
            content:
              'Vì $M$ là trung điểm của $BC$ nên $\\overrightarrow{AM} = \\dfrac{1}{2}(\\overrightarrow{AB} + \\overrightarrow{AC})$.',
          },
          {
            id: 'b11_d2_p4_q4_s2',
            content:
              'Bình phương vô hướng hai vế: $AM^2 = \\overrightarrow{AM}^2 = \\dfrac{1}{4}(\\overrightarrow{AB}^2 + \\overrightarrow{AC}^2 + 2\\overrightarrow{AB}\\cdot\\overrightarrow{AC}) = \\dfrac{1}{4}(c^2 + b^2 + 2\\overrightarrow{AB}\\cdot\\overrightarrow{AC})$.',
          },
          {
            id: 'b11_d2_p4_q4_s3',
            content:
              'Mặt khác, từ $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$ bình phương hai vế ta có $a^2 = b^2 + c^2 - 2\\overrightarrow{AB}\\cdot\\overrightarrow{AC} \\Leftrightarrow 2\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = b^2 + c^2 - a^2$.',
          },
          {
            id: 'b11_d2_p4_q4_s4',
            content:
              'Thay $2\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = b^2 + c^2 - a^2$ vào biểu thức của $AM^2$ ta được $AM^2 = \\dfrac{1}{4}(2b^2 + 2c^2 - a^2) = \\dfrac{b^2 + c^2}{2} - \\dfrac{a^2}{4}$.',
          },
        ],
        correctOrder: ['b11_d2_p4_q4_s1', 'b11_d2_p4_q4_s2', 'b11_d2_p4_q4_s3', 'b11_d2_p4_q4_s4'],
        explanation:
          'Viết hệ thức trung điểm $\\overrightarrow{AM} = \\frac{1}{2}(\\overrightarrow{AB}+\\overrightarrow{AC})$ -> Bình phương vô hướng $AM^2$ -> Biểu diễn $2\\overrightarrow{AB}\\cdot\\overrightarrow{AC} = b^2+c^2-a^2$ từ $\\overrightarrow{BC} = \\overrightarrow{AC}-\\overrightarrow{AB}$ -> Thay thế thu gọn.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 12: SỐ GẦN ĐÚNG VÀ SAI SỐ ====================
  'de-on-bai-12-1': {
    extraPart1: [
      {
        id: 'b12_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 12: Quy tròn số nguyên đến hàng nghìn (Ví dụ 3 SBT trang 103)',
        prompt:
          'Quy tròn số $a = 1\\,547\\,620$ đến hàng nghìn, ta được số quy tròn là:',
        options: [
          { key: 'A', content: '$1\\,548\\,000$' },
          { key: 'B', content: '$1\\,547\\,000$' },
          { key: 'C', content: '$1\\,550\\,000$' },
          { key: 'D', content: '$1\\,547\\,600$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Chữ số hàng nghìn là $7$, chữ số ngay sau nó (hàng trăm) là $6 \\ge 5$ nên ta cộng thêm $1$ vào hàng nghìn và thay các chữ số phía sau bằng $0$, được $1\\,548\\,000$ (Ví dụ 3 SBT trang 103).',
        pedagogicalTip: 'Nếu chữ số ngay sau hàng quy tròn lớn hơn hoặc bằng $5$ thì tăng chữ số hàng quy tròn thêm $1$ đơn vị.',
        points: 0.25,
      },
      {
        id: 'b12_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 12: Khoảng chứa số đúng từ ký hiệu a ± d (Bài 5.1 SBT trang 104)',
        prompt:
          'Độ dài một cây cầu được ghi là $\\bar{l} = 245{,}6\\text{ m} \\pm 0{,}2\\text{ m}$. Điều đó có nghĩa là độ dài đúng $\\bar{l}$ của cây cầu thuộc đoạn nào sau đây?',
        options: [
          { key: 'A', content: '$[245{,}4;\\ 245{,}8]$' },
          { key: 'B', content: '$[245{,}5;\\ 245{,}7]$' },
          { key: 'C', content: '$[245{,}0;\\ 246{,}0]$' },
          { key: 'D', content: '$[245{,}6;\\ 245{,}8]$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ký hiệu $\\bar{a} = a \\pm d$ có nghĩa là $a - d \\le \\bar{a} \\le a + d$. Với $a = 245{,}6$ và $d = 0{,}2$, ta có $245{,}4 \\le \\bar{l} \\le 245{,}8$ (Bài 5.1 SBT trang 104).',
        pedagogicalTip: '$\\bar{a} = a \\pm d \\Leftrightarrow \\bar{a} \\in [a - d;\\ a + d]$.',
        points: 0.25,
      },
      {
        id: 'b12_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 12: Đánh giá sai số tương đối của phép đo (Ví dụ 2 SBT trang 103)',
        prompt:
          'Một phép cân khối lượng cho kết quả $\\bar{m} = 50\\text{ g} \\pm 0{,}5\\text{ g}$. Sai số tương đối của số gần đúng $m = 50\\text{ g}$ không vượt quá:',
        options: [
          { key: 'A', content: '$1\\%$' },
          { key: 'B', content: '$0{,}5\\%$' },
          { key: 'C', content: '$2\\%$' },
          { key: 'D', content: '$0{,}1\\%$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo công thức đánh giá sai số tương đối: $\\delta_m \\le \\dfrac{d}{|m|} = \\dfrac{0{,}5}{50} = 0{,}01 = 1\\%$ (Ví dụ 2 SBT trang 103).',
        pedagogicalTip: 'Sai số tương đối được ước lượng bởi tỉ số $\\dfrac{d}{|a|}$.',
        points: 0.25,
      },
      {
        id: 'b12_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 12: Quy tròn số gần đúng theo độ chính xác d (Bài 5.3 SBT trang 105)',
        prompt:
          'Cho số gần đúng $a = 48\\,372$ với độ chính xác $d = 300$. Số quy tròn của $a$ là:',
        options: [
          { key: 'A', content: '$48\\,000$' },
          { key: 'B', content: '$48\\,400$' },
          { key: 'C', content: '$48\\,370$' },
          { key: 'D', content: '$50\\,000$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì độ chính xác $d = 300$ có hàng lớn nhất là hàng trăm nên ta quy tròn $a = 48\\,372$ đến hàng nghìn (gấp 10 lần hàng trăm). Chữ số hàng trăm là $3 < 5$ nên số quy tròn là $48\\,000$ (Bài 5.3 SBT trang 105).',
        pedagogicalTip: 'Độ chính xác $d$ ở hàng trăm thì quy tròn số gần đúng $a$ đến hàng nghìn.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b12_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 12: Quy trình làm tròn số thập phân theo độ chính xác d (Ví dụ 4 SBT trang 104)',
        prompt:
          'Cho số gần đúng $a = 12{,}4783$ với độ chính xác $d = 0{,}004$. Sắp xếp các bước tìm số quy tròn của $a$ và ước lượng độ chính xác của số quy tròn.',
        steps: [
          {
            id: 'b12_d1_p4_q2_s1',
            content:
              'Xác định hàng lớn nhất khác $0$ của độ chính xác $d = 0{,}004$ là hàng phần nghìn.',
          },
          {
            id: 'b12_d1_p4_q2_s2',
            content:
              'Theo quy tắc, ta phải quy tròn số $a$ đến hàng phần trăm (hàng đứng ngay trước hàng phần nghìn).',
          },
          {
            id: 'b12_d1_p4_q2_s3',
            content:
              'Trong số $12{,}4783$, chữ số hàng phần trăm là $7$, chữ số đứng ngay sau nó là $8 \\ge 5$ nên số quy tròn là $a\' = 12{,}48$.',
          },
          {
            id: 'b12_d1_p4_q2_s4',
            content:
              'Sai số tuyệt đối của số quy tròn: $|\\bar{a} - a\'| \\le |\\bar{a} - a| + |a - a\'| \\le 0{,}004 + 0{,}0017 = 0{,}0057$.',
          },
        ],
        correctOrder: ['b12_d1_p4_q2_s1', 'b12_d1_p4_q2_s2', 'b12_d1_p4_q2_s3', 'b12_d1_p4_q2_s4'],
        explanation:
          'Xác định hàng của $d = 0{,}004$ (phần nghìn) -> Chọn hàng quy tròn (phần trăm) -> Làm tròn $12{,}4783$ thành $12{,}48$ -> Đánh giá độ chính xác của số quy tròn.',
        points: 0.75,
      },
      {
        id: 'b12_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 12: So sánh chất lượng hai phép đo qua sai số tương đối (Bài 5.4 SBT trang 105)',
        prompt:
          'Người thứ nhất đo chiều dài sân bóng được $\\bar{l}_1 = 100\\text{ m} \\pm 0{,}2\\text{ m}$. Người thứ hai đo chiều dài cây bút được $\\bar{l}_2 = 15\\text{ cm} \\pm 0{,}1\\text{ cm}$. Sắp xếp các bước so sánh xem phép đo nào chính xác hơn.',
        steps: [
          {
            id: 'b12_d1_p4_q3_s1',
            content:
              'Tính ước lượng sai số tương đối của phép đo thứ nhất: $\\delta_1 \\le \\dfrac{d_1}{l_1} = \\dfrac{0{,}2}{100} = 0{,}002 = 0{,}2\\%$.',
          },
          {
            id: 'b12_d1_p4_q3_s2',
            content:
              'Tính ước lượng sai số tương đối của phép đo thứ hai: $\\delta_2 \\le \\dfrac{d_2}{l_2} = \\dfrac{0{,}1}{15} \\approx 0{,}0067 = 0{,}67\\%$.',
          },
          {
            id: 'b12_d1_p4_q3_s3',
            content:
              'So sánh hai sai số tương đối: $0{,}2\\% < 0{,}67\\%$.',
          },
          {
            id: 'b12_d1_p4_q3_s4',
            content:
              'Kết luận: Phép đo chiều dài sân bóng của người thứ nhất có chất lượng chính xác hơn phép đo của người thứ hai.',
          },
        ],
        correctOrder: ['b12_d1_p4_q3_s1', 'b12_d1_p4_q3_s2', 'b12_d1_p4_q3_s3', 'b12_d1_p4_q3_s4'],
        explanation:
          'Tính sai số tương đối tối đa $\\delta_1 \\le 0{,}2\\%$ -> Tính $\\delta_2 \\le 0{,}67\\%$ -> So sánh $0{,}2\\% < 0{,}67\\%$ -> Kết luận phép đo có sai số tương đối nhỏ hơn thì chính xác hơn.',
        points: 0.75,
      },
      {
        id: 'b12_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 12: Ước lượng sai số diện tích hình chữ nhật thực tế (Bài 5.5 SBT trang 105)',
        prompt:
          'Một tấm kính hình chữ nhật có chiều dài $\\bar{x} = 2{,}0\\text{ m} \\pm 0{,}01\\text{ m}$ và chiều rộng $\\bar{y} = 1{,}0\\text{ m} \\pm 0{,}01\\text{ m}$. Sắp xếp các bước tìm diện tích gần đúng $S$ và độ chính xác $d$ của diện tích.',
        steps: [
          {
            id: 'b12_d1_p4_q4_s1',
            content:
              'Diện tích gần đúng của tấm kính là $S = 2{,}0 \\cdot 1{,}0 = 2{,}0\\text{ m}^2$.',
          },
          {
            id: 'b12_d1_p4_q4_s2',
            content:
              'Vì $1{,}99 \\le \\bar{x} \\le 2{,}01$ và $0{,}99 \\le \\bar{y} \\le 1{,}01$ nên diện tích đúng $\\bar{S} = \\bar{x}\\bar{y}$ thỏa mãn $1{,}99 \\cdot 0{,}99 \\le \\bar{S} \\le 2{,}01 \\cdot 1{,}01$.',
          },
          {
            id: 'b12_d1_p4_q4_s3',
            content:
              'Tính hai cận: $1{,}9701 \\le \\bar{S} \\le 2{,}0301 \\Leftrightarrow -0{,}0299 \\le \\bar{S} - 2{,}0 \\le 0{,}0301$.',
          },
          {
            id: 'b12_d1_p4_q4_s4',
            content:
              'Suy ra $|\\bar{S} - 2{,}0| \\le 0{,}0301$, vậy độ chính xác của diện tích gần đúng là $d = 0{,}0301\\text{ m}^2$.',
          },
        ],
        correctOrder: ['b12_d1_p4_q4_s1', 'b12_d1_p4_q4_s2', 'b12_d1_p4_q4_s3', 'b12_d1_p4_q4_s4'],
        explanation:
          'Tính diện tích gần đúng $S = 2{,}0$ -> Chặn khoảng của $\\bar{S} = \\bar{x}\\bar{y}$ -> Trừ $2{,}0$ để chặn hiệu $\\bar{S}-2{,}0$ -> Suy ra độ chính xác $d = 0{,}0301\\text{ m}^2$.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-12-2': {
    extraPart1: [
      {
        id: 'b12_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 12: Đánh giá sai số tuyệt đối khi lấy giá trị gần đúng (Ví dụ 1 SBT trang 102)',
        prompt:
          'Dùng phân số $a = 0{,}43$ làm giá trị gần đúng cho số đúng $\\bar{a} = \\dfrac{3}{7} = 0{,}428571...$ Khi đó sai số tuyệt đối $\\Delta_a$ có thể đánh giá không vượt quá:',
        options: [
          { key: 'A', content: '$0{,}0015$' },
          { key: 'B', content: '$0{,}001$' },
          { key: 'C', content: '$0{,}0005$' },
          { key: 'D', content: '$0{,}0001$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $0{,}4285 < \\dfrac{3}{7} < 0{,}4286$ nên $\\Delta_a = |0{,}43 - \\dfrac{3}{7}| < 0{,}43 - 0{,}4285 = 0{,}0015$ (Ví dụ 1 SBT trang 102).',
        pedagogicalTip: 'Chặn số đúng $\\bar{a}$ bởi hai số thập phân hữu hạn để ước lượng cận trên của $|a - \\bar{a}|$.',
        points: 0.25,
      },
      {
        id: 'b12_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 12: Quy tròn số thập phân đến hàng phần nghìn (Bài 5.2 SBT trang 105)',
        prompt:
          'Quy tròn số $\\sqrt{5} \\approx 2{,}2360679...$ đến hàng phần nghìn, ta được kết quả là:',
        options: [
          { key: 'A', content: '$2{,}236$' },
          { key: 'B', content: '$2{,}237$' },
          { key: 'C', content: '$2{,}24$' },
          { key: 'D', content: '$2{,}2361$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Chữ số hàng phần nghìn là $6$, chữ số đứng ngay sau nó (hàng phần chục nghìn) là $0 < 5$ nên giữ nguyên chữ số hàng phần nghìn và bỏ các chữ số phía sau, được $2{,}236$ (Bài 5.2 SBT trang 105).',
        pedagogicalTip: 'Hàng phần nghìn là chữ số thứ ba sau dấu phẩy thập phân.',
        points: 0.25,
      },
      {
        id: 'b12_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 12: Tìm độ chính xác d khi biết số gần đúng và sai số tương đối (Bài 5.4 SBT trang 105)',
        prompt:
          'Cho số gần đúng $a = 250$ có sai số tương đối không vượt quá $0{,}4\\%$. Độ chính xác $d$ của số gần đúng đó bằng:',
        options: [
          { key: 'A', content: '$1$' },
          { key: 'B', content: '$0{,}4$' },
          { key: 'C', content: '$10$' },
          { key: 'D', content: '$2{,}5$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Từ công thức $\\delta_a = \\dfrac{d}{|a|} \\Rightarrow d = |a| \\cdot \\delta_a = 250 \\cdot 0{,}004 = 1$ (Bài 5.4 SBT trang 105).',
        pedagogicalTip: '$d = |a| \\cdot \\delta_a$ (nhớ đổi phần trăm sang số thập phân trước khi nhân).',
        points: 0.25,
      },
      {
        id: 'b12_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 12: Quy tròn số gần đúng viết dưới dạng chuẩn a ± d (Bài 5.3 SBT trang 105)',
        prompt:
          'Cho $\\bar{a} = 3{,}14159 \\pm 0{,}002$. Số quy tròn của số gần đúng $3{,}14159$ là:',
        options: [
          { key: 'A', content: '$3{,}14$' },
          { key: 'B', content: '$3{,}142$' },
          { key: 'C', content: '$3{,}1$' },
          { key: 'D', content: '$3{,}1416$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Độ chính xác $d = 0{,}002$ có hàng lớn nhất là hàng phần nghìn, nên ta quy tròn $3{,}14159$ đến hàng phần trăm, được $3{,}14$ (Bài 5.3 SBT trang 105).',
        pedagogicalTip: 'Độ chính xác $d$ ở hàng phần nghìn $\\Rightarrow$ quy tròn $a$ đến hàng phần trăm.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b12_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 12: Ước lượng sai số tuyệt đối khi làm tròn căn thức (Bài 5.2 SBT trang 105)',
        prompt:
          'Biết $\\sqrt{10} = 3{,}16227766...$ Lấy giá trị gần đúng của $\\sqrt{10}$ quy tròn đến hàng phần trăm là $a$. Sắp xếp các bước tìm $a$ và ước lượng độ chính xác $d$.',
        steps: [
          {
            id: 'b12_d2_p4_q2_s1',
            content:
              'Trong số $3{,}16227766...$, chữ số hàng phần trăm là $6$, chữ số kế tiếp là $2 < 5$ nên số quy tròn đến hàng phần trăm là $a = 3{,}16$.',
          },
          {
            id: 'b12_d2_p4_q2_s2',
            content:
              'Ta chặn số đúng $\\bar{a} = \\sqrt{10}$ bởi hai số thập phân: $3{,}16 < \\sqrt{10} < 3{,}163$.',
          },
          {
            id: 'b12_d2_p4_q2_s3',
            content:
              'Suy ra sai số tuyệt đối $\\Delta_a = |\\sqrt{10} - 3{,}16| < 3{,}163 - 3{,}16 = 0{,}003$.',
          },
          {
            id: 'b12_d2_p4_q2_s4',
            content:
              'Vậy số gần đúng $a = 3{,}16$ có độ chính xác $d = 0{,}003$ (và sai số tuyệt đối không vượt quá nửa đơn vị hàng phần trăm là $0{,}005$).',
          },
        ],
        correctOrder: ['b12_d2_p4_q2_s1', 'b12_d2_p4_q2_s2', 'b12_d2_p4_q2_s3', 'b12_d2_p4_q2_s4'],
        explanation:
          'Quy tròn $\\sqrt{10}$ đến hàng phần trăm được $a = 3{,}16$ -> Chặn $3{,}16 < \\sqrt{10} < 3{,}163$ -> Suy ra $\\Delta_a < 0{,}003$ -> Kết luận độ chính xác.',
        points: 0.75,
      },
      {
        id: 'b12_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 12: Quy tròn dân số theo độ chính xác d (Bài 5.3 SBT trang 105)',
        prompt:
          'Dân số của một tỉnh được thống kê là $\\bar{N} = 2\\,364\\,815 \\pm 400$ (người). Sắp xếp các bước tìm số quy tròn của $2\\,364\\,815$ và ước lượng sai số tương đối của số gần đúng ban đầu.',
        steps: [
          {
            id: 'b12_d2_p4_q3_s1',
            content:
              'Độ chính xác $d = 400$ có hàng lớn nhất là hàng trăm.',
          },
          {
            id: 'b12_d2_p4_q3_s2',
            content:
              'Ta quy tròn số gần đúng $N = 2\\,364\\,815$ đến hàng nghìn (hàng đứng ngay trước hàng trăm).',
          },
          {
            id: 'b12_d2_p4_q3_s3',
            content:
              'Chữ số hàng nghìn là $4$, chữ số ngay sau nó là $8 \\ge 5$ nên số quy tròn là $2\\,365\\,000$ (người).',
          },
          {
            id: 'b12_d2_p4_q3_s4',
            content:
              'Sai số tương đối của số gần đúng ban đầu không vượt quá $\\dfrac{d}{N} = \\dfrac{400}{2\\,364\\,815} \\approx 0{,}017\\%$.',
          },
        ],
        correctOrder: ['b12_d2_p4_q3_s1', 'b12_d2_p4_q3_s2', 'b12_d2_p4_q3_s3', 'b12_d2_p4_q3_s4'],
        explanation:
          'Xác định hàng của $d = 400$ (hàng trăm) -> Chọn hàng quy tròn (hàng nghìn) -> Quy tròn thành $2\\,365\\,000$ -> Tính sai số tương đối $\\delta_N \\le \\frac{400}{2\\,364\\,815} \\approx 0{,}017\\%$.',
        points: 0.75,
      },
      {
        id: 'b12_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 12: Tính chu vi và độ chính xác của mảnh đất hình chữ nhật (Bài 5.5 SBT trang 105)',
        prompt:
          'Một mảnh đất hình chữ nhật có chiều dài $\\bar{a} = 25{,}4\\text{ m} \\pm 0{,}05\\text{ m}$ và chiều rộng $\\bar{b} = 12{,}6\\text{ m} \\pm 0{,}05\\text{ m}$. Sắp xếp các bước tìm chu vi $\\bar{P}$ dưới dạng chuẩn $P \\pm d$ và quy tròn kết quả.',
        steps: [
          {
            id: 'b12_d2_p4_q4_s1',
            content:
              'Chu vi gần đúng của mảnh đất là $P = 2(25{,}4 + 12{,}6) = 2 \\cdot 38{,}0 = 76{,}0\\text{ m}$.',
          },
          {
            id: 'b12_d2_p4_q4_s2',
            content:
              'Vì $|\\bar{a} - 25{,}4| \\le 0{,}05$ và $|\\bar{b} - 12{,}6| \\le 0{,}05$ nên $|\\bar{P} - 76{,}0| = 2|(\\bar{a} - 25{,}4) + (\\bar{b} - 12{,}6)| \\le 2(0{,}05 + 0{,}05) = 0{,}2\\text{ m}$.',
          },
          {
            id: 'b12_d2_p4_q4_s3',
            content:
              'Do đó chu vi mảnh đất được viết là $\\bar{P} = 76{,}0\\text{ m} \\pm 0{,}2\\text{ m}$ (độ chính xác $d = 0{,}2$ ở hàng phần chục).',
          },
          {
            id: 'b12_d2_p4_q4_s4',
            content:
              'Quy tròn $76{,}0$ đến hàng đơn vị (trước hàng phần chục) ta được chu vi quy tròn là $76\\text{ m}$.',
          },
        ],
        correctOrder: ['b12_d2_p4_q4_s1', 'b12_d2_p4_q4_s2', 'b12_d2_p4_q4_s3', 'b12_d2_p4_q4_s4'],
        explanation:
          'Tính chu vi gần đúng $P = 76{,}0\\text{ m}$ -> Đánh giá độ chính xác $d = 2(0{,}05+0{,}05) = 0{,}2\\text{ m}$ -> Viết $\\bar{P} = 76{,}0 \\pm 0{,}2$ -> Quy tròn đến hàng đơn vị được $76\\text{ m}$.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 13: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM ====================
  'de-on-bai-13-1': {
    extraPart1: [
      {
        id: 'b13_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 13: Tính số trung bình của mẫu số liệu (Ví dụ 1 SBT trang 107)',
        prompt:
          'Điểm kiểm tra môn Toán của một nhóm $6$ học sinh là: $6;\\ 7;\\ 8;\\ 8;\\ 9;\\ 10$. Số trung bình cộng $\\bar{x}$ của mẫu số liệu trên bằng:',
        options: [
          { key: 'A', content: '$8$' },
          { key: 'B', content: '$7{,}5$' },
          { key: 'C', content: '$8{,}5$' },
          { key: 'D', content: '$8{,}2$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Số trung bình cộng là $\\bar{x} = \\dfrac{6 + 7 + 8 + 8 + 9 + 10}{6} = \\dfrac{48}{6} = 8$ (Ví dụ 1 SBT trang 107).',
        pedagogicalTip: '$\\bar{x} = \\dfrac{x_1 + x_2 + \\dots + x_n}{n}$.',
        points: 0.25,
      },
      {
        id: 'b13_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 13: Tìm mốt của mẫu số liệu (Bài 5.6 SBT trang 109)',
        prompt:
          'Cỡ giày của $10$ học sinh nam trong lớp được ghi lại như sau: $39;\\ 40;\\ 41;\\ 40;\\ 42;\\ 39;\\ 40;\\ 41;\\ 40;\\ 43$. Mốt ($M_o$) của mẫu số liệu này là:',
        options: [
          { key: 'A', content: '$40$' },
          { key: 'B', content: '$39$' },
          { key: 'C', content: '$41$' },
          { key: 'D', content: '$4$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Giá trị $40$ xuất hiện nhiều lần nhất (tần số bằng $4$) nên mốt của mẫu số liệu là $M_o = 40$ (Bài 5.6 SBT trang 109).',
        pedagogicalTip: 'Mốt $M_o$ là **giá trị** có tần số lớn nhất, không phải là tần số của nó.',
        points: 0.25,
      },
      {
        id: 'b13_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 13: Tìm tứ phân vị thứ nhất Q1 (Ví dụ 3 SBT trang 108)',
        prompt:
          'Cho mẫu số liệu đã sắp xếp theo thứ tự không giảm gồm $7$ giá trị: $2;\\ 4;\\ 5;\\ 7;\\ 8;\\ 10;\\ 12$. Tứ phân vị thứ nhất $Q_1$ của mẫu số liệu bằng:',
        options: [
          { key: 'A', content: '$4$' },
          { key: 'B', content: '$4{,}5$' },
          { key: 'C', content: '$7$' },
          { key: 'D', content: '$10$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Mẫu có $n = 7$ (lẻ) nên trung vị là số thứ $4$: $Q_2 = 7$. Nửa dữ liệu bên trái $Q_2$ (không kể $Q_2$) là $2;\\ 4;\\ 5$, có trung vị là $Q_1 = 4$ (Ví dụ 3 SBT trang 108).',
        pedagogicalTip: 'Khi $n$ lẻ, bỏ qua giá trị chính giữa $Q_2$ khi tìm $Q_1$ (trung vị nửa trái) và $Q_3$ (trung vị nửa phải).',
        points: 0.25,
      },
      {
        id: 'b13_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 13: Lựa chọn số đặc trưng đo xu thế trung tâm phù hợp (Bài 5.9 SBT trang 110)',
        prompt:
          'Khi trong mẫu số liệu xuất hiện một vài giá trị **rất lớn hoặc rất nhỏ** (giá trị bất thường) so với đa số các giá trị còn lại, ta nên dùng số đặc trưng nào để đại diện cho xu thế trung tâm của mẫu?',
        options: [
          { key: 'A', content: 'Trung vị ($M_e$)' },
          { key: 'B', content: 'Số trung bình cộng ($\\bar{x}$)' },
          { key: 'C', content: 'Giá trị lớn nhất ($x_{\\max}$)' },
          { key: 'D', content: 'Tổng tất cả các giá trị' },
        ],
        correctAnswer: 'A',
        explanation:
          'Số trung bình $\\bar{x}$ rất nhạy cảm với các giá trị bất thường, trong khi trung vị $M_e$ không bị ảnh hưởng bởi các giá trị quá lớn hay quá nhỏ ở hai đầu dãy số liệu (Bài 5.9 SBT trang 110).',
        pedagogicalTip: 'Trung vị $M_e$ là đại diện tốt nhất khi mẫu số liệu có giá trị ngoại lệ (bất thường).',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b13_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 13: Tìm bộ tứ phân vị của mẫu số liệu có cỡ mẫu chẵn (Bài 5.7 SBT trang 110)',
        prompt:
          'Cho mẫu số liệu thống kê sản lượng lúa (tạ/sào) của $8$ hộ gia đình: $4;\\ 2;\\ 5;\\ 3;\\ 6;\\ 4;\\ 8;\\ 6$. Sắp xếp các bước tìm bộ tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu.',
        steps: [
          {
            id: 'b13_d1_p4_q2_s1',
            content:
              'Sắp xếp mẫu số liệu gồm $n = 8$ giá trị theo thứ tự không giảm: $2;\\ 3;\\ 4;\\ 4;\\ 5;\\ 6;\\ 6;\\ 8$.',
          },
          {
            id: 'b13_d1_p4_q2_s2',
            content:
              'Vì $n = 8$ là số chẵn nên trung vị $Q_2$ là trung bình cộng của hai giá trị đứng thứ $4$ và thứ $5$: $Q_2 = \\dfrac{4 + 5}{2} = 4{,}5$.',
          },
          {
            id: 'b13_d1_p4_q2_s3',
            content:
              'Nửa số liệu bên trái gồm $4$ giá trị $2;\\ 3;\\ 4;\\ 4$ có trung vị là $Q_1 = \\dfrac{3 + 4}{2} = 3{,}5$.',
          },
          {
            id: 'b13_d1_p4_q2_s4',
            content:
              'Nửa số liệu bên phải gồm $4$ giá trị $5;\\ 6;\\ 6;\\ 8$ có trung vị là $Q_3 = \\dfrac{6 + 6}{2} = 6$.',
          },
        ],
        correctOrder: ['b13_d1_p4_q2_s1', 'b13_d1_p4_q2_s2', 'b13_d1_p4_q2_s3', 'b13_d1_p4_q2_s4'],
        explanation:
          'Sắp xếp mẫu không giảm -> Tính $Q_2 = \\frac{x_4+x_5}{2} = 4{,}5$ -> Tính trung vị nửa trái $Q_1 = 3{,}5$ -> Tính trung vị nửa phải $Q_3 = 6$.',
        points: 0.75,
      },
      {
        id: 'b13_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 13: Tính số trung bình và trung vị từ bảng tần số (Bài 5.8 SBT trang 110)',
        prompt:
          'Số bàn thắng ghi được trong các trận đấu của một giải bóng đá được cho bởi bảng tần số: giá trị $x_i \\in \\{1; 2; 3; 4\\}$ với tần số tương ứng $n_i \\in \\{4; 8; 5; 3\\}$. Sắp xếp các bước tính số trung bình $\\bar{x}$ và trung vị $M_e$.',
        steps: [
          {
            id: 'b13_d1_p4_q3_s1',
            content:
              'Tính cỡ mẫu (tổng số trận đấu): $N = 4 + 8 + 5 + 3 = 20$.',
          },
          {
            id: 'b13_d1_p4_q3_s2',
            content:
              'Tính số trung bình cộng: $\\bar{x} = \\dfrac{1 \\cdot 4 + 2 \\cdot 8 + 3 \\cdot 5 + 4 \\cdot 3}{20} = \\dfrac{47}{20} = 2{,}35$.',
          },
          {
            id: 'b13_d1_p4_q3_s3',
            content:
              'Vì $N = 20$ chẵn nên trung vị là trung bình cộng của giá trị ở vị trí thứ $10$ và thứ $11$ khi sắp xếp không giảm.',
          },
          {
            id: 'b13_d1_p4_q3_s4',
            content:
              'Do $4$ giá trị đầu bằng $1$ và $8$ giá trị tiếp theo (từ thứ $5$ đến thứ $12$) bằng $2$ nên cả $x_{10} = 2$ và $x_{11} = 2$, suy ra $M_e = 2$.',
          },
        ],
        correctOrder: ['b13_d1_p4_q3_s1', 'b13_d1_p4_q3_s2', 'b13_d1_p4_q3_s3', 'b13_d1_p4_q3_s4'],
        explanation:
          'Tính cỡ mẫu $N=20$ -> Tính $\\bar{x} = \\frac{\\sum x_i n_i}{N} = 2{,}35$ -> Xác định vị trí trung vị thứ $10$ và $11$ -> Dùng tần số tích lũy suy ra $x_{10}=x_{11}=2 \\Rightarrow M_e = 2$.',
        points: 0.75,
      },
      {
        id: 'b13_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 13: Tìm giá trị còn thiếu trong bảng tần số khi biết số trung bình (Bài 5.10 SBT trang 111)',
        prompt:
          'Điểm thi của một nhóm học sinh gồm các điểm $7; 8; 9; 10$ với tần số lần lượt là $3; 5; x; 2$. Biết điểm trung bình của cả nhóm là $\\bar{x} = 8{,}4$. Sắp xếp các bước tìm tần số $x$.',
        steps: [
          {
            id: 'b13_d1_p4_q4_s1',
            content:
              'Tính tổng số học sinh của nhóm theo $x$: $N = 3 + 5 + x + 2 = 10 + x$ (với $x \\in \\mathbb{N}^*$).',
          },
          {
            id: 'b13_d1_p4_q4_s2',
            content:
              'Tính tổng số điểm của cả nhóm theo $x$: $S = 7 \\cdot 3 + 8 \\cdot 5 + 9 \\cdot x + 10 \\cdot 2 = 81 + 9x$.',
          },
          {
            id: 'b13_d1_p4_q4_s3',
            content:
              'Theo công thức số trung bình: $\\dfrac{81 + 9x}{10 + x} = 8{,}4 \\Leftrightarrow 81 + 9x = 84 + 8{,}4x$.',
          },
          {
            id: 'b13_d1_p4_q4_s4',
            content:
              'Giải phương trình $0{,}6x = 3 \\Leftrightarrow x = 5$ (thỏa mãn). Vậy có $5$ học sinh đạt điểm $9$.',
          },
        ],
        correctOrder: ['b13_d1_p4_q4_s1', 'b13_d1_p4_q4_s2', 'b13_d1_p4_q4_s3', 'b13_d1_p4_q4_s4'],
        explanation:
          'Biểu diễn cỡ mẫu $N = 10 + x$ -> Biểu diễn tổng điểm $S = 81 + 9x$ -> Lập phương trình $\\frac{81+9x}{10+x} = 8{,}4$ -> Giải tìm $x = 5$.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-13-2': {
    extraPart1: [
      {
        id: 'b13_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 13: Tìm trung vị của mẫu số liệu có số phần tử chẵn (Ví dụ 2 SBT trang 108)',
        prompt:
          'Nhiệt độ cao nhất (đơn vị: $^\\circ\\text{C}$) trong $6$ ngày liên tiếp tại một trạm khí tượng là: $28;\\ 31;\\ 27;\\ 30;\\ 32;\\ 29$. Trung vị $M_e$ của mẫu số liệu trên bằng:',
        options: [
          { key: 'A', content: '$29{,}5$' },
          { key: 'B', content: '$28{,}5$' },
          { key: 'C', content: '$30$' },
          { key: 'D', content: '$29$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Sắp xếp mẫu theo thứ tự không giảm: $27;\\ 28;\\ 29;\\ 30;\\ 31;\\ 32$. Vì $n = 6$ chẵn nên $M_e = \\dfrac{x_3 + x_4}{2} = \\dfrac{29 + 30}{2} = 29{,}5$ (Ví dụ 2 SBT trang 108).',
        pedagogicalTip: 'Luôn nhớ **sắp xếp mẫu số liệu theo thứ tự không giảm** trước khi tìm trung vị và tứ phân vị.',
        points: 0.25,
      },
      {
        id: 'b13_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 13: Tìm tứ phân vị thứ ba Q3 (Bài 5.7 SBT trang 110)',
        prompt:
          'Cho mẫu số liệu đã sắp xếp không giảm gồm $9$ số: $10;\\ 12;\\ 14;\\ 15;\\ 18;\\ 20;\\ 22;\\ 24;\\ 30$. Tứ phân vị thứ ba $Q_3$ của mẫu số liệu bằng:',
        options: [
          { key: 'A', content: '$23$' },
          { key: 'B', content: '$22$' },
          { key: 'C', content: '$20$' },
          { key: 'D', content: '$13$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Cỡ mẫu $n = 9$ (lẻ), trung vị là số thứ $5$: $Q_2 = 18$. Nửa số liệu bên phải $Q_2$ gồm $4$ giá trị: $20;\\ 22;\\ 24;\\ 30$. Trung vị của nửa này là $Q_3 = \\dfrac{22 + 24}{2} = 23$ (Bài 5.7 SBT trang 110).',
        pedagogicalTip: 'Với $n = 9$, bỏ $x_5 = Q_2$, nửa phải gồm $x_6, x_7, x_8, x_9$ nên $Q_3 = \\dfrac{x_7 + x_8}{2}$.',
        points: 0.25,
      },
      {
        id: 'b13_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 13: Ý nghĩa của tứ phân vị trong thực tế (Lý thuyết SBT trang 107)',
        prompt:
          'Trong một kỳ thi tuyển dụng có $400$ thí sinh tham gia (điểm các thí sinh đôi một khác nhau). Ban tổ chức quyết định chọn $25\\%$ số thí sinh có điểm cao nhất vào vòng phỏng vấn. Ngưỡng điểm chuẩn để vào vòng phỏng vấn tương ứng với số đặc trưng nào?',
        options: [
          { key: 'A', content: 'Tứ phân vị thứ ba ($Q_3$)' },
          { key: 'B', content: 'Tứ phân vị thứ nhất ($Q_1$)' },
          { key: 'C', content: 'Trung vị ($Q_2$)' },
          { key: 'D', content: 'Mốt ($M_o$)' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bộ ba tứ phân vị $Q_1, Q_2, Q_3$ chia mẫu số liệu đã sắp xếp không giảm thành $4$ phần bằng nhau, mỗi phần chiếm $25\\%$. Nhóm $25\\%$ thí sinh có điểm cao nhất nằm từ $Q_3$ trở lên (Lý thuyết SBT trang 107).',
        pedagogicalTip: 'Top $25\\%$ cao nhất nằm phía trên $Q_3$; $25\\%$ thấp nhất nằm phía dưới $Q_1$.',
        points: 0.25,
      },
      {
        id: 'b13_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 13: Sự thay đổi của số trung bình khi cộng hằng số (Bài 5.10 SBT trang 111)',
        prompt:
          'Nếu mỗi giá trị trong một mẫu số liệu đều được cộng thêm $5$ đơn vị thì số trung bình cộng $\\bar{x}$ của mẫu số liệu mới sẽ:',
        options: [
          { key: 'A', content: 'Tăng thêm $5$ đơn vị.' },
          { key: 'B', content: 'Không thay đổi.' },
          { key: 'C', content: 'Tăng gấp $5$ lần.' },
          { key: 'D', content: 'Giảm đi $5$ đơn vị.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $\\bar{x}_{\\text{mới}} = \\dfrac{(x_1+5) + (x_2+5) + \\dots + (x_n+5)}{n} = \\dfrac{x_1+x_2+\\dots+x_n}{n} + \\dfrac{5n}{n} = \\bar{x} + 5$.',
        pedagogicalTip: 'Khi cộng mỗi giá trị của mẫu với hằng số $c$, cả $\\bar{x}, M_e, Q_1, Q_3$ đều tăng thêm $c$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b13_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 13: Phân tích lương trung bình và trung vị khi có giá trị ngoại lệ (Bài 5.9 SBT trang 110)',
        prompt:
          'Mức lương tháng (đơn vị: triệu đồng) của $7$ nhân viên trong một văn phòng là: $8;\\ 9;\\ 10;\\ 10;\\ 11;\\ 12;\\ 66$. Sắp xếp các bước tính số trung bình $\\bar{x}$, trung vị $M_e$ và nhận xét số đặc trưng đại diện hợp lý.',
        steps: [
          {
            id: 'b13_d2_p4_q2_s1',
            content:
              'Tính mức lương trung bình của $7$ nhân viên: $\\bar{x} = \\dfrac{8 + 9 + 10 + 10 + 11 + 12 + 66}{7} = \\dfrac{126}{7} = 18$ (triệu đồng).',
          },
          {
            id: 'b13_d2_p4_q2_s2',
            content:
              'Mẫu số liệu đã sắp xếp không giảm có $n = 7$ (lẻ) nên trung vị là giá trị thứ $4$: $M_e = 10$ (triệu đồng).',
          },
          {
            id: 'b13_d2_p4_q2_s3',
            content:
              'Nhận xét: Có $6/7$ nhân viên có lương từ $8$ đến $12$ triệu đồng, chỉ có $1$ giá trị cá biệt rất lớn là $66$ triệu đồng làm kéo lệch $\\bar{x} = 18$.',
          },
          {
            id: 'b13_d2_p4_q2_s4',
            content:
              'Kết luận: Nên dùng trung vị $M_e = 10$ triệu đồng để đại diện cho mức lương chung của văn phòng này.',
          },
        ],
        correctOrder: ['b13_d2_p4_q2_s1', 'b13_d2_p4_q2_s2', 'b13_d2_p4_q2_s3', 'b13_d2_p4_q2_s4'],
        explanation:
          'Tính $\\bar{x} = 18$ -> Tìm trung vị $M_e = 10$ -> Chỉ ra sự chênh lệch do giá trị bất thường $66$ -> Kết luận chọn trung vị $M_e = 10$.',
        points: 0.75,
      },
      {
        id: 'b13_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 13: Tìm hai giá trị ẩn trong mẫu số liệu từ trung bình và trung vị (Bài 5.10 SBT trang 111)',
        prompt:
          'Một mẫu số liệu gồm $5$ số nguyên dương được sắp xếp theo thứ tự không giảm: $3;\\ 5;\\ a;\\ b;\\ 12$. Biết trung vị của mẫu bằng $7$ và số trung bình cộng bằng $7{,}2$. Sắp xếp các bước tìm $a$ và $b$.',
        steps: [
          {
            id: 'b13_d2_p4_q3_s1',
            content:
              'Vì mẫu gồm $5$ số đã sắp xếp theo thứ tự không giảm nên trung vị chính là số đứng thứ $3$, suy ra $a = M_e = 7$.',
          },
          {
            id: 'b13_d2_p4_q3_s2',
            content:
              'Theo công thức số trung bình cộng: $\\bar{x} = \\dfrac{3 + 5 + a + b + 12}{5} = 7{,}2$.',
          },
          {
            id: 'b13_d2_p4_q3_s3',
            content:
              'Thay $a = 7$ vào phương trình: $3 + 5 + 7 + b + 12 = 36 \\Leftrightarrow 27 + b = 36$.',
          },
          {
            id: 'b13_d2_p4_q3_s4',
            content:
              'Giải ra $b = 9$ (thỏa mãn $7 \\le b \\le 12$). Vậy $a = 7$ và $b = 9$.',
          },
        ],
        correctOrder: ['b13_d2_p4_q3_s1', 'b13_d2_p4_q3_s2', 'b13_d2_p4_q3_s3', 'b13_d2_p4_q3_s4'],
        explanation:
          'Từ trung vị suy ra số đứng giữa $a = 7$ -> Lập phương trình số trung bình -> Thay $a = 7$ tìm tổng -> Giải ra $b = 9$ và kiểm tra thứ tự không giảm.',
        points: 0.75,
      },
      {
        id: 'b13_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 13: Xác định bộ tứ phân vị từ bảng tần số (Bài 5.8 SBT trang 110)',
        prompt:
          'Số cuốn sách đọc trong hè của $12$ học sinh được thống kê: có $3$ em đọc $1$ cuốn, $4$ em đọc $2$ cuốn, $3$ em đọc $3$ cuốn và $2$ em đọc $4$ cuốn. Sắp xếp các bước tìm các tứ phân vị $Q_1, Q_2, Q_3$.',
        steps: [
          {
            id: 'b13_d2_p4_q4_s1',
            content:
              'Liệt kê dãy $12$ số liệu theo thứ tự không giảm: $1, 1, 1,\\ 2, 2, 2, 2,\\ 3, 3, 3,\\ 4, 4$.',
          },
          {
            id: 'b13_d2_p4_q4_s2',
            content:
              'Vì $n = 12$ chẵn nên trung vị là $Q_2 = \\dfrac{x_6 + x_7}{2} = \\dfrac{2 + 2}{2} = 2$.',
          },
          {
            id: 'b13_d2_p4_q4_s3',
            content:
              'Nửa dữ liệu bên trái gồm $6$ số đầu ($x_1$ đến $x_6$) có trung vị là $Q_1 = \\dfrac{x_3 + x_4}{2} = \\dfrac{1 + 2}{2} = 1{,}5$.',
          },
          {
            id: 'b13_d2_p4_q4_s4',
            content:
              'Nửa dữ liệu bên phải gồm $6$ số cuối ($x_7$ đến $x_{12}$) có trung vị là $Q_3 = \\dfrac{x_9 + x_{10}}{2} = \\dfrac{3 + 3}{2} = 3$.',
          },
        ],
        correctOrder: ['b13_d2_p4_q4_s1', 'b13_d2_p4_q4_s2', 'b13_d2_p4_q4_s3', 'b13_d2_p4_q4_s4'],
        explanation:
          'Viết dãy 12 số liệu không giảm -> Tính $Q_2 = \\frac{x_6+x_7}{2} = 2$ -> Tính $Q_1 = \\frac{x_3+x_4}{2} = 1{,}5$ -> Tính $Q_3 = \\frac{x_9+x_{10}}{2} = 3$.',
        points: 0.75,
      },
    ],
  },

  // ==================== BÀI 14: CÁC SỐ ĐẶC TRƯNG ĐO ĐỘ PHÂN TÁN ====================
  'de-on-bai-14-1': {
    extraPart1: [
      {
        id: 'b14_d1_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 14: Tính khoảng biến thiên của mẫu số liệu (Ví dụ 1 SBT trang 112)',
        prompt:
          'Sản lượng chè (đơn vị: tạ) thu hoạch của $7$ hộ gia đình là: $12;\\ 15;\\ 9;\\ 18;\\ 21;\\ 14;\\ 16$. Khoảng biến thiên $R$ của mẫu số liệu trên bằng:',
        options: [
          { key: 'A', content: '$12$' },
          { key: 'B', content: '$9$' },
          { key: 'C', content: '$21$' },
          { key: 'D', content: '$15$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Giá trị lớn nhất là $x_{\\max} = 21$, giá trị nhỏ nhất là $x_{\\min} = 9$. Khoảng biến thiên là $R = x_{\\max} - x_{\\min} = 21 - 9 = 12$ (Ví dụ 1 SBT trang 112).',
        pedagogicalTip: '$R = x_{\\max} - x_{\\min}$.',
        points: 0.25,
      },
      {
        id: 'b14_d1_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 14: Tính khoảng tứ phân vị (Bài 5.11 SBT trang 115)',
        prompt:
          'Một mẫu số liệu có các tứ phân vị là $Q_1 = 18,\\ Q_2 = 24,\\ Q_3 = 31$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu bằng:',
        options: [
          { key: 'A', content: '$13$' },
          { key: 'B', content: '$6$' },
          { key: 'C', content: '$7$' },
          { key: 'D', content: '$49$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Theo định nghĩa: $\\Delta_Q = Q_3 - Q_1 = 31 - 18 = 13$ (Bài 5.11 SBT trang 115).',
        pedagogicalTip: 'Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ đo độ phân tán của $50\\%$ số liệu nằm ở chính giữa mẫu.',
        points: 0.25,
      },
      {
        id: 'b14_d1_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 14: Tính phương sai và độ lệch chuẩn của mẫu nhỏ (Ví dụ 3 SBT trang 113)',
        prompt:
          'Cho mẫu số liệu gồm $5$ giá trị: $2;\\ 4;\\ 6;\\ 8;\\ 10$. Phương sai $s^2$ của mẫu số liệu này bằng:',
        options: [
          { key: 'A', content: '$8$' },
          { key: 'B', content: '$10$' },
          { key: 'C', content: '$2\\sqrt{2}$' },
          { key: 'D', content: '$4$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Số trung bình $\\bar{x} = 6$. Phương sai $s^2 = \\dfrac{(2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2}{5} = \\dfrac{16 + 4 + 0 + 4 + 16}{5} = \\dfrac{40}{5} = 8$ (Ví dụ 3 SBT trang 113).',
        pedagogicalTip: 'Theo SGK Kết nối tri thức Toán 10, phương sai mẫu chia cho $n$: $s^2 = \\dfrac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2$.',
        points: 0.25,
      },
      {
        id: 'b14_d1_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 14: Tiêu chuẩn phát hiện giá trị ngoại lệ (Ví dụ 2 SBT trang 113)',
        prompt:
          'Một mẫu số liệu có $Q_1 = 20$ và $Q_3 = 30$. Theo quy tắc khoảng tứ phân vị, giá trị $x$ nào sau đây là **giá trị bất thường (ngoại lệ)** của mẫu số liệu?',
        options: [
          { key: 'A', content: '$x = 48$' },
          { key: 'B', content: '$x = 42$' },
          { key: 'C', content: '$x = 8$' },
          { key: 'D', content: '$x = 45$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ta có $\\Delta_Q = Q_3 - Q_1 = 10$. Ngưỡng dưới là $Q_1 - 1{,}5\\Delta_Q = 20 - 15 = 5$; ngưỡng trên là $Q_3 + 1{,}5\\Delta_Q = 30 + 15 = 45$. Giá trị $x = 48 > 45$ nên là giá trị bất thường (Ví dụ 2 SBT trang 113).',
        pedagogicalTip: 'Giá trị $x$ là ngoại lệ nếu $x > Q_3 + 1{,}5\\Delta_Q$ hoặc $x < Q_1 - 1{,}5\\Delta_Q$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b14_d1_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 14: Quy trình tính phương sai và độ lệch chuẩn (Bài 5.12 SBT trang 115)',
        prompt:
          'Cho mẫu số liệu thống kê số lỗi chính tả trong $5$ trang bản thảo: $1;\\ 2;\\ 3;\\ 4;\\ 5$. Sắp xếp các bước tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu.',
        steps: [
          {
            id: 'b14_d1_p4_q2_s1',
            content:
              'Tính số trung bình cộng của mẫu số liệu: $\\bar{x} = \\dfrac{1 + 2 + 3 + 4 + 5}{5} = 3$.',
          },
          {
            id: 'b14_d1_p4_q2_s2',
            content:
              'Tính tổng bình phương các độ lệch: $(1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2 = 4 + 1 + 0 + 1 + 4 = 10$.',
          },
          {
            id: 'b14_d1_p4_q2_s3',
            content:
              'Chia cho cỡ mẫu $n = 5$ để được phương sai: $s^2 = \\dfrac{10}{5} = 2$.',
          },
          {
            id: 'b14_d1_p4_q2_s4',
            content:
              'Lấy căn bậc hai của phương sai để được độ lệch chuẩn: $s = \\sqrt{s^2} = \\sqrt{2} \\approx 1{,}41$.',
          },
        ],
        correctOrder: ['b14_d1_p4_q2_s1', 'b14_d1_p4_q2_s2', 'b14_d1_p4_q2_s3', 'b14_d1_p4_q2_s4'],
        explanation:
          'Tính $\\bar{x} = 3$ -> Tính $\\sum (x_i - \\bar{x})^2 = 10$ -> Chia cho $n = 5$ được $s^2 = 2$ -> Khai căn được $s = \\sqrt{2} \\approx 1{,}41$.',
        points: 0.75,
      },
      {
        id: 'b14_d1_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 14: Phát hiện giá trị bất thường bằng khoảng tứ phân vị (Bài 5.14 SBT trang 116)',
        prompt:
          'Cho mẫu số liệu đã sắp xếp không giảm gồm $9$ giá trị: $2;\\ 11;\\ 12;\\ 13;\\ 14;\\ 15;\\ 16;\\ 17;\\ 26$. Sắp xếp các bước tìm các giá trị bất thường (nếu có) của mẫu.',
        steps: [
          {
            id: 'b14_d1_p4_q3_s1',
            content:
              'Với $n = 9$, trung vị là $Q_2 = x_5 = 14$. Nửa trái gồm $2, 11, 12, 13$ có $Q_1 = \\dfrac{11 + 12}{2} = 11{,}5$; nửa phải gồm $15, 16, 17, 26$ có $Q_3 = \\dfrac{16 + 17}{2} = 16{,}5$.',
          },
          {
            id: 'b14_d1_p4_q3_s2',
            content:
              'Tính khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 16{,}5 - 11{,}5 = 5$, suy ra $1{,}5\\Delta_Q = 7{,}5$.',
          },
          {
            id: 'b14_d1_p4_q3_s3',
            content:
              'Xác định hai ngưỡng: $Q_1 - 1{,}5\\Delta_Q = 11{,}5 - 7{,}5 = 4$ và $Q_3 + 1{,}5\\Delta_Q = 16{,}5 + 7{,}5 = 24$.',
          },
          {
            id: 'b14_d1_p4_q3_s4',
            content:
              'So sánh các phần tử của mẫu với đoạn $[4;\\ 24]$: có $2 < 4$ và $26 > 24$ nên $2$ và $26$ là hai giá trị bất thường.',
          },
        ],
        correctOrder: ['b14_d1_p4_q3_s1', 'b14_d1_p4_q3_s2', 'b14_d1_p4_q3_s3', 'b14_d1_p4_q3_s4'],
        explanation:
          'Tìm $Q_1 = 11{,}5, Q_3 = 16{,}5$ -> Tính $\\Delta_Q = 5$ và $1{,}5\\Delta_Q = 7{,}5$ -> Tìm ngưỡng $[4; 24]$ -> Kết luận $2$ và $26$ là giá trị bất thường.',
        points: 0.75,
      },
      {
        id: 'b14_d1_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 14: So sánh độ đồng đều của hai xạ thủ qua độ lệch chuẩn (Bài 5.15 SBT trang 116)',
        prompt:
          'Trong $5$ lượt bắn cung, xạ thủ A đạt điểm: $8;\\ 9;\\ 9;\\ 9;\\ 10$ và xạ thủ B đạt điểm: $7;\\ 8;\\ 9;\\ 10;\\ 11$. Sắp xếp các bước so sánh xem xạ thủ nào có phong độ ổn định hơn.',
        steps: [
          {
            id: 'b14_d1_p4_q4_s1',
            content:
              'Tính điểm trung bình của hai xạ thủ: $\\bar{x}_A = \\dfrac{8+9+9+9+10}{5} = 9$ và $\\bar{x}_B = \\dfrac{7+8+9+10+11}{5} = 9$ (bằng nhau).',
          },
          {
            id: 'b14_d1_p4_q4_s2',
            content:
              'Tính phương sai của xạ thủ A: $s_A^2 = \\dfrac{(8-9)^2 + 3(9-9)^2 + (10-9)^2}{5} = \\dfrac{2}{5} = 0{,}4$.',
          },
          {
            id: 'b14_d1_p4_q4_s3',
            content:
              'Tính phương sai của xạ thủ B: $s_B^2 = \\dfrac{(7-9)^2 + (8-9)^2 + (9-9)^2 + (10-9)^2 + (11-9)^2}{5} = \\dfrac{10}{5} = 2$.',
          },
          {
            id: 'b14_d1_p4_q4_s4',
            content:
              'Vì $s_A = \\sqrt{0{,}4} < s_B = \\sqrt{2}$ nên điểm của xạ thủ A ít phân tán hơn, tức xạ thủ A có phong độ ổn định hơn xạ thủ B.',
          },
        ],
        correctOrder: ['b14_d1_p4_q4_s1', 'b14_d1_p4_q4_s2', 'b14_d1_p4_q4_s3', 'b14_d1_p4_q4_s4'],
        explanation:
          'Tính $\\bar{x}_A = \\bar{x}_B = 9$ -> Tính $s_A^2 = 0{,}4$ -> Tính $s_B^2 = 2$ -> So sánh $s_A < s_B$ và kết luận xạ thủ A ổn định hơn.',
        points: 0.75,
      },
    ],
  },

  'de-on-bai-14-2': {
    extraPart1: [
      {
        id: 'b14_d2_p1_q9',
        part: 'part1',
        number: 9,
        topic: 'Bài 14: Ý nghĩa của độ lệch chuẩn bằng 0 (Lý thuyết SBT trang 113)',
        prompt:
          'Nếu độ lệch chuẩn $s$ của một mẫu số liệu bằng $0$ thì khẳng định nào sau đây là **đúng**?',
        options: [
          { key: 'A', content: 'Tất cả các giá trị trong mẫu số liệu đều bằng nhau.' },
          { key: 'B', content: 'Tất cả các giá trị trong mẫu số liệu đều bằng $0$.' },
          { key: 'C', content: 'Số trung bình cộng của mẫu số liệu bằng $0$.' },
          { key: 'D', content: 'Mẫu số liệu có đúng $2$ giá trị đối nhau.' },
        ],
        correctAnswer: 'A',
        explanation:
          'Vì $s = 0 \\Leftrightarrow s^2 = \\dfrac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2 = 0 \\Leftrightarrow x_i = \\bar{x}$ với mọi $i$, tức tất cả các giá trị trong mẫu đều bằng nhau (Lý thuyết SBT trang 113).',
        pedagogicalTip: 'Độ lệch chuẩn $s = 0$ khi và chỉ khi mọi giá trị của mẫu không có sự chênh lệch (đều bằng $\\bar{x}$).',
        points: 0.25,
      },
      {
        id: 'b14_d2_p1_q10',
        part: 'part1',
        number: 10,
        topic: 'Bài 14: Đơn vị đo của phương sai và độ lệch chuẩn (Lý thuyết SBT trang 113)',
        prompt:
          'Khi mẫu số liệu thống kê chiều cao học sinh có đơn vị là $\\text{cm}$ thì độ lệch chuẩn $s$ và phương sai $s^2$ có đơn vị lần lượt là:',
        options: [
          { key: 'A', content: '$\\text{cm}$ và $\\text{cm}^2$' },
          { key: 'B', content: '$\\text{cm}^2$ và $\\text{cm}$' },
          { key: 'C', content: 'Cùng có đơn vị là $\\text{cm}$' },
          { key: 'D', content: 'Đều không có đơn vị' },
        ],
        correctAnswer: 'A',
        explanation:
          'Phương sai $s^2$ có đơn vị là bình phương đơn vị của mẫu số liệu ($\\text{cm}^2$), còn độ lệch chuẩn $s = \\sqrt{s^2}$ có cùng đơn vị với mẫu số liệu ($\\text{cm}$) nên được dùng trực tiếp để đánh giá độ phân tán (Lý thuyết SBT trang 113).',
        pedagogicalTip: 'Độ lệch chuẩn $s$ có cùng đơn vị đo với dữ liệu gốc.',
        points: 0.25,
      },
      {
        id: 'b14_d2_p1_q11',
        part: 'part1',
        number: 11,
        topic: 'Bài 14: Sự bất biến của độ lệch chuẩn khi cộng hằng số (Bài 5.16 SBT trang 117)',
        prompt:
          'Cho mẫu số liệu $x_1, x_2, \\dots, x_n$ có độ lệch chuẩn là $s = 3$. Nếu cộng thêm vào mỗi giá trị của mẫu $10$ đơn vị thì mẫu số liệu mới có độ lệch chuẩn bằng:',
        options: [
          { key: 'A', content: '$3$' },
          { key: 'B', content: '$13$' },
          { key: 'C', content: '$30$' },
          { key: 'D', content: '$9$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khi cộng thêm $10$ vào mỗi số hạng thì số trung bình mới là $\\bar{x}\' = \\bar{x} + 10$. Khi đó hiệu $(x_i + 10) - (\\bar{x} + 10) = x_i - \\bar{x}$ không đổi, nên phương sai và độ lệch chuẩn giữ nguyên bằng $3$ (Bài 5.16 SBT trang 117).',
        pedagogicalTip: 'Cộng (hoặc trừ) mọi giá trị của mẫu với cùng một hằng số không làm thay đổi $R, \\Delta_Q, s^2, s$.',
        points: 0.25,
      },
      {
        id: 'b14_d2_p1_q12',
        part: 'part1',
        number: 12,
        topic: 'Bài 14: Sự thay đổi của phương sai khi nhân hằng số (Bài 5.16 SBT trang 117)',
        prompt:
          'Cho mẫu số liệu $x_1, x_2, \\dots, x_n$ có phương sai là $s^2 = 5$. Nếu nhân mỗi giá trị của mẫu với $2$ thì phương sai của mẫu số liệu mới bằng:',
        options: [
          { key: 'A', content: '$20$' },
          { key: 'B', content: '$10$' },
          { key: 'C', content: '$5$' },
          { key: 'D', content: '$25$' },
        ],
        correctAnswer: 'A',
        explanation:
          'Khi nhân mỗi giá trị với $k = 2$, độ lệch $(2x_i - 2\\bar{x})^2 = 4(x_i - \\bar{x})^2$, nên phương sai mới gấp $k^2 = 4$ lần phương sai cũ: $s_{\\text{mới}}^2 = 4 \\cdot 5 = 20$ (còn độ lệch chuẩn gấp $|k| = 2$ lần) (Bài 5.16 SBT trang 117).',
        pedagogicalTip: 'Nhân mỗi giá trị với $k$ thì độ lệch chuẩn nhân $|k|$, còn phương sai nhân $k^2$.',
        points: 0.25,
      },
    ],
    extraPart4: [
      {
        id: 'b14_d2_p4_q2',
        part: 'part4',
        number: 2,
        topic: 'Bài 14: Tính phương sai từ bảng tần số bằng công thức rút gọn (Bài 5.13 SBT trang 115)',
        prompt:
          'Số cuộc gọi cấp cứu mỗi ngày tại một trạm y tế trong $10$ ngày được ghi lại trong bảng tần số: giá trị $x_i \\in \\{1; 2; 3\\}$ với tần số tương ứng $n_i \\in \\{3; 4; 3\\}$. Sắp xếp các bước tính phương sai $s^2$ của mẫu.',
        steps: [
          {
            id: 'b14_d2_p4_q2_s1',
            content:
              'Tính số trung bình cộng: $\\bar{x} = \\dfrac{1 \\cdot 3 + 2 \\cdot 4 + 3 \\cdot 3}{10} = \\dfrac{20}{10} = 2$.',
          },
          {
            id: 'b14_d2_p4_q2_s2',
            content:
              'Tính trung bình của bình phương các giá trị: $\\overline{x^2} = \\dfrac{1^2 \\cdot 3 + 2^2 \\cdot 4 + 3^2 \\cdot 3}{10} = \\dfrac{3 + 16 + 27}{10} = 4{,}6$.',
          },
          {
            id: 'b14_d2_p4_q2_s3',
            content:
              'Áp dụng công thức rút gọn của phương sai: $s^2 = \\overline{x^2} - (\\bar{x})^2$.',
          },
          {
            id: 'b14_d2_p4_q2_s4',
            content:
              'Thay số vào công thức: $s^2 = 4{,}6 - 2^2 = 0{,}6$.',
          },
        ],
        correctOrder: ['b14_d2_p4_q2_s1', 'b14_d2_p4_q2_s2', 'b14_d2_p4_q2_s3', 'b14_d2_p4_q2_s4'],
        explanation:
          'Tính $\\bar{x} = 2$ -> Tính $\\overline{x^2} = 4{,}6$ -> Nêu công thức $s^2 = \\overline{x^2} - (\\bar{x})^2$ -> Thay số được $s^2 = 0{,}6$.',
        points: 0.75,
      },
      {
        id: 'b14_d2_p4_q3',
        part: 'part4',
        number: 3,
        topic: 'Bài 14: So sánh khoảng biến thiên R và khoảng tứ phân vị khi có ngoại lệ (Bài 5.14 SBT trang 116)',
        prompt:
          'Cho mẫu số liệu gồm $7$ giá trị: $10;\\ 11;\\ 12;\\ 12;\\ 13;\\ 14;\\ 50$. Sắp xếp các bước tính khoảng biến thiên $R$, khoảng tứ phân vị $\\Delta_Q$ và nhận xét sự ảnh hưởng của giá trị bất thường $50$.',
        steps: [
          {
            id: 'b14_d2_p4_q3_s1',
            content:
              'Tính khoảng biến thiên của mẫu số liệu: $R = x_{\\max} - x_{\\min} = 50 - 10 = 40$.',
          },
          {
            id: 'b14_d2_p4_q3_s2',
            content:
              'Với $n = 7$, trung vị là $Q_2 = x_4 = 12$. Nửa trái ($10, 11, 12$) có $Q_1 = 11$; nửa phải ($12, 13, 14, 50$ bỏ $x_4$) gồm $13, 14, 50$ có $Q_3 = 14$.',
          },
          {
            id: 'b14_d2_p4_q3_s3',
            content:
              'Tính khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 14 - 11 = 3$.',
          },
          {
            id: 'b14_d2_p4_q3_s4',
            content:
              'Nhận xét: Giá trị ngoại lệ $50$ làm $R = 40$ rất lớn, trong khi $\\Delta_Q = 3$ không bị ảnh hưởng và phản ánh đúng độ phân tán của nhóm số liệu trung tâm.',
          },
        ],
        correctOrder: ['b14_d2_p4_q3_s1', 'b14_d2_p4_q3_s2', 'b14_d2_p4_q3_s3', 'b14_d2_p4_q3_s4'],
        explanation:
          'Tính $R = 50 - 10 = 40$ -> Tìm $Q_1 = 11, Q_3 = 14$ -> Tính $\\Delta_Q = 3$ -> Nhận xét $\\Delta_Q$ không bị ảnh hưởng bởi giá trị bất thường $50$.',
        points: 0.75,
      },
      {
        id: 'b14_d2_p4_q4',
        part: 'part4',
        number: 4,
        topic: 'Bài 14: Tìm hai số trong mẫu khi biết số trung bình và phương sai (Bài 5.16 SBT trang 117)',
        prompt:
          'Một mẫu số liệu gồm $4$ số: $2;\\ 4;\\ a;\\ b$ (với $a \\le b$). Biết số trung bình cộng của mẫu là $\\bar{x} = 4$ và phương sai là $s^2 = 2{,}5$. Sắp xếp các bước tìm $a$ và $b$.',
        steps: [
          {
            id: 'b14_d2_p4_q4_s1',
            content:
              'Từ $\\bar{x} = 4$ suy ra tổng $4$ số là $2 + 4 + a + b = 4 \\cdot 4 = 16 \\Leftrightarrow a + b = 10$.',
          },
          {
            id: 'b14_d2_p4_q4_s2',
            content:
              'Từ phương sai $s^2 = 2{,}5$ với $\\bar{x} = 4$: $\\dfrac{(2-4)^2 + (4-4)^2 + (a-4)^2 + (b-4)^2}{4} = 2{,}5 \\Leftrightarrow 4 + (a-4)^2 + (b-4)^2 = 10$.',
          },
          {
            id: 'b14_d2_p4_q4_s3',
            content:
              'Thay $b = 10 - a$ vào phương trình: $(a - 4)^2 + (6 - a)^2 = 6 \\Leftrightarrow 2a^2 - 20a + 46 = 0 \\Leftrightarrow a^2 - 10a + 23 = 0$.',
          },
          {
            id: 'b14_d2_p4_q4_s4',
            content:
              'Giải phương trình với $a \\le b$ ta được $a = 5 - \\sqrt{2}$ và $b = 5 + \\sqrt{2}$.',
          },
        ],
        correctOrder: ['b14_d2_p4_q4_s1', 'b14_d2_p4_q4_s2', 'b14_d2_p4_q4_s3', 'b14_d2_p4_q4_s4'],
        explanation:
          'Từ $\\bar{x}=4$ suy ra $a+b=10$ -> Từ $s^2=2{,}5$ suy ra $(a-4)^2+(b-4)^2=6$ -> Thay $b=10-a$ đưa về phương trình bậc hai -> Giải tìm $a = 5-\\sqrt{2},\\ b = 5+\\sqrt{2}$.',
        points: 0.75,
      },
    ],
  },
};
