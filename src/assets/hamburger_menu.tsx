import React from 'react'
import styled from 'styled-components'

export const HamMenu = ({...props}:React.SVGProps<SVGSVGElement>) => {
    return (
        <Clickable>
        <svg viewBox="0 0 100 80" width="40" height="40" {...props}>
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
        </svg>
        </Clickable>
  )
}

const Clickable = styled.div`
    &:hover {
        cursor: pointer;
    }
`