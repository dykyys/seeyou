import Support from '../../components/Home/Support/Support';
import EndHero from '../../components/EndEncryption';
import { ScrollToTop } from 'hooks/ScrollToTop';

const End = () => {
  ScrollToTop();
  return (
    <>
      <EndHero />
      <Support />
    </>
  );
};
export default End;
