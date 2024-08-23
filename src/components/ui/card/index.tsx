import { ComponentProps } from 'react';
import {
  type CardVariantsProps,
  cardVariants,
  type CardTitleVariantProps,
  cardTitleVariants,
  type CardHeaderVariantsProps,
  cardHeaderVariants,
  type CardFooterVariantsProps,
  cardFooterVariants,
  type CardDescriptionVariantsProps,
  cardDescriptionVariants,
  type CardContentVariantsProps,
  cardContentVariants,
} from './card-variants';

type CardProps = ComponentProps<'div'> & CardVariantsProps;
type CardHeaderProps = ComponentProps<'div'> & CardHeaderVariantsProps;
type CardTitleProps = ComponentProps<'div'> & CardTitleVariantProps;
type CardContentProps = ComponentProps<'div'> & CardContentVariantsProps;
type CardDescriptionProps = ComponentProps<'div'> & CardDescriptionVariantsProps;
type CardFooterProps = ComponentProps<'div'> & CardFooterVariantsProps;

export const CardHeader = ({ padding, shadow, children, className, ...props }: CardHeaderProps) => {
  return (
    <div className={cardHeaderVariants({ className, shadow, padding })} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ variant, margin, children, className, ...props }: CardTitleProps) => {
  return (
    <div className={cardTitleVariants({ margin, className, variant })} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ padding, children, className, ...props }: CardContentProps) => {
  return (
    <div className={cardContentVariants({ className, padding })} {...props}>
      {children}
    </div>
  );
};

export const CardDescription = ({ padding, children, className, ...props }: CardDescriptionProps) => {
  return (
    <div className={cardDescriptionVariants({ className, padding })} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ padding, shadow, children, className, ...props }: CardFooterProps) => {
  return (
    <div className={cardFooterVariants({ padding, shadow, className })} {...props}>
      {children}
    </div>
  );
};

export const Card = ({ padding, shadow, children, className, ...props }: CardProps) => {
  return (
    <div className={cardVariants({ padding, shadow, className })} {...props}>
      {children}
    </div>
  );
};
