import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zopcash.com"),
  title: "Zopcash – Direct Recharge App",
  description:
    "Fast, direct mobile recharge for India. Pay direct, recharge instant — no wallet, no middlemen.",
  openGraph: {
    title: "Zopcash – Direct Recharge App",
    description:
      "Fast, direct mobile recharge for India. Pay direct, recharge instant — no wallet, no middlemen.",
    type: "website",
    images: ["/og-placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
