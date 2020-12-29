import React from 'react'
import { Box, Text, Grid, Anchor } from 'grommet'
import styled from 'styled-components'
import {ReactComponent as Email} from '../assets/email.svg'
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg'
import {ReactComponent as Insta} from '../assets/insta.svg'
import {ReactComponent as Git} from '../assets/github.svg'

const illustrator="https://www.adobe.com/ca/products/illustrator.html"
const grommet="https://v2.grommet.io/"
const createReactApp="https://reactjs.org/docs/create-a-new-react-app.html"
const styledComponents="https://styled-components.com/"
const githubWeb="https://github.com/reagantakeuchi/reagantakeuchi-web"
const githubProf="https://github.com/reagantakeuchi"
const linkedin = "https://www.linkedin.com/in/reagan-takeuchi-a647421b9/"

export const Footer = () => {
    
    return (
        <Box width="100%" height="fit-content" direction="row">
            <Box width="70%" height="fit-content" pad="medium" background="light-1">
                <FooterText textAlign="start" size="xsmall">
                        This website and all of it's parts were thoughtfully designed, created, and developed by me. 
                        <br/>
                        With the help of some of my favorite tools, frameworks, and libraries:
                        <br/>
                        <br/><B/> 
                        <SubLink href={createReactApp}> Create React App</SubLink> <B/> 
                        <SubLink href={grommet}> Grommet</SubLink> <B/> 
                        <SubLink href={styledComponents}> Styled Components </SubLink> <B/> 
                        <SubLink href={illustrator}> Adobe Illustrator</SubLink> <B/>
                        <br/>
                        <br/> <Link href={githubWeb}>View the source code on my github &rarr;</Link>
                    </FooterText>
            </Box>
            <Box 
                width="30%" 
                background="dark-3" 
                pad="medium"
                gap="medium" 
                align="end" 
                justify="end"
            >
                <Grid rows={rows} columns={cols} areas={areas}>
                    <HoverIcon gridArea="insta">
                        <Insta height="40px"/>
                    </HoverIcon>
                    <HoverIcon gridArea="linkedin" href={linkedin}>
                        <LinkedIn height="40px"/>
                    </HoverIcon>
                    <HoverIcon gridArea="email">
                        <Email height="40px"/>
                    </HoverIcon>
                    <HoverIcon gridArea="github" href={githubProf}>
                        <Git height="40px"/>
                    </HoverIcon>
                </Grid>
            <FooterText size="xsmall" textAlign="end">
                © REAGAN TAKEUCHI | 10.12.2020
            </FooterText>
            </Box>
        </Box>
    )
}

const rows=['auto']
const cols = ['60px','60px','60px', '60px']
const areas = [    
    { name: 'insta', start: [0, 0], end: [0, 0] },
    { name: 'linkedin', start: [1, 0], end: [1, 0] },
    { name: 'email', start: [2, 0], end: [2, 0] },
    { name: 'github', start: [3, 0], end: [3, 0] }

]

const B = () => (
    <Text>
        |
    </Text>
)

const FooterText = styled(Text)`
    font-weight: lighter;
    letter-spacing: 0.1em;
`

const Link = styled(Anchor)`
    text-decoration: none;
    color: ${(props)=>props.theme.global.colors['dark-2']};
    &:hover{
        text-decoration: underline;
    }
`

const SubLink = styled(Anchor)`
    text-decoration: none;
    font-weight: lighter;
    color: ${(props)=>props.theme.global.colors['dark-2']};
    &:hover{
        text-decoration: underline;
    }
`

const HoverIcon = styled(Anchor)`
    &:hover {
        cursor: pointer;
        .cls-1 {
            fill:#e4e4e4;
            stroke:${(props)=>props.theme.global.colors['dark-2']};
        }
        .cls-2 {
            fill:${(props)=>props.theme.global.colors['dark-2']};
        }
    }
`