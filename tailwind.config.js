/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '425px',
        'md': '768px',
        'lg': '992px',
        'xlg': '1200px',
        '2xlg': '1440px'
      },
      fontSize: {
        'sm': 'var(--ter-text-sm)',
        'sm-1': 'var(--ter-text-sm-1)',
        'base': 'var(--ter-text-base)',
        'base-1': 'var(--ter-text-base-1)',
        'base-2': 'var(--ter-text-base-2)',
        'medium': 'var(--ter-text-medium)',
        'medium-1': 'var(--ter-text-medium-1)',
        'medium-2': 'var(--ter-text-medium-2)',
        'large': 'var(--ter-text-large)',
        'xlarge': 'var(--ter-text-xlarge)',
        'xxlarge': 'var(--ter-text-xxlarge)'
      },
      lineHeight: {
        'sm': 'var(--ter-line-h-sm)',
        'sm-1': 'var(--ter-line-h-sm-1)',
        'base': 'var(--ter-line-h-base)',
        'base-1': 'var(--ter-line-h-base-1)',
        'base-2': 'var(--ter-line-h-base-2)',
        'medium': 'var(--ter-line-h-medium)',
        'medium-1': 'var(--ter-line-h-medium-1)',
        'medium-2': 'var(--ter-line-h-medium-2)',
        'large': 'var(--ter-line-h-large)',
        'xlarge': 'var(--ter-line-h-xlarge)',
        'xxlarge': 'var(--ter-line-h-xxlarge)',
      },
      boxShadow: {
        'base': '2px 2px 1px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [require('tailwindcss-primeui')],
}

