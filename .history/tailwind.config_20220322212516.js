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
        'dark': '#10132D',
        'heading': '#0F2137',
        'link': '#3183FF',
        'text': "#343D48",
        'textSecondary': "#02073E", // secondary body color
      },
      backgroundImage: {
        'banner': "url('/public/assets/images/banner-bg.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
