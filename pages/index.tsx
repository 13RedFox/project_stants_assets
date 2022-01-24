import type { NextPage } from 'next';
import { SocialPanel } from '../src/components/common';
import { HomeHeader, HomeReviews, HomeTechnologies } from '../src/components/home';
import { TheNavigation } from '../src/components/TheNavigation';

const Home: NextPage = () => {
  return (
    <>
      <TheNavigation />
      <SocialPanel />
      <main>
        <HomeHeader />
        <HomeTechnologies />
        <HomeReviews />
      </main>
    </>
  );
};

export default Home;
