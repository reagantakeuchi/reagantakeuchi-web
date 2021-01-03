import React from 'react'
import { Box, Form, FormField, TextArea, Image, Text, Button } from 'grommet'
import { Send } from 'grommet-icons'
import styled from 'styled-components'
import Selfie from '../../assets/portrait.png'

export const Contact = () => {
    return (
        <Box 
            height="80vh" 
            direction="row"
            margin="large" 
            align="center"
        > 
            <Box
                align="center"
                style={{
                    letterSpacing:"1.5em",
                    fontFamily:"book antigua",
                    transform:"rotate(-90deg)",
                }}
                width="20px"
            >
                <Text size="large" color="dark-3" weight="bold"> 
                    CONTACT 
                </Text>
            </Box>
            <Box 
                height="300px" 
                align="center" 
                justify="center" 
                background="neutral-1"
                style={{transform:"translateX(250px)"}}
            >
                <Image src={Selfie} height="300px" opacity="70%"/>
            </Box>
            <Box 
                pad='xlarge' 
                width="700px" 
                justify="start" 
                align="end" 
                background="dark-2"
                gap="medium"
            >
                <Form>
                    <FormElement label="Name" required/>
                    <FormElement label="Email" required/>
                    <FormElement label="Message" required>
                        <TextArea/>
                    </FormElement>
                    <Box>
                        Add ReCaptcha Here
                    </Box>

                </Form>
                <Button label={
                    <Box 
                        direction="row" 
                        gap="small" 
                        style={{letterSpacing:"0.1em"}} 
                        align='center' 
                        justify="center"
                    >
                        Send
                        <Plane>
                            <Send color="light-1"/>
                        </Plane>
                    </Box>
                }
                style={{borderRadius: 0}} 
                primary

                />
            </Box>

        </Box>
    )
}

const Plane = styled.div`
    >svg {
        transform: translateY(2px);
        > path {
            stroke-width: 1px;
        }
    }
`

const FormElement = styled(FormField)`
    > label {
        align-self: start;
    }
`

export default Contact;