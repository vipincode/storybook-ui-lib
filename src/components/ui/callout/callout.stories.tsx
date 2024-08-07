import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '@/components/ui/callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/ui/Callout',
  component: Callout,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sed minus rerum reprehenderit! Repudiandae sed consectetur, minus voluptates magni cum similique. Quam sint quidem est corporis nulla officia, expedita modi!',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'success', 'warning', 'danger'],
    },
  },
};

export default meta;

export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};
