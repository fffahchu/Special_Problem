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
        'green-real': '#00BA00',
        'green': '#C9F0D6',
        'green-light': '#F2FFDF',
        'red': '#FF0000',
        'orange': '#FFCA61',
        'yellow': '#FFEC85',
        'gray': '#808080',
        'gray-2': '#525252',
        'gray-3': '#C5C5C5',
        'gray-4': '#D9D9D9'
      },
    },
  },
  plugins: [],
}
