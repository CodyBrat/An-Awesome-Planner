/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#34d399',
        },
        background: {
          DEFAULT: '#121212',
          light: '#1e1e1e',
          lighter: '#2d2d2d',
        },
        task: {
          workout: '#ef4444',
          shower: '#3b82f6',
          meal: '#f59e0b',
          work: '#8b5cf6',
          email: '#ec4899',
          meeting: '#6366f1',
          personal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 