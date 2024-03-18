import { Meta, StoryObj } from '@storybook/react'

import { CnUpload } from '@/packages/upload/ui/CnUpload'

const meta = {
  title: 'CnUpload',
  component: CnUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof CnUpload>

export default meta

type Story = StoryObj<typeof meta>

export const SingleFile: Story = {
  args: {
    multiple: false,
  }
}

export const Multiple: Story = {
  args: {
    multiple: true,
  }
}
