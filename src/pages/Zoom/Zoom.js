import Support from '../../components/Home/Support/Support';
import ZoomHero from '../../components/Zoom';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Zoom = () => {
  ScrollToTop();
  return (
    <>
      <ZoomHero />
      <Support />
    </>
  );
};
export default Zoom;
