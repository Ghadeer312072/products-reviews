/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "hsl(20, 50%, 98%)",
        "rose-color": " hsl(14, 65%, 9%)",
        "text-color": "hsl(12, 20%, 44%)",
        "red-color": "hsl(14, 86%, 42%)",
      },
      animation: {
        shine: 'shine 1s infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },

  }

}