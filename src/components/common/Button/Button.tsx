import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  type?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, type = 'primary', className }) => {
  return <button className={classNames(styles.button, className, styles[type])}>{children}</button>;
};

export default Button;
