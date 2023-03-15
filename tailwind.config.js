const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'jordi-purple': {
          DEFAULT: '#AD5DC',
          50: '#F5E9FB',
          100: '#EDD8F7',
          200: '#DDB6F0',
          300: '#CD94EA',
          400: '#BD72E3',
          500: '#AD50DC',
          600: '#9529CB',
          700: '#721F9D',
          800: '#50166E',
          900: '#2E0D3F',
        },
        'jordi-orange': {
          DEFAULT: '#FD7D45',
          50: '#FFFCFB',
          100: '#FFEEE6',
          200: '#FED2BE',
          300: '#FEB596',
          400: '#FD996D',
          500: '#FD7D45',
          600: '#FC560D',
          700: '#D04102',
          800: '#982F02',
          900: '#611E01',
        },
        'jordi-black': '#181818',
      },
    },
  },
  plugins: [],
}
