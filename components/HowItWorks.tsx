"use client";

import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  CheckCircle2,
  LayoutGrid,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  getReducedMotionVariants,
  staggerContainer,
} from "@/lib/motionVariants";

const STEPS = [
  {
    n: "01",
    icon: LayoutGrid,
    title: "Pick a Service",
    body: "Choose from 20+ recharge and bill payment services — all in one place.",
    illustration: <ServiceTilesIllustration />,
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Enter Details",
    body: "Type your number, pick a plan or biller, and confirm in seconds.",
    illustration: <InputIllustration />,
  },
  {
    n: "03",
    icon: BadgeIndianRupee,
    title: "Pay & Earn Cashback",
    body: "Pay securely and watch the cashback drop straight into your wallet.",
    illustration: <CashbackIllustration />,
  },
];

function ServiceTilesIllustration() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[Smartphone, LayoutGrid, BadgeIndianRupee, Sparkles, CheckCircle2, LayoutGrid].map(
        (Icon, i) => (
          <div
            key={i}
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              i === 0 || i === 4 ? "bg-purple-glow text-white" : "bg-brand-surface-2 text-brand-primary"
            }`}
          >
            <Icon className="h-4 w-4" />
          </div>
        )
      )}
    </div>
  );
}

function InputIllustration() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 rounded-lg border border-brand-border bg-white px-2.5 py-2">
        <Smartphone className="h-3.5 w-3.5 text-brand-primary" />
        <span className="text-xs font-semibold text-brand-text-primary">+91 98xxx xxxxx</span>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-brand-primary bg-white px-2.5 py-2 shadow-card">
        <span className="font-heading text-sm font-extrabold text-brand-text-primary">₹299</span>
        <span className="text-[10px] text-brand-text-secondary">28d · 2GB/day</span>
      </div>
    </div>
  );
}

function CashbackIllustration() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-cashback px-3 py-2.5 text-white shadow-cta">
      <div>
        <p className="text-[10px] uppercase tracking-wide text-white/80">Cashback</p>
        <p className="font-heading text-base font-extrabold">+ ₹50</p>
      </div>
      <CheckCircle2 className="h-7 w-7" />
    </div>
  );
}

export default function HowItWorks() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const stagger = staggerContainer(0.15);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section
      id="how"
      className="relative bg-brand-surface py-20 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fade} className="chip">
            <Sparkles className="h-3.5 w-3.5" /> How it works
          </motion.span>
          <motion.h2
            id="how-heading"
            variants={fade}
            className="font-heading mt-4 text-balance text-3xl font-extrabold tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl"
          >
            Recharge in <span className="text-gradient">3 Simple</span> Steps
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 text-balance text-base text-brand-text-secondary md:text-lg"
          >
            From open to cashback in under 30 seconds — designed for speed.
          </motion.p>
        </motion.div>

        <div className="relative mt-14">
          {/* Animated connector */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-12 -z-0 hidden h-24 w-full lg:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden
          >
            <motion.path
              d="M 80 40 C 250 -10, 400 90, 500 40 C 600 -10, 750 90, 920 40"
              stroke="url(#connector-grad)"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="connector-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C5CFF" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="relative grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {STEPS.map((step) => (
              <motion.article
                key={step.n}
                variants={fade}
                className="glass-light relative p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading rounded-full bg-purple-glow px-3 py-1 text-[11px] font-extrabold text-white shadow-cta">
                    Step {step.n}
                  </span>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface-2 text-brand-primary"
                    aria-hidden
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-heading mt-5 text-xl font-extrabold text-brand-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{step.body}</p>
                <div className="mt-5 rounded-2xl border border-brand-border bg-white p-4">
                  {step.illustration}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
