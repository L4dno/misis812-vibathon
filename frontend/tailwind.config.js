import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#d8c5f0",
          DEFAULT: "#b392e0",
          dark: "#9370db",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
