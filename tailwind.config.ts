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
        'float-1': 'float 6s ease-in-out infinite',
        'float-2': 'float 6s ease-in-out infinite 1.5s',
        'float-3': 'float 6s ease-in-out infinite 3s',
        'float-4': 'float 6s ease-in-out infinite 4.5s',
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      rotate: {
        'y-12': '12deg',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
} satisfies Config;