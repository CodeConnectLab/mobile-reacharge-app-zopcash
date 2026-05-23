"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  startOnView?: boolean;
  inView?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  startOnView = true,
  inView = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(startOnView ? 0 : end);
  const { prefersReducedMotion } = useReducedMotionSafe();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (end - startValue) * eased;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, inView, prefersReducedMotion]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return formatted;
}
