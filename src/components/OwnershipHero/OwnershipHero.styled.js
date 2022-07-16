import styled from 'styled-components';
import Cloud from '../../image/bg/cloud_bg.svg';
import Cloud2 from '../../image/bg/cloud2_bg.svg';
import Sfera2 from '../../image/bg/Sfers_left_coowner.svg';
import Sfera from '../../image/bg/sfera_bg.svg';
import Leaf from '../../image/bg/leaf_coowner.svg';

export const Section = styled.section`
padding: 100px 0px 100px;

  ${({ theme }) => theme.device.tablet} {
    padding: 180px 0px 100px;
    background-repeat: no-repeat;
    background-position: top 7% left, top 20% right, top 64% left, top 82% right, top 95% left  ;
    background-size: small;
    background-image: url(${Leaf}), url(${Sfera}), url(${Cloud}), url(${Cloud2}), url(${Sfera2}) ;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;

export const ConferenceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    text-align: left;
    font-size: 30px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1,2;
  text-align: left;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 35px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
 }
`;
export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 14px;
  line-height: 1,4;
  text-align: left;
  
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;

  }
`;
export const SectionTitleSmall = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 12px;
  line-height: 1,3;
  text-align: left;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 40px;
    text-align: center;

  }
  ${({ theme }) => theme.device.default} {
    margin-bottom: 80px;

  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 100px;

  }
`;

export const ConferenceDiscription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 32px;
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
export const ConferenceDiscriptionSub = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1,35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 30px;
  }
`;
export const OwnerUl = styled.ul`

  ${({ theme }) => theme.device.tablet} {
   
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`
export const ConferenceItem = styled.li`


  align-items: center;
  &:not(:last-child) {
    margin-bottom: 80px;
  }
    
  ${({ theme }) => theme.device.tablet} {

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &:nth-child(2n) {
    flex-direction: row-reverse;
    }
    &:not(:last-child) {
      margin-bottom: 120px;
    }
  }
  ${({ theme }) => theme.device.default} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &:nth-child(2n) {
    flex-direction: row-reverse;
    }
  }
  ${({ theme }) => theme.device.desktop} {

  }
`;
export const Image = styled.img`
  margin: 0 auto;
  
  ${({ theme }) => theme.device.tablet} {
    transform: scale(86%);
  }
  ${({ theme }) => theme.device.default} {
    transform: scale(100%);
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`
export const DivImg = styled.div`
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  ${({ theme }) => theme.device.tablet} {
    padding: 0px 0px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 20px 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 40px 40px;
  }
`
export const LLC = styled.h3`
  text-align: center;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.22;
  padding-top:60px;
  margin-bottom: 80px;
  color: ${({ theme }) => theme.colors.black_btn};
`;