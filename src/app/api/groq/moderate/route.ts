import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        {
          role: 'system',
          content:
            'Bạn là AI chuyên kiểm duyệt thông điệp. Hãy phân tích nội dung người dùng gửi, và trả lời duy nhất: "POSITIVE" nếu thông điệp tích cực, hoặc "NEGATIVE" nếu nó tiêu cực.',
        },
        {
          role: 'user',
          content: `Đánh giá thông điệp sau: "${message}"`,
        },
      ],
    }),
  });

  const data = await response.json();
  const verdict = data.choices?.[0]?.message?.content?.toUpperCase().trim();

  const isNegative = verdict === 'NEGATIVE';

  return NextResponse.json({ isNegative });
}
