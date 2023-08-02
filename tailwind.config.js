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
        'textColor': '#c1d3cf',
        'bgColor': '#1c1e26',
        'bgColorHeader': 'rgba(21, 23, 28, .9)',
        'mainColor': '#9feaad',
        'mainColor20': 'rgba(145, 216, 209, .3)',
        'subColor': '#82a8d2',
        'subBgColor': 'rgba(96, 121, 153,.2)',
        'subBdColor': 'rgba(96, 121, 153,.6)',

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
        'iconScale': 'iconScale 0.5s ease-in-out 1',
      },

      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(-6px)' },
          '100%': { transform: 'translateX(128px)' },
        },
        iconScale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        }
      },

      screens: {
        'xs': '480px',
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

