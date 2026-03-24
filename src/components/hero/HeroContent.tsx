"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useModal } from "../providers/ModalProvider";
import { SITE_CONTENT } from "@/config/settings";

import { AdvantageItem } from "./AdvantageItem";

const advantages = [
  { icon: "verified", text: "Работаем больше 5-ти лет." },
  { icon: "directions_car", text: "Более 85 выдач авто за последний год." },
  { icon: "payments", text: "Оплата в рассрочку." },
];

export function HeroContent() {
  const { openModal } = useModal();

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="lg:col-span-6 z-10"
    >
      <motion.span 
        variants={fadeInUp}
        className="inline-block px-3 py-1 bg-primary-container/10 text-primary-fixed font-bold text-sm tracking-widest uppercase mb-6 rounded-md"
      >
        Цена от {SITE_CONTENT.START_PRICE}
      </motion.span>
      
      <motion.h1 
        variants={fadeInUp}
        className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.05] tracking-tight text-white mb-8 select-none"
      >
        ПРИВЕЗЁМ&nbsp;НОВЫЙ <br />
        <span className="text-primary-container uppercase">{SITE_CONTENT.CAR_NAME}</span> <br />
        ПОД КЛЮЧ!
      </motion.h1>
 
      <motion.ul variants={staggerContainer} className="space-y-6 mb-12">
        {advantages.map((item, i) => (
          <AdvantageItem key={i} {...item} />
        ))}
      </motion.ul>
 
      <motion.div variants={fadeInUp}>
        <Button 
          size="lg"
          className="w-full md:w-auto"
          onClick={openModal}
        >
          Рассчитать стоимость
        </Button>
      </motion.div>
    </motion.div>
  );
}
