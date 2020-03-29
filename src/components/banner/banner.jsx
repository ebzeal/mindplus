import React from 'react';

import BannerContact from '../bannerContact/bannerContact';
import { BannerDiv, TextDiv, ImageDiv, SmallText } from './banner.styles';

import imageUrl from '../../assets/bannerSVG.svg';

const Banner = () => (
  <BannerDiv>
    <TextDiv>
      <SmallText>mind over matter</SmallText>
      <h1>coming to grips with your life, business, career</h1>
      <BannerContact />
    </TextDiv>
    <div className="space-between" />
    <ImageDiv bgImage={imageUrl}>
      <video controls autoPlay>
        <source
          src="https://res.cloudinary.com/dxehksqg1/video/upload/v1585438995/mindplus/WhatsApp_Video_2020-03-26_at_6.32.48_PM_rbhzwy.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </ImageDiv>
  </BannerDiv>
);

export default Banner;
