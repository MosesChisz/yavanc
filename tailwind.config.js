/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  // Optional: Add daisyUI themes (remove if you don't want to customize)
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}