'use client';

import { useState } from 'react';
import ArchetypeResult from '@/components/ArchetypeResult';

export default function PreviewPage() {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState('');
  const [archetype, setArchetype] = useState('');

  const sampleAnswers = [
    "Truyền cảm hứng, nói những lời khích lệ lay động",
    "Nhìn xung quanh xem ai đang bị lạc lõng và bắt chuyện trước",
    "Khởi xướng những kế hoạch, trò chơi, hoạt động",
    "Gợi cảm hứng ban đầu, nói lên “tại sao” chúng ta cần làm việc đó",
    "Gieo cảm hứng và lý tưởng để mọi người cùng tin tưởng",
    "Truyền cho họ niềm tin và hy vọng bằng câu chuyện",
    "Là tia sáng nâng đỡ lý tưởng của nhân loại"
  ];

  const handleTest = async () => {
    setLoading(true);
    const res = await fetch('/api/groq/route', {
      method: 'POST',
      body: JSON.stringify({ answers: sampleAnswers })
    });

    const data = await res.json();
    setReply(data.reply);
    setArchetype(data.archetype);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">🔍 Test kết quả Archetype</h1>

      <button
        onClick={handleTest}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        {loading ? 'Đang phân tích...' : '✨ Thử với bộ đáp án mẫu'}
      </button>

      {reply && archetype && (
        <div className="mt-8">
          <ArchetypeResult main={archetype} responseText={reply} />
        </div>
      )}
    </div>
  );
}
