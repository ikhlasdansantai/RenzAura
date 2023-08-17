/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        margin: {
          default: "0",
        },
        colors: {
          primaryBlack: "#121212",
          sedondBlack: "#262626",
          primaryText: "#737373",
          secondaryText: "#A3A3A3",
          lineColor: "#999",
        },
      },
    },
  },
  plugins: [],
};
