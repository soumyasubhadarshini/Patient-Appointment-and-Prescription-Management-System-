/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./client/**/*.{html,js,jsx,ts,tsx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'soft-blue': '#E1F5FE',
            'light-gray': '#F7F7F7',
            'medium-gray': '#D1D5DB',
          },
          fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
