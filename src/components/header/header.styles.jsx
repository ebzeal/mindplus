import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

const HeaderDiv = styled.div`
  animation: 4s ${zoomInAnimation};
  margin: 30px 10% 0px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: centre;
`;

export default HeaderDiv;
