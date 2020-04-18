import React, { useState } from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';

import Button from '../formElements/button/button';
import { Container } from '../../views/servicesView/servicesView.styles';
import { ContactFormContainer, ButtonDiv, Notify } from './contactForm.styles';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', services: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const sendNotification = () => {
    const node = document.createElement('p');
    const textnode = document.createTextNode('Thank you for your mail. We will contact you shortly');
    node.appendChild(textnode);
    document.getElementById('notify').appendChild(node);
  };

  const resetForm = () => {
    setValues({ name: '', email: '', services: '', message: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = values;
    // resetForm();
    const templateParams = {
      send_to: 'info@mindplus.biz',
      sent_by: 'info@mindplus.biz',
      from_name: name,
      email,
      to_name: 'Mindplus Admin',
      message_html: message
    };
    emailjs.send('info@mindplus.biz', 'template_HODWN9od', templateParams, 'user_d6JNSmosRt6azEHgC1dwe');
    resetForm();
    sendNotification();
    setTimeout(() => {
      document.getElementById('notify').style.display = ' none';
    }, 4000);
  };

  return (
    <Container>
      <h1>Get in Touch</h1>
      <div id="notify" />
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
