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
        cream: '#FAF8F3',
        'card-bg': '#F8F6F1',
        gold: {
          DEFAULT: '#B8962E',
          dark: '#9A7E26',
          light: '#D4B84A',
          accessible: '#7A5C00',
        },
        ink: '#2D3036',
        muted: '#6B6B6B',
        border: '#E8E4D9',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
