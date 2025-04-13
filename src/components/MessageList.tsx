'use client';

import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  DocumentData,
  doc,
  updateDoc,
} from 'firebase/firestore';

export default function MessageList() {
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'loveMessages'),
      orderBy('createdAt', 'desc'),
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(docs);
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  const handleLike = async (id: string, currentLikes: number = 0) => {
    try {
      const ref = doc(db, 'loveMessages', id);
      await updateDoc(ref, {
        likes: currentLikes + 1,
      });
    } catch (err) {
      console.error('Lỗi khi like:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-xl mx-auto mt-10 text-left max-h-80 overflow-y-auto">
      <h3 className="text-green-700 font-bold mb-2">
        🌱 10 lời yêu thương gần nhất:
      </h3>
      <ul className="space-y-2 text-gray-800 text-sm">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className="bg-green-50 p-3 rounded-xl border border-green-200 flex justify-between items-center"
          >
            <span>{msg.message}</span>
            <button
              onClick={() => handleLike(msg.id, msg.likes)}
              className="text-red-500 text-xs hover:scale-110 transition"
            >
              ❤️ {msg.likes ?? 0}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
