// File: src/app/api/groq/astro-message/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { svg } = await req.json();

  if (!svg || typeof svg !== 'string') {
    return NextResponse.json(
      { error: 'Thiếu hoặc sai định dạng SVG.' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'system',
            content: `Bạn là một linh hồn hướng dẫn với trực giác sâu sắc.
Bạn nhận được biểu đồ sao của một người (định dạng SVG) và bạn sẽ truyền đạt thông điệp từ vũ trụ dành cho linh hồn họ.

Gợi ý cách viết:
- Dùng ngôn ngữ của thiên văn, ánh sáng, nhịp thở vũ trụ
- Nhẹ nhàng, từ bi, sâu sắc
- Truyền cảm hứng sống đúng với bản thể

Cuối thư, thêm lời chúc hoặc lời kêu gọi yêu thương 🌌`
          },
          {
            role: 'user',
            content: `Dưới đây là biểu đồ sao của một linh hồn:

${svg}

💌 Viết một "thư linh hồn" phản ánh thông điệp từ bản đồ sao này:`
          }
        ]
      })
    });

    const data = await res.json();
    const message = data.choices?.[0]?.message?.content || 'Không có phản hồi từ AI.';

    return NextResponse.json({ message });
  } catch (err) {
    console.error('Lỗi khi gọi AI:', err);
    return NextResponse.json({ error: 'Không thể tạo thư linh hồn.' }, { status: 500 });
  }
}
