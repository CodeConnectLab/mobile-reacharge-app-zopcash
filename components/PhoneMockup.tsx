"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface PhoneMockupProps {
  variant?: "input" | "success";
  className?: string;
  animate?: boolean;
}

const operators = [
  { name: "Jio", color: "bg-blue-600" },
  { name: "Airtel", color: "bg-red-600" },
  { name: "Vi", color: "bg-purple-600" },
  { name: "BSNL", color: "bg-green-600" },
];

function InputScreen() {
  return (
    <div className="flex h-full flex-col bg-brand-bg p-3">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-heading text-sm font-bold gradient-text">Zopcash</span>
        <div className="h-7 w-7 rounded-full bg-brand-primary/30 ring-1 ring-brand-primary/50" />
      </div>

      <p className="mb-2 text-[10px] text-brand-text-secondary">Enter Mobile Number</p>
      <div className="mb-4 rounded-lg border border-brand-border bg-brand-surface px-3 py-2">
        <span className="text-xs text-brand-text-primary">+91 98765 43210</span>
      </div>

      <div className="mb-4 flex justify-between gap-1">
        {operators.map((op) => (
          <div key={op.name} className="flex flex-col items-center gap-1">
            <div className={`h-8 w-8 rounded-full ${op.color} ring-2 ring-brand-border`} />
            <span className="text-[8px] text-brand-text-secondary">{op.name}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mb-auto w-full rounded-lg bg-brand-highlight py-2 text-xs font-semibold text-brand-bg"
      >
        Recharge Now
      </button>

      <div className="mt-3 flex items-center justify-center gap-1 rounded-full bg-green-500/10 px-2 py-1">
        <CheckCircle2 className="h-3 w-3 text-green-400" />
        <span className="text-[9px] text-green-400">Last Recharge: ✓ Success</span>
      </div>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-brand-bg p-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
        <CheckCircle2 className="h-10 w-10 text-green-400" />
      </div>
      <h3 className="mb-1 font-heading text-sm font-bold text-brand-text-primary">
        Recharge Successful ✓
      </h3>
      <p className="mb-1 text-xs text-brand-text-secondary">+91 98765 43210</p>
      <p className="mb-4 text-lg font-bold text-brand-accent">₹299</p>
      <div className="rounded-full bg-green-500/10 px-3 py-1">
        <span className="text-[10px] text-green-400">Processed in 2.1 seconds</span>
      </div>
    </div>
  );
}

export default function PhoneMockup({
  variant = "input",
  className = "",
  animate = true,
}: PhoneMockupProps) {
  const { prefersReducedMotion } = useReducedMotionSafe();

  const floatAnimation = prefersReducedMotion || !animate
    ? {}
    : {
        y: [0, -12, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <motion.div
      animate={floatAnimation}
      className={`relative mx-auto w-[220px] sm:w-[240px] ${className}`}
    >
      <div
        className="relative rounded-[2.5rem] border-[3px] border-brand-border bg-brand-surface p-2 shadow-glow"
        style={{
          boxShadow:
            "0 0 40px rgba(79, 70, 229, 0.35), 0 0 80px rgba(6, 182, 212, 0.15), inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <div className="absolute left-1/2 top-3 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-bg ring-1 ring-brand-border" />

        <div className="overflow-hidden rounded-[2rem] bg-brand-bg" style={{ aspectRatio: "9/19" }}>
          {variant === "input" ? <InputScreen /> : <SuccessScreen />}
        </div>

        <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-brand-border" />
      </div>
    </motion.div>
  );
}
