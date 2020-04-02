import React from 'react';

import { ContactDiv, ContactDetailsDiv, ContactDetails, ContactMap } from './contact.styles';

import { ReactComponent as CallIcon } from '../../assets/ic_call.svg';
import { ReactComponent as MailIcon } from '../../assets/ic_email.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons8-instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons8-facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons8-linkedin.svg';
import { ReactComponent as BlogIcon } from '../../assets/icons8-google-blog.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons8-twitter.svg';

const Contact = () => (
  <ContactDiv>
    <h2>CONTACTS</h2>
    <ContactDetailsDiv>
      <ContactDetails>
        <CallIcon />
        <span> 234-803-329-1473 </span>
      </ContactDetails>

      <ContactDetails>
        <MailIcon />
        <span> info@mindplus.biz </span>
      </ContactDetails>
      <ContactDetails href="https://www.instagram.com/noruwaedokpolo/?hl=en">
        <InstagramIcon />
        <span> noruwaedokpolo </span>
      </ContactDetails>
      <ContactDetails href="https://business.facebook.com/Noruwa-Edokpolo-590483904780227/?ref=your_pages">
        <FacebookIcon />
        <span> Noruwa Edokpolo </span>
      </ContactDetails>
      <ContactDetails href="https://www.linkedin.com/in/noruwa/">
        <LinkedinIcon />
        <span> noruwa </span>
      </ContactDetails>
      <ContactDetails href="https://twitter.com/noruwa">
        <TwitterIcon />
        <span> noruwa </span>
      </ContactDetails>
      <ContactDetails href="https://businessmentorships.blogspot.com/">
        <BlogIcon />
        <span> Blog </span>
      </ContactDetails>
    </ContactDetailsDiv>
  </ContactDiv>
);

export default Contact;
