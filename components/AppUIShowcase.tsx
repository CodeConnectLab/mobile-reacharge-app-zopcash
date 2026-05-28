"use client";

import { motion } from "framer-motion";
import { BadgeIndianRupee, Smartphone, Sparkles, Zap } from "lucide-react";
import PhoneMockup, { FloatingChip } from "./PhoneMockup";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  getReducedMotionVariants,
  staggerContainer,
} from "@/lib/motionVariants";

export default function AppExperience() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const stagger = staggerContainer(0.12);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section
      id="app"
      className="relative overflow-hidden py-20 md:py-28"
      aria-labelledby="app-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-glow opacity-15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fade} className="chip">
            <Smartphone className="h-3.5 w-3.5" /> App Experience
          </motion.span>
          <motion.h2
            id="app-heading"
            variants={fade}
            className="font-heading mt-4 text-balance text-3xl font-extrabold tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl"
          >
            Designed for <span className="text-gradient">Speed</span>. Built for{" "}
            <span className="text-gradient-cashback">Trust</span>.
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 text-balance text-base text-brand-text-secondary md:text-lg"
          >
            A premium fintech experience that turns every recharge into a delight — and a reward.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-3 md:gap-6"
        >
          <motion.div variants={fade} className="relative flex justify-center">
            <PhoneMockup variant="recharge" animate floatDelay={0} />
            <FloatingChip
              icon={<Sparkles className="h-3.5 w-3.5" />}
              label="Earn ₹50"
              tone="success"
              className="-right-2 top-8"
              delay={0.2}
            />
          </motion.div>

          <motion.div variants={fade} className="relative flex justify-center md:-mt-8">
            <PhoneMockup variant="success" animate floatDelay={0.8} />
            <FloatingChip
              icon={<BadgeIndianRupee className="h-3.5 w-3.5" />}
              label="+ ₹50 Added"
              tone="purple"
              className="-left-4 bottom-24"
              delay={0.9}
            />
            <FloatingChip
              icon={<Zap className="h-3.5 w-3.5" />}
              label="2.1s"
              tone="default"
              className="-right-2 top-32"
              delay={1.6}
            />
          </motion.div>

          <motion.div variants={fade} className="relative flex justify-center">
            <PhoneMockup variant="wallet" animate floatDelay={1.6} />
            <FloatingChip
              icon={<Sparkles className="h-3.5 w-3.5" />}
              label="₹4,820 saved"
              tone="default"
              className="-left-4 top-16"
              delay={1.2}
            />
          </motion.div>
        </motion.div>

        {/* Feature highlights below phones */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { label: "Pixel-perfect UI", body: "Designed by ex-fintech designers." },
            { label: "Offline-ready", body: "Pay even on patchy networks." },
            { label: "Biometric Login", body: "Face ID & fingerprint built-in." },
          ].map((f) => (
            <li
              key={f.label}
              className="rounded-2xl border border-brand-border bg-white p-5 text-center shadow-card"
            >
              <p className="font-heading text-sm font-extrabold text-brand-text-primary">
                {f.label}
              </p>
              <p className="mt-1 text-xs text-brand-text-secondary">{f.body}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
