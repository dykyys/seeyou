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
        <Link to="/"> Avaya</Link>
        <Link to="/"> Bluejeans</Link>
        <Link to="/"> Huawei</Link>
        <Link to="/"> Lifesize</Link>
        <Link to="/"> GoTo Meeting</Link>
        <Link to="/"> Starleaf</Link>
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

