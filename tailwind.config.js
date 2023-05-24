/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-brown': '#DA823F',
        brown: '#B45309',
        'dark-brown': '#81200C',
        yellow: '#FFC700',
      },
    },
  },
  plugins: [],
};
