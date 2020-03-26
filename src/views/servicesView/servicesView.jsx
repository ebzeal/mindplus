import React from 'react';

import PageTitle from '../../components/pageTitle/pageTitle';
import Card from '../../components/cards/cards';

import CardContainer from './servicesView.styles';

const Services = () => (
  <>
    <PageTitle title="Services" />

    <CardContainer>
      <Card
        title="Organization Development (OD)"
        text="Organization Development is a deliberately planned effort to increase an organisation’s relevance and viability."
        readMore
      />
      <Card
        title="Coaching"
        text="Some have defined coaching as a process that enables learning and development to occur and thus performance to improve. "
        readMore
      />
      <Card
        title="Entrepreneurial Development"
        text="We are a partner organisation with the International Labour Organization (ILO) in the deployment of the ILO SIYB"
        readMore
      />
    </CardContainer>
  </>
);

export default Services;
