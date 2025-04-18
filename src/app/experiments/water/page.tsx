'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WaterExperimentPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800 bg-white rounded-xl shadow-md">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💧 Thí nghiệm nước – Thông điệp từ kết tinh
      </motion.h1>

      <motion.div
        className="space-y-6 text-base leading-relaxed whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
{`“Khi bạn nói với nước bằng tình yêu – nước đáp lại bằng vẻ đẹp.”

Love to Earth tin rằng Trái Đất không chỉ là nơi ta sống, mà là một thực thể sống động – nơi từng nguyên tố, từng giọt nước đều có thể cảm nhận và phản hồi.
Thí nghiệm nước của Masaru Emoto là một cánh cửa mở ra cái nhìn mới về mối liên hệ giữa tâm thức và vật chất, giữa lời nói và hình thái, giữa trái tim con người và cấu trúc của sự sống.

📚 Nguồn gốc thí nghiệm
Tiến sĩ Masaru Emoto (Nhật Bản) dành hàng chục năm để nghiên cứu ảnh hưởng của từ ngữ, âm nhạc và cảm xúc lên nước.
Ông cho nước tiếp xúc với những thông điệp khác nhau – sau đó làm đông đá và chụp lại ảnh các tinh thể tuyết được hình thành.

🧪 Cách tiến hành
Chuẩn bị nhiều lọ nước tinh khiết, mỗi lọ mang một loại năng lượng:
- Từ ngữ tích cực như: “Tình yêu”, “Biết ơn”, “Bạn thật đẹp”.
- Từ ngữ tiêu cực như: “Tôi ghét bạn”, “Ngốc nghếch”.
- Một số lọ tiếp xúc với âm nhạc: nhạc cổ điển, heavy metal...
Nước được làm đông ở -5°C và chụp ảnh các tinh thể tuyết dưới kính hiển vi.

🔍 Kết quả diệu kỳ
- Nước nhận lời yêu thương: Kết tinh thành những hình hoa tuyết lục giác hoàn hảo – thanh khiết, cân bằng, rực rỡ.
- Nước nhận lời tiêu cực: Không thể kết tinh đẹp, hình dạng hỗn loạn, vỡ vụn, méo mó.
- Nước tiếp xúc với âm nhạc nhẹ nhàng (như Mozart, nhạc thiền): Tạo hình tròn trịa, mềm mại.
- Nước tiếp xúc với âm nhạc gào thét: Vỡ vụn, mất cấu trúc.

🧠 Ý nghĩa sâu xa
Nếu nước – thứ tưởng chừng vô tri – có thể cảm nhận lời nói, rung động và cảm xúc,
thì điều đó nói lên gì về chính chúng ta – những sinh thể chứa hơn 70% là nước?

“Bạn nói điều gì ra, không chỉ tác động đến người khác…
mà còn vang vọng trong từng tế bào của chính bạn.”

Agni Yoga từng dạy: sóng tư tưởng đi qua không gian như âm thanh, ánh sáng – và nó định hình cấu trúc của cuộc sống.
Emoto đã chụp lại được “hình hài của năng lượng yêu thương”.

🌍 Từ giọt nước đến Trái Đất
Trái Đất – với đại dương, sông ngòi, bầu khí quyển… – cũng là một hệ thống nước sống.
Và nếu một giọt nước nhỏ bé cũng có thể ghi nhớ yêu thương, thì Trái Đất – như một cơ thể khổng lồ – chắc chắn cũng lắng nghe.

Trong tinh thần của Love to Earth,
hãy gửi một làn sóng dịu dàng đến những giọt nước quanh ta – và xa hơn là đến toàn thể hành tinh này.`}

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
