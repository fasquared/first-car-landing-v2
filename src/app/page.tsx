import dynamic from "next/dynamic";
import { PurchaseProcess } from "@/components/purchase-process/PurchaseProcess";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const Reviews = dynamic(() => import("@/components/sections/Reviews/Reviews").then(mod => mod.Reviews), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />
});

const Questions = dynamic(() => import("@/components/sections/Questions/Questions").then(mod => mod.Questions), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />
});

const Footer = dynamic(() => import("@/components/sections/Footer/Footer").then(mod => mod.Footer), {
  ssr: true
});

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
