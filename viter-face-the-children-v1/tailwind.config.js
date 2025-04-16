/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3e9bd0",
        textyellow: "#fc9827",
        hover: "#2877a4",
      },

      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
