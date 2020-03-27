import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuDiv, MenuItem } from './menu.styles';

const Menu = ({ history }) => (
  <MenuDiv>
    <MenuItem onClick={() => history.push('/')}>home</MenuItem>
    <MenuItem onClick={() => history.push('/about')}>about</MenuItem>
    <MenuItem onClick={() => history.push('/services')}>services</MenuItem>
    <MenuItem onClick={() => history.push('/team')}>team</MenuItem>
    <MenuItem onClick={() => history.push('/contact')}> contacts </MenuItem>
  </MenuDiv>
);

export default withRouter(Menu);
