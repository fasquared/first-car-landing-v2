"use client";

import React from "react";
import { m } from "framer-motion";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { StepCard } from "./StepCard";
import { 
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";
// Данные вынесены для чистоты компонента
const purchaseSteps = [
  {
    number: "01",
    title: "ПРОСЧЕТ СТОИМОСТИ",
    description: "Бесплатный расчет со всеми расходами до вашего города.",
    icon: "/images/steps/calc_3d.png",
  },
  {
    number: "02",
    title: "ЗАКЛЮЧЕНИЕ ДОГОВОРА",
    description: "Согласование бюджета, выбор авто и подписание договора.",
    icon: "/images/steps/contract_3d.png",
  },
  {
    number: "03",
    title: "ПОКУПКА И ДОСТАВКА",
    description: "Покупка авто, оформление экспорта и доставка в РФ.",
    icon: "/images/steps/delivery_3d.png",
  },
  {
    number: "04",
    title: "ТАМОЖНЯ И ОТПРАВКА",
    description: "Растаможка, прохождение лаборатории и доставка клиенту.",
    icon: "/images/steps/customs_3d.png",
  },
];

import { useModal } from "../providers/ModalProvider";

export const PurchaseProcess = () => {
  const { openModal } = useModal();
  return (
    <section id="steps" className="bg-background w-full select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-4 pb-12 md:pt-8 md:pb-24 flex flex-col gap-6 md:gap-10 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <m.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tight text-white leading-[1.05]"
          >
            ПРОСТАЯ МОДЕЛЬ <br className="hidden md:block" /> ПОКУПКИ АВТОМОБИЛЯ
          </m.h2>
        </div>

        {/* Cards Grid: Standard 2x2 Layout */}
        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10"
        >
          {purchaseSteps.map((step, index) => {
            return (
              <m.div 
                key={step.number} 
                variants={fadeInUp}
                className="col-span-1"
              >
                <StepCard 
                  index={index}
                  {...step}
                />
              </m.div>
            );
          })}
        </m.div>

        {/* CTA Button */}
        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mt-0 relative z-10"
        >
          <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={openModal}
          >
            Рассчитать стоимость
          </Button>
        </m.div>
      </div>
    </section>
  );
};
