export const tokens = {
  colors: {
    light: {
      background: '#FAF7F5', // Soft warm off-white
      foreground: '#54463A', // Dark brown
      accent: '#C75F71',     // Deep rose (Primary accent)
      accentSecondary: '#F0B8B8', // Blush pink (Secondary decorative)
      accentTertiary: '#A2AE9D',  // Muted gray-green (Tertiary utility)
      muted: '#8A7B6E',
      border: '#EBE1D8'
    },
    dark: { // Note: Dark mode is not the primary focus for Pastel Garden, keeping a tinted inversion
      background: '#2A231E',
      foreground: '#FAF7F5',
      accent: '#C75F71',
      accentSecondary: '#F0B8B8',
      accentTertiary: '#A2AE9D',
      muted: '#8A7B6E',
      border: '#3F352E'
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
