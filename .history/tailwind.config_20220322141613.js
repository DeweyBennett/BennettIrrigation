module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'link': '#1fb6ff',
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
