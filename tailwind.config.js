/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      anton: ['Anton', 'ui-sans-serif'],
      robotoCondensed: ['Roboto Condensed', 'ui-sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '2rem',
      'large': '5.5rem',
      'largest': '7rem'
    },
    extend: {
      colors: {
        'buttonColorStart': '#804AEC',
        'buttonColorEnd': '#422779',
        'customPurple': '#A259FF',
        'customWhite': '#D8D3E1',
        'customLightGray': '#BFB4D6',
      },
      borderColor: {
        'default-purple': '#804AEC',
      },
      boxShadow: {
        'profile-bs': '0 0 50px 3px #804AEC',
      },
      screens: {
        // min width
        'min-600': {'min': '601px'},
        'min-800': {'min': '801px'},
        'min-1024': {'min': '1025px'},
        'min-1280': {'min': '1281px'},
        // max width
        'max-600': {'max': '600px'},
        'max-800': {'max': '800px'},
        'max-980': {'max': '980px'},
        'max-1024': {'max': '1024px'},
        'max-1140': {'max': '1140px'},
        'max-1360': {'max': '1360px'},
        // between
        'between-1024-1200': {'min': '1025px', 'max': '1200px'},
        'between-1200-1360': {'min': '1201px', 'max': '1360px'},
      },
    },
  },
  plugins: [],
}

