/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        "primary": "#006494",
        "secondary": "#014566",
        "background": "#FFF",
        "textBlack": "#242424",
        "textWhite": "#FFFFFF",
        "input": "#EDEDED"
      }
    },
  },
  plugins: [],
}