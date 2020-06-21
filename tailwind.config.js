module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#F5F9E9',
          '200': '#E5F0C7',
          '300': '#D5E6A5',
          '400': '#B6D462',
          '500': '#96C11F',
          '600': '#87AE1C',
          '700': '#5A7413',
          '800': '#44570E',
          '900': '#2D3A09',
          },
        secondary: {
            '100': '#F0F0EE',
            '200': '#D9D9D5',
            '300': '#C3C2BC',
            '400': '#95958A',
            '500': '#686758',
            '600': '#5E5D4F',
            '700': '#3E3E35',
            '800': '#2F2E28',
            '900': '#1F1F1A',
        },
        white: '#fff'
      },
      width: {
        'half-2': 'calc(50% - 0.25rem)',
      },
      maxHeight: {
             '0': '0',
             '1/4': '25%',
             '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
      },
      minHeight: {
             '0': '0',
             '1/4': '25%',
             '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
 }
    },
    fontFamily: {
      display: ['Dosis', 'Helvetica','Arial','sans-serif'],
      body: ['Dosis', 'Helvetica','Arial','sans-serif'],
      sans: ['Dosis', 'Helvetica','Arial','sans-serif'],
      serif: ['Dosis', 'Helvetica','Arial','sans-serif']
    },
  },
  variants: {},
  plugins: [],
}
