import { 
    Title,
        Discription,
        Link,
        Section,
        GlobalBox, 
        GlobalBoxFlex, 
        GlobalBoxFlexAccord, 
        ButDiv,
        GlobalImage,
        GlobalImageAccord,
        Item,
        YouTube,
        DownText,
        Number,
        NumberDiv,
        Hero,
        AccordLi,
        LLC,
        DiscriptionAc
        } from '../Zoom/Zoom.styled';
import {
    ChakraProvider,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from '@chakra-ui/react';
import {
    Questions,
    Answer,
    PartnersDiv,
    PartnersUl,
    PartnersLi
  } from '../Accordion/Accordion.styled';
import React from 'react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import Container from '../Container/Container.styled';
import { Image } from '@chakra-ui/react';
import HeroMicro from '../../image/MicrosoftTeams/MicrosoftHero.svg';
import Registr from '../../image/Zoom/registr.svg';
import Sync from '../../image/Zoom/sync.svg';
import Six from '../../image/Huawei/six.svg';
import Create from '../../image/Huawei/create.svg';
import Calender from '../../image/Huawei/calendar.svg';
import Dev from '../../image/Huawei/dev.svg';
import Toolbar from '../../image/Huawei/toolbar.png';


 

const HuaHero = () =>{
    return(
        <>
        <main>
            <Hero style={{
           backgroundColor: '#F5F6FE'
           }}>
           <Container >
                <Title>How to Create a Huawei Account</Title>
               <ul>
                   <Item>
                   <GlobalImage>
                       <YouTube  src="https://www.youtube.com/embed/_6blJHOQ-KA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
                       </GlobalImage>
                       <GlobalBox>
                           <Discription>
                           SEEYOU makes using Huawei easier and gives you many new features. If you have a Huawei account, you simply connect to SEEYOU
                           </Discription>
                           <Discription>
                           If you do not yet have a Huawei account, this is how to create one
                           </Discription>
                           <ButDiv>
                           <Link href={'https://www.huaweicloud.com/intl/en-us/product/meeting.html'} target="_blank">
                           Create Huawei Account
                           </Link>
                           </ButDiv>
                       </GlobalBox>
                       
                   </Item>
               </ul>
           </Container>
           </Hero>
            <Section>
               <Container>
                    <Title>Huawei + SEEYOU Getting Started Guide</Title>
                   <ul>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Registr} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBox>
                               <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>1</Number>
                                </NumberDiv>
                               <Discription>
                               First install SEEYOU via <DownText href='/downloads'>downloads</DownText>
                               </Discription>
                               </div>
                               <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>2</Number>
                                </NumberDiv>
                               <Discription>
                               Then create your SEEYOU account
                               </Discription>
                               </div>
                           </GlobalBox>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Sync} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBox>
                           <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>3</Number>
                                </NumberDiv>
                               <Discription>
                               Navigate to the Calendar tab
                               </Discription>
                               </div><div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>4</Number>
                                </NumberDiv>
                               <Discription>
                               Follow the guide by clicking Next
                               </Discription>
                               </div>
                           </GlobalBox>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Create} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBoxFlex>
                           <NumberDiv>
                                <Number>5</Number>
                                </NumberDiv>
                               <Discription>
                               Click on the + icon on the top right to create a Huawei event. Once selected we will take you to the Huawei website to schedule your event there
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Six} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBoxFlex>
                           <NumberDiv>
                                <Number>6</Number>
                                </NumberDiv>
                               <Discription>
                               Click on the Sync Calendars button to sync the Google or Outlook calendar linked to your Huawei account with SEEYOU
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Calender} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBox>
                               <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>7</Number>
                                </NumberDiv>
                               <Discription>
                               Once connected, you can now see all your meetings from your respective calendars in one
joint calendar, Huawei meetings included
                               </Discription>
                               </div>
                           </GlobalBox>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Dev} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBoxFlex>
                           <NumberDiv>
                                <Number>8</Number>
                                </NumberDiv>
                               <Discription>
                               All Huawei conferences appear in the SEEYOU calendar, and your most immediate ones also appear on the SEEYOU homepage. Joining is as simple as clicking the Join button
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Toolbar} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBoxFlex>
                           <NumberDiv>
                                <Number>9</Number>
                                </NumberDiv>
                               <Discription>
                               The SEEYOU toolbar makes it easier for non-Huawei users to instantly familiarize themselves with the Huawei platform when inside a Huawei conference. For experienced Huawei users, it introduces additional functionalities to the already outstanding Huawei platform
                              
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>

                       <LLC>SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland</LLC>
                   </ul>
               </Container>
           </Section>
        </main>
        </>
    );
};
export default HuaHero;