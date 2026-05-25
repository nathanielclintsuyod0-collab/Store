import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { JoinGuide } from './components/JoinGuide/JoinGuide';
import { Store } from './components/Store';

export const LandingPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <JoinGuide />
      <Store />
    </main>
  );
};
