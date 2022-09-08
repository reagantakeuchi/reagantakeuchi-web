import React, { useState } from "react";
import {
  Box,
  Form,
  FormField as FormFieldG,
  TextInput as TextInputG,
  TextArea as TextAreaG,
  Button,
} from "grommet";
import styled from "styled-components";
import { Heading } from "../../style";
import { Send } from "grommet-icons";
export const UnderConstruction = () => {
  return (
    <Box
      align="center"
      pad={{ top: "medium", bottom: "large" }}
      background="light-2"
      margin="medium"
    >
      <ContactForm />
    </Box>
  );
};

const defaultValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [value, setValue] = useState(defaultValue);
  const [success, setSuccess] = useState(false);

  return (
    <FormContainer pad="large" background="light-3" width="500px">
      <Box direction="row">
        <Heading level={2}>
          <Send color="dark-1" />
          {" Contact Me"}
        </Heading>
      </Box>

      <Form
        name="contact-form"
        value={value}
        onChange={(nextValue: any, { touched }) => {
          console.log("Change", nextValue, touched);
          setValue(nextValue);
        }}
        validate="blur"
        method="post"
        onSubmit={(props: any) => {
          console.log(props);
        }}
      >
        <input type="hidden" name="contact-form" value="contact" />
        <FormField label="Name" name="name" required>
          <TextInput name="name" type="text" />
        </FormField>
        <FormField
          label="Email"
          name="email"
          validate={() => validEmail(value.email)}
          required
        >
          <TextInput name="email" type="text" />
        </FormField>
        <FormField label="Subject" name="subject" required>
          <TextInput name="subject" type="text" />
        </FormField>
        <FormField label="Message" name="message" required>
          <TextArea name="message" resize={false} />
        </FormField>
        <Button label="Send" type="submit" />
      </Form>
    </FormContainer>
  );
};

const validEmail = (email: string) => {
  const valid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!valid) return "enter a valid email";
};

const TextInput = styled(TextInputG)`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
`;
const TextArea = styled(TextAreaG)`
  width: 100%;
  min-height: 150px;
  font-size: 0.9rem;
  font-weight: 400;
`;

const FormField = styled(FormFieldG)`
  width: inherit;
  align-items: start;
  font-size: 0.9rem;
  font-weight: 400;
  & > span {
    font-size: 0.9rem;
    font-weight: 400;
  }
  & > label {
    font-size: 0.9rem;
  }
  & > div {
    width: 100%;
    border: none;
  }
  & > ${TextInput} {
  }
`;

const FormContainer = styled(Box)`
  text-align: start;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export default UnderConstruction;
