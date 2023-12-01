/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  theme: {
    fontFamily: {
      body: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
    logs: false,
  },
}
