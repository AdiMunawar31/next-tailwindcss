module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist'],
      },
      colors: {
        primary: {
          DEFAULT: '#ced3df'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
