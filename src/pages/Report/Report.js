import ReportForm from '../../components/Report/ReportForm';
import Support from 'components/Home/Support/Support';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Report = () => {
  ScrollToTop();
  return (
    <>
      <ReportForm />
      <Support />
    </>
  );
};
export default Report;
