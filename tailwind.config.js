/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#7F1316',
        'primary-100': 'rgba(127, 19, 22, 0.1)',
        'primary-200': 'rgba(127, 19, 22, 0.2)',
        'primary-300': 'rgba(127, 19, 22, 0.3)',
        'primary-400': 'rgba(127, 19, 22, 0.4)',
        'primary-500': 'rgba(127, 19, 22, 0.5)',
        'primary-600': 'rgba(127, 19, 22, 0.6)',
        'primary-700': 'rgba(127, 19, 22, 0.7)',
        'primary-800': 'rgba(127, 19, 22, 0.8)',
        'primary-900': 'rgba(127, 19, 22, 0.9)',
        'primary-light': '#FF0000',
        'primary-dark': '#FF0000',
        secondary: '#FF0000',
      },
    },
  },
  plugins: [],
}

