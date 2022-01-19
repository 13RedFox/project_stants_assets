import classNames from 'classnames';
import { FC } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  className?: 'string';
  type?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, type = 'primary', className }) => {
  return <button className={classNames(styles.button, styles[type], className)}>{children}</button>;
};

export default Button;
