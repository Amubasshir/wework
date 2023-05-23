'use client';
import Companies from './components/Companies';
import Everything from './components/Everything';
import HeroBanner from './components/HeroBanner';
import JoinWework from './components/JoinWework';
import PopularServices from './components/PopularServices';
import WeworkBusiness from './components/WeworkBusiness';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <WeworkBusiness />
      <JoinWework />
    </main>
  );
}
