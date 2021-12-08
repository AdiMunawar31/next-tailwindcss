module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF4848',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
