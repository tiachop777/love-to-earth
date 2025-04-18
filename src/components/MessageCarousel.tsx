'use client';

import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function MessageCarousel() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(
        collection(db, 'loveMessages'),
        orderBy('createdAt', 'desc'),
        limit(10)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data().message);
      setMessages(data);
    };
    fetchMessages();
  }, []);

  if (messages.length === 0) return null;

  return (
    <div className="mt-10 max-w-3xl mx-auto px-4 text-left">
      <h3 className="text-green-700 font-semibold mb-3">🌱 10 lời yêu thương gần nhất:</h3>
      <ul className="space-y-2 text-gray-800 text-sm md:text-base list-disc list-inside">
        {messages.map((msg, i) => (
          <li key={i} className="italic">“{msg}”</li>
        ))}
      </ul>
    </div>
  );
}
