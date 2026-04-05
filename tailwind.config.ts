import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 24px 64px rgba(208, 28, 31, 0.16)",
      },
      colors: {
        ink: "var(--ink)",
        surface: "var(--surface)",
      },
    },
  },
  plugins: [],
};

export default config;

