module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundImage: {
        "sea-theme": "url('/src/assets/parallax/Proper/PNG/1sky.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        myBlue: {
          "primary": "#06283D",
          "secondary": "#256D85",
          "accent": "#47B5FF",
          "neutral": "#2C3035",
          "base-100": "#DFF6FF",
          "info": "#13C1F1",
          "success": "#34DA7C",
          "warning": "#C19615",
          "error": "#EF7696",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
