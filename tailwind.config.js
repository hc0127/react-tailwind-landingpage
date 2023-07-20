/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07F2C7',
        dark: '#050505',
        danger: '#CD473B',
        grey:'rgba(255, 255, 255, 0.50)',
        border: 'rgba(55, 57, 69, 0.40)',
        section1: '#F7F2E2',
        section2: '#F9C65E',
        section4: '#7E89BE',
        red: '#DD514C'
      },
      fontFamily: {
        biorhyme: ['BioRhyme', 'sans-serif'],
        dmsans: ['DM+Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

