import { Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-xl font-bold gradient-text">Zopcash</p>
            <p className="mt-2 text-sm text-brand-text-secondary">
              Pay Direct. Recharge Instant.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-brand-text-secondary transition-colors hover:text-brand-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-brand-text-secondary transition-colors hover:text-brand-accent"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-brand-text-secondary transition-colors hover:text-brand-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-text-secondary transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-primary">
              Contact Info
            </h3>
            <address className="not-italic text-sm text-brand-text-secondary">
              <p>
                Sector Number-1, Pithampur, Indorama Industry, District - Dhar, Madhya Pradesh
              </p>
              <p className="mt-2">
                <a
                  href="tel:+918830747680"
                  className="transition-colors hover:text-brand-accent"
                >
                  +91 883 074 7680
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-primary">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-text-secondary transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-8 sm:flex-row">
          <p className="text-sm text-brand-text-secondary">
            © 2025 Zopcash. All Rights Reserved.
          </p>
          <p className="text-sm text-brand-text-secondary">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
