import { PopLink, Link, PopButton, PopupBox } from './PopupProviders.styled';
import { Popup } from 'semantic-ui-react';

const PopupPro= () => (
  <Popup
    content={
      <PopupBox>
        <Link to="/providers-google"> Google Meet</Link>
        <Link to="/providers-microsoft"> Microsoft Teams</Link>
        <Link to="/providers-webex"> Webex by Cisco</Link>
        <Link to="/providers-zoom"> Zoom</Link>
        <Link to="/providers-bluejeans"> Bluejeans</Link>
        <Link to="/providers-huawei"> Huawei</Link>
        <Link to="/providers-starleaf"> Starleaf</Link>
      </PopupBox>
    }
    on={['focus', 'hover', 'click']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>Conference Providers</PopButton>}
  />
);

export default PopupPro;

