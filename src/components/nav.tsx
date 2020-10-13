import React from 'react'
import { Box, Text } from 'grommet'

export const Nav = () => {

    return (
        <Box 
            width="100%" 
            justify="between" 
            direction="row" 
            pad={{vertical: "xsmall", horizontal:"large"}}
            background="neutral-3"
        >

            <Text>H O M E</Text>
            <Box direction="row" gap="small">
                <Text color="light-1">R </Text>
                <Text color="light-1">// </Text>
                <Text color="light-1">T A K E U C H I</Text>
            </Box>
        </Box>
    )
}