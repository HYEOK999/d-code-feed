import React from 'react';
import { StyledMainText, StyledFeedTagBox } from './Styles';
import { v4 as uuidv4 } from 'uuid';

const FeedDetailContent = React.memo(({ feed }) => {
  return (
    <>
      <StyledMainText>{feed && feed.text}</StyledMainText>
      <StyledFeedTagBox>
        {feed && feed.tags.map(tag => <span key={uuidv4()}>{`#${tag}`}</span>)}
      </StyledFeedTagBox>
    </>
  );
});

export default FeedDetailContent;
