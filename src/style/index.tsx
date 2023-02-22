import React from "react";
import styled, { keyframes } from "styled-components";
import { Anchor, Text, Button as ButtonG, Box, ButtonType } from "grommet";

export * from "./headings";

export const SubText = styled(Text)`
  letter-spacing: 0.1rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: #ffffff;
    @media (max-width: 480px) {
      font-size: .8rem;
      line-height: 1.2rem;
  }
`;

export const HeroHeading = styled(Text)`
  font-weight: bold;
  font-size: 5rem;
  line-height: 5.5rem;
  letter-spacing: 0.2rem;
  @media (max-width: 480px) {
      font-size: 3rem;
      line-height: 3.5rem;
  }
`;

export const Button = ({
  children,
  ...props
}: { children: any } & ButtonType) => (
  <ButtonStyled
    plain
    label={<ButtonLabel>{children}</ButtonLabel>}
    {...props}
  />
);

const ButtonLabel = styled(Text)`
  text-transform: uppercase;
  font-weight: 550;
  font-size: 0.9rem;
  text-align: start;
  transition: letter-spacing 0.3s linear;
  color: ${(props) => {
    return `
            ${props.theme.global.colors["dark-2"]};
        `;
  }};
`;
const hoverButton = (props: any) => keyframes`
 from { 
    transform: translate(0px, 0px);
     background: ${props.theme.global.colors["light-3"]}; 
     box-shadow: 0px 4px 16px rgba(0, 0, 0, 0);
    }
 to { 
     background: ${props.theme.global.colors["light-4"]}; 
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
     transform: translate(-2x, -2px);
    }
`;

const ButtonStyled = styled(ButtonG)`
  border-radius: 4px;
  padding: 16px 36px;
  background: ${(props) => props.theme.global.colors["light-3"]};
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.global.colors["light-4"]};
    animation: ${hoverButton} 0.3s linear;
  }
`;

export const RedirectIcon = styled(Anchor)<{ stroke?: string }>`
  ${(props) => {
    const { colors } = props.theme.global;
    const { stroke } = props;
    return `
            ${
              stroke &&
              `
                .cls-1 {
                    fill: ${colors[stroke]};
                }
                .cls-2 {
                    stroke: ${colors[stroke]};
                }
            `
            };
            &:hover {
                cursor: pointer;
                .cls-1 {
                    fill:#e4e4e4;
                    stroke:${colors["dark-2"]};
                }
                .cls-2 {
                    fill:${colors["dark-2"]};
                }
            }
        `;
  }}
`;

export const Body = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-2"]};
  font-size: 0.9rem;
  text-align: start;
  line-height: 1.1rem;
`;