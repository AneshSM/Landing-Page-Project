/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "false",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A0AECD",
        primary_dark: "#465a86",
        primary_light: "#cdd4e5",
        primary_transparent: "#A0AECD70",
        secondary: "#262626",
        secondary_dark: "#000000",
        secondary_light: "#cccccc",
        secondary_transparent: "#00000090",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
