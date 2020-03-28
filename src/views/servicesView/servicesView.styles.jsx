import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';

const flipInXAnimation = keyframes`${flipInX}`;

const Container = styled.div`
  animation: 4s ${flipInXAnimation};
  margin: 5% 10%;
`;

const CardContainer = styled.div`
  display: flex;
  margin: -3% -5% 15% -5%;

  @media only screen and (max-device-width: 650px) {
    flex-wrap: wrap;
  }
`;

export { Container, CardContainer };
