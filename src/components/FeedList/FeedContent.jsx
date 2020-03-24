import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { StyledButton, StyledFeedImg, StyledFeedTagBox, StyledFeedContent } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedContent = ({ feed }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton role="link" onClick={() => dispatch(push(`/feed/${feed.id}`))}>
      <StyledFeedImg src={feed.mediaList[0].url} alt="images" />
      <StyledFeedTagBox>
        {feed.tags.map(tag => (
          <span key={uuidv4()}>{`#${tag}`}</span>
        ))}
      </StyledFeedTagBox>
      <StyledFeedContent>{feed.text}</StyledFeedContent>
    </StyledButton>
  );
};

export default FeedContent;
