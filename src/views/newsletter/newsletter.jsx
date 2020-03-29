import React from 'react';

import BannerContact from '../../components/bannerContact/bannerContact';

import { NewsletterDiv, NewsletterTitle, ButtonDiv } from './newsletter.styles';

const Newsletter = () => (
  <NewsletterDiv>
    <NewsletterTitle>Speak with us today, your first consultation is free. </NewsletterTitle>
    <ButtonDiv>
      <BannerContact />
    </ButtonDiv>
  </NewsletterDiv>
);
export default Newsletter;
