import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import { SubText, HeroHeading } from '../../../../style';
import styled  from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    PersonalComputer,
    Book
  } from "grommet-icons";

export const Intro = () =>(
  <Box direction="row" pad={{ left: "xlarge" }} gap="xlarge" wrap>
    <Title/>
    <CvContainer
      justify="center"
    >
      <CVSummaryBlock/>
    </CvContainer>
  </Box>
);

const Title = () => (
  <TitleContainer
    align="start"
    gap="small"
    justify="center"
  >
    <SubText>HELLO I'M</SubText>
    <HeroHeading color="#ffffff" textAlign="start">
      Reagan <br /> Takeuchi
    </HeroHeading>
  </TitleContainer>
);

const CVSummaryBlock = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const maxTime = (CV_ITEMS[index].length * STAGGER_CHARS + DELAY) * 1000;
    const timer =
      setInterval(() => {
        setIndex((index+1)%CV_ITEMS.length);
      }, maxTime);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      {CV_ITEMS.map((item, i)=>{
        return (
          <AnimatePresence key={i}>
            {i==index && <CvAnimateItem icon={ICONS[i]}>
              {item}
            </CvAnimateItem>}
          </AnimatePresence>
        )
      })}
      <MotionLineDraw 
        transition={{ ease: "easeOut", duration: 1 }}
        animate={{width: "100%"}}
      />
    </div>
  )
}
  
const CvAnimateItem = ({children, icon}:{icon?:JSX.Element, children?:any}) => {
  const block = {
    hidden: { opacity: 0 },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: STAGGER_CHARS },
    }),
  };
  const child = {
    show: {
      opacity: 1,
      transition: {duration: KEYSTROKE}
    },
    hidden: {
      opacity: 0,
    },
  };
  let characters = Array.from(children);

  return (
      <MotionCvItemTyping
        variants={block}
        initial="hidden"
        animate="show"
      >
        <LineItemContainer>
            <StyledIcon>
              {icon}
            </StyledIcon>
            {characters.map((character:any, index:any)=>{
              return (<MotionCharTypewriter variants={child} key={index}>{character}</MotionCharTypewriter>)
            })}
        </LineItemContainer>
      </MotionCvItemTyping>
  )
}

const TitleContainer = styled(Box)`
  @media (max-width: 480px) {
   justify-content: end;
   padding-bottom: 8px;
  }
`
const CvContainer = styled(Box)`
  width: 40%;
  @media (max-width:480px) {
    width: 90%;
    height: 100px;
  }
`
const MotionCharTypewriter = styled(motion.span)`
  vertical-align: middle;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`
const StyledIcon = styled.span`
  margin-right: 10px;
  vertical-align: middle;
  @media (max-width: 480px) {
     & > svg {
      display: none;
    }
  }
`
const LineItemContainer = styled.div`
  display: table;
  text-align: start;
`
const MotionCvItemTyping = styled(motion.div)`
  margin-bottom: 8px;
  position: relative;
  width: 100%;
`
const MotionLineDraw = styled(motion.div)`
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

  @media (max-width:480px) {
    display: none;
  }
`
/************** Constants ******************/
const ICONS = [
  <PersonalComputer/>,
  <Code/>,
  <Book/>
];
const CV_ITEMS: string[] = [
  "Product Designer @ Bold Commerce",
  "Front End Developer",
  "BSc Computer Science | University of Manitoba ",
];
const STAGGER_CHARS = 0.1;
const DELAY = 1;
const KEYSTROKE = 0.05;

/*******************************************/
export default Intro;