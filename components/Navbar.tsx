"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { prefersReducedMotion } = useReducedMotionSafe();

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10, 15, 30, 0)", "rgba(10, 15, 30, 0.9)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
      style={
        prefersReducedMotion
          ? { backgroundColor: "rgba(10, 15, 30, 0.9)", backdropFilter: "blur(12px)" }
          : { backgroundColor, backdropFilter: backdropBlur }
      }
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <motion.a
          href="#"
          className="font-heading text-xl font-bold gradient-text"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Zopcash
        </motion.a>

        <motion.div
          className="hidden items-center gap-8 md:flex"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="shimmer-btn rounded-lg bg-brand-highlight px-4 py-2 text-sm font-semibold text-brand-bg transition-transform hover:scale-105"
          >
            Download App
          </a>
        </motion.div>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <motion.div
        className="overflow-hidden border-t border-brand-border bg-brand-bg/95 backdrop-blur-md md:hidden"
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-text-secondary transition-colors hover:text-brand-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="shimmer-btn rounded-lg bg-brand-highlight px-4 py-3 text-center text-sm font-semibold text-brand-bg"
            onClick={() => setMobileOpen(false)}
          >
            Download App
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
