import React from 'react';

import ButtonDiv from '../formElements/button/button';
import Input from '../formElements/input/input';

import ContactDiv from './bannerContact.styles';

const BannerContact = () => (
  <ContactDiv>
    <Input
      type="text"
      name="send-mail"
      className="input"
      id=""
      placeholder="Drop your phone number or email address here"
    />

    <ButtonDiv text="contact" className="button" />
  </ContactDiv>
);

export default BannerContact;
