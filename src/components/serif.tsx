import React from 'react'
import {Text, TextProps} from 'grommet'
import styled from "styled-components"


export const Serif = ({children, ...props}:{children:any}&TextProps) => (
    <Font {...props}>
        {children}
    </Font>
)

const Font = styled(Text)`
    font-family: merriweather;
    letter-spacing: 0.3rem;
`