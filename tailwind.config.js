module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      triangles: { // defaults to {}
        'left': {
          direction: 'left',      // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
          size: '1em',            // defaults to defaultSize
          height: '0.5em',        // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
          color: 'currentColor',  // defaults to defaultColor
        },
      },
      fontSize: {
        '8xl': '6rem',
        '10xl': '8rem',
      },
      colors: {
        'arrowred': '#F0A0A0',
        'arrowshadow': "#E39696"
      },
      spacing: {
        '80': '20rem',
      }
    },
  },
  variants: {
    triangles: ['responsive'],
  },
  plugins: [
    require('tailwindcss-triangles')({
      componentPrefix: 'c-',        // defaults to 'c-'
      defaultSize: '1em',           // defaults to '1em'
      defaultColor: 'currentColor', // defaults to 'currentColor'
    }),
  ],
};
