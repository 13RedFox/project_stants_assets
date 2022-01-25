import { Dispatch, FC, SetStateAction, useState } from 'react';
import { IoStar } from 'react-icons/io5';
import styles from './HomeReviewsRating.module.scss';

export interface HomeReviewsRatingProps {
  currentValue: number;
  setCurrentValue: Dispatch<SetStateAction<number>>;
}
interface ColorsProps {
  green: string;
  gray: string;
}

const colors: ColorsProps = {
  green: '#06B25F',
  gray: '#E1E1E1',
};

export const HomeReviewsRating: FC<HomeReviewsRatingProps> = ({
  currentValue,
  setCurrentValue,
}) => {
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars: number[] = Array(5).fill(0);

  const handleClick = (value: number) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value: any) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      {[] &&
        stars.map((_, idx) => (
          <IoStar
            key={idx}
            className={styles.icon}
            color={(hoverValue || currentValue) > idx ? colors.green : colors.gray}
            onClick={() => handleClick(idx + 1)}
            onMouseOver={() => handleMouseOver(idx + 1)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
    </div>
  );
};

export default HomeReviewsRating;
