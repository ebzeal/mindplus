import React from 'react';

import PageTitle from '../../components/pageTitle/pageTitle';

import { AboutContainer, ContentDiv, ImgDiv, TextContent } from './about.styles';

const About = () => (
  <AboutContainer>
    <PageTitle title="About us" />
    <h1>
      Human Capital and
      <br />
      Business Development Company
    </h1>
    <ContentDiv>
      <ImgDiv>
        <img src="https://mindplus.biz/wp-content/uploads/2020/03/conference-room.jpg" alt="About Mindplus" />
      </ImgDiv>
      <div className="space-between" />
      <TextContent>
        <p>
          At MIND+, we believe that given the right-thinking environment, any individual or organisation is capable of
          delivering much more value than they are presently able to.
        </p>
        <p>
          We take pride in our facilitative method of delivery, the evidential transformation of every organisation we
          have had the honour of working with, and our practical approach toward organisational and personal
          development.
        </p>
        <p>
          We are a Human Capital and Business Development company geared to helping individuals and organisations
          discover and develop their latent potentials with interventions in the areas of Organizational Development,
          Coaching, Mentorship and Entrepreneurship Development.
        </p>
      </TextContent>
    </ContentDiv>
  </AboutContainer>
);

export default About;
