"use client";

import { motion } from "framer-motion";
import { Heart, Quote, Star } from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import {
  fadeUp,
  getReducedMotionVariants,
  staggerContainer,
} from "@/lib/motionVariants";

interface Testimonial {
  name: string;
  city: string;
  initials: string;
  gradient: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Sharma",
    city: "Mumbai, MH",
    initials: "RS",
    gradient: "from-indigo-500 to-purple-500",
    quote:
      "Switched from PhonePe to Zopcash last month. Cashback is real, recharges are instant, and the app is just nicer to use.",
  },
  {
    name: "Priya Iyer",
    city: "Bengaluru, KA",
    initials: "PI",
    gradient: "from-cyan-500 to-emerald-500",
    quote:
      "I pay my electricity, broadband and DTH on Zopcash now. Earned ₹420 cashback in my first month — that paid my Netflix!",
  },
  {
    name: "Aman Verma",
    city: "Delhi, DL",
    initials: "AV",
    gradient: "from-amber-500 to-pink-500",
    quote:
      "FASTag recharge has never been this smooth. The success rate is way higher than what I was using earlier.",
  },
];

export default function Testimonials() {
  const { prefersReducedMotion } = useReducedMotionSafe();
  const stagger = staggerContainer(0.1);
  const fade = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section
      className="relative bg-brand-surface py-20 md:py-28"
      aria-labelledby="testimonials-heading"
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
            <Heart className="h-3.5 w-3.5" /> Loved by users
          </motion.span>
          <motion.h2
            id="testimonials-heading"
            variants={fade}
            className="font-heading mt-4 text-balance text-3xl font-extrabold tracking-tight text-brand-text-primary sm:text-4xl md:text-5xl"
          >
            Loved by Users <span className="text-gradient">Across India</span>
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-4 text-balance text-base text-brand-text-secondary md:text-lg"
          >
            Real stories from people saving real money on every recharge.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fade}
              className="glass-light flex h-full flex-col gap-4 p-7"
            >
              <Quote className="h-7 w-7 text-brand-primary/70" aria-hidden />
              <blockquote className="flex-1 text-sm leading-relaxed text-brand-text-primary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-1 text-brand-gold" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <figcaption className="flex items-center gap-3 border-t border-brand-border/80 pt-4">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-extrabold text-white`}
                  aria-hidden
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-text-primary">{t.name}</span>
                  <span className="block text-xs text-brand-text-secondary">{t.city}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
