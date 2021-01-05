import React from 'react'
import { Box, Heading, Image, Stack } from 'grommet'
import { useHistory } from 'react-router-dom'
import { Button } from '../../style';
import Selfie from '../../assets/portrait.png'
import { Devices, useDeviceContext } from '../../context';

export const AboutMe = () => {
    const history = useHistory();
    const device = useDeviceContext();

    return (
        <Box
            height="100%"
            justify="between"
            width={{max:"100%"}}
            style={{overflow:"hidden"}}
        >
            <Box height="80%">
                <AboutHeading device={device}/>
            </Box>

            <Box width="max-content" height="20%" alignSelf="end" pad="medium">
                <Button onClick={()=>{history.goBack()}} color="none" plain>
                    &larr; go back
                </Button>
            </Box>
        </Box>
    )
}

const imageBoxP = {
    desktop: {
        height: {max:"300px"},
        style: {transform: "translateX(250px)"}
    },
    bigScreen: {
        height: {max:"300px"},
        style: {transform: "translateX(250px)"}
    },
    mobile: {
        width: "100%",
        style:{transform:"translateX(-120px)"}
    }
    
}
const textBoxP = {
    desktop: {
        align: "start",
        margin: {horizontal:"xlarge", vertical:"large"}
    },
    bigScreen: {
        align: "start",
        margin: {horizontal:"xlarge", vertical:"large"}
    },
    mobile: {
        margin: {vertical:"large", horizontal:"medium"},
        align: "end", 
        justify: "end",
    }
}

const headingP = {
    desktop: {
        textAlign: "end",
        level: 2
    },
    bigScreen: {
        textAlign: "end",
        level: 2
    },
    mobile: {
        textAlign: "start",
        level: 3
    }
}
const AboutHeading = ({device}:{device:Devices}) => (
 <Stack>
    <Box 
        align="center" 
        justify="center" 
        background="neutral-1"
        {...imageBoxP[device]}
    >
        <Image 
            src={Selfie} 
            height={device==='mobile'?"200px":"300px"} 
            opacity="0.7"
        />
    </Box>
    <Box {...textBoxP[device] as any}>
        <Heading {...headingP[device] as any}>
            Dog Mom. <br/>
            Plant Enthusiast. <br/>
            Lifts Heavy Things. <div style={{opacity:"0.3"}}>(for fun)</div>
        </Heading>
    </Box>
 </Stack>
)


export default AboutMe;