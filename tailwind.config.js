/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: "8em",
      },
      colors:{
        accent:"#179957",
        accentDark:"#184D47",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
}

