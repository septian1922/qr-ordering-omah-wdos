/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#050505", 900: "#0a0a0a", 800: "#121212", 700: "#1a1a1a", 600: "#262626", 500: "#3a3a3a" },
        gold: { 300: "#f3d98b", 400: "#e8c25a", 500: "#d4a72c", 600: "#b88a14" },
      },
      boxShadow: { gold: "0 0 0 1px rgba(212,167,44,.25), 0 8px 30px rgba(212,167,44,.08)" },
    },
  },
  plugins: [],
};
