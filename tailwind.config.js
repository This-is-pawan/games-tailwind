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
        'body':{color:'blue'}
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.scrollbar-thin': {
    //       scrollbarWidth: 'thin',
    //       scrollbarColor: 'rgb(31,29,29) white', 
    //     },
    //     '.scrollbar-webkit': {
    //       '&::-webkit-scrollbar': {
    //         width: '5px', 
    //       },
    //       '&::-webkit-scrollbar-thumb': {
    //         backgroundColor: 'rgb(31,29,29)', 
    //         borderRadius: '5px', 
    //       },
    //       '&::-webkit-scrollbar-track': {
    //         backgroundColor: 'white', 
    //       },
    //     },
    //   };

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
  ],
};
