// Design tokens for the Supernova Design System

// Colour scheme
export const colour = {
  // Core branding palettes
  primary: {
    darker: '#2A006F',
    dark: '#3C009E',
    base: '#6333B1',
    light: '#9E83CA',
    lighter: '#CEBFE7',
    lightest: '#EFEBF7'
  },

  secondary: {
    darker: '#C99A24',
    dark: '#EEB62B',
    base: '#FFCD00',
    light: '#FCD36C',
    lighter: '#FDE096',
    lightest: '#FEF2D5'
  },

  text: {
    dark: '#26283D',
    medium: '#75767D',
    light: '#FFFFFF',
    disabled: '#A8A9B1'
  },

  background: '#F6F7FF',
  border: 'rgba(0,0,0,0.2)',
  surface: '#FFFFFF',
  disabled: '#E5E5E5',

  // Emotive palettes e.g. notifications
  negative: {
    dark: '#E96A6A',
    base: '#FB9C9C',
    light: '#FBBDBD',
    lighter: '#FBDEDE'
  },

  warning: {
    dark: '#FDB84F',
    base: '#FECA7B',
    light: '#FFDAA2',
    lighter: '#FFEDD3'
  },

  positive: {
    dark: '#07CF93',
    base: '#5CE0B8',
    light: '#85E8CA',
    lighter: '#D6F7ED'
  }
}
export const color = colour

// Type system
export const type = {
  font: {
    primary: '"GT Walsheim", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    emoji:
      '"NotoMono-Regular", "Consolas", "Unifont", "Apple Color Emoji", "Segoe UI Emoji", "NotoColorEmoji", "Segoe UI Symbol", "Android Emoji", "EmojiSymbols", monospace'
  },
  weight: {
    regular: 400,
    bold: 600,
    bolder: 800,
    display: 600,
    heading: 600,
    label: 600,
    text: 400
  },
  size: {
    base: 16, // defines the root or default font-size in pixels; used as the basis for all font and size scales (rem)
    display: {
      l: 6, // 96px
      m: 3.25, // 52px
      s: 2.75, // 44px
      xs: 2.25 // 36px
    },
    heading: {
      xxl: 2.5, // 40px
      xl: 2.25, // 36px
      l: 2, // 32px
      m: 1.75, // 28px
      s: 1.5, // 24px
      xs: 1.25 // 20px
    },
    label: {
      l: 1.125, // 18px
      m: 1, // 16px
      s: 0.875, // 14px
      xs: 0.75 // 12px
    },
    text: {
      l: 1.125, // 18px
      m: 1, // 16px
      s: 0.875, // 14px
      xs: 0.75 // 12px
    }
  },
  spacing: {
    // text.spacing is equivalent to line-height in CSS and works off an em scale
    display: 1.2, // 44px (s) <-> 112px (l)
    heading: 1.3, // 28px (s) <-> 52px (xxl)
    label: 1.3, // 16px (s) <-> 24px (l)
    text: 1.4 // 16px (s) <-> 28px (l)
  }
}

// White-space scales
export const space = {
  layout: {
    xs: 1, // 16px
    s: 1.5, // 24px
    m: 2, // 32px
    l: 3, // 48px
    xl: 4, // 64px
    xxl: 6, // 96px
    xxxl: 10 // 160px
  },
  content: {
    xxxs: 0.125, // 2px
    xxs: 0.25, // 4px
    xs: 0.5, // 8px
    s: 0.75, // 12px
    m: 2, // 32px
    l: 2.5, // 40px
    xl: 3 // 48px
  }
}

// Viewport break points (assumed in pixels/px units)
export const breakpoint = {
  mobile: 300,
  mobilexl: 480,
  landscape: 640,
  tablet: 760,
  laptop: 1024,
  desktop: 1200,
  retina: 1440,
  widescreen: 1920
}

// CSS device queries
export const device = Object.entries(breakpoint).reduce(
  (array, [key, value]) => ({ ...array, [key]: `(min-width: ${value}px)` }),
  {}
)

// Theme
export const theme = { colour, color, type, space, breakpoint, device }
