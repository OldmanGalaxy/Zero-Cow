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
        ygreen: "E3F0AF",
        lgreen: "#5DB996",
        dgreen: "#5DB996",
      },
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
        lovelace: ["Lovelace Text", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
