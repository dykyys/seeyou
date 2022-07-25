import {
  SupportSection,
  SupportContainer,
  Title,
  Box,
  BoxIMG,
  SupportLi,
  SupportUl,
  Image
} from './Support.styled';
import MediaQuery from 'components/MediaQuery';
import {  } from '@chakra-ui/react';
import AppleStore from 'image/support/App_store_footer.svg';
import GooglePlay from 'image/support/Google_play_footer.svg';
import MacOS from 'image/support/MacOS_footer.svg';
import Windows from 'image/support/Windows_footer.svg';
import Webex from 'image/support/Webex.svg';
import Zoom from 'image/support/Zoom.svg';

const Support = () => {
  return (
    <SupportSection>
      <SupportContainer>
        <MediaQuery device={'mobile'}>
        <BoxIMG>
          <SupportUl>
            <SupportLi>
              <a href='https://play.google.com/store/apps/details?id=eu.seeyou.app&gl=IE'>
                <Image src={GooglePlay} htmlWidth="150px" alt="GooglePlay" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://apps.apple.com/no/app/seeyou/id1622041916'>
                <Image src={AppleStore} htmlWidth="150px" alt="AppleStore" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
          </SupportUl>
        </BoxIMG>
        </MediaQuery>
        <MediaQuery device={'tablet'}>
        <BoxIMG>
          <SupportUl>
            <SupportLi>
              <a href='https://downloads.seeyou.eu/desktop/windows/SEEYOU-latest.exe'>
                <Image src={Windows} htmlWidth="150px" alt="Windows" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://downloads.seeyou.eu/desktop/mac/SEEYOU-latest.dmg'>
                <Image src={MacOS} htmlWidth="150px" alt="MacOS" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://play.google.com/store/apps/details?id=eu.seeyou.app&gl=IE'>
                <Image src={GooglePlay} htmlWidth="150px" alt="GooglePlay" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://apps.apple.com/no/app/seeyou/id1622041916'>
                <Image src={AppleStore} htmlWidth="150px" alt="AppleStore" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://apphub.webex.com/applications/seeyou-seeyou'>
                <Image src={Webex} htmlWidth="150px" alt="Webex" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://marketplace.zoom.us/apps/XA5ZOXzyQl-DumfjdGYa_Q'>
                <Image src={Zoom} htmlWidth="150px" alt="Webex" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
          </SupportUl>
        </BoxIMG>
        </MediaQuery>
        <MediaQuery device={'default'}>
        <BoxIMG>
          <SupportUl>
            <SupportLi>
              <a href='https://downloads.seeyou.eu/desktop/windows/SEEYOU-latest.exe'>
                <Image src={Windows} htmlWidth="150px" alt="Windows" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://downloads.seeyou.eu/desktop/mac/SEEYOU-latest.dmg'>
                <Image src={MacOS} htmlWidth="150px" alt="MacOS" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://play.google.com/store/apps/details?id=eu.seeyou.app&gl=IE'>
                <Image src={GooglePlay} htmlWidth="150px" alt="GooglePlay" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://apps.apple.com/no/app/seeyou/id1622041916'>
                <Image src={AppleStore} htmlWidth="150px" alt="AppleStore" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://apphub.webex.com/applications/seeyou-seeyou'>
                <Image src={Webex} htmlWidth="150px" alt="Webex" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='https://marketplace.zoom.us/apps/XA5ZOXzyQl-DumfjdGYa_Q'>
                <Image src={Zoom} htmlWidth="150px" alt="Webex" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
          </SupportUl>
        </BoxIMG>
        </MediaQuery>
      </SupportContainer>
      {/*
      <Container>
          <Discriptionltd>
          SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland
          </Discriptionltd>
      </Container>
      */}
    </SupportSection>
  );
};
export default Support;
