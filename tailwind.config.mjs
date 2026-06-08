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
          3: '#6d675d',       // muted text / captions (WCAG AA ≥4.5:1 on paper/paper-alt/white)
        },
        line: '#e3dac3',
        accent: {
          DEFAULT: '#c44a2e', // terracotta
          deep: '#8a3220',
          soft: '#f1d9cf',
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
        // rationalized step scale (largest → smallest). `stat` keeps its own
        // aggressive vw curve for the homepage statline numbers.
        'fluid-1': 'clamp(4rem, 9vw, 8.75rem)',    // impact giant stats
        'fluid-2': 'clamp(3rem, 7vw, 6.75rem)',    // hero headings
        'fluid-3': 'clamp(3rem, 6.5vw, 6rem)',     // page heroes
        'fluid-4': 'clamp(2.75rem, 6vw, 5.5rem)',  // PageHeader + large heroes
        'fluid-5': 'clamp(3rem, 6vw, 5rem)',       // big section h2
        'fluid-6': 'clamp(2.5rem, 5vw, 4.5rem)',   // section h2 (large)
        'fluid-7': 'clamp(2.5rem, 4.5vw, 4rem)',   // section h2
        'fluid-8': 'clamp(2.25rem, 4vw, 3.5rem)',  // blockquotes / sub-headings
        'fluid-9': 'clamp(2rem, 3.5vw, 3rem)',     // sub-headings / stat numbers
        'fluid-10': 'clamp(1.75rem, 3vw, 2.5rem)', // small section h2
        'fluid-stat': 'clamp(2rem, 8.5vw, 5.5rem)', // StatCard value
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
