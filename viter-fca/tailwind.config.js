/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#3b5897",
        primary: "#daa625",
        mygreen: "#008542",
        lime: "#28941e",
        mygray: "#f2f2f2",
      },
      fontFamily: {
        "fa-solid": ["FontAwesomeSolid"],
        "fa-brands": ["FontAwesomeBrands"],
        raleway: ["Raleway", "sans-serif"],
        uiSerif: ["ui-serif"],
        georgia: ["Georgia"],
        cambria: ["Cambria"],
        timesNewRoman: ['"Times New Roman"'],
        times: ["Times"],
        serif: ["serif"],
      },
      keyframes: {
        slideLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-left": "slideLeft 0.2s ease-in",
        "slide-right": "slideRight 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
