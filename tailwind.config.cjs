/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  prefix:"tw-",
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Poppins', "sans-serif"],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}