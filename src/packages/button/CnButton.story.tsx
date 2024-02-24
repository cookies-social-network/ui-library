import {CnButton} from "./CnButton";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'CnButton',
    component: CnButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CnButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        type: 'button',
        children: 'Label',
        appearance: 'filled'
    },
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Label',
    appearance: 'filled',
    disabled: true,
  }
}

export const Outlined: Story = {
    args: {
        children: 'Label',
        appearance: 'outlined'
    },
};
