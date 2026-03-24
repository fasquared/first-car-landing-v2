import { Variants } from "framer-motion";

// Плавное появление снизу (spring без duration)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

// Контейнер с задержкой между дочерними элементами
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Слайд вправо (tween с кастомным easing)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Варианты для карточек этапов
export const cardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

// Варианты для иконок внутри карточек
export const iconVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 260, 
      damping: 20,
      delay: 0.2
    }
  },
  hover: { 
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4 }
  }
};

