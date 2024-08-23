/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'avatar-sm': '16rem',
        'avatar-md': '20rem',
        'avatar-lg': '24rem',
        'avatar-xl': '28rem',
      },
    },
  },
  plugins: [],
  
}

