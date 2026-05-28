"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  Check,
  CheckCircle2,
  ChevronRight,
  Flame,
  Lock,
  Receipt,
  Smartphone,
  Sparkles,
  TrendingUp,
  Tv,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

type Variant = "recharge" | "success" | "wallet";

interface PhoneMockupProps {
  variant?: Variant;
  animate?: boolean;
  floatDelay?: number;
  className?: string;
}

export default function PhoneMockup({
  variant = "recharge",
  animate = true,
  floatDelay = 0,
  className = "",
}: PhoneMockupProps) {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const shouldFloat = animate && !prefersReducedMotion;

  return (
    <motion.div
      className={`relative ${className}`}
      animate={
        shouldFloat
          ? { y: [0, -12, 0] }
          : { y: 0 }
      }
      transition={{
        duration: 5,
        repeat: shouldFloat ? Infinity : 0,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <div
        className="relative mx-auto w-[260px] rounded-[44px] border-[3px] border-[#1F1A2E] bg-[#1F1A2E] p-2 shadow-card-hover sm:w-[280px]"
        aria-label={`Zopcash app ${variant} screen`}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1F1A2E]" />
        {/* Screen */}
        <div className="relative h-[540px] overflow-hidden rounded-[36px] bg-gradient-to-b from-white to-brand-surface">
          {variant === "recharge" && <RechargeScreen />}
          {variant === "success" && <SuccessScreen />}
          {variant === "wallet" && <WalletScreen />}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
      </div>
    </motion.div>
  );
}

function ScreenHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-5 pt-8">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-glow text-white text-[11px] font-extrabold shadow-cta">
          Z
        </span>
        <span className="font-heading text-sm font-bold text-brand-text-primary">{title}</span>
      </div>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-surface-2">
        <span className="text-xs font-bold text-brand-primary">S</span>
      </span>
    </div>
  );
}

function RechargeScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="Zopcash" />

      {/* Cashback strip */}
      <div className="mx-5 mt-4 flex items-center gap-2 rounded-xl bg-cashback px-3 py-2 text-white shadow-sm">
        <Sparkles className="h-4 w-4" />
        <span className="text-[11px] font-semibold">Earn ₹50 cashback on this recharge</span>
      </div>

      <div className="mx-5 mt-4">
        <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-text-secondary">
          Mobile Number
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-brand-border bg-white px-3 py-2.5">
          <Smartphone className="h-4 w-4 text-brand-primary" />
          <span className="text-sm font-semibold text-brand-text-primary">+91 98xxx xxxxx</span>
        </div>
      </div>

      <div className="mx-5 mt-3">
        <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-text-secondary">
          Operator
        </label>
        <div className="mt-1.5 grid grid-cols-4 gap-2">
          {[
            { name: "Jio", color: "bg-blue-500" },
            { name: "Airtel", color: "bg-red-500" },
            { name: "Vi", color: "bg-purple-500" },
            { name: "BSNL", color: "bg-emerald-500" },
          ].map((op, i) => (
            <div
              key={op.name}
              className={`flex h-10 items-center justify-center rounded-lg text-[10px] font-bold text-white ${op.color} ${i === 0 ? "ring-2 ring-brand-primary ring-offset-2" : "opacity-60"}`}
            >
              {op.name}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4 flex-1">
        <label className="text-[10px] font-semibold uppercase tracking-wide text-brand-text-secondary">
          Popular Plans
        </label>
        <div className="mt-1.5 space-y-2">
          <PlanCard amount="₹299" detail="28 days · 2GB/day · Unlimited calls" selected />
          <PlanCard amount="₹719" detail="84 days · 1.5GB/day · Unlimited" />
        </div>
      </div>

      <div className="px-5 pb-6 pt-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-glow py-3 text-sm font-bold text-white shadow-cta">
          Recharge Now <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function PlanCard({
  amount,
  detail,
  selected = false,
}: {
  amount: string;
  detail: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border bg-white px-3 py-2.5 ${
        selected ? "border-brand-primary shadow-card" : "border-brand-border"
      }`}
    >
      <div>
        <div className="font-heading text-base font-bold text-brand-text-primary">{amount}</div>
        <div className="text-[10px] text-brand-text-secondary">{detail}</div>
      </div>
      <ChevronRight className="h-4 w-4 text-brand-text-secondary" />
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-5">
        <div className="absolute inset-0 -m-3 rounded-full bg-cashback opacity-20 blur-2xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cashback text-white shadow-cta">
          <CheckCircle2 className="h-12 w-12" strokeWidth={2.2} />
        </div>
      </div>

      <h3 className="font-heading text-xl font-extrabold text-brand-text-primary">
        Recharge Successful
      </h3>
      <p className="mt-1 text-xs text-brand-text-secondary">+91 98xxx xxxxx · Jio Prepaid</p>

      <div className="mt-5 w-full rounded-2xl border border-brand-border bg-white p-4 shadow-card">
        <div className="flex items-center justify-between">
          <span className="text-xs text-brand-text-secondary">Amount</span>
          <span className="font-heading text-lg font-extrabold text-brand-text-primary">₹299</span>
        </div>
        <div className="my-3 border-t border-dashed border-brand-border" />
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <BadgeIndianRupee className="h-3.5 w-3.5" /> Cashback Earned
          </span>
          <span className="font-heading text-base font-extrabold text-emerald-600">+ ₹50</span>
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-surface-2 px-3 py-1 text-[11px] font-semibold text-brand-primary-deep">
        <Zap className="h-3.5 w-3.5" /> Processed in 2.1 seconds
      </div>

      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-border bg-white py-2.5 text-xs font-bold text-brand-text-primary">
        Share Receipt
      </button>
    </div>
  );
}

function WalletScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenHeader title="My Wallet" />

      <div className="mx-5 mt-4 overflow-hidden rounded-2xl bg-purple-glow p-4 text-white shadow-cta">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/80">Available Cashback</p>
            <p className="font-heading mt-1 text-2xl font-extrabold">₹ 1,284.50</p>
          </div>
          <Wallet className="h-6 w-6 text-white/90" />
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px]">
          <span className="rounded-full bg-white/20 px-2 py-1 font-semibold">+ ₹120 this week</span>
          <button className="flex items-center gap-1 font-semibold">
            Withdraw <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mx-5 mt-4 flex items-center justify-between">
        <span className="font-heading text-sm font-bold text-brand-text-primary">Recent</span>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-brand-primary">
          <TrendingUp className="h-3 w-3" /> Total saved ₹4,820
        </span>
      </div>

      <div className="mx-5 mt-2 flex-1 space-y-2">
        <TxnRow icon={<Smartphone className="h-3.5 w-3.5" />} title="Jio Recharge" sub="Today · ₹299" amt="+ ₹50" />
        <TxnRow icon={<Zap className="h-3.5 w-3.5" />} title="Electricity Bill" sub="Yesterday · ₹1,420" amt="+ ₹85" />
        <TxnRow icon={<Tv className="h-3.5 w-3.5" />} title="DTH Recharge" sub="2 days ago · ₹350" amt="+ ₹25" />
        <TxnRow icon={<Wifi className="h-3.5 w-3.5" />} title="Broadband" sub="3 days ago · ₹999" amt="+ ₹60" />
        <TxnRow icon={<Receipt className="h-3.5 w-3.5" />} title="FASTag" sub="5 days ago · ₹500" amt="+ ₹15" />
      </div>

      <div className="mx-5 mb-6 mt-3 flex items-center gap-2 rounded-xl border border-brand-border bg-white px-3 py-2.5">
        <Lock className="h-3.5 w-3.5 text-brand-primary" />
        <span className="text-[10px] font-medium text-brand-text-secondary">
          Bank-grade encryption · RBI-compliant
        </span>
      </div>
    </div>
  );
}

function TxnRow({
  icon,
  title,
  sub,
  amt,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  amt: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-brand-border bg-white px-3 py-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-surface-2 text-brand-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-bold text-brand-text-primary">{title}</p>
        <p className="text-[9px] text-brand-text-secondary">{sub}</p>
      </div>
      <span className="text-[11px] font-extrabold text-emerald-600">{amt}</span>
    </div>
  );
}

/** Small floating chip used near phone mockups in heroes. */
export function FloatingChip({
  icon,
  label,
  className = "",
  delay = 0,
  tone = "default",
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: number;
  tone?: "default" | "success" | "purple";
}) {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const toneClass =
    tone === "success"
      ? "bg-cashback text-white"
      : tone === "purple"
        ? "bg-purple-glow text-white"
        : "bg-white text-brand-text-primary border border-brand-border";

  return (
    <motion.div
      className={`pointer-events-none absolute inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold shadow-card ${toneClass} ${className}`}
      animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
      transition={{
        duration: 4.5,
        repeat: prefersReducedMotion ? 0 : Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}

export { Flame, Check };
