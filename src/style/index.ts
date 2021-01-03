import styled from 'styled-components';
import { Anchor } from 'grommet'


export const RedirectIcon = styled(Anchor)<{stroke?:string}>`
    ${(props) => {
        const {colors} = props.theme.global;
        const {stroke} = props;
        return `
            ${stroke && `
                .cls-1 {
                    stroke: ${colors[stroke]};
                }
                .cls-2 {
                    fill: ${colors[stroke]};
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