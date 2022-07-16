
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
import Create from '../../image/Zoom/create.svg';
import Calender from '../../image/MicrosoftTeams/calendar.svg';
import Booking from '../../image/MicrosoftTeams/booking.svg';
import Dev from '../../image/MicrosoftTeams/dev.svg';
import Toolbar from '../../image/MicrosoftTeams/toolbar.png';
import Accord1 from '../../image/MicrosoftTeams/accord1.svg';
import Accord2 from '../../image/MicrosoftTeams/accord2.svg';
import Last from '../../image/Zoom/last.svg';


 

const MicroHero = () =>{
    return(
        <>
        <main>
            <Hero style={{
           backgroundColor: '#F5F6FE'
           }}>
           <Container >
                <Title>How to Create a Microsoft Teams/Skype Account</Title>
               <ul>
                   <Item>
                       <GlobalImage>
                           <Image margin='0 auto' src={HeroMicro} alt="Zoom" />
                       </GlobalImage>
                       <GlobalBox>
                           <Discription>
                           SEEYOU makes using Microsoft easier and gives you many new features. If you have a Microsoft account, you simply connect to SEEYOU
                           </Discription>
                           <Discription>
                           If you do not yet have a Microsoft  account, this is how to create one
                           </Discription>
                           <ButDiv>
                           <Link href={'https://support.microsoft.com/en-us/account-billing/how-to-create-a-new-microsoft-account-a84675c3-3e9e-17cf-2911-3d56b15c0aaf'} target="_blank">
                           Create Microsoft Account
                           </Link>
                           </ButDiv>
                       </GlobalBox>
                   </Item>
                   <Item>
                       <GlobalImage>
                       <YouTube width="560" height="315" src="https://www.microsoft.com/en-us/videoplayer/embed/RE4FyMj?pid=ocpVideo0-innerdiv-oneplayer&maskLevel=20&market=en-us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
                       </GlobalImage>
                       <GlobalBox>
                           <Discription>
                           YouTube has many good tutorials on how to create a Microsoft account
                           </Discription>
                           <ButDiv>
                           <Link href={'https://www.youtube.com/c/microsoft/videos'} target="_blank">
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
                    <Title>Teams/Skype + SEEYOU Getting Started Guide</Title>
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
                               Click on the + icon in the top right to create a Microsoft event. When connecting for the first
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
                               Once connected, you can now see all your meetings from your respective calendars in one
joint calendar, Microsoft Teams ad Skype meetings included
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
                               SEEYOU simplifies booking Microsoft meetings. After connecting your Microsoft account, click the
Microsoft icon to create an event
                               </Discription>
                               </div>
                               <div style={{
                               display: 'flex'
                               }}>
                               <NumberDiv>
                                <Number>8</Number>
                                </NumberDiv>
                               <Discription>
                               Creating a Microsoft Teams/Skype event can quickly be done within the SEEYOU app
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
                                <Number>10</Number>
                                </NumberDiv>
                               <Discription>
                               The SEEYOU toolbar makes it easier for non-Microsoft users to instantly familiarize themselves
with the Teams/Skype platforms when inside the conference. For experienced Teams/Skype users, it
introduces additional functionalities to the already outstanding Microsoft platform
                              
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
                                       <Questions>How to disconnect Microsoft from SEEYOU</Questions>
                                       </Box>
                                       {isExpanded ? (
                                       <MinusIcon fontSize="12px" />
                                       ) : (
                                       <AddIcon fontSize="12px" />
                                       )}
                                   </AccordionButton>
                                   </h2>
                                   <AccordionPanel pb={4}>
                                   <Answer>To disconnect Microsoft meetings from your SEEYOU account, follow the steps below.</Answer>
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
                                           <DiscriptionAc>
                                           From your SEEYOU account, under your profile info, click on Settings, then navigate to the
 Providers and Emails tab.
                                           </DiscriptionAc>
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
                                           <DiscriptionAc>
                                           Then simply click on the Disconnect icon on the right. Once
disconnected, you are no longer able to create Microsoft meetings within SEEYOU.
                                           </DiscriptionAc>
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
export default MicroHero;