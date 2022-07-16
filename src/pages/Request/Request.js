import Support from '../../components/Home/Support/Support';
import RequestHero from '../../components/Request';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Request = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <RequestHero />
      </main>
      <Support />
    </>
  );
};
export default Request;
