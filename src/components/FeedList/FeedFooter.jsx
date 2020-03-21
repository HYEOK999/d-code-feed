import React from 'react';
import { HeartIcon, CommentAltIcon, LinkIcon, FacebookIcon } from '../Icons';
import { StyledFeedFooter, StyledFeedMdInfo, StyledCountSpan, StyledShareButton } from './Styles';

const FeedFooter = ({ feed }) => {
  return (
    <StyledFeedFooter>
      <StyledFeedMdInfo>
        <img src={feed.mdInfo.mdThumb} alt="MD 사진" />
        <figcaption>MD : {feed.mdInfo.mdName}</figcaption>
      </StyledFeedMdInfo>
      <span>{feed.createdAt.split(' ')[0]}</span>
      <div>
        <HeartIcon />
        <StyledCountSpan>{feed.likedCount ? feed.likedCount : '0'}</StyledCountSpan>
        <CommentAltIcon />
        <StyledCountSpan>{feed.replyCount ? feed.replyCount : '0'}</StyledCountSpan>
        <LinkIcon />
        <StyledCountSpan>{feed.sharedCount ? feed.sharedCount : '0'}</StyledCountSpan>
      </div>
      <StyledShareButton id={feed.id}>
        <FacebookIcon />
        <span>공유하기</span>
      </StyledShareButton>
    </StyledFeedFooter>
  );
};

export default FeedFooter;
