import { PopLink, Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
import termsOfService from '../../PDF/SEEYOU_TERMS_OF_SERVICE.pdf';
import { isMobile } from 'react-device-detect';
// import MediaQuery from 'components/MediaQuery';

const PopupHeader = () => {
  console.log(isMobile);
  console.log(isMobile ? 'bottom right' : 'bottom left');
  return (
    <Popup
      content={
        <PopupBox>
          <Link to='/terms' target="_blank" >
            Terms of service
          </Link>
          <Link to="/privacy" target="_blank">Privacy Policy</Link>
          <Link to="/delete-account"> Delete Account</Link>
          <Link to="/end-to-end-encryption"> E2E Encryption</Link>
          <Link to="/problem">Report a Problem</Link>
          <Link to="/feature">Suggest a Feature</Link>
        </PopupBox>
      }
      on={['focus', 'hover']}
      position={isMobile ? 'bottom right' : 'bottom left'}
      pinned
      hoverable
      style={{ zIndex: '2' }}
      trigger={
        <PopButton style={{ width: '100%', textAlign: 'left' }}>More</PopButton>
      }
    />
  );
};

export default PopupHeader;
