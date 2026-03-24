import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://first-car.ru"),
  title: "FIRST CAR | ПРИВЕЗЁМ НОВЫЙ NISSAN QASHQAI",
  description: "Привезём новый Nissan Qashqai под ключ из-за рубежа. Гарантия, таможня, доставка по всей РФ.",
  openGraph: {
    title: "FIRST CAR | НОВЫЙ NISSAN QASHQAI ПОД КЛЮЧ",
    description: "Профессиональный подбор и доставка Nissan Qashqai. Полное сопровождение сделки.",
    url: "https://first-car.ru",
    siteName: "FIRST CAR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nissan Qashqai First Car",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRST CAR | НОВЫЙ NISSAN QASHQAI",
    description: "Доставка Nissan Qashqai из-за рубежа под ключ.",
    images: ["/images/og-image.jpg"],
  },
};

import { ModalProvider } from "@/components/providers/ModalProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body className="selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background font-body overflow-x-hidden antialiased">
        <SmoothScrollProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
