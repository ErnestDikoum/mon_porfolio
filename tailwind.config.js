/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class', // pour activer le dark mode via next-themes
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        background: '#0a192f',
        backgroundLight: '#f8f8f8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}