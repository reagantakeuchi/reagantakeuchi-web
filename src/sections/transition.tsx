import React from 'react'
import { Box, Image, Stack, Button, Text } from 'grommet'
import { InfoContainer } from '../components/info-container'
import styled from 'styled-components'
// import {ReactComponent as Squiggle} from '../assets/squiggle.svg';
import { Avatar } from '../components/avatar';
import { Squiggle } from '../components/squiggle';
import { Serif } from '../components/serif';
import portrait from '../assets/webportrait.jpg';
import { Container } from '../components/container';
import {Resume} from '../assets/penpaper'
import { Book } from '../assets/book';
import { Branch } from '../assets/branch';

export const Transition = () => {
    return (
            <Box
            direction="row"
            height={{min:"400px"}}
            width="100%"
            background="light-1" 
        >
            <Box
                pad={{horizontal:"150px", vertical:"50px"}}
                direction="row"
                width="100%"
                align="center"
                height={{min:"100%"}}
                background="dark-2"
                gap="large"
                justify="around"
            >
                {/* <Box width="100%" height="100%">
                    <Avatar/>
                </Box> */}
                <Container>
                    <SubText>  RESUME </SubText>
                    <Resume/>
                </Container>
                <Container>
                    <SubText>  PORTFOLIO </SubText>
                    <Book/>
                </Container>
                <Container>
                    <SubText>  PROJECTS </SubText>
                    <Branch/>
                </Container>
            </Box>
        </Box>
    )
}

export default Transition;


const SubText = styled(Text)`
    padding: 20px;
    letter-spacing: 0.3rem;
    color: ${(props)=>props.theme.global.colors['light-1']};
`

const HoverBox = styled(Box)`
    cursor: pointer;
    &:hover {
        width: 70%;
        height: 70px;
        cursor: pointer;
    }
    transition: width 0.5s, height 0.5s;
`