'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PlantsExperimentPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800 bg-white rounded-xl shadow-md">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🪴 Thí nghiệm cây của IKEA – Lời nói nuôi dưỡng hay huỷ hoại
      </motion.h1>

      <motion.div
        className="space-y-6 text-base leading-relaxed whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
{`“Lời nói có thể là nước tưới cho sự sống… hoặc là lưỡi dao âm thầm làm héo úa.”

Trong hành trình của Love to Earth, chúng ta tin rằng mọi sự sống đều có khả năng cảm nhận – dù đó là người, cây cối, hay Trái Đất.
Thí nghiệm của IKEA là một minh chứng rõ ràng cho điều ấy: rằng tình yêu thương không chỉ nuôi dưỡng tinh thần, mà còn nuôi dưỡng cả những sinh thể lặng thầm như cây xanh.

📚 Bối cảnh thí nghiệm
Năm 2018, IKEA phát động một chiến dịch chống bắt nạt tại trường học. Thay vì những bài giảng khô khan, họ dùng cây xanh làm “người chứng minh”.

Hai cây giống hệt nhau được chăm sóc trong điều kiện hoàn toàn giống nhau về:
- Đất, nước, ánh sáng
- Không khí, nhiệt độ
- Khoảng cách đặt

Điều duy nhất khác biệt: lời nói.

🧪 Cách tiến hành
- Cây thứ nhất nhận được lời khen, lời yêu thương mỗi ngày: “Bạn thật đẹp”, “Tôi yêu cây này”, “Cảm ơn bạn đã lớn lên”.
- Cây thứ hai bị xúc phạm bởi các câu như: “Bạn thật xấu”, “Tôi ghét bạn”, “Đừng tồn tại nữa”.

Các câu này được ghi âm và phát lại liên tục nhiều lần trong ngày – mô phỏng thực tế nơi trẻ em bị bắt nạt bằng lời nói.

🔍 Kết quả sau 30 ngày
- Cây nhận lời yêu thương: Xanh tốt, mọc đều, đầy sức sống.
- Cây bị xúc phạm: Héo úa, rụng lá, phát triển chậm hoặc dừng lại.

Không có gì thay đổi về vật lý. Chỉ có trường năng lượng của lời nói là khác.
Và chính nó đã quyết định sự sống còn của một thực thể sống.

🧠 Bài học từ một cái cây
Không chỉ trẻ em mới bị tổn thương bởi lời nói. Cây – dù không có tai để nghe hay mắt để nhìn – vẫn “nhận” được tần số của tâm thức.

Agni Yoga dạy rằng mọi dạng sống đều có từ trường tinh tế – và chúng giao tiếp bằng sóng ý niệm nhiều hơn là âm thanh vật lý.

“Yêu thương là một ngôn ngữ vượt mọi loài. Không cần nói – nhưng luôn được hiểu.”

🌍 Từ một chiếc lá… đến Trái Đất
Cây cối là “lá phổi” của hành tinh. Chúng ta nói chuyện với cây – và Trái Đất nghe thấy.
Chúng ta nói chuyện với nhau – và Trái Đất cảm nhận được sự hài hòa hay chia rẽ ấy.

Trong tinh thần của Love to Earth, hãy dành một phút thầm cảm ơn những tán cây quanh bạn.
Và gửi đến Trái Đất – người mẹ vĩ đại bao bọc cả rừng cây – một làn gió nhẹ mang theo yêu thương.

🌍 Bạn có thể gửi một lời chúc
Hãy thử một lần chạm vào vỏ cây và nói: “Cảm ơn bạn đã thở giùm tôi.”
Hay lặng lẽ đứng dưới tán cây và gửi một ý nghĩ yêu thương.
Hoặc...`}

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
