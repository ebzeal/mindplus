import React, { useState } from 'react';

import BookCard from '../../components/bookCard/bookCard';

import TeamContainer from './resourceView.styles';
import { Container } from '../servicesView/servicesView.styles';
import DownloadForm from '../../components/downloadForm/DownloadForm';

const Resources = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [bookNum, setBookNum] = useState('0');

  const isDownload = num => {
    setBookNum(num);
    return setShowDownload(!showDownload);
  };
  return (
    <Container>
      <TeamContainer>
        <div>
          <BookCard
            teamImage="https://res.cloudinary.com/dxehksqg1/image/upload/v1598359107/mindplus/On_Your_Marks_A_Business_Start-up_Noruwa_kotjop.jpg"
            name="On Your Marks: A Business Start-up Handbook"
            text="Starting and running a successful business can be a tough or an easy task, it depends on who is guiding you. This book makes it easy to start and run your own business. Based on over 20 years experience of working with entrepreneurs."
            readMore
            isDownload={isDownload}
            setBookNum="0"
          />
          {showDownload && bookNum === '0' ? <DownloadForm isDownload={isDownload} book="0" /> : null}
        </div>
        <div>
          <BookCard
            teamImage="https://res.cloudinary.com/dxehksqg1/image/upload/v1598363595/mindplus/Naked_The_mystery_of_openness_in_marriage.png"
            name="Naked: The mystery of openness in marriage"
            text="In this great book, Noruwa Edokpolo uses physical human nakedness as a metaphor to share deep, thought-provoking insights on the secrets to a blissful marriage."
            readMore
            isDownload={isDownload}
            setBookNum="1"
          />
          {showDownload && bookNum === '1' ? <DownloadForm isDownload={isDownload} book="1" /> : null}
        </div>
      </TeamContainer>
    </Container>
  );
};

export default Resources;
