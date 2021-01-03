import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components';
import { RedirectIcon } from '../style';
import {ReactComponent as Insta} from '../assets/insta.svg'
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg'
import { HamMenu } from '../assets/hamburger_menu';
import { useDeviceContext } from '../device-context';

export const Nav = () => {
    const device = useDeviceContext();

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
            <HamMenu {...hamburger[device]}/>
            <Box direction="row" align="center" gap="small">
                <RedirectIcon stroke="dark-2">
                    <Insta height="30px"/>
                </RedirectIcon>
                <RedirectIcon stroke="dark-2">
                    <LinkedIn height="30px"/>
                </RedirectIcon>
            </Box>


        </Box>
        
    )
}
const Clickable = styled(Text)`
    &:hover {
        cursor: pointer;
    }
`

const Spaced = styled(Box)`
    letter-spacing: 0.1em;
`
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