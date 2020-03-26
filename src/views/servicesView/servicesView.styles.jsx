import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  margin: -3% -5% 15% -5%;

  @media only screen and (max-device-width: 650px) {
    flex-wrap: wrap;
  }
`;

export default CardContainer;
