import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { $dangerColor, $primaryColor, $successColor } from '../../../styled/variables';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Form/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Common: Story = {
  args: {
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    styleType: 'outline',
    color: $primaryColor,
  },
};

export const Transparent: Story = {
  args: {
    children: 'Button',
    styleType: 'transparent',
    color: $primaryColor,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    state: 'disabled',
  },
};

export const Pending: Story = {
  args: {
    children: 'Button',
    state: 'pending',
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    backgroundColor: $dangerColor,
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    backgroundColor: $successColor,
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};
