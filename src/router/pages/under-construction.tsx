import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
export const UnderConstruction = () => {
    const history = useHistory();

    return (
        <Box 
            width="100%" 
            height="100vh" 
            align="center" 
            pad={{top:"xlarge"}}
            background="light-2"
        >
            <Box 
                height="fit-content" 
                border={{
                    size:"medium",
                    color:"neutral-2"
                }}
                pad="large" 
                gap="medium"
            >
                <Spaced size="large" style={{fontStyle:"italic"}}>
                    "Patience is a key element of success" - Bill Gates
                </Spaced>
                <Spaced>
                    All good things take time &mdash; more is coming soon
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