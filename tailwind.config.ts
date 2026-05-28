import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F2',
        'card-bg': '#F0EDE8',
        'card-hover': '#E8E3DB',
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#A88A38',
          hover: '#B8962E',
          light: '#FBF5E6',
          accessible: '#8A6A1E',
        },
        ink: '#1E1D1B',
        muted: '#6B6560',
        faint: '#A09890',
        border: '#E5E0D5',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.03em',
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}

export default config
