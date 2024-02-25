import {Meta, StoryObj} from "@storybook/react";
import {CnInput} from "./CnInput.tsx";

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
