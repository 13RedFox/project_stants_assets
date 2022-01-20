import type { NextPage } from 'next';
import { HomeHeader } from '../src/components/home/HomeHeader';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <HomeHeader />
    </>
  );
};

export default Home;
