/** @type {import('tailwindcss').Config} */
module.exports = {
  pugre: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      screens:{
        'wide': '1400px',
        'desktop': '1200px',
        'laptop': '1024px',
        'tablet': '768px',
        'phone': '414px'
      },
      colors: {
        primary: '',
        secondary: '',
        white: '#ffffff',
        black: '#000000',
      },
      maxWidth: {
        page: '1800px',
      },
      spacing: {
        base: '2rem',
      },
      padding: {
        'base': '2rem',
      },
      margin: {
        'base': '2rem',
      }
    },
  },
  plugins: [],
}
