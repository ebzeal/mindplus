import styled, { keyframes } from 'styled-components';
import { rollIn } from 'react-animations';

const rollInAnimation = keyframes`${rollIn}`;

const BannerDiv = styled.div`
animation: 4s ${rollInAnimation};
 display: flex:
 flex-wrap: wrap;
 margin: 50px 0px 0px 10%;
`;

const TextDiv = styled.div`
  max-width: 37%;
  margin-top: 150px;
`;

const ImageDiv = styled.div`
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  background-repeat:no-repeat;
  height: 750px;
 margin-top: -500px;
 margin-left: 45%;
 margin-right: -10%;

 video {
  margin-top: 120px;
   position: inherit;
   width:90%;
 margin-left: 5%;
   opacity:0.7;


  @media only screen and (max-device-width: 650px) {
    margin: 100% 10%;
  }
 }

 
`;

const SmallText = styled.p`
  text-transform: uppercase;


@media only screen and (max-device-width: 650px) {
 font-size: 12px;
`;

export { BannerDiv, TextDiv, ImageDiv, SmallText };
