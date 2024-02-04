/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: {min: '0px' ,max: "640px"},
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        primary: "#000000",
        secBlue: "#377DFF",
        secGreen: "#38CBB9",
        secOrange: "#FFAB00",
        secRed: "#FF5630",
        neutralOne: "#FEFEFE",
        neutralTwo: "#F3F5F5",
        neutralThree: "#E8ECEF",
        neutralFour: "#6C7275",
        neutralFive: "#343939",
        neutralSix: "#232627",
        neutralSeven: "#141718",
      },
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
