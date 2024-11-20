import { url } from "inspector";
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
        primary: '#FFDF2B',
        second: '#2C2C2C',
        third: '#D9D9D9',
      },
    },
  },

  daisyui: {
    themes: ["light"],
  },
  plugins: [require('daisyui')],
};
export default config;
