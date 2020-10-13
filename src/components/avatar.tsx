import React from 'react'
import { Box, Image } from 'grommet'
import Portrait from '../assets/portrait2.png';
import styled from 'styled-components';

export const Avatar = () => (
        <Box height={{min:"100%", max:"100%"}} width="100%">
            <Circle width="fit-content">
                <Image fit="cover" src={Portrait}/>
            </Circle>
        </Box>
)

const Circle = styled(Box)`
clip-path: circle(40% at 50% 45%);
`

const Scale = styled(Box)`
    transform: scale(0.75, 0.75);
`