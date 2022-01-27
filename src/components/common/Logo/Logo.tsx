import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '..';
import { Routes } from '../../../constants';
import styles from './Logo.module.scss';

export interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href={Routes.HOME}>
      <a className={classNames(styles.logo, className)}>
        <Icon name="logo" className={styles.logo__icon} />
        <h1 className={styles.logo__text}>stan’s assets</h1>
      </a>
    </Link>
  );
};

export default Logo;
