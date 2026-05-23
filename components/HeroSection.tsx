"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const headlineWords = ["Recharge", "Done", "Right."];

export default function HeroSection() {
  const { prefersReducedMotion, spring } = useReducedMotionSafe();

  return (
    <section
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 animate-blob-pulse rounded-full bg-brand-primary/30 blur-3xl" />
        <div
          className="absolute -right-32 top-1/3 h-80 w-80 animate-blob-pulse rounded-full bg-brand-accent/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-72 w-72 animate-blob-pulse rounded-full bg-purple-600/20 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8">
        <div className="lg:col-span-3">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/60 px-4 py-1.5 text-sm text-brand-text-secondary backdrop-blur-sm"
          >
            <span>⚡</span>
            <span>B2C Direct Recharge Service</span>
          </motion.div>

          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="mr-3 inline-block"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-brand-text-secondary"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Fast, direct, and no middlemen. Zopcash gets your recharge done in seconds —
            straight from your payment to your number.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={spring}
          >
            <a
              href="#download"
              className="shimmer-btn inline-flex items-center rounded-xl bg-brand-highlight px-6 py-3 text-sm font-semibold text-brand-bg transition-transform hover:scale-105"
            >
              Download on Google Play
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-xl border border-brand-border bg-brand-surface/40 px-6 py-3 text-sm font-medium text-brand-text-primary backdrop-blur-sm transition-colors hover:border-brand-accent/50"
            >
              See How It Works ↓
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-brand-text-secondary"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            No wallet required · Instant · Secure
          </motion.p>
        </div>

        <div className="flex justify-center lg:col-span-2">
          <PhoneMockup variant="input" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 80L60 65C120 50 240 20 360 15C480 10 600 30 720 35C840 40 960 30 1080 25C1200 20 1320 20 1380 20L1440 20V80H0Z"
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  );
}
