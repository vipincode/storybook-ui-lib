import { Meta, StoryObj } from '@storybook/react';
import { CardDescription } from '@/components/ui/card';

const meta: Meta<typeof CardDescription> = {
  title: 'Components/ui/card',
  component: CardDescription,
  args: {
    padding: 'medium',
    children: 'Card Footer text',
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardDescription>;

export const DescriptionSmall: Story = {
  args: {
    padding: 'small',
  },
};
export const DescriptionMedium: Story = {
  args: {
    padding: 'medium',
  },
};
export const DescriptionLarge: Story = {
  args: {
    padding: 'large',
  },
};
