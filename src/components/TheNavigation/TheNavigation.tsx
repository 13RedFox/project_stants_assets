import classNames from 'classnames';
import { FC, useState } from 'react';
import { Button, Container, Icon, Logo } from '../common';
import styles from './TheNavigation.module.scss';

export const TheNavigation: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onShowMenu = (): void => {
    setShowMenu((prevState) => !showMenu);
  };

  return (
    <nav className={styles.nav}>
      {
        <div className={classNames(styles.nav__mobile, showMenu && styles.mobile)}>
          <a href="#" className={styles.nav__mobile_close} onClick={() => setShowMenu(false)}>
            close
          </a>
          <div className={styles.nav__mobile_menu}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  SERVICES
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  TECHNOLOGIES
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  PRODUCTS
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  BLOG
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#">
                  ABOUT US
                </a>
              </li>
            </ul>
            <Button className={styles.nav__button} type="secondary">
              contact us
            </Button>
          </div>
        </div>
      }
      <Container className={styles.container}>
        <Logo />
        <header className={styles.nav__header}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                SERVICES
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                TECHNOLOGIES
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                PRODUCTS
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                PORTFOLIO
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                BLOG
              </a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="#">
                ABOUT US
              </a>
            </li>
          </ul>
          <Button className={styles.nav__button} type="secondary">
            contact us
          </Button>
        </header>
        <Icon
          name="burger"
          className={classNames(styles.nav__burger, showMenu && styles.checked)}
          onClick={onShowMenu}
        />
      </Container>
    </nav>
  );
};

export default TheNavigation;
