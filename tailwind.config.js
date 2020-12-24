const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.orange,
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      }
    },
    fontFamily: {
      body: 'Roboto'
    }
  },
  variants: {},
  plugins: [],
};
