import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuDiv, MenuItem } from './menu.styles';

const Menu = ({ history }) => (
  <MenuDiv>
    <MenuItem onClick={() => history.push('/about')}>about</MenuItem>
    <MenuItem onClick={() => history.push('/services')}>services</MenuItem>
    <MenuItem onClick={() => history.push('/contact')}> contacts </MenuItem>
    <MenuItem>
      <a href="https://businessmentorships.blogspot.com/" target="_blank" rel="noopener noreferrer">
        blog
      </a>
    </MenuItem>
  </MenuDiv>
);

export default withRouter(Menu);
