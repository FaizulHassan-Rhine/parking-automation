/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'sm2': '2px 0px 5px 2px #ecf0f1',
      }
    },
  },
  plugins: [require("daisyui")],
}