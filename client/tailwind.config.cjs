/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "blue":"var(--primary-color)",
        "dark-blue":"#200E32 "
      }
    },
  },
  plugins: [],
};

