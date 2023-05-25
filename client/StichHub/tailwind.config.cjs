/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#130F26",
        white: "#ffffff",
        grey: "#6D6D6D",
        dark_grey: "#0A0910",
        left_nav_blue_light: "#BEF3F5",
        left_nav_blue: "#33BBCF",
        left_nav_icon_orange: "#FDCF6F"
      },
      screens: {
        '3xl': '2560px',
      },
    },
  },
  plugins: [],
};
