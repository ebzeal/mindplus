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
      <ContactDetails
        href="https://wa.me/2348033291473?text=Hi,%20I%20got%20linked%20from%20your%20website"
        rel="nofollow"
        target="_top"
      >
        <CallIcon />
        <span> 234-803-329-1473 </span>
      </ContactDetails>

      <ContactDetails href="mailto:info@mindplus.biz" rel="nofollow" target="_top">
        <MailIcon />
        <span> info@mindplus.biz </span>
      </ContactDetails>
      <ContactDetails href="https://www.instagram.com/noruwaedokpolo/?hl=en" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        <span> noruwaedokpolo </span>
      </ContactDetails>
      <ContactDetails href="https://business.facebook.com/Noruwa-Edokpolo-590483904780227/?ref=your_pages">
        <FacebookIcon />
        <span> Noruwa Edokpolo </span>
      </ContactDetails>
      <ContactDetails href="https://www.linkedin.com/in/noruwa/" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
        <span> noruwa </span>
      </ContactDetails>
      <ContactDetails href="https://twitter.com/noruwa">
        <TwitterIcon />
        <span> noruwa </span>
      </ContactDetails>
      <ContactDetails href="https://businessmentorships.blogspot.com/" target="_blank" rel="noopener noreferrer">
        <BlogIcon />
        <span> Blog </span>
      </ContactDetails>
    </ContactDetailsDiv>
    <p>Address: 4/6 Abiola Bolaji Street, Praise Hill estate, Arepo Ogun State</p>
  </ContactDiv>
);

export default Contact;
