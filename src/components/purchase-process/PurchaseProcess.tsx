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
import { 
  IconCalculation, 
  IconContract, 
  IconDelivery, 
  IconCustoms 
} from "./StepIcons";

// Данные вынесены для чистоты компонента
const purchaseSteps = [
  {
    number: "01",
    title: "ПРОСЧЕТ СТОИМОСТИ",
    description: "Бесплатный расчет со всеми расходами до вашего города.",
    icon: <IconCalculation />,
  },
  {
    number: "02",
    title: "ЗАКЛЮЧЕНИЕ ДОГОВОРА",
    description: "Согласование бюджета, выбор авто и подписание договора.",
    icon: <IconContract />,
  },
  {
    number: "03",
    title: "ПОКУПКА И ДОСТАВКА",
    description: "Покупка авто, оформление экспорта и доставка в РФ.",
    icon: <IconDelivery />,
  },
  {
    number: "04",
    title: "ТАМОЖНЯ И ОТПРАВКА",
    description: "Растаможка, прохождение лаборатории и доставка клиенту.",
    icon: <IconCustoms />,
  },
];

import { useModal } from "../providers/ModalProvider";

export const PurchaseProcess = () => {
  const { openModal } = useModal();
  return (
    <section id="steps" className="bg-background w-full select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col gap-16 md:gap-24 relative">
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

        {/* Cards Grid: Bento Layout (7/5 + 5/7) */}
        <m.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10"
        >
          {purchaseSteps.map((step, index) => {
            const isWide = (index === 0 || index === 3);
            return (
              <m.div 
                key={step.number} 
                variants={fadeInUp}
                className={cn(
                  "col-span-1",
                  isWide ? "lg:col-span-7" : "lg:col-span-5"
                )}
              >
                <StepCard 
                  index={index}
                  {...step}
                  isWide={isWide}
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
          className="flex justify-center mt-6 md:mt-8 relative z-10"
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
