import React, { useState, useRef } from 'react';
import {
  StyledSmall,
  StyledMdName,
  StyledCreatedDay,
  StyledLikeArea,
  StyledLikeButton,
} from './Styles';

const FeedDetailHeader = ({ feed, setFeedLike, feedId, feeds }) => {
  const [likeState, setLikeState] = useState(false);
  const likeRef = useRef();

  function likeToggle({ target }) {
    if (target.tagName !== 'DIV') {
      if (likeState) {
        setFeedLike(feeds, +feedId, -1);
      } else {
        setFeedLike(feeds, +feedId, 1);
      }
      setLikeState(!likeState);
    }
  }

  return (
    <header>
      <h3>{feed && feed.text.split('\n　\n')[0]}</h3>
      <StyledSmall>
        <StyledMdName>{feed && feed.mdInfo.mdName.toUpperCase()}</StyledMdName>
        <StyledCreatedDay>{feed && feed.createdAt.split(' ')[0]}</StyledCreatedDay>
      </StyledSmall>
      <StyledLikeArea>
        <StyledLikeButton onClick={e => likeToggle(e)}>
          <div className={likeState ? 'is-active' : ''} ref={likeRef} />
        </StyledLikeButton>
        <p>{feed && feed.likedCount ? feed.likedCount : '0'}</p>
      </StyledLikeArea>
    </header>
  );
};

export default FeedDetailHeader;
