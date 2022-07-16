import Support from '../../components/Home/Support/Support';
import DeleteHero from '../../components/DeleteAccount';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Delete = () => {
  ScrollToTop();
  return (
    <>
      <DeleteHero />
      <Support />
    </>
  );
};
export default Delete;
