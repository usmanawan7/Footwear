/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        oswald: "Oswald, sans-serif",
        urbanist: "Urbanist, sans-serif",
      },
      extend: {
        colors: {
          primary: "#ECEEFF",
          "coral-red": "#FF6452",
          "slate-gray": "#6D6D6D",
          "pale-blue": "#F5F6FF",
          "white-400": "rgba(255, 255, 255, 0.80)",
        },
        fontFamily: {
          palanquin: ['Palanquin', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        boxShadow: {
          '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
        },
      },
    },
    plugins: [],
  };
  