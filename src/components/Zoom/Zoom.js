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
        } from './Zoom.styled';
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
import HeroZoom from '../../image/Zoom/hero_zoom.svg';
import Registr from '../../image/Zoom/registr.svg';
import Sync from '../../image/Zoom/sync.svg';
import Create from '../../image/Zoom/create.svg';
import Calender from '../../image/Zoom/calendar.svg';
import Booking from '../../image/Zoom/booking.svg';
import Dev from '../../image/Zoom/development.svg';
import Toolbar from '../../image/Zoom/toolbar.png';
import Accord1 from '../../image/Zoom/accord1.svg';
import Accord2 from '../../image/Zoom/Accord2.svg';
import Last from '../../image/Zoom/last.svg';



 const ZoomHero = () =>{
     return(
         <>
         <main>
             <Hero style={{
            backgroundColor: '#F5F6FE'
            }}>
            <Container >
                <Title>How to Create a Zoom Account</Title>
                <ul>
                    <Item>
                        <GlobalImage>
                            <Image margin='0 auto' src={HeroZoom} alt="Zoom" />
                        </GlobalImage>
                        <GlobalBox>
                            <Discription>
                                SEEYOU makes using Zoom easier and gives you many new features. If you have a Zoom account, you simply connect to SEEYOU
                            </Discription>
                            <Discription>
                            If you do not yet have a Zoom account, this is how to create one
                            </Discription>
                            <ButDiv>
                            <Link href={'https://zoom.us/'} target="_blank">
                            Create Zoom Account
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
                                YouTube has many good tutorials on how to create a Zoom account
                            </Discription>
                            <ButDiv>
                            <Link href={'https://www.youtube.com/user/ZoomMeetings'} target="_blank">
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
                    <Title>Zoom + SEEYOU Getting Started Guide</Title>
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
                                Click on the + icon in the top right to create a Zoom event. When connecting for the first
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
                                joint calendar, Zoom meetings included
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
                                SEEYOU simplifies booking Zoom meetings. After connecting your Zoom account, click the
                                Zoom icon to create a Zoom event
                                </Discription>
                                </div>
                                <div style={{
                                display: 'flex'
                                }}>
                                <NumberDiv>
                                <Number>8</Number>
                                </NumberDiv>
                                <Discription>
                                Creating a Zoom event can quickly be done within the SEEYOU app
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
                                 All Zoom conferences appear in the SEEYOU calendar, and your most immediate ones also
                                appear on the SEEYOU homepage. Joining is as simple as just clicking Join
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
                                The SEEYOU toolbar makes it easier for non-Zoom users to instantly familiarize themselves
                                with the Zoom platform when inside the Zoom conference. For experienced Zoom users, it
                                introduces some additional functionality to the already outstanding Zoom platform
                                </Discription>
                            </GlobalBoxFlex>
                        </Item>
                        
                        <ChakraProvider>
                        <Box>
                        <Accordion allowMultiple paddingBottom="40px">
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
                                        <Questions>How to disconnect Zoom from SEEYOU</Questions>
                                        </Box>
                                        {isExpanded ? (
                                        <MinusIcon fontSize="12px" />
                                        ) : (
                                        <AddIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                    <Answer>To disconnect Zoom from your SEEYOU account, follow the steps below.</Answer>
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
                                            disconnected, you are no longer able to create Zoom meetings within SEEYOU.
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
                        
                        <Item>
                            <GlobalImage>
                                <Image margin='0 auto' src={Last} alt="Zoom" />
                            </GlobalImage>
                            <GlobalBox>
                                <div style={{
                                display: 'flex'
                                }}>
                                <NumberDiv>
                                <Number>1</Number>
                                </NumberDiv>
                                <Discription>
                                Log in to your Zoom account and navigate to the Zoom App Marketplace.
                                </Discription>
                                </div>
                                <div style={{
                                display: 'flex'
                                }}>
                                <NumberDiv>
                                <Number>2</Number>
                                </NumberDiv>
                                <Discription>
                                Click Manage - Added Apps or search for the SEEYOU app
                                </Discription>
                                </div>
                                <div style={{
                                display: 'flex'
                                }}>
                                <NumberDiv>
                                <Number>3</Number>
                                </NumberDiv>
                                <Discription>
                                Click the 'Remove' button.
                                </Discription>
                                </div>
                                <Discription>
                                Note: Removing SEEYOU from your Zoom marketplace would mean you will no longer be able tocreate Zoom events within SEEYOU.
                                </Discription> 
                            </GlobalBox>
                            
                        </Item>
                        <LLC>SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland</LLC>
                    </ul>
                </Container>
            </Section>
         </main>
         </>
     );
 };
 export default ZoomHero;