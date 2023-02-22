import React from "react";
import { Box, Grid } from "grommet";
import styled from "styled-components";
import {Case} from './components/Case';
import {motion} from 'framer-motion';
import {  LinkDown } from "grommet-icons";
import { Intro } from "./components/Intro";
import devdocs from "../../../assets/devdocs.jpg";

export const Landing = () => {
  return (
    <Box>
      <HeroBanner />
      <Case title="Util" img={devdocs} href="/portfolio/util"/>
      {/* <Case title="Util"/> */}
    </Box>
  )
};

const HeroBanner = () => {
  return (
    <Grid 
      id="landing-hero-banner"
      fill="vertical" 
      columns={["auto"]} 
      rows={["80vh", "auto"]}
    >
      <Intro />
      <MotionArrowBounce
        animate={{ y: -14 }}
        dragTransition={{
          min: 0,
          max: 100,
          bounceDamping: 10
        }}
        transition={{    
          duration: 0.8,
          yoyo: Infinity,
          ease: "easeOut",
        }}
      >
        <LinkDown/>
      </MotionArrowBounce>
    </Grid>
  );
};

const MotionArrowBounce = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10%;
`



















export const GradientBox = styled(Box)`
  background: linear-gradient(90deg, #fbf9f7 10%, rgba(251, 249, 247, 0) 75%);
`;

export default Landing;

