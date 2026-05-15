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
        cream: '#F5F3EE',
        'card-bg': '#EAE7DF',
        gold: {
          DEFAULT: '#B8962E',
          dark: '#9A7E26',
          light: '#D4B04A',
          accessible: '#7A5C00',
        },
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        border: '#E5E0D5',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
