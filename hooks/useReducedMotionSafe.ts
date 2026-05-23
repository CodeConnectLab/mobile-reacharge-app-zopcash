"use client";

import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function useReducedMotionSafe() {
  const prefersReducedMotion = useReducedMotion();

  return useMemo(
    () => ({
      prefersReducedMotion: !!prefersReducedMotion,
      duration: prefersReducedMotion ? 0 : undefined,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: "easeOut" as const },
      spring: prefersReducedMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 260, damping: 20 },
    }),
    [prefersReducedMotion]
  );
}
