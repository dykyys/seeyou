import styled from "styled-components";

export const FaqTitle = styled.h1`
font-family: 'Jost';
font-weight: 600;
font-size: 30px;
line-height: 1,5px;
text-align: center;
margin-bottom: 16px;
color: ${({ theme }) => theme.colors.black};
`;


export const FaqDiscription= styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
text-align: center;

color: ${({ theme }) => theme.colors.primaryText};
`;
