import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'oklch(var(--bg) / <alpha-value>)',
        surface: 'oklch(var(--surface) / <alpha-value>)',
        ink: 'oklch(var(--ink) / <alpha-value>)',
        muted: 'oklch(var(--muted) / <alpha-value>)',
        primary: 'oklch(var(--primary) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        onPrimary: 'oklch(var(--on-primary) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
