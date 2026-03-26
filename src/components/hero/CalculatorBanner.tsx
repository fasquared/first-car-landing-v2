"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

export function CalculatorBanner() {
  return (
    <m.div
      variants={fadeInUp}
      className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 md:p-5 mb-6 flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] selection:bg-primary/30"
    >
      <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 relative">
        <Image
          src="/calc_icon.png"
          alt="Calculator Icon"
          fill
          className="object-contain"
          priority
        />
      </div>

      <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-snug font-medium max-w-[420px]">
        Получите расчет стоимости автомобиля, а так же полноценную консультацию нашего специалиста
      </p>
    </m.div>
  );
}
