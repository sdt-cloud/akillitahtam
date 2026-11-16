import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        quicksand: ["var(--font-quicksand)", "sans-serif"],
        dyslexic: ["OpenDyslexic", "var(--font-quicksand)", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fff8e6",
          100: "#ffefb8",
          400: "#fbb024",
          500: "#f59e0b",
          600: "#d97706",
        },
        grade1: {
          light: "#fee2e2",
          DEFAULT: "#ef4444",
          dark: "#b91c1c",
        },
        grade2: {
          light: "#dbeafe",
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
        grade3: {
          light: "#dcfce7",
          DEFAULT: "#10b981",
          dark: "#047857",
        },
        grade4: {
          light: "#f3e8ff",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        },
      },
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
