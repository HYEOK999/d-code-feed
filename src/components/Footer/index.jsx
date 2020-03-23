import React from 'react';
import { StyledFooter } from './Styles';
import Service from './Service';
import ComponyInfo from './ComponyInfo';

const Footer = () => {
  return (
    <StyledFooter>
      <Service />
      <ComponyInfo />
    </StyledFooter>
  );
};

export default Footer;
