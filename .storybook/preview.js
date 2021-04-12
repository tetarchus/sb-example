import React from 'react'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { SupernovaGlobalStyles } from '../src/shared/global'

// Add global CSS styles to Story pages and Story blocks
export const decorators = [
  (Story) => (
    <>
      <SupernovaGlobalStyles />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false
  },
  // Add global CSS styles to docs pages
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <SupernovaGlobalStyles />
        {children}
      </DocsContainer>
    )
  },
  options: {
    // Display order in Storybook
    storySort: {
      order: ['Design System', 'Primitives', 'Components']
    }
  }
}
