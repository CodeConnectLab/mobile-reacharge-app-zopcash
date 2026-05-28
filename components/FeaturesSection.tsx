"use client";

import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  Clock,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  getReducedMotionVariants,
  staggerContainer,
} from "@/lib/motionVariants";

interface Benefit {
  icon: React.ElementType;
  title: string;
  body: string;
  badge?: string;
  tone: "purple" | "success" | "cyan" | "gold";
}

const BENEFITS: Benefit[] = [
  {
    icon: BadgeIndianRupee,
    title: "Instant Cashback",
    body: "Earn assured cashback the moment your recharge or bill payment is successful — no waiting, no minimums.",
    badge: "Earn ₹50+ avg",
    tone: "success",
  },
  {
    icon: Clock,
    title: "Fast Refunds",
    body: "On the rare occasion something fails, your money is returned within minutes — automatically.",
    tone: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Lowest Failure Rate",
    body: "Direct integrations with operators and billers mean recharges land first try, every time.",
    badge: "99.9%",
    tone: "cyan",
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    body: "Bank-grade 256-bit encryption, PCI-DSS compliant gateways, and zero stored card data.",
    tone: "purple",
  },
  {
    icon: Sparkles,
    title: "Hassle-Free Payments",
    body: "Save your favourites, pay in a tap, and let Zopcash remind you before bills are due.",
    tone: "gold",
  },
];

const TONE_BG: Record<Benefit["tone"], string> = {
  purple: "bg-purple-glow text-white",
  success: "bg-cashback text-white",
  cyan: "bg-brand-cyan/90 text-white",
  gold: "bg-gold-coin text-white",
};

export default function CashbackBenefits() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const stagger = staggerContainer(0.08);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section
      id="cashback"
      className="relative py-20 md:py-28"
      aria-labelledby="cashback-heading"
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
            <BadgeIndianRupee className="h-3.5 w-3.5" /> Cashback Benefits
          </motion.span>
          <motion.h2
            id="cashback-heading"
            variants={fade}
            className="font-heading mt-4 text-balance text-3xl font-extrabold tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl"
          >
            Get Cashback on <span className="text-gradient-cashback">Every</span> Recharge & Bill Payment
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 text-balance text-base text-brand-text-secondary md:text-lg"
          >
            Whether it&apos;s a mobile recharge, electricity bill, FASTag, or DTH payment — Zopcash
            rewards every transaction with instant cashback.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6"
        >
          {BENEFITS.map((b, i) => (
            <motion.article
              key={b.title}
              variants={fade}
              className={`benefit-card ${
                i === 0
                  ? "lg:col-span-3"
                  : i === 1
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-cta ${TONE_BG[b.tone]}`}
                  aria-hidden
                >
                  <b.icon className="h-6 w-6" />
                </span>
                {b.badge && (
                  <span className="chip-success">{b.badge}</span>
                )}
              </div>
              <h3 className="font-heading text-xl font-extrabold text-brand-text-primary">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-text-secondary">{b.body}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Total cashback ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-3xl border border-emerald-100 bg-emerald-50/60 px-6 py-5 text-center shadow-card sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cashback text-white shadow-cta">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="text-sm text-brand-text-secondary">
              Cashback delivered to users so far
            </p>
          </div>
          <p className="font-heading text-2xl font-extrabold text-emerald-700">
            ₹ 1,28,42,300+
          </p>
        </motion.div>
      </div>
    </section>
  );
}
