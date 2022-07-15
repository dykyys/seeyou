import { PopLink, PopButton, PopupBox } from './DownloadMac.styled';
import { Popup } from 'semantic-ui-react';
import Mac from '../../image/Button/Mac.svg'

const DownloadMac = () => (
  <Popup
    content={
      <PopupBox>
        <PopLink href='' target="">
          For Macs with Intel processors
        </PopLink>
        <PopLink href='' target="">
          For Macs with Apple M1
        </PopLink>
      </PopupBox>
    }
    on={['click']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton><div style={{
      display: 'flex',
      margin: '0 auto',
      alignItems: 'center'
      }}><img src={Mac}></img><p style={{ marginLeft:'10px'}}>SEEYOU for Mac</p></div></PopButton>}
  />
);

export default DownloadMac;
