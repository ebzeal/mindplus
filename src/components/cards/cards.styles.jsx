import styled from 'styled-components';

const CardDiv = styled.div`
  padding: 15px;
  margin: 3%;
  :hover {
    -webkit-box-shadow: 3px 3px 31px 3px rgba(0, 0, 0, 0.16);
    box-shadow: 3px 3px 31px 3px rgba(0, 0, 0, 0.16);
  }
`;

const CardText = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.6);
`;

const ReadMoreDiv = styled.p`
  cursor: pointer;
  font-size: 13px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  text-align: right;

  :hover {
    color: rgba(239, 126, 45, 0.6);
  }
`;

export { CardDiv, CardText, ReadMoreDiv };
