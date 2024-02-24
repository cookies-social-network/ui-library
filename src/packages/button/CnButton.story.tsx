import {CnButton} from "./CnButton";
import {Meta, StoryObj} from "@storybook/react";
import {IconPlus} from "../../icons";

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
      prefixIcon: <IconPlus />,
        appearance: 'filled'
    },
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Label',
    appearance: 'filled',
    disabled: true,
    prefixIcon: <IconPlus />,
  }
}

export const PrimaryWithoutIcon: Story = {
  args: {
    type: 'button',
    children: 'Label',
    appearance: 'filled'
  },
}

export const Outlined: Story = {
    args: {
        children: 'Label',
        appearance: 'outlined',
      prefixIcon: <IconPlus />,
    },
};

export const OutlinedDisabled: Story = {
  args: {
    children: 'Label',
    appearance: 'outlined',
    disabled: true,
    prefixIcon: <IconPlus />,
  },
};

export const Text: Story = {
  args: {
    children: 'Label',
    appearance: 'text',
  },
};

export const TextDisabled: Story = {
  args: {
    children: 'Label',
    appearance: 'text',
    disabled: true,
  },
};


export const Elevated: Story = {
  args: {
    children: 'Label',
    appearance: 'elevated',
  },
};

export const ElevatedDisabled: Story = {
  args: {
    children: 'Label',
    appearance: 'elevated',
    disabled: true,
  },
};

export const Tonal: Story = {
  args: {
    children: 'Label',
    appearance: 'tonal',
  },
};

export const TonalDisabled: Story = {
  args: {
    children: 'Label',
    appearance: 'tonal',
    disabled: true,
  },
};

