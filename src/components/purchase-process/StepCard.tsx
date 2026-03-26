"use client";

import React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardVariants, iconVariants } from "@/lib/animations";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

export const StepCard = React.memo(({ number, title, description, icon, index }: StepCardProps) => {

  return (
    <m.article
      variants={cardVariants}
      custom={index}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "relative flex w-full flex-col md:flex-row items-center md:items-start gap-6 md:gap-10",
        "p-4 md:p-6 text-white"
      )}
    >
      {/* Icon Wrapper */}
      <div className="relative shrink-0 flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
        <m.div 
          variants={iconVariants}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          <img 
            src={icon} 
            alt={title}
            className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </m.div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left justify-center h-full">
        <m.h3 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-white leading-[1.1] uppercase mb-3 md:mb-4 whitespace-nowrap">
          {title}
        </m.h3>
        <m.p className="text-base md:text-lg text-zinc-400 leading-relaxed font-body font-medium max-w-[500px]">
          {description}
        </m.p>
      </div>
    </m.article>
  );
});

StepCard.displayName = "StepCard";
