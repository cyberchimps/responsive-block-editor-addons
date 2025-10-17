/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./admin/getting-started/src/**/*.{js,jsx,ts,tsx,php,html}"],
  theme: {
    extend: {
      spacing: {
        '7.5': '7.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}