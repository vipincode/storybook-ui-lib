import { Meta, StoryObj } from '@storybook/react';
import { CardFooter } from '@/components/ui/card';

const meta: Meta<typeof CardFooter> = {
  title: 'Components/ui/card',
  component: CardFooter,
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

type Story = StoryObj<typeof CardFooter>;

export const FooterSmall: Story = {
  args: {
    padding: 'small',
  },
};
export const FooterMedium: Story = {
  args: {
    padding: 'medium',
  },
};
export const FooterLarge: Story = {
  args: {
    padding: 'large',
  },
};
