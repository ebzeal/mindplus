import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideInRightAnimation = keyframes`${slideInRight}`;

const AdvertContainer = styled.div`
  animation: 4s ${slideInRightAnimation};
  margin: 5% 10% 20% 5%;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgDiv = styled.div`
  height: 350px;
  flex-basis: 40%;

  img {
    width: 100%;
  }

  @media only screen and (max-device-width: 650px) {
    flex-basis: 100%;
  }
`;

const TextContent = styled.div`
  font-weight: normal;
  flex-basis: 55%;
  font-size: 15px;
  line-height: 30px;
  margin-top: -10px;
  text-align: justify;

  @media only screen and (max-device-width: 650px) {
    flex-basis: 100%;
  }
`;
const ReadMoreDiv = styled.a`
  cursor: pointer;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 4%;

  :hover {
    color: rgba(239, 126, 45, 0.6);
  }
`;
const EventDiv = styled.div`
  margin 30% 0;
`;
export { AdvertContainer, ContentDiv, ImgDiv, TextContent, ReadMoreDiv, EventDiv };
