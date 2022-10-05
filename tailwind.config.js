/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        one: "#1C2321",
        two: "#0f3c34",
        three: "#39393a",
        four: "#E6E6E6",
        five: "#d7263d"
      },
    },
  },
  plugins: [],
}
