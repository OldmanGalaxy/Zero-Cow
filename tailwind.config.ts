import { lookup } from "dns";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6E9",
        ygreen: "#E3F0AF",
        lgreen: "#5DB996",
        dgreen: "#118B50",
      },
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
        lovelace: ["Lovelace Text", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 15s linear infinite"
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
