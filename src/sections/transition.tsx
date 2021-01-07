import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { Container } from '../components/container';
import {Resume} from '../assets/penpaper'
import { Book } from '../assets/book';
import { Store } from '../assets/store';
import { useDeviceContext } from '../context';

export const Transition = () => {
    const device = useDeviceContext()
    if(device==='mobile') {
        return <></>
    }

    return (
        <Box
            height={{min:"400px"}}
            width="100%"
            background="dark-2"
            justify='center'
            align="center"
        >
            <Box
                margin={{horizontal:"150px", vertical:"50px"}}
                direction="row"
                height={{min:"100%"}}
                width="900px"
                justify="between"
                wrap
            >
                {/* <Box width="100%" height="100%">
                    <Avatar/>
                </Box> */}
                <Container navigate="shop">
                    <SubText>  STORE </SubText>
                    <Store/>
                </Container>
                <Container navigate="about-me">
                    <SubText>  ABOUT ME </SubText>
                    <Resume/>
                </Container>
                <Container navigate="portfolio">
                    <SubText>  PORTFOLIO </SubText>
                    <Book/>
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

// const HoverBox = styled(Box)`
//     cursor: pointer;
//     &:hover {
//         width: 70%;
//         height: 70px;
//         cursor: pointer;
//     }
//     transition: width 0.5s, height 0.5s;
// `