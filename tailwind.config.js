module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "custom-light": " 3px 3px 12px #808080",
        "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
      },
      colors: {
        primary: {
          DEFAULT: '#ced3df'
        },
        dark: {
          DEFAULT: "#121a44",
          50: "#171e48",
          100: "#151d3b",
          200: "#0b0f2f",
        },
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
}
