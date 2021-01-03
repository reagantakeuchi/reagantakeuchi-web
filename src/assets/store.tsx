import React from 'react'
import {Box, BoxTypes} from 'grommet'
import styled from 'styled-components'

export const Store = ({...props}:BoxTypes) => (
    <Box
        margin={{horizontal:"large", vertical:"small"}}
        justify="center"
        align="center" 
        {...props}
    >
        <SVG 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 26.05 30.25"
            width="55"
            height="55"
        >
            <title>store</title>
            <rect className="cls-1" x="2.44" y="14.34" width="23.54" height="14.43" rx="2" ry="2"/>
            <rect className="cls-1" x="3.74" y="0.5" width="20.5" height="5.62" rx="1.43" ry="1.43"/>
            <path className="cls-1" d="M5.25,6.46l-3.43,5s-1.35,3,1.4,3.48H26.65A2.37,2.37,0,0,0,28.89,12L24.74,6.07" transform="translate(-0.99 -0.5)"/>
            <rect className="cls-1" x="10.71" y="17.64" width="7.9" height="11.14" rx="0.6" ry="0.6"/>
            <line className="cls-1" x1="8.5" y1="6.08" x2="4.23" y2="14.34"/>
            <line className="cls-1" x1="11.32" y1="6.08" x2="9.22" y2="14.32"/>
            <line className="cls-1" x1="14.17" y1="6.18" x2="14.17" y2="14.38"/>
            <line className="cls-1" x1="16.98" y1="6.15" x2="19.25" y2="14.38"/>
            <line className="cls-1" x1="19.86" y1="6.18" x2="24.22" y2="14.32"/>
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