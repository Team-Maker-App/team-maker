/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    require('tailwindcss')('./tailwind.config.js'),
  ],
};
