import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Menu from '../menu/menu';

import HeaderDiv from './header.styles';

const Header = () => (
  <HeaderDiv>
    <Logo />
    <div className="space-between" />
    <Menu />
  </HeaderDiv>
);

export default Header;
