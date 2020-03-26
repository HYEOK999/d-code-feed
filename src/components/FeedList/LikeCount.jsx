import React from 'react';
import { StyledCountSpan } from './Styles';

const LikeCount = ({ feed }) => {
  return (
    <>
      <StyledCountSpan>{feed.likedCount ? feed.likedCount : '0'}</StyledCountSpan>
    </>
  );
};

export default LikeCount;
