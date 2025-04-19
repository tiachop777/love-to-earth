'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LoveForm from '../components/LoveForm';
import MessageList from '../components/MessageList';
import IntroSection from '../components/IntroSection';
import IntroPurpose from '../components/IntroPurpose';
import WhoYouArePreview from '../components/WhoYouArePreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 via-white to-blue-100 p-6">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Phần tiêu đề */}
        <section className="space-y-6 text-center max-w-3xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">LoveToEarth 🌍</h1>
          </motion.div>

          {/* Đoạn mô tả chính */}
          <motion.div
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>
              <span className="font-semibold text-green-800">Tình yêu</span>{' '}
              chữa lành mọi thương tổn, hàn gắn mọi vết nứt, và xóa tan mọi bóng tối.
            </p>
            <p className="mt-4">
              Hãy cùng <span className="font-semibold text-green-800">lan tỏa yêu thương</span>, để{' '}
              <span className="italic text-green-700">Trái Đất</span> được chữa lành từ{' '}
              <span className="font-semibold text-green-800">trái tim nhân loại</span>. 💚
            </p>
          </motion.div>

          {/* Câu trích dẫn đẹp */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p className="text-lg md:text-xl font-medium italic leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-400 to-blue-500 drop-shadow-md">
              <span className="inline-flex items-center gap-1">✨ Một ánh sáng nhỏ</span>{' '}
              từ trái tim bạn, có thể lan tỏa khắp hành tinh này.
            </p>
          </motion.div>
        </section>

        {/* Giới thiệu dự án */}
        <IntroSection />

        {/* Các thí nghiệm */}
        <section className="grid md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: '🌱 Thí nghiệm cơm',
              desc: 'Cơm nhận năng lượng yêu thương lên men thơm ngọt, còn nhận tiêu cực thì mốc đen.',
              link: '/experiments/rice',
            },
            {
              title: '💧 Thí nghiệm nước (Emoto)',
              desc: 'Nước tạo kết tinh đẹp khi tiếp xúc với từ ngữ yêu thương và méo mó khi tiêu cực.',
              link: '/experiments/water',
            },
            {
              title: '🪴 Thí nghiệm cây của IKEA',
              desc: 'Hai cây: một được yêu thương và một bị xúc phạm. Kết quả khiến ta suy ngẫm.',
              link: '/experiments/plants',
            },
            {
              title: '🔬 Sóng ý niệm và Agni Yoga',
              desc: 'Tư tưởng yêu thương làm cây tươi tốt, còn sợ hãi khiến héo úa – theo Agni Yoga 387–390.',
              link: '/experiments/agni',
            },
          ].map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-white p-4 rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-green-700">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.desc}</p>
              <Link
                href={exp.link}
                className="text-sm text-green-700 underline mt-2 inline-block"
              >
                Đọc chi tiết
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Mục đích dự án */}
        <IntroPurpose />

        {/* Giới thiệu phần "Bạn là ai?" */}
        <WhoYouArePreview />

        {/* Form gửi lời yêu thương */}
        <motion.section
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold text-green-700 text-center mb-4">
            📝 Gửi lời yêu thương
          </h2>
          <LoveForm />
        </motion.section>

        {/* Danh sách lời yêu thương */}
        <MessageList />

        {/* Trích dẫn cuối trang */}
        <p className="text-sm text-gray-500 pt-6 italic">
          &quot;Tôi xin lỗi – Hãy tha thứ cho tôi – Cảm ơn bạn – Tôi yêu bạn.&quot; – Ho&apos;oponopono cho Trái Đất 🌱
        </p>
      </div>
    </main>
  );
}
