/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(16, 78%, 50%)",
        primaryDark: "#EA580C"
      }
    },
  },
  plugins: [],
}

