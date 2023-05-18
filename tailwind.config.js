/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      normal: ["PPMori", ...defaultTheme.fontFamily.sans],
      semibold: ["PPMori SemiBold", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        primary: "#6ec5a4",
        darkGray: "#1E1E1E",
        lightGray: "#727272",
      },
      fontFamily: {
        helvetica: ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
