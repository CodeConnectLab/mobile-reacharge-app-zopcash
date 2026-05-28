import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const fadeUpFromBottom: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const revealMask: Variants = {
  hidden: { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(11,11,31,0.04), 0 8px 24px rgba(124,92,255,0.08)" },
  hover: {
    y: -6,
    boxShadow: "0 8px 32px rgba(124,92,255,0.18), 0 0 0 1px rgba(124,92,255,0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const floatY: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerFast = (delayChildren = 0): Variants =>
  staggerContainer(0.06, delayChildren);

export const staggerSlow = (delayChildren = 0): Variants =>
  staggerContainer(0.15, delayChildren);

export const getReducedMotionVariants = (
  variants: Variants,
  prefersReducedMotion: boolean
): Variants => {
  if (!prefersReducedMotion) return variants;

  return {
    hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
};
