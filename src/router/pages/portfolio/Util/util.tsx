import React from 'react';
import { Box, Text, Anchor, Image as ImageG } from 'grommet';
import { Template } from '../Template';
import { Heading } from '../../../../style';
import styled from 'styled-components';
import CLUog from './images/CLU-original.jpg';
import CLUnewLayout from './images/CLU-new-layout.jpg';
import ShopConn1 from './images/ShopConnection-1.png';
import ShopConn2 from './images/ShopConnection-2.png';
import ShopConn3 from './images/ShopConnection-3.png';
import ShopConn4 from './images/ShopConnection-4.png';
import ShopConn5 from './images/ShopConnection-5.png';
import ShopConn6 from './images/ShopConnection-6.png';
import ErrorM1 from './images/ErrorMessage-1.png';
import ErrorM2 from './images/ErrorMessage-2.png';
import Jira from './images/Jira-example.jpg'
import CLUdropdown from './images/CLU-dropdown.jpg';
import CLUlinkShop from './images/CLU-link-shop.png';
import CLUtooltip from './images/CLU-tooltips.png';
import CLUlingo from './images/CLU-shop-lingo.png';
import ConnectionCheck from './images/CLU-check-connection.png';


const featureFlagDef = "https://www.atlassian.com/continuous-delivery/principles/feature-flags#:~:text=Feature%20flags%20(also%20commonly%20known%20as%20feature%20toggles)%20is%20a%20software%20engineering%20technique%20that%20turns%20select%20functionality%20on%20and%20off%20during%20runtime";
const jira = "https://en.wikipedia.org/wiki/Jira_(software)#:~:text=Jira%20(/%CB%88d%CA%92i%CB%90r%C9%99/%20JEE%2Dr%C9%99)%5B4%5D%20is%20a%20proprietary%20issue%20tracking%20product%20developed%20by%20Atlassian%20that%20allows%20bug%20tracking%20and%20agile%20project%20management."
const boldCommerce = "https://boldcommerce.com/"

export const Util = () =>{
    return (
        <Template title="Util" client="Bold Commerce">
            <Section heading="Bold Commerce" hierarchy={4}>
                <Body>
                    <Link href={boldCommerce}> Bold Commerce </Link> 
                    is a SaaS, eCommerce, technology company whose solutions help businesses enhance their 
                    online presence and boost revenue.
                </Body>
            </Section>
            <Section heading="What is Util?">
                <Body>
                    Util is an internal tool for Bold's merchant success (customer service)
                    team. They use Util to manage their client's accounts and commonly for
                    turning <Link href={featureFlagDef}>feature flags</Link> on/off for shops.
                </Body>
            </Section>
            <Section heading="My role" hierarchy={4}>
                <Body>
                    I was the sole designer on the internal tools team at Bold Commerce between March 2021
                    and January 2022. I collaborated closely with ~6 developers and a product manager.
                </Body>
            </Section>

            <Section heading="Some background" subheading="Context">
                <Body>
                    Many of our clients manage two (or more) stores. Store fronts that are used for testing
                    are known as staging environments. Companies will use 
                    <StyledText italic bold> staging environments</StyledText> to ensure
                    that changes to their store are tested first and won't cause issues that may result in down
                    time for their customer facing store. The customer facing store is known as their 
                    <StyledText italic bold> production store </StyledText> which is their main, customer facing, online sales channel.
                </Body> 
            </Section>
            <Section heading="Assumptions" hierarchy={4}>
                <Body>
                    Due to the fact that this tool is only used within the four walls of Bold, we knew our users 
                    and I was able to talk to them on demand. I could confidently infer that all users were technically
                    advanced and could handle a higher degree of change and complexity.
                </Body>
            </Section>
            <Section heading="Keeping the shops in sync" subheading='the problem'>
                <Body>
                    Both production and staging stores’ features flags must stay in proper sync with one 
                    another when the user attempts to add new feature flags. In order to do so, the system 
                    has to know that there was a relationship between the two stores as indicated by the
                     merchant success agent (the user). 
                     <br/><br/>
                     Our goal was to allow users to create a relationship 
                     between shops (link shops) so the system could enforce rules upon future users when they 
                     look to make changes to feature flags. 
                </Body>
                <Box direction="row">
                    <Image src={ShopConn1}>
                        All the feature flags included in the production shop also exist in the staging shops.
                    </Image>
                    <Image src={ShopConn2}>
                        Staging environment B is missing the purple feature flag.
                    </Image>
                </Box>
                <Box direction="row">
                    <Image src={ShopConn3}>
                        Both staging environments are missing the green feature flag.
                    </Image>
                    <Image src={ShopConn4}>
                        Staging environment C is missing the orange feature flag and cannot connect to the production shop.
                    </Image>
                </Box>
                
            </Section>
            <Section heading="Adding a new feature to Util" subheading='exploration'>
                <Body>
                    In the current layout of the shop's page in Util, all of the actions that can be performed on a shop are 
                    grouped near the bottom the page.
                    <br/><br/>
                    To understand what impact the order of the groupings have on the users I asked potential users 
                    <StyledText italic>“what is most important on this page?”</StyledText>. 
                    I learned the currency section is less important and that users 
                    are most frequently coming to this page to make a change to the shop.
                </Body>
                <Image src={CLUog}>
                    Util's original shop page
                </Image>
            </Section>
            <Section heading="Priotize and reorganize" hierarchy={4}>
                <Body>
                    To bring the action section closer to the top of the page I retained the groupings but 
                    created differentiation between “read only” information by putting them in collapsible 
                    panels and splitting the page vertically with them. The actions section not only was now 
                    available above the fold, but also created more space to add the new shop linking feature.
                </Body>
                <Image src={CLUnewLayout}>
                    The shop page with a new layout
                </Image>
                <Body>
                    By putting the informational (non-action based) content in panels, it also allowed me to de-prioritize the 
                    currency section by setting it to collapsed by default. Having the information minimized 
                    reduced the amount of information being displayed on the page, which allowed more important 
                    content to be further highlighted.
                </Body>
            </Section>
            <Section heading="Relationship status: it's complicated" hierarchy={4}>
                <Body>
                    We needed to be able to show the hierarchy each individual store held to the user. I went 
                    through several rounds of exploration and critique from both other designers and developers. 
                    I quickly understood that linking could get complicated quickly and needed to make it simple 
                    to add relationships and also understand them. 
                </Body>
            </Section>
            <Section heading="Taking inspiration from industry" hierarchy={4}>
                <Body>
                    I looked for ways to simplify the task of creating a relationship between shops when I began to look
                    at <Link href={jira}>JIRA's</Link> flow for linking work order tickets. Their use case is even more complex that ours, where tickets
                    can have a relationship based on many factors and be multi-generational. (A child of one can be the parent
                    of another). <br/><br/>
                    JIRA being a tool we use at Bold strengthened the ease of the flow for our users because their mental model was already trained.

                </Body>
                <Image src={Jira}>
                    <StyledText italic>
                        Screen grabs taken from the JIRA app
                    </StyledText>
                </Image>
            </Section>
            <Section heading="Applying it to our use case" subheading="prototype">
                <Box gap="medium">
                    <Body>
                        I repeated the dropdown method that JIRA was using to create a sentence-like 
                        structure when building the relationship. 
                    </Body>
                    <Box width="60%">
                        <ImageG src={CLUdropdown} fill fit="contain"/>
                    </Box>
                </Box>
                <Box gap="medium">
                    <Body>
                        The flow for searching for a shop repeats functionality that already exists within the 
                        application, so the user is familiar with it.
                    </Body>
                    <Box width="70%">
                        <ImageG src={CLUlinkShop} fill fit="contain"/>
                    </Box>
                </Box>
  
            </Section>
            <Section heading="Double check the connection" hierarchy={4}>
                <Body>
                    Connecting shops isn’t functionality we currently have in Util, however feature flags are. 
                    In order to maintain the rules we created for shop connections
                    , we have to check that the shops the user is looking to link have the necessary feature 
                    flags in common from the start. 
                </Body>
                <Box fill="horizontal" align="center" pad="medium">
                 <ImageG src={ConnectionCheck} fit="contain" width={"60%"}/>
                </Box>
                <Body>
                    I used the diagram I set out in the beginning to understand the errors that could occur 
                    at this stage in the attempted connection. The error message could vary depending on 
                    whether it was a child connecting to a parent or vice versa. 
                </Body>
                <Box direction="row" gap="medium">
                    <ImageG src={ErrorM1} width="60%" fit="contain"/>
                    <Box width="30%">
                        <ImageG src={ShopConn6} fit="contain"/>
                    </Box>
                </Box>
                <Box direction="row" margin={{top:"small"}} gap="medium">
                    <ImageG src={ErrorM2} width="60%" fit="contain"/>
                    <Box width="30%">
                        <ImageG src={ShopConn5} fit="contain"/>
                    </Box>
                </Box>
            </Section>
            <Section heading="A lot of reliance on the user" hierarchy={4}>
                <Body>
                    It was clear after presenting the issue to multiple groups that the diagram was important when 
                    visualizing the problem. Unfortunately in the interface we are more constrained to what 
                    information we could provide the user in terms of what feature flags are causing the issue. 
                    <br/><br/>
                    Ultimately, due to technical and time constraints we had to rely on the sophistication of the 
                    user to triage the issue. I went through multiple iterations and testing of error messages to 
                    clearly convey the issue the user is facing.
                </Body>
            </Section>

            <Section heading="Words are hard" hierarchy={4}>
                <Body>
                    Error messages were just the beginning of the struggles I’d face when trying to not only create
                    an intuitive user flow but also convey what the feature is in text. I created definitions for 
                    what we’d ultimately end up calling <StyledText bold> development stores </StyledText> 
                    <StyledText italic> - what I described earlier as staging environments </StyledText> 
                     and <StyledText bold>main stores </StyledText> <StyledText italic> - what was previously described as production shops. </StyledText>
                </Body>
                <Image src={CLUlingo}/>
                <Body>
                 When interviewing developers, they believed these titles were the best at describing the 
                    relationship that was occurring. It was found that words like production and staging were too 
                    closely tied to developer lingo, and parent/child were too vague.
                </Body>
            </Section>
            <Section heading="A little more help" hierarchy={4}>
                <Body>
                    The problem statement and acceptance criteria throughout the design process was consistently hard 
                    to grasp. In order to add some additional support to the users, I added tooltips in the headers of 
                    the linked shops groupings.  
                </Body>
                <Image src={CLUtooltip}/>
            </Section>
            <Section heading="What was the impact?" subheading='Results'>
                <Body>
                    Due to the internal nature of Util, there aren't any tracking or metrics associated
                    with it's usage. We only have word of mouth feedback to go off of. Ideally we would have been able 
                    to track the number of feature flag related incidents before and after the addition of this feature.
                    <br/><br/>
                    However, the feature was successfully implemented and is currently be used in production. Many of
                    Bold's largest clients have linked shops which has helped keep feature flags from being mishandled.
                </Body>
            </Section>
            <Section heading="A new problem arises" hierarchy={4}>
                <Body>
                    Now that feature flags play a primary role in the ability for shops to link, it became increasingly important
                    that the management of them is easy. In order to support the process of diagnosing feature flag related issues, work to improve the feature 
                    flag tab of Util became prioritized. <StyledText italic>The case study for feature flag tab improvements is part two of this case and is 
                    currently being written.</StyledText>
                </Body>
            </Section>
        </Template>
    )
}

const Section = ({
    children, 
    heading, 
    subheading,
    hierarchy=2
}:{children:any, heading: string, subheading?:string, hierarchy?:number}) => (
    <Box align="start" pad={{bottom: "large"}}>
        {subheading && 
            <Heading level={3}>
                {subheading}
            </Heading>
        }
        <Heading level={hierarchy}>
            {heading}
        </Heading>
        <Box pad={{top:"small"}}>
            {children}
        </Box>
    </Box>
)


const Body = styled(Text)`
    text-align: start;
    line-height: 2rem;
`

const StyledText = styled(Text)<{bold?:boolean, italic?:boolean, color?:string}>`
    ${({bold, italic, color})=>{
        const bolden = bold ? `font-weight: 600;` : `font-weight: normal;`;
        const italicize = italic ? `font-style: italic;` :``
        const colored = color ? `color: ${color};` : ``
        return bolden + italicize + colored;
    }} 
`

const Link = ({href, children}:{href:string, children: any})=> (
    <Anchor href={href} target="_blank" rel="noopener noreferrer">
        <StyledText color="#3E72BD">
            {children}
        </StyledText>
    </Anchor>
)

const Image = ({src, width="60%", children}:{src:string, width?: string, children?:any}) => (
    <Box fill justify='center' align='center'>
        <Box width={width} margin={{vertical:"small"}} gap="small">
            <ImageG src={src} fit="contain"/>
            {children && <Box>
                {children}            
            </Box>}
        </Box>
    </Box>
)

export default Util;