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
        'headingSecondary': "#343D48",
        'link': '#3183FF',
        'text': "#343D48",
        'textSecondary': "#02073E",
      },
      backgroundImage: {
        'banner': "url('/assets/images/banner-bg.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
