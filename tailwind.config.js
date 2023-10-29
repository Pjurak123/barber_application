/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: {
          "paragraph-color": "#e2e1df",
          "heading-color": "#B3A492",
          "orange-color": "#a16a38",
          "dark-green": "#748E63",
          "light-green": "#99B080",
        },
      },
    },
  },
  plugins: [],
};
