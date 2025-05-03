/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // adjust if needed
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#B9FF66',
          'secondary': '#191A23',
          'tertiary': '#F3F3F3'
        },
        fontFamily: {
          'primary': [ "Space Grotesk", "sans-serif"]
        },
        spacing: {
          '128': '32rem',
        },
      },
    },
    plugins: [],
  }
  