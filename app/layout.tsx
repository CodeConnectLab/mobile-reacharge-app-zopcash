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

const title = "Zopcash – India's Trusted Cashback Recharge Platform";
const description =
  "Recharge mobiles, pay electricity bills, FASTag, DTH, broadband, and more — all in one powerful app with assured cashback on every transaction.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zopcash.com"),
  title,
  description,
  keywords: [
    "cashback recharge",
    "mobile recharge",
    "bill payments",
    "FASTag recharge",
    "DTH recharge",
    "electricity bill payment",
    "broadband recharge",
    "Zopcash",
    "digital payments India",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    images: ["/og-placeholder.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-brand-bg font-sans text-brand-text-primary">{children}</body>
    </html>
  );
}
