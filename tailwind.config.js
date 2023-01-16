/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.{edge,js,ts}'],
  theme: {
    extend: {
      rotate: {
        '1': '1deg',
        '2': '90deg',
        '3': '180deg',
        '4': '270deg'
      }
    },
  },
  plugins: [],
}
