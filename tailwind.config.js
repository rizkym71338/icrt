module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: "#E0E5FF",
          200: "#B3C1FF",
          300: "#8EA2FF",
          400: "#6883FF",
          500: "#4264FF",
          600: "#022FFF",
          700: "#0023C1",
          800: "#001780",
          900: "#000C40",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
