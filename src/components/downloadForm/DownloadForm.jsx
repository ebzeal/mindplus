import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import Button from '../formElements/button/button';

import { DownloadFormContainer, ButtonDiv, DownloadButton } from './DownloadForm.styles';

const DownloadForm = ({ isDownload, book }) => {
  const [values, setValues] = useState({ name: '', email: '' });
  const bookArr = [
    { name: 'On Your Marks: A Business Start-up Handbook', link: '/On-your-marks.pdf' },
    { name: 'Naked: The mystery of openness in marriage', link: '/naked-ebook-copy.pdf' }
  ];

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
    if ((email || name) === '') return null;
    const templateParams = {
      send_to: 'info@mindplus.biz',
      sent_by: 'info@mindplus.biz',
      from_name: name,
      email,
      to_name: 'Mindplus Admin',
      message_html: `${name}, email:${email}, just downloaded the free chapter of "${bookArr[book].name}"`
    };
    emailjs.send('info@mindplus.biz', 'template_HODWN9od', templateParams, 'user_d6JNSmosRt6azEHgC1dwe');
    resetForm();
    window.open(`${bookArr[book].link}`, '_blank');
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
          <Button text="Download">Download</Button>
        </ButtonDiv>
      </Form>
    </DownloadFormContainer>
  );
};
export default DownloadForm;
