import styled from 'styled-components';

import Leaf2 from '../../../image/bg/leaf2_bg.svg';
import Cloud from '../../../image/bg/cloud_bg.svg';
import Cloud2 from '../../../image/bg/cloud2_bg.svg';
import Cloud3 from '../../../image/bg/cloud3_bg.svg';
import Sfera from '../../../image/bg/sfera_bg.svg';
import Down from '../../../image/bg/cloudDown_bg.svg';


export const Section = styled.section`
padding: 30px 0px 40px;
  ${({ theme }) => theme.device.tablet} {
    padding: 40px 0px 60px;
    background-repeat: no-repeat;
    background-position: top 1000px left, top 1400px right, top 2400px right, top 250px right, bottom left 20%  ;
    background-size: small;
    background-image: url(${Cloud}), url(${Cloud2}), url(${Cloud3}), url(${Sfera}), url(${Down});
  }
  ${({ theme }) => theme.device.default} {
    padding: 50px 0px 101px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 60px 0px 103px;
  }
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const DiscriptionSub = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.22;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;
export const LLC = styled.h3`
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.22;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.black_btn};
`;
export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 30px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-bottom: 32px;
  }
`;

export const Discription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  font-size: 14px;
}
${({ theme }) => theme.device.default} {
  font-size: 16px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 20px;
  
}
`;

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 27px;
`;

export const ConferenceItem = styled.li`
  
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 80px;
  }
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
    }
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }
`;

export const BrandsLogos = styled.img`

  ${({ theme }) => theme.device.tablet} {
    width: 310px;
}
  ${({ theme }) => theme.device.default} {
    width: 402px;
}
  ${({ theme }) => theme.device.desktop} {
    width: 570px;
}
`
export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 27px;
  margin-bottom: 24px;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 32px;
}
  ${({ theme }) => theme.device.default} {
    margin-bottom: 50px;
}
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 70px;
}
`;

export const BoxBeforEnd = styled.div`

  margin: 0 auto;
  margin-bottom: 102px;
`;
