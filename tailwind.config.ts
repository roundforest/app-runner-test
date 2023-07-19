/** @type {import('tailwindcss').Config} */

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
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('prettier-plugin-tailwindcss')],
}
