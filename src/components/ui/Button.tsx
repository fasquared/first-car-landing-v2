"use client";

import React, { useMemo } from "react";
import { m, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variants = {
  primary: "bg-primary-container hover:bg-primary-fixed-dim text-white hover:shadow-[0_0_20px_rgba(15,82,186,0.3)]",
  secondary: "bg-surface-bright/60 backdrop-blur-md text-white hover:bg-surface-bright"
};

const sizes = {
  default: "px-6 py-2.5 text-sm md:text-base",
  lg: "px-6 md:px-12 py-3 md:py-6 text-lg md:text-xl uppercase md:tracking-widest shadow-[0_0_30px_rgba(15,82,186,0.2)]"
};

export const Button = React.memo(({ 
  variant = "primary",
  size = "default", 
  children, 
  className, 
  icon, 
  ...props 
}: ButtonProps) => {
  const buttonClasses = useMemo(() => cn(
    "rounded-xl font-headline font-bold transition-transform duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background whitespace-nowrap",
    "flex items-center justify-center gap-2",
    variants[variant],
    sizes[size],
    className
  ), [variant, size, className]);

  return (
    <m.button 
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses} 
      {...props}
    >
      <span className="flex items-center justify-center text-center gap-2">
        {children}
        {icon && (
          <span className="material-symbols-outlined normal-case tracking-normal">
            {icon}
          </span>
        )}
      </span>
    </m.button>
  );
});

Button.displayName = "Button";



