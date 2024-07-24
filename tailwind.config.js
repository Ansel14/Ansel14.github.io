/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monts: "Montserrat",
      },
      colors: {
        primary: "#0262A2",
        secondary: "#E2EFDE",
        dark: "#222222",
        light: "#F5F5F5",
      },
      boxShadow: {
        5: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
