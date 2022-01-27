import { FC } from 'react';
import styles from './TheFooterNav.module.scss';

export const TheFooterNav: FC = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>
          Services
        </a>
        <ul className={styles.subnav}>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Mobile Application Development
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Game Development Outsourcing
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              VR App Development
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Dedicated Developers
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              SDK Development
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              3D Modeling services
            </a>
          </li>
        </ul>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>
          Technologies
        </a>
        <ul className={styles.subnav}>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Android
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              IOS
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Unity
            </a>
          </li>
        </ul>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>
          products
        </a>
        <ul className={styles.subnavi}>
          <li className={styles.subnavi__item}>
            <a href="#" className={styles.subnavi__link}>
              Portfolio
            </a>
          </li>
          <li className={styles.subnavi__item}>
            <a href="#" className={styles.subnavi__link}>
              Blog
            </a>
          </li>
        </ul>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>
          About us
        </a>
        <ul className={styles.subnav}>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Contacts
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Team
            </a>
          </li>
          <li className={styles.subnav__item}>
            <a href="#" className={styles.subnav__link}>
              Join the Team
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TheFooterNav;
