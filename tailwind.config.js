/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  experimental: {
    darkModeVariant: true
  },
  darkMode: 'selector', // set to 'media' for auto dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}

