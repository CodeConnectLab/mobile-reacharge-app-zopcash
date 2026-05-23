"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, User, Zap } from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";
import { getReducedMotionVariants } from "@/lib/motionVariants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const flowSteps = [
  { icon: User, label: "User" },
  { icon: Smartphone, label: "Zopcash App" },
  { icon: Zap, label: "Instant Recharge" },
];

export default function TargetAudience() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const variants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section className="py-20 sm:py-28" aria-label="Target audience">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Built for You, Not Businesses
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-text-secondary">
            Zopcash is a B2C (Business to Customer) service — designed for direct customers
            who want fast, secure, and hassle-free recharges. No agents. No middlemen. Just you and
            your recharge.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 sm:gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-surface ring-1 ring-brand-border">
                    <step.icon className="h-8 w-8 text-brand-accent" />
                  </div>
                  <span className="text-sm font-medium text-brand-text-primary">{step.label}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="hidden h-6 w-6 text-brand-primary sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2 sm:hidden" aria-hidden="true">
            <div className="h-8 w-0.5 bg-brand-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
