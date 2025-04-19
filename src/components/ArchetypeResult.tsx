'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ArchetypeResult({
  reply,
  archetype,
}: {
  reply: string;
  archetype: string;
}) {
  const archetypeData: Record<string, { icon: string; color: string; quote: string }> = {
    'Người Thắp Lửa': {
      icon: '🔥',
      color: 'bg-orange-100',
      quote: 'Ngọn lửa nhỏ bé nhất cũng có thể thiêu cháy cả màn đêm.',
    },
    'Người Chữa Lành': {
      icon: '💧',
      color: 'bg-blue-100',
      quote: 'Đôi khi sự hiện diện lặng thầm chính là phép màu chữa lành lớn nhất.',
    },
    'Người Truyền Cảm Hứng': {
      icon: '🌟',
      color: 'bg-yellow-100',
      quote: 'Khi bạn tin vào ánh sáng, bạn sẽ trở thành ngọn đuốc cho người khác.',
    },
    'Người Làm Dịu': {
      icon: '🍃',
      color: 'bg-green-100',
      quote: 'Mỗi hành động đẹp là một nhịp thở an lành gửi vào vũ trụ.',
    },
    'Người Chiếu Sáng': {
      icon: '🔦',
      color: 'bg-indigo-100',
      quote: 'Sự hiểu biết là ngọn đèn không bao giờ tắt.',
    },
    'Người Kiến Tạo': {
      icon: '🏗️',
      color: 'bg-gray-100',
      quote: 'Mỗi viên gạch bạn đặt xuống hôm nay là nền móng cho thế giới ngày mai.',
    },
    'Người Kết Nối': {
      icon: '🕸️',
      color: 'bg-pink-100',
      quote: 'Chúng ta là từng nhịp đập trong cùng một trái tim rộng lớn gọi là nhân loại.',
    },
  };

  const [copied, setCopied] = useState(false);

  const data = archetypeData[archetype?.trim()];
  const fallback = {
    icon: '✨',
    color: 'bg-gray-50',
    quote: 'Bạn mang một ánh sáng độc đáo chưa được đặt tên – và đó chính là vẻ đẹp của bạn.',
  };

  const displayData = data || fallback;

  const handleShare = () => {
    const shareUrl = 'https://lovetoearth.org/quiz';
    const shareText = `${displayData.icon} Vai trò của tôi trong Love to Earth là ${archetype} 💚\n\n"${displayData.quote}"\n\n${reply}\n\nKhám phá tại: ${shareUrl}`;

    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <motion.div
      className={`rounded-2xl p-6 shadow-md ${displayData.color} space-y-4 max-w-3xl mx-auto`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        {displayData.icon} Vai trò của bạn là <span className="text-green-800">{archetype}</span>
      </h2>

      <p className="italic text-gray-700">{displayData.quote}</p>
      <p className="whitespace-pre-line text-gray-800 text-sm leading-relaxed">{reply}</p>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-green-300">
        <button
          onClick={handleShare}
          className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow"
        >
          📣 Chia sẻ kết quả lên Facebook (đã sao chép nội dung)
        </button>

        <a
          href="/soul-journey"
          className="text-sm px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-center"
        >
          ✨ Bạn muốn tiếp tục hành trình khám phá bản thân?
        </a>
      </div>

      {copied && (
        <p className="text-center text-green-700 text-sm mt-2">📋 Nội dung đã được sao chép!</p>
      )}
    </motion.div>
  );
}
