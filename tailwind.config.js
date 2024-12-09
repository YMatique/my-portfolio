/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/script/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3490dc',
        secondary: '#ffcc00',
        
      }
    },
  },
  plugins: [],
}

