import AuthWrapper from './components/AuthWrapper';
import Companies from './components/landing/Companies';
import Everything from './components/landing/Everything';
import HeroBanner from './components/landing/HeroBanner';
import JoinWework from './components/landing/JoinWework';
import PopularServices from './components/landing/PopularServices';
import WeworkBusiness from './components/landing/WeworkBusiness';
import { useStateProvider } from './context/StateContext';

export default function Home() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();
  return (
    <main>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <WeworkBusiness />
      <JoinWework />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? 'login' : 'signup'} />
      )}
    </main>
  );
}
