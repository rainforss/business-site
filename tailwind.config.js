/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["EB Garamond"],
        bodoni: ["Libre Bodoni"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
