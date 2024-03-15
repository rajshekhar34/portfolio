/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': {'max': '600px'},
      'menu' : {'max': '800px'},
      'after1100' : {'max': '1100px'}
    }
  },
  plugins: [],
}
