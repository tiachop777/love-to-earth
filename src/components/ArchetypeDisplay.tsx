'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ArchetypeDisplay({
  archetype,
  quote,
  reply,
  icon,
  color,
}: {
  archetype: string;
  quote: string;
  reply: string;
  icon: string;
  color: string;
}) {
  const [copied, setCopied] = useState(false);
  const [hasShared, setHasShared] = useState(false);

  const handleShare = () => {
    const shareText = `${icon} Vai trò của tôi trong Love to Earth là ${archetype} 💚\n\n"${quote}"\n\n${reply}\n\nKhám phá tại: https://lovetoearth.org/quiz`;

    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setHasShared(true);

    setTimeout(() => setCopied(false), 3000);

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        'https://lovetoearth.org/quiz'
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleClickContinue = () => {
    if (!hasShared) {
      alert('📣 Hãy chia sẻ vai trò của bạn trong dự án Love to Earth trước khi tiếp tục hành trình khám phá nhé!');
    } else {
      window.location.href = '/soul-journey';
    }
  };

  return (
    <motion.div
      className={`rounded-2xl p-6 shadow-md ${color} space-y-4 max-w-3xl mx-auto`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        {icon} Vai trò của bạn là <span className="text-green-800">{archetype}</span>
      </h2>

      <p className="italic text-gray-700 text-center">{quote}</p>
      <p className="whitespace-pre-line text-gray-800 text-sm leading-relaxed">{reply}</p>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 pt-4 border-t border-green-300">
        <button
          onClick={handleShare}
          className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow"
        >
          📣 Chia sẻ kết quả lên Facebook (đã sao chép nội dung)
        </button>

        <button
          onClick={handleClickContinue}
          disabled={!hasShared}
          className={`text-sm px-4 py-2 rounded text-white shadow ${
            hasShared
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          ✨ Bạn muốn tiếp tục hành trình khám phá bản thân?
        </button>
      </div>

      {copied && (
        <p className="text-center text-green-700 text-sm mt-2">📋 Nội dung đã được sao chép!</p>
      )}
    </motion.div>
  );
}
