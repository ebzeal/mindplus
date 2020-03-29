import React from 'react';
import { withRouter } from 'react-router-dom';

import ButtonDiv from '../formElements/button/button';

import ContactDiv from './bannerContact.styles';

const BannerContact = ({ history }) => (
  <ContactDiv onClick={() => history.push('/contact')}>
    <ButtonDiv text="contact us" className="button" />
  </ContactDiv>
);

export default withRouter(BannerContact);
