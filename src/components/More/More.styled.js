import styled from 'styled-components';


export const Section = styled.section`
padding: 100px 0px 120px;

  ${({ theme }) => theme.device.tablet} {
    padding: 220px 0px 160px;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;


export const Title = styled.h1`
text-align: left;
margin: 0 auto;
font-family: ${({ theme }) => theme.fonts.title.bold};
font-size: 25px;
line-height: 1.2;
margin-bottom: 32px;
color: ${({ theme }) => theme.colors.black_btn};
${({ theme }) => theme.device.tablet} {
  font-size: 26px;
  margin-bottom: 32px;
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
margin-bottom: 32px;
line-height: 1.45;
color: ${({ theme }) => theme.colors.primaryText};


${({ theme }) => theme.device.tablet} {
  margin-bottom: 50px;

  font-size: 16px;
}
${({ theme }) => theme.device.default} {


}
${({ theme }) => theme.device.desktop} {

  font-size: 20px;
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
        padding: 14px 64px;
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
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 500px;
    text-align: left;

    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 554px;
    padding-left: 20px;
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 750px;
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
    align-items: start;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 539px;
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
    align-items: start;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 375px;
    
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 465px;
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
    filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.4));
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





