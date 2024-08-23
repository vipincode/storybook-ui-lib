import { CardTitle } from '@/components/ui/card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardTitle> = {
  title: 'Components/ui/card',
  component: CardTitle,
  args: {
    variant: 'medium',
    children: 'Card Title Text',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardTitle>;

export const TitleSmall: Story = {
  args: {
    variant: 'small',
  },
};
export const TitleMedium: Story = {
  args: {
    variant: 'medium',
  },
};
export const TitleLarge: Story = {
  args: {
    variant: 'large',
  },
};
