'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SoulJourneyPage() {
  const [step, setStep] = useState<'intro' | 'form' | 'options'>('intro');

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: "url('/images/cosmic-door.jpg')" }} // Đảm bảo bạn có hình ảnh này trong public/images
    >
      <motion.div
        className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-lg w-full space-y-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {step === 'intro' && (
          <>
            <h1 className="text-3xl font-bold text-indigo-800">🌌 Cánh Cửa Vũ Trụ</h1>
            <p className="text-gray-700 leading-relaxed">
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
          <form
            className="space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setStep('options');
            }}
          >
            <h2 className="text-xl font-semibold text-indigo-700 text-center">
              📜 Nhập thông tin ngày sinh của bạn
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Chúng mình sẽ dùng thông tin này để tạo bản đồ sao sơ bộ – từ đó giúp bạn hiểu rõ hơn về ảnh hưởng của các cung và hành tinh đến linh hồn bạn.
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input type="date" className="mt-1 w-full border rounded px-3 py-2 text-black" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Giờ sinh (nếu nhớ)</label>
              <input type="time" className="mt-1 w-full border rounded px-3 py-2 text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nơi sinh (tỉnh/thành phố)</label>
              <input type="text" className="mt-1 w-full border rounded px-3 py-2 text-black" placeholder="VD: Đà Nẵng" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              ✨ Tiếp tục
            </button>
          </form>
        )}

        {step === 'options' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-indigo-700">🪐 Tiếp theo, bạn muốn:</h2>
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              🔭 Tự nhập vị trí hành tinh (cho người đã biết bản đồ sao)
            </button>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              ✍️ Sử dụng mẫu để chúng tôi giúp bạn tạo bản đồ sao
            </button>
          </div>
        )}
      </motion.div>
    </main>
  );
}
