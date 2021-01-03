import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { Container } from '../components/container';
import {Resume} from '../assets/penpaper'
import { Book } from '../assets/book';
import { Store } from '../assets/store';
import { useDeviceContext } from '../device-context';

export const Transition = () => {
    const device = useDeviceContext()
    if(device==='mobile') {
        return <></>
    }

    return (
        <Box
            height={{min:"400px"}}
            width="100%"
        >
            <Box
                pad={{horizontal:"150px", vertical:"50px"}}
                direction="row"
                align="center"
                height={{min:"100%"}}
                background="dark-2"
                justify="around"
                wrap
            >
                {/* <Box width="100%" height="100%">
                    <Avatar/>
                </Box> */}
                <Container navigate="resume">
                    <SubText>  ABOUT ME </SubText>
                    <Resume/>
                </Container>
                <Container navigate="portfolio">
                    <SubText>  PORTFOLIO </SubText>
                    <Book/>
                </Container>
                <Container navigate="store">
                    <SubText>  STORE </SubText>
                    <Store/>
                </Container>
            </Box>
        </Box>
    )
}

export default Transition;

const MobileTransition = () => {
    return (
        <Box
            pad={{horizontal:"40px", vertical:"20px"}}
            direction="row"
            align="center"
            justify="center"
            height={{min:"100%"}}
            background="dark-2"
            width="100%"
            wrap
        >
                 <Box align="center">
                    {/* <MobileText size="small">  ABOUT </MobileText> */}
                    <Resume width="40px" height="40px"/>
                </Box>
                <Box align="center">
                    {/* <MobileText size="small">  PORTFOLIO </MobileText> */}
                    <Book width="40px" height="40px"/>
                </Box>
                <Box align="center">
                    {/* <MobileText size="small">  STORE </MobileText> */}
                    <Store width="40px" height="40px"/>
                </Box>
        </Box>
    )
}

const MobileText = styled(Text)`
    padding: 10px;
    letter-spacing: 0.2rem;
    color: ${(props)=>props.theme.global.colors['light-1']};
`

const SubText = styled(Text)`
    padding: 20px;
    letter-spacing: 0.3rem;
    color: ${(props)=>props.theme.global.colors['light-1']};
`

// const HoverBox = styled(Box)`
//     cursor: pointer;
//     &:hover {
//         width: 70%;
//         height: 70px;
//         cursor: pointer;
//     }
//     transition: width 0.5s, height 0.5s;
// `