module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundcolor: '#cae6f5',
        brightcolor: '#a4e9f1'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
