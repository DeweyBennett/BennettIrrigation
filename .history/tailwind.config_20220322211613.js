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
      },
      backgroundImage: {
        'banner': "url('/')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
