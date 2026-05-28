"use client";

import { motion, useInView } from "framer-motion";
import {
  BadgeIndianRupee,
  Clock,
  Lock,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  getReducedMotionVariants,
  staggerContainer,
} from "@/lib/motionVariants";

interface Stat {
  icon: React.ElementType;
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

const STATS: Stat[] = [
  { icon: Users, end: 10000, suffix: "+", label: "Happy Users" },
  { icon: Zap, end: 99.9, decimals: 1, suffix: "%", label: "Success Rate" },
  { icon: BadgeIndianRupee, end: 1.28, decimals: 2, prefix: "₹", suffix: "Cr+", label: "Cashback Distributed" },
  { icon: Clock, end: 24, suffix: "×7", label: "Availability" },
];

function StatCard({ stat, inView }: { stat: Stat; inView: boolean }) {
  const value = useCountUp({
    end: stat.end,
    duration: 1800,
    decimals: stat.decimals ?? 0,
    inView,
  });
  return (
    <div className="relative rounded-3xl border border-brand-border bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-glow text-white shadow-cta">
        <stat.icon className="h-6 w-6" />
      </span>
      <p className="font-heading mt-4 text-3xl font-extrabold text-brand-text-primary sm:text-4xl">
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">
        {stat.label}
      </p>
    </div>
  );
}

const BADGES = [
  { icon: ShieldCheck, label: "RBI Compliant" },
  { icon: Lock, label: "256-bit SSL" },
  { icon: BadgeIndianRupee, label: "PCI-DSS Secure" },
  { icon: Zap, label: "NPCI Certified" },
];

export default function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { prefersReducedMotion } = useReducedMotionSafe();
  const stagger = staggerContainer(0.1);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section className="relative py-20 md:py-28" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fade} className="chip">
            <ShieldCheck className="h-3.5 w-3.5" /> Why Zopcash
          </motion.span>
          <motion.h2
            id="trust-heading"
            variants={fade}
            className="font-heading mt-4 text-balance text-3xl font-extrabold tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl"
          >
            Why Users <span className="text-gradient">Trust</span> Zopcash
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 text-balance text-base text-brand-text-secondary md:text-lg"
          >
            Built on the rails of secure, compliant fintech infrastructure that protects every rupee.
          </motion.p>
        </motion.div>

        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-brand-border bg-brand-surface-2/60 p-8 shadow-card md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mesh opacity-50 blur-2xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl" />

          <div ref={ref} className="relative grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} inView={inView} />
            ))}
          </div>

          <div className="relative mt-10 border-t border-brand-border/70 pt-8">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">
              Trusted, Secure, Compliant
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              {BADGES.map((b) => (
                <li
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 shadow-card"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-surface-2 text-brand-primary">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold text-brand-text-primary">{b.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
