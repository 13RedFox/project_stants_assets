import Link from 'next/link';
import { FC } from 'react';
import { Icon } from '..';
import { Routes } from '../../../constants';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <Link href={Routes.HOME}>
      <a className={styles.logo}>
        <Icon name="logo" className={styles.logo__icon} />
        <h1 className={styles.logo__text}>stan’s assets</h1>
      </a>
    </Link>
  );
};

export default Logo;
