import { Box, Heading, Text } from "grommet";
import React from "react";
import UnderConstruction from "./under-construction";
import { Troubleshoot } from "grommet-icons";
import { instagram } from "../../static/links";
import { RedirectIcon } from "../../style";
import { Instagram } from "grommet-icons";

export const Store = () => {
  return (
    <Box align="center" justify="center">
      <Troubleshoot size="large" />
      <Heading level={2} color="text-xweak">
        design by rea <br />
        e-comm coming soon!
      </Heading>
      <Box
        pad="small"
        direction="row"
        justify="center"
        align="center"
        gap="small"
      >
        <Text {...textProps}>Check out and contact on Instagram</Text>
        <RedirectIcon href={instagram} style={{ transform: "translateY(4px)" }}>
          <Instagram height="30px" />
        </RedirectIcon>
      </Box>
      - or -
      <Box pad="small">
        <Text {...textProps}>Send me an email hello@reagantakeuchi.com</Text>
      </Box>
      {/* <UnderConstruction/> */}
    </Box>
  );
};

const textProps = {
  size: "large",
};
export default Store;
