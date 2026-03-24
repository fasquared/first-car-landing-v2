"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Lenis from "lenis";

// Типизированный контекст вместо `window as any`
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
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      wheelMultiplier: 1,
      infinite: false,
    });

    setLenis(instance);

    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}
