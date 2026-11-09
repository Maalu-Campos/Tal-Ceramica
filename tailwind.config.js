/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#F8F5F0',
          100: '#EFE7DA',
          200: '#E0D2BD',
          300: '#CDB394',
          400: '#B89A73',
          500: '#857252',
          600: '#736244',
          700: '#5E4F38',
          800: '#4A3D2C',
          900: '#2E2B27',
        },
        cream: {
          50: '#FBF9F5',
          100: '#F5F1EA',
          200: '#EDE6D8',
          300: '#E2D8C4',
        },
        olive: {
          50: '#F4F4EE',
          100: '#E5E5D6',
          200: '#C7C7A8',
          300: '#A0A07C',
          400: '#6C6A52',
          500: '#5A5843',
          600: '#48473A',
          700: '#36362C',
        },
        terracotta: {
          50: '#FAF0EB',
          100: '#F2DBCD',
          200: '#E5B89F',
          300: '#D79C77',
          400: '#B67A5A',
          500: '#9C6347',
          600: '#7E4F39',
          700: '#603C2C',
        },
        graphite: {
          50: '#F0EFED',
          100: '#D8D6D1',
          200: '#A8A59E',
          300: '#7A7770',
          400: '#54524D',
          500: '#3D3B37',
          600: '#2E2B27',
          700: '#1F1D1A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeIn: 'fadeIn 1.2s ease both',
        scaleIn: 'scaleIn 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        lineGrow: 'lineGrow 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
