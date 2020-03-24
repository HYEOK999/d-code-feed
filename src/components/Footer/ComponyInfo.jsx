import React from 'react';
import {
  StyledComponyInfoWrapper,
  StyledCopyright,
  StyledFlexWrapper,
  StyledAddress,
  StyledPayDescription,
} from './Styles';

const ComponyInfo = () => {
  return (
    <section>
      <StyledComponyInfoWrapper>
        <h2 className="a11y-hidden">디코드 회사 정보</h2>
        <StyledCopyright>&copy; 2019 N.CODE, Inc. All Rights Reserved</StyledCopyright>
        <StyledFlexWrapper>
          <StyledAddress>
            <span>(주)엔코드 대표 정준영 | 서울시 강남구 삼성로 81길 31</span>
            <span>
              통신판매업신고번호 2016-서울강남-03628 | 등록번호 260-86-00101{' '}
              <a target="__blink" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2608600101">
                사업자정보확인
              </a>
            </span>
            <span>개인정보보호책임자 조용석 | 고객센터 전화문의 02-6204-0617</span>
            <span>FAX 02-6499-0617 | E-mail contact@itsdcode.com</span>
          </StyledAddress>
          <StyledPayDescription>
            <p>
              안전거래를 위해 결제 시 저희 쇼핑몰에서 가입한 KG이니시스의 구매안전 서비스
              <br />
              (채무지급보증)를 이용하실 수 있습니다
            </p>
            <img src="/logo/INIPAY-logo.png" alt="KG이니시스 이미지" />
          </StyledPayDescription>
        </StyledFlexWrapper>
      </StyledComponyInfoWrapper>
    </section>
  );
};

export default ComponyInfo;
