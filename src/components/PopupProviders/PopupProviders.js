import { PopLink, Link, PopButton, PopupBox } from './PopupProviders.styled';
import { Popup } from 'semantic-ui-react';

const PopupPro= () => (
  <Popup
    content={
      <PopupBox>
        <Link to="/providers-zoom"> Google Meet</Link>
        <Link to="/providers-zoom"> Microsoft Teams</Link>
        <Link to="/providers"> Webex by Cisco</Link>
        <Link to="/providers-zoom"> Zoom</Link>
        <Link to="/providers-zoom"> Avaya</Link>
        <Link to="/providers-zoom"> Bluejeans</Link>
        <Link to="/providers-zoom"> Huawei</Link>
        <Link to="/providers-zoom"> Lifesize</Link>
        <Link to="/providers-zoom"> GoTo Meeting</Link>
        <Link to="/providers-zoom"> Starleaf</Link>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>Conference Providers</PopButton>}
  />
);

export default PopupPro;

