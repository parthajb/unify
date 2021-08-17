module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      container: (theme) => ({
        // To center containers by default
        center: true,
        // To add horizontal padding by default
        padding: theme("spacing.6"),
      }),
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      grayscale: ['hover'],
      visibility: ['group-hover'],
      opacity: ['disabled'],
      cursor: ['hover', 'focus', 'disabled'],
    },
  },
  plugins: [
        function ({ addComponents }) {
          addComponents({
            '.container': {
              maxWidth: '100%',
              '@screen xl': {
                maxWidth: '1280px',
              },
            }
          })
        },
        // require('@tailwindcss/forms'),
  ],
}
