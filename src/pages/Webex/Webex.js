import Support from '../../components/Home/Support/Support';
import WebexHero from '../../components/Webex';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Webex = () => {
  ScrollToTop();
  return (
    <>
      <WebexHero />
      <Support />
    </>
  );
};
export default Webex;
