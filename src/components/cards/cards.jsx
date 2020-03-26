import React from 'react';

import { CardDiv, CardText, ReadMoreDiv } from './cards.styles';

const Card = ({ title, text, readMore }) => (
  <CardDiv>
    <h4>{title}</h4>
    <CardText>{text}</CardText>
    {readMore ? <ReadMoreDiv>read more</ReadMoreDiv> : null}
  </CardDiv>
);

export default Card;
