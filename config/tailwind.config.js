/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./admin/getting-started/src/**/*.{js,jsx,ts,tsx,php,html}"],
  theme: {
    extend: {
      spacing: {
        '7.5': '7.5rem',
        '60': '3.7rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}