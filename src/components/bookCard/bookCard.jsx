import React from 'react';

import { BookCardDiv, BookImage, TeamMemberDetail, BookTitle, CardText } from './bookCard.styles';
import Button from '../formElements/button/button';

const BookCard = ({ teamImage, name, position, text, isDownload }) => (
  <BookCardDiv>
    <BookImage>
      <img src={teamImage} alt="" />
    </BookImage>
    <TeamMemberDetail>
      <BookTitle>{name}</BookTitle>
      <p>{position}</p>
      <CardText>{text}</CardText>

      <div>
        <Button text="Read Sample" onClick={isDownload} />
        <Button text="Buy Here" />
      </div>
    </TeamMemberDetail>
  </BookCardDiv>
);

export default BookCard;
