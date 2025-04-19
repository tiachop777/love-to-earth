
'use client';

import { useState } from 'react';

export default function SoulJourneyPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-4 text-center">
      {!showForm ? (
        <div className="max-w-xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800">
            🌌 Cánh Cửa Vũ Trụ
          </h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Bạn đã khám phá được vai trò của mình trong hành trình chữa lành Trái Đất.
            <br />
            Nhưng sâu hơn nữa… bạn có biết:
            <br />
            🌠 Bạn được sinh ra dưới bầu trời như thế nào?
            <br />
            🔮 Những nguồn năng lượng nào đang định hình tâm hồn bạn?
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded shadow"
          >
            ✨ Mở Cánh Cửa – Bắt đầu khám phá
          </button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-700">📜 Nhập thông tin ngày sinh của bạn</h2>
          <p className="text-sm text-gray-600">
            Chúng mình sẽ dùng thông tin này để tạo bản đồ sao sơ bộ – từ đó giúp bạn hiểu rõ hơn về ảnh hưởng của các cung và hành tinh đến linh hồn bạn.
          </p>
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input type="date" className="mt-1 w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Giờ sinh (nếu nhớ)</label>
              <input type="time" className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nơi sinh (tỉnh/thành phố)</label>
              <input type="text" className="mt-1 w-full border rounded px-3 py-2" placeholder="VD: Đà Nẵng" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              🔮 Gửi thông tin & tiếp tục
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
