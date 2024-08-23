import { Meta, StoryObj } from '@storybook/react';
import { CardHeader } from '@/components/ui/card';

const meta: Meta<typeof CardHeader> = {
  title: 'Components/ui/card',
  component: CardHeader,
  args: {
    padding: 'medium',
    children: 'Card header heading',
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardHeader>;

export const HeaderSmall: Story = {
  args: {
    padding: 'small',
  },
};
export const HeaderMedium: Story = {
  args: {
    padding: 'medium',
  },
};
export const HeaderLarge: Story = {
  args: {
    padding: 'large',
  },
};
