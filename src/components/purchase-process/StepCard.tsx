"use client";

import React from "react";
import { motion } from "framer-motion";
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

export const StepCard = React.memo(({ number, title, description, icon, index, isWide = false }: StepCardProps) => {

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      custom={index}
      viewport={{ once: true, margin: "-50px" }}
      style={{ willChange: "transform, opacity" }}
      className={cn(
        "group relative flex w-full flex-col justify-between overflow-hidden",
        "h-[320px] md:h-[360px]",
        "rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-8 md:p-10 text-white shadow-2xl backdrop-blur-2xl",
        "transition-all duration-500 hover:border-primary-container/30 hover:bg-zinc-900/60",
        !isWide && index % 2 !== 0 ? "lg:translate-y-8" : ""
      )}
    >
      {/* Background Watermark Number: Moved to bottom-right and more subtle */}
      <div className="absolute -bottom-4 -right-2 font-headline text-[10rem] md:text-[12rem] font-black text-white/[0.015] leading-none pointer-events-none select-none group-hover:text-primary-container/[0.03] transition-colors duration-700">
        {number}
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col">
        <motion.div 
          variants={iconVariants}
          className="mb-6 md:mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-primary-container/10 group-hover:bg-primary-container/20 transition-colors duration-300 shadow-[0_0_30px_rgba(3,253,0,0.1)] group-hover:shadow-[0_0_40px_rgba(3,253,0,0.2)]"
          aria-label={`Иконка этапа: ${title.replace('\n', ' ')}`}
        >
          {icon}
        </motion.div>
        
        <div className="flex flex-col gap-3 md:gap-4">
          <h3 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-white leading-[1.1] uppercase">
            {title}
          </h3>
          <p className="max-w-[95%] text-base md:text-lg text-zinc-400 leading-relaxed font-body font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Premium Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
});

StepCard.displayName = "StepCard";
