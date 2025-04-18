'use client';

import { motion } from 'framer-motion';

export default function IntroPurpose() {
  return (
    <section className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-3xl mx-auto text-gray-800 space-y-4 text-base leading-relaxed">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-green-700 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💚 Love to Earth – Lời thì thầm với Trái Đất
      </motion.h2>
      <p>Love to Earth không chỉ là một trang web.<br />Đó là lời nhắc dịu dàng: Trái Đất đang lắng nghe.</p>
      <p>
        Giữa vô vàn âm thanh ồn ả,<br />
        chúng ta gửi đi một nhịp đập yêu thương –<br />
        để nối trái tim mình<br />
        với nhịp rung bí mật của hành tinh xanh.
      </p>
      <p className="italic">Chúng ta tin rằng</p>
      <p>
        Mỗi suy nghĩ tích cực là một hạt mầm năng lượng thực sự.<br />
        Hạt mầm ấy biết chữa lành,<br />
        biết đánh thức,<br />
        và có thể lan xa đến tận đường chân trời.
      </p>
      <p className="italic">Nơi đây, bạn có thể</p>
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>🌱 Thì thầm một lời chúc cho Trái Đất.</li>
        <li>🔍 Khám phá những câu chuyện chân thực về sức mạnh của ý niệm và cảm xúc.</li>
        <li>🤝 Kết nối lại với chính mình, với người bên cạnh, với ngôi nhà chung này.</li>
      </ul>
      <p>
        Chúng ta không cần áo choàng siêu nhân,<br />
        không cần danh xưng “nhà khoa học” hay “nhà hoạt động”.<br />
        Chúng ta chỉ cần biết yêu –<br />
        và bắt đầu bằng một lời chúc nhỏ.
      </p>
      <p>
        Tình yêu không ở đâu xa.<br />
        Nó nảy mầm từ bạn,<br />
        ngay lúc này,<br />
        tại đây.
      </p>
      <p className="text-center font-semibold text-green-600">Hãy để Trái Đất nghe thấy nhịp tim của bạn. 💚</p>
    </section>
  );
}
