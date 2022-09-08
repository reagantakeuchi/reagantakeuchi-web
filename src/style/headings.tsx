import React from "react";
import styled from "styled-components";
import { Text } from "grommet";

type Heading = {
  level?: number;
  children: any;
};

export const Heading = (props: Heading) => {
  const { level, children } = props;

  switch (level) {
    case 1:
      return <Heading1> {children} </Heading1>;
    case 2:
      return <Heading2> {children} </Heading2>;
    case 3:
      return <Heading3> {children} </Heading3>;
    default:
      return <Heading1>{children}</Heading1>;
  }
};

const Heading1 = styled(Text)`
  font-weight: bold;
  font-size: 4rem;
  line-height: 5.5rem;
  letter-spacing: 0.2rem;
  padding: 48px;
`;

const Heading2 = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-1"]};
  font-weight: bold;
  font-size: 2rem;
  padding: 16px 0px;
`;

const Heading3 = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-1"]};
  font-weight: 550;
  font-size: 1rem;
`;
