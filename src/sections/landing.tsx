import React from 'react'
import { Box, Image, Text } from 'grommet'
import Girl from '../assets/image.png';
// import Portrait from '../assets/portrait.png';
// import Hi from '../assets/hi.png';
import styled from 'styled-components';
import { useDeviceContext } from '../device-context';

export const Landing = () => {
    const device = useDeviceContext();

    if(device==='mobile') {
        return (
            <Box 
                pad="large"
                background="light-2"
                justify="center"
                height="92vh"
                gap="medium"
            >
                <Welcome/>
                <Box 
                    width="100%"
                    height={{max:"30%"}}
                    pad={{vertical:"medium"}}
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

                <Welcome/>

                <Box 
                    width="40%" 
                    justify="end" 
                    height="100%" 
                >
                    <Image fit="cover" src={Girl}/>
                </Box>
            </Box>
    )
}

const Welcome = () => (
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
</Box>


)

export default Landing;

const Heading = styled(Text)`
    font-weight: bold;
    font-family: book antigua;
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

