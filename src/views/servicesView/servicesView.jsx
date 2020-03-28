import React from 'react';
import { withRouter } from 'react-router-dom';

import PageTitle from '../../components/pageTitle/pageTitle';
import Card from '../../components/cards/cards';
import Service from '../../components/service/service';

import { Container, CardContainer } from './servicesView.styles';

const Services = ({ location }) => {
  return (
    <Container>
      <PageTitle title="Services" />

      {location.pathname === '/services' ? (
        <>
          <Service
            title="Organization Development (OD)"
            content={[
              <p>
                Organization Development is a deliberately planned effort to increase an organisation's relevance and
                viability.
{' '}
              </p>,
              <p>
                OD focuses on developing the structures, systems, processes, and people within the organisation through
                a variety of activities, including organisational assessments, executive and employee development and
                coaching, mediation and conflict resolution, operational review and process improvement, retreat
                planning and facilitation, strategic and operational planning, team development and facilitation, and
                customised training.
              </p>
            ]}
          />

          <Service
            title="Coaching"
            content={[
              <p>
                Some have defined coaching as a process that enables learning and development to occur and thus
                performance to improve. Others defined “Coaching the art of guiding another person, persons or human
                system towards a fulfilling future" ( The hand book of coaching)
{' '}
              </p>,
              <br />,
              <p>We offer coaching services in the following areas: </p>,
              <li> Executive coaching </li>,
              <li> Strategic planning </li>,
              <li> Life coaching </li>,
              <li> Entrepreneurism </li>,
              <li> Organisational coaching </li>
            ]}
          />

          <Service
            title="Entrepreneurial Development"
            content={[
              <p>
                We are a partner organisation with the International Labour Organization (ILO) in the deployment of the
                ILO SIYB program in Nigeria.
              </p>,
              <p>
                The SIYB programme is a system of inter-related training packages and supporting materials for
                small-scale entrepreneurs to start and grow their businesses.
              </p>,
              <p>
                The SIYB programme is structured in three separate training packages, which are designed to respond to
                the progressive stages of business development.
              </p>,
              <p>
                <strong>Generate Your Business Idea (GYB) </strong>
                is a two to three days training module intended for people who would like to start a business, and who,
                through the training, develop a concrete business idea
              </p>,
              <p>
                <strong>Start Your Business (SYB) </strong>
                is the second module and it is addressed to potential entrepreneurs who want to start a small business
                and already have a concrete business idea. The programme is a combination of training, fieldwork and
                after-training support, and helps participants assess their readiness to start a business and to prepare
                a business plan and evaluate its viability. SYB courses are usually delivered in five days.
              </p>,
              <p>
                <strong>Improve Your Business (IYB) </strong>
                is a seven-day training course to enable existing entrepreneurs to improve business management. It
                consists of six modules: (1) buying and stock control; (2) costing; (3) marketing; (4) people and
                productivity; (5) planning for your business; (6) record-keeping.
              </p>,
              <p>
                The
                <strong> SIYB Business Game</strong>, a practical simulation tool to help participants understand the
                realities of starting and running a business.
              </p>
            ]}
          />
        </>
      ) : (
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
      )}
    </Container>
  );
};

export default withRouter(Services);
