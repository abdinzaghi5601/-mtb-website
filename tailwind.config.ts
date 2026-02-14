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
        primary: {
          50: "#fff1f1",
          100: "#ffe0e0",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#f83b3b",
          600: "#CC0000",
          700: "#b80000",
          800: "#980000",
          900: "#7a0000",
        },
        brand: {
          red: "#CC0000",
          navy: "#003366",
          dark: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
