/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2f5aae',
          50: '#eef3fb',
          100: '#d9e3f5',
          200: '#b3c7ec',
          300: '#8caae2',
          400: '#658ed9',
          500: '#3f72cf',
          600: '#2f5aae',
          700: '#264786',
          800: '#1d345f',
          900: '#142238',
        },
        ink: '#272626',
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f4f5f7',
          dark: '#121212',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
