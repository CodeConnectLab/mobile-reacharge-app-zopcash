"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motionVariants";
import { getReducedMotionVariants } from "@/lib/motionVariants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 95}%`,
  top: `${(i * 23 + 10) % 80}%`,
  size: i % 3 === 0 ? 4 : 3,
  delay: `${(i * 0.3) % 2}s`,
}));

export default function DownloadCTA() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const variants = getReducedMotionVariants(scaleIn, prefersReducedMotion);

  return (
    <section
      id="download"
      className="relative overflow-hidden py-20 sm:py-28"
      aria-label="Download app"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: prefersReducedMotion ? "none" : `blob-pulse 4s ease-in-out ${p.delay} infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Recharge Smarter?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Download Zopcash now and experience India&apos;s most direct recharge service.
          </p>

          <div className="mt-8 flex justify-center">
            {/* TODO: Replace with real Zopcash Play Store URL */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-ring-container shimmer-btn inline-flex items-center gap-3 rounded-xl bg-brand-bg px-6 py-3 text-brand-text-primary transition-transform hover:scale-105"
              aria-label="Get it on Google Play"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 0 1-.601-.92V2.734a1.006 1.006 0 0 1 .601-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.002 1.002 0 0 1 0 1.738l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303L5.864 2.658z"
                />
              </svg>
              <div className="text-left">
                <p className="text-xs text-brand-text-secondary">GET IT ON</p>
                <p className="font-heading text-lg font-bold">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
