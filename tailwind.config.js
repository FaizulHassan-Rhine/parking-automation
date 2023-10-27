/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'sm2': '2px 0px 5px 2px #ecf0f1',
      }, 
      colors: {
        'par-blue-dark': '#0d3a5f',
        'par-blue-light': '#0881a3',
      },
    },
  },
  plugins: [require("daisyui")],
}