import React from 'react';
import { Box, Anchor, Text } from 'grommet';
import { HomeRounded } from 'grommet-icons';
import styled from 'styled-components';

type TemplateType = {
    title: string,
    type?: "Case study",
    client: string,
    children: any
}

export const Template = ({
    title, 
    type="Case study",
    client,
    children
}:TemplateType) => {
    return (
        <Box 
            direction='row'
            gap="small"
            fill
        >
            <Heading gap='medium' width={"30%"} align="start">
                <Anchor href="/">
                    <HomeRounded size="16px" color="white"/>
                </Anchor>
                <Title align="start">
                    {title}
                </Title>
                <Box align="start" border="bottom" fill="horizontal" pad={{bottom:"small"}}>
                    <SubTitle>
                    {type}
                    </SubTitle>
                    <SubTitle>
                    {client}
                    </SubTitle>
                </Box>
                <Disclaimer textAlign='start'>
                    Disclaimer: <br/><br/>
                    The work presented in this case study is being completed while the author is employed
                    at Bold Commerce. Bold Commerce owns the rights to this work and its use is solely
                    for the purpose of this case study. <br/><br/>The views and opinions expressed in this case study
                    are those of the author and do not necessarily represent the views of Bold Commerce.
                    <br/><br/>
                </Disclaimer>
            </Heading>

            <Body 
                pad={{top:"large", horizontal:"large" }}
                align="start" 
                margin={{left:"large"}} 
                fill="horizontal"
                background={{color: "light-1"}}
            >
                {children}
            </Body>
        </Box>
    )
}

const Disclaimer = styled(Text)`
    font-size: 0.7rem;
    line-height: 0.75rem;
    font-style: italic;
    opacity: 80%;
`

const Body = styled(Box)`
    border-radius: 8px 0px 0px 0px;
`

const Heading = styled(Box)`
    position: sticky;
    top: 20px;
    align-self: flex-start;
    padding: 48px 0px 48px 48px;
`

const StickyHeading = styled(Box)`
    position: sticky;
    top: 0;
`

const Title = styled(Box)`
    font-size: 3.5rem;
    font-family: courier new;
    font-weight: 700;
`

const SubTitle = styled(Box)`
    font-family: courier new;
    font-weight: 500;
    align-text: start;
`

export default Template;
