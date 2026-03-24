/**
 * 1. КОНТЕНТ САЙТА (То, что видит пользователь)
 * Эти данные меняйте, если нужно обновить тексты, цены или контакты в футере.
 */
export const SITE_CONTENT = {
  // Автомобиль
  CAR_NAME: "NISSAN QASHQAI",
  START_PRICE: "2.2 млн. руб.",
  CTA_BUTTON_TEXT: "Рассчитать стоимость",

  // Контакты (для отображения в шапке и подвале)
  CONTACTS: {
    PHONE: "8 (800) 302-70-93",
    PHONE_HREF: "88003027093",
    EMAIL: "info@first-car.ru",
    TELEGRAM_HANDLE: "@firstcarru",
    TELEGRAM_URL: "https://t.me/firstcarru",
    ADDRESS: "г. Москва, Новоданиловская набережная, д. 12",
    ADDRESS_OFFICE: "9 этаж, 931 офис (БЦ DM Tower)",
  },

  // Менеджер (Секция "Вопросы")
  MANAGER: {
    NAME: "ИВАН КАНДЗЮБА",
    POSITION: "Управляющий партнер",
    IMAGE: "/images/ivan.webp",
  },

  // Юридические данные
  LEGAL: {
    INDIVIDUAL_NAME: "ИП Кандзюба Иван Васильевич",
    OGRNIP: "316762700072683",
  },

  // Ссылка на гугл таблицу
  POLICY_URL: "https://docs.google.com/document/d/1yfMFwWQbmoWtxlHvAslXqTjFKo57oH4QpfgfXAXJh5M/edit?tab=t.0",
};

/**
 * 2. НАСТРОЙКИ ОТПРАВКИ (Техническая часть)
 * Сюда приходят заявки. Эти данные сайт берет из файла .env.local
 */
export const SUBMISSION_SETTINGS = {
  // Куда слать уведомления на Email
  NOTIFICATION_EMAIL: "fasquared@yandex.ru",

  // Технические параметры (скрыты в .env.local)
  TELEGRAM_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  RESEND_API_KEY: process.env.RESEND_API_KEY,

  // URL вебхука Google Таблиц (можно менять здесь или в .env.local)
  GOOGLE_SHEETS_URL: process.env.GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbwkCjk--PL5xug6s4xeULw-R5vuLzCSeCwTiaDuDufMAXzdOoPhkOaASrCWT0uMmCY4qw/exec",
};
