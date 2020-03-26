import React from 'react';

import PageTitle from '../../components/pageTitle/pageTitle';
import TeamCard from '../../components/teamCard/teamCard';

import TeamContainer from './teamsView.styles';

const Teams = () => (
  <>
    <PageTitle title="the Team" />
    <h1>Our awesome team</h1>

    <TeamContainer>
      <TeamCard
        teamImage="https://mindplus.biz/wp-content/uploads/2020/03/noruwa-1-640x430.jpg"
        name="Noruwa"
        text="Principal Consultant"
        readMore
      />
    </TeamContainer>
  </>
);

export default Teams;
