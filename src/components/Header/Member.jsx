import React from 'react';
import { StyledMember } from './Styles';
import { Link } from 'react-router-dom';

const Member = () => {
  return (
    <StyledMember>
      <li>
        <Link to="/sign-in">로그인</Link>
      </li>
      <li>
        <Link to="/sign-up">회원가입</Link>
      </li>
      <li>
        <Link to="/service-center">고객센터</Link>
      </li>
    </StyledMember>
  );
};

export default Member;
