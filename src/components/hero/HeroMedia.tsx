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
      <div className="relative w-full aspect-square max-w-[600px] group">
        {/* Framed Image Container */}
        <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 border-primary-container/30 shadow-[0_0_50px_rgba(3,253,0,0.15)] bg-zinc-900/50 transition-colors duration-500 group-hover:border-primary-container/60">
          <Image
            src="/images/car.jpg"
            alt="Nissan Qashqai"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
          {/* Глянцевый эффект при наведении */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/0 via-primary-container/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Декоративное свечение позади (Ambient Glow) */}
        <div className="absolute -inset-4 bg-primary-container/10 blur-[100px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </m.div>
  );
}
