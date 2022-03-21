const colors = {
  transparent: 'transparent',
  white: '#fff',
  'teal-300': '#81e6d9',
  'teal-500': '#78d3ca',
};

module.exports = {
  content: ['./app/ui/*.js'],
  theme: {
    colors: colors,
    backgroundColor: colors,
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      dark: { raw: '(prefers-color-scheme: dark)' },
    },
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
  },
  variants: {
    position: ['responsive', 'hover', 'focus'],
  },
};
