/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        //homeBgImg: "url('src/img/hatternagy.jpg')",
      },
      colors: {
        homeorange: "#e0a119",
        cardbgcolor: "#ffe4c4",
      },
      screens: {
        //min ettol a hosszusagtol apply
        minW2000px: "2000px",

        minW1800px: "1800px",

        minW1300px: "1300px",

        minW800px: "800px",

        minW610px: "610px",

        minW300px: "300px",
      },
    },
  },
  plugins: [],
};
