import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {

    screens: {
      'xl-desktop': {'min': '1280px'},
      'desktop': {'max': '1279px'},
      'tablet': {'max': '1023px'},
      'mobile': {'max': '768px'},
    },
    fontFamily: {
      display: ["Inter","Arial","Helvetica","sans-serif"],
      body: ["Inter","Arial","Helvetica","sans-serif"],
      html: ["Inter","Arial","Helvetica","sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
} satisfies Config

