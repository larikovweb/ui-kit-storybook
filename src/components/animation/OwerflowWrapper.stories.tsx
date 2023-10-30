import type { Meta, StoryObj } from '@storybook/react';
import { OverflowWrapper } from './OverflowWrapper';
import { Plugs } from '../Plugs';

const meta: Meta = {
  title: 'Example/Animation/OverflowWrapper',
  component: OverflowWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OverflowWrapper>;

export const Template: Story = {
  render: (args) => {
    return (
      <OverflowWrapper {...args}>
        <Plugs.FullWidthCard>VISIBLE CONTENT</Plugs.FullWidthCard>
        <Plugs.FullWidthCard>HIDDEN CONTENT</Plugs.FullWidthCard>
      </OverflowWrapper>
    );
  },
  args: {
    open: false,
  },
};
