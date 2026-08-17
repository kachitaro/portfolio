import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    const now = Date.now();
    const rateLimitInfo = rateLimitMap.get(clientIp);

    if (rateLimitInfo) {
      if (now > rateLimitInfo.resetAt) {
        rateLimitMap.set(clientIp, { count: 1, resetAt: now + WINDOW_MS });
      } else if (rateLimitInfo.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: 'Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 10 phút.' },
          { status: 429 }
        );
      } else {
        rateLimitInfo.count += 1;
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetAt: now + WINDOW_MS });
    }

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ họ tên, email và nội dung tin nhắn.' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // If bot token or chat ID is not configured yet
    if (!botToken || !chatId) {
      console.warn('Telegram Bot Token or Chat ID is missing in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'Chưa cấu hình Telegram Bot Token hoặc Chat ID trong file .env.local.'
        },
        { status: 500 }
      );
    }

    const timeString = new Date().toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour12: false
    });

    const telegramText = `
🔔 <b>CÓ TIN NHẮN MỚI TỪ PORTFOLIO!</b>

👤 <b>Người gửi:</b> ${escapeHtml(name)}
📧 <b>Email:</b> ${escapeHtml(email)}
📌 <b>Chủ đề:</b> ${escapeHtml(subject || 'Liên hệ từ Portfolio')}
⏰ <b>Thời gian:</b> ${timeString}

💬 <b>Nội dung tin nhắn:</b>
${escapeHtml(message)}
    `.trim();

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramText,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      console.error('Telegram API Error:', result);
      return NextResponse.json(
        { error: result.description || 'Lỗi khi gửi thông báo tới Telegram.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Tin nhắn đã được gửi tới Telegram thành công!'
    });
  } catch (error: unknown) {
    console.error('Error handling contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'Đã có lỗi xảy ra trong quá trình xử lý.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
