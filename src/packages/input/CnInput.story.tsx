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

export const Primary: Story = {
  args: {
    placeholder: 'Im placeholder',
  }
}
