import Image from 'next/image';
import { FC, useState } from 'react';
import { Button, Container, Icon } from '../../common';
import ReviewLogo from '../../../assets/images/review_logo.png';
import styles from './HomeReviews.module.scss';
import { HomeReviewsRating } from './components/HomeReviewsRating';

export const HomeReviews: FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(5);

  return (
    <section className={styles.review}>
      <Container>
        <div className={styles.review__wrapper}>
          <Image src={ReviewLogo} alt="ReviewLogo" />
          <div className={styles.review__inner}>
            <span className={styles.review__inner_rating}>{currentValue}.0</span>
            <HomeReviewsRating currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <span className={styles.review__inner_descr}>2 reviews</span>
          </div>
          <Button className={styles.review__wrapper_btn}>Check out reviews</Button>
        </div>
      </Container>
    </section>
  );
};

export default HomeReviews;
