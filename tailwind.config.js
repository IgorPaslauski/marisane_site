/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f8ff',
          100: '#e9edff',
          200: '#cfd7ff',
          300: '#a6b5ff',
          400: '#7e91ff',
          500: '#5b6bff',
          600: '#4050f5',
          700: '#323ec7',
          800: '#2a349c',
          900: '#262f7d'
        }
      }
    },
  },
  plugins: [],
};