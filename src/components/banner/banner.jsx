import React from 'react';

import BannerContact from '../bannerContact/bannerContact';
import { BannerDiv, TextDiv, ImageDiv, SmallText } from './banner.styles';

import imageUrl from '../../assets/bannerSVG.svg';

const Banner = () => (
  <BannerDiv>
    <TextDiv>
      <SmallText>effective</SmallText>
      <h1>ORGANIZATIONAL DEVELOPMENT</h1>
      <h4>We take pride in our facilitative method of delivery, and our practical approach toward development.</h4>
      <BannerContact />
    </TextDiv>
    <div className="space-between" />
    <ImageDiv bgImage={imageUrl}>
      <img src="https://mindplus.biz/wp-content/uploads/2020/03/consulting.jpg" alt="Organizational Development" />
    </ImageDiv>
  </BannerDiv>
);

export default Banner;
