import { Variants } from "framer-motion";

/**
 * Плавное появление снизу (Premium spring)
 * Используется для заголовков и текстовых блоков
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, // Чуть выше для четкости
      damping: 25,    // Оптимальное гашение для дорогого вида
      mass: 1,
    },
  },
};

/**
 * Контейнер с задержкой между дочерними элементами
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Чуть быстрее для динамики
      delayChildren: 0.2,
    },
  },
};

/**
 * Слайд вправо (Custom Bezier)
 * Идеально для HeroMedia
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Канонический экспоненциальный Ease Out
    },
  },
};

/**
 * Варианты для карточек (Hover + Entrance)
 */
export const cardVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 1,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * Эффект для иконок
 */
export const iconVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 15,
      delay: 0.15
    }
  },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.3 }
  }
};

