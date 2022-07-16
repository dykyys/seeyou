import {
  PartnersDiv,
  PartnersUl,
  PartnersLi,
  ProTitle,
  GlobalSection,
  Image,
  Date
} from './Providers.styled';
import Container from '../../Container/Container.styled'
import GoogleMeet from '../../../image/providers/google.svg';
import Microsoft from '../../../image/providers/MS.svg';
import Webex from '../../../image/providers/webex.svg';
import Zoom from '../../../image/providers/zoom.svg';
import Avaya from '../../../image/providers/AvayaStar.svg';
import Bluejeans from '../../../image/providers/bluejeans.svg';
import Huawei from '../../../image/providers/huawei.svg';
import StarLeaf from '../../../image/providers/starleaf.svg';
import GoTo from '../../../image/providers/gotoStar.svg';
import LifeSize from '../../../image/providers/LifiSizeStar.svg';
import BrandsMobile from '../../../image/providers/partnersMobile.png';
import MediaQuery from 'components/MediaQuery';


const Provider = () => {
  return (

      <GlobalSection>
        <Container>
       <PartnersDiv>
            <ProTitle>
            Video Conference Providers
            </ProTitle>
            <MediaQuery device={'mobile'}>
            <PartnersUl>
                <PartnersLi>
                  <Image
                              src={BrandsMobile}
                              
                              alt="GoogleMeet"
                            />
                </PartnersLi>
            </PartnersUl>
            </MediaQuery>
            <MediaQuery device={'tablet'}>
            <PartnersUl>
                <PartnersLi>
                  <Image
                              src={GoogleMeet}
                              htmlWidth="105px"
                              alt="GoogleMeet"
                            />
                </PartnersLi>
                <PartnersLi>
                  <Image
                              src={Microsoft}
                              htmlWidth="106px"
                              alt="Microsoft"
                            />
                 </PartnersLi>
                 <PartnersLi>
                  <Image src={Webex} htmlWidth="87px" alt="Webex" />
                </PartnersLi>
                <PartnersLi>
                  <Image src={Zoom} htmlWidth="79px" alt="Zoom" />
                </PartnersLi>
            </PartnersUl>
            <PartnersUl>
                <PartnersLi>
                            <Image src={Avaya} htmlWidth="62px" alt="Avaya" />
                </PartnersLi>
                 <PartnersLi>
                  <Image
                              src={Bluejeans}
                              htmlWidth="78px"
                              alt="BlueJeans"
                            />
                 </PartnersLi>
                 <PartnersLi>
                  <Image src={Huawei} htmlWidth="93px" alt="Huawei" />
                 </PartnersLi>
                 <PartnersLi>
                  <Image
                              src={LifeSize}
                              htmlWidth="87px"
                              alt="LifeSize"
                            />
                 </PartnersLi>
                <PartnersLi >
                  <Image  src={GoTo} htmlWidth="81px" alt="GoTo" />
                 </PartnersLi>
                 <PartnersLi>
                  <Image
                              src={StarLeaf}
                              htmlWidth="84px"
                              alt="StarLeaf"
                            />
                </PartnersLi>
              </PartnersUl>
              </MediaQuery>
            <MediaQuery device={'default'}>
            <PartnersUl>
                <PartnersLi>
                  <Image
                              src={GoogleMeet}
                              htmlWidth="105px"
                              alt="GoogleMeet"
                            />
                </PartnersLi>
                <PartnersLi>
                  <Image
                              src={Microsoft}
                              htmlWidth="106px"
                              alt="Microsoft"
                            />
                 </PartnersLi>
                 <PartnersLi>
                  <Image src={Webex} htmlWidth="87px" alt="Webex" />
                </PartnersLi>
                <PartnersLi>
                  <Image src={Zoom} htmlWidth="79px" alt="Zoom" />
                </PartnersLi>
            </PartnersUl>
            <PartnersUl>
                <PartnersLi>
                            <Image src={Avaya} htmlWidth="62px" alt="Avaya" />
                </PartnersLi>
                 <PartnersLi>
                  <Image
                              src={Bluejeans}
                              htmlWidth="78px"
                              alt="BlueJeans"
                            />
                 </PartnersLi>
                 <PartnersLi>
                  <Image src={Huawei} htmlWidth="93px" alt="Huawei" />
                 </PartnersLi>
                 <PartnersLi>
                  <Image
                              src={LifeSize}
                              htmlWidth="87px"
                              alt="LifeSize"
                            />
                 </PartnersLi>
                <PartnersLi >
                  <Image  src={GoTo} htmlWidth="81px" alt="GoTo" />
                 </PartnersLi>
                 <PartnersLi>
                  <Image
                              src={StarLeaf}
                              htmlWidth="84px"
                              alt="StarLeaf"
                            />
                </PartnersLi>
              </PartnersUl>
              </MediaQuery>
          </PartnersDiv>
          <Date>* October 2022</Date>
          </Container>
   </GlobalSection>
  );
};

export default Provider;
