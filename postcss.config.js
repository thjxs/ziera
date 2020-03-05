const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './app/ui/*.js'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [require('tailwindcss'), purgecss, require('cssnano')]
};
