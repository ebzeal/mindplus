import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import { CardDiv, CardText, ReadMoreDiv } from './cards.styles';

const Card = ({ title, text, readMore }) => {
  const history = useHistory();
  return (
    <CardDiv>
      <h4>{title}</h4>
      <CardText>{text}</CardText>
      {readMore ? <ReadMoreDiv onClick={() => history.push('/services')}>read more</ReadMoreDiv> : null}
    </CardDiv>
  );
};

export default withRouter(Card);
