const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    colors: {
      ...colors,
      primary: "#2C3590",
      primaryDark: "#171F6D",
      primaryDesktop: "#FFFFFF",
    },
    textColors: {
      primary: "#2C3590",
      primaryDark: "#171F6D",
      primaryDesktop: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
