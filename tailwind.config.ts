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
        background: "var(--background)",
        foreground: "var(--foreground)",
        hovercolor1: "var(--hovercolor1)",
      },
      boxShadowColor: {
        hovercolor1: "var(--hovercolor1)",
      },
      boxShadow: {
        hover1: "0px 2px 0 var(--hovercolor1)",
      },
    },
  },
  plugins: [],
};
export default config;
