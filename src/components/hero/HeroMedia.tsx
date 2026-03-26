"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { slideInRight } from "@/lib/animations";

export function HeroMedia() {
  return (
    <m.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideInRight}
      className="lg:col-span-6 flex justify-center lg:justify-end relative mt-8 lg:mt-0"
    >
      <div className="relative w-full aspect-[3/4] max-w-[640px] group">
        {/* Main Image Container */}
        <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 border-primary/60 bg-zinc-900/50 transition-all duration-500 group-hover:border-primary/80 shadow-[0_8px_32px_rgba(15,82,186,0.2)]">
          <Image
            src="/images/All_New_Nissan_Qashqai-7.jpg"
            alt="All New Nissan Qashqai"
            fill
            priority
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
          />
          {/* Глянцевый эффект при наведении */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Декоративное свечение позади (Ambient Glow) */}
        <div className="absolute -inset-4 bg-primary/10 blur-[100px] -z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
      </div>
    </m.div>
  );
}
