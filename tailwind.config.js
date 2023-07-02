const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      red: '#E35050',
      'like-green': '#28646E',
      'like-cyan': '#50E3C2',
      'like-cyan-light': '#AAF1E7',
      'like-cyan-vlight': '#D7ECEC',
      'dark-gray': '#4A4A4A',
      'medium-gray': '#9B9B9B',
      'shade-gray': '#EBEBEB',
      'light-gray': '#F7F7F7',
      'airdrop-gold':'#D1AB79',
    },
    fontFamily: {
      'display': 'proxima-nova, sans-serif',
      'body': '"Open Sans", sans-serif',
    },
    extend: {},
  },
  },
  plugins: [aspectRatio],
}
