import React from 'react'
import { Box, Stack, Text, Anchor } from 'grommet'
import { Avatar } from '../components/avatar'
import styled from 'styled-components'
import {ReactComponent as Squig} from '../assets/squiggle.svg'

export const Bio = () => (
    <Box
        width="100%"
        height={{min:"400px"}}
        pad={{bottom:"xlarge"}}
    >
            <Box
                height={{min:"400px"}}
                width="100%"
                direction="row"
                gap="large"
                pad={{horizontal:"large"}}
            >
                <Box width={{min:"max-content"}} align="center" justify="center">
                    <Box height="250px" width="250px">
                        <Avatar/>
                    </Box>
                    <Text size="small" 
                        color="dark-5"
                        style={{
                            textTransform:"uppercase",
                            letterSpacing:"0.2em",
                            transform:"translateY(-10px)"
                        }}
                    >
                        B.sc. Computer Science<br/>
                        University of Manitoba
                    </Text>
                </Box>
                <Box margin="large" gap="medium">
                <Text 
                    color="accent-2"
                        weight="bold"
                        textAlign="start" 
                        size="xxlarge"
                        style={{lineHeight:"1.5em", fontFamily:"book antigua"}}
                    >
                        Computer Scientist by trade |<br/> Designer by heart
                    </Text>
                <Box
                    pad="large"
                    align='start'
                    background="neutral-3"
                    height="fit-content"
                    width="100%"
                    gap="medium"
                >

                    <Text textAlign="start" style={{letterSpacing:"0.1em", fontWeight:"lighter"}}>
                        I create graphic art, user interfaces and web applications (to name a few). My computer is my canvas! 
                        
                        <br/><br/><LinkHover>&#x205B; LEARN MORE about me and what lights up my life</LinkHover> 
                        <br/><LinkHover>&#x205B; CONTACT ME for business inquiries</LinkHover>

                    </Text>
                </Box>
                </Box>

            </Box>
    </Box>
)

const LinkHover = styled(Anchor)`
    font-weight: lighter;
    color: ${(props)=>props.theme.global.colors['dark-2']};
    &:hover {
        text-decoration: none;
        letter-spacing:0.2em;
    }
    transition: all .4s linear;
`