import Support from '../../components/Home/Support/Support';
import ProblemHero from '../../components/Problem';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Problem = () => {
  ScrollToTop();
  return (
    <>
      <ProblemHero />
      <Support />
    </>
  );
};
export default Problem;
