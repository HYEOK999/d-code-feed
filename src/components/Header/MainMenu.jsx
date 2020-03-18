import React from 'react';
import { StyledMainMenu, StyledNav, StyledSearchSection } from './Styles';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon } from '../Icons';

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <div className="logo-area" />
      <StyledNav>
        <h2 className="a11y-hidden">메인 메뉴</h2>
        <Link to="/pre-order">PRE-ORDER</Link>
        <Link to="/brand">BRAND</Link>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/feed">FEED</Link>
      </StyledNav>
      <StyledSearchSection>
        <div>
          <input type="text" placeholder="검색" />
          <button type="button">
            <SearchIcon />
          </button>
        </div>
        <button className="shoppin-cart" type="button">
          <ShoppingCartIcon />
        </button>
      </StyledSearchSection>
    </StyledMainMenu>
  );
};

export default MainMenu;
