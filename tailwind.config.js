/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        margin: {
          default: "0",
        },
      },
      colors: {
        primary: "#ffffff",
        primaryBlack: "#121212",
        sedondBlack: "#262626",
        primaryText: "#737373",
        secondText: "#A3A3A3",
        lineColor: "#999999",
      },
    },
  },
  plugins: [],
};
