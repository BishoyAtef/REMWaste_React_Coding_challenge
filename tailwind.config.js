export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    darkModule: 'class',
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
    keyframes: {
      pop: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
      },
    },
    Animation: {
      'pulse-slow': 'pulse 2.5s ease-in-out infinite',
    }
  },
  plugins: [],
};