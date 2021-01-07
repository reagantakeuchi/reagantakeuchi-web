import React from 'react'
import { Box, Text, Anchor, Heading } from 'grommet'
import { Avatar } from '../components/avatar'
import styled from 'styled-components'
import { useDeviceContext } from '../context'
import { Button } from '../style'
import { useHistory } from 'react-router-dom'
// import {ReactComponent as Squig} from '../assets/squiggle.svg'

export const Bio = () => {
    const device = useDeviceContext();
    const history = useHistory();
    const nav = () => {
        history.push("about-me")
    }
    if(device==='mobile') {
        return (<MobileBio nav={nav}/>)
    }
    return (
        <WebBio nav={nav}/>
    )
}

const LearnMore = ({onClick}:{onClick:()=>void}) => (
    <Box width="fit-content">
        <Button onClick={onClick}>
            learn more about me
        </Button>
    </Box>
)

const MobileBio = ({nav}:{nav:()=>void}) => (
    <>
    <Box background="dark-2" direction="row" >
        <Box width={{min:"max-content"}} align="center" justify="center">
            <Box height="150px" width="150px">
                <Avatar/>
            </Box>
            <Text size="8px" 
                color="dark-5"
                style={{
                    textTransform:"uppercase",
                    letterSpacing:"0.1em",
                }}
            >
                B.sc. Computer Science<br/>
                University of Manitoba
            </Text>

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

const WebBio = ({nav}:{nav:()=>void}) => (
    <Box
        width="100%"
        height={{min:"400px"}}
        pad={{vertical:"medium"}}
        align="center"
        justify="center"
    >
        <Box
            height={{min:"400px"}}
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
            <Box 
                pad="large" 
                margin="large"
                border={{side: "left", size:"6px", color:"accent-2"}}
            >
                <Heading 
                    color="accent-2"
                    textAlign="start"
                    style={{lineHeight:"1.5em"}}
                >
                    Computer Scientist by trade <br/> Designer by heart
                </Heading>
                <LearnMore onClick={nav}/>
            </Box>
        </Box>
    </Box>
)

// const LinkHover = styled(Anchor)`
//     color: ${(props)=>props.theme.global.colors['dark-2']};
//     &:hover {
//         text-decoration: none;
//         letter-spacing:0.2em;
//     }
//     transition: all .4s linear;
// `