import styled from 'styled-components';

const BannerDiv = styled.div`
 display: flex:
 flex-wrap: wrap;
 margin-top: 50px;
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
 margin-top: -350px;
 margin-left: 45%;
 margin-right: -10%;

 img {
  margin-top: 120px;
   position: inherit;
   width:90%;
 margin-left: 5%;
   opacity:0.7;

 }
`;

const SmallText = styled.p`
  text-transform: uppercase;
`;

export { BannerDiv, TextDiv, ImageDiv, SmallText };
