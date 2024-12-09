/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/script/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F86F03;',
        secondary: '#ffcc00',
        
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto','sans-serif'],
        raleway: ['Raleway','sans-serif']
      }
    },
  },
  plugins: [],
}

