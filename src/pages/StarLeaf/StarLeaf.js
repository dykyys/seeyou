import Support from '../../components/Home/Support/Support';
import StarHero from '../../components/StartLeaf/StarLeaf';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Star = () => {
  ScrollToTop();
  return (
    <>
      <StarHero />
      <Support />
    </>
  );
};
export default Star;
