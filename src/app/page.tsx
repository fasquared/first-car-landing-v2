import { PurchaseProcess } from "@/components/purchase-process/PurchaseProcess";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Questions } from "@/components/sections/Questions/Questions";
import { Footer } from "@/components/sections/Footer/Footer";
import { SITE_CONTENT } from "@/config/settings";
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Доставка ${SITE_CONTENT.CAR_NAME} под ключ`,
    "description": `Привезём новый ${SITE_CONTENT.CAR_NAME} из-за рубежа с полным сопровождением, гарантией и таможенной очисткой.`,
    "provider": {
      "@type": "Organization",
      "name": "FIRST CAR",
      "url": "https://first-car.ru"
    },
    "areaServed": "RU",
    "serviceType": "Car Import"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-background text-on-background min-h-screen">
        <Hero />
        <PurchaseProcess />
        <Reviews />
        <Questions />
        <Footer />
      </main>
    </>
  );
}
