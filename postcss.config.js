const helpers = require('./helpers');

module.exports = {
  plugins: [
    require('tailwindcss')(helpers.root('tailwind.config.js')),
    require('autoprefixer'),
  ],
};