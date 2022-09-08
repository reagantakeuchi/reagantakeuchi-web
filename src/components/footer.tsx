import React from "react";
import styled from "styled-components";
import { Anchor, Box, Grid, Text } from "grommet";
import { Instagram, LinkedinOption, Github, MailOption } from "grommet-icons";
import {
  createReactApp,
  githubProf,
  githubWeb,
  grommet,
  illustrator,
  instagram,
  linkedin,
  styledComponents,
} from "../static/links";

export const Footer = () => (
  <Grid columns={["3/4", "1/4"]} rows={["auto"]} fill>
    <Box background="dark-3" pad="large"></Box>
    <Box background="dark-3" pad="medium" align="end" justify="end" wrap>
      <Grid
        rows={["auto"]}
        columns={["auto"]}
        areas={gridAreas}
        responsive
        gap="small"
      >
        <Anchor gridArea="insta" href={instagram}>
          <Insta>
            <Instagram />
          </Insta>
        </Anchor>
        <Anchor gridArea="linkedin" href={linkedin}>
          <LinkedinOption />
        </Anchor>
        <Anchor gridArea="email">
          <MailOption />
        </Anchor>
        <Anchor gridArea="github" href={githubProf}>
          <Github />
        </Anchor>
      </Grid>
      <Text size="xsmall" textAlign="end">
        © REAGAN TAKEUCHI | 09.06.2022
      </Text>
    </Box>
  </Grid>
);

const gridAreas = [
  { name: "insta", start: [0, 0], end: [0, 0] },
  { name: "linkedin", start: [1, 0], end: [1, 0] },
  { name: "email", start: [2, 0], end: [2, 0] },
  { name: "github", start: [3, 0], end: [3, 0] },
];

const Insta = styled.div`
  & > svg {
    stroke: none;
  }
`;

export default Footer;
