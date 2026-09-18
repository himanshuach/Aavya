import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF8F5",
          100: "#F5F0E8",
          200: "#EDE5D8",
          300: "#DFD3C0",
          400: "#C7B59A",
          500: "#B09B7D",
        },
        forest: {
          950: "#05140D",
          900: "#0A2218",
          850: "#0E2B1F",
          800: "#163C2C",
          700: "#1F4E3A",
          600: "#2B684E",
          500: "#3B8766",
        },
        gold: {
          50: "#FAF6EF",
          100: "#F4ECDC",
          200: "#E8D8BA",
          300: "#D6C094",
          400: "#C5A877",
          500: "#B48F53",
          600: "#97733D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(10, 34, 24, 0.08)",
        "luxury-hover": "0 20px 50px -12px rgba(10, 34, 24, 0.16)",
        "forest-glow": "0 0 50px -10px rgba(43, 104, 78, 0.35)",
        "gold-glow": "0 0 30px -5px rgba(197, 168, 119, 0.3)",
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
