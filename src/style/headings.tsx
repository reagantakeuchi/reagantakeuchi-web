import React from "react";
import styled from "styled-components";
import { Text } from "grommet";

type Heading = {
  level?: number;
  children: any;
};

export const Heading = ({level ,children}: Heading) => {

  switch (level) {
    case 1:
      return <Heading1> {children} </Heading1>;
    case 2:
      return <Heading2> {children} </Heading2>;
    case 3:
      return <Heading3> {children} </Heading3>;
    case 4:
      return <Heading4> {children} </Heading4>;
    default:
      return <Heading1>{children}</Heading1>;
  }
};

const Heading1 = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-1"]};
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 4.5rem;
`;

const Heading2 = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-1"]};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.5rem;
`;

const Heading4 = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-1"]};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

const Heading3 = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-1"]};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  padding-bottom: 8px;
`;
