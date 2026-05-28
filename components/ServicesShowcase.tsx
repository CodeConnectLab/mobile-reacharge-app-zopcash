"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  CreditCard,
  Database,
  Flame,
  GraduationCap,
  HandCoins,
  Heart,
  Landmark,
  type LucideIcon,
  Receipt,
  Signal,
  Smartphone,
  Tv,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  getReducedMotionVariants,
  staggerContainer,
} from "@/lib/motionVariants";

interface Service {
  icon: LucideIcon;
  label: string;
  hint?: string;
}

interface Tab {
  id: string;
  label: string;
  services: Service[];
}

const TABS: Tab[] = [
  {
    id: "recharges",
    label: "Recharges",
    services: [
      { icon: Smartphone, label: "Prepaid Recharge", hint: "Jio · Airtel · Vi · BSNL" },
      { icon: Signal, label: "Postpaid Recharge", hint: "Bill in one tap" },
      { icon: Zap, label: "Mobile Top-Up", hint: "Instant top-ups" },
      { icon: Database, label: "Data Recharge", hint: "Daily & monthly" },
      { icon: CreditCard, label: "Data Card Recharge", hint: "Dongles & hotspots" },
      { icon: Smartphone, label: "Instant Recharge", hint: "All operators" },
    ],
  },
  {
    id: "bills",
    label: "Bill Payments",
    services: [
      { icon: Zap, label: "Electricity Bill", hint: "All discoms" },
      { icon: Receipt, label: "Utility Bills", hint: "Gas · Water · LPG" },
      { icon: Wifi, label: "Broadband", hint: "All ISPs" },
      { icon: Tv, label: "DTH Recharge", hint: "Dish · Tata Play · Airtel" },
      { icon: Smartphone, label: "Mobile Postpaid", hint: "Bill payments" },
      { icon: CreditCard, label: "FASTag Recharge", hint: "All banks" },
    ],
  },
  {
    id: "banking",
    label: "Banking",
    services: [
      { icon: Wallet, label: "UPI Payments", hint: "Send & receive" },
      { icon: CreditCard, label: "Credit Card Bill", hint: "All banks" },
      { icon: Landmark, label: "Loan EMI", hint: "Schedule EMIs" },
      { icon: Building2, label: "Bank Transfer", hint: "IMPS · NEFT" },
    ],
  },
  {
    id: "others",
    label: "Others",
    services: [
      { icon: Flame, label: "Cylinder Booking", hint: "LPG refills" },
      { icon: HandCoins, label: "Insurance", hint: "Pay premium" },
      { icon: GraduationCap, label: "Education Fees", hint: "Schools · Colleges" },
      { icon: Heart, label: "Donations", hint: "Trusted NGOs" },
    ],
  },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(TABS[0].id);
  const { prefersReducedMotion } = useReducedMotionSafe();
  const stagger = staggerContainer(0.05);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dotted opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 -z-10 h-96 w-96 rounded-full bg-brand-cyan/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fade} className="chip">
            <Wallet className="h-3.5 w-3.5" /> Services
          </motion.span>
          <motion.h2
            id="services-heading"
            variants={fade}
            className="font-heading mt-4 text-balance text-3xl font-extrabold tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl"
          >
            One App for <span className="text-gradient">Every</span> Digital Payment
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 text-balance text-base text-brand-text-secondary md:text-lg"
          >
            From recharges to utility bills, Zopcash supports all essential digital payment services
            in one seamless platform.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 w-full max-w-2xl"
        >
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex w-full items-center gap-1 rounded-full border border-brand-border bg-white/80 p-1.5 shadow-card backdrop-blur-xl"
          >
            {TABS.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`relative flex-1 rounded-full px-3 py-2 text-xs font-bold transition sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-brand-text-secondary hover:text-brand-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="services-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-purple-glow shadow-cta"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid panel */}
        <div className="relative mt-10 min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            >
              {current.services.map((service, i) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="service-card"
                >
                  <span className="icon-tile" aria-hidden>
                    <service.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div className="text-center">
                    <p className="text-sm font-bold text-brand-text-primary">{service.label}</p>
                    {service.hint && (
                      <p className="mt-0.5 text-[10px] text-brand-text-secondary">{service.hint}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
