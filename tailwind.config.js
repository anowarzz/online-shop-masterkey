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
        secondary: "#07FFD2",
        success: "#1E78FF",
        info: "#8E3785"
      },
    },
  },
  plugins: [require("daisyui")],
};
