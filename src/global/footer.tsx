import React from "react";
import styled from "styled-components";
import { Anchor, Box, Grid, Text } from "grommet";


export const Footer = () => {
  const date = new Date();

  return (
  <Box fill pad="large">
      <Copywrite size="xsmall" textAlign="center">
        {"© REAGAN TAKEUCHI | " + date.getFullYear()}
      </Copywrite>
  </Box>
)};

const Copywrite = styled(Text)`
    opacity: 50%;
`

export default Footer;
