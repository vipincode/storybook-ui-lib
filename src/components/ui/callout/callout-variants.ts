import { cva, type VariantProps } from 'class-variance-authority';

export const variants = cva(['p-4', 'rounded-lg', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    variant: {
      primary: [
        'bg-primary-300',
        'border-primary-500',
        'text-primary-900',
        'dark:bg-primary-800',
        'dark:border-primary-900',
        'dark:text-primary-50',
      ],
      information: [
        'bg-information-300',
        'border-information-500',
        'text-information-900',
        'dark:bg-information-800',
        'dark:border-information-900',
        'dark:text-information-50',
      ],
      success: [
        'bg-success-300',
        'border-success-500',
        'text-success-900',
        'dark:bg-success-800',
        'dark:border-success-900',
        'dark:text-success-50',
      ],
      danger: [
        'bg-danger-300',
        'border-danger-500',
        'text-danger-900',
        'dark:bg-danger-800',
        'dark:border-danger-900',
        'dark:text-danger-50',
      ],
      warning: [
        'bg-warning-300',
        'border-warning-500',
        'text-warning-900',
        'dark:bg-warning-800',
        'dark:border-warning-900',
        'dark:text-warning-50',
      ],
    },
  },
});

export type CalloutVariants = VariantProps<typeof variants>;
