import React from 'react';
import {
  StyledSmall,
  StyledMdName,
  StyledCreatedDay,
  // StyledLikeArea,
  // StyledLikeButton,
} from './Styles';
import Like from '../Like';

const FeedDetailHeader = ({ feed, setFeedLike, feedId, feeds }) => {
  // function likeToggle({ target }) {
  //   if (target.tagName !== 'DIV') {
  //     if (feed.like) {
  //       setFeedLike(feeds, +feedId, -1);
  //     } else {
  //       setFeedLike(feeds, +feedId, 1);
  //     }
  //   }
  // }

  return (
    <header>
      <h3>{feed && feed.text.split('\n　\n')[0]}</h3>
      <StyledSmall>
        <StyledMdName>{feed && feed.mdInfo.mdName.toUpperCase()}</StyledMdName>
        <StyledCreatedDay>{feed && feed.createdAt.split(' ')[0]}</StyledCreatedDay>
      </StyledSmall>
      <Like feed={feed} feeds={feeds} feedId={feedId} setFeedLike={setFeedLike} />
      {/* <StyledLikeArea>
        <StyledLikeButton onClick={e => likeToggle(e)}>
          <div className={feed && feed.like ? 'is-active' : ''} />
        </StyledLikeButton>
        <p>{feed && feed.likedCount ? feed.likedCount : '0'}</p>
      </StyledLikeArea> */}
    </header>
  );
};

export default FeedDetailHeader;
