import React from 'react';
import styled from 'styled-components';
import { Anchor, Text, Button as ButtonG, Box, ButtonType } from 'grommet'


export const SubText = styled(Text)`
    letter-spacing: 0.3rem;
    line-height: 2rem;
    color: ${(props)=>props.theme.global.colors['dark-1']};
`

export const Button = ({children, ...props}:{children: any}&ButtonType) => (
    <>
    <ButtonHover label={
        <ButtonLabel 
            direction="row" 
            gap="small" 
            align='center' 
            justify="center"
        >
            {children}
        </ButtonLabel>
        }
        style={{borderRadius: 0}} 
        primary
        {...props}
    />
    </>
)


const ButtonLabel = styled(Box)`
    letter-spacing: 0.2em;
    line-height: 1.5em;
    text-align: start;
    transition: letter-spacing 0.3s linear;
`
const ButtonHover = styled(ButtonG)`
        &:hover {
            ${ButtonLabel} {
                letter-spacing: 0.3em;
            }
        }
`
export const RedirectIcon = styled(Anchor)<{stroke?:string}>`
    ${(props) => {
        const {colors} = props.theme.global;
        const {stroke} = props;
        return `
            ${stroke && `
                .cls-1 {
                    fill: ${colors[stroke]};
                }
                .cls-2 {
                    stroke: ${colors[stroke]};
                }
            `};
            &:hover {
                cursor: pointer;
                .cls-1 {
                    fill:#e4e4e4;
                    stroke:${colors['dark-2']};
                }
                .cls-2 {
                    fill:${colors['dark-2']};
                }
            }
        `
    }}

`