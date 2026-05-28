"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#cashback", label: "Cashback" },
  { href: "#app", label: "App" },
  { href: "#download", label: "Download" },
];

export function ZopcashLogo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Zopcash home">
      <span
        className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-purple-glow text-white shadow-cta"
        aria-hidden
      >
        <span className="font-heading text-base font-extrabold tracking-tight">Z</span>
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-coin text-[10px] font-black text-white shadow-md">
          ₹
        </span>
      </span>
      <span className="font-heading text-xl font-extrabold tracking-tight text-brand-text-primary">
        Zop<span className="text-gradient">cash</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      style={{
        background,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-brand-border"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ZopcashLogo />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden lg:block"
        >
          <a href="#download" className="btn-primary">
            Download App
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text-primary shadow-card transition lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-brand-border bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-brand-text-primary transition hover:bg-brand-surface-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-4">
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Download App
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
