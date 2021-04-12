import { createGlobalStyle, css } from 'styled-components'
import { space, colour, type } from './tokens'

export const bodyStyles = css`
  font-family: var(--font-primary);
  font-size: var(--type-text-m);
  color: var(--colour-text-dark);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    max-width: 40ch;
    line-height: var(--type-heading-spacing);
    font-weight: var(--type-heading-weight);
  }

  p,
  span,
  code,
  pre {
    font-size: var(--type-text-m);
    line-height: var(--type-text-spacing);
  }

  p,
  li {
    max-width: 75ch; // improves readability and a11y
    font-weight: var(--type-text-weight);
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: var(--font-primary);
  }

  button {
    cursor: pointer;
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  strong {
    font-weight: var(--type-weight-bold);
  }

  hr {
    border: none;
    border-top: 1px solid var(--colour-border);
    clear: both;
    margin-bottom: var(--space-content-m);
  }

  code,
  pre {
    font-family: var(--font-code);
    font-size: var(--type-text-m);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: var(--space-content-xxxs);
    padding-right: var(--space-content-xxxs);
    vertical-align: baseline;
  }

  pre {
    padding: var(--space-content-s) var(--space-content-m);
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    margin: var(--space-content-m) 0;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  a {
    width: max-content;
    text-decoration: none;
    color: var(--colour-primary-base);
    font-size: var(--type-label-l);
    font-weight: var(--type-label-weight);
  }

  a:hover,
  a:focus {
    opacity: 0.6;
  }

  p a {
    font-size: var(--type-label-m);
  }

  main:focus {
    outline: none; // removes unwanted skip link focus formatting on Chrome
  }

  /* Global class for elements that should only be accessible by screenreaders */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`

export const customProperties = css`
  /* Convert space token to CSS vars */
  --space-layout-xs: ${space.layout.xs}rem;
  --space-layout-s: ${space.layout.s}rem;
  --space-layout-m: ${space.layout.m}rem;
  --space-layout-l: ${space.layout.l}rem;
  --space-layout-xl: ${space.layout.xl}rem;
  --space-layout-xxl: ${space.layout.xxl}rem;
  --space-layout-xxxl: ${space.layout.xxxl}rem;

  --space-content-xxxs: ${space.content.xxxs}rem;
  --space-content-xxs: ${space.content.xxs}rem;
  --space-content-xs: ${space.content.xs}rem;
  --space-content-s: ${space.content.s}rem;
  --space-content-m: ${space.content.m}rem;
  --space-content-l: ${space.content.l}rem;
  --space-content-xl: ${space.content.xl}rem;

  /* Convert type weights to CSS vars */
  --type-weight-regular: 400;
  --type-weight-bold: 600;
  --type-weight-bolder: 800;
  --type-weight-display: 600;
  --type-weight-heading: 600;
  --type-weight-label: 600;
  --type-weight-text: 400;

  /* Convert type system to CSS vars */
  --type-display-xs: ${type.size.display.xs}rem;
  --type-display-s: ${type.size.display.s}rem;
  --type-display-m: ${type.size.display.m}rem;
  --type-display-l: ${type.size.display.l}rem;
  --type-display-weight: var(--type-weight-display);
  --type-display-spacing: ${type.spacing.display};

  --type-heading-xs: ${type.size.heading.xs}rem;
  --type-heading-s: ${type.size.heading.s}rem;
  --type-heading-m: ${type.size.heading.m}rem;
  --type-heading-l: ${type.size.heading.l}rem;
  --type-heading-xl: ${type.size.heading.xl}rem;
  --type-heading-xxl: ${type.size.heading.xxl}rem;
  --type-heading-weight: var(--type-weight-heading);
  --type-heading-spacing: ${type.spacing.heading};

  --type-label-xs: ${type.size.label.xs}rem;
  --type-label-s: ${type.size.label.s}rem;
  --type-label-m: ${type.size.label.m}rem;
  --type-label-l: ${type.size.label.l}rem;
  --type-label-weight: var(--type-weight-label);
  --type-label-spacing: ${type.spacing.label};

  --type-text-xs: ${type.size.text.xs}rem;
  --type-text-s: ${type.size.text.s}rem;
  --type-text-m: ${type.size.text.m}rem;
  --type-text-l: ${type.size.text.l}rem;
  --type-text-weight: var(--type-weight-text);
  --type-text-spacing: ${type.spacing.text};

  /* Convert font stacks to CSS vars */
  --font-primary: ${type.font.primary};
  --font-code: ${type.font.code};
  --font-emoji: ${type.font.emoji};

  /* Convert colour token to CSS vars */
  --colour-primary-darkest: ${colour.primary.darker};
  --colour-primary-darker: ${colour.primary.darker};
  --colour-primary-dark: ${colour.primary.dark};
  --colour-primary-base: ${colour.primary.base};
  --colour-primary-light: ${colour.primary.light};
  --colour-primary-lighter: ${colour.primary.lighter};
  --colour-primary-lightest: ${colour.primary.lightest};
  --colour-primary: var(--colour-primary-dark);

  --colour-secondary-darkest: ${colour.secondary.darker};
  --colour-secondary-darker: ${colour.secondary.darker};
  --colour-secondary-dark: ${colour.secondary.dark};
  --colour-secondary-base: ${colour.secondary.base};
  --colour-secondary-light: ${colour.secondary.light};
  --colour-secondary-lighter: ${colour.secondary.lighter};
  --colour-secondary-lightest: ${colour.secondary.lightest};
  --colour-secondary: var(--colour-secondary-base);

  --colour-negative-darkest: ${colour.negative.dark};
  --colour-negative-darker: ${colour.negative.dark};
  --colour-negative-dark: ${colour.negative.dark};
  --colour-negative-base: ${colour.negative.base};
  --colour-negative-light: ${colour.negative.light};
  --colour-negative-lighter: ${colour.negative.lighter};
  --colour-negative-lightest: ${colour.negative.lighter};
  --colour-negative: var(--colour-negative-base);

  --colour-warning-darkest: ${colour.warning.dark};
  --colour-warning-darker: ${colour.warning.dark};
  --colour-warning-dark: ${colour.warning.dark};
  --colour-warning-base: ${colour.warning.base};
  --colour-warning-light: ${colour.warning.light};
  --colour-warning-lighter: ${colour.warning.lighter};
  --colour-warning-lightest: ${colour.warning.lighter};
  --colour-warning: var(--colour-warning-base);

  --colour-positive-darkest: ${colour.positive.dark};
  --colour-positive-darker: ${colour.positive.dark};
  --colour-positive-dark: ${colour.positive.dark};
  --colour-positive-base: ${colour.positive.base};
  --colour-positive-light: ${colour.positive.light};
  --colour-positive-lighter: ${colour.positive.lighter};
  --colour-positive-lightest: ${colour.positive.lighter};
  --colour-positive: var(--colour-positive-base);

  --colour-text-dark: ${colour.text.dark};
  --colour-text-light: ${colour.text.light};
  --colour-text-medium: ${colour.text.medium};
  --colour-text-disabled: ${colour.text.disabled};

  --colour-background: ${colour.background};
  --colour-border: ${colour.border};
  --colour-surface: ${colour.surface};
  --colour-disabled: ${colour.disabled};

  /* American spelling alternatives */
  --color-primary-darker: var(--colour-primary-darker);
  --color-primary-dark: var(--colour-primary-dark);
  --color-primary-base: var(--colour-primary-base);
  --color-primary-light: var(--colour-primary-light);
  --color-primary-lighter: var(--colour-primary-lighter);
  --color-primary-lightest: var(--colour-primary-lightest);
  --color-primary: var(--colour-primary-dark);

  --color-secondary-darker: var(--colour-secondary-darker);
  --color-secondary-dark: var(--colour-secondary-dark);
  --color-secondary-base: var(--colour-secondary-base);
  --color-secondary-light: var(--colour-secondary-light);
  --color-secondary-lighter: var(--colour-secondary-lighter);
  --color-secondary-lightest: var(--colour-secondary-lightest);
  --color-secondary: var(--colour-secondary-base);

  --color-negative-dark: var(--colour-negative-dark);
  --color-negative-base: var(--colour-negative-base);
  --color-negative-light: var(--colour-negative-light);
  --color-negative-lighter: var(--colour-negative-lighter);

  --color-warning-dark: var(--colour-warning-dark);
  --color-warning-base: var(--colour-warning-base);
  --color-warning-light: var(--colour-warning-light);
  --color-warning-lighter: var(--colour-warning-lighter);

  --color-positive-dark: var(--colour-positive-dark);
  --color-positive-base: var(--colour-positive-base);
  --color-positive-light: var(--colour-positive-light);
  --color-positive-lighter: var(--colour-positive-lighter);

  --color-text-dark: var(--colour-text-dark);
  --color-text-light: var(--colour-text-light);
  --color-text-medium: var(--colour-text-medium);
  --color-text-disabled: var(--colour-text-disabled);

  --color-background: var(--colour-background);
  --color-border: var(--colour-border);
  --color-surface: var(--colour-surface);
  --color-disabled: var(--colour-disabled);
`

export const SupernovaGlobalStyles = createGlobalStyle`

  /* Set CSS custom properties */
  html {
    ${customProperties}
  }

  /* Set global styles and resets */
  body {
    ${bodyStyles}
  }
`
