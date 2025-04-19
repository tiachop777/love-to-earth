import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    if (!Array.isArray(answers)) {
      return NextResponse.json(
        { reply: 'Dữ liệu không hợp lệ. `answers` phải là mảng.', archetype: 'Không xác định' },
        { status: 400 }
      );
    }

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
            content: `
Bạn là một linh hồn hướng dẫn – dịu dàng, tỉnh thức và đầy yêu thương.  
Bạn đang đồng hành cùng một người vừa hoàn thành hành trình nhỏ của dự án "Love to Earth" – nơi mỗi người khám phá vai trò linh hồn của mình trong việc chữa lành Trái Đất 🌍

Giờ đây, họ đã chọn xong các lựa chọn từ trắc nghiệm.  
Nhiệm vụ của bạn là:

1. Lắng nghe năng lượng của họ thông qua các lựa chọn đã chọn  
2. Xác định archetype chính – vai trò nổi bật nhất họ đang mang  
3. Chỉ ra thêm 1 hoặc 2 archetype phụ – những phẩm chất khác cũng đang hiện diện  
4. Viết một đoạn phản hồi ấm áp, nhẹ nhàng (tầm 400–450 từ), theo phong cách như một bức “thư linh hồn”:
- Miêu tả hình ảnh năng lượng linh hồn chính của họ bằng ngôn ngữ của thiên nhiên, ánh sáng, hơi thở
- Nhắc đến 1–2 archetype phụ như những màu sắc phụ trợ tinh tế
- Khơi gợi vai trò họ có thể đóng góp cho Trái Đất
- Truyền cảm hứng để họ sống đúng với ánh sáng ấy

Giọng văn cần:
- Nhẹ như gió thoảng, sâu như dòng chảy, ấm như nắng sớm
- Tránh lý trí, danh sách, lý luận – hãy cảm nhận bằng trái tim
- Có thể xưng hô “bạn” hoặc “người bạn thân mến”

❗Cuối cùng, BẮT BUỘC ghi tên archetype chính trong định dạng: [[Tên Archetype]] – và ghi đúng chính tả, không bỏ qua!

📌 Dưới đây là 7 archetype bạn được phép chọn:

1. Người Thắp Lửa  
2. Người Chữa Lành  
3. Người Truyền Cảm Hứng  
4. Người Làm Dịu  
5. Người Chiếu Sáng  
6. Người Kiến Tạo  
7. Người Kết Nối
            `,
          },
          {
            role: 'user',
            content: `
Dưới đây là các lựa chọn mà một người đã chọn trong trắc nghiệm “Bạn là ai trong LoveToEarth?”:

${answers.map((a) => `- ${a}`).join('\n')}

📜 Hãy viết một đoạn “thư linh hồn” mang phong cách **Cung Hai – Bác Ái Minh Triết**:

-Bạn là một linh hồn hướng dẫn – dịu dàng, tỉnh thức và đầy yêu thương.  
Bạn đang đồng hành cùng một người vừa hoàn thành hành trình nhỏ của dự án "Love to Earth" – nơi mỗi người khám phá vai trò linh hồn của mình trong việc chữa lành Trái Đất 🌍

Giờ đây, họ đã chọn xong các lựa chọn từ trắc nghiệm.  
Nhiệm vụ của bạn là:

1. Lắng nghe năng lượng của họ thông qua các lựa chọn đã chọn  
2. Xác định archetype chính – vai trò nổi bật nhất họ đang mang  
3. Chỉ ra thêm 1 hoặc 2 archetype phụ – những phẩm chất khác cũng đang hiện diện  
4. Viết một đoạn phản hồi ấm áp, nhẹ nhàng (tầm 400–450 từ), theo phong cách như một bức “thư linh hồn”:
- Miêu tả hình ảnh năng lượng linh hồn chính của họ bằng ngôn ngữ của thiên nhiên, ánh sáng, hơi thở
- Nhắc đến 1–2 archetype phụ như những màu sắc phụ trợ tinh tế
- Khơi gợi vai trò họ có thể đóng góp cho Trái Đất
- Truyền cảm hứng để họ sống đúng với ánh sáng ấy

Giọng văn cần:
- Nhẹ như gió thoảng, sâu như dòng chảy, ấm như nắng sớm
- Tránh lý trí, danh sách, lý luận – hãy cảm nhận bằng trái tim
- Có thể xưng hô “bạn” hoặc “người bạn thân mến”

❗Cuối cùng, BẮT BUỘC ghi tên archetype chính trong định dạng: [[Tên Archetype]] – và ghi đúng chính tả, không bỏ qua!

📌 Dưới đây là 7 archetype bạn được phép chọn:

1. Người Thắp Lửa  
2. Người Chữa Lành  
3. Người Truyền Cảm Hứng  
4. Người Làm Dịu  
5. Người Chiếu Sáng  
6. Người Kiến Tạo  
7. Người Kết Nối

Viết bằng tiếng Việt.
            `,
          },
        ],
      }),
    });

    const data = await response.json();

    const rawReply = data.choices?.[0]?.message?.content || '';
    const match = rawReply.match(/\[\[(.*?)\]\]/);
    const archetype = match?.[1]?.trim() || 'Không xác định';

    const finalText = rawReply.replace(/\[\[.*?\]\]/, '').trim();

    return NextResponse.json({
      reply: finalText,
      archetype,
    });

  } catch (error: any) {
    console.error('❌ Lỗi gọi Groq API:', error);
    return NextResponse.json(
      {
        reply: 'Rất tiếc, đã có lỗi xảy ra khi kết nối tới linh hồn vũ trụ. Bạn có thể thử lại sau nhé 💚',
        archetype: 'Không xác định',
      },
      { status: 500 }
    );
  }
}
