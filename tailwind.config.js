/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: '#b45309',
        'dark-brown': '#81200c',
        yellow: '#ffc700',
      },
    },
  },
  plugins: [],
};
