import React from 'react';
import { StyledHeader as Head } from './Styles';
import HeaderLogo from './HeaderLogo';
import Member from './Member';
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <Head>
      <HeaderLogo />
      <Member />
      <MainMenu />
    </Head>
  );
};

export default Header;
