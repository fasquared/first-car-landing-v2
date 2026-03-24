"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AdvantageItemProps {
  icon: string;
  text: string;
}

export const AdvantageItem = React.memo(({ icon, text }: AdvantageItemProps) => {
  return (
    <motion.li variants={fadeInUp} className="flex items-center gap-4 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-fixed shadow-[0_0_15px_rgba(3,253,0,0.4)]">
        <span className="material-symbols-outlined text-lg">{icon}</span>
      </div>
      <span className="text-lg md:text-xl font-medium text-zinc-200 group-hover:text-white transition-colors">
        {text}
      </span>
    </motion.li>
  );
});

AdvantageItem.displayName = "AdvantageItem";
