const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
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
    extend: {
      backgroundImage: theme => ({
        'wavyPattern': "url('/src/styles/svg/wavy-desktop.svg')"
      })
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
