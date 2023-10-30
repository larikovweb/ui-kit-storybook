import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Form/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Common: Story = {
  args: {
    placeholder: 'Placeholder',
    children: '',
    error: false,
  },
};

export const Additional: Story = {
  args: {
    placeholder: 'Placeholder',
    children: 'USD',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true,
    children: 'USD',
  },
};
