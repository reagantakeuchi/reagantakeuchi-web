import React from "react";
import { Box, Image, Stack, Grid, Text, Anchor } from "grommet";
import HeroImage from "../../assets/HeroImage.jpg";

// import Portrait from '../assets/portrait.png';
// import Hi from '../assets/hi.png';
import styled from "styled-components";
import { useDeviceContext } from "../../context";
import { Button, SubText, HeroHeading, Heading } from "../../style";
import { useHistory } from "react-router-dom";
import {
  Book,
  Code,
  Gallery,
  PersonalComputer,
  Paint,
  Select,
  Instagram,
  LinkedinOption,
  Github,
  MailOption,
} from "grommet-icons";

export const Landing = () => {
  const device = useDeviceContext();
  if (device === "mobile") {
    return <MobileLanding />;
  }
  return <DesktopLanding />;
};

const MobileLanding = () => {
  return (
    <Box pad="large" background="light-2" justify="center" gap="medium">
      <Box
        gap="medium"
        justify="center"
        animation={{
          type: "slideUp",
          duration: 3000,
        }}
      >
        <SubText>HELLO I'M</SubText>
        <HeroHeading color="dark-3" textAlign="start">
          Reagan <br /> Takeuchi
        </HeroHeading>
        <SubText textAlign="start">
          UX/UI Designer | Front End Developer
        </SubText>
      </Box>
      <Box
        width="100%"
        height={{ max: "30%" }}
        pad={{ vertical: "medium" }}
        animation={{
          type: "slideUp",
          duration: 3000,
        }}
      >
        {/* <Image fit="cover" src={HeroImage}/> */}
      </Box>
    </Box>
  );
};

export const DesktopLanding = () => {
  return (
    <Grid fill="vertical" columns={["auto"]} rows={["85vh", "auto", "auto"]}>
      <HeroBanner />
      <CVSummary />
    </Grid>
  );
};

const HeroBanner = () => {
  const history = useHistory();

  return (
    <Box direction="row" pad={{ left: "large" }}>
      <Stack fill anchor="bottom">
        <Stack fill>
          <Box height="97%" width="100%">
            <Image fill="horizontal" fit="cover" src={HeroImage} />
          </Box>
          <GradientBox width="100%" height="100%" />
          <Box
            align="start"
            gap="medium"
            justify="center"
            animation={{
              type: "slideUp",
              duration: 3000,
            }}
            height="100%"
          >
            <SubText>HELLO I'M</SubText>
            <HeroHeading color="dark-3" textAlign="start">
              Reagan <br /> Takeuchi
            </HeroHeading>
            <SubText textAlign="start">
              UX/UI Designer | Front End Developer
            </SubText>
          </Box>
        </Stack>
        <Box width={{ min: "40vw" }}>
          <Button
            fill="horizontal"
            onClick={() => {
              history.push("/portfolio");
            }}
          >
            Visit my portfolio
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

const CVSummary = () => {
  return (
    <Box pad="xlarge" alignContent="center" justify="center">
      <Grid
        columns={["1/3", "1/3", "1/3"]}
        fill="horizontal"
        gap={{ row: "xlarge", column: "small" }}
        justify="center"
      >
        <CVItem heading="Digital Art" icon={<Paint color="dark-3" />}>
          Reagan runs and operates her own small business where she recreates
          photos of pets and loved ones in a digital color block style
        </CVItem>
        <CVItem
          heading="Master of Business Administration - Student"
          icon={<Book color="dark-3" />}
        >
          Currently enrolled in the program at the University of Manitoba,
          Reagan plans to graduate in 2024 with a concentration in Management
          and Leadership
        </CVItem>
        <CVItem
          heading="Freelance graphic and web design"
          icon={<Gallery color="dark-3" />}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
          mauris in ipsum consequat gravida. Vivamus ultrices dolor eget est
          sollicitudin efficitur.
        </CVItem>
        <CVItem heading="UX/UI design" icon={<Select color="dark-3" />}>
          Reagan works as a product designer at Bold Commerce in Winnipeg, MB
          where she focuses on user experience and user interface design
        </CVItem>
        <CVItem
          heading="Bachelor of Science - Computer Science"
          icon={<PersonalComputer color="dark-3" />}
        >
          In 2017, Reagan completed her Bachelor of Science with a major in
          Computer Science from the University of Manitoba
        </CVItem>
        <CVItem heading="Front end development" icon={<Code color="dark-2" />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
          mauris in ipsum consequat gravida. Vivamus ultrices dolor eget est
          sollicitudin efficitur.
        </CVItem>
      </Grid>
      <Box fill="horizontal" align="center">
        <Box width="40vw" pad={{ top: "xlarge" }}>
          <Button fill="horizontal">View full CV</Button>
        </Box>
      </Box>
    </Box>
  );
};

const CVItem = ({
  heading,
  children,
  icon,
}: {
  heading: String;
  children: any;
  icon: JSX.Element;
}) => {
  return (
    <Grid rows={["auto", "flex"]}>
      <Box pad={{ bottom: "xsmall" }}>{icon}</Box>
      <Box width={{ max: "350px" }} align="start" gap="xsmall">
        <Heading level={3}>{heading}</Heading>
        <Body>{children}</Body>
      </Box>
    </Grid>
  );
};

const Body = styled(Text)`
  color: ${(props) => props.theme.global.colors["dark-2"]};
  font-size: 0.9rem;
  text-align: start;
  line-height: 1.1rem;
`;

export const GradientBox = styled(Box)`
  background: linear-gradient(90deg, #fbf9f7 10%, rgba(251, 249, 247, 0) 75%);
`;

export default Landing;
