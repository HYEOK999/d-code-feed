import React from 'react';
import styled from 'styled-components';

const StyledLikeArea = styled.div`
  position: absolute;
  right: 0;
  top: 25%;

  p {
    font-size: 12px;
    color: #7f8185;
    text-align: center;
  }

  &.list {
    z-index: 99;
    top: 2rem;
    right: 2rem;

    p {
      color: #fff;
    }
  }
`;

export const StyledLikeButton = styled.button`
  background: transparent;
  border: none;
  cursor: default;
  outline: none;
  width: 50px;
  height: 50px;
  border: 1px solid #c1c2c4;
  border-radius: 50%;

  div {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 100px;
    height: 100px;
    background: url('/heart.png') no-repeat;
    background-position: 0 0;
    transition: background-position 1s steps(28);
    transition-duration: 0s;

    &.is-active {
      transition-duration: 1s;
      background-position: -2800px 0;
    }
  }
  &.list {
    div {
      transform: translate(-50%, -57%);
    }
  }
`;

const Like = React.memo(({ feed, setFeedLike, feeds, feedId, list }) => {
  function likeToggle({ target }) {
    if (target.tagName !== 'DIV') {
      if (feed.like) {
        setFeedLike(feeds, +feedId, -1);
      } else {
        setFeedLike(feeds, +feedId, 1);
      }
    }
  }

  return (
    <>
      <StyledLikeArea className={list && 'list'}>
        <StyledLikeButton className={list && 'list'} onClick={e => likeToggle(e)}>
          <div className={feed && feed.like ? 'is-active' : ''} />
        </StyledLikeButton>
        <p>{feed && feed.likedCount ? feed.likedCount : '0'}</p>
      </StyledLikeArea>
    </>
  );
});

export default Like;
