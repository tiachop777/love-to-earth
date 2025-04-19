'use client';

import Quiz from '@/components/Quiz'; // Đảm bảo đường dẫn đúng nhé

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 p-6">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          🌍 Trắc nghiệm linh hồn: Bạn là ai trong Love to Earth?
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
          Mỗi người chúng ta đều tỏa ra một tần số riêng biệt – một luồng ánh sáng đặc trưng.
          <br />
          Hãy trả lời <strong>7 câu hỏi</strong> dưới đây để khám phá vai trò linh hồn của bạn trong hành trình chữa lành Trái Đất 💚
        </p>

        <div className="bg-green-100 p-4 rounded-lg border border-green-300 text-green-900 max-w-xl mx-auto text-sm">
          👉 Với mỗi câu hỏi:
          <ul className="list-disc list-inside text-left mt-2 space-y-1">
            <li>Chọn <strong>1 lựa chọn duy nhất</strong> nếu bạn cảm thấy rõ ràng nhất</li>
            <li>Hoặc chọn <strong>tối đa 3 lựa chọn</strong> để thể hiện bức tranh đầy đủ hơn về bạn</li>
            <li>Mỗi lựa chọn đều phản ánh ánh sáng bạn đang mang 💫</li>
          </ul>
        </div>

        <Quiz />
      </div>
    </main>
  );
}
