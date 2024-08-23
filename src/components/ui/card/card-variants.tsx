import { cva, type VariantProps } from 'class-variance-authority';

/**
 * @Card
 */
export const cardVariants = cva(['rounded-lg', 'shadow-md', 'overflow-hidden', 'dark:text-white'], {
  variants: {
    padding: {
      none: 'p-0',
      small: ['p-4'],
      medium: ['p-6'],
      large: ['p-8'],
    },
    shadow: {
      none: '',
      small: 'shadow-sm',
      medium: 'shadow-md',
      large: 'shadow-lg',
    },
  },
  defaultVariants: {
    padding: 'none',
    shadow: 'medium',
  },
});

export type CardVariantsProps = VariantProps<typeof cardVariants>;

/**
 * @CardTitle
 */

export const cardTitleVariants = cva(['tracking-normal'], {
  variants: {
    variant: {
      small: ['text-sm', 'font-normal', 'leading-6', 'dark:text-white'],
      medium: ['text-xl', 'font-semibold', 'leading-7', 'dark:text-white'],
      large: ['text-2xl', 'font-bold', 'leading-9', 'dark:text-white'],
    },
    margin: {
      none: 'mb-0',
      small: 'mb-[5px]',
      medium: 'mb-[10px]',
      large: 'mb-4',
    },
  },
  defaultVariants: {
    variant: 'medium',
    margin: 'none',
  },
});

export type CardTitleVariantProps = VariantProps<typeof cardTitleVariants>;

/**
 * @CardHeader
 */

export const cardHeaderVariants = cva(['flex', 'justify-between', 'items-center'], {
  variants: {
    padding: {
      small: ['px-4', 'py-1', 'h-8'],
      medium: ['px-4', 'py-1', 'h-9'],
      large: ['px-4', 'py-2', 'h-10'],
    },
    shadow: {
      small: ['border-b-[.5px]', 'border-b-primary-200'],
      medium: ['border-b', 'border-b-primary-200'],
      large: ['border-b-2', 'border-b-primary-200'],
    },
  },
  defaultVariants: {
    padding: 'medium',
    shadow: 'medium',
  },
});

export type CardHeaderVariantsProps = VariantProps<typeof cardHeaderVariants>;

/**
 * @CardContent
 */

export const cardContentVariants = cva(['px-4', 'py-4'], {
  variants: {
    padding: {
      small: ['px-2', 'py-2'],
      medium: ['px-6', 'py-6'],
      large: ['px-8', 'py-8'],
    },
  },
});

export type CardContentVariantsProps = VariantProps<typeof cardContentVariants>;

/**
 * @CardDescription
 */
export const cardDescriptionVariants = cva(['p-0'], {
  variants: {
    padding: {
      small: ['px-2', 'py-2'],
      medium: ['px-3', 'py-3'],
      large: ['px-4', 'py-4'],
    },
  },
});

export type CardDescriptionVariantsProps = VariantProps<typeof cardDescriptionVariants>;

/**
 * @CardFooter
 */

export const cardFooterVariants = cva(['flex', 'justify-between', 'items-center'], {
  variants: {
    padding: {
      small: ['px-4', 'py-1', 'h-8'],
      medium: ['px-4', 'py-1', 'h-9'],
      large: ['px-4', 'py-2', 'h-10'],
    },
    shadow: {
      none: '',
      small: ['border-t-[.5px]', 'border-t-primary-200'],
      medium: ['border-t', 'border-t-primary-200'],
      large: ['border-t-2', 'border-t-primary-200'],
    },
  },
  defaultVariants: {
    padding: 'medium',
    shadow: 'medium',
  },
});

export type CardFooterVariantsProps = VariantProps<typeof cardFooterVariants>;
