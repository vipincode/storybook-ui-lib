import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'Components/ui/card',
  component: Card,
  args: {
    padding: 'medium',
    children: 'Card Text',
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardXs: Story = {
  args: {
    padding: 'none',
  },
};
export const SmallCard: Story = {
  args: {
    padding: 'small',
  },
};

export const MediumCard: Story = {
  args: {
    padding: 'medium',
  },
};

export const LargeCard: Story = {
  args: {
    padding: 'large',
  },
};
