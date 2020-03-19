import styled from 'styled-components';

// Header/index.jsx
export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  min-width: 114.8rem;
  top: 0;
`;

// Header/HeaderLogo.jsx
export const StyledHeaderLogo = styled.h1`
  position: absolute;
  width: 9rem;
  height: 3.7rem;
  top: 5.4rem;
  left: 5.4rem;

  a,
  img {
    width: inherit;
  }
`;

// Header/Member.jsx
export const StyledMember = styled.ul`
  text-align: right;
  position: relative;
  padding: 0.8rem 5.6rem;
  height: 3.5rem;
  border-bottom: 0.1rem solid #e3e3e2;
  color: #707070;
  background: #fff;

  li {
    display: inline-block;
    font-size: 1.2rem;
  }

  a {
    display: inline-block;
    padding-right: 3.7rem;
  }
`;

// Header/MainMenu.jsx
export const StyledMainMenu = styled.section`
  height: 7.1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #e3e3e2;
  padding: 1.6rem 5.4rem;
  padding-left: 15rem;
  background: #fff;
`;

// Header/MainMenu.jsx
export const StyledNav = styled.nav`
  font-size: 1.7rem;
  font-weight: 900;
  width: 68rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Header/MainMenu.jsx
export const StyledSearchBox = styled.div`
  width: 28rem;

  div {
    display: inline-block;
    border-bottom: 0.1rem solid black;
  }

  input {
    font-size: 1.6rem;
    width: 17rem;
    height: 3.8rem;
    border: none;
  }

  button {
    border: none;
    background: transparent;
  }

  .shoppin-cart {
    padding-left: 4.4rem;
  }
`;
