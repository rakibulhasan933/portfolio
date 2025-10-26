/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['var(--font-ubuntu)', 'Ubuntu', 'system-ui', 'sans-serif'],
        'ubuntu-mono': ['Ubuntu Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'emerald': {
          400: '#34d399',
          300: '#6ee7b7',
        },
        'slate': {
          900: '#0f172a',
          800: '#1e293b',
          400: '#94a3b8',
          300: '#cbd5e1',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      willChange: {
        'transform-opacity': 'transform, opacity',
      }
    },
  },
  plugins: [],
}