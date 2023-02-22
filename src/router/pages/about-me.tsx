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
  return (
    <Box
      height="100%"
      justify="around"
      border
      width={{ max: "100%" }}
    >
      <Box
        width="100%"
        height={{ min: "300px" }}
        direction="row"
        justify="center"

      >
        <Box
          width="20%"
          height="400px"
          align="center"
          pad={{ left: "large" }}
        >
          <Image fit="contain" src={MeAndMill} />
        </Box>
        <Box
          width="60%"
          height={{ min: "300px" }}
          pad={{ right: "large" }}
          justify="center"
        >
          <Box align="start">
            <Heading textAlign="start" level={2}>
              I'm Reagan (she/her),
              <br />
              <Text color="brand" size={"medium"}>
                and that's Millie (also she/her)
              </Text>
              <br />
              <Bio size="small" />
            </Heading>
            <Button>
              Let's chat!
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <BottomButtons /> */}
    </Box>
  );
};

export default AboutMe;


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
    I graduated from the University of Manitoba in 2017 with a major in Computer Science
    <br />
    My full time gig is as a product designer at{" "}
    <A href="http://boldcommerce.com">Bold Commerce</A>
    <br />

    A little more about me... <br/>
    I love to create - I run a small business creating custom digital art{" "}
    <A href={instagram}>@designbyrea</A> <br />
    and do some freelance design work in my spare time <br/>

    I have a passion for functional fitness and Olympic Weightlifting - I get my fix at {" "}

    <A href="https://undefeatedperformance.ca/">Undefeated Health & Performance </A>
    where I'm a Level 2 CrossFit Trainer

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
