/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Investoria premium color palette
        'green': {
          700: '#1F5A34',
          800: '#184E2A', 
          900: '#10381D',
          1000: '#0B2A15',
        },
        'gold': {
          300: '#F6C767',
          400: '#F1B23E',
          500: '#D99A2A', 
          600: '#C18417',
          700: '#9A6710',
        },
        'investoria': {
          text: '#EAE8E1',
          muted: '#C9C6B8',
        }
      },
      fontFamily: {
        'cinzel': ['"Cinzel Decorative"', 'serif'],
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      },
      boxShadow: {
        'investoria': '0 10px 30px rgba(0,0,0,.35)',
      },
      animation: {
        'swing': 'swing 4s ease-in-out infinite',
        'pop': 'pop 0.18s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 6s ease-in-out infinite',
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        pop: {
          from: { transform: 'translateY(6px) scale(0.98)', opacity: '0' },
          to: { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            backgroundSize: '200% 200%'
          },
        },
        gradientPulse: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'scale(1.05)'
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
