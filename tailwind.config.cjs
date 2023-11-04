/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        listStyleType: {
            square: 'square',
            roman: 'upper-roman',
        }
    },
  },
  variants: {
    extend: {
        lineClamp: ["hover"]
    }
  },
  plugins: [require('@tailwindcss/line-clamp'),],
});