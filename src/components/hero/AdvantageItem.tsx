"use client";

import React from "react";
import { m } from "framer-motion";
import { fadeInUp, iconVariants } from "@/lib/animations";

interface AdvantageItemProps {
  icon: React.ReactNode;
  text: string;
}

export const AdvantageItem = React.memo(({ icon, text }: AdvantageItemProps) => {
  return (
    <m.li 
      variants={fadeInUp} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-center gap-4 group cursor-default"
    >
      <m.div 
        variants={iconVariants}
        whileHover="hover"
        className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white shadow-[0_0_20px_rgba(15,82,186,0.3)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(15,82,186,0.5)]"
      >
        {icon}
      </m.div>
      <span className="text-lg md:text-xl font-medium text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
        {text}
      </span>
    </m.li>
  );
});

AdvantageItem.displayName = "AdvantageItem";
