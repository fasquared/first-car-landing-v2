"use server";

import { Resend } from "resend";
import { SUBMISSION_SETTINGS } from "@/config/settings";

/**
 * Server Action для обработки данных формы.
 * Отправляет уведомления в Telegram, на Email и в Google Sheets.
 */
export async function submitForm(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const formType = formData.get("formType") as string || "Заявка";

  if (!name || !phone) {
    return { success: false, error: "Missing required fields" };
  }

  // 1. Отправка в Telegram
  const botToken = SUBMISSION_SETTINGS.TELEGRAM_TOKEN;
  const chatId = SUBMISSION_SETTINGS.TELEGRAM_CHAT_ID;

  // 1. Отправка в Telegram
  console.log("SubmitForm called:", { name, phone, formType });
  
  if (botToken && chatId) {
    const text = `
🆕 *Новая заявка с сайта!*
━━━━━━━━━━━━━━
👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📝 *Тип формы:* ${formType}
━━━━━━━━━━━━━━
    `.trim();

    try {
      console.log("Sending to Telegram...");
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
      
      const responseData = await response.json();
      console.log("Telegram response:", responseData);
      
      if (!response.ok) {
        console.error("Telegram API error:", responseData);
      }
    } catch (e: any) {
      console.error("Telegram error detail (likely blocked locally):", e.message);
      // Не возвращаем ошибку, чтобы форма не блокировалась для пользователя
    }
  }

  // 2. Отправка на Email
  const resendApiKey = SUBMISSION_SETTINGS.RESEND_API_KEY;
  if (resendApiKey) {
    const resend = new Resend(resendApiKey);
    try {
      console.log("Sending to Email...");
      await resend.emails.send({
        from: "First Car <onboarding@resend.dev>",
        to: SUBMISSION_SETTINGS.NOTIFICATION_EMAIL,
        subject: `Новая заявка: ${formType}`,
        html: `
          <h3>Новая заявка с сайта FIRST CAR</h3>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Тип формы:</strong> ${formType}</p>
          <hr />
          <p>Дата: ${new Date().toLocaleString('ru-RU')}</p>
        `,
      });
      console.log("Email sent successfully");
    } catch (e: any) {
      console.error("Resend error detail:", e.message);
    }
  }

  // 3. Отправка в Google Sheets
  const googleWebhookUrl = SUBMISSION_SETTINGS.GOOGLE_SHEETS_URL;
  if (googleWebhookUrl) {
    try {
      console.log("Sending to Google Sheets...");
      await fetch(googleWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: `'${phone}`, formType }),
      });
      console.log("Google Sheets submission successful");
    } catch (e: any) {
      console.error("Google Sheets error detail:", e.message);
    }
  } else {
    console.warn("GOOGLE_SHEETS_WEBHOOK_URL is missing in env");
  }

  return { success: true };
}
