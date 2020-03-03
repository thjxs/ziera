const colors = {
  transparent: 'transparent'
};

module.exports = {
  theme: {
    colors: colors,
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      dark: { raw: '(prefers-color-scheme: dark)' }
    },
    backgroundColor: colors
  }
};
