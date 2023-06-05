/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "false",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#564434",
        primary_light: "#56443450",
        font: "#eee5d4",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
