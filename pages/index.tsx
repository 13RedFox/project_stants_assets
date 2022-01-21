import type { NextPage } from 'next';
import { SocialPanel } from '../src/components/common';
import { HomeHeader } from '../src/components/home/HomeHeader';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <SocialPanel />
      <main>
        <HomeHeader />
      </main>
    </>
  );
};

export default Home;
