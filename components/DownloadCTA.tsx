"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, BadgeIndianRupee, Sparkles, Star } from "lucide-react";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  getReducedMotionVariants,
  scaleIn,
  staggerContainer,
  fadeUp,
} from "@/lib/motionVariants";

function StoreBadgeDark({ store }: { store: "google" | "apple" }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/20"
      aria-label={store === "google" ? "Get it on Google Play" : "Download on the App Store"}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-brand-text-primary">
        {store === "google" ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M3.6 2.3a1.5 1.5 0 0 0-.7 1.3v16.8c0 .5.3 1 .7 1.3l9.5-9.7L3.6 2.3Z" />
            <path d="m14.9 13.2 2.8 2.9-11 6.2c-.5.3-1.2.2-1.6-.2l9.8-8.9Z" opacity=".85" />
            <path d="m14.9 10.8-9.8-8.9c.4-.4 1-.5 1.6-.2l11 6.2-2.8 2.9Z" opacity=".7" />
            <path d="m17.7 7.9 3.7 2.1c.7.4.7 1.5 0 1.9l-3.7 2.1-2.8-3 2.8-3.1Z" opacity=".95" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4C2.9 12.7 4.2 17 5.9 19.4c.8 1.2 1.8 2.5 3 2.5 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9 0-.1 0-.2 0-.2ZM14.4 5.4c.6-.8 1.1-1.9.9-3-1 0-2.2.7-2.9 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.3-.6 3-1.4Z" />
          </svg>
        )}
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/80">
          {store === "google" ? "GET IT ON" : "Download on the"}
        </span>
        <span className="block text-base font-extrabold text-white">
          {store === "google" ? "Google Play" : "App Store"}
        </span>
      </span>
    </a>
  );
}

function FloatingCoin({
  className,
  size = 28,
  delay = 0,
}: {
  className: string;
  size?: number;
  delay?: number;
}) {
  const { prefersReducedMotion } = useReducedMotionSafe();
  return (
    <motion.span
      aria-hidden
      style={{ width: size, height: size }}
      className={`pointer-events-none absolute flex items-center justify-center rounded-full bg-gold-coin text-white shadow-lg ${className}`}
      animate={prefersReducedMotion ? {} : { y: [0, -16, 0], rotate: [0, 8, 0] }}
      transition={{
        duration: 6,
        repeat: prefersReducedMotion ? 0 : Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <span className="text-xs font-black">₹</span>
    </motion.span>
  );
}

export default function DownloadCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const counter = useCountUp({ end: 1284300, duration: 2400, inView });
  const { prefersReducedMotion } = useReducedMotionSafe();
  const scale = getReducedMotionVariants(scaleIn, prefersReducedMotion);
  const stagger = staggerContainer(0.1);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section
      id="download"
      ref={ref}
      className="relative isolate overflow-hidden py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Animated purple background */}
      <div
        className="absolute inset-0 -z-20 bg-purple-glow"
        style={{
          backgroundSize: "200% 200%",
          animation: prefersReducedMotion ? undefined : "gradient-shift 10s ease-in-out infinite",
        }}
      />
      {/* Vignette + mesh overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.45)_100%)]" />

      {/* Floating coins */}
      <FloatingCoin className="top-10 left-[8%]" size={36} delay={0} />
      <FloatingCoin className="top-1/3 right-[10%]" size={28} delay={0.6} />
      <FloatingCoin className="bottom-16 left-[14%]" size={24} delay={1.2} />
      <FloatingCoin className="bottom-24 right-[18%]" size={32} delay={1.8} />
      <FloatingCoin className="top-1/2 left-[40%]" size={20} delay={0.9} />
      <FloatingCoin className="top-20 right-[28%]" size={22} delay={1.4} />
      <FloatingCoin className="bottom-10 left-[55%]" size={18} delay={2.1} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="relative mx-auto max-w-4xl px-6 text-center md:px-12"
      >
        <motion.span
          variants={fade}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" /> Start earning today
        </motion.span>

        <motion.h2
          id="cta-heading"
          variants={fade}
          className="font-heading mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Start Saving on{" "}
          <span className="bg-gold-coin bg-clip-text text-transparent">Every Recharge</span> Today
        </motion.h2>

        <motion.p
          variants={fade}
          className="mx-auto mt-5 max-w-2xl text-balance text-base text-white/85 md:text-lg"
        >
          Join thousands of users using Zopcash for recharge, utility bills, FASTag, DTH, broadband,
          and more.
        </motion.p>

        <motion.div variants={scale} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <StoreBadgeDark store="google" />
          <StoreBadgeDark store="apple" />
        </motion.div>

        <motion.div variants={fade} className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-white/90">
            <div className="flex items-center gap-1 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="font-bold">4.8/5</span>
            <span className="text-white/70">on Play Store</span>
          </div>
          <a
            href="#cashback"
            className="inline-flex items-center gap-2 text-sm font-bold text-white underline-offset-4 hover:underline"
          >
            Why Zopcash <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Live counter ribbon */}
        <motion.div
          variants={fade}
          className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cashback text-white shadow">
            <BadgeIndianRupee className="h-4 w-4" />
          </span>
          <p className="text-sm text-white/90">
            <span className="font-heading font-extrabold text-white">
              ₹{Number(counter).toLocaleString("en-IN")}
            </span>{" "}
            in cashback delivered this week
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
