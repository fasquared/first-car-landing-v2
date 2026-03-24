"use client";

import React, { useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { navItems } from "./NavLinks";
import { cn } from "@/lib/utils";
import { useModal } from "../providers/ModalProvider";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLenis } from "../providers/SmoothScrollProvider";
import { SITE_CONTENT } from "@/config/settings";

const SECTION_HREFS = navItems.map((item) => item.href);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = React.memo(({ isOpen, onClose }: MobileMenuProps) => {
  const { openModal } = useModal();
  const { lenis } = useLenis();
  const activeSection = useActiveSection(SECTION_HREFS);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      onClose();
      if (lenis) {
        lenis.scrollTo(href, { offset: -80, duration: 1.5 });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis, onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
          className="md:hidden bg-zinc-900 border-t border-white/5 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <nav className="flex flex-col p-6 gap-6" aria-label="Мобильная навигация">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href ||
                (activeSection === "" && item.href === "#advantages");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "font-headline font-bold text-lg tracking-tight transition-colors",
                    isActive ? "text-primary-container" : "text-zinc-400"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
            <hr className="border-white/5" />
            <div className="flex flex-col gap-4 pt-2">
              <a 
                className="font-headline font-bold text-white text-xl" 
                href={`tel:${SITE_CONTENT.CONTACTS.PHONE_HREF}`}
                aria-label={`Позвонить: ${SITE_CONTENT.CONTACTS.PHONE}`}
              >
                {SITE_CONTENT.CONTACTS.PHONE}
              </a>
              <Button 
                onClick={() => { onClose(); openModal(); }} 
                className="w-full py-4 uppercase"
              >
                Заказать звонок
              </Button>
            </div>
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  );
});

MobileMenu.displayName = "MobileMenu";
