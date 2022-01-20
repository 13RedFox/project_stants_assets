import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '..';
import { Routes } from '../../../constants';
import styles from './Logo.module.scss';

export interface LogoProps {
  withText?: boolean;
}

export const Logo: FC<LogoProps> = ({ withText = false }) => {
  return (
    <Link href={Routes.HOME}>
      <a className={styles.logo}>
        <Icon name="logo" className={styles.logo__icon} />
        {withText && <h1 className={styles.logo__text}>stan’s assets</h1>}
      </a>
    </Link>
  );
};

export default Logo;
