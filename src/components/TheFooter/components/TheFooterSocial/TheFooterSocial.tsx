import { FC } from 'react';
import { Icon } from '../../../common';
import styles from './TheFooterSocial.module.scss';

interface SocialProps {
  name: string;
  link: string;
}

const socials: SocialProps[] = [
  { name: 'facebook', link: 'https://www.facebook.com/' },
  { name: 'linked', link: 'https://www.linkedin.com/' },
  { name: 'whatsapp', link: 'https://www.whatsapp.com/' },
  { name: 'skype', link: 'https://www.skype.com/' },
  { name: 'github', link: 'https://github.com/' },
];

export const TheFooterSocial: FC = () => {
  return (
    <ul className={styles.social}>
      {[] &&
        socials.map((el) => (
          <li key={el.name} className={styles.social__item}>
            <a href={el.link} target="_blank" rel="noreferrer" className={styles.social__link}>
              <Icon name={el.name} className={styles.social__icon} />
            </a>
          </li>
        ))}
    </ul>
  );
};

export default TheFooterSocial;
