import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { ZopcashLogo } from "./Navbar";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Cashback", href: "/#cashback" },
      { label: "How It Works", href: "/#how" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Return / Refund Policy", href: "/refund" },
      { label: "Grievance Policy", href: "/grievance" },
    ],
  },
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div>
            <ZopcashLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-text-secondary">
              India&apos;s trusted cashback recharge platform. Pay bills, recharge mobiles, and earn on
              every transaction.
            </p>
            <ul className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text-secondary transition hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary hover:shadow-card"
                    aria-label={s.label}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-brand-text-primary">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-text-secondary transition hover:text-brand-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-brand-border pt-6 text-xs text-brand-text-secondary sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Zopcash. All rights reserved.</p>
          <p>
            Made with <span className="text-rose-500">♥</span> in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
