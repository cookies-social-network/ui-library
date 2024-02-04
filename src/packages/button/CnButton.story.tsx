import {CnButton} from "./CnButton";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'CnButton',
    component: CnButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CnButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        type: 'button',
        children: 'Пока',
        appearance: 'primary'
    },
}

export const Secondary: Story = {
    args: {
        type: 'submit',
        children: 'Привет',
        appearance: 'secondary'
    },
};
