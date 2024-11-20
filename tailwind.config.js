/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-700': { max: '700px' }, 
        'max-800': { max: '800px' }, 
        'min-800': { min: '800px' }, 
      },
    },
  },
  
  plugins: [],
}

