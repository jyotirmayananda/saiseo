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
        teal: {
          DEFAULT: "#2DBFB8",
          dark: "#1FA39D",
          light: "#5DD4CE",
        },
        maroon: {
          DEFAULT: "#B5335A",
          dark: "#8F2847",
          light: "#D44A72",
        },
        forest: {
          DEFAULT: "#2D6A4F",
          light: "#40916C",
        },
        gold: {
          DEFAULT: "#F4B942",
          light: "#FFD166",
        },
        surface: {
          DEFAULT: "#f5f5f7",
          dark: "#1d1d1f",
          darker: "#000000",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "-apple-system", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
