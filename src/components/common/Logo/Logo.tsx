import { FC } from 'react';
import { Icon } from '..';
import styles from './Logo.module.scss';

export interface LogoProps {
  withText?: boolean;
}

export const Logo: FC<LogoProps> = ({ withText = false }) => {
  return (
    <div className={styles.logo}>
      <Icon name="logo" className={styles.logo__icon} />
      {withText && <h1 className={styles.logo__text}>stan’s assets</h1>}
    </div>
  );
};

export default Logo;
