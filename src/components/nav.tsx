import React, { useState, useEffect } from 'react'
import { Box, Text } from 'grommet'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = () => {
    const history = useHistory();
    const [path, setPath] = useState(history.location.pathname)

    useEffect(()=>{
        setPath(history.location.pathname)
    },[history])

    return (
        <Box 
            width="100%" 
            justify="between" 
            direction="row" 
            pad={{vertical: "xsmall", horizontal:"large"}}
            background="neutral-3"
        >
            <Spaced direction="row" gap="medium">
                <Clickable onClick={()=>{history.push('/')}}>H O M E</Clickable>
                {">> "+ path.substring(1, path.length)}
            </Spaced>
            <Box direction="row" gap="small">
                <Text color="light-1">R </Text>
                <Text color="light-1">// </Text>
                <Text color="light-1">T A K E U C H I</Text>
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