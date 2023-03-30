/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          400: "#FF8303",
        },
        neutral: {
          100: "#F1F3F4",
          200: "#E3E5E6",
          300: "#DDE9EA",
          400: "#FAFAFA",
          500: "#809FB8",
          600: "#F4F4F4",
        },
        gray: {
          100: "#696F79",
          200: "#8692A6",
          300: "#303434",
          400: "#030F36",
          500: "#C5C5C5",
          600: "#eef1f8",
          700: "#DCE0E8",
        },
      },
      fontSize: {
        8: "8px",
        10: "10px",
        13: "13.26px",
        17: "17px",
        22: "22px",
        25: "25.97px",
        26: "26px",

        38: "38.96px",
        40: "40px",
        50: "50px",
      },

      height: {
        25: "25px",
        42: "42px",
        53: "53px",
        58: "58px",
        100: "100px",
        376: "376px",
      },
      width: {
        45: "45%",
        100: "100px",
        361: "361px",
      },
      spacing: {
        "1/5": "5%",
        "1/10": "10%",
      },
    },
  },
  plugins: [],
};
