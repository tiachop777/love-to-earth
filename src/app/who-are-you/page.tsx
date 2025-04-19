'use client';

import React from 'react';
import Link from 'next/link';

const archetypes = [
  {
    emoji: '🔥',
    title: 'Người Thắp Lửa',
    description:
      'Bạn là tia sét đầu tiên xé tan bầu trời tĩnh. Sự quả cảm của bạn truyền động năng và đánh thức những trái tim còn do dự.',
    contribution:
      'Nhen nhóm chiến dịch xanh, khơi gợi cộng đồng đứng lên vì Mẹ Trái Đất.',
    energy:
      'Bạn mang năng lượng của người tiên phong. Ý chí của bạn là chất xúc tác mạnh mẽ cho chuyển động tích cực.',
    quote: '“Người thắp lửa không đợi ngọn gió thuận, họ chính là ngọn gió.”',
  },
  {
    emoji: '🌊',
    title: 'Người Chữa Lành',
    description:
      'Bạn hiện diện như bình minh dịu dàng, ôm trọn nỗi niềm người khác.',
    contribution:
      'Dẫn dắt thiền yêu thương, nuôi dưỡng bình an trong cộng đồng.',
    energy:
      'Bạn sống với ánh sáng của người chữa lành sâu sắc. Sự có mặt của bạn là liệu pháp.',
    quote: '“Sự dịu dàng của bạn là sức mạnh thầm lặng nhất trên đời.”',
  },
  {
    emoji: '🌿',
    title: 'Người Gieo Hạt',
    description:
      'Bạn biến nỗi đau thành sắc màu. Vẻ đẹp bạn tạo ra đánh thức lòng trắc ẩn.',
    contribution:
      'Vẽ, viết, quay phim – để cái đẹp lay động ý thức về Trái Đất.',
    energy:
      'Bạn sống với năng lượng của người kiến tạo hài hòa. Cái đẹp của bạn mang tính chữa lành.',
    quote: '“Sự dịu dàng là hình thức cao nhất của cái đẹp.”',
  },
  {
    emoji: '🌸',
    title: 'Người Làm Dịu',
    description:
      'Bạn say mê sự thật như hạt mầm tìm ánh mặt trời. Sự sáng rõ là món quà của bạn.',
    contribution:
      'Viết bài, chia sẻ tri thức, soi sáng hành trình của người khác.',
    energy:
      'Bạn mang năng lượng của người soi sáng trí tuệ – yêu sự chính xác và minh bạch.',
    quote: '“Khi ánh sáng xuất hiện, bóng tối tự lui đi.”',
  },
  {
    emoji: '🌞',
    title: 'Người Chiếu Sáng',
    description:
      'Bạn là ngọn lửa cháy bằng lý tưởng sống đẹp. Niềm tin của bạn lan toả.',
    contribution:
      'Kể chuyện, tổ chức lễ cầu nguyện, khơi dậy hy vọng trong cộng đồng.',
    energy:
      'Bạn sống với năng lượng của người lý tưởng hoá hiện thực. Niềm tin bạn mang có khả năng nâng đỡ.',
    quote: '“Chỉ một ngọn lửa nhỏ cũng đủ làm sáng cả vùng trời.”',
  },
  {
    emoji: '🪶',
    title: 'Người Quan Sát',
    description:
      'Bạn nhìn thấy hình hài của tương lai trong hạt mầm hiện tại.',
    contribution:
      'Thiết kế hành trình, tạo nền móng bền vững cho thế giới mới.',
    energy:
      'Bạn mang năng lượng của người kiến trúc sư âm thầm – bền bỉ, sâu sắc và vững chãi.',
    quote: '“Mọi điều vĩ đại bắt đầu từ nền móng thầm lặng.”',
  },
  {
    emoji: '🌀',
    title: 'Người Kết Nối',
    description:
      'Bạn là sợi chỉ thầm lặng nối những mảnh ghép rời rạc thành bức tranh hài hoà.',
    contribution:
      'Điều phối, tạo không gian gặp gỡ, khơi thông dòng chảy giữa người với người.',
    energy:
      'Bạn mang năng lượng của người tạo trật tự thiêng liêng – kết nối là nghi lễ bạn thực hành.',
    quote: '“Kết nối là nghi lễ thiêng liêng nhất của con người.”',
  },
  {
    emoji: '❓',
    title: 'Bạn chưa biết mình là ai?',
    description:
      'Không sao cả. Năng lượng của bạn sẽ tự lên tiếng. Hãy thử trả lời vài câu hỏi nhỏ để khám phá vai trò linh hồn của mình nhé!',
    isQuiz: true,
  },
];

export default function WhoAreYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-100 p-6">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          ✨ 7 Vai Trò Linh Hồn trong LoveToEarth
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Mỗi chúng ta tỏa ra một tần số độc đáo. Hãy khám phá vai trò linh hồn bạn đang mang – và cách bạn góp phần chữa lành Trái Đất 🌍
        </p>

        <section className="grid md:grid-cols-2 gap-6 text-left">
          {archetypes.map((type) => (
            <div
              key={type.title}
              className="bg-white rounded-xl shadow-md p-6 space-y-2"
            >
              <div className="text-6xl text-center">{type.emoji}</div>
              <h2 className="text-xl font-bold text-green-700 text-center">
                {type.title}
              </h2>
              <p className="text-sm text-gray-700">{type.description}</p>
              {type.contribution && (
                <p className="text-sm text-green-700 font-medium">{type.contribution}</p>
              )}
              {type.energy && (
                <p className="text-sm italic text-gray-600">{type.energy}</p>
              )}
              {type.quote && (
                <p className="text-sm italic text-gray-500 border-l-4 border-green-200 pl-3 mt-2">
                  {type.quote}
                </p>
              )}
              {type.isQuiz && (
                <div className="text-center mt-4">
                  <Link href="/quiz">
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm">
                      🧭 Bắt đầu trắc nghiệm
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </section>

        <div className="pt-6">
          <Link href="/" className="text-green-700 underline text-sm">
            ⬅️ Quay về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
