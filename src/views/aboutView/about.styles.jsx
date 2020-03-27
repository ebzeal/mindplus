import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideInRightAnimation = keyframes`${slideInRight}`;

const AboutContainer = styled.div`
  animation: 4s ${slideInRightAnimation};
  margin: 5% 10% 15% 10%;
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

  @media only screen and (max-device-width: 650px) {
    flex-basis: 100%;
  }
`;

export { AboutContainer, ContentDiv, ImgDiv, TextContent };
