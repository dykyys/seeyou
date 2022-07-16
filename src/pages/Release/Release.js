import Footer from 'components/Footer';
import ReleaseHero from 'components/ReleaseHero';
import { ScrollToTop } from 'hooks/ScrollToTop';

const ReleaseNotes = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <ReleaseHero />
      </main>

      <Footer />
    </>
  );
};

export default ReleaseNotes;
