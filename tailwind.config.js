/** @type {import('tailwindcss').Config} */
module.exports = {
  pugre: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {},
  },
  plugins: [],
}
