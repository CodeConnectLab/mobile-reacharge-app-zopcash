"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUpFromBottom } from "@/lib/motionVariants";
import { getReducedMotionVariants } from "@/lib/motionVariants";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

function StatCard({ value }: { value: React.ReactNode }) {
  return (
    <div className="glass-card p-6 text-center">
      <p className="font-heading text-2xl font-bold text-brand-accent sm:text-3xl">{value}</p>
    </div>
  );
}

function SuccessRateStat({ inView }: { inView: boolean }) {
  const count = useCountUp({ end: 99.9, decimals: 1, inView });
  return <>{count}% Success Rate</>;
}

function ProcessingStat({ inView }: { inView: boolean }) {
  const count = useCountUp({ end: 3, decimals: 0, inView });
  return (
    <>
      &lt; {count} Sec Processing
    </>
  );
}

function WalletStat({ inView }: { inView: boolean }) {
  const count = useCountUp({ end: 0, decimals: 0, inView });
  return (
    <>
      {count} Wallets. {count} Stored Funds.
    </>
  );
}

export default function WhyZopcash() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { prefersReducedMotion } = useReducedMotionSafe();
  const variants = getReducedMotionVariants(fadeUpFromBottom, prefersReducedMotion);

  return (
    <section className="py-20 sm:py-28" aria-label="Why Zopcash">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="glass-card grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Why people love Zopcash
            </h2>
            <p className="mt-4 text-lg text-brand-text-secondary">
              No drama. No delays. Just fast, honest recharges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <StatCard value={<SuccessRateStat inView={inView} />} />
            <StatCard value={<ProcessingStat inView={inView} />} />
            <StatCard value={<WalletStat inView={inView} />} />
            <StatCard
              value={
                <motion.span
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  B2C Direct Service
                </motion.span>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
