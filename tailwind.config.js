/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F0D060',
          dark: '#B8962E',
        },
        darkgreen: {
          DEFAULT: '#FFFFFF',
          light:   '#F5F5F5',
          dark:    '#E8E8E8',
        },
        black: {
          DEFAULT: '#111111',
          light: '#1A1A1A',
          soft: '#222222',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.8)' },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #B8962E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #111111 0%, #1A1A1A 100%)',
      }
    },
  },
  plugins: [],
}
