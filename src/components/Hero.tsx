import { HeroContent } from "./hero/HeroContent";
import { HeroMedia } from "./hero/HeroMedia";

export function Hero() {
  return (
    <section id="advantages" className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 px-6 md:px-10 max-w-7xl mx-auto pt-24 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <HeroContent />
      <HeroMedia />
    </section>
  );
}

