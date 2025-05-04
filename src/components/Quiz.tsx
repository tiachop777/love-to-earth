'use client';

import { useEffect, useState } from 'react';
import ArchetypeResult from '@/components/ArchetypeResult';

const rawQuestions = [
  {
    text: 'Khi bước vào một không gian hỗn loạn, bạn thường…',
    options: [
      'Chủ động truyền năng lượng tích cực để vực dậy mọi người',
      'Lặng lẽ hiện diện, tạo cảm giác an toàn cho người khác',
      'Kể một câu chuyện tích cực để lay động tinh thần',
      'Quan sát kỹ lưỡng để tìm nguyên nhân sâu xa và định hướng lại',
      'Đốt hương, bật nhạc nhẹ hoặc làm đẹp không gian để xoa dịu',
      'Thắp lên niềm tin, khơi lại ánh sáng trong ánh mắt mọi người',
      'Nối kết mọi người lại với nhau để tạo sức mạnh cộng đồng',
    ],
  },
  {
    text: 'Khi thấy một vấn đề môi trường nghiêm trọng, bạn sẽ…',
    options: [
      'Lên tiếng kêu gọi hành động, khởi xướng chiến dịch',
      'Gửi lời cầu nguyện, thiền định để lan tỏa năng lượng chữa lành',
      'Viết, vẽ hoặc quay video truyền cảm để thay đổi nhận thức',
      'Phân tích nguyên nhân hệ thống và đề xuất giải pháp bền vững',
      'Tổ chức buổi triển lãm nghệ thuật, âm nhạc vì Trái Đất',
      'Thắp nến, tổ chức buổi chia sẻ truyền cảm hứng cho cộng đồng',
      'Kêu gọi sự hợp tác giữa các nhóm/đối tượng liên quan',
    ],
  },
  {
    text: 'Khi ai đó buồn bã hoặc tổn thương, bạn thường…',
    options: [
      'Truyền cho họ một ngọn lửa nghị lực mạnh mẽ',
      'Ở bên, lắng nghe và ôm họ bằng sự hiện diện trọn vẹn',
      'Kể họ nghe một điều đẹp hoặc truyền cảm hứng để họ được an ủi',
      'Nhẹ nhàng giúp họ trở lại với sự yên bình',
      'Gợi họ nhớ lại ánh sáng, lý tưởng trong họ',
      'Quan sát sự chuyển biến trong họ và giúp họ tự khám phá lối đi',
      'Kết nối họ với người khác hoặc nguồn hỗ trợ phù hợp',
    ],
  },
  {
    text: 'Khi bạn ở giữa thiên nhiên, bạn cảm thấy mình giống như…',
    options: [
      'Một tia lửa nhỏ thắp sáng khu rừng tĩnh lặng',
      'Một dòng suối mát lành vỗ về mặt đất',
      'Một hạt mầm lan tỏa tình yêu trong gió',
      'Một làn hương êm dịu mang lại thư giãn',
      'Một tia nắng chiếu qua kẽ lá soi sáng lòng người',
      'Một chiếc lá nhỏ lặng thinh quan sát mùa thay đổi',
      'Một mạng rễ ngầm liên kết từng thân cây với nhau',
    ],
  },
  {
    text: 'Trong một nhóm làm việc, bạn thường là người…',
    options: [
      'Gợi ý hành động cụ thể để nhóm không bị trì trệ',
      'Giữ sự hài hòa cảm xúc, giúp mọi người không căng thẳng',
      'Mang đến cảm hứng bằng những ý tưởng sáng tạo bất ngờ',
      'Làm dịu không khí bằng khiếu thẩm mỹ và sự tinh tế',
      'Giữ vững tinh thần nhóm bằng tầm nhìn chung và lý tưởng cao đẹp',
      'Lặng lẽ giúp nhóm đi đúng hướng qua sự sắp xếp chiến lược',
      'Nối kết các thành viên, đảm bảo ai cũng được lắng nghe',
    ],
  },
  {
    text: 'Bạn thường được người khác miêu tả là…',
    options: [
      'Truyền lửa, có sức thúc đẩy và lan tỏa cao',
      'Êm dịu, an lành, làm người khác cảm thấy được chữa lành',
      'Truyền cảm hứng, sáng tạo và “thổi hồn” vào mọi thứ',
      'Nhẹ nhàng, tế nhị, và làm mọi thứ trở nên đẹp hơn',
      'Ánh sáng – như một người khai sáng, khai mở',
      'Trầm lặng, sâu sắc, và nhìn thấy điều người khác không thấy',
      'Gắn kết – người tạo ra sự hợp nhất giữa mọi người',
    ],
  },
  {
    text: 'Nếu bạn có một phép màu cho Trái Đất, bạn muốn…',
    options: [
      'Thức tỉnh hàng triệu trái tim để hành động vì Mẹ Đất',
      'Xoa dịu mọi nỗi đau và giúp mọi sinh thể cảm thấy được yêu thương',
      'Gieo những hình ảnh đẹp để con người yêu thiên nhiên hơn',
      'Biến mỗi góc phố thành nơi an trú nhẹ nhàng và thiêng liêng',
      'Khơi dậy ánh sáng tâm linh trong lòng nhân loại',
      'Xây dựng một hệ sinh thái cân bằng và bền vững từ gốc rễ',
      'Kết nối tất cả những người cùng tâm nguyện để tạo nên mạng lưới toàn cầu',
    ],
  },
];

const shuffle = (arr: string[]) => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export default function Quiz() {
  const [questions, setQuestions] = useState<typeof rawQuestions>([]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const shuffled = rawQuestions.map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));
    setQuestions(shuffled);
  }, []);

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

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

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

  if (questions.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-xl font-bold text-green-700 text-center">
        Câu {step + 1} / {questions.length}
      </h2>
      <p className="text-green-900 text-lg font-semibold text-center">
        {questions[step].text}
      </p>
      <p className="text-sm italic text-gray-600 text-center">
        🌿 Bạn có thể chọn từ 1 đến 3 lựa chọn phù hợp nhất với mình
      </p>

      <div className="grid gap-3">
        {questions[step].options.map((opt) => {
          const idx = selected.indexOf(opt);
          return (
            <label
              key={opt}
              className={`flex justify-between items-center bg-white rounded-xl p-4 border cursor-pointer transition-all text-center mx-auto max-w-xl ${
                idx >= 0
                  ? 'border-green-500 ring-2 ring-green-300 bg-green-50'
                  : 'border-gray-200'
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

      <div className="flex justify-center items-center gap-4 mt-8">
        {step > 0 && (
          <button
            onClick={back}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300"
          >
            ← Quay lại
          </button>
        )}
        <button
          disabled={selected.length < 1}
          onClick={next}
          className={`px-4 py-2 rounded text-sm text-white ${
            selected.length >= 1
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {step === questions.length - 1 ? '🌟 Xem kết quả' : 'Tiếp theo →'}
        </button>
      </div>

      <p className="text-sm text-center text-gray-700 max-w-xl mx-auto mt-6 leading-relaxed">
        Những câu hỏi này giúp bạn khám phá <strong>bạn là ai</strong> trong dự án <strong>Love to Earth</strong>.  
        <br />
        Nhưng nếu bạn muốn biết thêm <em>năng lượng nào đang ảnh hưởng đến bạn</em>,  
        hoặc bạn thực sự là <strong>ai trong thế giới rộng lớn này</strong> –  
        hãy tiếp tục hành trình khám phá cùng chúng tôi.  
        <br />
        Khi bạn hiểu được chính mình, bạn sẽ sống một cuộc đời hạnh phúc hơn 💫
      </p>
    </div>
  );
}
