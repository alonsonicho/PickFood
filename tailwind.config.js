/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,jsx}", "./src/*.{html.jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
}
