"use client";

import { useState, useCallback, useEffect } from "react";
import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { NavLinks } from "./header/NavLinks";
import { MobileMenu } from "./header/MobileMenu";
import { BurgerButton } from "./header/BurgerButton";

import { useModal } from "./providers/ModalProvider";
import { SITE_CONTENT } from "@/config/settings";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]",
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-lg shadow-xl" 
          : "bg-transparent"
      )}
    >
      <div className={cn(
        "flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto relative z-50 transition-all duration-300",
        isScrolled ? "py-4 md:py-4" : "py-6 md:py-8"
      )}>
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="block" aria-label="На главную">
            <Image 
              src="/images/logo.png" 
              alt="FIRST CAR Logo" 
              width={160}
              height={40}
              priority
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
          <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </m.header>
  );
}

