import { ScrollToTop } from 'hooks/ScrollToTop';
import privacyStatement from '../../PDF/SEEYOU_PRIVACY_STATEMENT.pdf';
import Redirect from 'react-router-dom';

// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const Privacy = () => {
  ScrollToTop();
  window.location.replace(privacyStatement);
  return (
    <>
      
    </>
  );
};

export default Privacy;
