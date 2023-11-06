/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../src/assets/images/hero_bg.jpg')",
      },
    },
  },
  plugins: [],
}

