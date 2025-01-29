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
        "loop-scroll": "loop-scroll 7s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      rotate: {
        "y-12": "12deg",
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [],
} satisfies Config;
