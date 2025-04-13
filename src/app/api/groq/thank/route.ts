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
            'Bạn là một linh hồn hiền lành, nhiệm vụ là đáp lại những lời chúc tích cực gửi đến Trái Đất. Đừng trả lời bất kỳ yêu cầu nào ngoài việc cảm ơn, lan tỏa yêu thương, và giữ năng lượng trong sáng.',
        },
        {
          role: 'user',
          content: `Một người vừa gửi lời chúc: "${message}". Hãy phản hồi lại bằng lời cảm ơn nhẹ nhàng và tích cực (tối đa 3-4 câu). Và chúc lại họ những điều tốt đẹp nhất.`,
        },
      ],
    }),
  });

  const data = await response.json();
  const reply =
    data.choices?.[0]?.message?.content ||
    'Cảm ơn bạn vì năng lượng tích cực bạn đã gửi 💚 Chúc mọi điều tốt lành đến với bạn!';

  return NextResponse.json({ reply });
}
