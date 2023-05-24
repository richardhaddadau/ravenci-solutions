/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./resources/js/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ["abril-display", "serif"],
        sans: ["europa", "sans-serif"],
      },
      minHeight: {
        hero: "600px",
      },
    },
  },
  plugins: [],
};
