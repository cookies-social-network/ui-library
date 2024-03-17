import { Meta, StoryObj } from '@storybook/react'

import { CnInput } from '@/packages/input/ui/CnInput'

const meta = {
  title: 'CnInput',
  component: CnInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof CnInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Im placeholder',
  }
}

export const Filled: Story = {
  args: {
    placeholder: 'Im placeholder',
    value: 'Filled',
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  }
}

export const TypeEmail: Story = {
  args: {
    placeholder: 'Im placeholder',
    type: 'email',
  }
}

export const DisabledEmail: Story = {
  args: {
    placeholder: 'Im placeholder',
    type: 'email',
    disabled: true,
  }
}

export const WithError: Story = {
  args: {
    placeholder: 'Im placeholder',
    error: 'Some error',
  }
}
