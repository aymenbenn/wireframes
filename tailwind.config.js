
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#007399',
        primaryDark: '#005573',
        accent: '#F0712A',
        accentHover: '#D96020',
        success: '#00B900',
        successDark: '#017900',
        body: '#303C43',
        muted: '#556677',
        borderLight: '#EEEEEE',
        bgLight: '#F5F5F5',
        bgFooter: '#F5F5F6',
      }
    },
  },
  plugins: [],
}
