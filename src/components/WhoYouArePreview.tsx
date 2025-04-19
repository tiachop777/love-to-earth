'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhoYouArePreview() {
  const roles = [
    {
      emoji: '🔥',
      title: 'Người Thắp Lửa',
      desc: 'Bạn mang lại động lực, đam mê và ngọn lửa hành động cho cộng đồng.',
    },
    {
      emoji: '🌊',
      title: 'Người Chữa Lành',
      desc: 'Bạn lắng nghe, ôm ấp và giúp người khác trở về trạng thái cân bằng.',
    },
    {
      emoji: '🌿',
      title: 'Người Gieo Hạt',
      desc: 'Bạn gieo ý tưởng tích cực, truyền cảm hứng từ những điều giản dị nhất.',
    },
    {
      emoji: '🌸',
      title: 'Người Làm Dịu',
      desc: 'Bạn đem lại sự nhẹ nhàng, cái đẹp và sự hài hòa trong không gian sống.',
    },
    {
      emoji: '🌞',
      title: 'Người Chiếu Sáng',
      desc: 'Bạn giúp soi sáng vấn đề bằng sự hiểu biết, tầm nhìn và trực giác sâu sắc.',
    },
    {
      emoji: '🪶',
      title: 'Người Quan Sát',
      desc: 'Bạn trầm lặng, sâu sắc và luôn nhìn ra điều tinh tế trong cuộc sống.',
    },
    {
      emoji: '🌀',
      title: 'Người Kết Nối',
      desc: 'Bạn tạo cầu nối giữa người với người – giữa con người và thiên nhiên.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-10 px-4 text-center space-y-6">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-green-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ Bạn là ai trong hành trình chữa lành Trái Đất?
      </motion.h2>

      <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        Mỗi người chúng ta đều có một vai trò đặc biệt. Có người gieo hạt, có người thắp lửa.  
        Có người lặng lẽ lắng nghe, có người lan tỏa ánh sáng.
        <br />
        <span className="font-semibold text-green-600">Bạn đang mang món quà gì đến cho Trái Đất?</span>
      </p>

      <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
        Trong dự án <span className="font-semibold text-green-700">Love to Earth</span>, mỗi lời chúc được gửi đi, mỗi cảm xúc tích cực bạn góp vào – đều phản ánh ánh sáng riêng của bạn.  
        <span className="italic">Vai trò của bạn không chỉ là tên gọi, mà là cách bạn lan tỏa tình yêu đến hành tinh này.</span>
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-xl shadow p-4 ${
              index === 6 ? 'md:col-start-2' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="text-3xl mb-2">{role.emoji}</div>
            <h3 className="font-semibold text-green-700">{role.title}</h3>
            <p className="text-sm text-gray-600">{role.desc}</p>
          </motion.div>
        ))}
      </div>

      <Link
        href="/who-are-you"
        className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
      >
        🔍 Khám phá vai trò của bạn
      </Link>
    </section>
  );
}
