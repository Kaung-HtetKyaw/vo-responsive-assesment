/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    fontFamily: {
      sf: ['SF', 'sans-serif']
    },
    colors: {
      white: '#fff',
      black: '#000',
      primary: '#4208B3',
      secondary: '#D2BBFF',
      offwhite: '#EFEFED',
      appyellow: '#FB2',
      apporange: '#F75B35',
      appblue: '#3939FF',
      milky: '#F7F7F5',
      transparent: 'transparent'
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
      '3xl': '1440px',
      '4xl': '1536px',
      '5xl': '1680px',
      '6xl': '1920px',
      '4k': '2560px'
    }
  },
  layers: ['./styles/app.css']
}
