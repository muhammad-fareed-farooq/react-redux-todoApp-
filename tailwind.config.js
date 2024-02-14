export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontfamily: {
      Poppins: "Poppins",
    },
    extend: {
      color: {
        transparentBlack: "rgb(0,0,0,0.85)",
        sunsetOrange: "#FF4F5A",
        tangaroa: "#1A2E35",
        Gainsboro: "#E1E1E1",
        greenT74eal: "#22C55E",
        Gray: "#6B7498",
      },
    },
    screen: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },

  plugins: [],
};
