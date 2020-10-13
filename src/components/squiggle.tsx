import React from 'react'
import {ReactComponent as Squig} from '../assets/squiggle.svg';
import { Box } from 'grommet';
import styled from 'styled-components';

export const Squiggle = ({viewport, width, height}:{viewport?: string, width?: string, height?:string}) => {
    return (
        <Box height="100%" width="100%">
            <HoverSvg 
                xmlns="http://www.w3.org/2000/svg" 
                id="squiggle"
                viewBox="0 0 1000 108.4"
            >
            <defs>
            </defs>
            <title>Asset 2</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                    <path className="cls-1" d={pointsFinal}/>
                </g>
            </g>
            
        </HoverSvg>   

        </Box>
    )
}

const points =["M0,106.6C58.7","111.13","103","103","132.58","94.88c64.37-17.8","121-45.38","121-45.38C284","34.65","302.18","23","332.92","21.56c5.51-.25","60.23-2.24","67.93","22.51","5","16.1-11.39","38.58-29.86","45.67-7.94","3.05-22.31","5.77-27.23-.88-3.93-5.32-.06-14.3","1.22-17.26","0","0","5.88-13.65","22.43-22.15","20.36-10.46","94.87-7.94","194.16","8.68l40.69","5S628.9","67.79","650,58.71s24.59-26.05","24.59-26.05","3.51-10-24-6.74-26.64","30.45-26.64","30.45c1.3","8.18","4.4","19.12","12.59","28.4","22.39","25.35","65.75","19","109.78","12.58","10.36-1.51","75.07-15","126.47-38.35","35-15.9","44.79-24.3","80.21-36.88A326.23","326.23","0","0","1","1012.4,7.19S1053.09-1","1095",".75c14.31.6","19.69.68","25.3","1.18a368.33","368.33","0","0","1","38.13","5.33"]
const pointsFinal = "M0,51.77c15.32,0,30.2.61,45-4.17C66.76,40.55,84,23.9,105.29,15.19c21-8.61,37.6-18.33,43.75-12.34,5.36,5.22.12,19.2-4,28.16-1.67,2.81-13.73,23.39-6.43,31.72A10.88,10.88,0,0,0,145.36,66c18.33,2.86,30.72-26.67,67.43-45.79,4.76-2.48,21.28-10.92,26.78-5.52,3.26,3.21,0,8.74,3.15,19.69,1.79,6.3,3.68,12.91,8.27,15,11.21,5,26.43-22.67,42.43-18.42,6.43,1.71,6.16,6.75,16.92,13,8.23,4.76,15.82,5.91,22.12,7a94.33,94.33,0,0,0,26.83.81"
const HoverSvg = styled.svg`

    stroke: #eed7c5;
    fill: none;
    stroke-miter-limit: 10px;
    stroke-width: 2px;
    &:hover {
        stroke-dasharray: 2000;
        stroke-dashoffset: 2000;
        animation: dash 4s linear forwards;
    }

    @keyframes dash {
        to {
          stroke-dashoffset: 0;
        }
      }
` 
