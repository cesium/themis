/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
  plugins: [],
}
