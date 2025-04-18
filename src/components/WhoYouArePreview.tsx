// src/components/WhoYouArePreview.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhoYouArePreview() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md text-center max-w-3xl mx-auto">
      <motion.h2
        className="text-2xl font-bold text-green-700 mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        💫 Bạn là ai trong dự án Love to Earth?
      </motion.h2>

      <motion.div
        className="space-y-4 text-gray-700 text-base leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>
          Có thể bạn không phải là nhà khoa học. Không phải nhà hoạt động.
          Không mang danh xưng 
          “người thay đổi thế giới”.
        </p>
        <p>
          Nhưng bạn vẫn đang rung động cùng Trái Đất – từng nhịp đập nhẹ,
          từng lời thì thầm lặng lẽ.
        </p>
        <p>
          Trong hành trình của <strong>Love to Earth</strong>, mỗi người là
          một ánh sáng riêng biệt. Không ai giống ai. Và mọi ánh sáng đều
          quan trọng.
        </p>
        <div className="text-left inline-block text-gray-700">
          <ul className="list-disc list-inside space-y-1 text-left">
            <li>🌱 Có người gieo lời chúc lành mỗi sáng.</li>
            <li>💧 Có người chỉ lặng lẽ biết ơn khi uống một ngụm nước.</li>
            <li>🔥 Có người ôm lấy Trái Đất bằng sự tha thứ.</li>
            <li>🌈 Và có bạn – người đang đọc những dòng này.</li>
          </ul>
        </div>
        <p>
          Hãy dừng lại một chút. Lắng nghe tiếng gọi bên trong bạn. <br />
          <strong>
            Bạn đến đây để đóng vai trò gì trong sự chữa lành này?
          </strong>
        </p>
        <div className="pt-4">
          <Link
            href="/who-are-you"
            className="bg-green-600 text-white py-2 px-6 rounded-xl hover:bg-green-700 inline-block transition"
          >
            🌟 Khám phá bản thân
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
