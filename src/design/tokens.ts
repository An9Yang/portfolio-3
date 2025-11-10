/**
 * Design Tokens
 *
 * Centralized design system values for consistency across the entire application.
 * These tokens ensure visual coherence and make theme updates straightforward.
 */

export const colors = {
  brand: {
    primary: '#FF4500',           // Unified orange
    primaryHover: '#E03E00',
    primaryActive: '#C63700',
    primaryLight: '#FF6B35',
  },
  neutral: {
    black: '#000000',
    gray900: '#0A0A0A',           // Deep black for dark sections
    gray800: '#1A1A1A',
    gray700: '#2A2A2A',
    gray600: '#3A3A3A',
    gray500: '#6B6B6B',
    gray400: '#9B9B9B',
    gray300: '#CBCBCB',
    gray200: '#E5E5E5',
    gray100: '#F5F5F5',
    white: '#FFFFFF',
  },
  background: {
    primary: '#EEE9E3',           // Main background (warm beige)
    secondary: '#F5F4F0',         // Secondary sections
    tertiary: '#E8E5DF',          // Accent backgrounds
    dark: '#0A0A0A',              // Dark sections
    darkCard: '#141414',          // Dark cards
  },
} as const;

export const typography = {
  fontFamily: {
    body: "'Helvetica Neue', Helveticaneue, Arial, sans-serif",
    display: "'Helvetica Neue', Helveticaneue, Arial, sans-serif",
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
    display: 'clamp(3.5rem, 11vw, 9rem)',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeight: {
    none: 1,
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.7,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    label: '0.35em',      // For uppercase labels
  },
} as const;

export const spacing = {
  // 4px base system for precise control
  0: '0',
  px: '1px',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.75rem',      // 12px - Small elements
  md: '1rem',         // 16px - Buttons, inputs
  lg: '1.5rem',       // 24px - Cards
  xl: '2rem',         // 32px - Large cards
  '2xl': '2.5rem',    // 40px - Hero cards
  '3xl': '3rem',      // 48px - Footer
  full: '9999px',     // Pills, avatars
} as const;

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  glow: '0 0 20px rgba(255, 69, 0, 0.3)',
  // Custom shadows for specific use cases
  card: '0 20px 60px rgba(15, 23, 42, 0.06)',
  cardHover: '0 30px 80px rgba(15, 23, 42, 0.12)',
  button: '0 4px 14px rgba(255, 69, 0, 0.25)',
  buttonHover: '0 6px 20px rgba(255, 69, 0, 0.35)',
} as const;

export const transitions = {
  // Duration
  duration: {
    fastest: '100ms',
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
  },
  // Timing functions
  timing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.45, 0, 0.55, 1)',
  },
  // Common transition combinations
  common: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
  max: 9999,
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Opacity values
export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  15: '0.15',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  65: '0.65',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const;
