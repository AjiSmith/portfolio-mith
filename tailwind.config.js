/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#0d0d0d',
        brandText: '#ffffff',
        brandAccent: '#ffffff',
        brandBorder: '#374151',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dmmono: ['DM Mono', 'monospace'],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '28px',
        lg: '48px',
        xl: '96px',
      }
    },
  },
  plugins: [],
}