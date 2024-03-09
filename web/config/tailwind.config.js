/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#103362', // Background Primary
        secondary: '#F21530', // Background Secondary
        backgroundPrimary: '#C3619B', // Background Primary (Desktop)
        backgroundSecondary: '#D96DA1', // Background Secondary (Desktop)
        textPrimary: '#FFFFFF', // Primary Text
        link: '#F21530', // Links
        button: '#ECFD74', // Button Color
        buttonText: '#F21530', // Button Text Color
      },
    },
  },
  plugins: [],
}
