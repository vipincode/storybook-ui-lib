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
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      // table: {
      //   disable: true,
      // },
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  // parameters: {
  //   design: {
  //     type: 'figma',
  //     url: 'https://www.figma.com/design/UO6JBisA4dO6dUCNj3QQqT/storybook-01?node-id=3-16&t=DYxICUghNt5CIW8S-4',
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/UO6JBisA4dO6dUCNj3QQqT/storybook-01?node-id=3-16&t=DYxICUghNt5CIW8S-4',
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/UO6JBisA4dO6dUCNj3QQqT/storybook-01?node-id=3-25&t=DYxICUghNt5CIW8S-4',
    },
  },
};
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/UO6JBisA4dO6dUCNj3QQqT/storybook-01?node-id=3-32&t=DYxICUghNt5CIW8S-4',
    },
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
