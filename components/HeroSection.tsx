"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  Check,
  Clock,
  Download,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import PhoneMockup, { FloatingChip } from "./PhoneMockup";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  getReducedMotionVariants,
} from "@/lib/motionVariants";

const TRUST_CHIPS = [
  { icon: BadgeIndianRupee, label: "Assured Cashback" },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Zap, label: "Instant Recharge" },
  { icon: Clock, label: "24×7 Service" },
];

/** Pure-CSS Google Play & App Store badges (white pill, dark label). */
function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-2.5 rounded-xl border border-brand-border bg-white px-3.5 py-2 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
      aria-label={store === "google" ? "Get it on Google Play" : "Download on the App Store"}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-text-primary text-white">
        {store === "google" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M3.6 2.3a1.5 1.5 0 0 0-.7 1.3v16.8c0 .5.3 1 .7 1.3l9.5-9.7L3.6 2.3Z" />
            <path d="m14.9 13.2 2.8 2.9-11 6.2c-.5.3-1.2.2-1.6-.2l9.8-8.9Z" opacity=".85" />
            <path d="m14.9 10.8-9.8-8.9c.4-.4 1-.5 1.6-.2l11 6.2-2.8 2.9Z" opacity=".7" />
            <path d="m17.7 7.9 3.7 2.1c.7.4.7 1.5 0 1.9l-3.7 2.1-2.8-3 2.8-3.1Z" opacity=".95" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4C2.9 12.7 4.2 17 5.9 19.4c.8 1.2 1.8 2.5 3 2.5 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9 0-.1 0-.2 0-.2ZM14.4 5.4c.6-.8 1.1-1.9.9-3-1 0-2.2.7-2.9 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.3-.6 3-1.4Z" />
          </svg>
        )}
      </span>
      <span className="leading-tight">
        <span className="block text-[9px] uppercase tracking-wider text-brand-text-secondary">
          {store === "google" ? "GET IT ON" : "Download on the"}
        </span>
        <span className="block text-sm font-extrabold text-brand-text-primary">
          {store === "google" ? "Google Play" : "App Store"}
        </span>
      </span>
    </a>
  );
}

function DecorBubble({
  className,
  size = 32,
  tone = "purple",
  delay = 0,
  symbol,
}: {
  className: string;
  size?: number;
  tone?: "purple" | "lavender" | "cyan" | "gold" | "white";
  delay?: number;
  symbol?: React.ReactNode;
}) {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const tones: Record<string, string> = {
    purple: "bg-purple-glow shadow-glow-purple",
    lavender: "bg-brand-accent/70 shadow-card",
    cyan: "bg-brand-cyan/80 shadow-card",
    gold: "bg-gold-coin shadow-card",
    white: "bg-white border border-brand-border shadow-card",
  };
  return (
    <motion.span
      aria-hidden
      style={{ width: size, height: size }}
      className={`pointer-events-none absolute flex items-center justify-center rounded-full ${tones[tone]} ${className}`}
      animate={prefersReducedMotion ? {} : { y: [0, -14, 0], rotate: [0, 4, 0] }}
      transition={{
        duration: 6,
        repeat: prefersReducedMotion ? 0 : Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {symbol}
    </motion.span>
  );
}

export default function HeroSection() {
  const { prefersReducedMotion, transition } = useReducedMotionSafe();
  const stagger = staggerContainer(0.08, 0.05);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);
  const scale = getReducedMotionVariants(scaleIn, prefersReducedMotion);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-radial pt-32 pb-20 md:pt-40 md:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute top-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-brand-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-8">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative lg:col-span-7"
        >
          <motion.span variants={fade} className="chip">
            <Sparkles className="h-3.5 w-3.5" /> India&apos;s #1 Cashback Recharge App
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={fade}
            className="font-heading mt-5 text-balance text-4xl font-extrabold tracking-tight text-brand-text-primary sm:text-5xl lg:text-6xl"
          >
            India&apos;s Trusted{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Cashback</span>
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-purple-glow opacity-30"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
            <br />
            Recharge Platform
          </motion.h1>

          <motion.p
            variants={fade}
            className="mt-5 max-w-xl text-base text-brand-text-secondary md:text-lg"
          >
            Recharge mobiles, pay electricity bills, FASTag, DTH, broadband, and more — all in one
            powerful app with{" "}
            <span className="font-semibold text-brand-text-primary">assured cashback</span> on every
            transaction.
          </motion.p>

          {/* Trust chip row */}
          <motion.ul
            variants={fade}
            className="mt-6 flex flex-wrap items-center gap-2"
            aria-label="Why Zopcash"
          >
            {TRUST_CHIPS.map(({ icon: Icon, label }) => (
              <li key={label} className="chip">
                <Icon className="h-3.5 w-3.5" /> {label}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={fade} className="mt-8 flex flex-wrap items-center gap-4">
            <div className="pulse-ring-container rounded-full">
              <a href="#download" className="btn-primary">
                <Download className="h-4 w-4" /> Download App
              </a>
            </div>
            <a href="#cashback" className="btn-ghost">
              Start Saving Today <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Store badges */}
          <motion.div variants={fade} className="mt-6 flex flex-wrap items-center gap-3">
            <StoreBadge store="google" />
            <StoreBadge store="apple" />
          </motion.div>

          {/* Tiny social proof */}
          <motion.div variants={fade} className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#7C5CFF", "#22D3EE", "#F7B500", "#10B981"].map((c, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-white"
                  style={{ background: c }}
                  aria-hidden
                />
              ))}
            </div>
            <div className="text-xs text-brand-text-secondary">
              <div className="flex items-center gap-1 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
                <span className="ml-1 font-bold text-brand-text-primary">4.8/5</span>
              </div>
              <p>
                Trusted by{" "}
                <span className="font-semibold text-brand-text-primary">10,000+ users</span> across
                India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — phone with orbit cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scale}
          transition={transition}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto flex items-center justify-center">
            {/* Glow ellipse */}
            <div className="absolute inset-0 -z-10 m-auto h-96 w-96 rounded-full bg-purple-glow opacity-30 blur-3xl" />

            <PhoneMockup variant="success" animate floatDelay={0} />

            {/* Floating orbit cards */}
            <FloatingChip
              icon={<BadgeIndianRupee className="h-3.5 w-3.5" />}
              label="+ ₹50 Cashback"
              tone="success"
              className="-left-4 top-10 sm:-left-12"
              delay={0.3}
            />
            <FloatingChip
              icon={<Zap className="h-3.5 w-3.5" />}
              label="Done in 2.1s"
              tone="purple"
              className="-right-2 top-32 sm:-right-12"
              delay={0.9}
            />
            <FloatingChip
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
              label="Bank-grade Secure"
              tone="default"
              className="-left-2 bottom-24 sm:-left-10"
              delay={1.6}
            />
            <FloatingChip
              icon={<Check className="h-3.5 w-3.5 text-emerald-600" />}
              label="No Wallet Top-up"
              tone="default"
              className="-right-1 bottom-16 sm:-right-8"
              delay={2.2}
            />

            {/* Decorative bubbles */}
            <DecorBubble
              className="-top-2 left-8"
              size={36}
              tone="gold"
              delay={0.2}
              symbol={<span className="text-sm font-black text-white">₹</span>}
            />
            <DecorBubble
              className="top-16 -right-4"
              size={28}
              tone="cyan"
              delay={0.8}
              symbol={<Sparkles className="h-3.5 w-3.5 text-white" />}
            />
            <DecorBubble
              className="bottom-10 right-12"
              size={22}
              tone="lavender"
              delay={1.4}
            />
            <DecorBubble
              className="-bottom-2 left-12"
              size={30}
              tone="purple"
              delay={1.1}
              symbol={<Star className="h-3.5 w-3.5 fill-white text-white" />}
            />
            <DecorBubble className="top-4 right-20" size={16} tone="white" delay={0.6} />
            <DecorBubble className="bottom-32 -left-6" size={18} tone="white" delay={1.8} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
