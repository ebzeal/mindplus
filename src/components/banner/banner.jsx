import React from 'react';

import BannerContact from '../bannerContact/bannerContact';
import { BannerDiv, TextDiv, ImageDiv, SmallText } from './banner.styles';

import imageUrl from '../../assets/bannerSVG.svg';

const Banner = () => (
  <BannerDiv>
    <TextDiv>
      <SmallText>mind over matter</SmallText>
      {/* <h1>mind over matter</h1> */}
      <h1>coming to grips with your life, business, career</h1>
      <BannerContact />
    </TextDiv>
    <div className="space-between" />
    <ImageDiv bgImage={imageUrl}>
      <img src="https://mindplus.biz/wp-content/uploads/2020/03/organization.jpg" alt="Organizational Development" />
    </ImageDiv>
  </BannerDiv>
);

export default Banner;
