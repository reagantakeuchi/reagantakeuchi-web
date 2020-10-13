import React from 'react'
import {Box} from 'grommet'
import styled from 'styled-components'

export const Branch = () => (
    <Box
        margin={{horizontal:"large", vertical:"small"}}
        justify="center"
        align="center" 
    >
        <SVG 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 15.05 21.25"
            width="55"
            height="55"
        >
            <title>branch</title>
            <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
            <path className="cls-1" d="M7.45,7.32,11,10.77M.5.5,4.13,4.06m8.23,6.25a2.19,2.19,0,1,0,2.19,2.19A2.19,2.19,0,0,0,12.36,10.31ZM4,4.18a2.32,2.32,0,0,0-.67,1.63,2.3,2.3,0,1,0,2.3-2.3A2.32,2.32,0,0,0,4,4.18M5.59,8.1v8.37m.1.08a2.1,2.1,0,1,0,2.1,2.1A2.1,2.1,0,0,0,5.69,16.55Z"/>
            </g>
            </g>
        </SVG>
    </Box>

)

const SVG = styled.svg`
    .cls-1 {
        fill:none;
        stroke:#eae3d8;
        stroke-linecap:round;
        stroke-miterlimit:10;
        stroke-width:0.75px;
    }
`