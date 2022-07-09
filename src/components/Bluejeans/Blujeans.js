
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
import Six from '../../image/Bluejeans/six.png';
import Create from '../../image/Bluejeans/create.svg';
import Calender from '../../image/Bluejeans/calendar.svg';
import Booking from '../../image/Bluejeans/booking.svg';
import Dev from '../../image/Bluejeans/dev.svg';
import Toolbar from '../../image/Bluejeans/toolbar.png';
import Accord1 from '../../image/MicrosoftTeams/accord1.svg';
import Accord2 from '../../image/MicrosoftTeams/accord2.svg';
import Last from '../../image/Zoom/last.svg';


 

const BlueHero = () =>{
    return(
        <>
        <main>
            <Hero style={{
           backgroundColor: '#F5F6FE'
           }}>
           <Container >
                <Title>How to Create a BlueJeans Account</Title>
               <ul>
                   <Item>
                   <GlobalImage>
                       <YouTube width="560" height="315" src="https://www.youtube.com/embed/tuPfLKJR3Lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
                       </GlobalImage>
                       <GlobalBox>
                           <Discription>
                           SEEYOU makes using BlueJeans easier and gives you many new features. If you have a BlueJeans account, you simply connect to SEEYOU
                           </Discription>
                           <Discription>
                           If you do not yet have a BlueJeans account, this is how to create one
                           </Discription>
                           <ButDiv>
                           <Link href={'https://www.bluejeans.com/resources/product-video/how-to-get-started-in-bluejeans'} target="_blank">
                           Create BlueJeans Account
                           </Link>
                           </ButDiv>
                       </GlobalBox>
                       
                   </Item>
               </ul>
           </Container>
           </Hero>
            <Section>
               <Container>
                    <Title>BlueJeans + SEEYOU Getting Started Guide</Title>
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
                               Click on the + icon on the top right to create a BlueJeans event. Once selected we will take you to the BlueJeans website to schedule your event there
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
                               Click on the Sync Calendars button to sync the Google or Outlook calendar linked to your BlueJeans account with SEEYOU
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
joint calendar, BlueJeans meetings included
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
                               All Microsoft conferences appear in the SEEYOU calendar, and your most immediate ones also
appear on the SEEYOU homepage. Joining is as simple as just clicking Join button
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
                               The SEEYOU toolbar makes it easier for non-BlueJeans users to instantly familiarize themselves with the BlueJeans platform when inside a BlueJeans conference. For experienced BlueJeans users, it introduces additional functionalities to the already outstanding BlueJeans platform
                              
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
export default BlueHero;