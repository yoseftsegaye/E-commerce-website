/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#DB4444",
        secondary: "#F5F5F5",
        yellow: "#FFAD33",
        grey: "#2F2E30",
        buttonSecondary: "#00FF66",
        hoverButton: "#c92121",
        textPrimary: "#000000",
        textSecondary: "#FAFAFA",
        black: "#000000",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}