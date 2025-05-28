/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          400: '#FC7941', // Main accent color (soft orange)
          500: '#E66A35', // Darker accent for hover states
          200: '#FFB095', // Lighter accent for subtle highlights
        },
        purple: {
          dark: '#1B0E36', // Dark purple
          light: '#372B5A', // Light purple
        },
        lavender: {
          100: '#E6E0F0', // Very light lavender
          200: '#C9BCDF', // Light lavender for borders
          300: '#A797CF', // Medium lavender for highlights
          400: '#8472BE', // Darker lavender for accents
        },
        gray: {
          900: '#1B0E36', // Dark background (dark purple)
          800: '#241542', // Card background (slightly lighter)
          700: '#2D1B4F', // Hover states
          600: '#372B5A', // Active states
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to bottom, #372B5A, #1B0E36)',
      },
    },
  },
  plugins: [],
} 