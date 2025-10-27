/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./admin/getting-started/src/**/*.{js,jsx,ts,tsx,php,html}"],
  theme: {
    extend: {
      spacing: {
        '7.5': '7.5rem',
        '3.7': '3.7rem',
        '1.125': '1.125rem',
        '0.625': '0.625rem',
        '0.875': '0.875rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        desc: '#4B5563',
      }
    },
  },
  plugins: [],
}