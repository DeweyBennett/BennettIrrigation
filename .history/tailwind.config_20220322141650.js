module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'link': '#3183FF',
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
