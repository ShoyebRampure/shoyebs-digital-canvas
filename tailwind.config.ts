
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#9b87f5",
          dark: "#7C5CFA",
          foreground: "#fff",
        },
        accent: {
          DEFAULT: "#1EAEDB",
          light: "#7CDFF6",
        },
        background: { DEFAULT: "#1A1F2C" }, // Explicit DEFAULT
        card: { DEFAULT: "#23263A" },      // Explicit DEFAULT
        section: { DEFAULT: "#F1F0FB" },   // Explicit DEFAULT
        muted: { DEFAULT: "#8E9196" },
        border: { DEFAULT: "#aaadb0" },
        // ------- THIS IS KEY -------
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
        },
        // Add any other color variable overrides below
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
      },
      backdropBlur: {
        xl: "24px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s cubic-bezier(.56,0,.37,1.35) both",
        "scale-in": "scale-in 0.5s cubic-bezier(.61,-0.31,.69,1.39) both"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

