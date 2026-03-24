"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { StepCard } from "./StepCard";
import { 
  IconCalculation, 
  IconContract, 
  IconDelivery, 
  IconCustoms 
} from "./StepIcons";

const steps = [
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

import { useModal } from "../providers/ModalProvider";

export const PurchaseProcess = () => {
  const { openModal } = useModal();
  return (
    <section id="steps" className="bg-background w-full select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col gap-16 md:gap-24 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tight text-white leading-[1.05]"
          >
            ПРОСТАЯ МОДЕЛЬ <br className="hidden md:block" /> ПОКУПКИ АВТОМОБИЛЯ
          </motion.h2>
        </div>

        {/* Cards Grid: Bento Layout (7/5 + 5/7) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10"
        >
          {steps.map((step, index) => {
            const isWide = (index === 0 || index === 3);
            return (
              <div 
                key={step.number} 
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
              </div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="flex justify-center mt-6 md:mt-8 relative z-10"
        >
          <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={openModal}
          >
            Рассчитать стоимость
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
