/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        primaryDark: "#EA580C"
      }
    },
  },
  plugins: [],
}

