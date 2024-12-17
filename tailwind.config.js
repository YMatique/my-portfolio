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
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle , #ff6ec7, #5b0b7a, #2c0349)',
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

