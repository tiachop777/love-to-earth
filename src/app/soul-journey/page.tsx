'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SoulJourneyPage() {
  const [step, setStep] = useState<'intro' | 'form' | 'options'>('intro');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Encode parameters để gửi qua URL
    const params = new URLSearchParams({
      date: birthDate,
      time: birthTime,
      place: birthPlace,
    });

    router.push(`/soul-journey/result?${params.toString()}`);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: "url('/images/cosmic-door.jpg')" }}
    >
      <motion.div
        className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-xl max-w-lg w-full space-y-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {step === 'intro' && (
          <>
            <h1 className="text-3xl font-bold text-indigo-800">🌌 Cánh Cửa Vũ Trụ</h1>
            <p className="text-gray-800 leading-relaxed">
              Bạn đã khám phá được vai trò của mình trong hành trình chữa lành Trái Đất.
              <br /> Nhưng sâu hơn nữa… bạn có biết:
              <br /> 🌠 Bạn được sinh ra dưới bầu trời như thế nào?
              <br /> 🔮 Những nguồn năng lượng nào đang định hình tâm hồn bạn?
            </p>
            <button
              onClick={() => setStep('form')}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded shadow"
            >
              🔓 Mở khóa
            </button>
          </>
        )}

        {step === 'form' && (
          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-indigo-700 text-center">
              📜 Nhập thông tin ngày sinh của bạn
            </h2>
            <p className="text-sm text-gray-700 text-center">
              Chúng mình sẽ dùng thông tin này để tạo bản đồ sao sơ bộ – từ đó giúp bạn hiểu rõ hơn về ảnh hưởng của các cung và hành tinh đến linh hồn bạn.
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Giờ sinh (nếu nhớ)</label>
              <input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nơi sinh (tỉnh/thành phố)</label>
              <input
                type="text"
                value={birthPlace}
                onChange={(e) => setBirthPlace(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 text-black"
                placeholder="VD: Đà Nẵng"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              ✨ Tiếp tục
            </button>
          </form>
        )}
      </motion.div>
    </main>
  );
}
