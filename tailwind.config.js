/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          white:"#fff",
          black:"#000",
          darkBlue:"#3700ff",
          lightBlue:"#293d75",
          lightRed:"#eeb8bc",
          strongGreen:"#057331",
          brightGreen:"#aaff00",
          footer:"#1e3a8a",
          mildGrayred:"#735134",
        }
      }
    },
  },
  plugins: [],
}