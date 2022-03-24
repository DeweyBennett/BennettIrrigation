module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#56BBD0',
        'link': '#3183FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
