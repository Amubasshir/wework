'use client';

import AuthWrapper from './components/AuthWrapper';
import Companies from './components/landing/Companies';
import Everything from './components/landing/Everything';
import HeroBanner from './components/landing/HeroBanner';
import JoinWework from './components/landing/JoinWework';
import PopularServices from './components/landing/PopularServices';
import WeworkBusiness from './components/landing/WeworkBusiness';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <WeworkBusiness />
      <JoinWework />
      <AuthWrapper />
    </main>
  );
}
