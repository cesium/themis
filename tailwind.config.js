/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1B69EE",
        secondary:"#FF841F",
        tertiary:"#FFE9D6",
      },
      fontFamily:{
        iblack: ["Rokkitt-Black"],
        iextrabold: ["Rokkitt-ExtraBold"],
        ibold: ["Rokkitt-Bold"],
        isemibold: ["Rokkitt-SemiBold"],
        imedium: ["Rokkitt-Medium"],
        iregular: ["Rokkitt-Regular"],
        ilight: ["Inter-Light"],
        iextralight: ["Rokkitt-ExtraLight"],
        ithin: ["Rokkitt-Thin"],
      }
    },
  },
  plugins: [],
}
