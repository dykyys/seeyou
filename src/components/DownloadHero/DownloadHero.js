import {
  Section,
  Title,
  HeroThumb,
  HeroDiscription,
  DownloadList,
  DownloadItem,
  HeroContainer,
  GlobalBox,
  Link,
  DownloadMobileTitle,
  DownloadMobileDiscription,
  HeroThumbMobile,
  DownloadMobileList,
  DownloadMobileItem,
  DownloadMobileLink,
  PopButton
} from './DownloadHero.styled.js';

import HeroIllustration from 'image/hero/hero.svg';
import DownloadMobiles from 'image/downloads/downloadsMobile.svg';
import DownloadAppStoreBtn from 'image/downloads/downloadAppStoreBtn.svg';
import DownloadPlayMarketBtn from 'image/downloads/downloadPlayMarketBtn.svg';

import Mac from '../../image/Button/Mac.svg'
import Win from '../../image/Button/Win.svg'
//Androin//Windows
const DownloadHero = () => {
  return (
    <Section>
      <HeroContainer>
        <HeroThumb>
          <img src={HeroIllustration} alt="hero illustration" />
        </HeroThumb>
        <GlobalBox>
          <Title>SEEYOU<br/>for Desktop</Title>
          <HeroDiscription>
            The Selfie Loop, hyper-linked Sticky Notes, saving of recordings in
            your Library, and in-conference rewind are all desktop features.
          </HeroDiscription>
          <DownloadList>
            <DownloadItem>
                              <PopButton href='https://downloads.seeyou.eu/desktop/mac/SEEYOU-latest.dmg'><div style={{
                        display: 'flex',
                        margin: '0 auto',
                        alignItems: 'center'
                        }}><img src={Mac}></img><p style={{ marginLeft:'10px'}}>SEEYOU for Mac</p></div></PopButton>
            </DownloadItem>
            <DownloadItem>
                      <PopButton href='https://downloads.seeyou.eu/desktop/windows/SEEYOU-latest.exe'><div style={{
               display: 'flex',
                margin: '0 auto',
                alignItems: 'center'
                }}><img src={Win}></img><p style={{ marginLeft:'10px'}}>SEEYOU for Windows</p></div></PopButton>
            </DownloadItem>
          </DownloadList>
        </GlobalBox>
      </HeroContainer>
      <HeroContainer>
        <HeroThumbMobile>
          <img src={DownloadMobiles} alt="download mobiles" />
        </HeroThumbMobile>
        <GlobalBox>
          <DownloadMobileTitle>SEEYOU for Mobile</DownloadMobileTitle>
          <DownloadMobileDiscription>
            To secure end-to-end encryption and fully privatize your data, your
            mobile must be enabled as the primary device for your SEEYOU
            communication
          </DownloadMobileDiscription>
          <DownloadMobileList>
            <DownloadMobileItem>
              <DownloadMobileLink href='https://apps.apple.com/no/app/seeyou/id1622041916'>
                <img src={DownloadAppStoreBtn} alt="Download App Store Btn" />
              </DownloadMobileLink>
            </DownloadMobileItem>
            <DownloadMobileItem>
              <DownloadMobileLink href='https://play.google.com/store/apps/details?id=eu.seeyou.app&gl=IE'>
                <img
                  src={DownloadPlayMarketBtn}
                  alt="Download Play Market Btn"
                />
              </DownloadMobileLink>
            </DownloadMobileItem>
          </DownloadMobileList>
        </GlobalBox>
      </HeroContainer>
    </Section>
  );
};
export default DownloadHero;
