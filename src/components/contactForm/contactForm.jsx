import React, { useState } from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import Noty from 'noty';

import Button from '../formElements/button/button';
import { Container } from '../../views/servicesView/servicesView.styles';
import { ContactFormContainer, ButtonDiv } from './contactForm.styles';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', services: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const sendNotification = () => {
    new Noty({
      text: 'Thank you for your mail. We will contact you shortly'
    }).show();
  };

  const resetForm = () => {
    setValues({ name: '', email: '', services: '', message: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = values;
    const templateParams = {
      send_to: 'info@mindplus.biz',
      sent_by: 'info@mindplus.biz',
      from_name: name,
      email,
      to_name: 'Mindplus Admin',
      message_html: message
    };
    await emailjs.send('info@mindplus.biz', 'template_HODWN9od', templateParams, 'user_d6JNSmosRt6azEHgC1dwe');
    // new Noty({
    //   text: 'Thank you for your mail. We will contact you shortly'
    // }).show();
    resetForm();

    new Noty({
      layout: 'topRight',
      theme: 'sunset',
      closeWith: ['click'],
      text: 'Thank you for your mail. We will contact you shortly',
      animation: {
        open: 'animated bounceInRight', // Animate.css class names
        close: 'animated bounceOutRight' // Animate.css class names
      }
    }).show();
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
