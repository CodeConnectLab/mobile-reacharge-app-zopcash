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
          primary: "#4F46E5",
          accent: "#06B6D4",
          highlight: "#F59E0B",
          bg: "#0A0F1E",
          surface: "#111827",
          border: "#1F2937",
          "text-primary": "#F9FAFB",
          "text-secondary": "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)",
        "card-accent":
          "linear-gradient(90deg, #4F46E5, #06B6D4)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 70, 229, 0.35), 0 0 80px rgba(6, 182, 212, 0.15)",
        "glow-sm": "0 0 20px rgba(79, 70, 229, 0.25)",
        "card-hover":
          "0 8px 32px rgba(79, 70, 229, 0.2), 0 0 0 1px rgba(6, 182, 212, 0.1)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "blob-pulse": "blob-pulse 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
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
