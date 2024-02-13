/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          primary: '#0F172A',
          secondary: '#141C31',
          'complementary': '#2AA7D6',
          'unactive':'#6F7A8E',
          'light':'#95A9BA',
          'very-light':'#D9D9D9',
          'yellowAbout':'#FAFF00',
          'redAbout':'#D62A2A',
          'lightBlueAbout':'#2AA7D6',
          'brownAbout':'#D67D2A',
          'purpleAbout':'#9F2AD6',
          'blueAbout':'#2A5AD6',
      },
      keyframes: {
        scroller: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
        },
        item1: {
          '0%': { transform: 'translateX(0px) translateZ(20px) ' },
          '50%': { transform: 'translateX(-50px) translateY(-10px) translateZ(20px) rotate(360deg)' },
          '100%': { transform: 'translateX(0px) translateZ(20px) ' },
        },
        item2: {
          '0%': { transform: 'translateZ(30px) ' },
          '50%': { transform: 'translateZ(30px) rotate(180deg) scale(0.7)' },
          '100%': { transform: 'translateZ(30px) rotate(360deg) scale(1)' },
        },
        item3: {
          '0%': { transform: 'translateZ(-40px) translateX(0px)' },
          '50%': { transform: 'translateZ(-40px) translateY(-30px) rotate(180deg) scale(0.8)' },
          '100%': { transform: 'translateZ(-40px) rotate(360deg) scale(1)' },
        },
        item4: {
          '0%': { transform: 'translateZ(30px) translateX(0px)' },
          '50%': { transform: 'translateZ(30px) translateY(30px) rotate(180deg) scale(0.8)' },
          '100%': { transform: 'translateZ(30px) rotate(360deg) scale(1)' },
        },
        item5: {
          '0%': { transform: 'translateZ(-60px) translateX(0px)' },
          '50%': { transform: 'translateZ(-60px) translateY(50px) translateX(-150px) rotate(180deg) scale(0.2)' },
          '100%': { transform: 'translateZ(-60px) rotate(360deg) scale(1)' },
        },
        item6: {
          '0%': { transform: 'translateZ(10px) ' },
          '50%': { transform: 'translateZ(10px) rotate(180deg) scale(0.7)' },
          '100%': { transform: 'translateZ(10px) rotate(360deg) scale(1)' },
        },
        about: {
          '0%': { transform: 'translateX(0px)   translateY(0px) skew(10deg)' },
          '50%': { transform: 'translateX(15px) translateY(-15px) skew(10deg)' },
          '100%': { transform: 'translateX(0px) translateY(0px) skew(10deg)' },
        },
        about2: {
          '0%': { transform: 'translateX(0px)   translateY(0px) skew(8deg)' },
          '50%': { transform: 'translateX(10px) translateY(-10px) skew(8deg)' },
          '80%': { transform: 'translateX(0px) translateY(0px) skew(8deg)' },
        },
        bg1: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '50%': { transform: 'translateX(15%) translateY(30%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        bg2: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '50%': { transform: 'translateX(-15%) translateY(10%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        bg3: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '30%': { transform: 'translateX(-20%) translateY(40%)' },
          '50%': { transform: 'translateX(-40%) translateY(70%)' },
          '70%': { transform: 'translateX(-70%) translateY(30%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        bg4: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '50%': { transform: 'translateX(20%) translateY(-100%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        bg5: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '30%': { transform: 'translateX(5%) translateY(-20%)' },
          '55%': { transform: 'translateX(-15%) translateY(-30%)' },
          '90%': { transform: 'translateX(10%) translateY(30%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        bg6: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '30%': { transform: 'translateX(-20%) translateY(-20%)' },
          '55%': { transform: 'translateX(-5%) translateY(0%)' },
          '65%': { transform: 'translateX(-10%) translateY(0%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
        bg7: {
          '0%': { transform: 'translateX(0%)   translateY(0%)' },
          '55%': { transform: 'translateX(100%) translateY(0%)' },
          '100%': { transform: 'translateX(0%) translateY(0%)' },
        },
    }, 
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'FiraCode' : ['Fira Code', 'monospace'],
      'Montserrat' : ['Montserrat', 'sans-serif'],
      'Poppins' : ['Poppins', 'sans-serif'],
      'Raleway' : [ 'Raleway', 'sans-serif'],
      'Roboto' : ['Roboto', 'sans-serif'],
    },
  }
}

