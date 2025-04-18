'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const archetypes = [
  {
    title: '⚡️ Người Khởi Xướng',
    description:
      'Bạn là tia sét đầu tiên xé tan bầu trời tĩnh, khơi dậy khát khao hành động. Sự quả cảm của bạn truyền động năng và đánh thức những trái tim còn do dự.',
    contribution:
      'Nhen nhóm những chiến dịch xanh, dũng cảm kêu gọi cộng đồng đứng lên vì Mẹ Trái Đất.',
  },
  {
    title: '🌞 Người Giữ Ánh Sáng',
    description:
      'Bạn hiện diện như bình minh dịu dàng, toả ra sự ấm áp chữa lành. Bạn lắng nghe bằng trái tim và ôm trọn nỗi niềm người khác.',
    contribution:
      'Mở vòng tay dẫn dắt thiền yêu thương, trao đi lời an ủi, nuôi dưỡng bình an cho mọi người.',
  },
  {
    title: '🤝 Người Kết Nối',
    description:
      'Bạn là sợi chỉ thầm lặng nối những mảnh ghép rời rạc thành bức tranh hài hoà. Bạn nhìn thấy tiềm năng hợp lực nơi mỗi người.',
    contribution:
      'Tổ chức không gian gặp gỡ, điều phối dự án và đan xen những bàn tay chưa từng chạm nhau.',
  },
  {
    title: '🎨 Người Sáng Tạo Vẻ Đẹp',
    description:
      'Bạn biến nỗi đau thành sắc màu, biến câu chuyện thành giai điệu. Vẻ đẹp bạn tạo ra mở cánh cửa cảm xúc và gieo hạt yêu thương.',
    contribution:
      'Hãy vẽ, viết, hát, quay phim – để cái đẹp đánh thức lòng trắc ẩn dành cho Trái Đất.',
  },
  {
    title: '🔍 Người Khai Sáng Chân Lý',
    description:
      'Bạn say mê sự thật như hạt mầm tìm ánh mặt trời. Tư duy mạch lạc của bạn rọi sáng con đường.',
    contribution:
      'Chia sẻ kiến thức khoa học, viết bài, dẫn dắt những trải nghiệm khám phá để lan toả hiểu biết.',
  },
  {
    title: '❤️‍🔥 Người Truyền Cảm Hứng',
    description:
      'Bạn là ngọn lửa bập bùng trong đêm, cháy bằng niềm tin mãnh liệt. Nhiệt thành của bạn thắp sáng hy vọng.',
    contribution:
      'Kể những câu chuyện lay động, dẫn lễ cầu nguyện, huy động nguồn lực cho những ước mơ chung.',
  },
  {
    title: '🌱 Người Kiến Tạo',
    description:
      'Bạn nhìn thấy hình hài của tương lai trong hạt mầm hiện tại. Bạn kiên nhẫn xây nền móng cho điều thiêng liêng thành hiện thực.',
    contribution:
      'Thiết kế lộ trình, dựng những không gian linh thiêng và biến ý tưởng thành công trình bền vững.',
  },
];

export default function WhoAreYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-100 p-6">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✨ 7 Vai Trò trong LoveToEarth
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Mỗi chúng ta toả ra một tần số độc đáo. Hãy lắng nghe nhịp đập trái tim mình và khám phá con đường bạn có thể thắp sáng Trái Đất 🌍
        </motion.p>

        <section className="grid md:grid-cols-2 gap-6 text-left">
          {archetypes.map((type, i) => (
            <motion.div
              key={type.title}
              className="bg-white rounded-xl shadow-md p-6 space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <h2 className="text-xl font-bold text-green-700">{type.title}</h2>
              <p className="text-sm text-gray-700">{type.description}</p>
              <p className="text-sm text-green-700 font-medium">{type.contribution}</p>
            </motion.div>
          ))}
        </section>

        <div className="pt-6">
          <Link href="/" className="text-green-700 underline text-sm">⬅️ Quay về trang chủ</Link>
        </div>
      </div>
    </main>
  );
}
