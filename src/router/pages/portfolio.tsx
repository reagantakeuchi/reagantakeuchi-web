import React from "react";
import { Box, Image, Stack, Card as CardG, Grid, BoxTypes } from "grommet";
import PortfolioBanner from "../../assets/PortfolioBanner.jpg";
import { Heading } from "../../style";
import styled, { keyframes } from "styled-components";

export const Portfolio = () => {
  return (
    <Box>
      <Banner />
      <Directory></Directory>
    </Box>
  );
};

const Banner = () => (
  <Stack anchor="left">
    <Image fill="horizontal" fit="cover" src={PortfolioBanner} />
    <Box
      animation={{
        type: "fadeIn",
        duration: 3000,
      }}
    >
      <Heading level={1}>Portfolio</Heading>
    </Box>
  </Stack>
);

const Directory = () => {
  return (
    <Grid
      columns={dirCols}
      gap="large"
      pad={{ top: "5%", bottom: "5%", left: "200px", right: "200px" }}
      justify="center"
      fill="horizontal"
    >
      <Card title="Util Feature Flags">
        <Image fill fit="cover" src={PortfolioBanner} />
      </Card>
      <Card title="Undefeated Re-Brand"></Card>
      <Card title="Journey Mapping"></Card>
      <Card title="Design By Rea">
        <Image fill fit="cover" src={PortfolioBanner} />
      </Card>
      <Card></Card>
      <Card></Card>
    </Grid>
  );
};

interface PCard extends BoxTypes {
  title?: string;
}

const Card = ({ title, ...props }: PCard) => (
  <InteractiveCard width="300px" height="300px">
    <Stack anchor="center" fill>
      {props.children}
      <CardOverlay />
      <Title align="center" justify="center">
        {title}
      </Title>
    </Stack>
  </InteractiveCard>
);

const dirCols = ["auto", "auto", "auto"];

const hoverOverlay = keyframes`
 from { 
     opacity: 0%;
}
 to { 
    opacity: 40%;
}
`;

const hoverTitle = keyframes`
 from { 
     opacity: 0%;
}
 to { 
    opacity: 100%;
}
`;

const CardOverlay = styled(Box)`
  height: 300px;
  width: 300px;
  background: #000000;
  opacity: 0%;
`;

const Title = styled(Box)`
  color: ${(props) => props.theme.global.colors["light-1"]};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.9rem;
  opacity: 0%;
  width: 300px;
  height: 50px;
`;

const InteractiveCard = styled(CardG)`
  &:hover {
    cursor: pointer;
    ${CardOverlay} {
      opacity: 40%;
      animation: ${hoverOverlay} 0.4s linear;
    }
    ${Title} {
      opacity: 100%;
      animation: ${hoverTitle} 0.4s linear;
    }
  }
`;

export default Portfolio;
