import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animationDuration: {
        '30s': '30s',
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
