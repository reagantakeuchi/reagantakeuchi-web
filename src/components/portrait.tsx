import React from 'react'
import { Box, Image, Stack } from 'grommet';
import styled from 'styled-components';
import PortraitPhoto from '../assets/portrait2.png';

export const Portrait = () => (
    <Stack>
        <Offset background="neutral-1" height="250px" width="200px">
        </Offset>  
        <Box width="200px" height="200px">
            <Image fit="cover" src={PortraitPhoto}/>
        </Box>
    </Stack>
)

const Offset = styled(Box)`
    transform: translate(30px, 20px);
`