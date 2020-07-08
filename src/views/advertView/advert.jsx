import React from 'react';
import { withRouter } from 'react-router-dom';

import BannerContact from '../../components/bannerContact/bannerContact';

import PageTitle from '../../components/pageTitle/pageTitle';

import { AdvertContainer, ContentDiv, ImgDiv, TextContent, ReadMoreDiv, EventDiv } from './advert.styles';

const Advert = ({ history, match: { url } }) => {
  return (
    <AdvertContainer>
      <ContentDiv>
        <TextContent>
          <h1>
            Investing in the
            <br />
            New Economy
          </h1>
          {url === '/events' ? (
            <>
              <i>“If the stakes are high and against you, then survive, strive, drive and thrive” Unknown. </i>
              <p>
                Someone said life must go on and indeed it must, but there are new rules of engagement in almost every
                area of human endeavour.
              </p>
              <p>
                The world economy is convulsing violently, the rules of engagement are being re-written on the fly, yet
                the age-old recipe for building wealth remains unchanged: Earn, Save, Invest and live off the rest.
              </p>
              <p>
                The coronavirus pandemic that has led to the unprecedented number of bankruptcies of both small and
                large companies have also given birth to unimaginable profits for others. Zoom has grown in value by
                over 2000% during this lockdown.
              </p>
              <p>
                How can you take a position with your investment decisions to ensure that you can catch the wave before
                it fades away and blends with the normal? This webinar seeks to introduce various investment options
                that will define the new Economy.
              </p>
              <p>
                This webinar brings together an A-list of the top-notch speakers addressing specific areas that most of
                the leading economic thought leaders indicate are the areas to focus on in this new economy.
              </p>
              <p>
                The main webinar is free to attend but registration is required. In addition, there is a fee of
                N10,000.00 only for an opportunity to engage the speakers in a breakout session after their
                presentations and to have access to all the presentations.
              </p>
              <p>
                Please make payment to Mind+ Facilitation Co. Ltd StanbicIbtc account number 0002254024 and send your
                name, email address and evidence to accounts@mindplus.biz or via WhatsApp to 08033291473. Click the
                button below to register:
              </p>
            </>
          ) : (
            <p>
              The world economy is convulsing violently, the rules of engagement are being re-written on the fly, yet
              the age-old recipe for building wealth remains unchanged: Earn, Save, Invest and live off the rest.
              <ReadMoreDiv onClick={() => history.push('/events')}>read more</ReadMoreDiv>
            </p>
          )}
          <BannerContact text="register here" external url="/event" />
        </TextContent>
        <div className="space-between" />
        {url === '/events' ? <EventDiv /> : null}
        <ImgDiv>
          <img
            src="https://res.cloudinary.com/dxehksqg1/image/upload/v1594231841/mindplus/PHOTO-2_aergeb.jpg"
            alt="Advert Mindplus"
          />
        </ImgDiv>
      </ContentDiv>
    </AdvertContainer>
  );
};

export default withRouter(Advert);
