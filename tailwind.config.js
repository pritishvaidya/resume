const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.orange,
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        'sans': ['Open Sans', ...fontFamily.sans],
        'mono': ['Montserrat', ...fontFamily.mono]
      }
    },
  },
  variants: {},
  plugins: [],
};
