import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - purple/indigo gradient
        primary: {
          light: '#8B5CF6', // Lighter purple
          DEFAULT: '#6366F1', // Main indigo
          dark: '#4F46E5', // Darker indigo
        },
        // Secondary colors - coral/salmon for action buttons
        secondary: {
          light: '#F87171', // Lighter coral
          DEFAULT: '#EF4444', // Main coral/red
          dark: '#DC2626', // Darker red
        },
        // Neutral colors
        white: '#ffffff',
        black: '#000000',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      // Gradient backgrounds
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #4F46E5 100%)',
      },
      // Typography
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
      },
      // Spacing
      spacing: {
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
      },
      padding: {
        'card': '1.5rem',  // 24px - standard card padding
        'item': '0.75rem', // 12px - standard item padding
      },
      margin: {
        'card': '1.5rem',  // 24px - standard card margin
        'item': '0.75rem', // 12px - standard item margin
      },
      gap: {
        'card': '1.5rem',  // 24px - standard card gap
        'item': '0.75rem', // 12px - standard item gap
      },
    },
  },
  plugins: [],
};

export default config; 