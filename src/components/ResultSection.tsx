'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ResultSection() {
  const searchParams = useSearchParams();
  const [svgUrl, setSvgUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChart = async () => {
      const date = searchParams.get('date');
      const time = searchParams.get('time');
      const [hour, minute] = (time || '12:00').split(':');
      const place = searchParams.get('place') || 'Hanoi';

      const latitude = 21.0285; // placeholder
      const longitude = 105.8542;
      const timezone = 7;

      try {
        const res = await fetch('/api/astro/chart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            year: Number(date?.split('-')[0]),
            month: Number(date?.split('-')[1]),
            date: Number(date?.split('-')[2]),
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
          setError('Không thể tạo bản đồ sao.');
        }
      } catch {
        setError('Đã xảy ra lỗi khi tạo bản đồ sao.');
      } finally {
        setLoading(false);
      }
    };

    fetchChart();
  }, [searchParams]);

  if (loading) return <p>Đang tạo bản đồ sao cho bạn... 🪐</p>;
  if (error) return <p className="text-red-600 font-medium">{error}</p>;

  return (
    <>
      <Image
        src={svgUrl!}
        alt="Bản đồ sao"
        width={800}
        height={600}
        className="w-full max-w-2xl mx-auto rounded-lg shadow"
        unoptimized
      />
      <button
        className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow"
        onClick={() => alert('🚧 Tính năng đang được phát triển...')}
      >
        🔮 Nhận thư linh hồn từ bản đồ sao
      </button>
    </>
  );
}
