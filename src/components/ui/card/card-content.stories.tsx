import { Meta, StoryObj } from '@storybook/react';
import { CardContent } from '@/components/ui/card';

const meta: Meta<typeof CardContent> = {
  title: 'Components/ui/card',
  component: CardContent,
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

type Story = StoryObj<typeof CardContent>;

export const ContentSmall: Story = {
  args: {
    padding: 'small',
  },
};
export const ContentMedium: Story = {
  args: {
    padding: 'medium',
  },
};
export const ContentLarge: Story = {
  args: {
    padding: 'large',
  },
};
