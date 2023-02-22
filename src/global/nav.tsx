import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Anchor, Box, Button, Layer, Grid, Header, Tip } from "grommet";
import styled from "styled-components";
import { LinkedinOption, Github, Mail, RestroomWomen } from "grommet-icons";
import {
  githubProf,
  instagram,
  linkedin,
} from "../static/links";
import InstaFilled from '../assets/InstaFilled';
import { useMediaQuery } from "react-responsive";

export const Nav = () => {
  const [scrollTop, setScrollTop] = useState(true);
  // const dark = useLocation().pathname=='/' ? true : false;
  const dark = true;
  window.addEventListener('scroll', (e) => {
    const heroBanner = document.getElementById("landing-hero-banner");
    const heroHeight = heroBanner ? heroBanner.offsetHeight : 40;
    if(window.scrollY <= heroHeight){
      if(!scrollTop){
        setScrollTop(true);
      }
    }
    else {
      if(scrollTop){
        setScrollTop(false);
      }
    }
  });

  return (
    <StickyHeader
      opacity={scrollTop ? "100%" : "60%"}
      width="100%"
      pad={{vertical:"10px", horizontal:"24px"}}
      dark={dark}
    >
      <Socials dark={dark}/>
      <HomeText href={"/"} dark={dark}>Reagan Takeuchi</HomeText>
    </StickyHeader>
  );
};

const Socials = ({dark}:{dark:boolean}) => {
  const iconSize = useMediaQuery({ query: "(min-device-width: 480px)" }) ? "24px" : "16px";
  return (
    <Grid
    rows={["auto"]}
    columns={["auto"]}
    areas={gridAreas}
    responsive
    gap="small"
    align="center"
  >
    {/* <NavItem gridArea="about" href={"/about-me"} tip="About me">
      <RestroomWomen color="black" size={iconSize}/>
    </NavItem> */}
    <NavItem gridArea="email" href="/contact" tip="Contact">
      <Mail color="black" size={iconSize}/>
    </NavItem>
    <Line gridArea="divide" dark={dark}/>
    <NavItem gridArea="linkedin" href={linkedin} tip="LinkedIn">
      <LinkedinOption color="black" size={iconSize}/>
    </NavItem>
    <NavItem gridArea="insta" href={instagram} tip="Instagram">
        <InstaFilled height={iconSize}/>
    </NavItem>
    <NavItem gridArea="github" href={githubProf} tip="Github">
      <Github color="black" size={iconSize}/>
    </NavItem>

  </Grid>
  )
}

const ToolTip = ({content}:{content:string}) => {
  return (
    <ToolTipStyled>
      {content}
    </ToolTipStyled>
  )
}
const NavItem = ({gridArea, href, children, tip}:{gridArea:string, href:string, children:any, tip?:string}) => {
  return (
    <Anchor gridArea={gridArea} href={href}>
      <NavItemContainer>
        <Tip 
          plain
          dropProps={{ align: { top: 'bottom' } }}
          content={<ToolTip content={tip ? tip : href}/>}
        >
          <IconContainer>
          {children}
          </IconContainer>
        </Tip>
      </NavItemContainer>
    </Anchor>
  )
}

const ToolTipStyled = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
  margin: 10px;
  font-size: 10px;
`

const Line = styled(Box)<{dark:boolean}>`
  height: 100%;
  width: 1px;
  background: ${({dark})=>dark?"white":"black"};
`

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    display: inline-block;
    margin: auto;
  }
`

const NavItemContainer = styled.div`
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,1);
  border-radius: 4px;
  padding: 4px;
  &:hover{
    background: rgba(255,255,255, 1);
  }

  @media (max-width: 480px){
    width: 16px;
    height: 16px;
  }
`

const StickyHeader = styled(Header)<{opacity:string, dark:boolean}>`
  position: sticky;
  top: 0;
  opacity: ${({opacity})=>opacity};
  background: ${({theme, dark})=>dark ? theme.global.colors.black : theme.global.colors['light-1']};
`

const HomeText = styled(Anchor)<{dark:boolean}>`
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 400;
  color: ${({theme, dark}) => dark ? theme.global.colors["light-2"] : theme.global.colors.black};
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 480px){
    font-size: 0.6rem;
    letter-spacing: 0.05rem;

  }
`;

const gridAreasHide = [
  { name: "about", start: [0, 0], end: [0, 0] },
  { name: "email", start: [1, 0], end: [1, 0] },
  { name: "divide", start: [2, 0], end: [2, 0] },
  { name: "linkedin", start: [3, 0], end: [3, 0] },
  { name: "insta", start: [4, 0], end: [4, 0] },
  { name: "github", start: [5,0], end: [5,0]}
];

const gridAreas = [
  { name: "email", start: [0, 0], end: [0, 0] },
  { name: "divide", start: [1, 0], end: [1, 0] },
  { name: "linkedin", start: [2, 0], end: [2, 0] },
  { name: "insta", start: [3, 0], end: [3, 0] },
  { name: "github", start: [4, 0], end: [4, 0] },
];

