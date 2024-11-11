import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fill: {
        gray: '#3E3E3E',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'gray-light': '#3E3E3E',
        'gray-dark': '#747474',
        red: {
          100: '#FF3451',
          200: '#e31235',
          hover: '#fadbda',
          'hover-light': '#fbe4e3',
        },
        brown: {
          light: '#D7B399',
          dark: '#9d825d',
        },
        blue: {
          light: '#40A3F8',
          dark: '#1D76F5',
        },
        gray: {
          default: '#3E3E3E',
          secondary: '#DDDDDD',
          dark: '#747474',
        },
      },
    },
  },
  plugins: [],
}
export default config
