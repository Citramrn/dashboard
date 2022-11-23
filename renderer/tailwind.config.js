const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "bg-purple": "#725CFF",
      "bg-white": "#FFFFFF",
      "bg-light": "#E9EEF4",
    }),
    colors: {
      ...defaultTheme.colors,
      color: {
        blue: "#7C8DA6",
        blueLight: "#7988A2",
        "grey-light": "#F8F8F8",
        white: "#FFFFFF",
        grays: "#949391",
        "gray-light": "#555658",
        "black-dark": "#090606",
        blueDark: "#141736",
        purpleBlue: "#725CFF",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      mono: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
