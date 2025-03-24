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
          DEFAULT: 'rgb(var(--primary-rgb))',
          dark: 'rgb(var(--primary-dark-rgb))',
          light: 'rgb(var(--primary-light-rgb))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-rgb))',
          dark: 'rgb(var(--secondary-dark-rgb))',
          light: 'rgb(var(--secondary-light-rgb))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb))',
          dark: 'rgb(var(--accent-dark-rgb))',
          light: 'rgb(var(--accent-light-rgb))',
        },
        background: {
          DEFAULT: '#0f172a',
          dark: '#0a0f1c',
          darker: '#060914',
          light: '#1e293b',
          lighter: '#334155',
          card: '#1e293b',
        },
        task: {
          workout: 'rgb(var(--task-workout-rgb))',
          shower: 'rgb(var(--task-shower-rgb))',
          meal: 'rgb(var(--task-meal-rgb))',
          work: 'rgb(var(--task-work-rgb))',
          email: 'rgb(var(--task-email-rgb))',
          meeting: 'rgb(var(--task-meeting-rgb))',
          personal: 'rgb(var(--task-personal-rgb))',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.5)',
        'glow-rose': '0 0 15px rgba(244, 63, 94, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'glass-intense': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glassmorphism': 
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'button': '0 4px 14px 0 rgba(var(--primary-rgb), 0.25)',
        'button-hover': '0 6px 20px rgba(var(--primary-rgb), 0.35)',
        'button-secondary': '0 4px 14px 0 rgba(var(--secondary-rgb), 0.25)',
        'button-accent': '0 4px 14px 0 rgba(var(--accent-rgb), 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-shine': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      backgroundSize: {
        'dots-sm': '20px 20px',
        'dots-md': '30px 30px',
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        ':root': {
          // Theme colors in RGB format
          '--primary-rgb': '99, 102, 241',
          '--primary-dark-rgb': '79, 70, 229',
          '--primary-light-rgb': '129, 140, 248',
          
          '--secondary-rgb': '6, 182, 212',
          '--secondary-dark-rgb': '8, 145, 178',
          '--secondary-light-rgb': '34, 211, 238',
          
          '--accent-rgb': '244, 63, 94',
          '--accent-dark-rgb': '225, 29, 72',
          '--accent-light-rgb': '251, 113, 133',
          
          // CSS variables for theme colors
          '--primary': 'rgb(var(--primary-rgb))',
          '--primary-dark': 'rgb(var(--primary-dark-rgb))',
          '--primary-light': 'rgb(var(--primary-light-rgb))',
          
          '--secondary': 'rgb(var(--secondary-rgb))',
          '--secondary-dark': 'rgb(var(--secondary-dark-rgb))',
          '--secondary-light': 'rgb(var(--secondary-light-rgb))',
          
          '--accent': 'rgb(var(--accent-rgb))',
          '--accent-dark': 'rgb(var(--accent-dark-rgb))',
          '--accent-light': 'rgb(var(--accent-light-rgb))',
          
          // Task colors
          '--task-workout-rgb': '244, 63, 94',
          '--task-shower-rgb': '59, 130, 246',
          '--task-meal-rgb': '245, 158, 11',
          '--task-work-rgb': '139, 92, 246',
          '--task-email-rgb': '236, 72, 153',
          '--task-meeting-rgb': '99, 102, 241',
          '--task-personal-rgb': '20, 184, 166',
        },
      });
    },
  ],
}; 