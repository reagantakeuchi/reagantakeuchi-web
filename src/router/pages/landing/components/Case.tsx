import React from 'react';
import {Grid, Box, Text ,Image, Anchor, Stack} from 'grommet';
import { SubText } from '../../../../style';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import { totalmem } from 'os';

type CaseType = {
  img?: string,
  title: string,
  href: string
}

export const Case = ({img, title, href}:CaseType) => {
  const gapSize = useMediaQuery({ query: "(min-device-width: 480px)" }) ? "large" : "small";
  const imageWidth = useMediaQuery({ query: "(min-device-width: 480px)" }) ? "50%" : "45%";
  return (
    <Grid 
      pad={{vertical:"medium"}}
      fill
      gap={gapSize}
      columns={["auto", imageWidth]} 
    >
      <Anchor href={href}>
        <CsImage fill="horizontal">
          <Stack fill>
            {img && <Image src={img} fill fit="cover"/>}
            <Overlay fill align="center" justify='center'>
             <SubText>
                Read more about {title}
             </SubText>
            </Overlay>
          </Stack>
        </CsImage>
      </Anchor>
      <Box fill align="start" justify="center">
        <SubText>
          Case study
        </SubText>
        <Anchor href={href} color="white">
          <CsTitle weight="bold" >
              {title}
          </CsTitle>
        </Anchor>
      </Box>
    </Grid>
  )
}


const Overlay = styled(Box)`
  opacity: 0;
  background: rgba(0,0,0,0.5);

`

const CsImage = styled(Box)`
  height: 300px;
  background: rgba(255,255,255,0.2);
  ${Overlay}:hover {
    opacity: 1;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
`

const CsTitle = styled(Text)`
  font-size: 4rem;
  line-height: 4.5rem;

  @media (max-width:480px) {
    font-size: 2.5rem;
    line-height: 2.2rem;
  }
`