export const tokens = {
  colors: {
    light: {
      background: '#F4F1EA',
      foreground: '#1A1A1A',
      accent: '#E04D01', // Burnt orange - brings high-energy contrast to the calm paper background
      muted: '#8A867D',
      border: '#E2DFD8'
    },
    dark: {
      background: '#1A1A1A',
      foreground: '#F4F1EA',
      accent: '#FF6B1A',
      muted: '#A3A3A3',
      border: '#333333'
    }
  },
  typography: {
    fluid: {
      h1: 'clamp(3rem, 8vw, 6rem)',
      h2: 'clamp(2.5rem, 6vw, 4.5rem)',
      h3: 'clamp(2rem, 4vw, 3.5rem)',
      h4: 'clamp(1.5rem, 3vw, 2.5rem)',
    },
    static: {
      bodyLg: '1.25rem', // 20px
      bodyBase: '1rem', // 16px
      bodySm: '0.875rem', // 14px
      caption: '0.75rem', // 12px
    }
  },
  spacing: {
    section: {
      sm: '4rem',
      md: '8rem',
      lg: '12rem',
      xl: '16rem'
    },
    gutter: 'clamp(1.5rem, 4vw, 3rem)'
  },
  easing: {
    smooth: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
    bounce: [0.175, 0.885, 0.32, 1.275],
  }
} as const;

export type Tokens = typeof tokens;
