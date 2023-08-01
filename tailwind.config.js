/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        RCD: ['Radio Canada', 'sans-serif'],
      },

      colors: {
        'bgColor': '#272a37',
        'bgColorHeader': 'rgba(37, 42, 63, .1)',
        'mainColor': '#9feaad',
        'mainColor20': 'rgba(143, 223, 178, .2)',
      },

      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '95%': '95%',
        '16': '4rem',
      },

      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'leftToRight': 'leftToRight 3s ease-in-out infinite',
      },

      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(-6px)' },
          '100%': { transform: 'translateX(128px)' },
        }
      },

      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2400px',
      },



    },
  },
  plugins: [],
}

