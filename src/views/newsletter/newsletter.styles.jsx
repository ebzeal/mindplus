import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const slideInLeftAnimation = keyframes`${slideInLeft}`;

const NewsletterDiv = styled.div`
  animation: 4s ${slideInLeftAnimation};
  margin: 15% 0 3% 0;
  background: -webkit-linear-gradient(180deg, #6c63ff 0%, #c77cf1 100%);
  padding: 5% 10%;
  display: flex;
  justify-content: space-between;
`;

const NewsletterTitle = styled.h2`
  color: #ffffff;
  width: 20%;
  padding-top: 2%;
`;

export { NewsletterDiv, NewsletterTitle };
