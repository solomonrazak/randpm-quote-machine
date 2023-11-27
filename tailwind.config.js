/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // screen breakpoints
      sm: "480px", // small screens
      md: "769px", // median screens
      lg: "976px", // large screens
      xl: "1440px" // xtra large screens

    },
    extend: {
      width: {
        '600': '600px',
       },
       height: {
        "500": "500px",
       },
    },
  },
  plugins: [],
}

