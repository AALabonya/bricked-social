/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "",
       
      },
      fontFamily:{
        'nothing': ['Nothing You Could Do', 'cursive']
      }
    },
  },
  plugins: [],
}

