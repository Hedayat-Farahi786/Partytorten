/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: "#e8898a",
      primary: "#e8898a",
      error: "#C70039",
    },
  },
  plugins: [require("flowbite/plugin")],
};
