"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { fadeUp } from "@/lib/motionVariants";
import { getReducedMotionVariants } from "@/lib/motionVariants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export default function AppUIShowcase() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const variants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div variants={variants}>
        <PhoneMockup variant="input" />
      </motion.div>
      <motion.div variants={variants}>
        <PhoneMockup variant="success" />
      </motion.div>
    </motion.div>
  );
}
