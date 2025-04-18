'use client';

import Link from 'next/link';

export default function InspirationPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-6 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
        🌿 Cảm hứng & Nghiên cứu
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-green-600 mb-3">📚 Mục lục:</h2>
        <ul className="list-disc list-inside space-y-1 text-green-800">
          <li><a href="#emoto" className="hover:underline">1. Masaru Emoto – Thí nghiệm nước</a></li>
          <li><a href="#rice" className="hover:underline">2. Thí nghiệm cơm – Năng lượng từ lời nói</a></li>
          <li><a href="#ikea" className="hover:underline">3. Cây của IKEA – Lời nói tạo thực tại</a></li>
          <li><a href="#agni" className="hover:underline">4. Agni Yoga – Tư tưởng và rung động</a></li>
        </ul>
      </section>

      {/* Các mục nghiên cứu */}
      <section id="emoto" className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-green-700">1. Masaru Emoto – Thí nghiệm nước</h2>
        <p>
          Nhà nghiên cứu người Nhật Masaru Emoto chụp ảnh kết tinh của nước sau khi tiếp xúc với những từ ngữ và ý niệm khác nhau.
          Nước tiếp xúc với lời yêu thương tạo ra hình dạng tinh thể đẹp như bông tuyết.
        </p>
        <p>
          🔗 <a href="https://www.masaru-emoto.net/en/" target="_blank" className="text-blue-600 underline">Xem thêm</a>
        </p>
      </section>

      <section id="rice" className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-green-700">2. Thí nghiệm cơm – Năng lượng từ lời nói</h2>
        <p>
          Hai hũ cơm: một được yêu thương, một bị chửi. Sau vài tuần, hũ bị chửi mốc đen, còn hũ yêu thương lên men thơm ngọt.
        </p>
      </section>

      <section id="ikea" className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-green-700">3. Cây của IKEA – Lời nói tạo thực tại</h2>
        <p>
          Một cây được khen, một cây bị chửi. Sau vài tuần, cây bị chửi héo úa, cây được yêu thương thì xanh tốt.
        </p>
        <p>
          🔗 <a href="https://www.youtube.com/watch?v=Yx6UgfQreYY" target="_blank" className="text-blue-600 underline">Xem video</a>
        </p>
      </section>

      <section id="agni" className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold text-green-700">4. Agni Yoga – Tư tưởng và rung động</h2>
        <p>
          Agni Yoga (387–390) mô tả ảnh hưởng của tư tưởng đến môi trường: yêu thương làm cây cối phát triển, sợ hãi khiến chúng héo úa.
        </p>
        <p>
          🔗 <a href="https://agniyoga.org" target="_blank" className="text-blue-600 underline">Đọc thêm</a>
        </p>
      </section>

      <div className="text-center mt-12">
        <Link href="/" className="text-green-700 underline hover:text-green-900">
          ← Quay lại trang chính
        </Link>
      </div>
    </main>
  );
}
