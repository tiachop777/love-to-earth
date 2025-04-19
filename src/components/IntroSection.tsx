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
    '💚 Love to Earth – Gửi một lời chúc, gieo một làn sóng yêu thương',
    'Bạn đã bao giờ cảm thấy Trái Đất… thở cùng mình?',
    'Có thể là lúc bạn đặt chân trần lên cỏ, hoặc thì thầm "Cảm ơn" với trời xanh. Đó là những khoảnh khắc nhỏ, nhưng lại chứa đựng kết nối rất lớn.',
    'Love to Earth ra đời từ niềm tin giản dị ấy – rằng mỗi suy nghĩ đẹp, mỗi lời chúc chân thành, đều là một làn sóng chữa lành đang âm thầm lan tỏa.',
    'Niềm tin này được truyền cảm hứng từ những thí nghiệm có thật: nước tạo hình đẹp khi nghe lời yêu thương, cơm lên men ngọt khi được quan tâm, cây phát triển tốt hơn khi được nói lời tử tế…',
    'Chúng mình tin rằng cảm xúc và tư tưởng không chỉ nằm trong tâm trí – chúng thực sự có thể chạm đến thế giới vật chất, và cả Trái Đất nữa.',
    'Bạn có thể bắt đầu từ điều nhỏ nhất: nhắm mắt, đặt tay lên tim, và thì thầm một câu "Cảm ơn" với mặt đất dưới chân bạn.',
    'Không cần đợi phép màu. Một hạt mầm yêu thương – bắt đầu từ bạn – là đã đủ để thế giới trở nên dịu dàng hơn rồi. 💚',
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
