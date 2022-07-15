import Support from '../../components/Home/Support/Support';
import BlueHero from '../../components/Bluejeans/Blujeans';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Bluejeans = () => {
  ScrollToTop();
  return (
    <>
      <BlueHero />
      <Support />
    </>
  );
};
export default Bluejeans;