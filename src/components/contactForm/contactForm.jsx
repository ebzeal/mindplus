import React, { useState } from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';

import Button from '../formElements/button/button';
import { Container } from '../../views/servicesView/servicesView.styles';
import { ContactFormContainer, ButtonDiv } from './contactForm.styles';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', services: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues({ ...'' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = values;
    // resetForm();
    const templateParams = {
      send_to: 'ebzeal@yahoo.com',
      sent_by: 'info@mindplus.biz',
      from_name: name,
      email,
      to_name: 'Mindplus Admin',
      message_html: message
    };
    emailjs.send('ebenezerajayi@gmail.com', 'template_UMzZJVO8', templateParams, 'user_ogPshr5ZODigQHF7m7jKB');
    resetForm();
  };

  return (
    <Container>
      <h1>Get in Touch</h1>
      <ContactFormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="formBasicEmail">
            <Label className="text-muted">Email address</Label>
            <Input
              type="email"
              name="email"
              value={values.email}
              className="inputStyle"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup controlId="formBasicName">
            <Label className="text-muted">Name</Label>
            <Input
              type="text"
              name="name"
              value={values.name}
              className="inputStyle"
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            <Label className="text-muted">Message</Label>
            <Input
              type="textarea"
              name="message"
              className="inputStyle"
              value={values.message}
              onChange={handleChange}
            />
          </FormGroup>
          <ButtonDiv>
            <Button text="submit">Submit</Button>
          </ButtonDiv>
        </Form>
      </ContactFormContainer>
    </Container>
  );
};

export default ContactForm;
