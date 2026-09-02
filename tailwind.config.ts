import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05070c',
          900: '#080b13',
          850: '#0b0f19',
          800: '#0f1420',
          700: '#161c2c',
          600: '#232a3d',
          border: '#1c2333',
        },
        accent: {
          blue: '#4f8cff',
          blue2: '#60a5fa',
          purple: '#a78bfa',
          cyan: '#22d3ee',
        },
        muted: {
          DEFAULT: '#8b93a7',
          light: '#c3c9d6',
        },
        paper: '#fafafa',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(79, 140, 255, 0.35)',
        'glow-lg': '0 0 80px -12px rgba(79, 140, 255, 0.45)',
        card: '0 4px 24px -4px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
