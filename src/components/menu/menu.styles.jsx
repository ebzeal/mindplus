import styled from 'styled-components';

const MenuDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -20px;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const MenuItem = styled.a`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0px 20px;
  cursor: pointer;

  :hover {
    color: rgba(239, 126, 45, 0.6);
  }
`;

export { MenuDiv, MenuItem };
