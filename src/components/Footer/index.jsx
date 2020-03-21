import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <section>
        <h2 className="a11y-hidden">서비스 메뉴</h2>
        <ul>
          <li>
            <span>빠른 메뉴</span>
            <Link to="/">엔코드</Link>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <span>고객센터 02-6204-0617</span>
            <Link to="/mypage/company/chat">1:1 채팅문의</Link>
            <Link to="/mypage/company/terms">이용약관</Link>
            <Link to="/mypage/company/privacy">개인정보처리방침</Link>
          </li>
          <li>
            <span>ABOUT D.CODE</span>
            <Link to="/dcode-introduce">디코드 소개</Link>
          </li>
          <li>
            <span>SOCIAL</span>
            <a target="__blink" href="https://www.itsdcode.com/feed#none"></a>
            <a target="__blink"></a>
            <a target="__blink"></a>
            <a target="__blink"></a>
          </li>
          <li>
            <span>Application</span>
            <a target="__blink">
              <span>앱 스토어</span>
            </a>
            <a target="__blink">
              <span>플레이 스토어</span>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="a11y-hidden">디코드 회사 정보</h2>
        <div></div>
        <address></address>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
