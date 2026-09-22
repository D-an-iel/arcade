/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FACC15',
          'yellow-hover': '#EAB308',
          'yellow-light': '#FEF08A',
          dark: '#0A0A0A',
          charcoal: '#121214',
          surface: '#18181B',
          card: '#1C1C21',
          border: '#27272A',
          teal: '#0D3B3E',
          cyan: '#00F2FE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 50px -10px rgba(13, 59, 62, 0.6)',
        'glow-yellow': '0 10px 30px -5px rgba(250, 204, 21, 0.3)',
        'glow-cyan': '0 0 60px -15px rgba(0, 242, 254, 0.4)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

