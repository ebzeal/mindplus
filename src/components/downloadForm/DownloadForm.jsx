import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';

import { DownloadFormContainer, ButtonDiv, DownloadButton } from './DownloadForm.styles';

const DownloadForm = ({ isDownload }) => {
  const [values, setValues] = useState({ name: '', email: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues({ name: '', email: '', services: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email } = values;
    if (email || name === '') return null;
    const templateParams = {
      send_to: 'info@mindplus.biz',
      sent_by: 'info@mindplus.biz',
      from_name: name,
      email,
      to_name: 'Mindplus Admin',
      message_html: `${name}, email:${email}, just downloaded the free chapter of "On Your Marks: A Business Start-up Handbook"`
    };
    emailjs.send('info@mindplus.biz', 'template_HODWN9od', templateParams, 'user_d6JNSmosRt6azEHgC1dwe');
    resetForm();
    isDownload();
  };

  return (
    <DownloadFormContainer>
      <h2>Fill this form to download</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasicEmail">
          {/* <Label className="text-muted">Email address</Label> */}
          <Input
            type="email"
            name="email"
            value={values.email}
            className="inputStyle"
            onChange={handleChange}
            placeholder="Enter email"
            valid
          />
        </FormGroup>
        <FormGroup controlId="formBasicName">
          {/* <Label className="text-muted">Name</Label> */}
          <Input
            type="text"
            name="name"
            value={values.name}
            className="inputStyle"
            onChange={handleChange}
            placeholder="Enter Name"
            valid
          />
        </FormGroup>
        <ButtonDiv>
          <DownloadButton href="/On-your-marks.pdf" download onClick={handleSubmit}>
            Download
          </DownloadButton>
        </ButtonDiv>
      </Form>
    </DownloadFormContainer>
  );
};
export default DownloadForm;
