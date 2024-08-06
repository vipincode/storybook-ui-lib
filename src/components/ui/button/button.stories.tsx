import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Medium: Story = {
  args: {
    size: 'medium',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
  },
};
export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
