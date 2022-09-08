import React from "react";
import { Box, BoxProps } from "grommet";

export const Layout = ({
  children,
  ...props
}: { children: any } & BoxProps) => (
  <Box pad={{ horizontal: "150px" }} {...props}>
    {children}
  </Box>
);
