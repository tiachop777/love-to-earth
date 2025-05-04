import { Suspense } from 'react';
import ResultSection from '@/components/ResultSection'; // Đảm bảo đúng path

export default function AstroResultPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-indigo-800">🔭 Bản đồ sao sơ bộ của bạn</h1>

        <Suspense fallback={<p>Đang tải bản đồ sao... 🪐</p>}>
          <ResultSection />
        </Suspense>

        <p className="text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
          ✨ Bản đồ sao này phản ánh vị trí của các hành tinh vào thời điểm bạn chào đời. <br />
          Chúng mình sẽ gửi bạn một <strong>thư linh hồn</strong> dựa trên biểu đồ này 💌
        </p>
      </div>
    </main>
  );
}
