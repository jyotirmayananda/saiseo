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
          DEFAULT: "#0c2d48",
          light: "#1a5276",
          dark: "#0a2540",
        },
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
          DEFAULT: "#f8fcff",
          2: "#f0f9ff",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "-apple-system", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(12, 45, 72, 0.08)",
        card: "0 8px 32px -8px rgba(12, 45, 72, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
