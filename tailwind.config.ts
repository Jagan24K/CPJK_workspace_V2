import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D0B08",
          soft: "#151109",
        },
        charcoal: {
          DEFAULT: "#1A150E",
          light: "#241D13",
          lighter: "#332A1B",
        },
        gold: {
          deep: "#B5811A",
          DEFAULT: "#D9A526",
          bright: "#F2C038",
          pale: "#F5D876",
          hair: "#5A4A26",
        },
        cream: {
          DEFAULT: "#F4EFE4",
          dim: "#E7E0CE",
        },
        stone: {
          DEFAULT: "#9C927C",
          light: "#C7BEA9",
          dark: "#5C5646",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(135deg, #B5811A 0%, #F2C038 35%, #F5D876 50%, #D9A526 70%, #8C6414 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #D9A526, transparent)",
        "radial-fade": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        gold: "0 0 40px -8px rgba(217, 165, 38, 0.35)",
        "gold-sm": "0 0 20px -6px rgba(217, 165, 38, 0.3)",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "count-blur": {
          "0%": { opacity: "0", filter: "blur(6px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(14px,-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        drift: "drift 9s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
