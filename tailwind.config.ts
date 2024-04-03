import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ravenci: {
          DEFAULT: "#1b1b1b",
          "light-gray": "#fbfbfb",
          gray: "#ebebeb",
          "dark-gray": "#7b7b7b",
          primary: "#7f1670",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        margarita: ["Margarita", "sans-serif"],
      },
      maxWidth: { page: "1200px" },
      animation: {
        "infinite-scrolling": "infinite-scrolling 30s linear infinite",
      },
      keyframes: {
        "infinite-scrolling": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
