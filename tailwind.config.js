/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'lg-light-pattern': "url('/assets/images/pattern-background-desktop-light.svg')",
        'lg-dark-pattern': "url('/assets/images/pattern-background-desktop-dark.svg')",
        'md-light-pattern': "url('/assets/images/pattern-background-tablet-light.svg')",
        'md-dark-pattern': "url('/assets/images/pattern-background-tablet-dark.svg')",
        'sm-light-pattern': "url('/assets/images/pattern-background-mobile-light.svg')",
        'sm-dark-pattern': "url('/assets/images/pattern-background-mobile-dark.svg')",
      }),
    },
    variants: {
      extend: {
        backgroundImage: ['dark'],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#A729F5', // RGB: 167, 41, 245; HSL: 277°, 91%, 56%
      secondary: '#3B4D66', // RGB: 59, 77, 102; HSL: 215°, 27%, 32%
      accent: '#313E51', // RGB: 49, 62, 81; HSL: 216°, 25%, 25%
      neutral: '#626C7F', // RGB: 98, 108, 127; HSL: 219°, 13%, 44%
      lightBlue: '#ABC1E1', // RGB: 171, 193, 225; HSL: 216°, 47%, 78%
      lightGray: '#F4F6FA', // RGB: 244, 246, 250; HSL: 220°, 38%, 97%
      white: '#FFFFFF', // RGB: 255, 255, 255; HSL: 0°, 0%, 100%
      green: '#26D782', // RGB: 38, 215, 130; HSL: 151°, 70%, 50%
      red: '#EE5454',
    },
  },
  plugins: [],
}
