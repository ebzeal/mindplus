import styled, { keyframes } from 'styled-components';
import { rubberBand } from 'react-animations';

const rubberBandAnimation = keyframes`${rubberBand}`;

const ContactDiv = styled.div`
  animation: 4s ${rubberBandAnimation};
  margin: 0 10% 10% 10%;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContactDetailsDiv = styled.div`
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContactAddress = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 14px;
  margin-bottom: 2%;
`;

const ContactDetails = styled.a`
  line-height: 16px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  flex-basis: 30%;
  margin-top: 3%;
  span {
    padding: 0 4%;
    width: 70%;
  }
`;

const ContactMap = styled.div`
  margin-right: 0;
  padding-left 5%;
  width: 60%;

  iframe {
    width: 100%;
    min-height: 300px;
  }

  @media only screen and (max-device-width: 650px) {
    width: 100%;
    margin-top: 5%;
  }
`;

export { ContactDiv, ContactContainer, ContactDetailsDiv, ContactAddress, ContactDetails, ContactMap };
