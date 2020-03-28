import React from 'react';

import { ServiceContainer, TitleDiv, ContentDiv } from './service.styles';

const Service = ({ title, content }) => (
  <ServiceContainer>
    <TitleDiv>{title}</TitleDiv>
    <ContentDiv>{content}</ContentDiv>
  </ServiceContainer>
);

export default Service;
