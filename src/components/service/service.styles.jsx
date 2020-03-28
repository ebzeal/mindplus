import styled from 'styled-components';

const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4em;
`;

const TitleDiv = styled.h3`
  font-weight: bold;
  width: 30%;

  @media only screen and (max-device-width: 650px) {
    width: 100%;
  }
`;

const ContentDiv = styled.div`
  width: 65%;
  text-align: justify;

  @media only screen and (max-device-width: 650px) {
    width: 100%;
  }
`;

export { ServiceContainer, TitleDiv, ContentDiv };
