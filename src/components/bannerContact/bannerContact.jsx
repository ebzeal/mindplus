import React from 'react';
import { withRouter } from 'react-router-dom';

import ButtonDiv from '../formElements/button/button';

import ContactDiv from './bannerContact.styles';

const BannerContact = ({ history, text = 'contact us', url = '/contact', external }) => (
  <ContactDiv
    onClick={() =>
      external
        ? (window.location.href = 'https://us02web.zoom.us/meeting/register/tZwscOmrqDguHNYggzTsbalwkv_ELwqV-aav')
        : history.push(url)
    }
  >
    <ButtonDiv text={text} className="button" />
  </ContactDiv>
);

export default withRouter(BannerContact);
