"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInRight } from "@/lib/animations";

export function HeroMedia() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideInRight}
      className="lg:col-span-6 flex justify-center lg:justify-end relative mt-8 lg:mt-0"
    >
      <div className="relative w-full aspect-square max-w-[600px]">
        {/* Framed Image Container */}
        <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-primary-container shadow-[0_0_40px_rgba(3,253,0,0.2)] bg-zinc-900/50">
          <Image
            src="/images/car.jpg"
            alt="Nissan Qashqai First Car"
            fill
            priority
            className="object-cover object-center transition-all duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div>
    </motion.div>
  );
}
