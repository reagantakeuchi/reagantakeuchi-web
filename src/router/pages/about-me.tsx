import React from "react";
import { Box, Heading, Image, Stack, Text, TextProps } from "grommet";
import { useHistory } from "react-router-dom";
import { Button, SubText } from "../../style";
import Selfie from "../../assets/portrait.png";
import MeAndMill from "../../assets/millieandme.png";

import { Devices, useDeviceContext } from "../../context";
import styled, { keyframes } from "styled-components";
import { instagram } from "../../static/links";

export const AboutMe = () => {
  const device = useDeviceContext();

  return (
    <Box
      height="100%"
      justify="between"
      width={{ max: "100%" }}
      style={{ overflow: "hidden" }}
    >
      <Box>
        <AboutHeading device={device} />
      </Box>
      <Box
        width="100%"
        height={{ min: "300px" }}
        direction="row"
        pad={{ top: "large" }}
      >
        <Box
          width="50%"
          background="brand"
          align="center"
          justify="center"
          pad={{ left: "large" }}
        >
          <Heading textAlign="start" level={2}>
            Full Stack Software Developer + Freelance Digital Artist <br />
            By Day
          </Heading>
        </Box>
        <Box
          width="50%"
          height={{ min: "300px" }}
          pad={{ right: "large" }}
          justify="center"
        >
          <Heading level={2} textAlign="end">
            Functional Fitness Coach + <br />
            Stretchy Pant Consultant <br />
            By Night
          </Heading>
        </Box>
      </Box>
      {device === "mobile" ? <MobileBio /> : <DesktopBio />}
      <BottomButtons />
    </Box>
  );
};

export default AboutMe;

const DesktopBio = () => (
  <Box direction="row" pad={{ horizontal: "xlarge", vertical: "large" }}>
    <Box pad={{ horizontal: "large" }}>
      <Image src={MeAndMill} height="600px" opacity="0.7" />
    </Box>
    <Box align="center">
      <Text size="100px" alignSelf="start" weight="bold">
        Hi!
      </Text>
      <Heading textAlign="start" level={2}>
        I'm Reagan (she/her),
        <br />
        <Text color="neutral-4" size={"medium"}>
          and that's Millie (also she/her)
        </Text>
        <br />
        <Bio size="medium" />
      </Heading>
    </Box>
  </Box>
);

const MobileBio = () => (
  <Box pad={{ horizontal: "xlarge", vertical: "large" }} gap="large">
    <Box pad={{ horizontal: "large" }} direction="row">
      <Image src={MeAndMill} height="400px" opacity="0.7" />
      <Text size="100px" alignSelf="center" weight="bold">
        Hi!
      </Text>
    </Box>
    <Box align="center">
      <Heading textAlign="start" level={2}>
        I'm Reagan (she/her),
        <br />
        <Text color="neutral-4" size={"medium"}>
          and that's Millie (also she/her)
        </Text>
        <br />
        <Bio size="small" />
      </Heading>
    </Box>
  </Box>
);

const BottomButtons = () => {
  const history = useHistory();

  return (
    <Box
      width="100%"
      direction="row"
      justify="between"
      style={{ opacity: "0.5" }}
    >
      <Box width="max-content" height="20%" pad="medium">
        <Button
          onClick={() => {
            history.goBack();
          }}
          color="none"
          plain
        >
          &larr; go back
        </Button>
      </Box>
      <Box width="max-content" height="20%" pad="medium">
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          color="none"
          plain
        >
          to the top &uarr;
        </Button>
      </Box>
    </Box>
  );
};

const aboutP = {
  mobile: {
    align: "center",
    justify: "around",
    pad: { top: "xlarge" },
  },
  desktop: {
    justify: "around",
  },
  bigScreen: {
    justify: "around",
  },
};

const AboutHeading = ({ device }: { device: Devices }) => (
  <Box
    height={device === "mobile" ? "75vh" : "85vh"}
    {...(aboutP[device] as any)}
  >
    <Box>
      <Stack>
        <Box
          align="center"
          justify="center"
          background="neutral-1"
          {...imageBoxP[device]}
        >
          <Image
            src={Selfie}
            height={device === "mobile" ? "200px" : "300px"}
            opacity="0.7"
          />
        </Box>
        <Box {...(textBoxP[device] as any)}>
          <Heading {...(headingP[device] as any)}>
            Dog Mom. <br />
            Plant Enthusiast. <br />
            Lifts Heavy Things. <div style={{ opacity: "0.3" }}>(for fun)</div>
          </Heading>
        </Box>
      </Stack>
    </Box>

    <Box width="100%" align="center">
      <SubText>
        this is me
        <Bounce pad={{ top: "small" }}> &darr; </Bounce>
      </SubText>
    </Box>
  </Box>
);

const Bio = ({ ...props }: TextProps) => (
  <Text {...props}>
    I majored in Computer Science at the University of Manitoba where I
    graduated in 2017
    <br />I run a small business creating custom digital art{" "}
    <A href={instagram}>@designbyrea</A> <br />
    I freelance graphic design from time-to-time <br />
    My full time gig is as a developer at{" "}
    <A href="http://sightlineinnovation.com">Sightline Innovation Inc.</A>
    <br />
    I'm a Level 2 CrossFit Trainer at{" "}
    <A href="https://norakcrossfit.com/">CrossFit Norak </A>in Winnipeg, MB{" "}
    <br />
    And when I'm not doing those things,
    <br /> I'm training my girl Millie over there to be a therapy dog!
  </Text>
);

const imageBoxP = {
  desktop: {
    height: { max: "300px" },
    style: { transform: "translateX(250px)" },
  },
  bigScreen: {
    height: { max: "300px" },
    style: { transform: "translateX(250px)" },
  },
  mobile: {
    width: "100%",
    style: { transform: "translateX(-120px)" },
  },
};
const textBoxP = {
  desktop: {
    align: "start",
    margin: { horizontal: "xlarge", vertical: "large" },
  },
  bigScreen: {
    align: "start",
    margin: { horizontal: "xlarge", vertical: "large" },
  },
  mobile: {
    margin: { vertical: "large", horizontal: "medium" },
    align: "end",
    justify: "end",
  },
};

const headingP = {
  desktop: {
    textAlign: "end",
    level: 2,
  },
  bigScreen: {
    textAlign: "end",
    level: 2,
  },
  mobile: {
    textAlign: "start",
    level: 3,
  },
};

const bouncing = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
`;

const Bounce = styled(Box)`
  animation: ${bouncing} 2s infinite;
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.global.colors["neutral-2"]};
  &: hover {
    color: ${(props) => props.theme.global.colors["neutral-3"]};
  }
`;
