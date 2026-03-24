"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QuestionsForm } from "../../forms/QuestionsForm";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SITE_CONTENT } from "@/config/settings";

export function Questions() {
  return (
    <section className="py-24 bg-background overflow-hidden relative" id="questions">
      {/* Глобальные декоративные элементы фона */}
      <div className="absolute -z-10 -bottom-24 -left-24 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-16 md:gap-24"
        >
          {/* Заголовки: Центрированы как в блоке Reviews */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tight text-white leading-[1.05] mb-6">
              ОСТАЛИСЬ <br className="md:hidden" />
              <span className="text-primary-container">ВОПРОСЫ?</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-none mx-auto leading-relaxed">
              Запишитесь на презентацию выбранной вами модели к нам в офис в&nbsp;Москве.
            </p>
          </motion.div>

          {/* Контент: Равновесная сетка */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch max-w-6xl mx-auto w-full relative z-10">
            {/* Левая колонка: Фото сотрудника в стиле Hero */}
            <motion.div 
              variants={fadeInUp}
              className="relative group flex flex-col"
            >
              <div className="relative flex-1 aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-primary-container shadow-[0_0_40px_rgba(3,253,0,0.2)] bg-zinc-900/50">
                <Image
                  src={SITE_CONTENT.MANAGER.IMAGE}
                  alt={SITE_CONTENT.MANAGER.NAME}
                  fill
                  className="object-cover object-center transition-all duration-500 hover:scale-105"
                  sizes="(max-w-768px) 100vw, 600px"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                {/* Badge Overlay: Матовое черное стекло (Glassmorphism) */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl flex flex-col items-end text-right shadow-2xl">
                    <h4 className="text-white text-base md:text-lg font-headline font-black uppercase tracking-tight mb-1">
                      {SITE_CONTENT.MANAGER.NAME}
                    </h4>
                    <span className="text-zinc-400 text-[10px] md:text-xs font-medium whitespace-nowrap opacity-80 uppercase tracking-widest">
                      {SITE_CONTENT.MANAGER.POSITION} <span className="text-primary-container font-black ml-1">FIRST CAR</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Правая колонка: Форма */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col h-full"
            >
              <QuestionsForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
