import React from "react";
import { Box, BoxProps, Text } from "grommet";
import styled from "styled-components";

export const InfoContainer = ({
  children,
  header,
  ...props
}: { children?: any; header?: string } & BoxProps) => {
  return (
    <Box pad="xsmall" {...props}>
      {/* <Box width="100%" height="100%" border={{color:"light-2"}}> */}
      <Box margin="small">
        <Box
          margin={{ vertical: "small", horizontal: "medium" }}
          border={{ side: "bottom", color: "brand" }}
        />
        <FontFamily>{header}</FontFamily>
        <Box
          margin={{ vertical: "small", horizontal: "medium" }}
          border={{ side: "bottom", color: "brand" }}
        />
      </Box>

      {children}
      {/* </Box> */}
    </Box>
  );
};

const FontFamily = styled(Text)`
  font-family: Merriweather;
`;
