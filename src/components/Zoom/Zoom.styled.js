import styled from 'styled-components';
import Leaf from '../../image/bg/leaf_bg.svg';
import Leaf2 from '../../image/bg/leaf2_bg.svg';
import Cloud from '../../image/bg/cloud_bg.svg';
import Cloud2 from '../../image/bg/cloud2_bg.svg';
import Cloud3 from '../../image/bg/cloud3_bg.svg';
import Sfera from '../../image/bg/sfera_bg.svg';
import Down from '../../image/bg/cloudDown_bg.svg';


export const Hero = styled.section`
padding: 100px 0px 60px;

  ${({ theme }) => theme.device.tablet} {
    padding: 80px 0px 60px;
    
  }
  ${({ theme }) => theme.device.default} {
    padding: 180px 0px 180px;
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;
export const Section = styled.section`
padding: 100px 0px 120px;

  ${({ theme }) => theme.device.tablet} {
    padding: 180px 0px 160px;
    background-repeat: no-repeat;
    background-position: top left, center right, top 45% left, top 70% right, top 90% right, top 23% right, bottom left 20%  ;
    background-size: small;
    background-image: url(${Leaf}), url(${Leaf2}), url(${Cloud}), url(${Cloud2}), url(${Cloud3}), url(${Sfera}), url(${Down});
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;


export const Title = styled.h1`
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
  margin-bottom: 32px;
  margin-top: 100px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 45px;
  margin-bottom: 32px;
  margin-top: 120px;
}
`;

export const Discription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 16px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 50px;
${({ theme }) => theme.device.tablet} {
  margin-bottom: 0px;
}
${({ theme }) => theme.device.default} {
  
  margin-bottom: 40px;
}
${({ theme }) => theme.device.desktop} {
  
  
}
`;

export const Link = styled.a`
    margin-left: auto;
    margin-right: auto;
    font-family: ${({ theme }) => theme.fonts.descr.semiBold};
    font-size: 16px;
    padding: 14px 24px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    ${({ theme }) => theme.device.tablet} {
        padding: 14px 38px;
    }
    ${({ theme }) => theme.device.default} {
 
    }
    ${({ theme }) => theme.device.desktop} {
        
  }
`;
export const ButDiv=styled.div`
width: 100%;
  text-align: center;
${({ theme }) => theme.device.tablet} {
  text-align: left;

}
${({ theme }) => theme.device.default} {

}
${({ theme }) => theme.device.desktop} {

} ;
`


export const GlobalBox = styled.div`
  width: auto;
  
  padding-right: 8px;
  padding-left: 8px;
  margin-bottom: 0px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 310px;
    text-align: left;
    margin-bottom: 0px;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 539px;
    text-align: left;
    padding-right: 30px;
  } ;
`;
export const GlobalBoxFlex = styled.div`
  display: flex;
  text-align: baseline;
  width: auto;
  
  padding-right: 8px;
  padding-left: 8px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 310px;
    text-align: left;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 539px;
    text-align: left;
    padding-right: 30px;
  } ;
`;
export const GlobalBoxFlexAccord = styled.div`
  display: flex;

  text-align: left;
  width: auto;
  
  padding-right: 8px;
  padding-left: 8px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 285px;
    text-align: left;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 375px;
    
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 465px;
    text-align: left;
    padding-right: 30px;
  } ;
`;
export const GlobalImage = styled.div`
margin-bottom: 35px;
  
  ${({ theme }) => theme.device.tablet} {
    width: 310px;
    margin-bottom: 0px;
  }
  ${({ theme }) => theme.device.default} {
    width: 385px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 556px;
  } ;
`;
export const GlobalImageAccord = styled.div`
margin-bottom: 25px;
  
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
    width: 285px;
    align-items: center;
  }
  ${({ theme }) => theme.device.default} {
    width: 375px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 465px;
  } ;
`;
export const YouTube = styled.iframe`
    margin: 0 auto;
    width: 327px;
    height: 183px;
  
  ${({ theme }) => theme.device.tablet} {
    width: 309px;
    height: 172px;
  }
  ${({ theme }) => theme.device.default} {
    width: 350px;
    height: 194.94px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 444px;
    height: 247px;
  } ;
`;

export const Item = styled.li`
  padding: 30px 0 15px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  ${({ theme }) => theme.device.tablet} {
    padding: 60px 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:nth-child(2n + 2) {
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

export const DownText = styled.a`
text-decoration-line: underline; 
color: blue;
`
export const Number = styled.span`
padding: 10px 16px;
background: #F1F1F5;
border-radius: 50%;
text-align: center;
margin-right: 12px;
height: 40px;
${({ theme }) => theme.device.tablet} {
  margin-right: 22px;
}
${({ theme }) => theme.device.default} {
  margin-right: 32px;
}
${({ theme }) => theme.device.desktop} {
  
}
`

export const NumberAc = styled.span`
padding: 10px 16px;
background: #FFFFFF;
border-radius: 50%;
margin-right: 12px;
text-align: center;
height: 40px;
${({ theme }) => theme.device.tablet} {
  margin-right: 22px;
}
${({ theme }) => theme.device.default} {
  margin-right: 32px;
}
${({ theme }) => theme.device.desktop} {
  
}
`
export const AccordLi =styled.li`
  padding: 30px 0 15px;
${({ theme }) => theme.device.tablet} {
  padding: 60px 0 30px;
  display: flex;
  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }

}
${({ theme }) => theme.device.default} {
  
}
${({ theme }) => theme.device.desktop} {
  
}
`