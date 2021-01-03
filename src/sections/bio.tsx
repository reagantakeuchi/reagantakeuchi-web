import React from 'react'
import { Box, Text, Anchor } from 'grommet'
import { Avatar } from '../components/avatar'
import styled from 'styled-components'
import { useDeviceContext } from '../device-context'
// import {ReactComponent as Squig} from '../assets/squiggle.svg'

export const Bio = () => {
    const device = useDeviceContext();
    if(device==='mobile') {
        return (<MobileBio/>)
    }
    return (
        <WebBio/>
    )
}

const MobileBio = () => (
    <>
    <Box background="dark-2" direction="row" >
        <Box width={{min:"max-content"}} align="center" justify="center">
            <Box height="150px" width="150px">
                <Avatar/>
            </Box>
        </Box>
        <Box 
            pad={{vertical: 'medium', left:'large'}} 
            border={{side:"left", size:"3px", color:"light-2"}}
            margin={{left:"large", vertical:"large"}}
        >
            
            <Text 
                color="light-2"
                weight="bold"
                textAlign="start" 
                size="xlarge"
                style={{lineHeight:"1.5em"}}
            >
                    Computer Scientist 
                    <br/>by trade<br/> 
                    Designer by heart
            </Text>
        </Box>
    </Box>
    </>
)

const WebBio = () => (
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
                        style={{lineHeight:"1.5em"}}
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
                    elevation="large"
                >

                    <Text textAlign="start" style={{letterSpacing:"0.1em", fontWeight:"lighter"}}>
                        I create graphic art, user interfaces and web applications.<br/> My computer is my canvas! 
                        
                        <br/><br/>
                        <LinkHover>
                            {"Learn more "}
                            <span style={{fontWeight:"lighter"}}>
                                about me and what lights up my life
                            </span>
                        </LinkHover> 
                        <br/>
                        <LinkHover href='/contact'>
                            {"Contact me "} 
                            <span style={{fontWeight:"lighter"}}>
                             for business inquiries 
                            </span>
                        </LinkHover>

                    </Text>
                </Box>
                </Box>

            </Box>
    </Box>
)

const LinkHover = styled(Anchor)`
    color: ${(props)=>props.theme.global.colors['dark-2']};
    &:hover {
        text-decoration: none;
        letter-spacing:0.2em;
    }
    transition: all .4s linear;
`