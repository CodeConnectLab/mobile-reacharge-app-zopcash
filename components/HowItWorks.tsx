"use client";

import { motion } from "framer-motion";
import { CreditCard, Phone, Sparkles } from "lucide-react";
import { slideLeft, staggerContainer, getReducedMotionVariants } from "@/lib/motionVariants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Enter Your Number",
    description: "Type in your mobile number and select your operator.",
  },
  {
    number: "2",
    icon: CreditCard,
    title: "Choose a Plan & Pay",
    description: "Pick a recharge plan and pay directly. No wallet needed.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Recharge Done!",
    description: "Your recharge is live in seconds. Simple as that.",
  },
];

export default function HowItWorks() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const containerVariants = getReducedMotionVariants(
    staggerContainer(0.15),
    prefersReducedMotion
  );
  const itemVariants = getReducedMotionVariants(slideLeft, prefersReducedMotion);

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28"
      aria-label="How it works"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-brand-text-secondary">
            Three simple steps to recharge your mobile
          </p>
        </motion.div>

        <motion.div
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary md:block"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              <div className="step-number relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-hero-gradient text-xl font-bold text-white shadow-glow-sm">
                {step.number}
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-surface ring-1 ring-brand-border">
                <step.icon className="h-6 w-6 text-brand-accent" />
              </div>
              <h3 className="font-heading mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="max-w-xs text-sm text-brand-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
