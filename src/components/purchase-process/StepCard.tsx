"use client";

import React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardVariants, iconVariants } from "@/lib/animations";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isWide?: boolean;
}

export const StepCard = React.memo(({ number, title, description, icon, index }: StepCardProps) => {

  return (
    <m.article
      variants={cardVariants}
      custom={index}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "group relative flex w-full flex-col justify-between overflow-hidden",
        "h-[320px] md:h-[360px]",
        "rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-8 md:p-10 text-white shadow-2xl backdrop-blur-2xl",
        "transition-colors duration-500 hover:border-primary-container/30 hover:bg-zinc-900/60"
      )}
    >
      {/* Background Watermark Number */}
      <div 
        className="absolute -bottom-4 -right-2 font-headline text-[10rem] md:text-[12rem] font-black text-white/[0.015] leading-none pointer-events-none select-none group-hover:text-primary-container/10 transition-colors duration-700"
        aria-hidden="true"
      >
        {number}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        <m.div 
          variants={iconVariants}
          className="mb-6 md:mb-8 flex h-16 w-16 items-center justify-center transition-colors duration-300"
          aria-hidden="true"
        >
          {icon}
        </m.div>
        
        <div className="flex flex-col gap-3 md:gap-4 mt-auto md:mt-0">
          <m.h3 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-white leading-[1.1] uppercase">
            {title}
          </m.h3>
          <m.p className="max-w-[95%] text-base md:text-lg text-zinc-400 leading-relaxed font-body font-medium">
            {description}
          </m.p>
        </div>
      </div>

      {/* Premium Glow Effects */}
      <m.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-container/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
        aria-hidden="true"
      />
      <m.div 
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
        aria-hidden="true"
      />
    </m.article>
  );
});

StepCard.displayName = "StepCard";
