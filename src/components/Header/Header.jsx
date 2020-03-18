import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon } from '../Icons';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src="./d-code-logo.png" alt="디코드" />
        </Link>
      </h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>고객센터</li>
      </ul>
      <nav>
        <Link to="/pre-order">PRE-ORDER</Link>
        <Link to="/brand">BRAND</Link>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/feed">FEED</Link>
      </nav>
      <section>
        <div>
          <input type="text" placeholder="검색" />
          <button type="button">
            <SearchIcon />
          </button>
        </div>
        <button type="button">
          <ShoppingCartIcon />
        </button>
      </section>
    </header>
  );
};

export default Header;
