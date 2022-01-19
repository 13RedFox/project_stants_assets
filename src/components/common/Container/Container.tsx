import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

export interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames(styles.container, className)}> {children}</div>;
};

export default Container;
