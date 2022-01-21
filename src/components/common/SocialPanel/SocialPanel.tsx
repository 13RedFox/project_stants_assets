import { FC } from 'react';
import { Icon } from '../Icon';
import styles from './SocialPanel.module.scss';

interface SocialProps {
  name: string;
  link: string;
}
const social: SocialProps[] = [
  { name: 'facebook', link: 'https://www.facebook.com/' },
  { name: 'linked', link: 'https://www.linkedin.com/' },
  { name: 'whatsapp', link: 'https://www.whatsapp.com/' },
  { name: 'skype', link: 'https://www.skype.com/' },
];

export const SocialPanel: FC = () => {
  return (
    <ul className={styles.social}>
      {[] &&
        social.map((el) => (
          <li className={styles.social__item} key={el.name}>
            <a href={el.link} target="_blank" className={styles.social__link} rel="noreferrer">
              <Icon name={el.name} className={styles.social__link_icon} />
            </a>
          </li>
        ))}
    </ul>
  );
};
export default SocialPanel;
