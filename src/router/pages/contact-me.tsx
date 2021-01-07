import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { MailOption } from 'grommet-icons'
export const UnderConstruction = () => {
    const history = useHistory();

    return (
        <Box 
            align="center" 
            pad={{top:"xlarge"}}
            background="light-2"
            margin="medium"
        >
            <Box 
                height="fit-content" 
                border={{
                    size:"medium",
                    color:"neutral-2"
                }}
                pad="large" 
                gap="medium"
                align="center"
            >
                <MailOption/>
                <Spaced size="large" style={{fontStyle:"italic"}}>
                    hello@reagantakeuchi.com
                </Spaced>
                <Spaced>
                    My contact form is under construction... for now, please email me
                </Spaced>
            </Box>
            <Box alignSelf="start" pad="large">
                <HoverLink onClick={()=>{history.goBack()}}> &larr; go back</HoverLink>
            </Box>
        </Box>
    )
}

const Spaced = styled(Text)`
    letter-spacing: 0.1em;
    color: ${(props)=>props.theme.global.colors['dark-5']};
`
const HoverLink = styled(Text)`
    letter-spacing: 0.1em;
    &:hover {
        letter-spacing: 0.2em;
        cursor: pointer;
    }
    transition: all .4s linear;

`

export default UnderConstruction;