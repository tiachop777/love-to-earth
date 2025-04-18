'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RiceExperimentPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800 bg-white rounded-xl shadow-md">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌱 Thí nghiệm cơm – Năng lượng của cảm xúc
      </motion.h1>

      <motion.div
        className="space-y-6 text-base leading-relaxed whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
{`Trong tinh thần của dự án Love to Earth, chúng ta tin rằng từng ý nghĩ, từng lời nói mang theo năng lượng – có thể chữa lành hoặc tổn thương thế giới quanh ta.
Những thí nghiệm như dưới đây là minh chứng đơn giản nhưng sâu sắc cho sức mạnh của tư tưởng yêu thương, không chỉ với con người – mà với cả những vật thể tưởng như vô tri như… một bát cơm trắng.

📚 Nguồn gốc & tinh thần thí nghiệm
Thí nghiệm này không bắt đầu từ một phòng lab lớn, mà từ trái tim của những người muốn lắng nghe cuộc sống một cách tinh tế hơn. Nó lan truyền qua các lớp học, gia đình, cộng đồng nhỏ – như một làn sóng nhẹ nhàng của sự thức tỉnh.

Bất kỳ ai cũng có thể thực hiện – chỉ cần ba chiếc hũ, một ít cơm, và sự hiện diện hàng ngày.

🧪 Cách làm: Thí nghiệm 3 bát cơm
- Hũ “Yêu thương”: Được nói lời trìu mến mỗi ngày – như “Tôi yêu bạn”, “Cảm ơn vì bạn hiện diện.”
- Hũ “Ghét bỏ”: Nhận những lời xúc phạm hoặc giận dữ.
- Hũ “Phớt lờ”: Bị bỏ mặc, không ai để ý tới.
Tất cả được đặt trong cùng một điều kiện, theo dõi trong 2–4 tuần.

🔍 Hiện tượng xảy ra
- Cơm yêu thương: Lên men nhẹ, tỏa mùi dịu, màu vàng nâu như rượu gạo.
- Cơm bị ghét bỏ: Mốc đen, có mùi khó chịu.
- Cơm bị phớt lờ: Thường là hũ bị phân huỷ nặng nhất – chuyển màu, mốc loang nhanh và bốc mùi hôi nồng.

🧠 Góc nhìn sâu hơn
Khoa học có thể lý giải phần nào – nhưng không thể phủ nhận rằng: chỉ một thái độ tinh thần khác biệt thôi, đã dẫn đến những phản ứng hoàn toàn khác nhau.

Agni Yoga gọi tư tưởng là “sóng ý niệm” – tỏa ra như ánh sáng hoặc khói mờ. Tư tưởng tích cực nâng cao rung động. Tư tưởng tiêu cực làm suy kiệt và héo úa sự sống.

❤️ Từ bát cơm đến trái tim Trái Đất
“Nếu một hũ cơm cũng biết cảm nhận yêu thương,
thì Trái Đất – sinh thể sống vĩ đại – chắc chắn đang lắng nghe những gì ta gửi đến mỗi ngày.”

Love to Earth ra đời với niềm tin đó:
Rằng từng ý nghĩ nhẹ nhàng, từng lời chúc lành, đều có thể là dưỡng chất cho hành tinh này.
Rằng chúng ta có thể chữa lành Trái Đất không chỉ bằng hành động, mà còn bằng năng lượng yêu thương từ trái tim.

🌍 Bạn có thể gửi một lời chúc
Hãy thử một lần nói lời cảm ơn với một chiếc lá.
Hay thì thầm yêu thương với nước bạn uống mỗi ngày.
Hoặc...
Gửi một lời chúc đến Trái Đất ngay tại đây.`}

        <div className="text-center mt-6">
          <Link
            href="/#loveform"
            className="inline-block text-green-700 font-semibold underline hover:text-green-900 transition"
          >
            👉 Gửi lời chúc yêu thương đến Trái Đất
          </Link>
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="text-blue-700 underline hover:text-blue-900">
            ← Quay lại trang chính
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
