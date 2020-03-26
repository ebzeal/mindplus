import React from 'react';

import { TeamCardDiv, TeamImage, TeamMemberDetail, CardText } from './teamCard.styles';

const TeamCard = ({ teamImage, name, text }) => (
  <TeamCardDiv>
    <TeamImage>
      <img src={teamImage} alt="" />
    </TeamImage>
    <TeamMemberDetail>
      <h2>{name}</h2>
      <CardText>{text}</CardText>
    </TeamMemberDetail>
  </TeamCardDiv>
);

export default TeamCard;
