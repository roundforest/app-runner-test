import type {Config} from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xl-desktop': {min: '1280px'},
      desktop: {max: '1279px'},
      tablet: {max: '1023px'},
      mobile: {max: '768px'},
    },
    fontFamily: {
      display: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      body: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      html: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      // keyframes: {
      //   slideToLeft: {
      //     '0%': {transform: 'translateX(100%)'},
      //     '100%': {transform: 'translateX(0px)'},
      //   },
      //   slideToRight: {
      //     '0%': {transform: 'translateX(0px)'},
      //     '100%': {transform: 'translateX(100%)'},
      //   },
      //   slideUp: {
      //     '0%': {transform: 'translateY(0%)'},
      //     '100%': {transform: 'translateY(-100%)'},
      //   },
      //   slideDown: {
      //     '0%': {transform: 'translateY(-100%)'},
      //     '100%': {transform: 'translateY(0%)'},
      //   },
      // },
      // animation: {
      //   slideToLeft: 'slideToLeft 0.2s forwards',
      //   slideToRight: 'slideToRight 0.2s forwards',
      //   slideUp: 'slideUp 0.2s forwards',
      //   slideDown: 'slideDown 0.2s forwards',
      // },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('prettier-plugin-tailwindcss')],
} satisfies Config
