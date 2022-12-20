const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge:  ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      transparent: 'transparent',
      current: 'currentColor',
      'gray': {
        DEFAULT: '#515254',
        '50': '#C4C5C6',
        '100': '#B7B8BA',
        '200': '#9D9EA1',
        '300': '#838588',
        '400': '#6A6B6E',
        '500': '#515254',
        '600': '#38393A',
        '700': '#1F1F20',
        '800': '#060606',
        '900': '#000000'
      },
      'jungle-green': {
        DEFAULT: '#25BA9F',
        '50': '#CFF5EE',
        '100': '#BAF1E7',
        '200': '#8FE9D9',
        '300': '#65E0CA',
        '400': '#3AD8BB',
        '500': '#25BA9F',
        '600': '#1D8F7B',
        '700': '#146556',
        '800': '#0C3A32',
        '900': '#03100E'
      },
      'shark': {
        DEFAULT: '#2F2F31',
        '50': '#A1A1A5',
        '100': '#949498',
        '200': '#7A7A7F',
        '300': '#616165',
        '400': '#48484B',
        '500': '#2F2F31',
        '600': '#161617',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000'
      },
    },
    extend: {
      screens: {
        'xs': '450px',
      },
    },
  },
  variants: {
    margin: ['responsive', 'hover'],
    extend: {cursor: ['hover']},
  },
  plugins: [],
}
