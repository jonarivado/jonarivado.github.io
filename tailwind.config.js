module.exports = {
  purge: {
    enabled: true,
    content: ['*.html', '*.js', '*.scss'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
