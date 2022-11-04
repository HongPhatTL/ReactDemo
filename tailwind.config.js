/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/home/phatpham/Documents/Codes/Javascript/phat_app/src/assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
}