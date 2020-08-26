import styled from 'styled-components';

const BookCardDiv = styled.div`
  padding: 15px;
  margin: 3%;
  display: flex;
  cursor: pointer;
`;

const BookImage = styled.div`
  max-width: 40%;
  max-height: 200px;

  img {
    max-width: 100%;
  }
`;

const TeamMemberDetail = styled.div`
  width: 100%;
  padding: 0px 5% 0 8%;
`;

const BookTitle = styled.h2`
  font-size: 20px;
  line-height: 20px;
  width: 100%;
`;

const CardText = styled.p`
  font-size: 13px;
  line-height: 20px;
  width: 100%;
  color: rgba(0, 0, 0, 0.7);
`;

export { BookCardDiv, BookImage, TeamMemberDetail, BookTitle, CardText };
