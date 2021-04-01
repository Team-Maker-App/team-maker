/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
