const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IRANSansWeb', 'Helvetica', 'Arial', 'sans-serif'], // default font sans => iran sans
        'IRANSansWeb': ['IRANSansWeb', 'tahoma']
      },
      fontSize: {
        '3xs': '.57rem',
        '2xs': '.68rem'
      },
    },
    screens: {
      'xs': '220px',
      ...defaultTheme.screens,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
