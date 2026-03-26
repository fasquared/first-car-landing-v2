/**
 * НАСТРОЙКИ ОТПРАВКИ (Серверная часть)
 * 
 * ВНИМАНИЕ: Этот файл содержит приватные ключи и должен импортироваться 
 * ТОЛЬКО в Server Actions или API routes.
 */

export const SUBMISSION_SETTINGS = {
  // Куда слать уведомления на Email
  NOTIFICATION_EMAIL: "fasquared@yandex.ru",

  // Технические параметры (берутся строго из переменных окружения)
  TELEGRAM_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  RESEND_API_KEY: process.env.RESEND_API_KEY,

  // URL вебхука Google Таблиц
  // Хадкодный URL удален для прохождения проверки безопасности Netlify
  GOOGLE_SHEETS_URL: process.env.GOOGLE_SHEETS_WEBHOOK_URL,
};
