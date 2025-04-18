'use client';

import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export default function IntroSection() {
  const paragraphs = [
    '💚 Love to Earth – Nơi những lời chúc thành tiếng gió',
    'Bạn đã bao giờ cảm nhận Trái Đất… thở?',
    'Tại Love to Earth, chúng mình gom những nhịp tim hiền lành – biến chúng thành làn sóng chữa lành lan khắp hành tinh.',
    'Mỗi khi bạn gửi đi một lời chúc, mỗi ý nghĩ thiện lành bạn ấp ủ, chính là tia sáng đan vào trường năng lượng tích cực của thế giới.',
    'Ý tưởng này không chỉ là niềm tin – nó được khơi cảm hứng từ thí nghiệm nước của Masaru Emoto, từ những bông hoa IKEA “được khen” tươi lâu, và từ các thực hành thiền cổ xưa.',
    'Bạn cũng có thể thử ngay: nhắm mắt, thì thầm “Cám ơn” với mặt đất dưới chân. Hãy xem bạn cảm nhận gì trong khoảnh khắc đó.',
    'Chúng ta không cần phép màu to lớn để thay đổi thế giới, chỉ cần một hạt mầm yêu thương – bắt đầu từ bạn, tại đây, ngay bây giờ. 💚',
  ];

  return (
    <section className="max-w-3xl mx-auto text-center space-y-4 text-gray-700 text-base leading-relaxed mt-10 px-4">
      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          className={i === 0 ? 'text-2xl font-semibold text-green-700' : ''}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          variants={fadeInVariants}
        >
          {text}
        </motion.p>
      ))}
      <motion.div
        className="text-3xl mt-4"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        💚
      </motion.div>
    </section>
  );
}
