import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          surface: "#FAFAFE",
          "surface-2": "#F4F1FF",
          border: "#EAE7F5",
          "text-primary": "#0B0B1F",
          "text-secondary": "#5A5A75",
          primary: "#7C5CFF",
          "primary-deep": "#5B3FE5",
          accent: "#A78BFA",
          cyan: "#22D3EE",
          success: "#10B981",
          gold: "#F7B500",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, #EDE7FF 0%, #FFFFFF 60%)",
        "purple-glow":
          "linear-gradient(135deg, #7C5CFF 0%, #A78BFA 50%, #22D3EE 100%)",
        cashback:
          "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
        "gold-coin":
          "linear-gradient(135deg, #FFD66B 0%, #F7B500 100%)",
        mesh:
          "conic-gradient(from 180deg at 50% 50%, #EDE7FF, #FFE9F5, #E0F7FF, #EDE7FF)",
      },
      boxShadow: {
        card:
          "0 1px 2px rgba(11,11,31,0.04), 0 8px 24px rgba(124,92,255,0.08)",
        "card-hover":
          "0 8px 32px rgba(124,92,255,0.18), 0 0 0 1px rgba(124,92,255,0.15)",
        "glow-purple": "0 0 60px rgba(124,92,255,0.35)",
        cta:
          "0 12px 32px rgba(91,63,229,0.35), 0 4px 12px rgba(124,92,255,0.25)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "coin-spin": "coin-spin 8s linear infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "blob-pulse": "blob-pulse 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        "coin-spin": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "blob-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "0.4" },
          "100%": { transform: "scale(1.1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
