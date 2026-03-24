"use client";

import React from "react";
import { motion } from "framer-motion";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton = React.memo(({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button 
      onClick={onClick}
      aria-label="Toggle menu"
      className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 text-white focus:outline-none relative z-50"
    >
      <motion.span 
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        className="w-6 h-0.5 bg-white block rounded-full"
        transition={{ duration: 0.3 }}
      />
      <motion.span 
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="w-6 h-0.5 bg-white block rounded-full"
        transition={{ duration: 0.2 }}
      />
      <motion.span 
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        className="w-6 h-0.5 bg-white block rounded-full"
        transition={{ duration: 0.3 }}
      />
    </button>
  );
});

BurgerButton.displayName = "BurgerButton";
