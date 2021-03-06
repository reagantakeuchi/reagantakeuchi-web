import React from 'react'
import styled from 'styled-components'
import {Box, BoxTypes} from 'grommet'

export const Book = ({...props}:BoxTypes) => (
    <Box
        margin={{horizontal:"large", vertical:"small"}}
        justify="center"
        align="center"   
        {...props}
    >
        <SVG 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 26.56 16.47"
            width="80"
            height="60"
        >
            <title>book_2</title>
            <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
            <path className="cls-1" d="M.43,1.8H2.35V14.73h3.7s4.05.15,5.42,1.26l-11.09.1ZM3.31.44V13.61c.62,0,1.49,0,2.54,0,.73,0,1.74.06,2.53.17a10,10,0,0,1,4.31,1.81V2.36a2.15,2.15,0,0,0-.25-.29,3.8,3.8,0,0,0-.83-.65A9.13,9.13,0,0,0,8.43.51,35.43,35.43,0,0,0,3.31.44Z"/>
            <path className="cls-1" d="M26.19,16.09,15.09,16c1.37-1.12,5.42-1.27,5.42-1.27h3.7V1.8h1.93ZM18.13.5A9.1,9.1,0,0,0,15,1.41a4.07,4.07,0,0,0-.84.65,1.87,1.87,0,0,0-.24.3V15.58a9.76,9.76,0,0,1,4.31-1.8,22.09,22.09,0,0,1,2.53-.17c1,0,1.92,0,2.53,0V.43A38.68,38.68,0,0,0,18.13.5Z"/>
            <path className="cls-1" d="M4.46,1.77V5c.35,0,.72,0,1.12,0a11.36,11.36,0,0,1,2,.25v-3c-.35-.09-.72-.16-1.12-.23A15.55,15.55,0,0,0,4.46,1.77Z"/>
            <path className="cls-1" d="M7.77,8.12v3.62a5.21,5.21,0,0,1,2.34.44,5,5,0,0,1,1.31.83l.05-3.65a5.54,5.54,0,0,0-1.28-.74A6.1,6.1,0,0,0,7.77,8.12Z"/>
            <path className="cls-1" d="M15.42,5.68l0,4.31a11.11,11.11,0,0,1,5.86-.43l0-4.55A11.32,11.32,0,0,0,17,5.19,9.75,9.75,0,0,0,15.42,5.68Z"/>
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
        stroke-linejoin:round;
        stroke-width:0.5px;
    }
`