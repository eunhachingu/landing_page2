/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
     
    },
    extend: {
      backgroundImage: {
        'hero': "url(../public/img/bg.png)"
      }
    },
  },
  plugins: [
  ]
}
