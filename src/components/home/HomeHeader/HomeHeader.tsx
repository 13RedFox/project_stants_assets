import { FC } from 'react';
import { Button, Container } from '../../common';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import classNames from 'classnames';
import styles from './HomeHeader.module.scss';

interface SliderProps {
  id: number;
  bg: string;
  title: string;
  description: string;
}

const slides: SliderProps[] = [
  {
    id: 0,
    title: 'FOCUS ON THE PRODUCT AND LET US DO THE REST!',
    description:
      'We’re an Indian software development company focused on just one thing - offshore software development services. We have 16+ years of experience and a team of 450+ developers working efficiently to deliver unique solutions to start-ups, software development companies, enterprises, and digital agencies to simplify their IT outsourcing experience & reduce time/cost to market.',
    bg: 'purple',
  },
  {
    id: 1,
    title: 'FOCUS ON THE PRODUCT AND LET US DO THE REST!',
    description:
      'We’re an Indian software development company focused on just one thing - offshore software development services. We have 16+ years of experience and a team of 450+ developers working efficiently to deliver unique solutions to start-ups, software development companies, enterprises, and digital agencies to simplify their IT outsourcing experience & reduce time/cost to market.',
    bg: 'orange',
  },
];

export const HomeHeader: FC = () => {
  return (
    <section className={styles.header}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {[] &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={classNames(styles.header_slider, styles[slide.bg])}>
                <Container>
                  <div className={styles.header__wrapper}>
                    <h2 className={styles.header__wrapper_title}>{slide.title}</h2>
                    <p className={styles.header__wrapper_description}>{slide.description}</p>
                    <div className={styles.header__buttons}>
                      <Button type="secondary" className={styles.header__btn}>
                        more
                      </Button>
                      <Button>contact us</Button>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default HomeHeader;
