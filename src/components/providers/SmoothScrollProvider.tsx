"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type Lenis from "lenis";

interface LenisContextValue {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    let instance: Lenis | null = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const LenisModule = await import("lenis");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const LenisLib = (LenisModule as any).default || LenisModule;
        
        instance = new LenisLib({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: 0.08,
          wheelMultiplier: 1,
          infinite: false,
        });

        setLenis(instance);

        const raf = (time: number) => {
          instance?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (err) {
        console.error("Lenis init error:", err);
      }
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (instance) {
        instance.destroy();
        instance = null;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}
