import { PopLink, PopButton, PopupBox } from './DownloadWin.styled';
import { Popup } from 'semantic-ui-react';
import Win from '../../image/Button/Win.svg'

const DownloadWin = () => (
  <Popup
     content={
      <PopupBox>
        <PopLink href='' target="">
          For Windows X32
        </PopLink>
        <PopLink href='' target="">
          For Windows X64
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
      }}><img src={Win}></img><p style={{ marginLeft:'10px'}}>SEEYOU for Windows</p></div></PopButton>}
  />
);

export default DownloadWin;
