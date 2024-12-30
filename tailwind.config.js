/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  darkMode: 'class',
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_pages/**/*.html',
    './*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

