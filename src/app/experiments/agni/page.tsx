'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AgniExperimentPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800 bg-white rounded-xl shadow-md">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🔬 Sóng ý niệm và Agni Yoga – Tâm thức và sự sống
      </motion.h1>

      <motion.div
        className="space-y-6 text-base leading-relaxed whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
{`“Tư tưởng là năng lượng. Yêu thương là rung động cao nhất.”
— Agni Yoga

Dự án Love to Earth được khơi nguồn từ niềm tin rằng tư tưởng con người có sức mạnh lan tỏa vượt khỏi giới hạn cá nhân – chạm tới cây cỏ, nước non, và cả chính Trái Đất như một thực thể sống.

Trong giáo lý sâu sắc của Agni Yoga, tư tưởng không chỉ là hoạt động của tâm trí – mà là những làn sóng năng lượng thực sự có thể nuôi dưỡng hoặc huỷ hoại sự sống. Bài học này càng trở nên sống động khi chúng ta quan sát cây cối, vật nuôi, và thiên nhiên quanh mình phản hồi với năng lượng mà ta phát ra.

📚 Nền tảng từ Agni Yoga
Trong các đoạn từ 387–390, Agni Yoga nhấn mạnh:
- Tư tưởng là lực sáng tạo.
- Ý niệm yêu thương phát ra sóng rung cao – như ánh sáng, có khả năng chữa lành.
- Ý niệm tiêu cực phát ra rung động thấp – như khói đen, có thể gây tổn thương cho sinh thể xung quanh.
- Không chỉ lời nói, mà ý nghĩ thầm lặng cũng để lại dấu vết trong môi trường sống.

🔬 Cây cối “lắng nghe” tâm thức
Nhiều người làm vườn, trồng cây bằng tình thương đều chia sẻ cùng một điều:
Khi họ ở trong trạng thái bình an, biết ơn, yêu thương – cây phát triển mạnh, xanh mướt, ít sâu bệnh.
Ngược lại, khi trong nhà có mâu thuẫn, u sầu hoặc căng thẳng kéo dài – cây trở nên yếu, rụng lá, ngưng phát triển.

Không có bằng chứng khoa học cụ thể nào về “âm thanh giận dữ”, nhưng có lẽ trường năng lượng tinh thần mới là ngôn ngữ thật sự mà cây cảm nhận.

Agni Yoga gọi đó là “trường rung cảm nội giới” – nơi mọi sinh thể giao tiếp bằng làn sóng ý niệm.

🧠 Trí huệ ẩn trong yên lặng
Một bông hoa không cần nói để khoe sắc.
Một ý nghĩ từ ái không cần nói ra vẫn có thể nuôi dưỡng cả một căn phòng.

“Chúng ta không chỉ sống bằng thực phẩm – mà bằng rung động.”
“Tư tưởng của bạn là khí hậu vi tế nuôi dưỡng mọi sự sống quanh bạn.”

🌍 Từ tâm trí đến trái tim Trái Đất
Nếu cây nhỏ cũng bị ảnh hưởng bởi sự thù ghét hay thương yêu thầm lặng,
thì Trái Đất – sinh thể vĩ đại – chắc chắn cũng đang “nhận” năng lượng mà con người phát ra mỗi ngày.

Trong tinh thần Love to Earth, mỗi suy nghĩ bạn gửi đi như một làn sóng nhỏ – nhưng chúng hợp lại thành đại dương ý thức.
Hãy để đại dương ấy tràn ngập yêu thương, chữa lành, biết ơn và ánh sáng.`}

        <div className="text-center mt-6">
          <Link
            href="/#loveform"
            className="inline-block text-green-700 font-semibold underline hover:text-green-900 transition"
          >
            👉 Gửi lời chúc đến Trái Đất
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
