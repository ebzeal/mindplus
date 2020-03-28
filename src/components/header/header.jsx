import React from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Menu from '../menu/menu';

import HeaderDiv from './header.styles';

const Header = ({ history }) => (
  <HeaderDiv>
    <Logo onClick={() => history.push('/')} style={{ cursor: 'pointer' }} />
    <div className="space-between" />
    <Menu />
  </HeaderDiv>
);

export default withRouter(Header);
