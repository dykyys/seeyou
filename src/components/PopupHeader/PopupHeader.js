import { PopLink, Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup} from 'semantic-ui-react';
import termsOfService from '../../PDF/SEEYOU_TERMS_OF_SERVICE.pdf';
import privacyStatement from '../../PDF/SEEYOU_PRIVACY_STATEMENT.pdf';
import MediaQuery from 'components/MediaQuery';



const PopupHeader = () => (
  
  <Popup
    content={
      
      <PopupBox>
        <PopLink href={termsOfService} target="_blank">
          Terms of service
        </PopLink>
        <PopLink href={privacyStatement} target="_blank">
          Privacy Policy
        </PopLink>
        <Link to="/delete-account"> Delete Account</Link>
        <Link to="/end-to-end-encryption"> E2E Encryption</Link>
        <Link to="/problem">Report a Problem</Link>
        <Link to="/feature">Suggest a Feature</Link>
      </PopupBox>
    }
    
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>More</PopButton>}
    
  />
);

export default PopupHeader;

