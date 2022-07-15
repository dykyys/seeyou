import Support from '../../components/Home/Support/Support';
import GoogleHero from '../../components/GoogleMeet/';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Google = () => {
  ScrollToTop();
  return (
    <>
      <GoogleHero />
      <Support />
    </>
  );
};
export default Google;