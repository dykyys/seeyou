import Support from '../../components/Home/Support/Support';
import MicroHero from '../../components/MicrosoftTeams/Microsoft';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Microsoft = () => {
  ScrollToTop();
  return (
    <>
      <MicroHero />
      <Support />
    </>
  );
};
export default Microsoft;