'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'; // ✅ Thêm import Image

export default function AstroResultPage() {
  const searchParams = useSearchParams();
  const [svgUrl, setSvgUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChart = async () => {
      const date = searchParams.get('date');
      const month = searchParams.get('month');
      const year = searchParams.get('year');
      const hour = searchParams.get('hour') || '12';
      const minute = searchParams.get('minute') || '0';
      // ❌ Đã xoá dòng: const place = searchParams.get('place') || 'Hanoi';

      const latitude = 21.0285;
      const longitude = 105.8542;
      const timezone = 7;

      try {
        const res = await fetch('/api/astro/chart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            year: Number(year),
            month: Number(month),
            date: Number(date),
            hours: Number(hour),
            minutes: Number(minute),
            seconds: 0,
            latitude,
            longitude,
            timezone,
          }),
        });

        const data = await res.json();
        if (data.svgUrl) {
          setSvgUrl(data.svgUrl);
        } else {
          setError('Không thể tạo bản đồ sao. Vui lòng thử lại sau.');
        }
      } catch (err) {
        console.error('Lỗi khi tạo bản đồ sao:', err);
        setError('Đã xảy ra lỗi trong quá trình xử lý.');
      } finally {
        setLoading(false);
      }
    };

    fetchChart();
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-indigo-800">🔭 Bản đồ sao sơ bộ của bạn</h1>

        {loading && (
          <div className="text-gray-700 space-y-2">
            <p>Đang tạo bản đồ sao cho bạn... 🪐</p>
          </div>
        )}

        {error && (
          <div className="text-red-600 font-medium">{error}</div>
        )}

        {svgUrl && (
          <>
            <Image
              src={svgUrl}
              alt="Bản đồ sao"
              width={800}
              height={600}
              className="w-full max-w-2xl mx-auto rounded-lg shadow"
              unoptimized // Cho phép dùng ảnh URL động không tối ưu hóa qua Next.js
            />
            <button
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow"
              onClick={() => alert('🚧 Tính năng đang được phát triển...')}
            >
              🔮 Nhận thư linh hồn từ bản đồ sao
            </button>
          </>
        )}

        <p className="text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
          ✨ Bản đồ sao này phản ánh vị trí của các hành tinh vào thời điểm bạn chào đời. <br />
          Chúng mình sẽ tiếp tục phân tích và gửi tới bạn một <strong>thư linh hồn</strong> dựa trên biểu đồ này 💌
        </p>
      </div>
    </main>
  );
}
