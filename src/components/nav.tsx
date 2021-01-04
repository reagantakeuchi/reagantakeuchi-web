import React, { useState } from 'react'
import { Anchor, Box, Button, Layer } from 'grommet'
// import styled from 'styled-components';
import { RedirectIcon, SubText } from '../style';
import {ReactComponent as Insta} from '../assets/insta.svg'
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg'
import { HamMenu } from '../assets/hamburger_menu';
import { Devices, useDeviceContext } from '../device-context';
import {Close} from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { instagram, linkedin } from '../static/links';

export const Nav = () => {
    const device = useDeviceContext();
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Box
            width="100%"
            height="max-content"
            pad="20px"
            align="center"
            justify="between"
            direction="row"
            background='light-2'
        >
            <HamMenu {...hamburger[device]} onClick={()=>{setMenuOpen(!menuOpen)}}/>
            <Box direction="row" align="center" gap="small">
                <RedirectIcon stroke="dark-2" href={instagram}>
                    <Insta height="30px"/>
                </RedirectIcon>
                <RedirectIcon stroke="dark-2" href={linkedin}>
                    <LinkedIn height="30px"/>
                </RedirectIcon>
            </Box>

            {menuOpen && <Menu device={device} exit={()=>{setMenuOpen(false)}}/>}
        </Box>
        
    )
}

const Menu = ({exit}:{device:Devices, exit:()=>void}) => {

    return (
    <Layer onEsc={exit} onClickOutside={exit} modal position={"top-left"}>
        <Box pad="large">
            <Box width="100%" align="start">
                <Button plain onClick={exit} hoverIndicator>
                    <Close color="dark-1"/>
                </Button>
            </Box>

            <Box align="start" justify="center" pad="medium">
                <MenuItem href="/" exit={exit}> HOME </MenuItem> <br/>
                <MenuItem href="about-me" exit={exit}> ABOUT ME </MenuItem> <br/>
                <MenuItem href="portfolio" exit={exit}> PORTFOLIO </MenuItem> <br/>
                <MenuItem href="shop" exit={exit}> SHOP - DESIGN BY REA </MenuItem> <br/>
                <MenuItem href="contact" exit={exit}> CONTACT </MenuItem> 
            </Box>
        </Box>
    </Layer>
)}

const MenuItem = ({children, exit, href}:{children: any, exit:()=>void, href:string}) => {
    const history = useHistory();

    const redirect = () => {
        history.push(href);
        exit();
    }

    return (
    <Anchor onClick={redirect}>
        <SubText>
            {children}
        </SubText>
    </Anchor>
)}


// const Clickable = styled(Text)`
//     &:hover {
//         cursor: pointer;
//     }
// `

// const Spaced = styled(Box)`
//     letter-spacing: 0.1em;
// `
const hamburger = {
    mobile:{
        width:"20px",
        height:"20px"
    },
    desktop:{
        width: "24px",
        height:"24px",
    },
    bigScreen:{
        
    }
}