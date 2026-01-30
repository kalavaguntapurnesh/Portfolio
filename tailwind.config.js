/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#06b6d4',
        'brand-light': '#67e8f9',
        'brand-dark': '#155e75',
      },
    },
  },
  plugins: [],
}
