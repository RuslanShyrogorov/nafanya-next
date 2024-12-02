import type { Config } from 'tailwindcss'
import animatedPlugin from 'tailwindcss-animated'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fill: {
        gray: {
          default: 'var(--gray-light)',
          dark: 'var(--gray-dark)',
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main: 'var(--bg-accent)',
        red: {
          light: 'var(--red-light)',
          dark: 'var(--red-dark)',
          hover: 'var(--red-hover)',
          // 'hover-light': '#fbe4e3',
        },
        brown: {
          light: 'var(--brown-light)',
          dark: 'var(--brown-dark)',
        },
        blue: {
          light: 'var(--blue-light)',
          dark: 'var(--blue-dark)',
        },
        gray: {
          default: 'var(--gray)',
          light: 'var(--gray-light)',
          dark: 'var(--gray-dark)',
        },
      },
      backgroundImage: {
        hero: "url('./assets/images/hero.webp')",
      },
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(270px, 320px))',
      },
      dropShadow: {
        '2xl': '0 2px 7px rgba(0, 0, 0, .23)',
        '3xl': [
          '0px 1px 1px rgba(0, 0, 0, 0.12)',
          '0px 4px 4px rgba(0, 0, 0, 0.06)',
          '1px 4px 6px rgba(0, 0, 0, 0.16)',
        ],
        '4xl': [
          '0px 3px 1px rgba(0, 0, 0, 0.1)',
          '0px 1px 2px rgba(0, 0, 0, 0.08)',
          '0px 2px 2px rgba(0, 0, 0, 0.12)',
        ],
      },
    },
  },
  plugins: [animatedPlugin],
}
export default config
