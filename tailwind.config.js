/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#C9F0D6',
        'green-light': '#F2FFDF',
        'red': '#FF0000',
        'orange': '#FFCA61',
        'yellow': '#FFEC85',
        'gray': '#808080',
        'gray-2': '#525252'
      },
    },
  },
  plugins: [],
}
