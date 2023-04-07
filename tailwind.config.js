const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        'jordi-beige': {
          DEFAULT: '#FFF5D7',
          50: '#FFFBF0',
          100: '#FFFAEB',
          200: '#FFF9E5',
          300: '#FFF7E0',
          400: '#FEF5DD',
          500: '#FFF5D7',
          600: '#FFF4D1',
          700: '#FFF2CC',
          800: '#FFF1C7',
          900: '#FFF0C2',
        },
        'jordi-orange': {
          DEFAULT: '#EF4903',
          50: '#FEC4AC',
          100: '#FEB697',
          200: '#FD996F',
          300: '#FD7D47',
          400: '#FC601F',
          500: '#EF4903',
          600: '#B83802',
          700: '#802702',
          800: '#491601',
          900: '#110500',
        },
        'jordi-black': '#181818',
      },
    },
  },
  plugins: [],
}
