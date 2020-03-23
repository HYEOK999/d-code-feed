import React from 'react';
import { Link } from 'react-router-dom';
import { AppStoreIcon, PlayStoreIcon } from '../Icons';
import { StyledServiceUl, StyledSNSLinkMenu, StyledStoreLinkMenu } from './Styles';

const Service = () => {
  return (
    <section>
      <h2 className="a11y-hidden">서비스 메뉴</h2>
      <StyledServiceUl>
        <li>
          <p>빠른 메뉴</p>
          <Link to="/">엔코드</Link>
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          <p>고객센터 02-6204-0617</p>
          <Link to="/mypage/company/chat">1:1 채팅문의</Link>
          <Link to="/mypage/company/terms">이용약관</Link>
          <Link to="/mypage/company/privacy">개인정보처리방침</Link>
        </li>
        <li>
          <p>ABOUT D.CODE</p>
          <Link to="/dcode-introduce">디코드 소개</Link>
        </li>
        <StyledSNSLinkMenu>
          <p>SOCIAL</p>
          <a
            target="__blink"
            href="https://business.facebook.com/itsdcode/?business_id=1642748722674826"
            rel="noopener noreferrer"
          >
            <img src="/logo/Facebook-logo.png" alt="페이스북 바로가기" />
          </a>
          <a
            target="__blink"
            href="https://www.instagram.com/d.code_official/?hl=ko"
            rel="noopener noreferrer"
          >
            <img src="/logo/Instagram-logo.png" alt="인스타그램 바로가기" />
          </a>
          <a target="__blink" href="https://blog.naver.com/itsdcode" rel="noopener noreferrer">
            <img src="/logo/Naver-logo.png" alt="네이버 바로가기" />
          </a>
          <a target="__blink" href="https://brunch.co.kr/@zskeem" rel="noopener noreferrer">
            <img src="/logo/Brunch-logo.png" alt="브런치 바로가기" />
          </a>
        </StyledSNSLinkMenu>
        <StyledStoreLinkMenu>
          <p>Application</p>
          <a
            target="__blink"
            href="https://apps.apple.com/app/id1076296181?cid=196866160_60480027088&ck=7543703&sn=60480027088&utm_campaign=iOS&utm_medium=button&utm_source=homepage"
            rel="noopener noreferrer"
          >
            <AppStoreIcon />
            <span>앱 스토어</span>
          </a>
          <a
            target="__blink"
            href="https://play.google.com/store/apps/details?id=com.ncode.dcode.android&referrer=ck%3d2758032%26sn%3d110364457509%26cid%3d778886134_110364457509%26utm_source%3dhomepage%26utm_medium%3dbutton%26utm_campaign%3dAndroid"
            rel="noopener noreferrer"
          >
            <PlayStoreIcon />
            <span>플레이 스토어</span>
          </a>
        </StyledStoreLinkMenu>
      </StyledServiceUl>
    </section>
  );
};

export default Service;
