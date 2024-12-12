import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        moon: "moonGrow 0.7s linear 0.5s",
      },
      keyframes: {
        moonGrow: {
          "0%": { backgroundSize: "24px 24px" },
          "50%": { backgroundSize: "20px 20px" },
          "100%": { backgroundSize: "24px 24px" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
