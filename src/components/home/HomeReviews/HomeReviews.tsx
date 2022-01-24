import Image from 'next/image';
import { FC } from 'react';
import { Button, Container, Icon } from '../../common';
import ReviewLogo from '../../../assets/images/review_logo.png';
import styles from './HomeReviews.module.scss';

export const HomeReviews: FC = () => {
  return (
    <section className={styles.review}>
      <Container>
        <div className={styles.review__wrapper}>
          <Image src={ReviewLogo} alt="ReviewLogo" />
          <div className={styles.review__inner}>
            <span className={styles.review__inner_rating}>5.0</span>
            <Icon name="star" className={styles.review__inner_icon} />
            <Icon name="star" className={styles.review__inner_icon} />
            <Icon name="star" className={styles.review__inner_icon} />
            <Icon name="star" className={styles.review__inner_icon} />
            <Icon name="star" className={styles.review__inner_icon} />
            <span className={styles.review__inner_descr}>2 reviews</span>
          </div>
          <Button className={styles.review__wrapper_btn}>Check out reviews</Button>
        </div>
      </Container>
    </section>
  );
};

export default HomeReviews;
