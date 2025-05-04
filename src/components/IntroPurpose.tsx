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

      <p>
      Mỗi ý niệm yêu thương là một hạt mầm có thật.<br />
      Nó có thể chữa lành, lan tỏa, và đánh thức điều tốt đẹp quanh ta.
      </p>

      <p>
        Từ cơm được yêu thương mà lên men ngọt ngào,<br />
        Từ tinh thể nước kết tinh khi nghe lời tử tế,<br />
        Từ cây cối nở rộ khi được khích lệ,<br />
        Cho đến những dòng dạy của Agni Yoga rằng tư tưởng là năng lượng sống –<br />
        Chúng ta được nhắc rằng: những gì vô hình, vẫn có thể tác động và chuyển hóa.
      </p>

      <p className="italic">Nơi đây, bạn có thể</p>
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>🌱 Thì thầm một lời chúc cho Trái Đất – và thật sự cảm nhận nó.</li>
        <li>🔍 Khám phá những câu chuyện chân thực về sức mạnh của ý niệm và cảm xúc.</li>
        <li>🤝 Kết nối lại với chính mình, với người bên cạnh, và với ngôi nhà chung này.</li>
      </ul>

      <p>
        Chúng ta không cần áo choàng siêu nhân,<br />
        không cần danh xưng “nhà khoa học” hay “nhà hoạt động”.<br />
        Chúng ta chỉ cần biết lắng nghe, biết yêu –<br />
        và bắt đầu bằng một lời chúc nhỏ.
      </p>

      <p>
      Bởi Tình yêu bắt đầu từ bạn, <br />
      ngay lúc này,<br />
      ngay tại đây.<br />
      </p>

      <p className="text-center font-semibold text-green-600">Hãy để Trái Đất nghe thấy điều ấy. 💚</p>
    </section>
  );
}
