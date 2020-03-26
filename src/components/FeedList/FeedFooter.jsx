import React from 'react';
import { HeartIcon, CommentAltIcon, LinkIcon, FacebookIcon } from '../Icons';
import { StyledFeedFooter, StyledFeedMdInfo, StyledCountSpan, StyledShareButton } from './Styles';

const FeedFooter = React.memo(({ mdThumb, mdName, createdAt, id, count }) => {
  return (
    <StyledFeedFooter>
      <StyledFeedMdInfo>
        <img src={mdThumb} alt="MD 사진" />
        <figcaption>MD : {mdName}</figcaption>
      </StyledFeedMdInfo>
      <span>{createdAt}</span>
      <div>
        <HeartIcon />
        <StyledCountSpan>{count[0] ? count[0] : '0'}</StyledCountSpan>
        <CommentAltIcon />
        <StyledCountSpan>{count[1] ? count[1] : '0'}</StyledCountSpan>
        <LinkIcon />
        <StyledCountSpan>{count[2] ? count[2] : '0'}</StyledCountSpan>
      </div>
      <StyledShareButton id={id}>
        <FacebookIcon />
        <span>공유하기</span>
      </StyledShareButton>
    </StyledFeedFooter>
  );
});

export default FeedFooter;
