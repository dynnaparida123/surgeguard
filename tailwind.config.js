module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#06131a',
        panel: '#0b1b24',
        panelAlt: '#0e212b',
        border: '#183848',
        cyan: '#67e8f9',
        teal: '#2dd4bf',
        amber: '#fbbf24',
        orange: '#f97316',
        red: '#ef4444',
        green: '#22c55e',
        slate: '#dfeaf0'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(103,232,249,0.2), 0 10px 30px rgba(6,19,26,0.6)'
      }
    }
  },
  plugins: []
};
