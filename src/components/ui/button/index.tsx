import { ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variant';

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) => {
  return <button className={variants({ variant, size })} {...props} />;
};

//=================================================================================================
//import clsx from 'clsx';
//import styles from './button.module.css';
// type ButtonProps = ComponentProps<'button'> & {
//   variant?: 'primary' | 'secondary' | 'destructive';
//   size?: 'small' | 'medium' | 'large';
// };

// export const Button = ({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) => {
//   const classes = clsx(styles.button, styles[variant], styles[size], className);
//   return (
//     <button
//       className={classes}
//       {...props}
//     />
//   );
// };
//=================================================================================================
// export const Button = ({ variant, ...props }: ButtonProps) => {
//   return (
//     <button
//       className={clsx(
//         styles.button,
//         variant === 'secondary' && styles.secondary,
//         variant === 'destructive' && styles.destructive
//       )}
//       {...props}
//     />
//   );
// };
