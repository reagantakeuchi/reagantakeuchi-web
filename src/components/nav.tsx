import React from 'react'
import { Box, Text } from 'grommet'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = () => {
    const history = useHistory();

    return (
        <Box 
            width="100%" 
            justify="between" 
            direction="row" 
            pad={{vertical: "xsmall", horizontal:"large"}}
            background="neutral-3"
        >

            <Clickable onClick={()=>{history.push('/')}}>H O M E</Clickable>
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