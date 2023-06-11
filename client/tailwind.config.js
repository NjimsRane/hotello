/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
        roboto: ['Roboto', 'sans - serif']
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)'
      }
    },
  },
  plugins: [],
}

