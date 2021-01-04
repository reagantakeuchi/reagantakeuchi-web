import styled from 'styled-components';
import { Anchor, Text } from 'grommet'

export const SubText = styled(Text)`
    letter-spacing: 0.3rem;
    line-height: 2rem;
    color: ${(props)=>props.theme.global.colors['dark-1']};
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