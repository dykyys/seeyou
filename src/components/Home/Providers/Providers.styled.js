import styled from 'styled-components';
import Container from '../../Container';
import LeafProv from '../../../image/bg/leaf_providers.svg'


export const GlobalSection = styled.section`

  padding: 60px 0;
  ${({ theme }) => theme.device.tablet} {
    padding: 60px 0 100px;
  background-repeat: no-repeat;
  background-position: bottom left ;
  background-size: small;
  background-image: url(${LeafProv});
  }
 
`;
export const ProImg = styled.img`

`
export const  ProTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
    font-size: 25px;
    line-height: 1.2;
    margin-bottom: 32px;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.black_btn};
    ${({ theme }) => theme.device.tablet} {
      font-size: 26px;
    }
    ${({ theme }) => theme.device.default} {
      font-size: 30px;
      margin-bottom: 60px;
      margin-top: 30px;
    }
    ${({ theme }) => theme.device.desktop} {
      font-size: 45px;
      margin-bottom: 84px;
    }
`;
export const  PartnersDiv = styled.div`
text-align: center;
padding-top: 20px;
margin: 0 auto;
  width: 333px;
  ${({ theme }) => theme.device.tablet} {
    width: 624px;

  }
  ${({ theme }) => theme.device.default} {
    width: 758px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 945px;
  }
`;
export const PartnersUl = styled.ul`
margin: 0 auto;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
${({ theme }) => theme.device.tablet} {
  flex-wrap: nowrap;
}
${({ theme }) => theme.device.default} {
}
${({ theme }) => theme.device.desktop} {
}
`;
export const  PartnersLi = styled.li`
padding: 0;
  margin-bottom: 24px;
  margin-left: 12px;
  margin-right: 12px;
  
  
  ${({ theme }) => theme.device.tablet} {
    
    margin-bottom: 32px;
    
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const Image = styled.img`

  ${({ theme }) => theme.device.tablet} {
    
  }
  ${({ theme }) => theme.device.default} {

    
  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const Date = styled.p`
  text-align: center;
  margin-right: 8%;
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.placeholder};
 ${({ theme }) => theme.device.tablet} {
  text-align: right;
    
}
${({ theme }) => theme.device.default} {

  
}
${({ theme }) => theme.device.desktop} {

`