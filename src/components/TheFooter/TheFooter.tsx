import { FC } from 'react';
import { Container, Logo } from '../common';
import { TheFooterNav, TheFooterSocial } from './components';
import styles from './TheFooter.module.scss';

export const TheFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.footer__left}>
          <Logo className={styles.footer__left_logo} />
          <TheFooterSocial />
        </div>
        <TheFooterNav />
      </Container>
    </footer>
  );
};

export default TheFooter;
