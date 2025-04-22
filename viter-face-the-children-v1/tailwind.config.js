/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3e9bd0",
        textyellow: "#fc9827",
        hover: "#2877a4",
        lightyellow: "#f7c68f",
        navcolor: "#fafafa",
        textblack: "#3A3B36",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)", // Initially from bottom
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)", // Fully visible
          },
        },
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
