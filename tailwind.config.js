/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple': '#816797',
        'navy': '#51557E'
      }
    },
  },
  plugins: [],
}

