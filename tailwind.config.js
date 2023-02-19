/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily:  {
          Podka : ["Podkova", "serif"],
        }

      },
      colors: {
        primary: "#38FF4C",
        secondary: "#07FFD2"
      },
    },
  },
  plugins: [require("daisyui")],
};
