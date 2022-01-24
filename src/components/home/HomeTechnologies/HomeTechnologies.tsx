import { FC } from 'react';
import { Container, Icon } from '../../common';
import styles from './HomeTechnologies.module.scss';

interface IconProps {
  bg: string;
  icon: string;
}

const icons: IconProps[] = [
  { bg: '#06B25F', icon: 'android' },
  { bg: '#276ED8', icon: 'apple' },
  { bg: '#84B5FF', icon: 'unity' },
];

export const HomeTechnologies: FC = () => {
  return (
    <section className={styles.technologies}>
      <Container className={styles.container}>
        <h2 className={styles.technologies__title}>Technologies</h2>
        <p className={styles.technologies__description}>
          <span className={styles.technologies__description_first}>Stan’s </span>
          <span className={styles.technologies__description_second}>Assets</span> is a team of
          developers that are committed to developing high quality and engaging entertainment
          software
        </p>
        <div className={styles.technologies__wrapper}>
          {[] &&
            icons.map((icon) => (
              <div
                className={styles.technologies__wrapper_icons}
                style={{ backgroundColor: icon.bg }}
                key={icon.icon}>
                <Icon name={icon.icon} className={styles.technologies__wrapper_icon} />
              </div>
            ))}
        </div>
        <p className={styles.technologies__subdescr}>
          Our engineers develop applications for the most popular platforms.
        </p>
      </Container>
    </section>
  );
};

export default HomeTechnologies;
