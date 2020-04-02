import React from 'react';

import TeamCard from '../../components/teamCard/teamCard';

import TeamContainer from './teamsView.styles';
import { Container } from '../servicesView/servicesView.styles';

const Teams = () => (
  <Container>
    <TeamContainer>
      <TeamCard
        teamImage="https://res.cloudinary.com/dxehksqg1/image/upload/v1585825976/mindplus/noruwa-1-640x430_kbi75t.jpg"
        name="Noruwa"
        position="Principal Consultant."
        text="
        He is an International Labour Organization (ILO) Certified Master Trainer, an Organizational Development Certified Practitioner (ODCP) from the Institute of Organizational Development (IOD). A Certified Business Coach, he is also a Certified Customer Service Specialist with over two decades of experience in Consultancy, Customer Service, and Sales & Marketing and over a decade as a Management/Business coach. 
        "
        readMore
      />
    </TeamContainer>
  </Container>
);

export default Teams;
