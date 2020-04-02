import React from 'react';

import { ContactDiv, ContactContainer, ContactDetailsDiv, ContactDetails, ContactMap } from './contact.styles';

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
      <ContactMap>
        <iframe
          title="Mindplus Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.544775165576!2d3.407260399999988!3d6.5789869000000145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b936e807e8edd%3A0x2ac1fac581f7c1c0!2sMind%2B%20Facilitation%20Company%20Ltd!5e0!3m2!1sen!2sng!4v1585274559451!5m2!1sen!2sng"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
        />
      </ContactMap>
    </ContactContainer>
  </ContactDiv>
);

export default Contact;
