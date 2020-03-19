import React from 'react';
import { StyledMainMenu, StyledNav, StyledSearchBox } from './Styles';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon } from '../Icons';

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <h2 className="a11y-hidden">메인 메뉴</h2>
      <div className="logo-area" />
      <StyledNav>
        <Link to="/pre-order">PRE-ORDER</Link>
        <Link to="/brand">BRAND</Link>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/feed">FEED</Link>
      </StyledNav>
      <StyledSearchBox>
        <div>
          <input type="text" placeholder="검색" />
          <button type="button">
            <SearchIcon />
          </button>
        </div>
        <button className="shoppin-cart" type="button">
          <ShoppingCartIcon />
        </button>
      </StyledSearchBox>
    </StyledMainMenu>
  );
};

export default MainMenu;
