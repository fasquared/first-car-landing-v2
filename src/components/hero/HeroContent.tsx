"use client";

import { useMemo } from "react";
import { m } from "framer-motion";
import { Button } from "../ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useModal } from "../providers/ModalProvider";
import { SITE_CONTENT } from "@/config/settings";

import { AdvantageItem } from "./AdvantageItem";
import { IconVerified, IconCar, IconPayment } from "./HeroIcons";

const ADVANTAGES = [
  { icon: <IconVerified />, text: "Работаем больше 5-ти лет." },
  { icon: <IconCar />, text: "Более 85 выдач авто за последний год." },
  { icon: <IconPayment />, text: "Оплата в рассрочку." },
] as const;

export function HeroContent() {
  const { openModal } = useModal();

  const renderedAdvantages = useMemo(() => 
    ADVANTAGES.map((item, i) => (
      <AdvantageItem key={i} {...item} />
    )), []
  );

  return (
    <m.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="lg:col-span-6 z-10"
    >
      <m.span 
        variants={fadeInUp}
        className="inline-block px-3 py-1 bg-primary-container/10 text-primary-fixed font-bold text-sm tracking-widest uppercase mb-6 rounded-md"
      >
        Цена от {SITE_CONTENT.START_PRICE}
      </m.span>
      
      <m.h1 
        variants={fadeInUp}
        className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.05] tracking-tight text-white mb-5 md:mb-8 select-none"
      >
        ПРИВЕЗЁМ&nbsp;НОВЫЙ <br />
        <span className="text-primary-container uppercase">{SITE_CONTENT.CAR_NAME}</span> <br />
        ПОД КЛЮЧ!
      </m.h1>
  
      <m.ul 
        variants={staggerContainer} 
        className="space-y-6 mb-8 md:mb-12"
        aria-label="Наши преимущества"
      >
        {renderedAdvantages}
      </m.ul>
  
      <m.div variants={fadeInUp}>
        <Button 
          size="lg"
          className="w-full md:w-auto"
          onClick={openModal}
        >
          Рассчитать стоимость
        </Button>
      </m.div>
    </m.div>
  );
}
