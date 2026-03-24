"use client";

import React, { useCallback } from "react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLenis } from "../providers/SmoothScrollProvider";

export const navItems = [
  { name: "ПРЕИМУЩЕСТВА", href: "#advantages" },
  { name: "ЭТАПЫ", href: "#steps" },
  { name: "ОТЗЫВЫ", href: "#reviews" },
  { name: "ВОПРОСЫ", href: "#questions" },
] as const;

const SECTION_HREFS = navItems.map((item) => item.href);

export const NavLinks = React.memo(() => {
  const { lenis } = useLenis();
  const activeSection = useActiveSection(SECTION_HREFS);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(href, { offset: -80, duration: 1.5 });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
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
              "font-headline font-bold tracking-tight transition-all duration-300 pb-1 border-b-2",
              isActive
                ? "text-primary-container border-primary-container translate-y-[-2px]"
                : "text-zinc-400 border-transparent hover:text-white"
            )}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
});

NavLinks.displayName = "NavLinks";
