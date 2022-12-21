/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: "#28AFE7",
      primary: "#28AFE7",
      error: "#C70039",
    },
  },
  plugins: [require("flowbite/plugin")],
};
