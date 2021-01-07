import React from 'react'
import { Box, Image, Text } from 'grommet'
import Girl from '../assets/image.png';
// import Portrait from '../assets/portrait.png';
// import Hi from '../assets/hi.png';
import styled from 'styled-components';
import { useDeviceContext } from '../context';
import { Button } from '../style';
import { Cart } from 'grommet-icons';
import { useHistory } from 'react-router-dom';

export const Landing = () => {
    const device = useDeviceContext();
    const history = useHistory();

    const navigateToStore = () => {
        history.push('shop')
    }
    if(device==='mobile') {
        return (
            <Box 
                pad="large"
                background="light-2"
                justify="center"
                height="92vh"
                gap="medium"
            >
                <Welcome onClick={navigateToStore}/>
                <Box 
                    width="100%"
                    height={{max:"30%"}}
                    pad={{vertical:"medium"}}
                    animation={{
                        type: "slideUp",
                        duration: 3000
                    }}
                >
                    <Image fit="cover" src={Girl}/>
                </Box>

            </Box>
    )}
    
    return (
            <Box 
                direction="row" 
                width="100%"
                justify="between" 
                height="95vh" 
                background="light-2"
                pad={{left:"xlarge"}}
            >

                <Welcome onClick={navigateToStore}/>

                <Box 
                    width="40%" 
                    justify="end" 
                    height="100%" 
                    animation={{
                        type: "slideLeft",
                        duration: 3000
                    }}
                >
                    <Image fit="cover" src={Girl}/>
                </Box>
            </Box>
    )
}

const Welcome = ({onClick}:{onClick:()=>void}) => (
<Box 
    align="start" 
    gap="medium" 
    justify="center"
    animation={{
        type: "slideUp",
        duration: 3000
    }}
>
    <SubText>HELLO I'M</SubText>

    <Heading color="dark-3" size="4rem" textAlign="start">
        Reagan <br/> Takeuchi
    </Heading>
    <Box justify="start" direction="row" wrap>
        <SubText textAlign="start" style={{whiteSpace:"nowrap"}}>
            WEB DESIGNER
        </SubText>
        <SubText textAlign="start" style={{padding:"0px 10px"}}> | </SubText>
        <SubText textAlign="start" style={{whiteSpace:"nowrap"}}>
            FULL STACK DEVELOPER
        </SubText>
    </Box>
    <Box margin={{top:"medium"}}>
        <Button primary color="neutral-4" onClick={onClick}>
            <ButtonLabel gap="small" direction="row">
                {/* <ButtonLabel> */}
                    <Cart color="light-1"/>
                    {"shop design by rea"}
                {/* </ButtonLabel> */}
            </ButtonLabel>
        </Button>
    </Box>

</Box>


)

export default Landing;

const ButtonLabel = styled(Box)`
    letter-spacing: 0.2em;
    line-height: 1.5em;
    text-align: start;
    &:hover {
        letter-spacing: 0.3em;
    }
    transition: letter-spacing 0.3s linear;
`

const Heading = styled(Text)`
    font-weight: bold;
    line-height: 5.5rem;
    letter-spacing: 0.2rem;
`

const SubText = styled(Text)`
    letter-spacing: 0.3rem;
    line-height: 2rem;
    color: ${(props)=>props.theme.global.colors['dark-1']};
`

// const TagText = styled(Text)`
//     font-family: courier;
//     letter-spacing: 0.3rem;
// `

