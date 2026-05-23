"use client";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  ShieldCheck,
  Zap,
  Wallet,
  TrendingUp,
} from "lucide-react";
import AppUIShowcase from "./AppUIShowcase";
import { fadeUp, staggerContainer, getReducedMotionVariants } from "@/lib/motionVariants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const features = [
  {
    icon: Zap,
    title: "Direct Recharge Service",
    description:
      "Fast and secure direct recharge solutions for customers with seamless processing.",
  },
  {
    icon: Wallet,
    title: "No Wallet / Balance Storage",
    description:
      "We do not maintain customer wallet balances or store funds in our system.",
  },
  {
    icon: TrendingUp,
    title: "Instant Recharge Processing",
    description:
      "Payments are processed instantly and recharges are completed in real time.",
  },
  {
    icon: ArrowRightLeft,
    title: "Direct Payment → Direct Recharge",
    description:
      "Pay directly and get your recharge processed instantly without extra steps.",
  },
  {
    icon: ShieldCheck,
    title: "Low Failure Rate",
    description:
      "Reliable and optimized systems designed to ensure a high success rate with minimal failures.",
  },
];

export default function FeaturesSection() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const containerVariants = getReducedMotionVariants(
    staggerContainer(0.1),
    prefersReducedMotion
  );
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section id="features" className="py-20 sm:py-28" aria-label="Features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-brand-text-secondary">
            Built for speed, security, and simplicity
          </p>
        </motion.div>

        <div className="mb-20">
          <AppUIShowcase />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`feature-card relative overflow-hidden p-6 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-card-accent" />
              <feature.icon className="mb-4 h-8 w-8 text-brand-accent" />
              <h3 className="font-heading mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-brand-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
