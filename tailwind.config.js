/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#494949",
        "second-color": "#E8D141",
        "third-color": "#eaeaea",
        "fourth-color": "#f5f5f5",
      },
      container: {
        center: "true",
      },

      keyframes: {
        faded: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        faded: "faded 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [],
};
