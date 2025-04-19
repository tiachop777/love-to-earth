'use client';

import { useState } from 'react';
import ArchetypeResult from '@/components/ArchetypeResult';

const questions = [
  {
    text: 'Khi đối mặt với một thử thách, bạn thường...',
    options: [
      'Nhanh chóng lên kế hoạch và dẫn dắt cả nhóm hành động',
      'Tìm cách làm mọi người bình tĩnh lại, rồi nhẹ nhàng hỗ trợ',
      'Truyền cảm hứng, nói những lời khích lệ lay động',
      'Ngồi yên quan sát tổng thể để tìm giải pháp bền vững',
      'Liên kết mọi người lại, kết nối những người phù hợp',
      'Đưa ra các lý lẽ rõ ràng, đề xuất phương án hợp lý',
      'Biến tình huống thành câu chuyện hoặc hình ảnh truyền cảm',
    ],
  },
  {
    text: 'Khi bạn bước vào một căn phòng lạ, bạn thường...',
    options: [
      'Cảm nhận bầu không khí, năng lượng, rồi chọn cách hoà vào',
      'Nhìn xung quanh xem ai đang bị lạc lõng và bắt chuyện trước',
      'Bắt đầu chia sẻ một điều truyền cảm hứng để kết nối',
      'Quan sát từ xa, thầm hiểu tình hình trước khi hành động',
      'Đề xuất tổ chức lại bố cục, tạo cảm giác dễ chịu hơn',
      'Tự tin bắt đầu một hoạt động mà chưa ai dám thử',
      'Gợi ý một hướng đi cụ thể để mọi người cùng tham gia',
    ],
  },
  {
    text: 'Trong một nhóm bạn, bạn thường là người...',
    options: [
      'Gắn kết mọi người, kết nối nhóm nhỏ thành một thể thống nhất',
      'Chia sẻ những thông tin hữu ích, giúp mọi người hiểu vấn đề rõ hơn',
      'Khởi xướng những kế hoạch, trò chơi, hoạt động',
      'Ở bên những người dễ bị bỏ quên, để họ cảm thấy được lắng nghe',
      'Tạo không khí bằng tranh, nhạc, hoặc lời nói sáng tạo',
      'Hỏi những câu rất sâu – khiến cả nhóm dừng lại suy nghĩ',
      'Gợi ý cách tiến hành từng bước để hiện thực hóa một ý tưởng',
    ],
  },
  {
    text: 'Khi làm việc nhóm, bạn đóng vai trò...',
    options: [
      'Lên kế hoạch chi tiết, tạo hệ thống để mọi việc trơn tru',
      'Gợi cảm hứng ban đầu, nói lên “tại sao” chúng ta cần làm việc đó',
      'Đứng sau, lặng lẽ quan sát và đưa ra nhận định sắc sảo',
      'Cân bằng cảm xúc nhóm, giúp mọi người thấy an tâm',
      'Thắp lên ngọn lửa hành động và sự dũng cảm',
      'Tạo không gian sáng tạo và biểu đạt nghệ thuật',
      'Là chiếc cầu nối giữa các ý tưởng và con người',
    ],
  },
  {
    text: 'Bạn thấy điều gì quan trọng nhất trong việc đóng góp cho Trái Đất?',
    options: [
      'Hành động thiết thực, cụ thể và dẫn dắt',
      'Xây nền bền vững, dài hạn',
      'Tạo ra cái đẹp để lay động lòng người',
      'Gieo cảm hứng và lý tưởng để mọi người cùng tin tưởng',
      'Chữa lành những đau khổ thầm lặng',
      'Tổ chức và kết nối cộng đồng',
      'Hiểu rõ bản chất, đưa ra tri thức đúng đắn',
    ],
  },
  {
    text: 'Khi người khác buồn, bạn...',
    options: [
      'Ôm họ thật chặt và để họ biết bạn ở đó',
      'Truyền cho họ niềm tin và hy vọng bằng câu chuyện',
      'Đưa họ ra ngoài vẽ tranh, dạo chơi hoặc sáng tạo thứ gì đó',
      'Phân tích nguyên nhân buồn để giúp họ hiểu mình hơn',
      'Dẫn họ vào một hành động tích cực, nhỏ nhưng có ích',
      'Giới thiệu họ đến những người đồng điệu hoặc hỗ trợ',
      'Ngồi bên họ, cùng im lặng và hiện diện',
    ],
  },
  {
    text: 'Khi nhìn về tương lai, bạn mong muốn được...',
    options: [
      'Dẫn dắt một phong trào có ảnh hưởng tích cực',
      'Sống giữa một cộng đồng lành mạnh và biết kết nối',
      'Tạo ra những không gian sáng tạo, nghệ thuật, chữa lành',
      'Giúp người khác tìm thấy con đường nội tâm của họ',
      'Viết sách, chia sẻ tri thức, truyền bá chân lý',
      'Kiến tạo một nền tảng bền vững cho các thế hệ sau',
      'Là tia sáng nâng đỡ lý tưởng của nhân loại',
    ],
  },
];

export default function Quiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string[]>>({});
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
  
    const selected = answers[step] || [];
  
    const toggle = (text: string) => {
      let updated = [...selected];
      if (updated.includes(text)) {
        updated = updated.filter((t) => t !== text);
      } else if (updated.length < 3) {
        updated.push(text);
      }
      setAnswers({ ...answers, [step]: updated });
    };
  
    const next = () => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        submit();
      }
    };
  
    const back = () => step > 0 && setStep(step - 1);
  
    const submit = async () => {
      setLoading(true);
      const allAnswers = Object.values(answers).flat();
  
      const res = await fetch('/api/groq/quiz-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: allAnswers }),
      });
  
      const data = await res.json();
      setResult(data.reply);
      setLoading(false);
    };
  
    if (loading) {
      return (
        <div className="text-center p-10 text-green-700 space-y-4">
          <div className="text-4xl animate-pulse">🌀</div>
          <p className="text-lg font-medium">Đang lắng nghe năng lượng của bạn…</p>
          <p className="text-sm text-gray-600">Xin chờ một chút 💚</p>
        </div>
      );
    }
  
    if (result) {
      const match = result.match(/\[\[(.*?)\]\]/);
      const archetype = match?.[1]?.trim() || '';
      const cleanText = result.replace(/\[\[.*?\]\]/, '').trim();
  
      return <ArchetypeResult reply={cleanText} archetype={archetype} />;
    }
  
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h2 className="text-xl font-bold text-green-700 text-center">
          Câu {step + 1} / {questions.length}
        </h2>
  
        <p className="text-green-900 font-semibold text-center text-lg">{questions[step].text}</p>
        <p className="text-sm italic text-gray-600 text-center">
          🌿 Bạn có thể chọn từ 1 đến 3 lựa chọn phù hợp nhất với mình
        </p>
  
        <div className="grid gap-3">
          {questions[step].options.map((opt, i) => {
            const idx = selected.indexOf(opt);
            return (
              <label
                key={i}
                className={`flex justify-between items-center bg-white rounded-xl p-4 border cursor-pointer transition-all text-center mx-auto max-w-xl ${
                  idx >= 0 ? 'border-green-500 ring-2 ring-green-300 bg-green-50' : 'border-gray-200'
                }`}
                onClick={() => toggle(opt)}
              >
                <span className="text-gray-800 text-sm mx-auto">{opt}</span>
                {idx >= 0 && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {idx + 1}
                  </span>
                )}
              </label>
            );
          })}
        </div>
  
        <div className="flex flex-col items-center space-y-3 mt-6">
          <div className="flex justify-between w-full max-w-xl">
            {step > 0 ? (
              <button
                onClick={back}
                className="px-4 py-2 bg-gray-200 rounded text-sm text-gray-700"
              >
                ← Quay lại
              </button>
            ) : (
              <div />
            )}
            <div />
          </div>
  
          <button
            disabled={selected.length < 1}
            onClick={next}
            className={`px-6 py-2 rounded text-sm text-white font-medium ${
              selected.length >= 1
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {step === questions.length - 1 ? '🌟 Xem kết quả' : 'Tiếp theo →'}
          </button>
  
          <p className="text-sm text-gray-600 text-center max-w-xl">
            Những câu hỏi này giúp bạn khám phá mình là ai trong dự án <strong>Love to Earth</strong>.  
            <br />
            Nhưng nếu bạn muốn biết thêm về **nguồn năng lượng đang ảnh hưởng đến bạn**, hoặc **bạn là ai trong thế giới rộng lớn này** – hãy tiếp tục cuộc <strong>hành trình khám phá bản thân</strong> cùng chúng tôi 🌌  
            <br />
            Bởi khi bạn hiểu mình là ai, bạn sẽ sống hạnh phúc và trọn vẹn hơn 💖
          </p>
        </div>
      </div>
    );
  }