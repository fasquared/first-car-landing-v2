"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { NavLinks } from "./header/NavLinks";
import { MobileMenu } from "./header/MobileMenu";
import { BurgerButton } from "./header/BurgerButton";

import { useModal } from "./providers/ModalProvider";
import { SITE_CONTENT } from "@/config/settings";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-lg shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto relative z-50">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image 
              src="/images/logo.png" 
              alt="FIRST CAR" 
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <NavLinks />

        {/* Trailing Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <a 
            className="hidden lg:block font-headline font-bold tracking-tight text-white hover:text-primary-container transition-colors" 
            href={`tel:${SITE_CONTENT.CONTACTS.PHONE_HREF}`}
          >
            {SITE_CONTENT.CONTACTS.PHONE}
          </a>
          <Button onClick={openModal} className="hidden sm:flex px-6 py-2.5 text-sm md:text-base">
            Заказать звонок
          </Button>

          {/* Burger Button */}
          <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.header>
  );
}

