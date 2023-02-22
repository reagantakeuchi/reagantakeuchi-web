import React, {useEffect, useState} from "react";
import { Box, Image, Stack, Grid, Text, Anchor } from "grommet";
import HeroImage from "../../assets/HeroImage.jpg";
import styled from "styled-components";
import { useDeviceContext } from "../../context";
import { Button, SubText, HeroHeading, Heading, Body } from "../../style";
import {motion} from 'framer-motion';
import {
  Code,
  PersonalComputer,
  Paint,
  Select,
  LinkDown
} from "grommet-icons";

type AnimateBlockType = {
  index: number,
  content?: string,
  start: number,
  end: number,
  icon?: JSX.Element
}

const ITEMS: string[] = [
  "UX/UI Design | Bold Commerce",
  "Front End Developer",
  "University of Manitoba | Bachelor of Computer Science",
  "Freelance Graphic Design + Digital Art"
];

const ICONS = [
  <PersonalComputer/>,
  <Select/>,
  <Code/>,
  <Paint/>
]

const SHOWCHAR = 0.01
const TYPEWRITER_KEYPRESS = 0.05;
const TypewriterTime = (chars:number) => (TYPEWRITER_KEYPRESS+SHOWCHAR)*chars;


export const Landing = () => {

  return (
    <div>
      <HeroBanner />
      <Section/>
      <Section/>
      <Section/>

    </div>
  )
};

export const Section = () => {
  return (
    <Grid 
      pad={{vertical:"medium"}}
      fill
      gap="large"
      columns={["50%", "50%"]} 
    >
      <Box fill="horizontal" height="300px" background="#FFFFFF">
        Image
      </Box>
      <Box fill align="start" justify="center">
        <SubText>
          Case study
        </SubText>
        <Text size="72px" weight="bold">
          Util
        </Text>
      </Box>
    
    </Grid>
  )
}

export const HeroBanner = () => {
  return (
    <Grid 
      fill="vertical" 
      columns={["auto"]} 
      rows={["85vh", "auto"]}
    >
      <Intro />
      <LinkBounce
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
      </LinkBounce>
    </Grid>
  );
};

const LinkBounce = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 48px;
`

const Intro = () => {
  return (
    <Box direction="row" pad={{ left: "xlarge" }} background="#1a1a1a">
          <Box
            align="start"
            gap="small"
            justify="center"
            height="100%"
          >
            <SubText>HELLO I'M</SubText>
            <HeroHeading color="#ffffff" textAlign="start">
              Reagan <br /> Takeuchi
            </HeroHeading>
          </Box>
          <Box
            height="100%"
            width="40%"
            justify="center"
          >
            <CVSummaryBlock/>
          </Box>
    </Box>
  );
};

function buildTimer () {
  let prev = 0;
  let list = ITEMS.map((i, x)=>{
    let start = prev;
    prev = prev+TypewriterTime(i.length);
    
    return {
      index: x,
      content: i,
      icon: ICONS[x],
      start: start,
      end: prev
    }      
  })
  return list;
}

const CVSummaryBlock = () => {

  const [list, setList] = useState(buildTimer());
  const [curr, setCurr] = useState<AnimateBlockType>(list[0]);

  useEffect(() => {
    const timer =
      setInterval(() => {
        setCurr(list[((curr.index+1)%list.length)]);
      }, 3000);
    return () => clearInterval(timer);
  }, [curr]);


  return (
    <CVContainer
    >
      <CVSummaryItem 
        icon={curr.icon}
      >
        {curr.content}
      </CVSummaryItem>
    </CVContainer>
  )
}

const CVSummaryItem = ({children, icon}:{icon?:JSX.Element, children?:any}) => {
  const block ={
      hidden:{
        opacity: 0,
      },
      show: {
        opacity: 1,
        x: 80,
        animate:{
          transition: {repeat: "infinity"}
        }
      }
  }

  return (
      <CVItemAnimate
        variants={block}
        initial="hidden"
        animate="show"
      >
        <span 
          style={{display: "flex", gap:"10px"}}
        >
          {icon}
          <LineItem>
            {children}
          </LineItem>
        </span>

        <Line 
          transition={{ ease: "easeOut", duration: 1 }}
          animate={{width: "100%"}}
        />
      </CVItemAnimate>
  )
}




const LineItem = ({children}:{children:string}) => {
  const characters = children.split("");

  return (
    <AnimateText>
      {characters.map((item, i)=> {
        let del = (i*TYPEWRITER_KEYPRESS);
        return (
          <AnimateChar
            key={item+i}
            animate={{opacity: 1}}
            transition={{ delay: del, duration:SHOWCHAR}}
          >
            {item} 
          </AnimateChar>
        )
      })}
      
    </AnimateText>
  )
}

const CVContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`

const AnimateText = styled.div`
  text-align: start;
  margin-bottom: 12px;
`

const Line = styled(motion.div)`
  position: relative;
  width: 0%;
  border: 1px solid white;
  background: #FFFFFF;

  &:after {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    min-height: 10px;
    min-width: 10px;
    background: #FFFFFF;
    border-radius: 10px;
  }
`

const CVItemAnimate = styled(motion.div)`
  margin-bottom: 12px;
  top: 50%;
  position: relative;
  width: 100%;
`

const AnimateChar = styled(motion.span)`
  opacity: 0;
`

export const GradientBox = styled(Box)`
  background: linear-gradient(90deg, #fbf9f7 10%, rgba(251, 249, 247, 0) 75%);
`;

export default Landing;

