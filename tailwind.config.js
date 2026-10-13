/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050F1D',
          900: '#0A1B33',
          800: '#0F2748',
          700: '#163560',
        },
        brand: {
          blue: '#1F6FEB',
          teal: '#2BB3A8',
          ice: '#CFE0FF',
        },
        mist: '#F1F5F9',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 30px 60px -30px rgba(10, 27, 51, 0.45)',
      },
    },
  },
  plugins: [],
};
