import React from 'react'
import { Box, Text, Grid, Anchor } from 'grommet'
import styled from 'styled-components'
import {ReactComponent as Email} from '../assets/email.svg'
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg'
import {ReactComponent as Insta} from '../assets/insta.svg'
import {ReactComponent as Git} from '../assets/github.svg'
import { RedirectIcon } from '../style'
import { createReactApp, githubProf, githubWeb, grommet, illustrator, instagram, linkedin, styledComponents } from '../static/links'
import { useDeviceContext } from '../context'

export const Footer = () => {
    const device = useDeviceContext();

    return (
        <Box width="100%" height="fit-content" direction="row">
            <Box width="70%" height="fit-content" pad={{horizontal:"medium", vertical:"large"}} background="light-1">
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
                align="end" 
                justify="end"
                wrap
            >
            {device==='mobile' ? <MobileIconGrid/> : <DesktopIconGrid/>}    
            <FooterText size="xsmall" textAlign="end">
                © REAGAN TAKEUCHI | 10.12.2020
            </FooterText>
            </Box>
        </Box>
    )
}

const DesktopIconGrid = () => {
    return (
        <Grid 
            rows={rows.desktop} 
            columns={rows.desktop} 
            areas={areas.desktop} 
            responsive
            gap="small"
        >
            <RedirectIcon gridArea="insta" href={instagram}>
                <Insta height="40px"/>
            </RedirectIcon>
            <RedirectIcon gridArea="linkedin" href={linkedin}>
                <LinkedIn height="40px"/>
            </RedirectIcon>
            <RedirectIcon gridArea="email">
                <Email height="40px"/>
            </RedirectIcon>
            <RedirectIcon gridArea="github" href={githubProf}>
                <Git height="40px"/>
            </RedirectIcon>
        </Grid>
    )
}

const MobileIconGrid = () =>{

    return (
        <Grid 
            rows={rows.mobile} 
            columns={cols.mobile} 
            areas={areas.mobile} 
            responsive
            style={{padding:"16px 0px"}}
            gap="xsmall"
        >
            <RedirectIcon gridArea="insta" href={instagram}>
                <Insta height="34px"/>
            </RedirectIcon>
            <RedirectIcon gridArea="linkedin" href={linkedin}>
                <LinkedIn height="34px"/>
            </RedirectIcon>
            <RedirectIcon gridArea="email">
                <Email height="34px"/>
            </RedirectIcon>
            <RedirectIcon gridArea="github" href={githubProf}>
                <Git height="34px"/>
            </RedirectIcon>
        </Grid>
    )
}

const rows = {
    mobile: ['auto','auto'],
    desktop: ['auto'],
    bigScreen: ['auto']
}

const cols = {
    mobile: ['40px', '40px'],
    desktop: ['60px','60px','60px', '60px'],
    bigScreen: ['60px','60px','60px', '60px'] 
}

const areas = {
    mobile: [
        { name: 'insta', start: [0, 0], end: [0, 0] },
        { name: 'linkedin', start: [1, 0], end: [1, 0] },
        { name: 'email', start: [0, 1], end: [0, 1] },
        { name: 'github', start: [1, 1], end: [1, 1] }
    ],
    desktop: [    
        { name: 'insta', start: [0, 0], end: [0, 0] },
        { name: 'linkedin', start: [1, 0], end: [1, 0] },
        { name: 'email', start: [2, 0], end: [2, 0] },
        { name: 'github', start: [3, 0], end: [3, 0] }
    ],
    bigScreen: [    
        { name: 'insta', start: [0, 0], end: [0, 0] },
        { name: 'linkedin', start: [1, 0], end: [1, 0] },
        { name: 'email', start: [2, 0], end: [2, 0] },
        { name: 'github', start: [3, 0], end: [3, 0] }
    ]
}


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
