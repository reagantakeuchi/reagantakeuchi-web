import React from 'react'
import { Box, Image, Text } from 'grommet'
import Girl from '../assets/image.png';
// import Portrait from '../assets/portrait.png';

// import Hi from '../assets/hi.png';
import styled from 'styled-components';

export const Landing = () => {

    return (
            <Box 
                direction="row" 
                width="100%"
                justify="between" 
                height="90vh" 
                background="light-2"
                pad={{horizontal:"100px"}}
            >
                <Box 
                    align="start" 
                    pad="large" 
                    gap="medium" 
                    justify="center"
                    animation={{
                        type: "slideUp",
                        duration: 3000
                    }}
                >
                <SubText>HELLO I'M</SubText>

                    <Box 
                        align="start" 
                        justify="start" 
                        gap="small" 
                        width="100%"
                    >

                        <Heading color="dark-3" size="4rem" textAlign="start">
                            Reagan <br/> Takeuchi
                        </Heading>
                    </Box>
                    <Box justify="start" gap="small" direction="row">
                        <SubText textAlign="start">
                            WEB DESIGNER
                        </SubText>
                        <SubText textAlign="start"> | </SubText>
                        <SubText textAlign="start">
                            FULL STACK DEVELOPER
                        </SubText>
                    </Box>

                </Box>
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

export default Landing;

const Heading = styled(Text)`
    font-weight: bold;
    font-family: book antigua;
    line-height: 5.5rem;
    letter-spacing: 0.2rem;
`

const SubText = styled(Text)`
    letter-spacing: 0.3rem;
    color: ${(props)=>props.theme.global.colors['dark-1']};
`

// const TagText = styled(Text)`
//     font-family: courier;
//     letter-spacing: 0.3rem;
// `

