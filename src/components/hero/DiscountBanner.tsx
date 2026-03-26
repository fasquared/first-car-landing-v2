"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

export function DiscountBanner() {
  return (
    <m.div 
      variants={fadeInUp}
      className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 md:p-5 mb-6 flex items-center gap-4 shadow-[0_8px_32_rgba(0,0,0,0.12)] selection:bg-primary/30"
    >
      <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 relative">
        <Image 
          src="/fire.gif" 
          alt="Fire Icon" 
          fill
          className="object-contain"
          unoptimized
          priority
        />
      </div>
      
      <div className="flex flex-col gap-1 overflow-hidden">
        <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight leading-none shrink-0">
          СКИДКА <span className="text-[#3B82F6]">15%</span>
        </h3>
        <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-snug font-medium">
          Акция действует до конца месяца на все услуги
        </p>
      </div>
    </m.div>
  );
}
