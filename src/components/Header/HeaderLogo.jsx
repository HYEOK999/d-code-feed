import React from 'react';
import { StyledHeaderLogo } from './Styles';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Link to="/">
        <img src="./d-code-logo.png" alt="디코드" />
      </Link>
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
