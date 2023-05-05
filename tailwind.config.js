/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        primary: "#6ec5a4",
      },
      fontFamily: {
        helvetica: ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
