import React from 'react';

import BannerContact from '../../components/bannerContact/bannerContact';

import { NewsletterDiv, NewsletterTitle } from './newsletter.styles';

const Newsletter = () => (
  <NewsletterDiv>
    <NewsletterTitle>Speak with us</NewsletterTitle>
    <BannerContact />
  </NewsletterDiv>
);

export default Newsletter;
