import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: '#050b12',
        panel: '#0b1720',
        panelAlt: '#101d2b',
        accent: '#6ee7f9',
        warning: '#fbbf24',
        danger: '#f87171',
        success: '#34d399',
        info: '#7dd3fc'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(110, 231, 249, 0.2), 0 0 32px rgba(34, 211, 238, 0.12)'
      },
      backgroundImage: {
        noise: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
