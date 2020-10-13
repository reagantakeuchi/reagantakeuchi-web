import React from 'react'
import { Box, Stack } from 'grommet'
import {theme} from '../style/theme';
import styled from 'styled-components';

export const Container = ({children}:{children?:any}) => {

    return (
        <Frame
            width="25%" 
            height={{max:"220px", min:"220px"}}
            margin="small"
        >
            <Stack anchor="top" fill>
                <Box 
                    width="100%"
                    height={{min: "220px"}}
                    style={{transform: "translateY(40px)"}}
                    border={{size:"small", color:"neutral-3"}}
                    pad={{top:"40px"}}
                >
                    {children}
                </Box>
                <Polygon/>
            </Stack>
        </Frame>

    )
}

const Polygon = () => (
    <Box width="100%" style={{transform:"rotate(90deg)"}}>
        <Box width="69px" height="80px">
            <svg 
                className="rotator"
                width="100%"
                height="100%"
                fill={theme.global.colors['neutral-4']}
                stroke={theme.global.colors['accent-1']} strokeWidth="2px"
                viewBox="40 75 220 250"
            > 
            <g>
            <polygon 
                    points="150,75 258,137.5 258,262.5 150,325 42,262.5 42,137.5"
                />
            </g>
        </svg>
        </Box>
    </Box>
)

const Frame = styled(Box)`
    .rotator { 
        animation-name: reverse; 
        animation-duration: 1s;
    }
    &:hover {
        cursor: pointer;
        opacity: 70%;
         .rotator{
            animation: rotation 6s infinite linear;
        }
    }
    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }

      @keyframes reverse {
        from {
          transform: rotate(90deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
`