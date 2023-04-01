/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6dc3e8",
          "secondary": "#e5d632",
          "accent": "#f73be1",
          "neutral": "#201F2E",
          "base-100": "#2B2957",
          "info": "#758BEA",
          "success": "#25AD6F",
          "warning": "#B78806",
          "error": "#ED404B",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

