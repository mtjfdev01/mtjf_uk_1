/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1e3a5f',
          600: '#1a3254',
          700: '#152848',
          800: '#101f38',
          900: '#0c1828',
        },
        navy: {
          light: '#2d527a',
          DEFAULT: '#1e3a5f',
          dark: '#142840',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
