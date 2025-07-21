/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: "#F4F1DE",
        fern: "#91A57E",
        "fern-dark": "#7A9066",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // other plugins...
  ],
};
