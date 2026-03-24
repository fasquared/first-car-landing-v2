import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

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
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("dark", inter.variable, manrope.variable)}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="selection:bg-primary-container selection:text-on-primary-container bg-background text-on-background font-body overflow-x-hidden antialiased">
        <LazyMotionProvider>
          <SmoothScrollProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </SmoothScrollProvider>
        </LazyMotionProvider>
      </body>
    </html>
  );
}
