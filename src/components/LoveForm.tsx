'use client';

import { useState } from 'react';
import { db } from '../firebase/firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

const isMessageNegative = async (message: string): Promise<boolean> => {
  try {
    const res = await fetch('/api/groq/moderate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    return data.isNegative;
  } catch (err) {
    console.error('Lỗi kiểm duyệt AI:', err);
    return true; // Nếu lỗi, giả định là tiêu cực
  }
};

const groqReply = async (message: string): Promise<string> => {
  try {
    const res = await fetch('/api/groq/thank', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    return data.reply;
  } catch (err) {
    console.error('Lỗi phản hồi AI:', err);
    return '💚 Cảm ơn bạn vì lời chúc tích cực!';
  }
};

export default function LoveForm() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [reply, setReply] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) {
      alert('Hãy viết điều gì đó có ý nghĩa 💚');
      return;
    }

    setLoading(true);

    // ✅ 1. Gọi API kiểm duyệt AI
    const isBad = await isMessageNegative(trimmed);
    if (isBad) {
      alert('Thông điệp có vẻ tiêu cực. Hãy gửi yêu thương và ánh sáng 💫');
      setLoading(false);
      return;
    }

    try {
      // ✅ 2. Gửi lên Firestore
      await addDoc(collection(db, 'loveMessages'), {
        message: trimmed,
        createdAt: serverTimestamp(),
        likes: 0,
      });

      // ✅ 3. Nhận phản hồi cảm ơn từ AI
      const aiReply = await groqReply(trimmed);
      setReply(aiReply);

      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Lỗi khi gửi:', error);
      alert('Gửi thất bại, thử lại nhé!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-xl mx-auto">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Gửi một lời yêu thương đến Trái Đất..."
        className="w-full p-3 rounded-xl border border-gray-300 text-black"
        rows={4}
        maxLength={200}
      />
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700"
        disabled={loading}
      >
        {loading ? 'Đang gửi...' : 'Gửi lời yêu thương'}
      </button>

      {success && (
        <p className="text-green-700 text-sm mt-2">
          💚 Lời yêu thương đã được gửi!
        </p>
      )}

      {reply && (
        <div className="text-green-800 text-sm italic bg-green-50 border border-green-200 rounded-xl p-3 shadow mt-2">
          {reply}
        </div>
      )}
    </form>
  );
}
