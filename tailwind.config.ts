import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Ethereal Canvas Palette
        surface: {
          DEFAULT: '#fdf9f4',
          low: '#f7f3ee',
          lowest: '#ffffff',
          variant: '#e6e2dd',
        },
        primary: {
          DEFAULT: '#6d1634',
          container: '#8b2e4a',
        },
        wine: { light: '#C17C8A', DEFAULT: '#8B2E4A', dark: '#5C1A2E' },
        grey: { light: '#F5F5F5', DEFAULT: '#9E9E9E', dark: '#3D3D3D' },
        earth: { light: '#D4B896', DEFAULT: '#A07850', dark: '#6B4F30' },
        cream: '#FAF6F1',
        charcoal: '#2A2A2A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'gallery': '0.3em',
      },
    },
  },
  plugins: [],
};
export default config;
