import PrivacyHero from 'components/PrivacyHero';
import PrivacyDescr from 'components/PrivacyDescr';
import Footer from 'components/Footer';
import { ScrollToTop } from 'hooks/ScrollToTop';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const Privacy = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <PrivacyHero />
        <PrivacyDescr />
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
