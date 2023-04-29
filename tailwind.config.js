/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins:"'Poppins', sans-serif",
        Bruno:"'Bruno Ace SC',cursive",
        Abril:"'Abril Fatface', cursive",
    },
  },
  plugins: [],
}
}