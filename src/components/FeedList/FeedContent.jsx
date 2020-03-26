import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { StyledButton, StyledFeedImg, StyledFeedTagBox, StyledFeedContent } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedContent = React.memo(({ id, url, tags, text }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton role="link" onClick={() => dispatch(push(`/feed/${id}`))}>
      <StyledFeedImg src={url} alt="images" />
      <StyledFeedTagBox>
        {tags.map(tag => (
          <span key={uuidv4()}>{`#${tag}`}</span>
        ))}
      </StyledFeedTagBox>
      <StyledFeedContent>{text}</StyledFeedContent>
    </StyledButton>
  );
});

export default FeedContent;
