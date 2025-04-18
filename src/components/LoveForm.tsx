'use client';

import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';
import { motion } from 'framer-motion';

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
    return true;
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
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'loveMessages'));
        setCount(snapshot.size);
      } catch (error) {
        console.error('Không thể lấy số lượng lời chúc:', error);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) {
      alert('Hãy gửi năng lượng tích cực và tình yêu đến Trái đất 💚');
      return;
    }

    setLoading(true);

    const isBad = await isMessageNegative(trimmed);
    if (isBad) {
      alert('Thông điệp có vẻ tiêu cực. Hãy gửi yêu thương và ánh sáng 💫');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'loveMessages'), {
        message: trimmed,
        createdAt: serverTimestamp(),
        likes: 0,
      });

      const aiReply = await groqReply(trimmed);
      setReply(aiReply);

      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      setCount((prev) => (prev !== null ? prev + 1 : null));
    } catch (error) {
      console.error('Lỗi khi gửi:', error);
      alert('Gửi thất bại, thử lại nhé!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-3 max-w-xl mx-auto"
        animate={success ? { boxShadow: '0 0 30px 5px #86efac' } : {}}
        transition={{ duration: 0.5 }}
      >
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
          <div className="text-green-800 text-base italic bg-green-50 border border-green-200 rounded-xl p-4 shadow mt-2">
            {reply}
          </div>
        )}

        {reply && (
          <div className="mt-3 text-center">
            <button
              onClick={() => {
                const shareText = `${reply}\n\nGửi lời yêu thương đến Trái Đất tại https://lovetoearth.org`;
                navigator.clipboard.writeText(shareText);
                window.open(
                  'https://www.facebook.com/sharer/sharer.php?u=https://lovetoearth.org',
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl text-sm shadow"
            >
              📣 Chia sẻ lời yêu thương lên Facebook (đã sao chép nội dung)
            </button>
          </div>
        )}

        {count !== null && (
          <div className="text-center text-sm text-gray-600 mt-6">
            🌍 Đã có hơn{' '}
            <span className="font-bold text-green-700 text-lg animate-pulse">
              {count.toLocaleString()}
            </span>{' '}
            lời yêu thương được gửi đến Trái Đất 💚
          </div>
        )}
      </motion.form>

      {success && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.3, 0] }}
          transition={{ duration: 1.5, repeat: 1 }}
          className="w-32 h-32 rounded-full bg-green-300 opacity-50 mx-auto mt-6"
        />
      )}
    </>
  );
}
