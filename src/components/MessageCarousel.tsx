'use client';

import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

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
    <div className="mt-10 text-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="!overflow-visible"
      >
        {messages.map((msg, i) => (
          <SwiperSlide key={i}>
            <p className="italic text-green-800 text-base md:text-lg">
              “{msg}”
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
