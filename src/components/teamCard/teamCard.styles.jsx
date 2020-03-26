import styled from 'styled-components';

const TeamCardDiv = styled.div`
  padding: 15px;
  margin: 3%;
  display: flex;
  cursor: pointer;
`;

const TeamImage = styled.div`
  max-width: 40%;

  img {
    max-width: 100%;
  }
`;

const TeamMemberDetail = styled.div`
  max-width: 60%;
  padding-left: 5%;
  :hover {
    width: 100%;
    background: -webkit-linear-gradient(180deg, #6c63ff 0%, #c77cf1 100%);
    color: #ffffff;
  }
`;

const CardText = styled.p`
  font-size: 13px;
  line-height: 15px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

export { TeamCardDiv, TeamImage, TeamMemberDetail, CardText };
