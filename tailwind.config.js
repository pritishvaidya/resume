const { colors, flex, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      primary: colors.gray,
      secondary: colors.purple,
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {
      flex: {
        ...flex,
        0.3: '0.4 0.4 0%'
      },
      fontFamily: {
        'sans': ['Open Sans', ...fontFamily.sans],
        'mono': ['Montserrat', ...fontFamily.mono]
      }
    },
  },
  variants: {},
  plugins: [],
};
