import React from 'react'
import { Button as ButtonG, ButtonProps} from 'grommet'

export const Button = (props: ButtonProps) => (
    <ButtonG {...props} style={{borderRadius:'0px'}}/>
)