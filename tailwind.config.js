/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['"Rancho"', "cursive"],
        pop: ["Poppins", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
        mono: ["Montserrat", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
