/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Editorial Cream palette
        paper: {
          DEFAULT: '#f7f2e8', // page background
          alt: '#efe7d3',     // alt section background
        },
        ink: {
          DEFAULT: '#1a1815', // primary text
          2: '#4d4940',       // secondary text
          3: '#807a6e',       // muted text / captions
        },
        line: '#e3dac3',
        accent: {
          DEFAULT: '#c44a2e', // terracotta
          deep: '#8a3220',
          soft: '#f1d9cf',
        },
        gold: '#b08a3e',
        // Repurposed brand scale = terracotta (keeps existing utility classes working)
        brand: {
          DEFAULT: '#c44a2e',
          50: '#fbeee8',
          100: '#f6d8cc',
          200: '#edb39c',
          300: '#e28d6c',
          400: '#d56a47',
          500: '#c44a2e',
          600: '#a93b22',
          700: '#8a3220',
          800: '#69261a',
          900: '#3f1610',
        },
        surface: {
          DEFAULT: '#f7f2e8', // cream
          soft: '#efe7d3',
          dark: '#1a1815',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Fraunces', '"Instrument Serif"', 'Georgia', 'serif'],
        italic: ['"Instrument Serif"', 'Fraunces', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '80rem', // 1280px to match design
      },
      letterSpacing: {
        'display-tight': '-0.02em',
        'display-tighter': '-0.035em',
        'mono-wide': '0.16em',
      },
    },
  },
  plugins: [],
};
