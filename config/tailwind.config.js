/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./admin/getting-started/src/**/*.{js,jsx,ts,tsx,php,html}"],
  theme: {
    extend: {
      colors: {
        border: '#CED5DE',
        btnPrimary: '#069CDF',
        activeTab: '#E7F1F5',
        btnBorder: '#007CBA',
        primaryBtnHover: '#03567B',
      },
       boxShadow: {
        cardShadow: '0px 6px 30px 0px #00000014',
      },
    },
  },
  plugins: [],
}