import React from 'react'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, ButtonTypes } from './Button'

export default {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'An interactive element for triggering basic user functionality'
  },
  args: {
    label: 'Label',
    onButtonPress: action('Button pressed'),
    palette: 'primary',
    shade: 'light',
    size: 'small',
    fillAmount: 'full'
  },
  argTypes: {
    label: {},
    onButtonPress: {
      table: {
        disable: true
      }
    },
    colour: {
      table: {
        disable: true
      }
    },
    fillAmount: {
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      }
    },
    palette: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'positive', 'warning', 'negative']
      }
    },
    shade: {
      control: {
        type: 'select',
        options: ['darkest', 'darker', 'dark', 'base', 'light', 'lighter', 'lightest']
      }
    }
  }
}

interface ButtonStoryTypes extends ButtonTypes {
  palette: string
  shade: string
}

// eslint-disable-next-line react/prop-types
const Template: Story<ButtonStoryTypes> = ({ palette, shade, ...args }) => {
  // Allows control of colour prop to be split into more manageable drop downs
  const colour = `${palette}-${shade}`
  return <Button {...args} colour={colour} />
}

// The default Button setup
export const Default = Template.bind({})
Default.parameters = {
  docs: {
    storyDescription: 'The default configuration'
  }
}
Default.argTypes = {
  onButtonPress: {
    table: {
      disable: false
    },
    control: false
  },
  colour: {
    table: {
      disable: false
    },
    control: false
  },
  palette: {
    table: {
      disable: true
    }
  },
  shade: {
    table: {
      disable: true
    }
  }
}

// A button with only coloured outline
export const Outline = Template.bind({})
Outline.args = { fillAmount: 'partial' }
Outline.parameters = {
  docs: {
    storyDescription: 'Button with outline style'
  }
}

// A large button
export const Large = Template.bind({})
Large.args = { size: 'large' }
Large.parameters = {
  docs: {
    storyDescription: 'A large Button'
  }
}
