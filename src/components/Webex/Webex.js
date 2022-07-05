
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
        Hero,
        AccordLi,
        LLC,
        NumberDiv,
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
import ZoomPDF from '../../PDF/Zoom_SEEYOU_v2_2.pdf';
import { Image } from '@chakra-ui/react';
import HeroWebex from '../../image/Webex/webex_hero.svg';
import Registr from '../../image/Zoom/registr.svg';
import Sync from '../../image/Zoom/sync.svg';
import Create from '../../image/Zoom/create.svg';
import Calender from '../../image/Webex/calendar.svg';
import Booking from '../../image/Webex/booking.svg';
import Dev from '../../image/Webex/dev.svg';
import Toolbar from '../../image/Webex/10.png';
import Accord1 from '../../image/Webex/accord1.svg';
import Accord2 from '../../image/Webex/accord2.svg';
import Last from '../../image/Zoom/last.svg';


 

const WebexHero = () =>{
    return(
        <>
        <main>
            <Hero style={{
           backgroundColor: '#F5F6FE'
           }}>
           <Container >
                <Title>How to Create a Webex Account</Title>
               <ul>
                   <Item>
                       <GlobalImage>
                           <Image margin='0 auto' src={HeroWebex} alt="Zoom" />
                       </GlobalImage>
                       <GlobalBox>
                           <Discription>
                           SEEYOU makes using Webex easier and gives you many new features. If you have a Webex account, you simply connect to SEEYOU
                           </Discription>
                           <Discription>
                           If you do not yet have a Webex account, this is how to create one
                           </Discription>
                           <ButDiv>
                           <Link href={'https://help.webex.com/en-us/article/now995h/Get-started-with-your-free-Webex-plan'} target="_blank">
                           Create Webex Account
                           </Link>
                           </ButDiv>
                       </GlobalBox>
                   </Item>
                   <Item>
                       <GlobalImage>
                       <YouTube  src="https://www.youtube.com/embed/h4lyge97XIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
                       </GlobalImage>
                       <GlobalBox>
                           <Discription>
                            YouTube has many good tutorials on how to create a Webex account
                           </Discription>
                           <ButDiv>
                           <Link href={'https://www.youtube.com/watch?v=k0RBFGkT_3A&ab_channel=Webex'} target="_blank">
                            Open YouTube
                           </Link>
                           </ButDiv>
                       </GlobalBox>
                   </Item>
               </ul>
           </Container>
           </Hero>
            <Section>
               <Container>
                    <Title>Webex + SEEYOU Getting Started Guide</Title>
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
                               Click on the + icon in the top right to create a Webex event. When connecting for the first
time, you need to connect to your Google or Microsoft Outlook calendar
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Calender} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBoxFlex>
                           <NumberDiv>
                                <Number>6</Number>
                                </NumberDiv>
                               <Discription>
                               Once connected, you can now see all your meetings from your respective calendars in one joint calendar, Zoom meetings included
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>
                       <Item>
                           <GlobalImage>
                               <Image margin='0 auto' src={Booking} alt="Zoom" />
                           </GlobalImage>
                           <GlobalBox>
                               <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>7</Number>
                                </NumberDiv>
                               <Discription>
                               SEEYOU simplifies booking Webex meetings. After connecting your Webex account, click the
                                Webex icon to create a Webex event
                               </Discription>
                               </div>
                               <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>8</Number>
                                </NumberDiv>
                               <Discription>
                               Creating a Webex event can quickly be done within the SEEYOU app
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
                                <Number>9</Number>
                                </NumberDiv>
                               <Discription>
                               All Webex conferences appear in the SEEYOU calendar, and your most immediate ones also
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
                                <Number>10</Number>
                                </NumberDiv>
                               <Discription>
                               The SEEYOU toolbar makes it easier for non-Webex users to instantly familiarize themselves
with the Webex platform when inside the Webex conference. For experienced Webex users, it
introduces  additional functionalities to the already outstanding Webex platform
                              
                               </Discription>
                           </GlobalBoxFlex>
                       </Item>
                       
                       <ChakraProvider>
                       <Box>
                       <Accordion allowMultiple paddingBottom="80px">
                           <AccordionItem
                               border={'none'}
                               borderRadius="12px"
                               backgroundColor="#ECF1FE"
                           >
                               {({ isExpanded }) => (
                               <>
                                   <h2>
                                   <AccordionButton
                                       _hover={{
                                       backgroundColor: 'transparent',
                                       boxShadow: 'none',
                                       }}
                                       _focus={{
                                       boxShadow: 'none',
                                       }}
                                       paddingRight="40px"
                                   >
                                       <Box flex="1" textAlign="left">
                                       <Questions>How to disconnect Webex from SEEYOU</Questions>
                                       </Box>
                                       {isExpanded ? (
                                       <MinusIcon fontSize="12px" />
                                       ) : (
                                       <AddIcon fontSize="12px" />
                                       )}
                                   </AccordionButton>
                                   </h2>
                                   <AccordionPanel pb={4}>
                                   <Answer>To disconnect Webex from your SEEYOU account, follow the steps below.</Answer>
                                   <Item>
                                       <ul style={{
                                           margin: '0 auto'
                                           }}>
                                           <AccordLi>
                                           <GlobalImageAccord>
                                           <Image margin='0 auto' src={Accord1} alt="Zoom" />
                                       </GlobalImageAccord>
                                       <GlobalBoxFlexAccord>
                                       <NumberDiv style={{
                               backgroundColor: 'white'
                               }}>
                                            <Number>1</Number>
                                            </NumberDiv>
                                           <Discription>
                                            From your SEEYOU account, under your profile info, click on Settings, then navigate to the
                                            Providers and Emails tab.
                                           </Discription>
                                       </GlobalBoxFlexAccord>
                                           </AccordLi>
                                           <AccordLi>
                                       <GlobalImageAccord>
                                           <Image margin='0 auto' src={Accord2} alt="Zoom" />
                                       </GlobalImageAccord>
                                       <GlobalBoxFlexAccord>
                                       <NumberDiv style={{
                               backgroundColor: 'white'
                               }}>
                                            <Number>2</Number>
                                            </NumberDiv>
                                           <Discription>
                                           Then simply click on the Disconnect icon on the right. Once
                                            disconnected, you are no longer able to create Webex meetings within SEEYOU.
                                           </Discription>
                                       </GlobalBoxFlexAccord>
                                           </AccordLi>
                                       </ul>
                                   </Item>
                                   </AccordionPanel>
                               </>
                               )}
                           </AccordionItem>
                       </Accordion>
                       
                       </Box>
                       </ChakraProvider>                    
                       
                       <LLC>SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland</LLC>
                   </ul>
               </Container>
           </Section>
        </main>
        </>
    );
};
export default WebexHero;