import React from 'react'
import styled from 'styled-components'
import {Box, BoxTypes} from 'grommet'

export const Resume = ({...props}:BoxTypes) => (
    <Box
        margin={{horizontal:"large", vertical:"small"}}
        justify="center"
        align="center" 
        {...props}  
    >
    <SVG 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 16.09 15.87"
        width="60"
        height="60"
        style={{

        }}
    >
        <title>resume</title>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <g id="Layer_2-2" data-name="Layer 2">
                    <g id="Layer_4" data-name="Layer 4">
                        <line className="cls-1" x1="1.65" y1="1.79" x2="6.7" y2="1.79"/>
                        <line className="cls-1" x1="1.57" y1="3.8" x2="9.92" y2="3.8"/>
                        <line className="cls-1" x1="1.65" y1="5.81" x2="9.88" y2="5.81"/>
                        <line className="cls-1" x1="1.61" y1="7.86" x2="8.82" y2="7.86"/>
                        <line className="cls-1" x1="1.57" y1="9.87" x2="7.6" y2="9.87"/>
                        <line className="cls-1" x1="1.57" y1="11.88" x2="6.74" y2="11.88"/>
                        <line className="cls-1" x1="1.57" y1="13.93" x2="9.3" y2="13.93"/>
                        <path className="cls-2" d="M11.89,9.31c0,2.11,0,4.2,0,6.31l-11.67,0V.25l9.21,0L11.84,2.7V6.41M9.46.29V2.72h2.38m1.8,1.59.91-1.16,1.29,1L15,5.31,9.33,12.47l-1.52.4.13-1.41Zm0,0,1.31,1"/>
                    </g>
                </g>
            </g>
        </g>
    </SVG>
    </Box>
)

const SVG = styled.svg`
    .cls-1, .cls-2 {
        fill:none;
        stroke-linecap:round;
        stroke-width:0.5px;
    }
    .cls-1 { 
        stroke:#eae3d8;
        stroke-miterlimit:10;
    }
    .cls-2 {
        stroke:#e2dcd3;
        stroke-linejoin:round;
    }
`