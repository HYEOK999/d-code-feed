import React from 'react';
import { StyledHeader } from './Styles';
import HeaderLogo from './HeaderLogo';
import Member from './Member';
import MainMenu from './MainMenu';

const Header = React.memo(() => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <Member />
      <MainMenu />
    </StyledHeader>
  );
});

export default Header;
