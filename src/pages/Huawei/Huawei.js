import Support from '../../components/Home/Support/Support';
import HuaHero from '../../components/Huawei/Huawei';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Huawei = () => {
  ScrollToTop();
  return (
    <>
      <HuaHero />
      <Support />
    </>
  );
};
export default Huawei;
