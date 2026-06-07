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
      fontSize: {
        // Fluid display scale — a faithful 1:1 capture of the clamp() sizes that
        // were previously inlined as text-[clamp(...)] across the site. Bare
        // strings set font-size only (line-height stays on the existing
        // leading-* classes), so rendering is unchanged. Several entries are
        // near-duplicates kept distinct to guarantee zero visual drift; they are
        // candidates for a later, intentional consolidation pass.
        'fluid-hero': 'clamp(3.25rem, 7vw, 6.75rem)',   // home hero
        'fluid-hero2': 'clamp(3rem, 7vw, 6.75rem)',     // Hero.astro
        'fluid-mega': 'clamp(4rem, 9vw, 8.75rem)',      // impact giant stats
        'fluid-7xl': 'clamp(3rem, 7vw, 7rem)',          // impact hero
        'fluid-6xl': 'clamp(3rem, 6.5vw, 6rem)',        // page heroes
        'fluid-5xl': 'clamp(2.75rem, 6vw, 5.5rem)',     // PageHeader + sections
        'fluid-5xl2': 'clamp(3rem, 6vw, 5.5rem)',       // page heroes (alt min)
        'fluid-4xl': 'clamp(3rem, 6vw, 5rem)',          // big section h2
        'fluid-4xl2': 'clamp(2.5rem, 5.5vw, 5rem)',     // donate why-give
        'fluid-3xl': 'clamp(2.5rem, 5vw, 4.5rem)',      // donor appeal
        'fluid-3xl2': 'clamp(3rem, 5vw, 4.5rem)',       // donate impact stats
        'fluid-3xl3': 'clamp(2.5rem, 5.5vw, 4.5rem)',   // villages/events hero
        'fluid-2xl': 'clamp(2.5rem, 4.5vw, 4rem)',      // section h2
        'fluid-xl': 'clamp(2.25rem, 4.5vw, 3.75rem)',   // blockquotes
        'fluid-xl2': 'clamp(2.25rem, 4vw, 3.5rem)',     // impact h2
        'fluid-lg': 'clamp(2rem, 3.5vw, 3.25rem)',      // donate transparency
        'fluid-md': 'clamp(2rem, 4vw, 3rem)',           // index stat numbers
        'fluid-md2': 'clamp(2rem, 3.5vw, 3rem)',        // common subheads
        'fluid-sm': 'clamp(2rem, 3.5vw, 2.75rem)',      // jal-vriddhi
        'fluid-xs': 'clamp(1.75rem, 3vw, 2.5rem)',      // small section h2 (×5)
        'fluid-stat': 'clamp(2rem, 8.5vw, 5.5rem)',     // StatCard value
        // Mono eyebrow / caption label sizes (were text-[10px|11px|12px]).
        'eyebrow': '11px',
        'eyebrow-sm': '10px',
        'eyebrow-lg': '12px',
        // Fixed-px body / UI scale (were text-[Npx]). Bare strings set font-size
        // only — line-height stays on the existing leading-* classes.
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
        '21': '21px',
        '26': '26px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
      },
      letterSpacing: {
        'display-tight': '-0.02em',
        'display-tighter': '-0.035em',
        // Mono eyebrow / label tracking scale (were tracking-[0.0Nem]). Several
        // near-duplicate steps kept distinct to guarantee zero visual drift.
        'label-06': '0.06em',
        'label-08': '0.08em',
        'label-10': '0.1em',
        'label-12': '0.12em',
        'label-14': '0.14em',
        'label-16': '0.16em',
        'label-18': '0.18em',
        'mono-wide': '0.16em',
      },
    },
  },
  plugins: [],
};
